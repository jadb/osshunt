import test from 'node:test';
import assert from 'node:assert/strict';
import { shouldRefreshPricing, canResumePricing, pricingForFrame, confirmedObservations, offerLabel, sourceArchiveLink } from '../public/pricing-utils.mjs';

const observation = (extra = {}) => ({ id: 'one', reviewState: 'confirmed', pricingCapturedAt: '2020-01-31T12:00:00Z', landingCapturedAt: '2020-02-01T12:00:00Z', evidenceAvailableAt: '2020-02-01T12:00:00Z', plans: [], ...extra });

test('pricing checks follow calendar months and cooldown; incomplete passes require explicit continuation', () => {
  const now = Date.parse('2024-02-29T12:00:00Z');
  assert.equal(shouldRefreshPricing({ status: 'pending' }, now), true);
  assert.equal(shouldRefreshPricing({ status: 'error', checkedAt: '2023-08-31T12:00:00Z' }, now), true);
  assert.equal(shouldRefreshPricing({ status: 'error', checkedAt: '2023-08-31T12:00:01Z' }, now), false);
  assert.equal(shouldRefreshPricing({ status: 'pending', nextCheckAt: '2024-03-01T00:00:00Z' }, now), false);
  assert.equal(shouldRefreshPricing({ status: 'pending', retryAfter: '2024-03-01T00:00:00Z' }, now), false);
  assert.equal(shouldRefreshPricing({ status: 'incomplete', nextCheckAt: '2020-01-01' }, now), false);
  assert.equal(canResumePricing({ status: 'incomplete', retryAfter: '2024-03-01T00:00:00Z' }, now), false);
  assert.equal(canResumePricing({ status: 'incomplete_inventory' }, now), true);
  assert.equal(shouldRefreshPricing({ status: 'incomplete_inventory', nextCheckAt: '2020-01-01' }, now), false);
  assert.equal(shouldRefreshPricing({ status: 'empty', nextCheckAt: 'invalid' }, now), false);
  assert.equal(canResumePricing({ status: 'incomplete_inventory', retryAfter: 60 }, now), false);
  assert.equal(canResumePricing({ status: 'incomplete_inventory', retryAfter: 60, retryAt: '2024-02-29T12:00:00Z' }, now), true);
  assert.equal(canResumePricing({ status: 'incomplete_inventory', retryAfter: 60, retryAt: '2024-02-29T12:00:01Z' }, now), false);
});

test('frame association prevents future discovery evidence and labels last-known pricing stale after six calendar months', () => {
  const first = observation();
  const futureDiscovery = observation({ id: 'two', pricingCapturedAt: '2020-06-01T00:00:00Z', landingCapturedAt: '2020-06-30T00:00:00Z', evidenceAvailableAt: '2020-06-01T00:00:00Z' });
  assert.equal(pricingForFrame([first, futureDiscovery], '2020-06-15T00:00:00Z').observation.id, 'one');
  assert.equal(pricingForFrame([first], '2020-07-31T12:00:00Z').stale, false);
  assert.equal(pricingForFrame([first], '2020-07-31T12:00:01Z').stale, true);
  assert.equal(pricingForFrame([first], '2020-01-31T23:00:00Z').observation, null);
  assert.equal(pricingForFrame([observation({ aliasCapturedAt: '2021-01-01' })], '2020-06-15').observation, null);
  assert.equal(pricingForFrame([observation({ evidenceAvailableAt: null })], '2020-06-15').observation, null);
  assert.equal(confirmedObservations([first, observation({ reviewState: 'proposed' })]).length, 1);
});

test('price labels preserve unknown currency and commitment rather than invent prices', () => {
  assert.match(offerLabel({ literal: '$12 / month', amount: '12', currency: null, billingPeriod: 'month', commitment: 'annual' }), /currency unknown.*annual commitment/i);
  assert.match(offerLabel({ literal: 'Contact sales', amount: null, currency: null }), /Contact sales/);
  assert.doesNotMatch(offerLabel({ literal: 'Contact sales', amount: null }), /\b0\b/);
  assert.match(offerLabel({ amount: '12.50', currency: 'EUR', billingPeriod: 'month', unit: 'user' }), /EUR 12.50.*month.*user/);
});

test('offer labels avoid repeating literal periods and units while retaining qualifications', () => {
  assert.equal(offerLabel({ literal: 'USD 12 per month per user', amount: '12', currency: 'USD', billingPeriod: 'month', unit: 'user', commitment: 'annual' }), 'USD 12 per month per user · annual commitment');
  assert.equal(offerLabel({ literal: '$12/mo/user', amount: '12', currency: null, billingPeriod: 'month', unit: 'user', commitment: 'annual' }), '$12/mo/user · currency unknown · annual commitment');
  assert.equal(offerLabel({ literal: 'USD 12', amount: '12', currency: 'USD', billingPeriod: 'month', unit: 'user' }), 'USD 12 · per month · per user');
});

test('pricing links require exact archive host, replay timestamp and matching source date', () => {
  const link = 'https://web.archive.org/web/20200131120000id_/https://example.com/pricing';
  assert.equal(sourceArchiveLink(link, '2020-01-31T12:00:00Z'), link);
  for (const bad of [link.replace('web.archive.org', 'web.archive.org.evil.test'), link.replace('20200131120000', '20200201120000'), 'javascript:alert(1)', 'https://archive.org/anything', link.replace('https://example.com/pricing', 'javascript:alert(1)')]) assert.equal(sourceArchiveLink(bad, '2020-01-31T12:00:00Z'), null);
});

test('pricing component aborts product switches, ignores stale replies, and frame changes never fetch', async () => {
  class Node extends EventTarget {
    constructor() { super(); this.attributes = new Map(); this.children = []; this.isConnected = true; }
    setAttribute(key, value) { this.attributes.set(key, String(value)); }
    getAttribute(key) { return this.attributes.get(key); }
    replaceChildren(...children) { this.children = children; }
    append(...children) { this.children.push(...children); }
    attachShadow() { const nodes = new Map(); this.shadowRoot = { querySelector: key => { if (!nodes.has(key)) nodes.set(key, new Node()); return nodes.get(key); } }; }
  }
  const originals = { HTMLElement: globalThis.HTMLElement, document: globalThis.document, fetch: globalThis.fetch, setTimeout: globalThis.setTimeout, clearTimeout: globalThis.clearTimeout };
  const originalNow = Date.now;
  let now = Date.parse('2026-10-22T12:00:00Z');
  Date.now = () => now;
  const timers = new Map();
  let timerId = 0;
  globalThis.setTimeout = (callback, delay) => { timers.set(++timerId, { callback, delay }); return timerId; };
  globalThis.clearTimeout = id => timers.delete(id);
  const requests = [];
  globalThis.HTMLElement = Node;
  globalThis.document = { createElement: () => new Node() };
  globalThis.fetch = (url, options) => new Promise(resolve => requests.push({ url, options, resolve }));
  const reply = (request, body) => request.resolve({ ok: true, json: async () => body });
  try {
    const { PricingHistory } = await import('../public/pricing-history.mjs');
    const player = new PricingHistory();
    const loaded = [];
    player.addEventListener('pricingload', event => loaded.push(event.detail.product));
    player.setAttribute('product-id', 'one');
    const first = player.load(true);
    player.setAttribute('product-id', 'two');
    const second = player.load(true);
    assert.equal(requests[0].options.signal.aborted, true);
    reply(requests[1], { product: { id: 'two', name: 'Product Two' }, status: 'confirmed', nextCheckAt: '2999-01-01', observations: [observation({ id: 'two', productId: 'two', plans: [{ name: '<img src=x onerror=alert(1)>', status: 'quote', offers: [{ literal: 'Contact sales', amount: null, currency: null }], features: [{ name: 'Members', value: 'Unlimited' }] }] })] });
    await second;
    reply(requests[0], { status: 'confirmed', observations: [observation({ id: 'one' })] });
    await first;
    assert.equal(player.observations[0].id, 'two');
    assert.deepEqual(loaded, [{ id: 'two', name: 'Product Two' }], 'pricing load exposes product identity without an image or extra requests');
    const card = player.$('.plans').children[0];
    assert.equal(card.children[0].textContent, '<img src=x onerror=alert(1)>', 'archived names stay inert text');
    assert.match(card.children[1].textContent, /Contact sales/);
    assert.match(card.children[2].textContent, /Contact sales/);
    assert.equal(card.children[3].children[0].textContent, 'Members: Unlimited');
    player.setAttribute('frame-date', '2020-01-01');
    player.attributeChangedCallback('frame-date', null, '2020-01-01');
    assert.equal(player.index, -1);
    assert.equal(requests.length, 2, 'frame association makes no network requests');
    player.setAttribute('frame-date', '2021-01-01');
    player.attributeChangedCallback('frame-date', '2020-01-01', '2021-01-01');
    assert.match(player.$('.association').textContent, /stale/i);
    assert.equal(requests.length, 2);
    const initial = player.load(true);
    reply(requests[2], { status: 'awaiting_discovery', observations: [] });
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(requests[3].options.method, 'POST');
    reply(requests[3], { status: 'incomplete_inventory', observations: [], retryAfter: '2999-01-01' });
    await initial;
    assert.equal(player.$('.resume').disabled, true);
    assert.equal(requests.length, 4);
    player.accept({ status: 'incomplete_inventory', observations: [], retryAfter: 60, retryAt: '2026-10-22T12:01:00Z' });
    assert.equal(player.$('.resume').disabled, true);
    assert.match(player.$('.checks').textContent, /October 22, 2026/, 'retry seconds are not rendered as an epoch date');
    assert.equal(timers.size, 1, 'one timer re-enables the continuation button');
    const timer = [...timers.values()][0];
    assert.equal(timer.delay, 60000);
    now += 60000; timer.callback();
    assert.equal(player.$('.resume').disabled, false, 'continuation re-enables after cooldown without a source fetch');
    assert.equal(requests.length, 4);
    player.accept({ status: 'confirmed', observations: [observation({ sourceIntegrity: { status: 'legacy_chunked_unverified' }, quality: 'partial', issues: [] })] });
    player.select(0);
    assert.match(player.$('.quality').textContent, /original archive digest remains unverified/i, 'integrity qualification survives absent extraction issues');
    player.accept({ status: 'confirmed', observations: [observation({ provenance: 'landing-page' })] });
    player.select(0);
    assert.ok(player.$('.sources').children.some(node => /pricing.*landing page/i.test(node.textContent || '')));
    player.accept({ status: 'confirmed', observations: [
      observation({ id: 'cloud', scope: { edition: 'Cloud', deployment: 'hosted' } }),
      observation({ id: 'server', scope: { edition: 'Server', deployment: 'self-hosted' } }),
    ] });
    const options = player.$('#pricing-position').children;
    assert.notEqual(options[0].textContent, options[1].textContent, 'same-date editions remain distinguishable');
    assert.match(options[0].textContent, /Cloud.*hosted/);
    assert.match(options[1].textContent, /Server.*self-hosted/);
    player.accept({ status: 'incomplete_inventory', observations: [], retryAfter: 60 });
    assert.equal(player.manifest.retryAt, '2026-10-22T12:02:00.000Z', 'seconds fallback anchored to receipt');
    player.disconnectedCallback();
    assert.equal(timers.size, 0);
  } finally { Date.now = originalNow; for (const [key, value] of Object.entries(originals)) { if (value === undefined) delete globalThis[key]; else globalThis[key] = value; } }
});
