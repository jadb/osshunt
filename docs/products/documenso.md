# Documenso

[Product](https://documenso.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Documenso, Inc. (business); ownership: **private**; funding: **funded**.

Started 2022 (project-started); years active: 4; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

2022 dates public project announcement December 29; first release announced for 2023. Exact company incorporation date unresolved. July 2023 pre-seed $1.25M (announced August) brought total to $1.54M; investors historical. [1](https://documenso.com/blog) [2](https://documenso.com/self-hosted) [3](https://documenso.com/blog/pre-seed)

Known investors: [OSS Capital](https://documenso.com/blog/pre-seed), [John Harrison](https://documenso.com/blog/pre-seed).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community Edition | free | USD 0/site | — | — | — | unspecified | free self-hosted core. Software license cost is zero; infrastructure, extensions and external services can cost extra. [1](https://documenso.com/self-hosted) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified on the current public pricing page. [1](https://documenso.com/pricing) |
| business | Business Edition | unknown | — | — | — | — | unspecified | vendor commercial cloud. Paid self-host license with fixed yearly billing is explicitly offered; amount not published in reviewed comparison. Distinct cloud Teams plan is $480/year for five users, $40/month annual equivalent. [1](https://documenso.com/self-hosted) |
| enterprise | Enterprise Edition | quote | — | — | — | — | unspecified | paid self-host license or commercial cloud. Tailored Pricing; contact for organization-specific offer. Infrastructure and maintenance responsibilities remain separate. [1](https://documenso.com/self-hosted) |

## Defensibility assessments

- Developer-oriented signing APIs and reusable signing workflows can create integration switching costs, while open core keeps base technology contestable. [1](https://github.com/documenso/documenso)

## Three product reasons to consider it

1. Reusable templates and team sharing reduce repeated setup of recurring signature requests. [1](https://documenso.com/blog)
2. Direct links let recipients initiate signing without waiting for an individually addressed invitation. [1](https://documenso.com/blog)
3. Multi-document envelopes and API V2 support automating a complete signature package within another application. [1](https://documenso.com/blog)

## Corporate sponsorship

Status: **business-fallback**. No named independent corporate financial sponsor verified in repository or commercial pages; verified Documenso, Inc. business supplied as steward fallback. OSS Capital is an investor, not counted as sponsor. [1](https://github.com/documenso/documenso) [2](https://documenso.com/self-hosted)

- [Documenso, Inc.](https://documenso.com/): business-steward. [Evidence](https://documenso.com/self-hosted).

## Self-operation requirements

Mode: **server**. Current production requirements; persistent PostgreSQL mandatory, mail transport and signing certificate required for usable signing. Queue alternatives explicit; no unconditional Redis dependency. [1](https://docs.documenso.com/docs/self-hosting/getting-started/requirements)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PostgreSQL 14+ | required | — | Always | Primary data and default document storage. MySQL/SQLite/MongoDB not supported; pooler optional. [1](https://docs.documenso.com/docs/self-hosting/getting-started/requirements) |
| SMTP | one-of | email | SMTP auth/API OR Resend OR MailChannels | Documented deployment component. [1](https://docs.documenso.com/docs/self-hosting/getting-started/requirements) |
| Resend API | one-of | email | Resend OR SMTP OR MailChannels | Documented deployment component. [1](https://docs.documenso.com/docs/self-hosting/getting-started/requirements) |
| MailChannels API | one-of | email | MailChannels OR SMTP OR Resend | Documented deployment component. [1](https://docs.documenso.com/docs/self-hosting/getting-started/requirements) |
| X.509 .p12 signing certificate | required | — | Always | Not bundled; self-signed or CA-issued; Google Cloud HSM is another documented signing option. [1](https://docs.documenso.com/docs/self-hosting/getting-started/requirements) |
| HTTPS reverse proxy | required | — | Always | Nginx/Caddy/Traefik/HAProxy or cloud load balancer. [1](https://docs.documenso.com/docs/self-hosting/getting-started/requirements) |
| Node.js runtime or Docker image | required | — | Always | Source build requires Node24+ and npm11.17+; bundled images avoid local build tooling. [1](https://docs.documenso.com/docs/self-hosting/getting-started/requirements) |
| PostgreSQL-based job queue | one-of | job-provider | Default queue OR BullMQ/Redis OR Inngest | Uses existing database; no extra broker. [1](https://docs.documenso.com/docs/self-hosting/getting-started/requirements) |
| BullMQ with Redis 6.2+ | one-of | job-provider | Alternative job provider selected | Documented deployment component. [1](https://docs.documenso.com/docs/self-hosting/getting-started/requirements) |
| Inngest | one-of | job-provider | Alternative managed/cloud job provider selected | External service keys required. [1](https://docs.documenso.com/docs/self-hosting/getting-started/requirements) |
| S3-compatible object storage | optional | — | External documents instead of default PostgreSQL | S3, R2, Spaces or compatible self-host provider; not baseline required. [1](https://docs.documenso.com/docs/self-hosting/getting-started/requirements) |

Resources: CPU 2+ cores production recommended; memory 2+ GB production recommended; storage 20+ GB production recommended; OS Modern Linux; Docker/Kubernetes/PaaS; Windows via Docker or WSL2. Testing minimum1core/1GB/10GB distinct from production recommendation; size documents separately. [1](https://docs.documenso.com/docs/self-hosting/getting-started/requirements)

## One-click and installer options

Status: **offered**. First-party documented Railway one-click deployment; manual Docker Compose is a separate route. [1](https://docs.documenso.com/docs/self-hosting/deployment/railway)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Official Railway deployment guide](https://docs.documenso.com/docs/self-hosting/deployment/railway): **one-click**, first-party. Official docs explicitly provide one-click template flow provisioning app and PostgreSQL; SMTP and signing certificate still need configuration. [1](https://docs.documenso.com/docs/self-hosting/deployment/railway)

[Structured profile](../../research/profiles/documenso.json) · [Claim ledger](../../research/profile-claims/documenso.jsonl) · [Research steps](../../research/profile-audits/documenso.md)
