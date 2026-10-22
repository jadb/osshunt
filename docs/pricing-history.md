# Track archived pricing

The history service discovers pricing links in archived landing-page HTML and proposes structured plans, offers, features and limits. Confirmed observations appear beside website images in the gallery and iframe. Current prices never substitute for historical evidence.

Pricing observations and new checks use **six calendar months**, with UTC end-of-month clamping. Images retain their separate 30-day interval. Checks run on visits or an explicit batch; no scheduled crawler is configured. Pricing anchors do not depend on screenshot availability.

## Requirements and embedding

- Node 22+ and exact locked dependencies locally; Python 3 for the catalog build.
- Existing Worker, D1 and private R2 bindings on Cloudflare. Apply migration `0003_pricing_history.sql` after the image-history migrations.
- Backend Archive access. Browser-to-Archive CORS access, an Archive API key, rendering service and model API are unnecessary.
- Maintainer review before publication. Missing JavaScript-populated prices, unsupported templates and failed integrity checks remain gaps or review items.

```sh
npm ci --ignore-scripts
make check
npm run history:serve
```

Open the gallery or `/embed.html?product=slack`. The existing [iframe snippet](embedding.md) includes pricing after the updated Worker is deployed. Native integration:

```html
<pricing-history product-id="slack"></pricing-history>
<script type="module" src="https://YOUR-HISTORY-HOST/pricing-history.mjs"></script>
```

Set `api-base="https://YOUR-HISTORY-HOST"` when the component and API differ in origin; configure a same-origin proxy or API CORS policy. The hosted iframe avoids this configuration. No backend credentials belong in the parent page.

Optional `frame-date` takes an ISO date and associates already loaded pricing with an image. Changing it never fetches pricing. All historical discovery evidence must predate the image; actual pricing dates remain visible. Evidence over six calendar months old is stale last-known pricing. Removing the attribute restores the independent timeline.

## Read and discover

`GET /api/pricing/PRODUCT_ID` reads saved coverage and confirmed observations without contacting the Archive. `POST /api/pricing/PRODUCT_ID/refresh` accepts an empty body only and starts an eligible pass or continues a saved incomplete inventory. Each call makes at most three outbound requests. Unknown IDs, arbitrary URLs and request options are rejected.

The manifest contains product identity, status, observations, comparable changes, per-anchor coverage, `checkedAt`, `nextCheckAt`, `incomplete`, `errorCode`, numeric `retryAfter` seconds and absolute ISO `retryAt` where relevant.

Failed first discovery requests and confirmed empty inventories consume the six-month check. A shared cooldown detected before any outbound request does not. Interrupted inventories retain their cutoff, query cursors and known records; continuation retrieves outstanding work under the original reservation. The UI offers an explicit continuation button after cooldown.

```sh
npm run pricing:backfill -- --base-url http://127.0.0.1:4173 --products slack,zulip --passes 3
npm run pricing:backfill -- --base-url https://YOUR-HISTORY-HOST --all --passes 1
```

The batch visits products serially, defaults to 60 seconds between attempted refreshes, stops at a rate limit or three consecutive failures, and saves a local report. A later batch reuses persisted gates and inventory. `--out FILE` changes the report path.

Coverage distinguishes awaiting discovery, cooldown, incomplete inventory, missing landing/pricing captures, wrong scope, unavailable extraction, pending review, confirmed pricing, sampling gaps and inventory limits. `no_commercial_offer` requires affirmative reviewed evidence; missing pricing is insufficient.

Inventories are bounded to 1,500 records, 1,000 logged queries and a 480 KiB working checkpoint; stores reject checkpoints over 512 KiB. Capacity exhaustion ends the attempt as `inventory_limit`, preserves evidence and leaves historical coverage incomplete. A fresh pass is gated six months from that failure. Comprehensive large histories require a future chunked inventory extension.

## Review and confirm

The default private cache `.local/history/` shares image history's archive cooldown. Evidence bodies remain immutable and private. Public routes expose no proposals, raw HTML or review mutations.

```sh
npm run pricing:review -- export --product slack --out .local/reviews/slack.json
```

Export writes proposals and adjacent `.txt` source files. Inspect as text using each field's locator and literal. Verify product/edition/deployment, currency, amount, billing period, commitment, minimum quantity, conditions and features. Set supported observations' `decision` to `confirm` and fill `reviewer`; use `reject` for unsupported observations. Unknown fields stay unknown. Template confirmation does not authorize later observations automatically.

Do not edit the exported `proposal`: import compares it to the private inventory. Correct faulty extraction through a tested adapter and re-export. Optional `planIdentities` maps original plan names to stable, unique maintainer-reconciled identities for evidenced renames.

```sh
npm run pricing:review -- import --file .local/reviews/slack.json
```

Import rechecks both source SHA-256 hashes, recomputes Archive integrity grades, and validates schema, exact capture URLs, scope, lookup windows and six-month spacing. Qualified legacy digest mismatches require `acceptUnverifiedArchiveDigest: true` for that observation; export defaults this to false. Accepted observations remain partial, retain transport evidence and display an unverified-digest warning. Other unexplained mismatches still fail. See [integrity policy](architecture/pricing-evidence.md). A repository-local lock serializes read/merge/write/build, preserving concurrent confirmations. Pending/rejected entries do not remove existing history.

Confirmed inputs: `research/pricing/confirmed.json`. Sorted array snapshot and adjacent schema: `data/collections/pricing-observations.json` and `.schema.json`. Browser asset: `public/pricing-observations.json`. Reusable factory: `pricingObservation(z)` in `lib/pricing/schema.mjs` accepts the consumer's zod instance. An empty array is valid when no observations are confirmed.

**Restart the local server or rebuild and redeploy the Worker after confirmation.** Services load confirmed data at startup; a build alone does not replace a running service's observations.

## Deployed evidence and Cloudflare

Copy private D1 state and R2 bodies through authenticated Wrangler access:

```sh
npm run pricing:review -- export --source cloud --product slack \
  --cache .local/cloud-review --out .local/reviews/slack.json
npm run pricing:review -- import --cache .local/cloud-review --file .local/reviews/slack.json
```

Wrangler needs read access to the database and bucket. Defaults match the history Worker; `--config`, `--database` and `--bucket` select other resources. Downloads are hash-checked. Import writes local confirmed data; review and deploy the resulting collection through the repository workflow.

```sh
wrangler d1 migrations apply osshunt-history --remote --config worker/history/wrangler.jsonc
wrangler deploy --dry-run --config worker/history/wrangler.jsonc
wrangler deploy --config worker/history/wrangler.jsonc
```

No new binding or secret is needed. Metadata uses `pricing_history`; private bodies use R2's `pricing-evidence/` prefix. Backend retention is independent of CDN expiration.

## Interpretation and current coverage

Amounts remain exact decimal strings. `$` alone does not identify USD. Annual commitment, promotions, volume tiers and regional offers retain their conditions. Compare the same edition/deployment, currency, region, quantity and billing basis; unknown or differing bases remain incompatible. Partial extraction never proves plan/feature removal. Six-month observations cannot establish the exact effective date of an intervening change.

The [ten-tool verification](../research/pricing-ten-tool-verification.md) produced **eight reviewed observations and 32 plans**. Dropbox, Zoom and Figma have matching landing/pricing archive digests. Notion, Asana, Trello, Airtable and Calendly retain explicit legacy integrity qualifications on one or both pages. Slack and Linear remain gaps in the sampled windows. These are bounded samples, not complete six-month histories. The [initial live audit](../research/pricing-live-audit.md) preserves earlier unsuccessful probes.

The subsequent [blind twenty-tool verification](../research/pricing-twenty-tool-verification.md) completed all 20 tools in 78 source requests, then repeated with zero fetch attempts. Twelve tools had retained pricing material, but the unchanged parser produced **zero valid new observations**. Static layouts, embedded data and edition/discovery gaps prevent unattended price extraction. Collection, caching and audit checks can be automated; publication still requires evidence review. The eight earlier observations remain unchanged.

[Batch three](../research/pricing-batch-three-verification.md) applied the revised discovery to the next 20 untried paid catalog tools: 56 HTTP-successful requests, another zero-fetch replay, and **zero valid new observations**. Independent review found missed static pricing on both landing and dedicated pages, an actual JavaScript failure fallback, paid-price placeholders, quote-only structure and locale/scope gaps. Candidate-level error facets now expose mixed failures; collection completion still does not establish correct extraction.

[Batch four](../research/pricing-batch-four-verification.md) tests the implemented landing-source, generic structure and discovery improvements on 20 new tools. Three schema-valid proposals remain unready unchanged after independent review: QuickBooks price conflicts, Buffer title contamination and Zapier product-family/qualification gaps. A fourth raw extraction is schema-invalid Toggl duplicate structure. All 23 raw offers were inspected; no new observations were confirmed. The completed replay made zero requests; retained evidence and all six-month reservation gates were checked offline. Cached development results remain separate from fresh performance. [Implementation details](architecture/pricing-extraction-improvements.md).

Recheck retained evidence without network requests or changes to discovery gates:

```sh
node scripts/verify-pricing-evidence.mjs --cache .local/history \
  --evidence research/pricing-ten-tool-evidence.json --out .local/pricing-verification.json
```

The evidence index contains source identities; raw HTML remains in the private cache. A fresh checkout reports missing bodies until its operator supplies that cache. The report separates digest matches, qualified legacy evidence, unknown digests, missing bodies and errors. Verification alone never publishes observations.

## Test a bounded cohort

The operator sampler checks a fixed landing-page window of at most 31 days. It uses the production pricing reservation and shared Archive cooldown, but keeps its own private progress journal. It preserves the production checkpoint so normal initial-history discovery can continue later. This is a diagnostic sample, not a complete backfill.

```sh
npm run pricing:sample -- --products 1password,bitwarden,miro \
  --from 2025-06-01T00:00:00.000Z --to 2025-06-30T23:59:59.000Z \
  --cache .local/history --out .local/pricing-sample.json
```

The batch uses serial requests with ten-second spacing by default. It saves selected records, query outcomes, immutable-body references, extraction proposals and a request audit. A source rate limit stops the whole batch and persists the shared cooldown. Repeating a completed journal makes no source requests. Resume unfinished work using the same command or `--out` journal path; inputs, relevant catalog fields and parser hashes must match. A new journal does not reset a product's six-month gate.

The private journal never confirms pricing. Inspect every nonempty extraction for named tiers, correct product and edition, hosted versus self-hosted scope, exact amount, currency, billing basis, units and conditions. Generic zero-price application metadata does not establish a product's paid plans. Missing captures, rejected scope, source errors and unsupported structures remain separate outcomes.

Export a bounded public audit and a cache-verification index without HTML bodies, private checkpoints or cookies:

```sh
npm run pricing:sample-report -- --journal .local/pricing-sample.json \
  --out-dir .local/pricing-sample-report --prefix pricing-sample
node scripts/verify-pricing-evidence.mjs --cache .local/history \
  --evidence .local/pricing-sample-report/pricing-sample-evidence.json \
  --out .local/pricing-sample-verification.json
```
