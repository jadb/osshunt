import test from 'node:test';
import assert from 'node:assert/strict';
import { fetchHtml, verifyHtmlEvidence, sha256 } from '../lib/pricing/archive.mjs';
const digest = 'VGMT4NSHA2AWVOR6EVYXQUGCNSONBWE5';
const record = {
  originalUrl: 'https://vendor.com/pricing',
  capturedAt: '2024-01-01T00:00:00.000Z',
  timestamp: '20240101000000',
  digest,
};
const bytes = new TextEncoder().encode('altered');
const headers = {
  'content-type': 'text/html',
  'memento-datetime': 'Mon, 01 Jan 2024 00:00:00 GMT',
  'x-archive-orig-transfer-encoding': 'chunked',
  'x-archive-orig-content-encoding': 'gzip',
  'x-archive-src': 'sample.warc.gz',
  'set-cookie': 'must-not-retain=true',
};
test('qualified pre-fix chunked mismatch is retained as explicitly unverified evidence', async () => {
  const result = await fetchHtml(record, { fetchImpl: async () => new Response(bytes, { headers }) });
  assert.equal(result.metadata.integrity.status, 'legacy_chunked_unverified');
  assert.equal(result.metadata.integrity.expectedDigest, digest);
  assert.notEqual(result.metadata.integrity.actualDigest, digest);
  assert.match(result.metadata.integrity.reason, /unproven/);
  assert.equal(result.metadata.digest, digest);
  assert.equal(result.metadata.sha256, await sha256(bytes));
  assert.equal(JSON.stringify(result.metadata).includes('must-not-retain'), false);
  assert.deepEqual(await verifyHtmlEvidence(result.bytes, record, result.metadata), result.metadata.integrity);
  await assert.rejects(verifyHtmlEvidence(new TextEncoder().encode('different'), record, result.metadata), {
    code: 'archive_digest_mismatch',
  });
});
test('legacy qualification rejects ordinary mismatches, absent proof, newer dates, drift and conflicting header', async () => {
  for (const override of [
    { 'x-archive-orig-transfer-encoding': '' },
    { 'memento-datetime': '' },
    { 'memento-datetime': 'Tue, 02 Jan 2024 00:00:00 GMT' },
    { 'x-archive-orig-digest': 'A'.repeat(32) },
  ])
    await assert.rejects(
      fetchHtml(record, { fetchImpl: async () => new Response(bytes, { headers: { ...headers, ...override } }) }),
    );
  const newer = { ...record, capturedAt: '2026-09-18T00:00:00.000Z', timestamp: '20260918000000' };
  await assert.rejects(
    fetchHtml(newer, {
      fetchImpl: async () =>
        new Response(bytes, { headers: { ...headers, 'memento-datetime': 'Fri, 18 Sep 2026 00:00:00 GMT' } }),
    }),
    { code: 'archive_digest_mismatch' },
  );
  const metadata = {
    sha256: await sha256(bytes),
    originalUrl: record.originalUrl,
    capturedAt: record.capturedAt,
    integrity: { status: 'legacy_chunked_unverified', expectedDigest: digest, actualDigest: 'A'.repeat(32) },
  };
  await assert.rejects(verifyHtmlEvidence(bytes, record, metadata), { code: 'archive_digest_mismatch' });
});
test('matching and unknown digests retain separate integrity grades and cached SHA256 validation', async () => {
  const exact = new TextEncoder().encode('abc');
  const metadata = { sha256: await sha256(exact), originalUrl: record.originalUrl, capturedAt: record.capturedAt };
  assert.equal((await verifyHtmlEvidence(exact, record, metadata)).status, 'verified');
  assert.equal((await verifyHtmlEvidence(exact, null, metadata)).status, 'unknown');
  await assert.rejects(verifyHtmlEvidence(exact, record, { ...metadata, sha256: 'a'.repeat(64) }), {
    code: 'archive_digest_mismatch',
  });
});
