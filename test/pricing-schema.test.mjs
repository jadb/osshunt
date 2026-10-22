import test from 'node:test';
import assert from 'node:assert/strict';
import { z } from 'zod';
import { pricingObservation, validatePricingObservations } from '../lib/pricing/schema.mjs';

export function observation(id = 'sample-20200101') {
  return { id, productId: 'sample', scope: { edition: null, deployment: 'unknown' },
    anchorAt: '2020-01-01T00:00:00.000Z', landingCapturedAt: '2020-01-01T00:00:00.000Z',
    pricingCapturedAt: '2020-01-01T00:00:00.000Z', evidenceAvailableAt: '2020-01-01T00:00:00.000Z',
    landingUrl: 'https://sample.example/', pricingUrl: 'https://sample.example/pricing',
    landingArchiveUrl: 'https://web.archive.org/web/20200101000000id_/https://sample.example/',
    pricingArchiveUrl: 'https://web.archive.org/web/20200101000000id_/https://sample.example/pricing',
    provenance: 'archived-link', sourceSha256: 'a'.repeat(64), landingSha256: 'b'.repeat(64),
    sourceDigest: null, landingDigest: null, fetchedAt: '2026-10-22T00:00:00.000Z',
    landingFetchedAt: '2026-10-22T00:00:00.000Z', aliasEvidenceAt: [], extractorVersion: '1.0.0',
    reviewState: 'confirmed', quality: 'complete', issues: [], plans: [{ name: 'Pro', order: 0,
      popular: null, kind: 'plan', status: 'paid', offers: [{ literal: 'USD 12 per month', amount: '12',
        currency: 'USD', billingPeriod: 'month', commitment: 'unknown', unit: null, minimumQuantity: null,
        qualifications: { region: null, locale: null, tax: null, promotion: null, startingAt: null,
          range: null, volume: null, billingVariant: null }, source: { locator: 'article:1', text: 'USD 12 per month' } }],
      features: [], source: { locator: 'article:1', text: 'Pro USD 12 per month' } }],
    review: { reviewer: 'maintainer', reviewedAt: '2026-10-22T00:00:00.000Z', decision: 'confirmed' } };
}
test('pricing collection preserves exact decimals and rejects unsupported facts', () => {
  const item = observation();
  assert.equal(pricingObservation(z).parse(item).plans[0].offers[0].amount, '12');
  assert.throws(() => pricingObservation(z).parse({ ...item, inventedField: true }));
  const broken = structuredClone(item); broken.plans[0].offers[0].amount = 12;
  assert.throws(() => pricingObservation(z).parse(broken));
});
test('pricing collection permits empty coverage but rejects unknown products, proposals and duplicate IDs', () => {
  assert.deepEqual(validatePricingObservations([], [{ id: 'sample' }]), []);
  assert.throws(() => validatePricingObservations([observation()], [{ id: 'other' }]));
  assert.throws(() => validatePricingObservations([observation(), observation()], [{ id: 'sample' }]));
  assert.throws(() => validatePricingObservations([{ ...observation(), reviewState: 'proposed' }], [{ id: 'sample' }]));
});
test('pricing evidence requires exact replay identity and dates', () => {
  for (const patch of [
    { pricingArchiveUrl: 'https://evil.example/web/20200101000000/https://sample.example/pricing' },
    { pricingArchiveUrl: 'https://web.archive.org/web/20200102000000id_/https://sample.example/pricing' },
    { evidenceAvailableAt: '2019-12-31T00:00:00.000Z' },
    { pricingCapturedAt: '2020-01-02T00:00:00.000Z' },
  ]) assert.throws(() => validatePricingObservations([{ ...observation(), ...patch }], [{ id: 'sample' }]));
});
