import { attr, documentOf, evidence, nodes, text } from './html.mjs';
import { pricingPathInScope } from './scope.mjs';

function pricingIntent(url, label) {
  const path = url.pathname;
  if (/\bpricing\b/i.test(label) || /(?:^|[/_-])pricing(?:\.html?)?(?:$|[/_-])/i.test(path)) return 100;
  if (/\bprices?\b/i.test(label)) return 90;
  const subscriptionNavigation = /^(?:(?:view|see|explore|compare|select)\s+)?(?:(?:our|all|the|business|personal|team|enterprise|premium)\s+)?subscriptions?(?:\s+plans?)?$/i.test(label.trim());
  if (subscriptionNavigation) return 90;
  if (/(?:^|[/_-])prices?(?:$|[/_-])/i.test(path)) return 90;
  const planNavigation = /^(?:(?:view|see|explore|compare|select)\s+)?(?:(?:our|all|the|business|personal|team|enterprise|free(?:\s+and\s+premium)?|premium)\s+)?plans?$/i.test(label.trim());
  if (planNavigation || /(?:^|\/)plans?(?:\/|$)/i.test(path)) return 80;
  if (/(?:^|\/)subscriptions?(?:[-_]plans?)?(?:\.html?)?\/?$/i.test(path)) return 70;
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
    if ((shared.has(hostKey(u.hostname)) || paths.length) && !paths.some(p => pricingPathInScope(u.pathname, p))) return false;
    return true;
  }
  const doc = documentOf(html), links = [], seen = new Map();
  let base = landing.href;
  const baseNode = nodes(doc, n => n.tagName === 'base' && attr(n, 'href') !== null)[0];
  if (baseNode) {
    const candidate = unwrap(attr(baseNode, 'href'), base);
    if (candidate && hosts.has(hostKey(candidate.hostname))) base = candidate.href;
  }
  function add(url, label, locator, provenance) {
    if (!eligible(url, provenance)) return;
    const previous = seen.get(url.href);
    if (previous) {
      if (previous.provenance === provenance && /\bpricing\b/i.test(label) && !/\bpricing\b/i.test(previous.label)) {
        Object.assign(previous, { label, locator });
      }
      return;
    }
    const link = { url: url.href, label, locator, provenance };
    seen.set(url.href, link); links.push(link);
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
  const queryFreeArchived = new Set(links.filter(link => link.provenance === 'archived-link')
    .map(link => new URL(link.url)).filter(url => !url.search).map(url => url.origin + url.pathname));
  const rank = link => {
    if (link.provenance === 'current-source-hint') return -1;
    const url = new URL(link.url), intent = pricingIntent(url, link.label);
    const keys = [...url.searchParams.keys()];
    const trackingOnly = keys.length && keys.every(key => /^(?:source|utm_(?:source|medium|campaign|term|content|id))$/i.test(key));
    return intent - (trackingOnly && queryFreeArchived.has(url.origin + url.pathname) ? 1 : 0);
  };
  return links.sort((a, b) => rank(b) - rank(a));
}
