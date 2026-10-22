> Temporary paths normalized; local setup omitted. Exact original retained locally.

# planka research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open home; clicked pricing/About, read shareholder/founding chronology and explicit Most Popular Pro card.
4. web.open docs production_version returned404; fallback raw first-party compose verified PostgreSQL16/local volumes/optionalS3/SMTP.
5. web.open feature comparison confirms Community/core versus Pro gates. License classification retained as source-available.

## Public pages read and claim locators
- https://planka.app/about — Who we are; Our Journey; A shareholder behind us → organization.name
- https://planka.app/about — Who we are; Our Journey; A shareholder behind us → organization.foundedYear
- https://planka.app/about — Who we are; Our Journey; A shareholder behind us → organization.ageBasis
- https://planka.app/about — Who we are; Our Journey; A shareholder behind us → organization.ownership
- https://planka.app/about — Who we are; Our Journey; A shareholder behind us → organization.funding
- https://planka.app/about — Who we are; Our Journey; A shareholder behind us → organization.investors
- https://planka.app/about — Who we are; Our Journey; A shareholder behind us → organization.notes
- https://planka.app/about — And the Community edition? → pricingTiers.entry
- https://planka.app/pricing — Most Popular — Pro Self-Hosted → pricingTiers.popular
- https://planka.app/pricing — Pro — Self-Hosted → pricingTiers.business
- https://planka.app/pricing — Enterprise → pricingTiers.enterprise
- https://planka.app/features — Cards → productReasons.0
- https://planka.app/features — Private Projects; Multiple Project Managers; Real-time Updates → productReasons.1
- https://planka.app/features — REST API; Personal API keys; Webhooks → productReasons.2
- https://planka.app/features — Where the Editions Differ → moats.0
- https://planka.app/about — Who we are → alternativeDetails.sponsorship
- https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml — services: planka; postgres → alternativeDetails.selfHosting
- https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml — services → alternativeDetails.oneClickInstall
- https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml — services: planka; postgres; S3_ENDPOINT; SMTP_HOST → alternativeDetails.selfHosting.requirements.0
- https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml — services: planka; postgres; S3_ENDPOINT; SMTP_HOST → alternativeDetails.selfHosting.requirements.1
- https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml — services: planka; postgres; S3_ENDPOINT; SMTP_HOST → alternativeDetails.selfHosting.requirements.2
- https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml — services: planka; postgres; S3_ENDPOINT; SMTP_HOST → alternativeDetails.selfHosting.requirements.3
- https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml — services: planka; postgres; S3_ENDPOINT; SMTP_HOST → alternativeDetails.selfHosting.requirements.4
- https://raw.githubusercontent.com/plankanban/planka/master/docker-compose.yml — services → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch2.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
