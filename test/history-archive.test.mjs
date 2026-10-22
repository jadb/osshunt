import test from 'node:test';
import assert from 'node:assert/strict';
import { discoverScreenshots, assertExactReplayUrl, validateLandingUrl } from '../lib/history/archive.mjs';
import { MIN_INTERVAL_MS, selectHistoricalFrames, selectNewFrame, screenshotId } from '../lib/history/selection.mjs';
import { verifyImage } from '../lib/history/image.mjs';

const FIELDS = ['timestamp', 'original', 'mimetype', 'statuscode', 'digest'];
const landing = 'https://webapps.stackexchange.com/';
const original = 'http://web.archive.org/screenshot/http://webapps.stackexchange.com/';
const first = ['20120329224219', original, 'image/png', '-', 'AU55WVCJLG4RFYWWHPRXKLGLLBWIYK7N'];
const json = data => new Response(JSON.stringify(data), { headers: { 'content-type': 'application/json' } });
const stamp = ms => new Date(ms).toISOString().replace(/[-:T]/g, '').slice(0, 14);
const start = Date.UTC(2020, 0, 1);
function frame(days, extra = {}) {
  const timestamp = stamp(start + days * 86400000);
  return { timestamp, sourceImageUrl: `https://web.archive.org/web/${timestamp}id_/${original}`,
    originalUrl: landing, digest: null, mimeType: 'image/png', ...extra };
}
const png = Uint8Array.from(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLbtAAAAABJRU5ErkJggg==', 'base64'));

// Read-only CDX response shape and values observed for the public image record.
test('discovery accepts screenshot dash status, preserves image dates and probes namespaces', async () => {
  const calls = [];
  const result = await discoverScreenshots(landing, { fetchImpl: async (input, options) => {
    const url = new URL(input);
    calls.push(url);
    assert.equal(url.hostname, 'web.archive.org');
    assert.equal(options.redirect, 'error');
    assert.ok(options.signal);
    assert.equal(url.searchParams.get('matchType'), 'exact');
    assert.equal(url.searchParams.get('showResumeKey'), 'true');
    assert.equal(url.searchParams.has('filter'), false);
    return json(url.searchParams.get('url').startsWith('http://web.archive.org/screenshot/') ? [FIELDS, first] : []);
  } });
  assert.equal(result.complete, true);
  assert.equal(result.frames.length, 1);
  const found = result.frames[0];
  assert.equal(found.timestamp, '20120329224219');
  assert.equal(found.capturedAt, '2012-03-29T22:42:19.000Z');
  assert.equal(found.originalUrl, landing);
  assert.equal(found.sourceImageUrl, `https://web.archive.org/web/20120329224219id_/${original}`);
  assert.equal(found.imageKind, 'screenshot');
  assert.equal(found.id, screenshotId(found));
  assert.equal(calls.length, 6);
  assert.ok(calls.some(url => url.searchParams.get('url') === 'screenshot:http://webapps.stackexchange.com/'));
  assert.ok(calls.some(url => url.searchParams.get('url') === 'thumbnail:https://webapps.stackexchange.com/'));
  assert.equal(result.queries.length, 6);
});

test('discovery follows opaque resume keys without changing query scope', async () => {
  const calls = [];
  const token = 'opaque%2F+token!';
  const target = `http://web.archive.org/screenshot/http://webapps.stackexchange.com/`;
  const result = await discoverScreenshots(landing, { fetchImpl: async input => {
    const url = new URL(input);
    calls.push(url);
    if (url.searchParams.get('url') !== target) return json([]);
    if (!url.searchParams.has('resumeKey')) return json([FIELDS, first, [], [token]]);
    else {
      assert.equal(url.searchParams.get('resumeKey'), token);
      assert.equal(url.searchParams.get('url'), target);
      return json([FIELDS, ['20120627200053', original, 'image/png', '-', '-']]);
    }
  } });
  assert.equal(result.frames.length, 2);
  assert.equal(result.frames[1].digest, null);
  assert.equal(calls.length, 7);
});

test('independent namespace lookups start concurrently while each continuation stays sequential', async () => {
  let release;
  const blocked = new Promise(resolve => { release = resolve; });
  const calls = [];
  const discovery = discoverScreenshots(landing, { fetchImpl: async input => {
    const url = new URL(input);
    calls.push(url);
    if (url.searchParams.get('url') === `http://web.archive.org/screenshot/http://webapps.stackexchange.com/`) {
      if (!url.searchParams.has('resumeKey')) { await blocked; return json([FIELDS, first, [], ['next-page']]); }
      assert.equal(url.searchParams.get('resumeKey'), 'next-page');
    }
    return json([]);
  } });
  try {
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(calls.length, 6, 'all independent namespace requests start before the blocked first response');
    assert.equal(calls.filter(url => url.searchParams.has('resumeKey')).length, 0);
  } finally { release(); await discovery; }
  assert.equal(calls.length, 7);
});

test('concurrent namespace requests share a strict record budget', async () => {
  let requested = 0;
  const maximum = 7;
  await assert.rejects(discoverScreenshots(landing, { maxRecords: maximum, fetchImpl: async input => {
    const url = new URL(input);
    const limit = Number(url.searchParams.get('limit'));
    requested += limit;
    const target = url.searchParams.get('url');
    const rows = Array.from({ length: limit }, () => [first[0], target, 'image/png', '-', '-']);
    return json([FIELDS, ...rows, [], [`next-${target}-${requested}`]]);
  } }), { code: 'archive_incomplete' });
  assert.ok(requested <= maximum + 1, 'only one extra record may establish truncation across all requests');
});

test('a terminal full page without a resume key can fit a small global budget', async () => {
  let calls = 0;
  const result = await discoverScreenshots(landing, { maxRecords: 1, fetchImpl: async () =>
    json(++calls === 1 ? [FIELDS, first] : []) });
  assert.equal(result.complete, true);
  assert.equal(result.frames.length, 1);
  assert.equal(calls, 6);
});

test('a concurrent rate limit cancels and settles peer requests without returning partial frames', async () => {
  let started = 0;
  let settled = 0;
  let release;
  const ready = new Promise(resolve => { release = resolve; });
  const discovery = discoverScreenshots(landing, { fetchImpl: async (_input, { signal }) => {
    started++;
    if (started === 6) release();
    await ready;
    try {
      if (started && _input.includes('screenshot%3Ahttp%3A')) {
        return new Response(null, { status: 429, headers: { 'retry-after': '30' } });
      }
      if (_input.includes('thumbnail%3A')) {
        await new Promise((resolve, reject) => {
          if (signal.aborted) reject(signal.reason);
          else signal.addEventListener('abort', () => reject(signal.reason), { once: true });
        });
      }
      return json([FIELDS, first]);
    } finally { settled++; }
  } });
  await assert.rejects(discovery, { code: 'archive_rate_limited', retryAfter: 30 });
  assert.equal(started, 6);
  assert.equal(settled, started, 'no peer requests remain unsettled');
});

test('CDX leading-www aliases preserve the exact indexed source and catalog landing URL', async () => {
  // CDX exact lookup for github.com returned this existing www.github.com image.
  const source = 'http://web.archive.org/screenshot/http://www.github.com/';
  const row = ['20120111144336', source, 'image/png', '-', 'AWNL27Y2NKUGNJDHCAYX7VXH4P45KPLY'];
  let calls = 0;
  const result = await discoverScreenshots('https://github.com/', { fetchImpl: async () =>
    json(++calls === 1 ? [FIELDS, row] : []) });
  assert.equal(result.frames[0].originalUrl, 'https://github.com/');
  assert.equal(result.frames[0].sourceImageUrl, `https://web.archive.org/web/${row[0]}id_/${source}`);
  assert.equal(result.frames[0].digest, row[4]);

  const withoutWww = row.with(1, source.replace('www.github.com', 'github.com'));
  calls = 0;
  const reverse = await discoverScreenshots('https://www.github.com/', { fetchImpl: async () =>
    json(++calls === 1 ? [FIELDS, withoutWww] : []) });
  assert.equal(reverse.frames[0].originalUrl, 'https://www.github.com/');
  assert.match(reverse.frames[0].sourceImageUrl, /screenshot\/http:\/\/github\.com\/$/);

  for (const host of ['docs.github.com', 'www.www.github.com', 'github.com.evil.org']) {
    const unrelated = row.with(1, source.replace('www.github.com', host));
    await assert.rejects(discoverScreenshots('https://github.com/', { fetchImpl: async () => json([FIELDS, unrelated]) }),
      { code: 'archive_bad_response' });
  }
});

test('empty validated responses differ from unavailable, malformed and rate-limited responses', async () => {
  assert.deepEqual((await discoverScreenshots(landing, { fetchImpl: async () => json([]) })).frames, []);
  await assert.rejects(discoverScreenshots(landing, { fetchImpl: async () => { throw new Error('offline'); } }), { code: 'archive_unavailable' });
  await assert.rejects(discoverScreenshots(landing, { fetchImpl: async () => new Response('busy', { status: 503 }) }), { code: 'archive_unavailable' });
  await assert.rejects(discoverScreenshots(landing, { fetchImpl: async () => new Response('slow', { status: 429, headers: { 'retry-after': '120' } }) }), { code: 'archive_rate_limited', retryAfter: 120 });
  await assert.rejects(discoverScreenshots(landing, { fetchImpl: async () => new Response('<html>blocked</html>') }), { code: 'archive_bad_response' });
  await assert.rejects(discoverScreenshots(landing, { fetchImpl: async () => json({}) }), { code: 'archive_bad_response' });
  await assert.rejects(discoverScreenshots(landing, { fetchImpl: async () => json([['wrong']]) }), { code: 'archive_bad_response' });
});

test('timeouts and caller cancellation terminate discovery with typed errors', async t => {
  const timeout = AbortSignal.timeout;
  t.mock.method(AbortSignal, 'timeout', () => timeout(5));
  const fetchImpl = async (_url, { signal }) => new Promise((_resolve, reject) => {
    signal.addEventListener('abort', () => reject(signal.reason), { once: true });
    if (signal.aborted) reject(signal.reason);
  });
  // Keep the event loop alive: native timeout signals intentionally do not.
  const keepAlive = setInterval(() => {}, 100);
  try {
    await assert.rejects(discoverScreenshots(landing, { fetchImpl }), { code: 'archive_timeout' });
    const controller = new AbortController();
    controller.abort();
    await assert.rejects(discoverScreenshots(landing, { fetchImpl, signal: controller.signal }), { code: 'archive_aborted' });
  } finally { clearInterval(keepAlive); }
});

test('truncation, repeat cursors and metadata size limits cannot become complete empty history', async () => {
  await assert.rejects(discoverScreenshots(landing, { maxRecords: 1, fetchImpl: async () => json([FIELDS, first, first]) }), { code: 'archive_incomplete' });
  await assert.rejects(discoverScreenshots(landing, { maxRecords: 1, fetchImpl: async () => json([FIELDS, first, [], ['next']]) }), { code: 'archive_incomplete' });
  await assert.rejects(discoverScreenshots(landing, { fetchImpl: async () => json([FIELDS, first, [], ['repeated']]) }), { code: 'archive_incomplete' });
  await assert.rejects(discoverScreenshots(landing, { fetchImpl: async () => new Response('[]', { headers: { 'content-length': '5000000' } }) }), { code: 'archive_incomplete' });
  await assert.rejects(discoverScreenshots(landing, { fetchImpl: async () => json([FIELDS, [], ['next']]) }), { code: 'archive_incomplete' });
});

test('discovery skips unsupported media and rejects unrelated images or invalid dates', async () => {
  assert.equal((await discoverScreenshots(landing, { fetchImpl: async () => json([FIELDS, [first[0], original, 'image/svg+xml', '-', '-']]) })).frames.length, 0);
  assert.equal((await discoverScreenshots(landing, { fetchImpl: async () => json([FIELDS, [first[0], original, 'text/html', '200', '-']]) })).frames.length, 0);
  await assert.rejects(discoverScreenshots(landing, { fetchImpl: async () => json([FIELDS, [first[0], 'screenshot:https://other.org/', 'image/png', '-', '-']]) }), { code: 'archive_bad_response' });
  await assert.rejects(discoverScreenshots(landing, { fetchImpl: async () => json([FIELDS, ['20200230000000', original, 'image/png', '-', '-']]) }), { code: 'archive_bad_response' });
});

test('only public landing identifiers are accepted before any request', async () => {
  for (const url of ['file:///etc/passwd', 'http://localhost/', 'http://127.0.0.1/', 'http://2130706433/', 'http://[::1]/', 'http://host.internal/', 'https://user:pass@public.org/', 'https://public.org:8000/', 'https://*.public.org/']) {
    await assert.rejects(discoverScreenshots(url, { fetchImpl: () => assert.fail('No request allowed') }), { code: 'unsafe_url' });
  }
  assert.equal(validateLandingUrl('https://public.org/#section').href, 'https://public.org/');
});

test('exact replay guard rejects closest-date substitutions and foreign redirect targets', () => {
  const expected = frame(0);
  assert.equal(assertExactReplayUrl(expected.sourceImageUrl, expected), expected.sourceImageUrl);
  assert.throws(() => assertExactReplayUrl(frame(1).sourceImageUrl, expected), { code: 'archive_timestamp_mismatch' });
  assert.throws(() => assertExactReplayUrl(expected.sourceImageUrl.replace('web.archive.org', 'evil.org'), expected), { code: 'unsafe_archive_url' });
  assert.throws(() => assertExactReplayUrl(expected.sourceImageUrl.replace('/screenshot/', '/other/'), expected), { code: 'unsafe_archive_url' });
  assert.throws(() => assertExactReplayUrl(expected.sourceImageUrl.replace('webapps.stackexchange.com', 'other.org'), expected), { code: 'archive_timestamp_mismatch' });
  const resource = frame(0, { sourceImageUrl: `https://web.archive.org/web/${frame(0).timestamp}id_/screenshot:https://public.org/` });
  assert.equal(assertExactReplayUrl(resource.sourceImageUrl, resource), resource.sourceImageUrl);
});

test('historical selection uses exact 30-day elapsed boundary and deduplicates payloads', () => {
  assert.equal(MIN_INTERVAL_MS, 2592000000);
  const items = [frame(60), frame(29), frame(0), frame(30), frame(30), frame(90, { digest: 'duplicate' }), frame(120, { digest: 'duplicate' })];
  assert.deepEqual(selectHistoricalFrames(items).map(value => value.timestamp), [0, 30, 60, 90].map(day => frame(day).timestamp));
  const before = frame(0);
  const boundary = frame(30);
  const oneSecondEarly = frame(30, { timestamp: stamp(start + MIN_INTERVAL_MS - 1000) });
  assert.deepEqual(selectHistoricalFrames([before, oneSecondEarly, boundary]), [before, boundary]);
  assert.deepEqual(selectHistoricalFrames([]), []);
});

test('subsequent refresh appends only the newest eligible unseen image', () => {
  const existing = [frame(0), frame(30, { digest: 'known' })];
  assert.equal(selectNewFrame([frame(59)], existing), null);
  assert.equal(selectNewFrame([frame(60), frame(90), frame(120, { digest: 'known' })], existing).timestamp, frame(90).timestamp);
  assert.equal(selectNewFrame([frame(60)], existing).timestamp, frame(60).timestamp);
  assert.equal(selectNewFrame([], existing), null);
  assert.equal(selectNewFrame([frame(0), frame(60)], []).timestamp, frame(60).timestamp);
});

test('thumbnail cannot displace a nearby full screenshot', () => {
  const thumbnail = frame(0, { imageKind: 'thumbnail' });
  const full = frame(1, { imageKind: 'screenshot' });
  assert.deepEqual(selectHistoricalFrames([thumbnail, full]), [full]);
  assert.equal(selectNewFrame([frame(60, { imageKind: 'thumbnail' }), frame(59, { imageKind: 'screenshot' })], [frame(0)]).timestamp, frame(59).timestamp);
  assert.equal(selectHistoricalFrames([thumbnail, frame(31)])[0], thumbnail);
});

test('immutable screenshot identity includes exact source and source digest, ignores mutable metadata', () => {
  const source = frame(0);
  assert.equal(screenshotId(source), screenshotId({ ...source, capturedAt: 'wrong', width: 100, id: 'caller-value' }));
  assert.notEqual(screenshotId(source), screenshotId({ ...source, digest: 'different' }));
  assert.notEqual(screenshotId(source), screenshotId({ ...source, sourceImageUrl: source.sourceImageUrl.replace('http://web.archive.org/screenshot/', 'screenshot:') }));
  assert.match(screenshotId(source), /^[a-zA-Z0-9_-]+$/);
});

test('image verification reads dimensions, enforces MIME and digest, and hashes actual bytes', async () => {
  const result = await verifyImage(png, { mimeType: 'image/png', digest: 'JFR7EXEL7ZEUHUYUNPV3AGBFX7MU7HMX' });
  assert.equal(result.width, 1);
  assert.equal(result.height, 1);
  assert.equal(result.size, png.length);
  assert.equal(result.sha256, '2640059609118b695c139804676372eca75c30d30e5906775902d13e44f5356c');
  assert.deepEqual(await verifyImage(png.buffer), result);
  await assert.rejects(verifyImage(png, { mimeType: 'image/jpeg' }), { code: 'invalid_image' });
  await assert.rejects(verifyImage(png, { digest: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' }), { code: 'image_digest_mismatch' });
  await assert.rejects(verifyImage(png, { digest: 'bad' }), { code: 'invalid_image' });
  await assert.rejects(verifyImage(png, { maxBytes: png.length - 1 }), { code: 'invalid_image' });
  await assert.rejects(verifyImage(png.subarray(0, 30)), { code: 'invalid_image' });
  await assert.rejects(verifyImage(new TextEncoder().encode('<svg xmlns="http://www.w3.org/2000/svg"/>')), { code: 'invalid_image' });
  await assert.rejects(verifyImage(new TextEncoder().encode('<html>Not an image</html>')), { code: 'invalid_image' });
});

test('GIF, JPEG and WebP dimensions follow their binary headers', async () => {
  const gif = Uint8Array.from(Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64'));
  assert.equal((await verifyImage(gif, { mimeType: 'image/gif' })).width, 1);
  const jpeg = Uint8Array.from([0xff, 0xd8, 0xff, 0xc0, 0, 11, 8, 0, 2, 0, 3, 1, 1, 0x11, 0, 0xff, 0xd9]);
  assert.deepEqual(Object.values(await verifyImage(jpeg)).slice(0, 3), ['image/jpeg', 3, 2]);
  const webp = new Uint8Array(30);
  webp.set(Buffer.from('RIFF')); webp[4] = 22; webp.set(Buffer.from('WEBPVP8X'), 8); webp[16] = 10;
  webp[24] = 2; webp[27] = 1;
  assert.deepEqual(Object.values(await verifyImage(webp)).slice(0, 3), ['image/webp', 3, 2]);
  await assert.rejects(verifyImage(webp.subarray(0, 29)), { code: 'invalid_image' });
  const oversized = png.slice();
  new DataView(oversized.buffer).setUint32(16, 100001);
  await assert.rejects(verifyImage(oversized), { code: 'invalid_image' });
});
