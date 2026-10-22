import test from 'node:test';
import assert from 'node:assert/strict';
import { fetchHtml, verifyHtmlIntegrity } from '../lib/pricing/archive.mjs';
const digest = 'VGMT4NSHA2AWVOR6EVYXQUGCNSONBWE5';
const bytes = new TextEncoder().encode('abc');
test('HTML payload digest validates actual bytes independently of a matching optional header', async () => {
  await verifyHtmlIntegrity(bytes, digest);
  await verifyHtmlIntegrity(bytes, `sha1:${digest.toLowerCase()}`);
  await verifyHtmlIntegrity(bytes, null);
  await assert.rejects(verifyHtmlIntegrity(new TextEncoder().encode('altered'), digest), {
    code: 'archive_digest_mismatch',
  });
  const record = {
    originalUrl: 'https://vendor.com/',
    capturedAt: '2024-01-01T00:00:00.000Z',
    timestamp: '20240101000000',
    digest,
  };
  await fetchHtml(record, { fetchImpl: async () => new Response('abc', { headers: { 'content-type': 'text/html' } }) });
  await assert.rejects(
    fetchHtml(record, {
      fetchImpl: async () =>
        new Response('altered', { headers: { 'content-type': 'text/html', 'x-archive-orig-digest': digest } }),
    }),
    { code: 'archive_digest_mismatch' },
  );
});
