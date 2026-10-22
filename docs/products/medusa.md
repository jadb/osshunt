# Medusa

[Product](https://medusajs.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Medusa (business); ownership: **private**; funding: **funded**.

Started 2021 (company-founded); years active: 5; years in business: 5. Ages are approximate calendar-year differences as of 2026-10-21.

Dawn investor profile dates company founding 2021; earlier client code is not company start. July 2022 seed round raised $8M; named investor list is historical. Exact legal entity and complete current cap table unresolved. [1](https://www.dawncapital.com/companies/medusa) [2](https://medusajs.com/pricing) [3](https://www.streetinsider.com/Business%2BWire/Medusa%2BRaises%2B%248m%2Bto%2BBuild%2Bthe%2BLeading%2BE-Commerce%2BPlatform%2Bfor%2BDevelopers/20329757.html)

Known investors: [LocalGlobe](https://www.streetinsider.com/Business%2BWire/Medusa%2BRaises%2B%248m%2Bto%2BBuild%2Bthe%2BLeading%2BE-Commerce%2BPlatform%2Bfor%2BDevelopers/20329757.html), [Dawn Capital](https://www.streetinsider.com/Business%2BWire/Medusa%2BRaises%2B%248m%2Bto%2BBuild%2Bthe%2BLeading%2BE-Commerce%2BPlatform%2Bfor%2BDevelopers/20329757.html), [Anthony Casalena](https://www.streetinsider.com/Business%2BWire/Medusa%2BRaises%2B%248m%2Bto%2BBuild%2Bthe%2BLeading%2BE-Commerce%2BPlatform%2Bfor%2BDevelopers/20329757.html), [Nicolas Dessaigne](https://www.streetinsider.com/Business%2BWire/Medusa%2BRaises%2B%248m%2Bto%2BBuild%2Bthe%2BLeading%2BE-Commerce%2BPlatform%2Bfor%2BDevelopers/20329757.html), [Scott Williamson](https://www.streetinsider.com/Business%2BWire/Medusa%2BRaises%2B%248m%2Bto%2BBuild%2Bthe%2BLeading%2BE-Commerce%2BPlatform%2Bfor%2BDevelopers/20329757.html).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open-source core | free | USD 0/site | — | — | — | unspecified | free self-hosted core. Software license cost is zero; infrastructure, extensions and external services can cost extra. [1](https://github.com/medusajs/medusa) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified on the current public pricing page. [1](https://medusajs.com/pricing) |
| business | Scale | published | USD 299/cloud project base | — | — | — | unspecified | vendor commercial cloud. Closest explicitly teams-oriented commercial Cloud plan. Starting monthly base; usage/add-ons extra. Not a paid self-host license. [1](https://medusajs.com/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | commercial Enterprise license and optional Cloud/BYOC. Tailored pricing; RBAC, SSO and audit logs require Enterprise license. [1](https://medusajs.com/pricing) |

## Defensibility assessments

- Its composable commerce framework can accumulate reusable modules and deep custom workflow integrations, creating specialist switching costs. [1](https://github.com/medusajs/medusa)

## Three product reasons to consider it

1. Composable product, cart, order and payment modules let developers change commerce behavior without rebuilding every primitive. [1](https://github.com/medusajs/medusa)
2. Workflow orchestration with retries supports custom fulfillment processes spanning several systems. [1](https://medusajs.com/blog/eight-sleep)
3. Admin dashboard and multi-region commerce models help operate catalogs and orders across channels and markets. [1](https://www.dawncapital.com/companies/medusa)

## Corporate sponsorship

Status: **business-fallback**. Repository Sponsor affordance and current commercial site checked; no named external corporate sponsor established. Verified commercial Medusa steward supplied as business fallback; investors are not sponsors. [1](https://github.com/medusajs/medusa) [2](https://medusajs.com/pricing)

- [Medusa](https://medusajs.com/): business-steward. [Evidence](https://medusajs.com/pricing).

## Self-operation requirements

Mode: **server**. Current v2 production guide. PostgreSQL/Redis and server-worker topology explicit; no undocumented SQL substitutions asserted. [1](https://docs.medusajs.com/learn/deployment/general) [2](https://docs.medusajs.com/learn/installation)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Node.js v22.22.0+ LTS | required | — | Always | Next.js starter supports Node v24 LTS or lower in current docs. [1](https://docs.medusajs.com/learn/installation) |
| PostgreSQL | required | — | Always | Documented deployment component. [1](https://docs.medusajs.com/learn/deployment/general) |
| Redis | required | — | Always | Sessions plus recommended production caching/event bus/workflow engine/locking modules. [1](https://docs.medusajs.com/learn/deployment/general) |
| Medusa server and worker processes | required | — | Always | Two application instances in documented production topology. [1](https://docs.medusajs.com/learn/deployment/general) |
| S3-compatible file provider | conditional | — | Production uploaded-file storage | S3 or another production-ready file provider; local default intended for development. [1](https://docs.medusajs.com/learn/deployment/general) |
| SendGrid or another notification provider | conditional | — | Transactional notification delivery | External API/provider costs separate. [1](https://docs.medusajs.com/learn/deployment/general) |
| PostHog or other analytics provider | optional | — | Only if application analytics used | Documented deployment component. [1](https://docs.medusajs.com/learn/deployment/general) |
| Next.js storefront | optional | — | Optional starter frontend; another frontend can call Store API | Documented deployment component. [1](https://docs.medusajs.com/learn/installation) |

Resources: CPU not specified; memory 2 GB minimum recommended by deployment guide; storage not specified; OS not specified. Guide says hosting plan should offer at least 2 GB for optimal experience; no fixed CPU/disk or OS published. [1](https://docs.medusajs.com/learn/deployment/general) [2](https://docs.medusajs.com/learn/installation)

## One-click and installer options

Status: **none-found**. Official local scaffold is one command for development, but current production guide is manual. Old Railway doc redirects to Cloud-vs-self-hosting; third-party Railway templates found without current official linking, so not promoted as verified options. [1](https://docs.medusajs.com/learn/deployment/general) [2](https://docs.medusajs.com/learn/installation)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/medusa.json) · [Claim ledger](../../research/profile-claims/medusa.jsonl) · [Research steps](../../research/profile-audits/medusa.md)
