# Grist Community

[Product](https://www.getgrist.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Grist Labs (business); ownership: **private**; funding: **mixed**.

Started 2014 (company-founded); years active: 12; years in business: 12. Ages are approximate calendar-year differences as of 2026-10-21.

Founded2014 per About. About still says self-funded ever since, but newer24April2026official release confirms seed round with Perry Tam as lead angel; mixed records earlier self-funding plus later external equity. Other angels not named. Public-sector code contributors not classified as corporate sponsors. [1](https://www.getgrist.com/about/) [2](https://www.getgrist.com/blog/a-new-chapter-for-grist-labs-scaling-for-the-era-of-sovereignty/)

Known investors: [Perry Tam](https://www.getgrist.com/blog/a-new-chapter-for-grist-labs-scaling-for-the-era-of-sovereignty/).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Grist Community edition | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. No software subscription fee for core edition; optional commercial editions and infrastructure separate. [1](https://www.getgrist.com/pricing/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified in the public pricing material read; role remains unknown. [1](https://www.getgrist.com/pricing/) |
| business | Grist self-hosted | published | USD 30/user | USD 288/user | — | — | unspecified | paid self-hosted license. Closest organizational self-host plan:30monthly,24annual-billed monthly ×12. Commercial activation; qualifying individuals/<1Mannual-income organizations may request0key. [1](https://www.getgrist.com/pricing/) |
| enterprise | Enterprise | quote | — | — | — | — | 50 | paid self-hosted license/services. Contact us for engineering/support/services; minimum50users. [1](https://www.getgrist.com/pricing/) |

## Defensibility assessments

- Its relational spreadsheet model, Python formulas and linked dashboards provide distinctive workflows, while portable SQLite files reduce lock-in. [1](https://raw.githubusercontent.com/gristlabs/grist-core/main/README.md)

## Three product reasons to consider it

1. Use full Python formulas together with familiar spreadsheet functions. [1](https://raw.githubusercontent.com/gristlabs/grist-core/main/README.md)
2. Arrange linked tables, cards, charts and summary widgets into custom dashboards. [1](https://raw.githubusercontent.com/gristlabs/grist-core/main/README.md)
3. Keep a portable SQLite-backed document with related tables and two-way references. [1](https://raw.githubusercontent.com/gristlabs/grist-core/main/README.md)

## Corporate sponsorship

Status: **business-fallback**. Official project and deployment pages checked; no separately identified corporate financial or in-kind sponsor. This is a search limitation, not proof none exists. [1](https://www.getgrist.com/about/)

- [Grist Labs](https://www.getgrist.com): business-steward. [Evidence](https://www.getgrist.com/about/).

## Self-operation requirements

Mode: **server**. Core server can run with embedded SQLite alone. Redis conditional for webhooks/notifications and PostgreSQL optional metadata alternative; no mandatory external database for basic core. Commercial automation/AI/MCP entitlements separate. [1](https://support.getgrist.com/self-managed/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Linux container/Docker | required | — | Default documented deployment | Community server route; separate native desktop/static variants exist. [1](https://support.getgrist.com/self-managed/) |
| SQLite document files | required | — | Default documented deployment | Each Grist document self-contained; these remain SQLite even with PostgreSQL metadata. [1](https://raw.githubusercontent.com/gristlabs/grist-core/main/README.md) |
| SQLite metadata home database | one-of | metadata-database | Default metadata backend | As documented; no unsupported version assumption. [1](https://support.getgrist.com/self-managed/) |
| PostgreSQL10–16 tested | one-of | metadata-database | Alternative metadata home database | Grist>=1.5disablesPostgreSQLJIT automatically. [1](https://support.getgrist.com/self-managed/) |
| Redis | conditional | — | Webhook/notifications enabled; recommended for snapshots | Otherwise optional external state cache. [1](https://support.getgrist.com/self-managed/) |
| S3-compatible storage | optional | — | Automatic document/snapshot cloud storage selected | Azure support is full commercial edition. [1](https://support.getgrist.com/self-managed/) |
| gVisor sandbox capability | conditional | — | Formula sandboxing enabled | Container capability/CPU support must permit sandbox startup. [1](https://support.getgrist.com/self-managed/) |

Resources: CPU 2 CPUs known-good baseline; memory 8GB known-good baseline; storage 20GB known-good baseline; OS Linux container; x86_64/ARM64. Moderate workload guidance, not absolute minimum. Single-document tests use less; resources scale with concurrently active documents. [1](https://support.getgrist.com/self-managed/)

## One-click and installer options

Status: **offered**. Options retain the official distinction between one-command installation and true provider one-click deployment. [1](https://support.getgrist.com/self-managed/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [YunoHost Grist application](https://apps.yunohost.org/app/grist): **marketplace**, officially-linked-third-party. Official Grist pricing links maintained YunoHost app-store package; YunoHost host required. Packaging/support belongs to platform. [1](https://www.getgrist.com/pricing/)

[Structured profile](../../research/profiles/grist.json) · [Claim ledger](../../research/profile-claims/grist.jsonl) · [Research steps](../../research/profile-audits/grist.md)
