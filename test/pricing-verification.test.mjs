import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { FilePricingStore } from '../lib/pricing/stores-file.mjs';
import { bodyIdentity } from '../lib/pricing/service.mjs';
import { sha256, verifyHtmlEvidence } from '../lib/pricing/archive.mjs';
import { verifyPricingEvidence } from '../scripts/verify-pricing-evidence.mjs';
const catalog = [{ id: 'sample', name: 'Sample', url: 'https://vendor.com/' }];
const bytes = new TextEncoder().encode('<div class="plan-card"><h2>Pro</h2><p class="price">USD 9.25/month</p></div>');
async function fixture() {
  const record = { timestamp: '20200101000000', capturedAt: '2020-01-01T00:00:00.000Z',
    originalUrl: 'https://vendor.com/pricing', digest: null, mimeType: 'text/html' };
  const metadata = { sha256: await sha256(bytes), originalUrl: record.originalUrl, capturedAt: record.capturedAt,
    fetchedAt: '2026-10-22T00:00:00.000Z', mimeType: 'text/html' };
  record.digest = (await verifyHtmlEvidence(bytes, record, metadata)).actualDigest;
  return { record, metadata };
}
test('offline verification extracts exact facts from an actual tiny immutable cached body', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'pricing-offline-')); t.after(() => rm(directory, { recursive: true }));
  const store = new FilePricingStore(directory), { record, metadata } = await fixture();
  await store.putBody(bodyIdentity(record), bytes, metadata);
  const retryAt = await store.deferArchive(Date.now() + 3600000);
  const report = await verifyPricingEvidence({ evidence: [{ productId: 'sample', kind: 'pricing', record }], catalog, store,
    clock: () => Date.parse('2026-10-22T00:00:00.000Z') });
  assert.equal(report.offline, true); assert.equal(report.summary.verified, 1);
  const result = report.results[0];
  assert.equal(result.status, 'verified'); assert.equal(result.sourceSha256, metadata.sha256);
  assert.equal(result.pricing.plans[0].offers[0].amount, '9.25');
  assert.equal(result.pricing.plans[0].offers[0].currency, 'USD');
  assert.equal(result.archiveUrl, 'https://web.archive.org/web/20200101000000id_/https://vendor.com/pricing');
  assert.equal(await store.archiveRetryAt(), retryAt); assert.equal(await store.read('sample'), null);
  assert.equal(JSON.stringify(report).includes('<div class='), false);
});
test('tampered cached bytes report an error without extracted facts', async () => {
  const { record, metadata } = await fixture();
  const report = await verifyPricingEvidence({ evidence: [{ productId: 'sample', kind: 'pricing', record }], catalog,
    store: { getBody: async () => ({ bytes: new TextEncoder().encode('tampered'), metadata }) } });
  assert.equal(report.summary.errors, 1); assert.equal(report.results[0].status, 'error');
  assert.equal(report.results[0].error.code, 'archive_digest_mismatch'); assert.equal(report.results[0].pricing, undefined);
});
test('missing cache is a gap, while unknown product rejects before any cache lookup', async () => {
  const { record } = await fixture(); let reads = 0;
  const store = { getBody: async () => { reads++; return null; } };
  const report = await verifyPricingEvidence({ evidence: [{ productId: 'sample', kind: 'pricing', record }], catalog, store });
  assert.equal(report.summary.missing, 1); assert.equal(report.results[0].status, 'missing');
  reads = 0;
  await assert.rejects(verifyPricingEvidence({ evidence: [{ productId: 'sample', kind: 'pricing', record },
    { productId: 'unknown', kind: 'pricing', record }], catalog, store }), /Unknown product/);
  assert.equal(reads, 0);
});
test('landing discovery uses catalog scope and keeps historical links distinct from hints', async () => {
  const { record } = await fixture(); record.originalUrl = 'https://vendor.com/products/tool'; record.digest = null;
  const landing = new TextEncoder().encode('<a href="/products/other/pricing">Pricing</a><a href="/products/tool/plans">Plans</a>');
  const metadata = { sha256: await sha256(landing), originalUrl: record.originalUrl, capturedAt: record.capturedAt };
  const report = await verifyPricingEvidence({ evidence: [{ productId: 'sample', kind: 'landing', record }],
    catalog: [{ ...catalog[0], url: record.originalUrl, productPaths: ['/products/tool'], pricingHints: ['https://vendor.com/pricing'] }],
    store: { getBody: async () => ({ bytes: landing, metadata }) } });
  assert.equal(report.results[0].status, 'unknown');
  assert.deepEqual(report.results[0].links.map(l => [l.url, l.provenance]), [
    ['https://vendor.com/products/tool/plans', 'archived-link'], ['https://vendor.com/pricing', 'current-source-hint']]);
});
test('qualified legacy evidence stays unverified and forces partial extraction with its warning', async () => {
  const { record, metadata } = await fixture(); record.digest = 'A'.repeat(32);
  metadata.transport = { status: 200, originalUrl: record.originalUrl, mementoDatetime: 'Wed, 01 Jan 2020 00:00:00 GMT',
    archivedTransferEncoding: 'chunked', originalContentEncoding: null, sourceWarc: null, originalDigest: null };
  const report = await verifyPricingEvidence({ evidence: [{ productId: 'sample', kind: 'pricing', record }], catalog,
    store: { getBody: async () => ({ bytes, metadata }) }, extractor: () => ({ plans: [], quality: 'complete', issues: [] }) });
  assert.equal(report.results[0].status, 'legacy_chunked_unverified'); assert.equal(report.summary.legacyUnverified, 1);
  assert.equal(report.results[0].pricing.quality, 'partial'); assert.match(report.results[0].pricing.issues.join(' '), /unverified/i);
});
