# Mixpost Lite

[Product](https://mixpost.app) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Inovector (Mixpost) (business); ownership: **private**; funding: **unknown**.

Started 2023 (product-launched); years active: 3; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Mixpost launch context from founder2023 post; not company incorporation year. Inovector commercial product stewardship verified. Funding/cap table unresolved after official/founder searches; one-person or independent launch does not establish bootstrapping. [1](https://inovector.com/) [2](https://mixpost.app/pricing) [3](https://www.linkedin.com/posts/dimabotezatu_pricing-mixpost-activity-7025779735112691712-AmCo)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Lite | free | USD 0/instance | — | — | — | unspecified | free self-hosted Lite. Free MIT self-hosted edition; only Facebook Pages,X,Mastodon; full commercial features separate. [1](https://mixpost.app/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | product plans. No explicitly highlighted Most popular or Recommended plan found in the public pricing page. [1](https://mixpost.app/pricing) |
| business | Pro | published | — | — | USD 299/licensed domain or subdomain | — | unspecified | paid self-host license. Closest teams/agencies edition; one-time$299 for1domain/subdomain,1year updates, perpetual fallback. Proprietary source-available; not OSS Lite. [1](https://mixpost.app/pricing) |
| enterprise | Enterprise | published | — | — | USD 1199/licensed domain or subdomain | — | unspecified | paid self-host license. One-time$1199 for1domain/subdomain; adds SaaS billing/customer management;1year updates, perpetual fallback; excludes VAT. [1](https://mixpost.app/pricing) |

## Defensibility assessments

- Laravel extension model and source availability permit tailored social workflows; dependency on platform APIs and common scheduler features limits exclusivity. [1](https://mixpost.app/pricing)

## Three product reasons to consider it

1. Calendar and per-account post versions coordinate publishing to Facebook Pages,X and Mastodon in Lite. [1](https://mixpost.app/pricing)
2. Media library organizes reusable creative assets alongside scheduled posts. [1](https://mixpost.app/pricing)
3. Post labels structure a social content backlog for recurring themes and campaigns. [1](https://mixpost.app/pricing)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsorship established in the checked project/business pages; commercial steward included as business fallback. [1](https://inovector.com/)

- [Inovector](https://inovector.com/): business-steward. [Evidence](https://inovector.com/).

## Self-operation requirements

Mode: **server**. Current Lite production stack; PHP512M is process memory_limit, not server RAM minimum. Composer/Curl/Zip are installation/update tooling, not persistent services. Pro-only features not credited as Lite reasons. [1](https://docs.mixpost.app/lite/installation/docker)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP8.3+ with documented extensions | required | — | Native application runtime; supplied by Docker image. | Documented production component. [1](https://docs.mixpost.app/server) |
| MySQL | one-of | database | Choose SQL backend; Docker recipe usesMySQL8. | Documented production component. [1](https://docs.mixpost.app/server) |
| MariaDB | one-of | database | Alternative SQL backend. | Documented production component. [1](https://docs.mixpost.app/server) |
| Redis6.2+ | required | — | Queue backing for publishing even single-user. | Documented production component. [1](https://docs.mixpost.app/server) |
| Laravel Horizon and Supervisor | required | — | Continuous publishing queue worker; supplied in Docker. | Documented production component. [1](https://docs.mixpost.app/server) |
| Cron | required | — | Every-minute scheduled publishing. | Documented production component. [1](https://docs.mixpost.app/server) |
| Nginx / Apache with URL rewriting | required | — | One webserver; native install or image. | Documented production component. [1](https://docs.mixpost.app/server) |
| Social platform developer apps/OAuth | required | — | Credentials/approvals for each enabled Lite network. | Documented production component. [1](https://docs.mixpost.app/lite/) |
| FFmpeg | optional | — | Video thumbnails; videos otherwise publish. | Documented production component. [1](https://docs.mixpost.app/server) |
| libvips/libheif/libde265 with PHP FFI | conditional | — | HEIC/HEIF image uploads only. | Documented production component. [1](https://docs.mixpost.app/server) |
| S3-compatible storage | optional | — | Alternative to local media volume. | Documented production component. [1](https://docs.mixpost.app/lite/installation/manual) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. No numerical hardware minima verified in the cited deployment documentation. [1](https://docs.mixpost.app/lite/installation/docker)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual Docker Compose or source installation does not qualify as one-click. [1](https://docs.mixpost.app/lite/installation/docker)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/mixpost.json) · [Claim ledger](../../research/profile-claims/mixpost.jsonl) · [Research steps](../../research/profile-audits/mixpost.md)
