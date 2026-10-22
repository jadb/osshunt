import { serializedCheckpoint } from './checkpoint.mjs';
import { CloudflareHistoryStore } from '../history/stores-cloudflare.mjs';
import { addSixMonths } from './calendar.mjs';
import { sha256 } from './archive.mjs';
const decode = (row) =>
  row && {
    checkedAt: row.checked_at,
    nextCheckAt: row.next_check_at,
    token: row.token,
    leaseUntil: row.lease_until,
    checkpoint: row.checkpoint ? JSON.parse(row.checkpoint) : null,
  };
export class CloudflarePricingStore {
  constructor(db, media, { historyStore } = {}) {
    this.db = db;
    this.media = media;
    this.history = historyStore || new CloudflareHistoryStore(db, media);
  }
  async read(id) {
    return decode(await this.db.prepare('SELECT * FROM pricing_history WHERE id = ?').bind(id).first());
  }
  archiveRetryAt() {
    return this.history.archiveRetryAt();
  }
  deferArchive(until) {
    return this.history.deferArchive(until);
  }
  async reserve(id, now, { leaseMs = 120000 } = {}) {
    const at = new Date(now).toISOString(),
      next = addSixMonths(now),
      token = crypto.randomUUID();
    const row = await this.db
      .prepare(
        `INSERT INTO pricing_history (id,checked_at,next_check_at,token,lease_until)
      VALUES (?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET checked_at=excluded.checked_at,next_check_at=excluded.next_check_at,
      token=excluded.token,lease_until=excluded.lease_until WHERE pricing_history.next_check_at <= excluded.checked_at
      AND (pricing_history.checkpoint IS NULL OR json_extract(pricing_history.checkpoint,'$.complete') = 1) RETURNING *`,
      )
      .bind(id, at, next, token, Date.parse(at) + leaseMs)
      .first();
    return decode(row);
  }
  async resume(id, now, { leaseMs = 120000 } = {}) {
    const ms = Date.parse(now);
    return decode(
      await this.db
        .prepare(
          `UPDATE pricing_history SET token=?,lease_until=?
      WHERE id=? AND (checkpoint IS NULL OR json_extract(checkpoint,'$.complete') = 0) AND lease_until<=?
      AND COALESCE(json_extract(checkpoint,'$.retryAt'),0)<=? RETURNING *`,
        )
        .bind(crypto.randomUUID(), ms + leaseMs, id, ms, ms)
        .first(),
    );
  }
  async checkpoint(id, token, state, { release = false } = {}) {
    const serialized = serializedCheckpoint(state);
    if (!token) return false;
    const result = await this.db
      .prepare(
        'UPDATE pricing_history SET checkpoint=?,token=?,lease_until=CASE WHEN ? THEN 0 ELSE lease_until END WHERE id=? AND token=?',
      )
      .bind(serialized, release ? null : token, release ? 1 : 0, id, token)
      .run();
    return result.meta.changes === 1;
  }
  async cancel(id, token, previous) {
    if (!token) return false;
    const result = previous
      ? await this.db
          .prepare(
            'UPDATE pricing_history SET checked_at=?,next_check_at=?,token=?,lease_until=?,checkpoint=? WHERE id=? AND token=?',
          )
          .bind(
            previous.checkedAt,
            previous.nextCheckAt,
            previous.token,
            previous.leaseUntil,
            previous.checkpoint ? JSON.stringify(previous.checkpoint) : null,
            id,
            token,
          )
          .run()
      : await this.db.prepare('DELETE FROM pricing_history WHERE id=? AND token=?').bind(id, token).run();
    return result.meta.changes === 1;
  }
  finish(id, token, state) {
    return this.checkpoint(id, token, { ...state, complete: true }, { release: true });
  }
  async getBody(identity) {
    const object = await this.media.get(`pricing-evidence/${await sha256(identity)}`);
    return (
      object && {
        bytes: new Uint8Array(await object.arrayBuffer()),
        metadata: JSON.parse(object.customMetadata.pricing),
      }
    );
  }
  async putBody(identity, bytes, metadata) {
    await this.media.put(`pricing-evidence/${await sha256(identity)}`, bytes, {
      onlyIf: { etagDoesNotMatch: '*' },
      httpMetadata: { contentType: 'application/octet-stream', cacheControl: 'private, max-age=31536000, immutable' },
      customMetadata: { pricing: JSON.stringify(metadata) },
    });
    return this.getBody(identity);
  }
  async getProposals(id) {
    return (await this.read(id))?.checkpoint?.proposals || [];
  }
}
