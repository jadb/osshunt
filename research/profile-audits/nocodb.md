> Temporary paths normalized; local setup omitted. Exact original retained locally.

# nocodb research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open pricing and legacy Docker URL; redirected to current Quickstart.
4. web.click single-server/custom-infrastructure; current docs explicitly PostgreSQL12+ withRedis/worker.
5. web.search official seed funding returned lead/participant names and launch chronology.
6. Pricing includes conflicting stale cloud comparison header; used internally consistent self-host Business card24annual/30monthly and self-host comparison. No explicit popular badge found.

## Public pages read and claim locators
- https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m — Why we built NocoDB; Since launching the open-source NocoDB project only a year ago; Seed round → organization.name
- https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m — Why we built NocoDB; Since launching the open-source NocoDB project only a year ago; Seed round → organization.foundedYear
- https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m — Why we built NocoDB; Since launching the open-source NocoDB project only a year ago; Seed round → organization.ageBasis
- https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m — Why we built NocoDB; Since launching the open-source NocoDB project only a year ago; Seed round → organization.ownership
- https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m — Why we built NocoDB; Since launching the open-source NocoDB project only a year ago; Seed round → organization.funding
- https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m — Why we built NocoDB; Since launching the open-source NocoDB project only a year ago; Seed round → organization.investors
- https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m — Why we built NocoDB; Since launching the open-source NocoDB project only a year ago; Seed round → organization.notes
- https://nocodb.com/pricing — Community Free Forever Fair-Code → pricingTiers.entry
- https://nocodb.com/pricing — Pricing plans → pricingTiers.popular
- https://nocodb.com/pricing — Business — For Your Business Needs → pricingTiers.business
- https://nocodb.com/pricing — Compare features — Community; Business; Scale; Enterprise → pricingTiers.enterprise
- https://nocodb.com/pricing — Workflows & interfaces; 30+ Field types → productReasons.0
- https://nocodb.com/pricing — Conditional webhooks & payloads → productReasons.1
- https://nocodb.com/pricing — Workflows & interfaces → productReasons.2
- https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m — Why we built NocoDB → moats.0
- https://nocodb.com/blog/announcing-nocodb-seed-funding-of-10-5m — Announcing NocoDB's $10.5M Seed Funding → alternativeDetails.sponsorship
- https://nocodb.com/docs/self-hosting/installation/quickstart — What this runs → alternativeDetails.selfHosting
- https://nocodb.com/docs/self-hosting/installation/quickstart — 1. Run → alternativeDetails.oneClickInstall
- https://nocodb.com/docs/self-hosting/installation/quickstart — What this runs; Before you begin; Multi-replica/scaling → alternativeDetails.selfHosting.requirements.0
- https://nocodb.com/docs/self-hosting/installation/custom-infrastructure — What this runs; Before you begin; Multi-replica/scaling → alternativeDetails.selfHosting.requirements.1
- https://nocodb.com/docs/self-hosting/installation/quickstart — What this runs; Before you begin; Multi-replica/scaling → alternativeDetails.selfHosting.requirements.2
- https://nocodb.com/docs/self-hosting/installation/quickstart — What this runs; Before you begin; Multi-replica/scaling → alternativeDetails.selfHosting.requirements.3
- https://nocodb.com/docs/self-hosting/installation/quickstart — What this runs; Before you begin; Multi-replica/scaling → alternativeDetails.selfHosting.requirements.4
- https://nocodb.com/docs/self-hosting/installation/custom-infrastructure — What this runs; Before you begin; Multi-replica/scaling → alternativeDetails.selfHosting.requirements.5
- https://nocodb.com/docs/self-hosting/installation/quickstart — Before you begin → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch3.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
