# Paperless-ngx

[Product](https://docs.paperless-ngx.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Paperless-ngx community (community); ownership: **community**; funding: **not-applicable**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Community-supported successor project; company incorporation does not apply. Exact project start not confirmed in the primary pages retrieved; 2022 secondary references not used. Demo hosting sponsorship is in-kind, not equity funding. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md) [2](https://github.com/paperless-ngx/paperless-ngx)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open-source core | free | USD 0/site | — | — | — | unspecified | free self-hosted core. Software license cost is zero; infrastructure, extensions and external services can cost extra. [1](https://github.com/paperless-ngx/paperless-ngx) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified on the current public pricing page. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md) |
| business | unknown | not-offered | — | — | — | — | unspecified | open-source core. No official organizational subscription verified in project docs; third-party hosting is separate. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | open-source core. No official enterprise software plan verified in project docs. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md) |

## Defensibility assessments

- A well-integrated archive model joining OCR, classification and file history can create switching costs once users organize a large collection; no exclusive data advantage is established. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md)

## Three product reasons to consider it

1. OCR in more than100 languages and PDF/A copies make scanned paper searchable while preserving originals. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md)
2. Automatic correspondent/type/tag classification and email rules reduce repetitive filing. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md)
3. Custom fields, saved views, full-text relevance and document file versions support a flexible personal or team archive. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md)

## Corporate sponsorship

Status: **identified**. Project homepage credits Fyra Stack with demo hosting. This is in-kind sponsorship; Fyra Stack website confirms a commercial server business. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md) [2](https://fyrastack.com)

- [Fyra Stack](https://fyrastack.com): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md).

## Self-operation requirements

Mode: **server**. Verified v3.3.3 documentation; container and bare-metal routes, one-of database and broker choices shown explicitly. No remote AI service required for baseline archive. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/setup.md) [2](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Engine and Docker Compose | one-of | runtime | Container route; alternative to bare-metal Python runtime. | Documented deployment component. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/setup.md) |
| Python3.11–3.14 with Linux native OCR dependencies | one-of | runtime | Bare-metal route; image bundles these for containers. | Includes Tesseract, OCRmyPDF, Ghostscript, qpdf, ImageMagick and document parsing libraries. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/setup.md) |
| SQLite | one-of | database | Default embedded database; alternative to PostgreSQL/MariaDB. | Documented deployment component. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md) |
| PostgreSQL | one-of | database | Recommended for multiple users or higher throughput. | Documented deployment component. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md) |
| MariaDB | one-of | database | Alternative documented database; observe documented compatibility caveats. | Documented deployment component. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md) |
| Valkey | one-of | broker | Redis-protocol message broker; bundled default choice. | Documented deployment component. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md) |
| Redis | one-of | broker | Alternative Redis-protocol broker for scheduled tasks and cache. | Documented deployment component. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md) |
| Persistent data/media/consume directories | required | — | Always | Holds originals, archive files, classifier/index data and default SQLite database. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md) |
| Apache Tika and Gotenberg | conditional | — | Required only for Office document and .eml parsing; disabled by default. | Documented deployment component. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md) |
| IMAP email account | conditional | — | Only for email ingestion rules. | Documented deployment component. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md) |
| Ollama or OpenAI-compatible endpoint, optional embedding model | conditional | — | Only when opt-in AI enabled. | Local Ollama endpoint or remote compatible API; provider key may be required and usage can cost extra. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md) |
| Azure AI OCR endpoint | conditional | — | Only for opt-in remote OCR; local Tesseract is available. | Documented deployment component. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux for bare metal; Docker-capable host for containers. No fixed hardware minimum verified; size to workload. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/setup.md) [2](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md)

## One-click and installer options

Status: **offered**. Official script and manual Compose reviewed; no verified graphical provider template added. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/setup.md)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Interactive Paperless-ngx installation script](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/setup.md): **one-command**, first-party. Guided shell installer requires Docker/Compose; this is a one-command route, not a graphical one-click service. [1](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/setup.md)

[Structured profile](../../research/profiles/paperless-ngx.json) · [Claim ledger](../../research/profile-claims/paperless-ngx.jsonl) · [Research steps](../../research/profile-audits/paperless-ngx.md)
