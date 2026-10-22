import { z } from 'zod';
import { schemas } from './schemas.mjs';

export function validateCollections(data) {
  for (const [name, factory] of Object.entries(schemas)) {
    const rows = z.array(factory(z)).nonempty().parse(data[name]);
    data[name] = rows;
    const seen = new Set();
    for (const row of rows) {
      if (seen.has(row.id)) throw new Error(`${name}: duplicate id ${row.id}`);
      seen.add(row.id);
    }
  }
  const categoryIds = new Set(data.categories.map(x => x.id));
  const byProduct = new Map(data.products.map(x => [x.id, x]));
  const ranks = new Set();
  for (const c of data.categories) {
    if (ranks.has(c.audienceRank)) throw new Error(`duplicate audience rank: ${c.audienceRank}`);
    ranks.add(c.audienceRank);
    if (c.parent !== null && (!categoryIds.has(c.parent) || c.parent === c.id)) throw new Error(`invalid parent: ${c.id}`);
    const visited = new Set([c.id]);
    let parent = c.parent;
    while (parent !== null) {
      if (visited.has(parent)) throw new Error(`category parent cycle: ${c.id}`);
      visited.add(parent);
      parent = data.categories.find(x => x.id === parent)?.parent ?? null;
    }
  }
  for (const p of data.products) {
    if (p.profile) {
      if (p.profile.id !== p.id) throw new Error(`profile id mismatch: ${p.id}`);
      if ((p.kind === 'oss') !== (p.profile.alternativeDetails !== null)) throw new Error(`profile deployment scope mismatch: ${p.id}`);
    }
    if (new Set(p.categories).size !== p.categories.length) throw new Error(`duplicate product category: ${p.id}`);
    for (const id of p.categories) if (!categoryIds.has(id)) throw new Error(`unknown category: ${id}`);
    if (p.kind === 'oss') {
      if (p.health.archived || p.health.disabled) throw new Error(`inactive repository: ${p.id}`);
      if (p.tier === 'S' && p.osi) throw new Error(`source-available marked OSI: ${p.id}`);
      if (['A', 'B', 'C'].includes(p.tier) && !p.osi) throw new Error(`OSS tier without OSI license: ${p.id}`);
      if (p.tier === 'A' && p.locked.length) throw new Error(`tier A has locked features: ${p.id}`);
    }
  }
  for (const a of data.alternatives) {
    const from = byProduct.get(a.from), to = byProduct.get(a.to);
    if (from?.kind !== 'paid' || to?.kind !== 'oss') throw new Error(`invalid edge direction or endpoint: ${a.id}`);
    if (a.id !== `${a.from}--${a.to}`) throw new Error(`edge id mismatch: ${a.id}`);
    if (!from.categories.some(c => to.categories.includes(c))) throw new Error(`edge shares no category: ${a.id}`);
  }
  for (const c of data.categories) {
    const edges = data.alternatives.filter(a => byProduct.get(a.from).categories.includes(c.id) && byProduct.get(a.to).categories.includes(c.id));
    if (!edges.length) throw new Error(`category without alternatives: ${c.id}`);
  }
  return data;
}
