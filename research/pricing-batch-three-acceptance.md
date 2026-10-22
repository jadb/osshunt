# Pricing batch three: acceptance criteria

Apply the current sampler and revised discovery to the next 20 previously unsampled paid catalog entries, in the catalog's audience order. This includes commercial offerings such as Cal.com; the catalog's `paid` label is not a claim that every component is proprietary. Exclude all 30 earlier sampled products. Freeze the cohort, approved scope, hints and code hashes before live collection.

Use the same June 2025 landing window as earlier runs for comparability. Select at most two approved pricing targets per landing, with captures within 30 days at or before the landing. Keep the six-calendar-month discovery gate, serial source pacing and shared Archive cooldown. Record every outbound request and distinguish transport success, integrity acceptance, schema validity and factual correctness.

Before collection, resolve the reproduced canonical `.html` scope failure using narrow approved-path semantics and regression tests. Record that intervention separately from the frozen live result. No further parser, adapter or catalog corrections during the batch.

After collection:

- Save public results, request traces and source identities; retain raw HTML and the journal privately.
- Replay the same completed journal with fetch disabled; require zero attempts and unchanged bytes.
- Independently verify every selected cached source and record missing/rejected evidence separately.
- Review every nonempty extraction for actual plan names, amounts, currency, billing period, commitment, quantity, product/edition and promotional or usage conditions.
- Inspect retained sources even when extraction is empty. Distinguish static/embedded-data misses, quote-only plans, genuine absence of pricing material, scope/discovery gaps and unavailable sources.
- Report the denominator for any accuracy claim. Raw fragments and schema-valid proposals are not confirmed observations; publish no prices automatically.
- Compare process outcomes with the preceding 20-tool run. Identify reusable fixes and prioritized remaining automation improvements without claiming full historical coverage.

The fixed cohort and executable hashes are recorded in `pricing-batch-three-cohort.json`. Collection completion alone does not satisfy extraction readiness.
