> Temporary paths normalized; local setup omitted. Exact original retained locally.

# affine research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open pricing; obsolete docker-compose-recommend URL404.
4. web.search funding on official domain returned About, founder update and FAQ; no verified primary funding announcement/investors recovered.
5. web.open guessed .docker/compose.yaml404; fallback raw .docker/selfhost/compose.yml succeeded, stable server image/PostgreSQLpgvector/Redis verified.
6. Pricing-linked self-host install index recovered correct current docs path; no one-click partner identity extracted.

## Public pages read and claim locators
- https://affine.pro/about-us — Our Story → organization.name
- https://affine.pro/about-us — Our Story → organization.foundedYear
- https://affine.pro/about-us — Our Story → organization.ageBasis
- https://affine.pro/about-us — Our Story → organization.ownership
- https://affine.pro/about-us — Our Story → organization.funding
- https://affine.pro/about-us — Our Story → organization.investors
- https://affine.pro/about-us — Our Story → organization.notes
- https://affine.pro/pricing — Local editor / Free → pricingTiers.entry
- https://affine.pro/pricing — Pricing plans → pricingTiers.popular
- https://affine.pro/pricing — Self-Hosted Team → pricingTiers.business
- https://affine.pro/pricing — Enterprise → pricingTiers.enterprise
- https://raw.githubusercontent.com/toeverything/AFFiNE/canary/README.md — A true canvas for blocks in any form → productReasons.0
- https://raw.githubusercontent.com/toeverything/AFFiNE/canary/README.md — Write, Draw and Plan All at Once → productReasons.1
- https://affine.pro/pricing — AFFiNE AI add-ons → productReasons.2
- https://raw.githubusercontent.com/toeverything/AFFiNE/canary/README.md — Features → moats.0
- https://affine.pro/about-us — Our Story → alternativeDetails.sponsorship
- https://docs.affine.pro/self-host-affine/install/ — Install — Chapters → alternativeDetails.selfHosting
- https://docs.affine.pro/self-host-affine/install/ — Install → alternativeDetails.oneClickInstall
- https://raw.githubusercontent.com/toeverything/AFFiNE/canary/.docker/selfhost/compose.yml — services: affine; affine_migration; redis; postgres → alternativeDetails.selfHosting.requirements.0
- https://raw.githubusercontent.com/toeverything/AFFiNE/canary/.docker/selfhost/compose.yml — services: affine; affine_migration; redis; postgres → alternativeDetails.selfHosting.requirements.1
- https://raw.githubusercontent.com/toeverything/AFFiNE/canary/.docker/selfhost/compose.yml — services: affine; affine_migration; redis; postgres → alternativeDetails.selfHosting.requirements.2
- https://raw.githubusercontent.com/toeverything/AFFiNE/canary/.docker/selfhost/compose.yml — services: affine; affine_migration; redis; postgres → alternativeDetails.selfHosting.requirements.3
- https://docs.affine.pro/self-host-affine/install/ — services: affine; affine_migration; redis; postgres → alternativeDetails.selfHosting.requirements.4
- https://docs.affine.pro/self-host-affine/install/ — Requirements → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch2.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final verification and corrections
- Clicked Requirements chapter from official installation index; read hardware, sole-supportedPostgreSQL and requiredRedis6/7. Updated recommendations and optionalmonitoring.
- Replaced overlapping doc/canvas functional reason with version-history restoration, supported by pricing Cloud Time Machine section.

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
