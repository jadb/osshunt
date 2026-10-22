# Vaultwarden

[Product](https://github.com/dani-garcia/vaultwarden) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Vaultwarden maintainers (community); ownership: **community**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Independent community-maintained implementation, explicitly unaffiliated with Bitwarden. One maintainer’s employment at Bitwarden is not evidence of sponsorship. Project start and capital history not established. [1](https://github.com/dani-garcia/vaultwarden)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Vaultwarden | free | USD 0/user | USD 0/user | — | — | unspecified | free self-hosted core. Open program; infrastructure and third-party services are separate. [1](https://github.com/dani-garcia/vaultwarden) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial product. No explicit most-popular/recommended designation found on the checked page. [1](https://github.com/dani-garcia/vaultwarden) |
| business | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party organizational commercial software plan found in the checked project source. [1](https://github.com/dani-garcia/vaultwarden) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party enterprise commercial software plan found in the checked project source. [1](https://github.com/dani-garcia/vaultwarden) |

## Defensibility assessments

- Compatibility with an established client ecosystem is useful but creates dependence on upstream API changes; defensibility is limited by substitutability. [1](https://github.com/dani-garcia/vaultwarden)

## Three product reasons to consider it

1. Compatibility with official Bitwarden clients preserves familiar browser, mobile and desktop vault workflows. [1](https://github.com/dani-garcia/vaultwarden)
2. Organizations, collections, groups and event logs support shared credential administration. [1](https://github.com/dani-garcia/vaultwarden)
3. Send, emergency access and multiple second-factor methods extend personal vault workflows. [1](https://github.com/dani-garcia/vaultwarden)

## Corporate sponsorship

Status: **none-found**. Checked official project source/sponsorship section; no named corporate sponsor identified. This does not establish absence of sponsors. [1](https://github.com/dani-garcia/vaultwarden)


## Self-operation requirements

Mode: **server**. Prebuilt image avoids local Rust build tooling. Persistent data volume required. Manual container/Compose deployment verified; no official browser one-click template established. [1](https://github.com/dani-garcia/vaultwarden/wiki/Deployment-examples)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Container runtime Docker or Podman | conditional | — | Recommended prebuilt image path | Documented deployment component. [1](https://github.com/dani-garcia/vaultwarden) |
| SQLite embedded | one-of | database | Default database | Documented deployment component. [1](https://github.com/dani-garcia/vaultwarden/blob/main/.env.template) |
| MySQL | one-of | database | Alternative external database | Documented deployment component. [1](https://github.com/dani-garcia/vaultwarden/blob/main/.env.template) |
| PostgreSQL | one-of | database | Alternative external database | Documented deployment component. [1](https://github.com/dani-garcia/vaultwarden/blob/main/.env.template) |
| HTTPS endpoint | required | — | Always | Required for browser Web Crypto secure context; reverse proxy recommended. [1](https://github.com/dani-garcia/vaultwarden) |
| SMTP | conditional | — | Email notifications and email authentication | Documented deployment component. [1](https://github.com/dani-garcia/vaultwarden/blob/main/.env.template) |

Resources: CPU not specified; memory not specified; storage not specified; OS Container-supported host. No numerical hardware minimum established from the checked documentation. [1](https://github.com/dani-garcia/vaultwarden/wiki/Deployment-examples)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual installation/Compose alone is not a one-click offering. [1](https://github.com/dani-garcia/vaultwarden/wiki/Deployment-examples)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/vaultwarden.json) · [Claim ledger](../../research/profile-claims/vaultwarden.jsonl) · [Research steps](../../research/profile-audits/vaultwarden.md)
