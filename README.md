# OSSHunt

A sourced seed for discovering open-source alternatives to software businesses pay for.

48 categories, ordered by estimated potential business audience. 95 paid incumbents, 113 identified OSS alternatives, 19 separately labelled source-available/unresolved candidates, 210 explicit many-to-many mappings. Checked 2026-10-21.

- [Browse every category and candidate](docs/catalog.md)
- [The second 24 categories — completed](docs/next-24.md)
- [Audience ranking and openness criteria](docs/methodology.md)
- [Refresh workflow, repeated steps and test opportunities](docs/research-workflow.md)
- [Collections contract and queries](docs/collections.md)
- [Website history player, preview and deployment](docs/website-history.md)
- [Embed a player on any page — snippets and requirements](docs/embedding.md)
- [Historical pricing — six-month checks, evidence review and deployment](docs/pricing-history.md)

Audience positions are editorial reach estimates, not measured market-size counts. A/B/C describe paid feature restrictions; S/U entries stay outside default OSS recommendations. Migration fit is recorded per mapping. A does not mean feature parity with the paid incumbent or free infrastructure.

## Product profiles

All 227 catalog products researched as of 2026-10-21, including 132 alternative candidates. [Browse profiles](docs/product-profiles.md), [field definitions and limits](docs/product-profile-methodology.md), [coverage manifest](research/enrichment-manifest.json). Profiles include four pricing roles, ownership/funding/history, investors, product reasons and moat assessments. Alternative profiles add sponsors, deployment requirements and installation shortcuts. 5,438 dated profile claims and per-product command/website audits retained. Unknowns stay explicit.

## Data

`data/collections/categories.json`, `products.json`, `alternatives.json`: sorted arrays with stable IDs and adjacent generated JSON Schemas. Shared zod factories, reusable object loaders, RFC 7386 overrides and an Astro consumption example included. Snapshots build offline.

Reviewed category inputs and uncertainty notes: `research/categories/`. Portable chronological command/website audits: `research/audits/`. Captured repository evidence: `research/github/`, `research/gitlab/`, `research/rsx/`; request log: `research/github-commands.jsonl`. Second-batch claim ledgers: `research/claims/` — 445 dated claims with page locators and evidence. Exact machine-local transcripts stay local; published paths are normalized.

Website claims retain source URLs and decisions; second-batch claims also retain structured locators and evidence. Not every live pricing/edition page is archived as a replayable body. Repository license evidence is pinned where available. [Known evidence improvements](docs/research-workflow.md#evidence-improvements-still-needed).

## Build and verify

Requires Node 22+, Python 3, make. Install exact locked packages, then build and check:

```sh
npm ci --ignore-scripts
make check
```

The gate assembles source records, generates snapshots/schemas/docs and the history gallery catalog, validates data and runs contract and history tests. Regression guards verified by restoring defects, observing failures and restoring fixes. [Catalog mutation evidence](research/mutation-results.json), [dependency vetting](docs/dependencies.md).

Research refresh additionally uses authenticated `gh` and optional repository health analysis; neither is required for ordinary builds or queries.

## Website histories

```sh
npm run history:serve
# Open http://127.0.0.1:4173
```

Gallery for all 227 products and alternatives. Existing Internet Archive screenshot images only, actual dates at least 30 days apart, playback, stepping, scrubbing, speed and archive links. Initial history discovery on first visit; immutable image copies on demand. Shared persisted checks prevent repeated archive requests within 30 days, including failed checks. Local cache survives server restarts in `.local/history/`. [Operation, embedding and Cloudflare setup](docs/website-history.md).

The gallery and iframe also include an independent pricing timeline. Archived HTML proposes plans, exact prices, billing terms and feature limits; only explicitly confirmed observations publish. Pricing uses six calendar months independently of images. Ten-tool verification produced eight reviewed observations (32 plans): three have matching landing/pricing archive digests; five retain an explicit legacy integrity qualification. Slack and Linear remain gaps. [Review workflow and coverage](docs/pricing-history.md).

A [blind test of 20 more tools](research/pricing-twenty-tool-verification.md) completed collection and a zero-fetch repeat, but produced no valid new pricing observations. Unattended extraction needs broader layout and edition support; collection and evidence audits are repeatable now.

The [next 20 paid tools](research/pricing-batch-three-verification.md) likewise completed collection and a zero-fetch replay without valid new observations. Source review separates missed landing-page prices, quote-only structure, client placeholders/fallbacks, and discovery or capture gaps; it identifies the next automation improvements.

The [improved extractor's fresh 20-tool reassessment](research/pricing-batch-four-verification.md) produced three schema-valid proposals, but source review found price conflicts, plan-name contamination and mixed product families. Landing extraction, partial/quote structures, dated scoped aliases and rejection diagnostics now work across production and operator collection. No new prices were confirmed.

Retrying the [original second cohort with source-specific recovery](research/pricing-second-retry-verification.md) added five reviewed snapshots: HubSpot Sales, Intercom, Microsoft 365 Business, Webflow Site and Mattermost Professional. That retry produced **13 tools, 46 plan records and 66 offer records**. Ten of those twenty had source-reviewed numerical facts; five were not yet imported. Original eight pricing/billing outputs remain unchanged.

[Manual recovery from all saved cohorts](research/pricing-manual-recovery-verification.md) adds 16 products with positive numerical prices, bringing coverage at that stage to **29 tools**. **37 tools** had some reviewed structure across 92 observations, 239 plans and 370 offer records; the other eight include free, trial, quote-only or unknown-price records. Recovery used zero new source requests. Existing prices and billing qualifications are preserved. Manual records do not imply reusable parser support or complete histories.

[Reinspection of the remaining saved sources](research/pricing-remaining-recovery-verification.md) added Confluence, BigCommerce and FigJam pricing: **32 products with positive numerical prices** at that stage. **46 products** had reviewed structure across 102 observations, 262 plans and 451 offers; trials, unknown-price plans and bundled seats remain explicitly qualified. Of the 41 tools rechecked, 22 have usable archived sources and 19 have none saved. No new source requests; all prior observations preserved.

[A new ten-tool batch](research/pricing-batch-five-verification.md) adds Tableau core-plan prices and Aircall add-on rates. **34 products had numerical rates at that stage, including 33 with core-plan prices**; Aircall’s base prices remain unknown. **51 products** had some reviewed pricing structure across 112 observations, 289 plans and 511 offers. RingEX, Brandfolder and Looker additions are trial/partial/quote structures. The remaining five new tools have source gaps or no defensible pricing structure.

[The next ten-tool batch](research/pricing-batch-six-verification.md) adds **Tailscale and eligible Freshservice suite tiers with ITAM** to core-plan pricing coverage. Fastmail adds a trial; Auth0 adds free and unknown-price structures. **36 products had numerical rates at that stage, including 35 with core-plan prices**; **55 products** had any reviewed pricing structure across 116 observations, 314 plans and 548 offers. Six new tools remain source gaps. All 112 earlier observations remain unchanged.

[The final nine paid tools](research/pricing-batch-seven-verification.md) complete the first collection pass across all 95 paid catalog products. **Seven add numerical rates**: Heroku, Vercel, Retool, Insomnia and Postman have subscription rates; Firebase and Algolia have service usage rates. Pingdom and Elastic Cloud add trial-only records. Current coverage: **43 products with numerical rates, including 42 with core-plan or service rates; 64 with any pricing structure**, across 129 observations, 386 plans and 697 offers. Usage prices and add-on-only rates do not establish a fixed product entry fee. All 116 preceding observations remain unchanged.
