import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { observation } from './fixtures/pricing-observation.mjs';
import { sha256, verifyHtmlEvidence } from '../lib/pricing/archive.mjs';
import { validatePricingObservations } from '../lib/pricing/schema.mjs';
import { exportReview, importReview, observationBodies } from '../lib/pricing/review.mjs';
import { downloadCloudReview } from '../scripts/review-pricing.mjs';
import { FilePricingStore } from '../lib/pricing/stores-file.mjs';

async function setup() {
  const proposal = observation(); proposal.reviewState = 'proposed'; delete proposal.review;
  proposal.quality = 'partial'; proposal.sourceDigest = 'A'.repeat(32);
  const landing = new TextEncoder().encode('landing'), pricing = new TextEncoder().encode('pricing');
  proposal.sourceSha256 = await sha256(pricing); proposal.landingSha256 = await sha256(landing);
  const transport = { status: 200, mementoDatetime: 'Wed, 01 Jan 2020 00:00:00 GMT', originalUrl: proposal.pricingUrl,
    archivedTransferEncoding: 'chunked', originalContentEncoding: null, sourceWarc: 'sample.warc.gz', originalDigest: null };
  const metadata = { sha256: proposal.sourceSha256, originalUrl: proposal.pricingUrl, capturedAt: proposal.pricingCapturedAt,
    mimeType: 'text/html', transport };
  proposal.sourceIntegrity = await verifyHtmlEvidence(pricing, { digest: proposal.sourceDigest,
    originalUrl: proposal.pricingUrl, capturedAt: proposal.pricingCapturedAt }, metadata);
  metadata.integrity = proposal.sourceIntegrity; proposal.sourceTransport = transport;
  proposal.issues = [proposal.sourceIntegrity.reason];
  const store = { getProposals: async () => [proposal], getBody: async identity => identity.includes('/pricing|')
    ? { bytes: pricing, metadata } : { bytes: landing, metadata: {} } };
  return { proposal, store, catalog: [{ id: 'sample' }], metadata, pricing, landing };
}
async function confirmedDocument(args) {
  const document = await exportReview({ ...args, productId: 'sample' });
  document.observations[0].decision = 'confirm'; document.observations[0].reviewer = 'maintainer';
  return document;
}
test('legacy review export warns and defaults explicit acknowledgement to false', async () => {
  const args = await setup(), document = await exportReview({ ...args, productId: 'sample' });
  assert.equal(document.observations[0].acceptUnverifiedArchiveDigest, false);
  assert.match(document.observations[0].archiveIntegrityWarning, /unverified/i);
});
test('legacy digest needs explicit per-observation acceptance; accepted facts stay partial', async () => {
  const args = await setup(), document = await confirmedDocument(args);
  await assert.rejects(importReview({ ...args, document, existing: [] }), /accept|acknowledg/i);
  document.observations[0].acceptUnverifiedArchiveDigest = true;
  const [row] = await importReview({ ...args, document, existing: [] });
  assert.equal(row.review.acceptedUnverifiedArchiveDigest, true);
  assert.equal(row.quality, 'partial'); assert.equal(row.sourceIntegrity.status, 'legacy_chunked_unverified');
  assert.deepEqual(row.sourceTransport, args.proposal.sourceTransport);
  assert.match(row.issues.join(' '), /unverified/i);
});
test('legacy confirmation rejects absent qualification, tampered bytes and changed proposed grades', async t => {
  for (const mutation of ['proof', 'bytes', 'grade']) await t.test(mutation, async () => {
    const args = await setup();
    if (mutation === 'proof') { delete args.proposal.sourceTransport; delete args.metadata.transport; }
    if (mutation === 'grade') args.proposal.sourceIntegrity.actualDigest = 'B'.repeat(32);
    const document = await confirmedDocument(args); document.observations[0].acceptUnverifiedArchiveDigest = true;
    if (mutation === 'bytes') args.store.getBody = async () => ({ bytes: new TextEncoder().encode('tampered'), metadata: args.metadata });
    await assert.rejects(importReview({ ...args, document, existing: [] }), /digest|hash|transport|evidence|grade|qualif/i);
  });
});
test('confirmed legacy schema requires acknowledgement, partial quality and exact transport proof', async () => {
  const args = await setup(), row = { ...args.proposal, reviewState: 'confirmed', review: { reviewer: 'maintainer',
    reviewedAt: '2026-10-22T00:00:00.000Z', decision: 'confirmed', acceptedUnverifiedArchiveDigest: true } };
  assert.equal(validatePricingObservations([row], args.catalog).length, 1);
  for (const mutation of ['ack', 'quality', 'transport', 'date', 'encoding', 'digest', 'reason']) {
    const changed = structuredClone(row);
    if (mutation === 'ack') delete changed.review.acceptedUnverifiedArchiveDigest;
    if (mutation === 'quality') changed.quality = 'complete';
    if (mutation === 'transport') delete changed.sourceTransport;
    if (mutation === 'date') changed.sourceTransport.mementoDatetime = 'Thu, 02 Jan 2020 00:00:00 GMT';
    if (mutation === 'encoding') changed.sourceTransport.archivedTransferEncoding = null;
    if (mutation === 'digest') changed.sourceIntegrity.expectedDigest = 'B'.repeat(32);
    if (mutation === 'reason') delete changed.sourceIntegrity.reason;
    assert.throws(() => validatePricingObservations([changed], args.catalog), undefined, mutation);
  }
});
test('cloud evidence download reconstructs grade and transport from the immutable proposal', async t => {
  const args = await setup(), directory = await mkdtemp(join(tmpdir(), 'pricing-cloud-integrity-'));
  t.after(() => rm(directory, { recursive: true }));
  const store = new FilePricingStore(directory), sources = observationBodies(args.proposal);
  let downloads = 0;
  const command = async (_program, argv) => {
    if (argv[0] === 'd1') return { stdout: JSON.stringify([{ results: [{ checked_at: '2026-10-22T00:00:00.000Z',
      next_check_at: '2027-04-22T00:00:00.000Z', checkpoint: JSON.stringify({ proposals: [args.proposal], complete: true }) }] }]) };
    const source = sources[downloads++];
    await writeFile(argv[argv.indexOf('--file') + 1], source.kind === 'pricing' ? args.pricing : args.landing);
    return { stdout: '' };
  };
  await downloadCloudReview({ productId: 'sample', store, database: 'DB', bucket: 'private', config: 'config.jsonc', command });
  const cached = await store.getBody(sources.find(s => s.kind === 'pricing').identity);
  assert.deepEqual(cached.metadata.transport, args.proposal.sourceTransport);
  assert.deepEqual(cached.metadata.integrity, args.proposal.sourceIntegrity);
  const document = await confirmedDocument({ ...args, store }); document.observations[0].acceptUnverifiedArchiveDigest = true;
  assert.equal((await importReview({ ...args, store, document, existing: [] }))[0].review.acceptedUnverifiedArchiveDigest, true);
});
test('unknown inventory digest may retain an original digest header without claiming verification', async () => {
  const args = await setup(); args.proposal.sourceDigest = null;
  args.proposal.sourceTransport.originalDigest = 'A'.repeat(32);
  args.metadata.digest = null;
  args.metadata.integrity = await verifyHtmlEvidence(args.pricing, { digest: null, originalUrl: args.proposal.pricingUrl,
    capturedAt: args.proposal.pricingCapturedAt }, args.metadata);
  args.proposal.sourceIntegrity = args.metadata.integrity;
  const document = await confirmedDocument(args);
  const [row] = await importReview({ ...args, document, existing: [] });
  assert.equal(row.sourceIntegrity.status, 'unknown');
  assert.equal(row.review.acceptedUnverifiedArchiveDigest, undefined);
});
