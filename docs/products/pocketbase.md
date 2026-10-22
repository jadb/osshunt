# PocketBase

[Product](https://pocketbase.io/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Gani Georgiev / PocketBase (individual); ownership: **individual**; funding: **not-applicable**.

Started 2021 (project-started); years active: 5; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Individual volunteer project, explicitly neither startup nor business. Creator says work began late2021; public release followed July2022. Equity financing not applicable; past donations and possible grants are distinct. No paid company or investor roster. [1](https://pocketbase.io/faq/) [2](https://gani.bg/) [3](https://github.com/presentator/presentator/issues/183)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | PocketBase open source | free | USD 0/account | — | — | — | unspecified | free self-hosted core. Standalone open-source binary/framework; infrastructure separate; no vendor hosting. [1](https://pocketbase.io/docs/) |
| popular | unknown | unknown | — | — | — | — | unspecified | self-hosted project. No explicit Most popular or Recommended plan designation verified in the pricing source; no plan inferred. [1](https://pocketbase.io/faq/) |
| business | unknown | not-offered | — | — | — | — | unspecified | self-hosted project. Personal volunteer project explicitly has no paid team/company; no organizational license plan published. [1](https://pocketbase.io/faq/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | self-hosted project. No paid enterprise plan; FAQ states no paid company and no support commitment. [1](https://pocketbase.io/faq/) |

## Defensibility assessments

- A compact SQLite-backed architecture and extensible API attract lightweight applications; defensibility is limited by permissive source access and a deliberately narrow single-server scope. [1](https://pocketbase.io/docs/) [2](https://pocketbase.io/faq/)

## Three product reasons to consider it

1. Manage SQLite collections, validation, REST endpoints and realtime subscriptions from an integrated schema dashboard. [1](https://pocketbase.io/) [2](https://pocketbase.io/docs/)
2. Add password/OAuth user authentication and attach files with on-demand image thumbnails to records. [1](https://pocketbase.io/)
3. Extend routes and event hooks in embedded JavaScript or compile custom Go application logic. [1](https://pocketbase.io/docs/js-overview/) [2](https://pocketbase.io/docs/go-overview/)

## Corporate sponsorship

Status: **none-found**. Checked official FAQ donation/sponsorship statement: individual donations no longer accepted; organizational no-strings grants invited. No named corporate sponsor disclosed there; personal steward is not a business fallback. [1](https://pocketbase.io/faq/)


## Self-operation requirements

Mode: **server**. Single-server backend; no external SQL,Redis,queue or separate runtime service required. Documentation warns pre1.0 compatibility/migrations can change. [1](https://pocketbase.io/docs/going-to-production/) [2](https://pocketbase.io/docs/) [3](https://pocketbase.io/faq/) [4](https://pocketbase.io/docs/js-overview/) [5](https://pocketbase.io/docs/go-overview/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PocketBase prebuilt executable | required | — | Always | Native standalone binary; persistent pb_data directory. [1](https://pocketbase.io/docs/) |
| SQLite in WAL mode | required | — | Always | Embedded; MySQL/MariaDB/PostgreSQL not supported out of box. [1](https://pocketbase.io/faq/) |
| SMTP server | conditional | — | Production email auth/notifications | Highly recommended; Unix sendmail default unsuitable for reliable delivery. [1](https://pocketbase.io/docs/going-to-production/) |
| S3-compatible object storage | optional | — | Always | Files/backups local default; backups can use separate S3 bucket. [1](https://pocketbase.io/docs/going-to-production/) |
| Reverse proxy and systemd | optional | — | Always | Built-in HTTPS available; custom Docker image possible, no official image. [1](https://pocketbase.io/docs/going-to-production/) |
| Embedded goja JavaScript engine | conditional | — | Custom JavaScript hooks | Built into binary; Node.js not required. [1](https://pocketbase.io/docs/js-overview/) |
| Go1.23+ toolchain | conditional | — | Build custom application as Go framework | Build time only; default pure-Go SQLite needs no CGO. [1](https://pocketbase.io/docs/go-overview/) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux,Windows,macOS; x64/ARM64 binaries. No minimum hardware published. FAQ2vCPU/4GB example is a benchmark, not minimum; storage scales with data. [1](https://pocketbase.io/docs/) [2](https://pocketbase.io/docs/going-to-production/) [3](https://pocketbase.io/faq/)

## One-click and installer options

Status: **none-found**. Official docs offer binary download and manual server/Dockerfile recipes; no maintained one-click, marketplace or installer command verified. Running an already downloaded binary is not an installer. [1](https://pocketbase.io/docs/going-to-production/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/pocketbase.json) · [Claim ledger](../../research/profile-claims/pocketbase.jsonl) · [Research steps](../../research/profile-audits/pocketbase.md)
