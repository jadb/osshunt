import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { observation } from './fixtures/pricing-observation.mjs';
import { exportReview, importReview } from '../lib/pricing/review.mjs';
import { confirmReviewFile, downloadCloudReview } from '../scripts/review-pricing.mjs';
import { FilePricingStore } from '../lib/pricing/stores-file.mjs';
import { mkdtemp, readFile, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
const digest = text => createHash('sha256').update(text).digest('hex');
function setup() {
  const proposal = observation(); proposal.reviewState = 'proposed'; delete proposal.review;
  proposal.sourceSha256 = digest('pricing'); proposal.landingSha256 = digest('landing');
  const store = { getProposals: async () => [proposal], getBody: async identity => ({
    bytes: new TextEncoder().encode(identity.includes('/pricing|') ? 'pricing' : 'landing'), metadata: {} }) };
  return { store, proposal, catalog: [{ id: 'sample' }] };
}
test('only explicit confirmation imports unchanged supported proposals', async () => {
  const args = setup(), document = await exportReview({ ...args, productId: 'sample' });
  assert.deepEqual(await importReview({ ...args, document, existing: [] }), []);
  document.observations[0].decision = 'confirm'; document.observations[0].reviewer = 'maintainer';
  const rows = await importReview({ ...args, document, existing: [] });
  assert.equal(rows[0].reviewState, 'confirmed'); assert.equal(rows[0].review.reviewer, 'maintainer');
  assert.equal(rows[0].plans[0].offers[0].amount, '12');
});
test('altered prices, absent bodies, changed hashes and missing reviewer cannot confirm', async () => {
  for (const mutation of ['amount', 'missing', 'hash', 'reviewer']) {
    const args = setup(), document = await exportReview({ ...args, productId: 'sample' });
    const item = document.observations[0]; item.decision = 'confirm'; item.reviewer = 'maintainer';
    if (mutation === 'amount') item.proposal.plans[0].offers[0].amount = '1';
    if (mutation === 'missing') args.store.getBody = async () => null;
    if (mutation === 'hash') args.store.getBody = async () => ({ bytes: new TextEncoder().encode('different') });
    if (mutation === 'reviewer') item.reviewer = '';
    await assert.rejects(importReview({ ...args, document, existing: [] }));
  }
});
test('rejected proposals do not publish or remove previously confirmed history', async () => {
  const args = setup(), document = await exportReview({ ...args, productId: 'sample' });
  document.observations[0].decision = 'reject';
  const rows = await importReview({ ...args, document, existing: [observation()] });
  assert.equal(rows.length, 1);
});
test('concurrent confirmations preserve both products in the shared collection', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'pricing-review-')); t.after(() => rm(directory, { recursive: true }));
  const confirmedFile = join(directory, 'confirmed.json'); await writeFile(confirmedFile, '[]\n');
  const catalog = [{ id: 'first' }, { id: 'second' }], proposals = new Map();
  for (const product of catalog) {
    const item = setup().proposal; item.id = `${product.id}-2020`; item.productId = product.id; proposals.set(product.id, item);
  }
  const store = setup().store;
  store.getProposals = async id => {
    if (id === 'first') await new Promise(resolve => setTimeout(resolve, 25));
    return [proposals.get(id)];
  };
  const documents = [];
  for (const product of catalog) {
    const document = await exportReview({ productId: product.id, store, catalog });
    document.observations[0].decision = 'confirm'; document.observations[0].reviewer = 'maintainer'; documents.push(document);
  }
  await Promise.all(documents.map(document => confirmReviewFile({ document, store, catalog, confirmedFile, build: async () => {} })));
  const rows = JSON.parse(await readFile(confirmedFile, 'utf8'));
  assert.deepEqual(rows.map(row => row.productId), ['first', 'second']);
});
test('cloud review copies private authenticated evidence without public archive endpoints', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'pricing-cloud-review-')); t.after(() => rm(directory, { recursive: true }));
  const store = new FilePricingStore(directory), proposal = setup().proposal, commands = [];
  const row = { checked_at: '2026-10-22T00:00:00.000Z', next_check_at: '2027-04-22T00:00:00.000Z',
    checkpoint: JSON.stringify({ proposals: [proposal], complete: true }) };
  const command = async (program, args) => {
    commands.push({ program, args });
    assert.equal(program, 'wrangler'); assert.ok(args.includes('--remote'));
    if (args[0] === 'd1') return { stdout: JSON.stringify([{ results: [row] }]) };
    const file = args[args.indexOf('--file') + 1];
    await writeFile(file, commands.length === 2 ? 'landing' : 'pricing'); return { stdout: '' };
  };
  await downloadCloudReview({ productId: 'sample', store, database: 'DB', bucket: 'private', config: 'config.jsonc', command });
  assert.equal(commands.length, 3); assert.equal((await store.getProposals('sample'))[0].id, proposal.id);
  const document = await exportReview({ productId: 'sample', store, catalog: [{ id: 'sample' }] });
  document.observations[0].decision = 'confirm'; document.observations[0].reviewer = 'maintainer';
  assert.equal((await importReview({ document, existing: [], store, catalog: [{ id: 'sample' }] })).length, 1);
});
test('confirmation rejects a retained CDX digest mismatch even when downloaded SHA256 matches', async () => {
  const args = setup(); args.proposal.sourceDigest = 'A'.repeat(32);
  const document = await exportReview({ ...args, productId: 'sample' });
  document.observations[0].decision = 'confirm'; document.observations[0].reviewer = 'maintainer';
  await assert.rejects(importReview({ ...args, document, existing: [] }), /digest/i);
});
