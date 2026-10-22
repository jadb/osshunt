const timestamp = value => typeof value === 'string' ? Date.parse(value) : NaN;
const incomplete = manifest => ['incomplete', 'incomplete_inventory'].includes(manifest?.status);

export function addSixMonths(value) {
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return null;
  const day = date.getUTCDate();
  date.setUTCDate(1);
  date.setUTCMonth(date.getUTCMonth() + 6);
  const last = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0)).getUTCDate();
  date.setUTCDate(Math.min(day, last));
  return date.toISOString();
}

function cooldownAllows(manifest, now) {
  if (!manifest?.retryAfter) return true;
  const retry = timestamp(manifest.retryAfter);
  return Number.isFinite(retry) && retry <= now;
}

export function shouldRefreshPricing(manifest, now = Date.now()) {
  if (!manifest || incomplete(manifest) || !cooldownAllows(manifest, now)) return false;
  if (manifest.nextCheckAt) {
    const next = timestamp(manifest.nextCheckAt);
    return Number.isFinite(next) && next <= now;
  }
  if (manifest.checkedAt) {
    const next = addSixMonths(manifest.checkedAt);
    return next !== null && timestamp(next) <= now;
  }
  return ['pending', 'awaiting_discovery', 'archive_cooldown'].includes(manifest.status);
}

export function canResumePricing(manifest, now = Date.now()) {
  return incomplete(manifest) && cooldownAllows(manifest, now);
}

export function confirmedObservations(observations = []) {
  return observations.filter(item => item?.reviewState === 'confirmed' && Number.isFinite(timestamp(item.pricingCapturedAt)))
    .sort((a, b) => timestamp(a.pricingCapturedAt) - timestamp(b.pricingCapturedAt));
}

export function pricingForFrame(observations, frameDate) {
  const frame = timestamp(frameDate);
  if (!Number.isFinite(frame)) return { observation: null, stale: false };
  const eligible = confirmedObservations(observations).filter(item => {
    const dates = [item.evidenceAvailableAt, item.landingCapturedAt, item.pricingCapturedAt,
      ...(item.aliasEvidenceAt ?? []), ...(item.aliasCapturedAt ? [item.aliasCapturedAt] : [])];
    return dates.every(value => Number.isFinite(timestamp(value)) && timestamp(value) <= frame);
  });
  const observation = eligible.at(-1) ?? null;
  return { observation, stale: Boolean(observation && frame > timestamp(addSixMonths(observation.pricingCapturedAt))) };
}

export function offerLabel(offer) {
  const parts = [];
  if (offer.literal) parts.push(offer.literal);
  else if (offer.amount != null) parts.push(`${offer.currency || 'Currency unknown'} ${offer.amount}`);
  else parts.push('Price unknown');
  if (offer.amount != null && !offer.currency) parts.push('currency unknown');
  if (offer.billingPeriod && offer.billingPeriod !== 'unknown') parts.push(`per ${offer.billingPeriod}`);
  if (offer.unit) parts.push(`per ${offer.unit}`);
  if (offer.commitment && offer.commitment !== 'unknown') parts.push(`${offer.commitment} commitment`);
  if (offer.minimumQuantity != null) parts.push(`minimum ${offer.minimumQuantity}`);
  const q = offer.qualifications ?? {};
  if (q.startingAt) parts.push('starting at');
  for (const field of ['region', 'locale', 'tax', 'promotion', 'range', 'volume', 'billingVariant']) if (q[field]) parts.push(q[field]);
  return parts.join(' · ');
}

export function sourceArchiveLink(value, capturedAt) {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.hostname !== 'web.archive.org' || url.port || url.username || url.password) return null;
    const match = url.pathname.match(/^\/web\/(\d{14})(?:[a-z_]+)?\/(https?:\/\/.+)$/i);
    if (!match || !Number.isFinite(timestamp(capturedAt))) return null;
    const exact = new Date(capturedAt).toISOString().replace(/[-:T]/g, '').slice(0, 14);
    if (match[1] !== exact) return null;
    const original = new URL(match[2]);
    if (!['http:', 'https:'].includes(original.protocol) || original.username || original.password) return null;
    return url.href;
  } catch { return null; }
}
