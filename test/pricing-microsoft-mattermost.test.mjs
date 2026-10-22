import test from 'node:test';
import assert from 'node:assert/strict';
import { extractPricing } from '../lib/pricing/extract.mjs';
import { documentOf } from '../lib/pricing/html.mjs';
import { microsoftPlans } from '../lib/pricing/extract-microsoft.mjs';
import { mattermostPlans } from '../lib/pricing/extract-mattermost.mjs';
const microsoftUrl = 'https://www.microsoft.com/en-us/microsoft-365/business/';
const mattermostUrl = 'https://mattermost.com/pricing/';
const names = ['Microsoft 365 Business Basic', 'Microsoft 365 Business Standard',
  'Microsoft 365 Business Premium', 'Microsoft 365 Apps for business'];
const rates = ['6.00', '12.50', '22.00', '8.25'];
function microsoftFixture() {
  return '<h2>Find the Microsoft 365 plan</h2><div class="sku-cards grid"><div class="d-contents">' + names.map((name, i) =>
    `<div class="sku-card"><div class="sku-title"><h3>${name}</h3></div><div class="sku-card-price">` +
    `<p class="d-none">Originally starting from $${rates[i]} now starting from $${rates[i]}</p>` +
    `<p><span class="oc-msrp-price d-none">$${rates[i]}</span><span class="oc-list-price">$${rates[i]}</span></p>` +
    '<p>user/month, paid yearly (Annual subscription—auto renews)</p></div></div>').join('') + '</div></div>';
}
function mattermostFixture() {
  return '<h1>Mattermost Pricing</h1><div class="pricing-col pricing-col-1"><div class="pricing-top__upper">' +
    '<div class="intro"><h2>Professional</h2></div><div class="pricing-and-cta"><div class="price-wrapper">' +
    '<h3 class="pricing-price">$10</h3><div><span>USD /user /month</span>' +
    '<span class="price-disclaimer toggle-item" data-option="sh">Billed annually</span></div></div></div></div></div>' +
    '<h2>Purchase self-hosted Mattermost Professional licenses</h2><section class="faq"><h3>Order and Invoice</h3>' +
    '<p>Contact sales</p></section>';
}
test('Microsoft business SKU grid yields four single offers with local annual/user binding and unknown dollar currency', () => {
  const result = extractPricing(microsoftFixture(), { originalUrl: microsoftUrl });
  assert.deepEqual(result.plans.map(plan => plan.name), names);
  assert.deepEqual(result.plans.map(plan => plan.offers.map(offer => offer.amount)), rates.map(rate => [rate]));
  for (const plan of result.plans) {
    assert.equal(plan.popular, null);
    assert.equal(plan.offers[0].currency, null);
    assert.equal(plan.offers[0].billingPeriod, 'month');
    assert.equal(plan.offers[0].commitment, 'annual');
    assert.equal(plan.offers[0].unit, 'user');
    assert.equal(plan.offers[0].minimumQuantity, null);
    assert.equal(plan.offers[0].qualifications.promotion, null);
    assert.match(plan.offers[0].source.text, /paid yearly/);
    assert.match(plan.source.locator, /^offset:/);
  }
  assert.equal(result.quality, 'partial');
});
test('Mattermost commercial Professional card yields one annual USD rate and excludes order/invoice FAQ pseudo-plan', () => {
  const result = extractPricing(mattermostFixture(), { originalUrl: mattermostUrl });
  assert.deepEqual(result.plans.map(plan => plan.name), ['Professional']);
  const offer = result.plans[0].offers[0];
  assert.deepEqual([offer.amount, offer.currency, offer.billingPeriod, offer.commitment, offer.unit], ['10', 'USD', 'month', 'annual', 'user']);
  assert.match(offer.source.text, /USD.*Billed annually/);
  assert.equal(offer.minimumQuantity, null);
  assert.equal(result.quality, 'partial');
});

test('Mattermost self-hosted purchase heading may live inside its closed license dialog', () => {
  const html = mattermostFixture().replace('<h2>Purchase self-hosted Mattermost Professional licenses</h2>',
    '<div style="display: none"><h2>Purchase self-hosted Mattermost Professional licenses</h2></div>');
  assert.deepEqual(extractPricing(html, { originalUrl: mattermostUrl }).plans.map(plan => plan.name), ['Professional']);
});

const microsoft = (html = microsoftFixture(), originalUrl = microsoftUrl) => microsoftPlans(documentOf(html), { originalUrl });
const mattermost = (html = mattermostFixture(), originalUrl = mattermostUrl) => mattermostPlans(documentOf(html), { originalUrl });
test('business adapter rejects enterprise, nonprofit, personal and unrelated-host scopes', () => {
  for (const url of ['https://www.microsoft.com/en-us/microsoft-365/enterprise/microsoft365-plans-and-pricing',
    'https://www.microsoft.com/en-us/microsoft-365/enterprise/nonprofit-plans-and-pricing',
    'https://www.microsoft.com/en-us/microsoft-365/personal', 'https://microsoft.com.evil.com/en-us/microsoft-365/business'])
    assert.equal(microsoft(undefined, url), null);
});
test('business adapter requires a complete unique named SKU grid and unambiguous current-price fields', () => {
  for (const html of [microsoftFixture().replace('sku-cards grid', 'cards'),
    microsoftFixture().replace(names[0], names[1]),
    microsoftFixture().replace('<span class="oc-list-price">$6.00</span>', '<span class="oc-list-price" hidden>$6.00</span>'),
    microsoftFixture().replace('<span class="oc-list-price">$6.00</span>', '<span class="oc-list-price">$6.00</span><span class="oc-list-price">$7.00</span>')]) {
    assert.equal(microsoft(html), null);
  }
});
test('business billing is local and must state monthly denominator, yearly payment and annual renewal', () => {
  for (const replacement of ['user/month, paid monthly (Annual subscription—auto renews)',
    'user/year, paid yearly (Annual subscription—auto renews)', 'user/month, paid yearly'])
    assert.equal(microsoft(microsoftFixture().replaceAll('user/month, paid yearly (Annual subscription—auto renews)', replacement)), null);
});
test('business current price can change without treating hidden MSRP or locale as currency/promotion evidence', () => {
  const html = microsoftFixture().replace('<span class="oc-msrp-price d-none">$6.00</span>',
    '<span class="oc-msrp-price d-none">USD 99.00 introductory discount</span>')
    .replace('<span class="oc-list-price">$6.00</span>', '<span class="oc-list-price">$7.25</span>');
  const offer = microsoft(html)[0].offers[0];
  assert.deepEqual([offer.amount, offer.currency, offer.qualifications.promotion], ['7.25', null, null]);
  const explicit = microsoft(microsoftFixture().replace('<span class="oc-list-price">$6.00</span>',
    '<span class="oc-list-price">EUR 7.25</span>'))[0].offers[0];
  assert.deepEqual([explicit.amount, explicit.currency], ['7.25', 'EUR']);
});
test('commercial adapters reject zero rates rather than label a community/free edition as paid', () => {
  assert.equal(microsoft(microsoftFixture().replace('<span class="oc-list-price">$6.00</span>',
    '<span class="oc-list-price">$0.00</span>')), null);
  assert.equal(mattermost(mattermostFixture().replace('>$10<', '>$0<')), null);
});
test('Mattermost adapter requires commercial pricing route, Professional name and price-card structure', () => {
  for (const url of ['https://mattermost.com/', 'https://mattermost.com/team-edition', 'https://mattermost.com.evil.com/pricing'])
    assert.equal(mattermost(undefined, url), null);
  for (const html of [mattermostFixture().replace('<h2>Professional</h2>', '<h2>Team Edition</h2>'),
    mattermostFixture().replace('class="price-wrapper"', 'class="faq-price"'),
    '<h1>Mattermost Pricing</h1><h3>Order and Invoice</h3><p>Contact sales</p>']) assert.equal(mattermost(html), null);
});
test('Mattermost currency, unit, billing and visible price evidence cannot come from another variant', () => {
  for (const html of [mattermostFixture().replace('USD /user /month', '$ /user /month'),
    mattermostFixture().replace('USD /user /month', 'USD /user /year'),
    mattermostFixture().replace('Billed annually', 'Billed monthly'),
    mattermostFixture().replace('data-option="sh"', 'data-option="cloud"'),
    mattermostFixture().replace('class="price-wrapper"', 'class="price-wrapper" hidden'),
    mattermostFixture().replace('<span>USD /user /month</span>', '<span hidden>USD /user /month</span>')]) assert.equal(mattermost(html), null);
});
test('a FAQ lookalike card cannot activate Mattermost pricing and retain only its Order and Invoice heading', () => {
  assert.equal(mattermost(mattermostFixture().replace('<div class="pricing-col pricing-col-1">',
    '<section class="faq"><div class="pricing-col pricing-col-1">').replace('<h2>Purchase self-hosted', '</section><h2>Purchase self-hosted')), null);
});
test('Microsoft hidden descendants cannot supply current amount or currency',()=>{
 const hiddenAmount=microsoftFixture().replace('<span class="oc-list-price">$6.00</span>','<span class="oc-list-price"><span hidden>$6.00</span></span>');
 assert.equal(microsoft(hiddenAmount),null);
 const hiddenCurrency=microsoftFixture().replace('<span class="oc-list-price">$6.00</span>','<span class="oc-list-price"><span hidden>USD</span>6.00</span>');
 assert.equal(microsoft(hiddenCurrency),null);
});
test('Mattermost hidden descendants cannot supply currency or alter visible price',()=>{
 const hiddenCurrency=mattermostFixture().replace('<span>USD /user /month</span>','<span><span hidden>USD</span> /user /month</span>');
 assert.equal(mattermost(hiddenCurrency),null);
 const hiddenDigit=mattermostFixture().replace('class="pricing-price">$10','class="pricing-price">$1<span hidden>0</span>');
 assert.equal(mattermost(hiddenDigit)?.[0].offers[0].amount,'1');
});
