# Stirling PDF

[Product](https://stirling.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Stirling PDF, Inc. (business); ownership: **private**; funding: **funded**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

OCV primary announcement dates project origin January 2023 and commercial company launch September 2024 with $2M funding. Exact incorporation year not established; About counter values inconsistent with history, so year left null. Named investor historical, not cap-table percentage. Mixed-license product scope retained. [1](https://www.stirling.com/about) [2](https://www.opencoreventures.com/blog/open-source-creator-anthony-stirling-launches-stirling-pdf-to-build-the-first-open-core-pdf-editing-suite)

Known investors: [Open Core Ventures](https://www.opencoreventures.com/blog/open-source-creator-anthony-stirling-launches-stirling-pdf-to-build-the-first-open-core-pdf-editing-suite).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Free | free | USD 0/user | USD 0/user | — | — | unspecified | free distributed editor/server. Free web/desktop/self-host editor; server user limits and commercial license boundaries separately documented. Processing credit allowances separate from core license. [1](https://www.stirling.com/pricing) |
| popular | Team | published | USD 99/100-user capacity block | — | — | — | unspecified | commercial team administration / self-host infrastructure. Explicit Popular label; $99/month includes 100 users, added capacity in blocks of 100. No verified annual-prepay total. [1](https://www.stirling.com/pricing) |
| business | Team | published | USD 99/100-user capacity block | — | — | — | unspecified | commercial team administration / self-host infrastructure. Closest named team plan; includes 100 users, not $99/user. [1](https://www.stirling.com/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | enterprise self-host agreement. Custom committed volume/terms; air-gapped deployments, audit/SCIM capabilities. Processing services priced separately. [1](https://www.stirling.com/pricing) |

## Defensibility assessments

- Broad document operations and accumulated automation pipelines can create workflow stickiness; mixed-license boundaries limit assumptions of open-code substitutability. [1](https://www.stirling.com/)

## Three product reasons to consider it

1. OCR and format conversion cover scanned and office-document processing. [1](https://www.stirling.com/)
2. Chained PDF operations automate repeatable batch transformations. [1](https://www.stirling.com/)
3. API and MCP operations expose document processing to connected workflows. [1](https://www.stirling.com/)

## Corporate sponsorship

Status: **business-fallback**. Official collective checked: no named corporate donor; business steward verified through company/docs. OCV investor kept separate. [1](https://opencollective.com/stirling-pdf)

- [Stirling PDF, Inc.](https://www.stirling.com/): business-steward. [Evidence](https://opencollective.com/stirling-pdf).

## Self-operation requirements

Mode: **hybrid**. Current server docs checked with v3.2.0 catalog lead. Full Docker image is default verified path; H2/local volumes require no external SQL, Redis or queue. PostgreSQL/S3 are licensed alternatives. Desktop is not a server requirement. [1](https://docs.stirlingpdf.com/Server/Install/Docker/) [2](https://docs.stirlingpdf.com/Server/Storage/Database/) [3](https://docs.stirlingpdf.com/Server/Storage/File-Storage/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker-compatible runtime | one-of | runtime | Container deployment | Local runtime component; bundled by official binary where applicable. [1](https://docs.stirlingpdf.com/Server/Install/Docker/) |
| Java runtime and document tools | one-of | runtime | Bare JAR deployment | JAR alternative requires separately installing documented conversion/OCR tools; exact Java version not captured. [1](https://docs.stirlingpdf.com/Server/Install/JAR/) |
| LibreOffice, Tesseract, OCRmyPDF, WeasyPrint, Calibre, Ghostscript, QPDF, ImageMagick | conditional | — | Full latest container | Bundled in full image; ultra-lite excludes OCR/Office/HTML/ebook conversion tools. [1](https://docs.stirlingpdf.com/Server/Install/Docker/) |
| Embedded H2 | one-of | database | Default user/team database | Local runtime component; bundled by official binary where applicable. [1](https://docs.stirlingpdf.com/Server/Storage/Database/) |
| PostgreSQL | one-of | database | External database on Team/Enterprise | Local runtime component; bundled by official binary where applicable. [1](https://docs.stirlingpdf.com/Server/Storage/Database/) |
| Local filesystem | one-of | file-storage | Default file storage | Local runtime component; bundled by official binary where applicable. [1](https://docs.stirlingpdf.com/Server/Storage/File-Storage/) |
| Database file storage | one-of | file-storage | Team/Enterprise storage selection | Local runtime component; bundled by official binary where applicable. [1](https://docs.stirlingpdf.com/Server/Storage/File-Storage/) |
| S3-compatible object store | one-of | file-storage | Team/Enterprise; clustered storage | S3, MinIO, R2 and other S3-compatible providers documented. [1](https://docs.stirlingpdf.com/Server/Storage/File-Storage/) |
| SMTP service | conditional | — | Email-sharing enabled | Local runtime component; bundled by official binary where applicable. [1](https://docs.stirlingpdf.com/Server/Storage/File-Storage/) |
| Bundled AI engine | optional | — | Fat image; disabled until enabled | AI/processor service usage and external API configuration are separate; default editor does not require paid AI API. [1](https://docs.stirlingpdf.com/Server/Install/Docker/) |

Resources: CPU not specified; memory latest suggested 4GB; fat 6GB+; ultra-lite 2GB; storage not specified; OS Container host amd64/arm64; desktop editions separately offered. Suggested memory by image, not universal minimum. CPU/storage numeric minima not captured; persist configs/storage volumes. [1](https://docs.stirlingpdf.com/Server/Install/Docker/)

## One-click and installer options

Status: **offered**. Checked official deployment documentation; manual Docker Compose is not a one-click offer. [1](https://docs.stirlingpdf.com/Server/Install/Docker/)

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [TrueNAS Apps](https://apps.truenas.com/catalog/stirling-pdf/): **marketplace**, officially-linked-third-party. Official installation page links this distribution; not a hosted server deployment. [1](https://docs.stirlingpdf.com/Server/Install/Docker/)
- [Proxmox Community Scripts](https://community-scripts.github.io/ProxmoxVE/scripts?id=stirling-pdf): **one-command**, officially-linked-third-party. Official documentation links one-line LXC shell installer; not a true one-click browser deployment. [1](https://docs.stirlingpdf.com/Server/Install/Docker/)

[Structured profile](../../research/profiles/stirling-pdf.json) · [Claim ledger](../../research/profile-claims/stirling-pdf.jsonl) · [Research steps](../../research/profile-audits/stirling-pdf.md)
