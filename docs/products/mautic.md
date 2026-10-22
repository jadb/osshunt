# Mautic

[Product](https://mautic.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Mautic community; fiscal host Open Source Collective (community); ownership: **community**; funding: **not-applicable**.

Started 2014 (project-started); years active: 12; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

David Hurley launched project2014. Independent community project; Open Source Collective holds trademark as fiscal host. Historical Mautic Inc. acquisition by Acquia concerns former commercial company; not current community-project equity ownership. Corporate memberships financially support project. [1](https://mautic.org/about/) [2](https://mautic.org/governance/) [3](https://mautic.org/members-partners/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Mautic self-hosted | free | USD 0/instance | — | — | — | unspecified | free self-hosted software. Download includes all features; operational/email transport costs separate. [1](https://mautic.org/start-using-mautic/) |
| popular | unknown | unknown | — | — | — | — | unspecified | product plans. No explicitly highlighted Most popular or Recommended plan found in the public pricing page. [1](https://mautic.org/start-using-mautic/) |
| business | unknown | unknown | — | — | — | — | unspecified | partner managed hosting. Managed Mautic is a partner service; no common named Team/Business product tier amount verified. [1](https://mautic.org/start-using-mautic/) |
| enterprise | unknown | unknown | — | — | — | — | unspecified | partner managed hosting. No common first-party Enterprise product tier verified; hosting/support partners price separately. [1](https://mautic.org/start-using-mautic/) |

## Defensibility assessments

- Community-governed marketing automation and extensible integrations accumulate campaign/data-model switching costs without exclusive control of core code. [1](https://mautic.org/governance/)

## Three product reasons to consider it

1. Visual Campaign Builder branches lead-nurturing actions through customer journeys. [1](https://mautic.org/features/)
2. Landing pages and embedded forms connect acquisition directly to contact marketing records. [1](https://mautic.org/features/)
3. Email personalization and A/B testing combine message creation with conversion experimentation. [1](https://mautic.org/features/)

## Corporate sponsorship

Status: **identified**. Sponsorship status limited to the official sources checked; donors and investors are not treated as corporate sponsors. [1](https://mautic.org/members-partners/)

- [Dropsolid](https://dropsolid.com/): corporate-sponsor. [Evidence](https://mautic.org/members-partners/).
- [Acquia](https://www.acquia.com/): corporate-sponsor. [Evidence](https://mautic.org/members-partners/).
- [Friendly](https://friendly.ch/): corporate-sponsor. [Evidence](https://mautic.org/members-partners/).
- [Aivie](https://aivie.ch/): corporate-sponsor. [Evidence](https://mautic.org/members-partners/).

## Self-operation requirements

Mode: **server**. Native/prebuilt production package path. Queue workers conditional; no mandatory Redis or RabbitMQ in documented default.7.0 upgrade removed bundled RabbitMQ dependencies. Current7.x database minima override obsolete general-page MySQL5.7/MariaDB10.2 text. [1](https://docs.mautic.org/en/7.0/getting_started/how_to_install_mautic.html)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP8.2–8.5 and documented extensions | required | — | Mautic7.x runtime. | Documented production component. [1](https://mautic.org/mautic-requirements/) |
| MySQL8.4+ | one-of | database | Mautic7 backend; prefer release-specific upgrade requirements over stale general page minimum. | Documented production component. [1](https://github.com/mautic/mautic/blob/7.x/UPGRADE-7.0.md) |
| MariaDB10.11+ | one-of | database | Mautic7 backend. | Documented production component. [1](https://github.com/mautic/mautic/blob/7.x/UPGRADE-7.0.md) |
| Apache / Nginx / IIS | required | — | One supported production webserver. | Documented production component. [1](https://mautic.org/mautic-requirements/) |
| Cron tasks | required | — | Segments/campaign updates/triggers and custom-field maintenance. | Documented production component. [1](https://docs.mautic.org/en/7.0/configuration/cron_jobs.html) |
| SMTP or supported email-provider API | required | — | Marketing email delivery; testing Mailhog is not production delivery. | Documented production component. [1](https://docs.mautic.org/en/7.0/getting_started/how_to_install_mautic.html) |
| Messenger consumer | conditional | — | Only when email/hit processing configured as asynchronous queues. | Documented production component. [1](https://docs.mautic.org/en/7.0/configuration/cron_jobs.html) |
| npm | required | — | Mautic5+ documented asset/setup requirement; not a separate running network service. | Documented production component. [1](https://mautic.org/mautic-requirements/) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. No numerical hardware minima verified in the cited deployment documentation. [1](https://docs.mautic.org/en/7.0/getting_started/how_to_install_mautic.html)

## One-click and installer options

Status: **none-found**. Official production package web/CLI installer requires prepared web/database/email stack; not true one-click. No verified current officially linked shortcut in checked docs. [1](https://docs.mautic.org/en/7.0/getting_started/how_to_install_mautic.html)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/mautic.json) · [Claim ledger](../../research/profile-claims/mautic.jsonl) · [Research steps](../../research/profile-audits/mautic.md)
