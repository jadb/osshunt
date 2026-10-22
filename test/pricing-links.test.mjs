import test from 'node:test';
import assert from 'node:assert/strict';
import { discoverPricingLinks } from '../lib/pricing/links.mjs';

const options = { landingUrl: 'https://example.com/product/' };
test('resolves base, relative and archive links with evidence', () => {
  const links = discoverPricingLinks(`<base href="https://web.archive.org/web/20200101000000/https://example.com/">
    <a href="plans?region=US#tiers">Plans &amp; pricing</a>
    <a href="/web/20200101000000id_/https://example.com/pricing">Pricing</a>
    <a href="https://evil.test/pricing">Pricing</a>`, options);
  assert.deepEqual(links.map(x => x.url), ['https://example.com/plans?region=US', 'https://example.com/pricing']);
  assert.equal(links[0].label, 'Plans & pricing');
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
