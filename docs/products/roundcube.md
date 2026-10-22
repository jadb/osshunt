# Roundcube

[Product](https://roundcube.net/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Roundcube project, steward Nextcloud GmbH (community); ownership: **community**; funding: **mixed**.

Started 2005 (project-started); years active: 21; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Parent: Nextcloud GmbH (project organization stewardship since 2023).

2005 project start, not steward company founding (Nextcloud 2016). Project organization and strategic/operational responsibilities transferred to Nextcloud in 2023; open-source contributor copyrights are not represented as corporate equity. Funding combines community contributions and commercial steward resources; equity investor list not applicable to project. [1](https://roundcube.net/news/2005/05/31/project-started) [2](https://roundcube.net/news/2023/11/30/nextcloud-the-new-home-for-roundcube) [3](https://nextcloud.com/roundcube/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Roundcube core | free | USD 0/installation | — | — | — | unspecified | free self-hosted webmail core. GPL core download; infrastructure, IMAP/SMTP mailbox service and optional extensions separate. [1](https://roundcube.net/about/) |
| popular | unknown | unknown | — | — | — | — | unspecified | Roundcube editions. No public Most popular or Recommended plan designation found in the source inspected; no popularity inferred. [1](https://nextcloud.com/roundcube/) |
| business | Roundcube Enterprise | quote | — | — | — | — | unspecified | commercial support subscription. Closest organizational commercial offer; get sales quote. Core remains free. [1](https://nextcloud.com/roundcube/) |
| enterprise | Roundcube Enterprise | quote | — | — | — | — | unspecified | commercial support subscription. Nextcloud vendor enterprise subscription; optional Dovecot/Stalwart mail-server and Mailvelope bundles priced separately by quote. [1](https://nextcloud.com/roundcube/) |

## Defensibility assessments

- Broad IMAP adoption, familiar webmail interaction and plugin integrations create an ecosystem moat, though open protocols make substitution possible. [1](https://roundcube.net/)

## Three product reasons to consider it

1. Responsive browser webmail exposes multiple sender identities, threaded messages and drag-and-drop organization. [1](https://roundcube.net/)
2. Address-book groups and LDAP connectors fit organizations with shared directory contacts. [1](https://roundcube.net/)
3. Plugin API and OpenPGP integration allow tailored workflows and encrypted mail handling. [1](https://roundcube.net/)

## Corporate sponsorship

Status: **business-fallback**. Nextcloud assumed project organization and operational responsibilities; commercial backing confirmed on Roundcube Enterprise page. Separate sponsor roster not found on About/support; steward fallback used. [1](https://roundcube.net/news/2023/11/30/nextcloud-the-new-home-for-roundcube)

- [Nextcloud GmbH](https://nextcloud.com/): business-steward. [Evidence](https://roundcube.net/news/2023/11/30/nextcloud-the-new-home-for-roundcube).

## Self-operation requirements

Mode: **server**. Version 1.7.5 stable confirmed on download page; deployment source is current official install documentation plus 1.7.5 composer.json. No Redis/queue/object store required by core path; mail transport separate. [1](https://roundcube.net/about/) [2](https://raw.githubusercontent.com/roundcube/roundcubemail/1.7.5/docs/INSTALL.md) [3](https://raw.githubusercontent.com/roundcube/roundcubemail/1.7.5/composer.json)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Web server | required | — | Always | Apache, Lighttpd, nginx, IIS, Cherokee or Hiawatha supported. [1](https://roundcube.net/about/) |
| PHP 8.1+ and required extensions | required | — | Always | Required PCRE, DOM, JSON, Session, Sockets, OpenSSL, Mbstring, Filter, Ctype, Intl, PDO driver. Version 1.7.5 composer constraint >=8.1 <8.6. [1](https://raw.githubusercontent.com/roundcube/roundcubemail/1.7.5/docs/INSTALL.md) |
| MySQL / MariaDB | one-of | database | Select one SQL database | PDO driver and create-table permission required. [1](https://roundcube.net/about/) |
| PostgreSQL | one-of | database | Select one SQL database | PDO driver required. [1](https://roundcube.net/about/) |
| SQLite | one-of | database | Select one SQL database | Embedded file database; writable database directory. [1](https://roundcube.net/about/) |
| IMAP and SMTP servers | required | — | Mail use | IMAP4rev1 mailbox access and SMTP delivery; can be external existing mail services. [1](https://roundcube.net/about/) |
| Composer / bundled PHP packages | conditional | — | Non-complete source package | Complete release bundles dependencies; source checkout needs dependency install/build tooling. [1](https://raw.githubusercontent.com/roundcube/roundcubemail/1.7.5/docs/INSTALL.md) |
| LDAP / GD / Imagick / XMLWriter | optional | — | LDAP directory, thumbnails or QR-code features | Install only extensions matching optional features. [1](https://raw.githubusercontent.com/roundcube/roundcubemail/1.7.5/docs/INSTALL.md) |

Resources: CPU not specified; memory PHP memory_limit >16 MB; storage not specified; OS Web/PHP supported OS; Linux/Unix common. PHP process memory configuration requirement, not full-server RAM recommendation. No CPU/storage minimum verified; depends on users and mailbox backend. [1](https://raw.githubusercontent.com/roundcube/roundcubemail/1.7.5/docs/INSTALL.md)

## One-click and installer options

Status: **offered**. Official download page explicitly links Softaculous/cPanel auto installers and Cloudron app store; Docker Compose examples are manual, not one-click. Provider availability and versions must be checked on target host. [1](https://roundcube.net/download/)

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Softaculous Roundcube auto installer](https://www.softaculous.com/): **one-click**, officially-linked-third-party. Available through a hosting control panel with Softaculous; official Roundcube download page links it. [1](https://roundcube.net/download/)

[Structured profile](../../research/profiles/roundcube.json) · [Claim ledger](../../research/profile-claims/roundcube.jsonl) · [Research steps](../../research/profile-audits/roundcube.md)
