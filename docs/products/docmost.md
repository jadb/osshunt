# Docmost Community

[Product](https://docmost.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Docmost, Inc. (business); ownership: **unknown**; funding: **unknown**.

Started 2024 (product-launched); years active: 2; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Founder announced first public release29June2024 after12months of work.2024 is product launch, not independently verified company incorporation date. Terms verify commercial steward; ultimate ownership, funding and investor identities unresolved after official blog/company search. [1](https://docmost.com/terms) [2](https://docmost.com/blog/docmost-is-here/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. No software subscription fee for core edition; optional commercial editions and infrastructure separate. [1](https://docmost.com/pricing) |
| popular | Business | published | — | USD 72/user | — | — | 10 | paid self-managed license. Explicit Most popular;6/seat/month annually ×12. Monthly-billing amount unverified. [1](https://docmost.com/pricing) |
| business | Business | published | — | USD 72/user | — | — | 10 | paid self-managed license. 6/seat/month billed annually ×12;10seat minimum. [1](https://docmost.com/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | paid self-managed license. Custom pricing; Contact sales. [1](https://docmost.com/pricing) |

## Defensibility assessments

- An integrated collaborative editor and structured team spaces create modest knowledge-workflow switching costs; advanced governance remains commercially gated. [1](https://docmost.com/pricing)

## Three product reasons to consider it

1. Co-edit documentation pages simultaneously without overwriting collaborators. [1](https://docmost.com/docs/)
2. Organize departments and projects into spaces with separate permissions. [1](https://docmost.com/pricing)
3. Find team knowledge through full-text search alongside the real-time wiki. [1](https://docmost.com/pricing)

## Corporate sponsorship

Status: **business-fallback**. Official project and deployment pages checked; no separately identified corporate financial or in-kind sponsor. This is a search limitation, not proof none exists. [1](https://docmost.com/terms)

- [Docmost, Inc.](https://docmost.com): business-steward. [Evidence](https://docmost.com/terms).

## Self-operation requirements

Mode: **server**. Official current default Docker stack verified. Local storage, PostgreSQL and Redis volumes persist data; remote storage optional. Community AGPL core distinct from paid Business/Enterprise capabilities. [1](https://docmost.com/docs/installation)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker and Docker Compose | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://docmost.com/docs/installation) |
| PostgreSQL18 (current documented default) | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/docmost/docmost/main/docker-compose.yml) |
| Redis8 with persistent append-only storage | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/docmost/docmost/main/docker-compose.yml) |
| Persistent app/file storage | required | — | Default documented deployment | Local storage default. [1](https://docmost.com/docs/installation) |
| S3-compatible or Azure Blob storage | optional | — | Replace local file-storage driver | As documented; no unsupported version assumption. [1](https://docmost.com/docs/installation) |
| SMTP | conditional | — | Email configured | Installation links configuration for mail settings. [1](https://docmost.com/docs/installation) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. Hardware minima not specified in the reviewed installation instructions. [1](https://docmost.com/docs/installation)

## One-click and installer options

Status: **none-found**. Official installation instructions checked. Manual Docker Compose is not a one-click installation; no additional maintained provider template verified. [1](https://docmost.com/docs/installation)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/docmost.json) · [Claim ledger](../../research/profile-claims/docmost.jsonl) · [Research steps](../../research/profile-audits/docmost.md)
