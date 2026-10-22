> Temporary paths normalized; local setup omitted. Exact original retained locally.

# Medusa research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Opened pricing, production deployment, local installation and repository. /blog/series-a and /terms inaccessible; funding search on official blog returned none.
3. Searched `Medusa ecommerce funding investors LocalGlobe Dawn Capital`; read issuer Business Wire release mirrored on StreetInsider and investor Dawn portfolio. Seedcamp URL failed.
4. Searched official Railway deployment; old URL now Cloud-vs-self-hosting, third-party templates excluded.
5. Markdown deployment URL failed; ordinary HTML production guide contained PostgreSQL, Redis, worker topology and production storage/notification providers.

## Source review and decisions
- Open/read `https://www.dawncapital.com/companies/medusa`; public locator: Founded. Decision: Dawn Capital portfolio states Medusa founded in 2021.
- Open/read `https://medusajs.com/pricing`; public locator: Pricing; Enterprise. Decision: Founder-led investor-backed commercial platform with Medusa Cloud and Enterprise offers.
- Open/read `https://www.streetinsider.com/Business%2BWire/Medusa%2BRaises%2B%248m%2Bto%2BBuild%2Bthe%2BLeading%2BE-Commerce%2BPlatform%2Bfor%2BDevelopers/20329757.html`; public locator: Medusa Raises $8m. Decision: $8M seed led by LocalGlobe and Dawn Capital; named angels participated.
- Open/read `https://www.streetinsider.com/Business%2BWire/Medusa%2BRaises%2B%248m%2Bto%2BBuild%2Bthe%2BLeading%2BE-Commerce%2BPlatform%2Bfor%2BDevelopers/20329757.html`; public locator: Medusa Raises $8m. Decision: LocalGlobe is a documented equity investor; historical unless specified.
- Open/read `https://www.streetinsider.com/Business%2BWire/Medusa%2BRaises%2B%248m%2Bto%2BBuild%2Bthe%2BLeading%2BE-Commerce%2BPlatform%2Bfor%2BDevelopers/20329757.html`; public locator: Medusa Raises $8m. Decision: Dawn Capital is a documented equity investor; historical unless specified.
- Open/read `https://www.streetinsider.com/Business%2BWire/Medusa%2BRaises%2B%248m%2Bto%2BBuild%2Bthe%2BLeading%2BE-Commerce%2BPlatform%2Bfor%2BDevelopers/20329757.html`; public locator: Medusa Raises $8m. Decision: Anthony Casalena is a documented equity investor; historical unless specified.
- Open/read `https://www.streetinsider.com/Business%2BWire/Medusa%2BRaises%2B%248m%2Bto%2BBuild%2Bthe%2BLeading%2BE-Commerce%2BPlatform%2Bfor%2BDevelopers/20329757.html`; public locator: Medusa Raises $8m. Decision: Nicolas Dessaigne is a documented equity investor; historical unless specified.
- Open/read `https://www.streetinsider.com/Business%2BWire/Medusa%2BRaises%2B%248m%2Bto%2BBuild%2Bthe%2BLeading%2BE-Commerce%2BPlatform%2Bfor%2BDevelopers/20329757.html`; public locator: Medusa Raises $8m. Decision: Scott Williamson is a documented equity investor; historical unless specified.
- Open/read `https://github.com/medusajs/medusa`; public locator: License; Getting Started. Decision: Open-source core: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://medusajs.com/pricing`; public locator: Develop / Launch / Scale / Enterprise cards. Decision: No explicit Most popular or Recommended designation verified on the current public pricing page.
- Open/read `https://medusajs.com/pricing`; public locator: Scale — For scaling stores with growing traffic and teams. Decision: Scale: published; monthly=299; annual total=None; USD/cloud project base. Closest explicitly teams-oriented commercial Cloud plan. Starting monthly base; usage/add-ons extra. Not a paid self-host license.
- Open/read `https://medusajs.com/pricing`; public locator: Enterprise — Contact Us. Decision: Enterprise: quote; monthly=None; annual total=None; USD/organization. Tailored pricing; RBAC, SSO and audit logs require Enterprise license.
- Open/read `https://github.com/medusajs/medusa`; public locator: Building blocks for digital commerce. Decision: Composable product, cart, order and payment modules let developers change commerce behavior without rebuilding every primitive.
- Open/read `https://medusajs.com/blog/eight-sleep`; public locator: From Manual Scripts to Automated Workflows. Decision: Workflow orchestration with retries supports custom fulfillment processes spanning several systems.
- Open/read `https://www.dawncapital.com/companies/medusa`; public locator: commerce modules; customisable admin dashboard. Decision: Admin dashboard and multi-region commerce models help operate catalogs and orders across channels and markets.
- Open/read `https://github.com/medusajs/medusa`; public locator: Building blocks for digital commerce. Decision: Its composable commerce framework can accumulate reusable modules and deep custom workflow integrations, creating specialist switching costs.
- Open/read `https://github.com/medusajs/medusa`; public locator: Sponsor; Pricing. Decision: Repository Sponsor affordance and current commercial site checked; no named external corporate sponsor established. Verified commercial Medusa steward supplied as business fallback; investors are not sponsors.
- Open/read `https://medusajs.com/pricing`; public locator: Sponsor; Pricing. Decision: Medusa: business-steward
- Open/read `https://docs.medusajs.com/learn/installation`; public locator: Create Medusa Application Locally. Decision: Node.js v22.22.0+ LTS: required. Always. Next.js starter supports Node v24 LTS or lower in current docs.
- Open/read `https://docs.medusajs.com/learn/deployment/general`; public locator: What You’ll Deploy. Decision: PostgreSQL: required. Always. Documented deployment component.
- Open/read `https://docs.medusajs.com/learn/deployment/general`; public locator: What You’ll Deploy; Install Production Modules and Providers. Decision: Redis: required. Always. Sessions plus recommended production caching/event bus/workflow engine/locking modules.
- Open/read `https://docs.medusajs.com/learn/deployment/general`; public locator: Worker Mode. Decision: Medusa server and worker processes: required. Always. Two application instances in documented production topology.
- Open/read `https://docs.medusajs.com/learn/deployment/general`; public locator: Install Production Modules and Providers. Decision: S3-compatible file provider: conditional. Production uploaded-file storage. S3 or another production-ready file provider; local default intended for development.
- Open/read `https://docs.medusajs.com/learn/deployment/general`; public locator: Install Production Modules and Providers. Decision: SendGrid or another notification provider: conditional. Transactional notification delivery. External API/provider costs separate.
- Open/read `https://docs.medusajs.com/learn/deployment/general`; public locator: Install Production Modules and Providers. Decision: PostHog or other analytics provider: optional. Only if application analytics used. Documented deployment component.
- Open/read `https://docs.medusajs.com/learn/installation`; public locator: Create Medusa Application Locally. Decision: Next.js storefront: optional. Optional starter frontend; another frontend can call Store API. Documented deployment component.
- Open/read `https://docs.medusajs.com/learn/deployment/general`; public locator: What You’ll Deploy. Decision: {'cpu': None, 'memory': '2 GB minimum recommended by deployment guide', 'storage': None, 'os': None, 'notes': 'Guide says hosting plan should offer at least 2 GB for optimal experience; no fixed CPU/disk or OS published.'}
- Open/read `https://docs.medusajs.com/learn/deployment/general`; public locator: General Medusa Application Deployment Guide. Decision: none-found. Official local scaffold is one command for development, but current production guide is manual. Old Railway doc redirects to Cloud-vs-self-hosting; third-party Railway templates found without current official linking, so not promoted as verified options.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.
