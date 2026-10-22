> Temporary paths normalized; local setup omitted. Exact original retained locally.

# grist research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open pricing/About/self-managed; found stale self-funded wording on About.
4. web.search official seed funding returned24April2026press release; newer explicit announcement overrides stale About financing.
5. web.find PostgreSQL/memory verified SQLite-versus-PostgreSQL metadata distinction, Redis conditional dependency, known-good sizing.
6. Official pricing links YunoHost marketplace; clicked app page successfully.

## Public pages read and claim locators
- https://www.getgrist.com/about/ — Who we are → organization.name
- https://www.getgrist.com/about/ — Who we are → organization.foundedYear
- https://www.getgrist.com/about/ — Who we are → organization.ageBasis
- https://www.getgrist.com/about/ — Who we are → organization.ownership
- https://www.getgrist.com/blog/a-new-chapter-for-grist-labs-scaling-for-the-era-of-sovereignty/ — Fueling the mission: Seed funding → organization.funding
- https://www.getgrist.com/blog/a-new-chapter-for-grist-labs-scaling-for-the-era-of-sovereignty/ — Perry Tam as lead → organization.investors
- https://www.getgrist.com/about/ — Who we are → organization.notes
- https://www.getgrist.com/pricing/ — Grist Community edition → pricingTiers.entry
- https://www.getgrist.com/pricing/ — Pricing plans → pricingTiers.popular
- https://www.getgrist.com/pricing/ — Grist — $30 / user / mo; $24 / user / mo → pricingTiers.business
- https://www.getgrist.com/pricing/ — Your servers — Enterprise → pricingTiers.enterprise
- https://raw.githubusercontent.com/gristlabs/grist-core/main/README.md — Python formulas → productReasons.0
- https://raw.githubusercontent.com/gristlabs/grist-core/main/README.md — Drag-and-drop dashboards → productReasons.1
- https://raw.githubusercontent.com/gristlabs/grist-core/main/README.md — A portable, self-contained format; References → productReasons.2
- https://raw.githubusercontent.com/gristlabs/grist-core/main/README.md — Features in grist-core → moats.0
- https://www.getgrist.com/about/ — Grist Labs; Who we are → alternativeDetails.sponsorship
- https://support.getgrist.com/self-managed/ — Self-hosted Grist → alternativeDetails.selfHosting
- https://support.getgrist.com/self-managed/ — What is self-hosted deployment? → alternativeDetails.oneClickInstall
- https://support.getgrist.com/self-managed/ — What is the home database?; What is a state store?; How do I set up snapshots?; Hardware requirements → alternativeDetails.selfHosting.requirements.0
- https://raw.githubusercontent.com/gristlabs/grist-core/main/README.md — What is the home database?; What is a state store?; How do I set up snapshots?; Hardware requirements → alternativeDetails.selfHosting.requirements.1
- https://support.getgrist.com/self-managed/ — What is the home database?; What is a state store?; How do I set up snapshots?; Hardware requirements → alternativeDetails.selfHosting.requirements.2
- https://support.getgrist.com/self-managed/ — What is the home database?; What is a state store?; How do I set up snapshots?; Hardware requirements → alternativeDetails.selfHosting.requirements.3
- https://support.getgrist.com/self-managed/ — What is the home database?; What is a state store?; How do I set up snapshots?; Hardware requirements → alternativeDetails.selfHosting.requirements.4
- https://support.getgrist.com/self-managed/ — What is the home database?; What is a state store?; How do I set up snapshots?; Hardware requirements → alternativeDetails.selfHosting.requirements.5
- https://support.getgrist.com/self-managed/ — What is the home database?; What is a state store?; How do I set up snapshots?; Hardware requirements → alternativeDetails.selfHosting.requirements.6
- https://support.getgrist.com/self-managed/ — What are the hardware requirements for hosting Grist? → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch3.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
