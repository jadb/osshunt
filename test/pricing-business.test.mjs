import test from 'node:test';
import { extractPricing } from '../lib/pricing/extract.mjs';
import assert from 'node:assert/strict';
import { documentOf } from '../lib/pricing/html.mjs';
import { businessPlans } from '../lib/pricing/extract-business.mjs';
const extract = (html, url) => {
  const issues = [];
  return { plans: businessPlans(documentOf(html), { originalUrl: url, issues, handledTables: new Set() }), issues };
};
const faq = `<div><div><p>How much does Airtable cost?</p></div><div class="hide"><div>Our Free plan is available at no cost. Our Team plan is available for $20/user/month when billed annually. Business is available at $45/user/month when billed annually our Enterprise Scale plan pricing is custom, based on organization needs.</div></div></div>`;
test('Airtable FAQ binds named rates without inventing currency or plan features', () => {
  const r = extract(faq, 'https://airtable.com/pricing');
  assert.deepEqual(
    r.plans.map((p) => p.name),
    ['Free', 'Team', 'Business', 'Enterprise Scale'],
  );
  assert.deepEqual(
    r.plans.map((p) => p.status),
    ['free', 'paid', 'paid', 'quote'],
  );
  assert.deepEqual(
    r.plans.map((p) => p.offers[0].amount),
    ['0', '20', '45', null],
  );
  for (const p of r.plans.slice(1, 3)) {
    const o = p.offers[0];
    assert.equal(o.currency, null);
    assert.equal(o.billingPeriod, 'month');
    assert.equal(o.commitment, 'annual');
    assert.equal(o.unit, 'user');
    assert.equal(o.minimumQuantity, null);
    assert.match(o.source.text, /billed annually/);
  }
  assert.ok(r.plans.every((p) => p.features.length === 0 && p.popular === null));
  assert.ok(r.issues.some((i) => /FAQ pricing only/.test(i)));
  assert.equal(extract(faq, 'https://other.example/pricing').plans.length, 0);
  assert.equal(extract(faq, 'https://airtable.com/other').plans.length, 0);
});
const item = (body) => `<div class="UiPricingGridstyles__Item-sc-fixture">${body}</div>`;
const price = (amount, detail) =>
  `<div class="UiPricingGridstyles__Price-sc-fixture">$ ${amount} <span>USD</span></div><p class="UiPricingGridstyles__PriceDetail-sc-fixture">${detail}</p>`;
const grid = `<div class="UiPricingGridstyles__Grid-sc-fixture">${item('<h2 class="UiPricingGridstyles__Title-sc-fixture">Free</h2>')}${item(price('0', 'Free for up to 10 collaborators per Workspace'))}${item('<h2 class="UiPricingGridstyles__Title-sc-fixture">Standard</h2>')}${item(price('5', 'Per user/month if billed annually ($6 billed monthly)'))}${item('<h3>Everything in Free, plus:</h3><ul><li>Unlimited boards</li></ul>')}${item('<h2 class="UiPricingGridstyles__Title-sc-fixture">Premium</h2>')}${item(price('10', 'Per user/month if billed annually ($12.50 billed monthly)'))}${item('<h2 class="UiPricingGridstyles__Title-sc-fixture">Enterprise</h2>')}${item(price('17.50', 'Per user/month - billed annually ($210.00 annual price per user)'))}${item('<div class="UiPricingGridstyles__UserInputWrapper-sc-fixture">Est. cost for users<input type="number" aria-label="Users" value="50" min="50" max="5000"></div>')}</div>`;
test('Trello flat grid preserves annual and monthly offers and quantity-conditioned enterprise totals', () => {
  const r = extract(grid, 'https://trello.com/pricing');
  assert.deepEqual(
    r.plans.map((p) => p.name),
    ['Free', 'Standard', 'Premium', 'Enterprise'],
  );
  assert.deepEqual(
    r.plans[1].offers.map((o) => o.amount),
    ['5', '6'],
  );
  assert.deepEqual(
    r.plans[2].offers.map((o) => o.amount),
    ['10', '12.50'],
  );
  assert.deepEqual(
    r.plans[1].offers.map((o) => o.commitment),
    ['annual', 'monthly'],
  );
  assert.ok(r.plans[1].offers.every((o) => o.billingPeriod === 'month' && o.unit === 'user' && o.currency === 'USD'));
  assert.deepEqual(
    r.plans[3].offers.map((o) => [o.amount, o.billingPeriod]),
    [
      ['17.50', 'month'],
      ['210.00', 'year'],
    ],
  );
  assert.ok(
    r.plans[3].offers.every(
      (o) =>
        o.commitment === 'annual' &&
        o.minimumQuantity === null &&
        /50 users/.test(o.qualifications.volume) &&
        o.source.locator.includes('|'),
    ),
  );
  assert.equal(r.plans[0].status, 'free');
  assert.equal(r.plans[0].offers[0].unit, null);
  assert.equal(r.plans[1].features[0].value, 'Unlimited boards');
  assert.ok(r.plans.every((p) => p.popular === null));
  assert.equal(extract(grid, 'https://unrelated.example/pricing').plans.length, 0);
});
test('Trello quantity estimates remain unknown when no explicit input value exists', () => {
  const r = extract(grid.replace('value="50"', ''), 'https://trello.com/pricing');
  assert.ok(r.plans[3].offers.every((o) => o.minimumQuantity === null && /unknown/i.test(o.qualifications.volume)));
});

test('public extractor invokes business adapters', () => assert.equal(extractPricing(faq, {originalUrl:'https://airtable.com/pricing'}).plans.length, 4));
