> Temporary paths normalized; local setup omitted. Exact original retained locally.

# posthog research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open pricing/self-host/about; handbook/company/about failed, fallback /about and /media.
2. Read media funding history and origin; retained disclosed investors but avoided conflicted aggregate totals.
3. Read pricing and platform package cards:250Boost,750Scale,Enterprise custom; no published event unit rate extracted.
4. Read unsupported self-host notice,4vCPU16GB>30GB guide; beta TUI excluded.
5. Read current raw hobby compose and find kafka/objectstorage/temporal; requirements capture material supporting services and optional AI keys.
6. Installer recorded one-command, not true one-click.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "PostHog about funding 2025 Stripe GV Y Combinator"}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://posthog.com/media
- https://posthog.com/about
- https://posthog.com/docs/self-host
- https://posthog.com/pricing
- https://posthog.com/platform-packages
- https://raw.githubusercontent.com/PostHog/posthog/master/docker-compose.hobby.yml

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
