# Zulip

[Product](https://zulip.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Kandra Labs (business); ownership: **private**; funding: **mixed**.

Started 2016 (company-founded); years active: 10; years in business: 10. Ages are approximate calendar-year differences as of 2026-10-21.

Parent: Zulip Foundation.

Kandra Labs is the business foundedApril2016 and now fully owned by independent nonprofit Zulip Foundation, which became project steward in2026. Original Zulip startup formed2012. NSF grants and Google Summer of Code contributions are not equity investments; no VC funding stated in project history. [1](https://zulip.com/history/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Self-hosted Free | free | USD 0/organization | — | — | — | unspecified | self-hosted core. No recurring license charge for this core scope; infrastructure and optional services separate. [1](https://zulip.com/plans/) |
| popular | unknown | unknown | — | — | — | — | unspecified | self-hosted core. No explicitly highlighted popular plan verified in the reviewed official offer. No inferred designation. [1](https://zulip.com/plans/) |
| business | Self-hosted Business | published | USD 8/user | USD 80.04/user | — | — | 25 | self-hosted vendor notifications/support service. All software features remain open source. $6.67 annual-billed monthly ×12=$80.04; $8 month-to-month; temporary $20/month first-year promotion excluded. [1](https://zulip.com/plans/) |
| enterprise | Self-hosted Enterprise | quote | — | — | — | — | unspecified | self-hosted vendor service. Contact sales. All Zulip software features included in Free; vendor mobile notification relay differs. [1](https://zulip.com/plans/) |

## Defensibility assessments

- Topic-based discussion habits and accumulated organized history create adoption-specific switching costs. [1](https://zulip.com/plans/)

## Three product reasons to consider it

1. Topic-based threading keeps parallel discussions navigable within channels. [1](https://zulip.com/plans/)
2. Public-access channels can expose selected discussions to readers without accounts. [1](https://zulip.com/plans/)
3. Granular groups, guest permissions and searchable history support organized communities. [1](https://zulip.com/plans/)

## Corporate sponsorship

Status: **identified**. Project history credits100+ contributors supported by Google Summer of Code:corporate program contribution, not equity investment or an assertion of current annual sponsorship. Kandra Labs remains the verified business steward. [1](https://zulip.com/history/)

- [Kandra Labs](https://zulip.com/history/): business-steward. [Evidence](https://zulip.com/history/).
- [Google](https://summerofcode.withgoogle.com/): corporate-sponsor. [Evidence](https://zulip.com/history/).

## Self-operation requirements

Mode: **server**. Documented default deployment path; optional services are separate from core runtime. No unverified backend alternatives asserted. [1](https://zulip.readthedocs.io/en/stable/production/requirements.html) [2](https://github.com/zulip/docker-zulip/blob/main/compose.yaml)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Dedicated supported Linux VM or server; nginx | required | — | Always | Documented deployment component. [1](https://zulip.readthedocs.io/en/stable/production/requirements.html) |
| PostgreSQL | required | — | Always | Documented deployment component. [1](https://github.com/zulip/docker-zulip/blob/main/compose.yaml) |
| Redis | required | — | Always | Documented deployment component. [1](https://github.com/zulip/docker-zulip/blob/main/compose.yaml) |
| RabbitMQ | required | — | Always | Documented deployment component. [1](https://github.com/zulip/docker-zulip/blob/main/compose.yaml) |
| Memcached | required | — | Always | Documented deployment component. [1](https://github.com/zulip/docker-zulip/blob/main/compose.yaml) |
| SMTP credentials | required | — | Always | Documented deployment component. [1](https://zulip.readthedocs.io/en/stable/production/requirements.html) |
| Docker and Compose | optional | — | Official Docker alternative to native installer | Documented deployment component. [1](https://zulip.readthedocs.io/en/stable/production/requirements.html) |

Resources: CPU 1 CPU small installations; 2 CPU for 100+ users; memory 2 GB minimum with 2 GB swap under 5 GB; 4 GB for 100+ users; storage 10 GB free (~25 GB total including OS); OS Ubuntu 22.04/24.04/26.04; Debian 12/13; Docker-capable alternatives. Dedicated server recommended; outgoing email credentials required. [1](https://zulip.readthedocs.io/en/stable/production/requirements.html)

## One-click and installer options

Status: **none-found**. Reviewed official installation guide. Manual packages, build steps and Compose recipes are not treated as one-click. No distinct officially linked template verified. [1](https://zulip.readthedocs.io/en/stable/production/requirements.html)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/zulip.json) · [Claim ledger](../../research/profile-claims/zulip.jsonl) · [Research steps](../../research/profile-audits/zulip.md)
