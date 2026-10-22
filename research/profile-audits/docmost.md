> Temporary paths normalized; local setup omitted. Exact original retained locally.

# docmost research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open pricing/About and /docs/installation/; About inaccessible, trailing-slash docs returned404.
4. Pricing Install link resolved canonical /docs/installation without trailing slash.
5. web.search official founder/funding sources found first-release announcement and founder profile; no primary equity financing announcement recovered.
6. web.open raw current compose and installation body verified PostgreSQL18/Redis8/local and optionalS3/Azure storage.

## Public pages read and claim locators
- https://docmost.com/terms — Terms of Service → organization.name
- https://docmost.com/blog/docmost-is-here/ — Docmost is here → organization.foundedYear
- https://docmost.com/blog/docmost-is-here/ — 29Jun2024; first release → organization.ageBasis
- https://docmost.com/terms — Terms of Service → organization.ownership
- https://docmost.com/terms — Terms of Service → organization.funding
- https://docmost.com/terms — Terms of Service → organization.investors
- https://docmost.com/terms — Terms of Service → organization.notes
- https://docmost.com/pricing — Compare plans — Community Free → pricingTiers.entry
- https://docmost.com/pricing — Most popular — Business → pricingTiers.popular
- https://docmost.com/pricing — Business → pricingTiers.business
- https://docmost.com/pricing — Enterprise → pricingTiers.enterprise
- https://docmost.com/docs/ — Collaborative Real-time Editor → productReasons.0
- https://docmost.com/pricing — What's the difference between Community and Business? → productReasons.1
- https://docmost.com/pricing — What's the difference between Community and Business? → productReasons.2
- https://docmost.com/pricing — What's the difference between Community and Business? → moats.0
- https://docmost.com/terms — Terms of Service → alternativeDetails.sponsorship
- https://docmost.com/docs/installation — Installation; Replace the default configs → alternativeDetails.selfHosting
- https://docmost.com/docs/installation — Start the Services → alternativeDetails.oneClickInstall
- https://docmost.com/docs/installation — services: docmost; db; redis; Replace the default configs → alternativeDetails.selfHosting.requirements.0
- https://raw.githubusercontent.com/docmost/docmost/main/docker-compose.yml — services: docmost; db; redis; Replace the default configs → alternativeDetails.selfHosting.requirements.1
- https://raw.githubusercontent.com/docmost/docmost/main/docker-compose.yml — services: docmost; db; redis; Replace the default configs → alternativeDetails.selfHosting.requirements.2
- https://docmost.com/docs/installation — services: docmost; db; redis; Replace the default configs → alternativeDetails.selfHosting.requirements.3
- https://docmost.com/docs/installation — services: docmost; db; redis; Replace the default configs → alternativeDetails.selfHosting.requirements.4
- https://docmost.com/docs/installation — services: docmost; db; redis; Replace the default configs → alternativeDetails.selfHosting.requirements.5
- https://docmost.com/docs/installation — Prerequisites → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch3.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
