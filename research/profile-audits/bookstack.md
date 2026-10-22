> Temporary paths normalized; local setup omitted. Exact original retained locally.

# bookstack research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open FAQ/install/donate, read origins2015 and explicit refusal of investment.
4. Homepage Project Sponsors headings had no text names; raw first-party repository README revealed corporate sponsor names/links.
5. web.open content overview; homepage feature link inaccessible, content docs provide hierarchy/editor/diagrams locators.
6. Current PHP8.2+/MySQL8.0+/MariaDB10.6+ and optional extensions verified. Scripted installs distinguished from one-click.

## Public pages read and claim locators
- https://www.bookstackapp.com/about/project-faq/ — How did BookStack start?; Who works on BookStack?; Funding & Partnerships → organization.name
- https://www.bookstackapp.com/about/project-faq/ — How did BookStack start?; Who works on BookStack?; Funding & Partnerships → organization.foundedYear
- https://www.bookstackapp.com/about/project-faq/ — How did BookStack start?; Who works on BookStack?; Funding & Partnerships → organization.ageBasis
- https://www.bookstackapp.com/about/project-faq/ — How did BookStack start?; Who works on BookStack?; Funding & Partnerships → organization.ownership
- https://www.bookstackapp.com/about/project-faq/ — How did BookStack start?; Who works on BookStack?; Funding & Partnerships → organization.funding
- https://www.bookstackapp.com/about/project-faq/ — How did BookStack start?; Who works on BookStack?; Funding & Partnerships → organization.investors
- https://www.bookstackapp.com/about/project-faq/ — How did BookStack start?; Who works on BookStack?; Funding & Partnerships → organization.notes
- https://www.bookstackapp.com/about/project-faq/ — BookStack → pricingTiers.entry
- https://www.bookstackapp.com/about/project-faq/ — Pricing plans → pricingTiers.popular
- https://www.bookstackapp.com/about/project-faq/ — Pricing plans → pricingTiers.business
- https://www.bookstackapp.com/about/project-faq/ — Pricing plans → pricingTiers.enterprise
- https://www.bookstackapp.com/docs/user/content-overview/ — Content Overview → productReasons.0
- https://www.bookstackapp.com/ — Simple, Free & Open Source → productReasons.1
- https://www.bookstackapp.com/docs/user/content-overview/ — Drawings & Diagrams; Roles & Permissions → productReasons.2
- https://www.bookstackapp.com/about/project-faq/ — What are the core goals of BookStack? → moats.0
- https://raw.githubusercontent.com/BookStackApp/BookStack/development/readme.md — Project Sponsors — Gold Sponsor; Bronze Sponsors → alternativeDetails.sponsorship
- https://www.bookstackapp.com/docs/admin/installation/ — Requirements; Ubuntu24.04 Installation Script → alternativeDetails.selfHosting
- https://www.bookstackapp.com/docs/admin/installation/ — Ubuntu24.04 Installation Script → alternativeDetails.oneClickInstall
- https://www.bookstackapp.com/docs/admin/installation/ — Requirements → alternativeDetails.selfHosting.requirements.0
- https://www.bookstackapp.com/docs/admin/installation/ — Requirements → alternativeDetails.selfHosting.requirements.1
- https://www.bookstackapp.com/docs/admin/installation/ — Requirements → alternativeDetails.selfHosting.requirements.2
- https://www.bookstackapp.com/docs/admin/installation/ — Requirements → alternativeDetails.selfHosting.requirements.3
- https://www.bookstackapp.com/docs/admin/installation/ — Requirements → alternativeDetails.selfHosting.requirements.4
- https://www.bookstackapp.com/docs/admin/installation/ — Requirements → alternativeDetails.selfHosting.requirements.5
- https://www.bookstackapp.com/docs/admin/installation/ — Requirements → alternativeDetails.selfHosting.requirements.6
- https://www.bookstackapp.com/docs/admin/installation/ — Requirements → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch3.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final verification and corrections
- Followed official DefaultPageEditor, Drawings&Diagrams and Roles&Permissions links; routed editing and diagram claims to their actual public documentation pages. Diagram reason now specifically covers revision-preserving embedded drawings.

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
