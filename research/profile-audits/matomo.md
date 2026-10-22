> Temporary paths normalized; local setup omitted. Exact original retained locally.

# matomo research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open pricing/about/requirements; requirements URL redirects current FAQ.
2. Read About2007 project history; searched InnoCraft2016, official3.0 announcement and current privacy policy identify business steward. No equity funding assertion from absence.
3. Read on-premise cards and comparison: Community free; Business carries Popular badge. Cards monthly1450/3400; annual discounted table differs, total left null.
4. Read PHP/MySQL/MariaDB requirements: excluded Matomo6 beta as stable target.
5. Read workload sizing<=100k pageviews. Official requirements link WordPress plugin; opened marketplace and verified first-party install.
6. An incidental migration FAQ opened during install search did not establish one-click and was not used for that claim.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "site:matomo.org \"InnoCraft\" \"2016\""}
- web.search_query {"q": "site:matomo.org \"bootstrapped\""}
- web.search_query {"q": "site:matomo.org \"InnoCraft\" \"acquired\""}
- web.search_query {"q": "site:matomo.org \"one-click\""}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://matomo.org/about/
- https://matomo.org/changelog/piwik-3-0-0/
- https://fr.matomo.org/politique-de-confidentialite/
- https://matomo.org/pricing/
- https://matomo.org/faq/on-premise/matomo-requirements/
- https://wordpress.org/plugins/matomo/

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
