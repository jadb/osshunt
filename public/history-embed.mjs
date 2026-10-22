import './history-player.mjs';

export function initializeEmbed({ search, document: page }) {
  const productId = new URLSearchParams(search).get('product');
  const player = page.querySelector('website-history');
  const error = page.querySelector('#embed-error');
  if (!productId || !/^[a-z0-9-]+$/.test(productId)) {
    player.hidden = true;
    error.hidden = false;
    return false;
  }
  player.hidden = false;
  error.hidden = true;
  page.querySelector('#embed-gallery').href = `/?product=${encodeURIComponent(productId)}`;
  player.addEventListener('framechange', () => {
    const name = player.manifest?.product?.name;
    if (name) {
      page.querySelector('#embed-title').textContent = name;
      page.title = `${name} website history — OSS Hunt`;
    }
  });
  player.setAttribute('product-id', productId);
  return true;
}

if (typeof document !== 'undefined') initializeEmbed({ search: location.search, document });
