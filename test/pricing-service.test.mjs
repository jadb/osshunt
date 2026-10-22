import { observation } from './fixtures/pricing-observation.mjs';
import { sha256 } from '../lib/pricing/archive.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createPricingService } from '../lib/pricing/service.mjs';
import { FilePricingStore } from '../lib/pricing/stores-file.mjs';
const catalog = [{ id: 'vendor', name: 'Vendor', url: 'https://vendor.com/', kind: 'paid' }];
const req = (method = 'GET', suffix = '') => new Request(`https://local/api/pricing/vendor${suffix}`, { method });
const makeRecord = (at, url) => ({
  timestamp: at.replace(/[-:TZ.]/g, '').slice(0, 14),
  capturedAt: at,
  originalUrl: url,
  digest: null,
  mimeType: 'text/html',
});
test('public reads never discover or expose private proposals; shared cooldown does not consume pricing check', async () => {
  const root = await mkdtemp(join(tmpdir(), 'pricing-service-'));
  try {
    const store = new FilePricingStore(root);
    let calls = 0;
    const service = createPricingService({
      catalog,
      store,
      clock: () => Date.parse('2024-01-01'),
      fetchImpl: async () => {
        calls++;
        throw Error('No network');
      },
      extractor: () => ({ plans: [] }),
      discoverLinks: () => [],
    });
    assert.equal((await service.fetch(req())).status, 200);
    assert.equal(calls, 0);
    await store.deferArchive(Date.parse('2024-01-02'));
    assert.equal((await service.fetch(req('POST', '/refresh'))).status, 429);
    assert.equal(await store.read('vendor'), null);
    assert.equal(
      (await service.fetch(new Request('https://local/api/pricing/vendor/refresh?force=1', { method: 'POST' }))).status,
      400,
    );
    assert.equal(
      (await service.fetch(new Request('https://local/api/pricing/vendor/refresh', { method: 'POST', body: '{}' })))
        .status,
      400,
    );
  } finally {
    await rm(root, { recursive: true });
  }
});
test('bounded discovery resumes original cutoff, actual pricing spacing, private proposal chain and immutable cache', async () => {
  const root = await mkdtemp(join(tmpdir(), 'pricing-service-'));
  try {
    const store = new FilePricingStore(root),
      at = '2024-01-01T00:00:00.000Z';
    let queryCount = 0,
      bodyCount = 0;
    const archive = {
      async queryHtmlPage(url) {
        queryCount++;
        const times = url.endsWith('/pricing')
          ? ['2020-01-01T00:00:00.000Z', '2020-06-30T00:00:00.000Z', '2021-01-01T00:00:00.000Z']
          : ['2020-01-01T00:00:00.000Z', '2020-07-01T00:00:00.000Z', '2021-01-01T00:00:00.000Z'];
        return {
          records: times.map((t) => makeRecord(t, url)),
          complete: true,
          resumeKey: null,
          query: { url: 'https://web.archive.org/cdx/search/cdx', status: 200 },
        };
      },
      async fetchHtml(r) {
        bodyCount++;
        return {
          bytes: new TextEncoder().encode('<p>pricing</p>'),
          metadata: { sha256: await sha256('<p>pricing</p>'), fetchedAt: at, digest: null },
        };
      },
    };
    const opts = {
      catalog,
      store,
      clock: () => Date.parse(at),
      archive,
      extractor: (_, { originalUrl }) => ({ plans: originalUrl.endsWith('/pricing') ? [{ ...observation().plans[0], offers: [] }] : [], quality: 'partial', issues: [] }),
      discoverLinks: () => [
        { url: 'https://vendor.com/pricing', label: 'Pricing', locator: 'a', provenance: 'archived-link' },
      ],
    };
    let response;
    for (let i = 0; i < 40; i++) {
      response = await createPricingService(opts).fetch(req('POST', '/refresh'));
      if ((await store.read('vendor'))?.checkpoint?.complete) break;
    }
    const persisted = await store.read('vendor');
    assert.equal(persisted.checkpoint.complete, true);
    assert.equal(persisted.checkpoint.cutoff, at);
    assert.equal(persisted.checkpoint.proposals.length, 2);
    assert.ok(persisted.checkpoint.coverage.some((c) => c.status === 'sampling_gap'));
    const manifest = await response.json();
    assert.deepEqual(manifest.observations, []);
    assert.equal(manifest.status, 'review_pending');
    assert.equal(JSON.stringify(manifest).includes('sourceSha256'), false);
    assert.equal(persisted.checkpoint.proposals[0].evidenceAvailableAt, '2020-01-01T00:00:00.000Z');
    const oldQueries = queryCount,
      oldBodies = bodyCount;
    await createPricingService(opts).fetch(req('POST', '/refresh'));
    assert.equal(queryCount, oldQueries);
    assert.equal(bodyCount, oldBodies);
  } finally {
    await rm(root, { recursive: true });
  }
});
test('empty and failed first index consume six-month gate, including first outbound 429', async () => {
  for (const mode of ['empty', 'failure', '429']) {
    const root = await mkdtemp(join(tmpdir(), 'pricing-failed-'));
    try {
      let calls = 0,
        now = Date.parse('2024-08-31T00:00:00Z');
      const store = new FilePricingStore(root),
        service = createPricingService({
          catalog,
          store,
          clock: () => now,
          extractor: () => ({ plans: [] }),
          discoverLinks: () => [],
          archive: {
            async queryHtmlPage() {
              calls++;
              if (mode === 'empty')
                return {
                  records: [],
                  complete: true,
                  resumeKey: null,
                  query: { url: 'https://web.archive.org/cdx/search/cdx', status: 200 },
                };
              throw Object.assign(Error('failed'), {
                code: mode === '429' ? 'archive_rate_limited' : 'archive_unavailable',
              });
            },
          },
        });
      await service.fetch(req('POST', '/refresh'));
      assert.equal((await store.read('vendor')).checkpoint.complete, true, mode);
      assert.equal((await store.read('vendor')).nextCheckAt, '2025-02-28T00:00:00.000Z');
      now += 7200000;
      await service.fetch(req('POST', '/refresh'));
      assert.equal(calls, 1, mode);
    } finally {
      await rm(root, { recursive: true });
    }
  }
});
test('mid-inventory 429 keeps durable cursor and cutoff through restart without repeating first page', async () => {
  const root = await mkdtemp(join(tmpdir(), 'pricing-page-'));
  try {
    const store = new FilePricingStore(root);
    let now = Date.parse('2024-01-01'),
      calls = 0;
    const cursors = [],
      cutoffs = [];
    const archive = {
      async queryHtmlPage(url, options) {
        calls++;
        cursors.push(options.resumeKey);
        cutoffs.push(options.cutoff);
        if (calls === 1)
          return {
            records: [makeRecord('2020-01-01T00:00:00.000Z', url)],
            resumeKey: 'cursor',
            complete: false,
            query: { url: 'https://web.archive.org/cdx/search/cdx', status: 200 },
          };
        if (calls === 2) throw Object.assign(Error('rate'), { code: 'archive_rate_limited', retryAfter: 90 });
        return {
          records: [],
          resumeKey: null,
          complete: true,
          query: { url: 'https://web.archive.org/cdx/search/cdx', status: 200 },
        };
      },
      async fetchHtml() {
        return {
          bytes: new TextEncoder().encode('no pricing links'),
          metadata: { sha256: await sha256('no pricing links'), fetchedAt: new Date(now).toISOString() },
        };
      },
    };
    const options = {
      catalog,
      store,
      clock: () => now,
      archive,
      extractor: () => ({ plans: [] }),
      discoverLinks: () => [],
    };
    assert.equal((await createPricingService(options).fetch(req('POST', '/refresh'))).status, 429);
    const interrupted = await store.read('vendor');
    assert.equal(interrupted.checkpoint.complete, false);
    assert.equal(interrupted.checkpoint.landingQuery.resumeKey, 'cursor');
    assert.equal((await createPricingService(options).fetch(req('POST', '/refresh'))).status, 429);
    assert.equal(calls, 2);
    now += 3600000;
    for (let i = 0; i < 5; i++) {
      await createPricingService(options).fetch(req('POST', '/refresh'));
      if ((await store.read('vendor')).checkpoint.complete) break;
    }
    assert.equal((await store.read('vendor')).checkpoint.complete, true);
    assert.deepEqual(cursors, [null, 'cursor', 'cursor']);
    assert.ok(cutoffs.every((value) => value === '2024-01-01T00:00:00.000Z'));
  } finally {
    await rm(root, { recursive: true });
  }
});
test('separate service instances reserve one outbound discovery across concurrent visitors', async () => {
  const root = await mkdtemp(join(tmpdir(), 'pricing-concurrent-'));
  try {
    let release,
      started,
      calls = 0;
    const gate = new Promise((resolve) => {
        release = resolve;
      }),
      begun = new Promise((resolve) => {
        started = resolve;
      });
    const store = new FilePricingStore(root),
      options = {
        catalog,
        store,
        clock: () => Date.parse('2024-01-01'),
        extractor: () => ({ plans: [] }),
        discoverLinks: () => [],
        archive: {
          async queryHtmlPage() {
            calls++;
            started();
            await gate;
            return {
              records: [],
              complete: true,
              resumeKey: null,
              query: { url: 'https://web.archive.org/cdx/search/cdx', status: 200 },
            };
          },
        },
      };
    const first = createPricingService(options).fetch(req('POST', '/refresh'));
    await begun;
    const second = await createPricingService({ ...options, store: new FilePricingStore(root) }).fetch(
      req('POST', '/refresh'),
    );
    assert.equal(second.status, 200);
    assert.equal(calls, 1);
    release();
    await first;
    assert.equal(calls, 1);
  } finally {
    await rm(root, { recursive: true });
  }
});
test('cooldown appearing after reservation but before first outbound does not consume check', async () => {
  const root = await mkdtemp(join(tmpdir(), 'pricing-prefetch-'));
  try {
    const store = new FilePricingStore(root);
    let reads = 0,
      calls = 0;
    store.archiveRetryAt = async () => (++reads === 1 ? 0 : Date.parse('2024-01-02'));
    const service = createPricingService({
      catalog,
      store,
      clock: () => Date.parse('2024-01-01'),
      extractor: () => ({ plans: [] }),
      discoverLinks: () => [],
      archive: {
        async queryHtmlPage() {
          calls++;
          throw Error('must not fetch');
        },
      },
    });
    const response = await service.fetch(req('POST', '/refresh'));
    assert.equal(response.status, 429);
    assert.equal(calls, 0);
    assert.equal(await store.read('vendor'), null);
  } finally {
    await rm(root, { recursive: true });
  }
});
test('inventory cap finishes attempt without claiming complete history and prevents repeated pages', async () => {
  const root = await mkdtemp(join(tmpdir(), 'pricing-record-limit-'));
  try {
    const store = new FilePricingStore(root);
    let calls = 0,
      now = Date.parse('2024-01-01');
    const service = createPricingService({
      catalog,
      store,
      clock: () => now,
      extractor: () => ({ plans: [] }),
      discoverLinks: () => [],
      archive: {
        async queryHtmlPage(url) {
          calls++;
          return {
            records: Array.from({ length: 1501 }, (_, i) =>
              makeRecord(new Date(Date.parse('2020-01-01') + i * 1000).toISOString(), url),
            ),
            complete: true,
            resumeKey: null,
            query: { url: 'https://web.archive.org/cdx/search/cdx', status: 200 },
          };
        },
      },
    });
    const response = await service.fetch(req('POST', '/refresh'));
    assert.equal(response.status, 503);
    const record = await store.read('vendor');
    assert.equal(record.checkpoint.complete, true);
    assert.equal(record.checkpoint.historicalComplete, false);
    assert.equal(record.checkpoint.errorCode, 'inventory_limit');
    assert.equal(record.checkpoint.landingQuery.records.length, 0);
    assert.equal(record.checkpoint.retryAt, Date.parse(record.nextCheckAt));
    now += 7200000;
    await service.fetch(req('POST', '/refresh'));
    assert.equal(calls, 1);
  } finally {
    await rm(root, { recursive: true });
  }
});
