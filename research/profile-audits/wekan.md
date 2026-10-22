> Temporary paths normalized; local setup omitted. Exact original retained locally.

# wekan research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open commercial-support/SaaS, clicked Sponsors and Install.
4. Sponsors extraction contains headings without organization names; recorded unresolved identity and business fallback.
5. web.open raw current compose revealed default FerretDBv1/SQLite, not mandatory MongoDB. Installer corroborates supported/experimental alternatives.
6. Raw README used for functional views/imports/rules and attachment backends; no old Mongo-only requirement carried forward.

## Public pages read and claim locators
- https://wekan.fi/commercial-support/ — WeKan Worldwide Commercial Support → organization.name
- https://wekan.fi/commercial-support/ — WeKan Worldwide Commercial Support → organization.foundedYear
- https://wekan.fi/commercial-support/ — WeKan Worldwide Commercial Support → organization.ageBasis
- https://wekan.fi/commercial-support/ — WeKan Worldwide Commercial Support → organization.ownership
- https://wekan.fi/commercial-support/ — WeKan Worldwide Commercial Support → organization.funding
- https://wekan.fi/commercial-support/ — WeKan Worldwide Commercial Support → organization.investors
- https://wekan.fi/commercial-support/ — WeKan Worldwide Commercial Support → organization.notes
- https://wekan.fi/commercial-support/ — WeKan → pricingTiers.entry
- https://wekan.fi/saas/ — Pricing plans → pricingTiers.popular
- https://wekan.fi/saas/ — Official SaaS with Admin Panel → pricingTiers.business
- https://wekan.fi/commercial-support/ — Pricing plans → pricingTiers.enterprise
- https://raw.githubusercontent.com/wekan/wekan/main/README.md — Board Views → productReasons.0
- https://raw.githubusercontent.com/wekan/wekan/main/README.md — Add Board / Import; Export board → productReasons.1
- https://raw.githubusercontent.com/wekan/wekan/main/README.md — Right Sidebar / Board Settings — Rules → productReasons.2
- https://raw.githubusercontent.com/wekan/wekan/main/README.md — About WeKan; Features → moats.0
- https://wekan.fi/commercial-support/ — Sponsors; WeKan Worldwide Commercial Support → alternativeDetails.sponsorship
- https://wekan.fi/install/ — On-Premise: Install WeKan Server v12.58 → alternativeDetails.selfHosting
- https://wekan.fi/install/ — Linux Snap → alternativeDetails.oneClickInstall
- https://wekan.fi/install/ — Databases; Newest WeKan at platforms; Attachments → alternativeDetails.selfHosting.requirements.0
- https://wekan.fi/install/ — Databases; Newest WeKan at platforms; Attachments → alternativeDetails.selfHosting.requirements.1
- https://wekan.fi/install/ — Databases; Newest WeKan at platforms; Attachments → alternativeDetails.selfHosting.requirements.2
- https://wekan.fi/install/ — Databases; Newest WeKan at platforms; Attachments → alternativeDetails.selfHosting.requirements.3
- https://wekan.fi/install/ — Databases; Newest WeKan at platforms; Attachments → alternativeDetails.selfHosting.requirements.4
- https://raw.githubusercontent.com/wekan/wekan/main/README.md — Databases; Newest WeKan at platforms; Attachments → alternativeDetails.selfHosting.requirements.5
- https://raw.githubusercontent.com/wekan/wekan/main/README.md — Databases; Newest WeKan at platforms; Attachments → alternativeDetails.selfHosting.requirements.6
- https://wekan.fi/install/ — Requirements; Newest WeKan at platforms → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch2.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
