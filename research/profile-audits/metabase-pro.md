> Temporary paths normalized; local setup omitted. Exact original retained locally.

# metabase-pro research audit

2026-10-21; current official sources unless otherwise specified.

1. Reused current official Metabase pricing,company funding,and product-feature research from companion OSS record.
2. Pro profile scope starts at paid self-host Pro rather than substituting cheaper Cloud Starter or free OSS.
3. Verified monthly575,annual6210,10users included,overages12monthly/130annual; Enterprise starting20000annual.
4. Popular unknown: no first-party designation verified. Deployment details null because this catalog record is paid.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "Metabase series B 30 million 2021 Insight Partners NEA"}
- web.search_query {"q": "site:metabase.com \"2015\" \"founded\""}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://www.prnewswire.com/news-releases/metabase-raises-30m-in-series-b-financing-to-expand-worldwide-access-to-its-best-in-class-open-source-business-intelligence-platform-301358789.html
- https://www.metabase.com/blog/metabase-alternatives
- https://www.metabase.com/pricing

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
