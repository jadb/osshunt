> Temporary paths normalized; local setup omitted. Exact original retained locally.

# airtable research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open pricing/About; web.find Team and 2012 recovered FAQ prices and foundation.
4. web.search Airtable series F 735 on official blog domain returned company-updates index.
5. web.open original Series F article redirected to newsroom without funding body; exact investors left unknown.

## Public pages read and claim locators
- https://www.airtable.com/about — About Airtable → organization.name
- https://www.airtable.com/about — In 2012, we started → organization.foundedYear
- https://www.airtable.com/about — In 2012, we started → organization.ageBasis
- https://blog.airtable.com/tag/company-updates/ — Announcing Airtable's Series F Funding → organization.funding
- https://www.airtable.com/about — About Airtable → organization.ownership
- https://blog.airtable.com/tag/company-updates/ — Announcing Airtable's Series F Funding → organization.investors
- https://www.airtable.com/about — About Airtable → organization.notes
- https://airtable.com/pricing — How much does Airtable cost? → pricingTiers.entry
- https://airtable.com/pricing — Pricing plans → pricingTiers.popular
- https://airtable.com/pricing — How much does Airtable cost? → pricingTiers.business
- https://airtable.com/pricing — How does Airtable's Business and Enterprise Scale pricing work? → pricingTiers.enterprise
- https://airtable.com/pricing — Databases → productReasons.0
- https://airtable.com/pricing — Interfaces; Reporting → productReasons.1
- https://airtable.com/pricing — Automations; AI Agents → productReasons.2
- https://www.airtable.com/about — To close the gap between “what if” and “it works” → moats.0

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch1.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final verification and corrections
- web.search queries `Airtable Bending Spoons acquisition August2026 site:bendingspoons.com` and `Airtable Bending Spoons acquisition site:airtable.com` returned official4September2026completion releases. Read both.
- web.search `site.airtable.com XN funding` recovered canonical `/newsroom/series-f`; web.open and web.find T.Rowe confirmed investor list dated13December2021.
- Updated ownership to public-subsidiary; parent acquired100%of shares. Historical investors explicitly separated from current parent. Earlier unresolved funding article redirect resolved by canonical newsroom URL.

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
