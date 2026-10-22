# Baserow Open Source Edition

[Product](https://baserow.io) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Baserow (business); ownership: **private**; funding: **funded**.

Started 2020 (company-founded); years active: 6; years in business: 6. Ages are approximate calendar-year differences as of 2026-10-21.

About lists2020founded and first version; first side-project commit2019 distinguished from company age.2022official seed announcement names investors; historical financing, not present cap-table completeness. Private startup; no parent verified. [1](https://baserow.io/about-us) [2](https://baserow.io/blog/announcing-Baserow-5m-seed-round)

Known investors: [Inkef](https://baserow.io/blog/announcing-Baserow-5m-seed-round), [firstminute capital](https://baserow.io/blog/announcing-Baserow-5m-seed-round), [Seedcamp](https://baserow.io/blog/announcing-Baserow-5m-seed-round), [Frontline](https://baserow.io/blog/announcing-Baserow-5m-seed-round), [Job van der Voort](https://baserow.io/blog/announcing-Baserow-5m-seed-round), [Martin Henk](https://baserow.io/blog/announcing-Baserow-5m-seed-round), [Shannon Williams](https://baserow.io/blog/announcing-Baserow-5m-seed-round).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open Source Edition | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. No software subscription fee for core edition; optional commercial editions and infrastructure separate. [1](https://baserow.io/pricing) |
| popular | Premium | published | USD 12/user | USD 120/user | — | — | unspecified | vendor commercial cloud. Explicit Most popular. Cloud10annual-billed monthly ×12;12month-to-month. Self-host entitlement separate. [1](https://baserow.io/pricing) |
| business | Advanced | published | USD 22/user | USD 216/user | — | — | unspecified | vendor commercial cloud. Cloud scaling-business tier:18annual-billed monthly ×12;22month-to-month. Self-host license scope not substituted. [1](https://baserow.io/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | vendor commercial cloud. Cloud On request; Contact sales. [1](https://baserow.io/pricing) |

## Defensibility assessments

- Reusable data models, applications and plugin/API extensions can embed Baserow into company workflows. [1](https://baserow.io/about-us)

## Three product reasons to consider it

1. Model operational records with spreadsheet-style grid, form and gallery views. [1](https://baserow.io/pricing)
2. Turn shared data into custom applications with the Application Builder. [1](https://baserow.io/pricing)
3. Integrate structured records through API and OpenAPI tooling. [1](https://baserow.io/pricing)

## Corporate sponsorship

Status: **business-fallback**. Official project and deployment pages checked; no separately identified corporate financial or in-kind sponsor. This is a search limitation, not proof none exists. [1](https://baserow.io/about-us)

- [Baserow](https://baserow.io): business-steward. [Evidence](https://baserow.io/about-us).

## Self-operation requirements

Mode: **server**. All-in-one bundles PostgreSQL/Redis; external services allowed. No MySQL/SQLite backend asserted. Separate self-host commercial activation required for premium capabilities; cloud prices below identified as cloud. [1](https://baserow.io/docs/installation/install-with-docker)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker>=19.03 | required | — | Default documented deployment | All-in-one image bundles application runtimes. [1](https://baserow.io/docs/installation/install-with-docker) |
| PostgreSQL15 default | required | — | Default documented deployment | Embedded database default; external PostgreSQL recommended for production. Pre1.24 embedded PostgreSQL11 requires migration. [1](https://baserow.io/docs/installation/install-with-docker) |
| Redis | required | — | Default documented deployment | Embedded default; REDIS_URL supports external instance. [1](https://baserow.io/docs/installation/install-with-docker) |
| Persistent data volume and application/background worker services | required | — | Default documented deployment | All-in-one stores data under/baserow/data; Caddy included for HTTPS. [1](https://baserow.io/docs/installation/install-with-docker) |
| SMTP | conditional | — | Email notifications configured | As documented; no unsupported version assumption. [1](https://baserow.io/docs/installation/install-with-docker) |
| AI provider API | conditional | — | AI features configured | Separate provider configuration guide; not a core OSS requirement. [1](https://baserow.io/docs/installation/install-with-docker) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. Hardware minima not specified in the reviewed installation instructions. [1](https://baserow.io/docs/installation/install-with-docker)

## One-click and installer options

Status: **offered**. Options retain the official distinction between one-command installation and true provider one-click deployment. [1](https://baserow.io/docs/installation/install-with-docker)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Render deployment template](https://baserow.io/docs/installation%2Finstall-on-render): **one-click**, first-party. Official guide describes one-click template; Render account/paid services needed. Historical provider prices in guide not treated as current prices. [1](https://baserow.io/docs/installation%2Finstall-on-render)

[Structured profile](../../research/profiles/baserow.json) · [Claim ledger](../../research/profile-claims/baserow.jsonl) · [Research steps](../../research/profile-audits/baserow.md)
