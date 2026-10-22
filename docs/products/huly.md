# Huly

[Product](https://huly.io) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Hardcore Engineering, Inc. (business); ownership: **unknown**; funding: **unknown**.

Started 2020 (company-founded); years active: 6; years in business: 6. Ages are approximate calendar-year differences as of 2026-10-21.

Terms identify business steward; official culture article says startup founded May 2020. Corporate ownership and outside equity financing not disclosed in pages read. Sponsors not inferred from customers or integration logos. [1](https://huly.io/legal/terms) [2](https://v1.huly.io/blog/culture/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open-source self-hosted core | free | USD 0/instance | — | — | — | unspecified | free self-hosted code. Code remains free; cloud resources are separate. Common cloud also 0 with resource allowances. [1](https://huly.io/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified in the public pricing material read; role remains unknown. [1](https://huly.io/pricing) |
| business | Epic | published | USD 99.99/workspace | — | — | — | unspecified | vendor commercial cloud. Vendor cloud professional-company tier; no per-user fee or annual discount claimed. [1](https://huly.io/pricing) |
| enterprise | Custom Plan | quote | — | — | — | — | unspecified | vendor commercial cloud. Personalized quote for features, storage and support. [1](https://huly.io/pricing) |

## Defensibility assessments

- A single collaboration platform linking issues, documents, calendar and chat can retain accumulated team context. [1](https://huly.io/)

## Three product reasons to consider it

1. Time-block tasks in a centralized team calendar. [1](https://huly.io/)
2. Combine issue management, documents and contextual team chat. [1](https://huly.io/)
3. Create virtual office rooms with integrated audio and video. [1](https://huly.io/)

## Corporate sponsorship

Status: **business-fallback**. Official project and deployment pages checked; no separately identified corporate financial or in-kind sponsor. This is a search limitation, not proof none exists. [1](https://huly.io/legal/terms)

- [Hardcore Engineering, Inc.](https://huly.io/): business-steward. [Evidence](https://huly.io/legal/terms).

## Self-operation requirements

Mode: **server**. Current compose uses CockroachDB/Redpanda/object storage/Elasticsearch. MongoDB is conditional for AI/calendar, not the core SQL database. Compose and sample Kubernetes are manual deployments; production v* tags recommended. [1](https://github.com/hcengineering/huly-selfhost)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Compose | required | — | Default documented deployment | Official multi-container production-tag route. [1](https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml) |
| CockroachDB | required | — | Default documented deployment | Default SQL persistence; v24.2 image in compose. [1](https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml) |
| Redpanda | required | — | Default documented deployment | Kafka-compatible queue in default compose. [1](https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml) |
| S3-compatible object storage (bundled pgsty/silo) | required | — | Default documented deployment | Bundled service named minio in compose. [1](https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml) |
| Elasticsearch | required | — | Default documented deployment | Default full-text service, image 7.14.2 with ingest-attachment plugin. [1](https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml) |
| nginx and Huly application/worker services | required | — | Default documented deployment | Compose includes front, transactor, collaborator, account, rekoni and supporting services. [1](https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml) |
| MongoDB | conditional | — | AI bot or Google Calendar service enabled | Commented out in default compose; required by aibot/calendar. [1](https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml) |
| Redis | conditional | — | HulyPulse Redis backend selected | In-memory HulyPulse backend also documented; Redis optional multi-node choice. [1](https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml) |
| OpenAI account/API | conditional | — | AI Service enabled | External API, separate credentials and consumption costs. [1](https://github.com/hcengineering/huly-selfhost) |

Resources: CPU 2 vCPUs minimum; 4 recommended; memory 8 GB minimum; 16 GB recommended; storage not specified; OS Linux; example Ubuntu 24.04. README documents resource-heavy server; persistent data storage needed, no numerical disk minimum verified. [1](https://github.com/hcengineering/huly-selfhost)

## One-click and installer options

Status: **none-found**. Official installation instructions checked. Manual Docker Compose is not a one-click installation; no additional maintained provider template verified. [1](https://github.com/hcengineering/huly-selfhost)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/huly.json) · [Claim ledger](../../research/profile-claims/huly.jsonl) · [Research steps](../../research/profile-audits/huly.md)
