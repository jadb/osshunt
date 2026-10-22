# Hoppscotch Community Edition

[Product](https://hoppscotch.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Hoppscotch Limited (business); ownership: **private**; funding: **funded**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Private commercial steward of community project; founder announcement confirms$3m seed and investors. Exact company founding year unresolved: current About story contains placeholder copy, and project/license years are not company formation evidence. No invented company age. [1](https://hoppscotch.com/pricing) [2](https://www.indiehackers.com/post/hoppscotch-raises-3m-in-seed-funding-to-build-open-source-api-development-ecosystem-3ab1ef9278) [3](https://hoppscotch.com/about)

Known investors: [OSS Capital](https://www.indiehackers.com/post/hoppscotch-raises-3m-in-seed-funding-to-build-open-source-api-development-ecosystem-3ab1ef9278), [Automattic](https://www.indiehackers.com/post/hoppscotch-raises-3m-in-seed-funding-to-build-open-source-api-development-ecosystem-3ab1ef9278), [Austen Allred](https://www.indiehackers.com/post/hoppscotch-raises-3m-in-seed-funding-to-build-open-source-api-development-ecosystem-3ab1ef9278), [Paul Sieminski](https://www.indiehackers.com/post/hoppscotch-raises-3m-in-seed-funding-to-build-open-source-api-development-ecosystem-3ab1ef9278), [Clint Smith](https://www.indiehackers.com/post/hoppscotch-raises-3m-in-seed-funding-to-build-open-source-api-development-ecosystem-3ab1ef9278), [Tod Sacerdoti](https://www.indiehackers.com/post/hoppscotch-raises-3m-in-seed-funding-to-build-open-source-api-development-ecosystem-3ab1ef9278).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community Edition | free | USD 0/account | — | — | — | unspecified | free self-hosted core. MIT CE; cloud Free limitations do not imply CE limits. [1](https://docs.hoppscotch.io/documentation/self-host/getting-started) |
| popular | unknown | unknown | — | — | — | — | unspecified | cloud/self-host editions. No explicit Most popular or Recommended plan designation verified in the pricing source; no plan inferred. [1](https://hoppscotch.com/pricing) |
| business | Business | published | — | USD 72/user | — | — | unspecified | vendor commercial cloud. $6/user/month billed annually ×12=$72/year. Explicit cloud scope; not a paid CE license. [1](https://hoppscotch.com/pricing) |
| enterprise | Enterprise self-host | published | USD 19/user | — | — | — | unspecified | paid self-host license. Self-host docs explicitly$19/user/month billed monthly. Cloud Enterprise separately$11/month annually; do not substitute cloud rate. Reconfirm contract if docs/site differ. [1](https://docs.hoppscotch.io/documentation/self-host/getting-started) |

## Defensibility assessments

- A web/desktop/CLI API workflow and shared team collections create usage habits; permissive CE and standard protocols keep technical differentiation contestable. [1](https://github.com/hoppscotch/hoppscotch) [2](https://hoppscotch.com/pricing)

## Three product reasons to consider it

1. Test REST, GraphQL and realtime protocols using one request workspace. [1](https://hoppscotch.com/pricing)
2. Share collections/environments and collaborate in team workspaces with member roles. [1](https://hoppscotch.com/pricing) [2](https://docs.hoppscotch.io/documentation/self-host/getting-started)
3. Run pre-request/test scripts and replay collections for repeatable API checks. [1](https://hoppscotch.com/pricing)

## Corporate sponsorship

Status: **business-fallback**. Corporate sponsorship source checked. No separate corporate sponsor verified; accountable commercial steward included. [1](https://hoppscotch.com/pricing)

- [Hoppscotch Limited](https://hoppscotch.com): business-steward. [Evidence](https://hoppscotch.com/pricing).

## Self-operation requirements

Mode: **server**. PostgreSQL remains external to AIO. No required Redis/cache/queue/object store documented in checked CE path. No complete one-command setup verified; docker run still needs .env/database/migrations. [1](https://docs.hoppscotch.io/documentation/self-host/community-edition/prerequisites) [2](https://docs.hoppscotch.io/documentation/self-host/community-edition/install-and-build)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker20+; Compose v2 recommended | required | — | Always | Images provide application runtime; either AIO or separate frontend/backend/admin containers. [1](https://docs.hoppscotch.io/documentation/self-host/community-edition/prerequisites) |
| PostgreSQL | required | — | Always | Actual state backend; local or hosted provider. Not bundled as embedded storage in AIO. [1](https://docs.hoppscotch.io/documentation/self-host/community-edition/prerequisites) |
| OAuth/email authentication configuration | required | — | Always | Choose Email, GitHub, Google or Microsoft; credentials required only for enabled third-party provider. [1](https://docs.hoppscotch.io/documentation/self-host/community-edition/prerequisites) |
| SMTP | conditional | — | Email login/delivery or team invitations | Docs label email delivery optional; operationally needed for email-based flows. SendGrid/SES/own SMTP supported. [1](https://docs.hoppscotch.io/documentation/self-host/community-edition/prerequisites) |
| TLS/reverse proxy | conditional | — | Production HTTPS or individual-container subpath deployment | AIO provides Caddy; individual services need configured routing for subpaths. [1](https://docs.hoppscotch.io/documentation/self-host/community-edition/install-and-build) |
| Node18+,npm9+,pnpm6+,Git2+ | conditional | — | Building from source | Build tooling, not separate production dependencies when using published Docker images. [1](https://docs.hoppscotch.io/documentation/self-host/community-edition/prerequisites) |

Resources: CPU Runtime as little as1 core; image build4 cores; memory Runtime2GB; image build4GB; storage not specified; OS OS supporting Docker Engine. Docs distinguish build requirements4cores/4GB from generated output hosting1core/2GB; PostgreSQL capacity additional. [1](https://docs.hoppscotch.io/documentation/self-host/community-edition/prerequisites)

## One-click and installer options

Status: **none-found**. Only verified official deployment options included; one-command installers labelled separately from one-click. Manual Docker Compose alone is not counted as one-click. [1](https://docs.hoppscotch.io/documentation/self-host/community-edition/prerequisites)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/hoppscotch.json) · [Claim ledger](../../research/profile-claims/hoppscotch.jsonl) · [Research steps](../../research/profile-audits/hoppscotch.md)
