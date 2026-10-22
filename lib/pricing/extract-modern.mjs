import { ancestor, attr, evidence, nodes, text } from './html.mjs';
import { emptyQualifications } from './extract-offers.mjs';

const hasClass = (node, value) => (attr(node, 'class') || '').split(/\s+/).includes(value);
const hidden = node => attr(node, 'hidden') !== null || attr(node, 'aria-hidden') === 'true' ||
  /display\s*:\s*none/i.test(attr(node, 'style') || '');
const isHidden = node => hidden(node) || !!ancestor(node, hidden);
const visibleText = node => nodes(node, n => n.nodeName === '#text' && !ancestor(n, p =>
  hidden(p) || ['style', 'script'].includes(p.tagName))).map(n => n.value).join(' ').replace(/\s+/g, ' ').trim();
const joined = (...values) => {
  const parts = values.filter(Boolean).map(node => evidence(node));
  return { locator: parts.map(p => p.locator).join('|'), text: parts.map(p => p.text).join(' | ').slice(0, 4000) };
};
const compact = node => nodes(node, n => n.nodeName === '#text' &&
  !ancestor(n, p => ['style', 'script'].includes(p.tagName))).map(n => n.value).join('').replace(/\s+/g, '');
const amountAt = node => compact(node).match(/^\$(\d+(?:\.\d+)?)$/)?.[1] ?? null;
const featuresIn = roots => {
  const seen = new Set(), features = [];
  for (const root of roots) for (const node of nodes(root, n => n.tagName === 'li')) {
    const value = text(node);
    if (!value || seen.has(value)) continue;
    seen.add(value); features.push({ name: value, value, source: evidence(node) });
  }
  return features;
};
function offer(node, { amount = null, currency = null, period = 'unknown', commitment = 'unknown',
  unit = null, sources = [], issues } = {}) {
  const variant = isHidden(node);
  if (currency === null && amount !== null && amount !== '0') issues.push('Displayed dollar symbol does not identify a currency');
  if (variant) issues.push('Hidden offer active state unknown; archived scripts and styles not executed');
  return { literal: text(node), amount, currency, billingPeriod: period, commitment, unit, minimumQuantity: null,
    qualifications: { ...emptyQualifications(), billingVariant: variant ? 'unknown-active-variant' : null },
    source: joined(node, ...sources) };
}
const plan = (name, root, offers, features, status) => ({ name, order: 0, popular: null, kind: 'plan',
  status, offers, features, source: evidence(root) });

const figmaNames = new Set(['Starter', 'Professional', 'Organization', 'Enterprise']);
const figmaHeading = node => node.tagName === 'h3' && figmaNames.has(text(node));
function figmaGroup(heading) {
  let result = heading.parentNode;
  for (let parent = result?.parentNode, depth = 0; parent && depth < 12; parent = parent.parentNode, depth++) {
    if (nodes(parent, figmaHeading).length !== 1) break;
    result = parent;
  }
  return result;
}
function figmaPlans(doc, issues) {
  const headings = nodes(doc, figmaHeading), plans = [];
  if (headings.length !== 4 || new Set(headings.map(text)).size !== 4) return [];
  const currencies = nodes(doc, node => node.tagName === 'p' && /^Prices in [A-Z]{3}$/.test(visibleText(node)));
  const currencyNode = currencies.length === 1 ? currencies[0] : null;
  const currency = currencyNode ? visibleText(currencyNode).slice(-3) : null;
  for (const heading of headings) {
    const root = figmaGroup(heading), name = text(heading), offers = [];
    const header = heading.parentNode;
    const annual = nodes(header, n => n.tagName === 'p' && /^Billed annually$/i.test(visibleText(n)))[0];
    const toggle = nodes(header, n => !isHidden(n) && attr(n, 'role') === 'switch' && attr(n, 'aria-label') === 'Show annual billing prices')[0];
    const commitment = annual || (toggle && attr(toggle, 'aria-checked') === 'true') ? 'annual' : 'unknown';
    for (const price of nodes(root, n => n.tagName === 'span' && hasClass(n, 'price'))) {
      const rate = price.parentNode;
      if (rate?.tagName !== 'p' || !/\/mo\b/.test(text(rate))) continue;
      let row = rate, seat = null;
      for (let depth = 0; row && row !== root && depth < 6; row = row.parentNode, depth++) {
        const labels = nodes(row, n => n.tagName === 'button' && /^(Collab|Dev|Full) seat$/.test(text(n)));
        if (labels.length === 1) { seat = labels[0]; break; }
      }
      const amount = amountAt(price);
      if (!seat || amount === null) { issues.push('Unsupported Figma seat-price association'); continue; }
      const value = offer(rate, { amount, currency, period: 'month', commitment, unit: text(seat),
        sources: [seat, header, currencyNode], issues });
      if (isHidden(price)) {
        value.qualifications.billingVariant = 'unknown-active-variant';
        issues.push('Hidden offer active state unknown; archived scripts and styles not executed');
      }
      if (toggle) {
        value.source.locator += `|${evidence(toggle).locator}`;
        value.source.text += ` | role="switch" aria-label="Show annual billing prices" aria-checked="${attr(toggle, 'aria-checked')}"`;
      }
      if (commitment === 'unknown') issues.push('Figma billing commitment unknown from retained static controls');
      offers.push(value);
    }
    if (!offers.length && name === 'Starter') {
      const free = nodes(root, n => n.tagName && /^Free$/i.test(text(n)) && !nodes(n, c => c !== n && c.tagName && /^Free$/i.test(text(c))).length)[0];
      if (free) offers.push(offer(free, { amount: '0', currency, sources: [currencyNode], issues }));
    }
    if (!offers.length) continue;
    const featureLists = nodes(root, n => n.tagName === 'ul' &&
      (n.parentNode?.childNodes || []).some(sibling => sibling.tagName === 'p' && /^Key features:$/i.test(text(sibling))));
    plans.push(plan(name, root, offers, featuresIn(featureLists), name === 'Starter' ? 'free' : 'paid'));
  }
  return plans;
}

const asanaNames = new Map([['Personal', 'basic'], ['Starter', 'premium'], ['Advanced', 'business'], ['Enterprise', 'enterprise']]);
function asanaPlans(doc, issues) {
  const plans = [];
  for (const price of nodes(doc, n => /^(Personal|Starter|Advanced|Enterprise)-price$/.test(attr(n, 'data-cy') || ''))) {
    const name = attr(price, 'data-cy').replace(/-price$/, ''), key = asanaNames.get(name), root = price.parentNode;
    const section = ancestor(price, n => n.tagName === 'section');
    if (!section) continue;
    const heading = nodes(section, n => n.tagName === 'h3' && attr(n, 'id') === `header-${key}`)[0];
    if (!heading || text(heading).replace(/\s*\+$/, '') !== name || !hasClass(root, key)) continue;
    const paragraphs = (root.childNodes || []).filter(n => n.tagName === 'p'), basis = paragraphs[0];
    if (!basis) continue;
    const offers = [], amount = amountAt(price), basisText = visibleText(basis);
    if (!basisText) issues.push('Asana billing basis hidden or unavailable; billing and unit remain unknown');
    if (amount !== null) {
      offers.push(offer(price, { amount, period: /per month/i.test(basisText) ? 'month' : 'unknown',
        commitment: /billed annually/i.test(basisText) ? 'annual' : 'unknown',
        unit: /per user/i.test(basisText) ? 'user' : null, sources: [basis], issues }));
      for (const alternative of paragraphs.slice(1)) {
        const spans = (alternative.childNodes || []).filter(n => n.tagName === 'span');
        const numeric = spans.map(compact).join(''), alternativeAmount = numeric.match(/^\$(\d+(?:\.\d+)?)$/)?.[1];
        if (!alternativeAmount || !/billed monthly/i.test(text(alternative))) continue;
        offers.push(offer(alternative, { amount: alternativeAmount, period: 'month', commitment: 'monthly',
          unit: /per user/i.test(basisText) ? 'user' : null, sources: [basis], issues }));
      }
    } else if (/^Contact sales for pricing$/i.test(basisText)) offers.push(offer(basis, { issues }));
    if (!offers.length) continue;
    const groups = nodes(section, n => n.tagName === 'div' && hasClass(n, key) && nodes(n, c => c.tagName === 'ul').length);
    const free = amount === '0' && /^Free forever$/i.test(basisText);
    const status = free ? 'free' : amount === null ? 'quote' : /[1-9]/.test(amount) ? 'paid' : 'unknown';
    plans.push({ ...plan(name, root, offers, featuresIn(groups), status),
      source: joined(heading, root) });
  }
  if (!plans.length) return [];
  for (const heading of nodes(doc, n => n.tagName === 'h5' && text(n) === 'Enterprise+')) {
    const root = heading.parentNode?.parentNode;
    if (!root) continue;
    const quote = nodes(root, n => n.tagName === 'a' && /^Contact sales$/i.test(text(n)))[0];
    if (quote) {
      const features = nodes(root, n => n.tagName === 'p' && hasClass(n, 'ezpug003'))
        .filter(n => text(n)).map(n => ({ name: text(n), value: text(n), source: evidence(n) }));
      plans.push(plan('Enterprise+', root, [offer(quote, { issues })], features, 'quote'));
    }
  }
  return plans;
}
export function modernPlans(doc, { originalUrl, issues = [] } = {}) {
  let url;
  try { url = new URL(originalUrl); } catch { return []; }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.port) return [];
  const host = url.hostname.replace(/^www\./, ''), path = url.pathname.replace(/\/$/, '');
  const result = host === 'figma.com' && path === '/pricing' ? figmaPlans(doc, issues)
    : host === 'asana.com' && path === '/pricing' ? asanaPlans(doc, issues) : [];
  return result.map((value, order) => ({ ...value, order }));
}
