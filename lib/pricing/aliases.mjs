import { validateLandingUrl } from '../history/archive.mjs';

const validDate = value => typeof value === 'string' && Number.isFinite(Date.parse(value)) &&
  new Date(value).toISOString() === value;
export function validatePricingAlias(alias, product) {
  if (!alias || !validDate(alias.evidenceCapturedAt) || !/^[a-f0-9]{64}$/.test(alias.evidenceSha256 || '') ||
    typeof alias.locator !== 'string' || !/^offset:\d+-\d+$/.test(alias.locator) ||
    typeof alias.label !== 'string' || !alias.label.trim() || alias.label.length > 4000 ||
    !alias.scope || typeof alias.scope.edition !== 'string' || !alias.scope.edition.trim() ||
    !['hosted', 'self-hosted', 'unknown'].includes(alias.scope.deployment) ||
    !(alias.locale === null || typeof alias.locale === 'string' && alias.locale.length > 0))
    throw new TypeError('Pricing alias requires dated, reviewed field evidence and explicit scope');
  const target = validateLandingUrl(alias.url), landing = validateLandingUrl(product.url);
  if (target.hash) throw new TypeError('Pricing alias must identify an exact page without a fragment');
  const stamp = alias.evidenceCapturedAt.replace(/\D/g, '').slice(0, 14);
  if (alias.evidenceArchiveUrl !== `https://web.archive.org/web/${stamp}id_/${landing.href}`)
    throw new TypeError('Pricing alias evidence must identify its exact canonical landing capture');
  return alias;
}

export function pricingAliasFor(product, value, at) {
  if (!validDate(at)) return null;
  try {
    const target = validateLandingUrl(value).href;
    for (const alias of product.pricingAliases || []) {
      validatePricingAlias(alias, product);
      if (new URL(alias.url).href === target && Date.parse(alias.evidenceCapturedAt) <= Date.parse(at)) return alias;
    }
  } catch { return null; }
  return null;
}

export function applyPricingAliases(catalog, records) {
  if (!Array.isArray(records)) throw new TypeError('Pricing aliases must be an array');
  const products = new Map(catalog.map(product => [product.id, product])), seen = new Set();
  for (const record of records) {
    const { productId, ...alias } = record, product = products.get(productId);
    if (!product) throw new TypeError('Unknown product in pricing aliases');
    validatePricingAlias(alias, product);
    const key = `${productId}|${new URL(alias.url).href}`;
    if (seen.has(key)) throw new TypeError('Duplicate pricing alias');
    seen.add(key);
    (product.pricingAliases ||= []).push(alias);
  }
  return catalog;
}
