> Temporary paths normalized; local setup omitted. Exact original retained locally.

# coolify — research audit
Checked 2026-10-21

## Chronological research actions
1. Read assignment schema and QA clarifications; original repository left read only.
2. web.open pricing, coolLabs homepage/philosophy and install docs; no investors is explicit first-party statement.
3. Sponsors static extraction showed Loading sponsors; browser rendered Huge/Big Sponsors cards. Captured actual corporate sponsor names; investors/customers not mixed.
4. Read stable4.4.7 base and production Compose: PostgreSQL15,Redis7; realtime inside main container since4.4. Legacy Soketi not incorrectly required.
5. Company foundingyear search and Team page did not establish exact date; unknown retained. GitHub API/local HTTP attempt unavailable.

## Sources read and public-page locators
- https://coollabs.io/ — Free because of our sponsors; no investors; footer coolLabs Solutions Kft
- https://coollabs.io/philosophy — How we sustain development: donations and hosted services; no enterprise edition
- https://coolify.io/pricing — Self-hosted Free forever; Cloud$5/month base2 servers +$3 additional; self-host/cloud comparison
- https://coolify.io/docs/start-with-self-hosted — Before you begin; minimum hardware; supported operating systems; Automated installation
- https://coolify.io/docs/sponsors — Sponsors Supporting Coolify; Huge Sponsors and Big Sponsors rendered cards
- https://raw.githubusercontent.com/coollabsio/coolify/v4.4.7/docker-compose.yml — services coolify depends_on postgres and redis; postgres15-alpine; redis7-alpine
- https://raw.githubusercontent.com/coollabsio/coolify/v4.4.7/docker-compose.prod.yml — Realtime runs inside coolify container now; persistent volumes; postgres and redis

## Decisions
- Four pricing roles retained; annual totals derived only where annual billing is explicit. Unknown does not imply absent.
- Each of three product reasons and moat marked assessment; sponsors distinguished from investors/customers.
- Persisted profile, claim ledger and this audit together.
