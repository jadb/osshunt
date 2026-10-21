# Monitoring and observability

Infrastructure dashboards, website uptime, and application error tracking; mappings scoped by capability.

Audience: Engineering, IT operations, site reliability and website owners. Relevant to organizations operating software or websites; specialized users manage it even where business impact is broad.

Use-case sources: [1](https://www.datadoghq.com/pricing/), [2](https://www.pingdom.com/pricing/).

- [Datadog](https://www.datadoghq.com/): USD 15/usage/month, annual billing. Infrastructure Pro starts at $15 per host/month billed annually; other modules priced separately. [Pricing](https://www.datadoghq.com/pricing/).
- [Pingdom](https://www.pingdom.com/): entry amount unverified/quote, annual billing. Official pricing calculator returned currency placeholders without numeric price; amount unverified. [Pricing](https://www.pingdom.com/pricing/).
- [Sentry](https://sentry.io/): entry amount unverified/quote, annual billing. Official pricing page unsupported text/markdown in fetch; paid plan entry amount not independently verified. [Pricing](https://sentry.io/pricing/).

### GlitchTip — A

Backend and frontend MIT licenses verified at canonical GitLab commits. Maintainer describes software as 100% open source; paid hosting quotas and support are service costs, not software feature restrictions.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://gitlab.com/glitchtip/glitchtip-backend/-/raw/5c6889940436df182d929634bc455ecaccb10e93/LICENSE), [edition evidence](https://glitchtip.com/blog/2026-06-22-glitchtip-6-2-released/), [hosting](https://glitchtip.com/pricing/), [repository](https://gitlab.com/glitchtip/glitchtip-backend).

Repository: pushed unknown; latest published release none on this repository (n/a). GitHub profile placeholder is not canonical health evidence. Canonical GitLab commit 5c6889940436df182d929634bc455ecaccb10e93 dated 2026-10-21T06:21:41.000+00:00 verified. Latest GitLab Releases API entry v6.1.8 (2026-06-05) conflicts with later visible v6.2.6 tag (2026-08-07); latest release left null rather than conflating channels. No pushed_at field in captured GitLab API.

- Pingdom → GlitchTip: **partial**. Basic site availability pings, heartbeat checks and email/webhook alerts; partial uptime alternative, without established Pingdom browser transactions/RUM parity. [1](https://glitchtip.com/) [2](https://www.pingdom.com/pricing/)
- Sentry → GlitchTip: **partial**. Supports Sentry client SDKs for error and basic performance monitoring. Reconfigure DSNs and validate SDK compatibility; existing Sentry issue history, replay and advanced tracing migration not established. [1](https://glitchtip.com/) [2](https://gitlab.com/glitchtip/glitchtip-backend/-/raw/master/README.md)

### Uptime Kuma — A

MIT project; upstream README publishes self-hosted monitoring, notifications, and status pages without commercial edition or feature tiers. No first-party paid hosting identified.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/louislam/uptime-kuma/blob/2adb5bc32cb53a93722a7c348364a8290acd74d4/LICENSE), [edition evidence](https://github.com/louislam/uptime-kuma#-features), [hosting](https://github.com/louislam/uptime-kuma#-how-to-install), [repository](https://github.com/louislam/uptime-kuma).

Repository: pushed 2026-10-21T00:06:24Z; latest published release 2.5.6 (2026-10-09T15:46:26Z). Quick analysis: 7.3/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Pingdom → Uptime Kuma: **partial**. HTTP/TCP/DNS/push checks, alert delivery and status pages. Operate your own external vantage points; no claim of Pingdom transaction or real-user-monitoring parity or check import. [1](https://github.com/louislam/uptime-kuma#-features) [2](https://www.pingdom.com/pricing/)

### Grafana OSS — C

OSS dashboards and alerting are AGPL. Commercial edition includes both enterprise administration and routine workflow extensions such as proprietary data-source integrations and reporting; conservative tier C, not feature-complete A.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/grafana/grafana/blob/7de573e4db635ab9d34cd2771bde39471e1c0e82/LICENSE), [edition evidence](https://grafana.com/products/grafana-enterprise/), [hosting](https://grafana.com/products/cloud/), [repository](https://github.com/grafana/grafana).

Paid restrictions: Enterprise data-source plugins; Scheduled reporting; SAML authentication and team synchronization; Data-source permissions and usage insights

Repository: pushed 2026-10-21T21:16:15Z; latest published release v13.2.4 (2026-10-13T11:41:03Z). Quick analysis: 5.9/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Datadog → Grafana OSS: **partial**. Replaces dashboarding/alerting workflow when paired with separately operated telemetry stores and collectors. Grafana alone is not a full Datadog APM/logs/security replacement; dashboards and alert rules require rebuilding. [1](https://grafana.com/oss/grafana/) [2](https://www.datadoghq.com/pricing/)

[Category research and unresolved questions](../../research/categories/monitoring.json) · [Research audit](../../research/audits/monitoring.md)
