# Windmill (OSS source build)

[Product](https://www.windmill.dev) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Windmill Labs, Inc. (business); ownership: **private**; funding: **funded**.

Started 2022 (company-founded); years active: 4; years in business: 4. Ages are approximate calendar-year differences as of 2026-10-21.

Private YC-backed company founded2022. YC portfolio verified; Deployed investor portfolio also identifies Gradient and Bessemer. Round amount/date and current cap table not verified. [1](https://www.ycombinator.com/companies/windmill) [2](https://www.windmill.dev/docs/intro) [3](https://www.deployed.vc/)

Known investors: [Y Combinator](https://www.ycombinator.com/companies/windmill), [Gradient](https://www.deployed.vc/), [Bessemer Venture Partners](https://www.deployed.vc/).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Free and Open-source | free | USD 0/account | — | — | — | unspecified | free self-hosted core. Unlimited executions; edition caps apply; infrastructure separate. [1](https://www.windmill.dev/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | self-hosted and cloud plans. No explicit Most popular or Recommended plan designation verified in the pricing source; no plan inferred. [1](https://www.windmill.dev/pricing) |
| business | Enterprise Edition | unknown | — | — | — | — | unspecified | commercial edition. Closest organizational edition; page has Pro/Nonprofit/Enterprise and Cloud/Self-host selectors plus seat/compute calculator. Displayed from$120 and $170 example cannot safely be treated as a universal business subscription. [1](https://www.windmill.dev/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | configured commercial cloud or self-host license. Get in touch / download quote; configured developer/operator seats and compute units determine contract. No fake annual total. [1](https://www.windmill.dev/pricing) |

## Defensibility assessments

- Shared script, workflow and app execution primitives plus dependency metadata can create internal development switching costs; individual scripts remain portable. [1](https://www.windmill.dev/docs/intro)

## Three product reasons to consider it

1. Turn typed script parameters into runnable forms automatically. [1](https://www.windmill.dev/docs/intro)
2. Compose Python, TypeScript, Go, Bash, SQL and other language scripts into branching workflows. [1](https://www.windmill.dev/docs/intro)
3. Build custom React/Svelte interfaces backed by the same scripts and scheduled/webhook jobs. [1](https://www.windmill.dev/docs/intro)

## Corporate sponsorship

Status: **business-fallback**. Corporate sponsorship source checked. No separate corporate sponsor verified; accountable commercial steward included. [1](https://www.ycombinator.com/companies/windmill)

- [Windmill Labs, Inc.](https://www.windmill.dev): business-steward. [Evidence](https://www.ycombinator.com/companies/windmill).

## Self-operation requirements

Mode: **server**. PostgreSQL is platform state/queue, distinct from databases queried by user jobs. Current Compose example uses Postgres18. No claim that every advertised runtime is in every edition. [1](https://www.windmill.dev/docs/advanced/self_host)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Compose | one-of | runtime | Small single-host deployment | Server and worker containers. [1](https://www.windmill.dev/docs/advanced/self_host) |
| Kubernetes with official Helm chart | one-of | runtime | Larger production clusters | Recommended production orchestration; Windows workers can run without Docker under applicable edition. [1](https://www.windmill.dev/docs/advanced/self_host) |
| PostgreSQL | required | — | Always | State AND job queue; bundled or external/managed. No Redis queue required. [1](https://www.windmill.dev/docs/advanced/self_host) |
| Windmill server and workers | required | — | Always | Separate server/UI/API and worker processes, both connect to Postgres. [1](https://www.windmill.dev/docs/advanced/self_host) |
| LSP, multiplayer, reverse proxy | optional | — | Always | LSP editor intelligence; multiplayer commercial real-time collaboration; Caddy proxy bundled example, external TLS termination recommended. [1](https://www.windmill.dev/docs/advanced/self_host) |
| S3-compatible object storage | conditional | — | Enterprise global dependency cache, recommended above20 workers | Optional for base system; selected scripts may need additional APIs/databases/language dependencies. [1](https://www.windmill.dev/docs/advanced/self_host) |

Resources: CPU Rule of thumb1vCPU per worker; memory Rule of thumb1–2GB per worker; storage not specified; OS Linux container host; Kubernetes; Windows workers in applicable edition. Per-worker planning guidance, not a total installation minimum; database/server memory additional. [1](https://www.windmill.dev/docs/advanced/self_host)

## One-click and installer options

Status: **none-found**. Only verified official deployment options included; one-command installers labelled separately from one-click. Manual Docker Compose alone is not counted as one-click. [1](https://www.windmill.dev/docs/advanced/self_host)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/windmill.json) · [Claim ledger](../../research/profile-claims/windmill.jsonl) · [Research steps](../../research/profile-audits/windmill.md)
