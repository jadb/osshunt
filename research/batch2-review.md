# Second-batch category data review — 2026-10-21

Read-only review. No category output mutations, repository edits, network calls, git operations, PRs or external communications.

## Review steps

1. Read all available category JSON files named by the second-batch manifest. Printed each candidate's tier, first-party hosted flag, gates, classification rationale and paid pricing fields. At review start 22 of 24 files existed; API testing and search infrastructure were still in progress.
2. Checked replacement edges for S/U targets, JSON/internal-path leakage, malformed health dates and same-ID attribute conflicts across new categories. Compared shared IDs against the first-batch research source files. Shared Frappe HR, ERPNext, Google Workspace and Microsoft365 attributes were consistent for kind, tier, license, OSI, deployment, hosting and pricing.
3. Read complete hosting sources/service notes for email clients, ecommerce, diagramming, digital assets and email servers. Compared email-hosting paid incumbents against the explicit second-batch manifest.
4. Checked all available paid records for mapped edges, edge endpoint existence/direction, OSI/tier alignment, companion audit/claim files, required claim fields and HTTP(S) source URLs.

## Actionable findings

- **email-clients.json — roundcube.hostedOffer**: currently true. Its own classification rationale says hosted availability means independent listed providers, explicitly not first-party Roundcube SaaS. Under the common first-party-only definition this flag should be false. Existing licensing and core tier unaffected.
- **email-hosting.json — paid[] / alternatives[]**: manifest incumbents are Fastmail Business and Zoho Mail. File includes Google Workspace/Microsoft365 only. Neither requested incumbent appears as a paid record or mapping. Complete the two requested entries and verified relevant edges (existing suite records can remain).
- **business-intelligence.json — paid[id=metabase-pro]**: extra paid record has no outgoing alternative edge, while Power BI/Tableau/Looker do. Keep the Pro price in candidate gate/source notes instead of an unmapped paid-product record, or add a justified scoped alternative edge. This is coverage consistency, not a claim that equivalent Pro functionality is open.

## Checks with no concrete defect found

- No S/U targets in replacement edges among the 22 files reviewed.
- No malformed health date values, missing companion files or required claim fields.
- No leaked local paths in category JSON. Word `agent` occurrences describe actual backup, telephony or inventory software, not internal workers.
- No contradictory shared-product attributes in fields compared.
- WooCommerce has already been revised to C for first-party paid subscription software; no remaining A-with-explicit-first-party-paid-workflow contradiction found in reviewed fields. Optional marketplace modules or differently scoped products alone are insufficient to invent a downgrade.
- API-testing and search-infrastructure were not available during this review; final validation still required after they arrive.

## Repeatable checks

Automate manifest-incumbent coverage, no unqualified third-party hosting flags, paid-node outgoing-edge coverage, no S/U recommendation edges, shared-ID attribute consistency, date parsing and claim ledger structural validation.

Follow-up: integration confirmed Roundcube hostedOffer changed to false and Fastmail/Zoho added with verified source notes and four partial edges. Those first two findings describe the pre-correction review state. The unmapped Metabase Pro record was reported for disposition.

Final integration disposition: all three findings resolved. Roundcube hosting is false; Fastmail and Zoho have paid records and partial mappings; Metabase Pro maps to Community for core BI only, with paid entitlements and downgrade uncertainty explicit. Final two categories validated by the complete integration gate.
