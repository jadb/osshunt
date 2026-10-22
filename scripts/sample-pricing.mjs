import { readFile, writeFile, mkdir, rename, unlink, chmod, readdir, rmdir } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { parseArgs } from 'node:util';
import { pathToFileURL } from 'node:url';
import { FilePricingStore } from '../lib/pricing/stores-file.mjs';
import { extractPricing } from '../lib/pricing/extract.mjs';
import { discoverPricingLinks } from '../lib/pricing/links.mjs';
import { samplePricingBatch } from '../lib/pricing/sampling.mjs';
import { samplingInputs } from '../lib/pricing/sampling-support.mjs';
import { sha256 } from '../lib/pricing/archive.mjs';
const readJournal = (path) =>
  readFile(path, 'utf8')
    .then(JSON.parse)
    .catch((error) => {
      if (error.code === 'ENOENT') return null;
      throw error;
    });
export async function writeSamplingJournal(path, journal) {
  await mkdir(dirname(path), { recursive: true, mode: 0o700 });
  const temporary = `${path}.${randomUUID()}.tmp`;
  try {
    await writeFile(temporary, `${JSON.stringify(journal, null, 2)}\n`, { mode: 0o600, flag: 'wx' });
    await rename(temporary, path);
    await chmod(path, 0o600);
  } finally {
    await unlink(temporary).catch((error) => {
      if (error.code !== 'ENOENT') throw error;
    });
  }
}
export async function withSamplingJournalLock(path, action) {
  await mkdir(dirname(path), { recursive: true, mode: 0o700 });
  const lockPath = `${resolve(path)}.lock`,
    owner = join(lockPath, 'owner.json'),
    token = randomUUID();
  try {
    await mkdir(lockPath, { mode: 0o700 });
  } catch (error) {
    if (error.code === 'EEXIST')
      throw Error(`Sampling journal locked: ${lockPath}. Check owner PID before explicit orphan-lock recovery.`);
    throw error;
  }
  await writeFile(owner, JSON.stringify({ pid: process.pid, token, createdAt: new Date().toISOString() }), {
    flag: 'wx',
    mode: 0o600,
  });
  const guard = async () => {
    const current = JSON.parse(await readFile(owner, 'utf8'));
    if (current.token !== token || current.pid !== process.pid) throw Error('Sampling journal lock ownership changed');
  };
  try {
    return await action(guard);
  } finally {
    await guard();
    await unlink(owner);
    await rmdir(lockPath);
  }
}
async function main() {
  const { values } = parseArgs({
    options: {
      products: { type: 'string' },
      from: { type: 'string' },
      to: { type: 'string' },
      cache: { type: 'string', default: '.local/history' },
      out: { type: 'string', default: '.local/pricing-samples.json' },
      'delay-ms': { type: 'string', default: '10000' },
    },
  });
  const root = resolve(import.meta.dirname, '..'),
    output = resolve(values.out),
    catalog = JSON.parse(await readFile(join(root, 'public/catalog.json'), 'utf8')),
    existing = await readJournal(output);
  const ids = values.products ? values.products.split(',') : existing?.inputs.ids,
    from = values.from || existing?.inputs.from,
    cutoff = values.to || existing?.inputs.cutoff;
  const filenames = (await readdir(join(root, 'lib/pricing')))
    .filter((name) => /^(?:extract.*|html|links|scope)\.mjs$/.test(name))
    .sort();
  const baselineFingerprint = await sha256(
    (
      await Promise.all(
        filenames.map(async (name) => `${name}\n${await readFile(join(root, 'lib/pricing', name), 'utf8')}`),
      )
    ).join('\n'),
  );
  await samplingInputs({
    catalog,
    ids,
    from,
    cutoff,
    maxCandidates: 2,
    extractor: extractPricing,
    baselineFingerprint,
  });
  const cache = resolve(values.cache),
    delayMs = Number(values['delay-ms']);
  if (!Number.isFinite(delayMs) || delayMs < 1000) throw Error('Source delay must be at least 1000ms');
  const result = await withSamplingJournalLock(output, async (guard) => {
    const journal = await readJournal(output);
    if (journal?.cachePath && journal.cachePath !== cache) throw Error('Journal cache path changed');
    return samplePricingBatch({
      catalog,
      ids,
      from,
      cutoff,
      store: new FilePricingStore(cache),
      journal,
      baselineFingerprint,
      extractor: extractPricing,
      discoverLinks: discoverPricingLinks,
      delayMs,
      save: async (state) => {
        await guard();
        state.cachePath = cache;
        await writeSamplingJournal(output, state);
      },
    });
  });
  console.log(
    JSON.stringify({
      output,
      products: result.products.length,
      completed: result.products.filter((p) => p.done).length,
      proposals: result.products.filter((p) => p.proposal).length,
      requests: result.requests.length,
      stopped: result.stopped,
    }),
  );
  if (result.stopped || result.products.some(product => !product.done)) process.exitCode = 75;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href)
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
