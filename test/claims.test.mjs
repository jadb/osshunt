import test from 'node:test';
import assert from 'node:assert/strict';
import { parseClaims } from '../lib/claims.mjs';

const valid = { product: 'roundcube', kind: 'license', claim: 'Core is GPL licensed',
  url: 'https://github.com/roundcube/roundcubemail/blob/sha/LICENSE', locator: 'LICENSE opening notice',
  checkedAt: '2026-10-21', evidence: 'Pinned license file read; additional permission noted.' };

test('claim ledger retains locator, date and extra provenance', () => {
  assert.deepEqual(parseClaims(JSON.stringify(valid) + '\n'), [valid]);
});

test('claim ledger rejects missing evidence, non-public source and invalid dates', () => {
  assert.throws(() => parseClaims(''), /empty/);
  for (const patch of [{ evidence: '' }, { locator: '' }, { url: 'not-url' }, { url: 'file:///tmp/evidence' }, { checkedAt: '2026-02-30' }]) {
    assert.throws(() => parseClaims(JSON.stringify({ ...valid, ...patch }), 'example'), /example:1:/);
  }
});
