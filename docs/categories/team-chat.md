# Team chat

Persistent team messaging, channels, direct messages, and collaborative conversations.

Audience: Employees and external collaborators across business functions and industries.. A cross-functional communication need shared by distributed and office-based teams; reach ranking is qualitative, not a headcount estimate.

Use-case sources: [1](https://slack.com/pricing), [2](https://www.microsoft.com/en-US/microsoft-teams/compare-microsoft-teams-business-options).

- [Microsoft Teams](https://www.microsoft.com/microsoft-teams): USD 4/seat/month, annual billing. Teams Essentials US annual subscription; Microsoft 365 bundles and enterprise editions differ. [Pricing](https://www.microsoft.com/en-US/microsoft-teams/compare-microsoft-teams-business-options).
  [Pricing tiers, organization and product reasons](../products/microsoft-teams.md).
- [Slack](https://slack.com): USD 7.25/seat/month, annual billing. Pro standard annual price per user/month; free plan available; temporary introductory discount excluded. [Pricing](https://slack.com/intl/en-us/pricing).
  [Pricing tiers, organization and product reasons](../products/slack.md).

### Zulip — A

All self-hosted software features included in every plan; no enterprise code tier. A applies to software, with separately priced vendor push relay disclosed.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/zulip/zulip/blob/502a6ba586f40532f15de9a25430028339d61f02/LICENSE), [edition evidence](https://zulip.com/plans/), [hosting](https://zulip.com/plans/), [repository](https://github.com/zulip/zulip).

Service costs/limits: Vendor-operated mobile push service for commercial organizations above 10 users requires a paid self-hosted plan; eligible communities can receive it free.

Repository: pushed 2026-10-21T19:55:53Z; latest commit 2026-10-21T19:55:53Z; latest published release 12.3 (2026-09-21T17:10:07Z). Quick analysis: 6.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Microsoft Teams → Zulip: **different-approach**. Beta Teams importer maps teams to channels; excludes DMs and private-channel messages. Keep Microsoft tenant active through migration; does not replace Office applications. [1](https://zulip.com/plans/) [2](https://zulip.com/help/import-from-microsoft-teams)
- Slack → Zulip: **different-approach**. Channel-plus-topic model differs from Slack threads; Slack export/import documented, private data availability depends on source export permissions. [1](https://zulip.com/plans/) [2](https://zulip.com/help/import-from-slack)

### Element Server Suite Community — B

Complete Matrix stack with Synapse, Matrix Authentication Service, Element Web and Element Call. Identified repo is suite deployment distribution, not just the client. No hard 100-user cap; commercial use allowed by repository FAQ, although vendor recommends Pro for commercial production.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/element-hq/ess-helm/blob/5fa05580d3f818beafa84fbd24b385e010e87c40/LICENSE-AGPL-3.0-only), [edition evidence](https://github.com/element-hq/ess-helm#editions), [hosting](https://element.io/en/server-suite), [repository](https://github.com/element-hq/ess-helm).

Paid restrictions: ESS Pro adds Synapse Pro autoscaling, high availability and multi-tenancy.; Advanced IAM, audit/compliance and central management are Pro features.

Repository: pushed 2026-10-21T20:57:02Z; latest commit 2026-10-21T15:43:20Z; latest published release 26.10.2 (2026-10-16T14:35:20Z). Quick analysis: 6.1/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Microsoft Teams → Element Server Suite Community: **different-approach**. Matrix rooms, federation and encryption provide a different messaging architecture. Plan identities and history transfer separately; no verified one-click history importer or bridge parity claimed. Does not reproduce Microsoft 365 applications. [1](https://github.com/element-hq/ess-helm#editions)
- Slack → Element Server Suite Community: **different-approach**. Matrix rooms, federation and encryption differ from Slack channels and app workflows. Plan identity, integration and history transfer separately; no verified one-click importer or bridge parity claimed. [1](https://github.com/element-hq/ess-helm#editions)

### Mattermost Team Edition — C

Core source AGPLv3; designated webapp/admin/config folders Apache-2.0; vendor-compiled Team binary MIT. Enterprise code separately commercial. Tier C because everyday group calls/guests are gated. Proprietary Entry free mode is separate; its 10,000-message cap does not apply to Team. Vendor positions Team below 250 activated users.

License: AGPL-3.0-only AND Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/mattermost/mattermost/blob/5a5cbfc306bb943ae8a6a9bb2f5cac85474d7189/LICENSE.txt), [edition evidence](https://docs.mattermost.com/product-overview/plans), [hosting](https://docs.mattermost.com/product-overview/editions-and-offerings), [repository](https://github.com/mattermost/mattermost).

Paid restrictions: Group calling and guest accounts excluded from Team Edition.; SSO removed from Team Edition; advanced identity, permissions, compliance and HA in proprietary editions.

Repository: pushed 2026-10-21T21:13:41Z; latest commit 2026-10-21T20:38:11Z; latest published release v12.0.0 (2026-10-14T10:08:59Z). Quick analysis: 7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Microsoft Teams → Mattermost Team Edition: **partial**. Partial replacement for persistent channels/DMs. Team lacks group calls and SSO; no verified Teams history importer; meetings and Office-file workflows need separate replacements. [1](https://docs.mattermost.com/product-overview/plans)
- Slack → Mattermost Team Edition: **partial**. Team offers channels, DMs and core search, but no group calls or guest accounts. Current Slack migration guide targets Entry/paid editions; Team import parity requires verification; integrations must be rebuilt. [1](https://docs.mattermost.com/product-overview/plans) [2](https://docs.mattermost.com/administration-guide/onboard/migrate-from-slack)

### Rocket.Chat Community — C

MIT core excludes ee directories and third-party license exceptions. Proprietary premium-enabled Starter free plan (50 registered users) is separate from Community. Routine collaboration limits justify C. Current paid plans Commercial/Government/Defense; Pro became legacy April 29, 2026.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/RocketChat/Rocket.Chat/blob/aa3ad515571152850b67ba8ac2f60ec7a51deab1/LICENSE), [edition evidence](https://docs.rocket.chat/docs/our-plans), [hosting](https://docs.rocket.chat/docs/our-plans), [repository](https://github.com/RocketChat/Rocket.Chat).

Paid restrictions: Community documented for up to 100 concurrent users; vendor push capped at 10,000/month.; Community limited app integrations and video integrations (Jitsi/BigBlueButton only); advanced identity/governance and air-gapped offering require premium plan.

Repository: pushed 2026-10-21T21:25:33Z; latest commit 2026-10-21T18:10:44Z; latest published release 8.9.0 (2026-10-05T17:41:21Z). Quick analysis: 5.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Microsoft Teams → Rocket.Chat Community: **partial**. Core messaging replacement with Community concurrency/push/integration limits. No verified Teams history import; Microsoft 365 apps and meeting workflows need separate replacements. [1](https://docs.rocket.chat/docs/our-plans)
- Slack → Rocket.Chat Community: **partial**. Slack importer handles users/channels/messages; attachments need a separate pending-file download step and existing usernames can be skipped. Community edition limits remain. [1](https://docs.rocket.chat/docs/our-plans) [2](https://docs.rocket.chat/docs/import-from-slack)

[Category research and unresolved questions](../../research/categories/team-chat.json) · [Research audit](../../research/audits/team-chat.md)
