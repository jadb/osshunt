# OSSHunt

A sourced seed for discovering open-source alternatives to software businesses pay for.

48 categories, ordered by estimated potential business audience. 95 paid incumbents, 113 identified OSS alternatives, 19 separately labelled source-available/unresolved candidates, 210 explicit many-to-many mappings. Checked 2026-10-21.

- [Browse every category and candidate](docs/catalog.md)
- [The second 24 categories — completed](docs/next-24.md)
- [Audience ranking and openness criteria](docs/methodology.md)
- [Refresh workflow, repeated steps and test opportunities](docs/research-workflow.md)
- [Collections contract and queries](docs/collections.md)

Audience positions are editorial reach estimates, not measured market-size counts. A/B/C describe paid feature restrictions; S/U entries stay outside default OSS recommendations. Migration fit is recorded per mapping. A does not mean feature parity with the paid incumbent or free infrastructure.

## Data

`data/collections/categories.json`, `products.json`, `alternatives.json`: sorted arrays with stable IDs and adjacent generated JSON Schemas. Shared zod factories, reusable object loaders, RFC 7386 overrides and an Astro consumption example included. Snapshots build offline.

Reviewed category inputs and uncertainty notes: `research/categories/`. Portable chronological command/website audits: `research/audits/`. Captured repository evidence: `research/github/`, `research/gitlab/`, `research/rsx/`; request log: `research/github-commands.jsonl`. Second-batch claim ledgers: `research/claims/` — 445 dated claims with page locators and evidence. Exact machine-local transcripts stay local; published paths are normalized.

Website claims retain source URLs and decisions; second-batch claims also retain structured locators and evidence. not every live pricing/edition page is archived as a replayable body. Repository license evidence is pinned where available. [Known evidence improvements](docs/research-workflow.md#evidence-improvements-still-needed).

## Build and verify

Requires Node 22+, Python 3, make. Install exact locked packages, then build and check:

```sh
npm ci --ignore-scripts
make check
```

The gate assembles source records, generates snapshots/schemas/docs, validates data and runs 21 contract tests. Seven regression guards additionally verified by restoring defects, observing failures and restoring fixes. [Mutation evidence](research/mutation-results.json), [dependency vetting](docs/dependencies.md).

Research refresh additionally uses authenticated `gh` and optional repository health analysis; neither is required for ordinary builds or queries. No website deployment is part of this seed.
