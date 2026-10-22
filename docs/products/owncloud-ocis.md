# ownCloud Infinite Scale

[Product](https://owncloud.com/ocis/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

ownCloud GmbH (Kiteworks company) (business); ownership: **private**; funding: **funded**.

Started 2011 (company-founded); years active: 15; years in business: 15. Ages are approximate calendar-year differences as of 2026-10-21.

Parent: Kiteworks (privately held).

ownCloud company founded 2011, predecessor community project 2010; these dates do not date Infinite Scale launch. Current 2026 post confirms acquired 2023. General Catalyst is historical ownCloud Inc. seed investor; not asserted current holder of GmbH or Kiteworks. [1](https://owncloud.com/team/) [2](https://owncloud.com/blogs/tomorrow-we-put-it-all-in-writing-see-you-on-the-other-side/) [3](https://owncloud.com/blogs/popular-open-source-sync-and-share-start-up-owncloud-closes-2-5-million-seed-round/)

Known investors: [General Catalyst Partners](https://owncloud.com/blogs/popular-open-source-sync-and-share-start-up-owncloud-closes-2-5-million-seed-round/).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Apache-2.0 source edition | free | USD 0/user | USD 0/user | — | — | unspecified | source-build open edition. Repository Apache2.0. Some stable vendor builds have separate EULA, so their rights/packaging must be evaluated separately. [1](https://github.com/owncloud/ocis) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial product. No explicit most-popular/recommended designation found on the checked page. [1](https://owncloud.com/pricing/) |
| business | Standard | quote | — | — | — | — | 25 | vendor commercial on-premises package. Yearly commitment; public amount absent. Backend/edition and enterprise-module scope must be agreed. [1](https://owncloud.com/pricing/) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | vendor commercial enterprise package. Commercial requirements/pricing via sales; source edition remains distinct. [1](https://owncloud.com/pricing/) |

## Defensibility assessments

- Established file-client ecosystem and federation/Spaces workflows create adoption and migration costs, while Apache source rights allow independent implementations. [1](https://github.com/owncloud/ocis) [2](https://owncloud.com/blogs/open-source-efss-is-not-a-stepping-stone-to-a-sales-call/)

## Three product reasons to consider it

1. Spaces organize shared files independently of a single user’s personal ownership. [1](https://doc.owncloud.com/ocis/9.0/admin/prerequisites/prerequisites.html)
2. WebDAV/CS3 interfaces and desktop/mobile/web clients support a broad file-access workflow. [1](https://github.com/owncloud/ocis)
3. WOPI integration connects collaborative document editors such as Collabora and ONLYOFFICE. [1](https://github.com/owncloud/ocis)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsor identified in checked official sources; verified business steward included. [1](https://owncloud.com/blogs/tomorrow-we-put-it-all-in-writing-see-you-on-the-other-side/)

- [ownCloud GmbH](https://owncloud.com/blogs/tomorrow-we-put-it-all-in-writing-see-you-on-the-other-side/): business-steward. [Evidence](https://owncloud.com/blogs/tomorrow-we-put-it-all-in-writing-see-you-on-the-other-side/).

## Self-operation requirements

Mode: **server**. Self-contained default has no external SQL database/IdP requirement. Current official next links redirect to9.0 docs, whereas public repository release metadata cites8.2.2; version-specific production matrix not fully reconciled. No unsupported universal Redis/queue requirement asserted. [1](https://doc.owncloud.com/ocis/9.0/admin/depl-examples/ubuntu-compose/ubuntu-compose-prod.html)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| oCIS binary or container | required | — | Always | Documented deployment component. [1](https://github.com/owncloud/ocis) |
| Persistent local/POSIX filesystem | required | — | Always | Documented deployment component. [1](https://doc.owncloud.com/ocis/9.0/admin/prerequisites/prerequisites.html) |
| Embedded identity provider | one-of | identity | Self-contained default | Documented deployment component. [1](https://github.com/owncloud/ocis) |
| External OIDC provider such as Keycloak | one-of | identity | Alternative production identity integration | Documented deployment component. [1](https://github.com/owncloud/ocis) |
| Docker Compose and HTTPS reverse proxy | conditional | — | Documented Ubuntu Compose production example | Documented deployment component. [1](https://doc.owncloud.com/ocis/9.0/admin/depl-examples/ubuntu-compose/ubuntu-compose-prod.html) |
| Collabora/ONLYOFFICE/Microsoft Office server | optional | — | Online document editing via WOPI | Documented deployment component. [1](https://github.com/owncloud/ocis) |
| S3-compatible object storage | conditional | — | Object-storage deployment selected | Documented deployment component. [1](https://doc.owncloud.com/ocis/9.0/admin/prerequisites/prerequisites.html) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux recommended; documented binary/container architectures vary. Hardware workload-dependent;9.0 prerequisites discuss512MB test/4GB starting guidance, deliberately not promoted to verified8.2.2 minimum. [1](https://doc.owncloud.com/ocis/9.0/admin/depl-examples/ubuntu-compose/ubuntu-compose-prod.html)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual installation/Compose alone is not a one-click offering. [1](https://doc.owncloud.com/ocis/9.0/admin/depl-examples/ubuntu-compose/ubuntu-compose-prod.html)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/owncloud-ocis.json) · [Claim ledger](../../research/profile-claims/owncloud-ocis.jsonl) · [Research steps](../../research/profile-audits/owncloud-ocis.md)
