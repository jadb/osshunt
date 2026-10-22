# Original second cohort: pricing recovery

**Retrying the original twenty recovered five newly reviewed observations: HubSpot Sales, Intercom, Microsoft 365 Business, Webflow Site plans and Mattermost Professional. The reviewed collection now contains 13 tools, 46 plan records and 66 offer records.** The original eight observations are unchanged. All new observations are partial; offer records include qualified billing variants and HubSpot's explicitly marked reference price, not 66 unconditional active prices.

Source review found supported numerical pricing for ten of these twenty. Five now have corrected readers and confirmed records; the other five have source-reviewed numerical facts but still need tested extraction/grouping before collection import. Seven tools have unavailable evidence, two have unresolved embedded monetary scale, and 1Password's selected source prices a different product. This is a substantive recovery, not a count of terminal attempts.

## Why the original success rates were not comparable

The [initial ten-tool method](pricing-ten-tool-verification.md) added source-specific adapters after inspecting cached pages, performed an additional June 2025 search, used older Dropbox/Zoom samples, and individually reviewed/imported supported observations. It made 95 source attempts. Its eight successes were not a frozen generic-parser success rate.

The [original second batch](pricing-twenty-tool-verification.md) froze an unseen-template parser, used a single June window and two pricing candidates, and made 78 requests. It retained pricing material for twelve tools but added no site readers during that run. The parser missed prices that source review could see. Later terminal-attempt reporting also overstated what had been achieved.

Re-extracting all eight original confirmed source bodies with version 1.2.0 reproduces their plan names, statuses, amounts, currencies, billing periods, commitments, units and purchase minima unchanged. The methodological failure was expecting the frozen parser's narrow template coverage to generalize, then comparing that result with a repaired, manually reviewed pilot. This retry applies source-specific recovery to the same retained second-cohort bytes. It does not add older windows or silently replace missing sources.

## Newly added pricing

All captures below are from June 2025. These are individual historical snapshots, not current prices or complete six-month histories.

| Tool / capture | Reviewed rates | Qualifications |
| --- | --- | --- |
| HubSpot Sales / June27 | Free0; StarterUSD15/seat/month; Professional startsUSD100/seat/month; Enterprise startsUSD150/seat/month | Starter is a new-customer promotion with no fixed end date; USD 20 is a struck-through reference, explicitly not active. Paid rates are starting prices; tax applies. Commitment and purchase minima remain unknown. |
| Intercom / June18 | EssentialUSD29; AdvancedUSD85; ExpertUSD132 per seat/month | Billed annually. USD-only policy comes from a specifically linked collapsed billing FAQ, read inertly. Fin usage, Copilot, trials and feature entitlements are outside this three-tier observation. |
| Microsoft 365 Business / June30 | Basic$6.00; Standard$12.50; Premium$22.00; Apps for business$8.25 per user/month | Paid yearly, annual auto-renewing subscription. Dollar currency remains unknown; locale does not prove USD. Enterprise, nonprofit and alternative billing excluded. |
| Webflow Site / June29 | BasicUSD18/month or14/month billed yearly; CMSUSD29/month or23/month billed yearly | Per site; taxes added at checkout. Annual values are monthly equivalents. Both encoded billing variants retain unknown active state. Only fixed general Site Basic/CMS; variable Business, Ecommerce and Workspace groups excluded. |
| Mattermost Professional / June24 | USD 10/user/month | Billed annually; explicit commercial Professional edition, not the catalog's Team Edition. Deployment remains unknown because the closed self-hosted purchase dialog's runtime binding was not verified. |

Four additions require explicit legacy-integrity acceptance on one or both source pages; HubSpot's landing/pricing identities both have matching digests. Those legacy records remain visibly unverified and partial. Neither HTTP 200 nor manual fact review repairs an archive digest.

## Findings for all twenty

| Tool | Recovery outcome |
| --- | --- |
| 1Password | Selected XAM page now yields three quote-only modules. It does not supply general password-manager numerical prices. General hints were displaced by edition/comparison discovery. |
| Bitwarden | Selected landing body was rejected for integrity mismatch and remains absent. No pricing body to reparse. |
| Confluence | Inert pricing catalogs contain tier/currency/billing records; retained evidence does not demonstrate the monetary scale. Raw encoded values are not silently divided by 100. |
| Jira | Same monetary-scale gap. No numerical subscription price accepted from ambiguous serialized values. |
| Typeform | Original Archive request403; no retained landing/pricing bytes. |
| Miro | Original Archive request403; no retained landing/pricing bytes. |
| HubSpot | **Added** four tiers/five price representations with scoped currency, promotion, starting-price and reference-price handling. |
| Intercom | **Added** three paid seat tiers with local billing and linked currency evidence. |
| Zendesk | Reviewed comparison-table Support Team19 annual/25 monthly; Suite Team55/69, Professional115/149, Enterprise169/219 per agent/month. Dollar currency unknown. Hidden Enterprise hero115 is excluded. Reader still needs group, visibility and add-on corrections; not imported. |
| Mailchimp | Reviewed USD monthly starting prices Premium350 at10,000 contacts, Standard20 and Essentials13 at500 contacts; Free0 up to500 contacts. Commitment and live selector/promotion state remain unresolved; parser still duplicates CTA/trial representations. Not imported. |
| Loom | Original Archive request403; no retained source bytes. |
| Datadog | Reviewed Infrastructure starting rates Pro15 and Enterprise23 per host/month with annual commitment, plus separately scoped products/variants. Dollar currency and region/active state unknown. Current generic reader mixes product groups and billing bases; not imported. |
| Sentry | No successful exact landing capture in the original window. |
| Google Workspace | Reviewed USD 7/14/22 per user/month with one-year commitment for Business Starter/Standard/Plus; monthly-billed alternatives8.40/16.80/26.40 retain commitment unknown. Three-month promotional alternatives are separate. Generic reader duplicates responsive tiers and misbinds commitment; not imported. |
| Microsoft 365 | **Added** four Business SKUs. Enterprise E3(noTeams)33.75/E5(noTeams)54.75/F3 8.00 yearly-paid monthly rates are separately reviewed facts; enterprise/Teams/nonprofit do not become Business tiers. |
| Squarespace | Rejected pricing body absent; verified landing supplies no numerical subscription rates. |
| Webflow | **Added** two fixed general Site tiers/four billing variants. Broader Site/Ecommerce/Workspace data remains separately grouped; no invented reconciliation of the conflicting workspace seat placeholder. |
| Ghost | Rejected pricing body absent; landing supplies no numerical subscription rates. |
| Mattermost | **Added** Professional only. Removed FAQ heading Order and Invoice from the extracted plan ladder. Team Edition is not assigned this commercial price. |
| Passbolt | Reviewed self-hosted BusinessUSD49/month for10 users, billed annually; cloudUSD54/month including10 users plusUSD5.40/additionaluser/month; Community0 separately scoped. Commercial editions and cloud are not relabelled Community Edition. Tested scoped reader/import still needed. |

The [complete source review](pricing-second-retry-review.json) records capture URLs/dates, hashes, integrity grades, per-field locators, scope/quantity and remaining ambiguities. Source-reviewed facts are not the same as confirmed application observations. The remaining five priced tools require tested scoped readers before import.

## Measured comparison and safeguards

| Stage on the original cohort | Result |
| --- | --- |
| Original frozen live run |20 tools,78 requests,0 schema-valid proposals,0 new confirmations |
| Current 1.1.0 before this retry's fixes |34 retained source roles;9 tools with raw structure;6 tools with9 schema-valid source proposals |
| Corrected 1.2.0 cached extraction |Same34 roles;10 tools with raw structure;8 tools with11 schema-valid source proposals |
| Individually reviewed/imported additions |5 tools;14 plan records;17 offer records |
| Collection after import |13 tools;46 plan records;66 offer records |
| Additional source requests in this retry |0 |
| Evidence verification |37 selected roles:19 digest matches,15 qualified legacy,3 missing,0 retained integrity errors |
| Original journal/reservations/checkpoints |Unchanged |

Multiple roles can reuse the same body, including HubSpot's landing/pricing record. Schema-valid output still includes wrong-product XAM quotes and incomplete Zendesk/Datadog/Microsoft enterprise extraction. Only the five specifically reviewed observations were imported. The [results and import proof](pricing-second-retry-results.json) keep raw, schema-valid and reviewed outcomes separate.

Original journal SHA-256 remains `d76c2c341e657dbaab26df77505d97af5ccbf309fa9a69b3f55eedb358256022`. All 20 reservation and production-checkpoint states were compared before/after offline extraction and import. Private staged proposals were exported, individually reviewed and imported through the existing equality/hash/integrity/schema checks; qualified legacy acknowledgements were explicit. Original collection records compare equal after import. The public review excludes raw HTML, cookies and private operating paths.

New readers require exact host/path and demonstrated source shape. They suppress competing generic output only when that supported structure matches. Regression guards cover unrelated products, duplicate/missing fields, trials, hidden contextual terms, currency disclosure linkage, promotions/reference prices and billing units. Independent review caught hidden descendant currency/amount leakage; test-first fixes and original-defect mutations verified those guards before confirmation.

Local validation: **356 Node tests,5 Python tests, build/schema checks and Worker dry-run bundle passed**. Initial localhost listener restrictions required running integration tests with the normal test permission. Extractor 1.2.0 intentionally updates the version contract; original frozen journals remain tied to their older fingerprints. No new dependency, production history Worker deployment or merge.

## Reproduction

Retain the original private journal/cache. Never reset a discovery reservation to re-extract existing bodies. The readonly evidence verifier can recheck all 37 selected roles with the current parser:

```sh
node scripts/verify-pricing-evidence.mjs --cache .local/history \
  --evidence research/pricing-twenty-tool-evidence.json \
  --out .local/second-retry/offline-verification.json
make check
```

The complete reassessment additionally inspects landing pricing with the shared `inspectPricing` helper and original candidate provenance; its private evaluation/review scripts and source bytes are preserved together. Public before/after results include code fingerprints. Confirmation is an individual editorial action and must not be repeated automatically by a cache verifier.

Next work is targeted recovery for the five already-priced but unimported tools, a demonstrated monetary-unit contract for Atlassian catalogs, and eligible source/discovery retries for the genuine gaps. The scripting lesson is to measure reviewed price coverage and apply comparable source-level recovery, rather than equating finished attempts or schema-valid fragments with usable pricing.
