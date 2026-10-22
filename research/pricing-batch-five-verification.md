# New ten-tool pricing batch

Selected the next 10 previously unsampled paid catalog entries in audience order, excluding all 70 earlier products. [Selection and frozen inputs](pricing-batch-five-cohort.json). The June 2025 landing window (pricing can precede its landing by up to 30 days), two pricing candidates, 30-day source lookback, six-calendar-month reservation, 10-second serial pacing and shared Archive cooldown match the prior bounded samples. No substitutions based on successful pages or prices.

**1/10 products yield independently reviewed core-plan prices; 1/10 have numerical add-on rates only.** 2/10 have any supported positive amount. Add-on rates do not establish the base subscription cost. 5/10 have any reviewed structure; this larger count includes free, trial, quote-only and unknown-price records. 27 source requests (26 frozen baseline plus 1 separately logged recovery); 2 baseline schema-valid proposals before manual review. These are distinct measures. All imported observations remain partial historical snapshots, not complete histories or current prices.

The collection now has **34 products with any positive numerical rates**, including **33 with core-plan prices**. Overall, **51 products have some reviewed pricing structure**, across 112 observations, 289 plans and 511 offers. Offer totals include variants, zeros, quotes, promotions and explicitly qualified amounts.

[Per-product findings, source grades and preservation proofs](pricing-batch-five-review.json). [Frozen automated results](pricing-batch-five-results.json), [requests](pricing-batch-five-requests.jsonl), [source records](pricing-batch-five-evidence.json). Raw proposals are not automatically confirmed. Retained sources receive manual inspection where reusable readers miss facts, followed by independent source review and the existing strict import guards.

## Results

| Tool | Frozen baseline | Reviewed result | Plans | Offers |
| --- | --- | --- | ---: | ---: |
| Google Analytics 360 | missing_pricing | no confirmed observation | 0 | 0 |
| BambooHR | error | no confirmed observation | 0 | 0 |
| Aircall | extraction_unavailable | addon prices only | 5 | 7 |
| RingCentral RingEX | review_pending | structure only | 3 | 1 |
| Brandfolder | extraction_unavailable | structure only | 2 | 0 |
| Bynder | missing_landing | no confirmed observation | 0 | 0 |
| Looker | error | quote only | 6 | 6 |
| Metabase Pro | error | no confirmed observation | 0 | 0 |
| Power BI | missing_landing | no confirmed observation | 0 | 0 |
| Tableau | review_pending | positive price | 11 | 46 |

## Verification

- All 102 preceding confirmed observations unchanged in full; all 70 previous product states and three earlier frozen journals unchanged.
- Completed same-journal replay attempts zero source requests. Original frozen live results remain unchanged.
- Ten new reservations retain their checkpoint, release leases and set the next discovery six calendar months later; no failed-attempt gate resets.
- 224 resulting source-role body-hash, transport and archive-integrity checks pass. Legacy-qualified digests remain explicitly unverified and acknowledged; local SHA agreement never upgrades archive integrity.
- Confirmation checks proposal equality, exact source identity, schema, dates, scope and six-month spacing. Unknown currency, billing terms, quantity or active variants remain explicit.

Build, schema/profile checks, 356 Node tests, five Python tests and Worker dry-run pass.

## Process findings

- RingCentral’s generic proposal mixed Video/Events into the RingEX catalog product; source review rejected that false match.
- Aircall exposes supported numeric add-on rates but no retained core subscription amounts; it counts separately from core-plan price recovery.
- Looker’s 2,009,915-character landing exceeded the 2,000,000-character parser/discovery guard. Manual inspection recovered quote structures and an exact archived pricing link. One supplemental query under the original reservation found no eligible pricing capture; the frozen baseline remains unchanged.
- Brandfolder manual feature descriptions initially reused a sibling paragraph; independent review corrected every heading/description binding before import. Schema validity alone cannot prove correct source association.
- Bynder/Power BI lack exact landing captures in this window; BambooHR redirected and Metabase failed archive-digest validation. No price conclusions inferred from absent bodies.

Collection completion, retained sources, schema-valid parsing and reviewed numerical prices remain separate outcomes. Missing captures/replays cannot be repaired by extraction code. Manual curation can retain supported static or embedded data without a new reader; broad namespaces, metered units, bundled editions, tax, promotions and trial durations still require source review. Private source bodies, inspection commands, exact decisions and journals remain cached for later reader development.
