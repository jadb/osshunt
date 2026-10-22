# Website histories

The gallery and reusable image player cover every product in the generated catalog. Image availability is separate from catalog coverage: many websites have HTML captures without stored screenshots. Empty histories and failed lookups remain distinct. Existing frames remain available when a later check fails.

Verified landing-page overrides in `research/history-landings.json` replace pricing/plan comparison URLs for history discovery, while `catalogUrl` preserves each original catalog URL. Dedicated product paths stay separate from their vendor's general homepage. Discovery covers the selected landing URL and its HTTP/HTTPS and leading-www equivalents; older renamed domains are not silently inferred.

Only existing Internet Archive screenshot or thumbnail image resources are used. The service never renders archived HTML, visits the live landing page, submits Save Page Now requests or invents missing frames. Each frame links to the exact archived image at its actual capture date. [Verified archive protocol and probes](history-archive-protocol.md), [architecture and approved behavior](architecture/website-history.md).

## Preview

Requires Node 22+. No additional runtime dependencies.

```sh
npm run build
npm run history:serve
```

Open `http://127.0.0.1:4173/?product=slack`. Search products and alternatives. Play/pause, step, drag the timeline, change speed or enlarge an image. Arrow keys step; Space toggles playback when the image stage is focused. Playback pauses when the page becomes hidden. Images retain their real dates; large gaps are labelled.

The local server binds to loopback by default. `PORT` and `HOST` customize it. Its `.local/history/` directory holds manifests, refresh attempts, immutable images and failure cooldowns; preserve this directory across restarts. This is a working local backend, not durable cloud storage. Do not clear it as a routine refresh operation.

## Cache and refresh

The first successful lookup discovers all available historical screenshot records, then selects the earliest frame and subsequent frames at least 30 × 24 hours apart. Full screenshots take precedence over thumbnails at the same moment. Historical image bodies are copied when viewed, or through an explicit backfill run.

Later checks happen only when requested and at least 30 days after the previous attempt. One check can append at most one new eligible image. Shared landing URLs share the same reservation across products and visitors. Failed and empty checks also consume the interval. There is no automatic daily polling. Archived images already stored are never fetched again or overwritten.

Each image must have an allowed image format, valid dimensions and an exact archive replay timestamp; the stored CDX digest must match when present. Images larger than 10 MiB are refused. A failed first image retrieval gets a persisted cooldown of at least an hour. A failed image never replaces the previous visible image.

```sh
# Serial metadata discovery for every catalog entry, respecting persisted checks
npm run history:backfill

# Explicit historical image copies, capped at 100 new images this run
npm run history:backfill -- --images --image-limit 100

# A small selection, or a deployed service
npm run history:backfill -- --products slack,wordpress --base-url https://YOUR-WORKER.workers.dev
```

The batch waits two seconds between products and new image copies. Archive rate limits stop the batch. Cache probes never contact the archive. Reports go to `.local/history-backfill-report.json` unless `--output` is supplied; partial failures produce a nonzero exit status. Reruns honor the same 30-day gate, including earlier failures. A completed metadata report does not imply that every image body has been downloaded.

## Embed

Serve the module and stylesheet with the backend on the same origin:

```html
<script type="module" src="/history-player.mjs"></script>
<website-history product-id="slack"></website-history>
```

`api-base` can select another backend when the hosting application supplies appropriate cross-origin access. The player emits `framechange` with `{frame,index,total}`. The standalone gallery uses `?product=ID` for shareable selection.

## Cloudflare backend

`worker/history/index.mjs` uses the same service as the local preview. Static gallery assets use Workers Assets; D1 holds metadata and atomic reservations; R2 Standard holds immutable image bytes and verified metadata. R2 objects have no configured expiry or lifecycle deletion. CDN/browser caching is an additional read optimization, not the permanent copy.

Use an authenticated Wrangler 4 installation and a Cloudflare account with D1 and R2 enabled. Create dedicated resources, then replace `database_id` in `worker/history/wrangler.jsonc` with the D1 ID returned by Cloudflare:

```sh
wrangler d1 create osshunt-history
wrangler r2 bucket create osshunt-history-images
wrangler d1 migrations apply osshunt-history --local --config worker/history/wrangler.jsonc
wrangler deploy --dry-run --config worker/history/wrangler.jsonc
wrangler d1 migrations apply osshunt-history --remote --config worker/history/wrangler.jsonc
wrangler deploy --config worker/history/wrangler.jsonc
```

Use separate names/bindings for separate environments. Resource identifiers are configuration, never browser credentials. The public API accepts only catalog product IDs and selected frame IDs; callers cannot supply URLs, change capture dates or upload arbitrary image bodies. The backend destination remains `web.archive.org`.

The tested archive index and image responses omit `Access-Control-Allow-Origin`. A browser can display an image but cannot read its bytes for backend upload. The working approach copies the existing archive bytes on the server, then serves the permanent copy. No rendering service is needed.

As checked 2026-10-21, R2 Standard includes 10 GB-month storage, one million Class A operations and ten million Class B operations per month, with free egress. Storage beyond the allowance costs $0.015/GB-month. D1 Free includes 5 GB total storage, five million rows read and 100,000 rows written per day. Allowances are shared with other account usage. Indefinite retention is implemented; unlimited free storage cannot be promised. [R2 pricing](https://developers.cloudflare.com/r2/pricing/), [D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/).

## Verification

`make check` runs the catalog gate and dependency-free history tests. History tests cover CDX pagination and namespaces, exact dates/digests, monthly selection, shared URL reservations, restart persistence, immutable filesystem/R2 writes, D1 atomic SQL, rate limits, stale image loads and failed refresh notices. Live probes are documented separately so normal checks remain offline and deterministic.
