import test from 'node:test';
import assert from 'node:assert/strict';
import { extractPricing } from '../lib/pricing/extract.mjs';

// Reduced structural fixture from archived pricing cards; copy and styling omitted.
const card = (slug, name, amount) => `<div class="pricing_card__EQdcI" data-testid="pricing-card-${slug}">
<div class="content_container__R6IHi"><div class="title_container"><span>${name} plan</span></div>
<p>Includes Fin AI Agent</p><div><span>$0.99</span> per Fin resolution</div>
<div class="price_container__QMC7P" data-testid="price-${slug}"><span class="price_value">$ ${amount}</span><span class="price_suffix">per seat/mo, billed annually</span></div>
<a>Free 14 day trial</a></div></div>`;
const html = `<html lang="en"><body><main>
${card('essential', 'Essential', '29')}${card('advanced', 'Advanced', '85')}${card('expert', 'Expert', '132')}
<div data-testid="fin-pricing-card"><span>Fin AI Agent</span><span>$0.99 per Fin resolution</span><p>50 resolutions per month minimum</p></div>
<p>Intercom is billed in United States Dollars (USD) only. This applies across our whole platform, including seat pricing, additional usage charges, add-ons, and Premier Services.</p>
</main></body></html>`;
const extract = (value = html, originalUrl = 'https://www.intercom.com/pricing') => extractPricing(value, { originalUrl });

test('Intercom static seat cards bind named annual monthly rates and explicit platform currency', () => {
  const result = extract();
  assert.deepEqual(result.plans.map(p => p.name), ['Essential', 'Advanced', 'Expert']);
  assert.deepEqual(result.plans.map(p => p.offers[0].amount), ['29', '85', '132']);
  for (const plan of result.plans) {
    assert.equal(plan.kind, 'plan'); assert.equal(plan.status, 'paid'); assert.deepEqual(plan.features, []);
    assert.equal(plan.offers.length, 1);
    const offer = plan.offers[0];
    assert.equal(offer.currency, 'USD'); assert.equal(offer.billingPeriod, 'month');
    assert.equal(offer.commitment, 'annual'); assert.equal(offer.unit, 'seat'); assert.equal(offer.minimumQuantity, null);
    assert.match(offer.source.locator, /^offset:\d+-\d+ \+ offset:\d+-\d+$/);
    assert.match(offer.source.text, /United States Dollars \(USD\) only/);
    assert.match(offer.literal, /per seat\/mo, billed annually/);
    assert.equal(offer.qualifications.locale, 'en');
  }
  assert.equal(result.quality, 'partial');
  assert.match(result.issues.join(' '), /Fin.*usage|usage.*Fin/i);
});

test('Intercom seat amounts remain paid despite secondary trial and Fin usage prices', () => {
  const plans = extract(html.replace('$ 29', '$ 30.50')).plans;
  assert.equal(plans[0].offers[0].amount, '30.50');
  assert.equal(plans[0].status, 'paid');
  assert.equal(plans.flatMap(p => p.offers).some(o => o.amount === '0' || o.amount === '0.99'), false);
});

test('Intercom currency requires visible affirmative USD policy, not dollar glyph or hidden FAQ', () => {
  const missing = html.replace(/<p>Intercom is billed[^]*?<\/p>/, '');
  for (const value of [missing, html.replace('<p>Intercom is billed', '<p hidden>Intercom is billed'),
    html.replace('Intercom is billed in United States Dollars (USD) only.', 'Intercom is not billed in United States Dollars (USD) only.')]) {
    const result = extract(value);
    assert.equal(result.plans.length, 3);
    assert.equal(result.plans.every(p => p.offers[0].currency === null), true);
    assert.match(result.issues.join(' '), /currency/i);
  }
});

test('Intercom billing comes from the local seat price, never trial or unrelated card context', () => {
  const changed = html.replace('per seat/mo, billed annually', 'per seat/mo, billed monthly');
  const plans = extract(changed).plans;
  assert.equal(plans[0].offers[0].commitment, 'monthly');
  assert.equal(plans[1].offers[0].commitment, 'annual');
  const absent = extract(html.replace('per seat/mo, billed annually', 'per seat/mo')).plans;
  assert.equal(absent[0].offers[0].commitment, 'unknown');
});

test('Intercom retains hidden primary offers as unknown active variants', () => {
  const result = extract(html.replace('data-testid="price-essential"', 'data-testid="price-essential" hidden'));
  assert.equal(result.plans.length, 3);
  assert.equal(result.plans[0].offers[0].qualifications.billingVariant, 'unknown-active-variant');
  assert.equal(result.plans[0].offers[0].amount, '29');
});

test('Intercom scope and source shape guards reject unrelated pages and mismatched labels', () => {
  for (const url of ['https://other.example/pricing', 'https://www.intercom.com/features', 'https://intercom.com.evil.example/pricing']) {
    assert.equal(extract(html, url).plans.length, 0);
  }
  assert.equal(extract(html.replaceAll('data-testid=', 'data-unrelated=')).plans.length, 0);
  assert.deepEqual(extract(html.replace('Essential plan', 'Other product plan')).plans.map(p => p.name), ['Advanced', 'Expert']);
});

test('Intercom authoritative cards do not collect unrelated generic plans or whole-product offers', () => {
  const value = html + `<section class="plan-card"><h2>Unrelated promotion</h2><p class="price">USD 999/month</p></section>
<script type="application/ld+json">{"@type":"Offer","name":"Other SKU","price":"888","priceCurrency":"USD"}</script>`;
  assert.deepEqual(extract(value).plans.map(p => p.name), ['Essential', 'Advanced', 'Expert']);
});

const policyText = 'Intercom is billed in United States Dollars (USD) only. This applies across our whole platform, including seat pricing, additional usage charges, add-ons, and Premier Services.';
const linkedPolicy = `<button id="currency-trigger" aria-controls="currency-panel" aria-expanded="false"><span>Can I pay in my local currency?</span></button>
<div role="region" id="currency-panel" aria-labelledby="currency-trigger" aria-hidden="true" data-open="false"><div><p>${policyText}</p></div></div>`;
const withoutPolicy = html.replace(`<p>${policyText}</p>`, '');

test('Intercom reads a linked collapsed currency FAQ as disclosure evidence, not a hidden billing variant', () => {
  const result = extract(withoutPolicy + linkedPolicy);
  assert.equal(result.plans.length, 3);
  for (const plan of result.plans) {
    const offer = plan.offers[0];
    assert.equal(offer.currency, 'USD');
    assert.equal(offer.qualifications.billingVariant, null);
    assert.match(offer.source.locator, /^offset:\d+-\d+ \+ offset:\d+-\d+ \+ offset:\d+-\d+$/);
    assert.match(offer.source.text, /Can I pay in my local currency\?/);
    assert.match(offer.source.text, /United States Dollars \(USD\) only/);
  }
  assert.match(result.issues.join(' '), /collapsed.*FAQ|FAQ.*collapsed/i);
});

test('Intercom collapsed policy requires matching visible question and reciprocal disclosure linkage', () => {
  for (const value of [linkedPolicy.replace('aria-controls="currency-panel"', 'aria-controls="other-panel"'),
    linkedPolicy.replace('aria-labelledby="currency-trigger"', 'aria-labelledby="other-trigger"'),
    linkedPolicy.replace('Can I pay in my local currency?', 'What did billing cost in 2019?'),
    `<div hidden>${linkedPolicy}</div>`,
    `<div hidden><p>${policyText}</p></div>`]) {
    assert.equal(extract(withoutPolicy + value).plans.every(p => p.offers[0].currency === null), true);
  }
});

test('Intercom contradictory or historical currency policy cannot establish current USD currency', () => {
  for (const text of [policyText + ' Intercom is also billed in EUR.',
    policyText + ' This was our policy until 2024.',
    policyText + ' Billing will change to EUR next month.']) {
    const result = extract(withoutPolicy + linkedPolicy.replace(policyText, text));
    assert.equal(result.plans.every(p => p.offers[0].currency === null), true);
  }
  const contradictoryVisible = html.replace(policyText, policyText + ' Intercom is also billed in EUR.');
  assert.equal(extract(contradictoryVisible).plans.every(p => p.offers[0].currency === null), true);
});

test('Intercom currency FAQ contradictions remain disqualifying across answer paragraphs', () => {
  const splitAnswer = linkedPolicy.replace(policyText, `${policyText}</p><p>Intercom is also billed in EUR.`);
  assert.equal(extract(withoutPolicy + splitAnswer).plans.every(p => p.offers[0].currency === null), true);
});
