import { attr, ancestor, documentOf, evidence, hasAttr, nodes, text } from './html.mjs';
import { parseOffer, statusOf } from './extract-offers.mjs';
import { structuredPlans } from './extract-structured.mjs';
import { adaptedPlans } from './extract-adapters.mjs';
import { calendlyPlans } from './extract-calendly.mjs';
import { businessPlans } from './extract-business.mjs';
import { modernPlans } from './extract-modern.mjs';
import { genericPlans, genericOffer, extractionDiagnostics, popularBadge } from './extract-generic.mjs';
import { boundExtraction } from './extract-bounds.mjs';

export const EXTRACTOR_VERSION = '1.1.0';
const heading = n => /^h[1-6]$/.test(n.tagName ?? '');
const priceClass = n => /(?:^|[\s_-])(?:price|amount)(?:$|[\s_-])/i.test(attr(n, 'class') ?? '') || attr(n, 'itemprop') === 'price';
const card = n => attr(n, 'data-plan') !== null || /(?:^|\s)(?:pricing-card|price-card|plan-card|pricing-tier|plan)(?:\s|$)/i.test(attr(n, 'class') ?? '');
function leafNodes(root, predicate) {
  return nodes(root, predicate).filter(n => !nodes(n, child => child !== n && predicate(child)).length);
}
function contextFor(node, root, priceNodes) {
  if (priceNodes.length === 1) return root;
  let context = node;
  for (let parent = node.parentNode; parent && parent !== root; parent = parent.parentNode) {
    if (priceNodes.some(other => other !== node && (other === parent || ancestor(other, n => n === parent)))) break;
    context = parent;
  }
  return context;
}
function cardPlan(root, issues) {
  const titleNode = nodes(root, heading)[0];
  const name = titleNode ? text(titleNode) : attr(root, 'data-plan');
  if (!name) { issues.push('Pricing group lacks a plan name'); return null; }
  let priceNodes = leafNodes(root, priceClass);
  if (!priceNodes.length) {
    priceNodes = leafNodes(root, n => ['p', 'span', 'div'].includes(n.tagName) && !ancestor(n, p => p.tagName === 'li') &&
      /(?:[$€£₹¥]|\b(?:USD|EUR|GBP|CAD|AUD|free forever|free trial|contact sales|contact us|request quote|custom pricing|talk to sales)\b)/i.test(text(n)));
  }
  const hidden = n => hasAttr(n, 'hidden') || attr(n, 'aria-hidden') === 'true' || /display\s*:\s*none/i.test(attr(n, 'style') ?? '');
  const variant = priceNodes.some(n => hidden(n) || ancestor(n, hidden)) ||
    (priceNodes.length > 1 && priceNodes.some(n => /monthly|annual|yearly|variant/i.test(attr(n, 'class') ?? '')));
  const offers = priceNodes.map(node => parseOffer(node, { context: contextFor(node, root, priceNodes), variant, issues })).filter(Boolean);
  if (!offers.length) return null;
  const features = nodes(root, n => n.tagName === 'li').map(n => ({ name: text(n), value: text(n), source: evidence(n) }));
  return { name, order: 0, popular: popularBadge(root) ? true : null,
    kind: /\badd[ -]?on\b/i.test(name) ? 'addon' : 'plan', status: statusOf(offers), offers, features, source: evidence(root) };
}
function tablePlans(table, issues) {
  const rows = nodes(table, n => n.tagName === 'tr' && ancestor(n, p => p.tagName === 'table') === table);
  if (!rows.length) return [];
  const cells = row => (row.childNodes ?? []).filter(n => ['th', 'td'].includes(n.tagName));
  const headers = cells(rows[0]);
  if (headers.length < 2 || !headers.slice(1).every(n => text(n))) return [];
  if (nodes(table, n => ['th', 'td'].includes(n.tagName) && (attr(n, 'colspan') || attr(n, 'rowspan'))).length) {
    issues.push('Complex comparison table requires an adapter'); return [];
  }
  const plans = headers.slice(1).map(n => ({ name: text(n), order: 0, popular: null, kind: 'plan',
    status: 'unknown', offers: [], features: [], source: evidence(n) }));
  for (const row of rows.slice(1)) {
    const cs = cells(row);
    if (cs.length !== headers.length) { issues.push('Irregular comparison row requires review'); continue; }
    const label = text(cs[0]);
    plans.forEach((p, i) => {
      const node = cs[i + 1], value = text(node);
      if (/\b(price|cost|monthly|annually|annual|yearly)\b/i.test(label)) {
        const offer = genericOffer(node, { issues, allowPlaceholder: true });
        if (offer) p.offers.push(offer);
      } else if (value) p.features.push({ name: label, value, source: evidence(node) });
    });
  }
  return plans.filter(p => p.offers.length).map(p => ({ ...p, status: statusOf(p.offers) }));
}
export function extractPricing(html, { originalUrl } = {}) {
  const doc = documentOf(html), issues = [], handledTables = new Set();
  let plans = [...structuredPlans(doc, issues), ...adaptedPlans(doc, { originalUrl, issues, handledTables }), ...calendlyPlans(doc, { originalUrl, issues }), ...businessPlans(doc, { originalUrl, issues, handledTables }), ...modernPlans(doc, { originalUrl, issues, handledTables })];
  const cards = nodes(doc, card).filter(n => !nodes(n, child => child !== n && card(child)).length);
  for (const node of cards) { const plan = cardPlan(node, issues); if (plan) plans.push(plan); }
  for (const table of nodes(doc, n => n.tagName === 'table')) {
    if (handledTables.has(table)) continue;
    if (/pricing|plans?|comparison/i.test(`${attr(table, 'class') ?? ''} ${attr(table, 'id') ?? ''}`) ||
      nodes(table, n => n.tagName === 'th' && /\bprice\b/i.test(text(n))).length) plans.push(...tablePlans(table, issues));
  }
  if (!plans.length) plans = genericPlans(doc, issues);
  // Keep competing source representations separate for review; matching a name is not proof of identity.
  if (new Set(plans.map(p => p.name)).size < plans.length) issues.push('Repeated plan names require source/variant reconciliation');
  plans = plans.map((p, order) => ({ ...p, order }));
  if (!plans.length) issues.push('No supported pricing structure; client-rendered or unknown template remains unavailable');
  const bounded = boundExtraction(plans, issues);
  plans = bounded.plans;
  return { plans, quality: !plans.length ? 'unavailable' : 'partial', issues: bounded.issues, diagnostics: extractionDiagnostics(doc, plans) };
}
