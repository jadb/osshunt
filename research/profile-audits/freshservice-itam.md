> Temporary paths normalized; local setup omitted. Exact original retained locally.

# freshservice-itam research audit

2026-10-21; current official sources unless otherwise specified.

1. web.openITAMpricingandcompany;companyroot404,footerlinkresolved/company/about.
2. ReadplansGrowth/ProPremierValue/Enterpriseand500AUFAQ;differentweightsandseparateITplanprerequisiteexplicit.
3. NoITAMnumericratesorquotephraseexposed;keptunknownratherthansubstitutinggeneralFreshserviceagent-seatprices.
4. ReadinvestorFAQviawebsearchfallbackbecausedirectQ4pagebodyincomplete;2010Delawareincorporationverified.
5. Read2017companyissuedrebrand/fundingannouncement;current2026resultsconfirmNasdaqFRSH.
6. ReadITAMfeaturecomparison;OctoberToriiacquisitionagreementnotassumedcompletedorpartofstableITAMcapabilities.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "Freshworks founded 2010 funding Accel Sequoia CapitalG official"}
- web.search_query {"q": "site:ir.freshworks.com \"2026\" \"NASDAQ: FRSH\""}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://ir.freshworks.com/news/news-details/2017/Freshdesk-Inc--Is-Now-Freshworks-Inc--06-07-2017/default.aspx
- https://ir.freshworks.com/financials/quarterly-results/
- https://ir.freshworks.com/resources/investor-faqs/default.aspx
- https://www.freshworks.com/company/about/
- https://www.freshworks.com/freshservice/itam/pricing/

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
