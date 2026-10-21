# Social publishing

Plan, schedule and publish social media content across accounts.

Audience: Creators, marketers, agencies and communications teams. Publishing spans many sectors but serves a specific marketing/communications function.

Use-case sources: [1](https://buffer.com/pricing), [2](https://www.hootsuite.com/plans).

- [Buffer](https://buffer.com): USD 5/account/month, annual billing. Essentials, one channel: $60/year ($5/month equivalent); free SaaS plan separate. Price scales by channel. [Pricing](https://buffer.com/pricing).
- [Hootsuite](https://www.hootsuite.com): entry amount unverified/quote, annual billing. Official FAQ says Standard starts at $99, but extracted cards omit numerical price and currency; exact USD annual quote not independently resolved. [Pricing](https://www.hootsuite.com/plans).

### Mixpost Lite — C

MIT applies to Lite. Pro/Enterprise are proprietary source-available editions, with everyday workflow gates. First-party Cloud exists but does not make commercial features OSS.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/inovector/mixpost/blob/df57648b866310446703f5294350552b62735df5/LICENSE.md), [edition evidence](https://mixpost.app/pricing), [hosting](https://mixpost.app/cloud), [repository](https://github.com/inovector/mixpost).

Paid restrictions: Lite publishing: Facebook Pages, X and Mastodon only; other listed networks require Pro/Enterprise.; Pro adds queue, approval flow, inbox, advanced analytics, AI and API/webhooks.

Service costs/limits: Self-hosters supply hosting, maintenance and platform developer-app credentials/approvals.

Repository: pushed 2026-03-16T10:06:38Z; latest commit 2026-03-16T10:06:37Z; latest published release 2.6.0 (2026-03-16T10:06:21Z). Quick analysis: 5.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Buffer → Mixpost Lite: **partial**. Lite covers Facebook Pages/X/Mastodon publishing and a calendar. Wider channel support and advanced workflows require proprietary Pro. No automatic migration verified. [1](https://buffer.com/pricing) [2](https://mixpost.app/pricing) [3](https://github.com/inovector/mixpost)

### Postiz — C

AGPL core; vendor claims ungated Cloud parity, but production design editing depends on licensed commercial Polotno software. Tier C for that workflow; scheduling itself remains open.

License: AGPL-3.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/gitroomhq/postiz-app/blob/c06abc3d786b8f719ced5716ccc70dd8a7251a05/LICENSE), [edition evidence](https://docs.postiz.com/self-host/configuration/polotno), [hosting](https://docs.postiz.com/self-host/installation/overview), [repository](https://github.com/gitroomhq/postiz-app).

Paid restrictions: Production in-app design editor requires a separate commercial Polotno SDK license.

Service costs/limits: Operate your own infrastructure and register platform developer apps; approvals and analytics scopes required.; AI uses your own provider keys and provider billing.; X analytics availability depends on your X API plan.

Repository: pushed 2026-10-21T16:25:55Z; latest commit 2026-10-21T10:47:02Z; latest published release v2.25.1 (2026-10-11T15:19:10Z). Quick analysis: 5.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Buffer → Postiz: **partial**. Partial scheduling/calendar replacement. Self-hosting requires infrastructure and platform app approvals; check each required channel and analytics scope. No automatic history, queue or credential migration verified. [1](https://buffer.com/pricing) [2](https://github.com/gitroomhq/postiz-app/blob/main/README.md) [3](https://docs.postiz.com/self-host/installation/overview)
- Hootsuite → Postiz: **partial**. Partial scheduling/calendar replacement. Self-hosting requires infrastructure and platform app approvals; check each required channel and analytics scope. No automatic history, queue or credential migration verified. Hootsuite listening/customer-care suite parity unverified. [1](https://www.hootsuite.com/plans) [2](https://github.com/gitroomhq/postiz-app/blob/main/README.md) [3](https://docs.postiz.com/self-host/installation/overview)

[Category research and unresolved questions](../../research/categories/social-publishing.json) · [Research audit](../../research/audits/social-publishing.md) · [Sourced claims](../../research/claims/social-publishing.jsonl)
