import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { productPricingPaths, pricingTargetInScope } from '../lib/pricing/scope.mjs';
import { applyPricingAliases } from '../lib/pricing/aliases.mjs';

const root = resolve(import.meta.dirname, '..');
const products = JSON.parse(await readFile(resolve(root, 'data/collections/products.json'), 'utf8'));
const categories = JSON.parse(await readFile(resolve(root, 'data/collections/categories.json'), 'utf8'));
const landings = JSON.parse(await readFile(resolve(root, 'research/history-landings.json'), 'utf8'));
const pricingAliases = JSON.parse(await readFile(resolve(root, 'research/pricing-aliases.json'), 'utf8'));
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
  pricingHints: [...new Set((product.profile?.pricingTiers || []).flatMap(tier => tier.sources || []))]
    .filter(value => {
      try {
        const url = new URL(value), landing = new URL(byLanding.get(product.id) ?? product.url);
        return ['https:', 'http:'].includes(url.protocol) &&
          url.hostname.replace(/^www\./, '') === landing.hostname.replace(/^www\./, '') &&
          /(?:pricing|prices|plans|subscriptions|compare)/i.test(url.pathname);
      } catch { return false; }
    }).sort(),
  audienceRank: Math.min(...product.categories.map(id => byCategory.get(id).audienceRank)),
  ...(product.kind === 'oss' ? { osi: product.osi, tier: product.tier } : {}),
})).sort((a, b) => a.audienceRank - b.audienceRank || a.name.localeCompare(b.name, 'en'));
for (const product of catalog) {
  product.productPaths = productPricingPaths(product);
  product.pricingHints = product.pricingHints.filter(value => pricingTargetInScope(product, value));
}
applyPricingAliases(catalog, pricingAliases);

await mkdir(resolve(root, 'public'), { recursive: true });
await writeFile(resolve(root, 'public/catalog.json'), JSON.stringify(catalog, null, 2) + '\n');
console.log(`History gallery: ${catalog.length} products and alternatives.`);
