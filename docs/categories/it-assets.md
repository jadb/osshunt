# IT asset management

Hardware/software asset inventory, ownership and lifecycle records; discovery and service-management capabilities differ.

Audience: IT, procurement and operations teams managing organization devices and software inventory.. Assets affect most staff, but the direct operators and buyers are IT and procurement specialists rather than all employees.

Use-case sources: [1](https://snipeitapp.com/product), [2](https://www.glpi-project.org/en/cmdb-software/).

- [Freshservice IT Asset Management](https://www.freshworks.com/freshservice/itam/): entry amount unverified/quote, quote billing. Quote for current ITAM plan and weighted asset units (packs of 500), with additional IT-plan requirements. One desktop equals 1 AU, server/VM/network device 4 AU; not a flat per-device or agent-seat price. [Pricing](https://www.freshworks.com/freshservice/itam/pricing/).
  [Pricing tiers, organization and product reasons](../products/freshservice-itam.md).
- [Lansweeper](https://www.lansweeper.com/): entry amount unverified/quote, annual billing. Starter includes 2,000 assets and unlimited seats; billed annually. Page extraction combines multiple currency amounts without reliable currency labels, so entry amount remains unverified. [Pricing](https://www.lansweeper.com/pricing/).
  [Pricing tiers, organization and product reasons](../products/lansweeper.md).

### Snipe-IT — A

AGPLv3 self-operated asset management; official FAQ explicitly confirms hosted and free installations use the same software. Hosting, maintenance and priority support are services. Third-party integrations may have separate terms.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/grokability/snipe-it/blob/6b0d2751417d49e7b7707eb57b8d1250012937d4/LICENSE), [edition evidence](https://snipeitapp.com/faq), [hosting](https://snipeitapp.com/pricing), [repository](https://github.com/grokability/snipe-it).

[Sponsors, requirements, installation options, pricing and product profile](../products/snipe-it.md).

Service costs/limits: Managed hosting tiers differ in infrastructure, API rate limits, LDAP resources and support; self-hosters operate their own server.; Discovery integrations can require separate MDM/RMM systems; Snipe-IT does not supply its own network discovery agent.

Repository: pushed 2026-10-21T21:59:49Z; latest commit 2026-10-21T21:59:43Z; latest published release v8.8.2 (2026-10-21T19:23:26Z). Quick analysis: 5.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Freshservice IT Asset Management → Snipe-IT: **partial**. Rebuild asset assignments, ownership and license records using CSV/API and validate identifiers/history. Snipe-IT is a lifecycle record system; independent network discovery, vulnerability enrichment, ITSM workflows and application mapping need separate integrations. [1](https://snipeitapp.com/product) [2](https://snipeitapp.com/faq) [3](https://www.freshworks.com/freshservice/itam/pricing/)
- Lansweeper → Snipe-IT: **partial**. Rebuild asset assignments, ownership and license records using CSV/API and validate identifiers/history. Snipe-IT is a lifecycle record system; independent network discovery, vulnerability enrichment, ITSM workflows and application mapping need separate integrations. [1](https://snipeitapp.com/product) [2](https://snipeitapp.com/faq) [3](https://www.lansweeper.com/pricing/)

### GLPI — C

GPLv3 core with free asset inventory/CMDB; GLPI Network sells access to exclusive plugins covering everyday cloud inventory, integrations and reporting as well as administration. Community-plugin support subscriptions do not make those public plugins paid-only. Plugin licenses were not individually audited.

License: GPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/glpi-project/glpi/blob/3e5222b59a2cb116c5bf7fe27b9c794ca44d63d5/LICENSE), [edition evidence](https://www.glpi-project.org/en/plugins/), [hosting](https://www.glpi-project.org/en/pricing/), [repository](https://github.com/glpi-project/glpi).

[Sponsors, requirements, installation options, pricing and product profile](../products/glpi.md).

Paid restrictions: Subscriber-exclusive Cloud Inventory retrieves assets from cloud services.; Subscriber-exclusive collaborative notifications and advanced dashboard plugins; OAuth SSO/SCIM and other extensions also vary by subscription.

Repository: pushed 2026-10-21T07:09:10Z; latest commit 2026-10-21T07:09:10Z; latest published release 12.0.0 (2026-10-07T12:12:42Z). Quick analysis: 5.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Freshservice IT Asset Management → GLPI: **partial**. Configure inventory collectors, map assets/relationships and validate imports. GLPI covers inventory/CMDB with broader ITSM options, but cloud discovery and selected integration/reporting plugins require subscriptions. Do not assume Lansweeper OT/vulnerability enrichment or Freshservice service mapping parity. [1](https://www.glpi-project.org/en/cmdb-software/) [2](https://www.glpi-project.org/en/plugins/) [3](https://www.freshworks.com/freshservice/itam/pricing/)
- Lansweeper → GLPI: **partial**. Configure inventory collectors, map assets/relationships and validate imports. GLPI covers inventory/CMDB with broader ITSM options, but cloud discovery and selected integration/reporting plugins require subscriptions. Do not assume Lansweeper OT/vulnerability enrichment or Freshservice service mapping parity. [1](https://www.glpi-project.org/en/cmdb-software/) [2](https://www.glpi-project.org/en/plugins/) [3](https://www.lansweeper.com/pricing/)

[Category research and unresolved questions](../../research/categories/it-assets.json) · [Research audit](../../research/audits/it-assets.md) · [Sourced claims](../../research/claims/it-assets.jsonl)
