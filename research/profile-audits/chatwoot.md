> Temporary paths normalized; local setup omitted. Exact original retained locally.

# chatwoot — research audit 2026-10-21


1. Opened cloud and self-host pricing; separated scopes.
2. Query: site.chatwoot.com seed funding 2021 investors founded. Found primary investor handbook via search; read YC company profile for founding. /about inaccessible.
3. Opened requirements, Docker production and environment-variable docs. /deployment/digital-ocean failed404; clicked official navigation to /digitalocean successfully.
4. Read DigitalOcean guide, which explicitly links 1-click Kubernetes marketplace app. No sponsorship source identified; business fallback used, investors not sponsors.
5. Runtime versions from current docs; Node/pnpm classified as build tooling rather than extra network service.

Primary URLs read / decisions documented in claim ledger:
- https://www.ycombinator.com/companies/chatwoot
- https://chatwoot.help/hc/handbook/articles/investors-27
- https://www.chatwoot.com/pricing/self-hosted-plans
- https://www.chatwoot.com/pricing
- https://developers.chatwoot.com/self-hosted/deployment/requirements
- https://developers.chatwoot.com/self-hosted/configuration/environment-variables
- https://developers.chatwoot.com/self-hosted/deployment/docker

Persistence command: execute group-local build script; write profile JSON, claims JSONL, and audit markdown. Amounts unknown where billing term or numeric price could not be established. Assessments explicitly distinguished from vendor facts.

Final QA: schema validated all 22 profiles. Commands: python3 records01.py through records06.py (group-local absolute paths); python3 finalize.py; node scripts/validate-profiles.mjs profiles. Initial `python` executable absent; used python3. Claim headings normalized to public page sections/searchable phrases; no JSON machine field used as locator. Full public fetch-result chronology retained in group-local research-web-log.txt (research batches 1–46), including failed URL attempts. Validation command only reads profile files when custom directory supplied; separate parseClaims check validates ledgers.
