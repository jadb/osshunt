> Temporary paths normalized; local setup omitted. Exact original retained locally.

# huly research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open pricing, home and self-host README; read requirements and AI Service.
4. web.find Cockroach in README returned none; fallback web.open raw compose.yml confirmed default SQL/queue/search/object store.
5. web.open /terms failed; official-domain search returned /legal/terms and culture article.
6. Sponsorship: no separate corporate sponsor detected in reviewed project pages; verified commercial steward used as fallback.

## Public pages read and claim locators
- https://huly.io/legal/terms — Terms of Service → organization.name
- https://v1.huly.io/blog/culture/ — Culture at Hardcore Engineering → organization.foundedYear
- https://v1.huly.io/blog/culture/ — founded in May of the distant year 2020 → organization.ageBasis
- https://huly.io/legal/terms — Terms of Service → organization.ownership
- https://v1.huly.io/blog/culture/ — Culture at Hardcore Engineering → organization.funding
- https://v1.huly.io/blog/culture/ — Culture at Hardcore Engineering → organization.investors
- https://huly.io/legal/terms — Terms of Service → organization.notes
- https://huly.io/pricing — Open-source self-hosted core → pricingTiers.entry
- https://huly.io/pricing — Pricing plans → pricingTiers.popular
- https://huly.io/pricing — Epic → pricingTiers.business
- https://huly.io/pricing — Custom Plan → pricingTiers.enterprise
- https://huly.io/ — Unmatched productivity → productReasons.0
- https://huly.io/ — Everything you need for productive team work → productReasons.1
- https://huly.io/ — Work together. Like in the office. → productReasons.2
- https://huly.io/ — Everything you need for productive team work → moats.0
- https://huly.io/legal/terms — Terms of Service → alternativeDetails.sponsorship
- https://github.com/hcengineering/huly-selfhost — Huly Self-Hosted; System Requirements → alternativeDetails.selfHosting
- https://github.com/hcengineering/huly-selfhost — Huly Self-Hosted → alternativeDetails.oneClickInstall
- https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml — services: cockroach; redpanda; minio; elastic; mongodb; redis → alternativeDetails.selfHosting.requirements.0
- https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml — services: cockroach; redpanda; minio; elastic; mongodb; redis → alternativeDetails.selfHosting.requirements.1
- https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml — services: cockroach; redpanda; minio; elastic; mongodb; redis → alternativeDetails.selfHosting.requirements.2
- https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml — services: cockroach; redpanda; minio; elastic; mongodb; redis → alternativeDetails.selfHosting.requirements.3
- https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml — services: cockroach; redpanda; minio; elastic; mongodb; redis → alternativeDetails.selfHosting.requirements.4
- https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml — services: cockroach; redpanda; minio; elastic; mongodb; redis → alternativeDetails.selfHosting.requirements.5
- https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml — services: cockroach; redpanda; minio; elastic; mongodb; redis → alternativeDetails.selfHosting.requirements.6
- https://raw.githubusercontent.com/hcengineering/huly-selfhost/main/compose.yml — services: cockroach; redpanda; minio; elastic; mongodb; redis → alternativeDetails.selfHosting.requirements.7
- https://github.com/hcengineering/huly-selfhost — services: cockroach; redpanda; minio; elastic; mongodb; redis → alternativeDetails.selfHosting.requirements.8
- https://github.com/hcengineering/huly-selfhost — System Requirements → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch1.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
