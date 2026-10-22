# DocuSeal

[Product](https://www.docuseal.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

DocuSeal LLC (business); ownership: **private**; funding: **bootstrapped**.

Started 2023 (product-launched); years active: 3; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

July10,2023 dates first stable product release, not verified legal incorporation. Current footer identifies DocuSeal LLC. About explicitly states bootstrapped, customer-funded growth without external investors. [1](https://www.docuseal.com/changelog) [2](https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables) [3](https://www.docuseal.com/about)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open-source core | free | USD 0/site | — | — | — | unspecified | free self-hosted core. Software license cost is zero; infrastructure, extensions and external services can cost extra. [1](https://www.docuseal.com/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit popular/recommended plan badge verified. [1](https://www.docuseal.com/pricing) |
| business | Pro (On-Premises) | published | USD 20/Web UI user seat | — | — | — | 1 | paid self-host Pro license. Teams and roles make Pro closest organizational tier. API/embedding adds $0.20 per completed submission, even on premises; multiple files/signers in one submission count once. Cloud Pro annual $200 advertised separately; self-host annual amount not independently verified. [1](https://www.docuseal.com/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | custom self-host or cloud Enterprise. Contact sales for custom quote on volume and seats; Enterprise offers tailored integrations. [1](https://www.docuseal.com/pricing) |

## Defensibility assessments

- Reusable document templates and embedded application workflows can create migration costs, although the open document-signing core remains broadly reproducible. [1](https://github.com/docusealco/docuseal)

## Three product reasons to consider it

1. Visual PDF field building and multiple submitters turn existing documents into reusable signing forms. [1](https://github.com/docusealco/docuseal)
2. Mobile-optimized signing and multilingual interfaces help recipients finish documents across devices and languages. [1](https://github.com/docusealco/docuseal)
3. Signature verification and document audit logs help teams inspect completed-document integrity and signing history. [1](https://github.com/docusealco/docuseal)

## Corporate sponsorship

Status: **business-fallback**. No named corporate sponsor found in official About/repository sources. Verified bootstrapped business DocuSeal LLC supplied as steward fallback; customers are not sponsors. [1](https://www.docuseal.com/about) [2](https://github.com/docusealco/docuseal)

- [DocuSeal LLC](https://www.docuseal.com/about): business-steward. [Evidence](https://www.docuseal.com/about).

## Self-operation requirements

Mode: **server**. Baseline Docker app supports embedded SQLite and local disk; no compulsory external Redis/cache broker listed. PostgreSQL specifically recommended for heavier production workflows. [1](https://www.docuseal.com/install) [2](https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables) [3](https://www.docuseal.com/docs/on-premises-server-requirements)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker image or Ruby on Rails source runtime | required | — | Always | Documented Docker path bundles application runtime; native source version range not established here. [1](https://github.com/docusealco/docuseal) |
| SQLite | one-of | database | Default embedded DB for small personal/business use OR PostgreSQL/MySQL | Partial compatibility relative to PostgreSQL. [1](https://www.docuseal.com/install) |
| PostgreSQL | one-of | database | Choose one database; recommended for production API/embedding | Documented deployment component. [1](https://www.docuseal.com/docs/on-premises-server-requirements) |
| MySQL | one-of | database | Alternative for smaller workload; limited compatibility | Text-length, full-text-search and partial-index limitations. [1](https://www.docuseal.com/docs/on-premises-server-requirements) |
| Local disk | one-of | document-storage | Default documents OR configured cloud object storage | Documented deployment component. [1](https://github.com/docusealco/docuseal) |
| S3-compatible object store | one-of | document-storage | Alternative to local disk/GCS/Azure | Documented deployment component. [1](https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables) |
| Google Cloud Storage | one-of | document-storage | Alternative to local disk/S3/Azure | Documented deployment component. [1](https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables) |
| Azure Blob storage | one-of | document-storage | Alternative to local disk/S3/GCS | Documented deployment component. [1](https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables) |
| SMTP | conditional | — | Sending document requests/notifications | Documented deployment component. [1](https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables) |
| Gotenberg | conditional | — | Pro DOCX/HTML document conversion | Documented deployment component. [1](https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables) |
| Stripe API | optional | — | Payment collection | Documented deployment component. [1](https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables) |

Resources: CPU 1 vCPU example for500KB docs; memory 1 GB example for500KB docs; storage 12 GB example for10,000 single-use/single-signer500KB documents; OS Docker-compatible host. Workload examples, not universal minima: large100MB docs scenarios call for2vCPU/4GB and terabytes depending reuse/signers. [1](https://www.docuseal.com/install) [2](https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables) [3](https://www.docuseal.com/docs/on-premises-server-requirements)

## One-click and installer options

Status: **offered**. Verified official-link Railway template. Also official Heroku/DigitalOcean/Render links present; no deployment performed. [1](https://www.docuseal.com/install)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Railway DocuSeal template](https://railway.com/deploy/IGoDnc): **one-click**, officially-linked-third-party. Official install page links this actual template. Infrastructure charges separate. [1](https://www.docuseal.com/install)

[Structured profile](../../research/profiles/docuseal.json) · [Claim ledger](../../research/profile-claims/docuseal.jsonl) · [Research steps](../../research/profile-audits/docuseal.md)
