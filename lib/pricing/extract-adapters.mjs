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
const directCells = row => (row.childNodes || []).filter(n => ['td', 'th'].includes(n.tagName));
const joinedEvidence = (...values) => {
  const parts = values.filter(Boolean).map(node => evidence(node));
  return { locator: parts.map(p => p.locator).join('|'), text: parts.map(p => p.text).join(' | ').slice(0, 4000) };
};
const hidden = node => attr(node, 'hidden') !== null || attr(node, 'aria-hidden') === 'true' || /display\s*:\s*none/i.test(attr(node, 'style') || '');
function zoomLegacyPlans(doc, issues, handledTables) {
  const header = nodes(doc, n => n.tagName === 'table' && attr(n, 'id') === 'plans_header')[0];
  const table = nodes(doc, n => n.tagName === 'table' && attr(n, 'id') === 'plans')[0];
  if (!header || !table) return [];
  const headers = directCells(nodes(header, n => n.tagName === 'tr')[0] || {});
  if (headers.length !== 5) return [];
  const planHeaders = headers.slice(1);
  const titles = planHeaders.map(n => nodes(n, child => hasClass(child, 'title'))[0]);
  if (titles.some(n => !n || !text(n))) return [];
  const descriptions = planHeaders.map(n => nodes(n, child => hasClass(child, 'desc'))[0]);
  const plans = titles.map((n, order) => ({ name: text(n), order, popular: null, kind: 'plan', status: 'unknown',
    offers: [], features: [], source: evidence(planHeaders[order]) }));
  const rows = nodes(table, n => n.tagName === 'tr' && ancestor(n, p => p.tagName === 'table') === table);
  const footnote = rows.find(n => hasClass(n, 'footnote'));
  for (const row of rows) {
    const cells = directCells(row);
    if (cells.length !== headers.length || hasClass(row, 'separator')) continue;
    const label = text(cells[0]), participant = label.match(/^\d+ participants\b/i)?.[0];
    plans.forEach((plan, i) => {
      const node = cells[i + 1];
      if (participant) {
        const offer = parseOffer(node, { variant: hidden(row) || !!ancestor(row, hidden), issues });
        if (!offer) return;
        const description = descriptions[i] ? text(descriptions[i]) : '';
        const minimum = description.match(/^(\d+) or more hosts$/i);
        if (/\/(?:mo|month)\/host\b/i.test(text(node))) offer.unit = 'host';
        offer.minimumQuantity = minimum && Number.isSafeInteger(Number(minimum[1])) && Number(minimum[1]) > 0 ? Number(minimum[1]) : null;
        offer.qualifications.volume = [participant, description].filter(Boolean).join('; ');
        offer.source = joinedEvidence(planHeaders[i], cells[0], node);
        plan.offers.push(offer);
        return;
      }
      const marker = nodes(node, n => hasClass(n, 'checked'))[0];
      let value = text(node);
      if (marker) {
        value = ['marker: checked', value].filter(Boolean).join('; ');
        issues.push('Symbol-only comparison markers retained literally; inclusion/exclusion requires review');
      }
      if (!value || !label) return;
      const note = (label.includes('*') || value.includes('*')) && footnote ? text(footnote) : null;
      if (note) value += `; ${note}`;
      const source = joinedEvidence(cells[0], node, note ? footnote : null);
      if (marker) { source.text += ' | class="checked"'; source.locator += `|${evidence(marker).locator}`; }
      plan.features.push({ name: label, value, source });
    });
  }
  if (!plans.some(p => p.offers.length)) return [];
  handledTables?.add(header); handledTables?.add(table);
  return plans.map(p => ({ ...p, status: statusOf(p.offers) }));
}
const moduleClass = (node, prefix) =>
  (attr(node, 'class') || '').split(/\s+/).some((value) => value.startsWith(`${prefix}__`));
const visibleText = (node) =>
  nodes(node, (n) => n.nodeName === '#text' && !ancestor(n, hidden))
    .map((n) => n.value)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
function notionPlans(doc, issues) {
  const controls = nodes(doc, (n) => moduleClass(n, '_country__priceControlsExperimental')).filter(
    (n) => !hidden(n) && !ancestor(n, hidden),
  );
  const control = controls.length === 1 ? controls[0] : null;
  const currencyNode =
    control &&
    nodes(control, (n) => /^Price in (?:USD|EUR|GBP|CAD|AUD|NZD|JPY|INR|CHF|CNY|BRL|SGD|HKD)$/.test(visibleText(n)))[0];
  const currency = currencyNode ? visibleText(currencyNode).match(/[A-Z]{3}$/)[0] : null;
  const selected = control
    ? nodes(
        control,
        (n) =>
          n.tagName === 'input' &&
          attr(n, 'name') === 'billingInterval' &&
          attr(n, 'type') === 'radio' &&
          attr(n, 'checked') !== null &&
          !hidden(n) &&
          !ancestor(n, hidden),
      )
    : [];
  const chosen = selected.length === 1 ? selected[0] : null;
  const label =
    chosen && attr(chosen, 'id')
      ? nodes(
          control,
          (n) => n.tagName === 'label' && attr(n, 'for') === attr(chosen, 'id') && !hidden(n) && !ancestor(n, hidden),
        )[0]
      : null;
  const selection =
    chosen &&
    label &&
    (attr(chosen, 'value') === 'year' && /^Pay yearly$/i.test(visibleText(label))
      ? 'annual'
      : attr(chosen, 'value') === 'month' && /^Pay monthly$/i.test(visibleText(label))
        ? 'monthly'
        : null);
  const plans = [];
  for (const card of nodes(doc, (n) => moduleClass(n, 'PricingPlanCardNew_pricingPlanCard'))) {
    const title = nodes(card, (n) => moduleClass(n, 'PricingPlanCardNew_heading'))[0];
    const name = title
      ? nodes(title, (n) => n.nodeName === '#text' && !ancestor(n, (p) => moduleClass(p, 'PricingPlanCardNew_badge')))
          .map((n) => n.value)
          .join(' ')
          .replace(/\s+/g, ' ')
          .trim()
      : '';
    if (!name) continue;
    const wraps = nodes(card, (n) => moduleClass(n, 'PricingPlanCardNew_pricingWrap'));
    const variant = wraps.length > 1 || wraps.some((n) => hidden(n) || ancestor(n, hidden));
    const offers = wraps
      .map((node) => {
        const localIssues = [],
          offer = parseOffer(node, { context: card, variant, issues: localIssues });
        if (!offer) return null;
        if (offer.amount !== null && offer.currency === null && currency) offer.currency = currency;
        const appliesBilling = offer.amount !== null && !/^0(?:\.0+)?$/.test(offer.amount) && selection && !variant;
        if (appliesBilling) offer.commitment = selection;
        offer.source = joinedEvidence(
          node,
          currencyNode,
          appliesBilling ? label : null,
          appliesBilling ? chosen : null,
        );
        issues.push(...localIssues.filter((issue) => !(offer.currency && issue.startsWith('Unknown currency:'))));
        return offer;
      })
      .filter(Boolean);
    if (!offers.length) continue;
    const features = nodes(card, (n) => moduleClass(n, 'PlanFeaturesNew_planFeatureItem'))
      .map((n) => ({ name: text(n), value: text(n), source: evidence(n) }))
      .filter((f) => f.value);
    const popular = nodes(
      card,
      (n) =>
        moduleClass(n, 'PricingPlanCardNew_badge') &&
        /^(?:Recommended|Most popular)$/i.test(text(n)) &&
        !hidden(n) &&
        !ancestor(n, hidden),
    ).length
      ? true
      : null;
    const status = /^Free$/i.test(name) && offers.every((o) => o.amount === '0') ? 'free' : statusOf(offers);
    plans.push({ name, order: plans.length, popular, kind: 'plan', status, offers, features, source: evidence(card) });
  }
  return plans;
}
export function adaptedPlans(doc, { originalUrl, issues, handledTables }) {
  let url;
  try { url = new URL(originalUrl); } catch { return []; }
  if (['notion.com','notion.so'].includes(url.hostname.replace(/^www\./,'')) && url.pathname.replace(/\/$/,'') === '/pricing')
    return notionPlans(doc, issues);
  if (url.hostname.replace(/^www\./, '') === 'dropbox.com' && url.pathname.replace(/\/$/, '') === '/pricing')
    return dropboxLegacyPlans(doc, issues);
  if (url.hostname.replace(/^www\./, '') === 'zoom.us' && url.pathname.replace(/\/$/, '') === '/pricing')
    return zoomLegacyPlans(doc, issues, handledTables);
  return [];
}
