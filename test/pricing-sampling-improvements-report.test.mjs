import test from 'node:test';
import assert from 'node:assert/strict';
import { summarizePricingSamples } from '../scripts/summarize-pricing-samples.mjs';
test('report separates landing structures, classifications and bounded rejected navigation from publication', () => {
  const result = summarizePricingSamples({ version: 1, requests: [], products: [{ id: 'sample', done: true,
    status: 'review_pending', discoveryRejections: [{ url: 'https://other.example.com/pricing', label: 'Pricing',
      locator: 'offset:1-10', provenance: 'archived-link', reason: 'unapproved_host', secret: 'PRIVATE' }],
    discoveryRejectionSummary: { total: 2, retained: 1, omitted: 1 },
    landingExtraction: { status: 'review_pending', rawPlanCount: 1, rawOfferCount: 1, omittedPlans: 0,
      extracted: { diagnostics: { classification: 'partial_pricing', rawHtml: 'PRIVATE' }, plans: [{ name: 'Pro',
        offers: [{ literal: 'USD 9', amount: '9', currency: 'USD', source: { locator: 'offset:50-90', text: 'PRIVATE' } }] }] } },
    candidateResults: [] }] });
  assert.equal(result.report.summary.rawLandingFragments, 1);
  assert.equal(result.report.summary.rawLandingOffers, 1);
  assert.equal(result.report.summary.productsWithNonemptyFragments, 1);
  assert.equal(result.report.summary.rawProposals, 0);
  assert.deepEqual(result.report.summary.extractionClassifications, { partial_pricing: 1 });
  assert.equal(result.report.summary.discoveryRejections, 2);
  assert.equal(result.report.summary.omittedDiscoveryRejections, 1);
  assert.equal(result.report.products[0].landingExtraction.rawPlans, 1);
  assert.equal(result.report.products[0].discoveryRejections[0].reason, 'unapproved_host');
  assert.doesNotMatch(JSON.stringify(result), /PRIVATE/);
});
