# Zammad

[Product](https://zammad.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Zammad Foundation; commercial development by Zammad GmbH (foundation); ownership: **nonprofit**; funding: **unknown**.

Started 2014 (company-founded); years active: 12; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official timeline establishes Foundation and GmbH in October2014; source code started2013 and1.0 released2016. Foundation owns official code; GmbH commercial counterpart. Exact GmbH financing and equity investors unresolved; nonprofit owner is not an equity investment. [1](https://zammad.com/en/company) [2](https://zammad.org/about) [3](https://zammad.com/en/blog/open-source-philosophy)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community self-hosted | free | EUR 0/instance | — | — | — | unspecified | free self-hosted core. Free project code; infrastructure and optional support contracts separate. [1](https://zammad.org/about) |
| popular | unknown | unknown | — | — | — | — | unspecified | product plans. No explicitly highlighted Most popular or Recommended plan found in the public pricing page. [1](https://zammad.com/en/pricing) |
| business | Business | published | — | EUR 2999/organization | — | — | unspecified | self-host support contract. Self-host support contract, not software feature unlock; annual published total excl.VAT. [1](https://zammad.com/en/pricing) |
| enterprise | Enterprise | published | — | EUR 5999/organization | — | — | unspecified | self-host support contract. Self-host support contract; published annual total excl.VAT. [1](https://zammad.com/en/pricing) |

## Defensibility assessments

- Foundation-held AGPL code and accumulated ticket/integration workflows create continuity and customization value, with modest exclusive technology barriers. [1](https://zammad.org/about)

## Three product reasons to consider it

1. Core Workflows dynamically show ticket fields according to team and process. [1](https://zammad.com/en/product/features)
2. GitHub/GitLab issue links connect customer tickets to engineering work. [1](https://zammad.com/en/product/features)
3. Duplicate detection warns agents during ticket creation and limits repeated cases. [1](https://zammad.com/en/product/features)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsorship established in the checked project/business pages; commercial steward included as business fallback. [1](https://zammad.com/en/company)

- [Zammad GmbH](https://zammad.com/en/company): business-steward. [Evidence](https://zammad.com/en/company).

## Self-operation requirements

Mode: **server**. Current documentation covers7.2+; container stack includes dependencies. Single filesystem can use local cache; separate/cache services distinguished. [1](https://docs.zammad.org/en/latest/prerequisites/software.html)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Ruby on Rails application and background services | required | — | Always; packaged/container stack supplies runtime. | Documented production component. [1](https://zammad.com/en/company) |
| PostgreSQL15+ | required | — | Always; supported SQL database. | Documented production component. [1](https://docs.zammad.org/en/latest/prerequisites/software.html) |
| Redis7+ | one-of | realtime-cache | Realtime websocket state; normal distribution path. | Documented production component. [1](https://docs.zammad.org/en/latest/prerequisites/software.html) |
| Valkey | one-of | realtime-cache | CentOS/RHEL10 drop-in replacement installed by packages. | Documented production component. [1](https://docs.zammad.org/en/latest/prerequisites/software.html) |
| Nginx | one-of | reverse-proxy | Public web reverse proxy. | Documented production component. [1](https://docs.zammad.org/en/latest/prerequisites/software.html) |
| Apache | one-of | reverse-proxy | Public web reverse proxy. | Documented production component. [1](https://docs.zammad.org/en/latest/prerequisites/software.html) |
| Elasticsearch | optional | — | Strongly recommended for rich/attachment search and reports. | Zammad7.2+ requires ES>=8.15,<10 when enabled. [1](https://docs.zammad.org/en/latest/prerequisites/software.html) |
| Memcached | conditional | — | Required for Docker/Kubernetes or separate nodes/filesystems; filesystem cache otherwise. | Documented production component. [1](https://docs.zammad.org/en/latest/prerequisites/software.html) |
| GnuPG | conditional | — | Only signed/encrypted PGP email integration. | Documented production component. [1](https://docs.zammad.org/en/latest/prerequisites/software.html) |

Resources: CPU 2 cores minimum guidance; memory 6GB minimum; add4GB for colocated Elasticsearch; storage not specified; OS Supported Linux distributions; Docker/Kubernetes alternative. Minimalistic deployment guidance;40-agent example6cores/6GB plus6GB colocated ES. No universal disk recommendation. [1](https://docs.zammad.org/en/latest/prerequisites/hardware.html)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual Docker Compose or source installation does not qualify as one-click. [1](https://docs.zammad.org/en/latest/prerequisites/software.html)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/zammad.json) · [Claim ledger](../../research/profile-claims/zammad.jsonl) · [Research steps](../../research/profile-audits/zammad.md)
