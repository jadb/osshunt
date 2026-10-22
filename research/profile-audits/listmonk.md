> Temporary paths normalized; local setup omitted. Exact original retained locally.

# listmonk — research audit 2026-10-21


1. Read homepage, README, installation, configuration and documentation introduction.
2. Query: site.listmonk.app Zerodha sponsors Kailash Nadh2018; refined site.zerodha.tech listmonk open source2019. Zerodha official project list verifies business stewardship/in-kind engineering.
3. Kept project-start2018 from primary homepage; secondary first-public-commit2019 not substituted.
4. No standalone project equity investors; no attribution of Zerodha corporate funding to listmonk.
5. Unaffiliated hosting reference not enough to verify a current install template; manual Compose not one-click.

Primary URLs read / decisions documented in claim ledger:
- https://listmonk.app/
- https://zerodha.tech/projects/
- https://github.com/knadh/listmonk
- https://listmonk.app/docs/installation/
- https://listmonk.app/docs/
- https://listmonk.app/docs/configuration/

Persistence command: execute group-local build script; write profile JSON, claims JSONL, and audit markdown. Amounts unknown where billing term or numeric price could not be established. Assessments explicitly distinguished from vendor facts.

Final QA: schema validated all 22 profiles. Commands: python3 records01.py through records06.py (group-local absolute paths); python3 finalize.py; node scripts/validate-profiles.mjs profiles. Initial `python` executable absent; used python3. Claim headings normalized to public page sections/searchable phrases; no JSON machine field used as locator. Full public fetch-result chronology retained in group-local research-web-log.txt (research batches 1–46), including failed URL attempts. Validation command only reads profile files when custom directory supplied; separate parseClaims check validates ledgers.
