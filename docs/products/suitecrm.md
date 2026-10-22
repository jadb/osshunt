# SuiteCRM

[Product](https://suitecrm.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

SuiteCRM Ltd (business); ownership: **private**; funding: **unknown**.

Started 2024 (company-founded); years active: 2; years in business: 2. Ages are approximate calendar-year differences as of 2026-10-21.

Current steward incorporated September27,2024 and succeeded SalesAgility in March2025. SuiteCRM project predates company (2013); historical SalesAgility revenue-funded development does not establish present entity cap table. No primary equity funding/investor announcement found. [1](https://suitecrm.com/about/about-us/) [2](https://suitecrm.com/new-era-for-suitecrm/) [3](https://find-and-update.company-information.service.gov.uk/company/SC824064) [4](https://suitecrm.com/suitecrm-in-the-next-10-years/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | SuiteCRM open-source | free | GBP 0/instance | — | — | — | unspecified | free self-hosted core. Core software free; marketplace add-ons and services separate. [1](https://suitecrm.com/what-is-suitecrm/) |
| popular | unknown | unknown | — | — | — | — | unspecified | product plans. No explicitly highlighted Most popular or Recommended plan found in the public pricing page. [1](https://suitecrm.com/suitecrmhosted/) |
| business | Business | published | — | GBP 2160/instance | — | — | unspecified | vendor commercial cloud. Hosted shared-service package;£180/month billed annually multiplied by12; excludes VAT. Recommended up to50users; not a per-user minimum. [1](https://suitecrm.com/suitecrmhosted/) |
| enterprise | Dedicated | published | — | GBP 3200/instance | — | — | unspecified | vendor commercial cloud. Closest enterprise-grade hosted offer starts£3200/year, excluding VAT and application support. [1](https://suitecrm.com/suitecrmhosted/) |

## Defensibility assessments

- Broad CRM module model and long-lived customization ecosystem create data-model and workflow switching costs. [1](https://suitecrm.com/what-is-suitecrm/)

## Three product reasons to consider it

1. Condition-based workflows automate CRM actions across customer processes. [1](https://suitecrm.com/what-is-suitecrm/)
2. Configuration Studio adds fields, layouts and modules without custom development. [1](https://suitecrm.com/what-is-suitecrm/)
3. Case management and a customer self-service portal connect issue handling to CRM records. [1](https://suitecrm.com/what-is-suitecrm/)

## Corporate sponsorship

Status: **identified**. Sponsorship status limited to the official sources checked; donors and investors are not treated as corporate sponsors. [1](https://suitecrm.com/join-the-project/suitecrm-community-sponsorship/)

- [Quilvest Capital](https://www.quilvestcapital.com/): corporate-sponsor. [Evidence](https://suitecrm.com/join-the-project/suitecrm-community-sponsorship/).
- [Route4Me](https://www.route4me.com/): corporate-sponsor. [Evidence](https://suitecrm.com/join-the-project/suitecrm-community-sponsorship/).
- [Mokas IT](https://www.mokas.lt/): corporate-sponsor. [Evidence](https://suitecrm.com/join-the-project/suitecrm-community-sponsorship/).

## Self-operation requirements

Mode: **server**. Requirements explicitly scoped to current8.10.x docs; supplied repository health refers to separate7.x line. Prebuilt package avoids Angular/Node/yarn development tooling. No separate Redis or external queue required by default documented path. [1](https://docs.suitecrm.com/8.x/admin/installation-guide/downloading-installing/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP8.2/8.3/8.4 | required | — | SuiteCRM8.10.x prebuilt production package. | Documented production component. [1](https://docs.suitecrm.com/8.x/admin/compatibility-matrix/) |
| Apache2.4 | required | — | Documented8.10 webserver. | Documented production component. [1](https://docs.suitecrm.com/8.x/admin/compatibility-matrix/) |
| MariaDB10.6/10.11/11.4/11.8 | one-of | database | Select supported SQL backend. | Documented production component. [1](https://docs.suitecrm.com/8.x/admin/compatibility-matrix/) |
| MySQL8.0/8.4 | one-of | database | Select supported SQL backend. | Documented production component. [1](https://docs.suitecrm.com/8.x/admin/compatibility-matrix/) |
| Cron scheduler | required | — | Post-install background scheduled tasks. | Documented production component. [1](https://docs.suitecrm.com/8.x/admin/installation-guide/downloading-installing/) |
| Symfony Messenger worker | required | — | Post-install async tasks in current8.x. | Documented production component. [1](https://docs.suitecrm.com/8.x/admin/installation-guide/downloading-installing/) |
| S3 / Azure blob storage | optional | — | Alternative file storage to local filesystem. | Documented production component. [1](https://docs.suitecrm.com/8.x/admin/compatibility-matrix/) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. No numerical hardware minima verified in the cited deployment documentation. [1](https://docs.suitecrm.com/8.x/admin/installation-guide/downloading-installing/)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual Docker Compose or source installation does not qualify as one-click. [1](https://docs.suitecrm.com/8.x/admin/installation-guide/downloading-installing/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/suitecrm.json) · [Claim ledger](../../research/profile-claims/suitecrm.jsonl) · [Research steps](../../research/profile-audits/suitecrm.md)
