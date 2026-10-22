import { ancestor, attr, evidence, nodes, text } from './html.mjs';
import { emptyQualifications, offerContextText } from './extract-offers.mjs';

const hasClass = (node, name) => (attr(node, 'class') || '').split(/\s+/).includes(name);
const hidden = node => attr(node, 'hidden') !== null || attr(node, 'aria-hidden') === 'true' ||
  /display\s*:\s*none/i.test(attr(node, 'style') || '');
const invisible = node => hidden(node) || !!ancestor(node, hidden);
const visible = node => !invisible(node);
const joined = (parts, suffix = '') => {
  const sources = [...new Set(parts.filter(Boolean))].map(node => evidence(node));
  return { locator: sources.map(s => s.locator).join('|'), text: `${sources.map(s => s.text).join(' | ')}${suffix}`.slice(0, 4000) };
};
const exactNode = (root, className) => {
  const found = nodes(root, node => hasClass(node, className));
  return found.length === 1 ? found[0] : null;
};
function withoutStrike(price) {
  return nodes(price, n => {
    if (n.nodeName !== '#text') return false;
    for (let p = n.parentNode; p && p !== price; p = p.parentNode) {
      if (['s', 'del', 'script', 'style', 'template'].includes(p.tagName) || hidden(p)) return false;
    }
    return true;
  }).map(n => n.value).join(' ').replace(/\s+/g, ' ').trim();
}
const rate = value => value.match(/^\$(\d+(?:\.\d+)?)(?:\s*\/\s*(month|year))?(?:\s+per\s+(seat))?\*?$/i);

export function hubspotPlans(doc, { originalUrl, issues = [] } = {}) {
  let url; try { url = new URL(originalUrl); } catch { return []; }
  if (url.hostname.replace(/^www\./, '') !== 'hubspot.com' || !/^\/products\/sales\/?$/.test(url.pathname) ||
    url.search || url.username || url.password || url.port || !['http:', 'https:'].includes(url.protocol)) return [];
  const modules = nodes(doc, node => node.tagName === 'section' && hasClass(node, 'wf-all-hubs-pricing'));
  if (modules.length !== 1) return [];
  const module = modules[0], cards = nodes(module, node => hasClass(node, 'wf-all-hubs-pricing-card'));
  const names = ['Free', 'Starter', 'Professional', 'Enterprise'];
  if (cards.length !== 4) return [];
  const fields = cards.map(card => ({ card, title: exactNode(card, 'wf-all-hubs-pricing-card-title'),
    price: exactNode(card, 'wf-all-hubs-pricing-card-secondary-title'), subtitle: exactNode(card, 'wf-all-hubs-pricing-card-subtitle') }));
  if (!fields.every((f, i) => f.title && f.price && text(f.title) === names[i])) return [];
  const notes = nodes(module, node => hasClass(node, 'wf-all-hubs-pricing-disclaimer-text') && visible(node));
  const note = notes.length === 1 ? notes[0] : null, noteText = note ? offerContextText(note) : '';
  const currency = noteText.split(/(?<=[.])\s+/).some(clause =>
    /^Price shown in USD(?: and subject to applicable tax)?\.?$/.test(clause)) ? 'USD' : null;
  const tax = noteText.match(/\bsubject to applicable tax\b/i)?.[0] ?? null;
  const promoText = noteText.match(/^\*?\s*(Discount available for new customers only\.[\s\S]*?discontinued at any time\.)/i)?.[1] ?? null;
  const plans = [];
  for (const { card, title, price, subtitle } of fields) {
    const name = text(title), primaryText = withoutStrike(price), primary = rate(primaryText);
    const strikes = nodes(price, n => ['s', 'del'].includes(n.tagName) && !hidden(n));
    const strike = strikes.length === 1 ? strikes[0] : null, reference = strike ? rate(offerContextText(strike)) : null;
    if (!primary || strikes.length > 1 || (strike && !reference)) return [];
    const basis = primary[3] ?? null, startingAt = subtitle && visible(subtitle) && /^Starts at$/i.test(offerContextText(subtitle)) ? true : null;
    const variant = invisible(price) ? 'unknown-active-variant' : null;
    const makeOffer = (match, isReference) => {
      const period = match[2]?.toLowerCase() ?? null;
      const promotion = !isReference && strike ? (primaryText.endsWith('*') ? promoText : null) ?? 'Discounted displayed rate; eligibility and duration unknown' : null;
      const billingVariant = [variant, isReference ? 'struck-through reference price; not an active offer' : null].filter(Boolean).join('; ') || null;
      return { literal: isReference ? offerContextText(strike) : primaryText, amount: match[1], currency,
        billingPeriod: period || 'unknown', commitment: 'unknown', unit: match[3] ?? basis, minimumQuantity: null,
        qualifications: { ...emptyQualifications(), tax, startingAt, promotion, billingVariant },
        source: joined([price, subtitle && visible(subtitle) ? subtitle : null, note], isReference ? ' | struck-through reference price (<s> or <del>)' : '') };
    };
    const offers = [makeOffer(primary, false)];
    if (reference) offers.push(makeOffer(reference, true));
    if (variant) issues.push('Hidden HubSpot primary offer active state unknown; archived scripts and styles not executed');
    plans.push({ name, order: plans.length, popular: null, kind: 'plan', status: name === 'Free' && primary[1] === '0' ? 'free' : 'paid',
      offers, features: [], source: evidence(card) });
  }
  if (currency === null) issues.push('HubSpot currency unknown: visible same-module currency disclaimer unavailable');
  issues.push('HubSpot Sales displayed card rates only; billing commitment, minimum quantities and full feature structure remain unknown');
  return plans;
}
