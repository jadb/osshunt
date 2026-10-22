# Supabase self-hosted stack

[Product](https://supabase.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Supabase Inc (business); ownership: **private**; funding: **funded**.

Started 2020 (company-founded); years active: 6; years in business: 6. Ages are approximate calendar-year differences as of 2026-10-21.

Private venture-backed company, founded2020. June2026 SeriesF $500m included employee liquidity; company page reports approximately$1b raised. Historical/currently displayed institutions below, not ownership percentages. Developer-signup brands are customers/users, not sponsors. [1](https://www.ycombinator.com/companies/supabase) [2](https://supabase.com/company) [3](https://supabase.com/blog/series-f) [4](https://supabase.com/blog/supabase-series-e)

Known investors: [GIC](https://supabase.com/company), [Peak XV](https://supabase.com/company), [Accel](https://supabase.com/company), [Craft Ventures](https://supabase.com/company), [Coatue](https://supabase.com/company), [Y Combinator](https://supabase.com/company), [Stripe](https://supabase.com/company), [Felicis](https://supabase.com/company), [Salesforce Ventures](https://supabase.com/company), [Georgian](https://supabase.com/company), [Figma](https://supabase.com/company), [Mozilla](https://supabase.com/company), [Square Peg](https://supabase.com/blog/supabase-series-e).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Self-hosted open source | free | USD 0/account | — | — | — | unspecified | free self-hosted core. Open-source deployment distinct from Supabase Cloud Free and paid subscriptions; infrastructure separate. [1](https://supabase.com/docs/guides/self-hosting) |
| popular | Pro | published | USD 25/organization | — | — | USD 0.00325/additional monthly active user | unspecified | vendor commercial cloud. Explicit Most Popular. From$25/month with$10 compute credit; additional projects/compute and overages extra. MAU overage$0.00325 per user above100,000 included per month. No annual contract amount verified. [1](https://supabase.com/pricing) |
| business | Team | published | USD 599/organization starting base | — | — | — | unspecified | vendor commercial cloud. From$599/month including first project and$10 compute credit; extra projects/compute and usage charges apply. Annual amount not verified. [1](https://supabase.com/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | vendor commercial cloud. Custom; Contact Us; pricing by agreement. [1](https://supabase.com/pricing) |

## Defensibility assessments

- PostgreSQL compatibility, integrated APIs and a large developer ecosystem create adoption advantages; open protocols also reduce proprietary lock-in. [1](https://supabase.com/docs/guides/api) [2](https://supabase.com/company)

## Three product reasons to consider it

1. Generate a REST API and schema-reflected documentation directly from PostgreSQL tables and functions. [1](https://supabase.com/docs/guides/api)
2. Combine application authentication with PostgreSQL Row Level Security policies for granular data access. [1](https://supabase.com/docs/guides/database/postgres/row-level-security) [2](https://supabase.com/docs/guides/api)
3. Build collaboration through broadcasts, presence synchronization and database-change subscriptions. [1](https://supabase.com/docs/guides/realtime)

## Corporate sponsorship

Status: **business-fallback**. Corporate sponsorship source checked. No separate corporate sponsor verified; accountable commercial steward included. [1](https://supabase.com/company)

- [Supabase Inc](https://supabase.com): business-steward. [Evidence](https://supabase.com/company).

## Self-operation requirements

Mode: **server**. Single-project self-host stack; no Redis/cache service required by current Compose. Backend services are containerized; separate Node/Deno host install unnecessary. [1](https://supabase.com/docs/guides/self-hosting/docker) [2](https://raw.githubusercontent.com/supabase/supabase/master/docker/docker-compose.yml)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Engine/Compose or Docker Desktop | required | — | Always | Git required for manual route. [1](https://supabase.com/docs/guides/self-hosting/docker) |
| PostgreSQL17 | required | — | Always | Current compose17.6 image; external compatible Postgres configurable, not MySQL/SQLite. [1](https://raw.githubusercontent.com/supabase/supabase/master/docker/docker-compose.yml) |
| Envoy gateway; Auth, PostgREST, Studio, postgres-meta, Supavisor | required | — | Always | Standard stack; Kong optional gateway override. [1](https://raw.githubusercontent.com/supabase/supabase/master/docker/docker-compose.yml) |
| Realtime, Storage/imgproxy, Edge Runtime | optional | — | Always | Included by default; removable if unused. [1](https://supabase.com/docs/guides/self-hosting/docker) |
| Logflare and Vector | optional | — | Always | Analytics override; not default. [1](https://supabase.com/docs/guides/self-hosting/docker) |
| SMTP | conditional | — | Production email authentication/notifications | Use production mail server. [1](https://supabase.com/docs/guides/self-hosting/docker) |
| S3-compatible object storage | optional | — | Always | Local files default; AWS S3, RustFS/MinIO or R2. [1](https://supabase.com/docs/guides/self-hosting/docker) |
| OpenAI API credential | optional | — | Always | Studio AI Assistant only. [1](https://supabase.com/docs/guides/self-hosting/docker) |

Resources: CPU 2cores minimum;4+ recommended; memory 4GB minimum;8GB+ recommended; storage 40GB SSD minimum;80GB+ recommended; OS Linuxserver; Docker Desktop on Linux/macOS/Windows. Published whole-stack sizing; optional analytics increases needs. Workload and enabled components affect sizing. [1](https://supabase.com/docs/guides/self-hosting/docker)

## One-click and installer options

Status: **offered**. Only verified official deployment options included; one-command installers labelled separately from one-click. Manual Docker Compose alone is not counted as one-click. [1](https://supabase.com/docs/guides/self-hosting/docker)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Official Linux setup script](https://supabase.com/docs/guides/self-hosting/docker): **one-command**, first-party. One shell setup command installs prerequisites and generates config; separate run.sh start starts services. Not browser one-click. [1](https://supabase.com/docs/guides/self-hosting/docker)

[Structured profile](../../research/profiles/supabase.json) · [Claim ledger](../../research/profile-claims/supabase.jsonl) · [Research steps](../../research/profile-audits/supabase.md)
