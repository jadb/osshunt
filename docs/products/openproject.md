# OpenProject

[Product](https://www.openproject.org) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

OpenProject GmbH (business); ownership: **private**; funding: **bootstrapped**.

Started 2011 (project-started); years active: 15; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

2011 is project origin from introduction, not legal incorporation. Founder states company bootstrapped from the beginning in official PM2 article; no known equity investors identified. GmbH is commercial steward; no parent verified. [1](https://www.openproject.org/de/rechtliches/impressum/) [2](https://www.openproject.org/about-us/) [3](https://www.openproject.org/docs/getting-started/openproject-introduction/) [4](https://www.openproject.org/de/blog/pm2-alternative-pmi-prince2/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community | free | EUR 0/instance | — | — | — | unspecified | free self-hosted core. Core software license has no subscription charge; infrastructure and optional commercial offerings separate. [1](https://www.openproject.org/pricing/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified in the public pricing material read; role remains unknown. [1](https://www.openproject.org/pricing/) |
| business | Professional | unknown | — | — | — | — | 25 | paid Enterprise add-ons. Advertised EUR10.95 per user/month; selected subscription term not recoverable, so monthly-billing amount and annual total remain unknown. [1](https://www.openproject.org/pricing/) |
| enterprise | Corporate | quote | — | — | — | — | 250 | paid Enterprise add-ons. On request. Corporate plan; 250 minimum users. [1](https://www.openproject.org/pricing/) |

## Defensibility assessments

- A broad hybrid project lifecycle and work-package data model can become embedded in formal project processes. [1](https://www.openproject.org/about-us/)

## Three product reasons to consider it

1. Combine dependencies and Gantt schedules with agile boards in a hybrid methodology. [1](https://www.openproject.org/about-us/)
2. Organize tasks, subtasks, phases and milestones as related work packages. [1](https://www.openproject.org/pricing/)
3. Link Nextcloud files and folders directly with project work packages. [1](https://www.openproject.org/pricing/)

## Corporate sponsorship

Status: **business-fallback**. Official project and deployment pages checked; no separately identified corporate financial or in-kind sponsor. This is a search limitation, not proof none exists. [1](https://www.openproject.org/de/rechtliches/impressum/)

- [OpenProject GmbH](https://www.openproject.org): business-steward. [Evidence](https://www.openproject.org/de/rechtliches/impressum/).

## Self-operation requirements

Mode: **server**. PostgreSQL is the supported SQL backend; old MySQL migration references do not mean MySQL remains supported. All-in-one bundles database/cache for quick start; slim/Compose recommended for production. [1](https://www.openproject.org/docs/installation-and-operations/system-requirements/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PostgreSQL 16+ | required | — | Default documented deployment | Official support since OpenProject 16; pg_trgm, btree_gist, unaccent and ICU collation needed. [1](https://www.openproject.org/docs/installation-and-operations/system-requirements/) |
| Docker/Compose or supported Linux packaged installation | one-of | runtime | Default documented deployment | Application and worker services required. Slim image preferred for production. [1](https://www.openproject.org/docs/installation-and-operations/installation/docker/) |
| memcached | required | — | Default documented deployment | Bundled in all-in-one; cache service in multi-container route. [1](https://www.openproject.org/docs/installation-and-operations/installation/docker/) |
| Persistent attachment storage | required | — | Default documented deployment | Local volumes in default container route. [1](https://www.openproject.org/docs/installation-and-operations/installation/docker/) |
| SMTP | conditional | — | Email notifications configured | Mail delivery external to core database. [1](https://www.openproject.org/docs/installation-and-operations/installation/docker/) |

Resources: CPU Quad-core >=2 GHz minimum; memory 4096 MB minimum; storage 20 GB free minimum; OS Linux; Docker installation supported. Single-server baseline up to 200 total users; concurrency changes sizing. Additional workers/database consume resources. [1](https://www.openproject.org/docs/installation-and-operations/system-requirements/)

## One-click and installer options

Status: **none-found**. Official installation instructions checked. Manual Docker Compose is not a one-click installation; no additional maintained provider template verified. [1](https://www.openproject.org/docs/installation-and-operations/system-requirements/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/openproject.json) · [Claim ledger](../../research/profile-claims/openproject.jsonl) · [Research steps](../../research/profile-audits/openproject.md)
