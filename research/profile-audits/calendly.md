> Temporary paths normalized; local setup omitted. Exact original retained locally.

# calendly — research audit 2026-10-21


1. Read current pricing and About; year 2013 explicit. Pricing default yearly; calculated Standard 10*12=120 and Teams 16*12=192. Enterprise 15k/year is organization contract starting at 50 seats.
2. Queries: site:calendly.com 2021 funding OpenView ICONIQ founded 2013; site:openviewpartners.com Calendly funding; site:iconiqcapital.com Calendly. Secondary coverage of $350M excluded from quantitative claims.
3. Guessed OpenView announcement path and ICONIQ /portfolio/calendly and /growth/companies/calendly failed. OpenView /portfolio/calendly redirected to homepage; actual homepage testimonial verified. ICONIQ /growth redirects to iconiq.com; followed Companies to verified Calendly card. Atlanta Ventures guessed company paths failed; investor omitted.
4. Reopened pricing and investor sources during final pass. Popular is explicit Teams. Add-ons not folded into scheduling base price.

Primary URLs read / decisions documented in claim ledger:
- https://calendly.com/about
- https://openviewpartners.com/
- https://www.iconiq.com/growth/companies
- https://calendly.com/pricing

Persistence command: execute group-local build script; write profile JSON, claims JSONL, and audit markdown. Amounts unknown where billing term or numeric price could not be established. Assessments explicitly distinguished from vendor facts.

Final QA: schema validated all 22 profiles. Commands: python3 records01.py through records06.py (group-local absolute paths); python3 finalize.py; node scripts/validate-profiles.mjs profiles. Initial `python` executable absent; used python3. Claim headings normalized to public page sections/searchable phrases; no JSON machine field used as locator. Full public fetch-result chronology retained in group-local research-web-log.txt (research batches 1–46), including failed URL attempts. Validation command only reads profile files when custom directory supplied; separate parseClaims check validates ledgers.
