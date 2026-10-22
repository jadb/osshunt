> Temporary paths normalized; local setup omitted. Exact original retained locally.

# hubspot — research audit 2026-10-21


1. Opened official Sales Hub pricing, searched Starter/Professional/Enterprise plan cards.
2. Queries: site.hubspot.com company founded 2006 investors General Catalyst IPO HUBS; site.hubspot.com 2011 raises investors Sequoia Google Ventures; site.ir.hubspot.com 2026 NYSE HUBS.
3. Read company story, investor FAQ and Series D announcement.
4. Opened product page. Decision: Starter promotional conditions unresolved; enterprise billing term unresolved; no invented Most popular designation.

Primary URLs read / decisions documented in claim ledger:
- https://www.hubspot.com/our-story
- https://hubspot.gcs-web.com/resources/investor-faqs
- https://www.hubspot.com/blog/bid/10491/sequoia-google-ventures-and-salesforce-com-invest-32-million-in-hubspot
- https://www.hubspot.com/pricing/sales
- https://www.hubspot.com/products/sales

Persistence command: execute group-local build script; write profile JSON, claims JSONL, and audit markdown. Amounts unknown where billing term or numeric price could not be established. Assessments explicitly distinguished from vendor facts.

Final QA: schema validated all 22 profiles. Commands: python3 records01.py through records06.py (group-local absolute paths); python3 finalize.py; node scripts/validate-profiles.mjs profiles. Initial `python` executable absent; used python3. Claim headings normalized to public page sections/searchable phrases; no JSON machine field used as locator. Full public fetch-result chronology retained in group-local research-web-log.txt (research batches 1–46), including failed URL attempts. Validation command only reads profile files when custom directory supplied; separate parseClaims check validates ledgers.
