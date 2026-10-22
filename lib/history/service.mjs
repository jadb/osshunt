const MONTH = 30 * 24 * 60 * 60 * 1000;
const HOUR = 60 * 60 * 1000;
const MAX_IMAGE = 10 * 1024 * 1024;
const json = (value, status = 200, headers = {}) => Response.json(value, { status, headers: { 'Cache-Control': 'no-store', ...headers } });
const failure = (message, status = 400, code = null, retryAfter = null) => Object.assign(new Error(message), { status, code, retryAfter });
const retrySeconds = value => {
  if (value === null || value === undefined || value === '') return null;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return seconds > 0 ? Math.ceil(seconds) : null;
  const date = Date.parse(value);
  return Number.isFinite(date) ? Math.max(1, Math.ceil((date - Date.now()) / 1000)) : null;
};
const errorCode = error => /^[a-z_]{1,64}$/.test(error?.code) ? error.code : 'archive_unavailable';
const hash = async value => [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)))].map(n => n.toString(16).padStart(2, '0')).join('');
const publicURL = value => {
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || url.port ||
    !url.hostname.includes('.') || /(^|\.)(localhost|local|internal|test|invalid)$/.test(url.hostname) ||
    /^[\d.]+$/.test(url.hostname) || url.hostname.includes(':')) throw failure('Unsafe archive URL');
  return url;
};

// The network destination is always the archive; replay targets are never fetched directly.
export function validateReplay(value, frame) {
  const url = new URL(value);
  const match = url.pathname.match(/^\/web\/(\d{14})(?:id_|im_)?\/(.+)$/);
  if (!['https:', 'http:'].includes(url.protocol) || url.hostname !== 'web.archive.org' || url.port ||
    url.username || url.password || !match || match[1] !== frame.timestamp) throw failure('Unsafe archive replay');
  let target = `${match[2]}${url.search}`;
  if (/^(screenshot|thumbnail):/.test(target)) target = target.replace(/^(screenshot|thumbnail):/, '');
  else if (/^https?:\/\/web\.archive\.org\/screenshot\//.test(target)) target = target.replace(/^https?:\/\/web\.archive\.org\/screenshot\//, '');
  publicURL(target);
  const expected = new URL(frame.sourceImageUrl);
  if (`${url.pathname}${url.search}` !== `${expected.pathname}${expected.search}`) throw failure('Archive replay changed');
  return url;
}

async function bounded(task, milliseconds = 22000) {
  const controller = new AbortController();
  let timer;
  const timeout = new Promise((_, reject) => { timer = setTimeout(() => {
    controller.abort(); reject(failure('Archive request timed out', 504));
  }, milliseconds); });
  try { return await Promise.race([task(controller.signal), timeout]); }
  finally { clearTimeout(timer); controller.abort(); }
}

async function imageBytes(frame, fetchImpl, archive) {
  return bounded(async signal => {
    let target = frame.sourceImageUrl;
    for (let redirects = 0; redirects <= 4; redirects++) {
      validateReplay(target, frame);
      archive.assertExactReplayUrl?.(target, frame);
      const response = await fetchImpl(target, { signal, redirect: 'manual', headers: { Accept: frame.mimeType } });
      if ([301, 302, 303, 307, 308].includes(response.status)) {
        await response.body?.cancel();
        const location = response.headers.get('location');
        if (!location) throw failure('Archive redirect missing destination', 502);
        target = new URL(location, target).href;
        continue;
      }
      if (!response.ok) {
        await response.body?.cancel();
        throw failure('Archived image unavailable', 502, response.status === 429 ? 'archive_rate_limited' : 'archive_unavailable',
          retrySeconds(response.headers.get('retry-after')));
      }
      validateReplay(response.url || target, frame);
      archive.assertExactReplayUrl?.(response.url || target, frame);
      const memento = response.headers.get('Memento-Datetime');
      if (memento !== null && Date.parse(memento) !== Date.parse(frame.capturedAt)) {
        await response.body?.cancel();
        throw failure('Archive capture date changed', 502, 'archive_timestamp_mismatch');
      }
      if (!/^image\/(png|jpeg|gif|webp)(?:;|$)/i.test(response.headers.get('content-type') || '') ||
        Number(response.headers.get('content-length')) > MAX_IMAGE) {
        await response.body?.cancel(); throw failure('Archive returned an invalid image', 502);
      }
      const chunks = []; let size = 0;
      if (!response.body) throw failure('Archive returned no image', 502);
      const reader = response.body.getReader();
      try {
        while (true) {
          const part = await reader.read(); if (part.done) break;
          size += part.value.byteLength;
          if (size > MAX_IMAGE) throw failure('Archived image too large', 502);
          chunks.push(part.value);
        }
      } finally { await reader.cancel(); }
      const bytes = new Uint8Array(size); let offset = 0;
      for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
      const metadata = await archive.verifyImage(bytes, { mimeType: frame.mimeType, digest: frame.digest, maxBytes: MAX_IMAGE });
      return { bytes, metadata };
    }
    throw failure('Too many archive redirects', 502);
  });
}

export function createHistoryService({ catalog, store, archive, fetchImpl = fetch, clock = Date.now }) {
  if (!Array.isArray(catalog)) throw new TypeError('Catalog must be an array');
  const products = new Map(); const imageJobs = new Map(); const refreshJobs = new Map();
  for (const product of catalog) {
    if (!/^[a-zA-Z0-9_-]+$/.test(product.id) || products.has(product.id)) throw new TypeError('Invalid catalog ID');
    publicURL(product.url); products.set(product.id, product);
  }
  const keyFor = product => hash(new URL(product.url).href);
  function manifest(product, record) {
    return { product: { id: product.id, name: product.name, url: product.url, kind: product.kind },
      status: record?.data?.status || 'pending', frames: record?.data?.frames || [],
      checkedAt: record ? new Date(record.checkedMs).toISOString() : null,
      nextCheckAt: record ? new Date(record.checkedMs + MONTH).toISOString() : null,
      error: record?.data?.error || null, errorCode: record?.data?.errorCode || null, retryAfter: record?.data?.retryAfter || null, backfillComplete: record?.data?.backfillComplete || false };
  }
  function validateFrames(frames, product) {
    if (!Array.isArray(frames) || frames.length > 5000) throw failure('Invalid archive inventory', 502);
    const ids = new Set();
    for (const frame of frames) {
      if (!/^[a-zA-Z0-9_-]+$/.test(frame.id) || !/^\d{14}$/.test(frame.timestamp) ||
        !Number.isFinite(Date.parse(frame.capturedAt)) || new URL(frame.originalUrl).href !== new URL(product.url).href ||
        !['image/png', 'image/jpeg', 'image/gif', 'image/webp'].includes(frame.mimeType) ||
        frame.archiveUrl !== frame.sourceImageUrl || ids.has(frame.id)) throw failure('Invalid archive frame', 502);
      const stamp = new Date(frame.capturedAt).toISOString().replace(/[-:TZ.]/g, '').slice(0, 14);
      if (stamp !== frame.timestamp) throw failure('Archive date mismatch', 502);
      ids.add(frame.id); validateReplay(frame.sourceImageUrl, frame);
    }
    return frames;
  }
  async function refresh(product, key) {
    const now = clock(), reserved = await store.reserveRefresh(key, now, MONTH);
    if (!reserved) {
      const current = await store.read(key);
      return { record: current, headers: { 'Retry-After': String(Math.max(1, Math.ceil((current.checkedMs + MONTH - now) / 1000))) } };
    }
    const previous = reserved.data || { frames: [], backfillComplete: false };
    let data;
    try {
      const result = await bounded(signal => archive.discoverScreenshots(product.url, { fetchImpl, signal, maxRecords: 5000 }));
      if (!result.complete) throw failure('Archive inventory incomplete', 502);
      const candidates = validateFrames(result.frames, product);
      let frames;
      if (!previous.backfillComplete) frames = archive.selectHistoricalFrames(candidates);
      else {
        const next = archive.selectNewFrame(candidates, previous.frames);
        frames = next ? [...previous.frames, next] : previous.frames;
      }
      // Empty or failed later inventories never remove a preserved frame.
      if (!frames.length && previous.frames.length) frames = previous.frames;
      data = { frames, status: frames.length ? 'ready' : 'empty', error: null, errorCode: null, retryAfter: null, backfillComplete: true };
    } catch (error) {
      data = { ...previous, status: previous.frames.length ? 'ready' : 'error', error: 'History is temporarily unavailable. Please try again after the next check.', errorCode: errorCode(error), retryAfter: retrySeconds(error.retryAfter) };
    }
    await store.finishRefresh(key, reserved.token, data);
    return { record: await store.read(key), headers: data.retryAfter ? { 'Retry-After': String(data.retryAfter) } : {} };
  }
  async function loadImage(key, frame) {
    const now = clock(), token = await store.reserveImage(key, now, 30000);
    if (!token) throw failure('Archived image is temporarily unavailable', 503);
    try {
      const cached = await store.getImage(key);
      if (cached) return cached;
      const { bytes, metadata } = await imageBytes(frame, fetchImpl, archive);
      const stored = await store.putImage(key, bytes, metadata);
      await store.finishImage(key, token, 0);
      return stored;
    } catch (error) {
      const retryAfter = Math.max(3600, retrySeconds(error.retryAfter) || 0);
      await store.finishImage(key, token, now + retryAfter * 1000);
      throw failure('Archived image is temporarily unavailable', 502, errorCode(error), retrySeconds(error.retryAfter) || 3600);
    }
  }
  return { async fetch(request) {
    try {
      const url = new URL(request.url);
      if (url.pathname === '/api/catalog' && request.method === 'GET' && !url.search) return json(catalog);
      const match = url.pathname.match(/^\/api\/history\/([a-zA-Z0-9_-]+)(?:\/(refresh)|\/frames\/([a-zA-Z0-9_-]+)\/image)?$/);
      const product = match && products.get(match[1]);
      if (!product) return json({ error: 'Product not found' }, 404);
      if (url.search && !(match[3] && url.search === '?cached=1')) throw failure('Unsupported query');
      const key = await keyFor(product);
      if (match[2] && request.method === 'POST') {
        if (request.body) { await request.body.cancel(); throw failure('Refresh does not accept request options'); }
        if (!refreshJobs.has(key)) refreshJobs.set(key, refresh(product, key).finally(() => refreshJobs.delete(key)));
        const outcome = await refreshJobs.get(key);
        return json(manifest(product, outcome.record), 200, outcome.headers);
      }
      if (match[3] && ['GET', 'HEAD'].includes(request.method)) {
        const record = await store.read(key), frame = record?.data?.frames.find(value => value.id === match[3]);
        if (!frame) return json({ error: 'Frame not found' }, 404);
        const imageKey = await hash(`${key}:${frame.id}:${frame.sourceImageUrl}`);
        let image = await store.getImage(imageKey);
        if (!image && (request.method === 'HEAD' || url.searchParams.has('cached'))) return new Response(null, { status: 404 });
        if (!image) {
          if (!imageJobs.has(imageKey)) imageJobs.set(imageKey, loadImage(imageKey, frame).finally(() => imageJobs.delete(imageKey)));
          image = await imageJobs.get(imageKey);
        }
        const headers = { 'Content-Type': image.metadata.mimeType, 'Content-Length': String(image.bytes.length),
          'Cache-Control': 'public, max-age=31536000, immutable', 'ETag': `"${image.metadata.sha256}"`, 'X-Content-Type-Options': 'nosniff' };
        if (request.headers.get('If-None-Match') === headers.ETag) return new Response(null, { status: 304, headers });
        return new Response(request.method === 'HEAD' ? null : image.bytes, { headers });
      }
      if (!match[2] && !match[3] && request.method === 'GET') return json(manifest(product, await store.read(key)));
      return json({ error: 'Method not allowed' }, 405, { Allow: match[2] ? 'POST' : match[3] ? 'GET, HEAD' : 'GET' });
    } catch (error) { return json({ error: error.status ? error.message : 'History is temporarily unavailable', code: errorCode(error) }, error.status || 503,
      error.retryAfter ? { 'Retry-After': String(error.retryAfter) } : error.status === 503 ? { 'Retry-After': '3600' } : {}); }
  } };
}
