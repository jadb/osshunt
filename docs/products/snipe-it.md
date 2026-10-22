# Snipe-IT

[Product](https://snipeitapp.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Grokability, Inc. (business); ownership: **private**; funding: **unknown**.

Started 2013 (project-started); years active: 13; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Grokability, Inc. makes Snipe-IT. Official About says Alison Gianotto created the project in 2013; exact company incorporation year is unverified. Reviewed company and project sources do not resolve outside equity funding or investors; funding remains unknown. [1](https://snipeitapp.com/company) [2](https://snipeitapp.com/faq)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Self-hosted | free | USD 0/organization | — | — | — | unspecified | free self-hosted core. Free software; own infrastructure. Hosted subscriptions and professional support are separate. [1](https://snipeitapp.com/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No unique vendor popular designation found. [1](https://snipeitapp.com/pricing) |
| business | Small Business Hosting | published | USD 99.99/organization | USD 999.99/organization | — | — | unspecified | vendor commercial cloud. Managed Small Business Hosting: unlimited assets/users. Monthly$99.99 or total annual$999.99 explicitly published; hosting differences are services, not a separate software edition. [1](https://snipeitapp.com/pricing) |
| enterprise | Enterprise Support | published | — | USD 4999.99/organization | — | — | unspecified | support subscription for self-hosted software. Enterprise Support FAQ explicitly gives$4, 999.99 USD per year. Self-hosted support service, not proprietary software features or hosting. [1](https://snipeitapp.com/support) |

## Defensibility assessments

- Accumulated custody records and integration workflows create practical migration costs; the open distribution limits proprietary feature lock-in. [1](https://snipeitapp.com/product)

## Three product reasons to consider it

1. Checkout acceptance, digital signatures and assignment history establish custody of physical equipment. [1](https://snipeitapp.com/product)
2. Barcode/QR scanning, custom fields and asset auditing support inventory reconciliation. [1](https://snipeitapp.com/product)
3. License expiry alerts, accessory/consumable records and REST integrations extend asset tracking beyond laptop lists. [1](https://snipeitapp.com/product)

## Corporate sponsorship

Status: **business-fallback**. Reviewed project/company sources; no separate corporate sponsor verified. Verified business steward supplied as fallback. [1](https://snipeitapp.com/company)

- [Grokability, Inc.](https://snipeitapp.com/company): business-steward. [Evidence](https://snipeitapp.com/company).

## Self-operation requirements

Mode: **server**. Native PHP/webserver/Composer or official snipe/snipe-it Docker route. SQL restricted to My SQL/Maria DB. Default file sessions/cache and synchronous queue need no separate Redis/queue service. Retain database, uploads and APP_KEY for recovery. [1](https://snipe-it.readme.io/docs/requirements)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP>=8.2<8.6 and required extensions | required | — | Always | JSON, Open SSL, PDO, Mbstring, Tokenizer, c URL, My SQLi, ZIP, Fileinfo, BCMath, XML, Sodium and Exif documented. [1](https://snipe-it.readme.io/docs/requirements) |
| My SQL 5.7+ | one-of | database | Supported database route | Use supported My SQL/Maria DB backend. [1](https://snipe-it.readme.io/docs/requirements) |
| Maria DB | one-of | database | Alternative database route | Current config supports only My SQL/Maria DB, not every Laravel SQLdriver. [1](https://snipe-it.readme.io/docs/requirements) |
| GD>=2.0 | one-of | image-library | Barcode and image handling | GD image-library route. [1](https://snipe-it.readme.io/docs/requirements) |
| Imagick>=6.3.8 | one-of | image-library | Alternative barcode and image handling | Imagick image-library route. [1](https://snipe-it.readme.io/docs/requirements) |
| Webserver and Composer dependencies | required | — | Native production install | Official Dockerimage bundles application runtime/webserver dependencies. [1](https://snipe-it.readme.io/docs/installation) |
| SMTP, PHPmail or sendmail | conditional | — | Email alerts, password resets and acceptance workflows | Log mail driver possible without delivery; email-dependent workflows then unavailable. [1](https://snipe-it.readme.io/docs/configuration) |
| LDAPextension and directory | conditional | — | LDAPintegration only | Optional integration dependencies. [1](https://snipe-it.readme.io/docs/requirements) |
| Redis, Memcached, APC or database sessions/cache | optional | — | Alternative cache/session route | File defaults and syncqueue do not require external Redis or worker. [1](https://snipe-it.readme.io/docs/configuration) |
| S 3-compatible object storage | optional | — | External upload storage instead of local disk | Public/private S 3 settings optional; AWSSES is also an optional alternative to SMTP. [1](https://snipe-it.readme.io/docs/configuration) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux, Windows or mac OS webserver; Docker-capable host. No universal production CPU/RAM/disk minimum verified; inventory and attachment volume drive sizing. [1](https://snipe-it.readme.io/docs/requirements)

## One-click and installer options

Status: **offered**. Official Downloading guide documents install.sh automation. Download/chmod preparation required, then installer command automates a fresh Linux system. This is one-command installation, not true one-click. Unverified Digital Ocean route excluded. [1](https://snipe-it.readme.io/docs/requirements)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Linux install.sh installer](https://snipe-it.readme.io/docs/downloading): **one-command**, first-party. Download and chmod script, then run ./install.sh on a fresh Cent OS/RHEL or Debian/Ubuntu system with no other sites. Preparation required; not a provider deployment button. [1](https://snipe-it.readme.io/docs/downloading)

[Structured profile](../../research/profiles/snipe-it.json) · [Claim ledger](../../research/profile-claims/snipe-it.jsonl) · [Research steps](../../research/profile-audits/snipe-it.md)
