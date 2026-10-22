# New ten-tool pricing batch

Selected the next 10 previously unsampled paid catalog entries in audience order, excluding all 80 earlier products. [Selection and frozen inputs](pricing-batch-six-cohort.json). The June 2025 landing window (pricing can precede its landing by up to 30 days), two pricing candidates, 30-day source lookback, six-calendar-month reservation, 10-second serial pacing and shared Archive cooldown match the prior bounded samples. No substitutions based on successful pages or prices.

**2/10 products yield independently reviewed core-plan prices; 0/10 have numerical add-on rates only.** 2/10 have any supported positive amount. Add-on rates do not establish the base subscription cost. 4/10 have any reviewed structure; this larger count includes free, trial, quote-only and unknown-price records. 30 source requests (27 frozen baseline plus 3 separately logged recovery); 1 baseline schema-valid proposal before manual review. These are distinct measures. All imported observations remain partial historical snapshots, not complete histories or current prices.

The collection now has **36 products with any positive numerical rates**, including **35 with core-plan prices**. Overall, **55 products have some reviewed pricing structure**, across 116 observations, 314 plans and 548 offers. Offer totals include variants, zeros, quotes, promotions and explicitly qualified amounts.

[Per-product findings, source grades and preservation proofs](pricing-batch-six-review.json). [Frozen automated results](pricing-batch-six-results.json), [requests](pricing-batch-six-requests.jsonl), [source records](pricing-batch-six-evidence.json). Raw proposals are not automatically confirmed. Retained sources receive manual inspection where reusable readers miss facts, followed by independent source review and the existing strict import guards.

## Results

| Tool | Frozen baseline | Reviewed result | Plans | Offers |
| --- | --- | --- | ---: | ---: |
| Greenhouse | missing_pricing | no confirmed observation | 0 | 0 |
| Lever | missing_pricing | no confirmed observation | 0 | 0 |
| Fastmail Business | wrong_scope | trial only | 1 | 1 |
| Zoho Mail | error | no confirmed observation | 0 | 0 |
| Auth0 | extraction_unavailable | free or partial | 7 | 1 |
| Okta Workforce Identity | error | no confirmed observation | 0 | 0 |
| Cloudflare Access | missing_landing | no confirmed observation | 0 | 0 |
| Tailscale | review_pending | positive price | 8 | 8 |
| Freshservice IT Asset Management | missing_pricing | positive price | 9 | 27 |
| Lansweeper | error | no confirmed observation | 0 | 0 |

## Verification

- All 112 preceding confirmed observations unchanged in full; all 80 previous product states and four earlier frozen journals unchanged.
- Completed same-journal replay attempts zero source requests. Original frozen live results remain unchanged.
- Ten new reservations retain their checkpoint, release leases and set the next discovery six calendar months later; no failed-attempt gate resets.
- 232 resulting source-role body-hash, transport and archive-integrity checks pass. Legacy-qualified digests remain explicitly unverified and acknowledged; local SHA agreement never upgrades archive integrity.
- Confirmation checks proposal equality, exact source identity, schema, dates, scope and six-month spacing. Unknown currency, billing terms, quantity or active variants remain explicit.

Build, schema/profile checks, 356 Node tests, five Python tests and Worker dry-run pass.

## Process findings

- Fastmail’s business page links to an exact pricing query outside its business path. A dated exact-query alias was approved after the frozen baseline; supplemental lookup found no eligible capture. Its explicit 30-day trial remains, with no paid rate invented.
- The ITAM landing similarly links to Freshservice suite pricing outside its module path. Review admits only the exact dated suite URL; recovered Growth/Pro rates describe the eligible suite bundle. Starter excludes ITAM; hidden Enterprise amounts remain unpublished. Optional asset, employee and other charges stay separate from base subscription rates.
- Auth0’s public embedded definitions contain coefficients, breakpoints and an annual multiplier but no evaluated amount/currency/selected quantity. Preserve the raw model and unknown-price plans; coefficients are not subscription prices. Non-public/hidden definitions are not public plan evidence.
- Tailscale personal/noncommercial, commercial active-user plans, optional add-ons and trial conditions stay distinct. A trial on the same pricing capture belongs in the same observation, not an invented edition.

Collection completion, retained sources, schema-valid parsing and reviewed numerical prices remain separate outcomes. Missing captures/replays cannot be repaired by extraction code. Manual curation can retain supported static or embedded data without a new reader; broad namespaces, metered units, bundled editions, tax, promotions and trial durations still require source review. Private source bodies, inspection commands, exact decisions and journals remain cached for later reader development.
