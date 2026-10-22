> Temporary paths normalized; local setup omitted. Exact original retained locally.

# outline research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open pricing/About and recommended Docker guide; current on-premises prices numeric.
4. web.search founder/bootstrap returned official About; company2020 distinguished from project2017.
5. web.open Requirements verified PostgreSQL14+/Redis4+, memory and Unix OS.
6. Authentication provider link returned empty0-line page; retained requirement documented in Requirements, without guessing supported providers.

## Public pages read and claim locators
- https://www.getoutline.com/about — Company; footer General Outline, Inc. → organization.name
- https://www.getoutline.com/about — Company; footer General Outline, Inc. → organization.foundedYear
- https://www.getoutline.com/about — Company; footer General Outline, Inc. → organization.ageBasis
- https://www.getoutline.com/about — Company; footer General Outline, Inc. → organization.ownership
- https://www.getoutline.com/about — Company; footer General Outline, Inc. → organization.funding
- https://www.getoutline.com/about — Company; footer General Outline, Inc. → organization.investors
- https://www.getoutline.com/about — Company; footer General Outline, Inc. → organization.notes
- https://www.getoutline.com/pricing — On-Premises plans → pricingTiers.entry
- https://www.getoutline.com/pricing — Pricing plans → pricingTiers.popular
- https://www.getoutline.com/pricing — On-Premises plans → pricingTiers.business
- https://www.getoutline.com/pricing — On-Premises plans → pricingTiers.enterprise
- https://www.getoutline.com/ — Multiplayer collaboration → productReasons.0
- https://www.getoutline.com/ — Integrated with Slack → productReasons.1
- https://www.getoutline.com/ — Intuitive editing experience → productReasons.2
- https://www.getoutline.com/about — Our Goal → moats.0
- https://www.getoutline.com/about — Company → alternativeDetails.sponsorship
- https://docs.getoutline.com/s/hosting/doc/docker-7pfeLP5a8t — Configuration; Docker Compose → alternativeDetails.selfHosting
- https://docs.getoutline.com/s/hosting/doc/docker-7pfeLP5a8t — Docker Compose → alternativeDetails.oneClickInstall
- https://docs.getoutline.com/s/hosting/doc/docker-7pfeLP5a8t — Supporting Software; Other Dependencies; Docker Compose → alternativeDetails.selfHosting.requirements.0
- https://docs.getoutline.com/s/hosting/doc/requirements-ULdYnwi4wG — Supporting Software; Other Dependencies; Docker Compose → alternativeDetails.selfHosting.requirements.1
- https://docs.getoutline.com/s/hosting/doc/requirements-ULdYnwi4wG — Supporting Software; Other Dependencies; Docker Compose → alternativeDetails.selfHosting.requirements.2
- https://docs.getoutline.com/s/hosting/doc/requirements-ULdYnwi4wG — Supporting Software; Other Dependencies; Docker Compose → alternativeDetails.selfHosting.requirements.3
- https://docs.getoutline.com/s/hosting/doc/docker-7pfeLP5a8t — Supporting Software; Other Dependencies; Docker Compose → alternativeDetails.selfHosting.requirements.4
- https://docs.getoutline.com/s/hosting/doc/docker-7pfeLP5a8t — Supporting Software; Other Dependencies; Docker Compose → alternativeDetails.selfHosting.requirements.5
- https://docs.getoutline.com/s/hosting/doc/requirements-ULdYnwi4wG — Hardware; Operating System → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch3.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
