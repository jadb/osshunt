> Temporary paths normalized; local setup omitted. Exact original retained locally.

# asana research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open pricing timed out; web.search query site.asana.com pricing Starter Advanced returned full current pricing.
4. web.open company and investor company-profile; company succeeded, company-profile inaccessible; fallback web.search founded in 2008 returned investor presentation.
5. web.search site.asana.com Series E 2018 returned official funding release.

## Public pages read and claim locators
- https://asana.com/company — ABOUT US → organization.name
- https://investors.asana.com/static-files/e88261ce-714a-4fb8-82b0-8e357b3f98d9 — Asana was founded in 2008 → organization.foundedYear
- https://investors.asana.com/static-files/e88261ce-714a-4fb8-82b0-8e357b3f98d9 — Asana was founded in 2008 → organization.ageBasis
- https://investors.asana.com/static-files/e88261ce-714a-4fb8-82b0-8e357b3f98d9 — Asana, Inc. (ASAN) → organization.ownership
- https://investors.asana.com/static-files/e88261ce-714a-4fb8-82b0-8e357b3f98d9 — Asana, Inc. (ASAN) → organization.stockSymbols
- https://asana.com/press/releases/pr/asana-raises-50-million-series-e-funding-to-fuel-international-growth-and-enterprise-scale/70d74b90-9afe-4fb5-a3c7-304da7175471 — Asana Raises $50 Million Series E Funding → organization.funding
- https://asana.com/press/releases/pr/asana-raises-50-million-series-e-funding-to-fuel-international-growth-and-enterprise-scale/70d74b90-9afe-4fb5-a3c7-304da7175471 — round was led by Generation Investment Management → organization.investors
- https://asana.com/company — ABOUT US → organization.notes
- https://asana.com/pricing — Starter → pricingTiers.entry
- https://asana.com/pricing — Personal; Starter; Advanced; Enterprise → pricingTiers.popular
- https://asana.com/pricing — Advanced → pricingTiers.business
- https://asana.com/pricing — Enterprise → pricingTiers.enterprise
- https://asana.com/pricing — Multi-home tasks to projects → productReasons.0
- https://asana.com/pricing — Goals; Portfolios → productReasons.1
- https://asana.com/pricing — Forms with branching logic; Proofing; Approvals → productReasons.2
- https://asana.com/company — Where it began → moats.0

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch1.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final verification and corrections
- Final primary-domain search `site.asana.com ASAN NYSE2026` returned current2026SECfiling. Replaced older investor-presentation listing citation with current filing; added LTSE listing. Foundation remains2008 from primary investor presentation.

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
