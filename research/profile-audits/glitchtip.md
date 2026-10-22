> Temporary paths normalized; local setup omitted. Exact original retained locally.

# glitchtip research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open official pricing and installation pages; redirects add trailing slash.
2. Read hosted monthly plans and annual-billing FAQ: annual discount requires contact, so totals remain null.
3. web.search Burke; homepage Who is making this and HIPAA page identify business steward. Founding and equity financing unresolved.
4. web.find install Railway; read current Postgres14+, optional Redis/Valkey7+, all-in-one and resource guidance.
5. web.click Railway deployment link succeeded; PikaPods link failed. Railway retained as verified official-link third-party template; failed provider not asserted.
6. Read error/uptime/performance overview and email/object-storage options; no mandatory Redis assumption.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "site.glitchtip.com about Burke Software"}
- web.search_query {"q": "site.glitchtip.com \"Burke\""}
- web.search_query {"q": "site:glitchtip.com \"2020\""}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://glitchtip.com/
- https://glitchtip.com/hipaa/
- https://glitchtip.com/pricing/
- https://glitchtip.com/documentation/install/
- https://railway.com/new/template/glitchtip

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
