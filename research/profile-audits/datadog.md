> Temporary paths normalized; local setup omitted. Exact original retained locally.

# datadog research audit

2026-10-21; current official sources unless otherwise specified.

1. Read assignment/schema and user operating instructions; original repository remains read-only.
2. web.open pricing and about URLs; about redirects to leadership.
3. web.find pricing: Infrastructure, $18, $23, 34 on-demand; inspected Infrastructure section at line 1133. Annual and on-demand amounts separated.
4. web.search: Datadog series D Index Ventures OpenView; retrieved investor FAQ and SEC ownership PDF.
5. Guessed Series D press URL failed; fallback SEC ownership disclosure used, not unsupported funding claim.
6. web.search founded in 2010; official Crains announcement confirms company year.
7. Read pricing features and IPO FAQ; chose infrastructure scope explicitly, not a synthetic all-product subscription.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "site.datadoghq.com series D Index Ventures OpenView 2016 founded 2010 NASDAQ DDOG"}
- web.search_query {"q": "site:datadoghq.com \"94.5\""}
- web.search_query {"q": "site.datadoghq.com \"founded in 2010\""}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://investors.datadoghq.com/static-files/6ce0f496-38c7-4ceb-8fde-b7b2c1a44e01
- https://investors.datadoghq.com/shareholder-services/investor-faqs/
- https://www.datadoghq.com/about/latest-news/datadog-wins-coveted-spot-on-crains-new-york-business-best-places-to-work-in-new-york-city-2015-list/
- https://www.datadoghq.com/pricing/

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
