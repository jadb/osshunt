# tldraw SDK

[Product](https://tldraw.dev) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

tldraw (business); ownership: **private**; funding: **funded**.

Started 2021 (project-started); years active: 5; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official founder announcement dates side-project start to2021, not company incorporation. April2025 $10M Series A led by Lux Capital and Definition; historical investors, no ownership percentages. Current SDK source-available development-only by default. [1](https://tldraw.dev/blog/announcing-tldraw-series-a) [2](https://tldraw.dev/community/license)

Known investors: [Lux Capital](https://tldraw.dev/blog/announcing-tldraw-series-a), [Definition](https://tldraw.dev/blog/announcing-tldraw-series-a).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | SDK commercial license | quote | — | — | — | — | unspecified | paid production SDK license. Value-based sales quote. Free 100-day evaluation and discretionary noncommercial hobby license distinct from commercial entry. [1](https://tldraw.dev/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | paid product. No public designation or amount established from checked pricing page. [1](https://tldraw.dev/pricing) |
| business | SDK commercial license | quote | — | — | — | — | unspecified | paid production SDK license. Closest business offering; startup discount application available, no published amount. [1](https://tldraw.dev/pricing) |
| enterprise | unknown | unknown | — | — | — | — | unspecified | paid production SDK license. No distinct named enterprise tier found; commercial license sales-led. Do not invent separate enterprise plan. [1](https://tldraw.dev/pricing) |

## Defensibility assessments

- Specialized extensible canvas infrastructure and integration work create switching costs for applications built on the SDK. [1](https://tldraw.dev/quick-start)

## Three product reasons to consider it

1. Custom shapes, tools and interactions adapt the canvas to domain applications. [1](https://tldraw.dev/quick-start)
2. Runtime editor API can create and control canvas content programmatically. [1](https://tldraw.dev/quick-start)
3. Realtime cursors, viewport following and cursor chat support collaborative canvas workflows. [1](https://tldraw.dev/quick-start)

## Corporate sponsorship

Status: **business-fallback**. No corporate sponsor roster established in checked official pages. Verified SDK business included; investors/customers excluded as sponsors. [1](https://tldraw.dev/community/license)

- [tldraw](https://tldraw.dev/): business-steward. [Evidence](https://tldraw.dev/community/license).

## Self-operation requirements

Mode: **hybrid**. SDK operates single-user in browser with local persistence; multiplayer production requires your sync backend. Cloudflare template uses Durable Objects SQLite/R2; custom WebSocket JavaScript backend supported. Valid license needed for production. [1](https://tldraw.dev/docs/sync) [2](https://tldraw.dev/quick-start) [3](https://tldraw.dev/community/license)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| React application and browser runtime | required | — | Always | Local runtime component; bundled by official binary where applicable. [1](https://tldraw.dev/quick-start) |
| Node.js/package manager | conditional | — | SDK build and npm scaffolding | Build tooling; not evidence of a mandatory separate production Node server. [1](https://tldraw.dev/quick-start) |
| Cloudflare Workers/Durable Objects with embedded SQLite | one-of | sync-runtime | Recommended multiplayer template backend | Local runtime component; bundled by official binary where applicable. [1](https://tldraw.dev/docs/sync) |
| JavaScript server supporting WebSockets | one-of | sync-runtime | Custom multiplayer backend; Node example provided | Local runtime component; bundled by official binary where applicable. [1](https://tldraw.dev/docs/sync) |
| SQLite | conditional | — | Recommended production persistence for custom sync backend | In-memory storage default loses restart data; snapshot persistence can be integrated with own database. [1](https://tldraw.dev/docs/sync) |
| Cloudflare R2 | conditional | — | Binary assets on recommended Cloudflare template | Own backend can implement another asset-store provider. [1](https://tldraw.dev/docs/sync) |
| Asset upload/download storage provider | conditional | — | Custom multiplayer backend with image/video assets | Separate from document-state persistence. [1](https://tldraw.dev/docs/sync) |
| URL unfurling service | conditional | — | Built-in bookmark shape metadata | Local runtime component; bundled by official binary where applicable. [1](https://tldraw.dev/docs/sync) |
| Application authentication/authorization and upload limits | conditional | — | Production collaboration access control | Must add yourself; template does not supply complete application security. [1](https://tldraw.dev/docs/sync) |

Resources: CPU not specified; memory not specified; storage not specified; OS Browser; Cloudflare or WebSocket-capable JavaScript server platform. No universal CPU/RAM/storage minimum published; size and concurrent rooms determine capacity. Hosted demo sync suitable only for prototyping. [1](https://tldraw.dev/docs/sync)

## One-click and installer options

Status: **offered**. Checked official deployment documentation; manual Docker Compose is not a one-click offer. [1](https://tldraw.dev/docs/sync)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [npm create tldraw](https://tldraw.dev/quick-start): **one-command**, first-party. Official starter scaffolding command, not an installed production server; license and backend deployment still required. [1](https://tldraw.dev/quick-start)

[Structured profile](../../research/profiles/tldraw.json) · [Claim ledger](../../research/profile-claims/tldraw.jsonl) · [Research steps](../../research/profile-audits/tldraw.md)
