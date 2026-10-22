> Temporary paths normalized; local setup omitted. Exact original retained locally.

# freescout — research audit 2026-10-21


1. Read homepage, modules and installation wiki.
2. Queries: FreeScout helpdesk founded funding company sponsors; site.freescout.net sponsor company FreeScout. Primary sources do not resolve legal steward or financing; third-party bootstrap claims excluded. GitHub API open failed.
3. README Requirements read: MySQL/MariaDB/PostgreSQL, PHP and three web servers. Installation cron daemon read.
4. Incorrect singular /one-click-install URL inaccessible; official plural link redirected to wiki. README links used to verify Softaculous and Cloudron pages. Cloudron extract blank; classification supported by official README link.
5. No corporate sponsor found in checked pages; no unverified business fallback.

Primary URLs read / decisions documented in claim ledger:
- https://github.com/freescout-help-desk/freescout
- https://freescout.net/modules/
- https://freescout.net/
- https://github.com/freescout-help-desk/freescout/wiki/Installation-Guide

Persistence command: execute group-local build script; write profile JSON, claims JSONL, and audit markdown. Amounts unknown where billing term or numeric price could not be established. Assessments explicitly distinguished from vendor facts.

Final QA: schema validated all 22 profiles. Commands: python3 records01.py through records06.py (group-local absolute paths); python3 finalize.py; node scripts/validate-profiles.mjs profiles. Initial `python` executable absent; used python3. Claim headings normalized to public page sections/searchable phrases; no JSON machine field used as locator. Full public fetch-result chronology retained in group-local research-web-log.txt (research batches 1–46), including failed URL attempts. Validation command only reads profile files when custom directory supplied; separate parseClaims check validates ledgers.
