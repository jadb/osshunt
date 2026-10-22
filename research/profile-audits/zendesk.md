> Temporary paths normalized; local setup omitted. Exact original retained locally.

# zendesk — research audit 2026-10-21


1. Opened official pricing including Support-only and Suite cards; read feature headings.
2. Query: site.zendesk.com acquisition completed 2022 2007 Hellman Friedman Permira. Read completed transaction release and current company page.
3. Retained investor-group owners; removed obsolete stock listing. Business maps Suite Team, entry maps cheaper support-only Team.

Primary URLs read / decisions documented in claim ledger:
- https://www.zendesk.com/newsroom/press-releases/consortium-led-by-hellman-friedman-and-permira-completes-acquisition-of-zendesk//
- https://www.zendesk.com/pricing/

Persistence command: execute group-local build script; write profile JSON, claims JSONL, and audit markdown. Amounts unknown where billing term or numeric price could not be established. Assessments explicitly distinguished from vendor facts.

Final QA: schema validated all 22 profiles. Commands: python3 records01.py through records06.py (group-local absolute paths); python3 finalize.py; node scripts/validate-profiles.mjs profiles. Initial `python` executable absent; used python3. Claim headings normalized to public page sections/searchable phrases; no JSON machine field used as locator. Full public fetch-result chronology retained in group-local research-web-log.txt (research batches 1–46), including failed URL attempts. Validation command only reads profile files when custom directory supplied; separate parseClaims check validates ledgers.
