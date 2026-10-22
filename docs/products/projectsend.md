# ProjectSend

[Product](https://www.projectsend.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

ProjectSend project / Gallifrey AI Inc. (business); ownership: **private**; funding: **unknown**.

Started 2011 (project-started); years active: 15; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Project began 2011 per official homepage, not company incorporation date. Cloud footer identifies Gallifrey AI Inc.; same team states subscriptions fund free software. Private commercial steward; ownership/funding history unresolved. [1](https://www.projectsend.org/) [2](https://www.projectsend.cloud/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Self-hosted ProjectSend | free | USD 0/user | USD 0/user | — | — | unspecified | GPLv2 self-hosted core. No per-user software fees; cloud quotas not self-hosted gates. [1](https://www.projectsend.org/) |
| popular | Pro | published | USD 19/cloud portal | — | — | — | unspecified | vendor commercial cloud. Explicit Most popular; includes25 active clients,100GB,3 team seats; usage overages separate. [1](https://www.projectsend.cloud/) |
| business | Business | published | USD 49/cloud portal | — | — | — | unspecified | vendor commercial cloud. Published monthly base; feature/quota scope from Cloud page, not self-host license. [1](https://www.projectsend.cloud/) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | vendor custom deployment/commercial embedding contract. Annual custom region/deployment and optional alternative commercial license; self-host GPL remains free. [1](https://www.projectsend.cloud/) |

## Defensibility assessments

- Purpose-built client portal and account/group delivery workflows provide niche differentiation, though GPL source and exportability limit exclusive lock-in. [1](https://www.projectsend.org/) [2](https://www.projectsend.cloud/)

## Three product reasons to consider it

1. Dedicated client accounts and upload-back portals support two-way client delivery. [1](https://www.projectsend.org/)
2. Per-user/total download limits and automatic expiry control how delivered files circulate. [1](https://www.projectsend.org/)
3. File versions, comments and activity trails keep delivery context alongside each document. [1](https://www.projectsend.org/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsor identified in checked official sources; verified business steward included. [1](https://www.projectsend.cloud/)

- [Gallifrey AI Inc.](https://www.projectsend.cloud/): business-steward. [Evidence](https://www.projectsend.cloud/).

## Self-operation requirements

Mode: **server**. ProjectSend2.7.0 current install requirements; Legacy LinuxServer image is separate older generation. Compose requires downloading/editing configuration before startup; not a true one-click install. [1](https://www.projectsend.org/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Engine + Compose | conditional | — | Recommended official image path | Documented deployment component. [1](https://www.projectsend.org/) |
| PHP8.4+ CLI and FPM with nginx | conditional | — | Release ZIP/native path | Documented deployment component. [1](https://www.projectsend.org/) |
| MySQL8.0+ | required | — | Always | Documented deployment component. [1](https://www.projectsend.org/) |
| Background worker and scheduler | required | — | Always | Documented deployment component. [1](https://www.projectsend.org/) |
| Redis | optional | — | Bundled in recommended stack; native installation may omit | Documented deployment component. [1](https://www.projectsend.org/) |
| SMTP/email transport | conditional | — | Email notifications/delivery enabled | Documented deployment component. [1](https://www.projectsend.org/) |
| S3-compatible storage | optional | — | External storage selected | Documented deployment component. [1](https://www.projectsend.org/) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux/nginx or Docker host. No numerical hardware minimum established from the checked documentation. [1](https://www.projectsend.org/)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual installation/Compose alone is not a one-click offering. [1](https://www.projectsend.org/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/projectsend.json) · [Claim ledger](../../research/profile-claims/projectsend.jsonl) · [Research steps](../../research/profile-audits/projectsend.md)
