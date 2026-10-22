import test from 'node:test';
import assert from 'node:assert/strict';
import { z } from 'zod';
import { pricingObservation, validatePricingObservations } from '../lib/pricing/schema.mjs';

import { observation } from './fixtures/pricing-observation.mjs';

test('pricing collection preserves exact decimals and rejects unsupported facts', () => {
  const item = observation();
  assert.equal(pricingObservation(z).parse(item).plans[0].offers[0].amount, '12');
  assert.throws(() => pricingObservation(z).parse({ ...item, inventedField: true }));
  const broken = structuredClone(item); broken.plans[0].offers[0].amount = 12;
  assert.throws(() => pricingObservation(z).parse(broken));
});
test('pricing collection permits empty coverage but rejects unknown products, proposals and duplicate IDs', () => {
  assert.deepEqual(validatePricingObservations([], [{ id: 'sample' }]), []);
  assert.throws(() => validatePricingObservations([observation()], [{ id: 'other' }]));
  assert.throws(() => validatePricingObservations([observation(), observation()], [{ id: 'sample' }]));
  assert.throws(() => validatePricingObservations([{ ...observation(), reviewState: 'proposed' }], [{ id: 'sample' }]));
});
test('pricing evidence requires exact replay identity and dates', () => {
  for (const patch of [
    { pricingArchiveUrl: 'https://evil.example/web/20200101000000/https://sample.example.com/pricing' },
    { pricingArchiveUrl: 'https://web.archive.org/web/20200102000000id_/https://sample.example.com/pricing' },
    { evidenceAvailableAt: '2019-12-31T00:00:00.000Z' },
    { pricingCapturedAt: '2020-01-02T00:00:00.000Z' },
  ]) assert.throws(() => validatePricingObservations([{ ...observation(), ...patch }], [{ id: 'sample' }]));
});
test('pricing collection enforces lookup windows and actual semiannual capture spacing', () => {
  assert.throws(() => validatePricingObservations([{ ...observation(), anchorAt: '2020-04-01T00:00:00.000Z' }], [{ id: 'sample' }]));
  const second = observation('sample-20200102');
  for (const key of ['anchorAt', 'landingCapturedAt', 'pricingCapturedAt', 'evidenceAvailableAt']) second[key] = '2020-01-02T00:00:00.000Z';
  second.landingArchiveUrl = second.landingArchiveUrl.replace('20200101000000', '20200102000000');
  second.pricingArchiveUrl = second.pricingArchiveUrl.replace('20200101000000', '20200102000000');
  assert.throws(() => validatePricingObservations([observation(), second], [{ id: 'sample' }]));
  assert.throws(() => validatePricingObservations([{ ...observation(), aliasEvidenceAt: ['2020-02-01T00:00:00.000Z'],
    evidenceAvailableAt: '2020-02-01T00:00:00.000Z' }], [{ id: 'sample' }]));
});
test('pricing collection rejects private targets and unsupported historical-link claims', () => {
  const item = observation(); item.pricingUrl = 'http://127.0.0.1/pricing';
  item.pricingArchiveUrl = 'https://web.archive.org/web/20200101000000id_/http://127.0.0.1/pricing';
  assert.throws(() => validatePricingObservations([item], [{ id: 'sample' }]));
  const unsupported = observation(); delete unsupported.discovery;
  assert.throws(() => validatePricingObservations([unsupported], [{ id: 'sample' }]));
});
test('confirmation rejects identity collisions and replay credentials', () => {
  const item = observation(); item.plans.push({ ...structuredClone(item.plans[0]), name: 'Business', order: 1 });
  item.planIdentities = { Pro: 'core', Business: 'core' };
  assert.throws(() => validatePricingObservations([item], [{ id: 'sample' }]));
  const credentials = observation(); credentials.pricingArchiveUrl = credentials.pricingArchiveUrl.replace('https://', 'https://login:password@');
  assert.throws(() => validatePricingObservations([credentials], [{ id: 'sample' }]));
});
test('published historical pricing cannot cross product paths on the same vendor host', () => {
  const item = observation(); item.landingUrl = 'https://www.atlassian.com/software/jira';
  item.pricingUrl = 'https://www.atlassian.com/software/jira/pricing';
  const replay = url => `https://web.archive.org/web/20200101000000id_/${url}`;
  item.landingArchiveUrl = replay(item.landingUrl); item.pricingArchiveUrl = replay(item.pricingUrl);
  const catalog = [{ id: 'sample', url: item.landingUrl, productPaths: ['/software/jira'] }];
  assert.equal(validatePricingObservations([item], catalog).length, 1);
  item.pricingUrl = 'https://www.atlassian.com/software/confluence/pricing'; item.pricingArchiveUrl = replay(item.pricingUrl);
  assert.throws(() => validatePricingObservations([item], catalog));
});
