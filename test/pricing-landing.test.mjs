import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { FilePricingStore } from '../lib/pricing/stores-file.mjs';
import { createPricingService } from '../lib/pricing/service.mjs';
import { samplePricingBatch } from '../lib/pricing/sampling.mjs';
import { sha256 } from '../lib/pricing/archive.mjs';
import { extractPricing } from '../lib/pricing/extract.mjs';
import { discoverPricingLinks } from '../lib/pricing/links.mjs';
import { validatePricingObservations } from '../lib/pricing/schema.mjs';
import { observation } from './fixtures/pricing-observation.mjs';
const capturedAt = '2025-06-15T00:00:00.000Z', now = '2026-10-22T00:00:00.000Z';
const product = { id: 'sample', name: 'Sample', url: 'https://sample.example.com/', kind: 'paid' };
const pricingHtml = '<article class="pricing-card"><h2>Pro</h2><p class="price">USD 12.50 / month</p></article>';
const record = url => ({ originalUrl: url, timestamp: '20250615000000', capturedAt, mimeType: 'text/html', digest: null });
async function fixture(t, { landingHtml = pricingHtml, extractor = extractPricing, discoverLinks = discoverPricingLinks } = {}) {
  const root = await mkdtemp(join(tmpdir(), 'landing-pricing-'));
  t.after(() => rm(root, { recursive: true }));
  let journal = null;
  const calls = [], store = new FilePricingStore(root);
  const query = url => { calls.push(['query', url]); return { record: record(url), query: { url, status: 200 } }; };
  const archive = {
    async queryLatestHtml(url) { return query(url); },
    async queryHtmlPage(url) { const result = query(url); return { records: [result.record], query: result.query, complete: true, resumeKey: null }; },
    async fetchHtml(selected) {
      calls.push(['body', selected.originalUrl]);
      const html = selected.originalUrl === product.url ? landingHtml : pricingHtml;
      return { bytes: new TextEncoder().encode(html), metadata: { sha256: await sha256(html), fetchedAt: now, digest: null } };
    },
  };
  const common = { catalog: [product], store, clock: () => Date.parse(now), archive, extractor, discoverLinks };
  return { store, calls, common, getJournal: () => journal,
    sample: options => samplePricingBatch({ ...common, ids: [product.id], from: '2025-06-01', cutoff: '2025-06-30', delayMs: 0,
      baselineFingerprint: 'landing-fixture', save: async state => { journal = structuredClone(state); }, ...options }),
    async refresh() { return createPricingService(common).fetch(new Request('https://local/api/pricing/sample/refresh', { method: 'POST' })); },
  };
}
function assertLandingProposal(proposal) {
  assert.equal(proposal.provenance, 'landing-page');
  for (const [source, landing] of [['pricingUrl', 'landingUrl'], ['pricingArchiveUrl', 'landingArchiveUrl'],
    ['pricingCapturedAt', 'landingCapturedAt'], ['sourceSha256', 'landingSha256'], ['sourceDigest', 'landingDigest'], ['fetchedAt', 'landingFetchedAt']])
    assert.deepEqual(proposal[source], proposal[landing]);
  assert.equal(proposal.plans[0].offers[0].amount, '12.50');
  assert.equal(proposal.reviewState, 'proposed');
  assert.equal(proposal.quality, 'partial');
  assert.equal(proposal.discovery.locator, proposal.plans[0].source.locator);
  validatePricingObservations([proposal], [product], { confirmedOnly: false });
}
test('operator retains landing-page pricing without pricing links and completed rerun makes no requests', async t => {
  const f = await fixture(t);
  const first = await f.sample();
  assert.equal(first.products[0].status, 'review_pending');
  assertLandingProposal(first.products[0].proposal);
  assert.deepEqual(f.calls, [['query', product.url], ['body', product.url]]);
  const again = await f.sample({ journal: f.getJournal() });
  assert.deepEqual(again, first);
  assert.equal(f.calls.length, 2);
  assert.equal((await f.store.read(product.id)).checkpoint, null);
});
test('production retains landing pricing under independent anchors and never fetches a dedicated page', async t => {
  const f = await fixture(t);
  for (let i = 0; i < 5; i++) { await f.refresh(); if ((await f.store.read(product.id)).checkpoint.complete) break; }
  const state = (await f.store.read(product.id)).checkpoint;
  assert.equal(state.complete, true);
  assert.equal(state.proposals.length, 1);
  assertLandingProposal(state.proposals[0]);
  assert.deepEqual(f.calls, [['query', product.url], ['body', product.url]]);
  await f.refresh();
  assert.equal(f.calls.length, 2);
});
test('landing provenance validates all same-capture identities and binds discovery to a retained plan field', () => {
  const row = observation();
  Object.assign(row, { provenance: 'landing-page', pricingUrl: row.landingUrl, pricingArchiveUrl: row.landingArchiveUrl,
    sourceSha256: row.landingSha256, discovery: { label: row.plans[0].name, locator: row.plans[0].source.locator } });
  assert.equal(validatePricingObservations([row], [{ id: 'sample' }]).length, 1);
  for (const patch of [
    { sourceSha256: 'c'.repeat(64) }, { sourceDigest: 'A'.repeat(32) },
    { fetchedAt: '2026-10-21T00:00:00.000Z' }, { discovery: { label: 'Pro', locator: 'invented' } },
    { pricingUrl: 'https://sample.example.com/pricing', pricingArchiveUrl: observation().pricingArchiveUrl },
    { pricingCapturedAt: '2019-12-31T00:00:00.000Z', pricingArchiveUrl: row.pricingArchiveUrl.replace('20200101000000', '20191231000000') },
  ]) assert.throws(() => validatePricingObservations([{ ...row, ...patch }], [{ id: 'sample' }]));
});
for (const mode of ['operator', 'production']) test(`${mode} schema-invalid landing extraction falls through and diagnostics survive restart`, async t => {
  let landingExtractions = 0;
  const f = await fixture(t, { landingHtml: '<a href="/pricing">Pricing</a>',
    extractor: (html, opts) => {
      if (opts.originalUrl === product.url) { landingExtractions++; return { plans: [{ name: 'Invalid' }], quality: 'partial',
        issues: ['Ambiguous landing card'], diagnostics: { classification: 'partial_pricing', flags: ['ambiguous'] } }; }
      return { ...extractPricing(html, opts), diagnostics: { classification: 'static_pricing', flags: [] } };
    },
    discoverLinks: (html, opts) => {
      opts.rejections?.push({ url: 'https://sample.example.com/blog', label: 'Plans for success', locator: 'offset:1-9', provenance: 'archived-link', reason: 'not-pricing' });
      if (opts.rejectionSummary) Object.assign(opts.rejectionSummary, { total: 1, retained: 1, omitted: 0 });
      return discoverPricingLinks(html, opts);
    },
  });
  let row;
  if (mode === 'operator') row = (await f.sample()).products[0];
  else {
    await f.refresh();
    const first = (await f.store.read(product.id)).checkpoint;
    assert.equal(first.complete, false);
    for (let i = 0; i < 4; i++) { await f.refresh(); if ((await f.store.read(product.id)).checkpoint.complete) break; }
    const state = (await f.store.read(product.id)).checkpoint;
    row = { proposal: state.proposals[0], ...state.coverage.find(c => c.status === 'review_pending') };
  }
  assert.equal(row.proposal.provenance, 'archived-link');
  assert.equal(row.landingExtraction.status, 'invalid');
  assert.equal(row.landingExtraction.diagnostics.classification, 'partial_pricing');
  assert.ok(row.landingExtraction.issues.some(issue => /invalid|schema/i.test(issue)));
  assert.equal(row.discoveryRejections[0].reason, 'not-pricing');
  assert.equal(row.discoveryRejectionSummary.total, 1);
  assert.equal(landingExtractions, 1);
  assert.equal(f.calls.filter(([kind, url]) => kind === 'query' && url.endsWith('/pricing')).length, 1);
});

for (const mode of ['operator', 'production']) test(`${mode} retains useful named partial landing structure without inventing offers`, async t => {
  const plan = { ...observation().plans[0], offers: [], status: 'unknown' };
  const f = await fixture(t, { extractor: () => ({ plans: [plan], quality: 'partial', issues: ['Price unavailable'],
    diagnostics: { classification: 'partial_pricing', flags: ['missing_price'] } }) });
  let proposal;
  if (mode === 'operator') proposal = (await f.sample()).products[0].proposal;
  else { await f.refresh(); proposal = (await f.store.read(product.id)).checkpoint.proposals[0]; }
  assert.equal(proposal.provenance, 'landing-page');
  assert.deepEqual(proposal.plans[0].offers, []);
  assert.equal(proposal.plans[0].status, 'unknown');
});

test('landing extraction and discovery diagnostics retain bounded private fragments and honest omission counts', async t => {
  const plans = Array.from({ length: 500 }, (_, order) => ({ ...observation().plans[0], name: `Plan ${order}`, order,
    features: [{ name: 'Feature', value: 'x'.repeat(1000), source: { locator: 'offset:1-2', text: 'Feature' } }] }));
  const f = await fixture(t, {
    extractor: (html, opts) => opts.originalUrl === product.url ? { plans, quality: 'unavailable', issues: ['No binding'],
      diagnostics: { classification: 'unsupported', flags: Array(25).fill('ambiguous') } } : extractPricing(html, opts),
    discoverLinks: (_, opts) => {
      for (let i = 0; i < 150; i++) opts.rejections.push({ url: `https://other.example.com/${i}`, label: 'x'.repeat(4000),
        locator: `offset:${i}-${i + 1}`, provenance: 'archived-link', reason: 'unapproved_host' });
      Object.assign(opts.rejectionSummary, { total: 150, retained: 150, omitted: 0 });
      return [];
    },
  });
  const row = (await f.sample()).products[0];
  assert.equal(row.landingExtraction.extracted.plans.length < 500, true);
  assert.equal(row.landingExtraction.rawPlanCount, 500);
  assert.equal(row.landingExtraction.diagnostics.flags.length, 16);
  assert.ok(Buffer.byteLength(JSON.stringify(row.landingExtraction.extracted)) <= 65536);
  assert.ok(Buffer.byteLength(JSON.stringify(row.discoveryRejections)) <= 65536);
  assert.equal(row.discoveryRejectionSummary.total, 150);
  assert.equal(row.discoveryRejectionSummary.retained + row.discoveryRejectionSummary.omitted, 150);
});

test('landing extraction does not treat an explicitly unsupported whole-product record as a pricing plan', async t => {
  const f = await fixture(t, { landingHtml: '<a href="/pricing">Pricing</a>', extractor: (html, opts) =>
    opts.originalUrl === product.url ? { plans: observation().plans, quality: 'partial', issues: [],
      diagnostics: { classification: 'unsupported', flags: [] } } : extractPricing(html, opts) });
  const row = (await f.sample()).products[0];
  assert.equal(row.proposal.provenance, 'archived-link');
  assert.equal(row.proposal.pricingUrl, 'https://sample.example.com/pricing');
});

for (const mode of ['operator', 'production']) for (const dedicated of ['priced', 'missing'])
  test(`${mode} defers unknown-price landing structure until dedicated pricing is ${dedicated}`, async t => {
    const partial = { ...observation().plans[0], status: 'unknown', offers: [] };
    const f = await fixture(t, { landingHtml: '<a href="/pricing">Pricing</a>', extractor: (html, opts) =>
      opts.originalUrl === product.url ? { plans: [partial], quality: 'partial', issues: ['No archived price'],
        diagnostics: { classification: 'partial_pricing', flags: [] } } : extractPricing(html, opts) });
    const originalQuery = f.common.archive.queryLatestHtml;
    const originalPage = f.common.archive.queryHtmlPage;
    if (dedicated === 'missing') {
      f.common.archive.queryLatestHtml = async url => url === product.url ? originalQuery(url) : { record: null, query: { url, status: 200 } };
      f.common.archive.queryHtmlPage = async url => url === product.url ? originalPage(url) : { records: [], query: { url, status: 200 }, complete: true, resumeKey: null };
    }
    let proposal;
    if (mode === 'operator') proposal = (await f.sample()).products[0].proposal;
    else {
      await f.refresh();
      const paused = (await f.store.read(product.id)).checkpoint;
      assert.equal(paused.complete, false, 'dedicated query consumes request budget before body retrieval');
      assert.equal(paused.active.landingFallback.provenance, 'landing-page');
      for (let i = 0; i < 5; i++) { await f.refresh(); if ((await f.store.read(product.id)).checkpoint.complete) break; }
      proposal = (await f.store.read(product.id)).checkpoint.proposals[0];
    }
    assert.equal(proposal.provenance, dedicated === 'priced' ? 'archived-link' : 'landing-page');
    assert.equal(proposal.plans[0].offers[0]?.amount ?? null, dedicated === 'priced' ? '12.50' : null);
    assert.equal(proposal.plans[0].status, dedicated === 'priced' ? 'paid' : 'unknown');
    assert.equal(proposal.reviewState, 'proposed');
  });

test('operator resumes a partial landing fallback without repeating source calls and rejects an edited fallback', async t => {
  let landingExtractions = 0, saved;
  const partial = { ...observation().plans[0], status: 'unknown', offers: [] };
  const f = await fixture(t, { landingHtml: '<a href="/pricing">Pricing</a>', extractor: (html, opts) => {
    if (opts.originalUrl === product.url) {
      landingExtractions++;
      return { plans: [partial], quality: 'partial', issues: [] };
    }
    return extractPricing(html, opts);
  } });
  await assert.rejects(f.sample({ save: async state => {
    saved = structuredClone(state);
    if (state.products[0].stage === 'links') throw Error('simulated pause');
  } }), /persist/);
  assert.equal(saved.products[0].landingFallback.provenance, 'landing-page');
  assert.equal(f.calls.length, 2);
  const edited = structuredClone(saved);
  edited.products[0].landingFallback.sourceSha256 = 'a'.repeat(64);
  await assert.rejects(f.sample({ journal: edited }), /capture|evidence/i);
  assert.equal(f.calls.length, 2);
  const resumed = await f.sample({ journal: saved });
  assert.equal(resumed.products[0].proposal.provenance, 'archived-link');
  assert.equal(landingExtractions, 1);
  assert.equal(f.calls.length, 4);
});

for (const mode of ['operator', 'production']) for (const kind of ['paid', 'quote'])
  test(`${mode} actionable ${kind} landing pricing avoids an unnecessary dedicated lookup`, async t => {
    const html = (kind === 'paid' ? pricingHtml : '<article class="pricing-card"><h2>Enterprise</h2><p>Contact sales</p></article>') +
      '<a href="/pricing">Pricing</a>';
    const f = await fixture(t, { landingHtml: html });
    let proposal;
    if (mode === 'operator') proposal = (await f.sample()).products[0].proposal;
    else { await f.refresh(); proposal = (await f.store.read(product.id)).checkpoint.proposals[0]; }
    assert.equal(proposal.provenance, 'landing-page');
    assert.equal(proposal.plans[0].status, kind);
    assert.equal(f.calls.length, 2);
  });

for (const mode of ['operator', 'production']) test(`${mode} malformed null landing tier cannot prevent dedicated fallback`, async t => {
  const f = await fixture(t, { landingHtml: '<a href="/pricing">Pricing</a>', extractor: (html, opts) =>
    opts.originalUrl === product.url ? { plans: [null], quality: 'partial', issues: [] } : extractPricing(html, opts) });
  let proposal;
  if (mode === 'operator') proposal = (await f.sample()).products[0].proposal;
  else {
    for (let i = 0; i < 5; i++) { await f.refresh(); if ((await f.store.read(product.id)).checkpoint.complete) break; }
    proposal = (await f.store.read(product.id)).checkpoint.proposals[0];
  }
  assert.equal(proposal?.provenance, 'archived-link');
});
