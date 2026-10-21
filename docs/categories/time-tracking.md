# Time tracking

Track work hours by client and project, analyze timesheets, and prepare billable work.

Audience: Freelancers, agencies, consultants, and teams recording project or billable hours.. Relevant across professional services and project-driven teams; recording work hours is a recurring need across industries.

Use-case sources: [1](https://www.kimai.org/en/), [2](https://www.getharvest.com/pricing).

- [Harvest](https://www.getharvest.com/pricing): USD 9/seat/month, annual billing. Teams starts USD9/seat/month billed annually (USD108/year); USD11 monthly. Additional invoices, projects, clients and tasks can incur usage charges; free plan available. [Pricing](https://www.getharvest.com/pricing).
- [Toggl Track](https://toggl.com/pricing): USD 9/seat/month, annual billing. Starter USD9/user/month billed annually; USD12 monthly. Free plan also available. [Pricing](https://toggl.com/pricing).

### Kimai — C

AGPL-v3 self-hosted core; paid plugins add everyday expenses, task planning and custom fields. Core already provides time tracking, reports and invoicing. First-party Kimai Cloud verified separately.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/kimai/kimai/blob/8970bc8bfab0f53976168fc7b1172d9009f39a35/LICENSE), [edition evidence](https://www.kimai.org/en/store/), [hosting](https://www.kimai.org/en/), [repository](https://github.com/kimai/kimai).

Paid restrictions: Expense management plugin; Task planning plugin; Custom fields plugin

Repository: pushed 2026-10-21T22:00:28Z; latest commit 2026-10-21T21:55:02Z; latest published release 2.70.2 (2026-10-21T22:00:29Z). Quick analysis: 6.4/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Harvest → Kimai: **partial**. Overlapping project timesheets, reporting and invoicing support a partial alternative. No Harvest-specific importer verified; CSV/JSON importer or API mapping required. Expense management requires paid plugin; accounting and payment integrations need separate assessment. [1](https://www.kimai.org/documentation/imports.html) [2](https://www.kimai.org/en/) [3](https://www.getharvest.com/pricing)
- Toggl Track → Kimai: **partial**. Official free importer plugin supports Toggl Track timesheet CSV; required columns and date formats must match. Reporting and invoicing available; expenses and task planning use paid plugins. Validate rates, currencies and timezones during migration. [1](https://www.kimai.org/documentation/plugin-import.html) [2](https://www.kimai.org/en/store/)

### solidtime — C

AGPL-v3 open core is self-hostable. Official on-premise comparison excludes invoicing and audit log from Open Source. Invoicing is an everyday billable-work feature, so C; cloud subscription gates were not substituted for this comparison.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/solidtime-io/solidtime/blob/93eb93f1dc2de0d50849ce7883a601dd76691df1/LICENSE.md), [edition evidence](https://www.solidtime.io/pricing/on-premise), [hosting](https://docs.solidtime.io/self-hosting/intro), [repository](https://github.com/solidtime-io/solidtime).

Paid restrictions: Invoicing requires Business or Enterprise on-premise license; Audit Log requires Business or Enterprise on-premise license

Repository: pushed 2026-10-21T18:05:40Z; latest commit 2026-10-21T17:53:12Z; latest published release v0.22.1 (2026-10-21T18:17:25Z). Quick analysis: 6.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Toggl Track → solidtime: **partial**. Repository documents Toggl data import and project/task/client tracking with billable rates. Not full planning/integration parity; invoicing is excluded from Open Source. Validate imported data before switching. [1](https://github.com/solidtime-io/solidtime#features) [2](https://www.solidtime.io/pricing/on-premise)

[Category research and unresolved questions](../../research/categories/time-tracking.json) · [Research audit](../../research/audits/time-tracking.md) · [Sourced claims](../../research/claims/time-tracking.jsonl)
