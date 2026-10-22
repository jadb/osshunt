import { pricingAliasFor } from './aliases.mjs';
export { pricingAliasFor } from './aliases.mjs';
const host = url => new URL(url).hostname.toLowerCase().replace(/^www\./, '');
export function productPricingPaths(product) {
  const landing = new URL(product.url);
  if (host(landing) === 'microsoft.com') {
    const marker = { 'microsoft-teams': 'microsoft-teams', 'microsoft-outlook': 'outlook', 'microsoft-365': 'microsoft-365' }[product.id];
    if (marker) {
      const paths = [product.url, ...(product.pricingHints || [])].flatMap(value => {
        const url = new URL(value); if (host(url) !== host(landing)) return [];
        const segments = url.pathname.split('/').filter(Boolean), index = segments.findIndex(segment => segment.toLowerCase() === marker);
        if (index < 0) return [];
        if (product.id === 'microsoft-365' && ['business', 'enterprise'].includes(segments[index + 1])) {
          return ['/' + segments.slice(0, index + 2).join('/')];
        }
        return ['/' + segments.slice(0, index + 1).join('/')];
      });
      return [...new Set(paths)].sort();
    }
  }
  const path = landing.pathname.replace(/\/$/, '').replace(/\.html?$/i, '');
  const productPath = path.match(/^(.*\/(?:products?|apps|software)\/[^/]+)/i)?.[1];
  return path ? [productPath || path] : [];
}
export function pricingPathInScope(path, approved) {
  const prefix = approved.replace(/\/$/, '').toLowerCase(), target = path.toLowerCase();
  return !!prefix && prefix !== '/' && (target === prefix || target.startsWith(`${prefix}/`) ||
    target === `${prefix}.html` || target === `${prefix}.htm`);
}
export function basePricingTargetInScope(product, value) {
  try {
    const target = new URL(value), allowed = new Set([host(product.url), ...(product.allowedHosts || []).map(value => value.replace(/^www\./, ''))]);
    if (!allowed.has(host(target))) return false;
    const paths = product.productPaths || productPricingPaths(product);
    return !paths.length || paths.some(value => pricingPathInScope(target.pathname, value));
  } catch { return false; }
}
export function pricingTargetInScope(product, value, { at = null } = {}) {
  if (basePricingTargetInScope(product, value)) return true;
  // Without a capture date this checks catalog admission, not historical availability.
  return at !== null ? !!pricingAliasFor(product, value, at) : (product.pricingAliases || [])
    .some(alias => !!pricingAliasFor(product, value, alias.evidenceCapturedAt));
}
