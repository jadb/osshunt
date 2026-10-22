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
test('malformed structured specifications stay unavailable instead of throwing', () => {
  const r = extractPricing('<script type="application/ld+json">{"@type":"Offer","name":"Pro","priceSpecification":[null,"not a specification",{"price":"9","priceCurrency":"USD"}]}</script>');
  assert.equal(r.plans[0].offers.length, 1);
  assert.equal(r.plans[0].offers[0].amount, '9');
  assert.ok(r.issues.some(i => /invalid.*specification/i.test(i)));
});
test('offer-local monthly and hidden annual commitments never contaminate each other', () => {
  const r = extractPricing('<section class="plan-card"><h2>Pro</h2><p class="price monthly">USD 15/month billed monthly</p><p hidden class="price annual">USD 120/year billed annually</p></section>');
  assert.deepEqual(r.plans[0].offers.map(o => o.commitment), ['monthly', 'annual']);
  assert.doesNotMatch(r.plans[0].offers[0].source.text, /billed annually/);
});
test('negated free wording cannot become a zero or a free plan', () => {
  const r = extractPricing('<section class="plan-card"><h2>Enterprise</h2><p class="price">Not free. Contact sales.</p></section>');
  assert.equal(r.plans[0].status, 'quote'); assert.equal(r.plans[0].offers[0].amount, null);
  assert.ok(r.issues.some(i => /negat/i.test(i)));
});
test('structured numeric prices preserve integer and fractional source tokens exactly', async t => {
  for (const token of ['9007199254740993', '0.123456789012345678901', '12.50']) {
    await t.test(token, () => {
      const html = `<script type="application/ld+json">{"@type":"Offer","name":"Pro","price":${token},"priceCurrency":"USD"}</script>`;
      const r = extractPricing(html), o = r.plans[0].offers[0];
      assert.equal(o.amount, token); assert.ok(o.literal.includes(token)); assert.ok(o.source.text.includes(token));
      assert.ok(r.plans[0].source.text.includes(token));
    });
  }
});
test('popularity requires a positive standalone badge rather than negated prose', () => {
  for (const prose of ['Not recommended for businesses.', 'Our recommended configuration uses 4 GB RAM.', 'The most popular feature is search.']) {
    const r = extractPricing(`<section class="plan-card"><h2>Starter</h2><p class="price">USD 5/month</p><p>${prose}</p></section>`);
    assert.equal(r.plans[0].popular, null);
  }
});
test('sole hidden offer and wholly hidden card keep active state unknown', () => {
  for (const html of ['<div class="plan-card"><h2>Pro</h2><div hidden><span class="price">USD 12/month</span></div></div>',
    '<div hidden class="plan-card"><h2>Pro</h2><span class="price">USD 12/month</span></div>']) {
    const r = extractPricing(html);
    assert.equal(r.plans[0].offers[0].qualifications.billingVariant, 'unknown-active-variant');
    assert.ok(r.issues.some(i => /variant/i.test(i)));
  }
});
test('runtime without JSON source contexts rejects numeric normalization and retains raw evidence', () => {
  const originalParse = JSON.parse;
  JSON.parse = function (value, reviver) {
    return originalParse(value, typeof reviver === 'function' ? function (key, parsed) { return reviver.call(this, key, parsed); } : reviver);
  };
  try {
    const token = '0.123456789012345678901';
    const r = extractPricing(`<script type="application/ld+json">{"@type":"Offer","name":"Pro","price":${token},"priceCurrency":"USD"}</script>`);
    assert.equal(r.plans[0].offers[0].amount, null);
    assert.ok(r.plans[0].offers[0].source.text.includes(token));
    assert.ok(r.issues.some(i => /numeric token/i.test(i)));
  } finally { JSON.parse = originalParse; }
});
test('structured evidence preserves significant whitespace and never rounds a fractional minimum into seats', () => {
  const raw = '{"@type":"Offer","name":"Pro  Plus","price":"9","priceCurrency":"USD","eligibleQuantity":{"minValue":5.00000000000000001}}';
  const r = extractPricing(`<script type="application/ld+json">${raw}</script>`);
  assert.equal(r.plans[0].name, 'Pro  Plus');
  assert.equal(r.plans[0].offers[0].minimumQuantity, null);
  assert.equal(r.plans[0].source.text, raw);
});

test('fractional structured minimum quantity cannot silently round to an integer', () => {
  const r = extractPricing('<script type="application/ld+json">{"@type":"Offer","name":"Pro","price":"9","priceCurrency":"USD","eligibleQuantity":{"minValue":5.00000000000000001}}</script>');
  assert.equal(r.plans[0].offers[0].minimumQuantity, null);
});
test('legacy Dropbox row cards retain named plans, capacity and price evidence without upgrade numbers', () => {
  const html = `<div id="plans-container">
    <table><tr><td class="plan-image"><span class="db_badge_content">5GB</span></td>
      <td class="plan-description"><h5>Starter</h5></td><td class="plan-pricing"><p><b>Free</b></p></td></tr></table>
    <table><tr><td class="plan-image"><span class="db_badge_content">50GB</span></td>
      <td class="plan-description"><h5>Studio 50</h5></td><td class="plan-pricing"><p><b>$7.25</b>/month</p>
        <p><a href="/upgrade?plan=50">Upgrade to Studio 50</a></p></td></tr></table>
    <table><tr><td class="plan-image"><span class="db_badge_content">100GB</span></td>
      <td class="plan-description"><h5>Studio 100</h5></td><td class="plan-pricing"><p><b>$16.50</b>/month</p></td></tr></table>
  </div>`;
  const r = extractPricing(html, { originalUrl: 'http://www.dropbox.com/pricing' });
  assert.deepEqual(r.plans.map(p => p.name), ['Starter', 'Studio 50', 'Studio 100']);
  assert.deepEqual(r.plans.map(p => p.status), ['free', 'paid', 'paid']);
  assert.deepEqual(r.plans.map(p => p.offers[0].amount), ['0', '7.25', '16.50']);
  assert.deepEqual(r.plans.map(p => p.features[0].value), ['5GB', '50GB', '100GB']);
  assert.equal(r.plans[1].offers[0].currency, null);
  assert.equal(r.plans[1].offers[0].billingPeriod, 'month');
  assert.equal(r.plans[1].offers[0].commitment, 'unknown');
  assert.doesNotMatch(r.plans[1].offers[0].source.text, /Upgrade/);
  assert.ok(r.plans.every(p => p.popular === null));
  assert.equal(r.quality, 'partial');
  assert.equal(extractPricing(html, { originalUrl: 'https://unrelated.example/pricing' }).plans.length, 0);
});
test('legacy Zoom split tables retain participant offers, host quantities and literal feature markers', () => {
  const html = `<table id="plans_header"><tr><th>Participants join free</th>
    <th><div class="title">Basic</div></th><th><div class="title">Pro</div><div class="desc">Up to 7 hosts</div></th>
    <th><div class="title">Business</div><div class="desc">12 or more hosts</div></th><th><div class="title">Enterprise</div></th></tr></table>
    <table id="plans"><tr><td>40 participants<a>More participants?</a></td><td>Free</td>
    <td><div class="plan-price"><div class="price">$13.25</div><div class="per">/mo/host</div></div></td>
    <td><div class="plan-price"><div class="price">$18.50</div><div class="per">/mo/host</div></div></td><td>Contact Sales</td></tr>
    <tr style="display:none"><td>80 participants</td><td></td>
    <td><div class="plan-price"><div class="price">$43.25</div><div class="per">/mo/host</div></div></td>
    <td><div class="plan-price"><div class="price">$48.50</div><div class="per">/mo/host</div></div></td><td>Contact Sales</td></tr>
    <tr><td>Group meeting duration</td><td>35 minutes</td><td>Unlimited</td><td>Unlimited</td><td>Unlimited</td></tr>
    <tr><td>SSO</td><td></td><td></td><td><span class="checked"></span></td><td><span class="checked"></span></td></tr>
    <tr class="footnote"><td colspan="5">An add-on subscription purchase is required.</td></tr></table>`;
  const r = extractPricing(html, { originalUrl: 'http://zoom.us/pricing' });
  assert.deepEqual(r.plans.map(p => p.name), ['Basic', 'Pro', 'Business', 'Enterprise']);
  assert.deepEqual(r.plans[1].offers.map(o => o.amount), ['13.25', '43.25']);
  assert.ok(r.plans[1].offers.every(o => o.unit === 'host' && o.billingPeriod === 'month' && o.commitment === 'unknown' && o.currency === null));
  assert.equal(r.plans[2].offers[0].minimumQuantity, 12);
  assert.match(r.plans[2].offers[0].source.text, /12 or more hosts/);
  assert.match(r.plans[1].offers[0].qualifications.volume, /40 participants.*Up to 7 hosts/);
  assert.match(r.plans[1].offers[1].qualifications.volume, /80 participants/);
  assert.equal(r.plans[1].offers[1].qualifications.billingVariant, 'unknown-active-variant');
  assert.equal(r.plans[0].features.find(f => f.name === 'Group meeting duration').value, '35 minutes');
  assert.equal(r.plans[2].features.find(f => f.name === 'SSO').value, 'marker: checked');
  assert.equal(r.plans[1].features.find(f => f.name === 'SSO'), undefined);
  assert.equal(r.plans[3].status, 'quote'); assert.equal(r.plans[3].offers[0].amount, null);
  assert.ok(!r.issues.some(i => /Complex comparison table/.test(i)));
  assert.equal(extractPricing(html, { originalUrl: 'https://unrelated.example/pricing' }).plans.length, 0);
});
const notionControls = (
  selection = 'year',
  currency = 'USD',
) => `<header class="_country__priceControlsExperimental__fixture"><fieldset>
  <input type="radio" name="billingInterval" id="month" value="month" ${selection === 'month' ? 'checked=""' : ''}><label for="month">Pay monthly</label>
  <input type="radio" name="billingInterval" id="year" value="year" ${selection === 'year' ? 'checked=""' : ''}><label for="year">Pay yearly</label>
  </fieldset><div>Price in <span>${currency}</span></div></header>`;
const notionCard = (name, price, extra = '') =>
  `<section class="PricingPlanCardNew_pricingPlanCard__fixture"><header class="PricingPlanCardNew_header__fixture"><span class="PricingPlanCardNew_heading__fixture">${name}</span></header><div class="PricingPlanCardNew_pricingWrap__fixture">${price}</div>${extra}</section>`;
test('Notion static cards retain selected annual monthly-equivalent rates, currency control and exact evidence', () => {
  const html =
    notionControls() +
    notionCard('Free', '$0 per member / month') +
    notionCard('Plus', '$10 per member / month') +
    notionCard(
      'Business <span class="PricingPlanCardNew_badge__fixture">Recommended</span>',
      '$20 per member / month',
      '<div class="PlanFeaturesNew_planFeatureItem__fixture">Audit trail</div>',
    ) +
    notionCard('Enterprise', 'Custom pricing');
  const r = extractPricing(html, { originalUrl: 'https://www.notion.com/pricing' });
  assert.deepEqual(
    r.plans.map((p) => p.name),
    ['Free', 'Plus', 'Business', 'Enterprise'],
  );
  assert.deepEqual(
    r.plans.map((p) => p.status),
    ['free', 'paid', 'paid', 'quote'],
  );
  assert.deepEqual(
    r.plans.map((p) => p.offers[0].amount),
    ['0', '10', '20', null],
  );
  assert.equal(r.plans[2].popular, true);
  assert.equal(r.plans[1].popular, null);
  for (const p of r.plans.slice(0, 3)) {
    const o = p.offers[0];
    assert.equal(o.billingPeriod, 'month');
    assert.equal(o.commitment, p.name === 'Free' ? 'unknown' : 'annual');
    assert.equal(o.unit, 'member');
    assert.equal(o.currency, 'USD');
    assert.equal(o.minimumQuantity, null);
    assert.equal(o.qualifications.billingVariant, null);
    assert.match(o.source.text, /Price in USD/);
    if (p.name === 'Free') assert.doesNotMatch(o.source.text, /Pay yearly/);
    else assert.match(o.source.text, /Pay yearly/);
    assert.match(o.source.locator, /\|/);
  }
  assert.equal(r.plans[3].offers[0].currency, null);
  assert.equal(r.plans[3].offers[0].commitment, 'unknown');
  assert.equal(r.plans[2].features[0].value, 'Audit trail');
  assert.ok(r.plans[2].features[0].source.locator.startsWith('offset:'));
  assert.ok(!r.issues.some((i) => i.includes('Unknown currency')));
  assert.equal(extractPricing(html, { originalUrl: 'https://other.example/pricing' }).plans.length, 0);
  assert.equal(extractPricing(html, { originalUrl: 'https://www.notion.com/product/projects' }).plans.length, 0);
});
test('Notion adapter preserves unknown control state, hidden variants and monthly commitments', () => {
  const card = notionCard('Plus', '$10 per member / month');
  const monthly = extractPricing(notionControls('month') + card, { originalUrl: 'https://www.notion.so/pricing' });
  assert.equal(monthly.plans[0].offers[0].commitment, 'monthly');
  const unknown = extractPricing(card, { originalUrl: 'https://www.notion.com/pricing' });
  assert.equal(unknown.plans[0].offers[0].currency, null);
  assert.equal(unknown.plans[0].offers[0].commitment, 'unknown');
  const variants =
    notionControls() +
    notionCard(
      'Plus',
      '$10 per member / month',
      '<div hidden class="PricingPlanCardNew_pricingWrap__fixture">$12 per member / month</div>',
    );
  const r = extractPricing(variants, { originalUrl: 'https://www.notion.com/pricing' });
  assert.deepEqual(
    r.plans[0].offers.map((o) => o.amount),
    ['10', '12'],
  );
  assert.ok(
    r.plans[0].offers.every(
      (o) => o.commitment === 'unknown' && o.qualifications.billingVariant === 'unknown-active-variant',
    ),
  );
  assert.ok(r.issues.some((i) => /variant/i.test(i)));
});
test('Notion hidden billing controls and labels cannot establish a paid commitment', () => {
  const controls = notionControls();
  const variants = [
    controls.replace('id="year"', 'hidden id="year"'),
    controls.replace(/(<input[^>]*id="year"[^>]*>)/, '<div aria-hidden="true">$1</div>'),
    controls.replace('<label for="year">', '<label hidden for="year">'),
    controls.replace(
      '<label for="year">Pay yearly</label>',
      '<div style="display:none"><label for="year">Pay yearly</label></div>',
    ),
    controls.replace('Pay yearly</label>', '<span aria-hidden="true">Pay yearly</span></label>'),
  ];
  for (const html of variants) {
    const r = extractPricing(html + notionCard('Plus', '$10 per member / month'), {
      originalUrl: 'https://www.notion.com/pricing',
    });
    assert.equal(r.plans[0].offers[0].amount, '10');
    assert.equal(r.plans[0].offers[0].commitment, 'unknown');
    assert.equal(r.plans[0].offers[0].currency, 'USD');
  }
});
test('Notion hidden currency descendants and their ancestors cannot resolve a dollar symbol', () => {
  for (const replacement of [
    '<span hidden>USD</span>',
    '<span aria-hidden="true">USD</span>',
    '<div style="display:none"><span>USD</span></div>',
  ]) {
    const html =
      notionControls().replace('<span>USD</span>', replacement) + notionCard('Plus', '$10 per member / month');
    const r = extractPricing(html, { originalUrl: 'https://www.notion.com/pricing' });
    assert.equal(r.plans[0].offers[0].currency, null);
    assert.equal(r.plans[0].offers[0].commitment, 'annual');
    assert.ok(r.issues.some((issue) => issue.includes('Unknown currency')));
  }
});
