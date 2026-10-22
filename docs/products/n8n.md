# n8n

[Product](https://n8n.io) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

n8n GmbH (business); ownership: **private**; funding: **funded**.

Started 2019 (company-founded); years active: 7; years in business: 7. Ages are approximate calendar-year differences as of 2026-10-21.

Company/project built since2019; private venture-backed business. October2025 Series C announced $180m, $240m total at that time. Historical participants listed; no present ownership percentages established. [1](https://blog.n8n.io/series-c/)

Known investors: [Accel](https://blog.n8n.io/series-c/), [Meritech](https://blog.n8n.io/series-c/), [Redpoint](https://blog.n8n.io/series-c/), [Evantic](https://blog.n8n.io/series-c/), [Visionaries Club](https://blog.n8n.io/series-c/), [NVentures](https://blog.n8n.io/series-c/), [T.Capital](https://blog.n8n.io/series-c/), [Felicis Ventures](https://blog.n8n.io/series-c/), [Sequoia](https://blog.n8n.io/series-c/), [Highland Europe](https://blog.n8n.io/series-c/), [HV Capital](https://blog.n8n.io/series-c/).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community Edition | free | USD 0/account | — | — | — | unspecified | free self-hosted core. Community self-hosted code is distinct from hosted Starter/Pro subscriptions; infrastructure separate. [1](https://n8n.io/pricing/) |
| popular | unknown | unknown | — | — | — | — | unspecified | self-hosted and cloud plans. No explicit Most popular or Recommended plan designation verified in the pricing source; no plan inferred. [1](https://n8n.io/pricing/) |
| business | Business | published | — | EUR 8004/instance,40,000 workflow executions/month | — | — | unspecified | paid self-host license. €667 annual-billed monthly display ×12 = €8,004/year; monthly billing price not verified. [1](https://n8n.io/pricing/) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | paid self-host license or vendor cloud. Contact Sales; custom executions and governance. [1](https://n8n.io/pricing/) |

## Defensibility assessments

- A large node/template community and workflows combining code with visual logic produce ecosystem and migration friction. [1](https://github.com/n8n-io/n8n)

## Three product reasons to consider it

1. Mix visual workflow steps with JavaScript/Python and direct HTTP/GraphQL calls. [1](https://n8n.io/pricing/)
2. Add AI agents, MCP tools and human approval steps within deterministic workflows. [1](https://n8n.io/pricing/)
3. Use reusable integration nodes and execution history to build and inspect cross-application workflows. [1](https://github.com/n8n-io/n8n) [2](https://n8n.io/pricing/)

## Corporate sponsorship

Status: **business-fallback**. Corporate sponsorship source checked. No separate corporate sponsor verified; accountable commercial steward included. [1](https://blog.n8n.io/series-c/)

- [n8n GmbH](https://n8n.io): business-steward. [Evidence](https://blog.n8n.io/series-c/).

## Self-operation requirements

Mode: **server**. Current official docs redirect to new install paths and discuss n8n3.0 while examples still mention2.x; these requirements describe the checked documentation, not a pinned release guarantee. No MySQL backend asserted. Base workflows work without Assistant. [1](https://docs.n8n.io/deploy/host-n8n/install-options/install-using-docker-compose.md) [2](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode.md) [3](https://docs.n8n.io/deploy/host-n8n/install-options/one-line-setup.md)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Engine and Compose v2 | required | — | Always | Current recommended container route; old npm guide is flagged outdated. [1](https://docs.n8n.io/deploy/host-n8n/install-options/install-using-docker-compose.md) |
| SQLite embedded | one-of | database | Default single-instance setup; light use | Built-in file database; no external SQLite service. [1](https://docs.n8n.io/deploy/host-n8n/install-options/install-using-docker-compose.md) |
| PostgreSQL | one-of | database | Recommended for production; use for distributed queue deployments | Current example uses PostgreSQL18; do not infer all version support. [1](https://docs.n8n.io/deploy/host-n8n/install-options/install-using-docker-compose.md) |
| Redis and n8n workers | conditional | — | Queue mode for distributed execution | Redis message broker plus worker processes; distributed SQLite unsupported. [1](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode.md) |
| Sandbox service / Daytona and model-provider API | conditional | — | Only when optional n8n Assistant is enabled | Bundled sandbox/search starts in new one-line stack; docs recommend Daytona for production Assistant; provider credentials required. [1](https://docs.n8n.io/deploy/host-n8n/install-options/one-line-setup.md) |
| S3-compatible or Azure blob storage | conditional | — | Shared binary storage/large response offload in applicable configurations | Storage mode availability and edition apply; external storage not universal core requirement. [1](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode.md) |

Resources: CPU 2 vCPU for documented sandbox stack; memory 4GB minimum for documented sandbox stack; storage not specified; OS Docker-compatible host; Windows via WSL2. 2vCPU/4GB applies to the documented Compose stack with Docker-in-Docker sandbox; base workflow-only workloads differ. [1](https://docs.n8n.io/deploy/host-n8n/install-options/install-using-docker-compose.md)

## One-click and installer options

Status: **offered**. Only verified official deployment options included; one-command installers labelled separately from one-click. Manual Docker Compose alone is not counted as one-click. [1](https://docs.n8n.io/deploy/host-n8n/install-options/install-using-docker-compose.md) [2](https://docs.n8n.io/deploy/host-n8n/install-options/one-line-setup.md)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Official one-line Docker setup](https://docs.n8n.io/deploy/host-n8n/install-options/one-line-setup.md): **one-command**, first-party. curl get.n8n.io script; needs Docker/Compose; not a browser one-click. [1](https://docs.n8n.io/deploy/host-n8n/install-options/one-line-setup.md)

[Structured profile](../../research/profiles/n8n.json) · [Claim ledger](../../research/profile-claims/n8n.jsonl) · [Research steps](../../research/profile-audits/n8n.md)
