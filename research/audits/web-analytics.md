> Temporary output paths normalized for portability; local operating setup omitted. Original audit retained locally.

# Web analytics refresh — 2026-10-21

2. Opened official pages via web tool: https://umami.is/pricing , https://matomo.org/pricing/ , https://plausible.io/self-hosted-web-analytics , https://posthog.com/docs/self-host . Confirmed all four have hosting; Plausible CE explicitly omits daily features; PostHog self-host officially unsupported.
3. Read shared GitHub and rsx JSON for umami-software/umami, matomo-org/matomo, plausible/analytics, PostHog/posthog. Python decoded pinned default-branch LICENSE content. Confirmed MIT Umami, GPLv3 Matomo, AGPLv3 Plausible, mixed MIT/ee exception PostHog. Metadata all nonarchived. Central collector already executed API requests and rsx; reused rather than repeated. Health provenance retained in JSON.
4. Web search queries: `site.umami.is self hosted cloud features session replay heatmaps`; `site.posthog.com enterprise license ee features self hosted`; `site.marketingplatform.google.com analytics 360 pricing free standard`. Used primary sources only. Results used https://umami.is/product-analytics (self-host includes replay/heatmaps, unlike hosted free tier), https://umami.is/pricing (FAQ explicitly email reports/streaming API cloud only), https://posthog.com/docs/self-host . Third-party results ignored.
5. Attempted https://matomo.org/pricing/?menu=on-premise ; web tool inaccessible. Fallback main pricing page contains complete Community/premium plugin comparison.
6. Opened https://marketingplatform.google.com/about/analytics/ (standard GA free) and https://marketingplatform.google.com/about/analytics-360/ (enterprise sales contact, no public price); paid record must specifically be Analytics 360. Opened https://posthog.com/pricing . `find` queries `Premium` on Matomo pricing and `Cloud also` on Umami pricing pinpointed restrictions.
7. Preliminary classification: Umami C (cloud-only email reports/streaming API despite included self-host replay); Matomo C (premium funnels, custom reports, replay); Plausible CE C (funnels, journeys, ecommerce, sites API); PostHog mixed-license core needs ee license inspection and precise paywall scope.
8. Opened pinned https://raw.githubusercontent.com/PostHog/posthog/72bb72904c3c22aa744412855ec58bf525276d41/ee/LICENSE : web cache miss. Fallback `curl -fLsS URL -o ../web-analytics-posthog-ee.LICENSE` failed DNS; subsequent cat confirmed file absent. No license contents invented. Root license exception sufficient to restrict MIT claim to core; record uncertainty.
9. Opened https://posthog.com/docs/self-host at relevant lines: all paid-plan features Cloud-only; unsupported self-host, free-plan functionality. Clicked pricing platform link https://posthog.com/platform-packages : verified paid SSO/access controls and high-frequency alerts/white labeling. Classified C because daily alert/customization gates go beyond enterprise administration.
10. Wrote research artifact using `../write_web_analytics.py`; reused exact metadata SHA, push time and latest release from central evidence, preserving MIT core scope. Ran Python JSON parser successfully. Four partial mappings, no drop-in claims, all four C; no archived exclusions needed. GPL/AGPL identifiers refer identified repository core; premium functionality excluded. No repo changes, commits, PRs or external messages.

## Repeatable steps / tests
- Batch GitHub metadata + default SHA + license at SHA + latest release; decode license and detect scoped exceptions such as ee/.
- Fetch edition matrix and FAQ before assigning tier; hosted pricing alone can falsely imply self-hosted gates (Umami replay is included, email reports are not).
- Test paid incumbents distinguish standard free plans from enterprise paid editions.
- Test latest release tag belongs to product, not monorepo side tool (PostHog CLI).
- Validate mapping references and JSON syntax; explicitly preserve source fetch failures.
