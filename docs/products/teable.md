# Teable Community

[Product](https://teable.ai) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Teable AI, Inc. (business); ownership: **private**; funding: **funded**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official About identifies Teable AI,Inc.,US headquarters and two institutional backers. Company incorporation/project-start year not recovered after official About/blog search; no guessed age. Private venture-backed company; full ownership/cap table and round amounts unverified. [1](https://teable.ai/about)

Known investors: [ZhenFund](https://teable.ai/about), [Baidu Ventures](https://teable.ai/about).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. Community core0; verify exact release license brand restrictions. Cloud Free includesAIcredits but is not identical to self-host Community. [1](https://teable.ai/pricing) |
| popular | Business | published | — | USD 240/user | — | — | unspecified | vendor commercial cloud. Explicit Most popular cloud tier;20perseat/month billed yearly ×12. Struck-through36is not independently accepted as monthly-billing amount. [1](https://teable.ai/pricing) |
| business | Business | published | — | USD 240/user | — | — | unspecified | vendor commercial cloud. Vendor cloud20perseat/month billed yearly ×12. Self-host commercial license prices not independently verified. [1](https://teable.ai/pricing) |
| enterprise | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No current named Enterprise plan/price in retrieved pricing page. Self-host Business+AI scope exists, but no Enterprise quote inferred. [1](https://teable.ai/pricing) |

## Defensibility assessments

- A PostgreSQL foundation joined to spreadsheet collaboration and a growing app/AI runtime offers an extensible workflow position; differentiation depends on edition. [1](https://help.teable.ai/en/deploy/architecture)

## Three product reasons to consider it

1. Work with real PostgreSQL-backed records through a spreadsheet-style collaboration interface. [1](https://raw.githubusercontent.com/teableio/teable/develop/README.md)
2. Create table views, API interactions and record-triggered automation in one data workspace. [1](https://help.teable.ai/en/deploy/choose)
3. Connect structured operational data to custom apps and AI workflows in commercial editions. [1](https://raw.githubusercontent.com/teableio/teable/develop/README.md)

## Corporate sponsorship

Status: **business-fallback**. Official project and deployment pages checked; no separately identified corporate financial or in-kind sponsor. This is a search limitation, not proof none exists. [1](https://teable.ai/about)

- [Teable AI, Inc.](https://teable.ai): business-steward. [Evidence](https://teable.ai/about).

## Self-operation requirements

Mode: **server**. Standalone core differs from full commercialAI/AppBuilder runtime plane. Current docs mark One-Click Cloud Deployment deprecated; no maintained one-click provider counted. License brand restrictions/source-available eligibility remains separate. [1](https://help.teable.ai/en/deploy/docker)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker and Docker Compose | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://help.teable.ai/en/deploy/docker) |
| PostgreSQL | required | — | Default documented deployment | Standalone sample15.4; full platform also PostgreSQL, no MySQL/SQLite alternative verified. [1](https://help.teable.ai/en/deploy/docker) |
| Redis | required | — | Default documented deployment | Standalone sample7.2.4; cache,queues,realtime. [1](https://help.teable.ai/en/deploy/docker) |
| Persistent app/database/cache volumes | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://help.teable.ai/en/deploy/docker) |
| S3-compatible object store | optional | — | Standalone production storage selected | Standalone recommends S3/MinIO/OSS/OBS/COS-compatible endpoints; local file storage default. [1](https://help.teable.ai/en/deploy/docker) |
| S3 storage with public/private/build-artifacts buckets | conditional | — | Full-featured platform deployed | As documented; no unsupported version assumption. [1](https://help.teable.ai/en/deploy/architecture) |
| Infra Service, sandbox engine, Git registry and preview gateway | conditional | — | Full-featured AI/App Builder platform deployed | Runtime plane supplements core; AI requires self-host Business or higher. [1](https://help.teable.ai/en/deploy/architecture) |
| Model-provider API credentials | conditional | — | AI features enabled | External compatible models; credentials/consumption separate. [1](https://help.teable.ai/en/deploy/architecture) |
| SMTP | conditional | — | Email service enabled | Configure Email Service linked from deployment docs. [1](https://help.teable.ai/en/deploy/docker) |

Resources: CPU 2cores minimum (standalone); memory 4GB minimum (standalone); storage 40GB free minimum (standalone); OS Linux recommended;Ubuntu20.04LTSexample. Standalone small-team/evaluation route0–50users. Full platform sizing depends on peakAI session sandboxes and deployed apps, not merely seat count. [1](https://help.teable.ai/en/deploy/docker)

## One-click and installer options

Status: **none-found**. Official installation instructions checked. Manual Docker Compose is not a one-click installation; no additional maintained provider template verified. [1](https://help.teable.ai/en/deploy/docker)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/teable.json) · [Claim ledger](../../research/profile-claims/teable.jsonl) · [Research steps](../../research/profile-audits/teable.md)
