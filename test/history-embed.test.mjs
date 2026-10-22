import test from 'node:test';
import assert from 'node:assert/strict';
import { initializeEmbed } from '../public/history-embed.mjs';

function fixture() {
  const player = new EventTarget();
  player.attributes = new Map();
  player.setAttribute = (key, value) => player.attributes.set(key, value);
  const pricing = new EventTarget();
  pricing.attributes = new Map();
  pricing.setAttribute = (key, value) => pricing.attributes.set(key, value);
  const nodes = new Map([['website-history', player], ['pricing-history', pricing], ['#embed-error', {}], ['#embed-gallery', {}], ['#embed-title', {}]]);
  const document = { querySelector: selector => nodes.get(selector) };
  return { player, pricing, document, nodes };
}

test('standalone embed selects only the requested catalog identifier and links its gallery', () => {
  const { player, document, nodes } = fixture();
  assert.equal(initializeEmbed({ search: '?product=wordpress', document }), true);
  assert.equal(player.attributes.get('product-id'), 'wordpress');
  assert.equal(nodes.get('#embed-error').hidden, true);
  assert.equal(nodes.get('#embed-gallery').href, '/?product=wordpress');
  player.manifest = { product: { name: 'WordPress' } };
  player.dispatchEvent(new Event('framechange'));
  assert.equal(nodes.get('#embed-title').textContent, 'WordPress');
  assert.equal(document.title, 'WordPress website history — OSS Hunt');
});

test('missing or invalid embed identifiers never initialize an archive request', () => {
  for (const search of ['', '?product=', '?product=https://example.org', '?product=%3Cscript%3E']) {
    const { player, document, nodes } = fixture();
    assert.equal(initializeEmbed({ search, document }), false);
    assert.equal(player.attributes.has('product-id'), false);
    assert.equal(player.hidden, true);
    assert.equal(nodes.get('#embed-error').hidden, false);
  }
});

test('embed initializes pricing independently and forwards only selected image dates', () => {
  const { player, pricing, document } = fixture();
  initializeEmbed({ search: '?product=wordpress', document });
  assert.equal(pricing.attributes.get('product-id'), 'wordpress');
  const event = new Event('framechange');
  event.detail = { frame: { capturedAt: '2020-01-01T00:00:00Z' } };
  player.dispatchEvent(event);
  assert.equal(pricing.attributes.get('frame-date'), '2020-01-01T00:00:00Z');
});

test('pricing manifest names the iframe when the product has no archived images', () => {
  const { pricing, document, nodes } = fixture();
  initializeEmbed({ search: '?product=sample', document });
  const event = new Event('pricingload');
  event.detail = { product: { id: 'sample', name: 'Sample Product' } };
  pricing.dispatchEvent(event);
  assert.equal(nodes.get('#embed-title').textContent, 'Sample Product');
  assert.equal(document.title, 'Sample Product website history — OSS Hunt');
});
