> Temporary paths normalized; local setup omitted. Exact original retained locally.

# zammad — research audit 2026-10-21


1. Opened official pricing, company, software/hardware prerequisites and feature pages.
2. Queries: site.zammad.com investment funded Zammad GmbH foundation 2016; site.zammad.com funding investors bootstrapped. Secondary bootstrap label excluded.
3. Read project About and open-source philosophy: foundation/GmbH distinction.
4. Pricing business/enterprise map explicit annual self-host support contracts; Most popular not designated.
5. Requirements checked for current PostgreSQL, Redis/Valkey, optional ES and conditional Memcached; package/container docs not treated as one-click.

Primary URLs read / decisions documented in claim ledger:
- https://zammad.com/en/company
- https://zammad.org/about
- https://zammad.com/en/pricing
- https://zammad.com/en/product/features
- https://docs.zammad.org/en/latest/prerequisites/software.html
- https://docs.zammad.org/en/latest/prerequisites/hardware.html

Persistence command: execute group-local build script; write profile JSON, claims JSONL, and audit markdown. Amounts unknown where billing term or numeric price could not be established. Assessments explicitly distinguished from vendor facts.

Final QA: schema validated all 22 profiles. Commands: python3 records01.py through records06.py (group-local absolute paths); python3 finalize.py; node scripts/validate-profiles.mjs profiles. Initial `python` executable absent; used python3. Claim headings normalized to public page sections/searchable phrases; no JSON machine field used as locator. Full public fetch-result chronology retained in group-local research-web-log.txt (research batches 1–46), including failed URL attempts. Validation command only reads profile files when custom directory supplied; separate parseClaims check validates ledgers.
