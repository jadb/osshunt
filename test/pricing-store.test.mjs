import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { FilePricingStore } from '../lib/pricing/stores-file.mjs';
test('reservations atomic, six-month gate separate, continuation survives restart, immutable bodies', async () => {
  const root = await mkdtemp(join(tmpdir(), 'pricing-store-'));
  try {
    const store = new FilePricingStore(root),
      now = '2024-08-31T00:00:00.000Z';
    const records = await Promise.all([store.reserve('product', now), store.reserve('product', now)]);
    const r = records.find(Boolean);
    assert.equal(records.filter(Boolean).length, 1);
    assert.equal(r.nextCheckAt, '2025-02-28T00:00:00.000Z');
    assert.equal(await store.resume('product', now), null);
    assert.equal(await store.checkpoint('product', 'wrong', {}), false);
    await store.checkpoint('product', r.token, { complete: false, proposals: [{ id: 'one' }] }, { release: true });
    const resumed = await new FilePricingStore(root).resume('product', now);
    assert.ok(resumed.token);
    assert.deepEqual(await store.getProposals('product'), [{ id: 'one' }]);
    await store.finish('product', resumed.token, { complete: true });
    assert.equal(await store.reserve('product', '2025-02-27T23:59:59Z'), null);
    assert.ok(await store.reserve('product', '2025-02-28T00:00:00Z'));
    await store.putBody('capture', new TextEncoder().encode('first'), { sha256: 'one' });
    await store.putBody('capture', new TextEncoder().encode('second'), { sha256: 'two' });
    assert.equal(new TextDecoder().decode((await store.getBody('capture')).bytes), 'first');
    await store.deferArchive(Date.parse(now));
    assert.equal(await store.archiveRetryAt(), Date.parse(now));
  } finally {
    await rm(root, { recursive: true });
  }
});
test('crash between reservation and first checkpoint can resume after lease', async () => {
  const root = await mkdtemp(join(tmpdir(), 'pricing-crash-'));
  try {
    const store = new FilePricingStore(root);
    await store.reserve('vendor', '2024-01-01T00:00:00Z', { leaseMs: 1000 });
    assert.ok(await new FilePricingStore(root).resume('vendor', '2024-01-01T00:00:01Z'));
  } finally {
    await rm(root, { recursive: true });
  }
});
