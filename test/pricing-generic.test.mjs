import test from 'node:test';
import assert from 'node:assert/strict';
import { extractPricing } from '../lib/pricing/extract.mjs';
const extract = html => extractPricing(html, { originalUrl: 'https://unseen.example/pricing' });
const grid = cards => `<section><h1>Plans and pricing</h1><div>${cards}</div></section>`;
const structural = (name, price, tail = '') => `<div class="layout-box"><div><h3>${name}</h3></div><div>${price}</div>${tail}</div>`;

test('generic heading groups bind split prices to the correct named tier and preserve quote alternatives', () => {
  const r = extract(grid(structural('Starter', '<p><span>$19</span> /seat/mo</p><p>Billed annually, up to 10 seats</p>', '<a>Try for free</a>') +
    structural('Scale', '<p><span>$99</span> /seat/mo</p><p>Billed annually, 2 seat minimum</p>') +
    structural('Premier', '<p>Contact Us</p>')));
  assert.deepEqual(r.plans.map(p => p.name), ['Starter', 'Scale', 'Premier']);
  assert.deepEqual(r.plans.map(p => p.status), ['paid', 'paid', 'quote']);
  assert.deepEqual(r.plans.slice(0, 2).map(p => [p.offers[0].amount, p.offers[0].billingPeriod, p.offers[0].commitment, p.offers[0].unit]),
    [['19', 'month', 'annual', 'seat'], ['99', 'month', 'annual', 'seat']]);
  assert.equal(r.plans[0].offers[0].currency, null);
  assert.equal(r.plans[0].offers[0].minimumQuantity, null);
  assert.equal(r.plans[1].offers[0].minimumQuantity, 2);
  assert.match(r.plans[0].source.locator, /^offset:/);
  assert.equal(r.diagnostics.classification, 'static_pricing');
});
test('generic cards retain monthly equivalent and annual total as separate observations, not blended amounts', () => {
  const r = extract(grid(structural('Personal', '<div><span>$10</span> /month</div><p>$120 billed annually</p>', '<a>Buy Now</a>') +
    structural('Standard', '<div><span>$25</span> /month per user</div><p>$300 billed annually</p>', '<a>Buy Now</a>')));
  const offers = r.plans[1].offers;
  assert.deepEqual(offers.map(o => [o.amount, o.billingPeriod, o.commitment]), [['25', 'month', 'annual'], ['300', 'year', 'annual']]);
  assert.equal(offers[0].unit, 'user');
  assert.ok(offers.every(o => o.currency === null));
});
test('generic semantic card classes retain repeated billing variants without guessing active state or ISO currency', () => {
  const card = (value, basis) => `<div class="pricing__card"><div class="pricing__card-icon-wrap"><div>Pro</div></div>` +
    `<div class="pricing__card-price-wrap"><div><span>${value}</span> USD per user</div><p>${basis}</p></div><a>Buy Now</a></div>`;
  const r = extract(grid(`<div data-w-tab="Monthly">${card('$16.99', 'Billed Monthly')}</div>` +
    `<div data-w-tab="Yearly">${card('$8.33', 'Billed Annually')}</div>`));
  assert.equal(r.plans.length, 2);
  assert.deepEqual(r.plans.map(p => p.offers[0].amount), ['16.99', '8.33']);
  assert.ok(r.plans.every(p => p.offers[0].currency === 'USD' && p.offers[0].unit === 'user'));
  assert.deepEqual(r.plans.map(p => p.offers[0].commitment), ['monthly', 'annual']);
  assert.ok(r.plans.every(p => p.offers[0].qualifications.billingVariant === 'unknown-active-variant'));
  assert.ok(r.issues.some(i => /Repeated plan names/.test(i)));
});
test('named paid placeholders remain unknown amounts while an explicit Free tier stays distinct from free CTAs', () => {
  const r = extract(grid(structural('Free', '<p>0 /month</p>', '<a>Get started</a>') +
    structural('Pro', '<p>... /month</p><p>Billed as .../year</p>', '<a>Get started</a>') +
    structural('Teams', '<p>... /month per seat</p>', '<a>Start for free</a>')));
  assert.deepEqual(r.plans.map(p => p.name), ['Free', 'Pro', 'Teams']);
  assert.equal(r.plans[0].status, 'free');
  assert.ok(r.plans.slice(1).every(p => p.status === 'unknown' && p.offers.every(o => o.amount === null)));
  assert.equal(r.diagnostics.classification, 'partial_pricing');
});
test('generic quote builder retains named base and optional modules without inventing zero prices', () => {
  const html = `<section class="pricing-plan-builder"><h2>Tailored plans</h2><p>Contact us to request a quote.</p>` +
    `<div><button class="pricing-plan-builder-card"><div class="title">Foundations</div><p>Our base package includes unlimited cards.</p><ul><li>Approvals</li></ul></button></div>` +
    `<div><h3>Add-ons</h3><button class="pricing-plan-builder-card"><div class="title">Procurement</div><p>Optional module</p></button></div>` +
    `<a>Request a free quote</a></section>`;
  const r = extract(html);
  assert.deepEqual(r.plans.map(p => [p.name, p.kind, p.status]), [['Foundations', 'plan', 'quote'], ['Procurement', 'addon', 'quote']]);
  assert.ok(r.plans.every(p => p.offers.every(o => o.amount === null)));
  assert.equal(r.diagnostics.classification, 'quote_only');
});
test('named nested JSON-LD offers stay distinct from aggregate metadata and whole-product unnamed offers', () => {
  const json = { '@type': 'Product', name: 'Meeting Tool', offers: { '@type': 'AggregateOffer', lowPrice: 0, highPrice: 39,
    offers: [{ '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' }, { '@type': 'Offer', name: 'Pro', price: '18', priceCurrency: 'USD' }] } };
  const r = extract(`<script type="application/ld+json">${JSON.stringify(json)}</script>`);
  assert.deepEqual(r.plans.map(p => p.name), ['Free', 'Pro']);
  assert.equal(r.diagnostics.classification, 'embedded_pricing');
  assert.ok(r.plans.every(p => p.offers[0].billingPeriod === 'unknown' && p.offers[0].unit === null));
  for (const type of ['Product', 'SoftwareApplication']) {
    const metadata = extract(`<script type="application/ld+json">{"@type":"${type}","name":"Whole Tool","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}</script>`);
    assert.deepEqual(metadata.plans, []);
  }
});
test('partial comparison table retains named tiers even when amount and billing data are placeholders', () => {
  const r = extract('<table><caption>Plans and pricing</caption><tr><th>Plan</th><th>Pro</th><th>Team</th></tr>' +
    '<tr><th>Price</th><td>... /month</td><td>Contact sales</td></tr><tr><th>Projects</th><td>10</td><td>Unlimited</td></tr></table>');
  assert.deepEqual(r.plans.map(p => p.name), ['Pro', 'Team']);
  assert.equal(r.plans[0].offers[0].amount, null);
  assert.equal(r.plans[1].status, 'quote');
});
test('generic fallback excludes metric, funding, testimonial, free-webinar and feature-only controls', () => {
  for (const html of ['<section><h2>Funding</h2><p>USD 100 million</p><h2>Revenue</h2><p>USD 50 million</p></section>',
    '<h1>Pricing</h1><section><h2>Case study</h2><p>Save $99 per month</p><h2>Free webinar</h2><p>Register for free</p></section>',
    '<h1>Subscription management</h1><section><h2>Business</h2><p>Manage subscriptions paid monthly or annually.</p><a>Request demo</a></section>']) {
    assert.deepEqual(extract(html).plans, []);
  }
  const shell = extract('<h1>Uh-oh...</h1><p>You need a JavaScript-enabled browser to use this website</p><div id="app"></div>');
  assert.equal(shell.diagnostics.classification, 'client_rendered_unavailable');
});
test('pricing-page customer support sections do not become quote-only pricing tiers', () => {
  const r = extract('<main>' + grid(structural('Business', '<p>$39/mo</p>', '<a>Buy Now</a>') +
    structural('Light', '<p>$17/mo</p>', '<a>Buy Now</a>')) +
    '<section><h2>We are here for you</h2><div><h3>Get answers</h3><p>Read the FAQ</p></div>' +
    '<div><h3>Contact us</h3><p>Contact us</p></div><div><h3>Hire a pro</h3><a>Find an expert</a></div></section></main>');
  assert.deepEqual(r.plans.map(p => p.name), ['Business', 'Light']);
});
test('quote builder nested categories keep optional modules distinct from the included base', () => {
  const r = extract('<section class="pricing-plan-builder"><h2>Tailored plans</h2><p>Contact us to request a quote.</p>' +
    '<div class="pricing-plan-builder__category"><button class="pricing-plan-builder-card"><div class="title">Foundations</div><p>Base package</p></button></div>' +
    '<div class="pricing-plan-builder__category"><p>Add-ons</p><button class="pricing-plan-builder-card"><div class="title">Procurement</div><p>Optional controls</p></button></div></section>');
  assert.deepEqual(r.plans.map(p => [p.name, p.kind, p.status]), [['Foundations', 'plan', 'quote'], ['Procurement', 'addon', 'quote']]);
});
test('additional-feature relations identify an add-on without assigning its price to the base plan', () => {
  const r = extract('<section><h2>Plans at an affordable price</h2><p>Back up for $99 per year, and add our Enterprise Control feature for an additional $24 per year per computer.</p>' +
    '<div><div class="pricingcardv3"><h3>Business Backup</h3><p>$99 /year</p><a>Contact Sales</a></div>' +
    '<div class="pricingcardv3"><h3>Enterprise Control</h3><p>Let\'s talk</p><a>Contact Enterprise Sales</a></div></div></section>');
  assert.deepEqual(r.plans.map(p => [p.name, p.kind, p.status]), [['Business Backup', 'plan', 'paid'], ['Enterprise Control', 'addon', 'quote']]);
  assert.equal(r.plans[0].offers[0].amount, '99');
  assert.ok(r.plans[1].offers.every(o => o.amount === null));
});
test('generic output bounds report truncation and stay below the checkpoint evidence budget', () => {
  const r = extract(grid(Array.from({ length: 40 }, (_, i) => structural('Tier ' + i,
    '<p>USD 19/month</p>', '<ul>' + Array.from({length:40}, (_, j) => '<li>Feature ' + j + ' with retained details '.repeat(5) + '</li>').join('') + '</ul>')).join('')));
  assert.ok(r.plans.length <= 32);
  assert.ok(r.plans.every(p => p.offers.length <= 16 && p.features.length <= 64));
  assert.ok(JSON.stringify(r).length < 128000);
  assert.ok(r.issues.some(i => /truncat|limit|budget/i.test(i)));
});
test('generic plan popularity requires an exact visible positive badge in the same group', () => {
  const r = extract(grid(structural('Scale', '<b>Most Popular</b><p>USD 99/seat/month</p>') +
    structural('Starter', '<span hidden>Most Popular</span><p>USD 19/seat/month</p>') +
    structural('Team', '<span style="display:none">Recommended</span><p>USD 29/seat/month</p>') +
    structural('Custom', '<p>Not recommended for small businesses.</p><p>USD 49/month</p>')));
  assert.deepEqual(r.plans.map(p => [p.name, p.popular]), [['Scale', true], ['Starter', null], ['Team', null], ['Custom', null]]);
});
test('time-limited free prices are qualified trials with unknown renewal prices, never permanent free plans', () => {
  for (const className of ['pricing__card', 'plan-card']) {
    const r = extract(`<section><h1>Pricing</h1><div class="${className}"><h2>Starter</h2><p>Free for 14 days</p><a>Start trial</a></div></section>`);
    assert.equal(r.plans[0].status, 'trial');
    assert.equal(r.plans[0].offers[0].amount, '0');
    assert.equal(r.plans[0].offers[0].billingPeriod, 'unknown');
    assert.match(r.plans[0].offers[0].qualifications.promotion, /Free for 14 days/);
    assert.ok(r.plans[0].offers.every(o => o.amount === '0' && o.qualifications.promotion));
  }
  const forever = extract('<div class="plan-card"><h2>Free</h2><p>Free forever</p></div>');
  assert.equal(forever.plans[0].status, 'free');
});
test('hidden ancillary commitment and seat terms cannot qualify an active offer', () => {
  for (const marker of ['hidden', 'aria-hidden="true"', 'style="display:none"']) {
    for (const className of ['pricing__card', 'plan-card']) {
      const r = extract(`<section><h1>Pricing</h1><div class="${className}"><h2>Pro</h2><p>USD 10/month</p>` +
        `<div ${marker}><span>Billed annually. 2 seat minimum.</span></div><a>Buy now</a></div></section>`);
      assert.equal(r.plans[0].offers[0].commitment, 'unknown');
      assert.equal(r.plans[0].offers[0].minimumQuantity, null);
    }
  }
  const r = extract(grid(structural('Pro', '<p>USD 10/month</p><p>Billed annually. Minimum 2 seats.</p>')));
  assert.equal(r.plans[0].offers[0].commitment, 'annual');
  assert.equal(r.plans[0].offers[0].minimumQuantity, 2);
});
test('inert script and style roots cannot become price offers after visibility filtering', () => {
  for (const tag of ['script', 'style', 'template']) {
    const r = extract(`<div class="plan-card"><h2>Pro</h2><${tag} class="price">USD 99/month</${tag}></div>`);
    assert.deepEqual(r.plans, []);
  }
});
test('split-markup negation cannot turn a recommendation word into a positive badge', () => {
  for (const className of ['pricing__card', 'plan-card']) {
    for (const badge of ['Recommended', 'Most Popular']) {
      const r = extract(`<section><h1>Pricing</h1><div class="${className}"><h2>Pro</h2>` +
        `<p>Not <span><b>${badge}</b></span></p><p>USD 19/month</p></div></section>`);
      assert.equal(r.plans[0].popular, null);
    }
  }
});
