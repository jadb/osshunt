# Taiga

[Product](https://taiga.io) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

TAIGA CLOUD SERVICES, S.L. (business); ownership: **unknown**; funding: **unknown**.

Started 2013 (project-started); years active: 13; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

2013 is Taiga project origin at Kaleidos hackathon, not incorporation date of current cloud operator. September2025 terms identify Taiga Cloud Services S.L.; current ultimate ownership and equity funding not resolved. [1](https://taiga.io/terms-and-conditions/) [2](https://taiga.io/about-us/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community | free | EUR 0/instance | — | — | — | unspecified | free self-hosted core. Core software license has no subscription charge; infrastructure and optional commercial offerings separate. [1](https://taiga.io/deployment-pricing-options/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified in the public pricing material read; role remains unknown. [1](https://taiga.io/deployment-pricing-options/) |
| business | Basic | published | EUR 20/account | EUR 200/account | — | — | unspecified | vendor commercial cloud. Vendor cloud: unlimited projects/users,500MB. Actual200EUR annual total, not12×monthly. [1](https://taiga.io/deployment-pricing-options/) |
| enterprise | Taiga Private Cloud | quote | — | — | — | — | unspecified | vendor commercial cloud. Get a Quote; dedicated managed instance. On-premise service also quoted. [1](https://taiga.io/deployment-pricing-options/) |

## Defensibility assessments

- Focused agile workflows plus existing team/project history provide modest switching costs; no unique technical barrier established. [1](https://taiga.io/about-us/)

## Three product reasons to consider it

1. Use both Scrum and Kanban frameworks for cross-functional agile work. [1](https://taiga.io/about-us/)
2. Prioritize deliverables collaboratively with stakeholders as needs change. [1](https://taiga.io/)
3. Track ongoing activities, completed deliverables and resource/time allocation. [1](https://taiga.io/)

## Corporate sponsorship

Status: **business-fallback**. Official project and deployment pages checked; no separately identified corporate financial or in-kind sponsor. This is a search limitation, not proof none exists. [1](https://taiga.io/terms-and-conditions/)

- [TAIGA CLOUD SERVICES, S.L.](https://taiga.io/): business-steward. [Evidence](https://taiga.io/terms-and-conditions/).

## Self-operation requirements

Mode: **server**. Scope is the documented default installation. Optional integrations are separate from the core; no infrastructure price implied. [1](https://docs.taiga.io/setup-production.html)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker >=19.03 and Docker Compose | required | — | Default documented deployment | Recommended production route; source installation alternative below. [1](https://docs.taiga.io/setup-production.html) |
| PostgreSQL | required | — | Default documented deployment | Core database. Source route documents >=9.4,<14 and PostgreSQL12 example; do not treat this older guide as newest upstream PostgreSQL recommendation. [1](https://docs.taiga.io/setup-production.html) |
| RabbitMQ | required | — | Default documented deployment | Message broker for async tasks and events. [1](https://docs.taiga.io/setup-production.html) |
| Taiga API, async worker, frontend, events and protected attachments | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://docs.taiga.io/setup-production.html) |
| Python3 (>=3.8,<3.12), Node.js and NGINX | conditional | — | Source installation instead of Docker | Runtime/build dependencies bundled by container route. [1](https://docs.taiga.io/setup-production.html) |
| SMTP | conditional | — | Email delivery enabled | Email settings support console backend for no external mail. [1](https://docs.taiga.io/setup-production.html) |

Resources: CPU not specified; memory 1 GB minimum (source-install guide); storage 20 GB minimum (source-install guide); OS Ubuntu20.04 in source guide; Docker production route. Older source guide requirements are distinguished from a current container sizing guarantee. [1](https://docs.taiga.io/setup-production.html)

## One-click and installer options

Status: **none-found**. Official installation instructions checked. Manual Docker Compose is not a one-click installation; no additional maintained provider template verified. [1](https://docs.taiga.io/setup-production.html)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/taiga.json) · [Claim ledger](../../research/profile-claims/taiga.jsonl) · [Research steps](../../research/profile-audits/taiga.md)
