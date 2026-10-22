# Formbricks Community Edition

[Product](https://formbricks.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Formbricks GmbH (business); ownership: **private**; funding: **funded**.

Started 2022 (project-started); years active: 4; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

2022 dates snoopForms/Formbricks project work and rebrand, not a verified GmbH incorporation date. German private limited company. OSS Capital equity backing is explicit; individuals described as supporters are not automatically classified as equity investors. [1](https://formbricks.com/blog) [2](https://formbricks.com/about)

Known investors: [OSS Capital](https://formbricks.com/about).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community Edition | free | USD 0/site | — | — | — | unspecified | free self-hosted core. Software license cost is zero; infrastructure, extensions and external services can cost extra. [1](https://formbricks.com/docs/self-hosting/advanced/license) |
| popular | Pro | unknown | — | — | — | — | unspecified | vendor commercial cloud. Pro explicitly Most popular and displays $74/Month. Static view did not establish selected monthly-versus-annual billing state; numeric subscription fields withheld rather than assigning the wrong term. Scope is commercial Cloud. [1](https://formbricks.com/pricing) |
| business | Scale | unknown | — | — | — | — | unspecified | vendor commercial cloud. Closest organizational tier with Teams & access roles and workflows; displays $325/Month. Billing-toggle state not established in static extract, so monthly/annual amount remains unresolved. Scope commercial Cloud. [1](https://formbricks.com/pricing) |
| enterprise | Enterprise Edition | quote | — | — | — | — | unspecified | paid self-host Enterprise license. Core free; advanced features require EE license. Contact licensing team for commercial terms; no verified public amount. [1](https://formbricks.com/docs/self-hosting/overview) |

## Defensibility assessments

- Survey targeting and an extensible experience-management workflow can create integration switching costs; proprietary EE gates qualify the open-core differentiation. [1](https://formbricks.com/docs/self-hosting/advanced/license)

## Three product reasons to consider it

1. Link, website and in-app surveys let teams collect feedback in the user journey rather than only by a standalone form. [1](https://formbricks.com/pricing)
2. Conditional logic, recalled information and hidden fields support context-aware survey paths. [1](https://formbricks.com/pricing)
3. Partial responses and file uploads capture unfinished or richer feedback within survey results. [1](https://formbricks.com/pricing)

## Corporate sponsorship

Status: **identified**. Official April 2023 announcement explicitly states GitHub sponsorship through the inaugural Accelerator. This is verified historical program sponsorship; continuing 2026 financial support was not established. [1](https://formbricks.com/blog/inaugural-batch-github-accelerator)

- [GitHub](https://github.com/): corporate-sponsor. [Evidence](https://formbricks.com/blog/inaugural-batch-github-accelerator).

## Self-operation requirements

Mode: **server**. Version 6 baseline has app, Hub API/worker, Cube, PostgreSQL, Redis/Valkey and SpiceDB stack. Do not reuse old PostgreSQL-only v3 requirements. [1](https://formbricks.com/docs/self-hosting/overview) [2](https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml) [3](https://formbricks.com/docs/self-hosting/setup/one-click)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Compose or Kubernetes | one-of | orchestration | Docker single-host route OR Kubernetes Helm route | Documented deployment component. [1](https://formbricks.com/docs/self-hosting/overview) |
| PostgreSQL with pgvector | required | — | Always | Current stable compose uses pgvector/pgvector:pg18. [1](https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml) |
| Valkey | one-of | cache-queue | Bundled Valkey OR external Redis/Valkey | Documented deployment component. [1](https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml) |
| Redis | one-of | cache-queue | External Redis OR bundled Valkey | Documented deployment component. [1](https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml) |
| Formbricks app, Hub API and Hub worker | required | — | Always | v6 multi-service baseline, not a single app container. [1](https://formbricks.com/docs/self-hosting/overview) |
| Cube analytics service | required | — | Always | Semantic layer API with PostgreSQL and memory queue driver in compose. [1](https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml) |
| SpiceDB and authorization datastore | required | — | Always | Bundled for all new installs, no EE license check; uses PostgreSQL datastore. [1](https://formbricks.com/docs/self-hosting/setup/one-click) |
| HTTPS reverse proxy / Traefik | required | — | Always | Public domain and open ports 80/443 for certificate issuance. [1](https://formbricks.com/docs/self-hosting/setup/one-click) |
| AI taxonomy service and model provider | optional | — | Enable taxonomy compose profile | OpenAI-compatible, Vertex or Bedrock credentials; separate provider costs. [1](https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml) |
| Local Qwen/vLLM GPU runtime | optional | — | Enable qwen compose profile | NVIDIA GPU reservation; not baseline. [1](https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml) |
| Object storage | conditional | — | Recommended managed service in production Kubernetes deployment | Documented deployment component. [1](https://formbricks.com/docs/self-hosting/overview) |

Resources: CPU 2 vCPU evaluation; 4 vCPU low load; memory 4 GB floor evaluation; 8 GB low load; storage 20 GB SSD evaluation; 50 GB SSD low load; OS Ubuntu for shell installer; Docker-compatible host or Kubernetes otherwise. Published single-server sizing derived from chart defaults, not load-tested. Kubernetes recommendation starts 3 nodes of 4 vCPU/8 GB with managed database/cache/object storage. [1](https://formbricks.com/docs/self-hosting/overview) [2](https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml) [3](https://formbricks.com/docs/self-hosting/setup/one-click)

## One-click and installer options

Status: **offered**. Verified shell installer; classified one-command, not a graphical one-click marketplace. [1](https://formbricks.com/docs/self-hosting/setup/one-click)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Formbricks Ubuntu shell installer](https://formbricks.com/docs/self-hosting/setup/one-click): **one-command**, first-party. Documentation calls it One-Click Setup but it is a command-line shell installer, with SSH, domain and ports configured first. [1](https://formbricks.com/docs/self-hosting/setup/one-click)

[Structured profile](../../research/profiles/formbricks.json) · [Claim ledger](../../research/profile-claims/formbricks.jsonl) · [Research steps](../../research/profile-audits/formbricks.md)
