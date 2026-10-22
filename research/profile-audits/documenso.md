> Temporary paths normalized; local setup omitted. Exact original retained locally.

# Documenso research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Read current pricing and self-host editions; Business Edition fixed yearly license has no published amount, unlike cloud Teams.
3. /about and guessed announcement URL inaccessible; official blog archive exposes December2022 announcement, release planned2023. Read pre-seed post for historical investor evidence.
4. Read current requirements, including PostgreSQL-only database, signing certificate, mail alternatives and PostgreSQL/BullMQ/Inngest job providers.
5. Followed Railway from official self-host overview. Repository sponsor search yielded no named sponsor; used verified business fallback.

## Source review and decisions
- Open/read `https://documenso.com/blog`; public locator: Announcing Documenso. Decision: Official blog archive dates Announcing Documenso to December 29, 2022, with first release planned 2023.
- Open/read `https://documenso.com/self-hosted`; public locator: Community / Business / Enterprise comparison; footer. Decision: Commercial Documenso, Inc. offers self-host license editions.
- Open/read `https://documenso.com/blog/pre-seed`; public locator: Announcing Pre-Seed and Open Metrics. Decision: Pre-seed announcement identifies OSS Capital and John Harrison; $1.25M round, $1.54M total.
- Open/read `https://documenso.com/blog/pre-seed`; public locator: Announcing Pre-Seed and Open Metrics. Decision: OSS Capital is a documented equity investor; historical unless specified.
- Open/read `https://documenso.com/blog/pre-seed`; public locator: Announcing Pre-Seed and Open Metrics. Decision: John Harrison is a documented equity investor; historical unless specified.
- Open/read `https://documenso.com/self-hosted`; public locator: Community / Business / Enterprise comparison. Decision: Community Edition: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://documenso.com/pricing`; public locator: Individual / Teams / Platform cards. Decision: No explicit Most popular or Recommended designation verified on the current public pricing page.
- Open/read `https://documenso.com/self-hosted`; public locator: Community / Business / Enterprise comparison. Decision: Business Edition: unknown; monthly=None; annual total=None; USD/site. Paid self-host license with fixed yearly billing is explicitly offered; amount not published in reviewed comparison. Distinct cloud Teams plan is $480/year for five users, $40/month annual equivalent.
- Open/read `https://documenso.com/self-hosted`; public locator: Community / Business / Enterprise comparison. Decision: Enterprise Edition: quote; monthly=None; annual total=None; USD/organization. Tailored Pricing; contact for organization-specific offer. Infrastructure and maintenance responsibilities remain separate.
- Open/read `https://documenso.com/blog`; public locator: Launch Week II — Day 2 — Templates. Decision: Reusable templates and team sharing reduce repeated setup of recurring signature requests.
- Open/read `https://documenso.com/blog`; public locator: Launching Direct Links. Decision: Direct links let recipients initiate signing without waiting for an individually addressed invitation.
- Open/read `https://documenso.com/blog`; public locator: Announcing Documenso 2.0. Decision: Multi-document envelopes and API V2 support automating a complete signature package within another application.
- Open/read `https://github.com/documenso/documenso`; public locator: The Open Source DocuSign Alternative; Features. Decision: Developer-oriented signing APIs and reusable signing workflows can create integration switching costs, while open core keeps base technology contestable.
- Open/read `https://github.com/documenso/documenso`; public locator: README; self-hosted editions; footer. Decision: No named independent corporate financial sponsor verified in repository or commercial pages; verified Documenso, Inc. business supplied as steward fallback. OSS Capital is an investor, not counted as sponsor.
- Open/read `https://documenso.com/self-hosted`; public locator: README; self-hosted editions; footer. Decision: Documenso, Inc.: business-steward
- Open/read `https://docs.documenso.com/docs/self-hosting/getting-started/requirements`; public locator: PostgreSQL Database. Decision: PostgreSQL 14+: required. Always. Primary data and default document storage. MySQL/SQLite/MongoDB not supported; pooler optional.
- Open/read `https://docs.documenso.com/docs/self-hosting/getting-started/requirements`; public locator: Email Server. Decision: SMTP: one-of. SMTP auth/API OR Resend OR MailChannels. Documented deployment component.
- Open/read `https://docs.documenso.com/docs/self-hosting/getting-started/requirements`; public locator: Email Server. Decision: Resend API: one-of. Resend OR SMTP OR MailChannels. Documented deployment component.
- Open/read `https://docs.documenso.com/docs/self-hosting/getting-started/requirements`; public locator: Email Server. Decision: MailChannels API: one-of. MailChannels OR SMTP OR Resend. Documented deployment component.
- Open/read `https://docs.documenso.com/docs/self-hosting/getting-started/requirements`; public locator: Signing Certificate. Decision: X.509 .p12 signing certificate: required. Always. Not bundled; self-signed or CA-issued; Google Cloud HSM is another documented signing option.
- Open/read `https://docs.documenso.com/docs/self-hosting/getting-started/requirements`; public locator: Reverse Proxy. Decision: HTTPS reverse proxy: required. Always. Nginx/Caddy/Traefik/HAProxy or cloud load balancer.
- Open/read `https://docs.documenso.com/docs/self-hosting/getting-started/requirements`; public locator: Build Requirements; Supported Platforms. Decision: Node.js runtime or Docker image: required. Always. Source build requires Node24+ and npm11.17+; bundled images avoid local build tooling.
- Open/read `https://docs.documenso.com/docs/self-hosting/getting-started/requirements`; public locator: Background Jobs. Decision: PostgreSQL-based job queue: one-of. Default queue OR BullMQ/Redis OR Inngest. Uses existing database; no extra broker.
- Open/read `https://docs.documenso.com/docs/self-hosting/getting-started/requirements`; public locator: Background Jobs. Decision: BullMQ with Redis 6.2+: one-of. Alternative job provider selected. Documented deployment component.
- Open/read `https://docs.documenso.com/docs/self-hosting/getting-started/requirements`; public locator: Background Jobs. Decision: Inngest: one-of. Alternative managed/cloud job provider selected. External service keys required.
- Open/read `https://docs.documenso.com/docs/self-hosting/getting-started/requirements`; public locator: Document Storage. Decision: S3-compatible object storage: optional. External documents instead of default PostgreSQL. S3, R2, Spaces or compatible self-host provider; not baseline required.
- Open/read `https://docs.documenso.com/docs/self-hosting/getting-started/requirements`; public locator: Hardware Requirements; Supported Platforms. Decision: {'cpu': '2+ cores production recommended', 'memory': '2+ GB production recommended', 'storage': '20+ GB production recommended', 'os': 'Modern Linux; Docker/Kubernetes/PaaS; Windows via Docker or WSL2', 'notes': 'Testing minimum1core/1GB/10GB distinct from production recommendation; size documents separately.'}
- Open/read `https://docs.documenso.com/docs/self-hosting/deployment/railway`; public locator: One-Click Deploy. Decision: offered. First-party documented Railway one-click deployment; manual Docker Compose is a separate route.
- Open/read `https://docs.documenso.com/docs/self-hosting/deployment/railway`; public locator: One-Click Deploy. Decision: Official Railway deployment guide: one-click. Official docs explicitly provide one-click template flow provisioning app and PostgreSQL; SMTP and signing certificate still need configuration.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.
