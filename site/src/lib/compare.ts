import { getCollection } from 'astro:content';
import { CHECKED, FIT_LABEL, type Fit } from './home';

export { LOGOS } from './logos';

export const usd = (n: number | null | undefined) =>
  n == null ? null : `USD ${n.toLocaleString('en-US', { minimumFractionDigits: n % 1 ? 2 : 0 })}`;

export async function comparePaths() {
  const maps = await getCollection('alternatives');
  return maps.map((m) => ({ params: { pair: m.data.id } }));
}

export async function compareData(pair: string) {
  const [prods, maps] = await Promise.all([getCollection('products'), getCollection('alternatives')]);
  const P = new Map(prods.map((p) => [p.data.id, p.data]));
  const map = maps.find((m) => m.data.id === pair)!.data;
  const inc = P.get(map.from)!;
  const alt = P.get(map.to)!;
  if (inc.kind !== 'paid' || alt.kind !== 'oss') throw new Error(`bad mapping ${pair}`);
  const siblings = maps.filter((m) => m.data.from === map.from)
    .map((m) => ({ id: m.data.id, name: P.get(m.data.to)!.name, fit: FIT_LABEL[m.data.fit as Fit] }));
  const reverse = maps.filter((m) => m.data.to === map.to)
    .map((m) => ({ id: m.data.id, name: P.get(m.data.from)!.name, fit: FIT_LABEL[m.data.fit as Fit] }));
  return { map, inc, alt, siblings, reverse, fitLabel: FIT_LABEL[map.fit as Fit], CHECKED };
}

export async function alternativePaths() {
  const prods = await getCollection('products');
  return prods.filter((p) => p.data.kind === 'oss').map((p) => ({ params: { id: p.data.id } }));
}

export async function alternativeData(id: string) {
  const [prods, maps] = await Promise.all([getCollection('products'), getCollection('alternatives')]);
  const P = new Map(prods.map((p) => [p.data.id, p.data]));
  const alt = P.get(id)!;
  if (alt.kind !== 'oss') throw new Error(`${id} is not an alternative`);
  const replaces = maps.filter((m) => m.data.to === id).map((m) => {
    const inc = P.get(m.data.from)!;
    if (inc.kind !== 'paid') throw new Error(`${m.data.from} is not paid`);
    return { pair: m.data.id, id: inc.id, name: inc.name, fit: m.data.fit as Fit, fitLabel: FIT_LABEL[m.data.fit as Fit],
      notes: m.data.migrationNotes, sources: m.data.sources, pricing: inc.pricing };
  });
  return { alt, replaces, CHECKED };
}

export const TIER_MEANING: Record<string, string> = {
  A: 'No paid feature gates in the self-run edition',
  B: 'Paid extras for admin, identity or audit',
  C: 'Daily-workflow features need a paid edition',
  S: 'Source-available license, not OSI',
  U: 'License or parity scope unresolved',
};

export async function softwarePaths() {
  const prods = await getCollection('products');
  return prods.filter((p) => p.data.kind === 'paid').map((p) => ({ params: { id: p.data.id } }));
}

export async function softwareData(id: string) {
  const [prods, maps, cats] = await Promise.all([getCollection('products'), getCollection('alternatives'), getCollection('categories')]);
  const P = new Map(prods.map((p) => [p.data.id, p.data]));
  const inc = P.get(id)!;
  if (inc.kind !== 'paid') throw new Error(`${id} is not paid`);
  const alts = maps.filter((m) => m.data.from === id).map((m) => {
    const a = P.get(m.data.to)!;
    if (a.kind !== 'oss') throw new Error(`${m.data.to} is not an alternative`);
    return { pair: m.data.id, id: a.id, name: a.name, fit: m.data.fit as Fit, fitLabel: FIT_LABEL[m.data.fit as Fit],
      license: a.license, osi: a.osi, tier: a.tier, selfHost: a.selfHostable, notes: m.data.migrationNotes };
  });
  const order = { 'drop-in': 0, partial: 1, 'different-approach': 2 } as Record<string, number>;
  const byFit = (x: (typeof alts)[number], y: (typeof alts)[number]) => order[x.fit] - order[y.fit] || x.name.localeCompare(y.name);
  const isOpen = (t: string) => t === 'A' || t === 'B' || t === 'C';
  return {
    inc, CHECKED,
    open: alts.filter((a) => isOpen(a.tier)).sort(byFit),
    restricted: alts.filter((a) => !isOpen(a.tier)).sort(byFit),
    categories: cats.filter((c) => inc.categories.includes(c.data.id)).map((c) => ({ id: c.data.id, name: c.data.name })),
  };
}

export async function indexData() {
  const [prods, maps] = await Promise.all([getCollection('products'), getCollection('alternatives')]);
  const from = new Map<string, number>(); const to = new Map<string, number>();
  for (const m of maps) { from.set(m.data.from, (from.get(m.data.from) ?? 0) + 1); to.set(m.data.to, (to.get(m.data.to) ?? 0) + 1); }
  const sort = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name);
  return {
    paid: prods.map((p) => p.data).filter((p) => p.kind === 'paid').map((p) => ({ id: p.id, name: p.name, n: from.get(p.id) ?? 0 })).sort(sort),
    oss: prods.map((p) => p.data).filter((p) => p.kind === 'oss').map((p) => ({ id: p.id, name: p.name, tier: p.tier, license: p.license, n: to.get(p.id) ?? 0 })).sort(sort),
  };
}

export const REACH_LABEL: Record<string, string> = {
  universal: 'Universal reach', broad: 'Broad reach', functional: 'Functional reach', specialist: 'Specialist reach',
};

export async function categoryPaths() {
  const cats = await getCollection('categories');
  return cats.map((c) => ({ params: { id: c.data.id } }));
}

export async function categoryData(id: string) {
  const [cats, prods, maps] = await Promise.all([getCollection('categories'), getCollection('products'), getCollection('alternatives')]);
  const P = new Map(prods.map((p) => [p.data.id, p.data]));
  const cat = cats.find((c) => c.data.id === id)!.data;
  const tools = prods.map((p) => p.data).filter((p) => p.kind === 'paid' && p.categories.includes(id))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((p) => ({
      id: p.id, name: p.name,
      price: p.kind === 'paid' && p.pricing.entryAmount != null ? `${usd(p.pricing.entryAmount)} / ${p.pricing.unit} / ${p.pricing.period}` : p.kind === 'paid' && p.pricing.model === 'usage' ? 'Usage-based' : 'Not established',
      alts: maps.filter((m) => m.data.from === p.id).map((m) => ({ pair: m.data.id, name: P.get(m.data.to)!.name, fit: FIT_LABEL[m.data.fit as Fit], tier: (P.get(m.data.to) as any).tier as string })),
    }));
  return { cat, tools, CHECKED };
}

export async function categoriesIndex() {
  const [cats, prods, maps] = await Promise.all([getCollection('categories'), getCollection('products'), getCollection('alternatives')]);
  const P = new Map(prods.map((p) => [p.data.id, p.data]));
  const paid = prods.map((p) => p.data).filter((p) => p.kind === 'paid');
  const groups = (['universal', 'broad', 'functional', 'specialist'] as const).map((reach) => ({
    reach,
    items: cats.map((c) => c.data).filter((c) => c.audienceReach === reach).sort((a, b) => a.audienceRank - b.audienceRank).map((c) => {
      const ids = paid.filter((p) => p.categories.includes(c.id)).map((p) => p.id);
      return { id: c.id, name: c.name, description: c.description, tools: ids.length, toolList: paid.filter((p) => p.categories.includes(c.id)).map((p) => ({ id: p.id, name: p.name })),
        altList: [...new Set(maps.filter((m) => ids.includes(m.data.from)).map((m) => m.data.to))].map((a) => ({ id: a, name: P.get(a)!.name })), maps: maps.filter((m) => ids.includes(m.data.from)).length };
    }),
  }));
  return { groups };
}
