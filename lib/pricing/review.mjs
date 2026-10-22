import { isDeepStrictEqual } from 'node:util';
import { validatePricingObservations } from './schema.mjs';
import { verifyHtmlIntegrity } from './archive.mjs';

const sha256 = async bytes => [...new Uint8Array(await crypto.subtle.digest('SHA-256', bytes))]
  .map(value => value.toString(16).padStart(2, '0')).join('');
export function observationBodies(row) {
  const identity = (url, date, digest) => `${url}|${date.replace(/\D/g, '').slice(0, 14)}|${digest || '-'}`;
  return [
    { kind: 'landing', identity: identity(row.landingUrl, row.landingCapturedAt, row.landingDigest), sha256: row.landingSha256, digest: row.landingDigest },
    { kind: 'pricing', identity: identity(row.pricingUrl, row.pricingCapturedAt, row.sourceDigest), sha256: row.sourceSha256, digest: row.sourceDigest },
  ];
}
export async function exportReview({ productId, store, catalog, clock = Date.now }) {
  if (!catalog.some(product => product.id === productId)) throw new Error('Unknown product');
  const proposals = await store.getProposals(productId);
  validatePricingObservations(proposals, catalog, { confirmedOnly: false });
  return { formatVersion: 1, productId, exportedAt: new Date(clock()).toISOString(),
    observations: proposals.map(proposal => ({ proposal: structuredClone(proposal), decision: 'pending',
      reviewer: null, planIdentities: {}, sources: observationBodies(proposal).map(body => ({ ...body,
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
    for (const body of observationBodies(original)) {
      const cached = await store.getBody(body.identity);
      if (!cached || await sha256(cached.bytes) !== body.sha256) throw new Error('Source body missing or hash mismatch');
      await verifyHtmlIntegrity(cached.bytes, body.digest);
    }
    const identities = item.planIdentities || {};
    if (Object.keys(identities).some(name => !original.plans.some(plan => plan.name === name))) throw new Error('Unknown plan identity');
    const row = { ...original, reviewState: 'confirmed', planIdentities: identities,
      review: { reviewer: item.reviewer.trim(), reviewedAt: new Date(clock()).toISOString(), decision: 'confirmed' } };
    validatePricingObservations([row], catalog);
    confirmed.set(row.id, row);
  }
  return validatePricingObservations([...confirmed.values()], catalog);
}
