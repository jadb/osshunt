# Uptime Kuma

[Product](https://uptime.kuma.pet/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Louis Lam / Uptime Kuma contributors (individual); ownership: **individual**; funding: **not-applicable**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Individual-led project under louislam; no separate company identified. Exact project launch year not verified in reviewed official pages. Corporate sponsorship is project support, not equity investment. [1](https://github.com/louislam/uptime-kuma)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Uptime Kuma | free | USD 0/organization | — | — | — | unspecified | free self-hosted core. MIT project distribution, infrastructure separate. [1](https://github.com/louislam/uptime-kuma) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No public designation or verified amount found in reviewed pricing page. [1](https://github.com/louislam/uptime-kuma) |
| business | unknown | not-offered | — | — | — | — | unspecified | project commercial edition. Project README and installation docs show one distribution; no named Business offer identified. [1](https://github.com/louislam/uptime-kuma) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | project commercial edition. No project Enterprise software plan identified in official distribution sources; third-party hosting distinct. [1](https://github.com/louislam/uptime-kuma) |

## Defensibility assessments

- Notification/protocol breadth and community adoption provide ecosystem value, but standardized checks offer a limited proprietary moat. [1](https://github.com/louislam/uptime-kuma)

## Three product reasons to consider it

1. Protocol checks cover HTTP keywords/JSON, DNS, TCP, push and Docker containers in one dashboard. [1](https://github.com/louislam/uptime-kuma)
2. Many notification connectors route incidents into existing team tools. [1](https://github.com/louislam/uptime-kuma)
3. Multiple status pages with custom domains communicate different service groups to different audiences. [1](https://github.com/louislam/uptime-kuma)

## Corporate sponsorship

Status: **identified**. Reviewed project sponsorship/governance sources; no corporate financial or in-kind sponsor verified; absence is not proven. [1](https://github.com/louislam/uptime-kuma)

- [Atlas Cloud](https://www.atlascloud.ai): corporate-sponsor. [Evidence](https://github.com/louislam/uptime-kuma).

## Self-operation requirements

Mode: **server**. Version 2 route supports SQLite and Maria DB; no compulsory Redis or separate queue identified. Database checks being monitored are targets, not backend prerequisites. [1](https://github.com/louislam/uptime-kuma/wiki/%F0%9F%94%A7-How-to-Install)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker image | one-of | runtime | Container route | Recommended image packages application runtime. [1](https://github.com/louislam/uptime-kuma/wiki/%F0%9F%94%A7-How-to-Install) |
| Node.js >=20.4 and Git | one-of | runtime | Native route | PM 2 recommended process supervisor; not required when Docker manages lifecycle. [1](https://github.com/louislam/uptime-kuma) |
| SQLite embedded file database | one-of | database | Small-scale route | Data volume must support POSIX locking; avoid NFS locking problems. [1](https://github.com/louislam/uptime-kuma/wiki/Environment-Variables) |
| Maria DB external database | one-of | database | Alternative v 2 database route | Production dependency documented by project. [1](https://github.com/louislam/uptime-kuma/wiki/Environment-Variables) |
| Maria DB embedded image | one-of | database | Image variant bundles Maria DB | Image selection matters; do not assume all images bundle it. [1](https://github.com/louislam/uptime-kuma/blob/master/src/lang/en.json) |
| SMTP or other notification provider | conditional | — | Only for selected notification integrations | Not a required generic queue/cache; external service terms vary. [1](https://github.com/louislam/uptime-kuma) |

Resources: CPU not specified; memory not specified; storage not specified; OS Major Linux distributions or Windows 10/Server 2012 R 2 x 64+ on native route; Docker route also available. README documents runtime/platform constraints; no universal production CPU/RAM/storage minimum verified. [1](https://github.com/louislam/uptime-kuma/wiki/%F0%9F%94%A7-How-to-Install)

## One-click and installer options

Status: **offered**. Official installation wiki supplies a Docker run command and links Home Assistant add-on/Helm routes. Only verified one-command route recorded; no true one-click claim. [1](https://github.com/louislam/uptime-kuma/wiki/%F0%9F%94%A7-How-to-Install)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Official Docker run command](https://github.com/louislam/uptime-kuma/wiki/%F0%9F%94%A7-How-to-Install): **one-command**, first-party. One Docker command starts app with persistent volume; requires Docker already installed, not a true one-click template. [1](https://github.com/louislam/uptime-kuma/wiki/%F0%9F%94%A7-How-to-Install)

[Structured profile](../../research/profiles/uptime-kuma.json) · [Claim ledger](../../research/profile-claims/uptime-kuma.jsonl) · [Research steps](../../research/profile-audits/uptime-kuma.md)
