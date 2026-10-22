import test from 'node:test';
import assert from 'node:assert/strict';
import { discoverPricingLinks } from '../lib/pricing/links.mjs';

const options = { landingUrl: 'https://example.com/product/' };
test('resolves base, relative and archive links with evidence', () => {
  const links = discoverPricingLinks(`<base href="https://web.archive.org/web/20200101000000/https://example.com/">
    <a href="plans?region=US#tiers">Plans &amp; pricing</a>
    <a href="/web/20200101000000id_/https://example.com/pricing">Pricing</a>
    <a href="https://evil.test/pricing">Pricing</a>`, options);
  assert.deepEqual(links.map(x => x.url).sort(), ['https://example.com/plans?region=US', 'https://example.com/pricing']);
  assert.equal(links.find(x => x.url.includes('/plans')).label, 'Plans & pricing');
  assert.match(links[0].locator, /offset:/);
  assert.equal(links[0].provenance, 'archived-link');
});
test('rejects unsafe targets, bases and unapproved vendor hosts', () => {
  const links = discoverPricingLinks(`<base href="https://evil.test/"><a href="/pricing">Plans</a>
    <a href="javascript:alert(1)">Pricing</a><a href="http://127.0.0.1/pricing">Pricing</a>
    <a href="https://billing.example.net/plans">Plans</a>`, options);
  assert.deepEqual(links.map(x => x.url), ['https://example.com/pricing']);
  assert.equal(discoverPricingLinks('<a href="https://billing.example.net/plans">Plans</a>',
    { ...options, allowedHosts: ['billing.example.net'] }).length, 1);
});
test('shared hosts require product path and reject host-global pricing', () => {
  const html = '<a href="/pricing">Pricing</a><a href="/team/proj/pricing">Plans</a><a href="/other/pricing">Plans</a>';
  assert.deepEqual(discoverPricingLinks(html, { landingUrl: 'https://github.com/team/proj' }).map(x => x.url), []);
  assert.deepEqual(discoverPricingLinks(html, { landingUrl: 'https://github.com/team/proj',
    productPaths: ['/team/proj'] }).map(x => x.url), ['https://github.com/team/proj/pricing']);
});
test('product paths reject another vendor product; hints remain separate evidence', () => {
  const links = discoverPricingLinks('<a href="/products/other/pricing">Pricing</a>', {
    landingUrl: 'https://vendor.test/products/tool/', productPaths: ['/products/tool'],
    hints: ['https://vendor.test/products/tool/plans', 'https://evil.test/pricing'] });
  assert.deepEqual(links, [{ url: 'https://vendor.test/products/tool/plans', label: 'Current pricing source',
    locator: 'hint:0', provenance: 'current-source-hint' }]);
});
test('deduplicates URLs and excludes footer links without pricing evidence', () => {
  assert.equal(discoverPricingLinks('<a href="/about">About</a><a href="/pricing">Pricing</a><a href="/pricing#top">Plans</a>', options).length, 1);
});
test('ranks explicit pricing before generic plan comparison navigation', () => {
  const links = discoverPricingLinks('<a href="/compare">Compare</a><a href="/plans">Plans</a><a href="/pricing">Pricing</a>', options);
  assert.deepEqual(links.map(l => l.url), ['https://example.com/pricing', 'https://example.com/plans', 'https://example.com/compare']);
});
test('vendor product scopes never yield global or other-product archived links; catalog hints are labelled', () => {
  const html = '<a href="/products/confluence/pricing">Pricing</a><a href="/pricing">Pricing</a><a href="/products/jira/plans">Plans</a>';
  const links = discoverPricingLinks(html, { landingUrl: 'https://www.atlassian.com/software/jira',
    productPaths: ['/products/jira', '/software/jira'], hints: ['https://www.atlassian.com/pricing'] });
  assert.deepEqual(links.map(l => [l.url, l.provenance]), [['https://www.atlassian.com/products/jira/plans', 'archived-link'],
    ['https://www.atlassian.com/pricing', 'current-source-hint']]);
});
test('unpriced plans and competitor comparison topics cannot consume the pricing candidate budget', () => {
  const links = discoverPricingLinks('<a href="/templates/marketing-plan">Try it out</a>' +
    '<a href="/company/policies-and-guidelines/accessibility-plan/">Accessibility Plan</a>' +
    '<a href="/compare/password-manager">Comparison</a>', {
      landingUrl: 'https://vendor.com/', hints: ['https://vendor.com/pricing'] });
  assert.deepEqual(links.map(l => [l.url, l.provenance]), [['https://vendor.com/pricing', 'current-source-hint']]);
});
test('explicit rates, subscriptions, plan navigation and genuine plan comparisons stay eligible', () => {
  const links = discoverPricingLinks('<a href="/pricing/xam">View plans</a><a href="/price">Price</a>' +
    '<a href="/subscriptions">Subscriptions</a><a href="/account-options">Plans</a>' +
    '<a href="/plans">Learn more</a><a href="/plan/starter">Learn more</a>' +
    '<a href="/compare-plan-options">Compare plans</a>', { landingUrl: 'https://vendor.com/' });
  assert.equal(links.length, 7);
  assert.ok(links.every(l => l.provenance === 'archived-link' && l.locator.startsWith('offset:')));
});
test('an ambiguous top-level comparison navigation ranks below a known pricing source hint', () => {
  const links = discoverPricingLinks('<a href="/compare">Compare</a>', { landingUrl: 'https://vendor.com/',
    hints: ['https://vendor.com/pricing'] });
  assert.deepEqual(links.map(l => [l.url, l.provenance]), [['https://vendor.com/pricing', 'current-source-hint'],
    ['https://vendor.com/compare', 'archived-link']]);
});

test('free and premium plan navigation retains the scoped HubSpot sales price source', () => {
  const links = discoverPricingLinks('<a href="//www.hubspot.com/products/marketing">Free and premium plans</a>' +
    '<a href="//www.hubspot.com/products/sales">Free and premium plans</a>', {
      landingUrl: 'https://www.hubspot.com/products/sales', productPaths: ['/products/sales'] });
  assert.deepEqual(links.map(l => [l.url, l.label, l.provenance]), [
    ['https://www.hubspot.com/products/sales', 'Free and premium plans', 'archived-link']]);
});
test('explicit business pricing comparison stays ahead of later enterprise and nonprofit navigation', () => {
  const business = 'https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products?&activetab=tab:primaryr2';
  const enterprise = 'https://www.microsoft.com/en-us/microsoft-365/enterprise/microsoft365-plans-and-pricing';
  const nonprofit = 'https://www.microsoft.com/en-us/microsoft-365/enterprise/nonprofit-plans-and-pricing';
  const links = discoverPricingLinks(`<a href="${business}">Pricing for business</a>` +
    `<a href="${enterprise}">Pricing for enterprise</a><a href="${nonprofit}">For Nonprofits</a>` +
    '<a href="https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products">Plans and pricing</a>', {
      landingUrl: 'https://www.microsoft.com/en-us/microsoft-365/business',
      productPaths: ['/en-us/microsoft-365/business', '/en-us/microsoft-365/enterprise'] });
  assert.deepEqual(links.slice(0, 2).map(l => l.url), [business, enterprise]);
  assert.equal(links[0].label, 'Pricing for business');
});
test('exact archived query variants remain separate while a query-free pricing anchor gets budget priority', () => {
  const query = 'https://workspace.google.com/pricing.html?source=gafb-alpha_%5Bbasename%5D_6803441-globalnav-en';
  const plain = 'https://workspace.google.com/pricing.html';
  const links = discoverPricingLinks(`<a href="${query}#add-ons-sold-separately">Add-ons</a>` +
    `<a href="${query}">Pricing</a><a href="#pricing">Plans &amp; pricing</a>` +
    `<a href="${plain}">Compare pricing plans</a>`, { landingUrl: 'https://workspace.google.com/' });
  assert.deepEqual(links.slice(0, 2).map(l => l.url), ['https://workspace.google.com/', plain]);
  assert.deepEqual(links.map(l => l.url).sort(), ['https://workspace.google.com/', plain, query].sort());
  const retained = links.find(l => l.url === query);
  assert.equal(retained.label, 'Pricing');
  assert.match(retained.locator, /^offset:/);
  assert.equal(retained.provenance, 'archived-link');
});

test('billing and regional query variants keep their exact independent source identities', () => {
  const urls = ['https://vendor.com/pricing?billing=annual&region=CA',
    'https://vendor.com/pricing?billing=monthly&region=US'];
  const html = urls.map(url => `<a href="${url}">Pricing</a>`).join('');
  const separate = discoverPricingLinks(html, { landingUrl: 'https://vendor.com/' });
  assert.deepEqual(separate.map(l => l.url), urls);
  const withPlain = discoverPricingLinks(html + '<a href="/pricing">Pricing</a>', {
    landingUrl: 'https://vendor.com/' });
  assert.deepEqual(withPlain.map(l => l.url), [...urls, 'https://vendor.com/pricing']);
  assert.ok(withPlain.every(l => l.provenance === 'archived-link'));
  const hintOnly = discoverPricingLinks(html, { landingUrl: 'https://vendor.com/',
    hints: ['https://vendor.com/pricing'] });
  assert.deepEqual(hintOnly.map(l => l.url), [...urls, 'https://vendor.com/pricing']);
});

test('file-like approved product root retains its exact pricing-section link without sibling leakage', () => {
  const links = discoverPricingLinks('<a href="#pricing">Plans and pricing</a>' +
    '<a href="/acrobat/pricing.html">Pricing</a><a href="/photoshop.html">Pricing</a>' +
    '<a href="/acrobat-pro.html">Pricing</a><a href="/acrobat.html/other">Pricing</a>', {
      landingUrl: 'https://www.adobe.com/acrobat.html', productPaths: ['/acrobat'] });
  assert.deepEqual(links.map(l => l.url), ['https://www.adobe.com/acrobat.html',
    'https://www.adobe.com/acrobat/pricing.html']);
  assert.ok(links.every(l => l.provenance === 'archived-link' && l.locator.startsWith('offset:')));
});
