# ZITADEL

[Product](https://zitadel.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

ZITADEL Inc. (business); ownership: **private**; funding: **funded**.

Started 2019 (company-founded); years active: 7; years in business: 7. Ages are approximate calendar-year differences as of 2026-10-21.

Official careers source names ZITADEL Inc. founded 2019. Private company; 2024 annual review confirms $9M Series A with Nexus and Floodgate; ownership percentages not public in checked sources. [1](https://jobs.zitadel.com/data_request) [2](https://zitadel.com/blog/end-of-year-product-wrap-up) [3](https://zitadel.com/about)

Known investors: [Nexus Venture Partners](https://zitadel.com/blog/end-of-year-product-wrap-up), [Floodgate](https://zitadel.com/blog/end-of-year-product-wrap-up).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open-source self-hosted core | free | USD 0/user | USD 0/user | — | — | unspecified | open-source core. Code/infrastructure distinct; cloud Free has 100 DAU and separate quotas. [1](https://zitadel.com/docs/self-hosting/deploy/overview) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial product. No explicit most-popular/recommended designation found on the checked page. [1](https://zitadel.com/pricing) |
| business | Pro | published | USD 100/cloud instance; included usage quota | — | — | — | unspecified | vendor commercial cloud. Published US$100/month cloud base; page says 25,000 daily-active users per month included. Exact usage accounting/overages require detailed quote/docs; no annual total inferred. [1](https://zitadel.com/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | self-hosted commercial license or enterprise cloud. Custom commercial terms; no public annual amount. [1](https://zitadel.com/pricing) |

## Defensibility assessments

- Tenant-aware identity model and accumulated application/workflow integrations can raise switching costs, while open protocols preserve migration choices. [1](https://zitadel.com/pricing) [2](https://zitadel.com/blog/introducting-v2-0)

## Three product reasons to consider it

1. Multi-organization identity management models separate customer tenants within one identity platform. [1](https://zitadel.com/pricing)
2. Custom workflows and identity-provider federation adapt authentication to application-specific account journeys. [1](https://zitadel.com/pricing)
3. User management, multifactor/social login and APIs combine application identity lifecycle and authentication. [1](https://zitadel.com/blog/introducting-v2-0)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsor identified in checked official sources; verified business steward included. [1](https://jobs.zitadel.com/data_request)

- [ZITADEL Inc.](https://jobs.zitadel.com/data_request): business-steward. [Evidence](https://jobs.zitadel.com/data_request).

## Self-operation requirements

Mode: **server**. Current docs require PostgreSQL; no historical CockroachDB dependency inferred. Container stable tag is production release. Kubernetes/Helm instructions are manual deployment, not browser one-click. [1](https://zitadel.com/docs/self-hosting/deploy/overview)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| ZITADEL binary/container | required | — | Always | Documented deployment component. [1](https://zitadel.com/docs/self-hosting/deploy/overview) |
| PostgreSQL | required | — | Always | Documented deployment component. [1](https://zitadel.com/docs/self-hosting/deploy/overview) |
| SMTP | conditional | — | Production email notifications | Documented deployment component. [1](https://zitadel.com/docs/guides/manage/customize/notification-providers) |
| Twilio or custom HTTP SMS provider | conditional | — | SMS verification selected | Documented deployment component. [1](https://zitadel.com/docs/guides/manage/customize/notification-providers) |
| Kubernetes | optional | — | Recommended orchestration for high availability | Documented deployment component. [1](https://zitadel.com/docs/self-hosting/deploy/overview) |

Resources: CPU 1 CPU sufficient for tests only; memory 512MB sufficient for tests only; storage not specified; OS not specified. Documented figures are test-environment guidance, not production minimum. [1](https://zitadel.com/docs/self-hosting/deploy/overview)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual installation/Compose alone is not a one-click offering. [1](https://zitadel.com/docs/self-hosting/deploy/overview)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/zitadel.json) · [Claim ledger](../../research/profile-claims/zitadel.jsonl) · [Research steps](../../research/profile-audits/zitadel.md)
