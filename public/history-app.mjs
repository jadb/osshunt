import './history-player.mjs';
import { filterCatalog, safeLink } from './history-utils.mjs';

const $ = selector => document.querySelector(selector);
let catalog = [];
let selectedId = null;
const player = $('website-history');

function selectProduct(product, updateURL = true) {
  selectedId = product.id;
  $('#product-name').textContent = product.name;
  $('#product-kind').textContent = product.kind === 'paid' ? 'Paid product' : 'Alternative';
  $('#product-categories').textContent = (product.categories ?? []).map(category => category.replaceAll('-', ' ')).join(' · ') || 'Website history';
  const link = $('#product-link');
  const url = safeLink(product.url);
  link.hidden = !url;
  if (url) link.href = url;
  player.setAttribute('product-id', product.id);
  if (updateURL) {
    const location = new URL(window.location.href);
    location.searchParams.set('product', product.id);
    history.replaceState(null, '', location);
  }
  for (const button of $('#product-list').querySelectorAll('button')) {
    const selected = button.dataset.id === selectedId;
    button.setAttribute('aria-pressed', String(selected));
    if (selected) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  }
}

function renderProducts() {
  const products = filterCatalog(catalog, $('#product-search').value, $('input[name="kind"]:checked').value);
  $('#result-count').textContent = `${products.length} ${products.length === 1 ? 'product' : 'products'}${products.length !== catalog.length ? ` of ${catalog.length}` : ''}`;
  const fragment = document.createDocumentFragment();
  for (const product of products) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'product-choice';
    button.dataset.id = product.id;
    button.setAttribute('aria-pressed', String(selectedId === product.id));
    if (selectedId === product.id) button.setAttribute('aria-current', 'true');
    const name = document.createElement('span');
    name.textContent = product.name;
    const kind = document.createElement('small');
    kind.textContent = product.kind === 'paid' ? 'Paid' : 'Alt';
    button.append(name, kind);
    button.addEventListener('click', () => selectProduct(product));
    fragment.append(button);
  }
  if (!products.length) {
    const empty = document.createElement('p');
    empty.className = 'no-results';
    empty.textContent = 'No matching products. Try another name or category.';
    fragment.append(empty);
  }
  $('#product-list').replaceChildren(fragment);
}

async function loadCatalog() {
  $('#catalog-error').hidden = true;
  $('#result-count').textContent = 'Loading the index…';
  try {
    let response;
    try {
      response = await fetch('/api/catalog');
      if (!response.ok) throw new Error('Unavailable');
      catalog = await response.json();
      if (!Array.isArray(catalog)) throw new Error('Unavailable');
    } catch {
      response = await fetch('/catalog.json');
      if (!response.ok) throw new Error('Unavailable');
      catalog = await response.json();
    }
    if (!Array.isArray(catalog) || !catalog.length) throw new Error('Unavailable');
    catalog = catalog.filter(product => product && typeof product.id === 'string' && typeof product.name === 'string');
    catalog.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
    $('#catalog-total').textContent = catalog.length;
    const requested = new URL(window.location.href).searchParams.get('product');
    const selected = catalog.find(product => product.id === (selectedId || requested)) || catalog[0];
    renderProducts();
    if (selected) selectProduct(selected, Boolean(requested));
  } catch {
    $('#catalog-error').hidden = false;
    $('#result-count').textContent = 'Index unavailable';
  }
}

$('#product-search').addEventListener('input', renderProducts);
for (const filter of document.querySelectorAll('input[name="kind"]')) filter.addEventListener('change', renderProducts);
$('#retry-catalog').addEventListener('click', loadCatalog);
window.addEventListener('popstate', () => {
  const id = new URL(window.location.href).searchParams.get('product');
  const product = catalog.find(item => item.id === id);
  if (product) selectProduct(product, false);
});
loadCatalog();
