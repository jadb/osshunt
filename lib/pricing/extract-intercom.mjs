import { ancestor, attr, evidence, inherited, nodes } from './html.mjs';
import { emptyQualifications, offerContextText } from './extract-offers.mjs';

const hidden = node => attr(node, 'hidden') !== null || attr(node, 'aria-hidden') === 'true' ||
  /display\s*:\s*none/i.test(attr(node, 'style') || '');
const invisible = node => hidden(node) || ancestor(node, hidden);
const blocked = node => ['script', 'style', 'template'].includes(node?.tagName);
const policy = /^\s*(?:Please note:\s*)?Intercom is billed in United States Dollars \(USD\) only\./i;
const tiers = [['essential', 'Essential'], ['advanced', 'Advanced'], ['expert', 'Expert']];

const conflictingPolicy = value => /\b(?:EUR|GBP|CAD|AUD|euros?|pounds?)\b/i.test(value) ||
  /\b(?:previously|formerly|historical|no longer|planned|used to|until 20\d\d|will change|will be|will start)\b/i.test(value);
function billingCurrencyPolicy(doc) {
  const candidates = [];
  for (const answer of nodes(doc, node => node.tagName === 'p' && !blocked(node) && !ancestor(node, blocked))) {
    const value = offerContextText(answer);
    if (!policy.test(value)) continue;
    if (!invisible(answer)) { candidates.push({ answer, question: null, value }); continue; }
    const panel = ancestor(answer, node => attr(node, 'role') === 'region' && attr(node, 'id'));
    if (!panel || attr(panel, 'data-open') !== 'false' || attr(panel, 'aria-hidden') !== 'true') continue;
    const triggerId = attr(panel, 'aria-labelledby');
    const questions = nodes(doc, node => node.tagName === 'button' && attr(node, 'id') === triggerId &&
      attr(node, 'aria-controls') === attr(panel, 'id') && attr(node, 'aria-expanded') === 'false' &&
      !invisible(node) && !ancestor(node, blocked) && offerContextText(node) === 'Can I pay in my local currency?');
    if (questions.length !== 1) continue;
    let unrelatedHidden = false;
    for (let parent = answer; parent; parent = parent.parentNode) {
      if (parent !== panel && hidden(parent)) { unrelatedHidden = true; break; }
    }
    if (!unrelatedHidden) candidates.push({ answer, question: questions[0], value: offerContextText(panel) });
  }
  if (candidates.some(candidate => conflictingPolicy(candidate.value))) return null;
  return candidates[0] || null;
}

export function intercomPlans(doc, { originalUrl, issues }) {
  let url;
  try { url = new URL(originalUrl); } catch { return []; }
  if (!/^https?:$/.test(url.protocol) || url.hostname.replace(/^www\./, '') !== 'intercom.com' ||
    !/^\/pricing\/?$/.test(url.pathname)) return [];
  const currencyPolicy = billingCurrencyPolicy(doc);
  const plans = [];
  for (const [slug, name] of tiers) {
    const cards = nodes(doc, node => attr(node, 'data-testid') === `pricing-card-${slug}` &&
      !blocked(node) && !ancestor(node, blocked));
    if (cards.length > 1) {
      issues.push(`Repeated Intercom ${name} cards require source reconciliation`);
      continue;
    }
    const root = cards[0];
    if (!root) continue;
    const title = nodes(root, node => node.tagName && !blocked(node) &&
      !ancestor(node, blocked) && offerContextText(node) === `${name} plan`).at(-1);
    const prices = nodes(root, node => attr(node, 'data-testid') === `price-${slug}` &&
      !blocked(node) && !ancestor(node, blocked));
    if (!title || prices.length !== 1) continue;
    const price = prices[0], literal = offerContextText(price);
    const match = literal.match(/^(USD|US\$|\$)\s*(\d+(?:\.\d{1,2})?)\s+per seat\/(?:mo|month)(?:,\s*billed (annually|monthly))?$/i);
    if (!match || /^0+(?:\.0+)?$/.test(match[2])) {
      issues.push(`Unsupported Intercom ${name} seat-price basis remains unavailable`);
      continue;
    }
    const currency = /^(USD|US\$)$/i.test(match[1]) || currencyPolicy ? 'USD' : null;
    const source = evidence(price, literal);
    if (currencyPolicy && !/^(USD|US\$)$/i.test(match[1])) {
      const disclosures = [currencyPolicy.question, currencyPolicy.answer].filter(Boolean);
      for (const disclosure of disclosures) {
        source.locator += ` + ${evidence(disclosure).locator}`;
        source.text = `${source.text}; ${offerContextText(disclosure)}`.slice(0, 4000);
      }
    }
    const commitment = match[3]?.toLowerCase() === 'annually' ? 'annual' :
      match[3]?.toLowerCase() === 'monthly' ? 'monthly' : 'unknown';
    const variant = invisible(root) || invisible(price);
    if (!currency) issues.push(`Intercom ${name} dollar currency unspecified; affirmative qualified USD policy unavailable`);
    if (commitment === 'unknown') issues.push(`Intercom ${name} billing commitment unavailable in local seat-price evidence`);
    if (variant) issues.push('Billing variant active state unknown; archived scripts not executed');
    plans.push({ name, order: plans.length, popular: null, kind: 'plan', status: 'paid',
      offers: [{ literal, amount: match[2], currency, billingPeriod: 'month', commitment, unit: 'seat',
        minimumQuantity: null, qualifications: { ...emptyQualifications(), locale: inherited(price, 'lang'),
          billingVariant: variant ? 'unknown-active-variant' : null }, source }],
      features: [], source: evidence(title) });
  }
  if (plans.length && currencyPolicy?.question) issues.push('Intercom USD policy read inertly from linked collapsed currency FAQ; disclosure visibility is not price selection');
  if (plans.length) issues.push('Intercom seat plans only; Fin usage charges, add-ons, trial terms and feature entitlements remain incomplete');
  return plans;
}
