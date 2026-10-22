import test from 'node:test';
import assert from 'node:assert/strict';
import { pricingTargetInScope } from '../lib/pricing/scope.mjs';
import { applyPricingAliases, pricingAliasFor } from '../lib/pricing/aliases.mjs';
const alias = { url: 'https://checkout.vendor.com/plans/tool?locale=de',
  evidenceCapturedAt: '2025-06-20T00:00:00.000Z', evidenceArchiveUrl: 'https://web.archive.org/web/20250620000000id_/https://vendor.com/products/tool',
  evidenceSha256: 'a'.repeat(64), locator: 'offset:10-40', label: 'Pricing',
  scope: { edition: 'Hosted business', deployment: 'hosted' }, locale: 'de' };
const product = { id: 'tool', url: 'https://vendor.com/products/tool', productPaths: ['/products/tool'], pricingAliases: [alias] };
test('reviewed pricing aliases approve only an exact dated target without widening its host', () => {
  assert.equal(pricingTargetInScope(product, alias.url, { at: '2025-06-20T00:00:00.000Z' }), true);
  assert.equal(pricingTargetInScope(product, alias.url, { at: '2025-06-19T23:59:59.000Z' }), false);
  for (const target of ['https://checkout.vendor.com/plans/other?locale=de',
    'https://checkout.vendor.com/plans/tool?locale=en', 'https://vendor.com/pricing']) {
    assert.equal(pricingTargetInScope(product, target, { at: '2025-07-01T00:00:00.000Z' }), false);
  }
  assert.equal(pricingTargetInScope(product, product.url), true);
});
test('alias evidence remains dated, scoped, exact and immutable when catalog entries are admitted', () => {
  assert.equal(pricingAliasFor(product, alias.url), null);
  assert.deepEqual(pricingAliasFor(product, alias.url, alias.evidenceCapturedAt), alias);
  const make = patch => [{ productId: product.id, ...alias, ...patch }];
  for (const patch of [{ evidenceSha256: 'bad' }, { evidenceArchiveUrl: alias.evidenceArchiveUrl.replace('20250620', '20250619') },
    { evidenceCapturedAt: 'bad' }, { url: 'https://user:secret@vendor.com/pricing' },
    { scope: { edition: null, deployment: 'unknown' } }]) {
    assert.throws(() => applyPricingAliases([{ ...product, pricingAliases: [] }], make(patch)));
  }
  assert.throws(() => applyPricingAliases([{ ...product, pricingAliases: [] }], [...make({}), ...make({})]));
});
