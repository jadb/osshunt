# Passbolt Community Edition

[Product](https://www.passbolt.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Passbolt S.A. (business); ownership: **private**; funding: **funded**.

Started 2016 (company-founded); years active: 10; years in business: 10. Ages are approximate calendar-year differences as of 2026-10-21.

Company release dates incorporation to December 2016; idea/prototype history began earlier (2011/2013). Series A investors listed historically; current ownership percentages undisclosed. [1](https://www.globenewswire.com/news-release/2025/01/23/3014316/0/en/Passbolt-Secures-8-Million-Series-A-to-Secure-Password-Collaboration-Modernize-Access-Management-for-Teams.html) [2](https://www.passbolt.com/about) [3](https://www.passbolt.com/terms)

Known investors: [Airbridge Equity Partners](https://www.globenewswire.com/news-release/2025/01/23/3014316/0/en/Passbolt-Secures-8-Million-Series-A-to-Secure-Password-Collaboration-Modernize-Access-Management-for-Teams.html), [Expon Capital Digital Tech Fund](https://www.globenewswire.com/news-release/2025/01/23/3014316/0/en/Passbolt-Secures-8-Million-Series-A-to-Secure-Password-Collaboration-Modernize-Access-Management-for-Teams.html), [ScaleFund](https://www.globenewswire.com/news-release/2025/01/23/3014316/0/en/Passbolt-Secures-8-Million-Series-A-to-Secure-Password-Collaboration-Modernize-Access-Management-for-Teams.html), [Seeder](https://www.globenewswire.com/news-release/2025/01/23/3014316/0/en/Passbolt-Secures-8-Million-Series-A-to-Secure-Password-Collaboration-Modernize-Access-Management-for-Teams.html), [Dedicated](https://www.globenewswire.com/news-release/2025/01/23/3014316/0/en/Passbolt-Secures-8-Million-Series-A-to-Secure-Password-Collaboration-Modernize-Access-Management-for-Teams.html), [Bondi Capital](https://www.globenewswire.com/news-release/2025/01/23/3014316/0/en/Passbolt-Secures-8-Million-Series-A-to-Secure-Password-Collaboration-Modernize-Access-Management-for-Teams.html), [Carricha Capital](https://www.globenewswire.com/news-release/2025/01/23/3014316/0/en/Passbolt-Secures-8-Million-Series-A-to-Secure-Password-Collaboration-Modernize-Access-Management-for-Teams.html), [LBAN](https://www.globenewswire.com/news-release/2025/01/23/3014316/0/en/Passbolt-Secures-8-Million-Series-A-to-Secure-Password-Collaboration-Modernize-Access-Management-for-Teams.html).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community Edition | free | USD 0/user | USD 0/user | — | — | unspecified | self-hosted Community Edition. Unlimited users; commercial Pro features separate. [1](https://www.passbolt.com/pricing/pro) |
| popular | Pro Edition | published | — | USD 58.8/user | — | — | 10 | paid self-hosted Pro subscription. Explicit Most popular label; $4.90/user/month billed annually multiplied by 12. [1](https://www.passbolt.com/pricing/pro) |
| business | Pro Edition | published | — | USD 58.8/user | — | — | 10 | paid self-hosted Pro subscription. Closest business plan; $4.90/user/month billed annually multiplied by 12. [1](https://www.passbolt.com/pricing/pro) |
| enterprise | Enterprise Edition | quote | — | — | — | — | unspecified | enterprise self-hosted offering. Custom quotation. [1](https://www.passbolt.com/pricing/pro) |

## Defensibility assessments

- Team-oriented cryptographic collaboration and workflow integrations can create organizational adoption costs; no categorical security superiority implied. [1](https://www.passbolt.com/about) [2](https://www.passbolt.com/pricing/pro)

## Three product reasons to consider it

1. Shared folders and user/group management suit collaborative team credential workflows. [1](https://www.passbolt.com/pricing/pro)
2. Open API, CLI and browser extensions allow technical teams to automate secret workflows. [1](https://www.passbolt.com/pricing/pro)
3. Secret-key authentication with additional factors provides a credential-access model oriented to team security. [1](https://www.passbolt.com/pricing/pro)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsor identified in checked official sources; verified business steward included. [1](https://www.passbolt.com/about)

- [Passbolt S.A.](https://www.passbolt.com/about): business-steward. [Evidence](https://www.passbolt.com/about).

## Self-operation requirements

Mode: **server**. Docker default MariaDB; current docs also describe MySQL and PostgreSQL alternatives. Native PHP/GnuPG/webserver dependencies included in container distribution. Composer/Git are source-install tools, not separate production services. PostgreSQL setup guidance warns against reconfiguring an existing database in place. [1](https://www.passbolt.com/docs/hosting/install/ce/docker/) [2](https://www.passbolt.com/docs/hosting/configure/database/configure-database/) [3](https://www.passbolt.com/docs/hosting/configure/database/configure-database/postgres/) [4](https://www.passbolt.com/docs/hosting/install/ce/from-source/) [5](https://www.passbolt.com/docs/hosting/requirements/) [6](https://www.passbolt.com/docs/hosting/environment-reference/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker and Docker Compose | conditional | — | Container installation path | Documented deployment component. [1](https://www.passbolt.com/docs/hosting/install/ce/docker/) |
| MariaDB10.6+ | one-of | database | Default database, automatically configured by packages and supplied as Docker container | Documented deployment component. [1](https://www.passbolt.com/docs/hosting/configure/database/configure-database/) |
| MySQL8.0+ | one-of | database | Documented native/source alternative | Documented deployment component. [1](https://www.passbolt.com/docs/hosting/install/ce/from-source/) |
| PostgreSQL | one-of | database | Fresh installation alternative; follow driver/schema configuration | Documented deployment component. [1](https://www.passbolt.com/docs/hosting/configure/database/configure-database/postgres/) |
| PHP8.2+ with FPM and GnuPG extension | conditional | — | Native/source install; packaged in container | Documented deployment component. [1](https://www.passbolt.com/docs/hosting/install/ce/from-source/) |
| Apache or Nginx with TLS | conditional | — | Native/source install | Documented deployment component. [1](https://www.passbolt.com/docs/hosting/install/ce/from-source/) |
| GnuPG | conditional | — | Native/source install; packaged in container | Documented deployment component. [1](https://www.passbolt.com/docs/hosting/install/ce/from-source/) |
| SMTP server | required | — | Always | Documented deployment component. [1](https://www.passbolt.com/docs/hosting/install/ce/docker/) |
| NTP time synchronization | required | — | Always | Documented deployment component. [1](https://www.passbolt.com/docs/hosting/install/ce/docker/) |
| Redis | optional | — | Non-default cache backend selected | Documented deployment component. [1](https://www.passbolt.com/docs/hosting/environment-reference/) |

Resources: CPU 2 cores recommended minimum VM; memory 2GB recommended minimum VM; storage 20GB recommended minimum VM; OS Stable major Linux distribution. Official requirement page recommends these minimum VM specs and10Mbps/internet access; actual sizing depends on workload. [1](https://www.passbolt.com/docs/hosting/requirements/)

## One-click and installer options

Status: **offered**. Officially documented install options; one-command is separate from browser one-click. [1](https://www.passbolt.com/docs/hosting/install/ce/docker/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [DigitalOcean Marketplace](https://www.passbolt.com/docs/hosting/install/ce/digital-ocean/): **marketplace**, first-party. Official guide directs user to search Passbolt in DigitalOcean Marketplace. [1](https://www.passbolt.com/docs/hosting/install/ce/digital-ocean/)

[Structured profile](../../research/profiles/passbolt.json) · [Claim ledger](../../research/profile-claims/passbolt.jsonl) · [Research steps](../../research/profile-audits/passbolt.md)
