export const MIN_INTERVAL_MS = 30 * 24 * 60 * 60 * 1000;

export function captureTime(frame) {
  const timestamp = frame?.timestamp;
  if (!/^\d{14}$/.test(timestamp || '')) throw new TypeError('Invalid screenshot timestamp');
  const iso = `${timestamp.slice(0, 4)}-${timestamp.slice(4, 6)}-${timestamp.slice(6, 8)}T${timestamp.slice(8, 10)}:${timestamp.slice(10, 12)}:${timestamp.slice(12, 14)}.000Z`;
  const ms = Date.parse(iso);
  if (!Number.isFinite(ms) || new Date(ms).toISOString() !== iso) throw new TypeError('Invalid screenshot date');
  return ms;
}

// Reversible encoding avoids collisions and needs no asynchronous hashing API.
export function screenshotId(frame) {
  captureTime(frame);
  const key = JSON.stringify([frame.sourceImageUrl || frame.archiveUrl || frame.originalUrl, frame.digest || null]);
  const encoded = btoa(String.fromCharCode(...new TextEncoder().encode(key)))
    .replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
  return `${frame.timestamp}-${encoded}`;
}

function unique(frames) {
  const seen = new Set();
  const full = frames.filter(frame => frame.imageKind !== 'thumbnail');
  const preferred = frames.filter(frame => frame.imageKind !== 'thumbnail' ||
    !full.some(screenshot => Math.abs(captureTime(screenshot) - captureTime(frame)) < MIN_INTERVAL_MS));
  return preferred.sort((a, b) => captureTime(a) - captureTime(b) || screenshotId(a).localeCompare(screenshotId(b)))
    .filter(frame => {
      const key = frame.digest ? `digest:${frame.digest}` : screenshotId(frame);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

export function selectHistoricalFrames(frames) {
  const selected = [];
  for (const frame of unique(frames)) {
    if (!selected.length || captureTime(frame) - captureTime(selected.at(-1)) >= MIN_INTERVAL_MS) selected.push(frame);
  }
  return selected;
}

export function selectNewFrame(frames, existing = []) {
  const ids = new Set(existing.map(screenshotId));
  const digests = new Set(existing.map(frame => frame.digest).filter(Boolean));
  const latest = existing.length ? Math.max(...existing.map(captureTime)) : -Infinity;
  const eligible = frames.filter(frame => captureTime(frame) - latest >= MIN_INTERVAL_MS && !ids.has(screenshotId(frame)) &&
    !(frame.digest && digests.has(frame.digest)));
  const full = eligible.filter(frame => frame.imageKind !== 'thumbnail');
  const preferred = eligible.filter(frame => frame.imageKind !== 'thumbnail' ||
    !full.some(screenshot => Math.abs(captureTime(screenshot) - captureTime(frame)) < MIN_INTERVAL_MS));
  return preferred.sort((a, b) => captureTime(b) - captureTime(a) || screenshotId(a).localeCompare(screenshotId(b)))
    [0] || null;
}
