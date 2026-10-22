export function observation(id = 'sample-20200101') {
  return { id, productId: 'sample', scope: { edition: null, deployment: 'unknown' },
    anchorAt: '2020-01-01T00:00:00.000Z', landingCapturedAt: '2020-01-01T00:00:00.000Z',
    pricingCapturedAt: '2020-01-01T00:00:00.000Z', evidenceAvailableAt: '2020-01-01T00:00:00.000Z',
    landingUrl: 'https://sample.example.com/', pricingUrl: 'https://sample.example.com/pricing',
    landingArchiveUrl: 'https://web.archive.org/web/20200101000000id_/https://sample.example.com/',
    pricingArchiveUrl: 'https://web.archive.org/web/20200101000000id_/https://sample.example.com/pricing',
    provenance: 'archived-link', discovery: { label: 'Pricing', locator: 'a:1' }, sourceSha256: 'a'.repeat(64), landingSha256: 'b'.repeat(64),
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
