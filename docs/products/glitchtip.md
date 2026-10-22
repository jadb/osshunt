# GlitchTip

[Product](https://glitchtip.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Burke Software and Consulting (business); ownership: **private**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official Who is making this identifies Burke Software and Consulting as creator; HIPAA page identifies Burke Software as operator. Exact company formation year, outside equity funding and investors not disclosed in reviewed pages; unknown rather than bootstrapped. [1](https://glitchtip.com/) [2](https://glitchtip.com/hipaa/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Self-hosted | free | USD 0/organization | — | — | — | unspecified | free self-hosted core. Self-hosted version runs on own server; optional infrastructure charges separate. Hosted Free has 1, 000 events/month. [1](https://glitchtip.com/pricing/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No public designation or verified amount found in reviewed pricing page. [1](https://glitchtip.com/pricing/) |
| business | Medium | published | USD 50/organization | — | — | — | unspecified | vendor commercial cloud. Hosted plan for growing businesses; up to 500, 000 events/month. Annual discount exists but annual total is not published. [1](https://glitchtip.com/pricing/) |
| enterprise | Enterprise / HIPAA contract | quote | — | — | — | — | unspecified | vendor commercial cloud. HIPAA page invites contact to discuss Enterprise pricing. Hosted Large separately lists $250/month; no fabricated custom-contract amount. [1](https://glitchtip.com/hipaa/) |

## Defensibility assessments

- Sentry protocol compatibility reduces adoption friction, while the open protocol also limits proprietary lock-in as a moat. [1](https://glitchtip.com/)

## Three product reasons to consider it

1. Sentry-compatible SDK ingestion can preserve familiar application instrumentation while changing error triage backend. [1](https://glitchtip.com/)
2. Error, uptime and performance views combine failure investigation with availability checks. [1](https://glitchtip.com/)
3. Unlimited projects and team membership simplify organizing error work across applications. [1](https://glitchtip.com/pricing/)

## Corporate sponsorship

Status: **business-fallback**. Reviewed project/company sources; no separate corporate sponsor verified. Verified business steward supplied as fallback. [1](https://glitchtip.com/)

- [Burke Software and Consulting](https://glitchtip.com/): business-steward. [Evidence](https://glitchtip.com/).

## Self-operation requirements

Mode: **server**. Current guide documents all-in-one and separate worker routes; Postgre SQL required, Redis/Valkey optional. Hardware guide is not a workload guarantee. [1](https://glitchtip.com/documentation/install/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker runtime or Kubernetes/Helm route | required | — | Always | Production dependency documented by project. [1](https://glitchtip.com/documentation/install/) |
| Postgre SQL 14+ | required | — | Always | Production dependency documented by project. [1](https://glitchtip.com/documentation/install/) |
| All-in-one service or separate web/worker services | one-of | application-runtime | Choose deployment size | All-in-one supports small instances; separate workers scale independently. [1](https://glitchtip.com/documentation/install/) |
| Valkey or Redis 7+ | optional | — | Enable for larger/faster deployments | Current guide explicitly optional, not a universal production requirement. [1](https://glitchtip.com/documentation/install/) |
| SMTP/email transport | conditional | — | When outbound email is needed | EMAIL_URL may use consolemail:// if no email desired. [1](https://glitchtip.com/documentation/install/) |
| S 3-compatible object storage | optional | — | External file uploads/sourcemaps route | Railway buckets are a documented option. [1](https://glitchtip.com/documentation/install/) |
| nginx or Apache reverse proxy and TLS | conditional | — | Public production ingress | Request-buffering proxy recommended. [1](https://glitchtip.com/documentation/install/) |

Resources: CPU x 86 or arm 64; memory 512 MB recommended; 256 MB minimum all-in-one; storage Usage-dependent; example 30 GB for 1 million events/month; OS Docker-capable server. Guide allows carefully configured 128 MB plus swap; 512 MB is recommended, disk figure is an example. [1](https://glitchtip.com/documentation/install/)

## One-click and installer options

Status: **offered**. Official guide links Railway, Pika Pods, Elestio, Nodion and Repo Cloud. Railway template verified; ordinary Compose instructions kept separate. [1](https://glitchtip.com/documentation/install/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Railway Glitch Tip template](https://railway.com/new/template/glitchtip): **one-click**, officially-linked-third-party. Official installation page links template deploying all-in-one app, Postgre SQL and Redis. [1](https://glitchtip.com/documentation/install/)

[Structured profile](../../research/profiles/glitchtip.json) · [Claim ledger](../../research/profile-claims/glitchtip.jsonl) · [Research steps](../../research/profile-audits/glitchtip.md)
