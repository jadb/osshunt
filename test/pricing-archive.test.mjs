import test from 'node:test';
import assert from 'node:assert/strict';
import { queryHtmlPage, fetchHtml } from '../lib/pricing/archive.mjs';
const record = {
  timestamp: '20200101000000',
  capturedAt: '2020-01-01T00:00:00.000Z',
  originalUrl: 'https://vendor.com/pricing',
  digest: null,
};
test('exact CDX request preserves resume and cutoff, validates original', async () => {
  let query;
  const result = await queryHtmlPage(record.originalUrl, {
    cutoff: '2021-01-01T00:00:00Z',
    resumeKey: 'cursor',
    fetchImpl: async (url) => {
      query = new URL(url);
      return Response.json([
        ['timestamp', 'original', 'mimetype', 'statuscode', 'digest'],
        ['20200101000000', record.originalUrl, 'text/html', '200', '-'],
        [],
        ['next'],
      ]);
    },
  });
  assert.equal(query.searchParams.get('matchType'), 'exact');
  assert.equal(query.searchParams.get('resumeKey'), 'cursor');
  assert.equal(query.searchParams.get('to'), '20210101000000');
  assert.equal(result.resumeKey, 'next');
  assert.equal(result.records[0].capturedAt, record.capturedAt);
  await assert.rejects(
    queryHtmlPage(record.originalUrl, {
      cutoff: '2021-01-01',
      fetchImpl: async () =>
        Response.json([
          ['timestamp', 'original', 'mimetype', 'statuscode', 'digest'],
          ['20200101000000', 'https://other.com/', 'text/html', '200', '-'],
        ]),
    }),
    { code: 'archive_bad_response' },
  );
});
test('HTML guards exact replay, memento, redirects and body bound', async () => {
  const good = await fetchHtml(record, {
    fetchImpl: async () =>
      new Response('<h1>Price</h1>', {
        headers: { 'content-type': 'text/html', 'memento-datetime': 'Wed, 01 Jan 2020 00:00:00 GMT' },
      }),
  });
  assert.equal(good.metadata.sha256.length, 64);
  assert.equal(new TextDecoder().decode(good.bytes), '<h1>Price</h1>');
  await assert.rejects(
    fetchHtml(record, {
      fetchImpl: async () =>
        new Response('oops', {
          headers: { 'content-type': 'text/html', 'memento-datetime': 'Thu, 02 Jan 2020 00:00:00 GMT' },
        }),
    }),
    { code: 'archive_timestamp_mismatch' },
  );
  await assert.rejects(
    fetchHtml(record, {
      fetchImpl: async () => new Response('', { status: 302, headers: { location: 'https://evil.com' } }),
    }),
    { code: 'archive_redirect' },
  );
  await assert.rejects(
    fetchHtml(record, {
      maxBytes: 3,
      fetchImpl: async () => new Response('four', { headers: { 'content-type': 'text/html' } }),
    }),
    { code: 'archive_too_large' },
  );
});
test('CDX exact canonical lookup retains actual HTTP/www record and exact replay target', async () => {
  const result = await queryHtmlPage('https://vendor.com/pricing/', {
    cutoff: '2021-01-01',
    fetchImpl: async () =>
      Response.json([
        ['timestamp', 'original', 'mimetype', 'statuscode', 'digest'],
        ['20200101000000', 'http://www.vendor.com/pricing', 'text/html', '200', '-'],
      ]),
  });
  assert.equal(result.records[0].originalUrl, 'http://www.vendor.com/pricing');
  let requested;
  await fetchHtml(result.records[0], {
    fetchImpl: async (url) => {
      requested = url;
      return new Response('price', { headers: { 'content-type': 'text/html' } });
    },
  });
  assert.equal(requested, 'https://web.archive.org/web/20200101000000id_/http://www.vendor.com/pricing');
});
test('pending response stream is bounded even if fetch ignores abort signal', async () => {
  let cancelled = false;
  const keepAlive = setTimeout(() => {}, 1000);
  try {
    await assert.rejects(
      fetchHtml(record, {
        timeoutMs: 15,
        fetchImpl: async () =>
          new Response(
            new ReadableStream({
              pull() {
                return new Promise(() => {});
              },
              cancel() {
                cancelled = true;
              },
            }),
            { headers: { 'content-type': 'text/html' } },
          ),
      }),
      { code: 'archive_timeout' },
    );
    assert.equal(cancelled, true);
  } finally {
    clearTimeout(keepAlive);
  }
});
