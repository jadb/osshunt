# Plane Community

[Product](https://plane.so) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Plane (business); ownership: **private**; funding: **funded**.

Started 2022 (company-founded); years active: 4; years in business: 4. Ages are approximate calendar-year differences as of 2026-10-21.

Official November 2023 seed announcement says founded November 2022; sole investor in that round OSS Capital. Private startup; current full cap table not disclosed. Community Edition distinct from commercial Free plan. [1](https://plane.so/blog/plane-raises-4m-seed)

Known investors: [OSS Capital](https://plane.so/blog/plane-raises-4m-seed).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. Core software license has no subscription charge; infrastructure and optional commercial offerings separate. [1](https://plane.so/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified in the public pricing material read; role remains unknown. [1](https://plane.so/pricing) |
| business | Business | unknown | — | — | — | — | unspecified | vendor commercial cloud. Advertised13/seat/month with13% saving; cloud/self-host and selected billing state not independently disambiguated, so normalized monthly and annual amounts unknown. [1](https://plane.so/pricing) |
| enterprise | Enterprise Grid | quote | — | — | — | — | unspecified | vendor commercial cloud. Quote on request. [1](https://plane.so/pricing) |

## Defensibility assessments

- Linked work items, cycles and project pages accumulate workflow context that can increase switching costs. [1](https://plane.so/pricing)

## Three product reasons to consider it

1. Group work into timeboxed cycles and logical modules. [1](https://plane.so/pricing)
2. Choose among five layouts and custom saved views for work items. [1](https://plane.so/pricing)
3. Keep project documentation alongside work items through Project Pages. [1](https://plane.so/pricing)

## Corporate sponsorship

Status: **business-fallback**. Official project and deployment pages checked; no separately identified corporate financial or in-kind sponsor. This is a search limitation, not proof none exists. [1](https://plane.so/blog/plane-raises-4m-seed)

- [Plane](https://plane.so): business-steward. [Evidence](https://plane.so/blog/plane-raises-4m-seed).

## Self-operation requirements

Mode: **server**. Community Edition manual setup.sh/Compose path verified separately from default commercial installer. Commercial Coolify guide is manual Compose import, not one-click. RabbitMQ and Valkey are part of CE stack. [1](https://developers.plane.so/self-hosting/methods/docker-compose)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker and Compose | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://developers.plane.so/self-hosting/methods/docker-compose) |
| PostgreSQL | required | — | Default documented deployment | Community compose default PostgreSQL15.7 image; externally supplied PostgreSQL supported. [1](https://raw.githubusercontent.com/makeplane/plane/master/deployments/cli/community/docker-compose.yml) |
| Valkey or Redis-compatible service | required | — | Default documented deployment | Community compose service plane-redis uses Valkey7.2.11; docs also permit external Redis. [1](https://raw.githubusercontent.com/makeplane/plane/master/deployments/cli/community/docker-compose.yml) |
| RabbitMQ | required | — | Default documented deployment | Worker/API AMQP queue; default image3.13.6. [1](https://raw.githubusercontent.com/makeplane/plane/master/deployments/cli/community/docker-compose.yml) |
| S3-compatible storage (MinIO default) | required | — | Default documented deployment | Bundled MinIO can be replaced by external S3-compatible storage. [1](https://raw.githubusercontent.com/makeplane/plane/master/deployments/cli/community/docker-compose.yml) |
| API, frontend, live, worker, beat-worker and proxy services | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/makeplane/plane/master/deployments/cli/community/docker-compose.yml) |
| SMTP | conditional | — | Email invitations/notifications enabled | As documented; no unsupported version assumption. [1](https://developers.plane.so/self-hosting/overview) |

Resources: CPU not specified; memory not specified; storage not specified; OS OS with bash; Linux, macOS; Windows Git Bash/Docker. Community route suggests minimum EC2 t3.medium/t3a.medium without a separate cross-platform numeric minimum. Commercial route separately lists2 cores/4GB,8GB production; not silently applied to CE. [1](https://developers.plane.so/self-hosting/methods/docker-compose)

## One-click and installer options

Status: **offered**. Options retain the official distinction between one-command installation and true provider one-click deployment. [1](https://developers.plane.so/self-hosting/methods/docker-compose)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Prime CLI installer (Commercial Edition)](https://developers.plane.so/self-hosting/methods/docker-compose): **one-command**, first-party. curl installer starts commercial Free plan, not Community Edition; interactive prompts remain. [1](https://developers.plane.so/self-hosting/methods/docker-compose)

[Structured profile](../../research/profiles/plane.json) · [Claim ledger](../../research/profile-claims/plane.jsonl) · [Research steps](../../research/profile-audits/plane.md)
