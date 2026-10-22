import { readFile, writeFile, mkdir, rename } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { FilePricingStore } from '../lib/pricing/stores-file.mjs';
import { bodyIdentity } from '../lib/pricing/service.mjs';
import { archiveUrl, sha256, timestampFor, verifyHtmlEvidence } from '../lib/pricing/archive.mjs';
import { validateLandingUrl } from '../lib/history/archive.mjs';
import { pricingTargetInScope, productPricingPaths } from '../lib/pricing/scope.mjs';
import { extractPricing } from '../lib/pricing/extract.mjs';
import { discoverPricingLinks } from '../lib/pricing/links.mjs';

const root = resolve(import.meta.dirname, '..');
const usage = 'node scripts/verify-pricing-evidence.mjs --cache PATH --evidence JSON --out FILE';
function inputs(evidence, catalog) {
  if (!Array.isArray(evidence) || evidence.length > 1000 || !Array.isArray(catalog))
    throw new TypeError('Evidence must be an array of at most 1000 records with a known catalog');
  const products = new Map(catalog.map(product => [product.id, product]));
  for (const entry of evidence) {
    if (!entry || !products.has(entry.productId)) throw new TypeError('Unknown product in evidence index');
    if (!['landing', 'pricing'].includes(entry.kind)) throw new TypeError('Evidence kind must be landing or pricing');
    const record = entry.record;
    if (!record || !/^\d{14}$/.test(record.timestamp || '') || record.mimeType !== 'text/html' ||
        typeof record.capturedAt !== 'string' || !Number.isFinite(Date.parse(record.capturedAt)) ||
        new Date(record.capturedAt).toISOString() !== record.capturedAt || timestampFor(record.capturedAt) !== record.timestamp ||
        record.digest !== null && (typeof record.digest !== 'string' || !/^(?:sha1:)?[A-Z2-7]{32}$/i.test(record.digest)))
      throw new TypeError('Invalid archived HTML record');
    validateLandingUrl(record.originalUrl);
    if (!pricingTargetInScope(products.get(entry.productId), record.originalUrl))
      throw new TypeError('Evidence target outside catalog product scope');
  }
  return products;
}
function transportFields(value) {
  if (!value) return null;
  return Object.fromEntries(['status', 'mementoDatetime', 'originalUrl', 'archivedTransferEncoding',
    'originalContentEncoding', 'sourceWarc', 'originalDigest'].map(key => [key, value[key] ?? null]));
}
export async function verifyPricingEvidence({ evidence, catalog, store, clock = Date.now,
  extractor = extractPricing, discoverLinks = discoverPricingLinks, verifier = verifyHtmlEvidence }) {
  const products = inputs(evidence, catalog);
  if (typeof store?.getBody !== 'function') throw new TypeError('Read-only evidence store required');
  const results = [];
  for (const entry of evidence) {
    const { productId, kind, record } = entry, product = products.get(productId);
    const result = { productId, kind, record: structuredClone(record), originalUrl: record.originalUrl,
      archiveUrl: archiveUrl(record), confirmed: false };
    try {
      const cached = await store.getBody(bodyIdentity(record));
      if (!cached) {
        results.push({ ...result, status: 'missing', gap: 'cached_body_missing' });
        continue;
      }
      Object.assign(result, { sourceSha256: await sha256(cached.bytes), cachedSha256: cached.metadata?.sha256 ?? null,
        fetchedAt: cached.metadata?.fetchedAt ?? null });
      const integrity = await verifier(cached.bytes, record, cached.metadata);
      const verified = { ...result, status: integrity.status, integrity, transport: transportFields(cached.metadata?.transport) };
      const html = new TextDecoder().decode(cached.bytes);
      if (kind === 'pricing') {
        const pricing = extractor(html, { originalUrl: record.originalUrl });
        verified.pricing = integrity.status === 'legacy_chunked_unverified'
          ? { ...pricing, quality: 'partial', issues: [...new Set([...(pricing.issues || []), integrity.reason])] }
          : pricing;
      } else {
        verified.links = discoverLinks(html, { landingUrl: record.originalUrl, productName: product.name,
          allowedHosts: product.allowedHosts || [], productPaths: product.productPaths || productPricingPaths(product),
          hints: product.pricingHints || [] });
      }
      results.push(verified);
    } catch (error) {
      results.push({ ...result, status: 'error', error: { code: typeof error.code === 'string' ? error.code : 'verification_failed',
        message: error.message || 'Evidence verification failed' } });
    }
  }
  return { formatVersion: 1, offline: true, checkedAt: new Date(clock()).toISOString(),
    summary: { total: results.length, verified: results.filter(r => r.status === 'verified').length,
      unknown: results.filter(r => r.status === 'unknown').length,
      legacyUnverified: results.filter(r => r.status === 'legacy_chunked_unverified').length,
      missing: results.filter(r => r.status === 'missing').length, errors: results.filter(r => r.status === 'error').length }, results };
}
export async function verifyPricingEvidenceFile(argv = process.argv.slice(2)) {
  const { values, positionals } = parseArgs({ args: argv, allowPositionals: true, options: {
    cache: { type: 'string' }, evidence: { type: 'string' }, out: { type: 'string' }, help: { type: 'boolean' } } });
  if (values.help) { console.log(usage); return null; }
  if (positionals.length || !values.cache || !values.evidence || !values.out) throw new TypeError(usage);
  const evidence = JSON.parse(await readFile(resolve(values.evidence), 'utf8'));
  const catalog = JSON.parse(await readFile(resolve(root, 'public/catalog.json'), 'utf8'));
  const store = new FilePricingStore(resolve(values.cache));
  const report = await verifyPricingEvidence({ evidence, catalog, store });
  const output = resolve(values.out), temporary = `${output}.${crypto.randomUUID()}.tmp`;
  await mkdir(dirname(output), { recursive: true });
  await writeFile(temporary, JSON.stringify(report, null, 2) + '\n', { mode: 0o600 });
  await rename(temporary, output);
  console.log(`Checked ${report.summary.total} cached records: ${report.summary.verified} digest matches, ` +
    `${report.summary.legacyUnverified} legacy unverified, ${report.summary.unknown} unknown, ` +
    `${report.summary.missing} missing, ${report.summary.errors} errors. Report: ${output}`);
  return report;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  verifyPricingEvidenceFile().then(report => { if (report?.summary.errors) process.exitCode = 1; })
    .catch(error => { console.error(error.message); process.exitCode = 1; });
}
