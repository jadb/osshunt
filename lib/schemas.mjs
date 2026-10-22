import { productProfile } from './profile-schema.mjs';

const header = (name, description) => ({
  title: name, description, 'x-key': 'id', 'x-key-case': 'insensitive',
  'x-source': 'research/categories/*.json',
});

export function categories(z) {
  return z.strictObject({
    id: z.string().regex(/^[a-z0-9-]+$/).describe('Stable category identifier'),
    name: z.string().min(1), description: z.string().min(1),
    parent: z.string().nullable().default(null),
    audience: z.string().min(1),
    audienceReach: z.enum(['universal', 'broad', 'functional', 'specialist']),
    audienceRank: z.int().positive().describe('Editorial reach estimate; not measured market share'),
    audienceRationale: z.string().min(1),
    audienceSources: z.array(z.url()).min(1),
  }).meta(header('categories', 'Business software categories, with audience reach estimates'));
}

export function products(z) {
  const base = {
    id: z.string().regex(/^[a-z0-9-]+$/), name: z.string().min(1), url: z.url(),
    categories: z.array(z.string()).min(1),
    profile: productProfile(z).optional(),
  };
  const pricing = z.strictObject({
    model: z.enum(['per-seat', 'usage', 'flat', 'mixed', 'quote', 'free']),
    entryAmount: z.number().nonnegative().nullable(), currency: z.string().min(1),
    period: z.enum(['month', 'year', 'one-time', 'quote', 'free']),
    unit: z.enum(['seat', 'account', 'usage', 'organization']),
    billing: z.enum(['annual', 'monthly', 'one-time', 'quote', 'free']),
    note: z.string().min(1), source: z.url(),
  });
  const health = z.strictObject({
    archived: z.boolean().nullable(), disabled: z.boolean().nullable(),
    pushedAt: z.iso.datetime({ offset: true }).nullable(),
    lastCommitAt: z.iso.datetime({ offset: true }).nullable().default(null),
    lastRelease: z.string().nullable(), lastReleaseAt: z.union([z.iso.datetime({ offset: true }), z.iso.date()]).nullable(),
    releaseSource: z.url().nullable().default(null),
    commit: z.string().nullable(), checkedAt: z.iso.date(), source: z.url(), rsx: z.string(),
  });
  return z.discriminatedUnion('kind', [
    z.strictObject({ ...base, kind: z.literal('paid'), pricing }),
    z.strictObject({
      ...base, kind: z.literal('oss'),
      repo: z.url(), license: z.string().min(1), osi: z.boolean(), selfHostable: z.boolean(),
      tier: z.enum(['A', 'B', 'C', 'S', 'U']),
      locked: z.array(z.string()), serviceLimitations: z.array(z.string()).default([]),
      hostedOffer: z.boolean(), classificationReason: z.string().min(1),
      sources: z.strictObject({ license: z.url(), features: z.url(), hosting: z.url() }), health,
    }),
  ]).meta({ ...header('products', 'Paid incumbents and community or source-available alternatives; kind oss includes explicitly labelled S/U candidates'),
    'x-source': 'research/categories/*.json + research/profiles/*.json' });
}

export function alternatives(z) {
  return z.strictObject({
    id: z.string().regex(/^[a-z0-9-]+--[a-z0-9-]+$/), from: z.string(), to: z.string(),
    fit: z.enum(['drop-in', 'partial', 'different-approach']), migrationNotes: z.string().min(1),
    sources: z.array(z.url()).min(1),
  }).meta(header('alternatives', 'Explicit many-to-many paid-to-community mappings with migration limits'));
}

export const schemas = { categories, products, alternatives };
