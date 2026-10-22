import test from 'node:test';
import assert from 'node:assert/strict';
import { initializeEmbed } from '../public/history-embed.mjs';

function fixture() {
  const player = new EventTarget();
  player.attributes = new Map();
  player.setAttribute = (key, value) => player.attributes.set(key, value);
  const nodes = new Map([['website-history', player], ['#embed-error', {}], ['#embed-gallery', {}], ['#embed-title', {}]]);
  const document = { querySelector: selector => nodes.get(selector) };
  return { player, document, nodes };
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
