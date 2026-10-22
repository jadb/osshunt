# Headscale

[Product](https://headscale.net/stable/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Headscale authors (community); ownership: **community**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Community implementation of Tailscale control server; not Tailscale Inc. Official sponsor page requests donations via Ko-fi but names no corporate sponsor. Exact project start/funding history unresolved. [1](https://headscale.net/stable/) [2](https://headscale.net/stable/about/sponsor/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Headscale | free | USD 0/user | USD 0/user | — | — | unspecified | free self-hosted core. Open program; infrastructure and third-party services are separate. [1](https://headscale.net/stable/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial product. No explicit most-popular/recommended designation found on the checked page. [1](https://headscale.net/stable/) |
| business | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party organizational commercial software plan found in the checked project source. [1](https://headscale.net/stable/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party enterprise commercial software plan found in the checked project source. [1](https://headscale.net/stable/) |

## Defensibility assessments

- Compatibility and focused small-network community are useful ecosystem assets, with dependence on upstream client/protocol evolution limiting defensibility. [1](https://headscale.net/stable/) [2](https://headscale.net/stable/about/faq/)

## Three product reasons to consider it

1. Compatible control-server workflow allows use of the Tailscale client ecosystem. [1](https://headscale.net/stable/)
2. MagicDNS, split DNS and additional DNS records cover private device naming needs. [1](https://headscale.net/stable/about/features/)
3. Preauthenticated key and web registration flows support both automated nodes and interactive enrollment. [1](https://headscale.net/stable/about/features/)

## Corporate sponsorship

Status: **none-found**. Checked official project source/sponsorship section; no named corporate sponsor identified. This does not establish absence of sponsors. [1](https://headscale.net/stable/about/sponsor/)


## Self-operation requirements

Mode: **server**. Official Debian/Ubuntu packages and standalone binaries; manual install. Single-tailnet scope; no first-party web interface included. Separate relay topology and Tailscale client installation required. [1](https://headscale.net/stable/setup/requirements/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Headscale binary | required | — | Always | Documented deployment component. [1](https://headscale.net/stable/setup/requirements/) |
| SQLite | one-of | database | Recommended database | Documented deployment component. [1](https://headscale.net/stable/about/faq/) |
| PostgreSQL | one-of | database | Supported in maintenance mode | Documented deployment component. [1](https://headscale.net/stable/about/faq/) |
| Compatible Tailscale clients | required | — | Always | Documented deployment component. [1](https://headscale.net/stable/) |
| Public IP/domain and HTTPS443 | required | — | Always | Documented deployment component. [1](https://headscale.net/stable/setup/requirements/) |
| OIDC provider | optional | — | OIDC user registration selected | Documented deployment component. [1](https://headscale.net/stable/about/features/) |
| DERP relay | conditional | — | Peers cannot establish direct connectivity; use configured relay infrastructure | Documented deployment component. [1](https://headscale.net/stable/about/features/) |

Resources: CPU not specified; memory not specified; storage not specified; OS Modern Linux or BSD. No numerical hardware minimum established from the checked documentation. [1](https://headscale.net/stable/setup/requirements/)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual installation/Compose alone is not a one-click offering. [1](https://headscale.net/stable/setup/requirements/)

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/headscale.json) · [Claim ledger](../../research/profile-claims/headscale.jsonl) · [Research steps](../../research/profile-audits/headscale.md)
