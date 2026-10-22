import './history-player.mjs';
import './pricing-history.mjs';

export function initializeEmbed({ search, document: page }) {
  const productId = new URLSearchParams(search).get('product');
  const player = page.querySelector('website-history');
  const pricing = page.querySelector('pricing-history');
  const error = page.querySelector('#embed-error');
  if (!productId || !/^[a-z0-9-]+$/.test(productId)) {
    player.hidden = true;
    if (pricing) pricing.hidden = true;
    error.hidden = false;
    return false;
  }
  player.hidden = false;
  if (pricing) pricing.hidden = false;
  error.hidden = true;
  page.querySelector('#embed-gallery').href = `/?product=${encodeURIComponent(productId)}`;
  const updateTitle = product => {
    if (typeof product?.name !== 'string' || !product.name) return;
    page.querySelector('#embed-title').textContent = product.name;
    page.title = `${product.name} website history — OSS Hunt`;
  };
  pricing?.addEventListener('pricingload', event => {
    if (event.detail?.product?.id === productId) updateTitle(event.detail.product);
  });
  player.addEventListener('framechange', event => {
    const capturedAt = event.detail?.frame?.capturedAt;
    if (pricing && capturedAt) pricing.setAttribute('frame-date', capturedAt);
    updateTitle(player.manifest?.product);
  });
  if (pricing) pricing.setAttribute('product-id', productId);
  player.setAttribute('product-id', productId);
  return true;
}

if (typeof document !== 'undefined') initializeEmbed({ search: location.search, document });
