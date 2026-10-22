import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { archiveUrl } from '../lib/pricing/archive.mjs';

const headers = new Set(['content-type', 'content-length', 'content-encoding', 'memento-datetime',
  'x-archive-orig-transfer-encoding', 'x-archive-orig-content-encoding', 'x-archive-orig-digest', 'x-archive-src', 'retry-after', 'location']);
const pick = (value, keys) => Object.fromEntries(keys.filter(key => value?.[key] !== undefined).map(key => [key, value[key]]));
const tally = values => {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) || 0) + 1);
  return Object.fromEntries(counts);
};
const candidateStatus = result => typeof result.status === 'string' && result.status ? result.status : 'unknown';
const candidateErrorCode = result => typeof result.errorCode === 'string' && result.errorCode ? result.errorCode : null;
function candidateSummary(results) {
  return { candidates: results.length, statuses: tally(results.map(candidateStatus)),
    errorCodes: tally(results.map(candidateErrorCode).filter(Boolean)),
    hasErrors: results.some(result => candidateStatus(result) === 'error' || candidateErrorCode(result) !== null),
    mixedOutcomes: new Set(results.map(result => JSON.stringify([candidateStatus(result), candidateErrorCode(result)]))).size > 1 };
}
export function summarizePricingSamples(journal) {
  if (journal?.version !== 1 || !Array.isArray(journal.products) || !Array.isArray(journal.requests)) throw new TypeError('Invalid sampling journal');
  const evidence = new Map();
  const addRecord = (productId, kind, record) => {
    if (!/^\d{14}$/.test(record?.timestamp || '') || !record.originalUrl || !record.capturedAt) return;
    const entry = { productId, kind, record: pick(record, ['timestamp', 'capturedAt', 'originalUrl', 'digest', 'mimeType']) };
    evidence.set(`${productId}|${kind}|${record.originalUrl}|${record.timestamp}|${record.digest}`, entry);
  };
  const walk = (value, productId, path = '') => {
    if (!value || typeof value !== 'object') return;
    if (value.timestamp && value.originalUrl) addRecord(productId, /landing/i.test(path) ? 'landing' : 'pricing', value);
    for (const [key, child] of Object.entries(value)) if (!['reservation', 'previous', 'proposal'].includes(key)) walk(child, productId, `${path}.${key}`);
  };
  const products = journal.products.map(product => {
    walk(product, product.id);
    const proposal = product.proposal;
    return { ...pick(product, ['id', 'scope', 'status', 'stage', 'done', 'errorCode', 'outboundAttempts']),
      ...(product.reservation ? { checkedAt: product.reservation.checkedAt, nextCheckAt: product.reservation.nextCheckAt } : {}),
      ...(product.landing ? { landingArchiveUrl: archiveUrl(product.landing), landingIntegrity: product.landingMetadata?.integrity?.status || null } : {}),
      cacheHits: product.cacheHits || 0,
      candidateSummary: candidateSummary(product.candidateResults || []),
      discoveredCandidates: (product.discoveredCandidates || []).map(candidate => pick(candidate, ['url', 'label', 'locator', 'provenance'])),
      rejectedCandidates: (product.rejectedCandidates || []).map(candidate => pick(candidate, ['url', 'label', 'locator', 'provenance', 'reason'])),
      candidates: (product.candidates || []).map(candidate => pick(candidate, ['url', 'label', 'locator', 'provenance'])),
      candidateResults: (product.candidateResults || []).map(result => ({ ...pick(result, ['status', 'errorCode']),
        candidate: pick(result.candidate, ['url', 'label', 'locator', 'provenance']),
        ...(result.lookup?.record ? { pricingArchiveUrl: archiveUrl(result.lookup.record) } : {}),
        integrity: result.metadata?.integrity?.status || null, rawPlans: result.extracted?.plans?.length || 0,
        rawOffers: result.extracted?.plans?.reduce((n, plan) => n + (plan.offers?.length || 0), 0) || 0,
        ...(result.extracted?.plans?.length ? { unvalidatedFragments: result.extracted.plans.map(plan => ({ ...pick(plan, ['name', 'status', 'kind', 'popular']),
          offers: (plan.offers || []).map(offer => ({ ...pick(offer, ['literal', 'amount', 'currency', 'billingPeriod', 'commitment', 'unit', 'minimumQuantity', 'qualifications']),
            ...(offer.source?.locator ? { sourceLocator: offer.source.locator } : {}) })) })) } : {}) })),
      ...(proposal ? { observation: { ...pick(proposal, ['id', 'productId', 'scope', 'anchorAt', 'landingCapturedAt', 'pricingCapturedAt',
        'landingArchiveUrl', 'pricingArchiveUrl', 'provenance', 'sourceSha256', 'landingSha256', 'sourceDigest', 'landingDigest',
        'sourceIntegrity', 'landingIntegrity', 'quality', 'issues', 'reviewState']),
        plans: proposal.plans.map(plan => ({ ...pick(plan, ['name', 'status', 'popular', 'kind']),
          features: plan.features.length, offers: plan.offers.map(offer => pick(offer, ['literal', 'amount', 'currency', 'billingPeriod',
            'commitment', 'unit', 'minimumQuantity', 'qualifications'])) })) } } : {}) };
  });
  const requests = journal.requests.map(request => ({ ...pick(request, ['productId', 'stage', 'url', 'startedAt', 'finishedAt', 'status', 'elapsedMs', 'errorCode']),
    headers: Object.fromEntries(Object.entries(request.headers || {}).filter(([key]) => headers.has(key.toLowerCase()))) }));
  const candidateResults = products.flatMap(product => product.candidateResults);
  const count = key => products.reduce((counts, product) => { const value = product[key] ?? 'unknown'; counts[value] = (counts[value] || 0) + 1; return counts; }, {});
  return { report: { formatVersion: 1, ...pick(journal, ['inputs', 'extractorVersion', 'baselineFingerprint', 'startedAt', 'finishedAt', 'stopped']),
    historicalComplete: false, automaticallyConfirmed: 0,
    summary: { products: products.length, completed: products.filter(p => p.done).length, statuses: count('status'), requests: requests.length,
      candidates: candidateResults.length,
      candidateStatuses: tally(candidateResults.map(candidateStatus)),
      candidateErrorCodes: tally(candidateResults.map(candidateErrorCode).filter(Boolean)),
      productsWithCandidateErrors: products.filter(product => product.candidateSummary.hasErrors).length,
      productsWithMixedCandidateOutcomes: products.filter(product => product.candidateSummary.mixedOutcomes).length,
      observed429: requests.filter(r => r.status === 429).length, responsesMissing: requests.filter(r => !r.status).length,
      productsWithNonemptyFragments: products.filter(p => p.candidateResults.some(result => result.rawPlans > 0)).length,
      nonemptyCandidateExtractions: products.reduce((n, p) => n + p.candidateResults.filter(result => result.rawPlans > 0).length, 0),
      rawCandidateFragments: products.reduce((n, p) => n + p.candidateResults.reduce((sum, result) => sum + result.rawPlans, 0), 0),
      rawCandidateOffers: products.reduce((n, p) => n + p.candidateResults.reduce((sum, result) => sum + result.rawOffers, 0), 0),
      rawProposals: products.filter(p => p.observation).length,
      rawPlans: products.reduce((n, p) => n + (p.observation?.plans.length || 0), 0),
      rawOffers: products.reduce((n, p) => n + (p.observation?.plans.reduce((sum, plan) => sum + plan.offers.length, 0) || 0), 0) }, products },
    requests, evidence: [...evidence.values()] };
}
async function main() {
  const { values } = parseArgs({ options: { journal: { type: 'string' }, 'out-dir': { type: 'string' }, prefix: { type: 'string', default: 'pricing-sampling' } } });
  if (!values.journal || !values['out-dir'] || !/^[a-z0-9-]+$/.test(values.prefix)) throw new Error('Provide --journal FILE --out-dir DIR [--prefix NAME]');
  const result = summarizePricingSamples(JSON.parse(await readFile(resolve(values.journal), 'utf8'))), directory = resolve(values['out-dir']);
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, `${values.prefix}-results.json`), JSON.stringify(result.report, null, 2) + '\n');
  await writeFile(resolve(directory, `${values.prefix}-requests.jsonl`), result.requests.map(r => JSON.stringify(r)).join('\n') + '\n');
  await writeFile(resolve(directory, `${values.prefix}-evidence.json`), JSON.stringify(result.evidence, null, 2) + '\n');
  console.log(JSON.stringify(result.report.summary));
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) main().catch(error => { console.error(error.message); process.exitCode = 1; });
