# Dokku

[Product](https://dokku.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Dokku project / maintainers (community); ownership: **community**; funding: **not-applicable**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Community project with fiscal host Open Source Collective and Jose Diaz-Gonzalez as admin, rather than a verified separately incorporated venture. Donations and Pro sales are not equity rounds. Exact project-start year unresolved from checked primary pages;2014 copyright not treated as founding proof. [1](https://opencollective.com/dokku) [2](https://dokku.com/) [3](https://github.com/sponsors/dokku)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Dokku core | free | USD 0/account | — | — | — | unspecified | free self-hosted core. Open-source core; own server capacity separate. [1](https://dokku.com/) |
| popular | unknown | unknown | — | — | — | — | unspecified | self-host licenses. No explicit Most popular or Recommended plan designation verified in the pricing source; no plan inferred. [1](https://pro.dokku.com/) |
| business | Dokku Pro | published | — | — | USD 849/license,1production+2pre-production servers | — | unspecified | paid self-host add-on license. One-time lifetime purchase; free upgrades forever; development-discount price may increase. No recurring monthly/annual fee. [1](https://pro.dokku.com/) |
| enterprise | Pro volume/team license | quote | — | — | — | — | unspecified | paid self-host add-on licenses. Contact maintainer for volume or team pricing; not a hosted service or separate named Enterprise code edition. [1](https://pro.dokku.com/) |

## Defensibility assessments

- A mature plugin ecosystem and Heroku-compatible operational model create transferable know-how; shell-based extensibility and standard containers constrain proprietary switching barriers. [1](https://dokku.com/) [2](https://dokku.com/docs/getting-started/installation/)

## Three product reasons to consider it

1. Deploy Heroku-compatible projects by Git using buildpacks or a Dockerfile. [1](https://dokku.com/docs/getting-started/installation/) [2](https://dokku.com/)
2. Extend application lifecycle operations with composable plugins and datastore integrations. [1](https://dokku.com/) [2](https://github.com/sponsors/dokku)
3. Manage process scaling, environment variables and live logs through Pro UI/API when graphical operation is needed. [1](https://pro.dokku.com/)

## Corporate sponsorship

Status: **identified**. Corporate sponsorship source checked. Listed organizations explicitly support the project; customers and investors excluded. [1](https://opencollective.com/dokku)

- [Healthcare Blocks](https://healthcareblocks.com): corporate-sponsor. [Evidence](https://opencollective.com/dokku).
- [Plotly](https://plotly.com): corporate-sponsor. [Evidence](https://opencollective.com/dokku).
- [Praece Consulting](https://praece.com): corporate-sponsor. [Evidence](https://opencollective.com/dokku).
- [Shakepay](https://shakepay.com): corporate-sponsor. [Evidence](https://opencollective.com/dokku).
- [Stremio](https://www.stremio.com): corporate-sponsor. [Evidence](https://opencollective.com/dokku).

## Self-operation requirements

Mode: **server**. Default single-host Docker PaaS; SQL/cache services optional per app. Current install requires download then bootstrap/config steps, so not represented as a one-command installer. [1](https://dokku.com/docs/getting-started/installation/) [2](https://github.com/sponsors/dokku)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker local scheduler | one-of | scheduler | Default single-server route | Docker-based application containers; nginx and cron support routing/jobs. [1](https://dokku.com/docs/getting-started/installation/) |
| K3s scheduler | one-of | scheduler | Optional Kubernetes route | At least2GB per cluster node; other scheduler integrations separately documented. [1](https://dokku.com/docs/getting-started/installation/) |
| Linux,SSH,Git and domain configuration | required | — | Always | Ubuntu22.04/24.04/26.04 or Debian11+; AMD64/ARM64. Domain recommended, IP-only possible. [1](https://dokku.com/docs/getting-started/installation/) |
| Redis/PostgreSQL/MySQL/MongoDB datastore plugins | conditional | — | Only when deployed application requires chosen datastore | Optional services, not Dokku platform state database requirements; do not install all. [1](https://github.com/sponsors/dokku) |
| Build tools/language runtimes | conditional | — | Application buildpack/Dockerfile and chosen plugins | Application-specific dependencies supplied during builds; no central SQL/cache required by base control plane. [1](https://dokku.com/docs/getting-started/installation/) |

Resources: CPU not specified; memory Docker route1GB minimum or swap;K3s2GB per node; storage not specified; OS Ubuntu22.04/24.04/26.04; Debian11+; AMD64/ARM64. No universal CPU/disk minimum in checked guide; application builds require headroom beyond base memory. [1](https://dokku.com/docs/getting-started/installation/)

## One-click and installer options

Status: **offered**. Only verified official deployment options included; one-command installers labelled separately from one-click. Manual Docker Compose alone is not counted as one-click. [1](https://dokku.com/docs/getting-started/installation/) [2](https://dokku.com/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [DigitalOcean Dokku1-Click Droplet](https://marketplace.digitalocean.com/apps/dokku?refcode=fe06b043a083): **marketplace**, officially-linked-third-party. Homepage links official1-Click image. Listing version0.38.27 differs software table0.36.9; update to current stable after provision. [1](https://dokku.com/)

[Structured profile](../../research/profiles/dokku.json) · [Claim ledger](../../research/profile-claims/dokku.jsonl) · [Research steps](../../research/profile-audits/dokku.md)
