# Twenty-tool archived pricing automation verification

**Collection completed for all 20 new tools. Automatic pricing extraction is not ready: no valid new observations emerged, despite retained pricing material for 12 tools.** The previous ten-tool run's eight reviewed observations remain unchanged. This blind cohort added no product-specific adapters and published no new prices.

The frozen [cohort and parser hashes](pricing-twenty-tool-cohort.json) and [acceptance criteria](pricing-twenty-tool-acceptance.md) preceded collection. Landing window: June 1–30, 2025 UTC, matching the earlier recent-window comparison. Each landing allowed at most two pricing candidates, with pricing captures at or before that landing within the preceding 30 days. This lookup window does not change the six-calendar-month pricing discovery gate or establish a complete historical series.

| Measurement | Result |
| --- | --- |
| Tools processed | 20/20 |
| Actual source requests | 78: 75 HTTP 200, three HTTP 403, zero HTTP 429 |
| Missing response records | 0 |
| Machine outcomes | 12 extraction unavailable, seven errors, one missing landing |
| Selected landing records / retained bodies | 16 / 15 |
| Selected pricing records / retained bodies | 21 / 19 |
| Body-cache hits during collection | 2 |
| Nonempty raw extractions | Mailchimp only: two captures, ten plan fragments, 17 offer fragments |
| Schema-valid proposals / complete recurring-price tuples | 0 / 0 |
| New confirmed observations | 0 |
| Same-journal repeat | Zero fetch attempts; journal bytes unchanged |

HTTP success measures transport, not correct pricing. The [request log](pricing-twenty-tool-requests.jsonl) records actual URLs, stages, times, statuses and approved headers. The [results](pricing-twenty-tool-results.json) retain candidate provenance, capture links, errors and explicitly unvalidated fragments. The [independent source review](pricing-twenty-tool-review.json) distinguishes parser misses from unavailable evidence. Raw HTML and private checkpoints are excluded from these public artifacts.

## What the retained sources showed

| Tool | Independent finding | Qualification / next requirement |
| --- | --- | --- |
| 1Password | Discovery / edition gap | Modular XAM pricing and a competitor comparison consumed both candidates; password-manager hints were not reached. |
| Bitwarden | Source unavailable | Landing digest mismatch; rejected body, no pricing evidence. |
| Confluence | Embedded pricing data missed | Inline `window.SSR` contains tier and billing records; not evidence of a JavaScript-only shell. Legacy digest qualification. |
| Jira | Embedded pricing data missed | Serialized tier, currency and billing data require a proven amount-unit contract. Legacy digest qualification. |
| Typeform | Source unavailable | Archive HTTP 403. |
| Miro | Source unavailable | Archive HTTP 403. |
| HubSpot | Static pricing missed | Sales tiers, promotions and regular prices in the landing itself. Dedicated pricing path also needs catalog scope review. |
| Intercom | Static pricing missed | Seat-based tiers and separate resolution usage charges; legacy digest qualification. |
| Zendesk | Static pricing missed | Monthly and annual offers; conflicting Enterprise values need reconciliation. Accessibility Plan was an unrelated discovery candidate. |
| Mailchimp | Static pricing misparsed | Real tiers present; duplicated CTA, trial and terms fragments rejected during validation. |
| Loom | Source unavailable | Archive HTTP 403. |
| Datadog | Static pricing missed | Infrastructure tiers and billing variants among many separate product groups; legacy digest qualification. |
| Sentry | Missing landing | No exact successful landing capture in the selected canonical window; no conclusion about pricing availability elsewhere. |
| Google Workspace | Static pricing missed | Annual commitment, monthly billing and promotions must remain distinct; mixed integrity grades. |
| Microsoft 365 | Static pricing missed | Selected enterprise edition differs from business and nonprofit variants; retain Teams inclusion and billing basis. |
| Squarespace | Source unavailable | Pricing digest mismatch; rejected body. |
| Webflow | Static pricing missed | Site, Ecommerce and Workspace plans are different groups; legacy digest qualification. |
| Ghost | Source unavailable | Pricing digest mismatch; rejected body. |
| Mattermost | Static pricing missed | Paid self-hosted tiers differ from the catalog's Team Edition. Competitor comparison was an unrelated second candidate. |
| Passbolt | Static pricing missed | Community, paid self-hosted and cloud scopes differ. Currency selector alone does not prove the active currency; mixed integrity grades. |

Totals: ten static pricing misses, two embedded-data gaps, one discovery/edition gap, six unavailable-source cases and one missing landing. These are product-level review classifications, not mutually exclusive descriptions of every underlying page. All 20 catalog entries lacked explicit edition/deployment scope at baseline. No tool was established to have a genuinely empty JavaScript-only pricing shell.

Mailchimp's ten fragments are not ten valid plans. Its 17 offer fragments have unknown currency, billing period, commitment, unit and minimum quantity. Three zero amounts describe introductory free trials. Two conditional contact-sales messages do not establish an unconditional quote-only Premium tier. Duplicate plan identities caused schema validation to reject both captures. There are **zero complete recurring-price tuples**, so per-offer precision is not estimable; reporting 100% precision because nothing published would be misleading.

## Reproducibility and integrity

Collection ran October 22, 2026, 15:23:44.380–15:36:36.168 UTC, approximately 12 minutes 52 seconds. Collector code loaded at `fbac0fb`; extraction/discovery files matched frozen parser `3ebf6a6b75a3bf5a018a5d3ff80bde63a6b6abc0`. The live run received no new adapters, parser changes or catalog corrections. Engineering and manual review minutes were not instrumented and remain unknown.

After completion, a fetch-denying preload counted **zero fetch attempts** on a same-journal rerun. Journal SHA-256 remained `d76c2c341e657dbaab26df77505d97af5ccbf309fa9a69b3f55eedb358256022`. Later discovery fixes deliberately change the parser fingerprint; the CLI must reject that frozen journal under changed code. Use read-only cached-evidence verification for subsequent parser evaluation.

The [evidence index](pricing-twenty-tool-evidence.json) has 37 selected source records: **19 matching archive digests, 15 qualified legacy records, three missing bodies and zero integrity errors among retained bodies**. Rejected mismatches remain missing rather than silently accepted. Counts include separate landing and pricing roles, even when a body is reused. Legacy records remain qualified; verification does not make them confirmed pricing facts.

```sh
npm run pricing:sample -- \
  --products 1password,bitwarden,confluence,jira,typeform,miro,hubspot,intercom,zendesk,mailchimp,loom,datadog,sentry,google-workspace,microsoft-365,squarespace,webflow,ghost,mattermost,passbolt \
  --from 2025-06-01T00:00:00.000Z --to 2025-06-30T23:59:59.000Z \
  --cache .local/history --out .local/twenty-tools/journal.json
npm run pricing:sample-report -- \
  --journal .local/twenty-tools/baseline-journal.json \
  --out-dir research --prefix pricing-twenty-tool
node scripts/verify-pricing-evidence.mjs --cache .local/history \
  --evidence research/pricing-twenty-tool-evidence.json \
  --out .local/twenty-tools/offline-verification.json
```

The first command documents the original frozen run; it is not permission to reset gates or repeat collection under changed inputs. Fresh checkouts need the operator's retained private cache and journal. Without those bodies, verification reports missing evidence. Request traces include both Archive availability lookups and raw archived HTML replay; no present-day rendered page was substituted for a historical source.

## Process improvements and automation boundary

The reusable sampler now validates the whole cohort before source requests, freezes parser/catalog inputs, persists stage outcomes and exact source identities, shares source cooldowns, preserves production checkpoints and honors six-month reservations. It resumes past durable terminal candidate failures. Its exclusive journal lock does not steal a suspended owner's lock. A retryable pause returns exit 75; exit 0 means every tool has a terminal outcome, not that every price was extracted successfully.

The report generator separates raw fragments, schema-valid proposals and confirmation, while excluding cookies, HTML and private checkpoints. Cached evidence supports offline integrity checks and discovery comparisons without consuming source requests. Discovery changes are evaluated after the immutable baseline; improvements cannot retroactively raise its coverage.

**Automate collection, cache reuse, audit export and integrity checks. Keep extraction and publication behind explicit review.** Next work: generic static card/table extraction with billing and product-group relationships; supported embedded-data readers with proven amount units; edition/deployment scope and pricing aliases; broader held-out evaluations with measured review effort. Current full-history inventory limits also remain unresolved. These 20 tools validate a bounded process and expose its gaps; they do not establish general pricing accuracy or complete six-month histories.
