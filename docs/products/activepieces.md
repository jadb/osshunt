# Activepieces

[Product](https://www.activepieces.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Activepieces (business); ownership: **private**; funding: **funded**.

Started 2022 (company-founded); years active: 4; years in business: 4. Ages are approximate calendar-year differences as of 2026-10-21.

Private YC-backed company founded2022; YC portfolio establishes backing. Other investors and total funding were not confirmed from checked primary pages. [1](https://www.ycombinator.com/companies/activepieces)

Known investors: [Y Combinator](https://www.ycombinator.com/companies/activepieces).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community Edition | free | USD 0/account | — | — | — | unspecified | free self-hosted core. MIT community code is distinct from licensed cloud/on-prem plans and their credits. [1](https://www.ycombinator.com/companies/activepieces) |
| popular | unknown | unknown | — | — | — | — | unspecified | commercial cloud/on-prem plans. No explicit Most popular or Recommended plan designation verified in the pricing source; no plan inferred. [1](https://www.activepieces.com/pricing) |
| business | Team | published | USD 200/account | — | — | USD 0.007/overage credit | unspecified | commercial cloud or licensed on-prem. 25 users and50,000 credits/month; overage $0.007 per credit, separate usage rate. Plus is $20/month with10,000 credits. Annual total not verified. [1](https://www.activepieces.com/pricing) |
| enterprise | Ultimate / Enterprise control | quote | — | — | — | — | unspecified | commercial cloud/on-prem or air-gapped enterprise. Talk to sales; yearly sized credits and enterprise self-host controls. [1](https://www.activepieces.com/pricing) |

## Defensibility assessments

- An extensible pieces ecosystem and embedded workflow builder can create integration-specific switching costs; connector breadth remains contestable. [1](https://github.com/activepieces/activepieces) [2](https://www.activepieces.com/pricing)

## Three product reasons to consider it

1. Compose AI agents, structured Tables and cross-app flows in one automation workspace. [1](https://www.activepieces.com/pricing)
2. Expose integrations through MCPs and an embedding SDK for product workflows. [1](https://www.activepieces.com/pricing)
3. Extend the automation catalog with inspectable custom pieces instead of waiting for a connector release. [1](https://www.ycombinator.com/companies/activepieces) [2](https://github.com/activepieces/activepieces)

## Corporate sponsorship

Status: **business-fallback**. Corporate sponsorship source checked. No separate corporate sponsor verified; accountable commercial steward included. [1](https://www.ycombinator.com/companies/activepieces)

- [Activepieces](https://www.activepieces.com): business-steward. [Evidence](https://www.ycombinator.com/companies/activepieces).

## Self-operation requirements

Mode: **server**. Production default is PostgreSQL+Redis+app+worker. PGLite/memory route is explicitly hobby-only. Railway optional-memory wording is narrower than recommended production Compose. [1](https://www.activepieces.com/docs/install/options/docker-compose) [2](https://www.activepieces.com/docs/install/options/docker) [3](https://www.activepieces.com/pricing)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Engine and Compose v2 | required | — | Always | Production service; may be bundled in the documented container stack. [1](https://www.activepieces.com/docs/install/options/docker-compose) |
| PostgreSQL | required | — | Always | Production setup includes dedicated postgres container for flows/runs/connections. [1](https://www.activepieces.com/docs/install/options/docker-compose) |
| Redis | required | — | Always | Documented production Compose queue; Railway page separately allows memory cache. [1](https://www.activepieces.com/docs/install/options/docker-compose) |
| Activepieces application and worker | required | — | Always | Separate app/UI and worker containers; scale workers with workload. [1](https://www.activepieces.com/docs/install/options/docker-compose) |
| PGLite and in-memory queue | conditional | — | Hobby single-container route only | Embedded PostgreSQL alternative for personal single-machine use; no scale, cannot migrate this instance to Enterprise. [1](https://www.activepieces.com/docs/install/options/docker) |
| Public HTTPS domain / reverse proxy | conditional | — | Production inbound webhooks and external triggers | Testing tunnels are not production recommendation. [1](https://www.activepieces.com/docs/install/options/docker-compose) |
| External API/model credentials | conditional | — | When chosen connector or bring-your-own-key AI step requires them | Third-party API usage may incur separate charges. [1](https://www.activepieces.com/pricing) |

Resources: CPU 2vCPU minimum; memory 4GB minimum; storage not specified; OS Docker host; Windows WSL2. Official recommended self-host script requires at least2vCPU/4GB; not a universal capacity guarantee. [1](https://www.activepieces.com/docs/install/options/docker-compose)

## One-click and installer options

Status: **offered**. Only verified official deployment options included; one-command installers labelled separately from one-click. Manual Docker Compose alone is not counted as one-click. [1](https://www.activepieces.com/docs/install/options/docker-compose) [2](https://www.activepieces.com/docs/install/options/railway)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Official self-host setup script](https://www.activepieces.com/docs/install/options/docker-compose): **one-command**, first-party. Generates configuration/secrets and starts four containers; not browser one-click. [1](https://www.activepieces.com/docs/install/options/docker-compose)
- [Railway one-click template](https://www.activepieces.com/docs/install/options/railway): **one-click**, officially-linked-third-party. Official guide confirms template and automatic PostgreSQL provisioning; provider costs separate. [1](https://www.activepieces.com/docs/install/options/railway)

[Structured profile](../../research/profiles/activepieces.json) · [Claim ledger](../../research/profile-claims/activepieces.jsonl) · [Research steps](../../research/profile-audits/activepieces.md)
