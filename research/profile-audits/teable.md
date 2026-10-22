> Temporary paths normalized; local setup omitted. Exact original retained locally.

# teable research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open pricing/About, official deployment old.ioURL redirected to help.teable.ai.
4. web.search official funding/founding returned About/backers but no founding year.
5. Read standalone compose hardware/PostgreSQL/Redis/optionalS3; followed Architecture and Deployment to separate full runtime plane.
6. Current pricing cloud Business explicitly Most popular; crossed-out prices not treated as verified monthly billing.
7. Deployment navigation explicitly marks one-click cloud deprecated; excluded stale templates.

## Public pages read and claim locators
- https://teable.ai/about — About Us → organization.name
- https://teable.ai/about — About Us → organization.foundedYear
- https://teable.ai/about — About Us → organization.ageBasis
- https://teable.ai/about — About Us → organization.ownership
- https://teable.ai/about — About Us → organization.funding
- https://teable.ai/about — About Us → organization.investors
- https://teable.ai/about — About Us → organization.notes
- https://teable.ai/pricing — Free; Cloud Self-hosted → pricingTiers.entry
- https://teable.ai/pricing — Business — Most popular → pricingTiers.popular
- https://teable.ai/pricing — Business → pricingTiers.business
- https://teable.ai/pricing — Pricing plans → pricingTiers.enterprise
- https://raw.githubusercontent.com/teableio/teable/develop/README.md — Turn your data into AI workflows and custom apps → productReasons.0
- https://help.teable.ai/en/deploy/choose — Tables, collaboration, API, automation → productReasons.1
- https://raw.githubusercontent.com/teableio/teable/develop/README.md — Turn your data into AI workflows and custom apps → productReasons.2
- https://help.teable.ai/en/deploy/architecture — Architecture → moats.0
- https://teable.ai/about — About Us → alternativeDetails.sponsorship
- https://help.teable.ai/en/deploy/docker — Docker Compose Deployment; What a deployment runs → alternativeDetails.selfHosting
- https://help.teable.ai/en/deploy/docker — One-Click Cloud Deployment (Deprecated) → alternativeDetails.oneClickInstall
- https://help.teable.ai/en/deploy/docker — Installing the Application; Adding Storage Service (Optional); What a deployment runs → alternativeDetails.selfHosting.requirements.0
- https://help.teable.ai/en/deploy/docker — Installing the Application; Adding Storage Service (Optional); What a deployment runs → alternativeDetails.selfHosting.requirements.1
- https://help.teable.ai/en/deploy/docker — Installing the Application; Adding Storage Service (Optional); What a deployment runs → alternativeDetails.selfHosting.requirements.2
- https://help.teable.ai/en/deploy/docker — Installing the Application; Adding Storage Service (Optional); What a deployment runs → alternativeDetails.selfHosting.requirements.3
- https://help.teable.ai/en/deploy/docker — Installing the Application; Adding Storage Service (Optional); What a deployment runs → alternativeDetails.selfHosting.requirements.4
- https://help.teable.ai/en/deploy/architecture — Installing the Application; Adding Storage Service (Optional); What a deployment runs → alternativeDetails.selfHosting.requirements.5
- https://help.teable.ai/en/deploy/architecture — Installing the Application; Adding Storage Service (Optional); What a deployment runs → alternativeDetails.selfHosting.requirements.6
- https://help.teable.ai/en/deploy/architecture — Installing the Application; Adding Storage Service (Optional); What a deployment runs → alternativeDetails.selfHosting.requirements.7
- https://help.teable.ai/en/deploy/docker — Installing the Application; Adding Storage Service (Optional); What a deployment runs → alternativeDetails.selfHosting.requirements.8
- https://help.teable.ai/en/deploy/docker — Server Requirements → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch3.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
