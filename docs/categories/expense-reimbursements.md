# Expense reimbursements

Employee expense claims, receipt submission, approval workflows and reimbursement status.

Audience: Employees claiming business expenses, approving managers and finance operations teams.. Expense reimbursement spans employers across industries; employees submit claims while managers and finance teams approve and settle them.

Use-case sources: [1](https://frappe.io/hr/expense-management), [2](https://www.concur.com/products/concur-expense).

- [Expensify](https://www.expensify.com/): USD 5/seat/month, monthly billing. Collect announced at $5/member/month without annual commitment or card requirement. Current pricing page extraction returned only application shell; corroborated by official pricing announcement and current support search. Legacy and Control pricing differs. [Pricing](https://use.expensify.com/blog/collect-plan-pricing-update).
- [SAP Concur](https://www.concur.com/products/concur-expense): USD 7/usage/month, monthly billing. US Concur Expense Base starts at $7 per report, unlimited users; price varies by monthly commitment. Plus starts $11/report; Premium custom. This amount is per report, not total monthly subscription. [Pricing](https://www.concur.com/products/concur-expense).
- [Spendesk](https://www.spendesk.com/): entry amount unverified/quote, quote billing. Quote required: fixed monthly platform subscription plus transaction fees including expense claims; unlimited users. No public entry amount. [Pricing](https://www.spendesk.com/pricing/).

### ERPNext — A

Canonical GPL ERPNext remains Tier A with no feature paywalls, but is not a standalone recommendation for this category. HR modules moved to Frappe HR from version 14; current expense-claim documentation redirects to HR. ERPNext supplies the required connected foundation for Frappe HR expense settlement, not a second independent expense product. accounting-erp scope: Vendor explicitly confirms no product feature paywalls; self-hosted GPL product, commercial hosting/support.

License: GPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/frappe/erpnext/blob/997a85da90e2bfc7f0d9b27455faae09c3148ac8/license.txt), [edition evidence](https://frappe.io/erpnext/pricing), [hosting](https://frappe.io/erpnext/pricing), [repository](https://github.com/frappe/erpnext).

Service costs/limits: Expense claim submission and approval require the separately installed Frappe HR app; use frappe-hr recommendation.

Repository: pushed 2026-10-21T21:24:59Z; latest commit 2026-10-21T21:24:06Z; latest published release v16.52.0 (2026-10-21T11:01:19Z). Quick analysis: 5.3/10; balanced policy passed. Automated repository signals; not a version-specific security audit.


### Frappe HR — A

GPLv3 core with no separate paid feature edition identified: official pricing charges hosting and implementation. Claims, receipts, conditional multi-level approvals, advances and reimbursement payment records documented. Separate Frappe HR app requires ERPNext; this is one combined deployment, not two independent expense choices. Pinned GPL license takes precedence over pricing page AGPL label. hr scope: Published product is free open-source; pricing charges hosting and optional implementation, not a separate HR feature edition. Documentation covers payroll, onboarding, attendance, goals and appraisals. GPLv3 from pinned repository LICENSE takes precedence over conflicting AGPL label on pricing page. No paid product feature gate identified. recruiting scope: Published product is free open-source; pricing charges hosting and optional implementation, not a separate HR feature edition. Documentation covers payroll, onboarding, attendance, goals and appraisals. GPLv3 from pinned repository LICENSE takes precedence over conflicting AGPL label on pricing page. No paid product feature gate identified. Recruiting is the documented module within this same product, not a separate module edition or product ID. Applicant records, email intake, interviews and offers are documented; no module feature gate identified.

License: GPL-3.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/frappe/hrms/blob/7fc314bdbdb69d0161bff1ba4dd46f4a7dffd8a2/license.txt), [edition evidence](https://frappe.io/hr/expense-management), [hosting](https://frappe.io/hr/pricing), [repository](https://github.com/frappe/hrms).

Service costs/limits: Self-operated deployment requires Frappe Framework and ERPNext; setup, email, backups and maintenance are operator responsibilities.; Payment Entry records settlement; bank payout rails, corporate cards, receipt OCR and travel booking parity with incumbents not verified.

Repository: pushed 2026-10-21T13:17:00Z; latest commit 2026-10-20T16:53:18Z; latest published release v15.64.6 (2026-10-21T13:17:01Z). Quick analysis: 6.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Expensify → Frappe HR: **partial**. Employee receipt-backed claims, approvals and reimbursement records overlap. Deploy Frappe HR with ERPNext; map employees, expense types, approvers and outstanding claims. Expensify SmartScan, card feeds and direct global payout parity not verified. No automatic migration validated. [1](https://frappe.io/hr/expense-management) [2](https://docs.frappe.io/hr/expense-claim) [3](https://use.expensify.com/blog/collect-plan-pricing-update)
- SAP Concur → Frappe HR: **partial**. Fits receipt-backed expense claims, multi-level approvals and reimbursement records. Deploy Frappe HR with ERPNext and rebuild policies, employee mapping and unpaid claims. Concur travel booking, card feeds, automated receipt extraction and global payment integrations not verified; no direct migration established. [1](https://frappe.io/hr/expense-management) [2](https://docs.frappe.io/hr/expense-claim) [3](https://www.concur.com/products/concur-expense)
- Spendesk → Frappe HR: **partial**. Fits employee out-of-pocket claims, conditional approvals and settlement tracking. Deploy Frappe HR with ERPNext and rebuild policies/approvers. Spendesk cards, procurement, payment rails and integrations are broader; no direct migration or service parity established. [1](https://frappe.io/hr/expense-management) [2](https://docs.frappe.io/hr/expense-claim) [3](https://www.spendesk.com/pricing/)

[Category research and unresolved questions](../../research/categories/expense-reimbursements.json) · [Research audit](../../research/audits/expense-reimbursements.md) · [Sourced claims](../../research/claims/expense-reimbursements.jsonl)
