import test from 'node:test';
import assert from 'node:assert/strict';
import { pricingTargetInScope } from '../lib/pricing/scope.mjs';
import { applyPricingAliases, pricingAliasFor } from '../lib/pricing/aliases.mjs';
import { discoverPricingLinks } from '../lib/pricing/links.mjs';
import { validatePricingObservations } from '../lib/pricing/schema.mjs';
import { observation } from './fixtures/pricing-observation.mjs';
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
test('observation aliases retain their exact evidence date and bundle scope', () => {
  const row = { ...observation('tool-20250620'), productId: product.id, scope: alias.scope,
    anchorAt: alias.evidenceCapturedAt, landingCapturedAt: alias.evidenceCapturedAt,
    pricingCapturedAt: alias.evidenceCapturedAt, evidenceAvailableAt: alias.evidenceCapturedAt,
    landingUrl: product.url, pricingUrl: alias.url, landingArchiveUrl: alias.evidenceArchiveUrl,
    pricingArchiveUrl: `https://web.archive.org/web/20250620000000id_/${alias.url}`, aliasEvidenceAt: [alias.evidenceCapturedAt],
    landingSha256: alias.evidenceSha256 };
  assert.equal(validatePricingObservations([row], [product]).length, 1);
  assert.throws(() => validatePricingObservations([{ ...row, aliasEvidenceAt: [] }], [product]), /alias/i);
  assert.throws(() => validatePricingObservations([{ ...row, scope: { edition: null, deployment: 'unknown' } }], [product]), /alias/i);
  assert.throws(() => validatePricingObservations([{ ...row, landingSha256: 'b'.repeat(64) }], [product]), /alias/i);
  const early = '2025-06-19T00:00:00.000Z';
  assert.throws(() => validatePricingObservations([{ ...row, anchorAt: early, landingCapturedAt: early,
    pricingCapturedAt: early, evidenceAvailableAt: early, aliasEvidenceAt: [],
    landingArchiveUrl: row.landingArchiveUrl.replace('20250620', '20250619'),
    pricingArchiveUrl: row.pricingArchiveUrl.replace('20250620', '20250619') }], [product]), /scope|alias|paths/i);
});
test('discovery admits a reviewed exact alias only after its evidence date and retains other rejections', () => {
  const html = `<a href="${alias.url}">Pricing</a><a href="https://checkout.vendor.com/plans/other">Pricing</a>`;
  const options = { landingUrl: product.url, productPaths: product.productPaths, pricingAliases: [alias] };
  const rejected = [];
  assert.deepEqual(discoverPricingLinks(html, { ...options, capturedAt: alias.evidenceCapturedAt, rejections: rejected })
    .map(link => link.url), [alias.url]);
  assert.equal(rejected.length, 1);
  assert.equal(rejected[0].url, 'https://checkout.vendor.com/plans/other');
  assert.equal(discoverPricingLinks(html, { ...options, capturedAt: '2025-06-19T00:00:00.000Z' }).length, 0);
  assert.equal(discoverPricingLinks(html, options).length, 0);
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
