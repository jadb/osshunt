import { validateLandingUrl } from '../history/archive.mjs';
import { EXTRACTOR_VERSION } from './extract.mjs';
import { sha256 } from './archive.mjs';
import { productPricingPaths, pricingTargetInScope } from './scope.mjs';
import { validatePricingObservations } from './schema.mjs';
import { pricingProposal } from './proposal.mjs';
export const iso = (ms) => new Date(ms).toISOString();
export const sampleError = (code, message) => Object.assign(new Error(message), { code });
export const host = (value) => new URL(value).hostname.toLowerCase().replace(/^www\./, '');
export async function samplingInputs({ catalog, ids, from, cutoff, maxCandidates, extractor, baselineFingerprint }) {
  if (
    !Array.isArray(catalog) ||
    !Array.isArray(ids) ||
    !ids.length ||
    ids.length > 227 ||
    new Set(ids).size !== ids.length
  )
    throw Error('Unique known product IDs required');
  if (
    !Number.isFinite(Date.parse(from)) ||
    !Number.isFinite(Date.parse(cutoff)) ||
    Date.parse(from) > Date.parse(cutoff) ||
    Date.parse(cutoff) - Date.parse(from) > 31 * 86400000
  )
    throw Error('Sampling window must be ordered and at most 31 days');
  if (!Number.isInteger(maxCandidates) || maxCandidates < 1 || maxCandidates > 2)
    throw Error('At most two pricing candidates supported');
  if (typeof extractor !== 'function') throw Error('Extractor required');
  const products = ids.map((id) => {
    const found = catalog.find((p) => p.id === id);
    if (!found || !/^[a-z0-9-]+$/.test(id)) throw Error('Unknown product ID');
    validateLandingUrl(found.url);
    for (const allowed of found.allowedHosts || []) {
      if (typeof allowed !== 'string' || new URL(`https://${allowed}/`).hostname !== allowed.toLowerCase())
        throw Error('Invalid approved host');
      validateLandingUrl(`https://${allowed}/`);
    }
    const product = { ...found, productPaths: found.productPaths || productPricingPaths(found) };
    if (!pricingTargetInScope(product, product.url)) throw Error(`Landing page outside product scope: ${id} ${product.url}`);
    for (const hint of product.pricingHints || []) {
      const value = typeof hint === 'string' ? hint : hint?.url;
      validateLandingUrl(value);
      if (!pricingTargetInScope(product, value)) throw Error(`Pricing hint outside product scope: ${id} ${value}`);
    }
    if (
      product.scope &&
      ((typeof product.scope.edition !== 'string' && product.scope.edition !== null) ||
        !['hosted', 'self-hosted', 'unknown'].includes(product.scope.deployment))
    )
      throw Error('Invalid product scope');
    return product;
  });
  const inputs = {
    ids: [...ids],
    from: iso(Date.parse(from)),
    cutoff: iso(Date.parse(cutoff)),
    maxCandidates,
    catalog: products.map((p) => ({
      id: p.id,
      name: p.name,
      url: p.url,
      kind: p.kind,
      scope: p.scope || { edition: null, deployment: 'unknown' },
      productPaths: p.productPaths,
      allowedHosts: p.allowedHosts || [],
      pricingHints: p.pricingHints || [],
      ...(p.pricingAliases ? { pricingAliases: p.pricingAliases } : {}),
    })),
  };
  return {
    products,
    inputs,
    baselineFingerprint: baselineFingerprint || (await sha256(`${EXTRACTOR_VERSION}:${extractor.toString()}`)),
  };
}
export function assertRecord(record, product, { from, cutoff, originalUrl }) {
  if (!record) return;
  validateLandingUrl(record.originalUrl);
  if (record.mimeType !== 'text/html') throw sampleError('archive_bad_response', 'Selected capture is not HTML');
  const normalized = (value) => {
    const u = validateLandingUrl(value);
    return `${u.hostname.replace(/^www\./, '')}${u.pathname.replace(/\/$/, '') || '/'}${u.search}`;
  };
  if (originalUrl && normalized(originalUrl) !== normalized(record.originalUrl))
    throw sampleError('archive_bad_response', 'Selected original URL changed');
  if (
    !pricingTargetInScope(product, record.originalUrl, { at: cutoff }) ||
    !Number.isFinite(Date.parse(record.capturedAt)) ||
    Date.parse(record.capturedAt) < Date.parse(from) ||
    Date.parse(record.capturedAt) > Date.parse(cutoff)
  )
    throw sampleError('archive_bad_response', 'Capture outside approved scope/window');
  const stamp = new Date(record.capturedAt).toISOString().replace(/\D/g, '').slice(0, 14);
  if (stamp !== record.timestamp || (record.digest != null && !/^(?:sha1:)?[A-Z2-7]{32}$/i.test(record.digest)))
    throw sampleError('archive_bad_response', 'Invalid selected capture');
}
export function validateSavedSampling(journal, products, inputs) {
  if (
    !Array.isArray(journal.products) ||
    JSON.stringify(journal.products.map((p) => p.id)) !== JSON.stringify(inputs.ids)
  )
    throw Error('Journal product cohort changed');
  for (const row of journal.products) {
    const product = products.find((p) => p.id === row.id);
    if (row.landing) assertRecord(row.landing, product, { ...inputs, originalUrl: product.url });
    if (row.landingLookup?.record) {
      assertRecord(row.landingLookup.record, product, { ...inputs, originalUrl: product.url });
      if (JSON.stringify(row.landing) !== JSON.stringify(row.landingLookup.record))
        throw Error('Journal landing selection changed');
    }
    if (row.candidates !== null && !Array.isArray(row.candidates)) throw Error('Invalid saved candidates');
    if (
      (row.candidates || []).length > inputs.maxCandidates ||
      !Number.isSafeInteger(row.candidateIndex) ||
      row.candidateIndex < 0 ||
      row.candidateIndex > (row.candidates || []).length
    )
      throw Error('Invalid saved candidate index');
    for (const candidate of row.candidates || []) {
      validateLandingUrl(candidate.url);
      if (
        !pricingTargetInScope(product, candidate.url, { at: row.landing?.capturedAt || inputs.cutoff }) ||
        !['archived-link', 'current-source-hint'].includes(candidate.provenance) ||
        typeof candidate.label !== 'string' ||
        typeof candidate.locator !== 'string' ||
        !candidate.locator
      )
        throw Error('Saved candidate outside approved scope');
    }
    for (const [index, result] of (row.candidateResults || []).entries()) {
      if (JSON.stringify(result.candidate) !== JSON.stringify(row.candidates?.[index]))
        throw Error('Saved candidate selection changed');
      if (result.lookup?.record) {
        if (!row.landing) throw Error('Pricing record without landing');
        assertRecord(result.lookup.record, product, {
          from: iso(Date.parse(row.landing.capturedAt) - 30 * 86400000),
          cutoff: row.landing.capturedAt,
          originalUrl: result.candidate.url,
        });
      }
    }
    if (row.landingFallback) {
      validatePricingObservations([row.landingFallback], [product], { confirmedOnly: false });
      const fallback = row.landingFallback;
      if (fallback.provenance !== 'landing-page' || !row.landing ||
          fallback.landingUrl !== row.landing.originalUrl || fallback.landingCapturedAt !== row.landing.capturedAt ||
          fallback.landingDigest !== row.landing.digest || fallback.landingSha256 !== row.landingMetadata?.sha256)
        throw Error('Saved landing fallback differs from retained capture evidence');
    }
    if (row.proposal) validatePricingObservations([row.proposal], [product], { confirmedOnly: false });
  }
}
export async function samplingProposal(product, row, candidate, pricing, metadata, extracted) {
  return pricingProposal({ product, landing: row.landing, landingMetadata: row.landingMetadata,
    pricing, metadata, extracted, discovery: candidate });
}
