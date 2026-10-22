import { validateLandingUrl, ArchiveError } from '../history/archive.mjs';
export { ArchiveError };
const USER_AGENT = 'OSSHuntHistory/0.1 (+https://osshunt.com)';
const FIELDS = ['timestamp', 'original', 'mimetype', 'statuscode', 'digest'];
export const sha256 = async (value) =>
  [
    ...new Uint8Array(
      await crypto.subtle.digest('SHA-256', typeof value === 'string' ? new TextEncoder().encode(value) : value),
    ),
  ]
    .map((n) => n.toString(16).padStart(2, '0'))
    .join('');
export const timestampFor = (iso) =>
  new Date(iso)
    .toISOString()
    .replace(/[-:TZ.]/g, '')
    .slice(0, 14);
const cdxIdentity = (value) => {
  const url = validateLandingUrl(value);
  return `${url.hostname.replace(/^www\./, '')}${url.pathname.replace(/\/$/, '') || '/'}${url.search}`;
};
function captureAt(timestamp) {
  if (!/^\d{14}$/.test(timestamp)) throw new ArchiveError('archive_bad_response', 'Invalid capture date');
  const at = `${timestamp.slice(0, 4)}-${timestamp.slice(4, 6)}-${timestamp.slice(6, 8)}T${timestamp.slice(8, 10)}:${timestamp.slice(10, 12)}:${timestamp.slice(12, 14)}.000Z`;
  if (!Number.isFinite(Date.parse(at)) || timestampFor(at) !== timestamp)
    throw new ArchiveError('archive_bad_response', 'Invalid capture date');
  return at;
}
export const archiveUrl = (record) =>
  `https://web.archive.org/web/${record.timestamp}id_/${validateLandingUrl(record.originalUrl).href}`;
function retryAfter(response) {
  const raw = response.headers.get('retry-after');
  if (!raw) return null;
  if (/^\d+$/.test(raw)) return Number(raw);
  return Math.max(1, Math.ceil((Date.parse(raw) - Date.now()) / 1000)) || null;
}
async function collect(url, fetchImpl, combined, accept, maxBytes) {
  let response;
  try {
    response = await fetchImpl(url, {
      signal: combined,
      redirect: 'manual',
      headers: { Accept: accept, 'User-Agent': USER_AGENT },
    });
    if (response.status >= 300 && response.status < 400)
      throw new ArchiveError('archive_redirect', 'Archive redirected the exact request');
    if (response.status !== 200)
      throw new ArchiveError(
        response.status === 429 ? 'archive_rate_limited' : 'archive_unavailable',
        `Archive returned HTTP ${response.status}`,
        { retryAfter: retryAfter(response) },
      );
    if (response.url && response.url !== url)
      throw new ArchiveError('archive_timestamp_mismatch', 'Archive changed the requested URL');
    if (Number(response.headers.get('content-length')) > maxBytes)
      throw new ArchiveError('archive_too_large', 'Archive response exceeds limit');
    const reader = response.body?.getReader();
    if (!reader) throw new ArchiveError('archive_bad_response', 'Archive returned no body');
    const cancel = () => {
      void reader.cancel().catch(() => {});
    };
    combined.addEventListener('abort', cancel, { once: true });
    if (combined.aborted) cancel();
    let size = 0;
    const chunks = [];
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > maxBytes) throw new ArchiveError('archive_too_large', 'Archive response exceeds limit');
        chunks.push(value);
      }
    } finally {
      combined.removeEventListener('abort', cancel);
      void reader.cancel().catch(() => {});
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.length;
    }
    return { response, bytes };
  } catch (error) {
    if (response) await response.body?.cancel().catch(() => {});
    if (error instanceof ArchiveError) throw error;
    throw new ArchiveError(combined.aborted ? 'archive_timeout' : 'archive_unavailable', 'Archive request failed', {
      cause: error,
    });
  }
}
async function request(url, fetchImpl, signal, accept, maxBytes, timeoutMs = 15000) {
  const controller = new AbortController();
  const combined = signal ? AbortSignal.any([signal, controller.signal]) : controller.signal;
  const timer = setTimeout(() => controller.abort(), Math.min(15000, Math.max(1, timeoutMs)));
  let rejectAbort;
  const interrupted = new Promise((_, reject) => {
    rejectAbort = () => reject(new ArchiveError('archive_timeout', 'Archive request timed out'));
  });
  combined.addEventListener('abort', rejectAbort, { once: true });
  if (combined.aborted) rejectAbort();
  try {
    return await Promise.race([collect(url, fetchImpl, combined, accept, maxBytes), interrupted]);
  } finally {
    clearTimeout(timer);
    combined.removeEventListener('abort', rejectAbort);
  }
}
async function queryHtmlRecords(
  input,
  {
    cutoff,
    from = null,
    resumeKey = null,
    fetchImpl = fetch,
    signal,
    limit = 100,
    timeoutMs = 15000,
    latest = false,
  } = {},
) {
  const original = validateLandingUrl(input).href;
  if (!Number.isSafeInteger(limit) || (latest ? limit !== -1 : limit < 1 || limit > 500))
    throw new RangeError('Invalid CDX page limit');
  if (resumeKey !== null && (typeof resumeKey !== 'string' || resumeKey.length > 8192))
    throw new TypeError('Invalid CDX cursor');
  const query = new URL('https://web.archive.org/cdx/search/cdx');
  query.search = new URLSearchParams({
    url: original,
    matchType: 'exact',
    output: 'json',
    fl: FIELDS.join(','),
    filter: 'statuscode:200',
    to: timestampFor(cutoff),
    limit: String(limit),
    showResumeKey: 'true',
  }).toString();
  if (latest) {
    query.searchParams.delete('showResumeKey');
    query.searchParams.set('fastLatest', 'true');
  }
  query.searchParams.append('filter', 'mimetype:text/html');
  if (from) query.searchParams.set('from', timestampFor(from));
  if (resumeKey) query.searchParams.set('resumeKey', resumeKey);
  const { bytes } = await request(query.href, fetchImpl, signal, 'application/json', 2 * 1024 * 1024, timeoutMs);
  let data;
  try {
    data = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    throw new ArchiveError('archive_bad_response', 'Invalid CDX JSON');
  }
  if (!Array.isArray(data) || (data.length && (!Array.isArray(data[0]) || FIELDS.some((f, i) => data[0][i] !== f))))
    throw new ArchiveError('archive_bad_response', 'Invalid CDX columns');
  const rows = data.slice(1);
  let next = null;
  if (rows.at(-1)?.length === 1) {
    next = rows.pop()[0];
    if (rows.pop()?.length !== 0 || typeof next !== 'string' || !next)
      throw new ArchiveError('archive_incomplete', 'Malformed CDX continuation');
  }
  if (rows.length > Math.abs(limit) || (next === resumeKey && next) || (latest && next))
    throw new ArchiveError('archive_incomplete', 'CDX continuation exceeded boundary');
  const records = rows.map((row) => {
    if (!Array.isArray(row) || row.length !== 5 || row.some((v) => typeof v !== 'string'))
      throw new ArchiveError('archive_bad_response', 'Malformed CDX row');
    const [timestamp, target, mimeType, status, digest] = row,
      capturedAt = captureAt(timestamp);
    if (
      cdxIdentity(target) !== cdxIdentity(original) ||
      mimeType !== 'text/html' ||
      status !== '200' ||
      Date.parse(capturedAt) > Date.parse(cutoff) ||
      (from && Date.parse(capturedAt) < Date.parse(from))
    )
      throw new ArchiveError('archive_bad_response', 'Unrelated CDX record');
    if (digest !== '-' && !/^(?:sha1:)?[A-Z2-7]{32}$/i.test(digest))
      throw new ArchiveError('archive_bad_response', 'Invalid archive digest');
    return { timestamp, capturedAt, originalUrl: target, digest: digest === '-' ? null : digest, mimeType };
  });
  if (next && !records.length) throw new ArchiveError('archive_incomplete', 'Empty CDX continuation');
  return { records, resumeKey: next, complete: !next, query: { url: query.href, status: 200 } };
}
export function queryHtmlPage(input, options = {}) {
  return queryHtmlRecords(input, { ...options, latest: false });
}
export async function queryLatestHtml(
  input,
  { cutoff, from = null, fetchImpl = fetch, signal, timeoutMs = 15000 } = {},
) {
  const result = await queryHtmlRecords(input, { cutoff, from, fetchImpl, signal, timeoutMs, limit: -1, latest: true });
  return { record: result.records[0] || null, query: result.query };
}
function normalizedDigest(digest) {
  if (digest == null) return null;
  const expected = digest.replace(/^sha1:/i, '').toUpperCase();
  if (!/^[A-Z2-7]{32}$/.test(expected))
    throw new ArchiveError('archive_digest_mismatch', 'Invalid archived payload digest');
  return expected;
}
async function actualDigest(bytes) {
  const hash = new Uint8Array(await crypto.subtle.digest('SHA-1', bytes));
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let bits = 0,
    value = 0,
    actual = '';
  for (const byte of hash) {
    value = (value << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      bits -= 5;
      actual += alphabet[(value >>> bits) & 31];
    }
  }
  if (bits) actual += alphabet[(value << (5 - bits)) & 31];
  return actual;
}
export async function verifyHtmlIntegrity(bytes, digest) {
  const expected = normalizedDigest(digest);
  if (!expected) return false;
  if ((await actualDigest(bytes)) !== expected)
    throw new ArchiveError('archive_digest_mismatch', 'HTML does not match archived payload digest');
  return true;
}
export async function verifyHtmlEvidence(bytes, recordOrDigest, metadata) {
  const record =
    recordOrDigest && typeof recordOrDigest === 'object'
      ? recordOrDigest
      : { digest: recordOrDigest, capturedAt: metadata?.capturedAt, originalUrl: metadata?.originalUrl };
  if (!metadata || !/^[a-f0-9]{64}$/.test(metadata.sha256 || '') || (await sha256(bytes)) !== metadata.sha256)
    throw new ArchiveError('archive_digest_mismatch', 'Stored HTML SHA-256 does not match its bytes');
  if (
    metadata.originalUrl &&
    validateLandingUrl(metadata.originalUrl).href !== validateLandingUrl(record.originalUrl).href
  )
    throw new ArchiveError('archive_digest_mismatch', 'Stored HTML source identity changed');
  if (metadata.capturedAt && metadata.capturedAt !== record.capturedAt)
    throw new ArchiveError('archive_timestamp_mismatch', 'Stored HTML capture changed');
  if (metadata.mimeType && metadata.mimeType !== 'text/html')
    throw new ArchiveError('archive_bad_response', 'Stored replay was not HTML');
  const transport = metadata.transport;
  if (transport?.status !== undefined && transport.status !== 200)
    throw new ArchiveError('archive_bad_response', 'Stored replay was not HTTP 200');
  if (
    transport?.originalUrl &&
    validateLandingUrl(transport.originalUrl).href !== validateLandingUrl(record.originalUrl).href
  )
    throw new ArchiveError('archive_digest_mismatch', 'Replay source identity changed');
  if (transport?.mementoDatetime && Date.parse(transport.mementoDatetime) !== Date.parse(record.capturedAt))
    throw new ArchiveError('archive_timestamp_mismatch', 'Replay capture date changed');
  const expected = normalizedDigest(record.digest),
    actual = await actualDigest(bytes);
  if (transport?.originalDigest && expected && normalizedDigest(transport.originalDigest) !== expected)
    throw new ArchiveError('archive_digest_mismatch', 'Archive digest differs from inventory');
  if (!expected) return { status: 'unknown', expectedDigest: null, actualDigest: actual };
  if (expected === actual) return { status: 'verified', expectedDigest: record.digest, actualDigest: actual };
  const legacy =
    transport?.status === 200 &&
    transport.originalUrl === record.originalUrl &&
    transport.mementoDatetime &&
    Date.parse(transport.mementoDatetime) === Date.parse(record.capturedAt) &&
    Date.parse(record.capturedAt) < Date.parse('2026-09-17T00:00:00.000Z') &&
    String(transport.archivedTransferEncoding || '')
      .split(',')
      .some((value) => value.trim().toLowerCase() === 'chunked');
  if (!legacy) throw new ArchiveError('archive_digest_mismatch', 'HTML does not match archived payload digest');
  return {
    status: 'legacy_chunked_unverified',
    expectedDigest: record.digest,
    actualDigest: actual,
    reason:
      'The archived digest may include legacy HTTP chunk framing; this cause is unproven. Original digest remains unverified.',
  };
}
function replayTransport(response, record) {
  const header = (name, max = 256) => {
    const value = response.headers.get(name);
    return value ? value.replace(/[\x00-\x1f\x7f]/g, '').slice(0, max) : null;
  };
  let sourceWarc = header('x-archive-src', 512);
  if (sourceWarc?.includes('://')) sourceWarc = null;
  return {
    status: response.status,
    mementoDatetime: header('memento-datetime'),
    originalUrl: record.originalUrl,
    archivedTransferEncoding: header('x-archive-orig-transfer-encoding'),
    originalContentEncoding: header('x-archive-orig-content-encoding'),
    sourceWarc,
    originalDigest: header('x-archive-orig-digest', 128),
  };
}
export async function fetchHtml(
  record,
  { fetchImpl = fetch, signal, maxBytes = 2 * 1024 * 1024, clock = Date.now, timeoutMs = 15000 } = {},
) {
  const url = archiveUrl(record);
  if (captureAt(record.timestamp) !== record.capturedAt)
    throw new ArchiveError('archive_timestamp_mismatch', 'Capture date differs from record');
  const { bytes, response } = await request(url, fetchImpl, signal, 'text/html', maxBytes, timeoutMs);
  if (!/^text\/html(?:;|$)/i.test(response.headers.get('content-type') || ''))
    throw new ArchiveError('archive_bad_response', 'Expected HTML');
  const memento = response.headers.get('memento-datetime');
  if (memento !== null && Date.parse(memento) !== Date.parse(record.capturedAt))
    throw new ArchiveError('archive_timestamp_mismatch', 'Archive substituted capture date');
  const digest = response.headers.get('x-archive-orig-digest');
  if (
    digest &&
    record.digest &&
    digest.replace(/^sha1:/i, '').toUpperCase() !== record.digest.replace(/^sha1:/i, '').toUpperCase()
  )
    throw new ArchiveError('archive_digest_mismatch', 'Archive digest differs from inventory');
  const metadata = {
    sha256: await sha256(bytes),
    digest: record.digest,
    originalUrl: record.originalUrl,
    capturedAt: record.capturedAt,
    archiveUrl: url,
    fetchedAt: new Date(clock()).toISOString(),
    mimeType: 'text/html',
    transport: replayTransport(response, record),
  };
  metadata.integrity = await verifyHtmlEvidence(bytes, record, metadata);
  return { bytes, metadata };
}
