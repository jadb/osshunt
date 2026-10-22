import test from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFile } from 'node:fs/promises';
import { CloudflarePricingStore } from '../lib/pricing/stores-cloudflare.mjs';
function database(sqlite) {
  return {
    prepare(sql) {
      return {
        bind(...args) {
          return {
            async first() {
              return sqlite.prepare(sql).get(...args) || null;
            },
            async run() {
              const result = sqlite.prepare(sql).run(...args);
              return { meta: { changes: Number(result.changes) } };
            },
          };
        },
      };
    },
  };
}
function mediaStore() {
  const objects = new Map();
  return {
    async put(key, bytes, options) {
      if (objects.has(key) && options.onlyIf?.etagDoesNotMatch === '*') return null;
      objects.set(key, { bytes: new Uint8Array(bytes), customMetadata: options.customMetadata });
    },
    async get(key) {
      const o = objects.get(key);
      return (
        o && {
          customMetadata: o.customMetadata,
          async arrayBuffer() {
            return o.bytes.buffer.slice(0);
          },
        }
      );
    },
  };
}
test('D1 SQL parity: atomic lease, crash recovery, exact calendar gate, immutable private R2', async () => {
  const sqlite = new DatabaseSync(':memory:');
  try {
    sqlite.exec(
      await readFile(new URL('../worker/history/migrations/0002_archive_cooldown.sql', import.meta.url), 'utf8'),
    );
    sqlite.exec(
      await readFile(new URL('../worker/history/migrations/0003_pricing_history.sql', import.meta.url), 'utf8'),
    );
    const store = new CloudflarePricingStore(database(sqlite), mediaStore()),
      now = '2024-08-31T00:00:00Z';
    const records = await Promise.all([
      store.reserve('vendor', now, { leaseMs: 1000 }),
      store.reserve('vendor', now, { leaseMs: 1000 }),
    ]);
    assert.equal(records.filter(Boolean).length, 1);
    assert.equal(records.find(Boolean).nextCheckAt, '2025-02-28T00:00:00.000Z');
    assert.equal(await store.resume('vendor', now), null);
    const resumed = await store.resume('vendor', '2024-08-31T00:00:01Z');
    assert.ok(resumed);
    assert.equal(await store.checkpoint('vendor', 'wrong', { complete: false }), false);
    await store.checkpoint(
      'vendor',
      resumed.token,
      { complete: false, proposals: [{ id: 'private' }], retryAt: Date.parse('2024-09-01') },
      { release: true },
    );
    assert.equal(await store.resume('vendor', '2024-08-31T00:00:02Z'), null);
    const second = await store.resume('vendor', '2024-09-01T00:00:00Z');
    assert.ok(second);
    assert.deepEqual(await store.getProposals('vendor'), [{ id: 'private' }]);
    await store.finish('vendor', second.token, { complete: true });
    assert.equal(await store.reserve('vendor', '2025-02-27T23:59:59Z'), null);
    assert.ok(await store.reserve('vendor', '2025-02-28T00:00:00Z'));
    const limited = await store.reserve('limited', '2020-01-01T00:00:00.000Z');
    await store.finish(
      'limited',
      limited.token,
      { complete: true, historicalComplete: false, errorCode: 'inventory_limit' },
      { nextCheckAt: '2024-07-01T00:00:00.000Z' },
    );
    assert.equal((await store.read('limited')).nextCheckAt, '2024-07-01T00:00:00.000Z');
    assert.equal(await store.resume('limited', '2024-01-01T00:00:00.000Z'), null);
    assert.equal(await store.reserve('limited', '2024-06-30T23:59:59.000Z'), null);
    assert.ok(await store.reserve('limited', '2024-07-01T00:00:00.000Z'));
    await store.putBody('identity', new TextEncoder().encode('first'), { sha256: 'one' });
    await store.putBody('identity', new TextEncoder().encode('second'), { sha256: 'two' });
    assert.equal(new TextDecoder().decode((await store.getBody('identity')).bytes), 'first');
    await store.deferArchive(1234);
    await store.deferArchive(1000);
    assert.equal(await store.archiveRetryAt(), 1234);
  } finally {
    sqlite.close();
  }
});
