> Temporary paths normalized; local setup omitted. Exact original retained locally.

# baserow research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open pricing/About/Docker; web.find Redis and embedded PostgreSQL recovered bundled/external distinctions.
4. web.search official seed funding returned2022announcement naming investors; About confirms2020company/2019project.
5. web.click installation-on-Render official guide; explicit one-click template documented. Provider dollar figures not reused.

## Public pages read and claim locators
- https://baserow.io/about-us — Our story → organization.name
- https://baserow.io/about-us — Our story → organization.foundedYear
- https://baserow.io/about-us — Our story → organization.ageBasis
- https://baserow.io/about-us — Our story → organization.ownership
- https://baserow.io/blog/announcing-Baserow-5m-seed-round — Accelerating our vision → organization.funding
- https://baserow.io/blog/announcing-Baserow-5m-seed-round — This round is led by Amsterdam-based early stage investor Inkef → organization.investors
- https://baserow.io/about-us — Our story → organization.notes
- https://baserow.io/pricing — Free → pricingTiers.entry
- https://baserow.io/pricing — Most popular — Premium → pricingTiers.popular
- https://baserow.io/pricing — Advanced → pricingTiers.business
- https://baserow.io/pricing — Enterprise → pricingTiers.enterprise
- https://baserow.io/pricing — Free — Plan includes → productReasons.0
- https://baserow.io/pricing — Application Builder → productReasons.1
- https://baserow.io/pricing — API; OpenAPI specification → productReasons.2
- https://baserow.io/about-us — No-code platform that grows → moats.0
- https://baserow.io/about-us — Our story → alternativeDetails.sponsorship
- https://baserow.io/docs/installation/install-with-docker — Install with Docker → alternativeDetails.selfHosting
- https://baserow.io/docs/installation/install-with-docker — The template → alternativeDetails.oneClickInstall
- https://baserow.io/docs/installation/install-with-docker — Quick start; All-in-one image → alternativeDetails.selfHosting.requirements.0
- https://baserow.io/docs/installation/install-with-docker — Quick start; All-in-one image → alternativeDetails.selfHosting.requirements.1
- https://baserow.io/docs/installation/install-with-docker — Quick start; All-in-one image → alternativeDetails.selfHosting.requirements.2
- https://baserow.io/docs/installation/install-with-docker — Quick start; All-in-one image → alternativeDetails.selfHosting.requirements.3
- https://baserow.io/docs/installation/install-with-docker — Quick start; All-in-one image → alternativeDetails.selfHosting.requirements.4
- https://baserow.io/docs/installation/install-with-docker — Quick start; All-in-one image → alternativeDetails.selfHosting.requirements.5
- https://baserow.io/docs/installation/install-with-docker — Install with Docker → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch3.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
