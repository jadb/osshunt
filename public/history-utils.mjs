const DAY = 86_400_000;
export const DATE_FORMAT = new Intl.DateTimeFormat('en', { dateStyle: 'long', timeZone: 'UTC' });

export function archiveDate(value) {
  const date = new Date(value);
  return Number.isFinite(date.getTime()) ? DATE_FORMAT.format(date) : 'Date unavailable';
}

export function shouldRefresh(manifest, now = Date.now()) {
  if (!manifest || manifest.status === 'pending') return true;
  if (manifest.nextCheckAt) {
    const next = Date.parse(manifest.nextCheckAt);
    return Number.isFinite(next) && next <= now;
  }
  const checked = Date.parse(manifest.checkedAt);
  return Number.isFinite(checked) && now - checked >= 30 * DAY;
}

export function historySummary(frames) {
  if (!frames.length) return 'No archived images available yet';
  if (frames.length === 1) return '1 archived image · a single moment in time';
  return `${frames.length} archived images · ${archiveDate(frames[0].capturedAt)} – ${archiveDate(frames.at(-1).capturedAt)}`;
}

export function gapLabel(frames, index) {
  if (index < 1 || !frames[index]) return '';
  const days = Math.floor((Date.parse(frames[index].capturedAt) - Date.parse(frames[index - 1].capturedAt)) / DAY);
  if (!Number.isFinite(days) || days <= 31) return '';
  return `${days.toLocaleString('en')} days since the previous image. No images are shown for the intervening period.`;
}

export function safeLink(value, archiveOnly = false) {
  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    if (archiveOnly && url.hostname !== 'archive.org' && !url.hostname.endsWith('.archive.org')) return null;
    return url.href;
  } catch { return null; }
}

export function filterCatalog(catalog, query, kind) {
  const search = query.trim().toLocaleLowerCase('en');
  return catalog.filter(product => (!kind || product.kind === kind) &&
    [product.name, product.url, ...(product.categories ?? [])].join(' ').toLocaleLowerCase('en').includes(search));
}
