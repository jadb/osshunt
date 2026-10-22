# Twenty

[Product](https://twenty.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Twenty (business); ownership: **private**; funding: **funded**.

Started 2023 (company-founded); years active: 3; years in business: 3. Ages are approximate calendar-year differences as of 2026-10-21.

CRM company identified by twenty.com and founders Felix Malfait, Charles Bochet and Thomas Colas des Francs; unrelated cyberwarfare company Twenty excluded. Runa portfolio confirms2024 $5M round with YC participation. [1](https://www.ycombinator.com/companies/twenty) [2](https://runacap.com/companies/twenty/)

Known investors: [Runa Capital](https://runacap.com/companies/twenty/), [Y Combinator](https://runacap.com/companies/twenty/).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open-source self-hosted core | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. AGPL core; commercial enterprise files/features excluded. Infrastructure separate. [1](https://github.com/twentyhq/twenty) |
| popular | unknown | unknown | — | — | — | — | unspecified | product plans. No explicitly highlighted Most popular or Recommended plan found in the public pricing page. [1](https://twenty.com/pricing) |
| business | Organization | unknown | — | — | — | — | unspecified | vendor commercial cloud. Named organizational cloud tier displays $19/user/month alongside monthly/yearly toggle; exact active billing period unresolved from extract. [1](https://twenty.com/pricing) |
| enterprise | Enterprise | published | — | USD 50000/organization | — | — | unspecified | vendor commercial cloud. Published starting annual contract $50,000/year; customized final price via sales. [1](https://twenty.com/pricing) |

## Defensibility assessments

- Extensible data model and custom-app ecosystem can accumulate business-specific workflow switching costs; AGPL permits competing implementations. [1](https://twenty.com/pricing)

## Three product reasons to consider it

1. Custom objects, fields and layouts model customer relationships beyond standard contacts and deals. [1](https://twenty.com/pricing)
2. Table, Kanban and Calendar views let teams navigate the same CRM records in different workflows. [1](https://twenty.com/pricing)
3. REST/GraphQL APIs, webhooks and TypeScript custom apps connect CRM data with business systems. [1](https://twenty.com/pricing)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsorship established in the checked project/business pages; commercial steward included as business fallback. [1](https://www.ycombinator.com/companies/twenty)

- [Twenty](https://www.ycombinator.com/companies/twenty): business-steward. [Evidence](https://www.ycombinator.com/companies/twenty).

## Self-operation requirements

Mode: **server**. Current official container recipe; web and worker share Postgres/Redis/storage configuration. Separate external AI/provider credentials needed only for chosen AI integrations; no invented extra queue broker. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docs/developers/self-host/capabilities/docker-compose.mdx)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker and Docker Compose | required | — | Documented production container path. | Documented production component. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docs/developers/self-host/capabilities/docker-compose.mdx) |
| Node application server | required | — | Always; included twentycrm/twenty image. | Documented production component. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docker/docker-compose.yml) |
| Background worker | required | — | Always; worker:prod container. | Documented production component. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docker/docker-compose.yml) |
| PostgreSQL | required | — | Always; PG_DATABASE_URL. | Documented production component. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docker/docker-compose.yml) |
| Redis | required | — | Always; REDIS_URL and dependency. | Documented production component. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docker/docker-compose.yml) |
| Local persistent volume | one-of | file-storage | Default attachment/data storage. | Documented production component. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docker/docker-compose.yml) |
| S3-compatible object storage | one-of | file-storage | Set STORAGE_TYPE for external storage instead of local volume. | Documented production component. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docker/docker-compose.yml) |
| SMTP | conditional | — | Outbound email notifications; configure EMAIL_DRIVER/SMTP values. | Documented production component. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docker/docker-compose.yml) |
| Google/Microsoft OAuth app | conditional | — | Only email/calendar sync or corresponding external login. | Documented production component. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docker/docker-compose.yml) |
| Reverse proxy with TLS | conditional | — | Strongly recommended for public domain; HTTPS needed for browser features. | Documented production component. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docs/developers/self-host/capabilities/docker-compose.mdx) |

Resources: CPU not specified; memory 2GB minimum; storage not specified; OS Docker-capable host. Official System Requirements publishes2GB RAM; no numerical CPU/storage minimum verified. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docs/developers/self-host/capabilities/docker-compose.mdx)

## One-click and installer options

Status: **offered**. Official Docker Compose guide Option1 provides a one-line bash installer; Option2 Compose instructions alone remain manual. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docs/developers/self-host/capabilities/docker-compose.mdx)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Twenty one-line installer](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docs/developers/self-host/capabilities/docker-compose.mdx): **one-command**, first-party. Official bash installer fetches stable release Compose/environment; terminal command, not click deployment. [1](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-docs/developers/self-host/capabilities/docker-compose.mdx)

[Structured profile](../../research/profiles/twenty.json) · [Claim ledger](../../research/profile-claims/twenty.jsonl) · [Research steps](../../research/profile-audits/twenty.md)
