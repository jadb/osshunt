> Temporary paths normalized; local setup omitted. Exact original retained locally.

# openproject research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open pricing/About/system requirements/Docker docs; navigation-heavy extraction required web.find CPU, PostgreSQL and Memcached.
4. web.search company 2012 foundation bootstrapped on official domain returned project introduction (2011), founder bootstrap statement and imprint.
5. No unique most-popular tier: recommendations vary by user count; not assigned to popular.
6. Current requirements PostgreSQL16+ take precedence over outdated example snippets using older PostgreSQL images.

## Public pages read and claim locators
- https://www.openproject.org/de/rechtliches/impressum/ — OpenProject GmbH → organization.name
- https://www.openproject.org/docs/getting-started/openproject-introduction/ — OpenProject exists since 2011 → organization.foundedYear
- https://www.openproject.org/docs/getting-started/openproject-introduction/ — OpenProject exists since 2011 → organization.ageBasis
- https://www.openproject.org/about-us/ — Achieve great things together → organization.ownership
- https://www.openproject.org/de/blog/pm2-alternative-pmi-prince2/ — With open source and open mind → organization.funding
- https://www.openproject.org/de/blog/pm2-alternative-pmi-prince2/ — With open source and open mind → organization.investors
- https://www.openproject.org/de/rechtliches/impressum/ — OpenProject GmbH → organization.notes
- https://www.openproject.org/pricing/ — Community → pricingTiers.entry
- https://www.openproject.org/pricing/ — Pricing plans → pricingTiers.popular
- https://www.openproject.org/pricing/ — Professional → pricingTiers.business
- https://www.openproject.org/pricing/ — Corporate → pricingTiers.enterprise
- https://www.openproject.org/about-us/ — Hybrid project management → productReasons.0
- https://www.openproject.org/pricing/ — Work packages; Display relations in the work package table → productReasons.1
- https://www.openproject.org/pricing/ — Integration comparison; Nextcloud integration → productReasons.2
- https://www.openproject.org/about-us/ — Hybrid project management → moats.0
- https://www.openproject.org/de/rechtliches/impressum/ — OpenProject GmbH → alternativeDetails.sponsorship
- https://www.openproject.org/docs/installation-and-operations/system-requirements/ — Database; Server → alternativeDetails.selfHosting
- https://www.openproject.org/docs/installation-and-operations/system-requirements/ — OpenProject on Docker all-in-one container → alternativeDetails.oneClickInstall
- https://www.openproject.org/docs/installation-and-operations/system-requirements/ — Database; Image variants; Launching → alternativeDetails.selfHosting.requirements.0
- https://www.openproject.org/docs/installation-and-operations/installation/docker/ — Database; Image variants; Launching → alternativeDetails.selfHosting.requirements.1
- https://www.openproject.org/docs/installation-and-operations/installation/docker/ — Database; Image variants; Launching → alternativeDetails.selfHosting.requirements.2
- https://www.openproject.org/docs/installation-and-operations/installation/docker/ — Database; Image variants; Launching → alternativeDetails.selfHosting.requirements.3
- https://www.openproject.org/docs/installation-and-operations/installation/docker/ — Database; Image variants; Launching → alternativeDetails.selfHosting.requirements.4
- https://www.openproject.org/docs/installation-and-operations/system-requirements/ — Minimum hardware requirements → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch2.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
