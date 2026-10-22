import { getCollection } from 'astro:content';
import { LOGOS } from './logos';
import { shortName } from './names';

export const CHECKED = '2026-10-21';

export type Fit = 'drop-in' | 'partial' | 'different-approach';
export const FIT_LABEL: Record<Fit, string> = {
  'drop-in': 'Drop-in',
  partial: 'Partial',
  'different-approach': 'Different approach',
};

// Samples shown in the hero; chip is the short label. Every mapped alternative becomes a sheet, two per page.
const SCENES = [
  { id: 'slack', chip: 'Slack', lead: ['mattermost', 'zulip'] },
  { id: 'microsoft-teams', chip: 'Teams', lead: ['mattermost', 'zulip'] },
  { id: 'firebase', chip: 'Firebase', lead: ['appwrite', 'supabase'] },
  { id: '1password', chip: '1Password', lead: ['bitwarden'] },
  { id: 'figma', chip: 'Figma', lead: ['penpot'] },
  { id: 'postman', chip: 'Postman', lead: ['hoppscotch'] },
  { id: 'datadog', chip: 'Datadog', lead: ['grafana'] },
] as const;
const PAGE = 2;

const money = (p: { entryAmount: number | null; currency: string; unit: string; period: string; model: string }) => {
  if (p.entryAmount == null) {
    return p.model === 'usage' ? 'Usage-based' : p.period === 'quote' ? 'Quote only' : 'Not established';
  }
  const unit = p.unit === 'seat' ? 'seat' : p.unit;
  return `${p.currency} ${p.entryAmount.toLocaleString('en-US', { minimumFractionDigits: p.entryAmount % 1 ? 2 : 0 })} / ${unit} / ${p.period === 'year' ? 'yr' : p.period}`;
};

export async function homeData() {
  const [cats, prods, maps] = await Promise.all([
    getCollection('categories'), getCollection('products'), getCollection('alternatives'),
  ]);
  const P = new Map(prods.map((p) => [p.data.id, p.data]));
  const rank = new Map(cats.map((c) => [c.data.id, c.data.audienceRank]));
  const paid = prods.map((p) => p.data).filter((p) => p.kind === 'paid');
  const oss = prods.map((p) => p.data).filter((p) => p.kind === 'oss');
  const altCount = new Map<string, number>();
  for (const m of maps) altCount.set(m.data.from, (altCount.get(m.data.from) ?? 0) + 1);

  const scenes = SCENES.map((s) => {
    const inc = P.get(s.id)!;
    if (inc.kind !== 'paid') throw new Error(`${s.id} is not a paid incumbent`);
    const order = { 'drop-in': 0, partial: 1, 'different-approach': 2 } as Record<string, number>;
    const alts = maps.filter((m) => m.data.from === s.id).map((m) => {
      const a = P.get(m.data.to)!;
      if (a.kind !== 'oss') throw new Error(`${m.data.to} is not an alternative`);
      return { id: a.id, logo: LOGOS[a.id], name: a.name, short: shortName(a.name), fit: m.data.fit as Fit, license: a.license, osi: a.osi,
        tier: a.tier, selfHost: a.selfHostable, url: a.url, repo: a.repo, limits: a.locked.length };
    }).sort((x, y) => {
      const lx = (s.lead as readonly string[]).indexOf(x.id), ly = (s.lead as readonly string[]).indexOf(y.id);
      if ((lx >= 0) !== (ly >= 0)) return lx >= 0 ? -1 : 1;
      return lx - ly || Number(!!y.logo) - Number(!!x.logo) || order[x.fit] - order[y.fit] || x.name.localeCompare(y.name);
    });
    const pages = Array.from({ length: Math.ceil(alts.length / PAGE) }, (_, i) => alts.slice(i * PAGE, (i + 1) * PAGE));
    return { id: s.id, chip: s.chip, name: inc.name, logo: LOGOS[s.id], price: money(inc.pricing), total: alts.length, pages };
  });

  const rankOf = (p: (typeof paid)[number]) => Math.min(...p.categories.map((c) => rank.get(c) ?? 999));
  const prices = paid
    .filter((p) => p.kind === 'paid' && p.pricing.entryAmount != null && p.pricing.unit === 'seat')
    .sort((a, b) => rankOf(a) - rankOf(b) || a.name.localeCompare(b.name))
    .slice(0, 10)
    .map((p) => ({ id: p.id, name: p.name, price: money((p as any).pricing), yearly: (p as any).pricing.period === 'year', source: (p as any).pricing.source, alts: altCount.get(p.id) ?? 0 }));

  const reachOrder = ['universal', 'broad', 'functional', 'specialist'] as const;
  const groups = reachOrder.map((reach) => ({
    reach,
    items: cats.map((c) => c.data).filter((c) => c.audienceReach === reach).sort((a, b) => a.audienceRank - b.audienceRank)
      .map((c) => {
        const tools = paid.filter((p) => p.categories.includes(c.id));
        const ids = new Set(tools.map((t) => t.id));
        return {
          id: c.id, name: c.name, paid: tools.length,
          toolList: tools.map((t) => ({ id: t.id, name: t.name })),
          altList: [...new Set(maps.filter((m) => ids.has(m.data.from)).map((m) => m.data.to))].map((a) => ({ id: a, name: P.get(a)!.name })),
        };
      }),
  }));

  return {
    counts: { paid: paid.length, oss: oss.length, maps: maps.length, cats: cats.length },
    scenes, prices, groups,
    search: [...paid.map((p) => ({ id: p.id, name: p.name, k: 'software' })), ...oss.map((p) => ({ id: p.id, name: p.name, k: 'alternatives' }))].sort((a, b) => a.name.localeCompare(b.name)),
  };
}
