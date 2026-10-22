import { mkdir, readFile, writeFile, rename, link, unlink, rmdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';

const copy = value => structuredClone(value);
const safe = key => { if (!/^[a-zA-Z0-9_-]+$/.test(key)) throw new Error('Invalid storage key'); return key; };
const absent = error => { if (error.code !== 'ENOENT') throw error; return null; };

export class FileHistoryStore {
  constructor(root) { this.root = root; }
  async readJSON(path) { return readFile(path, 'utf8').then(JSON.parse).catch(absent); }
  async atomic(path, value) {
    const temporary = `${path}.${randomUUID()}.tmp`;
    await writeFile(temporary, JSON.stringify(value));
    await rename(temporary, path);
  }
  async locked(key, action) {
    await mkdir(this.root, { recursive: true });
    const path = join(this.root, `${safe(key)}.lock`);
    for (let attempt = 0; attempt < 100; attempt++) {
      try { await mkdir(path); }
      catch (error) {
        if (error.code !== 'EEXIST') throw error;
        const info = await stat(path).catch(absent);
        if (info && Date.now() - info.mtimeMs > 60000) {
          const stale = `${path}.${randomUUID()}.stale`;
          await rename(path, stale).then(() => rmdir(stale)).catch(error => {
            if (error.code !== 'ENOENT') throw error;
          });
        }
        await new Promise(resolve => setTimeout(resolve, 10));
        continue;
      }
      try { return await action(); } finally { await rmdir(path); }
    }
    throw new Error('Storage busy');
  }
  path(key) { return join(this.root, `${safe(key)}.json`); }
  async read(key) { return this.readJSON(this.path(key)); }
  async reserveRefresh(key, now, interval) {
    return this.locked(key, async () => {
      const record = await this.read(key);
      if (record && now < record.checkedMs + interval) return null;
      const token = randomUUID();
      const reserved = { data: record?.data || null, checkedMs: now, token };
      await this.atomic(this.path(key), reserved);
      return copy(reserved);
    });
  }
  async finishRefresh(key, token, data) {
    return this.locked(key, async () => {
      const record = await this.read(key);
      if (record?.token !== token) return false;
      await this.atomic(this.path(key), { ...record, data, token: null });
      return true;
    });
  }
  async reserveImage(key, now, duration) {
    return this.locked(`lease-${key}`, async () => {
      const path = this.path(`lease-${key}`), previous = await this.readJSON(path);
      if (previous && previous.retryAt > now) return null;
      const token = randomUUID();
      await this.atomic(path, { token, retryAt: now + duration });
      return token;
    });
  }
  async finishImage(key, token, retryAt) {
    return this.locked(`lease-${key}`, async () => {
      const path = this.path(`lease-${key}`), previous = await this.readJSON(path);
      if (previous?.token === token) await this.atomic(path, { token: null, retryAt });
    });
  }
  async getImage(key) {
    const value = await this.readJSON(this.path(`image-${key}`));
    return value && { bytes: new Uint8Array(Buffer.from(value.body, 'base64')), metadata: value.metadata };
  }
  async putImage(key, bytes, metadata) {
    await mkdir(this.root, { recursive: true });
    const path = this.path(`image-${key}`), temporary = `${path}.${randomUUID()}.tmp`;
    await writeFile(temporary, JSON.stringify({ body: Buffer.from(bytes).toString('base64'), metadata }));
    try { await link(temporary, path); }
    catch (error) { if (error.code !== 'EEXIST') throw error; }
    finally { await unlink(temporary); }
    return this.getImage(key);
  }
}
