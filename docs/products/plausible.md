# Plausible Community Edition

[Product](https://plausible.io) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Plausible Insights OÜ (business); ownership: **private**; funding: **bootstrapped**.

Started 2018 (project-started); years active: 8; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Uku Taht started Plausible December 2018; paid subscriptions launched 2019. Official About explicitly states self-funded, profitable and no outside investors. Operator Plausible Insights OÜ registered Estonia; project start is not asserted to be exact corporate incorporation date. [1](https://plausible.io/about) [2](https://plausible.io/procurement)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community Edition | free | USD 0/organization | — | — | — | unspecified | free self-hosted CE. No vendor license fee; CE differs from Cloud and requires own infrastructure. [1](https://plausible.io/self-hosted-web-analytics) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No public designation or verified amount found in reviewed pricing page. [1](https://plausible.io/) |
| business | Business | unknown | — | — | — | — | unspecified | vendor commercial cloud. Cloud Business card at 10 k monthly pageviews displays $19/month; extraction includes monthly/yearly toggles without selected-state evidence, so actual monthly-billed/annual total not asserted. CE does not include all Cloud business features. [1](https://plausible.io/) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | vendor commercial cloud. Cloud Enterprise explicitly Custom/Contact us; not a CE license charge. [1](https://plausible.io/) |

## Defensibility assessments

- Privacy-focused brand and simple dashboard workflow differentiate adoption, while forkable code limits exclusive control over the engine. [1](https://plausible.io/about) [2](https://plausible.io/self-hosted-web-analytics)

## Three product reasons to consider it

1. Single-page traffic dashboard emphasizes quick interpretation of referrers, pages and campaigns. [1](https://plausible.io/)
2. Cookie-free, aggregate analytics allows measurement without cross-site visitor profiling. [1](https://plausible.io/self-hosted-web-analytics)
3. Goals and custom events let teams measure conversions while keeping the reporting interface compact. [1](https://plausible.io/)

## Corporate sponsorship

Status: **business-fallback**. Reviewed project/company sources; no separate corporate sponsor verified. Verified business steward supplied as fallback. [1](https://plausible.io/about)

- [Plausible Insights OÜ](https://plausible.io/about): business-steward. [Evidence](https://plausible.io/about).

## Self-operation requirements

Mode: **server**. Verified CE 3.2.1 Compose path: app+Postgre SQL+Click House. No separate Redis/queue required by compose. Built-in TLS enabled by HTTP/HTTPS configuration or use reverse proxy. [1](https://github.com/plausible/community-edition)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker and Docker Compose | required | — | Always | Production dependency documented by project. [1](https://github.com/plausible/community-edition) |
| Plausible CE 3.2.1 image | required | — | Always | Production dependency documented by project. [1](https://raw.githubusercontent.com/plausible/community-edition/v3.2.1/compose.yml) |
| Postgre SQL 16 | required | — | Always | Metadata database in stable pinned compose; not interchangeable with Click House. [1](https://raw.githubusercontent.com/plausible/community-edition/v3.2.1/compose.yml) |
| Click House 24.12 | required | — | Always | Event database in stable compose; both Postgres and Click House required. [1](https://raw.githubusercontent.com/plausible/community-edition/v3.2.1/compose.yml) |
| SMTP transport | conditional | — | Email verification/invites/reports requiring delivery | Optional deployment configuration; not necessary for all analytics collection. [1](https://github.com/plausible/community-edition/wiki/configuration) |
| Max Mind and Google integrations | optional | — | Only when these integrations are enabled | Separate configuration routes; not mandatory core services. [1](https://github.com/plausible/community-edition) |

Resources: CPU SSE 4.2 or NEON instruction support; memory At least 2 GB recommended; storage not specified; OS Docker-capable host. Official repository prerequisites; storage depends on retained traffic, no fixed disk requirement supplied. [1](https://github.com/plausible/community-edition)

## One-click and installer options

Status: **none-found**. Reviewed official deployment instructions; no verified one-click option found. Manual container instructions are not one-click. [1](https://github.com/plausible/community-edition)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/plausible.json) · [Claim ledger](../../research/profile-claims/plausible.jsonl) · [Research steps](../../research/profile-audits/plausible.md)
