import { ancestor, attr, evidence, hasAttr, nodes, text } from './html.mjs';
import { decimal, emptyQualifications } from './extract-offers.mjs';
const names = ['Microsoft 365 Business Basic', 'Microsoft 365 Business Standard',
  'Microsoft 365 Business Premium', 'Microsoft 365 Apps for business'];
const hasClass = (node, name) => (attr(node, 'class') || '').split(/\s+/).includes(name);
const hidden = node => hasAttr(node, 'hidden') || attr(node, 'aria-hidden') === 'true' ||
  /display\s*:\s*none/i.test(attr(node, 'style') || '') || hasClass(node, 'd-none');
const visible = node => !hidden(node) && !ancestor(node, hidden);
const visibleText = node => nodes(node, value => value.nodeName === '#text' && visible(value))
  .map(value => value.value).join(' ').replace(/\s+/g, ' ').trim();
export function microsoftPlans(doc, { originalUrl, issues = [] } = {}) {
  let url;
  try { url = new URL(originalUrl); } catch { return null; }
  if (!['microsoft.com', 'www.microsoft.com'].includes(url.hostname) ||
      !/^\/en-us\/microsoft-365\/business\/?$/.test(url.pathname)) return null;
  const grids = nodes(doc, node => hasClass(node, 'sku-cards') && visible(node));
  const matches = [];
  for (const grid of grids) {
    const cards = nodes(grid, node => hasClass(node, 'sku-card') && visible(node));
    if (cards.length !== names.length) continue;
    const plans = [];
    for (const card of cards) {
      const titles = nodes(card, node => /^h[1-6]$/.test(node.tagName || '') && names.includes(visibleText(node)) && visible(node));
      const blocks = nodes(card, node => hasClass(node, 'sku-card-price') && visible(node));
      if (titles.length !== 1 || blocks.length !== 1) break;
      const block = blocks[0], current = nodes(block, node => hasClass(node, 'oc-list-price') && visible(node));
      if (current.length !== 1) break;
      const literal = visibleText(current[0]), money = /^(USD|EUR|GBP|CAD|AUD|\$)\s*(\d+(?:\.\d{1,2})?)$/.exec(literal);
      const terms = visibleText(block);
      if (!money || !/user\s*\/\s*month\s*,\s*paid yearly/i.test(terms) ||
          !/annual subscription[—–-]\s*auto renews/i.test(terms) || /paid monthly|user\s*\/\s*year/i.test(terms)) break;
      const amount = decimal(money[2]);
      if (amount === null || Number(amount) <= 0) break;
      const currency = money[1] === '$' ? null : money[1];
      plans.push({ name: visibleText(titles[0]), order: plans.length, popular: null, kind: 'plan', status: 'paid',
        offers: [{ literal, amount, currency, billingPeriod: 'month', commitment: 'annual', unit: 'user',
          minimumQuantity: null, qualifications: emptyQualifications(), source: evidence(block) }],
        features: [], source: evidence(titles[0]) });
    }
    if (plans.length === names.length && new Set(plans.map(plan => plan.name)).size === names.length) matches.push(plans);
  }
  if (matches.length !== 1) return null;
  issues.push('Business SKU prices only; enterprise, nonprofit, alternative billing and full feature coverage are not extracted');
  if (matches[0].some(plan => plan.offers[0].currency === null)) issues.push('Dollar currency remains unknown; locale is not currency evidence');
  return matches[0];
}
