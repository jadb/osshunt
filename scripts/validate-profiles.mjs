import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { z } from 'zod';
import { productProfile } from '../lib/profile-schema.mjs';
import { parseClaims } from '../lib/claims.mjs';

const root = resolve(import.meta.dirname, '..');
const source = process.argv[2] ? resolve(process.argv[2]) : resolve(root, 'research/profiles');
const products = JSON.parse(await readFile(resolve(root, 'data/collections/products.json'), 'utf8'));
const byId = new Map(products.map(p => [p.id, p]));
let count = 0, claimCount = 0;
const completedIds = new Set();
for (const file of (await readdir(source)).filter(file => file.endsWith('.json'))) {
  const profile = productProfile(z).parse(JSON.parse(await readFile(resolve(source, file), 'utf8')));
  const product = byId.get(profile.id);
  if (!product || file !== `${profile.id}.json`) throw new Error(`orphan or mismatched profile ${file}`);
  if ((product.kind === 'oss') !== (profile.alternativeDetails !== null)) throw new Error(`deployment scope mismatch: ${profile.id}`);
  if (!process.argv[2]) {
    const claims = parseClaims(await readFile(resolve(root, `research/profile-claims/${profile.id}.jsonl`), 'utf8'), profile.id);
    for (const claim of claims) if (claim.productId !== profile.id) throw new Error(`claim product mismatch: ${profile.id}`);
    claimCount += claims.length;
    await readFile(resolve(root, `research/profile-audits/${profile.id}.md`), 'utf8');
  }
  count++;
  completedIds.add(profile.id);
}
if (!process.argv[2]) {
  const manifest = JSON.parse(await readFile(resolve(root, 'research/enrichment-manifest.json'), 'utf8'));
  if (!['in-progress', 'complete'].includes(manifest.status) || manifest.productIds.length !== products.length ||
      new Set(manifest.productIds).size !== products.length || manifest.productIds.some(id => !byId.has(id)) ||
      manifest.completedProductIds.length !== count || new Set(manifest.completedProductIds).size !== count ||
      manifest.completedProductIds.some(id => !completedIds.has(id)) || (manifest.status === 'complete' && count !== products.length)) {
    throw new Error('enrichment manifest must accurately describe unique catalog coverage');
  }
  console.log(`Enrichment ${manifest.status}: ${count}/${products.length} products.`);
}
console.log(`${count} valid profiles; ${claimCount} sourced profile claims.`);
