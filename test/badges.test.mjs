import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  badgeTools, badgeIndex, badgeMessage, escapeXml, normalizeStyle, renderSvg,
  shieldsEndpoint, snippets, badgeResponse, STYLES,
} from '../lib/badges.mjs';

const oss = (id, extra = {}) => ({ id, name: id.toUpperCase(), kind: 'oss', tier: 'A', osi: true,
  health: { archived: false, disabled: false }, ...extra });
const paid = (id, name) => ({ id, name, kind: 'paid' });
const map = (from, to, fit = 'partial') => ({ id: `${from}--${to}`, from, to, fit });

test('eligibility: open tier, OSI, live repository and a partial-or-better mapping', () => {
  const maps = [{ fit: 'partial', name: 'Retool' }];
  assert.deepEqual(badgeTools(oss('a'), maps), ['Retool']);
  assert.deepEqual(badgeTools(oss('a'), [{ fit: 'drop-in', name: 'Retool' }]), ['Retool']);
  for (const tier of ['B', 'C']) assert.deepEqual(badgeTools(oss('a', { tier }), maps), ['Retool']);
  for (const tier of ['S', 'U']) assert.equal(badgeTools(oss('a', { tier }), maps), null, `tier ${tier}`);
  assert.equal(badgeTools(oss('a', { osi: false }), maps), null);
  assert.equal(badgeTools(oss('a', { kind: 'paid' }), maps), null);
  assert.equal(badgeTools(oss('a', { health: { archived: true } }), maps), null);
  assert.equal(badgeTools(oss('a', { health: { disabled: true } }), maps), null);
  assert.equal(badgeTools(oss('a'), [{ fit: 'different-approach', name: 'Retool' }]), null);
  assert.equal(badgeTools(oss('a'), []), null);
});

test('only partial-or-better mappings are named, sorted, deduplicated', () => {
  const tools = badgeTools(oss('a'), [
    { fit: 'partial', name: 'Zendesk' }, { fit: 'different-approach', name: 'Front' },
    { fit: 'drop-in', name: 'Intercom' }, { fit: 'partial', name: 'Intercom' },
  ]);
  assert.deepEqual(tools, ['Intercom', 'Zendesk']);
});

test('index is built from products and mappings, ineligible ids are absent', () => {
  const products = [paid('retool', 'Retool'), paid('miro', 'Miro'), oss('appsmith'), oss('drawish'), oss('closed', { tier: 'S' })];
  const mappings = [map('retool', 'appsmith'), map('miro', 'drawish', 'different-approach'), map('retool', 'closed')];
  const index = badgeIndex(products, mappings);
  assert.deepEqual(Object.keys(index), ['appsmith']);
  assert.deepEqual(index.appsmith, { name: 'APPSMITH', tools: ['Retool'], message: 'replaces Retool' });
});

test('index rejects mappings that point at unknown or wrong-kind products', () => {
  assert.throws(() => badgeIndex([oss('a')], [map('ghost', 'a')]), /ghost/);
  assert.throws(() => badgeIndex([oss('a'), oss('b')], [map('b', 'a')]), /not paid/);
});

test('message names up to three tools, counts above three', () => {
  assert.equal(badgeMessage(['A']), 'replaces A');
  assert.equal(badgeMessage(['A', 'B', 'C']), 'replaces A · B · C');
  assert.equal(badgeMessage(['A', 'B', 'C', 'D']), 'replaces 4 paid tools');
  assert.throws(() => badgeMessage([]));
});

test('escapeXml neutralises markup and attribute breakouts', () => {
  assert.equal(escapeXml(`<script>"a'&b</script>`), '&lt;script&gt;&quot;a&apos;&amp;b&lt;/script&gt;');
});

test('svg escapes every text slot and never echoes raw input', () => {
  const evil = `</text><script>alert(1)</script><text a="`;
  for (const style of STYLES) {
    const svg = renderSvg({ label: evil, message: `replaces ${evil}`, style });
    assert.ok(!svg.includes('<script'), style);
    assert.ok(!svg.includes('<text a='), style);
    assert.ok(!/<text a=|<script/i.test(svg), style);
    assert.ok(/&lt;script&gt;/i.test(svg), style);
    assert.equal(svg.match(/<text /g).length, 2, style);
    assert.match(svg, /^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg"/);
  }
});

test('svg carries an accessible name and the wordmark label', () => {
  const svg = renderSvg({ label: 'OSSHunt', message: 'replaces Retool' });
  assert.match(svg, /role="img"/);
  assert.match(svg, /aria-label="OSSHunt: replaces Retool"/);
  assert.match(svg, /<title>OSSHunt: replaces Retool<\/title>/);
  assert.match(svg, />OSSHunt<\/text>/);
  assert.match(svg, />replaces Retool<\/text>/);
});

test('style is whitelisted; unknown or hostile values fall back to flat', () => {
  assert.equal(normalizeStyle('flat-square'), 'flat-square');
  assert.equal(normalizeStyle('for-the-badge'), 'for-the-badge');
  assert.equal(normalizeStyle('plastic'), 'plastic');
  assert.equal(normalizeStyle(null), 'flat');
  assert.equal(normalizeStyle('social'), 'flat');
  assert.equal(normalizeStyle('"><script>'), 'flat');
  assert.match(renderSvg({ label: 'OSSHunt', message: 'x', style: 'for-the-badge' }), /height="28"/);
  assert.match(renderSvg({ label: 'OSSHunt', message: 'x', style: 'for-the-badge' }), />OSSHUNT</);
  assert.match(renderSvg({ label: 'OSSHunt', message: 'x', style: 'plastic' }), /height="18"/);
  assert.match(renderSvg({ label: 'OSSHunt', message: 'x', style: 'flat-square' }), /rx="0"/);
  assert.match(renderSvg({ label: 'OSSHunt', message: 'x' }), /rx="3"/);
});

test('svg width grows with the message', () => {
  const w = s => Number(renderSvg({ label: 'OSSHunt', message: s }).match(/width="(\d+)"/)[1]);
  assert.ok(w('replaces Retool · Airtable · Notion') > w('replaces Retool'));
});

test('shields endpoint format', () => {
  assert.deepEqual(shieldsEndpoint({ message: 'replaces Retool' }), {
    schemaVersion: 1, label: 'OSSHunt', message: 'replaces Retool', color: 'ffd400', labelColor: '0d0d0d', cacheSeconds: 86400,
  });
  assert.equal(shieldsEndpoint({ message: 'replaces Retool', style: 'flat-square' }).style, 'flat-square');
  assert.equal('style' in shieldsEndpoint({ message: 'x', style: 'bogus' }), false);
  assert.deepEqual(shieldsEndpoint({ message: 'not listed', isError: true }), {
    schemaVersion: 1, label: 'OSSHunt', message: 'not listed', color: 'lightgrey', labelColor: '0d0d0d', isError: true, cacheSeconds: 3600,
  });
});

test('snippets link the badge to the profile page in three formats', () => {
  const s = snippets({ id: 'appsmith', message: 'replaces Retool' });
  assert.equal(s.profile, 'https://osshunt.com/alternatives/appsmith/');
  assert.equal(s.image, 'https://osshunt.com/badge/appsmith.svg');
  assert.equal(s.markdown, '[![OSSHunt: replaces Retool](https://osshunt.com/badge/appsmith.svg)](https://osshunt.com/alternatives/appsmith/)');
  assert.equal(s.html, '<a href="https://osshunt.com/alternatives/appsmith/"><img src="https://osshunt.com/badge/appsmith.svg" alt="OSSHunt: replaces Retool"></a>');
  assert.equal(s.rst, '.. image:: https://osshunt.com/badge/appsmith.svg\n   :target: https://osshunt.com/alternatives/appsmith/\n   :alt: OSSHunt: replaces Retool');
});

test('snippets escape alt text per format', () => {
  const s = snippets({ id: 'x', message: 'replaces A [b] "c" <d>\nnext' });
  assert.ok(s.markdown.startsWith('[![OSSHunt: replaces A \\[b\\] "c" <d> next]('));
  assert.ok(s.html.includes('alt="OSSHunt: replaces A [b] &quot;c&quot; &lt;d&gt; next"'));
  assert.ok(s.rst.endsWith(':alt: OSSHunt: replaces A [b] "c" <d> next'));
  assert.throws(() => snippets({ id: '../evil', message: 'x' }), /id/);
});

const INDEX = { appsmith: { name: 'Appsmith', tools: ['Retool'], message: 'replaces Retool' } };
const q = s => new URLSearchParams(s);

test('svg route: eligible id renders with cache and safety headers', () => {
  const r = badgeResponse(INDEX, '/badge/appsmith.svg', q(''));
  assert.equal(r.status, 200);
  assert.equal(r.headers['content-type'], 'image/svg+xml; charset=utf-8');
  assert.equal(r.headers['cache-control'], 'public, max-age=86400');
  assert.equal(r.headers['x-content-type-options'], 'nosniff');
  assert.match(r.headers['content-security-policy'], /default-src 'none'/);
  assert.match(r.body, /replaces Retool/);
  assert.match(badgeResponse(INDEX, '/badge/appsmith.svg', q('style=for-the-badge')).body, /height="28"/);
});

test('json route: shields endpoint body with style passthrough and CORS', () => {
  const r = badgeResponse(INDEX, '/badge/appsmith.json', q('style=flat-square'));
  assert.equal(r.status, 200);
  assert.equal(r.headers['content-type'], 'application/json; charset=utf-8');
  assert.equal(r.headers['access-control-allow-origin'], '*');
  assert.deepEqual(JSON.parse(r.body), { ...shieldsEndpoint({ message: 'replaces Retool' }), style: 'flat-square' });
});

test('unknown, ineligible, prototype and malformed ids return a 404 badge', () => {
  for (const path of ['/badge/nope.svg', '/badge/constructor.svg', '/badge/__proto__.svg', '/badge/hasOwnProperty.svg',
    '/badge/APPSMITH.svg', '/badge/appsmith', '/badge/', '/badge/a/b.svg', '/badge/appsmith.svg.svg', '/badge/%3Cx%3E.svg']) {
    const r = badgeResponse(INDEX, path, q(''));
    assert.equal(r.status, 404, path);
    assert.equal(r.headers['content-type'], 'image/svg+xml; charset=utf-8', path);
    assert.equal(r.headers['cache-control'], 'public, max-age=3600', path);
    assert.match(r.body, /not listed/, path);
  }
  const j = badgeResponse(INDEX, '/badge/constructor.json', q(''));
  assert.equal(j.status, 404);
  assert.equal(JSON.parse(j.body).isError, true);
});

test('live data: every badge in the index names one to three tools or a count', () => {
  const products = JSON.parse(readFileSync(new URL('../data/collections/products.json', import.meta.url)));
  const mappings = JSON.parse(readFileSync(new URL('../data/collections/alternatives.json', import.meta.url)));
  const index = badgeIndex(products, mappings);
  const oss = products.filter(p => p.kind === 'oss');
  assert.ok(Object.keys(index).length > 0 && Object.keys(index).length < oss.length);
  for (const [id, b] of Object.entries(index)) {
    const p = oss.find(x => x.id === id);
    assert.ok(p && ['A', 'B', 'C'].includes(p.tier) && p.osi === true, id);
    assert.match(b.message, /^replaces (\d+ paid tools|[^·]+( · [^·]+){0,2})$/, id);
  }
});
