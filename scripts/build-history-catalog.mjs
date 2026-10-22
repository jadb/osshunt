import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const products = JSON.parse(await readFile(resolve(root, 'data/collections/products.json'), 'utf8'));
const categories = JSON.parse(await readFile(resolve(root, 'data/collections/categories.json'), 'utf8'));
const landings = JSON.parse(await readFile(resolve(root, 'research/history-landings.json'), 'utf8'));
const byLanding = new Map();
for (const entry of landings) {
  if (!products.some(product => product.id === entry.productId) || byLanding.has(entry.productId)
    || !['http:', 'https:'].includes(new URL(entry.url).protocol) || !entry.sources?.length || !entry.checkedAt) {
    throw new Error('Invalid history landing-page override');
  }
  byLanding.set(entry.productId, entry.url);
}
const byCategory = new Map(categories.map(category => [category.id, category]));
const catalog = products.map(product => ({
  id: product.id,
  name: product.name,
  url: byLanding.get(product.id) ?? product.url,
  catalogUrl: product.url,
  kind: product.kind,
  categories: product.categories,
  categoryNames: product.categories.map(id => byCategory.get(id).name),
  audienceRank: Math.min(...product.categories.map(id => byCategory.get(id).audienceRank)),
  ...(product.kind === 'oss' ? { osi: product.osi, tier: product.tier } : {}),
})).sort((a, b) => a.audienceRank - b.audienceRank || a.name.localeCompare(b.name, 'en'));

await mkdir(resolve(root, 'public'), { recursive: true });
await writeFile(resolve(root, 'public/catalog.json'), JSON.stringify(catalog, null, 2) + '\n');
console.log(`History gallery: ${catalog.length} products and alternatives.`);
