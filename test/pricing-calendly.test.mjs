import test from 'node:test';
import assert from 'node:assert/strict';
import { extractPricing } from '../lib/pricing/extract.mjs';
const html = `<div data-testid="pricing-toggle"><div role="button" aria-pressed="true" aria-label="Billed yearly"></div></div>
<div data-testid="pricing-plan-card"><h5>Free</h5><div class="plan-card__price-wrapper"><h3>Always free</h3></div><ul><li>1 event type</li></ul></div>
<div data-testid="pricing-plan-card"><h5>Standard</h5><div class="plan-card__price-wrapper"><h3>$10</h3><span>/seat/mo</span></div></div>
<div data-testid="pricing-plan-card"><h5>Teams</h5><p>Recommended plan</p><div class="plan-card__price-wrapper"><h3>$16</h3><span>/seat/mo</span></div><p><b>Security add-on</b></p><ul><li>Single Sign-On</li></ul></div>
<div data-testid="pricing-plan-card"><h5>Enterprise</h5><div class="plan-card__price-wrapper">Custom Pricing Starts at <h3>$15k</h3><span>/yr</span></div></div>`;
test('Calendly archive cards preserve annual basis, seats, shorthand and starting price', () => {
 const result=extractPricing(html,{originalUrl:'https://calendly.com/pricing'});
 assert.deepEqual(result.plans.map(p=>p.name),['Free','Standard','Teams','Enterprise']);
 const [free,standard,teams,enterprise]=result.plans;
 assert.equal(free.status,'free');assert.equal(free.offers[0].amount,'0');
 assert.equal(standard.offers[0].amount,'10');assert.equal(standard.offers[0].unit,'seat');
 assert.equal(standard.offers[0].billingPeriod,'month');assert.equal(standard.offers[0].commitment,'annual');
 assert.equal(standard.offers[0].currency,null);assert.match(standard.offers[0].source.locator,/offset:.*offset:/);
 assert.equal(teams.popular,true);assert.equal(teams.features[0].value,'Single Sign-On; Security add-on');assert.equal(enterprise.offers[0].amount,'15000');
 assert.equal(enterprise.offers[0].billingPeriod,'year');assert.equal(enterprise.offers[0].qualifications.startingAt,true);
 assert.equal(enterprise.offers[0].unit,null);assert.equal(result.quality,'partial');
});
test('Calendly billing state and host scope require affirmative evidence', () => {
 const result=extractPricing(html.replace('aria-pressed="true"','aria-pressed="false"'),{originalUrl:'https://calendly.com/pricing'});
 assert.equal(result.plans[1].offers[0].commitment,'unknown');
 assert.equal(extractPricing(html,{originalUrl:'https://other.example/pricing'}).plans.length,0);
 assert.equal(extractPricing(html,{originalUrl:'https://calendly.com/product'}).plans.length,0);
});
