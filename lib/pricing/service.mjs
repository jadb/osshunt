import { serializedCheckpoint } from './checkpoint.mjs';
import * as defaultArchive from './archive.mjs';
import { validateLandingUrl } from '../history/archive.mjs';
import { addSixMonths, historicalAnchors, selectAtOrBefore } from './calendar.mjs';
const json = (value, status = 200, headers = {}) =>
  Response.json(value, { status, headers: { 'Cache-Control': 'no-store', ...headers } });
const error = (code, message, status = 503) => Object.assign(new Error(message), { code, status });
const iso = (ms) => new Date(ms).toISOString();
const MAX_RECORDS = 1500,
  MAX_QUERIES = 1000,
  REQUEST_BUDGET = 3;
export const COVERAGE_STATUSES = [
  'awaiting_discovery',
  'archive_cooldown',
  'incomplete_inventory',
  'missing_landing',
  'missing_pricing',
  'wrong_scope',
  'extraction_unavailable',
  'review_pending',
  'confirmed',
  'no_commercial_offer',
  'sampling_gap',
  'archive_unavailable',
  'inventory_limit',
];
async function emptyBody(request) {
  if (!request.body) return;
  const reader = request.body.getReader();
  let timer;
  try {
    await Promise.race([
      (async () => {
        for (let n = 0; n < 16; n++) {
          const part = await reader.read();
          if (part.done) return;
          if (part.value?.byteLength) throw error('unsupported_options', 'Refresh does not accept options', 400);
        }
        throw error('unsupported_options', 'Refresh does not accept options', 400);
      })(),
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(error('unsupported_options', 'Refresh does not accept options', 400)), 1000);
      }),
    ]);
  } finally {
    clearTimeout(timer);
    void reader.cancel().catch(() => {});
  }
}
export const bodyIdentity = (record) => `${record.originalUrl}|${record.timestamp}|${record.digest || '-'}`;
function queryState(url, cutoff, from = null, records = []) {
  return { url, cutoff, from, resumeKey: null, seenKeys: [], complete: false, records };
}
function freshState(product, at, previous) {
  return {
    version: 1,
    cutoff: at,
    initial: !previous?.historicalComplete,
    phase: 'landing-index',
    landingQuery: queryState(
      product.url,
      at,
      previous?.historicalComplete ? previous.cutoff : null,
      previous?.landingQuery?.records || [],
    ),
    anchors: [],
    anchorIndex: 0,
    active: null,
    coverage: previous?.coverage || [],
    proposals: previous?.proposals || [],
    queries: [],
    complete: false,
    historicalComplete: false,
    errorCode: null,
    retryAt: 0,
  };
}
export function createPricingService({
  catalog,
  store,
  fetchImpl = fetch,
  clock = Date.now,
  extractor,
  discoverLinks,
  confirmed = [],
  archive = defaultArchive,
}) {
  if (!Array.isArray(catalog) || typeof extractor !== 'function' || typeof discoverLinks !== 'function')
    throw new TypeError('Pricing catalog and extractors required');
  const products = new Map(),
    jobs = new Map();
  for (const product of catalog) {
    if (!/^[a-zA-Z0-9_-]+$/.test(product.id) || products.has(product.id)) throw new TypeError('Invalid catalog ID');
    validateLandingUrl(product.url);
    products.set(product.id, product);
  }
  const confirmedFor = (id) =>
    confirmed.filter((o) => o.productId === id && o.reviewState === 'confirmed' && o.review?.decision === 'confirmed');
  function manifest(product, record) {
    const state = record?.checkpoint,
      observations = confirmedFor(product.id),
      ids = new Set(observations.map((o) => o.id));
    const coverage = (state?.coverage || []).map((item) => ({
      ...item,
      status: ids.has(item.observationId) ? 'confirmed' : item.status,
    }));
    let status = state?.complete
      ? coverage.some((c) => c.status === 'review_pending')
        ? 'review_pending'
        : coverage.at(-1)?.status || 'missing_landing'
      : 'incomplete_inventory';
    if (!record) status = 'awaiting_discovery';
    if (observations.length && state?.complete) status = 'confirmed';
    if (state?.errorCode === 'inventory_limit') status = 'inventory_limit';
    return {
      product: { id: product.id, name: product.name, url: product.url, kind: product.kind },
      status,
      observations,
      coverage,
      checkedAt: record?.checkedAt || null,
      nextCheckAt: record?.nextCheckAt || null,
      errorCode: state?.errorCode || null,
      retryAfter: state?.retryAt > clock() ? Math.ceil((state.retryAt - clock()) / 1000) : null,
      retryAt: state?.retryAt > clock() ? iso(state.retryAt) : null,
      incomplete: !!record && !state?.complete,
    };
  }
  async function delay() {
    return Math.max(0, Math.ceil(((await store.archiveRetryAt()) - clock()) / 1000));
  }
  async function run(product) {
    const wait = await delay();
    if (wait) return { record: await store.read(product.id), status: 429, cooldown: wait };
    const priorRecord = await store.read(product.id);
    const at = iso(clock());
    let reservation = await store.resume(product.id, at),
      continuation = !!reservation;
    if (!reservation) reservation = await store.reserve(product.id, at);
    if (!reservation) return { record: await store.read(product.id) };
    let state =
      continuation && reservation.checkpoint
        ? reservation.checkpoint
        : freshState(product, reservation.checkedAt, reservation.checkpoint);
    let requests = 0;
    let lastSaved = structuredClone(state);
    const save = async (release) => {
      serializedCheckpoint(state, 480 * 1024);
      if (!(await store.checkpoint(product.id, reservation.token, state, { release })))
        throw error('reservation_lost', 'Pricing continuation lease lost');
      lastSaved = structuredClone(state);
    };
    const network = async (action) => {
      if (requests >= REQUEST_BUDGET) return null;
      const wait = await delay();
      if (wait) throw Object.assign(error('archive_rate_limited', 'Archive cooldown active'), { retryAfter: wait });
      requests++;
      return action();
    };
    async function page(query) {
      const result = await network(() =>
        archive.queryHtmlPage(query.url, {
          cutoff: query.cutoff,
          from: query.from,
          resumeKey: query.resumeKey,
          fetchImpl,
        }),
      );
      if (!result) return false;
      if (state.queries.length >= MAX_QUERIES) throw error('inventory_limit', 'Pricing query limit reached');
      state.queries.push(result.query);
      const seen = new Map(query.records.map((r) => [bodyIdentity(r), r]));
      for (const r of result.records) seen.set(bodyIdentity(r), r);
      if (seen.size > MAX_RECORDS) throw error('inventory_limit', 'Pricing inventory limit reached');
      query.records = [...seen.values()].sort(
        (a, b) => a.capturedAt.localeCompare(b.capturedAt) || a.originalUrl.localeCompare(b.originalUrl),
      );
      if (result.resumeKey && (query.seenKeys.includes(result.resumeKey) || result.resumeKey === query.resumeKey))
        throw error('archive_incomplete', 'Repeated pricing archive cursor');
      if (result.resumeKey) query.seenKeys.push(result.resumeKey);
      query.resumeKey = result.resumeKey;
      query.complete = result.complete;
      await save(false);
      return true;
    }
    async function body(record) {
      const id = bodyIdentity(record),
        existing = await store.getBody(id);
      if (existing) {
        await defaultArchive.verifyHtmlIntegrity(existing.bytes, record.digest);
        return existing;
      }
      const result = await network(() => archive.fetchHtml(record, { fetchImpl, clock }));
      if (!result) return null;
      await defaultArchive.verifyHtmlIntegrity(result.bytes, record.digest);
      return store.putBody(id, result.bytes, result.metadata);
    }
    const coverage = (anchorAt, status, extra = {}) => {
      state.coverage.push({ anchorAt, status, candidateFailures: state.active?.candidateFailures || [], ...extra });
      state.anchorIndex++;
      state.active = null;
    };
    try {
      await save(false);
      while (requests < REQUEST_BUDGET) {
        if (state.phase === 'landing-index') {
          if (!state.landingQuery.complete) {
            if (!(await page(state.landingQuery))) break;
            continue;
          }
          state.anchors = state.initial
            ? historicalAnchors(state.landingQuery.records, state.cutoff)
            : [state.landingQuery.records.at(-1)?.capturedAt || state.cutoff];
          if (!state.anchors.length) state.coverage.push({ anchorAt: state.cutoff, status: 'missing_landing' });
          state.phase = 'anchors';
          await save(false);
          continue;
        }
        if (state.anchorIndex >= state.anchors.length) {
          state.phase = 'complete';
          state.complete = true;
          state.historicalComplete = true;
          state.errorCode = null;
          await store.finish(product.id, reservation.token, state);
          return { record: await store.read(product.id) };
        }
        const anchorAt = state.anchors[state.anchorIndex];
        if (!state.active) {
          const landing = selectAtOrBefore(state.landingQuery.records, anchorAt);
          if (!landing) {
            coverage(anchorAt, 'missing_landing');
            await save(false);
            continue;
          }
          state.active = { anchorAt, landing, candidates: null, candidateIndex: 0, pricingQuery: null };
          await save(false);
        }
        const active = state.active;
        active.candidateFailures ||= [];
        const skipCandidate = (status) => {
          active.candidateFailures.push({ url: active.candidates[active.candidateIndex].url, status });
          active.candidateIndex++;
          active.pricingQuery = null;
        };
        if (active.candidates === null) {
          const html = await body(active.landing);
          if (!html) break;
          const links = discoverLinks(new TextDecoder().decode(html.bytes), {
            landingUrl: active.landing.originalUrl,
            allowedHosts: product.allowedHosts || [],
            hints: product.pricingHints || [],
            productName: product.name,
            productPaths: product.productPaths || [],
          });
          active.candidates = links.slice(0, 12);
          active.landingMetadata = html.metadata;
          await save(false);
          if (!active.candidates.length) {
            coverage(anchorAt, 'wrong_scope');
            await save(false);
            continue;
          }
        }
        if (active.candidateIndex >= active.candidates.length) {
          const failures = active.candidateFailures.map((f) => f.status);
          coverage(
            anchorAt,
            failures.includes('extraction_unavailable')
              ? 'extraction_unavailable'
              : failures.includes('sampling_gap')
                ? 'sampling_gap'
                : 'missing_pricing',
          );
          await save(false);
          continue;
        }
        const candidate = active.candidates[active.candidateIndex];
        if (!active.pricingQuery)
          active.pricingQuery = queryState(candidate.url, anchorAt, iso(Date.parse(anchorAt) - 30 * 86400000));
        if (!active.pricingQuery.complete) {
          if (!(await page(active.pricingQuery))) break;
          continue;
        }
        const pricing = selectAtOrBefore(active.pricingQuery.records, anchorAt);
        if (!pricing) {
          skipCandidate('missing_pricing');
          await save(false);
          continue;
        }
        const last = state.proposals
          .filter(
            (p) =>
              p.scope.edition === (product.scope?.edition || null) &&
              p.scope.deployment === (product.scope?.deployment || 'unknown'),
          )
          .sort((a, b) => a.pricingCapturedAt.localeCompare(b.pricingCapturedAt))
          .at(-1);
        if (last && Date.parse(pricing.capturedAt) < Date.parse(addSixMonths(last.pricingCapturedAt))) {
          skipCandidate('sampling_gap');
          await save(false);
          continue;
        }
        const source = await body(pricing);
        if (!source) break;
        const extracted = extractor(new TextDecoder().decode(source.bytes), { originalUrl: pricing.originalUrl });
        if (!extracted.plans?.length) {
          skipCandidate('extraction_unavailable');
          await save(false);
          continue;
        }
        const id = `pricing-${await defaultArchive.sha256(`${product.id}|${bodyIdentity(active.landing)}|${bodyIdentity(pricing)}`)}`;
        const observation = {
          id,
          productId: product.id,
          scope: product.scope || { edition: null, deployment: 'unknown' },
          anchorAt,
          landingCapturedAt: active.landing.capturedAt,
          pricingCapturedAt: pricing.capturedAt,
          evidenceAvailableAt: iso(Math.max(Date.parse(active.landing.capturedAt), Date.parse(pricing.capturedAt))),
          aliasEvidenceAt: [],
          landingUrl: active.landing.originalUrl,
          pricingUrl: pricing.originalUrl,
          landingArchiveUrl: defaultArchive.archiveUrl(active.landing),
          pricingArchiveUrl: defaultArchive.archiveUrl(pricing),
          provenance: candidate.provenance,
          discovery: { label: candidate.label, locator: candidate.locator },
          sourceSha256: source.metadata.sha256,
          landingSha256: active.landingMetadata.sha256,
          sourceDigest: pricing.digest,
          landingDigest: active.landing.digest,
          fetchedAt: source.metadata.fetchedAt,
          landingFetchedAt: active.landingMetadata.fetchedAt,
          extractorVersion: '1.0.0',
          reviewState: 'proposed',
          plans: extracted.plans,
          quality: extracted.quality,
          issues: extracted.issues,
        };
        if (!state.proposals.some((p) => p.id === id)) state.proposals.push(observation);
        coverage(anchorAt, 'review_pending', { observationId: id });
        await save(false);
      }
      state.errorCode = null;
      state.retryAt = 0;
      await save(true);
      return { record: await store.read(product.id) };
    } catch (cause) {
      const code = typeof cause.code === 'string' ? cause.code : 'archive_unavailable';
      if (code === 'archive_rate_limited' && requests === 0) {
        await store.cancel(product.id, reservation.token, priorRecord);
        return { record: await store.read(product.id), status: 429, cooldown: Number(cause.retryAfter) || 3600 };
      }
      if (code === 'inventory_limit') {
        state = structuredClone(lastSaved);
        state.complete = true;
        state.historicalComplete = false;
        state.errorCode = 'inventory_limit';
        state.retryAt = Date.parse(addSixMonths(iso(clock())));
        state.coverage.push({
          anchorAt: state.active?.anchorAt || state.cutoff,
          status: 'inventory_limit',
          errorCode: 'inventory_limit',
        });
        await store.finish(product.id, reservation.token, state, { nextCheckAt: iso(state.retryAt) });
        return { record: await store.read(product.id), status: 503 };
      }
      if (code === 'archive_incomplete') state = structuredClone(lastSaved);
      state.errorCode = code;
      // Continuations retain the original index cutoff; only a new discovery pass gets a new six-month gate.
      if (code === 'archive_rate_limited') {
        state.retryAt = await store.deferArchive(clock() + Math.max(3600, Number(cause.retryAfter) || 0) * 1000);
      } else
        state.retryAt =
          code === 'archive_incomplete'
            ? Math.max(Date.parse(reservation.nextCheckAt), clock() + 3600000)
            : clock() + 3600000;
      if (code !== 'archive_incomplete' && state.phase === 'landing-index' && !state.queries.length) {
        state.coverage.push({ anchorAt: state.cutoff, status: 'archive_unavailable', errorCode: code });
        state.complete = true;
        await store.finish(product.id, reservation.token, state);
      } else if (!(await store.checkpoint(product.id, reservation.token, state, { release: true }))) {
        throw error('reservation_lost', 'Pricing continuation lease lost');
      }
      return {
        record: await store.read(product.id),
        status: code === 'archive_rate_limited' ? 429 : 503,
        cooldown: code === 'archive_rate_limited' ? Math.ceil((state.retryAt - clock()) / 1000) : null,
      };
    }
  }
  return {
    async fetch(request) {
      try {
        const url = new URL(request.url),
          match = url.pathname.match(/^\/api\/pricing\/([a-zA-Z0-9_-]+)(?:\/(refresh))?$/),
          product = match && products.get(match[1]);
        if (!product) return json({ error: 'Product not found' }, 404);
        if (url.search) return json({ error: 'Unsupported query' }, 400);
        if (!match[2] && request.method === 'GET') return json(manifest(product, await store.read(product.id)));
        if (match[2] && request.method === 'POST') {
          await emptyBody(request);
          if (!jobs.has(product.id))
            jobs.set(
              product.id,
              run(product).finally(() => jobs.delete(product.id)),
            );
          const outcome = await jobs.get(product.id),
            result = manifest(product, outcome.record);
          if (outcome.cooldown)
            Object.assign(result, {
              status: 'archive_cooldown',
              errorCode: 'archive_rate_limited',
              retryAfter: outcome.cooldown,
              retryAt: iso(clock() + outcome.cooldown * 1000),
            });
          return json(
            result,
            outcome.status || 200,
            outcome.cooldown ? { 'Retry-After': String(outcome.cooldown) } : {},
          );
        }
        return json({ error: 'Method not allowed' }, 405, { Allow: match[2] ? 'POST' : 'GET' });
      } catch (cause) {
        return json(
          {
            error: cause.status ? cause.message : 'Pricing history temporarily unavailable',
            code: cause.code || 'pricing_unavailable',
          },
          cause.status || 503,
        );
      }
    },
  };
}
