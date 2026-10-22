# Site map

Information architecture for the Astro site. Entry: the buyer's incumbent. Counts from `data/collections/` as of 2026-10-21; all routes static, generated from collections.

## Principles

- Start from the paid tool, end at a shortlist with caveats.
- Every page shows source + checked date; unknown stays labelled.
- S/U candidates render in a separate "source-available / unresolved" group, never mixed into OSS lists.

## Route tree

| Route | Source | Count | Purpose |
|---|---|---|---|
| `/` | all | 1 | Find incumbent (search), top categories by reach, trust stats, method link |
| `/categories/` | categories | 1 | All 48, grouped by `audienceReach` (universal 5, broad 30, functional 8, specialist 5), ordered by `audienceRank` |
| `/categories/[id]/` | categories + products + alternatives | 48 | Incumbents in category, their alternatives, tier/fit filters, S/U group |
| `/software/` | products (paid) | 1 | A–Z index of paid tools businesses replace |
| `/software/[id]/` | paid product + mappings | 95 | Incumbent profile: pricing roles, moat, then ranked alternatives with fit + migration notes |
| `/alternatives/` | products (oss) | 1 | Filterable index: tier, license, OSI, self-hostable, hosted offer, repo health |
| `/alternatives/[id]/` | oss product + mappings | 132 | Alternative profile: license + tier, locked features, health, deployment, install shortcuts, sponsors, replaces-list |
| `/compare/[from]--[to]/` | alternatives mapping | 210 | Head-to-head: fit, migration notes, pricing vs cost-to-run, locked features, sources |
| `/pricing/` | products.pricing | 1 | Cross-incumbent entry-price table, per-seat normalised, sortable |
| `/methodology/` | docs/methodology, product-profile-methodology | 1 | Audience ranking, tiers A/B/C/S/U, fit scale, claim dating, limits |
| `/methodology/research/` | docs/research-workflow | 1 | Refresh workflow, evidence gaps |
| `/data/` | collections | 1 | Download JSON + schemas, field docs, Astro/jq examples |
| `/about/` | — | 1 | What OSSHunt is, checked date, how to report errors |
| `/404` | — | 1 | Search + category list |
| `/sitemap-index.xml`, `/rss.xml` (changes), `/robots.txt` | build | — | SEO + refresh feed |

Dynamic page total: 485 (48 + 95 + 132 + 210). Static pages: 10 plus build outputs.

## Two entrypoints, one comparison

- **Software page (`/software/[id]/`)**: buyer entry. Starts from the paid tool and its price; answers "what could replace this and what do I lose".
- **Alternative page (`/alternatives/[id]/`)**: project entry. Starts from the open-source project; answers "which paid tools is this mapped from, how well, and what is not covered". Written so a project can link to it as its own comparison page, so it must be neutral, dated and sourced, show gaps (tier, limits, unknowns) the same as any other entry, and offer a correction route. No endorsement implied.
- **Compare page (`/compare/[from]--[to]/`)**: single canonical URL for a mapping. Both entrypoints link to it, so there is no duplicate "A vs B" and "B vs A" content.
- Alternative page extras: stable permalinks per mapping, a short copyable summary (fit, tier, license, checked date, source links), and an update/correction contact.

## Navigation

- Primary: Software · Categories · Alternatives · Pricing · Methodology
- Global: search (incumbent name → software page), checked-date badge
- Footer: Data, About, Research workflow, repo link
- Cross-links: software ⇄ alternatives via mapping; category breadcrumbs on every product page; compare pages linked from both ends.

## Key flows

1. **Replace a tool**: `/` search "Slack" → `/software/slack/` → pick alternative → `/compare/slack--mattermost/`.
2. **Cut spend by area**: `/categories/` → `/categories/team-chat/` → shortlist.
3. **Audit risk**: any alternative page → tier, locked features, health, methodology link.

## Shared page parts (theme components)

SearchBox · CategoryChip · TierBadge (A/B/C/S/U) · FitBadge · LicenseBadge · HealthMeter · PriceRoleTable · ClaimList (source + date) · UnknownValue · MappingTable · CompareHeader · CheckedDate · Breadcrumbs · Pagination-free filter bar.

## Open decisions

- Search: client index (Pagefind) vs none.
- Whether `/pricing/` ships v1.
- Per-claim anchors or footnote style on profile pages.
- Compare URL form: `from--to` matches mapping IDs.
