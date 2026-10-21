import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import YAML from 'yaml';

// RFC 7386: null deletes keys; arrays replace wholesale.
export function mergePatch(target, patch) {
  if (patch === null || typeof patch !== 'object' || Array.isArray(patch)) return patch;
  const out = target && typeof target === 'object' && !Array.isArray(target) ? { ...target } : {};
  for (const [key, value] of Object.entries(patch)) {
    if (value === null) delete out[key];
    else out[key] = mergePatch(out[key], value);
  }
  return out;
}

const normalize = (id) => {
  if (typeof id !== 'string' || !id.trim()) throw new Error('non-empty string id required');
  return id.toLowerCase();
};

export function applyOverrides(rows, overrides = {}) {
  if (!Array.isArray(rows) || !rows.length) throw new Error('non-empty array required');
  if (!overrides || typeof overrides !== 'object' || Array.isArray(overrides)) throw new Error('override map required');
  const patches = new Map();
  for (const [key, patch] of Object.entries(overrides)) {
    const id = normalize(key);
    if (patches.has(id)) throw new Error(`duplicate override id: ${id}`);
    if (!patch || typeof patch !== 'object' || Array.isArray(patch)) throw new Error(`object patch required: ${id}`);
    patches.set(id, patch);
  }
  const ids = new Set();
  const merged = rows.map((raw) => {
    const id = normalize(raw.id);
    if (ids.has(id)) throw new Error(`duplicate id: ${id}`);
    ids.add(id);
    const patched = mergePatch({ ...raw, id }, patches.get(id) ?? {});
    if (patched.id !== id) throw new Error(`override cannot change id: ${id}`);
    return patched;
  });
  for (const id of patches.keys()) if (!ids.has(id)) throw new Error(`orphan override: ${id}`);
  return merged.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
}

export function snapshotLoader({ name, sourceDir, overridesDir }) {
  return {
    name: `osshunt:${name}`,
    async load(ctx) {
      const rows = JSON.parse(await readFile(join(sourceDir, `${name}.json`), 'utf8'));
      let overrides = {};
      try {
        overrides = YAML.parse(await readFile(join(overridesDir, `${name}.overrides.yaml`), 'utf8')) ?? {};
      } catch (error) { if (error.code !== 'ENOENT') throw error; }
      const result = applyOverrides(rows, overrides);
      ctx.store.clear();
      for (const raw of result) {
        const data = await ctx.parseData({ id: raw.id, data: raw });
        ctx.store.set({ id: data.id, data, digest: ctx.generateDigest(data) });
      }
    },
  };
}
