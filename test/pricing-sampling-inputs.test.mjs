import test from 'node:test';
import assert from 'node:assert/strict';
import { samplingInputs } from '../lib/pricing/sampling-support.mjs';
const options = { from: '2025-06-01T00:00:00.000Z', cutoff: '2025-06-30T23:59:59.000Z',
  maxCandidates: 2, extractor: () => ({ plans: [] }) };
test('file-like approved landing passes offline sampling preflight with its exact identity', async () => {
  const product = { id: 'adobe-acrobat', name: 'Adobe Acrobat', kind: 'paid',
    url: 'https://www.adobe.com/acrobat.html', productPaths: ['/acrobat'],
    pricingHints: ['https://www.adobe.com/acrobat/pricing.html'] };
  const result = await samplingInputs({ ...options, catalog: [product], ids: [product.id] });
  assert.equal(result.inputs.catalog[0].url, product.url);
  assert.deepEqual(result.inputs.catalog[0].productPaths, ['/acrobat']);
});
test('sampling scope failures identify the offending product and exact rejected URL', async () => {
  const product = { id: 'adobe-acrobat', url: 'https://www.adobe.com/acrobat.html',
    productPaths: ['/products/photoshop'] };
  await assert.rejects(samplingInputs({ ...options, catalog: [product], ids: [product.id] }),
    /Landing page outside product scope: adobe-acrobat https:\/\/www\.adobe\.com\/acrobat\.html/);
  const hinted = { ...product, productPaths: ['/acrobat'],
    pricingHints: ['https://www.adobe.com/products/photoshop/pricing'] };
  await assert.rejects(samplingInputs({ ...options, catalog: [hinted], ids: [hinted.id] }),
    /Pricing hint outside product scope: adobe-acrobat https:\/\/www\.adobe\.com\/products\/photoshop\/pricing/);
});
