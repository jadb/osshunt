import { getCollection } from 'astro:content';

export const CHECKED = '2026-10-21';

export type Fit = 'drop-in' | 'partial' | 'different-approach';
export const FIT_LABEL: Record<Fit, string> = {
  'drop-in': 'Drop-in',
  partial: 'Partial',
  'different-approach': 'Different approach',
};

// Scenes need a logo for the incumbent and every alternative shown; svgl coverage decides.
const SCENES = [
  { id: 'slack', logo: 'slack', alts: [['mattermost', 'mattermost-light'], ['zulip', 'zulip']] },
  { id: 'microsoft-teams', logo: 'microsoft-teams', alts: [['mattermost', 'mattermost-light'], ['zulip', 'zulip']] },
  { id: 'firebase', logo: 'firebase', alts: [['appwrite', 'appwrite'], ['supabase', 'supabase']] },
  { id: '1password', logo: '1password-light', alts: [['bitwarden', 'bitwarden']] },
  { id: 'figma', logo: 'figma', alts: [['penpot', 'penpot']] },
  { id: 'postman', logo: 'postman', alts: [['hoppscotch', 'hoppscotch']] },
  { id: 'datadog', logo: 'datadog', alts: [['grafana', 'grafana']] },
] as const;

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
    return {
      id: s.id, name: inc.name, logo: s.logo,
      price: money(inc.pricing), priceSource: inc.pricing.source,
      alts: s.alts.map(([id, logo]) => {
        const a = P.get(id)!;
        if (a.kind !== 'oss') throw new Error(`${id} is not an alternative`);
        const map = maps.find((m) => m.data.id === `${s.id}--${id}`)!.data;
        return { id, logo, name: a.name, fit: map.fit as Fit, license: a.license, osi: a.osi, tier: a.tier,
          selfHost: a.selfHostable,
          limits: a.locked.length };
      }),
      total: altCount.get(s.id) ?? 0,
    };
  });

  const rankOf = (p: (typeof paid)[number]) => Math.min(...p.categories.map((c) => rank.get(c) ?? 999));
  const prices = paid
    .filter((p) => p.kind === 'paid' && p.pricing.entryAmount != null && p.pricing.unit === 'seat')
    .sort((a, b) => rankOf(a) - rankOf(b) || a.name.localeCompare(b.name))
    .slice(0, 10)
    .map((p) => ({ id: p.id, name: p.name, price: money((p as any).pricing), source: (p as any).pricing.source, alts: altCount.get(p.id) ?? 0 }));

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
    search: paid.map((p) => ({ id: p.id, name: p.name })).sort((a, b) => a.name.localeCompare(b.name)),
  };
}
