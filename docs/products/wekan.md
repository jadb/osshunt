# WeKan

[Product](https://wekan.fi/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

WeKan (Lauri Ojansivu sole proprietorship) (business); ownership: **individual**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official page identifies Finnish sole proprietorship and Lauri Ojansivu. Maintainer involvement since December2016 is not company/project founding; foundingYear unresolved. Grants/revenue fund development; equity financing/investors not established. [1](https://wekan.fi/commercial-support/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | WeKan | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. Core software license has no subscription charge; infrastructure and optional commercial offerings separate. [1](https://wekan.fi/commercial-support/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified in the public pricing material read; role remains unknown. [1](https://wekan.fi/saas/) |
| business | Official SaaS with Admin Panel | published | — | EUR 50/instance | — | — | unspecified | vendor commercial cloud. 50EUR/year; unlimited everything per official SaaS page. Organizational hosted offering; separate from free code. [1](https://wekan.fi/saas/) |
| enterprise | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No named Enterprise software tier. Hourly and annual prepaid services exist; not misrepresented as Enterprise licensing. [1](https://wekan.fi/commercial-support/) |

## Defensibility assessments

- Broad import/export and extensible MIT code support a durable collaborative-Kanban niche, although portability limits proprietary lock-in. [1](https://raw.githubusercontent.com/wekan/wekan/main/README.md)

## Three product reasons to consider it

1. Switch between swimlane Kanban, table, calendar, Gantt and Scrum views. [1](https://raw.githubusercontent.com/wekan/wekan/main/README.md)
2. Move existing work through broad board import/export and migration formats. [1](https://raw.githubusercontent.com/wekan/wekan/main/README.md)
3. Build event automation visually through Rules and workflow blocks. [1](https://raw.githubusercontent.com/wekan/wekan/main/README.md)

## Corporate sponsorship

Status: **business-fallback**. Official Sponsors page read but text extraction exposes only tier and in-kind headings without company names; identities unresolved. Verified sole-proprietor commercial business included as steward fallback; no invented sponsor logos. [1](https://wekan.fi/commercial-support/)

- [WeKan (Lauri Ojansivu sole proprietorship)](https://wekan.fi/): business-steward. [Evidence](https://wekan.fi/commercial-support/).

## Self-operation requirements

Mode: **server**. Scope is the documented default installation. Optional integrations are separate from the core; no infrastructure price implied. [1](https://wekan.fi/install/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Node.js26.x/Meteor3 application | required | — | Default documented deployment | Current v12.58 installer page; bundle packages runtime. [1](https://wekan.fi/install/) |
| FerretDBv1 with embedded SQLite | one-of | database | Default bundle/Docker/Snap/Kubernetes backend | No separate SQL or MongoDB server needed. [1](https://wekan.fi/install/) |
| FerretDBv1 + PostgreSQL | one-of | database | Alternative database route | As documented; no unsupported version assumption. [1](https://wekan.fi/install/) |
| MongoDB6/7/8/9 | one-of | database | Alternative database route | Documented Linux kernel version caveat; consult current install page. [1](https://wekan.fi/install/) |
| FerretDBv1 + MySQL/MariaDB/SAPHANA | one-of | database | Experimental alternative route; test first | FerretDBv2/PostgreSQL/DocumentDB separately marked untested. [1](https://wekan.fi/install/) |
| Persistent filesystem attachments | required | — | Default documented deployment | Alternatives in Admin: GridFS,S3/MinIO,AzureBlob,GoogleCloud. [1](https://raw.githubusercontent.com/wekan/wekan/main/README.md) |
| SMTP | conditional | — | Email notifications selected | As documented; no unsupported version assumption. [1](https://raw.githubusercontent.com/wekan/wekan/main/README.md) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux,Windows,macOS; bundled runtime or containers. No numeric hardware minimum recovered. Current install page lists platform/runtime versions, backup requirements and default FerretDB path. [1](https://wekan.fi/install/)

## One-click and installer options

Status: **offered**. Options retain the official distinction between one-command installation and true provider one-click deployment. [1](https://wekan.fi/install/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [WeKan Snap](https://snapcraft.io/wekan): **marketplace**, officially-linked-third-party. Install page links Snap package and sudo snap install wekan; configure root-url and port afterward. Package marketplace/one-command path, not zero-configuration deployment. [1](https://wekan.fi/install/)

[Structured profile](../../research/profiles/wekan.json) · [Claim ledger](../../research/profile-claims/wekan.jsonl) · [Research steps](../../research/profile-audits/wekan.md)
