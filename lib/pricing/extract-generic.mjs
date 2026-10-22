import { ancestor, attr, evidence, hasAttr, nodes, text } from './html.mjs';
import { emptyQualifications, offerContextText, parseOffer, statusOf } from './extract-offers.mjs';
const heading = n => /^h[1-6]$/.test(n.tagName || '');
const blocked = n => ['nav', 'header', 'footer', 'aside', 'script', 'style', 'table'].includes(n.tagName);
const within = (node, root) => node === root || !!ancestor(node, p => p === root);
const money = /(?:[$€£₹¥]\s*\d|\b(?:USD|EUR|GBP|CAD|AUD)\s*\d)/i;
const rate = /(?:\/\s*|\bper\s+)(?:seat\s*\/\s*|user\s*\/\s*)?(?:month|mo|year|yr)\b|\bbilled\b/i;
const quote = /^(?:contact (?:us|(?:enterprise )?sales)|talk to sales|request (?:a )?(?:free )?quote|custom pricing|let['’]s talk)[.!]?$/i;
const placeholder = /(?:\.{3}|…)\s*(?:\/\s*|per\s+)(?:month|mo|year|yr)\b/i;
const shortName = value => value.length > 0 && value.length < 70 && value.split(/\s+/).length < 8 &&
  !/^(?:contact us|contact sales|request a quote|try for free|start for free)$/i.test(value) &&
  !/[?$€£]|\b(?:pricing|plans?|features|included|everything|you get|FAQ|questions|how|why|what|save|funding|revenue|webinar)\b/i.test(value);
const semanticCard = n => (attr(n, 'class') || '').split(/\s+/).some(c => /(?:pricing|plan|price).*cards?(?:v\d+)?$/i.test(c));
const pricingHeading = n => heading(n) && /\b(?:plans?|pricing|price|budget)\b/i.test(text(n));
const boundedText = n => text(n).length <= 8000;
const leaves = (root, predicate) => nodes(root, predicate).filter(n => !nodes(n, child => child !== n && predicate(child)).length);
const hidden = n => hasAttr(n, 'hidden') || attr(n, 'aria-hidden') === 'true' || /display\s*:\s*none/i.test(attr(n, 'style') || '');
const variant = n => hidden(n) || !!ancestor(n, p => hidden(p) || attr(p, 'data-w-tab') !== null || attr(p, 'role') === 'tabpanel');
function pricingRegion(root) {
  for (let p = root; p && !['body', 'html'].includes(p.tagName); p = p.parentNode) {
    if (nodes(p, pricingHeading).length || (p.tagName === 'section' && /pricing|plan-builder/i.test(attr(p, 'class') || ''))) return p;
  }
  return null;
}
function titleFor(root) {
  const h = nodes(root, heading).find(n => shortName(text(n)));
  if (h) return h;
  const candidates = nodes(root, n => n.tagName && shortName(text(n)) &&
    (/title|heading|name/i.test(attr(n, 'class') || '') || attr(n, 'role') === 'heading'));
  if (candidates.length) return candidates[0];
  return leaves(root, n => ['div', 'span', 'p'].includes(n.tagName) && shortName(text(n)) &&
    !/^(?:free|included|popular|best value|most popular|recommended)$/i.test(text(n)))[0];
}
function headingRoot(seed) {
  const level = Number(seed.tagName.slice(1));
  let root = seed;
  for (let p = seed.parentNode, depth = 0; p && depth < 10; p = p.parentNode, depth++) {
    if (blocked(p) || ['body', 'html', 'main'].includes(p.tagName) || !boundedText(p)) break;
    if (nodes(p, n => heading(n) && Number(n.tagName.slice(1)) <= level).length > 1) break;
    root = p;
  }
  return root;
}
function economicNode(n) {
  if (!n.tagName || ['a', 'button', 'li', 'script', 'style'].includes(n.tagName) || heading(n) ||
    ancestor(n, p => ['li', 'script', 'style'].includes(p.tagName))) return false;
  const value = text(n);
  return value.length < 250 && (money.test(value) || placeholder.test(value) ||
    /^free(?: forever| for \d+ days)?[.!]?$/i.test(value) || quote.test(value));
}
function priceBlock(seed, root) {
  let block = seed;
  for (let p = seed.parentNode; p && p !== root; p = p.parentNode) {
    if (text(p).length > 350 || nodes(p, heading).length || nodes(p, n => ['li', 'a', 'button'].includes(n.tagName)).length) break;
    const amounts = leaves(p, n => n.tagName && !['script', 'style'].includes(n.tagName) && money.test(text(n)));
    if (amounts.length > 1 || !rate.test(text(p)) && text(p).length > 100) break;
    block = p;
  }
  return block;
}
export function genericOffer(node, { context = node, issues = [], activeVariant = false, allowPlaceholder = false } = {}) {
  let offer = parseOffer(node, { context, issues, variant: activeVariant });
  const literal = offerContextText(node), contextual = offerContextText(context);
  if (!offer && allowPlaceholder && placeholder.test(literal)) {
    offer = { literal, amount: null, currency: null, billingPeriod: /\/\s*(?:month|mo)\b/i.test(literal) ? 'month' : 'year',
      commitment: /billed as.*\/year|billed annually/i.test(contextual) ? 'annual' : 'unknown', unit: null,
      minimumQuantity: null, qualifications: emptyQualifications(), source: evidence(context) };
    issues.push('Pricing amount placeholder retained as unknown');
  }
  if (!offer && quote.test(literal)) offer = { literal, amount: null, currency: null, billingPeriod: 'unknown',
    commitment: 'unknown', unit: null, minimumQuantity: null, qualifications: emptyQualifications(), source: evidence(context) };
  if (!offer) return null;
  const codes = [...new Set(literal.match(/\b(?:USD|EUR|GBP|CAD|AUD|NZD|CHF|JPY|INR)\b/g) || [])];
  if (codes.length === 1) offer.currency = codes[0];
  if (offer.unit === null) offer.unit = literal.match(/(?:per\s+|\/\s*)(user|seat|member|agent|computer)s?\b/i)?.[1] || null;
  const reversedMinimum = contextual.match(/\b(\d+)\s+(?:seat|user|member|agent)s?\s+minimum\b/i);
  if (reversedMinimum && Number.isSafeInteger(Number(reversedMinimum[1]))) offer.minimumQuantity = Number(reversedMinimum[1]);
  if (activeVariant) offer.qualifications.billingVariant = 'unknown-active-variant';
  return offer;
}
function offersFor(root, name, issues) {
  const seeds = leaves(root, economicNode), blocks = [...new Set(seeds.map(n => priceBlock(n, root)))];
  let offers = blocks.map(node => genericOffer(node, { context: root, issues,
    activeVariant: variant(node), allowPlaceholder: true })).filter(Boolean);
  if (offers.some(o => o.amount !== null && /[1-9]/.test(o.amount))) {
    offers = offers.filter(o => !quote.test(o.literal) && !/^free(?: forever| for \d+ days)?[.!]?$/i.test(o.literal));
  }
  if (!offers.length && /^free$/i.test(name)) {
    const zero = leaves(root, n => n.tagName && /^0\s*\/\s*month$/i.test(text(n)))[0];
    if (zero) offers = [{ literal: text(zero), amount: '0', currency: null, billingPeriod: 'month', commitment: 'unknown',
      unit: null, minimumQuantity: null, qualifications: emptyQualifications(), source: evidence(zero) }];
  }
  return offers;
}
function addonScope(root, region, name) {
  for (let p = root.parentNode; p && p !== region; p = p.parentNode) {
    if (/^add[ -]?ons\b/i.test(text(p))) return p;
  }
  return nodes(region, n => ['p', 'div'].includes(n.tagName) && text(n).length < 400 && text(n).includes(name) &&
    /\badditional\b|\badd[ -]?on\b/i.test(text(n)))[0] || null;
}
export function popularBadge(root) {
  const positive = n => n.tagName && /^(?:most popular|recommended|recommended plan)$/i.test(text(n));
  const negated = node => {
    for (let p = node.parentNode; p; p = p.parentNode) {
      const value = text(p);
      if (value !== text(node)) return /\b(?:not|never|no longer|isn['’]t)\s+(?:the\s+)?(?:most popular|recommended(?: plan)?)\b/i.test(value);
      if (p === root) break;
    }
    return false;
  };
  return nodes(root, positive).some(n => !negated(n) && !nodes(n, child => child !== n && positive(child)).length &&
    !hidden(n) && !ancestor(n, p => hidden(p) || p.tagName === 'li'));
}
export function genericPlans(doc, issues) {
  const explicit = nodes(doc, semanticCard).filter(n => !nodes(n, c => c !== n && semanticCard(c)).length &&
    !ancestor(n, blocked));
  const candidates = explicit.map(root => ({ root, title: titleFor(root), explicit: true }));
  for (const title of nodes(doc, n => heading(n) && /^h[2-6]$/.test(n.tagName) && shortName(text(n)) && !ancestor(n, blocked))) {
    const root = headingRoot(title);
    if (nodes(root, n => heading(n) && shortName(text(n))).length > 1) continue;
    if (candidates.some(c => within(root, c.root) || within(c.root, root))) continue;
    candidates.push({ root, title, explicit: false });
  }
  const roots = candidates.filter(c => c.title && !candidates.some(other => other !== c && within(other.root, c.root)));
  const plans = [];
  for (const { root, title, explicit: isExplicit } of roots) {
    const name = text(title), region = pricingRegion(root);
    if (!region || !shortName(name)) continue;
    const value = text(root);
    if (/\b(?:saved|savings|funding|revenue|million|billion|testimonial)\b/i.test(value) && !rate.test(value)) continue;
    const strongRate = rate.test(value) || /^free$/i.test(name) || nodes(root, n => quote.test(text(n))).length;
    if (!isExplicit && !strongRate) continue;
    const offers = offersFor(root, name, issues);
    if (!offers.length && !isExplicit) continue;
    if (!offers.length && !nodes(root, n => ['a', 'button'].includes(n.tagName)).length) continue;
    const quoteNode = !offers.length && isExplicit ? leaves(region, n => n.tagName && text(n).length < 500 &&
      /contact us to request a quote|^request (?:a )?(?:free )?quote$/i.test(text(n)))[0] : null;
    if (quoteNode) {
      const quoted = genericOffer(quoteNode, { issues });
      if (quoted) offers.push(quoted);
      issues.push('Quote-only plan inherits explicit pricing-region quote evidence');
    }
    const addition = addonScope(root, region, name);
    const source = evidence(root);
    if (addition && !within(addition, root)) {
      source.locator += `|${evidence(addition).locator}`;
      source.text = `${source.text} | ${text(addition)}`.slice(0, 4000);
    }
    const features = nodes(root, n => n.tagName === 'li')
      .map(n => ({ name: text(n), value: text(n), source: evidence(n) }));
    plans.push({ name, order: plans.length, popular: popularBadge(root) ? true : null, kind: addition ? 'addon' : 'plan',
      status: /\btrial\b/i.test(name) && offers.some(o => o.amount === '0') ? 'trial' : offers.length && offers.every(o => quote.test(o.literal) || /contact us to request a quote/i.test(o.literal)) ? 'quote' : statusOf(offers),
      offers, features, source });
  }
  return plans;
}
export function extractionDiagnostics(doc, plans) {
  const offers = plans.flatMap(p => p.offers), flags = [];
  if (offers.some(o => o.currency === null && o.amount !== null)) flags.push('unknown-currency');
  if (offers.some(o => o.billingPeriod === 'unknown')) flags.push('unknown-billing');
  if (offers.some(o => o.commitment === 'unknown')) flags.push('unknown-commitment');
  if (offers.some(o => o.unit === null)) flags.push('unknown-unit');
  if (offers.some(o => o.qualifications.billingVariant)) flags.push('variant-state-unknown');
  if (new Set(plans.map(p => p.name)).size < plans.length) flags.push('duplicate-plan-names');
  const partial = plans.some(p => !p.offers.length || p.offers.some(o => o.amount === null && p.status !== 'quote'));
  const structured = plans.length && plans.every(p => /:\$/.test(p.source.locator));
  let classification = !plans.length ? 'unsupported' : plans.every(p => p.status === 'quote') ? 'quote_only'
    : structured ? 'embedded_pricing' : partial ? 'partial_pricing' : 'static_pricing';
  if (partial) flags.push('partial-named-structure');
  if (structured) flags.push('named-structured-offers');
  if (!plans.length && /JavaScript.enabled browser|couldn['’]t load (?:some )?important parts/i.test(text(doc))) classification = 'client_rendered_unavailable';
  return { classification, flags: flags.slice(0, 16) };
}
