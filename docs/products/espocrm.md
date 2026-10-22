# EspoCRM

[Product](https://www.espocrm.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

EspoCRM team/company (business); ownership: **private**; funding: **unknown**.

Started 2011 (company-founded); years active: 15; years in business: 15. Ages are approximate calendar-year differences as of 2026-10-21.

About distinguishes team formed2008, company active since2011, EspoCRM released2014. Current exact legal entity and equity funding unresolved; secondary no-funding claims excluded. [1](https://www.espocrm.com/about-us/) [2](https://www.espocrm.com/cloud/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | EspoCRM core | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. Free AGPL self-hosted core; commercial extensions separate. [1](https://www.espocrm.com/download/) |
| popular | unknown | unknown | — | — | — | — | unspecified | product plans. No explicitly highlighted Most popular or Recommended plan found in the public pricing page. [1](https://www.espocrm.com/cloud/) |
| business | Basic | published | USD 15/user | — | — | — | 3 | vendor commercial cloud. Closest base organizational cloud plan; minimum3users; includes extensions that self-host core lacks. [1](https://www.espocrm.com/cloud/) |
| enterprise | Enterprise | published | USD 25/user | — | — | — | 5 | vendor commercial cloud. Named cloud Enterprise; minimum5users; extension-inclusive commercial scope. [1](https://www.espocrm.com/cloud/) |

## Defensibility assessments

- Extensible metadata, custom record layouts and established CRM data relationships create configuration switching costs. [1](https://www.espocrm.com/download/)

## Three product reasons to consider it

1. No-code fields and layouts adapt CRM records to specialized business processes. [1](https://www.espocrm.com/download/)
2. Built-in cases and customer portal connect customer requests with CRM relationships. [1](https://www.espocrm.com/download/)
3. Kanban opportunity pipelines and activity streams combine deal progress with team collaboration. [1](https://www.espocrm.com/cloud/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsorship established in the checked project/business pages; commercial steward included as business fallback. [1](https://www.espocrm.com/about-us/)

- [EspoCRM](https://www.espocrm.com/about-us/): business-steward. [Evidence](https://www.espocrm.com/about-us/).

## Self-operation requirements

Mode: **server**. Native PHP+SQL path or Docker-based installer. Redis/external queue not required by default docs. Script supplies Nginx/MariaDB; PHP memory_limit256M is per-process configuration, not server-RAM minimum. [1](https://docs.espocrm.com/administration/server-configuration/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP8.3–8.5 plus documented extensions | required | — | Always; native or included Docker runtime. | Documented production component. [1](https://docs.espocrm.com/administration/server-configuration/) |
| MySQL8+ | one-of | database | Select SQL backend. | Documented production component. [1](https://docs.espocrm.com/administration/server-configuration/) |
| MariaDB10.6+ | one-of | database | Select SQL backend; script uses MariaDB. | Documented production component. [1](https://docs.espocrm.com/administration/server-configuration/) |
| PostgreSQL15 | one-of | database | Select SQL backend. | Documented production component. [1](https://docs.espocrm.com/administration/server-configuration/) |
| Apache / Nginx / IIS | required | — | One supported webserver; script uses Nginx. | Documented production component. [1](https://docs.espocrm.com/administration/server-configuration/) |
| Cron / scheduled background jobs | required | — | Scheduled tasks; native crontab or Docker daemon. | Documented production component. [1](https://docs.espocrm.com/administration/server-configuration/) |
| ZeroMQ/ev WebSocket extensions | optional | — | Realtime WebSocket service when configured. | Documented production component. [1](https://docs.espocrm.com/administration/server-configuration/) |
| SMTP/IMAP provider | conditional | — | Only email delivery and synchronization workflows. | Documented production component. [1](https://www.espocrm.com/cloud/) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. No numerical hardware minima verified in the cited deployment documentation. [1](https://docs.espocrm.com/administration/server-configuration/)

## One-click and installer options

Status: **offered**. Official script automates Docker/Nginx/MariaDB provisioning with domain/TLS options; terminal access and sudo required. [1](https://docs.espocrm.com/administration/installation-by-script/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Official Docker installation script](https://docs.espocrm.com/administration/installation-by-script/): **one-command**, first-party. Download install.sh then run sudo bash; automated command-line sequence, not true one-click. [1](https://docs.espocrm.com/administration/installation-by-script/)

[Structured profile](../../research/profiles/espocrm.json) · [Claim ledger](../../research/profile-claims/espocrm.jsonl) · [Research steps](../../research/profile-audits/espocrm.md)
