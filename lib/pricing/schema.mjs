import { z as defaultZ } from 'zod';
import { validateLandingUrl } from '../history/archive.mjs';
import { addSixMonths } from './calendar.mjs';
import { pricingTargetInScope, pricingAliasFor } from './scope.mjs';

export function pricingObservation(z) {
  const evidence = z.strictObject({ locator: z.string().min(1), text: z.string().min(1) });
  const unknownText = z.string().min(1).nullable();
  const date = z.iso.datetime();
  const digest = z.string().regex(/^[a-f0-9]{64}$/);
  const archiveDigest = z.string().regex(/^(?:sha1:)?[A-Z2-7]{32}$/i);
  const integrity = z.strictObject({ status: z.enum(['verified', 'unknown', 'legacy_chunked_unverified']),
    expectedDigest: archiveDigest.nullable(), actualDigest: z.string().regex(/^[A-Z2-7]{32}$/), reason: z.string().min(1).optional() });
  const transport = z.strictObject({ status: z.int(), mementoDatetime: unknownText, originalUrl: z.url(),
    archivedTransferEncoding: unknownText, originalContentEncoding: unknownText,
    sourceWarc: z.string().min(1).max(512).nullable(), originalDigest: archiveDigest.nullable() });
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
    provenance: z.enum(['archived-link', 'current-source-hint', 'landing-page']),
    discovery: z.strictObject({ label: z.string(), locator: z.string().min(1) }), sourceSha256: digest, landingSha256: digest,
    sourceDigest: unknownText, landingDigest: unknownText, fetchedAt: date, landingFetchedAt: date,
    sourceIntegrity: integrity.optional(), landingIntegrity: integrity.optional(),
    sourceTransport: transport.optional(), landingTransport: transport.optional(),
    aliasEvidenceAt: z.array(date), extractorVersion: z.string().min(1), reviewState: z.enum(['proposed', 'confirmed']),
    quality: z.enum(['complete', 'partial', 'unavailable']), issues: z.array(z.string()), plans: z.array(plan),
    planIdentities: z.record(z.string(), z.string().min(1)).optional(),
    review: z.strictObject({ reviewer: z.string().min(1), reviewedAt: date, decision: z.literal('confirmed'),
      acceptedUnverifiedArchiveDigest: z.boolean().optional() }).optional(),
  }).meta({ title: 'pricing-observations', description: 'Confirmed historical pricing observations with archived evidence',
    'x-key': 'id', 'x-key-case': 'insensitive', 'x-source': 'research/pricing/confirmed.json' });
}

function assertReplay(replay, original, capturedAt) {
  const url = new URL(replay), match = /^\/web\/(\d{14})(?:id_)?\/(.+)$/.exec(url.pathname + url.search);
  const expected = new Date(capturedAt).toISOString().replace(/\D/g, '').slice(0, 14);
  if (url.origin !== 'https://web.archive.org' || url.username || url.password || url.port || url.hash || !match || match[1] !== expected ||
      new URL(match[2]).href !== new URL(original).href) throw new Error('Pricing replay identity/date mismatch');
}
const normalizeDigest = value => value?.replace(/^sha1:/i, '').toUpperCase() ?? null;
function assertIntegrity(row, kind) {
  const pricing = kind === 'source';
  const grade = row[`${kind}Integrity`], transport = row[`${kind}Transport`];
  if (!grade) return;
  const digest = row[pricing ? 'sourceDigest' : 'landingDigest'];
  const originalUrl = row[pricing ? 'pricingUrl' : 'landingUrl'];
  const capturedAt = row[pricing ? 'pricingCapturedAt' : 'landingCapturedAt'];
  const expected = normalizeDigest(digest);
  if (normalizeDigest(grade.expectedDigest) !== expected) throw new Error('Integrity grade differs from retained digest');
  if (grade.status === 'unknown' && expected !== null || grade.status !== 'unknown' && expected === null ||
      grade.status === 'verified' && grade.actualDigest !== expected ||
      grade.status === 'legacy_chunked_unverified' && grade.actualDigest === expected)
    throw new Error('Integrity grade inconsistent with digest evidence');
  if (transport && (transport.status !== 200 || transport.originalUrl !== originalUrl ||
      transport.mementoDatetime && Date.parse(transport.mementoDatetime) !== Date.parse(capturedAt) ||
      transport.originalDigest && expected && normalizeDigest(transport.originalDigest) !== expected))
    throw new Error('Transport evidence differs from selected capture');
  if (grade.status !== 'legacy_chunked_unverified' || row.reviewState !== 'confirmed') return;
  if (row.review?.acceptedUnverifiedArchiveDigest !== true) throw new Error('Unverified archive digest requires explicit acceptance');
  if (row.quality !== 'partial' || !row.issues.some(value => /unverified/i.test(value)) || !grade.reason)
    throw new Error('Unverified archive evidence requires partial quality and visible warning');
  if (!transport || transport.status !== 200 || transport.originalUrl !== originalUrl || !transport.mementoDatetime ||
      Date.parse(transport.mementoDatetime) !== Date.parse(capturedAt) ||
      Date.parse(capturedAt) >= Date.parse('2026-09-17T00:00:00.000Z') ||
      !String(transport.archivedTransferEncoding || '').split(',').some(value => value.trim().toLowerCase() === 'chunked'))
    throw new Error('Legacy archive evidence lacks qualified transport proof');
}
function assertLandingEvidence(row, product) {
  if (row.provenance !== 'landing-page') return;
  for (const [source, landing] of [['pricingUrl', 'landingUrl'], ['pricingArchiveUrl', 'landingArchiveUrl'],
    ['pricingCapturedAt', 'landingCapturedAt'], ['sourceSha256', 'landingSha256'], ['sourceDigest', 'landingDigest'],
    ['fetchedAt', 'landingFetchedAt'], ['sourceIntegrity', 'landingIntegrity'], ['sourceTransport', 'landingTransport']]) {
    if (JSON.stringify(row[source]) !== JSON.stringify(row[landing])) throw new Error('Landing-page pricing requires identical capture evidence');
  }
  const scope = product.scope || { edition: null, deployment: 'unknown' };
  if (row.aliasEvidenceAt.length || row.scope.edition !== scope.edition || row.scope.deployment !== scope.deployment)
    throw new Error('Landing-page pricing must retain canonical product scope');
  if (!row.plans.some(plan => plan.name === row.discovery.label && plan.source.locator === row.discovery.locator))
    throw new Error('Landing-page discovery must identify a retained plan field');
}
export function validatePricingObservations(rows, catalog, { confirmedOnly = true } = {}) {
  const parsed = defaultZ.array(pricingObservation(defaultZ)).parse(rows);
  const ids = new Set(), products = new Map(catalog.map(value => [value.id, value]));
  for (const row of parsed) {
    if (!products.has(row.productId) || ids.has(row.id)) throw new Error('Unknown product or duplicate pricing ID');
    ids.add(row.id);
    assertLandingEvidence(row, products.get(row.productId));
    assertIntegrity(row, 'source'); assertIntegrity(row, 'landing');
    const planKeys = new Set(), names = new Set();
    for (const plan of row.plans) {
      const identity = row.planIdentities?.[plan.name] || `name:${plan.kind}:${plan.name}`;
      if (planKeys.has(identity) || names.has(plan.name)) throw new Error('Duplicate plan name or identity');
      planKeys.add(identity); names.add(plan.name);
      if (new Set(plan.features.map(value => value.name)).size !== plan.features.length) throw new Error('Duplicate feature identity');
    }
    for (const original of [row.landingUrl, row.pricingUrl]) validateLandingUrl(original);
    const product = products.get(row.productId);
    const alias = row.provenance === 'landing-page' ? null : pricingAliasFor(product, row.pricingUrl, row.anchorAt);
    if (alias) {
      if (row.aliasEvidenceAt.length !== 1 || row.aliasEvidenceAt[0] !== alias.evidenceCapturedAt ||
        row.scope.edition !== alias.scope.edition || row.scope.deployment !== alias.scope.deployment)
        throw new Error('Pricing alias requires its exact evidence date and explicit source scope');
      if (row.landingArchiveUrl === alias.evidenceArchiveUrl && row.landingSha256 !== alias.evidenceSha256)
        throw new Error('Pricing alias landing evidence hash differs from reviewed capture');
    } else if (row.aliasEvidenceAt.length) throw new Error('Unapproved pricing alias evidence');
    if (product.url) {
      const host = new URL(product.url).hostname.replace(/^www\./, '');
      const allowed = new Set([host, ...(product.allowedHosts || []).map(value => value.replace(/^www\./, ''))]);
      for (const original of [row.landingUrl, row.pricingUrl]) {
        const target = new URL(original).hostname.replace(/^www\./, '');
        if (!(original === row.pricingUrl && alias) && ![...allowed].some(value => target === value || target.endsWith(`.${value}`)))
          throw new Error('Unapproved product host');
      }
      if (!pricingTargetInScope(product, row.pricingUrl, { at: row.anchorAt })) throw new Error('Pricing page outside approved product paths');
    }
    if (confirmedOnly && (row.reviewState !== 'confirmed' || !row.review || !row.plans.length || row.quality === 'unavailable')) {
      throw new Error('Only explicitly confirmed pricing facts can publish');
    }
    assertReplay(row.landingArchiveUrl, row.landingUrl, row.landingCapturedAt);
    assertReplay(row.pricingArchiveUrl, row.pricingUrl, row.pricingCapturedAt);
    const availableAt = Math.max(...[row.landingCapturedAt, row.pricingCapturedAt, ...row.aliasEvidenceAt].map(Date.parse));
    const ageLimit = 30 * 86400000, anchor = Date.parse(row.anchorAt);
    if (Date.parse(row.evidenceAvailableAt) !== availableAt || availableAt > anchor ||
        anchor - Date.parse(row.pricingCapturedAt) > ageLimit || anchor - Date.parse(row.landingCapturedAt) > ageLimit) {
      throw new Error('Pricing evidence dates inconsistent');
    }
  }
  const previous = new Map();
  for (const row of [...parsed].sort((a, b) => a.pricingCapturedAt.localeCompare(b.pricingCapturedAt))) {
    const key = JSON.stringify([row.productId, row.scope.edition, row.scope.deployment]);
    if (previous.has(key) && Date.parse(row.pricingCapturedAt) < Date.parse(addSixMonths(previous.get(key)))) {
      throw new Error('Pricing observations must be six calendar months apart');
    }
    previous.set(key, row.pricingCapturedAt);
  }
  return parsed.sort((a, b) => a.id.localeCompare(b.id, 'en'));
}
