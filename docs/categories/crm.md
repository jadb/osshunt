# CRM

Manage contacts, sales opportunities, pipelines, and customer relationships.

Audience: Sales teams, account managers, founders, and customer-facing staff across industries.. Cross-industry sales and customer operations, from small businesses to enterprise teams; less universal than email or file storage.

Use-case sources: [1](https://www.hubspot.com/pricing/sales), [2](https://www.salesforce.com/sales/pricing/).

- [HubSpot](https://www.hubspot.com/pricing/sales): entry amount unverified/quote, monthly billing. Sales Hub Starter currently displays $7/seat/month; promotion and billing conditions not fully exposed in extracted pricing page, so normalized amount left unknown. Free proprietary CRM tools also exist. [Pricing](https://www.hubspot.com/pricing/sales).
- [Salesforce](https://www.salesforce.com/sales/pricing/): USD 25/seat/month, monthly billing. Starter Suite $25 USD/user/month, billed monthly or annually. Higher Sales Cloud editions and add-ons extra; Free Suite also exists. [Pricing](https://www.salesforce.com/sales/pricing/).
  [Pricing tiers, organization and product reasons](../products/salesforce.md).

### SuiteCRM — A

Vendor promises all SuiteCRM product code is open source; commercial offer covers hosting, support, warranties and services. Separate third-party marketplace add-ons can cost extra and are outside this core-edition classification.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/SuiteCRM/SuiteCRM/blob/7e390492f73fedb1e64410322b1ff455af167fab/LICENSE.txt), [edition evidence](https://suitecrm.com/join-the-project/always-open-source/), [hosting](https://suitecrm.com/suitecrmhosted/), [repository](https://github.com/SuiteCRM/SuiteCRM).

Repository: pushed 2026-10-20T16:03:54Z; latest commit 2026-10-20T16:03:53Z; latest published release v7.15.2 (2026-07-31T13:37:50Z). Quick analysis: 5.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- HubSpot → SuiteCRM: **partial**. Contacts, opportunities, campaigns, cases and workflows cover core CRM needs. Map custom fields, automations and integrations during migration; hosted capacity limits differ from self-hosted product. [1](https://suitecrm.com/suitecrms-list-of-features/) [2](https://suitecrm.com/suitecrmhosted/)
- Salesforce → SuiteCRM: **partial**. Contacts, opportunities, campaigns, cases and workflows cover core CRM needs. Map custom fields, automations and integrations during migration; hosted capacity limits differ from self-hosted product. [1](https://suitecrm.com/suitecrms-list-of-features/) [2](https://suitecrm.com/suitecrmhosted/)

### Twenty — B

AGPL core with application exception; MIT packages identified in root license; files tagged @license Enterprise explicitly commercial. Pricing gates security/admin features. Tier B refers to core CRM; review custom-app installation needs.

License: AGPL-3.0-only WITH LicenseRef-Twenty-Application-Exception; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/twentyhq/twenty/blob/d7499bf4ba11ed8c8a9392e02a42bb12b576e543/LICENSE), [edition evidence](https://twenty.com/pricing), [hosting](https://twenty.com/pricing), [repository](https://github.com/twentyhq/twenty).

Paid restrictions: SAML/OIDC SSO; Row-level permissions; Audit logs and encryption-key rotation; Organization shared-tarball app installation

Repository: pushed 2026-10-21T20:45:04Z; latest commit 2026-10-21T20:44:11Z; latest published release twenty/v2.50.0 (2026-10-21T10:13:13Z). Quick analysis: 5.4/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- HubSpot → Twenty: **partial**. Vendor explicitly supports HubSpot/Salesforce migration through CSV or API (API recommended above 50,000 records). Rebuild existing automations/custom data models; SSO and row permissions require commercial licensing. [1](https://twenty.com/pricing)
- Salesforce → Twenty: **partial**. Vendor explicitly supports HubSpot/Salesforce migration through CSV or API (API recommended above 50,000 records). Rebuild existing automations/custom data models; SSO and row permissions require commercial licensing. [1](https://twenty.com/pricing)

### EspoCRM — C

Core is AGPL, but everyday reporting/automation and quoting need paid proprietary extensions. Extension terms require renewal after licensed period, not merely payment for updates.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/espocrm/espocrm/blob/ddd727b31a4289cf5c4a295d0cf1618af865a93c/LICENSE.txt), [edition evidence](https://www.espocrm.com/extensions/), [hosting](https://www.espocrm.com/cloud/), [repository](https://github.com/espocrm/espocrm).

Paid restrictions: Advanced Pack reports, workflows and business process management; Sales Pack quotes, invoices, products/pricing and inventory; Official Google/Outlook integrations sold as extensions

Repository: pushed 2026-10-21T16:28:37Z; latest commit 2026-10-21T16:28:37Z; latest published release 10.0.10 (2026-10-14T15:47:37Z). Quick analysis: 4.9/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- HubSpot → EspoCRM: **partial**. Core contact/sales records overlap with paid CRM use cases; reporting, workflows, quotes and integrations can require paid packs. Migration requires mapping source data and customizations; no verified one-click full migration. [1](https://www.espocrm.com/extensions/) [2](https://www.espocrm.com/cloud/)
- Salesforce → EspoCRM: **partial**. Core contact/sales records overlap with paid CRM use cases; reporting, workflows, quotes and integrations can require paid packs. Migration requires mapping source data and customizations; no verified one-click full migration. [1](https://www.espocrm.com/extensions/) [2](https://www.espocrm.com/cloud/)

### Odoo Community — C

LGPL Community covers basic invoicing and expenses; full accounting, bank synchronization and OCR require Enterprise. Tier C. crm scope: Community core LGPL; Enterprise adds paid modules and Studio. CRM core usable independently; tier describes the wider Odoo product. Direct edition/blog retrieval timed out; primary indexed blog confirms Studio separation.

License: LGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/odoo/odoo/blob/1fb40e5c0d25852d0495d4e016ab1a47db2ded13/LICENSE), [edition evidence](https://www.odoo.com/blog/business-hacks-1/odoo-community-vs-odoo-enterprise-which-one-should-you-choose-for-your-business-2406), [hosting](https://www.odoo.com/page/hosting-types), [repository](https://github.com/odoo/odoo).

Paid restrictions: Full Accounting app, bank synchronization and OCR; Odoo Studio no-code customization; Additional Enterprise business modules; Enterprise full accounting and additional business modules

Repository: pushed 2026-10-21T21:18:41Z; latest commit 2026-10-21T18:16:20Z; latest published release unverified or unavailable (n/a). Quick analysis: 5.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- HubSpot → Odoo Community: **partial**. CRM pipeline and lead handling are part of a broader modular ERP. Reconfigure workflows and integrations; Community lacks paid Enterprise modules and Studio. Not a full Salesforce/HubSpot suite replacement. [1](https://www.odoo.com/documentation/19.0/applications/sales/crm/acquire_leads/email_manual.html) [2](https://www.odoo.com/page/editions)
- Salesforce → Odoo Community: **partial**. CRM pipeline and lead handling are part of a broader modular ERP. Reconfigure workflows and integrations; Community lacks paid Enterprise modules and Studio. Not a full Salesforce/HubSpot suite replacement. [1](https://www.odoo.com/documentation/19.0/applications/sales/crm/acquire_leads/email_manual.html) [2](https://www.odoo.com/page/editions)

[Category research and unresolved questions](../../research/categories/crm.json) · [Research audit](../../research/audits/crm.md)
