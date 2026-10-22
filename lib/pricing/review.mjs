import { isDeepStrictEqual } from 'node:util';
import { validatePricingObservations } from './schema.mjs';
import { verifyHtmlEvidence, sha256 } from './archive.mjs';

export function observationBodies(row) {
  const identity = (url, date, digest) => `${url}|${date.replace(/\D/g, '').slice(0, 14)}|${digest || '-'}`;
  return [
    { kind: 'landing', originalUrl: row.landingUrl, capturedAt: row.landingCapturedAt,
      identity: identity(row.landingUrl, row.landingCapturedAt, row.landingDigest), sha256: row.landingSha256,
      digest: row.landingDigest, integrity: row.landingIntegrity, transport: row.landingTransport },
    { kind: 'pricing', originalUrl: row.pricingUrl, capturedAt: row.pricingCapturedAt,
      identity: identity(row.pricingUrl, row.pricingCapturedAt, row.sourceDigest), sha256: row.sourceSha256,
      digest: row.sourceDigest, integrity: row.sourceIntegrity, transport: row.sourceTransport },
  ];
}
export function reviewBodyMetadata(body, cached = {}) {
  return { sha256: body.sha256, originalUrl: body.originalUrl, capturedAt: body.capturedAt, digest: body.digest,
    mimeType: 'text/html', ...cached,
    ...(body.transport && !cached.transport ? { transport: body.transport } : {}),
    ...(body.integrity && !cached.integrity ? { integrity: body.integrity } : {}) };
}
export async function verifyReviewBody(body, cached) {
  if (!cached || await sha256(cached.bytes) !== body.sha256) throw new Error('Source body missing or hash mismatch');
  const metadata = reviewBodyMetadata(body, cached.metadata);
  if (body.transport && metadata.transport && !isDeepStrictEqual(body.transport, metadata.transport))
    throw new Error('Stored transport evidence changed since proposal');
  const integrity = await verifyHtmlEvidence(cached.bytes, { digest: body.digest,
    originalUrl: body.originalUrl, capturedAt: body.capturedAt }, metadata);
  if (body.integrity && !isDeepStrictEqual(body.integrity, integrity))
    throw new Error('Source integrity grade changed since proposal');
  return { integrity, metadata: { ...metadata, integrity } };
}
export async function exportReview({ productId, store, catalog, clock = Date.now }) {
  if (!catalog.some(product => product.id === productId)) throw new Error('Unknown product');
  const proposals = await store.getProposals(productId);
  validatePricingObservations(proposals, catalog, { confirmedOnly: false });
  return { formatVersion: 1, productId, exportedAt: new Date(clock()).toISOString(),
    observations: proposals.map(proposal => ({ proposal: structuredClone(proposal), decision: 'pending',
      reviewer: null, acceptUnverifiedArchiveDigest: false,
      archiveIntegrityWarning: [proposal.sourceIntegrity, proposal.landingIntegrity].some(value => value?.status === 'legacy_chunked_unverified')
        ? 'Original archive payload digest remains unverified. Confirm only after reviewing retained transport evidence and source facts.' : null,
      planIdentities: {}, sources: observationBodies(proposal).map(body => ({ ...body,
        file: `${productId}-sources/${proposal.id}-${body.kind}.txt` })) })) };
}
export async function importReview({ document, existing, store, catalog, clock = Date.now }) {
  if (document?.formatVersion !== 1 || !Array.isArray(document.observations) ||
      !catalog.some(product => product.id === document.productId)) throw new Error('Invalid review document');
  const originals = new Map((await store.getProposals(document.productId)).map(row => [row.id, row]));
  const confirmed = new Map(validatePricingObservations(existing, catalog).map(row => [row.id, row]));
  const seen = new Set();
  for (const item of document.observations) {
    if (!['pending', 'reject', 'confirm'].includes(item.decision) || seen.has(item.proposal?.id)) throw new Error('Invalid/duplicate review decision');
    seen.add(item.proposal?.id);
    if (item.decision !== 'confirm') continue;
    const original = originals.get(item.proposal?.id);
    if (!original || original.productId !== document.productId || !isDeepStrictEqual(item.proposal, original)) {
      throw new Error('Proposal changed since export; re-export and review');
    }
    if (typeof item.reviewer !== 'string' || !item.reviewer.trim()) throw new Error('Confirmation requires reviewer');
    const evidence = {};
    let legacy = false;
    for (const body of observationBodies(original)) {
      const result = await verifyReviewBody(body, await store.getBody(body.identity));
      const prefix = body.kind === 'pricing' ? 'source' : 'landing';
      evidence[`${prefix}Integrity`] = result.integrity;
      if (result.metadata.transport) evidence[`${prefix}Transport`] = result.metadata.transport;
      legacy ||= result.integrity.status === 'legacy_chunked_unverified';
    }
    if (legacy && item.acceptUnverifiedArchiveDigest !== true) throw new Error('Unverified archive digest requires explicit acceptance');
    const identities = item.planIdentities || {};
    if (Object.keys(identities).some(name => !original.plans.some(plan => plan.name === name))) throw new Error('Unknown plan identity');
    const row = { ...original, ...evidence, reviewState: 'confirmed', planIdentities: identities,
      ...(legacy ? { quality: 'partial', issues: [...new Set([...original.issues,
        'Original archive payload digest remains unverified; maintainer explicitly accepted retained evidence.'])] } : {}),
      review: { reviewer: item.reviewer.trim(), reviewedAt: new Date(clock()).toISOString(), decision: 'confirmed',
        ...(legacy ? { acceptedUnverifiedArchiveDigest: true } : {}) } };
    validatePricingObservations([row], catalog);
    confirmed.set(row.id, row);
  }
  return validatePricingObservations([...confirmed.values()], catalog);
}
