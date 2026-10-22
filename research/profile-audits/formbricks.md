> Temporary paths normalized; local setup omitted. Exact original retained locally.

# Formbricks Community Edition research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Opened pricing, About, blog history and licensing. Old self-hosting/deployment and /docker paths redirect to generic docs; followed navigation to /self-hosting/overview.
3. Read stable Docker Compose and current v6 overview. Current architecture adds Hub worker, Cube and SpiceDB; captured optional taxonomy/vLLM separately.
4. Followed One-Click Setup link and read installer command; classified accurately as one-command.
5. Read GitHub Accelerator sponsorship announcement; historical sponsorship caveat retained. Pricing toggle state unresolved, so Pro/Scale price fields unknown despite displayed reference amounts.

## Source review and decisions
- Open/read `https://formbricks.com/blog`; public locator: snoopForms → Formbricks; Formbricks v1. Decision: Official blog archive dates snoopForms-to-Formbricks rebrand to November 2022 and earlier project work to 2022.
- Open/read `https://formbricks.com/about`; public locator: European-grade privacy. Decision: Formbricks is a German GmbH.
- Open/read `https://formbricks.com/about`; public locator: Backed by world-class investors. Decision: Company says it raised from OSS Capital.
- Open/read `https://formbricks.com/about`; public locator: Backed by world-class investors. Decision: OSS Capital is a documented equity investor; historical unless specified.
- Open/read `https://formbricks.com/docs/self-hosting/advanced/license`; public locator: License. Decision: Community Edition: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://formbricks.com/pricing`; public locator: Pro — Most popular. Decision: Pro: unknown; monthly=None; annual total=None; USD/site. Pro explicitly Most popular and displays $74/Month. Static view did not establish selected monthly-versus-annual billing state; numeric subscription fields withheld rather than assigning the wrong term. Scope is commercial Cloud.
- Open/read `https://formbricks.com/pricing`; public locator: Scale — Governance. Decision: Scale: unknown; monthly=None; annual total=None; USD/site. Closest organizational tier with Teams & access roles and workflows; displays $325/Month. Billing-toggle state not established in static extract, so monthly/annual amount remains unresolved. Scope commercial Cloud.
- Open/read `https://formbricks.com/docs/self-hosting/overview`; public locator: Licensing options comparison; licensing queries. Decision: Enterprise Edition: quote; monthly=None; annual total=None; USD/organization. Core free; advanced features require EE license. Contact licensing team for commercial terms; no verified public amount.
- Open/read `https://formbricks.com/pricing`; public locator: Core Survey Features. Decision: Link, website and in-app surveys let teams collect feedback in the user journey rather than only by a standalone form.
- Open/read `https://formbricks.com/pricing`; public locator: Core Survey Features. Decision: Conditional logic, recalled information and hidden fields support context-aware survey paths.
- Open/read `https://formbricks.com/pricing`; public locator: Core Survey Features. Decision: Partial responses and file uploads capture unfinished or richer feedback within survey results.
- Open/read `https://formbricks.com/docs/self-hosting/advanced/license`; public locator: License; Community vs Enterprise features. Decision: Survey targeting and an extensible experience-management workflow can create integration switching costs; proprietary EE gates qualify the open-core differentiation.
- Open/read `https://formbricks.com/blog/inaugural-batch-github-accelerator`; public locator: From now on, we’re official sponsored by GitHub. Decision: Official April 2023 announcement explicitly states GitHub sponsorship through the inaugural Accelerator. This is verified historical program sponsorship; continuing 2026 financial support was not established.
- Open/read `https://formbricks.com/blog/inaugural-batch-github-accelerator`; public locator: From now on, we’re official sponsored by GitHub. Decision: GitHub: corporate-sponsor
- Open/read `https://formbricks.com/docs/self-hosting/overview`; public locator: Self-hosting options. Decision: Docker Compose or Kubernetes: one-of. Docker single-host route OR Kubernetes Helm route. Documented deployment component.
- Open/read `https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml`; public locator: services: postgres. Decision: PostgreSQL with pgvector: required. Always. Current stable compose uses pgvector/pgvector:pg18.
- Open/read `https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml`; public locator: Redis/Valkey service for caching, rate limiting, and audit logging. Decision: Valkey: one-of. Bundled Valkey OR external Redis/Valkey. Documented deployment component.
- Open/read `https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml`; public locator: Redis/Valkey service for caching, rate limiting, and audit logging. Decision: Redis: one-of. External Redis OR bundled Valkey. Documented deployment component.
- Open/read `https://formbricks.com/docs/self-hosting/overview`; public locator: System requirements. Decision: Formbricks app, Hub API and Hub worker: required. Always. v6 multi-service baseline, not a single app container.
- Open/read `https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml`; public locator: cube. Decision: Cube analytics service: required. Always. Semantic layer API with PostgreSQL and memory queue driver in compose.
- Open/read `https://formbricks.com/docs/self-hosting/setup/one-click`; public locator: Deployment. Decision: SpiceDB and authorization datastore: required. Always. Bundled for all new installs, no EE license check; uses PostgreSQL datastore.
- Open/read `https://formbricks.com/docs/self-hosting/setup/one-click`; public locator: Requirements. Decision: HTTPS reverse proxy / Traefik: required. Always. Public domain and open ports 80/443 for certificate issuance.
- Open/read `https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml`; public locator: Optional AI taxonomy beta service. Decision: AI taxonomy service and model provider: optional. Enable taxonomy compose profile. OpenAI-compatible, Vertex or Bedrock credentials; separate provider costs.
- Open/read `https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml`; public locator: Optional bundled Qwen/vLLM. Decision: Local Qwen/vLLM GPU runtime: optional. Enable qwen compose profile. NVIDIA GPU reservation; not baseline.
- Open/read `https://formbricks.com/docs/self-hosting/overview`; public locator: Single server or Kubernetes. Decision: Object storage: conditional. Recommended managed service in production Kubernetes deployment. Documented deployment component.
- Open/read `https://formbricks.com/docs/self-hosting/overview`; public locator: System requirements; Single server or Kubernetes. Decision: {'cpu': '2 vCPU evaluation; 4 vCPU low load', 'memory': '4 GB floor evaluation; 8 GB low load', 'storage': '20 GB SSD evaluation; 50 GB SSD low load', 'os': 'Ubuntu for shell installer; Docker-compatible host or Kubernetes otherwise', 'notes': 'Published single-server sizing derived from chart defaults, not load-tested. Kubernetes recommendation starts 3 nodes of 4 vCPU/8 GB with managed database/cache/object storage.'}
- Open/read `https://formbricks.com/docs/self-hosting/setup/one-click`; public locator: Requirements; Deployment. Decision: offered. Verified shell installer; classified one-command, not a graphical one-click marketplace.
- Open/read `https://formbricks.com/docs/self-hosting/setup/one-click`; public locator: Deployment. Decision: Formbricks Ubuntu shell installer: one-command. Documentation calls it One-Click Setup but it is a command-line shell installer, with SSH, domain and ports configured first.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.
