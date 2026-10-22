import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHistoryService, validateReplay } from '../lib/history/service.mjs';
import { FileHistoryStore } from '../lib/history/stores-file.mjs';
import { CloudflareHistoryStore } from '../lib/history/stores-cloudflare.mjs';

const MONTH = 30 * 86400000;
const catalog = [{ id: 'example', name: 'Example', url: 'https://example.org/', kind: 'alternative', categories: ['Tools'] }];
const png = new Uint8Array(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/lxoAAAAASUVORK5CYII=', 'base64'));
const frame = date => {
  const capturedAt = new Date(date).toISOString(), timestamp = capturedAt.replace(/[-:TZ.]/g, '').slice(0, 14);
  const sourceImageUrl = `https://web.archive.org/web/${timestamp}id_/screenshot:https://example.org/`;
  return { id: `image-${timestamp}`, timestamp, capturedAt, originalUrl: catalog[0].url,
    sourceImageUrl, archiveUrl: sourceImageUrl, mimeType: 'image/png', digest: null };
};
const a = frame('2020-01-01'), b = frame('2020-02-01'), c = frame('2020-03-10'), d = frame('2020-04-15');
const historical = frames => frames.sort((a, b) => a.capturedAt.localeCompare(b.capturedAt))
  .reduce((all, item) => !all.length || Date.parse(item.capturedAt) - Date.parse(all.at(-1).capturedAt) >= MONTH ? [...all, item] : all, []);
const newest = (frames, existing) => frames.filter(item => !existing.some(old => old.id === item.id) &&
  (!existing.length || Date.parse(item.capturedAt) - Date.parse(existing.at(-1).capturedAt) >= MONTH))
  .sort((a, b) => b.capturedAt.localeCompare(a.capturedAt))[0] || null;
async function fixture(t, overrides = {}) {
  const directory = await mkdtemp(join(tmpdir(), 'history-service-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const state = { now: Date.parse('2026-01-01'), frames: [a, b], discovers: 0, fetches: 0, verifies: 0 };
  const archive = {
    async discoverScreenshots() { state.discovers++; if (state.discoveryError) throw (state.discoveryError instanceof Error ? state.discoveryError : new Error('Unavailable'));
      if (state.discoveryWait) await state.discoveryWait; return { frames: structuredClone(state.frames), complete: state.complete ?? true }; },
    selectHistoricalFrames: historical, selectNewFrame: newest,
    async verifyImage(bytes, options) {
      state.verifies++; assert.equal(options.maxBytes, 10485760);
      if (state.badDigest || !Buffer.from(bytes).equals(Buffer.from(png))) throw new Error('Digest or magic mismatch');
      return { mimeType: 'image/png', width: 1, height: 1, sha256: 'verified', size: bytes.length };
    },
  };
  const fetchImpl = async () => {
    state.fetches++; if (state.fetchWait) await state.fetchWait;
    return state.response?.() || new Response(png, { headers: { 'Content-Type': 'image/png' } });
  };
  const store = new FileHistoryStore(directory);
  const options = { catalog, store, archive, fetchImpl, clock: () => state.now, ...overrides };
  let service = createHistoryService(options);
  return { state, store, archive, directory,
    request: (path = '', method = 'GET', extra = {}) => service.fetch(new Request(`https://history.example/api/history/example${path}`, { method, ...extra })),
    direct: (path, method = 'GET') => service.fetch(new Request(`https://history.example${path}`, { method })),
    restart: () => { service = createHistoryService({ ...options, store: new FileHistoryStore(directory) }); },
  };
}
const body = response => response.json();
const imagePath = item => `/frames/${item.id}/image`;

test('unseen manifests are pending; catalog response is the complete public array', async t => {
  const f = await fixture(t);
  assert.deepEqual(await body(await f.direct('/api/catalog')), catalog);
  const result = await body(await f.request());
  assert.equal(result.status, 'pending'); assert.deepEqual(result.frames, []); assert.equal(result.checkedAt, null);
  assert.equal(f.state.discovers, 0);
});

test('initial backfill selects all monthly historical dates and loads bodies only on demand', async t => {
  const f = await fixture(t); f.state.frames = [a, frame('2020-01-15'), b, c, d];
  const result = await body(await f.request('/refresh', 'POST'));
  assert.deepEqual(result.frames.map(x => x.id), [a, b, c, d].map(x => x.id));
  assert.equal(result.backfillComplete, true); assert.equal(result.status, 'ready'); assert.equal(f.state.fetches, 0);
  assert.equal(Date.parse(result.nextCheckAt) - Date.parse(result.checkedAt), MONTH);
  const image = await f.request(imagePath(a)); assert.equal(image.status, 200);
  assert.equal(f.state.fetches, 1); assert.equal(f.state.verifies, 1);
});

test('concurrent refreshes share one durable reservation across service instances', async t => {
  const f = await fixture(t); let release;
  f.state.discoveryWait = new Promise(resolve => { release = resolve; });
  const one = f.request('/refresh', 'POST');
  while (!f.state.discovers) await new Promise(resolve => setTimeout(resolve, 1));
  f.restart();
  const two = await body(await f.request('/refresh', 'POST'));
  assert.equal(two.status, 'pending'); assert.ok(two.checkedAt);
  release(); await one; assert.equal(f.state.discovers, 1);
});

test('30-day boundary persists across restart, then appends only one newest eligible frame', async t => {
  const f = await fixture(t); await f.request('/refresh', 'POST'); f.restart();
  f.state.frames = [a, b, c, d]; f.state.now += MONTH - 1;
  const throttled = await f.request('/refresh', 'POST'); assert.equal(f.state.discovers, 1);
  assert.equal(throttled.headers.get('Retry-After'), '1');
  f.state.now++; const result = await body(await f.request('/refresh', 'POST'));
  assert.deepEqual(result.frames.map(x => x.id), [a, b, d].map(x => x.id)); assert.equal(f.state.discovers, 2);
});

test('failed attempts persist monthly throttle and preserve stored frames and images', async t => {
  const f = await fixture(t); await f.request('/refresh', 'POST'); await f.request(imagePath(a));
  f.state.now += MONTH; f.state.discoveryError = true;
  const result = await body(await f.request('/refresh', 'POST'));
  assert.equal(result.status, 'ready'); assert.equal(result.frames.length, 2); assert.ok(result.error);
  f.restart(); await f.request('/refresh', 'POST'); assert.equal(f.state.discovers, 2);
  assert.equal((await f.request(imagePath(a))).status, 200); assert.equal(f.state.fetches, 1);
});

test('initial failure is distinct from validated empty inventory and incomplete results are failures', async t => {
  const f = await fixture(t); f.state.discoveryError = true;
  let result = await body(await f.request('/refresh', 'POST'));
  assert.equal(result.status, 'error'); assert.equal(result.backfillComplete, false);
  f.state.discoveryError = false; f.state.frames = []; f.state.now += MONTH;
  result = await body(await f.request('/refresh', 'POST')); assert.equal(result.status, 'empty');
  f.state.now += MONTH; f.state.complete = false;
  result = await body(await f.request('/refresh', 'POST')); assert.equal(result.status, 'error'); assert.ok(result.error);
});

test('later empty inventory preserves all known frames', async t => {
  const f = await fixture(t); await f.request('/refresh', 'POST');
  f.state.now += MONTH; f.state.frames = [];
  assert.equal((await body(await f.request('/refresh', 'POST'))).frames.length, 2);
});

test('HEAD and cache-only misses never contact archive; immutable hits survive restart', async t => {
  const f = await fixture(t); await f.request('/refresh', 'POST');
  assert.equal((await f.request(imagePath(a), 'HEAD')).status, 404);
  assert.equal((await f.request(`${imagePath(a)}?cached=1`)).status, 404); assert.equal(f.state.fetches, 0);
  const loaded = await f.request(imagePath(a)); assert.match(loaded.headers.get('Cache-Control'), /immutable/);
  f.restart(); assert.equal((await f.request(imagePath(a), 'HEAD')).status, 200);
  assert.equal((await f.request(`${imagePath(a)}?cached=1`)).status, 200); assert.equal(f.state.fetches, 1);
  const cached = await f.request(imagePath(a), 'GET', { headers: { 'If-None-Match': '"verified"' } }); assert.equal(cached.status, 304);
});

test('concurrent body misses deduplicate and failures have persistent cooldown', async t => {
  const f = await fixture(t); await f.request('/refresh', 'POST'); let release;
  f.state.fetchWait = new Promise(resolve => { release = resolve; });
  const first = f.request(imagePath(a)), second = f.request(imagePath(a));
  while (!f.state.fetches) await new Promise(resolve => setTimeout(resolve, 1));
  release(); assert.equal((await first).status, 200); assert.equal((await second).status, 200); assert.equal(f.state.fetches, 1);
  f.state.badDigest = true; assert.equal((await f.request(imagePath(b))).status, 502);
  f.restart(); assert.equal((await f.request(imagePath(b))).status, 503); assert.equal(f.state.fetches, 2);
  assert.equal((await f.request(`${imagePath(b)}?cached=1`)).status, 404);
  f.state.now += 3600000; f.state.badDigest = false; assert.equal((await f.request(imagePath(b))).status, 200);
});

test('unknown IDs, caller URLs, request options and uploads cannot access arbitrary archives', async t => {
  const f = await fixture(t);
  assert.equal((await f.direct('/api/history/http%3A%2F%2Flocalhost/refresh', 'POST')).status, 404);
  assert.equal((await f.direct('/api/history/unknown/refresh', 'POST')).status, 404);
  assert.equal((await f.request('/refresh?url=https://example.net', 'POST')).status, 400);
  assert.equal((await f.request('/refresh', 'POST', { body: '{}' })).status, 400);
  assert.equal((await f.request(imagePath(a), 'PUT', { body: png })).status, 405);
  assert.equal(f.state.discovers, 0); assert.equal(f.state.fetches, 0);
});

test('unsafe inventory URLs and mismatched frame dates are rejected before image fetch', async t => {
  for (const mutation of [
    item => ({ ...item, sourceImageUrl: 'https://127.0.0.1/image.png' }),
    item => ({ ...item, sourceImageUrl: item.sourceImageUrl.replace('20200101000000', '20200102000000') }),
    item => ({ ...item, capturedAt: '2021-01-01T00:00:00.000Z' }),
    item => ({ ...item, originalUrl: 'https://untrusted.example/' }),
  ]) {
    const f = await fixture(t); f.state.frames = [mutation(a)];
    assert.equal((await body(await f.request('/refresh', 'POST'))).status, 'error'); assert.equal(f.state.fetches, 0);
  }
});

test('private destinations, closest-date redirects, HTML and oversized responses never enter cache', async t => {
  const responses = [
    () => new Response(null, { status: 302, headers: { location: 'http://127.0.0.1/' } }),
    () => new Response(null, { status: 302, headers: { location: a.sourceImageUrl.replace('20200101000000', '20200102000000') } }),
    () => new Response('<html>no image</html>', { headers: { 'Content-Type': 'text/html' } }),
    () => new Response(png, { headers: { 'Content-Type': 'image/png', 'Content-Length': '10485761' } }),
    () => new Response('not png', { headers: { 'Content-Type': 'image/png' } }),
  ];
  for (const response of responses) {
    const f = await fixture(t); await f.request('/refresh', 'POST'); f.state.response = response;
    assert.equal((await f.request(imagePath(a))).status, 502);
    assert.equal((await f.request(`${imagePath(a)}?cached=1`)).status, 404); assert.equal(f.state.fetches, 1);
  }
});

test('exact replay validator allows only trusted replay hosts, dates and public targets', () => {
  assert.equal(validateReplay(a.sourceImageUrl, a).hostname, 'web.archive.org');
  const legacy = { ...a, sourceImageUrl: a.sourceImageUrl.replace('screenshot:https://example.org/', 'http://web.archive.org/screenshot/http://example.org/') };
  assert.doesNotThrow(() => validateReplay(legacy.sourceImageUrl, legacy));
  for (const url of ['https://web.archive.org.evil.example/web/20200101000000id_/https://example.org/',
    'https://web.archive.org/web/20200101000000id_/screenshot:http://127.0.0.1/',
    'https://web.archive.org/web/20200101000000id_/thumbnail:http://localhost/']) assert.throws(() => validateReplay(url, { ...a, sourceImageUrl: url }));
});

test('filesystem objects are immutable even across competing store instances', async t => {
  const f = await fixture(t), other = new FileHistoryStore(f.directory);
  await Promise.all([f.store.putImage('same', png, { mimeType: 'image/png', sha256: 'first' }),
    other.putImage('same', png, { mimeType: 'image/png', sha256: 'second' })]);
  const before = await f.store.getImage('same');
  await other.putImage('same', new Uint8Array([1]), { mimeType: 'image/gif', sha256: 'replacement' });
  assert.deepEqual(await f.store.getImage('same'), before);
});

test('D1 SQL atomically gates competing refreshes, stale writes and image leases', async t => {
  const { DatabaseSync } = await import('node:sqlite');
  const db = new DatabaseSync(':memory:'); t.after(() => db.close());
  db.exec(await readFile(new URL('../worker/history/migrations/0001_history.sql', import.meta.url), 'utf8'));
  const binding = { prepare(sql) { return { bind(...params) { return {
    async first() { return db.prepare(sql).get(...params) || null; },
    async run() { return { meta: { changes: db.prepare(sql).run(...params).changes } }; },
  }; } }; } };
  const store = new CloudflareHistoryStore(binding, null);
  const reservations = await Promise.all([store.reserveRefresh('same', 100, MONTH), store.reserveRefresh('same', 100, MONTH)]);
  assert.equal(reservations.filter(Boolean).length, 1);
  const token = reservations.find(Boolean).token;
  assert.equal(await store.finishRefresh('same', 'wrong-token', { frames: [] }), false);
  assert.equal(await store.finishRefresh('same', token, { frames: [a] }), true);
  assert.equal(await store.reserveRefresh('same', MONTH + 99, MONTH), null);
  assert.ok(await store.reserveRefresh('same', MONTH + 100, MONTH));
  const lease = await store.reserveImage('image', 100, 30000); assert.ok(lease);
  assert.equal(await store.reserveImage('image', 100, 30000), null);
  await store.finishImage('image', lease, 3600100);
  assert.equal(await store.reserveImage('image', 3600099, 30000), null);
  assert.ok(await store.reserveImage('image', 3600100, 30000));
});

test('R2 adapter uses conditional create and reads the winning immutable object', async () => {
  let current = null, options;
  const media = { async put(key, bytes, opts) { options = opts; current ||= { bytes, metadata: opts.customMetadata.history }; },
    async get() { return current && { arrayBuffer: async () => current.bytes.buffer, customMetadata: { history: current.metadata } }; } };
  const store = new CloudflareHistoryStore(null, media);
  await store.putImage('same', png, { mimeType: 'image/png', sha256: 'original' });
  await store.putImage('same', new Uint8Array([2]), { mimeType: 'image/png', sha256: 'replacement' });
  assert.deepEqual(options.onlyIf, { etagDoesNotMatch: '*' }); assert.equal((await store.getImage('same')).metadata.sha256, 'original');
});


test('archive rate limits retain public error codes and retry instructions', async t => {
  const f = await fixture(t);
  f.state.discoveryError = Object.assign(new Error('Private upstream detail'), { code: 'archive_rate_limited', retryAfter: 7200 });
  const response = await f.request('/refresh', 'POST'), result = await response.json();
  assert.equal(response.headers.get('Retry-After'), '7200'); assert.equal(result.errorCode, 'archive_rate_limited');
  assert.equal(result.retryAfter, 7200); assert.doesNotMatch(result.error, /Private/);
  f.state.now += MONTH; f.state.discoveryError = false; await f.request('/refresh', 'POST');
  f.state.response = () => new Response(null, { status: 429, headers: { 'Retry-After': '8000' } });
  const image = await f.request(imagePath(a)); assert.equal(image.headers.get('Retry-After'), '8000');
  assert.equal((await image.json()).code, 'archive_rate_limited');
  f.restart(); f.state.now += 3600000; assert.equal((await f.request(imagePath(a))).status, 503);
});

test('final response URL must retain exact archived timestamp and source', async t => {
  const f = await fixture(t); await f.request('/refresh', 'POST');
  f.state.response = () => {
    const response = new Response(png, { headers: { 'Content-Type': 'image/png' } });
    Object.defineProperty(response, 'url', { value: b.sourceImageUrl }); return response;
  };
  assert.equal((await f.request(imagePath(a))).status, 502);
  assert.equal((await f.request(`${imagePath(a)}?cached=1`)).status, 404);
});


test('normalized landing URLs share one refresh reservation across catalog products', async t => {
  const shared = [{ ...catalog[0], url: 'https://example.org' }, { ...catalog[0], id: 'other', name: 'Other' }];
  const f = await fixture(t, { catalog: shared });
  assert.equal((await body(await f.request('/refresh', 'POST'))).status, 'ready');
  const other = await f.direct('/api/history/other/refresh', 'POST');
  const result = await other.json(); assert.equal(result.product.id, 'other');
  assert.equal(result.frames.length, 2); assert.equal(f.state.discovers, 1);
});
