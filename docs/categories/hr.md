# Human resources

Employee records, leave, recruiting, onboarding, attendance, performance and payroll administration.

Audience: Employers, HR teams, managers and employee self-service users.. Employee administration spans industries and company sizes; HR staff manage the system while employees use leave and attendance workflows.

Use-case sources: [1](https://docs.frappe.io/hr/introduction), [2](https://www.bamboohr.com/pricing/).

- [BambooHR](https://www.bamboohr.com/): entry amount unverified/quote, monthly billing. Official page conflicts: Core headline $10/employee/month; FAQ $10.25/employee/month for >25 employees. <=25 employees Core $250/month flat; Pro $425, Elite $650. Month-to-month available; payroll/benefits/time add-ons extra. Single entry amount withheld pending clarification. [Pricing](https://www.bamboohr.com/pricing/).
  [Pricing tiers, organization and product reasons](../products/bamboohr.md).

### Frappe HR — A

GPLv3 core with no separate paid feature edition identified: official pricing charges hosting and implementation. Claims, receipts, conditional multi-level approvals, advances and reimbursement payment records documented. Separate Frappe HR app requires ERPNext; this is one combined deployment, not two independent expense choices. Pinned GPL license takes precedence over pricing page AGPL label. hr scope: Published product is free open-source; pricing charges hosting and optional implementation, not a separate HR feature edition. Documentation covers payroll, onboarding, attendance, goals and appraisals. GPLv3 from pinned repository LICENSE takes precedence over conflicting AGPL label on pricing page. No paid product feature gate identified. recruiting scope: Published product is free open-source; pricing charges hosting and optional implementation, not a separate HR feature edition. Documentation covers payroll, onboarding, attendance, goals and appraisals. GPLv3 from pinned repository LICENSE takes precedence over conflicting AGPL label on pricing page. No paid product feature gate identified. Recruiting is the documented module within this same product, not a separate module edition or product ID. Applicant records, email intake, interviews and offers are documented; no module feature gate identified.

License: GPL-3.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/frappe/hrms/blob/7fc314bdbdb69d0161bff1ba4dd46f4a7dffd8a2/license.txt), [edition evidence](https://frappe.io/hr/expense-management), [hosting](https://frappe.io/hr/pricing), [repository](https://github.com/frappe/hrms).

[Sponsors, requirements, installation options, pricing and product profile](../products/frappe-hr.md).

Service costs/limits: Self-operated deployment requires Frappe Framework and ERPNext; setup, email, backups and maintenance are operator responsibilities.; Payment Entry records settlement; bank payout rails, corporate cards, receipt OCR and travel booking parity with incumbents not verified.

Repository: pushed 2026-10-21T13:17:00Z; latest commit 2026-10-20T16:53:18Z; latest published release v15.64.6 (2026-10-21T13:17:01Z). Quick analysis: 6.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- BambooHR → Frappe HR: **partial**. Broad HR records, recruiting, onboarding, leave, performance and configurable payroll overlap. Rebuild workflows and employee data mapping; validate jurisdiction-specific tax filing, benefit carriers and payroll services separately. No automatic BambooHR migration established. [1](https://docs.frappe.io/hr/introduction) [2](https://www.bamboohr.com/pricing/)

### OrangeHRM Starter — C

GPLv3 Starter supplies employee database, leave requests, ATS, time tracking and basic reviews. Official edition comparison reserves everyday onboarding, PTO accrual, roster and recruiting enhancements for Advanced; therefore C rather than enterprise-only B.

License: GPL-3.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/orangehrm/orangehrm/blob/56e23b3b09e7af29317a0943523b825843fff527/LICENSE), [edition evidence](https://orangehrm.com/orangehrm-starter-open-source-software), [hosting](https://orangehrm.com/orangehrm-starter-open-source-software), [repository](https://github.com/orangehrm/orangehrm).

[Sponsors, requirements, installation options, pricing and product profile](../products/orangehrm-starter.md).

Paid restrictions: Onboarding and offboarding templates/automation require Advanced; Automated PTO accrual requires Advanced; Roster and shift management require Advanced; Recruiting e-signatures and customizable application questions require Advanced; Goal tracking and custom performance review questions require Advanced

Repository: pushed 2026-06-28T23:52:36Z; latest commit 2026-06-28T23:42:20Z; latest published release v5.9 (2026-06-28T23:46:59Z). Quick analysis: 4/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- BambooHR → OrangeHRM Starter: **partial**. Fits employee records, leave approvals, ATS and timesheets. Starter lacks Advanced onboarding workflows, automated PTO accrual and payroll integrations. Rebuild policies and map employee records; not a payroll-service replacement. [1](https://orangehrm.com/orangehrm-starter-open-source-software) [2](https://www.bamboohr.com/pricing/)

[Category research and unresolved questions](../../research/categories/hr.json) · [Research audit](../../research/audits/hr.md)
