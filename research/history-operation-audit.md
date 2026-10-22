# Website-history operation audit

Checked 2026-10-21. Commands below use repository-relative paths and public URLs. Credentials, account tokens and machine-specific transcripts excluded.

## Discovery and protocol

1. Read Internet Archive's primary screenshot writers: [CDX-Writer](https://github.com/internetarchive/CDX-Writer/blob/master/cdx_writer.py), [Brozzler worker](https://github.com/internetarchive/brozzler/blob/master/brozzler/worker.py) and [CDX server](https://github.com/internetarchive/wayback/tree/master/wayback-cdx-server).
2. Queried exact legacy `http://web.archive.org/screenshot/<landing>` and Brozzler `screenshot:<landing>` / `thumbnail:<landing>` namespaces, both landing URL schemes. Did not request HTML captures or submit new captures.
3. Probed [stored 2012 screenshot](https://web.archive.org/web/20120329224219id_/http://web.archive.org/screenshot/http://webapps.stackexchange.com/) and verified PNG bytes, 1024 × 4096 dimensions, capture date and CDX SHA-1. [Detailed source evidence](../docs/history-archive-protocol.md).
4. Tested real CDX leading-www aliases, exact timestamps, opaque pagination continuations and dash status records. Six independent namespace queries now run concurrently, with sequential continuation pages and a strict shared record budget.
5. Confirmed index and screenshot responses omit browser read-access headers. Backend byte copying selected; no renderer added.
6. A Cloudflare remote reference probe kept URL and Accept header identical: absent descriptive User-Agent returned HTTP 400; `OSSHuntHistory/0.1 (+https://osshunt.com)` returned HTTP 200 with real screenshot records. Identifying header added to both metadata and image requests.
7. Full-adapter remote probe found that Workers reject Fetch `redirect: error` before making any network request. CDX now uses `manual`; all 3xx responses fail without following the destination. The corrected remote probe returned six HTTP 200 responses and 301 actual reference image records.

## Landing-page selection

Audited 62 non-root catalog URLs: 26 pricing/comparison URLs replaced with verified product landing pages for history only; 36 retained as specific product, edition or project pages. Original catalog URLs preserved. Two live page checks remained unavailable/interstitial and received no guessed replacement. [All decisions and official sources](history-landing-audit.json), [build inputs](history-landings.json).

## Build and regression checks

```sh
node scripts/build-history-catalog.mjs
node --test test/history-*.test.mjs
make check
```

Tests exercise exact 30-day boundaries, concurrent refreshes, one monthly append, exact replay paths/dates/digests, image formats and byte limits, immutable writes, restart persistence, D1 atomic SQL, R2 conditional creation, cache-only probes, error/failure cooldowns, batch budgets and rate-limit stops. HTTP end-to-end test covers gallery, catalog, discovery, first image copy, cache reuse and conditional reads.

Each correction was verified by a failing regression, a passing fix, restoration of the original defect to confirm failure and final restoration of the fix. Corrections include leading-www equivalence, shared-URL product identity, conflicting Memento dates, generic error codes, request completion after disconnect, empty streamed POST bodies, timeline input ordering, stale-check notices and archive client identification.

## Storage and deployment

Dedicated `osshunt-history` Worker/D1 and `osshunt-history-images` R2 Standard bucket created. Existing unrelated resources retained.

```sh
wrangler d1 create osshunt-history
wrangler r2 bucket create osshunt-history-images
wrangler d1 migrations apply osshunt-history --local --config worker/history/wrangler.jsonc
wrangler deploy --dry-run --config worker/history/wrangler.jsonc
wrangler types .local/history-bindings.d.ts --config worker/history/wrangler.jsonc
# From worker/history, where configuration discovery applies:
wrangler check startup
wrangler d1 migrations apply osshunt-history --remote --config worker/history/wrangler.jsonc
wrangler deploy --config worker/history/wrangler.jsonc
wrangler r2 bucket lifecycle list osshunt-history-images
```

Dry run and local/remote migrations passed. Worker startup reported 1–2 ms on deployment. R2 lifecycle inspection found only the default abort rule for unfinished multipart uploads; no completed-image expiration rule. [Worker preview](https://osshunt-history.ideacrafters-llc.workers.dev/).

## Browser and batch verification

Real local WordPress discovery returned 54 selected images, 2011-12-21 through 2024-02-07, all at least 30 days apart. First images displayed through the persistent cache. Search, step, 2× playback and pause verified with real archive bytes. Browser scrutiny exposed scrubber input ordering, now covered by a regression.

Live deployment scrutiny exposed Cloudflare's non-null empty POST stream; request validation now accepts actual EOF and rejects caller options under bounded inspection. Failed archive attempts retain their monthly gate after corrections.

Thirty-four preview initialization failures occurred before any outbound archive request because of the unsupported redirect mode. Their rows were backed up and preserved in `history_preflight_20261022` before clearing only those unused initialization reservations. Actual archive fetch attempts and stored images were not reset.

```sh
node scripts/backfill-history.mjs --base-url https://osshunt-history.ideacrafters-llc.workers.dev --output .local/history-backfill-cloudflare.json
```

The initial catalog discovery uses the same durable gate as visitors. Successful empty history, transient failure and real image records are counted separately. Selected metadata does not mean all image bodies have been fetched; first views or the explicit image backfill fill permanent storage.

The first real batch stopped on HTTP 429 after eight catalog entries; WordPress had separately completed the same initial discovery. [All 227 read-only route/cache measurements](history-coverage.json): 3 ready histories, 86 selected frames, 3 confirmed empty histories, 3 failed checks, 218 pending initial lookups. Two real PNG objects occupy 419,549 bytes. WordPress image copy returned a verified SHA-256 ETag; repeat HEAD returned the same ETag from permanent storage. Browser step, scrub, speed, play/pause and enlargement verified; a failed image preserved the previous view.

The batch's initial two-second spacing proved too aggressive. Default spacing is now one minute, with a stop after three consecutive errors. A persisted shared cooldown blocks new source requests across visitors after rate limiting; the observed limit's fallback deadline is 2026-10-22T02:58:03.106Z. Blocked unseen products retain their first monthly allowance. Cached images remain readable. The batch can be rerun after the cooldown; no bypass or repeated request to an actually failed product is used.

## Repeated steps suitable for automation

- Generate gallery catalog and verify exact product coverage; already part of the normal build.
- Reuse recorded real CDX cases for pagination, aliases and timestamp tests; keep routine tests offline.
- Run the same serial batch for initial discovery and later due checks; persist attempts before external calls.
- Use cache-only probes before every image backfill; skip existing bytes and stop on rate limits.
- Re-run dry run, migrations and binding checks for storage changes; inspect retention rules independently of CDN headers.
- Promote live integration failures into stream/lifecycle/request-header tests, preserving source bytes and exact capture dates.
