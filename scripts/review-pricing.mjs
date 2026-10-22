import { readFile, writeFile, mkdir, rename } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { parseArgs } from 'node:util';
import { FilePricingStore } from '../lib/pricing/stores-file.mjs';
import { FileHistoryStore } from '../lib/history/stores-file.mjs';
import { exportReview, importReview, observationBodies } from '../lib/pricing/review.mjs';
import { sha256 } from '../lib/pricing/archive.mjs';
import { buildPricingCollection } from './build-pricing-collection.mjs';

const root = resolve(import.meta.dirname, '..');
const run = promisify(execFile);
async function atomicJSON(file, value) {
  await mkdir(dirname(file), { recursive: true });
  const temporary = `${file}.${crypto.randomUUID()}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, { mode: 0o600 });
  await rename(temporary, file);
}
export async function confirmReviewFile({ document, store, catalog, confirmedFile, build }) {
  const lock = new FileHistoryStore(dirname(confirmedFile));
  return lock.locked('pricing-confirmation', async () => {
    const existing = JSON.parse(await readFile(confirmedFile, 'utf8'));
    const rows = await importReview({ document, existing, store, catalog });
    await atomicJSON(confirmedFile, rows);
    await build();
    return rows;
  });
}
export async function downloadCloudReview({ productId, store, database, bucket, config, command = run }) {
  if (!/^[a-z0-9-]+$/.test(productId)) throw new Error('Invalid product ID');
  const { stdout } = await command('wrangler', ['d1', 'execute', database, '--remote', '--json', '--config', config,
    '--command', `SELECT * FROM pricing_history WHERE id = '${productId}'`], { maxBuffer: 4 * 1024 * 1024, timeout: 60000 });
  const row = JSON.parse(stdout).flatMap(result => result.results || [])[0];
  if (!row) throw new Error('No cloud pricing inventory for this product');
  const record = { checkedAt: row.checked_at, nextCheckAt: row.next_check_at, token: null, leaseUntil: 0,
    checkpoint: row.checkpoint ? JSON.parse(row.checkpoint) : null };
  for (const proposal of record.checkpoint?.proposals || []) {
    for (const source of observationBodies(proposal)) {
      if (await store.getBody(source.identity)) continue;
      const key = await sha256(source.identity), file = resolve(store.storage.root, `${key}.download`);
      await mkdir(store.storage.root, { recursive: true });
      await command('wrangler', ['r2', 'object', 'get', `${bucket}/pricing-evidence/${key}`, '--remote', '--file', file,
        '--config', config], { maxBuffer: 1024 * 1024, timeout: 60000 });
      const bytes = new Uint8Array(await readFile(file));
      if (await sha256(bytes) !== source.sha256) throw new Error('Cloud source hash mismatch');
      await store.putBody(source.identity, bytes, { sha256: source.sha256, mimeType: 'text/html' });
    }
  }
  await store.storage.atomic(store.storage.path(`pricing-${productId}`), record);
}

export async function reviewPricing(argv = process.argv.slice(2)) {
  const { values, positionals } = parseArgs({ args: argv, allowPositionals: true, options: {
    product: { type: 'string' }, out: { type: 'string' }, file: { type: 'string' }, cache: { type: 'string' },
    source: { type: 'string', default: 'local' }, database: { type: 'string', default: 'osshunt-history' },
    bucket: { type: 'string', default: 'osshunt-history-images' }, config: { type: 'string', default: resolve(root, 'worker/history/wrangler.jsonc') },
  } });
  const [operation] = positionals;
  if (!['export', 'import'].includes(operation) || positionals.length !== 1 || !['local', 'cloud'].includes(values.source)) {
    throw new Error('Use export --product ID --out FILE or import --file FILE; optional --cache DIR / --source cloud');
  }
  const catalog = JSON.parse(await readFile(resolve(root, 'public/catalog.json'), 'utf8'));
  const cache = resolve(values.cache || resolve(root, values.source === 'cloud' ? '.local/pricing-cloud-review' : '.local/history'));
  const store = new FilePricingStore(cache);
  if (operation === 'export') {
    if (!values.product || !values.out || values.file) throw new Error('Export requires --product ID --out FILE');
    if (!catalog.some(product => product.id === values.product)) throw new Error('Unknown product');
    if (values.source === 'cloud') await downloadCloudReview({ productId: values.product, store, database: values.database,
      bucket: values.bucket, config: resolve(values.config) });
    const document = await exportReview({ productId: values.product, store, catalog });
    const output = resolve(values.out);
    for (const item of document.observations) for (const source of item.sources) {
      const body = await store.getBody(source.identity);
      if (!body || await sha256(body.bytes) !== source.sha256) throw new Error('Source body missing or changed');
      const target = resolve(dirname(output), source.file);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, body.bytes, { mode: 0o600 });
    }
    await atomicJSON(output, document);
    console.log(`Exported ${document.observations.length} proposals and private text evidence to ${output}`);
  } else {
    if (!values.file || values.product || values.out) throw new Error('Import requires --file FILE');
    if (values.source === 'cloud') throw new Error('Export cloud evidence first, then import with --cache pointing to that review cache');
    const document = JSON.parse(await readFile(resolve(values.file), 'utf8'));
    const file = resolve(root, 'research/pricing/confirmed.json');
    const rows = await confirmReviewFile({ document, store, catalog, confirmedFile: file,
      build: () => buildPricingCollection(root) });
    console.log(`Confirmed collection contains ${rows.length} observations.`);
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  reviewPricing().catch(error => { console.error(error.message); process.exitCode = 1; });
}
