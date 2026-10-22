> Temporary paths normalized; local setup omitted. Exact original retained locally.

# metabase research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open pricing/install/about; about failed; fallback company-issued funding release and official blog operating-since2015.
2. Read separate OSS/Pro/Enterprise cards; verified$575monthly,$6210annual,10included users and extra-user rates. No popular badge.
3. Read current v0.64 JAR requirementJava25 and application DB MySQL8.4/MariaDB10.6/PostgreSQL; H2 excluded production.
4. Guessed production-installation/Linux URLs failed; JAR Production installation section provided fallback.
5. Read legacy Elastic Beanstalk docs: explicitly no longer recommended; omitted obsolete one-click offer.
6. Shared organization sources reused for separate paid Pro profile with edition-specific pricing/reasons.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Final evidence QA (after initial save):
- web.open({ref_id:"https://www.metabase.com/docs/latest/dashboards/subscriptions"}); web.find pattern:"email". Replaced generic installation citation for subscriptions with direct feature guide.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "Metabase series B 30 million 2021 Insight Partners NEA"}
- web.search_query {"q": "site:metabase.com \"2015\" \"founded\""}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://www.prnewswire.com/news-releases/metabase-raises-30m-in-series-b-financing-to-expand-worldwide-access-to-its-best-in-class-open-source-business-intelligence-platform-301358789.html
- https://www.metabase.com/blog/metabase-alternatives
- https://www.metabase.com/pricing
- https://www.metabase.com/docs/latest/dashboards/subscriptions
- https://www.metabase.com/docs/latest/installation-and-operation/running-the-metabase-jar-file
- https://www.metabase.com/docs/latest/installation-and-operation/configuring-application-database

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
