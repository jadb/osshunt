> Temporary paths normalized; local setup omitted. Exact original retained locally.

# sentry research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open sentry pricing and about: both failed unsupported text/markdown.
2. Tried pricing query URL and docs.sentry.io/pricing: unavailable/unsupported; shell curl fallback returned no content; did not treat failures as absence.
3. web.search Sentry pricing Team 29; first-party help article verifies monthly Team/Business base prices. Third-party annual figures were excluded.
4. web.search Sentry raises 90 million 2022 Accel NEA official; investor Accel announcement and company-authored Series B mirror returned.
5. Read Accel investor page and Sentry blog funding/feature text; exact company age not verified, retained null.
6. Read quote help: self-serve plans do not receive email quotes, volume contracts go to sales.
7. Popular designation left unknown because first-party pricing extraction failed.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "site.sentry.io pricing Team Business $26 $80 funding Accel"}
- web.search_query {"q": "site:sentry.io \"founded\" \"2015\""}
- web.search_query {"q": "Sentry raises 90 million 2022 Accel NEA official"}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://www.accel.com/news/helping-developers-see-and-solve-quicker-our-enduring-partnership-with-sentry
- https://sentry-blog.sentry.dev/sentry-raises-series-b/
- https://www.sentry.help/en/articles/13964853-how-is-my-legacy-plan-changing-september-12-2024
- https://sentry.io/pricing/
- https://www.sentry.help/en/articles/13965054-can-i-get-a-quote-for-sentry

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
