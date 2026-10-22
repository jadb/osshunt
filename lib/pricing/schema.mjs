import { z as defaultZ } from 'zod';

export function pricingObservation(z) {
  const evidence = z.strictObject({ locator: z.string().min(1), text: z.string().min(1) });
  const unknownText = z.string().min(1).nullable();
  const date = z.iso.datetime();
  const digest = z.string().regex(/^[a-f0-9]{64}$/);
  const qualifications = z.strictObject({ region: unknownText, locale: unknownText, tax: unknownText,
    promotion: unknownText, startingAt: z.boolean().nullable(), range: unknownText, volume: unknownText,
    billingVariant: unknownText });
  const offer = z.strictObject({ literal: z.string().min(1), amount: z.string().regex(/^\d+(?:\.\d+)?$/).nullable(),
    currency: z.string().regex(/^[A-Z]{3}$/).nullable(), billingPeriod: z.enum(['month', 'year', 'one-time', 'unknown']),
    commitment: z.enum(['monthly', 'annual', 'unknown']), unit: unknownText,
    minimumQuantity: z.number().positive().nullable(), qualifications, source: evidence });
  const plan = z.strictObject({ name: z.string().min(1), order: z.int().nonnegative(), popular: z.boolean().nullable(),
    kind: z.enum(['plan', 'addon']), status: z.enum(['free', 'trial', 'paid', 'quote', 'unknown']),
    offers: z.array(offer), features: z.array(z.strictObject({ name: z.string().min(1), value: z.string(), source: evidence })),
    source: evidence });
  return z.strictObject({ id: z.string().regex(/^[a-z0-9_-]+$/), productId: z.string().regex(/^[a-z0-9-]+$/),
    scope: z.strictObject({ edition: unknownText, deployment: z.enum(['hosted', 'self-hosted', 'unknown']) }),
    anchorAt: date, landingCapturedAt: date, pricingCapturedAt: date, evidenceAvailableAt: date,
    landingUrl: z.url(), pricingUrl: z.url(), landingArchiveUrl: z.url(), pricingArchiveUrl: z.url(),
    provenance: z.enum(['archived-link', 'current-source-hint']), sourceSha256: digest, landingSha256: digest,
    sourceDigest: unknownText, landingDigest: unknownText, fetchedAt: date, landingFetchedAt: date,
    aliasEvidenceAt: z.array(date), extractorVersion: z.string().min(1), reviewState: z.enum(['proposed', 'confirmed']),
    quality: z.enum(['complete', 'partial', 'unavailable']), issues: z.array(z.string()), plans: z.array(plan),
    planIdentities: z.record(z.string(), z.string().min(1)).optional(),
    review: z.strictObject({ reviewer: z.string().min(1), reviewedAt: date, decision: z.literal('confirmed') }).optional(),
  }).meta({ title: 'pricing-observations', description: 'Confirmed historical pricing observations with archived evidence',
    'x-key': 'id', 'x-key-case': 'insensitive', 'x-source': 'research/pricing/confirmed.json' });
}

function assertReplay(replay, original, capturedAt) {
  const url = new URL(replay), match = /^\/web\/(\d{14})(?:id_)?\/(.+)$/.exec(url.pathname + url.search);
  const expected = new Date(capturedAt).toISOString().replace(/\D/g, '').slice(0, 14);
  if (url.origin !== 'https://web.archive.org' || url.hash || !match || match[1] !== expected ||
      new URL(match[2]).href !== new URL(original).href) throw new Error('Pricing replay identity/date mismatch');
}
export function validatePricingObservations(rows, catalog, { confirmedOnly = true } = {}) {
  const parsed = defaultZ.array(pricingObservation(defaultZ)).parse(rows);
  const ids = new Set(), products = new Set(catalog.map(value => value.id));
  for (const row of parsed) {
    if (!products.has(row.productId) || ids.has(row.id)) throw new Error('Unknown product or duplicate pricing ID');
    ids.add(row.id);
    if (confirmedOnly && (row.reviewState !== 'confirmed' || !row.review || !row.plans.length || row.quality === 'unavailable')) {
      throw new Error('Only explicitly confirmed pricing facts can publish');
    }
    assertReplay(row.landingArchiveUrl, row.landingUrl, row.landingCapturedAt);
    assertReplay(row.pricingArchiveUrl, row.pricingUrl, row.pricingCapturedAt);
    const availableAt = Math.max(...[row.landingCapturedAt, row.pricingCapturedAt, ...row.aliasEvidenceAt].map(Date.parse));
    if (Date.parse(row.evidenceAvailableAt) !== availableAt || Date.parse(row.pricingCapturedAt) > Date.parse(row.anchorAt) ||
        Date.parse(row.landingCapturedAt) > Date.parse(row.anchorAt)) throw new Error('Pricing evidence dates inconsistent');
  }
  return parsed.sort((a, b) => a.id.localeCompare(b.id, 'en'));
}
