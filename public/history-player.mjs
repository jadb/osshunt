import { archiveDate, gapLabel, historySummary, safeLink, shouldRefresh } from './history-utils.mjs';

const stylesheet = new URL('./history.css', import.meta.url).href;
const BaseElement = globalThis.HTMLElement ?? class {};

export class WebsiteHistory extends BaseElement {
  static observedAttributes = ['product-id', 'api-base'];
  constructor() {
    super();
    this.manifest = null;
    this.index = -1;
    this.playing = false;
    this.loading = false;
    this.imageLoading = false;
    this.imageToken = 0;
    this.requestToken = 0;
    this.failed = false;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${stylesheet}">
      <section class="player" aria-label="Archived website image player">
        <div class="player-topline"><span class="eyebrow">The preserved view</span><span class="frame-count">No image selected</span></div>
        <div class="image-stage" tabindex="0" role="group" aria-label="Archived image. Use Left and Right arrow keys to step, Space to play or pause.">
          <div class="image-mount"></div>
          <div class="empty-state"><span class="empty-symbol" aria-hidden="true">[ · ]</span><h3 class="empty-title">A window into the past</h3><p class="empty-copy">Choose a product to explore its archived images.</p></div>
          <span class="image-loading" hidden>Loading archived image…</span>
        </div>
        <div class="frame-caption"><div><p class="frame-date">No image selected</p><p class="frame-gap"></p></div><a class="source-link" target="_blank" rel="noopener noreferrer" hidden>Original archive <span aria-hidden="true">↗</span></a></div>
        <div class="timeline"><label class="sr-only" for="history-position">Archived image</label><input id="history-position" type="range" min="0" max="0" value="0" step="1" disabled><div class="timeline-dates"><span class="first-date">—</span><span class="last-date">—</span></div></div>
        <div class="player-controls"><div class="transport"><button class="control previous" type="button" aria-label="Previous archived image" disabled>←</button><button class="play" type="button" aria-label="Play website history" aria-pressed="false" disabled><span class="play-icon" aria-hidden="true">▶</span> <span class="play-label">Play history</span></button><button class="control next" type="button" aria-label="Next archived image" disabled>→</button></div><div class="view-controls"><label class="speed-label" for="history-speed">Speed</label><select id="history-speed" aria-label="Playback speed" disabled><option value="0.5">0.5×</option><option value="1" selected>1×</option><option value="2">2×</option></select><button class="control enlarge" type="button" aria-label="Enlarge archived image" disabled><span aria-hidden="true">⤢</span><span class="enlarge-label">Enlarge</span></button></div></div>
        <div class="history-status"><div><p class="status-message" role="status" aria-live="polite">Choose a product from the index.</p><p class="check-message"></p></div><button class="text-button reload" type="button" hidden>Try again</button></div>
      </section><dialog class="enlarge-dialog" aria-label="Enlarged archived image"></dialog>`;
    this.$ = selector => this.shadowRoot.querySelector(selector);
    this.onVisibility = () => { if (document.hidden) this.pause(); };
    this.onFullscreen = () => this.updateEnlargeLabel();
    this.onMotion = () => this.pause();
    this.motion = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)');
    this.$('.previous').addEventListener('click', () => this.step(-1));
    this.$('.next').addEventListener('click', () => this.step(1));
    this.$('.play').addEventListener('click', () => this.togglePlayback());
    this.$('#history-position').addEventListener('input', event => {
      this.pause();
      this.showFrame(Number(event.target.value));
    });
    this.$('#history-speed').addEventListener('change', () => this.schedule());
    this.$('.reload').addEventListener('click', () => this.imageError ? this.showFrame(this.failedImageIndex) : this.load());
    this.$('.enlarge').addEventListener('click', () => this.enlarge());
    this.$('.enlarge-dialog').addEventListener('close', () => this.closeEnlargement());
    this.$('.player').addEventListener('keydown', event => {
      if (event.key === 'Escape' && this.$('.player').classList.contains('enlarged')) this.closeEnlargement();
      if (event.target.matches('input, select, button, a')) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); this.step(event.key === 'ArrowLeft' ? -1 : 1);
      } else if (event.key === ' ' && this.frames.length > 1) {
        event.preventDefault(); this.togglePlayback();
      }
    });
  }

  get frames() { return this.manifest?.frames ?? []; }
  get endpoint() {
    return `${(this.getAttribute('api-base') || '').replace(/\/$/, '')}/api/history/${encodeURIComponent(this.getAttribute('product-id') || '')}`;
  }
  connectedCallback() {
    document.addEventListener('visibilitychange', this.onVisibility);
    document.addEventListener('fullscreenchange', this.onFullscreen);
    this.motion?.addEventListener('change', this.onMotion);
    if (this.getAttribute('product-id')) this.load();
  }
  disconnectedCallback() {
    this.pause();
    this.abort?.abort();
    this.requestToken++;
    this.imageToken++;
    document.removeEventListener('visibilitychange', this.onVisibility);
    document.removeEventListener('fullscreenchange', this.onFullscreen);
    this.motion?.removeEventListener('change', this.onMotion);
  }
  attributeChangedCallback(name, before, after) {
    if (before !== after && this.isConnected) this.load(true);
  }

  async load(reset = false) {
    this.pause();
    this.abort?.abort();
    this.abort = new AbortController();
    const token = ++this.requestToken;
    if (reset) {
      this.manifest = null; this.index = -1; this.imageToken++;
      this.imageError = null;
      this.imageLoading = false;
      this.$('.image-loading').hidden = true;
      this.$('.image-stage').setAttribute('aria-busy', 'false');
      this.$('.image-mount').replaceChildren();
      this.$('.empty-state').hidden = false;
      this.$('.source-link').hidden = true;
      this.$('.frame-date').textContent = 'No image selected';
      this.$('.frame-gap').textContent = '';
    }
    this.loading = true;
    this.failed = false;
    this.setStatus('Looking up archived images…');
    if (!this.frames.length) {
      this.$('.empty-title').textContent = 'Opening the archive';
      this.$('.empty-copy').textContent = 'Looking for images already preserved for this website.';
    }
    this.updateControls();
    try {
      const response = await fetch(this.endpoint, { signal: this.abort.signal });
      if (!response.ok) throw new Error('History unavailable');
      const manifest = await response.json();
      if (token !== this.requestToken) return;
      this.acceptManifest(manifest);
      if (shouldRefresh(manifest)) {
        this.setStatus(this.frames.length ? 'Showing preserved images while checking for more…' : 'Looking for existing archived images. This can take a moment…');
        const refresh = await fetch(`${this.endpoint}/refresh`, { method: 'POST', signal: this.abort.signal });
        const updated = await refresh.json().catch(() => null);
        if (token !== this.requestToken) return;
        if (!refresh.ok && ![409, 429].includes(refresh.status)) throw new Error('Archive unavailable');
        if (updated && Array.isArray(updated.frames)) this.acceptManifest(updated);
        else if (!refresh.ok) this.failed = true;
      }
    } catch (error) {
      if (error.name === 'AbortError' || token !== this.requestToken) return;
      this.failed = true;
    } finally {
      if (token === this.requestToken) {
        this.loading = false;
        this.updateStatus();
        this.updateControls();
      }
    }
  }

  acceptManifest(manifest) {
    if (!manifest || !Array.isArray(manifest.frames)) throw new Error('History unavailable');
    const previousId = this.frames[this.index]?.id;
    if (manifest.status === 'error' && !manifest.frames.length && this.frames.length) {
      manifest = { ...manifest, frames: this.frames };
    }
    this.manifest = manifest;
    const retainedIndex = this.frames.findIndex(frame => frame.id === previousId);
    if (retainedIndex >= 0) this.index = retainedIndex;
    else if (this.frames.length) this.showFrame(0);
    this.updateControls();
    this.updateStatus();
  }

  setStatus(message) { this.$('.status-message').textContent = message; }
  updateStatus() {
    const count = this.frames.length;
    const status = this.manifest?.status;
    const title = this.$('.empty-title');
    const copy = this.$('.empty-copy');
    if (this.imageError) {
      this.setStatus(this.imageError);
      if (this.index < 0) {
        title.textContent = 'An image is out of reach';
        copy.textContent = 'The archive has a record of this image, but it cannot be displayed just now.';
      }
    } else if (this.failed || status === 'error') {
      this.setStatus(count ? 'The archive could not be checked. Preserved images are still available.' : 'The archive is temporarily unavailable. Please try again later.');
      title.textContent = 'History is out of reach';
      copy.textContent = 'We could not retrieve the archived images just now. No images have been invented or substituted.';
    } else if (status === 'pending' || this.loading && !count) {
      this.setStatus('Looking for existing archived images. Check again in a moment.');
      title.textContent = 'Opening the archive';
      copy.textContent = 'Looking for images already preserved for this website. Some histories take a little longer to find.';
    } else if (!count) {
      this.setStatus('No existing archived screenshots were found for this website.');
      title.textContent = 'Not every past is pictured';
      copy.textContent = 'There are no archived screenshot images available here yet. This space stays empty until a real image is found.';
    } else this.setStatus(historySummary(this.frames));
    this.$('.reload').hidden = !(this.imageError || this.failed || status === 'pending' || status === 'error');
    this.$('.reload').textContent = status === 'pending' && !this.failed && !this.imageError ? 'Check again' : 'Try again';
    const checked = this.manifest?.checkedAt;
    const next = this.manifest?.nextCheckAt;
    this.$('.check-message').textContent = checked ? `Last checked ${archiveDate(checked)}${next ? ` · Next check from ${archiveDate(next)}` : ''}` : 'Original archive dates · availability varies by website';
  }

  async showFrame(index) {
    if (index < 0 || index >= this.frames.length) return false;
    const frame = this.frames[index];
    const token = ++this.imageToken;
    this.imageLoading = true;
    this.updateControls();
    this.$('.image-loading').hidden = false;
    this.$('.image-stage').setAttribute('aria-busy', 'true');
    const image = new Image();
    image.alt = `${this.manifest.product?.name || 'Website'}, archived ${archiveDate(frame.capturedAt)}`;
    image.className = 'archive-image';
    image.decoding = 'async';
    const loaded = new Promise(resolve => {
      image.onload = () => resolve(true);
      image.onerror = () => resolve(false);
    });
    let timeout;
    const expired = new Promise(resolve => { timeout = setTimeout(() => resolve(false), 45_000); });
    image.src = `${this.endpoint}/frames/${encodeURIComponent(frame.id)}/image`;
    const success = await Promise.race([loaded, expired]);
    clearTimeout(timeout);
    image.onload = null;
    image.onerror = null;
    if (token !== this.imageToken) return false;
    this.imageLoading = false;
    this.$('.image-loading').hidden = true;
    this.$('.image-stage').setAttribute('aria-busy', 'false');
    if (!success) {
      this.pause();
      this.failedImageIndex = index;
      this.imageError = this.index >= 0 ? 'This image could not be loaded. The previous image is still shown. Try another moment or try again.' : 'This archived image could not be loaded. Please try again later.';
      this.updateStatus();
      this.updateControls();
      return false;
    }
    this.imageError = null;
    this.index = index;
    this.$('.image-mount').replaceChildren(image);
    this.$('.empty-state').hidden = true;
    this.$('.frame-date').textContent = archiveDate(frame.capturedAt);
    this.$('.frame-gap').textContent = gapLabel(this.frames, index);
    const source = safeLink(frame.archiveUrl || frame.sourceImageUrl, true);
    this.$('.source-link').hidden = !source;
    if (source) this.$('.source-link').href = source;
    this.updateControls();
    if (!this.loading) this.updateStatus();
    this.dispatchEvent(new CustomEvent('framechange', { detail: { frame, index, total: this.frames.length }, bubbles: true, composed: true }));
    return true;
  }

  updateControls() {
    const count = this.frames.length;
    const hasMany = count > 1;
    this.$('.previous').disabled = !hasMany || this.index <= 0;
    this.$('.next').disabled = !hasMany || this.index >= count - 1;
    this.$('.play').disabled = !hasMany;
    this.$('.play').setAttribute('aria-pressed', String(this.playing));
    this.$('.play').setAttribute('aria-label', this.playing ? 'Pause website history' : 'Play website history');
    this.$('.play-label').textContent = this.playing ? 'Pause history' : 'Play history';
    this.$('.play-icon').textContent = this.playing ? 'Ⅱ' : '▶';
    const slider = this.$('#history-position');
    slider.disabled = !hasMany;
    slider.max = Math.max(0, count - 1);
    slider.value = Math.max(0, this.index);
    slider.setAttribute('aria-valuetext', this.index >= 0 ? `${archiveDate(this.frames[this.index]?.capturedAt)}, image ${this.index + 1} of ${count}` : 'No image selected');
    this.$('#history-speed').disabled = !hasMany;
    this.$('.enlarge').disabled = this.index < 0;
    this.$('.reload').disabled = this.loading || this.imageLoading;
    this.$('.frame-count').textContent = this.index >= 0 ? `Image ${this.index + 1} / ${count}` : `${count} archived ${count === 1 ? 'image' : 'images'}`;
    this.$('.first-date').textContent = count ? archiveDate(this.frames[0].capturedAt) : '—';
    this.$('.last-date').textContent = count > 1 ? archiveDate(this.frames.at(-1).capturedAt) : '—';
  }
  step(direction) {
    this.pause();
    return this.showFrame(Math.min(this.frames.length - 1, Math.max(0, this.index + direction)));
  }
  pause() {
    clearTimeout(this.timer);
    this.playing = false;
    this.updateControls();
  }
  async togglePlayback() {
    if (this.playing) return this.pause();
    if (this.frames.length < 2 || document.hidden) return;
    this.playing = true;
    this.updateControls();
    if (this.index < 0 || this.index === this.frames.length - 1) {
      if (!await this.showFrame(0)) return;
    }
    this.schedule();
  }
  schedule() {
    clearTimeout(this.timer);
    if (!this.playing) return;
    const delay = (this.motion?.matches ? 6000 : 3000) / Number(this.$('#history-speed').value);
    this.timer = setTimeout(async () => {
      if (!this.playing || document.hidden) return this.pause();
      if (this.index >= this.frames.length - 1) return this.pause();
      if (await this.showFrame(this.index + 1) && this.playing) this.schedule();
    }, delay);
  }
  async enlarge() {
    const panel = this.$('.player');
    if (document.fullscreenElement === this || this.shadowRoot.fullscreenElement) await document.exitFullscreen();
    else if (panel.classList.contains('enlarged')) this.closeEnlargement();
    else {
      try {
        if (!panel.requestFullscreen) throw new Error('Unavailable');
        await panel.requestFullscreen();
      } catch {
        const dialog = this.$('.enlarge-dialog');
        dialog.append(panel);
        panel.classList.add('enlarged');
        dialog.showModal();
        this.$('.enlarge').focus();
      }
    }
    this.updateEnlargeLabel();
  }
  closeEnlargement() {
    const dialog = this.$('.enlarge-dialog');
    const panel = this.$('.player');
    panel.classList.remove('enlarged');
    this.shadowRoot.insertBefore(panel, dialog);
    if (dialog.open) dialog.close();
    this.updateEnlargeLabel();
    this.$('.enlarge').focus();
  }
  updateEnlargeLabel() {
    const enlarged = Boolean(this.shadowRoot.fullscreenElement || document.fullscreenElement === this || this.$('.player').classList.contains('enlarged'));
    this.$('.enlarge').setAttribute('aria-label', enlarged ? 'Close enlarged view' : 'Enlarge archived image');
    this.$('.enlarge-label').textContent = enlarged ? 'Close' : 'Enlarge';
  }
}

if (globalThis.customElements && !customElements.get('website-history')) customElements.define('website-history', WebsiteHistory);
