> Temporary paths normalized; local setup omitted. Exact original retained locally.

# grafana research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open grafana pricing/about; about redirects to current company page.
2. web.search funding Lightspeed GIC; read official August 2024 primary/secondary announcement.
3. web.search founded in 2014; official documentary article distinguishes business from project.
4. web.open installation; guessed set-up-grafana URL failed; fallback current installation and configure-grafana pages.
5. web.find installation: 512 and MySQL; read Supported databases and HA/session note.
6. web.open OSS feature page; assessed established dashboard/plugin/provisioning features, avoiding future release claims.
7. Reviewed pricing plan cards; no Most popular/Recommended designation verified. Manual package/Docker routes are not one-click.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "site.grafana.com 2024 funding Lightspeed GIC Coatue Sequoia 2014"}
- web.search_query {"q": "site.grafana.com \"founded in 2014\""}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://grafana.com/press/2024/08/21/grafana-labs-soars-past-250m-arr-and-5000-customers-completes-270m-primary-and-secondary-transaction-and-named-a-leader-in-the-gartner-magic-quadrant-for-observability-platforms/
- https://grafana.com/about/grafana-labs/
- https://grafana.com/blog/the-story-of-grafana-documentary-the-business-of-open-source/
- https://grafana.com/oss/grafana/
- https://grafana.com/pricing/
- https://grafana.com/docs/grafana/latest/setup-grafana/installation/

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
