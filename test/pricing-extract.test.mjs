import test from 'node:test';
import assert from 'node:assert/strict';
import { extractPricing, EXTRACTOR_VERSION } from '../lib/pricing/extract.mjs';

test('cards preserve plan structure, annual commitment and literal evidence', () => {
  const r = extractPricing(`<h1>Pricing</h1><aside>Raised USD 100 million</aside>
    <article class="pricing-card"><h2>Business</h2><b>Most popular</b>
      <p class="price">USD 12 / user / month</p><p>Billed annually. Minimum 5 users. Excludes tax.</p>
      <ul><li>100 projects</li><li>SSO included</li></ul></article>
    <footer>Save USD 200 today</footer>`, { originalUrl: 'https://example.com/pricing' });
  assert.equal(EXTRACTOR_VERSION, '1.0.0');
  assert.equal(r.plans.length, 1);
  const p = r.plans[0];
  assert.equal(p.name, 'Business'); assert.equal(p.popular, true); assert.equal(p.status, 'paid');
  assert.equal(p.offers[0].amount, '12'); assert.equal(p.offers[0].currency, 'USD');
  assert.equal(p.offers[0].billingPeriod, 'month'); assert.equal(p.offers[0].commitment, 'annual');
  assert.equal(p.offers[0].unit, 'user'); assert.equal(p.offers[0].minimumQuantity, 5);
  assert.match(p.offers[0].qualifications.tax, /Excludes tax/i);
  assert.equal(p.features[0].value, '100 projects');
  assert.match(p.offers[0].source.locator, /offset:/); assert.match(p.offers[0].source.text, /USD 12/);
});
test('unknown currency, quote and free plans do not invent prices or popularity', () => {
  const r = extractPricing(`<div class="plan-card"><h2>Starter</h2><p class="price">$9/mo</p></div>
    <div class="plan-card"><h2>Free</h2><p class="price">Free forever</p></div>
    <div class="plan-card"><h2>Enterprise</h2><p>Contact sales</p></div>`);
  assert.equal(r.plans[0].offers[0].currency, null); assert.equal(r.plans[0].popular, null);
  assert.equal(r.plans[1].status, 'free'); assert.equal(r.plans[2].status, 'quote');
  assert.equal(r.plans[2].offers[0].amount, null);
  assert.ok(r.issues.some(x => /currency/i.test(x)));
});
test('decimal locales retain exact values and ambiguous single separators stay unknown', () => {
  const r = extractPricing(`<div class="plan-card"><h2>EU</h2><p class="price">EUR 1.299,00 / year</p></div>
    <div class="plan-card"><h2>US</h2><p class="price">USD 1,299.00 / year</p></div>
    <div class="plan-card"><h2>Ambiguous</h2><p class="price">$1,299 / month</p></div>`);
  assert.deepEqual(r.plans.map(p => p.offers[0].amount), ['1299.00', '1299.00', null]);
});
test('hidden billing variants retain unknown active state without executing scripts', () => {
  const r = extractPricing(`<section class="plan-card"><h2>Pro</h2>
    <p class="price monthly">USD 15 per month</p><p hidden class="price annual">USD 120 per year</p>
    <script>throw new Error('must not execute')</script></section>`);
  assert.equal(r.plans[0].offers.length, 2);
  assert.ok(r.plans[0].offers.every(o => o.qualifications.billingVariant === 'unknown-active-variant'));
  assert.deepEqual(r.plans[0].offers.map(o => o.billingPeriod), ['month', 'year']);
  assert.ok(r.issues.some(x => /variant/i.test(x)));
});
test('comparison tables retain included/excluded and numeric limits without guessing absences', () => {
  const r = extractPricing(`<table class="pricing-table"><tr><th>Plan</th><th>Basic</th><th>Team</th></tr>
    <tr><th>Price</th><td>USD 5/month</td><td>USD 20/month</td></tr>
    <tr><th>Projects</th><td>10</td><td>Unlimited</td></tr><tr><th>SSO</th><td>Not included</td><td>Included</td></tr></table>`);
  assert.deepEqual(r.plans.map(p => p.name), ['Basic', 'Team']);
  assert.deepEqual(r.plans[0].features.map(f => [f.name, f.value]), [['Projects', '10'], ['SSO', 'Not included']]);
});
test('inert JSON-LD offers preserve names, structured currency and price specification', () => {
  const r = extractPricing(`<script type="application/ld+json">{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Tool","offers":[{"@type":"Offer","name":"Pro","priceSpecification":{"@type":"UnitPriceSpecification","price":"12.50","priceCurrency":"USD","unitText":"user"}}]}</script>`);
  assert.equal(r.plans[0].name, 'Pro'); assert.equal(r.plans[0].offers[0].amount, '12.50');
  assert.equal(r.plans[0].offers[0].currency, 'USD'); assert.equal(r.plans[0].offers[0].unit, 'user');
  assert.equal(r.plans[0].offers[0].billingPeriod, 'unknown');
  assert.match(r.plans[0].source.locator, /\$.*offers/);
});
test('range, starting price, regional, promotion, tax and volume conditions remain explicit', () => {
  const r = extractPricing(`<div class="plan-card" lang="en-US"><h2>Scale add-on</h2>
    <p class="price">Starting at USD 10–20 / user / month</p>
    <p>US only. Includes VAT. First 3 months introductory discount. Volume pricing available.</p></div>`);
  const p = r.plans[0], o = p.offers[0];
  assert.equal(p.kind, 'addon'); assert.equal(o.qualifications.startingAt, true);
  assert.match(o.qualifications.range, /10–20/); assert.match(o.qualifications.region, /US only/);
  assert.equal(o.qualifications.locale, 'en-US'); assert.match(o.qualifications.promotion, /introductory/);
  assert.match(o.qualifications.volume, /Volume/);
});
test('unknown client-rendered pages, unrelated script numbers and funding amounts are unavailable', () => {
  const r = extractPricing('<h1>Pricing</h1><div id="app"></div><aside>USD 100 million funding</aside><script>window.price=9</script>');
  assert.equal(r.quality, 'unavailable'); assert.deepEqual(r.plans, []);
});
test('untrusted JSON schema offer without a name is not silently assigned a tier', () => {
  const r = extractPricing('<script type="application/ld+json">{"@type":"Offer","price":"9","priceCurrency":"USD"}</script>');
  assert.equal(r.plans.length, 0); assert.ok(r.issues.some(x => /name/i.test(x)));
});
test('mixed displayed currencies and totals require review instead of choosing the first amount', () => {
  const r = extractPricing('<div class="plan-card"><h2>Pro</h2><p class="price">USD 12/month; USD 144 annual total</p></div>');
  assert.equal(r.plans[0].offers[0].amount, null);
  assert.ok(r.issues.some(i => /multiple.*amount/i.test(i)));
});
test('hidden ancestors label otherwise unmarked monthly and annual variants unknown', () => {
  const r = extractPricing('<div class="plan-card"><h2>Pro</h2><div><span class="price">USD 12/month</span></div><div hidden><span class="price">USD 120/year</span></div></div>');
  assert.ok(r.plans[0].offers.every(o => o.qualifications.billingVariant === 'unknown-active-variant'));
});
test('offer evidence includes the annual commitment and minimum quantity it supports', () => {
  const r = extractPricing('<div class="plan-card"><h2>Pro</h2><p class="price">USD 12/month</p><p>Billed annually. Minimum 5 users.</p></div>');
  assert.match(r.plans[0].offers[0].source.text, /Billed annually/);
  assert.match(r.plans[0].offers[0].source.text, /Minimum 5 users/);
});
test('structured source locators distinguish object from array price specifications', () => {
  const r = extractPricing('<script type="application/ld+json">[{"@type":"Offer","name":"A","priceSpecification":{"price":"9","priceCurrency":"USD"}},{"@type":"Offer","name":"B","priceSpecification":[{"price":"10","priceCurrency":"USD"}]}]</script>');
  assert.match(r.plans[0].offers[0].source.locator, /:\$\[0\]\.priceSpecification$/);
  assert.match(r.plans[1].offers[0].source.locator, /:\$\[1\]\.priceSpecification\[0\]$/);
});
