# Outline (source-available)

[Product](https://www.getoutline.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

General Outline, Inc. (business); ownership: **private**; funding: **bootstrapped**.

Started 2020 (company-founded); years active: 6; years in business: 6. Ages are approximate calendar-year differences as of 2026-10-21.

Official About: company founded beginning2020 after three years of project development; bootstrapped and profitable, not reliant on outside capital. No equity investors identified. Current product is source-available under BSL, despite general open-source language on About page. [1](https://www.getoutline.com/about)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community Edition | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. On-premises Community0 with limited features; BSL source-available terms apply. [1](https://www.getoutline.com/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified in the public pricing material read; role remains unknown. [1](https://www.getoutline.com/pricing) |
| business | Business | published | — | USD 48/user | — | — | 10 | paid on-premises license. 4/user/month billed annually ×12; cloud account plans separate10/79/249 permonth by team size. [1](https://www.getoutline.com/pricing) |
| enterprise | Enterprise | published | — | USD 60/user | — | — | 100 | paid on-premises license. 5/user/month billed annually ×12;100user minimum. Published license price, not quote-only. [1](https://www.getoutline.com/pricing) |

## Defensibility assessments

- Accumulated team knowledge, links and chat integrations create switching costs within a focused wiki workflow. [1](https://www.getoutline.com/about)

## Three product reasons to consider it

1. Co-edit documents with threaded discussion and mentions. [1](https://www.getoutline.com/)
2. Search, share and ask documentation questions from Slack. [1](https://www.getoutline.com/)
3. Compose structured pages with Markdown shortcuts, slash commands and interactive embeds. [1](https://www.getoutline.com/)

## Corporate sponsorship

Status: **business-fallback**. Official project and deployment pages checked; no separately identified corporate financial or in-kind sponsor. This is a search limitation, not proof none exists. [1](https://www.getoutline.com/about)

- [General Outline, Inc.](https://www.getoutline.com): business-steward. [Evidence](https://www.getoutline.com/about).

## Self-operation requirements

Mode: **server**. Default Docker+PostgreSQL+Redis and local file storage verified. Authentication provider and domain required. External database/cache/storage route also supported; Community edition is source-available, not OSI OSS. [1](https://docs.getoutline.com/s/hosting/doc/docker-7pfeLP5a8t)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker/Compose | required | — | Default documented deployment | Recommended application packaging; single container allowed if services external. [1](https://docs.getoutline.com/s/hosting/doc/docker-7pfeLP5a8t) |
| PostgreSQL14+ | required | — | Default documented deployment | Docker example currently uses18;14+ is declared minimum. [1](https://docs.getoutline.com/s/hosting/doc/requirements-ULdYnwi4wG) |
| Redis4+ | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://docs.getoutline.com/s/hosting/doc/requirements-ULdYnwi4wG) |
| Dedicated domain/subdomain and compatible authentication provider | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://docs.getoutline.com/s/hosting/doc/requirements-ULdYnwi4wG) |
| Persistent file storage | required | — | Default documented deployment | Local volume in current Docker example; external storage permitted. [1](https://docs.getoutline.com/s/hosting/doc/docker-7pfeLP5a8t) |
| HTTPS/reverse proxy | required | — | Default documented deployment | https-portal included as example; other compatible proxy can be used. [1](https://docs.getoutline.com/s/hosting/doc/docker-7pfeLP5a8t) |

Resources: CPU not specified; memory 512MB minimum;1GB+ recommended; storage not specified; OS Unix-compatible/Linux; Windows Server unsupported. CPU depends on active users and workload; no absolute core/disk minimum stated. [1](https://docs.getoutline.com/s/hosting/doc/requirements-ULdYnwi4wG)

## One-click and installer options

Status: **none-found**. Official installation instructions checked. Manual Docker Compose is not a one-click installation; no additional maintained provider template verified. [1](https://docs.getoutline.com/s/hosting/doc/docker-7pfeLP5a8t)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/outline.json) · [Claim ledger](../../research/profile-claims/outline.jsonl) · [Research steps](../../research/profile-audits/outline.md)
