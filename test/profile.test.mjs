import test from 'node:test';
import assert from 'node:assert/strict';
import { z } from 'zod';
import { productProfile } from '../lib/profile-schema.mjs';
import { renderProfile } from '../lib/render-profile.mjs';
import { validateProfileCoverage } from '../lib/validate.mjs';
import { applyOverrides } from '../lib/loaders.mjs';

const sources = ['https://example.org/docs'];

test('coverage cannot hide profiles removed or reassigned by overrides', () => {
  const products = [{ id: 'sample', profile: { id: 'sample' } }, { id: 'pending' }];
  const completed = new Set(['sample']);
  assert.doesNotThrow(() => validateProfileCoverage(products, completed));
  assert.throws(() => validateProfileCoverage(applyOverrides(products, { sample: { profile: null } }), completed), /reviewed source coverage/);
  assert.throws(() => validateProfileCoverage(applyOverrides(products, {
    sample: { profile: null }, pending: { profile: { id: 'pending' } },
  }), completed), /reviewed source coverage/);
});

const fixture = () => ({
  id: 'sample', checkedAt: '2026-10-21',
  organization: { name: 'Sample project', kind: 'community', foundedYear: 2020,
    ageBasis: 'project-started', yearsActive: 6, yearsInBusiness: null, ownership: 'community',
    parent: null, stockSymbols: [], funding: 'not-applicable', investors: [], notes: 'Community project, not an incorporated business.', sources },
  pricingTiers: ['entry', 'popular', 'business', 'enterprise'].map(role => ({
    role, name: role === 'entry' ? 'Community' : null, status: role === 'entry' ? 'free' : 'not-offered',
    monthlyPrice: role === 'entry' ? 0 : null, annualPrice: null, oneTimePrice: null,
    currency: 'USD', unit: 'installation', minimumQuantity: null, scope: 'community edition',
    notes: 'Free community software; no matching commercial tier in reviewed scope.', sources,
  })),
  moats: [{ claim: 'Extensible document model can accumulate workflow integrations.', basis: 'assessment', sources }],
  productReasons: ['Search document text.', 'Organize document metadata.', 'Automate document routing.'].map(claim => ({ claim, basis: 'assessment', sources })),
  alternativeDetails: {
    sponsorship: { status: 'none-found', organizations: [], notes: 'No corporate sponsor on reviewed supporters page.', sources },
    selfHosting: { mode: 'server', requirements: [
      { component: 'SQLite', necessity: 'one-of', group: 'database', condition: 'Default local database', notes: 'Embedded.', sources },
      { component: 'PostgreSQL', necessity: 'one-of', group: 'database', condition: 'External database option', notes: 'Alternative to SQLite.', sources },
      { component: 'OCR worker', necessity: 'optional', group: null, condition: 'Text extraction from scans', notes: 'Not needed for existing text.', sources },
    ], resources: { cpu: null, memory: null, storage: null, os: 'Linux', notes: 'Hardware minimum not established.', sources }, notes: 'Pick one database.', sources },
    oneClickInstall: { status: 'offered', options: [{ name: 'Shell installer', url: sources[0], kind: 'one-command',
      officialStatus: 'first-party', notes: 'Command-line convenience, not a browser click.', sources }], notes: 'Manual Compose excluded.', sources },
  },
});

test('profiles retain alternatives, optional components, unknown prices and installer distinctions', () => {
  const profile = productProfile(z).parse(fixture());
  const text = renderProfile({ id: 'sample', name: 'Sample', url: sources[0], profile });
  assert.match(text, /PostgreSQL \| one-of \| database/);
  assert.match(text, /OCR worker \| optional/);
  assert.match(text, /\*\*one-command\*\*/);
  assert.match(text, /Verified one-click\/marketplace option: \*\*no\*\*/);
  assert.match(text, /not one-click deployment/);
  assert.match(text, /years in business: not established\/applicable/);
  assert.match(text, /business \| unknown \| not-offered \| — \| —/);
});

test('usage prices retain their denominator without becoming monthly or yearly subscriptions', () => {
  const input = fixture();
  Object.assign(input.pricingTiers[0], { status: 'published', monthlyPrice: null, usagePrice: 0.25, unit: 'GB transferred' });
  const profile = productProfile(z).parse(input);
  assert.equal(profile.pricingTiers[0].monthlyPrice, null);
  assert.equal(profile.pricingTiers[0].annualPrice, null);
  assert.match(renderProfile({ name: 'Sample', url: sources[0], profile }), /entry \| Community \| published \| — \| — \| — \| USD 0.25\/GB transferred/);
  Object.assign(input.pricingTiers[2], { status: 'published', annualPrice: 120, usagePrice: 0.04, unit: 'user', usageUnit: 'AI credit' });
  const mixed = productProfile(z).parse(input);
  assert.match(renderProfile({ name: 'Sample', url: sources[0], profile: mixed }), /business \| unknown \| published \| — \| USD 120\/user \| — \| USD 0.04\/AI credit/);
});

test('quoted subscription can retain an independently published metered rate', () => {
  const input = fixture();
  Object.assign(input.pricingTiers[3], {
    status: 'quote', name: 'Enterprise', usagePrice: 0.035,
    unit: 'user', usageUnit: 'AI credit',
    notes: 'Published add-on usage rate; subscription price requires sales quotation.',
  });
  const tier = productProfile(z).parse(input).pricingTiers[3];
  assert.equal(tier.monthlyPrice, null);
  assert.equal(tier.annualPrice, null);
  assert.equal(tier.oneTimePrice, null);
  assert.equal(tier.usagePrice, 0.035);
});

for (const [name, mutate, expected] of [
  ['duplicate pricing roles', p => p.pricingTiers[1].role = 'entry', /distinct pricing roles/],
  ['invented quote amount', p => Object.assign(p.pricingTiers[3], { status: 'quote', monthlyPrice: 99 }), /cannot have numeric/],
  ['paid free plan', p => p.pricingTiers[0].monthlyPrice = 3, /zero-valued/],
  ['ambiguous database alternatives', p => p.alternativeDetails.selfHosting.requirements[0].group = null, /alternative group/],
  ['unsubstantiated corporate sponsorship', p => p.alternativeDetails.sponsorship.status = 'identified', /needs a corporate/],
  ['bootstrap with equity investors', p => Object.assign(p.organization, { funding: 'bootstrapped', investors: [{ name: 'Fund', source: sources[0] }] }), /conflicts/],
  ['future incorporation', p => p.organization.foundedYear = 2027, /cannot follow/],
  ['invented installer offering', p => p.alternativeDetails.oneClickInstall.options = [], /verified option/],
  ['shell command labelled one-click', p => p.alternativeDetails.oneClickInstall.hasVerifiedOneClick = true, /option types/],
  ['too few product reasons', p => p.productReasons.pop(), /3/],
]) test(`profile rejects ${name}`, () => {
  const profile = fixture(); mutate(profile);
  assert.throws(() => productProfile(z).parse(profile), expected);
});
