> Temporary paths normalized; local setup omitted. Exact original retained locally.

# umami research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open pricing/install/about; /about404; installation redirects to docs.umami.is.
2. Fallback privacy page verifies Umami Software Inc. Search Umami funding retrieved investor Race Capital-issued GlobeNewswire announcement; namesake restaurant/CPG results rejected.
3. Read current PostgreSQL-only install and optional Redis guide; source versus Docker routes distinguished.
4. Guessed hosting paths404; search located /docs/guides/hosting and /running-on-vercel; official guide verifies deployment button.
5. Read metric definitions and cloud plan cards; funding investor not counted as sponsor; business steward fallback used.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "Umami software company founded funding investors Mike Cao official"}
- web.search_query {"q": "Umami analytics company \"funding\" Mike Cao"}
- web.search_query {"q": "site:docs.umami.is \"Vercel\""}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://www.globenewswire.com/news-release/2022/07/19/2481786/0/en/umami-raises-1-5-million-pre-seed-funding-round-led-by-race-capital-to-continue-growing-its-popular-open-source-privacy-focused-web-analytics-platform.html
- https://umami.is/privacy
- https://docs.umami.is/docs/install
- https://umami.is/pricing
- https://docs.umami.is/docs/metric-definitions
- https://docs.umami.is/docs/enable-redis
- https://docs.umami.is/docs/guides/running-on-vercel

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
