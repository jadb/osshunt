import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { FilePricingStore } from '../lib/pricing/stores-file.mjs';
test('sampler lease matches date and preserved checkpoint atomically without stealing active work', async () => {
  const root = await mkdtemp(join(tmpdir(), 'sample-lease-'));
  try {
    const store = new FilePricingStore(root),
      at = '2024-01-01T00:00:00.000Z',
      record = await store.reserve('p', at);
    await store.checkpoint('p', record.token, null, { release: true });
    assert.equal(await store.resumeSample('p', 'invalid', at), null);
    assert.equal(await store.resumeSample('p', '2020-01-01', at), null);
    const r = await Promise.all([store.resumeSample('p', at, at), store.resumeSample('p', at, at)]);
    assert.equal(r.filter(Boolean).length, 1);
    const active = r.find(Boolean);
    await store.checkpoint('p', active.token, { phase: 'production', complete: false }, { release: true });
    assert.equal(await store.resumeSample('p', at, at, { expectedCheckpoint: null }), null);
    assert.deepEqual((await store.read('p')).checkpoint, { phase: 'production', complete: false });
  } finally {
    await rm(root, { recursive: true });
  }
});
test('due completed production checkpoints can survive sampler continuation unchanged', async () => {
  const root = await mkdtemp(join(tmpdir(), 'sample-prior-'));
  try {
    const store = new FilePricingStore(root),
      at = '2024-01-01T00:00:00.000Z',
      prior = { complete: true, proposals: [] },
      record = await store.reserve('p', at);
    await store.checkpoint('p', record.token, prior, { release: true });
    const resumed = await store.resumeSample('p', at, at, { expectedCheckpoint: prior });
    assert.ok(resumed);
    await store.checkpoint('p', resumed.token, prior, { release: true });
    assert.deepEqual((await store.read('p')).checkpoint, prior);
    assert.equal((await store.read('p')).nextCheckAt, record.nextCheckAt);
  } finally {
    await rm(root, { recursive: true });
  }
});
