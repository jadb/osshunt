# Stalwart Community

[Product](https://www.stalw.art/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Stalwart Labs (business); ownership: **private**; funding: **unknown**.

Started 2019 (company-founded); years active: 7; years in business: 7. Ages are approximate calendar-year differences as of 2026-10-21.

Company founded July 2019; server development started September 2021 and first public release September 2022. Incorporated US/UK. Exact current equity owners and financing history not disclosed in official About/legal/README sources searched; no inference of bootstrapping or absence of investors. [1](https://stalw.art/about/) [2](https://stalw.art/legal/) [3](https://raw.githubusercontent.com/stalwartlabs/stalwart/main/README.md)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community | free | USD 0/mailbox | — | — | — | unspecified | free AGPL self-hosted core. Community edition free; Enterprise functions and infrastructure separate. [1](https://stalw.art/compare/) |
| popular | unknown | unknown | — | — | — | — | unspecified | self-hosted editions. No public Most popular or Recommended plan designation found in the source inspected; no popularity inferred. [1](https://stalw.art/pricing/) |
| business | Enterprise (25–499 mailboxes band) | published | — | USD 2.4/mailbox-year in first pricing band | — | — | 25 | paid self-hosted Enterprise license. USD $2.40/mailbox/year for first 25–499 band; minimum 25 mailboxes => $60/year. Graduated rates on additional bands. Monthly billing exists but numeric monthly rate unverified; annual field is per-mailbox annual amount, not entire deployment. [1](https://stalw.art/pricing/) |
| enterprise | Enterprise (100,000+ mailboxes) | quote | — | — | — | — | 100000 | paid self-hosted Enterprise license. 100,000+ mailbox quote; published lower bands use graduated annual rates, not a flat all-mailbox rate. [1](https://stalw.art/pricing/) |

## Defensibility assessments

- A unified protocol engine and adaptable storage architecture differentiate Stalwart technically, but standard mail protocols and young project history limit entrenched ecosystem advantage. [1](https://stalw.art/about/)

## Three product reasons to consider it

1. JMAP, IMAP, POP3 and SMTP cover modern and legacy mail clients in one product. [1](https://stalw.art/about/)
2. CalDAV, CardDAV and WebDAV add calendar, contact and file collaboration alongside mail. [1](https://stalw.art/about/)
3. Built-in statistical spam and phishing protections handle reputation and suspicious messages inside the mail platform. [1](https://stalw.art/compare/)

## Corporate sponsorship

Status: **business-fallback**. Official About and README identify commercial business building Community and Enterprise. No corporate donor roster found in those sources; verified business steward fallback, not customers/integrators as sponsors. [1](https://stalw.art/about/)

- [Stalwart Labs](https://stalw.art/): business-steward. [Evidence](https://stalw.art/about/).

## Self-operation requirements

Mode: **server**. Verified explicit single-node RocksDB default; structured data/blob/search/in-memory stores independently configurable. Redis, SQL, object storage and external search are alternatives rather than universal prerequisites. External auth/AI services optional; Enterprise AI features are not required by Community. Native installer distinct from Docker. [1](https://stalw.art/docs/install/platform/docker/) [2](https://stalw.art/docs/storage/backends/) [3](https://stalw.art/docs/install/requirements/) [4](https://stalw.art/docs/install/platform/linux/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Stalwart server binary | required | — | Always | Native Linux/macOS/Windows or Docker image; production pin v0.16 series. Default binary bundles normal storage backend support. [1](https://stalw.art/docs/install/platform/docker/) |
| RocksDB (embedded) | one-of | data-store | Default single-node main data store | Also default for blob/search/in-memory stores, no external DB needed. [1](https://stalw.art/docs/storage/backends/) |
| PostgreSQL | one-of | data-store | Alternative main data store | Also supports blob/search/in-memory stores. [1](https://stalw.art/docs/storage/backends/) |
| MySQL / MariaDB | one-of | data-store | Alternative main data store | Also supports blob/search/in-memory stores. [1](https://stalw.art/docs/storage/backends/) |
| SQLite (embedded) | one-of | data-store | Alternative main data store | Also supports blob/search/in-memory stores. [1](https://stalw.art/docs/storage/backends/) |
| FoundationDB | one-of | data-store | Alternative main data store; recommended multi-node | Requires binary compiled with corresponding backend feature and FoundationDB service. [1](https://stalw.art/docs/storage/backends/) |
| S3 / MinIO or Azure Blob or filesystem | optional | — | Separate attachment/blob storage instead of selected data-store backend | Not required for default RocksDB path. [1](https://stalw.art/docs/storage/backends/) |
| Elasticsearch or Meilisearch | optional | — | External full-text index instead of selected data-store backend | No standalone search service required by default. [1](https://stalw.art/docs/storage/backends/) |
| Redis | optional | — | External in-memory store instead of selected data-store backend | Default RocksDB handles this role without Redis. [1](https://stalw.art/docs/storage/backends/) |
| Docker | conditional | — | Container deployment only | Native service installer available; not mandatory for native install. [1](https://stalw.art/docs/install/platform/docker/) |
| Public domain, DNS and SMTP connectivity | conditional | — | Internet-facing mail delivery | Production mail requires DNS identity/routing and reachable mail ports; TLS setup and ACME available. [1](https://stalw.art/docs/install/platform/docker/) |

Resources: CPU 1 core generally sufficient for low-traffic ~5-user setups; memory 1 GB generally sufficient for typical 5–10 users; ~100 MB idle footprint; storage not specified; OS Linux; macOS; Windows; Docker-supported hosts. Sizing guidance, not hard minima. Concurrency/mail volume dominate. No fixed disk capacity published; provision for mailbox data. Default 8192 concurrent connections configurable. [1](https://stalw.art/docs/install/requirements/)

## One-click and installer options

Status: **offered**. First-party shell installer is an automated command-line path, not a graphical one-click cloud deployment. DNS, TLS and storage setup still required. [1](https://stalw.art/docs/install/platform/linux/)

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Stalwart Linux/macOS installer](https://stalw.art/docs/install/platform/linux/): **one-command**, first-party. Download official install.sh then execute with sudo; documentation separates download and execution for inspection. Classified command-line installer, not true one-click. [1](https://stalw.art/docs/install/platform/linux/)

[Structured profile](../../research/profiles/stalwart.json) · [Claim ledger](../../research/profile-claims/stalwart.jsonl) · [Research steps](../../research/profile-audits/stalwart.md)
