import { attr, documentOf, evidence, nodes, text } from './html.mjs';

function pricingIntent(url, label) {
  const path = url.pathname;
  if (/(?:^|[/_-])pricing(?:$|[/_-])/i.test(path)) return 100;
  if (/\b(?:pricing|prices?|subscriptions?)\b/i.test(label)) return 90;
  if (/(?:^|[/_-])prices?(?:$|[/_-])/i.test(path)) return 90;
  const planNavigation = /^(?:(?:view|see|explore|compare|select)\s+)?(?:(?:our|all|the|business|personal|team|enterprise)\s+)?plans?$/i.test(label.trim());
  if (planNavigation || /(?:^|\/)plans?(?:\/|$)/i.test(path)) return 80;
  if (/(?:^|[/_-])subscriptions?(?:$|[/_-])/i.test(path)) return 70;
  if (/^\/(?:compare|comparison)\/?$/i.test(path) && /^(?:Compare|Comparison)$/i.test(label.trim())) return -2;
  return null;
}
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
  function eligible(u, provenance) {
    if (!u || !hosts.has(hostKey(u.hostname))) return false;
    if (provenance === 'current-source-hint') return true;
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
    if (!eligible(url, provenance) || seen.has(url.href)) return;
    seen.add(url.href); links.push({ url: url.href, label, locator, provenance });
  }
  for (const node of nodes(doc, n => n.tagName === 'a' && attr(n, 'href') !== null)) {
    const url = unwrap(attr(node, 'href'), base), label = text(node) || attr(node, 'aria-label') || '';
    if (url && pricingIntent(url, label) !== null) add(url, label, evidence(node).locator, 'archived-link');
  }
  hints.forEach((hint, index) => {
    const value = typeof hint === 'string' ? hint : hint?.url;
    const url = value && unwrap(value, landing.href);
    if (url) add(url, 'Current pricing source', `hint:${index}`, 'current-source-hint');
  });
  const rank = link => link.provenance === 'current-source-hint' ? -1 : pricingIntent(new URL(link.url), link.label);
  return links.sort((a, b) => rank(b) - rank(a));
}
