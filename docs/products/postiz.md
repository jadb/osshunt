# Postiz

[Product](https://postiz.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Gitroom Limited (Postiz); Gitroom LLC holds platform approvals (business); ownership: **private**; funding: **bootstrapped**.

Started 2024 (product-launched); years active: 2; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official About identifies HongKong operating company and US approvals entity; founder-owned marketplace profile self-reports September2024 founding and bootstrapped stage. This is product launch context, not verified legal incorporation. No equity investors established. [1](https://postiz.com/about) [2](https://appsumo.com/products/postiz/questions/api-support-1499512/1499527/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open-source Postiz | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. AGPL core; production design editor needs independent commercial Polotno license; infrastructure/provider APIs separate. [1](https://github.com/gitroomhq/postiz-app) |
| popular | Ultimate | published | USD 99/account | USD 948/account | — | — | unspecified | vendor commercial cloud. Explicit Popular badge. Monthly$99; annual$79/month multiplied by12.100channels/unlimited team members. [1](https://postiz.com/pricing) |
| business | Team | published | USD 39/account | USD 372/account | — | — | unspecified | vendor commercial cloud. Named Team cloud plan: monthly$39; annual$31/month multiplied by12. [1](https://postiz.com/pricing) |
| enterprise | Enterprise | published | USD 2500/SaaS platform account including 5000 channels | — | — | — | unspecified | vendor commercial SaaS embedding / white-label offer. Enterprise Pricing page publishes $2500/mo in its Monthly view, including 5000 channels and unlimited users/posts/API calls. Separate SaaS embedding product scope from standard Team/Ultimate cloud. Page currently says not accepting new applications; published price is not a guarantee of availability. [1](https://postiz.com/enterprise) |

## Defensibility assessments

- Many channel adapters and automation interfaces create integration breadth and accumulated workflow switching costs; platform API rules constrain exclusivity. [1](https://postiz.com/about)

## Three product reasons to consider it

1. A visual calendar coordinates drafts and per-channel settings across social and community destinations. [1](https://postiz.com/about)
2. MCP, CLI, REST API and webhooks connect scheduling to external automation workflows. [1](https://postiz.com/about)
3. Evergreen content recycling and cross-channel analytics support repeated campaign refinement. [1](https://postiz.com/about)

## Corporate sponsorship

Status: **identified**. Sponsorship status limited to the official sources checked; donors and investors are not treated as corporate sponsors. [1](https://github.com/gitroomhq/postiz-app)

- [Hostinger](https://www.hostinger.com/): corporate-sponsor. [Evidence](https://github.com/gitroomhq/postiz-app).
- [Virlo](https://dev.virlo.ai/): corporate-sponsor. [Evidence](https://github.com/gitroomhq/postiz-app).

## Self-operation requirements

Mode: **server**. Default canonical Compose includes appPostgres+Redis+Temporal and TemporalPostgres+Elasticsearch; UI/admin-tools are operational conveniences. External Temporal can replace bundled stack. Do not omit Temporal visibility/database services when using default stack. [1](https://docs.postiz.com/self-host/installation/docker-compose)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker application image with web/backend/workers | required | — | Documented default route. | Documented production component. [1](https://docs.postiz.com/self-host/installation/docker-compose) |
| PostgreSQL14+ | required | — | Postiz application database; canonical stack currently17-alpine. | Documented production component. [1](https://docs.postiz.com/self-host/installation/system-requirements) |
| Redis6+ | required | — | Postiz cache/queue; canonical stack7.2. | Documented production component. [1](https://docs.postiz.com/self-host/installation/system-requirements) |
| Temporal | required | — | Scheduling/workflow service sincev2.12. | Documented production component. [1](https://docs.postiz.com/self-host/installation/system-requirements) |
| PostgreSQL16 for Temporal | conditional | — | Required by canonical bundled Temporal stack; separate from application DB. | Documented production component. [1](https://raw.githubusercontent.com/gitroomhq/postiz-docker-compose/main/docker-compose.yaml) |
| Elasticsearch7.17.27 for Temporal visibility | conditional | — | Required by canonical bundled stack, ENABLE_ES=true. | Documented production component. [1](https://raw.githubusercontent.com/gitroomhq/postiz-docker-compose/main/docker-compose.yaml) |
| Persistent local uploads | one-of | media-storage | Default STORAGE_PROVIDER=local. | Documented production component. [1](https://docs.postiz.com/self-host/installation/system-requirements) |
| Cloudflare R2 object storage | one-of | media-storage | Alternative STORAGE_PROVIDER=cloudflare. | Documented production component. [1](https://docs.postiz.com/self-host/installation/system-requirements) |
| Social developer credentials and OAuth approvals | required | — | For enabled publishing networks; outbound HTTPS required. | Documented production component. [1](https://docs.postiz.com/self-host/installation/system-requirements) |
| Polotno commercial SDK license/API key | conditional | — | Production image/video design-editor workflow only. | Documented production component. [1](https://docs.postiz.com/self-host/configuration/polotno) |
| AI provider credentials | conditional | — | Only AI generation workflows; external usage billing. | Documented production component. [1](https://raw.githubusercontent.com/gitroomhq/postiz-docker-compose/main/docker-compose.yaml) |
| SMTP/Resend delivery | conditional | — | Only email notification/invitation delivery. | Documented production component. [1](https://raw.githubusercontent.com/gitroomhq/postiz-docker-compose/main/docker-compose.yaml) |
| Spotlight | optional | — | Debug profile only; not required production component. | Documented production component. [1](https://raw.githubusercontent.com/gitroomhq/postiz-docker-compose/main/docker-compose.yaml) |

Resources: CPU 2vCPU floor;4vCPU recommended; memory 2GB light single-user floor;8GB recommended;4GB+ for additional load; storage 20GB floor;50GB+ recommended plus uploads; OS Docker-capable Linux; tested Ubuntu24.04. Official small-team sizing≤20users; source build can exceed2GB. These are documented starting points, not workload guarantees. [1](https://docs.postiz.com/self-host/installation/system-requirements)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual Docker Compose or source installation does not qualify as one-click. [1](https://docs.postiz.com/self-host/installation/docker-compose)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/postiz.json) · [Claim ledger](../../research/profile-claims/postiz.jsonl) · [Research steps](../../research/profile-audits/postiz.md)
