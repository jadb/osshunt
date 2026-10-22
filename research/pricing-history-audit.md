# Historical pricing design audit

Checked 2026-10-21. Design-stage research only; no pricing extractor or historical-price dataset implemented yet.

1. Reviewed the merged image-history architecture, CDX adapter, exact replay/date guards, immutable R2/filesystem stores, shared archive cooldown and existing current product pricing profiles.
2. Inventoried the 227 profiles' pricing-tier source URLs. Path matches for `pricing`, `prices`, `plans`, `subscriptions` or `compare` occur for165 products. These are only current-source hints; some are billing help or broad vendor comparison pages. No historical linkage or extraction success inferred.
3. Read the [primary CDX server documentation](https://github.com/internetarchive/wayback/tree/master/wayback-cdx-server): exact URL scope, actual record timestamps, date ranges and pagination support. A six-character timestamp collapse is monthly prefix grouping, not six-month spacing.
4. Read [parse5's primary parser documentation](https://parse5.js.org/) and [package manifest](https://github.com/inikulin/parse5/blob/master/packages/parse5/package.json) to identify a shared standards-based parser candidate. No package installed; exact-version vetting and edge-runtime validation remain implementation prerequisites.
5. Recorded the requested six-calendar-month pricing cadence separately from the existing30-day image cadence. Current source cooldown was last recorded through2026-10-22T02:58:03.106Z; no new pricing archive requests made during it.
6. Wrote the [proposed design](../docs/architecture/pricing-history.md), covering historical-link provenance, actual capture dates, plans/offers/features/limits, currency/billing ambiguity, verification and like-for-like comparisons.
7. Reviewed sampling and evidence rules independently. Specified screenshot-independent anchors, final six-month spacing on actual pricing dates, no future discovery evidence on earlier images, resumable incomplete inventories, per-observation confirmation and explicit coverage outcomes.

The design preserves failed/empty attempt gates, distinguishes pre-fetch archive-wide denial, and requires live archived examples after approval and cooldown. No historical price amounts have been invented, backdated from current profiles or published as verified evidence.
