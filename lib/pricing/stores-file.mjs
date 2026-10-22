import { serializedCheckpoint } from './checkpoint.mjs';
import { unlink } from 'node:fs/promises';
import { FileHistoryStore } from '../history/stores-file.mjs';
import { addSixMonths } from './calendar.mjs';
import { sha256 } from './archive.mjs';
const clone = (value) => structuredClone(value);
export class FilePricingStore {
  constructor(root, { historyStore } = {}) {
    this.storage = new FileHistoryStore(root);
    this.history = historyStore || this.storage;
  }
  async read(id) {
    return this.storage.read(`pricing-${id}`);
  }
  archiveRetryAt() {
    return this.history.archiveRetryAt();
  }
  deferArchive(until) {
    return this.history.deferArchive(until);
  }
  async reserve(id, now, { leaseMs = 120000 } = {}) {
    return this.storage.locked(`pricing-${id}`, async () => {
      const previous = await this.read(id);
      if (previous && Date.parse(now) < Date.parse(previous.nextCheckAt)) return null;
      if (previous?.checkpoint && !previous.checkpoint.complete) return null;
      const record = {
        checkedAt: new Date(now).toISOString(),
        nextCheckAt: addSixMonths(now),
        token: crypto.randomUUID(),
        leaseUntil: Date.parse(now) + leaseMs,
        checkpoint: previous?.checkpoint || null,
      };
      await this.storage.atomic(this.storage.path(`pricing-${id}`), record);
      return clone(record);
    });
  }
  async resume(id, now, { leaseMs = 120000 } = {}) {
    return this.storage.locked(`pricing-${id}`, async () => {
      const record = await this.read(id);
      if (
        !record ||
        record.checkpoint?.complete ||
        record.leaseUntil > Date.parse(now) ||
        record.checkpoint?.retryAt > Date.parse(now)
      )
        return null;
      record.token = crypto.randomUUID();
      record.leaseUntil = Date.parse(now) + leaseMs;
      await this.storage.atomic(this.storage.path(`pricing-${id}`), record);
      return clone(record);
    });
  }
  async checkpoint(id, token, state, { release = false } = {}) {
    const serialized = serializedCheckpoint(state);
    return this.storage.locked(`pricing-${id}`, async () => {
      const record = await this.read(id);
      if (!token || record?.token !== token) return false;
      record.checkpoint = JSON.parse(serialized);
      if (release) {
        record.token = null;
        record.leaseUntil = 0;
      }
      await this.storage.atomic(this.storage.path(`pricing-${id}`), record);
      return true;
    });
  }
  async cancel(id, token, previous) {
    return this.storage.locked(`pricing-${id}`, async () => {
      const record = await this.read(id);
      if (!token || record?.token !== token) return false;
      const path = this.storage.path(`pricing-${id}`);
      if (previous) await this.storage.atomic(path, previous);
      else await unlink(path);
      return true;
    });
  }
  finish(id, token, state) {
    return this.checkpoint(id, token, { ...state, complete: true }, { release: true });
  }
  async getBody(identity) {
    return this.storage.getImage(`pricing-body-${await sha256(identity)}`);
  }
  async putBody(identity, bytes, metadata) {
    return this.storage.putImage(`pricing-body-${await sha256(identity)}`, bytes, metadata);
  }
  async getProposals(id) {
    return (await this.read(id))?.checkpoint?.proposals || [];
  }
}
