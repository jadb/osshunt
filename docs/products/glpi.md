# GLPI

[Product](https://www.glpi-project.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Teclib' (business); ownership: **private**; funding: **unknown**.

Started 2009 (company-founded); years active: 17; years in business: 17. Ages are approximate calendar-year differences as of 2026-10-21.

Official history: GLPI created in 2003 by INDEPNET; Teclib founded in 2009 and became official editor in 2015. Age uses Teclib company formation, not project origin. Subscription revenue supports project development. Outside equity financing and current investors unresolved; no bootstrapped assertion. [1](https://www.glpi-project.org/en/about-us/) [2](https://www.glpi-project.org/es/glpi-20-years/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | GLPI community core | free | USD 0/organization | — | — | — | unspecified | free self-hosted core. GPL community core; exclusive Network plugins and commercial services separate. [1](https://www.glpi-project.org/en/features/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No unique vendor popular designation verified. [1](https://www.glpi-project.org/en/pricing/) |
| business | GLPI Network Standard | published | EUR 300/organization | — | — | — | unspecified | commercial self-hosted subscription. Closest organizational self-host subscription: Standard€300/month excluding VAT, up to 50 technical staff or 5000 assets, and 2 production instances. Annual total not verified; Basic separately€100/month. [1](https://www.glpi-project.org/en/pricing/) |
| enterprise | GLPI Network Enterprise | published | EUR 4500/organization | — | — | — | unspecified | commercial self-hosted subscription. Self-host Enterprise€4500/month excluding VAT, unlimited inventoried assets and all exclusive Network plugins. Annual billing terms and total unverified. [1](https://www.glpi-project.org/en/pricing/) |

## Defensibility assessments

- Inventory, service management and plugin integrations accumulate organizational process history that can make migration costly. [1](https://www.glpi-project.org/en/features/) [2](https://www.glpi-project.org/en/about-us/)

## Three product reasons to consider it

1. Asset inventory and CMDB relationships connect equipment records with service operations. [1](https://www.glpi-project.org/en/features/)
2. Tickets, problems, changes and knowledge workflows let teams investigate incidents alongside assets. [1](https://www.glpi-project.org/en/features/)
3. Contract, budget and financial tracking connect technical inventory to asset lifecycle decisions. [1](https://www.glpi-project.org/en/features/)

## Corporate sponsorship

Status: **business-fallback**. Reviewed project/company sources; no separate corporate sponsor verified. Verified business steward supplied as fallback. [1](https://www.glpi-project.org/en/about-us/)

- [Teclib'](https://www.glpi-project.org/en/about-us/): business-steward. [Evidence](https://www.glpi-project.org/en/about-us/).

## Self-operation requirements

Mode: **server**. Pinned GLPI 12.0.0 composer requires 64-bit PHP 8.3+. Official install guide verifies My SQL/Maria DB families but its version matrix stops at 11; exact 12 database minimum remains unresolved. Native PHP or official container route; Docker or Podman, with bundled cron worker. No mandatory independent Redis/queue identified. [1](https://glpi-install.readthedocs.io/en/latest/prerequisites.html)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP 8.3+64-bit with required extensions | required | — | Always | Pinned 12.0.0 composer verified; older 10/11 matrix not used for 12 PHPminimum. [1](https://raw.githubusercontent.com/glpi-project/glpi/12.0.0/composer.json) |
| My SQL | one-of | database | Supported SQLfamily | Currentmatrix lists My SQL 8 for GLPI 11; exact 12 minimum unresolved, confirm release preflight. [1](https://glpi-install.readthedocs.io/en/latest/prerequisites.html) |
| Maria DB | one-of | database | Alternative SQLfamily | Currentmatrix lists Maria DB 10.6 for GLPI 11; exact 12 minimum unresolved. [1](https://glpi-install.readthedocs.io/en/latest/prerequisites.html) |
| Apache, nginx, lighttpd or IIS | one-of | runtime | Native PHP route | Nginx uses PHP-FPM; webroot must point to public directory. [1](https://glpi-install.readthedocs.io/en/latest/prerequisites.html) |
| Official GLPI Docker or Podman image | one-of | runtime | Container route | Bundled application runtime; database and persistent volumes still configured. [1](https://github.com/glpi-project/docker-images) |
| LDAP, SMTP or IMAP | conditional | — | Directorylogin, emailnotifications or mailcollectors | LDAP/IMAPextensions optional when integrations enabled. [1](https://glpi-install.readthedocs.io/en/latest/prerequisites.html) |
| Cron/automatic-actions worker | conditional | — | Scheduled background processing | Official image includes a minute scheduler by default; can disable on webnodes when dedicating a worker. [1](https://github.com/glpi-project/docker-images) |

Resources: CPU not specified; memory not specified; storage not specified; OS PHP-capable Linuxor Windowswebserver; container-capablehost. No universal CPU/RAM/disk minimum verified; inventory, plugins, attachments and background work determine sizing. [1](https://glpi-install.readthedocs.io/en/latest/prerequisites.html)

## One-click and installer options

Status: **none-found**. Reviewed official install docs and Docker repository. Manual image/Compose configuration and automatic database initialization are not a verified one-click provider template; none found. [1](https://glpi-install.readthedocs.io/en/latest/prerequisites.html)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/glpi.json) · [Claim ledger](../../research/profile-claims/glpi.jsonl) · [Research steps](../../research/profile-audits/glpi.md)
