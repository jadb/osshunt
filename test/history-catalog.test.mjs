import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('history catalog covers every product and keeps landing pages separate from pricing evidence', async () => {
  const read = async path => JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'));
  const products = await read('../data/collections/products.json');
  const catalog = await read('../public/catalog.json');
  const landings = await read('../research/history-landings.json');
  assert.deepEqual(new Set(catalog.map(p => p.id)), new Set(products.map(p => p.id)));
  assert.equal(catalog.length, products.length);
  for (const product of products) {
    const item = catalog.find(p => p.id === product.id);
    assert.equal(item.catalogUrl, product.url);
    assert.equal(item.kind, product.kind);
    assert.deepEqual(item.categories, product.categories);
  }
  for (const entry of landings) {
    assert.equal(catalog.find(p => p.id === entry.productId).url, entry.url);
    assert.ok(entry.sources.every(url => /^https?:\/\//.test(url)));
    assert.match(entry.checkedAt, /^\d{4}-\d{2}-\d{2}$/);
  }
  assert.equal(catalog.find(p => p.id === 'dropbox').url, 'https://www.dropbox.com/');
  assert.notEqual(catalog.find(p => p.id === 'google-meet').url, catalog.find(p => p.id === 'google-workspace').url);
});
