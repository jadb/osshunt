# PostHog core

[Product](https://posthog.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Post Hog, Inc. (business); ownership: **private**; funding: **funded**.

Started 2020 (company-founded); years active: 6; years in business: 6. Ages are approximate calendar-year differences as of 2026-10-21.

Official media page says founded January 2020 by James Hawkins/Tim Glaser and lists funding rounds/investors. Business privately financed; media/handbook totals and some round dates differ, so no reconciled lifetime total asserted. Listed participants are equity investors, not corporate project sponsors. [1](https://posthog.com/media) [2](https://posthog.com/about)

Known investors: [Y Combinator](https://posthog.com/media), [GV](https://posthog.com/media), [Stripe](https://posthog.com/media), [Peak XV Partners](https://posthog.com/media), [Formus Capital](https://posthog.com/media), [1984 Ventures](https://posthog.com/media), [Tapas Capital](https://posthog.com/media).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Self-hosted core | free | USD 0/organization | — | — | — | unspecified | free self-hosted core. MIT hobby deployment; own infrastructure. Paid-plan features Cloud-only; self-host unsupported. [1](https://posthog.com/docs/self-host) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No highlighted Most popular/Recommended tier verified; FAQ suggests pay-as-you-go broadly but this is not a badge. [1](https://posthog.com/pricing) |
| business | Boost | published | USD 250/organization | — | — | — | unspecified | vendor cloud platform add-on. Closest organizational add-on; monthly 250 plus per-product usage. Adds projects/white-labeling/collaboration; not self-host license. [1](https://posthog.com/platform-packages) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | vendor cloud platform add-on. Custom pricing via sales; product consumption charged separately. [1](https://posthog.com/platform-packages) |

## Defensibility assessments

- Combining analytics, replay and feature-flag instrumentation creates a shared event context and workflow switching costs. [1](https://posthog.com/pricing)

## Three product reasons to consider it

1. Product analytics links events, funnels and cohorts for investigation of conversion behavior. [1](https://posthog.com/pricing)
2. Session replay adds the sequence of user interactions to quantitative analytics. [1](https://posthog.com/pricing)
3. Feature flags and experiments let product teams evaluate releases against observed behavior. [1](https://posthog.com/pricing)

## Corporate sponsorship

Status: **business-fallback**. Reviewed project/company sources; no separate corporate sponsor verified. Verified business steward supplied as fallback. [1](https://posthog.com/about)

- [Post Hog, Inc.](https://posthog.com/about): business-steward. [Evidence](https://posthog.com/about).

## Self-operation requirements

Mode: **server**. No tagged stable self-host release: official docs say continuous master/latest delivery and no guarantees. Requirements describe current hobby Compose snapshot, not a supported production architecture or the beta TUI. Paid features Cloud-only. [1](https://posthog.com/docs/self-host)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker/Compose on Ubuntu Linux | required | — | Always | Production dependency documented by project. [1](https://posthog.com/docs/self-host) |
| Postgre SQL | required | — | Always | Production dependency documented by project. [1](https://raw.githubusercontent.com/PostHog/posthog/master/docker-compose.hobby.yml) |
| Click House | required | — | Always | Production dependency documented by project. [1](https://raw.githubusercontent.com/PostHog/posthog/master/docker-compose.hobby.yml) |
| Redis 7 and Valkey | required | — | Always | Current hobby compose includes Redis and separate Valkey for CDP dual-writes; not generic interchangeable alternatives in this snapshot. [1](https://raw.githubusercontent.com/PostHog/posthog/master/docker-compose.hobby.yml) |
| Kafka and Zoo Keeper | required | — | Always | Current hobby compose ingestion/Click House dependencies. [1](https://raw.githubusercontent.com/PostHog/posthog/master/docker-compose.hobby.yml) |
| Web, workers and ingestion services | required | — | Always | Python/Node/Rust services packaged in compose; not one standalone binary. [1](https://raw.githubusercontent.com/PostHog/posthog/master/docker-compose.hobby.yml) |
| S 3-compatible object storage and Seaweed FS | required | — | Always | Hobby stack includes objectstorage plus Seaweed FS for replay/blob routes. [1](https://raw.githubusercontent.com/PostHog/posthog/master/docker-compose.hobby.yml) |
| Temporal and associated workers | required | — | Always | Included in current hobby stack, separate workflow service. [1](https://raw.githubusercontent.com/PostHog/posthog/master/docker-compose.hobby.yml) |
| Elasticsearch, Browserless and Person Hog services | required | — | Always | Included supporting services in current compose; deployment snapshot can change continuously. [1](https://raw.githubusercontent.com/PostHog/posthog/master/docker-compose.hobby.yml) |
| SMTP | conditional | — | Outbound email notifications | Configure email separately; not a prerequisite to all collection. [1](https://posthog.com/docs/self-host) |
| Open AI/Anthropic API keys | optional | — | AI features only | External API costs and optional feature configuration; keys default blank. [1](https://raw.githubusercontent.com/PostHog/posthog/master/docker-compose.hobby.yml) |

Resources: CPU 4 v CPU equivalent; memory 16 GB; storage >30 GB; OS Linux Ubuntu VM. Official hobby deployment guidance; not a production capacity guarantee. [1](https://posthog.com/docs/self-host)

## One-click and installer options

Status: **offered**. Official Installing section provides deploy-hobby one-command shell route. Beta TUI explicitly trial/unstable and not represented as stable one-click. [1](https://posthog.com/docs/self-host)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Hobby deployment shell installer](https://posthog.com/docs/self-host): **one-command**, first-party. Official deploy-hobby shell command sets up stack; requires VM/domain. Beta TUI excluded as stable path; no true one-click template claim. [1](https://posthog.com/docs/self-host)

[Structured profile](../../research/profiles/posthog.json) · [Claim ledger](../../research/profile-claims/posthog.jsonl) · [Research steps](../../research/profile-audits/posthog.md)
