import { captureTime, screenshotId } from './selection.mjs';

const MIME_TYPES = new Set(['image/png', 'image/jpeg', 'image/gif', 'image/webp']);
const FIELDS = ['timestamp', 'original', 'mimetype', 'statuscode', 'digest'];
const TIMEOUT_MS = 15000;
const MAX_BODY_BYTES = 4 * 1024 * 1024;

export class ArchiveError extends Error {
  constructor(code, message, { retryAfter = null, cause } = {}) {
    super(message, { cause });
    this.name = 'ArchiveError';
    this.code = code;
    this.retryAfter = retryAfter;
  }
}

export function validateLandingUrl(input) {
  if (typeof input !== 'string' || input.length > 8192) throw new ArchiveError('unsafe_url', 'Invalid landing URL');
  let url;
  try { url = new URL(input); } catch { throw new ArchiveError('unsafe_url', 'Invalid landing URL'); }
  const host = url.hostname.toLowerCase();
  // Landing pages are identifiers only; all network requests go to the archive.
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password ||
      (url.port && !['80', '443'].includes(url.port)) || !host.includes('.') ||
      /^[\d.]+$/.test(host) || host.includes(':') ||
      /(^|\.)(localhost|local|internal|test|invalid|example|onion)$/.test(host) ||
      host.endsWith('.') || /[\s*\\]/.test(input)) {
    throw new ArchiveError('unsafe_url', 'A public HTTP(S) landing URL is required');
  }
  url.hash = '';
  return url;
}

function variants(url) {
  return ['http:', 'https:'].map(protocol => {
    const variant = new URL(url);
    variant.protocol = protocol;
    return variant.href;
  });
}

function namespaceTargets(url) {
  return variants(url).flatMap(landing => [
    `http://web.archive.org/screenshot/${landing}`, `screenshot:${landing}`, `thumbnail:${landing}`,
  ]);
}

function targetLanding(target) {
  if (target.startsWith('screenshot:')) return target.slice(11);
  if (target.startsWith('thumbnail:')) return target.slice(10);
  const match = /^https?:\/\/web\.archive\.org\/screenshot\/(https?:\/\/.+)$/.exec(target);
  return match?.[1] || null;
}

function sameLanding(a, b) {
  const one = validateLandingUrl(a);
  const two = validateLandingUrl(b);
  one.protocol = two.protocol = 'https:';
  one.hostname = one.hostname.replace(/^www\./, '');
  two.hostname = two.hostname.replace(/^www\./, '');
  return one.href === two.href;
}

function replayParts(input) {
  let url;
  try { url = new URL(input); } catch { throw new ArchiveError('unsafe_archive_url', 'Invalid archive image URL'); }
  const match = /^\/web\/(\d{14})(?:id_|im_)?\/(.+)$/.exec(url.pathname + url.search);
  if (!['https:', 'http:'].includes(url.protocol) || url.hostname !== 'web.archive.org' || url.port ||
      url.username || url.password || url.hash || !match || !targetLanding(match[2])) {
    throw new ArchiveError('unsafe_archive_url', 'Unexpected archive image URL');
  }
  validateLandingUrl(targetLanding(match[2]));
  return { timestamp: match[1], target: match[2] };
}

export function assertExactReplayUrl(actualUrl, frame) {
  const actual = replayParts(actualUrl);
  const expected = replayParts(frame.sourceImageUrl);
  if (actual.timestamp !== frame.timestamp || expected.timestamp !== frame.timestamp || actual.target !== expected.target) {
    throw new ArchiveError('archive_timestamp_mismatch', 'Archive returned a different image capture');
  }
  return actualUrl;
}

function retryAfter(response) {
  const raw = response.headers.get('retry-after');
  if (!raw) return null;
  if (/^\d+$/.test(raw)) return Number(raw);
  const date = Date.parse(raw);
  return Number.isFinite(date) ? Math.max(0, Math.ceil((date - Date.now()) / 1000)) : null;
}

async function readJson(response) {
  if (Number(response.headers.get('content-length')) > MAX_BODY_BYTES) {
    throw new ArchiveError('archive_incomplete', 'Archive response exceeds the metadata limit');
  }
  const reader = response.body?.getReader();
  let text = '';
  if (reader) {
    const decoder = new TextDecoder();
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new ArchiveError('archive_incomplete', 'Archive response exceeds the metadata limit');
      }
      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();
  } else text = await response.text();
  try { return JSON.parse(text); } catch (cause) {
    throw new ArchiveError('archive_bad_response', 'Archive returned invalid metadata', { cause });
  }
}

function parsePage(data) {
  if (!Array.isArray(data)) throw new ArchiveError('archive_bad_response', 'Expected a CDX array');
  if (!data.length) return { rows: [], resumeKey: null };
  if (!Array.isArray(data[0]) || FIELDS.some((field, index) => data[0][index] !== field)) {
    throw new ArchiveError('archive_bad_response', 'Unexpected CDX columns');
  }
  const rows = data.slice(1);
  let resumeKey = null;
  if (rows.at(-1)?.length === 1 && typeof rows.at(-1)[0] === 'string') {
    resumeKey = rows.pop()[0];
    if (rows.pop()?.length !== 0 || !resumeKey) throw new ArchiveError('archive_incomplete', 'Malformed CDX continuation');
  }
  if (rows.some(row => !Array.isArray(row) || row.length !== FIELDS.length || row.some(value => typeof value !== 'string'))) {
    throw new ArchiveError('archive_bad_response', 'Malformed CDX record');
  }
  return { rows, resumeKey };
}

export async function discoverScreenshots(input, { fetchImpl = fetch, signal, maxRecords = 5000 } = {}) {
  const landing = validateLandingUrl(input);
  if (!Number.isSafeInteger(maxRecords) || maxRecords < 1 || maxRecords > 50000) throw new RangeError('maxRecords must be between 1 and 50000');
  const frames = new Map();
  const queries = [];
  let count = 0;
  let reserved = 0;
  let firstFailure = null;
  const controller = new AbortController();
  const discoverySignal = signal ? AbortSignal.any([signal, controller.signal]) : controller.signal;
  const waiting = new Set();
  const wake = () => { for (const resolve of waiting) resolve(); waiting.clear(); };
  discoverySignal.addEventListener('abort', wake, { once: true });
  const pageSize = Math.min(500, Math.max(1, Math.floor((maxRecords + 1) / 6)));
  async function reservePage() {
    while (true) {
      if (discoverySignal.aborted) throw new ArchiveError('archive_aborted', 'Screenshot discovery was cancelled');
      const available = maxRecords + 1 - count - reserved;
      if (available > 0) {
        const limit = Math.min(pageSize, available);
        reserved += limit;
        return limit;
      }
      await new Promise(resolve => waiting.add(resolve));
    }
  }
  async function discoverNamespace(target) {
    let resumeKey = null;
    const seenKeys = new Set();
    do {
      const limit = await reservePage();
      const query = new URL('https://web.archive.org/cdx/search/cdx');
      query.search = new URLSearchParams({ url: target, matchType: 'exact', output: 'json', fl: FIELDS.join(','),
        limit: String(limit), showResumeKey: 'true' }).toString();
      if (resumeKey) query.searchParams.set('resumeKey', resumeKey);
      const timeout = AbortSignal.timeout(TIMEOUT_MS);
      const requestSignal = AbortSignal.any([discoverySignal, timeout]);
      let response;
      let page;
      try {
        response = await fetchImpl(query.href, { signal: requestSignal, redirect: 'error', headers: { Accept: 'application/json' } });
        queries.push({ url: query.href, status: response.status });
        if (!response.ok) {
          await response.body?.cancel();
          if (response.status === 429) throw new ArchiveError('archive_rate_limited', 'Archive rate limit reached', { retryAfter: retryAfter(response) });
          throw new ArchiveError('archive_unavailable', `Archive returned HTTP ${response.status}`, { retryAfter: retryAfter(response) });
        }
        page = parsePage(await readJson(response));
        if (page.rows.length > limit) throw new ArchiveError('archive_incomplete', 'Archive exceeded the requested record limit');
        count += page.rows.length;
      } catch (cause) {
        if (cause instanceof ArchiveError) throw cause;
        const code = requestSignal.aborted ? (discoverySignal.aborted ? 'archive_aborted' : 'archive_timeout') : 'archive_unavailable';
        throw new ArchiveError(code, 'Screenshot discovery could not complete', { cause });
      } finally {
        reserved -= limit;
        wake();
      }
      if (count > maxRecords) throw new ArchiveError('archive_incomplete', 'Screenshot record limit reached');
      for (const [timestamp, original, mimeType, , rawDigest] of page.rows) {
        if (!MIME_TYPES.has(mimeType)) continue;
        if (!targetLanding(original) || !sameLanding(targetLanding(original), landing.href)) {
          throw new ArchiveError('archive_bad_response', 'Archive returned an unrelated screenshot');
        }
        const digest = rawDigest === '-' ? null : rawDigest.replace(/^sha1:/i, '').toUpperCase();
        if (digest && !/^[A-Z2-7]{32}$/.test(digest)) throw new ArchiveError('archive_bad_response', 'Invalid screenshot digest');
        const frame = { timestamp, originalUrl: landing.href,
          sourceImageUrl: `https://web.archive.org/web/${timestamp}id_/${original}`,
          archiveUrl: `https://web.archive.org/web/${timestamp}id_/${original}`, digest, mimeType,
          imageKind: original.startsWith('thumbnail:') ? 'thumbnail' : 'screenshot' };
        try { frame.capturedAt = new Date(captureTime(frame)).toISOString(); } catch (cause) {
          throw new ArchiveError('archive_bad_response', 'Invalid screenshot timestamp', { cause });
        }
        frame.id = screenshotId(frame);
        frames.set(frame.id, frame);
      }
      resumeKey = page.resumeKey;
      if (resumeKey && (seenKeys.has(resumeKey) || !page.rows.length || count >= maxRecords)) {
        throw new ArchiveError('archive_incomplete', 'Screenshot pagination could not complete');
      }
      if (resumeKey) seenKeys.add(resumeKey);
    } while (resumeKey);
  }
  try {
    // Six independent namespace tasks; each owns its sequential continuation chain.
    await Promise.allSettled(namespaceTargets(landing).map(target => discoverNamespace(target).catch(error => {
      if (!firstFailure) firstFailure = error;
      controller.abort();
      throw error;
    })));
    if (firstFailure) throw firstFailure;
  } finally {
    discoverySignal.removeEventListener('abort', wake);
  }
  return { frames: [...frames.values()].sort((a, b) => a.timestamp.localeCompare(b.timestamp) || a.id.localeCompare(b.id)), complete: true, queries };
}
