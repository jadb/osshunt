> Temporary paths normalized; local setup omitted. Exact original retained locally.

# taiga research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open /pricing and /about inaccessible; homepage links provided successful canonical deployment-pricing-options and about-us paths.
4. web.click terms; web.find Kaleidos/LLC none, S.L. confirmed current commercial operator.
5. web.open production docs and find RAM recovered source-route hardware and dependency versions; Docker recommended.

## Public pages read and claim locators
- https://taiga.io/terms-and-conditions/ — Terms and Conditions → organization.name
- https://taiga.io/about-us/ — Taiga's birth goes back to a Kaleidos hackathon in2013 → organization.foundedYear
- https://taiga.io/about-us/ — Taiga's birth goes back → organization.ageBasis
- https://taiga.io/terms-and-conditions/ — Terms and Conditions → organization.ownership
- https://taiga.io/terms-and-conditions/ — Terms and Conditions → organization.funding
- https://taiga.io/terms-and-conditions/ — Terms and Conditions → organization.investors
- https://taiga.io/terms-and-conditions/ — Terms and Conditions → organization.notes
- https://taiga.io/deployment-pricing-options/ — Community → pricingTiers.entry
- https://taiga.io/deployment-pricing-options/ — Pricing plans → pricingTiers.popular
- https://taiga.io/deployment-pricing-options/ — Basic → pricingTiers.business
- https://taiga.io/deployment-pricing-options/ — Taiga Private Cloud → pricingTiers.enterprise
- https://taiga.io/about-us/ — Open Source and Lean principles gave birth to Taiga → productReasons.0
- https://taiga.io/ — PLANNING — Get organized → productReasons.1
- https://taiga.io/ — INSIGHT — Stay on track → productReasons.2
- https://taiga.io/about-us/ — Open Source and Lean principles gave birth to Taiga → moats.0
- https://taiga.io/terms-and-conditions/ — Terms and Conditions → alternativeDetails.sponsorship
- https://docs.taiga.io/setup-production.html — 1. Docker; 2. From source code → alternativeDetails.selfHosting
- https://docs.taiga.io/setup-production.html — 1. Docker → alternativeDetails.oneClickInstall
- https://docs.taiga.io/setup-production.html — 1.4 Basic Configuration; 2.3 Dependencies → alternativeDetails.selfHosting.requirements.0
- https://docs.taiga.io/setup-production.html — 1.4 Basic Configuration; 2.3 Dependencies → alternativeDetails.selfHosting.requirements.1
- https://docs.taiga.io/setup-production.html — 1.4 Basic Configuration; 2.3 Dependencies → alternativeDetails.selfHosting.requirements.2
- https://docs.taiga.io/setup-production.html — 1.4 Basic Configuration; 2.3 Dependencies → alternativeDetails.selfHosting.requirements.3
- https://docs.taiga.io/setup-production.html — 1.4 Basic Configuration; 2.3 Dependencies → alternativeDetails.selfHosting.requirements.4
- https://docs.taiga.io/setup-production.html — 1.4 Basic Configuration; 2.3 Dependencies → alternativeDetails.selfHosting.requirements.5
- https://docs.taiga.io/setup-production.html — 2.2 Pre-requisites → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch2.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
