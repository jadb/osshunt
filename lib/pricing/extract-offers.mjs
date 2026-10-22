import { attr, evidence, inherited, text } from './html.mjs';

const codes = '(?:USD|EUR|GBP|CAD|AUD|NZD|JPY|CNY|INR|BRL|CHF|SEK|NOK|DKK|PLN|SGD|HKD|ZAR|KRW|MXN)';
const money = new RegExp(`(${codes}|[$€£¥₹])\\s*([0-9][0-9.,\\u00a0 ]*(?:[–−-]\\s*[0-9][0-9.,]*)?)|([0-9][0-9.,]*)\\s*(${codes}|[$€£¥₹])`, 'i');
export function decimal(value, { structured = false } = {}) {
  const s = String(value).trim().replace(/[\s\u00a0]/g, '');
  if (structured) return /^\d+(?:\.\d+)?$/.test(s) ? s : null;
  if (/^\d+$/.test(s)) return s;
  if (/^\d{1,3}(?:[.,]\d{3})+[.,]\d{1,2}$/.test(s)) {
    const last = Math.max(s.lastIndexOf('.'), s.lastIndexOf(','));
    return s.slice(0, last).replace(/[.,]/g, '') + '.' + s.slice(last + 1);
  }
  if (/^\d+[.,]\d{1,2}$/.test(s)) return s.replace(',', '.');
  return null;
}
const clause = (value, re) => value.split(/(?<=[.!;])\s+/).find(s => re.test(s)) ?? null;
const affirmativeFree = value => /^free(?:\s+(?:forever|plan|tier|trial|for\b.*))?[.!]?$/i.test(value.trim());
const negatedFree = value => /\b(?:not|never|no longer|isn['’]t|aren['’]t)\s+(?:a\s+)?free\b/i.test(value);
function commitmentIn(value) {
  const annual = /billed annually|annual (?:billing|commitment|contract)|yearly (?:billing|commitment|contract)/i.test(value);
  const monthly = /billed monthly|monthly (?:billing|commitment|contract)|month[ -]to[ -]month/i.test(value);
  return annual === monthly ? 'unknown' : annual ? 'annual' : 'monthly';
}
export const emptyQualifications = () => ({ region: null, locale: null, tax: null, promotion: null, startingAt: null,
  range: null, volume: null, billingVariant: null });
export function parseOffer(node, { context = node, variant = false, issues = [] } = {}) {
  const literal = text(node), contextual = text(context), m = literal.match(money);
  if (!m && !/\b(free(?: forever)?|contact sales|contact us|request (?:a )?quote|custom pricing|talk to sales)\b/i.test(literal)) return null;
  let amount = null, currency = null;
  const raw = m?.[2]?.trim() || m?.[3], token = m?.[1] || m?.[4];
  const range = raw?.match(/\d[\d.,]*\s*[–−-]\s*\d[\d.,]*/)?.[0] ?? null;
  if (m) {
    amount = decimal(range ? range.split(/[–−-]/)[0] : raw);
    currency = /^[A-Z]{3}$/i.test(token) ? token.toUpperCase() : token === '€' ? 'EUR' : token === '₹' ? 'INR' : null;
    if (amount === null) issues.push(`Ambiguous numeric amount: ${literal}`);
    if (currency === null) issues.push(`Unknown currency: ${literal}`);
  } else if (affirmativeFree(literal)) amount = '0';
  if (negatedFree(literal)) issues.push(`Negated free wording is not a zero-price offer: ${literal}`);
  if ([...literal.matchAll(new RegExp(money.source, 'gi'))].length > 1) {
    amount = null; issues.push(`Multiple displayed amounts require review: ${literal}`);
  }
  const billingPeriod = /(?:\/\s*|per\s+)(?:user\s*\/\s*|seat\s*\/\s*)?(?:month|mo)\b|\bmonthly\b/i.test(literal) ? 'month'
    : /(?:\/\s*|per\s+)(?:year|yr)\b|\bannually\b|\byearly\b/i.test(literal) ? 'year'
      : /one[ -]time|once only/i.test(literal) ? 'one-time' : 'unknown';
  const localCommitment = commitmentIn(literal);
  const commitment = localCommitment !== 'unknown' ? localCommitment : commitmentIn(contextual);
  const unitMatch = literal.match(/(?:per\s+|\/\s*)(user|seat|member|agent|workspace|project|GB|TB|request|contact)s?\b/i);
  const minimum = contextual.match(/(?:minimum(?: of)?|min\.?|at least)\s+(\d+)\s+(?:users|seats|members|agents)/i);
  const qualifications = { ...emptyQualifications(),
    region: clause(contextual, /\b(?:US|UK|EU|United States|United Kingdom|Europe|Canada|Australia)\s+only\b/i),
    locale: inherited(node, 'lang'), tax: clause(contextual, /\b(?:VAT|tax(?:es)?)\b/i),
    promotion: clause(contextual, /\b(?:introductory|discount|first \d+ months|promotion|sale price)\b/i),
    startingAt: /\b(?:starting (?:at|from)|from)\b/i.test(literal) ? true : null,
    range, volume: clause(contextual, /\bvolume\b|\btiered\b/i),
    billingVariant: variant ? 'unknown-active-variant' : null };
  if (variant) issues.push('Billing variant active state unknown; archived scripts not executed');
  return { literal, amount, currency, billingPeriod, commitment, unit: unitMatch?.[1] ?? null,
    minimumQuantity: minimum ? Number(minimum[1]) : null, qualifications, source: evidence(context) };
}
export function statusOf(offers) {
  if (!offers.length) return 'unknown';
  if (offers.some(o => o.amount !== null && Number(o.amount) > 0)) return 'paid';
  if (offers.some(o => affirmativeFree(o.literal) && /\btrial\b/i.test(o.literal))) return 'trial';
  if (offers.some(o => affirmativeFree(o.literal))) return 'free';
  if (offers.some(o => /contact|quote|custom pricing|talk to sales/i.test(o.literal))) return 'quote';
  return 'unknown';
}
