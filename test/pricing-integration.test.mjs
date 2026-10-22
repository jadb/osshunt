import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createArchiveApplication } from '../lib/pricing/application.mjs';
import { FileHistoryStore } from '../lib/history/stores-file.mjs';
import { FilePricingStore } from '../lib/pricing/stores-file.mjs';
import { observation } from './fixtures/pricing-observation.mjs';
import { backfillPricing } from '../scripts/backfill-pricing.mjs';
import { startHistoryServer } from '../scripts/history-server.mjs';
test('combined application serves confirmed pricing and images without source requests on reads', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'pricing-app-')); t.after(() => rm(directory, { recursive: true }));
  let requests = 0;
  const historyStore = new FileHistoryStore(directory), pricingStore = new FilePricingStore(directory, { historyStore });
  const app = createArchiveApplication({ catalog: [{ id: 'sample', name: 'Sample', url: 'https://sample.example.com/', kind: 'paid' }],
    historyStore, pricingStore, confirmed: [observation()], fetchImpl: async () => { requests++; throw new Error('No source reads expected'); } });
  const pricing = await (await app.fetch(new Request('https://app.test/api/pricing/sample'))).json();
  assert.equal(pricing.observations.length, 1); assert.deepEqual(pricing.changes, []);
  assert.equal((await app.fetch(new Request('https://app.test/api/history/sample'))).status, 200);
  assert.equal((await app.fetch(new Request('https://app.test/api/pricing/missing'))).status, 404);
  assert.equal(requests, 0);
  await historyStore.deferArchive(Date.now() + 3600000);
  const limited = await app.fetch(new Request('https://app.test/api/pricing/sample/refresh', { method: 'POST' }));
  assert.equal(limited.status, 429); assert.equal(await pricingStore.read('sample'), null);
});
test('serial batch stops immediately at archive cooldown and skips six-month gated products', async () => {
  let calls = 0;
  const fetchImpl = async (_url, options) => {
    calls++;
    return Response.json(options?.method === 'POST' ? { status: 'archive_cooldown', errorCode: 'archive_rate_limited' } :
      { status: 'awaiting_discovery', observations: [], checkedAt: null }, { status: options?.method === 'POST' ? 429 : 200 });
  };
  const result = await backfillPricing({ baseURL: 'https://app.test/', ids: ['first', 'second'], fetchImpl, sleepImpl: async () => {} });
  assert.equal(result.stopped, 'archive_cooldown'); assert.equal(calls, 2);
  calls = 0;
  const cached = await backfillPricing({ baseURL: 'https://app.test/', ids: ['first'], sleepImpl: async () => {},
    fetchImpl: async () => { calls++; return Response.json({ status: 'missing_pricing', checkedAt: new Date().toISOString(),
      nextCheckAt: '2099-01-01T00:00:00.000Z' }); } });
  assert.equal(calls, 1); assert.equal(cached.results[0].action, 'cached');
});
test('HTTP embed serves pricing component and its confirmed API without archive access', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'pricing-http-')); t.after(() => rm(directory, { recursive: true }));
  const historyStore = new FileHistoryStore(directory), pricingStore = new FilePricingStore(directory, { historyStore });
  const app = createArchiveApplication({ catalog: [{ id: 'sample', name: 'Sample', url: 'https://sample.example.com/', kind: 'paid' }],
    historyStore, pricingStore, confirmed: [observation()], fetchImpl: async () => { throw new Error('Unexpected source fetch'); } });
  const server = await startHistoryServer({ service: app, port: 0 }); t.after(() => new Promise(resolve => server.close(resolve)));
  const base = `http://127.0.0.1:${server.address().port}`;
  const embed = await (await fetch(`${base}/embed.html?product=sample`)).text();
  assert.match(embed, /pricing-history/);
  assert.equal((await fetch(`${base}/pricing-history.mjs`)).status, 200);
  const manifest = await (await fetch(`${base}/api/pricing/sample`)).json();
  assert.equal(manifest.observations[0].plans[0].offers[0].amount, '12');
});
