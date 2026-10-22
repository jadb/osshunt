# OpenSign

[Product](https://www.opensignlabs.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Qik Innovations Private Limited (OpenSign) (business); ownership: **private**; funding: **unknown**.

Started 2023 (product-launched); years active: 3; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

October2023 dates official OpenSign launch; Qik Innovations incorporation date not established. Terms explicitly name private limited business steward. No primary equity funding/investor announcement found in official site search; bootstrapping not inferred. [1](https://www.opensignlabs.com/post/opensign-the-enterprise-grade-open-source-docusign-alternative) [2](https://www.opensignlabs.com/terms-and-conditions)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Free self-hosted edition | free | USD 0/site | — | — | — | unspecified | free self-hosted core. Software license cost is zero; infrastructure, extensions and external services can cost extra. [1](https://www.opensignlabs.com/faqs) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. Current official pricing URL renders navigation/footer only; no plan cards or popularity designation available in retrieved content. [1](https://www.opensignlabs.com/plans-pricing) |
| business | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. Current pricing content could not be verified. Official FAQ confirms paid advanced features, but no named organizational plan/amount established. [1](https://www.opensignlabs.com/plans-pricing) |
| enterprise | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. Enterprise features mentioned by docs, but current sales tier and amount unresolved. Failed/dynamic fetch is not evidence the offer is absent. [1](https://www.opensignlabs.com/plans-pricing) |

## Defensibility assessments

- Its combined signing, template and document-vault workflow can create modest user-data switching costs; small ecosystem limits evidence for a strong moat. [1](https://github.com/OpenSignLabs/OpenSign)

## Three product reasons to consider it

1. Sequential multi-signer invitations and guest email OTP verification support controlled signing without recipient accounts. [1](https://github.com/OpenSignLabs/OpenSign)
2. Templates plus document expiration and rejection states streamline repeatable signature collection. [1](https://github.com/OpenSignLabs/OpenSign)
3. OpenSign Drive and completion certificates combine document organization with a detailed signing activity record. [1](https://github.com/OpenSignLabs/OpenSign)

## Corporate sponsorship

Status: **business-fallback**. Repository acknowledgments/contact and official site checked without a named corporate sponsor disclosure. Verified business steward Qik Innovations supplied as fallback; contributor participation is not financial sponsorship. [1](https://www.opensignlabs.com/terms-and-conditions) [2](https://github.com/OpenSignLabs/OpenSign)

- [Qik Innovations Private Limited](https://www.opensignlabs.com/terms-and-conditions): business-steward. [Evidence](https://www.opensignlabs.com/terms-and-conditions).

## Self-operation requirements

Mode: **server**. Default reviewed stack is frontend, API, MongoDB and Caddy; no required Redis broker documented. Official DigitalOcean demo installer DB lacks persistent storage and must be replaced for production. [1](https://docs.opensignlabs.com/docs/self-host/docker/run-locally/) [2](https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Compose | required | — | Always | Documented deployment component. [1](https://docs.opensignlabs.com/docs/self-host/docker/run-locally/) |
| Node.js API / Parse Server and React frontend | required | — | Always | Separate server and client containers bundle runtime; no SQL dependency. [1](https://docs.opensignlabs.com/docs/self-host/One-click-Install/DigitalOcean/) |
| MongoDB | required | — | Always | Persist /data/db or supply managed MongoDB; main compose uses mongo:latest, no exact version range in this guide. [1](https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml) |
| Caddy | required | — | Always | Official compose reverse proxy/TLS route. [1](https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml) |
| Local document storage | one-of | document-storage | USE_LOCAL=true OR S3-compatible storage | Documented deployment component. [1](https://docs.opensignlabs.com/docs/self-host/docker/run-locally/) |
| S3 / DigitalOcean Spaces | one-of | document-storage | USE_LOCAL=false; alternative to local files | Credentials and browser CORS setup required. [1](https://docs.opensignlabs.com/docs/self-host/docker/run-locally/) |
| SMTP | one-of | email | SMTP_ENABLE=true OR Mailgun | Documented deployment component. [1](https://docs.opensignlabs.com/docs/self-host/docker/run-locally/) |
| Mailgun API | one-of | email | Mailgun when SMTP disabled | Documented deployment component. [1](https://docs.opensignlabs.com/docs/self-host/docker/run-locally/) |
| PFX/P12 signing certificate | required | — | Always | Self-signed permitted; trusted CA certificate needed for recipient software trust indicator. [1](https://docs.opensignlabs.com/docs/self-host/docker/run-locally/) |

Resources: CPU not specified; memory not specified; storage not specified; OS Docker-compatible Linux/macOS/Windows. No fixed CPU/RAM/disk minimum established by current self-host guide. [1](https://docs.opensignlabs.com/docs/self-host/docker/run-locally/) [2](https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml)

## One-click and installer options

Status: **offered**. Verified current official one-click deployment documentation, with its explicit database-persistence limitation. Compose commands alone are not counted as one-click. [1](https://docs.opensignlabs.com/docs/self-host/One-click-Install/DigitalOcean/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [DigitalOcean install guide](https://docs.opensignlabs.com/docs/self-host/One-click-Install/DigitalOcean/): **one-click**, first-party. Official button provisions frontend/API/MongoDB; explicitly not production-ready until nonpersistent container database replaced with persistent MongoDB. [1](https://docs.opensignlabs.com/docs/self-host/One-click-Install/DigitalOcean/)

[Structured profile](../../research/profiles/opensign.json) · [Claim ledger](../../research/profile-claims/opensign.jsonl) · [Research steps](../../research/profile-audits/opensign.md)
