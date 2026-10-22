> Temporary paths normalized; local setup omitted. Exact original retained locally.

# buffer — research audit 2026-10-21


1. Read pricing: Essentials explicitly Recommended; Team120/year/channel, not per user.
2. Queries: site.buffer.com investors buyout2018 2010; site.buffer.com SeriesA Collaborative Fund. Read founder buyout account and investor announcement.
3. About history confirms2010. Partial buyback preserved in notes.
4. Click machine-readable pricing link failed; verified annual card totals retained, unverified monthly-billing prices null. No enterprise tier invented.

Primary URLs read / decisions documented in claim ledger:
- https://buffer.com/about
- https://buffer.com/resources/buying-out-investors/
- https://collabfund.com/blog/with-noses-pressed-against-the-glass/
- https://buffer.com/pricing

Persistence command: execute group-local build script; write profile JSON, claims JSONL, and audit markdown. Amounts unknown where billing term or numeric price could not be established. Assessments explicitly distinguished from vendor facts.

Final QA: schema validated all 22 profiles. Commands: python3 records01.py through records06.py (group-local absolute paths); python3 finalize.py; node scripts/validate-profiles.mjs profiles. Initial `python` executable absent; used python3. Claim headings normalized to public page sections/searchable phrases; no JSON machine field used as locator. Full public fetch-result chronology retained in group-local research-web-log.txt (research batches 1–46), including failed URL attempts. Validation command only reads profile files when custom directory supplied; separate parseClaims check validates ledgers.
