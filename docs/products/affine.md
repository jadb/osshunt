# AFFiNE (mixed-license stack; review required)

[Product](https://affine.pro/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

TOEVERYTHING PTE. LTD. (business); ownership: **unknown**; funding: **unknown**.

Started 2022 (project-started); years active: 4; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official About says AFFiNE began Singapore2022 and names company. Legal incorporation age/ultimate ownership and funding not established from primary pages read; do not infer no investors. Mixed component licensing remains release-specific. [1](https://affine.pro/about-us)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Local editor / Free | free | USD 0/workspace | — | — | — | unspecified | free local editor/core. Unlimited local workspaces; cloud Free allowances and server component licenses separate. [1](https://affine.pro/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified in the public pricing material read; role remains unknown. [1](https://affine.pro/pricing) |
| business | Self-Hosted Team | published | — | USD 120/user | — | — | unspecified | paid self-hosted Team. FAQ explicitly10/seat/month billed annually ×12; Team for scaling beyond10seats. [1](https://affine.pro/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | commercial self-hosted/cloud contracts. Custom pricing; Email sales/Book a Demo;100+seats/regulatory/custom deployment. [1](https://affine.pro/pricing) |

## Defensibility assessments

- A shared block model across docs, tables and canvas gives differentiated editing workflows, but no universal defensibility over specialist editors is established. [1](https://raw.githubusercontent.com/toeverything/AFFiNE/canary/README.md)

## Three product reasons to consider it

1. Mix rich text, sticky notes, embeds, shapes and databases on an edgeless canvas. [1](https://raw.githubusercontent.com/toeverything/AFFiNE/canary/README.md)
2. Restore earlier document states with Cloud Time Machine version history. [1](https://affine.pro/pricing)
3. Turn outlines into presentations and structured mind maps with multimodal AI. [1](https://affine.pro/pricing)

## Corporate sponsorship

Status: **business-fallback**. Official project and deployment pages checked; no separately identified corporate financial or in-kind sponsor. This is a search limitation, not proof none exists. [1](https://affine.pro/about-us)

- [TOEVERYTHING PTE. LTD.](https://affine.pro): business-steward. [Evidence](https://affine.pro/about-us).

## Self-operation requirements

Mode: **hybrid**. Local-first editor usable independently; server uses PostgreSQL/Redis in stable-image compose. Backend source-available/component-specific licenses; check release CE/EE boundaries. Canary-branch compose read deploys stable images. [1](https://docs.affine.pro/self-host-affine/install/) [2](https://docs.affine.pro/self-host-affine/install/requirements)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Compose | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/toeverything/AFFiNE/canary/.docker/selfhost/compose.yml) |
| PostgreSQL16 with pgvector | required | — | Default documented deployment | Default stable-image compose uses pgvector/pgvector:pg16. [1](https://raw.githubusercontent.com/toeverything/AFFiNE/canary/.docker/selfhost/compose.yml) |
| Redis | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/toeverything/AFFiNE/canary/.docker/selfhost/compose.yml) |
| Application and migration job plus persistent storage/config volumes | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/toeverything/AFFiNE/canary/.docker/selfhost/compose.yml) |
| SMTP/OAuth/AI providers | conditional | — | Corresponding email,login or AI integration configured | Optional external integrations listed in official administration guide. [1](https://docs.affine.pro/self-host-affine/install/) |
| Prometheus monitoring | optional | — | Monitoring-enabled installation route | Requirements page describes monitoring/exporters enabled by default in some routes, approximately200MBmemory. Current minimal compose inspected does not include them. [1](https://docs.affine.pro/self-host-affine/install/requirements) |

Resources: CPU At least4cores recommended; memory 2GB basic recommended;4GB for docs over10kwords; storage About1.5GB installation plus document/blob/database growth; OS Docker-capable server; local desktop editor separate. Recommendations, not absolute minima. Requirements page says PostgreSQL only supported database; Redis6.x/7.x required and tested. Hardware varies by document size and merge history. [1](https://docs.affine.pro/self-host-affine/install/requirements)

## One-click and installer options

Status: **none-found**. Official installation instructions checked. Manual Docker Compose is not a one-click installation; no additional maintained provider template verified. [1](https://docs.affine.pro/self-host-affine/install/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/affine.json) · [Claim ledger](../../research/profile-claims/affine.jsonl) · [Research steps](../../research/profile-audits/affine.md)
