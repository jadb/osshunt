# AppFlowy client core

[Product](https://appflowy.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

AppFlowy (business); ownership: **private**; funding: **funded**.

Started 2021 (project-started); years active: 5; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

2021 project start from second anniversary in November2023, distinguished from legal company founding (unverified). Official2023 seed release names lead investor and participating individuals; their companies are not automatically investors. Private business; client AGPL and production commercial server separate. [1](https://appflowy.com/blog/seed) [2](https://beta.appflowy.com/blog/product-updates)

Known investors: [OSS Capital](https://appflowy.com/blog/seed), [Bob Young](https://appflowy.com/blog/seed), [Steve Chen](https://appflowy.com/blog/seed), [Tom Preston-Werner](https://appflowy.com/blog/seed), [Amr Awadallah](https://appflowy.com/blog/seed), [Matt Mullenweg](https://appflowy.com/blog/seed).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | AGPL client core | free | USD 0/device | — | — | — | unspecified | free local desktop/core. AGPL client download; commercial collaboration server is separate. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy/main/README.md) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified in the public pricing material read; role remains unknown. [1](https://appflowy.com/pricing) |
| business | Pro | published | — | USD 144/user | — | — | unspecified | vendor commercial cloud. Vendor cloud12/member/month billed annually ×12; not a self-host commercial license quote. [1](https://appflowy.com/pricing) |
| enterprise | Seed or higher self-hosted | unknown | — | — | — | — | unspecified | commercial collaboration server. Enterprise identity requires Seed or higher; current license price not recovered. No quote amount invented. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy-SelfHost-Commercial/main/README.md) |

## Defensibility assessments

- Native cross-platform clients and integrated document/database workflows may retain personal knowledge structures; full collaboration depends on commercial server. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy/main/README.md)

## Three product reasons to consider it

1. Organize projects with grid databases and Kanban task boards. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy/main/README.md)
2. Keep rich documentation and reusable templates with the same workspace data. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy/main/README.md)
3. Use local AI alongside workspace writing and search workflows. [1](https://appflowy.com/pricing)

## Corporate sponsorship

Status: **business-fallback**. Official project and deployment pages checked; no separately identified corporate financial or in-kind sponsor. This is a search limitation, not proof none exists. [1](https://appflowy.com/blog/seed)

- [AppFlowy](https://appflowy.com): business-steward. [Evidence](https://appflowy.com/blog/seed).

## Self-operation requirements

Mode: **hybrid**. Assigned record is AGPL client core. Production self-host collaboration is separately commercial; free commercial server limited to1seat/3guest editors. Archived AGPL cloud not recommended as maintained production path. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy-SelfHost-Commercial/main/README.md)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Desktop client OS | required | — | Default documented deployment | macOS,Windows,Linux downloads; no external database/server needed for client-only scope. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy/main/README.md) |
| Docker Compose; PostgreSQL16 with pgvector; Redis | conditional | — | Separately commercial collaboration server deployed | Server dependencies do not change the client-core license. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy-SelfHost-Commercial/main/docker-compose.yml) |
| S3-compatible storage (bundled MinIO) | conditional | — | Commercial collaboration server deployed | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy-SelfHost-Commercial/main/docker-compose.yml) |
| GoTrue authentication, application, worker, search, web/admin and nginx services | conditional | — | Commercial collaboration server deployed | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy-SelfHost-Commercial/main/docker-compose.yml) |
| SMTP | conditional | — | Commercial-server email confirmation/invitations enabled | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy-SelfHost-Commercial/main/docker-compose.yml) |
| OpenAI/AssemblyAI or configured AI provider APIs | conditional | — | AI/transcription features enabled | External keys and consumption; AI can be disabled per release notes. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy-SelfHost-Commercial/main/docker-compose.yml) |

Resources: CPU not specified; memory not specified; storage not specified; OS macOS,Windows,Linux desktop; Docker for commercial server. Numeric client/server hardware minimum not recovered in reviewed README. Local client and commercial collaboration stack distinguished. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy/main/README.md)

## One-click and installer options

Status: **none-found**. Official installation instructions checked. Manual Docker Compose is not a one-click installation; no additional maintained provider template verified. [1](https://raw.githubusercontent.com/AppFlowy-IO/AppFlowy-SelfHost-Commercial/main/README.md)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/appflowy.json) · [Claim ledger](../../research/profile-claims/appflowy.jsonl) · [Research steps](../../research/profile-audits/appflowy.md)
