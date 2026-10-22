import { ancestor, attr, evidence, nodes, text } from './html.mjs';
import { parseOffer, statusOf } from './extract-offers.mjs';

const hasClass = (node, value) => (attr(node, 'class') || '').split(/\s+/).includes(value);
function dropboxLegacyPlans(doc, issues) {
  const plans = [];
  for (const table of nodes(doc, n => n.tagName === 'table')) {
    const inside = predicate => nodes(table, n => predicate(n) && ancestor(n, p => p.tagName === 'table') === table);
    const description = inside(n => n.tagName === 'td' && hasClass(n, 'plan-description'));
    const pricing = inside(n => n.tagName === 'td' && hasClass(n, 'plan-pricing'));
    if (description.length !== 1 || pricing.length !== 1) continue;
    const title = nodes(description[0], n => /^h[1-6]$/.test(n.tagName || ''))[0];
    const priceParagraph = nodes(pricing[0], n => n.tagName === 'p' && !nodes(n, child => child.tagName === 'a').length)[0];
    if (!title || !text(title) || !priceParagraph) continue;
    const offer = parseOffer(priceParagraph, { issues });
    if (!offer) continue;
    const features = inside(n => hasClass(n, 'db_badge_content')).map(n => ({ name: 'Storage', value: text(n), source: evidence(n) }));
    plans.push({ name: text(title), order: plans.length, popular: null, kind: 'plan', status: statusOf([offer]),
      offers: [offer], features, source: evidence(table) });
  }
  return plans;
}
export function adaptedPlans(doc, { originalUrl, issues }) {
  let url;
  try { url = new URL(originalUrl); } catch { return []; }
  if (url.hostname.replace(/^www\./, '') === 'dropbox.com' && url.pathname.replace(/\/$/, '') === '/pricing')
    return dropboxLegacyPlans(doc, issues);
  return [];
}
