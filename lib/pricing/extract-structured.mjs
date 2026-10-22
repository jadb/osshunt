import { attr, evidence, nodes, text } from './html.mjs';
import { decimal, emptyQualifications } from './extract-offers.mjs';

const isType = (value, type) => [value].flat().some(t => typeof t === 'string' && (t === type || t === `https://schema.org/${type}` || t === `http://schema.org/${type}`));
function offersIn(value, path = '$', inheritedName = null, depth = 0) {
  if (depth > 30 || !value || typeof value !== 'object') return [];
  if (Array.isArray(value)) return value.flatMap((v, i) => offersIn(v, `${path}[${i}]`, inheritedName, depth + 1));
  if (isType(value['@type'], 'Offer')) return [{ value, path, name: value.name ?? inheritedName }];
  const name = typeof value.name === 'string' ? value.name : inheritedName;
  return Object.entries(value).flatMap(([key, v]) => offersIn(v, `${path}.${key}`, key === 'offers' ? name : null, depth + 1));
}
export function structuredPlans(doc, issues) {
  const plans = [];
  for (const node of nodes(doc, n => n.tagName === 'script' && attr(n, 'type')?.toLowerCase() === 'application/ld+json')) {
    let json;
    try { json = JSON.parse(text(node, { scripts: true })); }
    catch { issues.push('Invalid JSON-LD retained as unavailable structured evidence'); continue; }
    for (const { value, path, name } of offersIn(json)) {
      if (typeof name !== 'string' || !name.trim()) { issues.push(`Structured offer lacks a plan name at ${path}`); continue; }
      const specs = value.priceSpecification ? [value.priceSpecification].flat() : [value];
      const offers = specs.flatMap((spec, index) => {
        if (!spec || typeof spec !== 'object' || Array.isArray(spec)) {
          issues.push(`Invalid price specification at ${path}`); return [];
        }
        const raw = spec.price, amount = raw === undefined ? null : decimal(raw, { structured: true });
        const currencyValue = spec.priceCurrency ?? value.priceCurrency;
        const currency = typeof currencyValue === 'string' && /^[A-Z]{3}$/.test(currencyValue) ? currencyValue : null;
        if (!currency) issues.push(`Unknown currency at ${path}`);
        if (amount === null) issues.push(`Unknown structured amount at ${path}`);
        const source = evidence(node, JSON.stringify(spec));
        source.locator += `:${path}${value.priceSpecification ? `.priceSpecification${Array.isArray(value.priceSpecification) ? `[${index}]` : ''}` : ''}`;
        const qualifications = { ...emptyQualifications(), region: typeof value.areaServed === 'string' ? value.areaServed : null,
          tax: typeof spec.valueAddedTaxIncluded === 'boolean' ? `valueAddedTaxIncluded: ${spec.valueAddedTaxIncluded}` : null,
          promotion: typeof spec.priceType === 'string' ? spec.priceType : null,
          range: spec.minPrice !== undefined || spec.maxPrice !== undefined ? JSON.stringify({ minPrice: spec.minPrice, maxPrice: spec.maxPrice }) : null };
        const min = spec.eligibleQuantity?.minValue ?? value.eligibleQuantity?.minValue;
        return { literal: JSON.stringify(spec), amount, currency, billingPeriod: 'unknown', commitment: 'unknown',
          unit: typeof spec.unitText === 'string' ? spec.unitText : null,
          minimumQuantity: typeof min === 'number' && Number.isSafeInteger(min) && min > 0 ? min : null,
          qualifications, source };
      });
      if (!offers.length) continue;
      const source = evidence(node, JSON.stringify(value)); source.locator += `:${path}`;
      plans.push({ name: name.trim(), order: plans.length, popular: null, kind: 'plan',
        status: offers.some(o => o.amount !== null && Number(o.amount) > 0) ? 'paid' : 'unknown', offers, features: [], source });
    }
  }
  return plans;
}
