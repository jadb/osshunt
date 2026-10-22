import test from 'node:test';
import assert from 'node:assert/strict';
import {extractPricing} from '../lib/pricing/extract.mjs';
const card=(name,monthly,annual)=>`<div class="pricing-card"><div class="pricing-card-header"><div class="pill">${name}</div><div><div>$<div class="price" data-monthly-price="${monthly}" data-yearly-price="${annual}">${annual}</div>/mo</div><div data-billing_period="true" data-billing-monthly="billed monthly" data-billing-yearly="billed yearly">billed yearly</div></div></div></div>`;
const html=`<main><h1>Our pricing</h1><h2>Site plans</h2><ul id="site-plan-grid-control"><li>${card('Basic','18','14')}</li><li>${card('CMS','29','23')}</li></ul><h2>Ecommerce</h2>${card('Basic','40','30')}<div class="pricing-card"><h3>Workspace Basic</h3><option data-monthly-price="99" data-yearly-price="88">500 seats</option></div></main>`;
const run=value=>extractPricing(value,{originalUrl:'https://webflow.com/pricing'});
test('Webflow general Site rates retain monthly equivalents and both commitments without group mixing',()=>{
 const result=run(html);
 assert.deepEqual(result.plans.map(p=>p.name),['Basic','CMS']);
 assert.deepEqual(result.plans.map(p=>p.offers.map(o=>[o.amount,o.billingPeriod,o.commitment,o.currency,o.unit])),[[['18','month','monthly',null,null],['14','month','annual',null,null]],[['29','month','monthly',null,null],['23','month','annual',null,null]]]);
 assert.ok(result.plans.every(p=>p.offers.every(o=>o.qualifications.billingVariant==='unknown-active-variant')));
 assert.match(result.plans[0].offers[0].source.text,/data-monthly-price="18"/);
 assert.ok(result.issues.some(i=>/Only fixed general Site/.test(i)));
});
test('Webflow recovery requires named Site group, complete attributes and explicit billing labels',()=>{
 for(const value of [html.replaceAll('data-yearly-price="14"','data-yearly-price="ambiguous"'),html.replaceAll('data-billing-monthly="billed monthly"','data-billing-monthly="unknown"')]){
  const result=run(value);assert.ok(!result.plans.find(p=>p.name==='Basic'&&p.offers.some(o=>o.amount==='18'&&o.commitment==='monthly')));
 }
 const alien=extractPricing(html,{originalUrl:'https://elsewhere.example/pricing'});
 assert.ok(!alien.plans.find(p=>p.name==='Basic'&&p.offers.some(o=>o.amount==='18'&&o.commitment==='monthly')));
});
test('Webflow Site footer binds explicit USD, per-site denominator and tax without borrowing other groups',()=>{
 const note='<div id="site-plan-compare"><div>All prices are in USD and charged per site with applicable taxes added at checkout.</div></div>';
 const result=run(html+note);
 assert.ok(result.plans.every(p=>p.offers.every(o=>o.currency==='USD'&&o.unit==='site'&&o.qualifications.tax==='Applicable taxes added at checkout')));
 assert.match(result.plans[0].offers[0].source.text,/All prices are in USD and charged per site/);
 assert.match(result.plans[0].offers[0].source.locator,/\|offset:/);
 const outside=run(html+note.replace('site-plan-compare','ecommerce-plan-compare'));
 assert.ok(outside.plans.every(p=>p.offers.every(o=>o.currency===null&&o.unit===null)));
});
