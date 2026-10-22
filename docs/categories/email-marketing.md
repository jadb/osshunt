# Email marketing

Newsletters, subscriber segmentation, campaigns and marketing automation.

Audience: Businesses, charities and publishers communicating with prospects and customers.. Customer communication spans industries and organization sizes, although primarily used by marketing and business owners.

Use-case sources: [1](https://mailchimp.com/pricing/marketing/), [2](https://listmonk.app/), [3](https://mautic.org/about/).

- [Mailchimp](https://mailchimp.com/): USD 13/account/month, monthly billing. Essentials displayed $13/month for 12 months at base contact selection; contact and email volume affect price and overages. Free tier limited to 250 contacts/500 sends monthly; Essentials automation limited to 4 flow steps. Verify selected contact count and renewal price before purchase. [Pricing](https://mailchimp.com/pricing/marketing/).
  [Pricing tiers, organization and product reasons](../products/mailchimp.md).

### Keila — A

Official site explicitly excludes proprietary premium features; cloud and self-hosted use the same software. All hosted plans include all features.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/pentacent/keila/blob/c8f49bd9a323b9a90739969736c387457efe98bf/LICENSE.md), [edition evidence](https://www.keila.io/open-source-mailchimp-alternative/), [hosting](https://www.keila.io/pricing/), [repository](https://github.com/pentacent/keila).

[Sponsors, requirements, installation options, pricing and product profile](../products/keila.md).

Service costs/limits: Keila Cloud starts at EUR 8/month for 2,000 emails, with unlimited contacts/projects. Self-hosting needs server/PostgreSQL and SMTP or another email transport service. These service costs are not feature locks.

Repository: pushed 2026-10-20T20:08:36Z; latest commit 2026-10-20T20:08:35Z; latest published release 0.30.3 (2026-09-06T09:30:31Z). Quick analysis: 6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Mailchimp → Keila: **partial**. Newsletter campaigns, signup forms, segmentation and CSV/API portability. Marketing automation and A/B tests are not yet available per official comparison; smaller native integration ecosystem; rebuild templates and integrations. [1](https://www.keila.io/open-source-mailchimp-alternative/) [2](https://www.keila.io/)

### listmonk — A

Free self-hosted product; published feature set and API included in open-source distribution. No commercial edition listed. Hosting links are explicitly unaffiliated third parties.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/knadh/listmonk/blob/9351a3ef86e2c06aacdd98ca5ae839ef888f0f9e/LICENSE), [edition evidence](https://listmonk.app/), [hosting](https://listmonk.app/), [repository](https://github.com/knadh/listmonk).

[Sponsors, requirements, installation options, pricing and product profile](../products/listmonk.md).

Service costs/limits: SMTP server/provider and PostgreSQL/server infrastructure required; transport limits and deliverability remain operator responsibilities.

Repository: pushed 2026-10-21T05:25:39Z; latest commit 2026-10-21T05:25:01Z; latest published release v7.0.0-beta.1 (2026-10-20T10:25:57Z). Quick analysis: 5.6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Mailchimp → listmonk: **partial**. Newsletter and list-management fit, with segmentation, templates and transactional API. Rebuild Mailchimp automations and integrations; app is focused on one-way campaigns. Import subscribers using CSV/API and preserve consent/unsubscribe status. [1](https://listmonk.app/) [2](https://listmonk.app/docs/) [3](https://listmonk.app/docs/apis/import/)

### Mautic — A

Official pages say self-hosting includes all features and deployment choices do not lock features. Paid managed hosting and extended support are services. Actual LICENSE.txt grants GPL v3 or later despite GitHub NOASSERTION.

License: GPL-3.0-or-later; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/mautic/mautic/blob/fbf8256eef9b029f2f491ffb073f5c1f946a1714/LICENSE.txt), [edition evidence](https://mautic.org/mautic-vs-mailchimp/), [hosting](https://mautic.org/start-using-mautic/), [repository](https://github.com/mautic/mautic).

[Sponsors, requirements, installation options, pricing and product profile](../products/mautic.md).

Service costs/limits: Self-hosted infrastructure, email transport and operations required. Paid extended support or third-party plugins are separate from core feature access.

Repository: pushed 2026-10-21T21:09:54Z; latest commit 2026-10-21T14:30:25Z; latest published release 7.2.1 (2026-09-23T13:55:48Z). Quick analysis: 5.1/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Mailchimp → Mautic: **partial**. Campaign automation, segmentation and forms offer a deeper customization approach. Rebuild journeys and integrations; deployment, cron jobs, email transport and upgrades become operational responsibilities. [1](https://mautic.org/mautic-vs-mailchimp/) [2](https://mautic.org/download/)

[Category research and unresolved questions](../../research/categories/email-marketing.json) · [Research audit](../../research/audits/email-marketing.md)
