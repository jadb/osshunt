# Metabase Open Source Edition

[Product](https://www.metabase.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Metabase, Inc. (business); ownership: **private**; funding: **funded**.

Started 2015 (product-launched); years active: 11; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official blog says in market since 2015; age is product/business operating history, exact incorporation date not established. Company-issued 2021 Series B announcement verifies Insight Partners, Expa, NEA investors. Historical participation, not current percentage holdings. [1](https://www.prnewswire.com/news-releases/metabase-raises-30m-in-series-b-financing-to-expand-worldwide-access-to-its-best-in-class-open-source-business-intelligence-platform-301358789.html) [2](https://www.metabase.com/blog/metabase-alternatives) [3](https://www.metabase.com/pricing)

Known investors: [Insight Partners](https://www.prnewswire.com/news-releases/metabase-raises-30m-in-series-b-financing-to-expand-worldwide-access-to-its-best-in-class-open-source-business-intelligence-platform-301358789.html), [Expa](https://www.prnewswire.com/news-releases/metabase-raises-30m-in-series-b-financing-to-expand-worldwide-access-to-its-best-in-class-open-source-business-intelligence-platform-301358789.html), [NEA](https://www.prnewswire.com/news-releases/metabase-raises-30m-in-series-b-financing-to-expand-worldwide-access-to-its-best-in-class-open-source-business-intelligence-platform-301358789.html).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open Source | free | USD 0/organization | — | — | — | unspecified | free self-hosted OSS edition. Unlimited users; commercial editions and infrastructure separate. [1](https://www.metabase.com/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No public designation or verified amount found in reviewed pricing page. [1](https://www.metabase.com/pricing) |
| business | Pro | published | USD 575/organization | USD 6210/organization | — | — | unspecified | paid self-host license. Closest organizational governance offer; base includes 10 users. Additional users $12/month or$130/year; internal and embedded users count. Actual annual total published$6210. [1](https://www.metabase.com/pricing) |
| enterprise | Enterprise | published | — | USD 20000/organization | — | — | unspecified | paid commercial edition. Published starting annual price$20, 000; final contract custom via sales, not a fixed full deployment price. [1](https://www.metabase.com/pricing) |

## Defensibility assessments

- Reusable questions, dashboards and connected semantic context can make replacement costly as teams accumulate analytical workflows. [1](https://www.metabase.com/pricing) [2](https://www.metabase.com/blog/metabase-alternatives)

## Three product reasons to consider it

1. Visual query builder and SQL editor let business users and analysts explore the same source data. [1](https://www.metabase.com/pricing)
2. Interactive dashboards and drill-through let viewers investigate a metric without starting a new query. [1](https://www.metabase.com/pricing)
3. Scheduled dashboard subscriptions and report sharing bring recurring analysis into team workflows. [1](https://www.metabase.com/docs/latest/dashboards/subscriptions)

## Corporate sponsorship

Status: **business-fallback**. Reviewed project/company sources; no separate corporate sponsor verified. Verified business steward supplied as fallback. [1](https://www.metabase.com/pricing)

- [Metabase, Inc.](https://www.metabase.com/pricing): business-steward. [Evidence](https://www.metabase.com/pricing).

## Self-operation requirements

Mode: **server**. Current v 0.64 runtime/app-db docs; JAR/Docker routes. Production requires external supported app DB, service supervision/backups; default H 2 evaluation only. Elastic Beanstalk now explicitly not recommended, so obsolete one-click route excluded. [1](https://www.metabase.com/docs/latest/installation-and-operation/running-the-metabase-jar-file)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Java 25 JRE standalone JAR | one-of | runtime | Native JAR route | Current v 0.64 docs require Java 25; Docker preferred by vendor. [1](https://www.metabase.com/docs/latest/installation-and-operation/running-the-metabase-jar-file) |
| Docker container | one-of | runtime | Container route | JRE bundled; database persistence configured separately. [1](https://www.metabase.com/docs/latest/installation-and-operation/running-the-metabase-jar-file) |
| Postgre SQL | one-of | application-database | Recommended production option | Production dependency documented by project. [1](https://www.metabase.com/docs/latest/installation-and-operation/configuring-application-database) |
| My SQL 8.4+ | one-of | application-database | Alternative production option | utf 8 mb 4 required; Apsara DB My SQL unsupported. [1](https://www.metabase.com/docs/latest/installation-and-operation/configuring-application-database) |
| Maria DB 10.6+ | one-of | application-database | Alternative production option | utf 8 mb 4 required. [1](https://www.metabase.com/docs/latest/installation-and-operation/configuring-application-database) |
| Embedded H 2 | conditional | — | Local evaluation only | Avoid H 2 in production; separate app DB from queried warehouse. [1](https://www.metabase.com/docs/latest/installation-and-operation/configuring-application-database) |
| Source databases/warehouses | conditional | — | When querying business data | Separate from application metadata store. [1](https://www.metabase.com/pricing) |
| SMTP or Slack connection | conditional | — | Notifications/subscriptions requiring delivery | No mandatory Redis/queue service identified in standard production route. [1](https://www.metabase.com/docs/latest/dashboards/subscriptions) |

Resources: CPU not specified; memory not specified; storage not specified; OS Any supported Java 25 platform; tested x 86/ARM. No universal production CPU/RAM/disk requirement verified in reviewed runtime guide; size app and warehouse separately. [1](https://www.metabase.com/docs/latest/installation-and-operation/running-the-metabase-jar-file)

## One-click and installer options

Status: **none-found**. Reviewed installation guide and legacy Elastic Beanstalk page. Elastic Beanstalk now explicitly not recommended for production; no current true one-click template verified. Docker/JAR are manual routes. [1](https://www.metabase.com/docs/latest/installation-and-operation/running-the-metabase-jar-file)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/metabase.json) · [Claim ledger](../../research/profile-claims/metabase.jsonl) · [Research steps](../../research/profile-audits/metabase.md)
