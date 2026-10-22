import { ArchiveError } from './archive.mjs';

const fail = message => { throw new ArchiveError('invalid_image', message); };
const ascii = (bytes, start, length) => String.fromCharCode(...bytes.subarray(start, start + length));

function dimensions(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (bytes.length >= 45 && ascii(bytes, 0, 8) === '\x89PNG\r\n\x1a\n') {
    if (view.getUint32(8) !== 13 || ascii(bytes, 12, 4) !== 'IHDR' ||
        ascii(bytes, bytes.length - 8, 4) !== 'IEND') fail('Invalid PNG structure');
    return ['image/png', view.getUint32(16), view.getUint32(20)];
  }
  if (bytes.length >= 14 && ['GIF87a', 'GIF89a'].includes(ascii(bytes, 0, 6))) {
    if (bytes.at(-1) !== 0x3b) fail('Invalid GIF structure');
    return ['image/gif', view.getUint16(6, true), view.getUint16(8, true)];
  }
  if (bytes.length >= 12 && bytes[0] === 0xff && bytes[1] === 0xd8) {
    if (bytes.at(-2) !== 0xff || bytes.at(-1) !== 0xd9) fail('Truncated JPEG');
    let offset = 2;
    while (offset < bytes.length - 2) {
      if (bytes[offset++] !== 0xff) fail('Invalid JPEG marker');
      while (bytes[offset] === 0xff) offset++;
      const marker = bytes[offset++];
      if (marker === 0xda || marker === 0xd9) break;
      if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) continue;
      if (offset + 2 > bytes.length) fail('Truncated JPEG segment');
      const length = view.getUint16(offset);
      if (length < 2 || offset + length > bytes.length) fail('Invalid JPEG segment');
      if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
        if (length < 8) fail('Invalid JPEG dimensions');
        return ['image/jpeg', view.getUint16(offset + 5), view.getUint16(offset + 3)];
      }
      offset += length;
    }
    fail('JPEG has no dimensions');
  }
  if (bytes.length >= 30 && ascii(bytes, 0, 4) === 'RIFF' && ascii(bytes, 8, 4) === 'WEBP') {
    if (view.getUint32(4, true) + 8 !== bytes.length) fail('Truncated WebP');
    let offset = 12;
    while (offset + 8 <= bytes.length) {
      const kind = ascii(bytes, offset, 4);
      const size = view.getUint32(offset + 4, true);
      const start = offset + 8;
      if (start + size > bytes.length) fail('Invalid WebP chunk');
      if (kind === 'VP8X' && size >= 10) {
        const uint24 = at => bytes[at] + (bytes[at + 1] << 8) + (bytes[at + 2] << 16);
        return ['image/webp', uint24(start + 4) + 1, uint24(start + 7) + 1];
      }
      if (kind === 'VP8 ' && size >= 10 && ascii(bytes, start + 3, 3) === '\x9d\x01\x2a') {
        return ['image/webp', view.getUint16(start + 6, true) & 0x3fff, view.getUint16(start + 8, true) & 0x3fff];
      }
      if (kind === 'VP8L' && size >= 5 && bytes[start] === 0x2f) {
        const bits = view.getUint32(start + 1, true);
        return ['image/webp', (bits & 0x3fff) + 1, ((bits >>> 14) & 0x3fff) + 1];
      }
      offset = start + size + (size % 2);
    }
    fail('WebP has no dimensions');
  }
  fail('Only PNG, JPEG, GIF and WebP images are accepted');
}

function base32(bytes) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let bits = 0;
  let value = 0;
  let result = '';
  for (const byte of bytes) {
    value = (value << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      bits -= 5;
      result += alphabet[(value >>> bits) & 31];
    }
  }
  if (bits) result += alphabet[(value << (5 - bits)) & 31];
  return result;
}

export async function verifyImage(input, { mimeType, digest, maxBytes = 10485760 } = {}) {
  if (!Number.isSafeInteger(maxBytes) || maxBytes < 1) throw new RangeError('Invalid image byte limit');
  const bytes = input instanceof ArrayBuffer ? new Uint8Array(input) :
    ArrayBuffer.isView(input) ? new Uint8Array(input.buffer, input.byteOffset, input.byteLength) : null;
  if (!bytes || !bytes.byteLength || bytes.byteLength > maxBytes) fail('Image byte limit exceeded or empty image');
  const [actualMime, width, height] = dimensions(bytes);
  if (!width || !height || width > 100000 || height > 100000 || width * height > 100000000) fail('Image dimensions exceed the limit');
  if (mimeType && mimeType.toLowerCase().split(';')[0].trim() !== actualMime) fail('Image content type does not match its bytes');
  if (digest != null) {
    const expected = digest.replace(/^sha1:/i, '').toUpperCase();
    if (!/^[A-Z2-7]{32}$/.test(expected)) fail('Invalid archive SHA-1 digest');
    const actual = base32(new Uint8Array(await crypto.subtle.digest('SHA-1', bytes)));
    if (actual !== expected) throw new ArchiveError('image_digest_mismatch', 'Image does not match the archived payload digest');
  }
  const hash = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
  return { mimeType: actualMime, width, height, size: bytes.byteLength,
    sha256: Array.from(hash, byte => byte.toString(16).padStart(2, '0')).join('') };
}
