# Web analytics

Website traffic, acquisition, conversion and visitor behavior measurement.

Audience: Website owners and marketing, product and growth teams across industries.. Relevant to organizations with websites or digital products; specialist staff often operate the tools.

Use-case sources: [1](https://marketingplatform.google.com/about/analytics/), [2](https://plausible.io/self-hosted-web-analytics).

- [Google Analytics 360](https://marketingplatform.google.com/about/analytics-360/): entry amount unverified/quote, quote billing. Enterprise edition; contact sales. Standard Google Analytics is free and must not be presented as a paid subscription. [Pricing](https://marketingplatform.google.com/about/analytics-360/).

### Matomo — C

GPLv3 analytics core is free; standard ecommerce/event tracking included, but routine conversion and behavior analysis needs premium plugins.

License: GPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/matomo-org/matomo/blob/48cb7b1a4c17319cb286f9dc2221a29b707166fb/LICENSE), [edition evidence](https://matomo.org/pricing/), [hosting](https://matomo.org/pricing/), [repository](https://github.com/matomo-org/matomo).

Paid restrictions: Funnels premium plugin; Custom Reports premium plugin; Heatmaps and Session Recording premium plugin; Users Flow and Form Analytics premium plugins; Cohorts and multi-channel attribution premium plugins

Repository: pushed 2026-10-21T19:39:12Z; latest published release 5.14.1 (2026-10-04T19:50:07Z). Quick analysis: 6.9/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Google Analytics 360 → Matomo: **partial**. Core covers traffic, events and ecommerce; configure own tracker and tags. Premium features require separately licensed plugins; Google advertising attribution/integrations are not assumed equivalent. [1](https://matomo.org/pricing/) [2](https://marketingplatform.google.com/about/analytics-360/)

### Plausible Community Edition — C

AGPL Community Edition; official comparison explicitly withholds everyday funnel, journey and revenue functions and releases CE twice yearly.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/plausible/analytics/blob/be3bc8ac721cc6a9721316ff3c8d23addce0ab8a/LICENSE.md), [edition evidence](https://plausible.io/self-hosted-web-analytics), [hosting](https://plausible.io/self-hosted-web-analytics), [repository](https://github.com/plausible/analytics).

Paid restrictions: Marketing funnels unavailable in CE; User journeys unavailable in CE; Ecommerce revenue goals unavailable in CE; SSO and Sites API unavailable in CE

Repository: pushed 2026-10-21T19:00:30Z; latest published release v3.2.1 (2026-05-15T09:15:56Z). Quick analysis: 6.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Google Analytics 360 → Plausible Community Edition: **partial**. Simpler traffic and conversion reporting with different tracking/privacy model; CE excludes richer funnel, journey and ecommerce revenue analysis. Not an enterprise Google advertising stack replacement. [1](https://plausible.io/self-hosted-web-analytics) [2](https://marketingplatform.google.com/about/analytics-360/)

### PostHog core — C

MIT applies outside ee/ and third-party exceptions; ee/ has a separate license. Self-host documentation limits deployment to free-plan functions; packages include daily alert and branding gates as well as enterprise controls. Officially unsupported self-host; no application release cadence guarantee.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/PostHog/posthog/blob/72bb72904c3c22aa744412855ec58bf525276d41/LICENSE), [edition evidence](https://posthog.com/platform-packages), [hosting](https://posthog.com/pricing), [repository](https://github.com/PostHog/posthog).

Paid restrictions: Paid-plan features are Cloud-only per self-host documentation; Platform packages reserve high-frequency/real-time alerts and white labeling; Platform packages reserve SAML, RBAC and property access controls

Repository: pushed 2026-10-21T21:28:15Z; latest published release posthog-cli/v0.18.12 (2026-10-21T18:12:40Z). Quick analysis: 6.1/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Google Analytics 360 → PostHog core: **partial**. Product-oriented analytics and instrumentation differ from Google Analytics 360. Self-host requires substantial infrastructure ownership; no supported self-host guarantees or paid-plan features. [1](https://posthog.com/docs/self-host) [2](https://marketingplatform.google.com/about/analytics-360/)

### Umami — C

MIT self-host core includes funnels, retention, session replay and heatmaps; official Cloud FAQ nevertheless reserves email reports and streaming API.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/umami-software/umami/blob/e92fdab99508a8ed05249f6c5f07e140deab79e1/LICENSE), [edition evidence](https://umami.is/pricing), [hosting](https://umami.is/pricing), [repository](https://github.com/umami-software/umami).

Paid restrictions: Email reports available only in Cloud; Streaming API available only in Cloud

Repository: pushed 2026-10-20T23:27:19Z; latest published release v3.4.0 (2026-09-17T04:21:49Z). Quick analysis: 6.4/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Google Analytics 360 → Umami: **partial**. Traffic and events require replacing tracking instrumentation; no feature flags or experimentation assignment engine. Anonymous cross-device users are separate unless identified. [1](https://umami.is/product-analytics) [2](https://marketingplatform.google.com/about/analytics-360/)

[Category research and unresolved questions](../../research/categories/web-analytics.json) · [Research audit](../../research/audits/web-analytics.md)
