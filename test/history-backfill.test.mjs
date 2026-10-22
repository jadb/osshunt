import test from 'node:test';
import assert from 'node:assert/strict';
import { runBackfill } from '../scripts/backfill-history.mjs';

const now = new Date('2026-10-21T12:00:00Z');
const ready = { status: 'ready', frames: [{ id: 'frame-1' }], nextCheckAt: '2026-11-01T00:00:00Z', error: null };
const options = { baseUrl: 'https://history.example.org', clock: () => now, wait: async () => {} };
const json = (body, init) => Response.json(body, init);
function mock(manifests, handler = () => { throw new Error('Unexpected request'); }) {
  const calls = [];
  const fetchImpl = async (url, init = {}) => {
    const path = new URL(url).pathname, method = init.method || 'GET';
    calls.push(`${method} ${path}${new URL(url).search}`);
    if (path === '/api/catalog') return json(Object.keys(manifests).map(id => ({ id })));
    const id = path.split('/')[3];
    if (method === 'GET' && path === `/api/history/${id}`) return json(manifests[id]);
    return handler({ path, method, url, id });
  };
  return { fetchImpl, calls };
}

test('backfill respects monthly checks and reuses cached images without fetching their source', async () => {
  const { fetchImpl, calls } = mock({ alpha: ready }, ({ method }) => {
    assert.equal(method, 'HEAD'); return new Response(null, { status: 200 });
  });
  const result = await runBackfill({ ...options, fetchImpl, images: true });
  assert.equal(result.status, 'complete');
  assert.equal(result.imagesAlreadyCached, 1);
  assert.equal(result.imagesCached, 0);
  assert.deepEqual(calls, ['GET /api/catalog', 'GET /api/history/alpha',
    'HEAD /api/history/alpha/frames/frame-1/image?cached=1']);
});

test('backfill refreshes pending records and stops globally when the archive rate limits', async () => {
  const { fetchImpl, calls } = mock({ alpha: { status: 'pending' }, beta: { status: 'pending' } }, ({ method }) => {
    assert.equal(method, 'POST');
    return json({ status: 'error', frames: [], errorCode: 'archive_rate_limited', error: 'Try later' },
      { headers: { 'Retry-After': '3600' } });
  });
  const result = await runBackfill({ ...options, fetchImpl });
  assert.equal(result.status, 'rate-limited');
  assert.equal(result.retryAfter, '3600');
  assert.equal(result.products.length, 1);
  assert.ok(!calls.some(path => path.includes('/beta')));
});

test('failed inventories stay errors instead of being reported as empty history', async () => {
  const { fetchImpl } = mock({ alpha: { status: 'error', frames: [], error: 'Archive unavailable',
    nextCheckAt: '2026-11-01T00:00:00Z' } });
  const result = await runBackfill({ ...options, fetchImpl });
  assert.equal(result.status, 'partial');
  assert.equal(result.products[0].status, 'error');
  assert.equal(result.products[0].error, 'Archive unavailable');
});

test('unknown products fail before any refresh or image retrieval', async () => {
  const { fetchImpl, calls } = mock({ alpha: ready });
  await assert.rejects(runBackfill({ ...options, fetchImpl, productIds: ['unknown'] }), /Unknown product/);
  assert.deepEqual(calls, ['GET /api/catalog']);
});

test('image backfill respects its explicit new-image budget', async () => {
  const { fetchImpl, calls } = mock({ alpha: { ...ready, frames: [{ id: 'one' }, { id: 'two' }] } }, ({ method }) => {
    return new Response(method === 'HEAD' ? null : new Uint8Array([1]), { status: method === 'HEAD' ? 404 : 200 });
  });
  const result = await runBackfill({ ...options, fetchImpl, images: true, imageLimit: 1 });
  assert.equal(result.status, 'partial');
  assert.equal(result.imageLimitReached, true);
  assert.equal(result.imagesCached, 1);
  assert.equal(calls.filter(path => path.startsWith('GET') && path.endsWith('/image')).length, 1);
});

test('image archive rate limits stop the batch even when the service returns HTTP502', async () => {
  const { fetchImpl, calls } = mock({ alpha: { ...ready, frames: [{ id: 'one' }, { id: 'two' }] } }, ({ method }) => {
    if (method === 'HEAD') return new Response(null, { status: 404 });
    return json({ error: 'Archived image is temporarily unavailable', code: 'archive_rate_limited' },
      { status: 502, headers: { 'Retry-After': '7200' } });
  });
  const result = await runBackfill({ ...options, fetchImpl, images: true });
  assert.equal(result.status, 'rate-limited');
  assert.equal(result.retryAfter, '7200');
  assert.equal(calls.filter(path => path.startsWith('GET') && path.endsWith('/image')).length, 1);
});

test('preserved ready frames with failed refresh report partial completion', async () => {
  const { fetchImpl } = mock({ alpha: { ...ready, error: 'History unavailable', errorCode: 'archive_unavailable' } });
  const result = await runBackfill({ ...options, fetchImpl });
  assert.equal(result.status, 'partial');
  assert.equal(result.products[0].frames, 1);
});

test('an in-progress initial reservation never reports a complete backfill', async () => {
  const { fetchImpl } = mock({ alpha: { status: 'pending', frames: [], backfillComplete: false,
    nextCheckAt: '2026-11-01T00:00:00Z' } }, () => json({ status: 'pending', frames: [], backfillComplete: false }));
  const result = await runBackfill({ ...options, fetchImpl });
  assert.equal(result.status, 'partial');
});

test('repeated failures stop the batch before touching more products', async () => {
  const error = { status: 'error', frames: [], error: 'Archive unavailable', errorCode: 'archive_unavailable',
    nextCheckAt: '2026-11-01T00:00:00Z' };
  const { fetchImpl, calls } = mock({ alpha: error, beta: error, gamma: error, delta: ready });
  const result = await runBackfill({ ...options, fetchImpl });
  assert.equal(result.status, 'partial');
  assert.equal(result.stoppedAfterErrors, 3);
  assert.equal(result.products.length, 3);
  assert.ok(!calls.some(path => path.includes('/delta')));
});

test('an old stored rate-limit failure does not prevent unrelated due products being checked', async () => {
  const { fetchImpl } = mock({ alpha: { status: 'error', frames: [], error: 'Earlier limit',
    errorCode: 'archive_rate_limited', checkedAt: '2026-10-01T00:00:00Z', nextCheckAt: '2026-10-31T00:00:00Z' },
  beta: { status: 'pending' } }, () => json({ status: 'empty', frames: [], backfillComplete: true }));
  const result = await runBackfill({ ...options, fetchImpl });
  assert.equal(result.products.length, 2);
  assert.equal(result.products[1].status, 'empty');
  assert.equal(result.status, 'partial');
});

test('image error bodies retain the useful error and allow subsequent frames to cache', async () => {
  const { fetchImpl } = mock({ alpha: { ...ready, frames: [{ id: 'one' }, { id: 'two' }] } }, ({ method, path }) => {
    if (method === 'HEAD') return new Response(null, { status: 404 });
    if (path.includes('/one/')) return json({ error: 'Image unavailable', code: 'archive_unavailable' }, { status: 502 });
    return new Response(new Uint8Array([1]));
  });
  const result = await runBackfill({ ...options, fetchImpl, images: true });
  assert.equal(result.status, 'partial');
  assert.equal(result.imagesCached, 1);
  assert.equal(result.products[0].error, 'Image retrieval failed: HTTP 502');
});
