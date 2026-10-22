# Kanboard

[Product](https://kanboard.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Frédéric Guillot / Kanboard contributors (individual); ownership: **individual**; funding: **not-applicable**.

Started 2014 (product-launched); years active: 12; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Individual-led MIT project, with community contributors.2014 is first release, not a company foundation. Donation channels are not equity financing; no corporation or venture investors established. [1](https://kanboard.org/) [2](https://kanboard.org/releases/kanboard/v1.0.0.html) [3](https://kanboard.org/donations.html)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Kanboard | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. Core software license has no subscription charge; infrastructure and optional commercial offerings separate. [1](https://kanboard.org/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified in the public pricing material read; role remains unknown. [1](https://kanboard.org/) |
| business | unknown | not-offered | — | — | — | — | unspecified | vendor commercial cloud. Single free MIT product; no vendor Business software edition identified. [1](https://kanboard.org/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | vendor commercial cloud. Single free MIT product; no vendor Enterprise software edition identified. [1](https://kanboard.org/) |

## Defensibility assessments

- Deliberately small feature scope and MIT extensibility encourage a durable niche, with limited proprietary barriers. [1](https://kanboard.org/)

## Three product reasons to consider it

1. Enforce visible work-in-progress limits by highlighting overloaded columns. [1](https://kanboard.org/)
2. Automate assignee, category and color changes from workflow events. [1](https://kanboard.org/)
3. Filter boards with a compact query language across owners, categories and dates. [1](https://kanboard.org/)

## Corporate sponsorship

Status: **none-found**. Donations page checked: LiberaPay/PayPal channels, no named corporate sponsors. Individual steward is not a business sponsor fallback. [1](https://kanboard.org/)


## Self-operation requirements

Mode: **server**. Scope is the documented default installation. Optional integrations are separate from the core; no infrastructure price implied. [1](https://docs.kanboard.org/v1/admin/requirements/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP >=8.1 and required extensions | required | — | Default documented deployment | PDO backend driver, gd, mbstring, openssl, json, hash, ctype, session, filter, xml/SimpleXML/dom.8.1 required since1.2.46. [1](https://docs.kanboard.org/v1/admin/requirements/) |
| SQLite>=3.7 | one-of | database | Choose one SQL backend | Small teams; do not use with NFS or Docker. [1](https://docs.kanboard.org/v1/admin/requirements/) |
| PostgreSQL>=9.4 | one-of | database | Choose one SQL backend | Recommended database. [1](https://docs.kanboard.org/v1/admin/requirements/) |
| MySQL>=5.6 | one-of | database | Choose one SQL backend | Documented alternative. [1](https://docs.kanboard.org/v1/admin/requirements/) |
| MariaDB>=10 | one-of | database | Choose one SQL backend | Documented alternative. [1](https://docs.kanboard.org/v1/admin/requirements/) |
| Microsoft SQL Server | one-of | database | Choose one SQL backend | Experimental since1.2.25. [1](https://docs.kanboard.org/v1/admin/requirements/) |
| Apache/Nginx/IIS/Caddy | required | — | Default documented deployment | Choose a compatible web server; Apache preconfigured. [1](https://docs.kanboard.org/v1/admin/requirements/) |
| zip/ldap/curl PHP extensions | optional | — | Plugin installation, LDAP integration or HTTP client respectively | Optional extensions explicitly listed. [1](https://docs.kanboard.org/v1/admin/requirements/) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux recommended; FreeBSD and Windows supported. No numeric server hardware minimum in requirements. Browser screen guidance: desktop>=1366×768, tablet>=1024×768. [1](https://docs.kanboard.org/v1/admin/requirements/)

## One-click and installer options

Status: **none-found**. Official installation instructions checked. Manual Docker Compose is not a one-click installation; no additional maintained provider template verified. [1](https://docs.kanboard.org/v1/admin/requirements/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/kanboard.json) · [Claim ledger](../../research/profile-claims/kanboard.jsonl) · [Research steps](../../research/profile-audits/kanboard.md)
