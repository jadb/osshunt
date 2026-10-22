import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';

const headers = new Set(['content-type', 'content-length', 'content-encoding', 'memento-datetime',
  'x-archive-orig-transfer-encoding', 'x-archive-orig-content-encoding', 'x-archive-orig-digest', 'x-archive-src', 'retry-after', 'location']);
const pick = (value, keys) => Object.fromEntries(keys.filter(key => value?.[key] !== undefined).map(key => [key, value[key]]));
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
      candidates: (product.candidates || []).map(candidate => pick(candidate, ['url', 'label', 'locator', 'provenance'])),
      candidateResults: (product.candidateResults || []).map(result => pick(result, ['url', 'status', 'errorCode'])),
      ...(proposal ? { observation: { ...pick(proposal, ['id', 'productId', 'scope', 'anchorAt', 'landingCapturedAt', 'pricingCapturedAt',
        'landingArchiveUrl', 'pricingArchiveUrl', 'provenance', 'sourceSha256', 'landingSha256', 'sourceDigest', 'landingDigest',
        'sourceIntegrity', 'landingIntegrity', 'quality', 'issues', 'reviewState']),
        plans: proposal.plans.map(plan => ({ ...pick(plan, ['name', 'status', 'popular', 'kind']),
          features: plan.features.length, offers: plan.offers.map(offer => pick(offer, ['literal', 'amount', 'currency', 'billingPeriod',
            'commitment', 'unit', 'minimumQuantity', 'qualifications'])) })) } } : {}) };
  });
  const requests = journal.requests.map(request => ({ ...pick(request, ['productId', 'stage', 'url', 'startedAt', 'finishedAt', 'status', 'elapsedMs', 'errorCode']),
    headers: Object.fromEntries(Object.entries(request.headers || {}).filter(([key]) => headers.has(key.toLowerCase()))) }));
  const count = key => products.reduce((counts, product) => { const value = product[key] ?? 'unknown'; counts[value] = (counts[value] || 0) + 1; return counts; }, {});
  return { report: { formatVersion: 1, ...pick(journal, ['inputs', 'extractorVersion', 'baselineFingerprint', 'startedAt', 'finishedAt', 'stopped']),
    historicalComplete: false, automaticallyConfirmed: 0,
    summary: { products: products.length, completed: products.filter(p => p.done).length, statuses: count('status'), requests: requests.length,
      observed429: requests.filter(r => r.status === 429).length, responsesMissing: requests.filter(r => !r.status).length,
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
