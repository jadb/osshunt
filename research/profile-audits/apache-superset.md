> Temporary paths normalized; local setup omitted. Exact original retained locally.

# apache-superset research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open old installation URL returned empty document; search found reorganized admin-docs.
2. Read Architecture/Installation Methods but noticed Version:Next; did not treat future operator guidance as stable.
3. Guessed tagged mdx docs paths404; fallback stable6.1 raw README,compose,configuration source succeeds. Stable compose explicitly unsupported for production.
4. Read stable services and general architecture to distinguish metadata/source databases and conditional cache/workers/browser routes.
5. Read ASF foundation nonprofit/history and official sponsor list; names are foundation-wide donors, no invented project-specific sponsorship.
6. No verified official one-click option in installation sources; manual Compose/Kubernetes/Python routes do not qualify.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "Apache Superset production metadata PostgreSQL MySQL Redis Celery 8GB"}
- web.search_query {"q": "site:superset.apache.org \"2015\" \"Airbnb\""}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://www.apache.org/foundation/
- https://superset.apache.org/
- https://aws.amazon.com
- https://www.apache.org/foundation/sponsors
- https://google.com
- https://microsoft.com
- https://raw.githubusercontent.com/apache/superset/6.1.0/docker-compose-non-dev.yml
- https://superset.apache.org/admin-docs/installation/architecture/
- https://superset.apache.org/admin-docs/installation/installation-methods/

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
