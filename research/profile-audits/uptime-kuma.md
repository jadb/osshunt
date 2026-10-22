> Temporary paths normalized; local setup omitted. Exact original retained locally.

# uptime-kuma research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open official GitHub README and installation wiki; /wiki/Installation redirected to wiki home.
2. web.find Sponsors confirms Atlas Cloud USD400/month; donor support kept separate from equity.
3. Read README Features and native Node>=20.4 requirements.
4. Guessed database wiki URL failed; fallback search official Environment Variables and source language strings confirms sqlite/mariadb and embedded image choice.
5. web.open actual How-to-Install; current Docker tag2 instructions, persistence/locking caveat and optional Helm/HomeAssistant routes.
6. No reliable project start-year evidence in README; kept year null.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "site:uptimekuma.org \"2021\""}
- web.search_query {"q": "site:github.com/louislam/uptime-kuma \"MariaDB\" \"SQLite\""}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://github.com/louislam/uptime-kuma
- https://www.atlascloud.ai
- https://github.com/louislam/uptime-kuma/wiki/%F0%9F%94%A7-How-to-Install
- https://github.com/louislam/uptime-kuma/wiki/Environment-Variables
- https://github.com/louislam/uptime-kuma/blob/master/src/lang/en.json

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
