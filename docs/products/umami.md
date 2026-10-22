# Umami

[Product](https://umami.is) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Umami Software, Inc. (business); ownership: **private**; funding: **funded**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Privacy policy names Umami Software, Inc.; investor-issued July 2022 announcement confirms $1.5 M pre-seed led by Race Capital and founders Mike/Brian/Francis Cao. Exact legal company formation year not established; not conflated with earlier project origin. Historical investor not asserted to own a current fixed percentage. [1](https://umami.is/privacy) [2](https://www.globenewswire.com/news-release/2022/07/19/2481786/0/en/umami-raises-1-5-million-pre-seed-funding-round-led-by-race-capital-to-continue-growing-its-popular-open-source-privacy-focused-web-analytics-platform.html)

Known investors: [Race Capital](https://www.globenewswire.com/news-release/2022/07/19/2481786/0/en/umami-raises-1-5-million-pre-seed-funding-round-led-by-race-capital-to-continue-growing-its-popular-open-source-privacy-focused-web-analytics-platform.html).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Self-hosted Umami | free | USD 0/organization | — | — | — | unspecified | free self-hosted core. Open source distribution; infrastructure costs separate. Hosted Hobby separately free with 100 K events/month. [1](https://docs.umami.is/docs/install) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No public designation or verified amount found in reviewed pricing page. [1](https://umami.is/pricing) |
| business | Business | published | USD 200/organization | — | — | — | unspecified | vendor commercial cloud. Cloud Business includes 10 M events/month; additional events $0.00002 each and replay overage separate. No published annual total found. [1](https://umami.is/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | vendor commercial cloud. Cloud Enterprise Custom pricing/Contact us; SAML and custom retention. No paid self-host license inferred. [1](https://umami.is/pricing) |

## Defensibility assessments

- Privacy-oriented instrumentation plus growing analysis/report breadth creates workflow differentiation, while permissively licensed code limits engine exclusivity. [1](https://docs.umami.is/docs/install) [2](https://docs.umami.is/docs/metric-definitions)

## Three product reasons to consider it

1. Funnels, retention and journey analysis support investigating conversion drop-offs and repeat visits. [1](https://umami.is/pricing)
2. Custom events, event/session properties and goals add behavioral context beyond pageview totals. [1](https://umami.is/pricing)
3. UTM/ad-click attribution and Web Vitals metrics connect campaign traffic to measured page experience. [1](https://docs.umami.is/docs/metric-definitions)

## Corporate sponsorship

Status: **business-fallback**. Reviewed project/company sources; no separate corporate sponsor verified. Verified business steward supplied as fallback. [1](https://umami.is/privacy)

- [Umami Software, Inc.](https://umami.is/privacy): business-steward. [Evidence](https://umami.is/privacy).

## Self-operation requirements

Mode: **server**. Current installation documents Postgre SQL and source/container/Kubernetes alternatives. Optional Redis explicit; My SQL legacy excluded. Hosting provider integrations do not remove database requirements. [1](https://docs.umami.is/docs/install)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Node.js 18.18+ source runtime | one-of | runtime | Source-install route | pnpm used to build; Node runtime runs application. [1](https://docs.umami.is/docs/install) |
| Docker image / Compose | one-of | runtime | Container route | Production dependency documented by project. [1](https://docs.umami.is/docs/install) |
| Postgre SQL 12.14+ | required | — | Always | Current v 3 docs list Postgre SQL; old My SQL routes not treated as current. [1](https://docs.umami.is/docs/install) |
| Redis | optional | — | Cache and shared session management | Without Redis, direct DB lookups and JWT authentication are supported. [1](https://docs.umami.is/docs/enable-redis) |
| Postgre SQL direct migration connection | conditional | — | Pooled serverless database route | Set DIRECT_DATABASE_URL for migrations when DATABASE_URL uses pooler. [1](https://docs.umami.is/docs/guides/running-on-vercel) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. No universal production hardware minimum verified; size to actual workload. [1](https://docs.umami.is/docs/install)

## One-click and installer options

Status: **offered**. Official Running on Vercel guide explicitly offers automation button for deployment steps; recorded official deployment URL. Manual Compose is separate. [1](https://docs.umami.is/docs/install)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Vercel deployment button](https://docs.umami.is/docs/guides/running-on-vercel): **one-click**, officially-linked-third-party. Official guide says button automates steps 1–5; Postgre SQL/connection configuration and changing default password still required. [1](https://docs.umami.is/docs/guides/running-on-vercel)

[Structured profile](../../research/profiles/umami.json) · [Claim ledger](../../research/profile-claims/umami.jsonl) · [Research steps](../../research/profile-audits/umami.md)
