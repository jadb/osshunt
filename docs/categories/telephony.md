# Telephony

Business voice calling, PBX and call-center telephony, including self-operated communications engines.

Audience: Business phone users, sales and support teams, telephony administrators and communications developers.. Business calling spans many departments and industries; operating the OSS engines requires specialist communications skills.

Use-case sources: [1](https://aircall.io/pricing/), [2](https://www.asterisk.org/products/ip-pbx/).

- [Aircall](https://aircall.io): USD 30/seat/month, annual billing. Essentials US list price per license/month billed annually; minimum 3 licenses ($90/month equivalent), before applicable usage/add-ons. [Pricing](https://aircall.io/pricing/).
  [Pricing tiers, organization and product reasons](../products/aircall.md).
- [RingCentral RingEX](https://www.ringcentral.com): USD 20/seat/month, annual billing. Core US list price per user/month paid annually; official search-indexed pricing card. Canonical page extraction omitted the card; regional offers and add-ons differ. [Pricing](https://www.ringcentral.com/office/plansandpricing.html?bmid=SEM2301GGL964077).
  [Pricing tiers, organization and product reasons](../products/ringcentral.md).

### Asterisk — C

Core Asterisk source is OSI GPLv2 with documented linking exceptions; Certified Asterisk source remains freely usable. Tier C reflects separately licensed same-vendor ordinary voice functionality: the G.729 transcoding binary is paid per channel, which affects media-processing workflows when that codec is required. This does not imply all calling requires paid modules; other codecs are available. Asterisk is a developer engine, not a turnkey business calling workspace. First-party PBXact Cloud is a separate Asterisk-derived managed PBX, not source-edition parity. Other vendor binary add-ons require their own license checks.

License: GPL-2.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/asterisk/asterisk/blob/5aee26c05116ab2d7d2f68d741fe98649d0c504d/LICENSE), [edition evidence](https://www.asterisk.org/products/add-ons/g729-codec/), [hosting](https://www.asterisk.org/products/add-ons/), [repository](https://github.com/asterisk/asterisk).

[Sponsors, requirements, installation options, pricing and product profile](../products/asterisk.md).

Paid restrictions: Sangoma G.729 transcoding codec is licensed per concurrent channel ($8 USD listed); G.729-dependent recording, conferencing and DTMF processing require decoding rather than passthrough.

Service costs/limits: PSTN calling requires carrier connectivity, phone numbers and applicable usage charges; these are service costs, not source-code gates.; Self-operation requires server administration, SIP endpoints, dialplan configuration and integrations.

Repository: pushed 2026-10-20T18:46:38Z; latest commit 2026-10-20T18:46:37Z; latest published release certified-22.8-cert5 (2026-10-19T17:02:17Z). Quick analysis: 4.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- RingCentral RingEX → Asterisk: **different-approach**. Can rebuild calling, routing, IVR, queues and voicemail using the Asterisk engine. RingEX meetings/chat apps, turnkey administration and integrations are separate workflows; plan endpoint provisioning, carrier/number migration and custom integration work. No verified automatic configuration or call-history importer. [1](https://www.asterisk.org/get-started/features/) [2](https://www.asterisk.org/products/ip-pbx/) [3](https://www.ringcentral.com/office/plansandpricing.html?bmid=SEM2301GGL964077)

### FreeSWITCH — C

Core public source is OSI MPL-1.1 per current HEAD LICENSE, with additional component notices. Tier C reflects same-vendor paid ordinary voice functionality in separately distributed proprietary AMD and G.729 modules, not carrier/service charges. Advantage/Pro builds and support are commercial offerings. First-party SignalWire Platform adds private modules and managed APIs; hostedOffer does not imply application or source parity. Marketing license card differs from repository LICENSE; source evidence controls this record.

License: MPL-1.1; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/signalwire/freeswitch/blob/12ac48ab9e692d645b91b83bab89a85abdc3af53/LICENSE), [edition evidence](https://developer.signalwire.com/freeswitch/module-reference/commercial-modules/), [hosting](https://signalwire.com/developers/freeswitch), [repository](https://github.com/signalwire/freeswitch).

[Sponsors, requirements, installation options, pricing and product profile](../products/freeswitch.md).

Paid restrictions: Commercial mod_com_amd answering-machine detection requires per-channel licences; module is outside the public source tree.; Commercial mod_com_g729 G.729A encoding/decoding requires per-channel licences; passthrough is distinct from transcoding.

Service costs/limits: Official prebuilt packages/downloads require a free SignalWire account; public source remains available on GitHub.; Phone numbers, SIP/PSTN trunks, hosting and call usage can incur separate charges.; Building an agent desktop, CRM workflows, dashboards and production operations requires additional software and engineering.

Repository: pushed 2026-10-09T20:37:28Z; latest commit 2026-10-09T20:37:26Z; latest published release v1.11.3 (2026-08-28T22:27:30Z). Quick analysis: 4.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Aircall → FreeSWITCH: **different-approach**. FreeSWITCH offers routing, IVR, recording and queue/call-center primitives for a custom voice system. Aircall supplies a shared workspace, CRM integrations and analytics; those workflows need other applications or development. Retain/export required recordings and reporting separately; no verified Aircall migration importer. Carrier/number transfer needs provider coordination. [1](https://developer.signalwire.com/freeswitch/reference/signalwire-map/) [2](https://signalwire.com/developers/freeswitch) [3](https://aircall.io/pricing/)

[Category research and unresolved questions](../../research/categories/telephony.json) · [Research audit](../../research/audits/telephony.md) · [Sourced claims](../../research/claims/telephony.jsonl)
