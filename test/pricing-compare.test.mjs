import test from 'node:test';
import assert from 'node:assert/strict';
import { comparePricingHistory } from '../lib/pricing/compare.mjs';
const offer = (amount = '12') => ({ amount, currency: 'USD', billingPeriod: 'month', commitment: 'monthly',
  unit: 'user', minimumQuantity: null, qualifications: { region: null, locale: null, tax: null,
    promotion: null, startingAt: null, range: null, volume: null, billingVariant: null } });
const row = (id, amount) => ({ id, productId: 'sample', reviewState: 'confirmed', quality: 'complete',
  scope: { edition: null, deployment: 'hosted' }, pricingCapturedAt: `2020-${id === 'a' ? '01' : '07'}-01T00:00:00Z`,
  plans: [{ name: 'Pro', kind: 'plan', status: 'paid', offers: [offer(amount)], features: [{ name: 'Storage', value: '10GB' }] }] });
test('compares like-for-like exact decimals and feature limits', () => {
  const a = row('a', '12'), b = row('b', '15'); b.plans[0].features[0].value = '20GB';
  const pair = comparePricingHistory([b, a])[0];
  assert.equal(pair.status, 'comparable');
  assert.deepEqual(pair.changes.map(value => value.type), ['amount', 'feature']);
  assert.equal(pair.changes[0].before, '12');
  b.plans[0].offers[0].amount = '12.00';
  assert.equal(comparePricingHistory([a, b])[0].changes.some(value => value.type === 'amount'), false);
});
test('does not call billing, currency or promotion differences a price change', () => {
  for (const patch of [{ currency: 'EUR' }, { currency: null }, { commitment: 'annual' },
    { qualifications: { ...offer().qualifications, promotion: 'First year' } }]) {
    const b = row('b', '6'); Object.assign(b.plans[0].offers[0], patch);
    const pair = comparePricingHistory([row('a', '12'), b])[0];
    assert.equal(pair.status, 'incompatible_basis');
    assert.equal(pair.changes.some(value => value.type === 'amount'), false);
  }
});
test('renames require explicit identities and incomplete extraction never proves removals', () => {
  const a = row('a', '12'), b = row('b', '15'); b.plans[0].name = 'Business';
  assert.deepEqual(comparePricingHistory([a, b])[0].changes.map(value => value.type), ['plan_removed', 'plan_added']);
  a.planIdentities = { Pro: 'core' }; b.planIdentities = { Business: 'core' };
  assert.deepEqual(comparePricingHistory([a, b])[0].changes.map(value => value.type), ['plan_renamed', 'amount']);
  b.quality = 'partial'; b.plans = [];
  const pair = comparePricingHistory([a, b])[0];
  assert.equal(pair.status, 'incomplete'); assert.deepEqual(pair.changes, []);
});
