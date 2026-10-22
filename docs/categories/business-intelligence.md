# Business intelligence

Database exploration, metrics, dashboards and scheduled analytical reporting.

Audience: Business analysts, data teams, managers and operational teams consuming business metrics.. Reporting supports many business functions; configuration and semantic modeling are concentrated in analysts and data teams.

Use-case sources: [1](https://www.microsoft.com/en-us/power-platform/products/power-bi/pricing), [2](https://www.tableau.com/pricing), [3](https://cloud.google.com/looker/pricing), [4](https://www.metabase.com/blog/making-bi-migration-suck-less).

- [Looker](https://cloud.google.com/looker): entry amount unverified/quote, quote billing. Annual platform price requires sales quote; named user licensing also applies. Looker, distinct from Looker Studio. [Pricing](https://cloud.google.com/looker/pricing).
  [Pricing tiers, organization and product reasons](../products/looker.md).
- [Metabase Pro](https://www.metabase.com/): USD 575/organization/month, monthly billing. Self-hosted Pro $575/month, first 10 users included; additional users $12/month; annual discount available. [Pricing](https://www.metabase.com/pricing).
  [Pricing tiers, organization and product reasons](../products/metabase-pro.md).
- [Power BI](https://powerbi.microsoft.com/): USD 14/seat/month, annual billing. Pro USD14/user/month paid yearly; free authoring exists; embedding/capacity priced separately. [Pricing](https://www.microsoft.com/en-us/power-platform/products/power-bi/pricing).
  [Pricing tiers, organization and product reasons](../products/power-bi.md).
- [Tableau](https://www.tableau.com/): USD 15/seat/month, annual billing. Tableau Standard advertised starting price; every deployment requires at least one Creator license, so this is not full deployment cost. [Pricing](https://www.tableau.com/pricing).
  [Pricing tiers, organization and product reasons](../products/tableau.md).

### Apache Superset — A

Apache project edition provides dashboards, SQL exploration, semantic layer, embedding, RBAC, OAuth/OIDC, LDAP and scheduled reporting in open code. Feature flags and operator setup are not paid software gates. No Apache-operated hosted offer identified; Preset is a separate provider.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/apache/superset/blob/5eaad449f5c2b96a4efdd93beeba83664bf00467/LICENSE.txt), [edition evidence](https://superset.apache.org/), [hosting](https://superset.apache.org/), [repository](https://github.com/apache/superset).

[Sponsors, requirements, installation options, pricing and product profile](../products/apache-superset.md).

Service costs/limits: Operate server, metadata database and backups; database drivers and report rendering workers require setup; email/Slack transport configured separately.

Repository: pushed 2026-10-21T22:12:07Z; latest commit 2026-10-21T22:01:20Z; latest published release 6.1.0 (2026-05-13T18:32:25Z). Quick analysis: 7.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Looker → Apache Superset: **partial**. Suitable for SQL database dashboards and exploration. Rebuild LookML metrics, joins and access policies in SQL/dataset definitions; validate semantic equivalence and drill paths. Planning inference: these sources document Superset-native connections and datasets, not a native importer for incumbent assets. Install DB-API driver and SQLAlchemy dialect per engine; dashboards, auth and reporting require reconfiguration. [1](https://superset.apache.org/) [2](https://superset.apache.org/user-docs/databases/) [3](https://superset.apache.org/user-docs/using-superset/embedding/) [4](https://superset.apache.org/admin-docs/configuration/configuring-superset/) [5](https://superset.apache.org/admin-docs/configuration/alerts-reports/)
- Power BI → Apache Superset: **partial**. Suitable for SQL database dashboards and exploration. Recreate PBIX report layouts and DAX/Power Query calculations; validate gateway-dependent and Microsoft-specific sources separately. Planning inference: these sources document Superset-native connections and datasets, not a native importer for incumbent assets. Install DB-API driver and SQLAlchemy dialect per engine; dashboards, auth and reporting require reconfiguration. [1](https://superset.apache.org/) [2](https://superset.apache.org/user-docs/databases/) [3](https://superset.apache.org/user-docs/using-superset/embedding/) [4](https://superset.apache.org/admin-docs/configuration/configuring-superset/) [5](https://superset.apache.org/admin-docs/configuration/alerts-reports/)
- Tableau → Apache Superset: **partial**. Suitable for SQL database dashboards and exploration. Rebuild workbook layouts, calculated fields and extract-based preparation; validate dashboard interactions and supported data drivers. Planning inference: these sources document Superset-native connections and datasets, not a native importer for incumbent assets. Install DB-API driver and SQLAlchemy dialect per engine; dashboards, auth and reporting require reconfiguration. [1](https://superset.apache.org/) [2](https://superset.apache.org/user-docs/databases/) [3](https://superset.apache.org/user-docs/using-superset/embedding/) [4](https://superset.apache.org/admin-docs/configuration/configuring-superset/) [5](https://superset.apache.org/admin-docs/configuration/alerts-reports/)

### Metabase Open Source Edition — C

Tier C because routine tailored report subscriptions and interactive embedded analytics are paid, beyond enterprise administration. OSI status covers AGPL Open Source Edition only; top-level enterprise code and enterprise binaries use Metabase Commercial License, not OSI OSS. Cloud managed operations are separate from software gates.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/metabase/metabase/blob/5049ebe35e5c68575936d0e0d78e5b8de5f06afb/LICENSE.txt), [edition evidence](https://www.metabase.com/pricing), [hosting](https://www.metabase.com/pricing), [repository](https://github.com/metabase/metabase).

[Sponsors, requirements, installation options, pricing and product profile](../products/metabase.md).

Paid restrictions: Pro/Enterprise: row and column permissions, JWT/SAML/OIDC SSO, caching controls and usage analytics/auditing. Google Sign-In and LDAP are separate authentication options; not all authentication is paid.; Interactive/SSO embedding, React modular embedding SDK, and whitelabel branding are Pro/Enterprise features; guest/view-only embedding remains possible under the stated license terms.; Per-subscription dashboard filter customization is Pro/Enterprise; basic scheduled email/Slack subscriptions are available.

Service costs/limits: Cloud hosting manages setup, backups and upgrades for a fee; self-hosting requires your infrastructure and email/Slack setup.

Repository: pushed 2026-10-21T22:35:09Z; latest commit 2026-10-21T22:18:51Z; latest published release v0.64.1 (2026-10-07T18:42:49Z). Quick analysis: 4.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Looker → Metabase Open Source Edition: **partial**. Self-service database questions and dashboards; vendor migration guidance explicitly discusses Looker. Rebuild LookML metrics, joins and access policies in SQL/dataset definitions; validate semantic equivalence and drill paths. Audit dashboards and subscriptions, centralize shared calculation logic, then rebuild and compare metrics. Data source support must be checked; embedded interactivity/SSO and subscription-specific filters require paid editions. [1](https://www.metabase.com/blog/making-bi-migration-suck-less) [2](https://www.metabase.com/pricing) [3](https://www.metabase.com/docs/latest/dashboards/subscriptions) [4](https://www.metabase.com/docs/latest/embedding/dashboard)
- Metabase Pro → Metabase Open Source Edition: **partial**. Community edition of the same project for core queries, dashboards and basic subscriptions. Downgrading does not retain paid interactive embedding, tailored subscriptions, enterprise identity or other Pro entitlements; review supported downgrade/version procedures and existing saved content before switching. No automatic downgrade validated. [1](https://www.metabase.com/pricing) [2](https://www.metabase.com/pricing)
- Power BI → Metabase Open Source Edition: **partial**. Self-service database questions and dashboards; vendor migration guidance explicitly discusses Power BI. Recreate PBIX report layouts and DAX/Power Query calculations; validate gateway-dependent and Microsoft-specific sources separately. Audit dashboards and subscriptions, centralize shared calculation logic, then rebuild and compare metrics. Data source support must be checked; embedded interactivity/SSO and subscription-specific filters require paid editions. [1](https://www.metabase.com/blog/making-bi-migration-suck-less) [2](https://www.metabase.com/pricing) [3](https://www.metabase.com/docs/latest/dashboards/subscriptions) [4](https://www.metabase.com/docs/latest/embedding/dashboard)
- Tableau → Metabase Open Source Edition: **partial**. Self-service database questions and dashboards; vendor migration guidance explicitly discusses Tableau. Rebuild workbook layouts, calculated fields and extract-based preparation; validate dashboard interactions and supported data drivers. Audit dashboards and subscriptions, centralize shared calculation logic, then rebuild and compare metrics. Data source support must be checked; embedded interactivity/SSO and subscription-specific filters require paid editions. [1](https://www.metabase.com/blog/making-bi-migration-suck-less) [2](https://www.metabase.com/pricing) [3](https://www.metabase.com/docs/latest/dashboards/subscriptions) [4](https://www.metabase.com/docs/latest/embedding/dashboard)

[Category research and unresolved questions](../../research/categories/business-intelligence.json) · [Research audit](../../research/audits/business-intelligence.md) · [Sourced claims](../../research/claims/business-intelligence.jsonl)
