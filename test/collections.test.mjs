import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { applyOverrides, mergePatch, snapshotLoader } from '../lib/loaders.mjs';
import { validateCollections } from '../lib/validate.mjs';
import { runLoader } from '../lib/run-loader.mjs';

const fixture = () => ({
  categories: [{ id: 'chat', name: 'Chat', description: 'Team communication', parent: null, audience: 'Teams',
    audienceReach: 'broad', audienceRank: 1, audienceRationale: 'Used across functions', audienceSources: ['https://example.com/'] }],
  products: [
    { id: 'paid', name: 'Paid', url: 'https://example.com/', categories: ['chat'], kind: 'paid', pricing: {
      model: 'per-seat', entryAmount: 10, currency: 'USD', period: 'month', unit: 'seat', billing: 'annual',
      note: 'Per seat billed annually', source: 'https://example.com/pricing' } },
    { id: 'open', name: 'Open', url: 'https://example.org/', categories: ['chat'], kind: 'oss', repo: 'https://github.com/test/open',
      license: 'MIT', osi: true, selfHostable: true, tier: 'A', locked: [], hostedOffer: false, classificationReason: 'No gated features',
      sources: { license: 'https://example.org/license', features: 'https://example.org/features', hosting: 'https://example.org/' },
      health: { archived: false, disabled: false, pushedAt: '2026-10-21T00:00:00Z', lastRelease: null, lastReleaseAt: null,
        commit: 'abc', checkedAt: '2026-10-21', source: 'https://api.github.com/repos/test/open', rsx: 'checked' } },
  ],
  alternatives: [{ id: 'paid--open', from: 'paid', to: 'open', fit: 'partial', migrationNotes: 'Import needed', sources: ['https://example.org/import'] }],
});

test('normalization, deterministic sort, duplicate ids and orphan overrides', () => {
  assert.deepEqual(applyOverrides([{ id: 'B' }, { id: 'a' }]), [{ id: 'a' }, { id: 'b' }]);
  assert.throws(() => applyOverrides([{ id: 'A' }, { id: 'a' }]), /duplicate id/);
  assert.throws(() => applyOverrides([{ id: 'a' }], { missing: {} }), /orphan/);
  assert.throws(() => applyOverrides([{ id: 'a' }], { A: {}, a: {} }), /duplicate override/);
  assert.throws(() => applyOverrides([{ id: 'a' }], { a: { id: 'b' } }), /cannot change id/);
  assert.throws(() => applyOverrides([]), /non-empty/);
  assert.throws(() => applyOverrides([{ id: 42 }]), /string id/);
});

test('RFC 7386 null deletion and wholesale arrays', () => {
  assert.deepEqual(mergePatch({ x: { a: 1, b: 2 }, list: ['old'] }, { x: { a: null }, list: ['new'] }),
    { x: { b: 2 }, list: ['new'] });
});

test('YAML 1.2 override parser rejects duplicates and retains no/on/yes strings', async () => {
  const folder = await mkdtemp(join(tmpdir(), 'osshunt-test-'));
  try {
    await writeFile(join(folder, 'items.json'), JSON.stringify([{ id: 'a' }]));
    const loader = snapshotLoader({ name: 'items', sourceDir: folder, overridesDir: folder });
    const identitySchema = { parseAsync: async data => data };
    await writeFile(join(folder, 'items.overrides.yaml'), 'a:\n  name: no\n  state: on\n  label: yes\n');
    const result = await runLoader(loader, identitySchema);
    assert.deepEqual(result, [{ id: 'a', name: 'no', state: 'on', label: 'yes' }]);
    await writeFile(join(folder, 'items.overrides.yaml'), 'a: {}\na: {}\n');
    await assert.rejects(runLoader(loader, identitySchema), /unique/);
  } finally { await rm(folder, { recursive: true }); }
});

test('schema and graph accept valid many-to-many data', () => {
  const data = fixture();
  const second = structuredClone(data.products[0]);
  second.id = 'another-paid';
  data.products.push(second);
  data.alternatives.push({ ...data.alternatives[0], id: 'another-paid--open', from: 'another-paid' });
  assert.equal(validateCollections(data), data);
});

test('graph validation applies schema defaults before checking parent references', () => {
  const data = fixture();
  delete data.categories[0].parent;
  assert.equal(validateCollections(data).categories[0].parent, null);
});

test('repository evidence preserves unknown flags and calendar-date release precision', () => {
  const data = fixture();
  Object.assign(data.products[1].health, { archived: null, disabled: null, lastRelease: '4.12.2', lastReleaseAt: '2026-09-14' });
  const health = validateCollections(data).products[1].health;
  assert.equal(health.archived, null);
  assert.equal(health.disabled, null);
  assert.equal(health.lastReleaseAt, '2026-09-14');
});

test('paid one-time purchases retain their billing commitment', () => {
  const data = fixture();
  Object.assign(data.products[0].pricing, { model: 'flat', entryAmount: 299.99, period: 'one-time', billing: 'one-time' });
  assert.equal(validateCollections(data).products[0].pricing.billing, 'one-time');
});

for (const [name, mutate, expected] of [
  ['duplicate product', d => d.products.push(d.products[0]), /duplicate id/],
  ['missing endpoint', d => d.alternatives[0].to = 'missing', /endpoint/],
  ['wrong edge direction', d => { d.alternatives[0].from = 'open'; d.alternatives[0].to = 'paid'; }, /direction/],
  ['unknown category', d => d.products[0].categories.push('missing'), /unknown category/],
  ['tier A gated feature', d => d.products[1].locked.push('SSO'), /locked features/],
  ['source available labelled OSI', d => d.products[1].tier = 'S', /marked OSI/],
  ['archived repository', d => d.products[1].health.archived = true, /inactive/],
  ['malformed URL', d => d.products[1].sources.license = 'not-url', /URL/],
  ['category parent cycle', d => d.categories[0].parent = 'chat', /parent/],
]) test(`rejects ${name}`, () => {
  const data = fixture(); mutate(data); assert.throws(() => validateCollections(data), expected);
});
