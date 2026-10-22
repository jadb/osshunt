import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { startHistoryServer } from '../scripts/history-server.mjs';
import { createHistoryService } from '../lib/history/service.mjs';
import { FileHistoryStore } from '../lib/history/stores-file.mjs';
import { selectHistoricalFrames, selectNewFrame } from '../lib/history/selection.mjs';
import { verifyImage } from '../lib/history/image.mjs';

test('HTTP gallery flow discovers history, fills once and serves immutable image copies', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'history-http-test-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const catalog = [{ id: 'fixture', name: 'Test fixture', url: 'https://example.org/', kind: 'paid' }];
  const png = new Uint8Array(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/lxoAAAAASUVORK5CYII=', 'base64'));
  const sourceImageUrl = 'https://web.archive.org/web/20200101000000id_/screenshot:https://example.org/';
  const frame = { id: 'fixture-20200101', timestamp: '20200101000000', capturedAt: '2020-01-01T00:00:00.000Z',
    originalUrl: catalog[0].url, sourceImageUrl, archiveUrl: sourceImageUrl, digest: null, mimeType: 'image/png' };
  let discoveries = 0, copies = 0;
  const service = createHistoryService({ catalog, store: new FileHistoryStore(directory),
    archive: { async discoverScreenshots() { discoveries++; return { frames: [frame], complete: true }; },
      selectHistoricalFrames, selectNewFrame, verifyImage },
    fetchImpl: async () => { copies++; return new Response(png, { headers: { 'Content-Type': 'image/png' } }); } });
  const server = await startHistoryServer({ port: 0, service });
  t.after(() => new Promise(resolve => server.close(resolve)));
  const base = `http://127.0.0.1:${server.address().port}`;
  assert.match(await (await fetch(base)).text(), /<website-history/);
  assert.deepEqual(await (await fetch(`${base}/api/catalog`)).json(), catalog);
  assert.equal((await (await fetch(`${base}/api/history/fixture`)).json()).status, 'pending');
  const refresh = () => fetch(`${base}/api/history/fixture/refresh`, { method: 'POST' });
  assert.equal((await (await refresh()).json()).frames.length, 1);
  await refresh(); assert.equal(discoveries, 1);
  const image = `${base}/api/history/fixture/frames/${frame.id}/image`;
  assert.equal((await fetch(`${image}?cached=1`, { method: 'HEAD' })).status, 404);
  assert.equal(copies, 0);
  const first = await fetch(image);
  assert.equal(first.headers.get('cache-control'), 'public, max-age=31536000, immutable');
  assert.deepEqual(new Uint8Array(await first.arrayBuffer()), png);
  assert.equal((await fetch(image, { headers: { 'If-None-Match': first.headers.get('etag') } })).status, 304);
  assert.equal((await fetch(image, { method: 'HEAD' })).status, 200);
  assert.equal(copies, 1);
  assert.equal((await fetch(`${base}/api/history/unknown/refresh`, { method: 'POST' })).status, 404);
});
