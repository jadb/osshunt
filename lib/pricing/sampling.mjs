import { validateLandingUrl } from '../history/archive.mjs';
import * as defaultArchive from './archive.mjs';
import { EXTRACTOR_VERSION } from './extract.mjs';
import { bodyIdentity } from './service.mjs';
import { pricingTargetInScope } from './scope.mjs';
import {
  samplingInputs,
  assertRecord,
  samplingProposal,
  validateSavedSampling,
  iso,
  sampleError,
  host,
} from './sampling-support.mjs';
const headersAllowed = [
  'content-type',
  'content-length',
  'content-encoding',
  'memento-datetime',
  'x-archive-orig-transfer-encoding',
  'x-archive-orig-content-encoding',
  'x-archive-orig-digest',
  'x-archive-src',
  'retry-after',
];
const transportError = (code) => ['archive_unavailable', 'archive_timeout', 'network_error'].includes(code);
export async function samplePricingBatch({
  catalog,
  ids,
  from,
  cutoff,
  store,
  journal,
  save,
  fetchImpl = fetch,
  clock = Date.now,
  sleepImpl = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  delayMs = 10000,
  maxCandidates = 2,
  archive = defaultArchive,
  extractor,
  discoverLinks,
  baselineFingerprint,
}) {
  if (typeof save !== 'function' || typeof discoverLinks !== 'function' || !Number.isFinite(delayMs) || delayMs < 0)
    throw Error('Invalid sampler dependencies/delay');
  const validated = await samplingInputs({ catalog, ids, from, cutoff, maxCandidates, extractor, baselineFingerprint });
  if (
    journal &&
    (journal.version !== 1 ||
      JSON.stringify(journal.inputs) !== JSON.stringify(validated.inputs) ||
      journal.baselineFingerprint !== validated.baselineFingerprint ||
      journal.extractorVersion !== EXTRACTOR_VERSION)
  )
    throw Error('Journal inputs or parser baseline changed');
  const state = journal
    ? structuredClone(journal)
    : {
        version: 1,
        inputs: validated.inputs,
        extractorVersion: EXTRACTOR_VERSION,
        baselineFingerprint: validated.baselineFingerprint,
        startedAt: iso(clock()),
        finishedAt: null,
        stopped: null,
        requests: [],
        products: validated.products.map((p) => ({
          id: p.id,
          scope: p.scope || { edition: null, deployment: 'unknown' },
          status: 'pending',
          stage: 'landing-query',
          done: false,
          reservation: null,
          landingLookup: null,
          landing: null,
          candidates: null,
          candidateIndex: 0,
          candidateResults: [],
          proposal: null,
          errorCode: null,
          outboundAttempts: 0,
        })),
      };
  validateSavedSampling(state, validated.products, validated.inputs);
  const persist = async () => {
    try {
      await save(structuredClone(state));
    } catch (cause) {
      throw Object.assign(sampleError('journal_write_failed', 'Cannot persist sampling journal'), { cause });
    }
  };
  if (state.products.every((p) => p.done)) return state;
  state.stopped = null;
  await persist();
  let failures = 0;
  for (const product of validated.products) {
    const row = state.products.find((p) => p.id === product.id);
    if (row.done) continue;
    let token = null,
      prior = null,
      hadOutbound = false;
    const release = async () => {
      if (token) {
        if (!(await store.checkpoint(product.id, token, row.reservation.checkpoint, { release: true })))
          throw sampleError('reservation_lost', 'Sampler lease lost');
        token = null;
      }
    };
    const delay = async () => Math.max(0, (await store.archiveRetryAt()) - clock());
    const source = async (stage, url, action) => {
      const previous = state.requests.at(-1);
      if (previous) {
        const wait = delayMs - (clock() - Date.parse(previous.startedAt));
        if (wait > 0) await sleepImpl(wait);
      }
      const wait = await delay();
      if (wait > 0)
        throw Object.assign(sampleError('archive_rate_limited', 'Shared archive cooldown'), {
          retryAfter: Math.ceil(wait / 1000),
          prefetch: true,
        });
      row.stage = stage;
      await persist();
      const before = state.requests.length;
      const audited = async (target, options) => {
        const pause = await delay();
        if (pause > 0)
          throw Object.assign(sampleError('archive_rate_limited', 'Shared archive cooldown'), {
            retryAfter: Math.ceil(pause / 1000),
            prefetch: true,
          });
        if (new URL(target).origin !== 'https://web.archive.org')
          throw sampleError('unsafe_url', 'Only Archive requests permitted');
        const started = clock(),
          attempt = {
            productId: product.id,
            stage,
            url: String(target),
            startedAt: iso(started),
            finishedAt: null,
            status: null,
            elapsedMs: null,
            headers: {},
          };
        state.requests.push(attempt);
        row.outboundAttempts++;
        hadOutbound = true;
        await persist();
        try {
          const response = await fetchImpl(target, options);
          attempt.status = response.status;
          for (const key of headersAllowed) {
            const value = response.headers.get(key);
            if (value) attempt.headers[key] = value.slice(0, 1024);
          }
          return response;
        } catch (error) {
          attempt.errorCode = error.code || 'network_error';
          throw error;
        } finally {
          attempt.finishedAt = iso(clock());
          attempt.elapsedMs = Math.max(0, clock() - started);
          await persist();
        }
      };
      try {
        const result = await action(audited);
        if (state.requests.length === before) {
          hadOutbound = true;
          row.outboundAttempts++;
          state.requests.push({
            productId: product.id,
            stage,
            url: result?.query?.url || url,
            startedAt: iso(clock()),
            finishedAt: iso(clock()),
            status: 200,
            elapsedMs: 0,
            headers: {},
            injectedArchive: true,
          });
          await persist();
        }
        return result;
      } catch (error) {
        if (!error.code) error.code = 'network_error';
        if (!error.prefetch && state.requests.length === before) {
          hadOutbound = true;
          row.outboundAttempts++;
          state.requests.push({
            productId: product.id,
            stage,
            url,
            startedAt: iso(clock()),
            finishedAt: iso(clock()),
            status: error.code === 'archive_rate_limited' ? 429 : null,
            elapsedMs: 0,
            headers: {},
            errorCode: error.code || 'network_error',
            injectedArchive: true,
          });
          await persist();
        }
        throw error;
      }
    };
    const body = async (record, stage) => {
      const bounds =
        stage === 'landing-body'
          ? { ...validated.inputs, originalUrl: product.url }
          : {
              from: iso(Date.parse(row.landing.capturedAt) - 30 * 86400000),
              cutoff: row.landing.capturedAt,
              originalUrl: row.candidates[row.candidateIndex].url,
            };
      assertRecord(record, product, bounds);
      const identity = bodyIdentity(record),
        cached = await store.getBody(identity);
      row.cacheEvents ||= [];
      row.cacheEvents.push({ stage, identity, hit: !!cached, at: iso(clock()) });
      await persist();
      if (cached) {
        const integrity = await defaultArchive.verifyHtmlEvidence(cached.bytes, record, cached.metadata);
        row.cacheHits = (row.cacheHits || 0) + 1;
        await persist();
        return { ...cached, metadata: { ...cached.metadata, integrity } };
      }
      const fetched = await source(stage, defaultArchive.archiveUrl(record), (fetcher) =>
        archive.fetchHtml(record, { fetchImpl: fetcher, clock }),
      );
      await defaultArchive.verifyHtmlEvidence(fetched.bytes, record, fetched.metadata);
      const stored = await store.putBody(identity, fetched.bytes, fetched.metadata),
        integrity = await defaultArchive.verifyHtmlEvidence(stored.bytes, record, stored.metadata);
      return { ...stored, metadata: { ...stored.metadata, integrity } };
    };
    try {
      if ((await delay()) > 0) {
        row.status = 'pending';
        state.stopped = 'archive_cooldown';
        await persist();
        break;
      }
      const existing = await store.read(product.id);
      if (row.reservation) {
        if (
          !existing ||
          existing.checkedAt !== row.reservation.checkedAt ||
          JSON.stringify(existing.checkpoint) !== JSON.stringify(row.reservation.checkpoint)
        ) {
          row.status = 'gated';
          row.errorCode = 'production_checkpoint_changed';
          row.done = true;
          await persist();
          continue;
        }
        const resumed = await store.resumeSample(product.id, row.reservation.checkedAt, iso(clock()), {
          leaseMs: 600000,
          expectedCheckpoint: row.reservation.checkpoint,
        });
        if (!resumed) {
          row.status = 'lease_busy';
          state.stopped = 'lease_busy';
          await persist();
          break;
        }
        token = resumed.token;
        prior = row.reservation.previous;
      } else {
        if (
          existing &&
          (Date.parse(existing.nextCheckAt) > clock() ||
            existing.leaseUntil > clock() ||
            (existing.checkpoint && !existing.checkpoint.complete))
        ) {
          row.status = 'gated';
          row.done = true;
          row.errorCode = 'pricing_cadence';
          await persist();
          continue;
        }
        const reserved = await store.reserve(product.id, iso(clock()), { leaseMs: 600000 });
        if (!reserved) {
          row.status = 'gated';
          row.done = true;
          row.errorCode = 'pricing_cadence';
          await persist();
          continue;
        }
        token = reserved.token;
        prior = existing;
        row.reservation = {
          checkedAt: reserved.checkedAt,
          nextCheckAt: reserved.nextCheckAt,
          checkpoint: reserved.checkpoint,
          previous: existing,
        };
        await persist();
      }
      row.status = 'sampling';
      row.errorCode = null;
      if (!row.landingLookup) {
        const lookup = await source('landing-query', product.url, (fetcher) =>
          archive.queryLatestHtml(product.url, {
            from: validated.inputs.from,
            cutoff: validated.inputs.cutoff,
            fetchImpl: fetcher,
          }),
        );
        assertRecord(lookup.record, product, validated.inputs);
        if (lookup.record && host(lookup.record.originalUrl) !== host(product.url))
          throw sampleError('archive_bad_response', 'Landing source host changed');
        row.landingLookup = lookup;
        row.landing = lookup.record;
        await persist();
      }
      if (!row.landing) {
        row.status = 'missing_landing';
        row.done = true;
      } else {
        const landing = await body(row.landing, 'landing-body');
        row.landingMetadata = landing.metadata;
        if (!row.candidates) {
          row.stage = 'links';
          row.discoveredCandidates = discoverLinks(new TextDecoder().decode(landing.bytes), {
            landingUrl: row.landing.originalUrl,
            allowedHosts: product.allowedHosts || [],
            hints: product.pricingHints || [],
            productName: product.name,
            productPaths: product.productPaths,
          });
          row.rejectedCandidates = row.discoveredCandidates.filter((candidate) => {
            try {
              validateLandingUrl(candidate.url);
              return !pricingTargetInScope(product, candidate.url);
            } catch {
              return true;
            }
          });
          row.candidates = row.discoveredCandidates
            .filter((candidate) => {
              try {
                validateLandingUrl(candidate.url);
                return pricingTargetInScope(product, candidate.url);
              } catch {
                return false;
              }
            })
            .slice(0, maxCandidates);
          await persist();
        }
        if (!row.candidates.length) {
          row.status = row.discoveredCandidates.length ? 'wrong_scope' : 'missing_pricing';
          row.done = true;
        }
        for (; !row.done && row.candidateIndex < row.candidates.length; row.candidateIndex++) {
          const candidate = row.candidates[row.candidateIndex];
          if (!pricingTargetInScope(product, candidate.url))
            throw sampleError('unsafe_url', 'Pricing source left product scope');
          let outcome = row.candidateResults[row.candidateIndex];
          if (!outcome) {
            outcome = { candidate, lookup: null, status: 'pending' };
            row.candidateResults.push(outcome);
            await persist();
          }
          if (['error', 'missing_pricing', 'extraction_unavailable'].includes(outcome.status)) continue;
          try {
            if (!outcome.lookup) {
              const bounds = {
                from: iso(Date.parse(row.landing.capturedAt) - 30 * 86400000),
                cutoff: row.landing.capturedAt,
              };
              const lookup = await source('pricing-query', candidate.url, (fetcher) =>
                archive.queryLatestHtml(candidate.url, { ...bounds, fetchImpl: fetcher }),
              );
              assertRecord(lookup.record, product, bounds);
              if (lookup.record && host(lookup.record.originalUrl) !== host(candidate.url))
                throw sampleError('archive_bad_response', 'Pricing source host changed');
              outcome.lookup = lookup;
              await persist();
            }
            if (!outcome.lookup.record) {
              outcome.status = 'missing_pricing';
              await persist();
              continue;
            }
            const selected = outcome.lookup.record,
              pricing = await body(selected, 'pricing-body');
            outcome.metadata = pricing.metadata;
            row.stage = 'extraction';
            await persist();
            const extracted = extractor(new TextDecoder().decode(pricing.bytes), { originalUrl: selected.originalUrl });
            outcome.extracted = extracted;
            if (!extracted.plans?.length) {
              outcome.status = 'extraction_unavailable';
              await persist();
              continue;
            }
            row.proposal = await samplingProposal(product, row, candidate, selected, pricing.metadata, extracted);
            outcome.status = 'review_pending';
            row.status = 'review_pending';
            row.done = true;
            await persist();
          } catch (error) {
            if (['archive_rate_limited', 'journal_write_failed', 'sample_interrupted'].includes(error.code))
              throw error;
            outcome.status = 'error';
            outcome.errorCode = error.code || 'extraction_error';
            outcome.error = error.message;
            await persist();
          }
        }
        if (!row.done) {
          row.status = row.candidateResults.some((v) => v.status === 'extraction_unavailable')
            ? 'extraction_unavailable'
            : row.candidateResults.some((v) => v.status === 'missing_pricing')
              ? 'missing_pricing'
              : 'error';
          if (row.status === 'error')
            row.errorCode =
              row.candidateResults.find((v) => !transportError(v.errorCode))?.errorCode ||
              row.candidateResults.at(-1)?.errorCode;
          row.done = true;
        }
      }
      row.stage = 'complete';
      row.finishedAt = iso(clock());
      await persist();
      await release();
      failures = row.status === 'error' && transportError(row.errorCode) ? failures + 1 : 0;
      if (failures >= 3) {
        state.stopped = 'consecutive_failures';
        await persist();
        break;
      }
    } catch (error) {
      const code = error.code || 'sampling_error';
      if (['journal_write_failed', 'sample_interrupted'].includes(code)) {
        await release();
        throw error;
      }
      row.errorCode = code;
      if (code === 'archive_rate_limited') {
        const until = await store.deferArchive(clock() + Math.max(3600, Number(error.retryAfter) || 0) * 1000);
        row.status = 'archive_cooldown';
        row.retryAt = iso(until);
        state.stopped = 'archive_cooldown';
        if (token && !hadOutbound && row.outboundAttempts === 0) {
          if (!(await store.cancel(product.id, token, prior)))
            throw sampleError('reservation_lost', 'Cannot restore unused reservation');
          token = null;
          row.reservation = null;
          row.status = 'pending';
        } else await release();
        await persist();
        break;
      }
      row.status = 'error';
      row.done = true;
      row.finishedAt = iso(clock());
      row.error = error.message;
      await release();
      await persist();
      failures = transportError(code) ? failures + 1 : 0;
      if (failures >= 3) {
        state.stopped = 'consecutive_failures';
        await persist();
        break;
      }
    }
  }
  if (state.products.every((p) => p.done)) {
    state.finishedAt = iso(clock());
    state.stopped = null;
  }
  await persist();
  return state;
}
