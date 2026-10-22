# NocoDB Community

[Product](https://nocodb.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

NocoDB, Inc. (business); ownership: **private**; funding: **funded**.

Started 2021 (product-launched); years active: 5; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

October2022funding announcement says project launched a year before;2021used as product-launch basis, not incorporation year. Seed investors historical; current full ownership/cap table unverified. Current Community fair-code/Sustainable Use license distinguished from historic open-source marketing. [1](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m)

Known investors: [Decibel](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m), [OSS Capital](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m), [Uncorrelated Ventures](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m), [Together Fund](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m), [Ram Shriram](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m), [Matt Mullenweg](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m), [Naval Ravikant](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m), [Jeff Hammerbacher](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m), [Spencer Kimball](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m), [Bob Young](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. Free self-host fair-code scope; Sustainable Use restrictions apply, not OSI OSS. [1](https://nocodb.com/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified in the public pricing material read; role remains unknown. [1](https://nocodb.com/pricing) |
| business | Business | published | USD 30/user | USD 288/user | — | — | unspecified | paid self-hosted license. Self-host card24perseat/month annually ×12; corresponding monthly card30. No seat minimum. [1](https://nocodb.com/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | paid self-hosted license. Self-host comparison Contact/Talk to Sales; custom Enterprise/add-ons. [1](https://nocodb.com/pricing) |

## Defensibility assessments

- Working directly with operational data and APIs can embed no-code workflows, though database portability limits proprietary retention. [1](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m)

## Three product reasons to consider it

1. Build spreadsheet interfaces and forms over structured operational records. [1](https://nocodb.com/pricing)
2. Trigger conditional webhooks with custom JSON payloads from record changes. [1](https://nocodb.com/pricing)
3. Create lightweight process flows using two workflows per base and two interfaces per workspace. [1](https://nocodb.com/pricing)

## Corporate sponsorship

Status: **business-fallback**. Official project and deployment pages checked; no separately identified corporate financial or in-kind sponsor. This is a search limitation, not proof none exists. [1](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m)

- [NocoDB, Inc.](https://nocodb.com): business-steward. [Evidence](https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m).

## Self-operation requirements

Mode: **server**. Current installation docs reviewed3Oct2026standardize PostgreSQL+Redis+worker stack. Historic SQLite/MySQL metadata paths not asserted as current production alternatives. Product external database connections are distinct from metadata backend and may be plan-gated. [1](https://nocodb.com/docs/self-hosting/installation/quickstart)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Engine/Desktop and Compose | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://nocodb.com/docs/self-hosting/installation/quickstart) |
| PostgreSQL | required | — | Default documented deployment | Current maintained PostgreSQL releases12+ documented; current major recommended. Required for reviewed standard stack. [1](https://nocodb.com/docs/self-hosting/installation/custom-infrastructure) |
| Redis | required | — | Default documented deployment | Cache and background job queue; also required distributed coordination for replicas. [1](https://nocodb.com/docs/self-hosting/installation/quickstart) |
| Separate NocoDB worker | required | — | Default documented deployment | Imports,exports,automations; same NocoDB image. [1](https://nocodb.com/docs/self-hosting/installation/quickstart) |
| Persistent PostgreSQL/Redis/application volumes | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://nocodb.com/docs/self-hosting/installation/quickstart) |
| Reverse proxy/TLS | conditional | — | Internet-facing or custom-domain production deployment | Traefik samples; own nginx/Caddy/load balancer supported. [1](https://nocodb.com/docs/self-hosting/installation/custom-infrastructure) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. Hardware minima not specified in the reviewed installation instructions. [1](https://nocodb.com/docs/self-hosting/installation/quickstart)

## One-click and installer options

Status: **offered**. Options retain the official distinction between one-command installation and true provider one-click deployment. [1](https://nocodb.com/docs/self-hosting/installation/quickstart)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [NocoDB quickstart installer](https://nocodb.com/docs/self-hosting/installation/quickstart): **one-command**, first-party. curl installer makes and starts Compose app/worker/PostgreSQL/Redis stack for local evaluation; Docker prerequisite. Production single-server wizard separately documented. [1](https://nocodb.com/docs/self-hosting/installation/quickstart)

[Structured profile](../../research/profiles/nocodb.json) · [Claim ledger](../../research/profile-claims/nocodb.jsonl) · [Research steps](../../research/profile-audits/nocodb.md)
