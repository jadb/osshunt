import { ancestor, attr, evidence, hasAttr, nodes, text } from './html.mjs';
import { decimal, emptyQualifications, offerContextText } from './extract-offers.mjs';
const hasClass = (node, name) => (attr(node, 'class') || '').split(/\s+/).includes(name);
const hidden = node => hasAttr(node, 'hidden') || attr(node, 'aria-hidden') === 'true' ||
  /display\s*:\s*none/i.test(attr(node, 'style') || '');
const visible = node => !hidden(node) && !ancestor(node, hidden);
export function mattermostPlans(doc, { originalUrl, issues = [] } = {}) {
  let url;
  try { url = new URL(originalUrl); } catch { return null; }
  if (!['mattermost.com', 'www.mattermost.com'].includes(url.hostname) || !/^\/pricing\/?$/.test(url.pathname)) return null;
  if (!nodes(doc, node => node.tagName === 'h1' && offerContextText(node) === 'Mattermost Pricing' && visible(node)).length ||
      !nodes(doc, node => /^h[1-6]$/.test(node.tagName || '') &&
        offerContextText(node) === 'Purchase self-hosted Mattermost Professional licenses').length) return null;
  const cards = nodes(doc, node => hasClass(node, 'pricing-col') && visible(node) &&
    !ancestor(node, parent => /faq|accordion/i.test(`${attr(parent, 'class') || ''} ${attr(parent, 'id') || ''}`)));
  const plans = [];
  for (const card of cards) {
    const titles = nodes(card, node => node.tagName === 'h2' && offerContextText(node) === 'Professional' && visible(node));
    if (titles.length !== 1) continue;
    const wrappers = nodes(card, node => hasClass(node, 'price-wrapper') && visible(node));
    if (wrappers.length !== 1) continue;
    const block = wrappers[0], prices = nodes(block, node => hasClass(node, 'pricing-price') && visible(node));
    const terms = nodes(block, node => hasClass(node, 'price-disclaimer') && visible(node));
    if (prices.length !== 1 || terms.length !== 1 || attr(terms[0], 'data-option') !== 'sh' || offerContextText(terms[0]) !== 'Billed annually') continue;
    const money = /^\$(\d+(?:\.\d{1,2})?)$/.exec(offerContextText(prices[0]));
    const local = nodes(block, node => ['span', 'p'].includes(node.tagName) && visible(node) && /^USD\s*\/user\s*\/month$/.test(offerContextText(node)));
    if (!money || Number(money[1]) <= 0 || local.length !== 1) continue;
    plans.push({ name: 'Professional', order: 0, popular: null, kind: 'plan', status: 'paid',
      offers: [{ literal: offerContextText(prices[0]), amount: decimal(money[1]), currency: 'USD', billingPeriod: 'month',
        commitment: 'annual', unit: 'user', minimumQuantity: null, qualifications: emptyQualifications(), source: evidence(block) }],
      features: [], source: evidence(titles[0]) });
  }
  if (plans.length !== 1) return null;
  issues.push('Commercial Professional price only; deployment binding requires review, no paid price inferred for Team Edition or cloud');
  issues.push('Enterprise quotes, feature matrix and purchase FAQ are not extracted as Professional tiers');
  return plans;
}
