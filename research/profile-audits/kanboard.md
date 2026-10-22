> Temporary paths normalized; local setup omitted. Exact original retained locally.

# kanboard research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open homepage/donations/requirements; PHP Versions and Compatible Databases read.
4. web.search official release2014 returned first release dated February16,2014.
5. No official one-click provider verified on reviewed installation pages; manual PHP/container paths are not counted as one-click.

## Public pages read and claim locators
- https://kanboard.org/ — Free and Open Source software → organization.name
- https://kanboard.org/releases/kanboard/v1.0.0.html — Release date: February16,2014; First release! → organization.foundedYear
- https://kanboard.org/releases/kanboard/v1.0.0.html — First release! → organization.ageBasis
- https://kanboard.org/ — Free and Open Source software → organization.ownership
- https://kanboard.org/donations.html — Donations → organization.funding
- https://kanboard.org/donations.html — LiberaPay; PayPal → organization.investors
- https://kanboard.org/ — Free and Open Source software → organization.notes
- https://kanboard.org/ — Kanboard → pricingTiers.entry
- https://kanboard.org/ — Pricing plans → pricingTiers.popular
- https://kanboard.org/ — Pricing plans → pricingTiers.business
- https://kanboard.org/ — Pricing plans → pricingTiers.enterprise
- https://kanboard.org/ — Limit your work in progress → productReasons.0
- https://kanboard.org/ — Automatic actions → productReasons.1
- https://kanboard.org/ — Search and filter tasks → productReasons.2
- https://kanboard.org/ — Simple; Free and Open Source software → moats.0
- https://kanboard.org/ — Donations → alternativeDetails.sponsorship
- https://docs.kanboard.org/v1/admin/requirements/ — Server Side → alternativeDetails.selfHosting
- https://docs.kanboard.org/v1/admin/requirements/ — Requirements and Prerequisites → alternativeDetails.oneClickInstall
- https://docs.kanboard.org/v1/admin/requirements/ — Compatible Databases; PHP Versions; Required PHP Extensions; Optional PHP Extensions → alternativeDetails.selfHosting.requirements.0
- https://docs.kanboard.org/v1/admin/requirements/ — Compatible Databases; PHP Versions; Required PHP Extensions; Optional PHP Extensions → alternativeDetails.selfHosting.requirements.1
- https://docs.kanboard.org/v1/admin/requirements/ — Compatible Databases; PHP Versions; Required PHP Extensions; Optional PHP Extensions → alternativeDetails.selfHosting.requirements.2
- https://docs.kanboard.org/v1/admin/requirements/ — Compatible Databases; PHP Versions; Required PHP Extensions; Optional PHP Extensions → alternativeDetails.selfHosting.requirements.3
- https://docs.kanboard.org/v1/admin/requirements/ — Compatible Databases; PHP Versions; Required PHP Extensions; Optional PHP Extensions → alternativeDetails.selfHosting.requirements.4
- https://docs.kanboard.org/v1/admin/requirements/ — Compatible Databases; PHP Versions; Required PHP Extensions; Optional PHP Extensions → alternativeDetails.selfHosting.requirements.5
- https://docs.kanboard.org/v1/admin/requirements/ — Compatible Databases; PHP Versions; Required PHP Extensions; Optional PHP Extensions → alternativeDetails.selfHosting.requirements.6
- https://docs.kanboard.org/v1/admin/requirements/ — Compatible Databases; PHP Versions; Required PHP Extensions; Optional PHP Extensions → alternativeDetails.selfHosting.requirements.7
- https://docs.kanboard.org/v1/admin/requirements/ — Compatible Operating Systems; Devices → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch2.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
