# mailcow: dockerized

[Product](https://mailcow.email/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

The Infrastructure Company GmbH (Servercow / mailcow) (business); ownership: **private**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Registered German GmbH operates Servercow and mailcow marks. Official project recap identifies Tinc team as company behind mailcow. Company incorporation date, ownership percentages and financing history not published in inspected sources; private legal form does not establish bootstrapping. [1](https://servercow.de/impressum/) [2](https://mailcow.email/posts/2024/recap-2024/) [3](https://servercow.de/ueber-uns/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | mailcow: dockerized | free | USD 0/installation | — | — | — | unspecified | free self-hosted core. Open-source integrated stack; server resources and mail operations separate. [1](https://docs.mailcow.email/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor hosting offerings. No public Most popular or Recommended plan designation found in the source inspected; no popularity inferred. [1](https://servercow.de/en/preisliste/) |
| business | managed mailcow base package (12 months) | published | — | EUR 625.92/dedicated managed server | — | — | unspecified | vendor commercial managed hosting. Price list including 19% German VAT: €52.16/month with 12 months prepaid ×12=€625.92. No monthly-billed option (quarterly/semiannual/annual). Checkout observed different tax presentation, so confirm final local tax; not a software license. [1](https://servercow.de/en/preisliste/) |
| enterprise | Custom managed mailcow | quote | — | — | — | — | unspecified | vendor commercial managed hosting. Closest custom organizational offering: requests above published storage range require quote; no distinct Enterprise software edition inferred. [1](https://servercow.de/en/preisliste/) |

## Defensibility assessments

- An integrated control panel over mature mail components and built-in migration tools provides operational familiarity, though open protocols and components limit proprietary lock-in. [1](https://docs.mailcow.email/)

## Three product reasons to consider it

1. Domain and mailbox controls expose per-user spam scores, quarantine and temporary aliases in one interface. [1](https://docs.mailcow.email/)
2. SOGo groupware combines mail with calendars, contacts and ActiveSync synchronization. [1](https://docs.mailcow.email/)
3. Scheduled imapsync retrieval migrates or consolidates existing mailboxes into the stack. [1](https://docs.mailcow.email/)

## Corporate sponsorship

Status: **identified**. Official README explicitly lists linked businesses under $100/month Sponsors. Business identities verified on primary indexed ColbaNet and Garske pages. Maehdros also appears in roster, but company page failed to load and identity not independently verified here; roster not exhaustive. [1](https://raw.githubusercontent.com/mailcow/mailcow-dockerized/master/README.md) [2](https://www.colba.net/fr/) [3](https://garske-systems.de/)

- [ColbaNet Inc.](https://www.colba.net/fr/): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/mailcow/mailcow-dockerized/master/README.md).
- [Garske Systems](https://garske-systems.de/): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/mailcow/mailcow-dockerized/master/README.md).

## Self-operation requirements

Mode: **server**. Default complete dockerized deployment includes SQL, Redis, web/groupware, SMTP/IMAP, antispam and DNS containers; no mandatory external database/cache. Host Docker requirements distinct from bundled runtimes. ClamAV and FTS explicitly optional. Reviewed current stable-family docs and current Compose, not a source build. [1](https://docs.mailcow.email/) [2](https://docs.mailcow.email/getstarted/prerequisite-system/) [3](https://docs.mailcow.email/getstarted/install/) [4](https://raw.githubusercontent.com/mailcow/mailcow-dockerized/master/docker-compose.yml)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Engine >=24 and Docker Compose >=2 | required | — | Default dockerized install | Host packages git, OpenSSL, curl, awk, coreutils, grep, cut and jq required for installation; PHP/database run inside containers. [1](https://docs.mailcow.email/getstarted/install/) |
| MariaDB 10.11 | required | — | Default stack | Bundled SQL database, not a separate managed service requirement. [1](https://raw.githubusercontent.com/mailcow/mailcow-dockerized/master/docker-compose.yml) |
| Redis 7.4 | required | — | Default stack | Bundled spam, DKIM and application state/cache. [1](https://raw.githubusercontent.com/mailcow/mailcow-dockerized/master/docker-compose.yml) |
| Postfix and Dovecot | required | — | Default mail stack | Bundled SMTP MTA and IMAP/POP MDA; no separate mail hosting service needed. [1](https://docs.mailcow.email/) |
| Rspamd, Unbound and Netfilter | required | — | Default integrated stack | Spam filtering, DNS resolver and firewall abuse protection containers. [1](https://docs.mailcow.email/) |
| nginx, PHP-FPM, SOGo and Memcached | required | — | Default integrated webmail/groupware stack | Bundled web interface, webmail, calendars/contacts and webmail cache. [1](https://docs.mailcow.email/) |
| ClamAV and Flatcurve full-text indexing | optional | — | Can disable with SKIP_CLAMD=y and SKIP_FTS=y | Default-enabled resource consumers, explicitly optional. [1](https://docs.mailcow.email/getstarted/prerequisite-system/) |
| Olefy, ACME certificate automation, watchdog | conditional | — | Default stack features enabled | Office attachment analysis, certificate issuance and container monitoring; bundled, configuration may disable optional scanner/certificate path. [1](https://docs.mailcow.email/) |
| Public DNS and reachable SMTP networking | required | — | Internet email operation | Domain/MX/SPF/DKIM/DMARC configuration and appropriate mail ports; operator controls delivery reputation. [1](https://docs.mailcow.email/getstarted/install/) |

Resources: CPU 1 GHz minimum; x86_64 or ARM64; memory 6 GiB RAM + 1 GiB swap default minimum; 8 GiB recommended for ~5–10 users; storage 20 GiB minimum excluding email data; OS Debian 11–13, Ubuntu 22.04+, AlmaLinux 8/9, Rocky Linux 9; Alpine 3.19+ needs adjustments. Official tested-OS table dated August 2025. OpenVZ, Virtuozzo and LXC unsupported. SOGo/ActiveSync concurrency increases memory; example 50 IMAP connections/15 phones suggests 16 GiB. [1](https://docs.mailcow.email/getstarted/prerequisite-system/)

## One-click and installer options

Status: **none-found**. Official installation requires clone/configuration and Docker Compose startup. Docker installation script installs Docker only, not mailcow. Managed hosting purchase is not a self-host one-click installer. [1](https://docs.mailcow.email/getstarted/install/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/mailcow.json) · [Claim ledger](../../research/profile-claims/mailcow.jsonl) · [Research steps](../../research/profile-audits/mailcow.md)
