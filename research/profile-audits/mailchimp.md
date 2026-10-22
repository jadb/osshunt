> Temporary paths normalized; local setup omitted. Exact original retained locally.

# mailchimp — research audit 2026-10-21


1. Read official pricing card sections and FAQ; used lowest paid Essentials, kept free plan separate.
2. Query: site.intuit.com Mailchimp acquisition completed2021 founded2001 bootstrapped. Read primary completed acquisition announcement and Intuit filing extract.
3. Query: site.mailchimp.com never funding. Secondary bootstrap reports found, primary confirmation not found; funding left unknown.
4. Most Popular integration-navigation label does not designate Standard; popular unknown. Premium chosen because explicitly built for teams. Price selector contact count and renewal remain caveats; no fake annual total.

Primary URLs read / decisions documented in claim ledger:
- https://mailchimp.com/newsroom/intuit-completes-mailchimp-acquisition/
- https://www.sec.gov/Archives/edgar/data/896878/000089687824000063/intu_ars.pdf
- https://mailchimp.com/pricing/marketing/

Persistence command: execute group-local build script; write profile JSON, claims JSONL, and audit markdown. Amounts unknown where billing term or numeric price could not be established. Assessments explicitly distinguished from vendor facts.

Final QA: schema validated all 22 profiles. Commands: python3 records01.py through records06.py (group-local absolute paths); python3 finalize.py; node scripts/validate-profiles.mjs profiles. Initial `python` executable absent; used python3. Claim headings normalized to public page sections/searchable phrases; no JSON machine field used as locator. Full public fetch-result chronology retained in group-local research-web-log.txt (research batches 1–46), including failed URL attempts. Validation command only reads profile files when custom directory supplied; separate parseClaims check validates ledgers.
