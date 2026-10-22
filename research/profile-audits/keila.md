> Temporary paths normalized; local setup omitted. Exact original retained locally.

# keila — research audit 2026-10-21


1. Read Keila pricing incl.bootstrap FAQ, homepage features, installation/configuration/senders docs.
2. Queries: site.keila.io Pentacent started2020 funding; site.keila.io Keila2021 Pentacent; site.keila.io Pentacent2021; site.keila.io2020. Primary year not resolved. Guessed /imprint and /blog inaccessible.
3. Read Pentacent commercial site and GitHub Sponsors:8sponsors funded work, visible private sponsors no verified corporate names; business fallback, sponsorship tiers not product tiers.
4. Docker alone not one-click; no current officially linked shortcut established.

Primary URLs read / decisions documented in claim ledger:
- https://www.keila.io/pricing/
- https://pentacent.com/
- https://github.com/sponsors/pentacent
- https://www.keila.io/
- https://www.keila.io/docs/installation/
- https://www.keila.io/docs/configuration/
- https://www.keila.io/docs/senders/

Persistence command: execute group-local build script; write profile JSON, claims JSONL, and audit markdown. Amounts unknown where billing term or numeric price could not be established. Assessments explicitly distinguished from vendor facts.

Final QA: schema validated all 22 profiles. Commands: python3 records01.py through records06.py (group-local absolute paths); python3 finalize.py; node scripts/validate-profiles.mjs profiles. Initial `python` executable absent; used python3. Claim headings normalized to public page sections/searchable phrases; no JSON machine field used as locator. Full public fetch-result chronology retained in group-local research-web-log.txt (research batches 1–46), including failed URL attempts. Validation command only reads profile files when custom directory supplied; separate parseClaims check validates ledgers.
