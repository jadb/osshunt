# Node-RED

[Product](https://nodered.org) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Node-RED / OpenJS Foundation (foundation); ownership: **nonprofit**; funding: **not-applicable**.

Started 2013 (project-started); years active: 13; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Project began2013 at IBM; OpenJS Foundation project, rather than FlowFuse-owned software. Equity funding is not applicable to the project; sponsor financing is not project equity. [1](https://nodered.org/about/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Node-RED core | free | USD 0/account | — | — | — | unspecified | free self-hosted core. Apache-licensed project runtime; commercial products built around it are distinct. [1](https://nodered.org/about/) |
| popular | unknown | unknown | — | — | — | — | unspecified | Node-RED core. No explicit Most popular or Recommended plan designation verified in the pricing source; no plan inferred. [1](https://nodered.org/about/) |
| business | unknown | not-offered | — | — | — | — | unspecified | Node-RED core. No project business license tier listed. FlowFuse commercial platform is a separate product, not substituted. [1](https://nodered.org/about/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | Node-RED core. No project enterprise license tier listed; downstream commercial offerings are separate. [1](https://nodered.org/about/) |

## Defensibility assessments

- A mature edge-automation node and flow ecosystem creates reusable know-how and compatibility value; open JSON flows also reduce lock-in. [1](https://nodered.org/about/)

## Three product reasons to consider it

1. Wire message-driven processes visually and insert JavaScript functions where logic needs code. [1](https://nodered.org/about/)
2. Integrate device and service protocols through a community palette of thousands of nodes. [1](https://nodered.org/about/)
3. Share and reuse JSON flows through import/export and the public flow library. [1](https://nodered.org/about/)

## Corporate sponsorship

Status: **identified**. Corporate sponsorship source checked. Listed organizations explicitly support the project; customers and investors excluded. [1](https://nodered.org/about/) [2](https://flowfuse.com/blog/2025/11/flowfuse%2Bllm%2Bmcp-equals-text-driven-operations/)

- [FlowFuse](https://flowfuse.com): corporate-sponsor. [Evidence](https://flowfuse.com/blog/2025/11/flowfuse%2Bllm%2Bmcp-equals-text-driven-operations/).

## Self-operation requirements

Mode: **server**. Core is a Node.js event-driven server with browser editor; not a central SQL-backed SaaS clone. Secure editor/HTTP endpoints for production. No generic external Redis, SQL or SMTP service is required by core. [1](https://nodered.org/docs/getting-started/local) [2](https://nodered.org/docs/faq/node-versions)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Node.js and npm | one-of | runtime | Native installation | Current docs recommend Node24; Node-RED5.x needs Node22 minimum,4.x needs18. Installed third-party nodes can have additional requirements. [1](https://nodered.org/docs/faq/node-versions) |
| Docker | one-of | runtime | Container installation | Official container bundles runtime; external Node.js install unnecessary for this route. [1](https://nodered.org/docs/getting-started/local) |
| Persistent local user directory | required | — | Always | Flows/settings stored on disk; default context memory. No SQL database/cache/queue required for core. [1](https://nodered.org/docs/getting-started/local) |
| Git / compiler toolchain / external services | conditional | — | Git Projects, native add-on nodes or selected integration flows | Git for Projects; gcc for native components; MQTT/database/API services only as chosen flows require. [1](https://nodered.org/docs/getting-started/local) |

Resources: CPU not specified; memory not specified; storage not specified; OS Node.js-supported Linux/macOS/Windows; Docker host. Hardware minima not specified in the checked deployment source; size for workload. [1](https://nodered.org/docs/getting-started/local)

## One-click and installer options

Status: **offered**. Only verified official deployment options included; one-command installers labelled separately from one-click. Manual Docker Compose alone is not counted as one-click. [1](https://nodered.org/docs/getting-started/local)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [npm global installation](https://nodered.org/docs/getting-started/local): **one-command**, first-party. One npm installation command after installing supported Node.js; run node-red separately. [1](https://nodered.org/docs/getting-started/local)

[Structured profile](../../research/profiles/node-red.json) · [Claim ledger](../../research/profile-claims/node-red.jsonl) · [Research steps](../../research/profile-audits/node-red.md)
