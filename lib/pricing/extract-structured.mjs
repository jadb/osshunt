import { attr, evidence, nodes } from './html.mjs';
import { decimal, emptyQualifications } from './extract-offers.mjs';

const isType = (value, type) => [value].flat().some(t => typeof t === 'string' && (t === type || t === `https://schema.org/${type}` || t === `http://schema.org/${type}`));
function offersIn(value, path = '$', inheritedName = null, depth = 0) {
  if (depth > 30 || !value || typeof value !== 'object') return [];
  if (Array.isArray(value)) return value.flatMap((v, i) => offersIn(v, `${path}[${i}]`, inheritedName, depth + 1));
  if (isType(value['@type'], 'Offer')) return [{ value, path, name: value.name ?? inheritedName }];
  const name = typeof value.name === 'string' ? value.name : inheritedName;
  return Object.entries(value).flatMap(([key, v]) => offersIn(v, `${path}.${key}`, key === 'offers' ? name : null, depth + 1));
}
function parseSource(raw) {
  const tokens = new WeakMap();
  const value = JSON.parse(raw, function (key, parsed, context) {
    if (typeof parsed === 'number') {
      if (!tokens.has(this)) tokens.set(this, new Map());
      tokens.get(this).set(key, context?.source ?? null);
    }
    return parsed;
  });
  return { value, token: (object, key) => typeof object?.[key] === 'number' ? tokens.get(object)?.get(key) ?? null : object?.[key] };
}
export function structuredPlans(doc, issues) {
  const plans = [];
  for (const node of nodes(doc, n => n.tagName === 'script' && attr(n, 'type')?.toLowerCase() === 'application/ld+json')) {
    const rawJson = (node.childNodes || []).map(n => n.value || '').join('');
    let json, token;
    try { ({ value: json, token } = parseSource(rawJson)); }
    catch { issues.push('Invalid JSON-LD retained as unavailable structured evidence'); continue; }
    for (const { value, path, name } of offersIn(json)) {
      if (typeof name !== 'string' || !name.trim()) { issues.push(`Structured offer lacks a plan name at ${path}`); continue; }
      const specs = value.priceSpecification ? [value.priceSpecification].flat() : [value];
      const offers = specs.flatMap((spec, index) => {
        if (!spec || typeof spec !== 'object' || Array.isArray(spec)) {
          issues.push(`Invalid price specification at ${path}`); return [];
        }
        const raw = token(spec, 'price'), amount = raw === undefined || raw === null ? null : decimal(raw, { structured: true });
        const currencyValue = spec.priceCurrency ?? value.priceCurrency;
        const currency = typeof currencyValue === 'string' && /^[A-Z]{3}$/.test(currencyValue) ? currencyValue : null;
        if (!currency) issues.push(`Unknown currency at ${path}`);
        if (amount === null) issues.push(`Unknown structured amount or unavailable original numeric token at ${path}`);
        const source = evidence(node, rawJson);
        source.locator += `:${path}${value.priceSpecification ? `.priceSpecification${Array.isArray(value.priceSpecification) ? `[${index}]` : ''}` : ''}`;
        const qualifications = { ...emptyQualifications(), region: typeof value.areaServed === 'string' ? value.areaServed : null,
          tax: typeof spec.valueAddedTaxIncluded === 'boolean' ? `valueAddedTaxIncluded: ${spec.valueAddedTaxIncluded}` : null,
          promotion: typeof spec.priceType === 'string' ? spec.priceType : null,
          range: spec.minPrice !== undefined || spec.maxPrice !== undefined ? JSON.stringify({ minPrice: token(spec, 'minPrice'), maxPrice: token(spec, 'maxPrice') }) : null };
        const quantityOwner = spec.eligibleQuantity ?? value.eligibleQuantity;
        const min = quantityOwner && token(quantityOwner, 'minValue');
        const minimumQuantity = typeof min === 'string' && /^\d+$/.test(min) && Number.isSafeInteger(Number(min)) && Number(min) > 0
          ? Number(min) : null;
        return { literal: raw === undefined || raw === null ? rawJson.slice(0, 4000) : String(raw), amount, currency,
          billingPeriod: 'unknown', commitment: 'unknown', unit: typeof spec.unitText === 'string' ? spec.unitText : null,
          minimumQuantity, qualifications, source };
      });
      if (!offers.length) continue;
      const source = evidence(node, rawJson); source.locator += `:${path}`;
      plans.push({ name: name.trim(), order: plans.length, popular: null, kind: 'plan',
        status: offers.some(o => o.amount !== null && /[1-9]/.test(o.amount)) ? 'paid' : 'unknown', offers, features: [], source });
    }
  }
  return plans;
}
