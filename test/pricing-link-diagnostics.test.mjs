import test from 'node:test';
import assert from 'node:assert/strict';
import { discoverPricingLinks } from '../lib/pricing/links.mjs';

const meetUrl = 'https://workspace.google.com/products/meet/';
const meetPricing = 'https://workspace.google.com/intl/de/pricing.html?source=globalnav-de';
const docusignUrl = 'https://www.docusign.com/products/electronic-signature';
const docusignPricing = 'https://ecom.docusign.com/plans-and-pricing/esignature';

test('retains the blocked German Meet pricing anchor without widening product scope', () => {
  const rejections = [];
  const html = `<a href="${meetPricing}">Preise</a>`;
  assert.deepEqual(discoverPricingLinks(html, {
    landingUrl: meetUrl, productPaths: ['/products/meet'], rejections,
  }), []);
  assert.deepEqual(rejections, [{
    url: meetPricing, label: 'Preise', locator: `offset:0-${html.length}`,
    provenance: 'archived-link', reason: 'outside_product_path',
  }]);
});

test('retains Docusign pricing on an unapproved commerce host without following it', () => {
  const rejections = [];
  const html = `<a href="${docusignPricing}">Plans &amp; Pricing</a>`;
  assert.deepEqual(discoverPricingLinks(html, {
    landingUrl: docusignUrl, productPaths: ['/products/electronic-signature'], rejections,
  }), []);
  assert.deepEqual(rejections, [{
    url: docusignPricing, label: 'Plans & Pricing', locator: `offset:0-${html.length}`,
    provenance: 'archived-link', reason: 'unapproved_host',
  }]);
});

test('diagnostics preserve exact archived queries, hints and deterministic unique source identities', () => {
  const rejections = [];
  const other = 'https://billing.other-company.com/pricing?billing=annual&region=DE';
  const html = `<a href="${other}">Pricing</a><a href="${other}">Pricing again</a>` +
    `<a href="${meetPricing}">Preise</a><a href="/products/meet/plans">Plans</a>`;
  const options = { landingUrl: meetUrl, productPaths: ['/products/meet'], hints: [other], rejections };
  const accepted = discoverPricingLinks(html, options);
  assert.deepEqual(accepted, discoverPricingLinks(html, { ...options, rejections: undefined }));
  assert.deepEqual(accepted.map(link => link.url), ['https://workspace.google.com/products/meet/plans']);
  assert.deepEqual(rejections.map(({ url, provenance, reason }) => ({ url, provenance, reason })), [
    { url: other, provenance: 'archived-link', reason: 'unapproved_host' },
    { url: meetPricing, provenance: 'archived-link', reason: 'outside_product_path' },
    { url: other, provenance: 'current-source-hint', reason: 'unapproved_host' },
  ]);
  assert.equal(rejections[2].locator, 'hint:0');
});

test('unsafe identifiers and unrelated navigation are excluded from rejection diagnostics', () => {
  const rejections = [];
  const unsafe = ['https://private:secret@other-company.com/pricing', 'https://127.0.0.1/pricing',
    'https://192.168.1.1/pricing', 'https://localhost/pricing', 'https://private.internal/pricing',
    'https://internal.local/pricing', 'https://server.localhost/pricing', 'https://[::1]/pricing',
    'https://other-company.com:8443/pricing', 'javascript:privateSecret()', 'file:///private/pricing'];
  const html = unsafe.map(url => `<a href="${url}">Pricing</a>`).join('') +
    '<a href="https://other-company.com/about">About</a>' +
    '<a href="https://other-company.com/templates/marketing-plan">Marketing Plan</a>';
  discoverPricingLinks(html, { landingUrl: 'https://vendor-company.com/', hints: unsafe, rejections });
  assert.deepEqual(rejections, []);
});

test('records shared repository path rejection and preserves approved hints as separate evidence', () => {
  const rejections = [];
  const options = { landingUrl: 'https://github.com/vendor/project', productPaths: ['/vendor/project'],
    hints: ['https://github.com/pricing'], rejections };
  const links = discoverPricingLinks('<a href="https://github.com/pricing">Pricing</a>', options);
  assert.equal(links[0].provenance, 'current-source-hint');
  assert.equal(rejections[0]?.reason, 'outside_product_path');
  assert.equal(rejections[0]?.provenance, 'archived-link');
});

test('bounds diagnostics at one hundred unique safe source identities and reports omissions', () => {
  const rejections = [], rejectionSummary = {};
  const html = Array.from({ length: 105 }, (_, i) =>
    `<a href="https://other-company.com/pricing?variant=${i}">Pricing ${i}</a>`).join('') +
    '<a href="https://other-company.com/pricing?variant=104">Repeated</a>';
  discoverPricingLinks(html, { landingUrl: 'https://vendor-company.com/', rejections, rejectionSummary });
  assert.equal(rejections.length, 100);
  assert.deepEqual(rejectionSummary, { total: 105, retained: 100, omitted: 5 });
  assert.equal(rejections[0].url, 'https://other-company.com/pricing?variant=0');
  assert.equal(rejections[99].url, 'https://other-company.com/pricing?variant=99');
  const repeated = [], repeatedSummary = {};
  discoverPricingLinks(html, { landingUrl: 'https://vendor-company.com/', rejections: repeated,
    rejectionSummary: repeatedSummary });
  assert.deepEqual(repeated, rejections);
  assert.deepEqual(repeatedSummary, rejectionSummary);
});

test('unsafe rejected identifiers do not enter counters or long diagnostic labels', () => {
  const rejections = [], rejectionSummary = {};
  const label = 'Pricing ' + 'x'.repeat(5000);
  discoverPricingLinks(`<a href="https://private:secret@other-company.com/pricing">Private</a>` +
    `<a href="https://private.internal/pricing">Pricing</a>` +
    `<a href="https://other-company.com/pricing">${label}</a>`, {
      landingUrl: 'https://vendor-company.com/', rejections, rejectionSummary,
    });
  assert.equal(rejections.length, 1);
  assert.equal(rejections[0].label.length, 4000);
  assert.deepEqual(rejectionSummary, { total: 1, retained: 1, omitted: 0 });
  assert.doesNotMatch(JSON.stringify({ rejections, rejectionSummary }), /private|secret|internal/);
});
