import { createServer } from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Readable } from 'node:stream';
import { createHistoryService } from '../lib/history/service.mjs';
import { FileHistoryStore } from '../lib/history/stores-file.mjs';
import { discoverScreenshots, assertExactReplayUrl } from '../lib/history/archive.mjs';
import { selectHistoricalFrames, selectNewFrame } from '../lib/history/selection.mjs';
import { verifyImage } from '../lib/history/image.mjs';

const repository = fileURLToPath(new URL('../', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml' };
export async function startHistoryServer({ port = Number(process.env.PORT || 4173), host = process.env.HOST || '127.0.0.1',
  publicDirectory = resolve(repository, 'public'), cacheDirectory = resolve(repository, '.local/history'), service } = {}) {
  const publicRoot = await realpath(publicDirectory);
  service ||= createHistoryService({ catalog: JSON.parse(await readFile(resolve(publicRoot, 'catalog.json'), 'utf8')),
    store: new FileHistoryStore(cacheDirectory), archive: { discoverScreenshots, assertExactReplayUrl,
      selectHistoricalFrames, selectNewFrame, verifyImage } });
  const server = createServer(async (incoming, outgoing) => {
    try {
      const url = new URL(incoming.url, 'http://localhost');
      let response;
      if (url.pathname.startsWith('/api/')) {
        const options = { method: incoming.method, headers: incoming.headers };
        if (!['GET', 'HEAD'].includes(incoming.method) &&
          (Number(incoming.headers['content-length']) > 0 || incoming.headers['transfer-encoding'])) {
          options.body = Readable.toWeb(incoming); options.duplex = 'half';
        }
        response = await service.fetch(new Request(url, options));
      } else if (['GET', 'HEAD'].includes(incoming.method)) {
        const path = await realpath(resolve(publicRoot, `.${decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname)}`));
        if (!path.startsWith(`${publicRoot}${sep}`) || !(await stat(path)).isFile()) throw new Error('Not found');
        response = new Response(incoming.method === 'HEAD' ? null : await readFile(path), {
          headers: { 'Content-Type': types[extname(path)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' } });
      } else response = new Response('Method not allowed', { status: 405 });
      outgoing.writeHead(response.status, Object.fromEntries(response.headers));
      if (response.body) Readable.fromWeb(response.body).pipe(outgoing); else outgoing.end();
    } catch { outgoing.writeHead(404, { 'Content-Type': 'text/plain' }); outgoing.end('Not found'); }
  });
  server.requestTimeout = 30000; server.headersTimeout = 10000;
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(port, host, resolve); });
  return server;
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const server = await startHistoryServer();
  console.log(`History preview: http://127.0.0.1:${server.address().port}`);
}
