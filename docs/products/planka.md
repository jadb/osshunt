# PLANKA

[Product](https://planka.app/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

PLANKA Software GmbH (business); ownership: **private**; funding: **mixed**.

Started 2024 (company-founded); years active: 2; years in business: 2. Ages are approximate calendar-year differences as of 2026-10-21.

Parent: HBE Capital GmbH.

Company founded2024; Community project first commit2019. Official About identifies HBE Capital GmbH as shareholder and license revenue as development financing. Mixed indicates commercial revenue plus shareholder backing, not an asserted funding round. [1](https://planka.app/about)

Known investors: [HBE Capital GmbH](https://planka.app/about).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community | free | EUR 0/instance | — | — | — | unspecified | free self-hosted core. Core software license has no subscription charge; infrastructure and optional commercial offerings separate. [1](https://planka.app/about) |
| popular | Pro Self-Hosted | published | — | EUR 86.4/user | — | — | 1 | paid self-host license. Explicit Most Popular.7.20EUR annual-billed monthly/user ×12; page default5-user total432EUR/year.7.90 monthly candidate appears but toggle ambiguity leaves monthlyPrice unknown. [1](https://planka.app/pricing) |
| business | Pro Self-Hosted | published | — | EUR 86.4/user | — | — | 1 | paid self-host license. Closest organizational plan.7.20 annual-billed monthly/user ×12; writing accounts are billable seats. [1](https://planka.app/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | 1000 | commercial self-hosted or hosted. Contact Sales; self-host from1000 users, hosted from500; custom licensing. [1](https://planka.app/pricing) |

## Defensibility assessments

- Real-time Kanban collaboration and stored board history offer modest workflow retention; professional controls sit in commercial editions. [1](https://planka.app/features)

## Three product reasons to consider it

1. Track due dates, card aging and time spent with an integrated stopwatch. [1](https://planka.app/features)
2. Collaborate on private boards with multiple project managers and live WebSocket updates. [1](https://planka.app/features)
3. Connect external workflows through personal API keys and event webhooks. [1](https://planka.app/features)

## Corporate sponsorship

Status: **business-fallback**. Official project and deployment pages checked; no separately identified corporate financial or in-kind sponsor. This is a search limitation, not proof none exists. [1](https://planka.app/about)

- [PLANKA Software GmbH](https://planka.app/): business-steward. [Evidence](https://planka.app/about).

## Self-operation requirements

Mode: **server**. Community default compose with PostgreSQL and local storage verified. Documentation deep link404; raw first-party compose used. Current Community uses Fair Use License, not verified OSI open source. [1](https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Compose | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml) |
| PostgreSQL16 (default image) | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml) |
| Persistent database and attachment volumes | required | — | Default documented deployment | data and db-data volumes; external S3 optional. [1](https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml) |
| S3-compatible object store | optional | — | Remote attachment storage selected | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml) |
| SMTP | conditional | — | Email notifications enabled | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. Hardware minima not specified in the reviewed installation instructions. [1](https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml)

## One-click and installer options

Status: **none-found**. Official installation instructions checked. Manual Docker Compose is not a one-click installation; no additional maintained provider template verified. [1](https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/planka.json) · [Claim ledger](../../research/profile-claims/planka.jsonl) · [Research steps](../../research/profile-audits/planka.md)
