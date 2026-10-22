import test from 'node:test';
import assert from 'node:assert/strict';
import { archiveDate, filterCatalog, gapLabel, historySummary, safeLink, shouldRefresh } from '../public/history-utils.mjs';

test('refresh follows shared monthly date, including failed checks', () => {
  const now = Date.parse('2026-10-21T12:00:00Z');
  assert.equal(shouldRefresh({ status: 'pending' }, now), true);
  assert.equal(shouldRefresh({ status: 'error', checkedAt: '2026-10-20T12:00:00Z', nextCheckAt: '2026-11-19T12:00:00Z' }, now), false);
  assert.equal(shouldRefresh({ status: 'empty', nextCheckAt: '2026-10-21T12:00:00Z' }, now), true);
  assert.equal(shouldRefresh({ status: 'ready', checkedAt: '2026-09-21T12:00:00Z' }, now), true);
  assert.equal(shouldRefresh({ status: 'error', checkedAt: '2026-09-21T12:00:01Z' }, now), false);
  assert.equal(shouldRefresh({ status: 'error', nextCheckAt: 'invalid' }, now), false);
});

test('archive dates use UTC and gaps describe missing time without inventing frames', () => {
  const frames = [{ capturedAt: '2020-01-01T23:59:00Z' }, { capturedAt: '2020-07-01T23:59:00Z' }];
  assert.equal(archiveDate(frames[0].capturedAt), 'January 1, 2020');
  assert.match(gapLabel(frames, 1), /^182 days since the previous image/);
  assert.equal(gapLabel(frames, 0), '');
  assert.equal(gapLabel([{ capturedAt: '2020-01-01' }, { capturedAt: '2020-01-31' }], 1), '');
  assert.match(historySummary([]), /No archived images/);
  assert.match(historySummary([frames[0]]), /single moment/);
  assert.match(historySummary(frames), /^2 archived images/);
});

test('source links refuse executable and lookalike archive URLs', () => {
  assert.equal(safeLink('javascript:alert(1)'), null);
  assert.equal(safeLink('data:image/png,abc'), null);
  assert.equal(safeLink('https://web.archive.org.evil.test/image', true), null);
  assert.equal(safeLink('https://evilarchive.org/image', true), null);
  assert.equal(safeLink('https://web.archive.org/web/20200101000000im_/https://example.com/a.png', true), 'https://web.archive.org/web/20200101000000im_/https://example.com/a.png');
});

test('catalog search covers names, URLs, categories and independent kind filter', () => {
  const catalog = [
    { id: 'one', name: 'One', url: 'https://one.test', kind: 'paid', categories: ['project-management'] },
    { id: 'two', name: 'Two', url: 'https://two.test', kind: 'oss', categories: ['project-management'] },
    { id: 'three', name: 'Three', url: 'https://three.test', kind: 'oss', categories: [] },
  ];
  assert.deepEqual(filterCatalog(catalog, ' PROJECT ', 'oss').map(item => item.id), ['two']);
  assert.deepEqual(filterCatalog(catalog, 'ONE.TEST', '').map(item => item.id), ['one']);
  assert.equal(filterCatalog(catalog, '', '').length, 3);
  assert.deepEqual(filterCatalog(catalog, 'missing', 'oss'), []);
});

test('player preserves a loaded image on failure, pauses, and ignores superseded loads', async () => {
  class FakeNode extends EventTarget {
    constructor() { super(); this.attributes = new Map(); this.value = '1'; this.children = []; }
    setAttribute(name, value) { this.attributes.set(name, String(value)); }
    getAttribute(name) { return this.attributes.get(name); }
    replaceChildren(...children) { this.children = children; }
  }
  class FakeElement extends FakeNode {
    attachShadow() {
      const nodes = new Map();
      this.shadowRoot = { querySelector(selector) {
        if (!nodes.has(selector)) nodes.set(selector, new FakeNode());
        return nodes.get(selector);
      } };
    }
  }
  const originals = { HTMLElement: globalThis.HTMLElement, Image: globalThis.Image, document: globalThis.document };
  const images = [];
  globalThis.HTMLElement = FakeElement;
  globalThis.document = { hidden: false };
  globalThis.Image = class { constructor() { images.push(this); } };
  try {
    const { WebsiteHistory } = await import('../public/history-player.mjs');
    const player = new WebsiteHistory();
    player.setAttribute('product-id', 'test-product');
    player.manifest = { status: 'ready', product: { name: 'A product' }, frames: [
      { id: 'first', capturedAt: '2020-01-01', archiveUrl: 'https://web.archive.org/first' },
      { id: 'second', capturedAt: '2020-06-01', archiveUrl: 'https://web.archive.org/second' },
      { id: 'third', capturedAt: '2021-01-01', archiveUrl: 'https://web.archive.org/third' },
    ] };
    const first = player.showFrame(0);
    images[0].onload();
    assert.equal(await first, true);
    const mount = player.$('.image-mount');
    assert.equal(mount.children[0], images[0]);
    player.playing = true;
    const failed = player.showFrame(1);
    assert.equal(mount.children[0], images[0], 'current image remains while next loads');
    images[1].onerror();
    assert.equal(await failed, false);
    assert.equal(player.playing, false, 'failure stops autoplay');
    assert.equal(player.index, 0);
    assert.equal(mount.children[0], images[0], 'failure preserves last good image');
    player.updateStatus();
    assert.match(player.$('.status-message').textContent, /could not be loaded/, 'manifest updates retain image failure message');
    assert.equal(player.$('.reload').hidden, false);
    const stale = player.showFrame(1);
    const latest = player.showFrame(2);
    images[3].onload();
    assert.equal(await latest, true);
    images[2].onload();
    assert.equal(await stale, false);
    assert.equal(player.index, 2);
    assert.equal(mount.children[0], images[3], 'late previous request cannot replace selected image');
    player.manifest.error = 'History is temporarily unavailable.';
    player.updateStatus();
    assert.match(player.$('.status-message').textContent, /archive could not be checked/i, 'ready history retains failed-check notice');
    assert.equal(mount.children[0], images[3], 'failed check preserves current image');
    assert.equal(player.frames.length, 3, 'failed check preserves all known frames');
    assert.equal(player.$('.reload').hidden, false);
    player.manifest.error = null;
    assert.equal(player.$('.next').disabled, true);
    assert.equal(player.$('#history-position').getAttribute('aria-valuetext'), 'January 1, 2021, image 3 of 3');
    const slider = player.$('#history-position');
    slider.value = '0';
    slider.dispatchEvent(new Event('input'));
    const scrubbedImage = images.at(-1);
    const scrubbedSource = scrubbedImage.src;
    const pendingPosition = Number(slider.value);
    scrubbedImage.onload();
    await new Promise(resolve => setImmediate(resolve));
    assert.match(scrubbedSource, /\/frames\/first\/image$/, 'range input loads the requested position before pause can reset it');
    assert.equal(pendingPosition, 0, 'slider retains the requested position while image loads');
    assert.equal(player.index, 0, 'range input selects the requested frame');
    player.manifest.frames = [];
    player.index = -1;
    player.updateControls();
    for (const selector of ['.previous', '.next', '.play', '#history-position', '#history-speed', '.enlarge']) {
      assert.equal(player.$(selector).disabled, true, `${selector} disabled with no frames`);
    }
    player.manifest.frames = [{ id: 'first', capturedAt: '2020-01-01' }];
    player.index = 0;
    player.updateControls();
    assert.equal(player.$('.play').disabled, true, 'single image cannot autoplay');
    assert.equal(player.$('#history-position').disabled, true);
    assert.equal(player.$('.enlarge').disabled, false, 'single image can be enlarged');
  } finally {
    for (const [name, value] of Object.entries(originals)) {
      if (value === undefined) delete globalThis[name]; else globalThis[name] = value;
    }
  }
});
