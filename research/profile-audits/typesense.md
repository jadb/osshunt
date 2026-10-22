> Temporary paths normalized; local setup omitted. Exact original retained locally.

# typesense research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open homepage/about,pricingcalculator,install/systemrequirements/FAQ/production.
2. Clicked customer-funded About link to founder notraisingVCarticle; affirmative bootstrapped evidence,not inferred from absence.
3. Read timeline2015idea/2018OSS/2020Cloud; incorporation unknown.
4. Read stable installruntime/routes,2vCPUfloor,index-memoryratio,disk,HA3/5nodes,optionalGPUandlocalvsremote embeddings.
5. Pricingcalculator dynamicselectedcost absent; leftCloudamountunknown. ManagedCloudlaunch not self-hostoneclick; manualCompose notoneclick.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "site:typesense.org \"bootstrapped\""}
- web.search_query {"q": "site:typesense.org \"one-click\" install"}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://typesense.org/about/
- https://typesense.org/blog/why-we-are-not-raising-funds/
- https://typesense.org/docs/guide/install-typesense.html
- https://cloud.typesense.org/pricing/calculator
- https://typesense.org/
- https://typesense.org/docs/guide/faqs.html
- https://typesense.org/docs/guide/system-requirements.html

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
