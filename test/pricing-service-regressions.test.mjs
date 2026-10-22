import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { FilePricingStore } from '../lib/pricing/stores-file.mjs';
import { createPricingService, bodyIdentity } from '../lib/pricing/service.mjs';
const at = '2024-01-01T00:00:00.000Z',
  product = { id: 'vendor', name: 'Vendor', url: 'https://vendor.com/', kind: 'paid' };
const record = (url, date = at) => ({
  originalUrl: url,
  capturedAt: date,
  timestamp: date.replace(/[-:TZ.]/g, '').slice(0, 14),
  digest: null,
});
const refresh = () => new Request('https://local/api/pricing/vendor/refresh', { method: 'POST' });
async function fixture(action) {
  const root = await mkdtemp(join(tmpdir(), 'pricing-regression-'));
  try {
    await action(new FilePricingStore(root));
  } finally {
    await rm(root, { recursive: true });
  }
}
async function seed(store, { proposals = [], checkedAt = at } = {}) {
  const reserved = await store.reserve('vendor', checkedAt);
  await store.checkpoint(
    'vendor',
    reserved.token,
    {
      version: 1,
      cutoff: at,
      phase: 'anchors',
      complete: false,
      historicalComplete: false,
      landingQuery: { records: [record(product.url)] },
      anchors: [at],
      anchorIndex: 0,
      active: null,
      coverage: [],
      proposals,
      queries: [],
      retryAt: 0,
    },
    { release: true },
  );
}
function service(
  store,
  { firstDate = at, firstHtml = 'unsupported', secondHtml = 'valid', clock = () => Date.parse(at) } = {},
) {
  return createPricingService({
    catalog: [product],
    store,
    clock,
    discoverLinks: () => [
      { url: 'https://vendor.com/plans', label: 'Plans', locator: 'a[0]', provenance: 'archived-link' },
      { url: 'https://vendor.com/pricing', label: 'Pricing', locator: 'a[1]', provenance: 'archived-link' },
    ],
    extractor: (html) => ({
      plans: html === 'valid' ? [{ name: 'Pro', offers: [] }] : [],
      quality: html === 'valid' ? 'partial' : 'unavailable',
      issues: [],
    }),
    archive: {
      async queryHtmlPage(url) {
        return {
          records: [record(url, url.endsWith('/plans') ? firstDate : at)],
          complete: true,
          resumeKey: null,
          query: { url: 'https://web.archive.org/cdx/search/cdx', status: 200 },
        };
      },
      async fetchHtml(r) {
        return {
          bytes: new TextEncoder().encode(r.originalUrl.endsWith('/pricing') ? secondHtml : firstHtml),
          metadata: { sha256: 'a'.repeat(64), fetchedAt: at },
        };
      },
    },
  });
}
async function complete(api, store) {
  for (let i = 0; i < 20; i++) {
    await api.fetch(refresh());
    if ((await store.read('vendor')).checkpoint.complete) return;
  }
  throw Error('not completed');
}
test('unsupported first candidate does not hide later valid pricing page', () =>
  fixture(async (store) => {
    await seed(store);
    await complete(service(store), store);
    const state = (await store.read('vendor')).checkpoint;
    assert.equal(state.proposals.length, 1);
    assert.equal(state.proposals[0].pricingUrl, 'https://vendor.com/pricing');
    assert.equal(state.coverage.at(-1).candidateFailures[0].status, 'extraction_unavailable');
  }));
test('sampling gap in first candidate does not hide later eligible capture', () =>
  fixture(async (store) => {
    await seed(store, {
      proposals: [
        { id: 'prior', scope: { edition: null, deployment: 'unknown' }, pricingCapturedAt: '2023-07-01T00:00:00.000Z' },
      ],
    });
    await complete(service(store, { firstDate: '2023-12-31T00:00:00.000Z', firstHtml: 'valid' }), store);
    const state = (await store.read('vendor')).checkpoint;
    assert.equal(state.proposals.length, 2);
    assert.equal(state.proposals[1].pricingUrl, 'https://vendor.com/pricing');
    assert.equal(state.coverage.at(-1).candidateFailures[0].status, 'sampling_gap');
  }));
test('capacity reached on overdue continuation finishes attempt and prevents immediate repeats', () =>
  fixture(async (store) => {
    await seed(store, { checkedAt: '2020-01-01T00:00:00.000Z' });
    let calls = 0;
    const reserved = await store.resume('vendor', at);
    const state = reserved.checkpoint;
    state.phase = 'landing-index';
    state.landingQuery = {
      url: product.url,
      cutoff: at,
      records: Array.from({ length: 1500 }, (_, i) =>
        record(product.url, new Date(Date.parse('2020-01-01') + i * 1000).toISOString()),
      ),
      resumeKey: null,
      seenKeys: [],
      complete: false,
    };
    await store.checkpoint('vendor', reserved.token, state, { release: true });
    const overflow = createPricingService({
      catalog: [product],
      store,
      clock: () => Date.parse(at),
      discoverLinks: () => [],
      extractor: () => ({ plans: [] }),
      archive: {
        async queryHtmlPage() {
          calls++;
          return {
            records: [record(product.url)],
            complete: false,
            resumeKey: 'next',
            query: { url: 'https://web.archive.org/cdx/search/cdx', status: 200 },
          };
        },
      },
    });
    const response = await overflow.fetch(refresh());
    assert.equal((await response.json()).status, 'inventory_limit');
    const ended = await store.read('vendor');
    assert.equal(ended.checkpoint.complete, true);
    assert.equal(ended.checkpoint.historicalComplete, false);
    assert.equal(ended.nextCheckAt, '2024-07-01T00:00:00.000Z');
    await overflow.fetch(refresh());
    assert.equal(calls, 1);
  }));
test('cached immutable evidence is rejected when actual bytes mismatch selected CDX digest', () =>
  fixture(async (store) => {
    await seed(store);
    const reserved = await store.resume('vendor', at),
      state = reserved.checkpoint;
    state.landingQuery.records[0].digest = 'VGMT4NSHA2AWVOR6EVYXQUGCNSONBWE5';
    const source = state.landingQuery.records[0];
    await store.putBody(bodyIdentity(source), new TextEncoder().encode('altered'), {
      sha256: 'a'.repeat(64),
      fetchedAt: at,
    });
    await store.checkpoint('vendor', reserved.token, state, { release: true });
    const response = await service(store).fetch(refresh());
    assert.equal(response.status, 503);
    assert.equal((await store.read('vendor')).checkpoint.errorCode, 'archive_digest_mismatch');
    assert.equal(new TextDecoder().decode((await store.getBody(bodyIdentity(source))).bytes), 'altered');
    assert.equal((await store.getProposals('vendor')).length, 0);
  }));
test('exhausted unsupported candidates retain extraction outcome and individual failures', () =>
  fixture(async (store) => {
    await seed(store);
    await complete(service(store, { secondHtml: 'unsupported' }), store);
    const state = (await store.read('vendor')).checkpoint;
    assert.equal(state.coverage.at(-1).status, 'extraction_unavailable');
    assert.equal(state.coverage.at(-1).candidateFailures.length, 2);
    assert.equal(state.proposals.length, 0);
  }));
test('query log capacity is terminal on an overdue continuation', () =>
  fixture(async (store) => {
    await seed(store, { checkedAt: '2020-01-01T00:00:00.000Z' });
    const reserved = await store.resume('vendor', at),
      state = reserved.checkpoint;
    state.phase = 'landing-index';
    state.landingQuery = { url: product.url, cutoff: at, records: [], resumeKey: null, seenKeys: [], complete: false };
    state.queries = Array.from({ length: 1000 }, () => ({
      url: 'https://web.archive.org/cdx/search/cdx',
      status: 200,
    }));
    await store.checkpoint('vendor', reserved.token, state, { release: true });
    const response = await service(store).fetch(refresh());
    assert.equal((await response.json()).status, 'inventory_limit');
    assert.equal((await store.read('vendor')).checkpoint.complete, true);
    assert.equal((await store.read('vendor')).nextCheckAt, '2024-07-01T00:00:00.000Z');
  }));
test('malformed cursor on overdue reservation receives future continuation backoff', () =>
  fixture(async (store) => {
    await seed(store, { checkedAt: '2020-01-01T00:00:00.000Z' });
    const reserved = await store.resume('vendor', at),
      state = reserved.checkpoint;
    state.phase = 'landing-index';
    state.landingQuery = {
      url: product.url,
      cutoff: '2020-01-01T00:00:00.000Z',
      records: [],
      resumeKey: 'cursor',
      seenKeys: ['cursor'],
      complete: false,
    };
    state.cutoff = '2020-01-01T00:00:00.000Z';
    state.queries = [{ url: 'https://web.archive.org/cdx/search/cdx', status: 200 }];
    await store.checkpoint('vendor', reserved.token, state, { release: true });
    let calls = 0;
    const api = createPricingService({
      catalog: [product],
      store,
      clock: () => Date.parse(at),
      discoverLinks: () => [],
      extractor: () => ({ plans: [] }),
      archive: {
        async queryHtmlPage() {
          calls++;
          throw Object.assign(new Error('Repeated cursor'), { code: 'archive_incomplete' });
        },
      },
    });
    await api.fetch(refresh());
    await api.fetch(refresh());
    assert.equal(calls, 1);
    const saved = await store.read('vendor');
    assert.equal(saved.checkpoint.retryAt, Date.parse('2024-01-01T01:00:00.000Z'));
    assert.equal(saved.checkpoint.complete, false);
    assert.equal(saved.checkedAt, '2020-01-01T00:00:00.000Z');
    assert.equal(saved.checkpoint.cutoff, '2020-01-01T00:00:00.000Z');
  }));
