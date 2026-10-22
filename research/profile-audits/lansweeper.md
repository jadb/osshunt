> Temporary paths normalized; local setup omitted. Exact original retained locally.

# lansweeper research audit

2026-10-21; current official sources unless otherwise specified.

1. web.openpricing;allplansannual,extractionincludesunlabelledmulticurrencyamounts;keptpricesunknown.
2. CompanyURLguessfailed;searchlocatedAboutand2021Insightfunding.
3. SearchBridgepointuncoveredJuly27 2026majorityacquisitionagreement;readfullreleaseandacquirerportfoliopage. Bothsayexpectedcloseend2026/conditions;notmarkedascompleted.
4. Current/historicalexistinginvestorsidentifiedInsight,Dovesco,Imker;Bridgepointprospectiveacquirernotrecordedascompletedinvestor.
5. Recommendedstringrepeatedallcards;popularleftunknownratherthanrandomlyselectingPro.
6. Readfeaturecomparison;CollectiveIntelligenceisPreviewsoexcludedfromstableproductreason.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "Lansweeper founded 2004 Insight Partners Dovesco 2021 official"}
- web.search_query {"q": "site:lansweeper.com \"Bridgepoint\""}
- web.search_query {"q": "site:bridgepointgroup.com Lansweeper completed October2026"}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://www.lansweeper.com/blog/press/lansweeper-secures-e130-million-investment-from-insight-partners-to-accelerate-further-growth/
- https://www.lansweeper.com/blog/press/bridgepoint-to-acquire-majority-stake-in-lansweeper-to-build-the-global-leader-in-technology-asset-intelligence-powering-enterprise-cybersecurity/
- https://www.lansweeper.com/about/
- https://www.bridgepointgroup.com/investment-strategies/private-equity/portfolio/middle-market/technology/lansweeper
- https://www.lansweeper.com/pricing/

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
