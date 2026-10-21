# Spreadsheet databases

Relational business data with spreadsheet editing, forms and configurable views.

Audience: Operations, marketing, sales, HR, finance and project teams building shared business trackers and lightweight internal apps.. Cross-functional business records and workflows apply across many industries; requires structured-data collaboration rather than every employee role.

Use-case sources: [1](https://airtable.com/pricing), [2](https://baserow.io/pricing).

- [Airtable](https://airtable.com): USD 20/seat/month, annual billing. Team starts at $20/user/month billed annually; free plan available; price checked October 21, 2026. [Pricing](https://airtable.com/pricing).

### Baserow Open Source Edition — C

OSE code MIT; root license explicitly excludes premium/enterprise directories under separate licenses, and docs use CC-BY-SA-4.0. Everyday views, comments and export formats require paid plans, including self-hosted.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/baserow/baserow/blob/985f1a26fbabad74860e67a6fd07bb7f55074499/LICENSE), [edition evidence](https://baserow.io/user-docs/pricing-plans), [hosting](https://baserow.io/pricing), [repository](https://github.com/baserow/baserow).

Paid restrictions: Kanban, calendar, timeline and survey views; Row comments and coloring; JSON, XML and Excel table export; Granular permissions, SSO and audit logging

Repository: pushed 2026-10-21T19:54:28Z; latest published release 2.4.1 (2026-10-13T15:39:27Z). Quick analysis: 6.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Airtable → Baserow Open Source Edition: **partial**. Official importer transfers tables, records, relationships, attachments and grid views. Automations, interfaces, integrations and permissions need rebuilding; comments and revision history do not transfer. Free edition lacks several workflow views and export formats. [1](https://baserow.io/user-docs/import-airtable-to-baserow) [2](https://baserow.io/user-docs/pricing-plans)

### Grist Community — C

Apache-2.0 community core. Current self-hosted pricing reserves both everyday automation/notifications and governance capabilities for commercial activation; qualifying smaller organizations may request a free activation key, which does not make those features OSS.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/gristlabs/grist-core/blob/f68125e21c46ada0ea77656c926c05111762a78c/LICENSE.txt), [edition evidence](https://www.getgrist.com/pricing/), [hosting](https://www.getgrist.com/pricing/), [repository](https://github.com/gristlabs/grist-core).

Paid restrictions: Automations; Email notifications; MCP server and current AI Assistant; Advanced administration, audit streaming and multiple team sites

Repository: pushed 2026-10-21T20:24:28Z; latest published release v1.7.21 (2026-10-09T20:08:10Z). Quick analysis: 5.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Airtable → Grist Community: **different-approach**. Relational spreadsheets and Python formulas suit business trackers. Plan formula, interface and automation rebuilding; commercial self-hosted features remain gated. [1](https://www.getgrist.com/pricing/)

### NocoDB Community — S

Pinned root license updated January 29, 2026 puts master/develop under Sustainable Use License: internal-business/noncommercial use and noncommercial free distribution restrictions. Source-available, not OSI OSS; cannot recommend as an OSS alternative despite free self-hosting.

License: LicenseRef-Sustainable-Use-1.0; identified core OSI: no/unresolved; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/nocodb/nocodb/blob/55bc42cb80e83bb2fa3f3bbb0949ffb074086541/LICENSE.md), [edition evidence](https://nocodb.com/pricing), [hosting](https://nocodb.com/pricing), [repository](https://github.com/nocodb/nocodb).

Paid restrictions: Community limited to 2 workflows per base and 2 interfaces per workspace; Unlimited interfaces/workflows, scripts and dashboards require Business; Fine-grained permissions and SSO paid

Repository: pushed 2026-10-21T19:19:21Z; latest published release 2026.09.1 (2026-09-29T14:39:07Z). Quick analysis: 5.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.


### Teable Community — S

Root declares AGPL-3.0 core apps plus MIT utility packages, then adds a blanket prohibition on modifying, replacing or removing brand assets. Conservatively withheld from verified OSI recommendations because this is not unmodified AGPL; permissibility of those additional terms needs specialist review. Independently, commercial AI is absent from Community.

License: LicenseRef-Teable-AGPL-Brand-Restrictions; identified core OSI: no/unresolved; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/teableio/teable/blob/80b68bb664ec5f68596d1e03ca118ab0d04f0552/LICENSE), [edition evidence](https://community.teable.ai/t/teable-future-updates/164), [hosting](https://teable.ai/pricing), [repository](https://github.com/teableio/teable).

Paid restrictions: Advanced AI features in commercial edition; Paid self-hosted features require activation key; full current CE comparison not verified

Repository: pushed 2026-10-21T15:42:10Z; latest published release release.2026-10-21T11-39-18Z.3519 (2026-10-21T12:19:46Z). Quick analysis: 4.9/10; balanced policy passed. Automated repository signals; not a version-specific security audit.


[Category research and unresolved questions](../../research/categories/spreadsheet-database.json) · [Research audit](../../research/audits/spreadsheet-database.md)
