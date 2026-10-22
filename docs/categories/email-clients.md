# Email clients and webmail

Desktop email clients and browser webmail for individual mailbox workflows.

Audience: Individuals and organizations reading, organizing, and sending email across existing mail accounts.. Personal and work email spans occupations and organization sizes; desktop and browser access serve general mailbox needs. Shared customer-support operations are a separate capability.

Use-case sources: [1](https://www.thunderbird.net/en-US/desktop/), [2](https://roundcube.net/about/), [3](https://help.front.com/en/articles/2054).

- [Front](https://front.com/): USD 25/seat/month, annual billing. Starter, billed annually, up to 10 seats; individual inbox included when email is the single channel type. Primarily a collaborative customer-service platform. [Pricing](https://front.com/pricing).
- [Microsoft Outlook](https://www.microsoft.com/en-us/microsoft-365/outlook): USD 19.99/account/year, annual billing. Microsoft 365 Basic, US annual price; includes ad-free Outlook and 100 GB mailbox. Free Outlook also exists; this record represents paid subscription benefits, not an OSS edition. [Pricing](https://www.microsoft.com/en-us/microsoft-365/outlook/outlook-email-plans-and-pricing).
  [Pricing tiers, organization and product reasons](../products/microsoft-outlook.md).

### Roundcube — A

Identified edition is core Roundcube webmail: GPLv3-or-later with custom skins/plugins exception, freely deployable and listing unlimited users/messages. The exception permits separately licensed commercial plugins; such plugins are not represented as included. Nextcloud sells enterprise support/SLA and optional separate server bundles; no core webmail feature paywall identified. Hosted availability refers to independent providers listed by the project, not a first-party Roundcube SaaS.

License: GPL-3.0-or-later; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/roundcube/roundcubemail/blob/d70bb19622238b206f0f636e847e80815a4d1f76/LICENSE.md), [edition evidence](https://roundcube.net/about/), [hosting](https://roundcube.net/about/), [repository](https://github.com/roundcube/roundcubemail).

Service costs/limits: Requires a web/PHP/database deployment plus compatible IMAP and SMTP services; Roundcube alone does not provide mailbox hosting or email delivery.; Calendar and multi-account extensions are listed as third-party additions; verify their licenses and availability separately.; Hosted mail services and enterprise support can cost money without restricting the core webmail software.

Repository: pushed 2026-10-21T17:50:22Z; latest commit 2026-10-21T17:36:21Z; latest published release 1.7.5 (2026-10-19T07:02:13Z). Quick analysis: 6.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Microsoft Outlook → Roundcube: **different-approach**. Browser webmail alternative for ordinary mailbox access using your own compatible IMAP/SMTP service. Requires server deployment; contacts and messages have import/export tools. Core Roundcube is not a replacement for the Microsoft 365 suite, hosted mailbox service, or Exchange calendar workflows; calendars are third-party additions. [1](https://roundcube.net/about/) [2](https://roundcube.net/download/) [3](https://www.microsoft.com/en-us/microsoft-365/outlook/outlook-email-plans-and-pricing)

### Thunderbird — A

Desktop client operated locally on Windows, Linux, and macOS; A describes the freely available client functionality, not server hosting. Official pages call it free forever and link MPL 2.0. Dependencies/other-licenses have separate notices; not every bundled file is MPL. Current developer docs and repository identify thunderbird/thunderbird-desktop as official, superseding use of the experimental Mozilla GitHub copy as canonical.

License: MPL-2.0; identified core OSI: yes; self-hostable: no; first-party hosted offer: no. [License](https://github.com/thunderbird/thunderbird-desktop/blob/453702ff89d8169eed2a94d19057a95613394df1/mail/base/content/aboutDialog.xhtml), [edition evidence](https://www.thunderbird.net/en-US/desktop/), [hosting](https://www.tb.pro/en-US/), [repository](https://github.com/thunderbird/thunderbird-desktop).

Service costs/limits: Requires an existing email account/mail service; the desktop client is not an IMAP/SMTP server or hosted webmail.; Thundermail is a separate optional paid mail-hosting service in beta/waitlist; it does not paywall the desktop client.

Repository: pushed 2026-10-21T21:56:23Z; latest commit 2026-10-21T21:30:33Z; latest published release unverified or unavailable (n/a). Quick analysis: 3.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Front → Thunderbird: **partial**. Only the individual-email portion of Front is comparable: connect existing mail accounts and organize personal mail locally. Front individual inboxes also participate in comments, sharing and delegation. No parity or migration path is asserted for Front shared inboxes, assignments, team comments, ticketing, analytics, or automation. [1](https://help.front.com/en/articles/2054) [2](https://www.thunderbird.net/en-US/desktop/) [3](https://front.com/pricing)
- Microsoft Outlook → Thunderbird: **partial**. Local alternative for email, calendars, contacts, tasks, and multi-account organization. Reconnect mail accounts using supported authentication; Microsoft-hosted accounts may require OAuth, SMTP enablement, and administrator consent. Full Exchange/calendar or Microsoft 365 suite parity is not asserted. Existing subscription storage/security benefits are separate from the client. [1](https://www.thunderbird.net/en-US/desktop/) [2](https://support.mozilla.org/en-US/kb/microsoft-oauth-authentication-and-thunderbird-202) [3](https://www.microsoft.com/en-us/microsoft-365/outlook/outlook-email-plans-and-pricing)

[Category research and unresolved questions](../../research/categories/email-clients.json) · [Research audit](../../research/audits/email-clients.md) · [Sourced claims](../../research/claims/email-clients.jsonl)
