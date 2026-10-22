# Appwrite

[Product](https://appwrite.io/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Appwrite (business); ownership: **private**; funding: **funded**.

Started 2019 (project-started); years active: 7; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Private venture-backed steward.2019 is public project launch; company formation followed seed financing. Company timeline dates conflict with dated press release, so $27m Series A dated April2022 from issuer release. Historical investors below; no cap-table percentages. [1](https://appwrite.io/company) [2](https://www.prnewswire.com/news-releases/appwrite-raises-27m-to-support-massive-open-source-adoption-of-backend-as-a-service-platform-for-developers-301517781.html)

Known investors: [Tiger Global Management](https://www.prnewswire.com/news-releases/appwrite-raises-27m-to-support-massive-open-source-adoption-of-backend-as-a-service-platform-for-developers-301517781.html), [Bessemer Venture Partners](https://www.prnewswire.com/news-releases/appwrite-raises-27m-to-support-massive-open-source-adoption-of-backend-as-a-service-platform-for-developers-301517781.html), [Flybridge Capital Partners](https://www.prnewswire.com/news-releases/appwrite-raises-27m-to-support-massive-open-source-adoption-of-backend-as-a-service-platform-for-developers-301517781.html), [Ibex Investors](https://www.prnewswire.com/news-releases/appwrite-raises-27m-to-support-massive-open-source-adoption-of-backend-as-a-service-platform-for-developers-301517781.html), [Seedcamp](https://www.prnewswire.com/news-releases/appwrite-raises-27m-to-support-massive-open-source-adoption-of-backend-as-a-service-platform-for-developers-301517781.html), [Abraham Fund](https://appwrite.io/company).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Self-hosted community core | free | USD 0/account | — | — | — | unspecified | free self-hosted core. Self-hosted source distinct from Cloud Free/Pro and custom enterprise self-hosting; infrastructure separate. [1](https://appwrite.io/docs/advanced/self-hosting) |
| popular | Pro | published | USD 25/organization starting base | — | — | — | unspecified | vendor commercial cloud. Explicit Popular badge. Starting monthly base includes database compute credit; dedicated database compute and overages can add charges. Annual contract price not verified. [1](https://appwrite.io/pricing) |
| business | Pro | published | USD 25/organization starting base | — | — | — | unspecified | vendor commercial cloud. Closest organizational plan, unlimited organization members. No separately named Team/Business subscription; database compute tier named Business is an add-on, not this role. [1](https://appwrite.io/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | vendor enterprise cloud; custom self-hosting separately available. Custom; Contact us. No numeric enterprise subscription verified. [1](https://appwrite.io/pricing) |

## Defensibility assessments

- Shared identity, permissions and event APIs across several backend services create integration-specific switching friction; competing backend platforms offer overlapping capabilities. [1](https://appwrite.io/products/auth) [2](https://appwrite.io/products/realtime) [3](https://appwrite.io/products/functions)

## Three product reasons to consider it

1. Combine passwordless and social authentication with tenant teams, roles and MFA controls. [1](https://appwrite.io/products/auth)
2. Subscribe to permission-filtered events from data, files, functions and presence through one WebSocket client. [1](https://appwrite.io/products/realtime)
3. Run HTTP handlers, scheduled jobs and platform event handlers in multiple language runtimes with Git-triggered builds. [1](https://appwrite.io/products/functions)

## Corporate sponsorship

Status: **business-fallback**. Corporate sponsorship source checked. No separate corporate sponsor verified; accountable commercial steward included. [1](https://appwrite.io/company)

- [Appwrite](https://appwrite.io): business-steward. [Evidence](https://appwrite.io/company).

## Self-operation requirements

Mode: **server**. Database choice is installation-time. Current docs examples name2.5.0 although input release is2.6.1; requirements scoped to current published deployment. No external language runtime installation for containerized functions. [1](https://appwrite.io/docs/advanced/self-hosting/installation) [2](https://appwrite.io/docs/advanced/self-hosting/configuration/databases) [3](https://appwrite.io/docs/advanced/self-hosting/configuration/email) [4](https://appwrite.io/docs/advanced/self-hosting/configuration/storage)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Engine and Compose v2 | required | — | Always | Standard documented installer route. [1](https://appwrite.io/docs/advanced/self-hosting/installation) |
| PostgreSQL | one-of | database | Default for new installs | Appwrite PostgreSQL image documented. [1](https://appwrite.io/docs/advanced/self-hosting/configuration/databases) |
| MariaDB10.11 | one-of | database | Select at installation | Alternative SQL backend. [1](https://appwrite.io/docs/advanced/self-hosting/configuration/databases) |
| MongoDB8.2.5 replica set | one-of | database | Select at installation | Alternative document backend; choice cannot change in-place. [1](https://appwrite.io/docs/advanced/self-hosting/configuration/databases) |
| Redis7.4.7 | required | — | Always | Bundled cache and queue service. [1](https://appwrite.io/docs/advanced/self-hosting/installation) |
| Appwrite API, realtime, workers, schedulers and Traefik | required | — | Always | Combined workers/schedulers default; separate queue containers optional. [1](https://appwrite.io/docs/advanced/self-hosting/installation) |
| ClickHouse | required | — | Always | Bundled usage database in current standard configuration. [1](https://appwrite.io/docs/advanced/self-hosting/installation) |
| OpenRuntimes executor/orchestrator | conditional | — | Functions/Sites execution | Bundled execution containers use Docker socket. [1](https://appwrite.io/docs/advanced/self-hosting/installation) |
| SMTP server | conditional | — | Verification, password recovery or invitation emails | Mail disabled without SMTP configuration. [1](https://appwrite.io/docs/advanced/self-hosting/configuration/email) |
| External object storage | optional | — | Always | Local default; S3, DigitalOceanSpaces, Backblaze, Akamai and Wasabi adapters. [1](https://appwrite.io/docs/advanced/self-hosting/configuration/storage) |
| AutoGravity, browser, EXIF and geo auxiliary containers | conditional | — | Corresponding image previews/metadata/geolocation features | Listed auxiliary services; AutoGravity can be disabled, embeddings use opt-in profile. [1](https://appwrite.io/docs/advanced/self-hosting/installation) |

Resources: CPU 2cores minimum; memory 4GB RAM +2GB swap minimum; storage not specified; OS Any Docker-compatible OS; Kubernetes alternative. Published minimum2cores,4GB RAM and2GB swap; workload storage capacity not specified. [1](https://appwrite.io/docs/advanced/self-hosting/installation)

## One-click and installer options

Status: **offered**. Only verified official deployment options included; one-command installers labelled separately from one-click. Manual Docker Compose alone is not counted as one-click. [1](https://appwrite.io/docs/advanced/self-hosting/installation) [2](https://appwrite.io/docs/advanced/self-hosting)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [DigitalOcean Appwrite marketplace](https://marketplace.digitalocean.com/apps/appwrite): **marketplace**, officially-linked-third-party. Official self-hosting page links provider installation. [1](https://appwrite.io/docs/advanced/self-hosting)
- [Akamai/Linode Appwrite marketplace](https://www.linode.com/docs/marketplace-docs/guides/appwrite/): **marketplace**, officially-linked-third-party. Official self-hosting page links marketplace. [1](https://appwrite.io/docs/advanced/self-hosting)
- [AWS Appwrite marketplace](https://aws.amazon.com/marketplace/pp/prodview-2hiaeo2px4md6): **marketplace**, officially-linked-third-party. Vendor-listed AWS marketplace installation. [1](https://appwrite.io/docs/advanced/self-hosting)
- [Docker installer command](https://appwrite.io/docs/advanced/self-hosting/installation): **one-command**, first-party. One docker run installer command opens setup wizard; not browser one-click. [1](https://appwrite.io/docs/advanced/self-hosting/installation)

[Structured profile](../../research/profiles/appwrite.json) · [Claim ledger](../../research/profile-claims/appwrite.jsonl) · [Research steps](../../research/profile-audits/appwrite.md)
