> Temporary paths normalized; local setup omitted. Exact original retained locally.

# trello research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open Atlassian company, Accel company portfolio and official 2010 equity announcement.
4. web.open https://trello.com/pricing; current plan cards extracted.
5. web.open official feature page; headings used as claim locators.

## Public pages read and claim locators
- https://www.atlassian.com/company — A brief history; 2002; 2015; 2017 → organization.name
- https://www.atlassian.com/company — A brief history; 2002; 2015; 2017 → organization.foundedYear
- https://www.atlassian.com/company — A brief history; 2002; 2015; 2017 → organization.ageBasis
- https://www.atlassian.com/company — A brief history; 2002; 2015; 2017 → organization.ownership
- https://www.atlassian.com/company — A brief history; 2002; 2015; 2017 → organization.stockSymbols
- https://www.atlassian.com/blog/news/2010/07/atlassian_closes_60_million_investment_from_accel_partners — Atlassian Closes $60 Million Investment from Accel Partners → organization.funding
- https://www.accel.com/companies/atlassian — Initial Investment; IPO → organization.investors
- https://www.atlassian.com/company — A brief history; 2002; 2015; 2017 → organization.notes
- https://trello.com/pricing — Standard → pricingTiers.entry
- https://trello.com/pricing — Pricing plans → pricingTiers.popular
- https://trello.com/pricing — Premium → pricingTiers.business
- https://trello.com/pricing — Enterprise → pricingTiers.enterprise
- https://trello.com/pricing — Included in Free → productReasons.0
- https://trello.com/pricing — Everything in Free, plus: Card mirroring → productReasons.1
- https://trello.com/pricing — Everything in Standard, plus: Views → productReasons.2
- https://trello.com/pricing — Included in Free; Premium → moats.0

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch1.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
