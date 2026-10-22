import { attr, documentOf, evidence, nodes, text } from './html.mjs';

const pricing = /(?:^|[^a-z])(pricing|prices?|plans?|subscriptions?|compare)(?:$|[^a-z])/i;
const shared = new Set(['github.com', 'gitlab.com', 'sourceforge.net', 'bitbucket.org']);
const hostKey = host => host.toLowerCase().replace(/^www\./, '');
function publicUrl(value, base) {
  try {
    const u = new URL(value, base);
    if (!['http:', 'https:'].includes(u.protocol) || u.username || u.password || u.port) return null;
    const h = hostKey(u.hostname);
    if (!h.includes('.') || h.includes(':') || h.endsWith('.local') || h.endsWith('.localhost') || /^\d+(?:\.\d+){3}$/.test(h)) return null;
    u.hash = '';
    return u;
  } catch { return null; }
}
function unwrap(value, base) {
  let u = publicUrl(value, base);
  if (!u) return null;
  if (u.hostname === 'web.archive.org') {
    const m = u.pathname.match(/^\/web\/(?:\d{1,14}|\*)(?:[a-z_]+)?\/(https?:\/\/.+)$/i);
    if (!m) return null;
    u = publicUrl(m[1] + u.search);
  } else if (u.pathname.startsWith('/web/')) {
    const m = u.pathname.match(/^\/web\/\d{1,14}(?:[a-z_]+)?\/(https?:\/\/.+)$/i);
    if (m) u = publicUrl(m[1] + u.search);
  }
  return u;
}
export function discoverPricingLinks(html, { landingUrl, allowedHosts = [], hints = [], productPaths = [] } = {}) {
  const landing = unwrap(landingUrl);
  if (!landing) return [];
  const hosts = new Set([hostKey(landing.hostname), ...allowedHosts.map(h => hostKey(h))]);
  const inferred = landing.pathname.match(/^(\/(?:products?|apps)\/[^/]+)(?:\/|$)/i)?.[1];
  const paths = productPaths.length ? productPaths : inferred ? [inferred] : [];
  function eligible(u) {
    if (!u || !hosts.has(hostKey(u.hostname))) return false;
    if ((shared.has(hostKey(u.hostname)) || paths.length) && !paths.some(p => {
      const prefix = p.replace(/\/$/, '');
      return prefix && prefix !== '/' && (u.pathname === prefix || u.pathname.startsWith(prefix + '/'));
    })) return false;
    return true;
  }
  const doc = documentOf(html), links = [], seen = new Set();
  let base = landing.href;
  const baseNode = nodes(doc, n => n.tagName === 'base' && attr(n, 'href') !== null)[0];
  if (baseNode) {
    const candidate = unwrap(attr(baseNode, 'href'), base);
    if (candidate && hosts.has(hostKey(candidate.hostname))) base = candidate.href;
  }
  function add(url, label, locator, provenance) {
    if (!eligible(url) || seen.has(url.href)) return;
    seen.add(url.href); links.push({ url: url.href, label, locator, provenance });
  }
  for (const node of nodes(doc, n => n.tagName === 'a' && attr(n, 'href') !== null)) {
    const url = unwrap(attr(node, 'href'), base), label = text(node) || attr(node, 'aria-label') || '';
    if (url && pricing.test(`${label} ${url.pathname}`)) add(url, label, evidence(node).locator, 'archived-link');
  }
  hints.forEach((hint, index) => {
    const value = typeof hint === 'string' ? hint : hint?.url;
    const url = value && unwrap(value, landing.href);
    if (url) add(url, 'Current pricing source', `hint:${index}`, 'current-source-hint');
  });
  const rank = link => {
    if (link.provenance === 'current-source-hint') return -1;
    const path = new URL(link.url).pathname;
    return /(?:^|\/)pricing(?:\/|$)/i.test(path) ? 100
      : /\bpricing\b/i.test(link.label) ? 90
        : /\bplans?\b/i.test(`${link.label} ${path.replaceAll('/', ' ')}`) ? 80
          : /subscription/i.test(`${link.label} ${path}`) ? 70 : 50;
  };
  return links.sort((a, b) => rank(b) - rank(a));
}
