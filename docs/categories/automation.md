# Workflow automation

Connect business apps and automate multi-step processes with triggers, actions and orchestration.

Audience: Business operations, sales, marketing, IT and other teams connecting everyday applications.. Cross-department workflow integration; relevant across industries, but requires processes that benefit from automation.

Use-case sources: [1](https://zapier.com/pricing), [2](https://www.make.com/pricing).

- [Make](https://www.make.com/pricing): entry amount unverified/quote, monthly billing. Usage credits verified; plan-price widget absent from retrieved page. Entry amount and billing basis need verification; monthly is provisional. [Pricing](https://www.make.com/pricing).
  [Pricing tiers, organization and product reasons](../products/make.md).
- [Zapier](https://zapier.com/pricing): USD 19.99/account/month, annual billing. Professional advertised from USD19.99/month; yearly toggle, usage tiers apply. Free plan is 100 tasks and two-step Zaps. [Pricing](https://zapier.com/pricing).
  [Pricing tiers, organization and product reasons](../products/zapier.md).

### Node-RED — A

Node-RED editor/runtime are Apache-2.0, self-hostable and commercially hostable. No paid core edition identified in official product documentation. FlowFuse hosting and enterprise fleet management are a separate platform, outside this record. Third-party nodes have independent licenses.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/node-red/node-red/blob/df0a87cce1a243e21a2e0eb0fdbdbb8c4732392f/LICENSE), [edition evidence](https://nodered.org/about/), [hosting](https://flowfuse.com/product/hub/), [repository](https://github.com/node-red/node-red).

[Sponsors, requirements, installation options, pricing and product profile](../products/node-red.md).

Repository: pushed 2026-10-21T12:16:00Z; latest commit 2026-10-21T10:23:37Z; latest published release 5.0.9 (2026-10-21T10:29:19Z). Quick analysis: 7.6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Make → Node-RED: **different-approach**. Rebuild triggers/actions as Node-RED flows; JSON flow import/export is native, but no Zap/Make importer verified. Connector availability, OAuth setup and runtime operations need checking. Best for technical operators. [1](https://nodered.org/about/) [2](https://www.make.com/pricing)
- Zapier → Node-RED: **different-approach**. Rebuild triggers/actions as Node-RED flows; JSON flow import/export is native, but no Zap/Make importer verified. Connector availability, OAuth setup and runtime operations need checking. Best for technical operators. [1](https://nodered.org/about/) [2](https://zapier.com/pricing)

### Windmill — C

Non-enterprise source build is AGPLv3 with Apache client/spec components; proprietary snippets excluded. Commercial hosting of AGPL build is possible subject to AGPL. Vendor Community binaries are separately restricted, not the OSS artifact identified here. Workflow features are paid, so C.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/windmill-labs/windmill/blob/01084cd405ed930b340c729a73f904287b2e353e/LICENSE), [edition evidence](https://www.windmill.dev/pricing), [hosting](https://www.windmill.dev/docs/advanced/self_host), [repository](https://github.com/windmill-labs/windmill).

[Sponsors, requirements, installation options, pricing and product profile](../products/windmill.md).

Paid restrictions: Kafka/NATS/SQS/cloud-event triggers and SQL Server/Oracle runtimes paid.; Content search, workspace error handlers, some Git/deployment features and enterprise governance paid.; Published free edition has workspace/user/group quotas; vendor Community Docker/release binaries include proprietary code with resale, hosting and modification restrictions.

Repository: pushed 2026-10-21T20:42:23Z; latest commit 2026-10-21T20:04:23Z; latest published release v1.846.1 (2026-10-21T20:05:13Z). Quick analysis: 6.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Make → Windmill: **different-approach**. Developer-oriented scripts, schedules and flow orchestration; translate integrations and code rather than import Zaps/scenarios. Build OSS source if unrestricted AGPL hosting needed; common enterprise/event features paid. [1](https://www.windmill.dev/pricing) [2](https://www.make.com/pricing)
- Zapier → Windmill: **different-approach**. Developer-oriented scripts, schedules and flow orchestration; translate integrations and code rather than import Zaps/scenarios. Build OSS source if unrestricted AGPL hosting needed; common enterprise/event features paid. [1](https://www.windmill.dev/pricing) [2](https://zapier.com/pricing)

### n8n — S

Root core license restricts use and distribution by purpose, so not OSI OSS. EE files separately licensed; self-hosting does not change classification. Retained as a clearly marked source-available comparison, excluded from OSS recommendations.

License: LicenseRef-Sustainable-Use-1.0; identified core OSI: no/unresolved; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/n8n-io/n8n/blob/58f11bf0cf5e384efa7f6818fc940ff5ed8200a9/LICENSE.md), [edition evidence](https://docs.n8n.io/deploy/host-n8n/community-edition-features.md), [hosting](https://n8n.io/pricing/), [repository](https://github.com/n8n-io/n8n).

[Sponsors, requirements, installation options, pricing and product profile](../products/n8n.md).

Paid restrictions: Workflow and credential sharing, projects, custom variables, Git environments and SSO require paid plans.; Sustainable Use License restricts commercial redistribution/hosted resale; internal business use permitted.

Repository: pushed 2026-10-21T21:28:25Z; latest commit 2026-10-21T16:26:54Z; latest published release n8n@2.44.5 (2026-10-21T07:26:46Z). Quick analysis: 5.6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Make → n8n: **partial**. Visual node workflows overlap, but workflow/credential sharing is paid and licensing is source available. Rebuild automations and reauthorize credentials; no drop-in migration verified. [1](https://docs.n8n.io/deploy/host-n8n/community-edition-features.md) [2](https://www.make.com/pricing)
- Zapier → n8n: **partial**. Visual node workflows overlap, but workflow/credential sharing is paid and licensing is source available. Rebuild automations and reauthorize credentials; no drop-in migration verified. [1](https://docs.n8n.io/deploy/host-n8n/community-edition-features.md) [2](https://zapier.com/pricing)

### Activepieces — U

Core outside packages/ee and server API ee paths is MIT; enterprise paths use a different license. Official installation distinguishes Community from EE; current pricing combines cloud/on-prem paid plans without an unambiguous MIT Community matrix. Do not impose hosted credit/BYO-key limits on MIT source without verification. Commercial use/hosting of MIT core permitted; enterprise embedding requires separate terms.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/activepieces/activepieces/blob/252ea9e53984357ad2edc6605d7cec89087c8f92/LICENSE), [edition evidence](https://www.activepieces.com/pricing), [hosting](https://www.activepieces.com/docs/install/options/docker-compose), [repository](https://github.com/activepieces/activepieces).

[Sponsors, requirements, installation options, pricing and product profile](../products/activepieces.md).

Paid restrictions: Commercial cloud/on-prem plans gate projects, shared global connections, Git releases and governance; exact boundaries of MIT Community Edition still need confirmation.

Repository: pushed 2026-10-21T21:08:38Z; latest commit 2026-10-21T17:01:59Z; latest published release 0.92.3 (2026-10-12T18:43:34Z). Quick analysis: 5.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Make → Activepieces: **partial**. Visual trigger/step workflow model overlaps; rebuild incumbent automations and verify every integration/action. MIT Community paid-feature boundaries unresolved; no automatic Zap/Make import verified. [1](https://www.activepieces.com/pricing) [2](https://www.make.com/pricing)
- Zapier → Activepieces: **partial**. Visual trigger/step workflow model overlaps; rebuild incumbent automations and verify every integration/action. MIT Community paid-feature boundaries unresolved; no automatic Zap/Make import verified. [1](https://www.activepieces.com/pricing) [2](https://zapier.com/pricing)

[Category research and unresolved questions](../../research/categories/automation.json) · [Research audit](../../research/audits/automation.md)
