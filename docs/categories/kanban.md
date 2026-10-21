# Kanban

Visual boards for team tasks and workflow stages.

Audience: Teams across business functions managing shared tasks.. Trello explicitly targets marketing, product, engineering, design, startups and remote teams; useful across functions without requiring a specialist role.

Use-case sources: [1](https://trello.com/pricing).

- [Trello](https://trello.com/): USD 5/seat/month, annual billing. Standard USD5 per user/month annually; USD6 billed monthly. Free tier also available. [Pricing](https://trello.com/pricing).

### Kanboard — A

Single free MIT self-hosted product; documented automation, LDAP/OAuth, task management and analytics available without a paid edition. Third-party plugin licenses and services must be checked separately. No first-party managed hosting identified.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/kanboard/kanboard/blob/e197e71af4ff9f371b931ab0338b2b41827e6394/LICENSE), [edition evidence](https://kanboard.org/), [hosting](https://docs.kanboard.org/v1/admin/faq/), [repository](https://github.com/kanboard/kanboard).

Repository: pushed 2026-10-21T21:27:19Z; latest commit 2026-10-21T21:26:09Z; latest published release v1.2.55 (2026-10-21T00:57:56Z). Quick analysis: 5.6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Trello → Kanboard: **partial**. Boards and task automation fit visual team workflows. Kanboard offers APIs/plugins; Trello Power-Ups and rules require rebuilding. No validated direct Trello importer in this review; no official native mobile client, responsive web UI available. [1](https://kanboard.org/) [2](https://docs.kanboard.org/v1/admin/plugins/) [3](https://docs.kanboard.org/v1/admin/faq/)

### WeKan — A

Official commercial-support page explicitly states all code is MIT and no proprietary code. Hosting/support and funded features commercial; released self-hosted functionality not edition-gated.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/wekan/wekan/blob/70ede2148acd2f16a73a755a0f5b765f68916905/LICENSE), [edition evidence](https://wekan.fi/commercial-support/), [hosting](https://wekan.fi/saas/), [repository](https://github.com/wekan/wekan).

Repository: pushed 2026-10-21T15:30:59Z; latest commit 2026-10-21T15:29:38Z; latest published release v12.58 (2026-10-21T15:38:28Z). Quick analysis: 5.9/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Trello → WeKan: **partial**. Comparable boards, lists, cards, labels, due dates and checklists. Trello Power-Ups and Butler rules require replacement; official page describes a Trello JSON/attachment downloader and import work, so test attachment import rather than assuming full migration. [1](https://wekan.fi/) [2](https://trello.com/pricing)

### PLANKA — S

Source-available candidate retained for explicitly labelled comparison only; hidden by default from OSS recommendations. Current custom Community/Fair Use License restricts fields of use; Pro files separately commercial.

License: LicenseRef-PLANKA-Community-1.1; identified core OSI: no/unresolved; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/plankanban/planka/blob/627701dda3459fa25830b0fd5bb2f5668d033284/LICENSE.md), [edition evidence](https://planka.app/features), [hosting](https://planka.app/), [repository](https://github.com/plankanban/planka).

Paid restrictions: Commercial third-party hosting or business account sharing across organizations requires commercial license; Guest/worker roles and OIDC SSO; Calendar and timeline views; Board/card templates and recurring cards; Public boards; PDF and HTML export; Advanced global search

Repository: pushed 2026-10-21T07:14:22Z; latest commit 2026-09-17T01:51:52Z; latest published release v2.2.1 (2026-08-10T16:30:06Z). Quick analysis: 6.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Trello → PLANKA: **partial**. Source-available comparison only, hidden by default from OSS recommendations. Boards/cards/checklists and board import available, but Pro required for calendar, templates, public boards and exports; commercial third-party hosting and cross-organization business use restricted by license. Test import coverage before migration. [1](https://planka.app/features) [2](https://github.com/plankanban/planka/blob/627701dda3459fa25830b0fd5bb2f5668d033284/LICENSE.md)

[Category research and unresolved questions](../../research/categories/kanban.json) · [Research audit](../../research/audits/kanban.md)
