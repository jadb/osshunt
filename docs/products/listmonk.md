# listmonk

[Product](https://listmonk.app/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Kailash Nadh and listmonk contributors; developed at Zerodha (community); ownership: **community**; funding: **not-applicable**.

Started 2018 (project-started); years active: 8; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official homepage says Since2018. Public repository maintained under knadh; Zerodha officially lists listmonk among projects built and dog-fooded there. No standalone venture-financed company identified; this funding status concerns the project, not Zerodha. [1](https://listmonk.app/) [2](https://github.com/knadh/listmonk) [3](https://zerodha.tech/projects/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | listmonk | free | USD 0/instance | — | — | — | unspecified | free self-hosted software. Free AGPL application; database, server and email-transport costs separate. [1](https://listmonk.app/) |
| popular | unknown | unknown | — | — | — | — | unspecified | product plans. No explicitly highlighted Most popular or Recommended plan found in the public pricing page. [1](https://listmonk.app/) |
| business | unknown | not-offered | — | — | — | — | unspecified | self-hosted software. No commercial Team/Business software edition; linked hosting providers unaffiliated. [1](https://listmonk.app/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | self-hosted software. No Enterprise software tier published; external hosting providers not first-party enterprise plans. [1](https://listmonk.app/) |

## Defensibility assessments

- Single-binary design and production-proven bulk delivery are useful engineering differentiation, while AGPL and standard SMTP limit exclusive lock-in. [1](https://listmonk.app/)

## Three product reasons to consider it

1. SQL expressions segment large subscriber lists using custom subscriber data. [1](https://listmonk.app/)
2. Multi-SMTP queues expose throughput and sliding-window rate controls for bulk campaigns. [1](https://listmonk.app/)
3. Go templates and messenger webhooks extend campaigns into dynamic email and other message channels. [1](https://listmonk.app/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsorship established in the checked project/business pages; commercial steward included as business fallback. [1](https://zerodha.tech/projects/)

- [Zerodha](https://zerodha.tech/projects/): business-steward. [Evidence](https://zerodha.tech/projects/).

## Self-operation requirements

Mode: **server**. Stable binary/container install with Postgres; no Node/Go build tool needed for prebuilt binary and no separate Redis/worker service documented. Homepage now advertises7beta; use stable release for production. [1](https://listmonk.app/docs/installation/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| listmonk standalone binary | required | — | Always; application includes UI and delivery workers. | Documented production component. [1](https://listmonk.app/docs/installation/) |
| PostgreSQL | required | — | Only database dependency. | Documented production component. [1](https://listmonk.app/docs/) |
| SMTP relay/server | required | — | For email campaign delivery; configurable one or multiple servers. | Documented production component. [1](https://listmonk.app/docs/configuration/) |
| Filesystem media volume | one-of | media-storage | Default media uploads storage. | Documented production component. [1](https://listmonk.app/docs/configuration/) |
| S3-compatible object storage | one-of | media-storage | Alternative media storage configured in app. | Documented production component. [1](https://listmonk.app/docs/configuration/) |
| External messenger endpoint | conditional | — | Only SMS/WhatsApp/custom notification delivery. | Documented production component. [1](https://listmonk.app/) |

Resources: CPU not specified; memory not specified; storage not specified; OS Published binaries for Linux,macOS,Windows and BSD. 57MB observed in a7million-email production campaign is a benchmark, not a minimum. No guaranteed hardware minimum. [1](https://listmonk.app/)

## One-click and installer options

Status: **none-found**. Official installation docs describe binary and manual Docker Compose. Homepage references unaffiliated third-party hosting but current extract gives no verifiable provider shortcut URL; none recorded. [1](https://listmonk.app/docs/installation/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/listmonk.json) · [Claim ledger](../../research/profile-claims/listmonk.jsonl) · [Research steps](../../research/profile-audits/listmonk.md)
