> Temporary paths normalized; local setup omitted. Exact original retained locally.

# OpenSign research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Original /pricing returned404; followed current homepage Pricing link to /plans-pricing. Extract contains only navigation/footer; searched official pricing and docs without verified amount, preserved unknowns.
3. Installation guessed routes failed; followed repository Installation Guide to current Docker docs, then official One-click-Install DigitalOcean.
4. Read current main compose and documented ENV reference for database, local/S3 storage, SMTP/Mailgun and certificate. No sample secret values copied into outputs.
5. Searched official funding/investor sources; none verified. Terms establishes Qik Innovations business steward; launch post establishes October2023 product start.

## Source review and decisions
- Open/read `https://www.opensignlabs.com/post/opensign-the-enterprise-grade-open-source-docusign-alternative`; public locator: Introducing OpenSign. Decision: Official launch announcement dated October9,2023.
- Open/read `https://www.opensignlabs.com/terms-and-conditions`; public locator: Terms and Conditions for OpenSign by Qik Innovations. Decision: OpenSign SaaS developed and maintained by Qik Innovations Private Limited.
- Open/read `https://www.opensignlabs.com/post/opensign-the-enterprise-grade-open-source-docusign-alternative`; public locator: Introducing OpenSign. Decision: Official site, launch, contact and repository reviewed; no primary funding disclosure verified.
- Open/read `https://www.opensignlabs.com/faqs`; public locator: Is OpenSign really free?. Decision: Free self-hosted edition: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://www.opensignlabs.com/plans-pricing`; public locator: Pricing. Decision: Current official pricing URL renders navigation/footer only; no plan cards or popularity designation available in retrieved content.
- Open/read `https://www.opensignlabs.com/plans-pricing`; public locator: Pricing. Decision: Current pricing content could not be verified. Official FAQ confirms paid advanced features, but no named organizational plan/amount established.
- Open/read `https://www.opensignlabs.com/plans-pricing`; public locator: Pricing. Decision: Enterprise features mentioned by docs, but current sales tier and amount unresolved. Failed/dynamic fetch is not evidence the offer is absent.
- Open/read `https://github.com/OpenSignLabs/OpenSign`; public locator: Features — Multi-signer Support; Email Unique Code verification. Decision: Sequential multi-signer invitations and guest email OTP verification support controlled signing without recipient accounts.
- Open/read `https://github.com/OpenSignLabs/OpenSign`; public locator: Features — PDF Template Creation; Expiring Docs & Rejection. Decision: Templates plus document expiration and rejection states streamline repeatable signature collection.
- Open/read `https://github.com/OpenSignLabs/OpenSign`; public locator: Features — OpenSign Drive; Audit Trails & completion certificate. Decision: OpenSign Drive and completion certificates combine document organization with a detailed signing activity record.
- Open/read `https://github.com/OpenSignLabs/OpenSign`; public locator: Features. Decision: Its combined signing, template and document-vault workflow can create modest user-data switching costs; small ecosystem limits evidence for a strong moat.
- Open/read `https://www.opensignlabs.com/terms-and-conditions`; public locator: Terms and Conditions; Acknowledgments. Decision: Repository acknowledgments/contact and official site checked without a named corporate sponsor disclosure. Verified business steward Qik Innovations supplied as fallback; contributor participation is not financial sponsorship.
- Open/read `https://www.opensignlabs.com/terms-and-conditions`; public locator: Terms and Conditions; Acknowledgments. Decision: Qik Innovations Private Limited: business-steward
- Open/read `https://docs.opensignlabs.com/docs/self-host/docker/run-locally/`; public locator: Steps to run OpenSign with docker. Decision: Docker Compose: required. Always. Documented deployment component.
- Open/read `https://docs.opensignlabs.com/docs/self-host/One-click-Install/DigitalOcean/`; public locator: OpenSign application consists of3 components. Decision: Node.js API / Parse Server and React frontend: required. Always. Separate server and client containers bundle runtime; no SQL dependency.
- Open/read `https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml`; public locator: services: mongo. Decision: MongoDB: required. Always. Persist /data/db or supply managed MongoDB; main compose uses mongo:latest, no exact version range in this guide.
- Open/read `https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml`; public locator: services: caddy. Decision: Caddy: required. Always. Official compose reverse proxy/TLS route.
- Open/read `https://docs.opensignlabs.com/docs/self-host/docker/run-locally/`; public locator: ENV variables — USE_LOCAL. Decision: Local document storage: one-of. USE_LOCAL=true OR S3-compatible storage. Documented deployment component.
- Open/read `https://docs.opensignlabs.com/docs/self-host/docker/run-locally/`; public locator: ENV variables — DO_SPACE; USE_LOCAL. Decision: S3 / DigitalOcean Spaces: one-of. USE_LOCAL=false; alternative to local files. Credentials and browser CORS setup required.
- Open/read `https://docs.opensignlabs.com/docs/self-host/docker/run-locally/`; public locator: ENV variables — SMTP_ENABLE. Decision: SMTP: one-of. SMTP_ENABLE=true OR Mailgun. Documented deployment component.
- Open/read `https://docs.opensignlabs.com/docs/self-host/docker/run-locally/`; public locator: ENV variables — MAILGUN_API_KEY. Decision: Mailgun API: one-of. Mailgun when SMTP disabled. Documented deployment component.
- Open/read `https://docs.opensignlabs.com/docs/self-host/docker/run-locally/`; public locator: Steps to Generate Self Sign Certificate. Decision: PFX/P12 signing certificate: required. Always. Self-signed permitted; trusted CA certificate needed for recipient software trust indicator.
- Open/read `https://docs.opensignlabs.com/docs/self-host/docker/run-locally/`; public locator: Steps to run OpenSign with docker. Decision: {'cpu': None, 'memory': None, 'storage': None, 'os': 'Docker-compatible Linux/macOS/Windows', 'notes': 'No fixed CPU/RAM/disk minimum established by current self-host guide.'}
- Open/read `https://docs.opensignlabs.com/docs/self-host/One-click-Install/DigitalOcean/`; public locator: Digital Ocean. Decision: offered. Verified current official one-click deployment documentation, with its explicit database-persistence limitation. Compose commands alone are not counted as one-click.
- Open/read `https://docs.opensignlabs.com/docs/self-host/One-click-Install/DigitalOcean/`; public locator: Digital Ocean. Decision: DigitalOcean install guide: one-click. Official button provisions frontend/API/MongoDB; explicitly not production-ready until nonpersistent container database replaced with persistent MongoDB.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.
