# Accounting and ERP

Invoicing, bookkeeping and connected business operations.

Audience: Business owners, finance teams and bookkeepers across industries. Financial record keeping spans business sizes and sectors; finance users operate software directly.

Use-case sources: [1](https://quickbooks.intuit.com/pricing/), [2](https://www.xero.com/us/pricing-plans/).

- [QuickBooks Online](https://quickbooks.intuit.com/pricing/): USD 38/organization/month, monthly billing. US Simple Start regular price; $19/month introductory 3-month offer. A restricted proprietary free plan also exists. [Pricing](https://quickbooks.intuit.com/pricing/).
  [Pricing tiers, organization and product reasons](../products/quickbooks-online.md).
- [Xero](https://www.xero.com/us/pricing-plans/): USD 27/organization/month, monthly billing. US Early regular price; $2.70/month first six months offer; 20 invoices and five bills limits. [Pricing](https://www.xero.com/us/pricing-plans/).
  [Pricing tiers, organization and product reasons](../products/xero.md).

### ERPNext — A

Canonical GPL ERPNext remains Tier A with no feature paywalls, but is not a standalone recommendation for this category. HR modules moved to Frappe HR from version 14; current expense-claim documentation redirects to HR. ERPNext supplies the required connected foundation for Frappe HR expense settlement, not a second independent expense product. accounting-erp scope: Vendor explicitly confirms no product feature paywalls; self-hosted GPL product, commercial hosting/support.

License: GPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/frappe/erpnext/blob/997a85da90e2bfc7f0d9b27455faae09c3148ac8/license.txt), [edition evidence](https://frappe.io/erpnext/pricing), [hosting](https://frappe.io/erpnext/pricing), [repository](https://github.com/frappe/erpnext).

[Sponsors, requirements, installation options, pricing and product profile](../products/erpnext.md).

Service costs/limits: Expense claim submission and approval require the separately installed Frappe HR app; use frappe-hr recommendation.

Repository: pushed 2026-10-21T21:24:59Z; latest commit 2026-10-21T21:24:06Z; latest published release v16.52.0 (2026-10-21T11:01:19Z). Quick analysis: 5.3/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- QuickBooks Online → ERPNext: **partial**. Accounting plus wider ERP workflows; configure chart of accounts, imports, localization and integrations. No tested direct migration or bank-feed parity claim. [1](https://frappe.io/erpnext/pricing)
- Xero → ERPNext: **partial**. Accounting plus wider ERP workflows; configure chart of accounts, imports, localization and integrations. No tested direct migration or bank-feed parity claim. [1](https://frappe.io/erpnext/pricing)

### Odoo Community — C

LGPL Community covers basic invoicing and expenses; full accounting, bank synchronization and OCR require Enterprise. Tier C. crm scope: Community core LGPL; Enterprise adds paid modules and Studio. CRM core usable independently; tier describes the wider Odoo product. Direct edition/blog retrieval timed out; primary indexed blog confirms Studio separation.

License: LGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/odoo/odoo/blob/1fb40e5c0d25852d0495d4e016ab1a47db2ded13/LICENSE), [edition evidence](https://www.odoo.com/blog/business-hacks-1/odoo-community-vs-odoo-enterprise-which-one-should-you-choose-for-your-business-2406), [hosting](https://www.odoo.com/page/hosting-types), [repository](https://github.com/odoo/odoo).

[Sponsors, requirements, installation options, pricing and product profile](../products/odoo-ce.md).

Paid restrictions: Full Accounting app, bank synchronization and OCR; Odoo Studio no-code customization; Additional Enterprise business modules; Enterprise full accounting and additional business modules

Repository: pushed 2026-10-21T21:18:41Z; latest commit 2026-10-21T18:16:20Z; latest published release unverified or unavailable (n/a). Quick analysis: 5.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- QuickBooks Online → Odoo Community: **partial**. Basic invoicing/expenses subset only; full accounting and bank automation are Enterprise features. No direct migration validated. [1](https://www.odoo.com/blog/business-hacks-1/odoo-community-vs-odoo-enterprise-which-one-should-you-choose-for-your-business-2406)
- Xero → Odoo Community: **partial**. Basic invoicing/expenses subset only; full accounting and bank automation are Enterprise features. No direct migration validated. [1](https://www.odoo.com/blog/business-hacks-1/odoo-community-vs-odoo-enterprise-which-one-should-you-choose-for-your-business-2406)

### Akaunting — S

Tier S: current Business Source License 1.1 is source-available, not OSI OSS. Production grant limited to two users, one company and 1,000 invoices; accounting-service use and commercial rebranding restricted. GPL conversion four years after publication is future eligibility, not current OSS. Paid on-premise plans exist; current module pricing not retrievable.

License: BUSL-1.1; identified core OSI: no/unresolved; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/akaunting/akaunting/blob/06dfa473e0d71a5262a58f6f0759c6badf34d5d2/LICENSE.txt), [edition evidence](https://akaunting.com/plans-on-premise), [hosting](https://akaunting.com/plans), [repository](https://github.com/akaunting/akaunting).

[Sponsors, requirements, installation options, pricing and product profile](../products/akaunting.md).

Paid restrictions: Tier S: current Business Source License 1.1 is source-available, not OSI OSS. Production grant limited to two users, one company and 1,000 invoices; accounting-service use and commercial rebranding restricted. GPL conversion four years after publication is future eligibility, not current OSS. Paid on-premise plans exist; current module pricing not retrievable.

Repository: pushed 2026-10-08T17:43:07Z; latest commit 2026-10-08T17:43:04Z; latest published release 3.2.4 (2026-09-17T13:09:14Z). Quick analysis: 5.9/10; balanced policy passed. Automated repository signals; not a version-specific security audit.


### Invoice Ninja — S

Tier S: current ELv2 is source-available, not OSI OSS; restrictions include managed-service use and license-key bypass. Annual paid white-label license removes client-facing branding; admin branding remains. Invoicing-oriented rather than a verified full general-ledger accounting replacement.

License: Elastic-2.0; identified core OSI: no/unresolved; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/invoiceninja/invoiceninja/blob/15ea35ea63f367eba33c04b7acd9ab1227853537/LICENSE), [edition evidence](https://invoiceninja.github.io/docs/self-host/self-host-white-labeling), [hosting](https://invoiceninja.com/pricing-plans/), [repository](https://github.com/invoiceninja/invoiceninja).

[Sponsors, requirements, installation options, pricing and product profile](../products/invoice-ninja.md).

Paid restrictions: Tier S: current ELv2 is source-available, not OSI OSS; restrictions include managed-service use and license-key bypass. Annual paid white-label license removes client-facing branding; admin branding remains. Invoicing-oriented rather than a verified full general-ledger accounting replacement.

Repository: pushed 2026-10-20T19:09:32Z; latest commit 2026-10-18T03:34:08Z; latest published release v5.13.49 (2026-10-18T03:44:48Z). Quick analysis: 6.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.


[Category research and unresolved questions](../../research/categories/accounting-erp.json) · [Research audit](../../research/audits/accounting-erp.md)
