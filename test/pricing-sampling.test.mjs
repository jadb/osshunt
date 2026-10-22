import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { samplePricingBatch } from '../lib/pricing/sampling.mjs';
import { FilePricingStore } from '../lib/pricing/stores-file.mjs';
import { extractPricing } from '../lib/pricing/extract.mjs';
import { discoverPricingLinks } from '../lib/pricing/links.mjs';
const at = '2026-10-22T00:00:00.000Z',
  from = '2025-06-01T00:00:00.000Z',
  cutoff = '2025-06-30T23:59:59.000Z',
  columns = ['timestamp', 'original', 'mimetype', 'statuscode', 'digest'];
const catalog = Array.from({ length: 20 }, (_, i) => ({
  id: `tool-${i}`,
  name: `Tool ${i}`,
  url: `https://tool-${i}.com/`,
  kind: 'paid',
  productPaths: [],
  pricingHints: [],
}));
async function fixture(action) {
  const root = await mkdtemp(join(tmpdir(), 'sample-batch-'));
  try {
    let journal = null,
      calls = 0;
    const opts = {
      catalog,
      ids: catalog.map((p) => p.id),
      from,
      cutoff,
      store: new FilePricingStore(root),
      clock: () => Date.parse(at),
      delayMs: 0,
      sleepImpl: async () => {},
      extractor: extractPricing,
      discoverLinks: discoverPricingLinks,
      baselineFingerprint: 'baseline',
      save: async (value) => {
        journal = structuredClone(value);
      },
      fetchImpl: async (input) => {
        calls++;
        const url = new URL(input);
        if (url.pathname.startsWith('/cdx/'))
          return Response.json([columns, ['20250615000000', url.searchParams.get('url'), 'text/html', '200', '-']]);
        const target = new URL(url.pathname.replace(/^\/web\/\d+id_\//, ''));
        return new Response(
          target.pathname === '/'
            ? '<a href="/pricing">Pricing</a>'
            : '<article class="pricing-card"><h2>Pro</h2><p class="price">USD 12.50 / user / month</p><p>Billed annually.</p></article>',
          { headers: { 'content-type': 'text/html', 'memento-datetime': 'Sun, 15 Jun 2025 00:00:00 GMT' } },
        );
      },
    };
    await action({ opts, getJournal: () => journal, getCalls: () => calls });
  } finally {
    await rm(root, { recursive: true });
  }
}
test('twenty known products sample serially with literal decimals and zero-request completed rerun', () =>
  fixture(async ({ opts, getJournal, getCalls }) => {
    const result = await samplePricingBatch(opts);
    assert.equal(result.products.filter((p) => p.proposal).length, 20);
    assert.equal(getCalls(), 80);
    assert.ok(
      result.products.every(
        (p) => p.proposal.plans[0].offers[0].amount === '12.50' && p.proposal.reviewState === 'proposed',
      ),
    );
    assert.ok(result.requests.every((r) => r.url.startsWith('https://web.archive.org/') && r.status === 200));
    await samplePricingBatch({ ...opts, journal: getJournal() });
    assert.equal(getCalls(), 80);
    for (const p of catalog) {
      const record = await opts.store.read(p.id);
      assert.equal(record.checkpoint, null);
      assert.equal(record.token, null);
    }
  }));
test('unknown ID and changed baseline fail before any reservation or source call', () =>
  fixture(async ({ opts, getJournal, getCalls }) => {
    await assert.rejects(samplePricingBatch({ ...opts, ids: ['tool-0', 'unknown'] }), /Unknown/);
    assert.equal(await opts.store.read('tool-0'), null);
    assert.equal(getCalls(), 0);
    await samplePricingBatch({ ...opts, ids: ['tool-0'] });
    await assert.rejects(
      samplePricingBatch({ ...opts, ids: ['tool-0'], journal: getJournal(), baselineFingerprint: 'changed' }),
      /baseline changed/,
    );
    assert.equal(getCalls(), 4);
  }));
test('source 429 stops whole batch and untouched products receive no cadence reservation', () =>
  fixture(async ({ opts, getCalls }) => {
    const result = await samplePricingBatch({
      ...opts,
      fetchImpl: async () => new Response('busy', { status: 429, headers: { 'retry-after': '90' } }),
    });
    assert.equal(result.stopped, 'archive_cooldown');
    assert.equal(result.requests.length, 1);
    assert.equal(result.products[1].status, 'pending');
    assert.equal(await opts.store.read('tool-1'), null);
    assert.ok(await opts.store.read('tool-0'));
    assert.equal(getCalls(), 0);
  }));
test('existing cadence blocks sampling without source calls', () =>
  fixture(async ({ opts, getCalls }) => {
    const r = await opts.store.reserve('tool-0', at);
    await opts.store.checkpoint('tool-0', r.token, null, { release: true });
    const result = await samplePricingBatch({ ...opts, ids: ['tool-0'] });
    assert.equal(result.products[0].status, 'gated');
    assert.equal(getCalls(), 0);
  }));
test('interrupted body write resumes from selected records and immutable cache without repeated completed queries', () =>
  fixture(async ({ opts, getJournal, getCalls }) => {
    const original = opts.store.putBody.bind(opts.store);
    let interrupt = true;
    opts.store.putBody = async (...args) => {
      const result = await original(...args);
      if (interrupt) {
        interrupt = false;
        throw Object.assign(Error('simulated process interruption'), { code: 'sample_interrupted' });
      }
      return result;
    };
    await assert.rejects(samplePricingBatch({ ...opts, ids: ['tool-0'] }), /interruption/);
    assert.equal(getCalls(), 2);
    opts.store.putBody = original;
    const result = await samplePricingBatch({ ...opts, ids: ['tool-0'], journal: getJournal() });
    assert.equal(result.products[0].status, 'review_pending');
    assert.equal(getCalls(), 4);
    assert.ok(result.products[0].cacheEvents.some((event) => event.hit));
  }));
test('cooldown appearing before first outbound cancels new reservation and leaves journal resumable', () =>
  fixture(async ({ opts, getJournal, getCalls }) => {
    let checks = 0;
    const real = opts.store.archiveRetryAt.bind(opts.store);
    opts.store.archiveRetryAt = async () => (++checks >= 2 ? Date.parse(at) + 3600000 : 0);
    const first = await samplePricingBatch({ ...opts, ids: ['tool-0'] });
    assert.equal(first.stopped, 'archive_cooldown');
    assert.equal(first.products[0].done, false);
    assert.equal(first.products[0].status, 'pending');
    assert.equal(first.products[0].reservation, null);
    assert.equal(await opts.store.read('tool-0'), null);
    assert.equal(getCalls(), 0);
    opts.store.archiveRetryAt = real;
    opts.clock = () => Date.parse(at) + 3600001;
    const result = await samplePricingBatch({ ...opts, ids: ['tool-0'], journal: getJournal() });
    assert.equal(result.products[0].status, 'review_pending');
    assert.equal(getCalls(), 4);
  }));
test('source digest/cache tamper is recorded without refetch or confirmation', () =>
  fixture(async ({ opts, getJournal, getCalls }) => {
    await samplePricingBatch({ ...opts, ids: ['tool-0'] });
    const saved = getJournal();
    saved.products[0].done = false;
    saved.products[0].proposal = null;
    saved.products[0].status = 'sampling';
    saved.products[0].candidateIndex = 0;
    const getBody = opts.store.getBody.bind(opts.store);
    opts.store.getBody = async (identity) => {
      const body = await getBody(identity);
      return body && { ...body, bytes: new TextEncoder().encode('tampered') };
    };
    const result = await samplePricingBatch({ ...opts, ids: ['tool-0'], journal: saved });
    assert.equal(result.products[0].errorCode, 'archive_digest_mismatch');
    assert.equal(result.products[0].proposal, null);
    assert.equal(getCalls(), 4);
  }));
test('shared vendor paths reject unrelated pricing links before source queries', () =>
  fixture(async ({ opts }) => {
    const scoped = {
      ...catalog[0],
      url: 'https://vendor.com/products/tool',
      productPaths: ['/products/tool'],
      pricingHints: [],
    };
    let outside = 0;
    const first = await samplePricingBatch({
      ...opts,
      catalog: [scoped],
      ids: [scoped.id],
      discoverLinks: () => [
        { url: 'https://vendor.com/pricing', label: 'Global', locator: 'a', provenance: 'archived-link' },
      ],
      fetchImpl: async (url) => {
        if (String(url).includes('vendor.com%2Fpricing')) outside++;
        const u = new URL(url);
        return u.pathname.startsWith('/cdx/')
          ? Response.json([columns, ['20250615000000', u.searchParams.get('url'), 'text/html', '200', '-']])
          : new Response('landing', {
              headers: { 'content-type': 'text/html', 'memento-datetime': 'Sun, 15 Jun 2025 00:00:00 GMT' },
            });
      },
    });
    assert.equal(first.products[0].status, 'wrong_scope');
    assert.equal(first.products[0].rejectedCandidates.length, 1);
    assert.equal(outside, 0);
  }));
test('saved landing/candidate records and cohort are revalidated before cache writes or source calls', () =>
  fixture(async ({ opts, getJournal, getCalls }) => {
    await samplePricingBatch({ ...opts, ids: ['tool-0'] });
    const clean = getJournal(),
      before = getCalls();
    for (const change of [
      (j) => j.products.push(j.products[0]),
      (j) => {
        j.products[0].landing.originalUrl = 'https://outside.com/';
      },
      (j) => {
        j.products[0].candidateResults[0].lookup.record.capturedAt = '2027-01-01T00:00:00.000Z';
      },
      (j) => {
        j.products[0].candidateResults[0].lookup.record.mimeType = 'image/png';
      },
      (j) => {
        j.products[0].candidates[0].url = 'https://tool-1.com/pricing';
      },
    ]) {
      const edited = structuredClone(clean);
      change(edited);
      await assert.rejects(samplePricingBatch({ ...opts, ids: ['tool-0'], journal: edited }));
      assert.equal(getCalls(), before);
    }
  }));
test('first candidate transport failure falls through to a valid second pricing page', () =>
  fixture(async ({ opts }) => {
    const base = opts.fetchImpl;
    const result = await samplePricingBatch({
      ...opts,
      ids: ['tool-0'],
      discoverLinks: () => [
        { url: 'https://tool-0.com/pricing-bad', label: 'Pricing', locator: 'a:1', provenance: 'archived-link' },
        { url: 'https://tool-0.com/pricing-good', label: 'Plans', locator: 'a:2', provenance: 'archived-link' },
      ],
      fetchImpl: async (value) => {
        const u = new URL(value);
        if (u.pathname.startsWith('/cdx/') && u.searchParams.get('url').endsWith('/pricing-bad'))
          return new Response('unavailable', { status: 503 });
        return base(value);
      },
    });
    assert.equal(result.products[0].status, 'review_pending');
    assert.equal(result.products[0].candidateResults[0].status, 'error');
    assert.equal(result.products[0].proposal.pricingUrl, 'https://tool-0.com/pricing-good');
    assert.equal(result.requests.length, 5);
  }));
test('three consecutive failed products stop even when their landing and pricing queries succeeded', () =>
  fixture(async ({ opts }) => {
    const base = opts.fetchImpl;
    const result = await samplePricingBatch({
      ...opts,
      fetchImpl: async (value) => {
        const u = new URL(value);
        if (u.pathname.includes('id_/') && u.pathname.endsWith('/pricing'))
          return new Response('unavailable', { status: 503 });
        return base(value);
      },
    });
    assert.equal(result.stopped, 'consecutive_failures');
    assert.equal(result.products.filter((p) => p.done).length, 3);
    assert.equal(result.products[3].status, 'pending');
    assert.equal(await opts.store.read('tool-3'), null);
  }));
