import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { renderProfile, renderProfileIndex } from '../lib/render-profile.mjs';

const root = resolve(import.meta.dirname, '..');
const products = JSON.parse(await readFile(resolve(root, 'data/collections/products.json'), 'utf8'));
await mkdir(resolve(root, 'docs/products'), { recursive: true });
for (const product of products.filter(p => p.profile)) {
  await writeFile(resolve(root, `docs/products/${product.id}.md`), renderProfile(product));
}
await writeFile(resolve(root, 'docs/product-profiles.md'), renderProfileIndex(products));
console.log(`Rendered ${products.filter(p => p.profile).length} product profiles.`);
