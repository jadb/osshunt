> Temporary paths normalized; local setup omitted. Exact original retained locally.

# front — research audit 2026-10-21


1. Opened official pricing, About and Series D announcement. Current billing switch explicitly Billed Annually; derived annual totals 25*12=300,65*12=780,105*12=1260.
2. Most popular designation is Enterprise, not Professional. Up-to10/50 limits are maxima, not minimum purchase requirements. Add-on AI pricing excluded from base tiers.
3. Company About and 2022 financing announcement independently support founded2013, venture funding and known investors. Current About investor image alt text names YC/Boldstart/Threshold/Uncork; no customer logos treated as sponsors.
4. Functional reasons cover collaboration, automation and self-service/reporting; pricing and support not used as reasons.

Primary URLs read / decisions documented in claim ledger:
- https://front.com/about
- https://front.com/blog/front-raises-series-d-financing
- https://front.com/pricing

Persistence command: execute group-local build script; write profile JSON, claims JSONL, and audit markdown. Amounts unknown where billing term or numeric price could not be established. Assessments explicitly distinguished from vendor facts.

Final QA: schema validated all 22 profiles. Commands: python3 records01.py through records06.py (group-local absolute paths); python3 finalize.py; node scripts/validate-profiles.mjs profiles. Initial `python` executable absent; used python3. Claim headings normalized to public page sections/searchable phrases; no JSON machine field used as locator. Full public fetch-result chronology retained in group-local research-web-log.txt (research batches 1–46), including failed URL attempts. Validation command only reads profile files when custom directory supplied; separate parseClaims check validates ledgers.
