import test from 'node:test';
import assert from 'node:assert/strict';
import { queryLatestHtml, queryHtmlPage, fetchHtml } from '../lib/pricing/archive.mjs';
const columns = ['timestamp', 'original', 'mimetype', 'statuscode', 'digest'];
const row = ['20240101000000', 'http://www.vendor.com/pricing', 'text/html', '200', 'VGMT4NSHA2AWVOR6EVYXQUGCNSONBWE5'];
const options = { cutoff: '2024-01-02T00:00:00.000Z', from: '2023-12-01T00:00:00.000Z' };
test('latest diagnostic requests one exact bounded HTML record and returns no inventory claims', async () => {
  let query;
  const result = await queryLatestHtml('https://vendor.com/pricing', {
    ...options,
    fetchImpl: async (url) => {
      query = new URL(url);
      return Response.json([columns, row]);
    },
  });
  assert.equal(query.searchParams.get('limit'), '-1');
  assert.equal(query.searchParams.get('fastLatest'), 'true');
  assert.equal(query.searchParams.get('matchType'), 'exact');
  assert.equal(query.searchParams.get('showResumeKey'), null);
  assert.equal(query.searchParams.get('from'), '20231201000000');
  assert.equal(query.searchParams.get('to'), '20240102000000');
  assert.deepEqual(Object.keys(result).sort(), ['query', 'record']);
  assert.equal(result.record.originalUrl, row[1]);
  assert.equal(result.record.capturedAt, '2024-01-01T00:00:00.000Z');
  assert.equal(result.record.digest, row[4]);
  const html = await fetchHtml(result.record, {
    fetchImpl: async () =>
      new Response('abc', {
        headers: { 'content-type': 'text/html', 'memento-datetime': 'Mon, 01 Jan 2024 00:00:00 GMT' },
      }),
  });
  assert.equal(html.metadata.originalUrl, row[1]);
  assert.equal(html.metadata.digest, row[4]);
  await assert.rejects(queryHtmlPage('https://vendor.com/pricing', { ...options, limit: -1 }), RangeError);
});
test('latest diagnostic rejects wrong original, dates, MIME/status and unexpected continuation', async () => {
  for (const invalid of [
    [row[0], 'https://other.com/pricing', ...row.slice(2)],
    ['20240201000000', ...row.slice(1)],
    ['20231101000000', ...row.slice(1)],
    [...row.slice(0, 2), 'image/png', ...row.slice(3)],
    [...row.slice(0, 3), '301', row[4]],
  ])
    await assert.rejects(
      queryLatestHtml('https://vendor.com/pricing', {
        ...options,
        fetchImpl: async () => Response.json([columns, invalid]),
      }),
      { code: 'archive_bad_response' },
    );
  await assert.rejects(
    queryLatestHtml('https://vendor.com/pricing', {
      ...options,
      fetchImpl: async () => Response.json([columns, row, [], ['cursor']]),
    }),
    { code: 'archive_incomplete' },
  );
});
test('latest diagnostic retains empty result and shared rate-limit error semantics', async () => {
  const empty = await queryLatestHtml('https://vendor.com/pricing', {
    ...options,
    fetchImpl: async () => Response.json([]),
  });
  assert.equal(empty.record, null);
  assert.equal(empty.query.status, 200);
  await assert.rejects(
    queryLatestHtml('https://vendor.com/pricing', {
      ...options,
      fetchImpl: async () => new Response('Busy', { status: 429, headers: { 'retry-after': '90' } }),
    }),
    { code: 'archive_rate_limited', retryAfter: 90 },
  );
});
