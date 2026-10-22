import { archiveDate } from './history-utils.mjs';
import { shouldRefreshPricing, canResumePricing, cooldownAllows, confirmedObservations, pricingForFrame, offerLabel, sourceArchiveLink } from './pricing-utils.mjs';

const stylesheet = new URL('./pricing-history.css', import.meta.url).href;
const BaseElement = globalThis.HTMLElement ?? class {};
const messages = {
  awaiting_discovery: 'Historical pricing has not been checked yet.',
  archive_cooldown: 'The archive has asked us to wait. Saved pricing remains available.',
  archive_unavailable: 'The archive is temporarily unavailable. Saved confirmed pricing remains available.',
  inventory_limit: 'Pricing discovery reached its saved inventory limit. Confirmed observations remain available.',
  incomplete_inventory: 'Pricing discovery is incomplete. Continue the saved search when the archive is available.',
  missing_landing: 'No archived landing page was available for the sampled dates.',
  missing_pricing: 'No matching archived pricing page was available for the sampled dates.',
  wrong_scope: 'A pricing page could not be matched to this product.',
  extraction_unavailable: 'Archived pages did not provide verifiable pricing text.',
  review_pending: 'Archived pricing is awaiting review. Only confirmed observations appear here.',
  no_commercial_offer: 'The reviewed archive evidence indicates no commercial offer.',
  sampling_gap: 'No pricing capture met the six-month sampling interval.',
  inventory_limit: 'This archive history exceeds the retrieval limits. Coverage is incomplete; saved evidence remains available.',
};

export class PricingHistory extends BaseElement {
  static observedAttributes = ['product-id', 'api-base', 'frame-date'];
  constructor() {
    super();
    this.manifest = null;
    this.index = -1;
    this.requestToken = 0;
    this.loading = false;
    this.associated = false;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<link rel="stylesheet" href="${stylesheet}">
      <section class="pricing" aria-labelledby="pricing-title">
        <header><h2 id="pricing-title">Pricing through time</h2><p>Confirmed archive observations, at least six calendar months apart.</p></header>
        <div class="pricing-navigation"><button class="previous" type="button" aria-label="Previous pricing observation" disabled>←</button><label for="pricing-position">Pricing observation</label><select id="pricing-position" disabled></select><button class="next" type="button" aria-label="Next pricing observation" disabled>→</button></div>
        <p class="association"></p><p class="observation-date"></p><p class="scope"></p><div class="sources"></div>
        <div class="plans"></div><div class="changes"></div><p class="quality"></p>
        <footer><p class="status" role="status" aria-live="polite">Choose a product to view historical pricing.</p><p class="checks"></p><p class="coverage"></p><button class="resume" type="button" hidden>Continue saved pricing search</button><button class="reload" type="button" hidden>Reload saved pricing</button></footer>
      </section>`;
    this.$ = selector => this.shadowRoot.querySelector(selector);
    this.$('.previous').addEventListener('click', () => this.select(this.index - 1));
    this.$('.next').addEventListener('click', () => this.select(this.index + 1));
    this.$('#pricing-position').addEventListener('change', event => this.select(Number(event.target.value)));
    this.$('.resume').addEventListener('click', () => { if (canResumePricing(this.manifest)) this.load(false, true); });
    this.$('.reload').addEventListener('click', () => this.load());
  }
  get observations() { return confirmedObservations(this.manifest?.observations); }
  get endpoint() { return `${(this.getAttribute('api-base') || '').replace(/\/$/, '')}/api/pricing/${encodeURIComponent(this.getAttribute('product-id') || '')}`; }
  connectedCallback() { if (this.getAttribute('product-id')) this.load(); }
  disconnectedCallback() { this.abort?.abort(); this.requestToken++; clearTimeout(this.retryTimer); }
  attributeChangedCallback(name, before, after) {
    if (before === after || !this.isConnected) return;
    if (name === 'frame-date') { this.associateFrame(); this.render(); }
    else this.load(true);
  }
  node(tag, text, className) {
    const node = document.createElement(tag);
    if (text != null) node.textContent = String(text);
    if (className) node.className = className;
    return node;
  }
  async load(reset = false, resume = false) {
    if (!/^[a-z0-9-]+$/.test(this.getAttribute('product-id') || '')) return;
    this.abort?.abort();
    this.abort = new AbortController();
    const token = ++this.requestToken;
    if (reset) { this.manifest = null; this.index = -1; }
    this.loading = true;
    this.failed = false;
    this.render();
    try {
      const response = await fetch(this.endpoint, { signal: this.abort.signal });
      if (!response.ok) throw new Error('Pricing unavailable');
      const manifest = await response.json();
      if (token !== this.requestToken) return;
      this.accept(manifest);
      if (resume ? canResumePricing(manifest) : shouldRefreshPricing(manifest)) {
        const refresh = await fetch(`${this.endpoint}/refresh`, { method: 'POST', signal: this.abort.signal });
        const updated = await refresh.json().catch(() => null);
        if (token !== this.requestToken) return;
        if (updated && Array.isArray(updated.observations)) this.accept(updated);
        if (!refresh.ok && ![409, 429].includes(refresh.status)) throw new Error('Pricing unavailable');
      }
    } catch (error) {
      if (token !== this.requestToken || error.name === 'AbortError') return;
      this.failed = true;
    } finally {
      if (token === this.requestToken) { this.loading = false; this.render(); }
    }
  }
  accept(manifest) {
    if (!manifest || !Array.isArray(manifest.observations)) throw new Error('Pricing unavailable');
    const oldId = this.observations[this.index]?.id;
    this.manifest = typeof manifest.retryAfter === 'number' && !manifest.retryAt && Number.isFinite(manifest.retryAfter)
      ? { ...manifest, retryAt: new Date(Date.now() + Math.max(0, manifest.retryAfter) * 1000).toISOString() } : manifest;
    this.index = this.observations.findIndex(item => item.id === oldId);
    if (this.index < 0) this.index = this.observations.length - 1;
    if (this.getAttribute('frame-date')) this.associateFrame();
    this.render();
    if (this.manifest.product) this.dispatchEvent(new CustomEvent('pricingload', {
      detail: { product: this.manifest.product }, bubbles: true, composed: true,
    }));
  }
  associateFrame() {
    this.associated = Boolean(this.getAttribute('frame-date'));
    if (!this.associated) { this.index = this.observations.length - 1; return; }
    const { observation } = pricingForFrame(this.observations, this.getAttribute('frame-date'));
    this.index = observation ? this.observations.findIndex(item => item.id === observation.id) : -1;
  }
  select(index) {
    if (index < 0 || index >= this.observations.length) return;
    this.index = index;
    this.associated = false;
    this.render();
  }
  render() {
    clearTimeout(this.retryTimer);
    const retryAt = Date.parse(this.manifest?.retryAt ?? this.manifest?.retryAfter);
    if (Number.isFinite(retryAt) && retryAt > Date.now()) {
      this.retryTimer = setTimeout(() => this.render(), Math.min(2_147_483_647, retryAt - Date.now()));
    }
    const observations = this.observations;
    const observation = observations[this.index];
    const select = this.$('#pricing-position');
    select.replaceChildren(...observations.map((item, index) => {
      const option = this.node('option', archiveDate(item.pricingCapturedAt));
      option.value = String(index);
      return option;
    }));
    select.value = String(this.index);
    select.disabled = !observations.length;
    this.$('.previous').disabled = this.index <= 0;
    this.$('.next').disabled = !observations.length || this.index >= observations.length - 1;
    const association = this.$('.association');
    if (this.associated) {
      const { stale } = pricingForFrame(observations, this.getAttribute('frame-date'));
      association.textContent = !observation ? 'No confirmed pricing evidence was available by this image date. Choose a pricing observation to explore independently.' : `${stale ? 'Stale last-known pricing' : 'Last-known pricing'} available by the selected image date. Pricing and image capture dates differ.`;
    } else association.textContent = observations.length ? 'Independent pricing timeline. Each observation keeps its own archive date.' : '';
    this.$('.observation-date').textContent = observation ? `Pricing captured ${archiveDate(observation.pricingCapturedAt)} · Confirmed` : '';
    this.$('.scope').textContent = observation ? [observation.scope?.edition, observation.scope?.deployment === 'unknown' ? 'Deployment scope unknown' : observation.scope?.deployment].filter(Boolean).join(' · ') : '';
    this.$('.sources').replaceChildren();
    this.$('.plans').replaceChildren();
    this.$('.changes').replaceChildren();
    this.$('.quality').textContent = '';
    if (observation) this.renderObservation(observation);
    const status = this.manifest?.status;
    this.$('.status').textContent = this.failed ? 'Pricing could not be loaded. Saved confirmed observations remain available.' : this.loading ? 'Looking up archived pricing…' : messages[status] || (observations.length ? `${observations.length} confirmed pricing ${observations.length === 1 ? 'observation' : 'observations'}.` : 'No confirmed historical pricing is available yet.');
    this.$('.checks').textContent = this.manifest?.checkedAt ? `Last checked ${archiveDate(this.manifest.checkedAt)}${this.manifest.nextCheckAt ? ` · Next check from ${archiveDate(this.manifest.nextCheckAt)}` : ''}` : 'Pricing checks use six calendar months, independently of image history.';
    if (Number.isFinite(retryAt)) this.$('.checks').textContent += ` · Archive retry from ${archiveDate(new Date(retryAt).toISOString())}`;
    const coverage = Array.isArray(this.manifest?.coverage) ? this.manifest.coverage : [];
    const gaps = coverage.filter(item => !['confirmed', 'review_pending'].includes(item.status)).length;
    this.$('.coverage').textContent = gaps ? `${gaps} sampled ${gaps === 1 ? 'date has' : 'dates have'} incomplete or unavailable evidence. Gaps are not reconstructed.` : '';
    this.$('.resume').hidden = !['incomplete', 'incomplete_inventory'].includes(status);
    this.$('.resume').disabled = this.loading || !canResumePricing(this.manifest);
    this.$('.reload').hidden = !this.failed && !['archive_cooldown', 'archive_unavailable'].includes(status);
    this.$('.reload').disabled = this.loading || !cooldownAllows(this.manifest);
  }
  renderObservation(observation) {
    for (const [label, url, date] of [['Pricing source', observation.pricingArchiveUrl, observation.pricingCapturedAt], ['Landing source', observation.landingArchiveUrl, observation.landingCapturedAt]]) {
      const safe = sourceArchiveLink(url, date);
      if (!safe) continue;
      const link = this.node('a', `${label} · ${archiveDate(date)} ↗`);
      link.href = safe; link.target = '_blank'; link.rel = 'noopener noreferrer';
      this.$('.sources').append(link);
    }
    if (observation.provenance === 'current-source-hint') this.$('.sources').append(this.node('p', 'Pricing URL supplied by a current source hint; historical landing linkage is unverified.'));
    for (const plan of observation.plans ?? []) {
      const card = this.node('article', null, 'plan');
      card.append(this.node('h3', plan.name || 'Unnamed plan'));
      if (plan.popular === true) card.append(this.node('p', 'Labelled popular in the source', 'plan-note'));
      if (plan.kind === 'addon') card.append(this.node('p', 'Add-on', 'plan-note'));
      card.append(this.node('p', { free: 'Free plan', trial: 'Trial', quote: 'Contact sales for pricing', unknown: 'Price unknown' }[plan.status] || 'Paid plan', 'plan-note'));
      if (!plan.offers?.length && !['free', 'trial', 'quote'].includes(plan.status)) card.append(this.node('p', 'Price unknown', 'offer'));
      for (const offer of plan.offers ?? []) card.append(this.node('p', offerLabel(offer), 'offer'));
      const features = this.node('ul');
      for (const feature of plan.features ?? []) features.append(this.node('li', `${feature.name}${feature.value == null ? ': unknown' : `: ${feature.value}`}`));
      card.append(features);
      this.$('.plans').append(card);
    }
    if (!observation.plans?.length) this.$('.plans').append(this.node('p', 'No confirmed plan structure is available for this observation.'));
    this.$('.quality').textContent = [observation.quality === 'partial' ? 'Partial evidence; missing fields remain unknown.' : '', ...(observation.issues ?? [])].filter(Boolean).join(' ');
    const comparison = this.manifest?.changes?.find(item => item.toId === observation.id);
    if (comparison) {
      this.$('.changes').append(this.node('h3', 'Changes since the previous observation'));
      if (comparison.status !== 'comparable') this.$('.changes').append(this.node('p', 'These observations do not support a like-for-like price comparison.'));
      else for (const change of comparison.changes ?? []) this.$('.changes').append(this.node('p', [change.plan, change.detail].filter(Boolean).join(' · ')));
    }
  }
}

if (globalThis.customElements && !customElements.get('pricing-history')) customElements.define('pricing-history', PricingHistory);
