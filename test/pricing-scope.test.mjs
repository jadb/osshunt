import test from 'node:test';
import assert from 'node:assert/strict';
import { productPricingPaths, pricingTargetInScope } from '../lib/pricing/scope.mjs';
test('shared vendor paths keep products and localized pricing distinct', () => {
  const teams = { id: 'microsoft-teams', url: 'https://www.microsoft.com/microsoft-teams', pricingHints: [
    'https://www.microsoft.com/en-US/microsoft-teams/compare-microsoft-teams-business-options',
    'https://www.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-plans-and-pricing' ] };
  teams.productPaths = productPricingPaths(teams);
  assert.equal(pricingTargetInScope(teams, teams.pricingHints[0]), true);
  assert.equal(pricingTargetInScope(teams, teams.pricingHints[1]), false);
  const jira = { id: 'jira', url: 'https://www.atlassian.com/software/jira' };
  jira.productPaths = productPricingPaths(jira);
  assert.equal(pricingTargetInScope(jira, 'https://www.atlassian.com/software/confluence/pricing'), false);
  assert.equal(pricingTargetInScope(jira, 'https://www.atlassian.com/software/jira/pricing'), true);
});
test('file-like Adobe landing identifies its product directory and leaves dedicated roots unrestricted', () => {
  const adobe = { id: 'photoshop', url: 'https://www.adobe.com/products/photoshop.html' };
  adobe.productPaths = productPricingPaths(adobe);
  assert.deepEqual(adobe.productPaths, ['/products/photoshop']);
  assert.equal(pricingTargetInScope(adobe, 'https://www.adobe.com/products/photoshop/plans.html'), true);
  assert.equal(pricingTargetInScope(adobe, 'https://www.adobe.com/products/illustrator/pricing'), false);
  const zulip = { id: 'zulip', url: 'https://zulip.com/' };
  assert.deepEqual(productPricingPaths(zulip), []);
  assert.equal(pricingTargetInScope(zulip, 'https://zulip.com/plans/'), true);
  assert.equal(pricingTargetInScope(zulip, 'https://evil.com/plans/'), false);
});
