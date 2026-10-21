# Support and helpdesk

Customer support ticketing, shared inboxes, chat and self-service.

Audience: Businesses handling customer questions and service requests; dedicated support teams.. Support crosses retail, software and services and spans small businesses through enterprises; dedicated tooling becomes relevant once shared inbox workflows become insufficient.

Use-case sources: [1](https://www.zendesk.com/pricing/), [2](https://www.intercom.com/pricing), [3](https://zammad.com/en/pricing).

- [Intercom](https://www.intercom.com): USD 29/seat/month, annual billing. Essential USD29 per seat/month annual; Fin AI starts USD0.99 per outcome; channel usage and add-ons can cost extra. [Pricing](https://www.intercom.com/pricing).
- [Zendesk](https://www.zendesk.com): USD 19/seat/month, annual billing. Support Team USD19 per agent/month billed yearly; omnichannel Suite Team starts USD55. [Pricing](https://www.zendesk.com/pricing/).

### Zammad — A

Official knowledge base confirms Community and Support Contract self-hosted packages identical; hosted feature tiers separate from self-hosted availability.

License: AGPL-3.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/zammad/zammad/blob/ecb3084231cb27b470eb89f4c182f7fa4032ce8b/LICENSE), [edition evidence](https://support.zammad.com/help/en-us/51-getting-started/38-what-s-the-difference-between-the-community-and-the-support-contract-versions), [hosting](https://zammad.com/en/pricing), [repository](https://github.com/zammad/zammad).

Repository: pushed 2026-10-21T20:45:45Z; latest published release none on this repository (n/a). Quick analysis: 4.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Zendesk → Zammad: **partial**. Support ticketing and workflows alternative. Official migration service supports Zendesk; migration overwrites target data, so use a fresh instance and test mapping first. Professional migration/support services may cost extra. [1](https://support.zammad.com/help/en-us/51-getting-started/30-i-m-on-zendesk-freshdesk-otrs-kayako-saas-how-do-i-make-the-switch-to-zammad) [2](https://zammad.com/en/pricing)

### Chatwoot — C

MIT applies to core outside enterprise/; enterprise/ separately licensed and not claimed OSI. Official self-hosted matrix gates voice, AI and capacity workflows as well as enterprise controls.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/chatwoot/chatwoot/blob/a8487abf5c5b54960f2375e8c613fe72711077fa/LICENSE), [edition evidence](https://www.chatwoot.com/pricing/self-hosted-plans), [hosting](https://www.chatwoot.com/pricing/), [repository](https://github.com/chatwoot/chatwoot).

Paid restrictions: Captain AI; Voice calls; Custom branding; Agent capacity management; Roles and permissions; SSO/SAML; SLA policies

Repository: pushed 2026-10-21T20:49:08Z; latest published release v4.19.0 (2026-10-20T12:52:53Z). Quick analysis: 4.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Intercom → Chatwoot: **partial**. Shared support inbox and chat alternative. Community excludes voice, AI, agent capacity, SSO and SLA. Verify channel integrations and historical message import separately; no migration parity established. [1](https://www.chatwoot.com/pricing/self-hosted-plans) [2](https://www.chatwoot.com/pricing/)
- Zendesk → Chatwoot: **partial**. Shared support inbox and chat alternative. Community excludes voice, AI, agent capacity, SSO and SLA. Verify channel integrations and historical message import separately; no migration parity established. [1](https://www.chatwoot.com/pricing/self-hosted-plans) [2](https://www.chatwoot.com/pricing/)

### FreeScout — C

Unlimited core agents/tickets/mailboxes. Everyday workflow extensions sold separately with lifetime per-instance licenses; official module page says modules AGPL3. Tier C denotes paid acquisition, not proprietary licensing. No first-party cloud service; third-party hosting available.

License: AGPL-3.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/freescout-help-desk/freescout/blob/56c4d014cfbd5e0b038cc887d71e0c75fd6c3f1b/LICENSE), [edition evidence](https://freescout.net/modules/), [hosting](https://github.com/freescout-help-desk/freescout/wiki/Cloud-Hosted-FreeScout), [repository](https://github.com/freescout-help-desk/freescout).

Paid restrictions: Paid module acquisition: saved replies; Paid modules: tags and custom fields; Paid modules: workflows and SLA; Paid modules: API/webhooks and reports; Paid modules: knowledge base and customer portal

Repository: pushed 2026-10-21T10:10:33Z; latest published release 1.8.248 (2026-10-17T05:01:00Z). Quick analysis: 5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Zendesk → FreeScout: **partial**. Lightweight shared inbox/ticket support. Official migration guide requires API/Webhooks module; custom fields/tags need their modules. Ticket numbers cannot be preserved; imported chat threads lose messenger connection, so replies cannot reach original chat customer. [1](https://freescout.net/) [2](https://github.com/freescout-help-desk/freescout/wiki/Migrate-to-FreeScout)

[Category research and unresolved questions](../../research/categories/support-helpdesk.json) · [Research audit](../../research/audits/support-helpdesk.md)
