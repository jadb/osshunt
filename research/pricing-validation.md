# Pricing implementation verification

Checked 2026-10-22.

- `make check`: 237 Node tests and five Python tests passed; catalog/profile/claim validation and deterministic builds passed.
- `wrangler deploy --dry-run --config worker/history/wrangler.jsonc`: successful Worker bundle, 1,187.46 KiB uncompressed / 210.00 KiB gzip. Existing D1, R2 and static-asset bindings retained.
- Actual local Cloudflare runtime extraction preserved JSON numeric price `9007199254740993` as that exact decimal string.
- Browser gallery and iframe smoke used an explicitly labelled test fixture with Archive requests disabled. Confirmed pricing displayed without images; image dates before evidence showed no pricing; independent timeline restored the observation. Iframe product heading/title updated from pricing, and displayed billing labels contained no duplicate period.
- HTTP integration tests exercised embed assets and confirmed pricing routes. Private proposals and source bodies remained inaccessible through public routes.
- Independent review covered archive/store/service cadence and source integrity, parser/link semantics, publication schema, comparisons, operator review concurrency and UI contracts. Actionable findings received regression tests and original-defect red/green checks.

Root regression mutations independently reintroduced missing lookup-window guards, insufficient actual capture spacing, future alias evidence, private original URLs, missing discovery evidence, combined edition timelines, duplicate plan identities, credential-bearing replays, map collisions and concurrent import lost updates. Every targeted regression failed, then passed with the fixes restored. Module-specific audits additionally cover parser precision/negation/hidden variants, source integrity, capacity exhaustion and overdue continuation loops.

The [ten-tool live verification](pricing-ten-tool-verification.md) now records eight actual reviewed observations, 32 plans and 49 offers. Dropbox, Zoom and Figma have matching landing/pricing CDX digests; Notion, Asana, Trello, Airtable and Calendly retain explicitly accepted legacy integrity qualifications. Slack and Linear remain sampled gaps. Ninety-five source requests are logged; offline re-verification of 31 selected records found 18 digest matches, nine qualified legacy records, four missing bodies and no errors in retained evidence. Earlier unsuccessful probes remain in the [initial source audit](pricing-live-audit.md). Full six-month histories remain incomplete.

The catalog site build passed with 493 pages. Actual Notion iframe displayed four plans, annual basis and the unverified-digest warning. Actual Figma displayed four plans and ten offers with exact source links; setting an image date before its evidence hid prices, and removing that date restored them. Only cached API reads occurred; source requests were disabled. These checks supplement the earlier fixture smoke; no production deployment performed.
