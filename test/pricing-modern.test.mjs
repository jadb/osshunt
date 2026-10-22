import test from 'node:test';
import assert from 'node:assert/strict';
import { documentOf } from '../lib/pricing/html.mjs';
import { modernPlans } from '../lib/pricing/extract-modern.mjs';

const extract = (html, originalUrl) => {
  const issues = [];
  return { plans: modernPlans(documentOf(html), { originalUrl, issues, handledTables: new Set() }), issues };
};
const figmaCard = (name, details, prices, features = '') => `<div><div><h3>${name}</h3>${details}</div>
  <div>${prices.map(([seat, amount]) => `<div><div><button>${seat} seat</button></div>
    <div><p><span class="price">$${amount}</span>/mo</p></div></div>`).join('')}</div>
  ${features && `<div><p>Key features:</p><ul><li>${features}</li></ul></div>`}</div>`;
const figma = `<p>Prices in USD</p><section>
  <div><h3>Starter</h3><p>Free</p><div><p>Key features:</p><ul><li>Unlimited drafts</li></ul></div></div>
  ${figmaCard('Professional', '<button role="switch" aria-label="Show annual billing prices" aria-checked="true">Monthly Annual</button>', [['Collab', '3'], ['Dev', '12'], ['Full', '16']], 'Unlimited files and projects')}
  ${figmaCard('Organization', '<p>Billed annually</p>', [['Collab', '5'], ['Dev', '25'], ['Full', '55']])}
  ${figmaCard('Enterprise', '<p>Billed annually</p>', [['Collab', '5'], ['Dev', '35'], ['Full', '90']])}
</section><aside>Content seat available later for $8/$10</aside>`;

test('Figma static seat offers preserve tier, explicit USD, monthly rate and annual commitment', () => {
  const r = extract(figma, 'https://www.figma.com/pricing/');
  assert.deepEqual(r.plans.map(p => p.name), ['Starter', 'Professional', 'Organization', 'Enterprise']);
  assert.equal(r.plans[0].status, 'free');
  assert.equal(r.plans[0].offers[0].amount, '0');
  assert.deepEqual(r.plans[1].offers.map(o => [o.amount, o.unit]), [['3', 'Collab seat'], ['12', 'Dev seat'], ['16', 'Full seat']]);
  assert.deepEqual(r.plans[2].offers.map(o => o.amount), ['5', '25', '55']);
  assert.deepEqual(r.plans[3].offers.map(o => o.amount), ['5', '35', '90']);
  assert.ok(r.plans.slice(1).flatMap(p => p.offers).every(o => o.currency === 'USD' && o.billingPeriod === 'month' && o.commitment === 'annual'));
  const offer = r.plans[1].offers[0];
  assert.match(offer.source.text, /Prices in USD/);
  assert.match(offer.source.text, /Collab seat/);
  assert.match(offer.source.locator, /offset:/);
  assert.match(offer.source.text, /aria-checked="true"/);
  assert.equal(r.plans[1].features[0].value, 'Unlimited files and projects');
});

test('Figma missing currency and indeterminate billing switch stay unknown; hidden offers qualified', () => {
  const html = figma.replace('<p>Prices in USD</p>', '').replace('aria-checked="true"', 'aria-checked="mixed"')
    .replace('<span class="price">$3</span>', '<span hidden class="price">$3</span>');
  const r = extract(html, 'https://figma.com/pricing/');
  assert.equal(r.plans[1].offers[0].currency, null);
  assert.equal(r.plans[1].offers[0].commitment, 'unknown');
  assert.equal(r.plans[1].offers[0].qualifications.billingVariant, 'unknown-active-variant');
  assert.ok(r.issues.some(i => /billing.*unknown/i.test(i)));
});

test('Figma hidden billing controls and currency notes cannot establish active offer terms', () => {
  for (const hide of ['hidden', 'aria-hidden="true"', 'style="display:none"']) {
    const html = figma.replace('<p>Prices in USD</p>', `<p ${hide}>Prices in USD</p>`)
      .replace('<button role="switch"', `<button ${hide} role="switch"`)
      .replaceAll('<p>Billed annually</p>', `<div ${hide}><p>Billed annually</p></div>`);
    const { plans } = extract(html, 'https://figma.com/pricing/');
    assert.ok(plans.slice(1).flatMap(p => p.offers).every(o => o.currency === null && o.commitment === 'unknown'));
  }
});

const asanaPart = (key, name, price, basis, alternative, feature) => `<div class="${key}"><h3 id="header-${key}">${name}<div aria-hidden="true">+</div></h3></div>
  <div class="${key}"><div data-cy="${name}-price">${price}</div><p>${basis}</p>${alternative && `<p>${alternative}</p>`}</div>
  <div class="${key}"><h4>Features</h4><ul><li>${feature}</li></ul></div>`;
const split = amount => [...`$${amount}`.split(/(\d+|\.)/)].filter(Boolean).map(x => `<span>${x}</span>`).join('');
const asana = `<section><div>
  ${asanaPart('basic', 'Personal', split('0'), '<span>Free forever</span>', '', 'Unlimited tasks')}
  ${asanaPart('premium', 'Starter', split('10.99'), '<span>Per user, per month</span><span>billed annually</span>', `${split('13.49')} billed monthly`, 'Unlimited automations')}
  ${asanaPart('business', 'Advanced', split('24.99'), '<span>Per user, per month</span><span>billed annually</span>', `${split('30.49')} billed monthly`, 'Unlimited portfolios')}
  ${asanaPart('enterprise', 'Enterprise', '<span></span>', '<span>Contact sales for pricing</span>', '', 'SAML')}
  </div><div><div><h5>Enterprise+</h5><h4>Everything in Enterprise, plus:</h4></div>
  <div><p>Flexible controls</p><a>Contact sales</a><div class="ezpug005"><div class="ezpug004"><p class="ezpug003">Audit log API</p></div></div></div></div></section>
  <aside>Unrelated testimonial: saved $10000.</aside>`;

test('Asana split decimal tokens retain annual and monthly commitments without currency inference', () => {
  const r = extract(asana, 'https://asana.com/pricing');
  assert.deepEqual(r.plans.map(p => p.name), ['Personal', 'Starter', 'Advanced', 'Enterprise', 'Enterprise+']);
  assert.equal(r.plans[0].status, 'free');
  assert.deepEqual(r.plans[1].offers.map(o => [o.amount, o.commitment]), [['10.99', 'annual'], ['13.49', 'monthly']]);
  assert.deepEqual(r.plans[2].offers.map(o => o.amount), ['24.99', '30.49']);
  assert.ok(r.plans[1].offers.every(o => o.currency === null && o.billingPeriod === 'month' && o.unit === 'user'));
  assert.match(r.plans[1].offers[0].source.text, /Per user, per month/);
  assert.match(r.plans[1].offers[1].source.text, /billed monthly/);
  assert.equal(r.plans[1].features[0].value, 'Unlimited automations');
  assert.match(r.plans[1].source.text, /Starter/);
  assert.deepEqual(r.plans.slice(3).map(p => p.status), ['quote', 'quote']);
  assert.ok(r.plans.slice(3).every(p => p.offers[0].amount === null));
  assert.equal(r.plans[4].features[0].value, 'Audit log API');
});

test('Asana hidden prices stay qualified and unknown templates or unrelated pages stay unavailable', () => {
  const r = extract(asana.replace('data-cy="Starter-price"', 'hidden data-cy="Starter-price"'), 'https://asana.com/pricing');
  assert.equal(r.plans[1].offers[0].qualifications.billingVariant, 'unknown-active-variant');
  for (const url of ['https://unrelated.example/pricing', 'https://asana.com/plan/starter', 'https://figma.com/design/'])
    assert.deepEqual(extract(asana + figma, url).plans, []);
  assert.deepEqual(extract('<h1>Pricing</h1><div id="app"></div>', 'https://asana.com/pricing').plans, []);
});

test('Asana hidden basis text cannot establish visible price billing or unit', () => {
  const html = asana.replace('<p><span>Per user, per month</span>', '<p aria-hidden="true"><span>Per user, per month</span>');
  const { plans } = extract(html, 'https://asana.com/pricing');
  const primary = plans[1].offers[0];
  assert.equal(primary.commitment, 'unknown');
  assert.equal(primary.billingPeriod, 'unknown');
  assert.equal(primary.unit, null);
  assert.equal(plans[1].offers[1].unit, null);
});

test('hidden nested term labels do not establish currency, commitment or a free tier', () => {
  const figmaHtml = figma.replace('Prices in USD', 'Prices in <span hidden>USD</span>')
    .replaceAll('Billed annually', '<span aria-hidden="true">Billed annually</span>');
  const f = extract(figmaHtml, 'https://figma.com/pricing');
  assert.equal(f.plans[2].offers[0].commitment, 'unknown');
  assert.equal(f.plans[2].offers[0].currency, null);
  const a = extract(asana.replace('<span>Free forever</span>', '<span hidden>Free forever</span>'), 'https://asana.com/pricing');
  assert.equal(a.plans[0].status, 'unknown');
});
