# authentik

[Product](https://goauthentik.io/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Authentik Security Inc. (business); ownership: **private**; funding: **funded**.

Started 2022 (company-founded); years active: 4; years in business: 4. Ages are approximate calendar-year differences as of 2026-10-21.

2022 company launch distinct from earlier community project. Delaware public benefit corporation is a private business, not a publicly traded company or nonprofit. Open Core Ventures funding explicitly announced. [1](https://goauthentik.io/blog/2022-11-02-the-next-step-for-authentik/) [2](https://goauthentik.io/assets/files/PBC-2024-5bacf32c0b0184d69c911a3bf1b2b8a0.pdf/)

Known investors: [Open Core Ventures](https://goauthentik.io/blog/2022-11-02-the-next-step-for-authentik/).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open Source | free | USD 0/user | USD 0/user | — | — | unspecified | self-hosted open-source core. Core software free; enterprise functionality separate. [1](https://goauthentik.io/pricing/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial product. No explicit most-popular/recommended designation found on the checked page. [1](https://goauthentik.io/pricing/) |
| business | Enterprise | published | — | USD 60/user | — | — | unspecified | paid self-hosted enterprise subscription. Closest organizational plan; $5/internal user/month billed annually multiplied by 12. External users $0.02/month billed annually ($0.24/year); service accounts no cost. [1](https://goauthentik.io/pricing/) |
| enterprise | Enterprise Plus | published | — | USD 20000/organization | — | — | unspecified | paid self-hosted enterprise contract. Published starting annual amount; final contract/custom terms require sales. [1](https://goauthentik.io/pricing/) |

## Defensibility assessments

- Protocol breadth and configurable identity workflows may accumulate integration switching costs; public-benefit commitments help preserve community participation. [1](https://goauthentik.io/pricing/) [2](https://goauthentik.io/blog/2022-11-02-the-next-step-for-authentik/)

## Three product reasons to consider it

1. OIDC, SAML, LDAP, SCIM, RADIUS and proxy protocols connect a diverse application estate. [1](https://goauthentik.io/pricing/)
2. Browser-based RDP/SSH access brings remote administration into the identity workflow. [1](https://goauthentik.io/pricing/)
3. Custom attributes and multi-account switching accommodate different user personas and organizational data. [1](https://goauthentik.io/pricing/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsor identified in checked official sources; verified business steward included. [1](https://goauthentik.io/blog/2022-11-02-the-next-step-for-authentik/)

- [Authentik Security Inc.](https://goauthentik.io/blog/2022-11-02-the-next-step-for-authentik/): business-steward. [Evidence](https://goauthentik.io/blog/2022-11-02-the-next-step-for-authentik/).

## Self-operation requirements

Mode: **server**. Current Compose guide documents PostgreSQL and server/worker deployment. Raw compose.yml fetch rejected unsupported YAML content type; exact auxiliary service/version matrix not established here; no legacy Redis dependency inferred. [1](https://docs.goauthentik.io/install-config/install/docker-compose/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Composev2 | one-of | container-runtime | Compose installation | Documented deployment component. [1](https://docs.goauthentik.io/install-config/install/docker-compose/) |
| Podman | one-of | container-runtime | Alternative container installation | Documented deployment component. [1](https://docs.goauthentik.io/install-config/install/docker-compose/) |
| PostgreSQL | required | — | Always | Documented deployment component. [1](https://docs.goauthentik.io/install-config/install/docker-compose/) |
| authentik server and worker processes | required | — | Always | Documented deployment component. [1](https://docs.goauthentik.io/install-config/install/docker-compose/) |
| SMTP | conditional | — | Email notifications/account recovery flows | Documented deployment component. [1](https://docs.goauthentik.io/install-config/install/docker-compose/) |

Resources: CPU 2 cores minimum; memory 2GB minimum; storage not specified; OS Container host; Linux/macOS commands documented. Compose documentation specifies 2 CPU cores and 2GB RAM for small-scale production/test path. [1](https://docs.goauthentik.io/install-config/install/docker-compose/)

## One-click and installer options

Status: **offered**. Officially documented install options; one-command is separate from browser one-click. [1](https://docs.goauthentik.io/install-config/install/docker-compose/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [AWS CloudFormation](https://docs.goauthentik.io/install-config/install/aws/): **one-click**, first-party. Official template deploys AWS stack; AWS account/certificate/domain prerequisites apply. [1](https://docs.goauthentik.io/install-config/install/aws/)

[Structured profile](../../research/profiles/authentik.json) · [Claim ledger](../../research/profile-claims/authentik.jsonl) · [Research steps](../../research/profile-audits/authentik.md)
