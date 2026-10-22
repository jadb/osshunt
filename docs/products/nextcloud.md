# Nextcloud Hub

[Product](https://nextcloud.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Nextcloud GmbH (business); ownership: **private**; funding: **bootstrapped**.

Started 2016 (company-founded); years active: 10; years in business: 10. Ages are approximate calendar-year differences as of 2026-10-21.

Company started June 2016; fully employee-funded and organically grown. Current official press statement confirms fully employee-owned; no outside equity investors asserted. Hub suite introduced later in 2020. [1](https://nextcloud.com/about/) [2](https://nextcloud.com/blog/press_releases/nextcloud-invests-in-digital-sovereignty/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community | free | USD 0/installation | — | — | — | unspecified | free self-hosted core. Server download is free; infrastructure and optional vendor enterprise subscription separate. [1](https://nextcloud.com/install/) |
| popular | unknown | unknown | — | — | — | — | unspecified | Nextcloud Enterprise editions. No public Most popular or Recommended plan designation found in the source inspected; no popularity inferred. [1](https://nextcloud.com/pricing/) |
| business | Enterprise Standard | published | — | EUR 71.29/user | — | — | 100 | paid self-hosted enterprise subscription. Starting at100 users, €71.29/user/year; full annual per-user amount. At200-user bracket €53.17/user/year. Quote depends on market/scope; no monthly billing amount published. [1](https://nextcloud.com/pricing/) |
| enterprise | Enterprise Ultimate | published | — | EUR 204.75/user | — | — | 100 | paid self-hosted enterprise subscription. At100-user starting bracket €204.75/user/year; at200 bracket €183.75/user/year. Additional scale/framework agreements quoted; pricing starts100 users. [1](https://nextcloud.com/pricing/) |

## Defensibility assessments

- A large app ecosystem combined with file, groupware and communication workflows creates organization-specific integration switching costs. [1](https://nextcloud.com/about/) [2](https://nextcloud.com/pricing/)

## Three product reasons to consider it

1. File synchronization and sharing connect desktop, mobile and browser workflows with internal and external collaborators. [1](https://nextcloud.com/pricing/)
2. Hub combines calendars, contacts, Mail and Talk so document work can connect to scheduling and communication. [1](https://nextcloud.com/pricing/)
3. Workflow components automate internal processes around shared data and structured Nextcloud Tables. [1](https://nextcloud.com/pricing/)

## Corporate sponsorship

Status: **business-fallback**. Company explicitly employee-funded and developer/steward. Partner list and event sponsorships checked but not treated as proof of direct financial project sponsorship; business-steward fallback. [1](https://nextcloud.com/about/)

- [Nextcloud GmbH](https://nextcloud.com/): business-steward. [Evidence](https://nextcloud.com/about/).

## Self-operation requirements

Mode: **server**. Evidence scoped to server33 manual and current official AIO. Default AIO contains PostgreSQL, Redis/APCu, PHP/web server and push; listed manual database alternatives do not mean AIO supports swapping each bundled component. Object storage, LDAP and AI backends are optional integrations, not mandatory core services. Manual documentation inspected is maintained server33, matching supplied catalog release. Docs navigation labels34 stable and35 latest; attempted stable34 requirements URL failed, so exact34 version requirements not asserted. [1](https://docs.nextcloud.com/server/33/admin_manual/installation/system_requirements.html) [2](https://github.com/nextcloud/all-in-one) [3](https://docs.nextcloud.com/server/33/admin_manual/configuration_server/caching_configuration.html) [4](https://docs.nextcloud.com/server/33/admin_manual/configuration_server/background_jobs_configuration.html) [5](https://docs.nextcloud.com/server/33/admin_manual/configuration_server/email_configuration.html)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP 8.3/8.4/8.5; web server | required | — | Manual server installation | PHP8.4 recommended,8.2 deprecated. Apache2.4 with mod_php or php-fpm recommended; nginx/php-fpm supported. AIO bundles PHP-FPM/web server. [1](https://docs.nextcloud.com/server/33/admin_manual/installation/system_requirements.html) |
| PostgreSQL 14–18 | one-of | database | SQL database selection; default in AIO | Recommended database; AIO provides bundled PostgreSQL. [1](https://docs.nextcloud.com/server/33/admin_manual/installation/system_requirements.html) |
| MariaDB 10.6/10.11/11.4/11.8 or MySQL8.0/8.4 | one-of | database | SQL database selection | MariaDB recommended alternatives for manual deployments. [1](https://docs.nextcloud.com/server/33/admin_manual/installation/system_requirements.html) |
| SQLite3.24+ | one-of | database | Testing/minimal installations | Not recommended production alternative for organizational deployment. [1](https://docs.nextcloud.com/server/33/admin_manual/installation/system_requirements.html) |
| Oracle19c/21c/23ai | conditional | database | Enterprise subscription only | Commercially supported database alternative; not community default. [1](https://docs.nextcloud.com/server/33/admin_manual/installation/system_requirements.html) |
| Redis server >=4 and PHP Redis module | conditional | — | Bundled required component for official AIO; recommended distributed cache/locking for manual organizational deployments | Manual core can run without memcache; Redis recommended for locking and distributed cache. AIO provides it inside deployment. [1](https://docs.nextcloud.com/server/33/admin_manual/configuration_server/caching_configuration.html) [2](https://github.com/nextcloud/all-in-one) |
| APCu PHP extension >=4.0.6 | conditional | — | Bundled AIO local cache; optional recommended manual local cache | Manual core does not require memcache. APCu is local cache, not external cache server. [1](https://docs.nextcloud.com/server/33/admin_manual/configuration_server/caching_configuration.html) [2](https://github.com/nextcloud/all-in-one) |
| Zend OPcache | optional | — | Recommended PHP opcode optimization; bundled/enabled in AIO | Part of PHP core; no external service. Not a universal mandatory core prerequisite. [1](https://docs.nextcloud.com/server/33/admin_manual/configuration_server/caching_configuration.html) [2](https://github.com/nextcloud/all-in-one) |
| Memcached | optional | — | Alternative distributed cache in manual clustered deployment | Not suitable for reliable transactional file locking; Redis recommended there. Not default AIO cache. [1](https://docs.nextcloud.com/server/33/admin_manual/configuration_server/caching_configuration.html) |
| Background job runner | required | — | Housekeeping/background processing | cron.php supported via AJAX/webcron/system cron; system cron recommended for production. Not external message broker requirement. [1](https://docs.nextcloud.com/server/33/admin_manual/configuration_server/background_jobs_configuration.html) |
| SMTP or existing mail server | conditional | — | Password reset/share/activity emails and Mail app transport | Nextcloud is not an SMTP mail server; notifications need local or remote functioning mail server. [1](https://docs.nextcloud.com/server/33/admin_manual/configuration_server/email_configuration.html) |
| Collabora/other document editor engine | conditional | — | Rich collaborative office editing | Optional AIO Office/EuroOffice container; base file server does not require editor. [1](https://github.com/nextcloud/all-in-one) |
| Talk high-performance backend/TURN | conditional | — | Optional enhanced Talk calls | AIO includes optional call backend/TURN; not mandatory file storage dependency. [1](https://github.com/nextcloud/all-in-one) |
| ClamAV, Elasticsearch, Imaginary, BorgBackup | optional | — | Antivirus/fulltext/previews/backup enabled | AIO optional service containers, not universal core dependencies. [1](https://github.com/nextcloud/all-in-one) |
| Docker | conditional | — | AIO path only | Official automated container bundle; not required for manual PHP deployment. [1](https://github.com/nextcloud/all-in-one) |

Resources: CPU not specified; memory 128 MB per PHP process minimum; 512 MB per process recommended; storage not specified; OS 64-bit Linux; Ubuntu24.04, RHEL10, Debian13 and other listed distributions. Per-process PHP memory, not total-server RAM. CPU/storage depend on users/apps/data; no fixed minima verified. AIO container footprint and optional Office/Talk services require additional sizing. [1](https://docs.nextcloud.com/server/33/admin_manual/installation/system_requirements.html)

## One-click and installer options

Status: **offered**. Official install page links community-maintained Snap package. Command-line installation is distinguished from true one-click cloud deployment. AIO is automated container setup with operator configuration. [1](https://nextcloud.com/install/) [2](https://snapcraft.io/nextcloud)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Nextcloud Snap](https://snapcraft.io/nextcloud): **one-command**, officially-linked-third-party. Officially linked community Snap; sudo snap install nextcloud after snapd setup, then instance configuration. [1](https://nextcloud.com/install/)

[Structured profile](../../research/profiles/nextcloud.json) · [Claim ledger](../../research/profile-claims/nextcloud.jsonl) · [Research steps](../../research/profile-audits/nextcloud.md)
