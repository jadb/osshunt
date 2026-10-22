import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';

const sleep = ms => new Promise(done => setTimeout(done, ms));

export async function runBackfill({ baseUrl, productIds = [], images = false, imageLimit = 10000,
  delayMs = 2000, fetchImpl = fetch, wait = sleep, log = () => {}, clock = () => new Date() }) {
  const base = new URL(baseUrl);
  if (!['http:', 'https:'].includes(base.protocol) || base.username || base.password || base.search || base.hash) {
    throw new Error('Use an HTTP(S) service URL without credentials, query or fragment.');
  }
  const report = { startedAt: clock().toISOString(), status: 'complete', imagesCached: 0, imagesAlreadyCached: 0,
    products: [], finishedAt: null };
  const endpoint = path => `${base.href.replace(/\/$/, '')}${path}`;
  const request = (path, options = {}) => fetchImpl(endpoint(path), { ...options, signal: AbortSignal.timeout(120000) });
  const catalogResponse = await request('/api/catalog');
  if (!catalogResponse.ok) throw new Error(`Catalog unavailable: HTTP ${catalogResponse.status}`);
  const catalog = await catalogResponse.json();
  if (!Array.isArray(catalog) || catalog.some(p => !/^[a-z0-9-]+$/.test(p.id))) throw new Error('Invalid catalog response.');
  const known = new Set(catalog.map(p => p.id));
  for (const id of productIds) if (!known.has(id)) throw new Error(`Unknown product: ${id}`);
  const selected = productIds.length ? catalog.filter(p => productIds.includes(p.id)) : catalog;
  let outboundImageCount = 0;
  for (const product of selected) {
    const row = { id: product.id, status: 'error', frames: 0, cached: 0, reused: 0, error: null };
    try {
      let response = await request(`/api/history/${product.id}`);
      if (!response.ok) throw new Error(`History unavailable: HTTP ${response.status}`);
      let manifest = await response.json();
      if (manifest.status === 'pending' || (manifest.nextCheckAt && Date.parse(manifest.nextCheckAt) <= +clock())) {
        response = await request(`/api/history/${product.id}/refresh`, { method: 'POST' });
        manifest = await response.json();
      }
      const limited = response.status === 429 && manifest.error;
      if (limited || /rate.?limit/i.test(manifest.errorCode ?? '')) {
        report.status = 'rate-limited';
        report.retryAfter = response.headers.get('retry-after') ?? manifest.retryAfter ?? null;
        row.error = manifest.error ?? 'Archive rate limit reached.';
      }
      row.status = manifest.status ?? 'error';
      row.error ??= manifest.error ?? null;
      row.frames = manifest.frames?.length ?? 0;
      if ((row.status === 'error' || row.status === 'pending' || row.error || manifest.backfillComplete === false)
        && report.status === 'complete') report.status = 'partial';
      if (images && report.status !== 'rate-limited') {
        for (const frame of manifest.frames ?? []) {
          if (!/^[a-zA-Z0-9_-]+$/.test(frame.id)) throw new Error('Invalid frame identifier.');
          const path = `/api/history/${product.id}/frames/${frame.id}/image`;
          const cached = await request(`${path}?cached=1`, { method: 'HEAD' });
          if (cached.ok) { row.reused++; report.imagesAlreadyCached++; continue; }
          if (cached.status !== 404) throw new Error(`Cache probe failed: HTTP ${cached.status}`);
          if (outboundImageCount >= imageLimit) { report.status = 'partial'; report.imageLimitReached = true; break; }
          await wait(delayMs);
          outboundImageCount++;
          const image = await request(path);
          const imageError = !image.ok ? await image.json().catch(() => ({})) : null;
          if (image.status === 429 || /rate.?limit/i.test(imageError?.code ?? '')) {
            report.status = 'rate-limited'; report.retryAfter = image.headers.get('retry-after');
            row.error = imageError?.error ?? 'Archive rate limit reached.';
            await image.body?.cancel(); break;
          }
          if (!image.ok) {
            row.error = `Image retrieval failed: HTTP ${image.status}`;
            report.status = 'partial'; await image.body?.cancel(); continue;
          }
          await image.body?.cancel();
          row.cached++; report.imagesCached++;
        }
      }
    } catch (error) {
      row.error = error.message;
      if (report.status !== 'rate-limited') report.status = 'partial';
    }
    report.products.push(row); log(row);
    if (report.status === 'rate-limited' || report.imageLimitReached) break;
    await wait(delayMs);
  }
  report.finishedAt = clock().toISOString();
  return report;
}

async function main() {
  const { values } = parseArgs({ options: {
    'base-url': { type: 'string', default: 'http://127.0.0.1:4173' },
    products: { type: 'string' }, images: { type: 'boolean', default: false },
    'image-limit': { type: 'string', default: '10000' }, 'delay-ms': { type: 'string', default: '2000' },
    output: { type: 'string', default: '.local/history-backfill-report.json' },
  } });
  const delayMs = Number(values['delay-ms']), imageLimit = Number(values['image-limit']);
  if (!Number.isInteger(delayMs) || delayMs < 1000 || !Number.isInteger(imageLimit) || imageLimit < 1) {
    throw new Error('Delay must be at least 1000ms and image limit a positive integer.');
  }
  const report = await runBackfill({ baseUrl: values['base-url'], productIds: values.products?.split(',') ?? [],
    images: values.images, imageLimit, delayMs, log: row => console.log(JSON.stringify(row)) });
  const output = resolve(values.output);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, JSON.stringify(report, null, 2) + '\n');
  console.log(`Backfill ${report.status}: ${report.products.length} products; ${report.imagesCached} images added, ${report.imagesAlreadyCached} reused.`);
  if (report.status !== 'complete') process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}
