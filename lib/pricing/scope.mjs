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
export function pricingTargetInScope(product, value) {
  try {
    const target = new URL(value), allowed = new Set([host(product.url), ...(product.allowedHosts || []).map(value => value.replace(/^www\./, ''))]);
    if (!allowed.has(host(target))) return false;
    const paths = product.productPaths || productPricingPaths(product);
    const path = target.pathname.toLowerCase();
    return !paths.length || paths.some(value => {
      const prefix = value.replace(/\/$/, '').toLowerCase();
      return prefix && prefix !== '/' && (path === prefix || path.startsWith(`${prefix}/`));
    });
  } catch { return false; }
}
