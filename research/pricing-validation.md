# Pricing implementation verification

Checked 2026-10-22.

- `make check`: 195 Node tests and five Python tests passed; catalog/profile/claim validation and deterministic builds passed.
- `wrangler deploy --dry-run --config worker/history/wrangler.jsonc`: successful Worker bundle, 1,148.25 KiB uncompressed / 201.73 KiB gzip. Existing D1, R2 and static-asset bindings retained.
- Actual local Cloudflare runtime extraction preserved JSON numeric price `9007199254740993` as that exact decimal string.
- Browser gallery and iframe smoke used an explicitly labelled test fixture with Archive requests disabled. Confirmed pricing displayed without images; image dates before evidence showed no pricing; independent timeline restored the observation. Iframe product heading/title updated from pricing, and displayed billing labels contained no duplicate period.
- HTTP integration tests exercised embed assets and confirmed pricing routes. Private proposals and source bodies remained inaccessible through public routes.
- Independent review covered archive/store/service cadence and source integrity, parser/link semantics, publication schema, comparisons, operator review concurrency and UI contracts. Actionable findings received regression tests and original-defect red/green checks.

Root regression mutations independently reintroduced missing lookup-window guards, insufficient actual capture spacing, future alias evidence, private original URLs, missing discovery evidence, combined edition timelines, duplicate plan identities, credential-bearing replays, map collisions and concurrent import lost updates. Every targeted regression failed, then passed with the fixes restored. Module-specific audits additionally cover parser precision/negation/hidden variants, source integrity, capacity exhaustion and overdue continuation loops.

Live-data acceptance remains incomplete: zero confirmed pricing observations; two positive archived landing-to-pricing examples remain outstanding after source timeouts, missing captures and one mismatching payload digest. See [actual source audit](pricing-live-audit.md). Test fixture prices are not published as catalog facts.
