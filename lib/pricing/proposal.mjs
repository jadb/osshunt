import { archiveUrl, sha256 } from './archive.mjs';
import { EXTRACTOR_VERSION } from './extract.mjs';
import { validatePricingObservations } from './schema.mjs';
import { validateLandingUrl } from '../history/archive.mjs';
import { pricingAliasFor } from './scope.mjs';

export const bodyIdentity = record => `${record.originalUrl}|${record.timestamp}|${record.digest || '-'}`;
const classifications = new Set(['static_pricing', 'embedded_pricing', 'partial_pricing', 'quote_only',
  'client_rendered_unavailable', 'unsupported']);
const boundedIssues = issues => (Array.isArray(issues) ? issues : [])
  .filter(value => typeof value === 'string').slice(0, 32).map(value => value.slice(0, 1024));
export function extractionDiagnostics(extracted) {
  const value = extracted?.diagnostics;
  if (!value || !classifications.has(value.classification)) return null;
  return { classification: value.classification, flags: (Array.isArray(value.flags) ? value.flags : [])
    .filter(flag => typeof flag === 'string').slice(0, 16).map(flag => flag.slice(0, 128)) };
}
export function discoveryDiagnostics(rejections = [], summary = {}) {
  const retained = [];
  for (const row of rejections) {
    if (retained.length === 100) break;
    if (!row || typeof row.url !== 'string' || row.url.length > 8192 || typeof row.label !== 'string' ||
        typeof row.locator !== 'string' || !row.locator || typeof row.reason !== 'string' ||
        !['archived-link', 'current-source-hint'].includes(row.provenance)) continue;
    try { validateLandingUrl(row.url); } catch { continue; }
    const next = { url: row.url, label: row.label.slice(0, 4000), locator: row.locator.slice(0, 256),
      provenance: row.provenance, reason: row.reason.slice(0, 128) };
    if (new TextEncoder().encode(JSON.stringify([...retained, next])).byteLength > 65536) break;
    retained.push(next);
  }
  const total = Math.max(rejections.length, Number.isSafeInteger(summary.total) && summary.total >= 0 ? summary.total : 0);
  return { discoveryRejections: retained,
    discoveryRejectionSummary: { total, retained: retained.length, omitted: total - retained.length } };
}
export function actionablePricing(proposal) {
  return proposal.plans.some(plan => plan.kind === 'plan' && (plan.status === 'quote' ||
    plan.status === 'paid' && plan.offers.some(offer => offer.amount !== null && Number(offer.amount) > 0)));
}
export async function pricingProposal({ product, landing, landingMetadata, pricing, metadata, extracted, discovery,
  anchorAt = landing.capturedAt }) {
  const warnings = [landingMetadata.integrity, metadata.integrity]
    .filter(value => value?.status === 'legacy_chunked_unverified').map(value => value.reason);
  const alias = discovery.provenance === 'landing-page' ? null : pricingAliasFor(product, pricing.originalUrl, anchorAt);
  const aliasEvidenceAt = alias ? [alias.evidenceCapturedAt] : [];
  const proposal = {
    id: `pricing-${await sha256(`${product.id}|${bodyIdentity(landing)}|${bodyIdentity(pricing)}`)}`,
    productId: product.id, scope: alias?.scope || product.scope || { edition: null, deployment: 'unknown' }, anchorAt,
    landingCapturedAt: landing.capturedAt, pricingCapturedAt: pricing.capturedAt,
    evidenceAvailableAt: new Date(Math.max(Date.parse(landing.capturedAt), Date.parse(pricing.capturedAt), ...aliasEvidenceAt.map(Date.parse))).toISOString(),
    landingUrl: landing.originalUrl, pricingUrl: pricing.originalUrl,
    landingArchiveUrl: archiveUrl(landing), pricingArchiveUrl: archiveUrl(pricing),
    provenance: discovery.provenance, discovery: { label: discovery.label || '', locator: discovery.locator },
    sourceSha256: metadata.sha256, landingSha256: landingMetadata.sha256,
    sourceDigest: pricing.digest, landingDigest: landing.digest,
    fetchedAt: metadata.fetchedAt, landingFetchedAt: landingMetadata.fetchedAt,
    ...(metadata.integrity ? { sourceIntegrity: metadata.integrity } : {}),
    ...(landingMetadata.integrity ? { landingIntegrity: landingMetadata.integrity } : {}),
    ...(metadata.transport ? { sourceTransport: metadata.transport } : {}),
    ...(landingMetadata.transport ? { landingTransport: landingMetadata.transport } : {}),
    aliasEvidenceAt, extractorVersion: EXTRACTOR_VERSION, reviewState: 'proposed', quality: 'partial',
    issues: [...new Set([...boundedIssues(extracted.issues), ...warnings])], plans: extracted.plans,
  };
  return validatePricingObservations([proposal], [product], { confirmedOnly: false })[0];
}
function extractionFragments(extracted) {
  const plans = Array.isArray(extracted?.plans) ? extracted.plans : [];
  const retained = { plans: [], quality: extracted?.quality, issues: boundedIssues(extracted?.issues) };
  for (const plan of plans) {
    if (retained.plans.length === 40) break;
    const next = { ...retained, plans: [...retained.plans, plan] };
    if (new TextEncoder().encode(JSON.stringify(next)).byteLength > 65536) break;
    retained.plans.push(plan);
  }
  return { extracted: retained, rawPlanCount: plans.length,
    rawOfferCount: plans.reduce((sum, plan) => sum + (Array.isArray(plan?.offers) ? plan.offers.length : 0), 0),
    omittedPlans: plans.length - retained.plans.length };
}
export async function inspectPricing({ html, extractor, ...input }) {
  let extracted;
  try { extracted = extractor(html, { originalUrl: input.pricing.originalUrl }); }
  catch (cause) {
    return { proposal: null, extracted: null, summary: { status: 'invalid',
      issues: [`Pricing extraction failed: ${String(cause.message).slice(0, 512)}`] } };
  }
  const diagnostics = extractionDiagnostics(extracted);
  const summary = { status: 'extraction_unavailable', ...(diagnostics ? { diagnostics } : {}),
    issues: boundedIssues(extracted?.issues), ...extractionFragments(extracted) };
  if (!extracted?.plans?.length || extracted.quality === 'unavailable' ||
      ['unsupported', 'client_rendered_unavailable'].includes(diagnostics?.classification))
    return { proposal: null, extracted, summary };
  const discovery = input.discovery || { provenance: 'landing-page', label: extracted.plans[0].name,
    locator: extracted.plans[0].source?.locator };
  try {
    const proposal = await pricingProposal({ ...input, extracted, discovery });
    return { proposal, extracted, summary: { ...summary, status: 'review_pending' } };
  } catch (cause) {
    return { proposal: null, extracted, summary: { ...summary, status: 'invalid',
      issues: [...summary.issues, `Invalid pricing observation schema: ${String(cause.message).slice(0, 512)}`] } };
  }
}
