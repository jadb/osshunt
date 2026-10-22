> Temporary paths normalized; local setup omitted. Exact original retained locally.

# elastic-cloud research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open pricing/about/investorFAQ. Initial FAQ extraction sparse; search retrieved full first-party FAQ and2026 earnings,confirming currentNYSEESTC.
2. Search company funding/founded2012; official SeriesB and ECE announcements substantiate historical equity names and company age.
3. Guessed /pricing/hosted404; clicked actual Hosted pricing link to /pricing/cloud-hosted.
4. Read resource-based versus serverless usage-based monthly/prepaid model; numeric cost selectors not extracted, amounts kept unknown.
5. Read serverless VCU/storage and query architecture; excluded October private/technical-preview agents from stable product reasons.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Final evidence QA (after initial save):
- web.find({ref_id:"https://www.elastic.co/pricing/cloud-hosted",pattern:"Standard"}); returned Standard99,Gold114,Platinum131,Enterprise184USDpermonth.
- web.find({ref_id:"https://www.elastic.co/pricing/cloud-hosted",pattern:"based on"}); footnote confirms120GBstorage/twozonesproductionexample. Replaced earlier unknowns with sourced example monthly rates; annual not extrapolated.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "site:elastic.co \"NYSE\" \"2012\""}
- web.search_query {"q": "site:elastic.co \"Benchmark\" \"Index Ventures\" funding"}
- web.search_query {"q": "site:ir.elastic.co \"2012\" \"NYSE\""}
- web.search_query {"q": "site:ir.elastic.co 2026 \"NYSE: ESTC\""}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://www.elastic.co/about/press/elasticsearch-closes-24m-series-b-round-and-exceeds-two-million-downloads-milestone
- https://www.elastic.co/about/press/elastic-launches-elastic-cloud-enterprise
- https://ir.elastic.co/News--Events/news/news-details/2026/Elastic-Reports-First-Quarter-Fiscal-2027-Financial-Results/
- https://ir.elastic.co/resources/investor-faqs/default.aspx
- https://www.elastic.co/pricing/cloud-hosted
- https://www.elastic.co/pricing/
- https://www.elastic.co/pricing/serverless-search

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
