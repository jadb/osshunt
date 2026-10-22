import test from 'node:test';
import assert from 'node:assert/strict';
import { extractPricing } from '../lib/pricing/extract.mjs';

const url = 'https://www.hubspot.com/products/sales';
const note = '*Discount available for new customers only. Offer has no set end date and can be discontinued at any time. Price shown in USD and subject to applicable tax.';
const card = (name, price, subtitle = '') => `<div class="cl-card wf-all-hubs-pricing-card -light"><div class="wf-all-hubs-pricing-card-title-wrapper"><div><h3 class="wf-all-hubs-pricing-card-title">${name}</h3></div><p class="wf-all-hubs-pricing-card-subtitle">${subtitle}</p><p class="wf-all-hubs-pricing-card-secondary-title">${price}</p></div><p>Popular features</p><ul><li>Existing feature</li></ul></div>`;
const fixture = `<section class="wf-section wf-all-hubs-pricing is-4-col"><div class="wf-section-wrapper"><h2>Sales Software That Grows With You</h2><div class="wf-all-hubs-pricing-cards">${card('Free', '$0/month', 'No credit card required')}${card('Starter', '$15/month <s>$20/month</s> per seat*', 'Starts at')}${card('Professional', '$100/month per seat', 'Starts at')}${card('Enterprise', '$150/month per seat', 'Starts at')}</div><p class="wf-all-hubs-pricing-disclaimer-text">${note}</p></div></section>`;
const extract = (html = fixture, originalUrl = url) => extractPricing(html, { originalUrl });

test('HubSpot Sales actual card shape retains four tiers and distinct promotional/reference rates', () => {
  const { plans } = extract();
  assert.deepEqual(plans.map(p => p.name), ['Free', 'Starter', 'Professional', 'Enterprise']);
  assert.deepEqual(plans.map(p => p.offers.map(o => o.amount)), [['0'], ['15', '20'], ['100'], ['150']]);
  assert.ok(plans.flatMap(p => p.offers).every(o => o.currency === 'USD' && o.billingPeriod === 'month' && o.commitment === 'unknown'));
  assert.equal(plans[0].status, 'free');
  assert.equal(plans[0].offers[0].unit, null);
  assert.ok(plans.slice(1).flatMap(p => p.offers).every(o => o.unit === 'seat' && o.minimumQuantity === null && o.qualifications.startingAt === true));
  const [promo, reference] = plans[1].offers;
  assert.match(promo.qualifications.promotion, /new customers only/);
  assert.match(promo.qualifications.promotion, /no set end date/);
  assert.match(reference.qualifications.billingVariant, /struck-through reference/i);
  assert.equal(reference.qualifications.promotion, null);
  assert.equal(plans[2].offers[0].qualifications.promotion, null);
  assert.ok(plans.every(p => p.popular === null));
  assert.match(promo.source.text, /USD/);
  assert.match(reference.source.text, /struck-through/i);
  assert.match(promo.source.locator, /offset:\d+-\d+\|offset:/);
  assert.ok(plans.flatMap(p => p.offers).every(o => /applicable tax/.test(o.qualifications.tax)));
});

test('HubSpot currency and promotion eligibility require visible same-module evidence', () => {
  const html = fixture.replace(note, 'Packaging details.') + `<aside>${note}</aside>`;
  const { plans } = extract(html);
  assert.deepEqual(plans.map(p => p.offers.map(o => o.amount)), [['0'], ['15', '20'], ['100'], ['150']]);
  assert.ok(plans.flatMap(p => p.offers).every(o => o.currency === null && o.qualifications.tax === null));
  assert.doesNotMatch(plans[1].offers[0].qualifications.promotion ?? '', /new customers/);
  for (const hide of ['hidden', 'aria-hidden="true"', 'style="display:none"']) {
    const { plans: hidden } = extract(fixture.replace('<p class="wf-all-hubs-pricing-disclaimer-text">', `<p ${hide} class="wf-all-hubs-pricing-disclaimer-text">`));
    assert.ok(hidden.flatMap(p => p.offers).every(o => o.currency === null));
    assert.doesNotMatch(hidden[1].offers[0].qualifications.promotion ?? '', /new customers/);
  }
});

test('HubSpot absent or hidden per-seat and starts-at basis stay unknown', () => {
  const html = fixture.replaceAll(' per seat', ' <span hidden>per seat</span>').replaceAll('>Starts at<', '><span hidden>Starts at</span><');
  const { plans } = extract(html);
  assert.ok(plans.slice(1).flatMap(p => p.offers).every(o => o.unit === null && o.qualifications.startingAt === null));
  assert.ok(plans.flatMap(p => p.offers).every(o => o.commitment === 'unknown'));
});

test('HubSpot hidden primary offers retain unknown active variant and exclude hidden ancillary rates', () => {
  const { plans } = extract(fixture.replace('$100/month per seat', '$100/month per seat<span hidden>$999/month</span>')
    .replace('wf-all-hubs-pricing-card-secondary-title">$150', 'wf-all-hubs-pricing-card-secondary-title" hidden>$150'));
  assert.equal(plans[2].offers[0].amount, '100');
  assert.equal(plans[3].offers[0].amount, '150');
  assert.match(plans[3].offers[0].qualifications.billingVariant, /unknown-active-variant/);
});

test('HubSpot adapter scoped to canonical Sales page and complete unambiguous module', async () => {
  const { hubspotPlans } = await import('../lib/pricing/extract-hubspot.mjs');
  const { documentOf } = await import('../lib/pricing/html.mjs');
  const direct = (html, originalUrl) => hubspotPlans(documentOf(html), { originalUrl, issues: [] });
  for (const other of ['https://example.com/products/sales', 'https://hubspot.com/products/marketing', 'https://hubspot.com/blog/sales', 'https://hubspot.com/products/sales?edition=marketing'])
    assert.deepEqual(direct(fixture, other), []);
  assert.deepEqual(direct(fixture.replace('>Enterprise<', '>Marketing<'), url), []);
  assert.deepEqual(direct(fixture + fixture, url), []);
  assert.deepEqual(direct('<h1>Sales Pricing</h1><div id="app"></div>', url), []);
});

test('HubSpot star-linked eligibility and positive disclaimer do not leak onto unmarked or negated rates', () => {
  const noStar = extract(fixture.replace('per seat*', 'per seat'));
  assert.doesNotMatch(noStar.plans[1].offers[0].qualifications.promotion ?? '', /new customers/);
  const negated = extract(fixture.replace('Discount available for new customers only.', 'No discount available for new customers only.')
    .replace('Price shown in USD', 'Price not shown in USD'));
  assert.ok(negated.plans.flatMap(p => p.offers).every(o => o.currency === null));
  assert.doesNotMatch(negated.plans[1].offers[0].qualifications.promotion ?? '', /new customers/);
});
