# Matomo

[Product](https://matomo.org) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Inno Craft Limited / Matomo (business); ownership: **private**; funding: **unknown**.

Started 2007 (project-started); years active: 19; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

2007 is Piwik/Matomo project origin; renamed Matomo in 2018. December 2016 company announcement identifies newly founded Inno Craft as business steward, separate from Piwik PRO. Current privacy policy names Inno Craft Limited. Exact company formation date, external equity investors and financing unresolved; project age is not company age. [1](https://matomo.org/about/) [2](https://matomo.org/changelog/piwik-3-0-0/) [3](https://fr.matomo.org/politique-de-confidentialite/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community | free | USD 0/organization | — | — | — | unspecified | free self-hosted core. Unlimited users/hits; premium plugin bundles and infrastructure separate. [1](https://matomo.org/pricing/) |
| popular | Business | published | EUR 1450/organization | — | — | — | unspecified | paid on-premise plugin bundle. Explicit Popular badge. Displayed monthly card €1450; up to 20 users/30 Mhits per month. Annual toggle discounted comparison differs; annual total not verified. [1](https://matomo.org/pricing/) |
| business | Business | published | EUR 1450/organization | — | — | — | unspecified | paid on-premise plugin bundle. Named Business bundle; premium features exceed Community scope. Monthly displayed card; annual contract total left unresolved. [1](https://matomo.org/pricing/) |
| enterprise | Enterprise | published | EUR 3400/organization | — | — | — | unspecified | paid on-premise plugin bundle. Displayed monthly card €3400 up to 50 users/100 Mhits monthly; separate VIP custom offer exists. Annual total unverified. [1](https://matomo.org/pricing/) |

## Defensibility assessments

- Long-lived analytics schema, integration/plugin ecosystem and historical report data create migration friction. [1](https://matomo.org/about/) [2](https://matomo.org/pricing/)

## Three product reasons to consider it

1. Unsampled reporting and visitor segmentation preserve detailed traffic investigation. [1](https://matomo.org/pricing/)
2. Campaign, ecommerce, internal-search and event reports cover marketing behavior in one analytics interface. [1](https://matomo.org/pricing/)
3. Tag Manager and tracking/reporting APIs support custom instrumentation and reporting workflows. [1](https://matomo.org/about/)

## Corporate sponsorship

Status: **business-fallback**. Reviewed project/company sources; no separate corporate sponsor verified. Verified business steward supplied as fallback. [1](https://matomo.org/changelog/piwik-3-0-0/)

- [Inno Craft Limited](https://matomo.org/changelog/piwik-3-0-0/): business-steward. [Evidence](https://matomo.org/changelog/piwik-3-0-0/).

## Self-operation requirements

Mode: **server**. Stable Matomo 5 stack distinguished from documented Matomo 6 beta. PHP application can use standard webserver or Word Press plugin route; My SQL/Maria DB, not Postgre SQL. No mandatory Redis requirement identified. [1](https://matomo.org/faq/on-premise/matomo-requirements/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP 8 with PDO/PDO_MYSQL or mysqli | required | — | Always | Matomo 5 stable requirements used; Matomo 6.0 beta PHP 8.1 requirements deliberately excluded. [1](https://matomo.org/faq/on-premise/matomo-requirements/) |
| Apache, nginx, IIS or Lite Speed webserver | one-of | webserver | Supported web serving route | Production dependency documented by project. [1](https://matomo.org/faq/on-premise/matomo-requirements/) |
| My SQL 5.5+; My SQL 8+ recommended | one-of | database | Matomo 5 database route | Production dependency documented by project. [1](https://matomo.org/faq/on-premise/matomo-requirements/) |
| Maria DB | one-of | database | Matomo 5 supported database alternative | Production dependency documented by project. [1](https://matomo.org/faq/on-premise/matomo-requirements/) |
| PHP CLI and scheduled report archiving | conditional | — | Medium/high traffic production reporting | CLI recommended; PHP extensions curl/gd/xml/mbstring enhance reports and integrations. [1](https://matomo.org/faq/on-premise/matomo-requirements/) |
| Email transport | conditional | — | Scheduled email reports | No mandatory external cache/queue identified in basic stable requirements. [1](https://wordpress.org/plugins/matomo/) |

Resources: CPU 2 CPU recommended for <=100, 000 monthly pageviews; memory 2 GB recommended for <=100, 000 monthly pageviews; storage 50 GB SSD recommended for <=100, 000 monthly pageviews; OS Linux, Windows, mac OS Server or Free BSD. Workload-specific recommended configuration, not absolute minimum; larger traffic tables require larger/multiple servers. [1](https://matomo.org/faq/on-premise/matomo-requirements/)

## One-click and installer options

Status: **offered**. Requirements guide officially links first-party Word Press plugin; marketplace installation verified. Standalone download/manual server setup separate. [1](https://matomo.org/faq/on-premise/matomo-requirements/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Matomo Analytics Word Press plugin](https://wordpress.org/plugins/matomo/): **marketplace**, first-party. Official matomoteam plugin installs analytics inside an existing Word Press installation in a few clicks; not a blank-server deployment. [1](https://matomo.org/faq/on-premise/matomo-requirements/) [2](https://wordpress.org/plugins/matomo/)

[Structured profile](../../research/profiles/matomo.json) · [Claim ledger](../../research/profile-claims/matomo.jsonl) · [Research steps](../../research/profile-audits/matomo.md)
