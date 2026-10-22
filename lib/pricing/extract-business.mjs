import { ancestor, attr, evidence, nodes, text } from './html.mjs';
import { emptyQualifications, parseOffer, statusOf } from './extract-offers.mjs';
const styled = (node, prefix) =>
  (attr(node, 'class') || '').split(/\s+/).some((value) => value.startsWith(`${prefix}-`));
const joined = (...values) => {
  const parts = values.filter(Boolean).map((n) => evidence(n));
  return {
    locator: parts.map((v) => v.locator).join('|'),
    text: parts
      .map((v) => v.text)
      .join(' | ')
      .slice(0, 4000),
  };
};
function literalOffer(literal, node, issues) {
  const local = [],
    proxy = {
      nodeName: '#text',
      value: literal,
      sourceCodeLocation: node.sourceCodeLocation,
      parentNode: node.parentNode,
    };
  const offer = parseOffer(proxy, { issues: local }) || {
    literal,
    amount: null,
    currency: null,
    billingPeriod: 'unknown',
    commitment: 'unknown',
    unit: null,
    minimumQuantity: null,
    qualifications: emptyQualifications(),
    source: evidence(node, literal),
  };
  offer.source = evidence(node, literal);
  issues.push(...local);
  return offer;
}
function airtableFaq(doc, issues) {
  const question = nodes(doc, (n) => n.tagName === 'p' && /^How much does Airtable cost\??$/i.test(text(n)))[0];
  if (!question) return [];
  const container = ancestor(
    question,
    (n) =>
      n.tagName === 'div' &&
      text(n).length > text(question).length &&
      text(n).includes('Free plan is available at no cost'),
  );
  if (!container) return [];
  const content = text(container),
    plans = [];
  const descriptors = [
    { name: 'Free', status: 'free', pattern: /\b(?:Our )?Free plan is available at no cost\b[^.]*\.?/i },
    {
      name: 'Team',
      status: 'paid',
      pattern: /\b(?:our )?Team plan is available for \$\d+(?:\.\d+)?\/user\/month when billed annually\b/i,
    },
    {
      name: 'Business',
      status: 'paid',
      pattern: /\bBusiness is available at \$\d+(?:\.\d+)?\/user\/month when billed annually\b/i,
    },
    {
      name: 'Enterprise Scale',
      status: 'quote',
      pattern: /\b(?:our )?Enterprise Scale plan pricing is custom\b[^.]*\.?/i,
    },
  ];
  for (const { name, status, pattern } of descriptors) {
    const literal = content.match(pattern)?.[0];
    if (!literal) continue;
    const offer = literalOffer(literal, container, issues);
    if (status === 'free') offer.amount = '0';
    plans.push({
      name,
      order: plans.length,
      popular: null,
      kind: 'plan',
      status,
      offers: [offer],
      features: [],
      source: evidence(container, literal),
    });
  }
  if (plans.length) issues.push('FAQ pricing only; plan features and purchase minimums are not established');
  return plans;
}
function trelloGrid(doc, issues) {
  const grid = nodes(doc, (n) => styled(n, 'UiPricingGridstyles__Grid'))[0];
  if (!grid) return [];
  const groups = [];
  let group = null;
  for (const item of (grid.childNodes || []).filter((n) => styled(n, 'UiPricingGridstyles__Item'))) {
    const heading = nodes(item, (n) => n.tagName === 'h2' && styled(n, 'UiPricingGridstyles__Title'))[0];
    if (heading) {
      group = { heading, items: [item] };
      groups.push(group);
    } else if (group) group.items.push(item);
  }
  const plans = [];
  for (const { heading, items } of groups) {
    const name = text(heading),
      price = items.flatMap((n) => nodes(n, (p) => styled(p, 'UiPricingGridstyles__Price')))[0],
      detail = items.flatMap((n) => nodes(n, (p) => styled(p, 'UiPricingGridstyles__PriceDetail')))[0];
    if (!name || !price || !detail) continue;
    const currency = text(price).match(/\b(USD|EUR|GBP|CAD|AUD)\b/)?.[1] || null,
      description = text(detail),
      prefix = description.split('(')[0].trim();
    const local = [],
      primary = literalOffer(/^Free$/i.test(name) ? text(price) : `${text(price)} ${prefix}`.trim(), price, local);
    if (primary.amount === null) continue;
    primary.currency = currency || primary.currency;
    primary.source = joined(price, detail);
    const offers = [primary];
    const monthly = description.match(/\((\$\s*\d+(?:\.\d+)?\s+billed monthly)\)/i)?.[1];
    if (monthly) {
      const offer = literalOffer(monthly, detail, local);
      offer.currency = currency;
      offer.unit = /\bper user\/month\b/i.test(description) ? 'user' : offer.unit;
      offer.source = joined(price, detail);
      offers.push(offer);
    }
    const total = description.match(/\((\$\s*\d+(?:\.\d+)?\s+annual price per user)\)/i)?.[1];
    if (total) {
      const offer = literalOffer(total, detail, local);
      offer.currency = currency;
      offer.billingPeriod = 'year';
      offer.commitment = /billed annually/i.test(description) ? 'annual' : 'unknown';
      offer.source = joined(price, detail);
      offers.push(offer);
    }
    const estimator = items.flatMap((n) => nodes(n, (p) => styled(p, 'UiPricingGridstyles__UserInputWrapper')))[0];
    if (estimator) {
      const input = nodes(
        estimator,
        (n) => n.tagName === 'input' && attr(n, 'type') === 'number' && /^users$/i.test(attr(n, 'aria-label') || ''),
      )[0];
      const value = input && /^\d+$/.test(attr(input, 'value') || '') ? attr(input, 'value') : null;
      for (const offer of offers) {
        offer.minimumQuantity = null;
        offer.qualifications.volume = value
          ? `Displayed estimate for ${value} users; quantity-dependent pricing`
          : 'Quantity-dependent estimate; selected user quantity unknown';
        offer.source = joined(price, detail, estimator, input);
        if (input) {
          offer.source.text += ` | ${['value', 'min', 'max']
            .filter((key) => attr(input, key) !== null)
            .map((key) => `${key}="${attr(input, key)}"`)
            .join(' ')}`;
        }
      }
      issues.push('Enterprise estimator is quantity-dependent; input bounds do not establish purchase minimums');
    }
    issues.push(...local.filter((issue) => !(currency && issue.startsWith('Unknown currency:'))));
    const features = items
      .flatMap((n) => nodes(n, (p) => p.tagName === 'li'))
      .map((n) => ({ name: text(n), value: text(n), source: evidence(n) }));
    if (/^Free$/i.test(name) && text(detail))
      features.unshift({ name: 'Free plan usage', value: text(detail), source: evidence(detail) });
    plans.push({
      name,
      order: plans.length,
      popular: null,
      kind: 'plan',
      status: /^Free$/i.test(name) && primary.amount === '0' ? 'free' : statusOf(offers),
      offers,
      features,
      source: joined(heading, ...items.slice(1, 2)),
    });
  }
  return plans;
}
export function businessPlans(doc, { originalUrl, issues = [] } = {}) {
  let url;
  try {
    url = new URL(originalUrl);
  } catch {
    return [];
  }
  if (url.pathname.replace(/\/$/, '') !== '/pricing') return [];
  const host = url.hostname.replace(/^www\./, '');
  if (host === 'airtable.com') return airtableFaq(doc, issues);
  if (host === 'trello.com') return trelloGrid(doc, issues);
  return [];
}
