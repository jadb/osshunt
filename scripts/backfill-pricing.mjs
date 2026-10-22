import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { setTimeout as sleep } from 'node:timers/promises';

export async function backfillPricing({ baseURL, ids, fetchImpl = fetch, delayMs = 60000, passes = 1, sleepImpl = sleep, clock = Date.now }) {
  const root = new URL(baseURL);
  if (!['http:', 'https:'].includes(root.protocol) || root.username || root.password || root.pathname !== '/' || root.search || root.hash) {
    throw new Error('Base URL must be an HTTP(S) origin');
  }
  if (!Number.isInteger(passes) || passes < 1 || passes > 100 || !Number.isFinite(delayMs) || delayMs < 1000) throw new Error('Invalid passes/delay');
  const results = [], startedAt = new Date(clock()).toISOString();
  let failures = 0;
  for (const id of ids) {
    if (!/^[a-z0-9-]+$/.test(id)) throw new Error('Invalid product ID');
    for (let pass = 0; pass < passes; pass++) {
      const endpoint = new URL(`/api/pricing/${encodeURIComponent(id)}`, root);
      let manifest;
      try {
        const existing = await fetchImpl(endpoint, { signal: AbortSignal.timeout(90000) });
        if (!existing.ok) throw new Error(`Manifest HTTP ${existing.status}`);
        manifest = await existing.json();
        const retryAt = manifest.retryAt ? Date.parse(manifest.retryAt) : manifest.retryAfter ? clock() + manifest.retryAfter * 1000 : 0;
        const incomplete = manifest.incomplete || manifest.status === 'incomplete_inventory';
        const due = !manifest.checkedAt || Date.parse(manifest.nextCheckAt) <= clock();
        if (retryAt > clock() || !(due || incomplete)) {
          results.push({ id, status: manifest.status, action: 'cached', checkedAt: manifest.checkedAt, nextCheckAt: manifest.nextCheckAt }); break;
        }
        const response = await fetchImpl(new URL(`${endpoint.pathname}/refresh`, root), { method: 'POST', signal: AbortSignal.timeout(90000) });
        manifest = await response.json();
        results.push({ id, status: manifest.status, action: 'checked', checkedAt: manifest.checkedAt, nextCheckAt: manifest.nextCheckAt,
          confirmed: manifest.observations?.length || 0, coverage: manifest.coverage?.length || 0, errorCode: manifest.errorCode || null });
        if (response.status === 429 || manifest.errorCode === 'archive_rate_limited') {
          return { startedAt, finishedAt: new Date(clock()).toISOString(), stopped: 'archive_cooldown', retryAt: manifest.retryAt, results };
        }
        failures = response.ok ? 0 : failures + 1;
        if (failures >= 3) return { startedAt, finishedAt: new Date(clock()).toISOString(), stopped: 'consecutive_failures', results };
        await sleepImpl(delayMs);
        if (!response.ok || !manifest.incomplete || manifest.retryAfter) break;
      } catch (error) {
        failures++; results.push({ id, status: 'unavailable', error: error.message });
        if (failures >= 3) return { startedAt, finishedAt: new Date(clock()).toISOString(), stopped: 'consecutive_failures', results };
        await sleepImpl(delayMs); break;
      }
    }
  }
  return { startedAt, finishedAt: new Date(clock()).toISOString(), stopped: null, results };
}
async function main() {
  const { values } = parseArgs({ options: { 'base-url': { type: 'string' }, products: { type: 'string' }, all: { type: 'boolean' },
    passes: { type: 'string', default: '1' }, 'delay-ms': { type: 'string', default: '60000' },
    out: { type: 'string', default: '.local/pricing-backfill.json' } } });
  if (!values['base-url'] || Boolean(values.products) === Boolean(values.all)) throw new Error('Provide --base-url and exactly one of --products ID,ID / --all');
  const root = resolve(import.meta.dirname, '..'), catalog = JSON.parse(await readFile(resolve(root, 'public/catalog.json'), 'utf8'));
  const ids = values.all ? catalog.map(product => product.id) : [...new Set(values.products.split(','))];
  if (ids.some(id => !catalog.some(product => product.id === id))) throw new Error('Unknown product ID');
  const result = await backfillPricing({ baseURL: values['base-url'], ids, passes: Number(values.passes), delayMs: Number(values['delay-ms']) });
  const output = resolve(values.out); await mkdir(dirname(output), { recursive: true });
  await writeFile(output, `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify({ products: new Set(result.results.map(row => row.id)).size, attempts: result.results.length, stopped: result.stopped, output }));
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) main().catch(error => { console.error(error.message); process.exitCode = 1; });
