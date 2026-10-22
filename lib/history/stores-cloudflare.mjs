export class CloudflareHistoryStore {
  constructor(db, media) { this.db = db; this.media = media; }
  async read(key) {
    const row = await this.db.prepare('SELECT data, checked_ms, token FROM history WHERE id = ?').bind(key).first();
    return row && { data: row.data ? JSON.parse(row.data) : null, checkedMs: row.checked_ms, token: row.token };
  }
  async archiveRetryAt() {
    const row = await this.db.prepare('SELECT retry_at FROM archive_cooldown WHERE id = 1').bind().first();
    return row?.retry_at || 0;
  }
  async deferArchive(untilMs) {
    const row = await this.db.prepare(`INSERT INTO archive_cooldown (id, retry_at) VALUES (1, ?)
      ON CONFLICT(id) DO UPDATE SET retry_at = MAX(archive_cooldown.retry_at, excluded.retry_at)
      RETURNING retry_at`).bind(untilMs).first();
    return row.retry_at;
  }
  async reserveRefresh(key, now, interval) {
    const token = crypto.randomUUID();
    await this.db.prepare('INSERT INTO history (id) VALUES (?) ON CONFLICT(id) DO NOTHING').bind(key).run();
    const row = await this.db.prepare(`UPDATE history SET checked_ms = ?, token = ?
      WHERE id = ? AND (checked_ms IS NULL OR checked_ms <= ?) RETURNING data, checked_ms, token`)
      .bind(now, token, key, now - interval).first();
    return row && { data: row.data ? JSON.parse(row.data) : null, checkedMs: row.checked_ms, token: row.token };
  }
  async finishRefresh(key, token, data) {
    const result = await this.db.prepare('UPDATE history SET data = ?, token = NULL WHERE id = ? AND token = ?')
      .bind(JSON.stringify(data), key, token).run();
    return result.meta.changes === 1;
  }
  async reserveImage(key, now, duration) {
    const token = crypto.randomUUID();
    await this.db.prepare('INSERT INTO image_leases (id) VALUES (?) ON CONFLICT(id) DO NOTHING').bind(key).run();
    const row = await this.db.prepare(`UPDATE image_leases SET token = ?, retry_at = ?
      WHERE id = ? AND retry_at <= ? RETURNING token`).bind(token, now + duration, key, now).first();
    return row?.token || null;
  }
  async finishImage(key, token, retryAt) {
    await this.db.prepare('UPDATE image_leases SET token = NULL, retry_at = ? WHERE id = ? AND token = ?')
      .bind(retryAt, key, token).run();
  }
  async getImage(key) {
    const object = await this.media.get(`history/${key}`);
    if (!object) return null;
    return { bytes: new Uint8Array(await object.arrayBuffer()), metadata: JSON.parse(object.customMetadata.history) };
  }
  async putImage(key, bytes, metadata) {
    await this.media.put(`history/${key}`, bytes, {
      onlyIf: { etagDoesNotMatch: '*' },
      httpMetadata: { contentType: metadata.mimeType, cacheControl: 'public, max-age=31536000, immutable' },
      customMetadata: { history: JSON.stringify(metadata) },
    });
    return this.getImage(key);
  }
}
