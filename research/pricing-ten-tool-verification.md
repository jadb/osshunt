# Ten-tool archived pricing verification

Checked October 22, 2026. **Eight reviewed observations, 32 plans, 49 offers.** Three observations have matching CDX payload digests for both landing and pricing pages. Five include explicitly accepted, visibly qualified legacy evidence. Every observation remains partial: extracting supported prices does not establish a complete feature matrix or every billing variant.

| Product | Pricing capture | Recovered prices and structure | Evidence outcome |
| --- | --- | --- | --- |
| Slack | No usable pricing sample | Early landing linked to pricing but no capture in its preceding 30-day window; June 2025 landing failed its digest check | Gap; mismatch rejected |
| Notion | [2025-06-30](https://web.archive.org/web/20250630002039id_/https://www.notion.com/pricing) | Free; Plus USD 10 and Business USD 20/member/month with annual commitment; Enterprise custom quote | Pricing digest unverified; landing digest matches |
| Figma | [2025-06-26](https://web.archive.org/web/20250626040936id_/https://www.figma.com/pricing/) | Starter free; Collab/Dev/Full seats: Professional USD 3/12/16, Organization 5/25/55, Enterprise 5/35/90 per month, annual basis | Both digests match |
| Asana | [2025-06-24](https://web.archive.org/web/20250624065317id_/https://asana.com/pricing) | Personal free; Starter $10.99 annual basis or $13.49 monthly; Advanced $24.99 or $30.49/user/month; Enterprise and Enterprise+ quotes | Pricing digest matches; landing digest unverified |
| Trello | [2025-06-27](https://web.archive.org/web/20250627221739id_/https://trello.com/pricing) | Free; Standard USD 5 annual basis/6 monthly; Premium 10/12.50; Enterprise 17.50/user/month annual basis (210/year), displayed estimate for 50 users | Both digests unverified; quantity condition retained |
| Airtable | [2025-06-30](https://web.archive.org/web/20250630155702id_/https://airtable.com/pricing) | Free; Team $20 and Business $45/user/month with annual commitment; Enterprise Scale quote | Both digests unverified; FAQ prices only, no inferred features |
| Dropbox | [2011-01-03](https://web.archive.org/web/20110103065507id_/http://www.dropbox.com/pricing) | Basic free/2 GB; Pro 50 $9.99/month/50 GB; Pro 100 $19.99/month/100 GB | Both digests match |
| Zoom | [2015-10-13](https://web.archive.org/web/20151013071321id_/http://zoom.us/pricing) | Basic free; Pro $14.99/54.99/104.99 and Business $19.99/59.99/109.99 per host/month for 50/100/200 participants; Business minimum 10 hosts; Enterprise quote | Both digests match; hidden participant variants qualified |
| Linear | No usable pricing sample | Early landing failed strict digest verification; June 2025 landing exceeded the bounded response size | Gap; no inferred prices |
| Calendly | [2025-06-12](https://web.archive.org/web/20250612142119id_/https://calendly.com/pricing) | Free; Standard $10 and Teams $16/seat/month with annual commitment; Enterprise starts at $15k/year | Both digests unverified; currency unknown; SSO add-on qualification retained |

`$` alone remains an unknown currency. It does not become USD through inference. A monthly rate under annual commitment is not a month-to-month subscription. Zoom's hidden variants retain unknown active-state labels; Trello's quantity estimator does not establish a purchase minimum. Airtable's FAQ does not establish plan-feature coverage. Calendly's unspecified Enterprise unit remains unknown.

The original 2018 Figma capture is a client-rendered shell and remains unavailable; the 2025 capture contains static prices. Dropbox's 2025 page yielded only generic product-level JSON-LD with a zero offer; review rejected it as a substitute for named plan structure. Zoom had no exact successful landing capture for the selected June 2025 canonical-URL window. These outcomes are retained alongside the successful older samples.

## Method and source audit

1. Ran the production pricing service's initial pass for all ten known catalog products, serially, retaining its three-request limit and persistent six-calendar-month reservations. Thirty CDX requests succeeded. Each inventory retained roughly 300 landing records but remained incomplete; none had reached extraction.
2. Sampled the latest landing already retained in each incomplete inventory. Followed archived pricing links first; separately labelled current-source hints. Selected only an exact successful pricing capture at or before the landing, within a preceding 30-day lookup window. Bounded latest lookups use the Archive CDX server’s documented `limit=-1` and `fastLatest=true` options. [CDX documentation](https://github.com/internetarchive/wayback/tree/master/wayback-cdx-server). This made 25 additional source requests.
3. Checked a bounded June 1–30, 2025 landing window for every product using the same initial reservation and cutoff. This made 40 source requests. A stopped Notion lookup was repeated and remains in the request log; an earlier interrupted Asana replay has no recorded response. Original failures were not erased or counted as successful prices.
4. Kept immutable HTML private, verified exact replay/date/content identity and cached SHA-256, then parsed inert HTML. No rendering, OCR, external scripts, current assets or current prices supplied missing historical fields.
5. Re-extracted cached bodies after adding source-specific adapters. Regression tests first reproduced omissions and incorrect state claims; original defects were reintroduced to verify failing tests, then fixes restored. Independently checked amounts, units, billing bases, limits, qualifiers and source offsets before individual review/import.
6. Confirmed each supported observation through the review importer. Legacy observations received a separate explicit acknowledgement; their original digests remain unverified in the collection and UI. Rejected generic Dropbox metadata. Generated the public collection and tested the player using these actual observations.

**95 source request attempts: 94 HTTP 200 responses recorded, one interrupted attempt without a recorded response, no HTTP 429 observed.** The [request log](pricing-ten-tool-requests.jsonl) records every URL, product, phase, time, HTTP status and elapsed time. HTTP 200 alone does not mean that source integrity or extraction passed. Cookies and unrelated response headers are excluded. The [phase results](pricing-ten-tool-results.json) retain capture links, original and corrected outcomes, rates and qualifications; the [evidence index](pricing-ten-tool-evidence.json) supports repeatable cache verification.

The diagnostic source windows belong to the original incomplete pass; they do not reset its six-month gate or establish a new scheduled crawler. New discovery checks remain gated until April 22, 2027 for these reservations. Historical observations must be at least six calendar months apart. The 30-day window is a capture-proximity rule, separate from the six-month checking interval and image cadence.

## Integrity qualification

Legacy Heritrix FetchHTTP could include HTTP chunk framing in its payload digest; the upstream fix merged September 17, 2026. That bug did not affect every collector configuration, and an old chunked response does not prove its collector or the reason for a mismatch. [Upstream issue](https://github.com/internetarchive/heritrix3/issues/769), [merged fix](https://github.com/internetarchive/heritrix3/pull/770).

The narrow [evidence policy](../docs/architecture/pricing-evidence.md) requires exact HTTP 200 HTML replay identity, matching Memento date, a pre-fix capture, explicit archived chunked encoding, no contradictory digest header and retained bytes matching their SHA-256. Qualified extraction can be reviewed while the original payload digest remains explicitly unverified. Slack's unexplained mismatch fails this qualification and remains rejected. No permissive digest bypass was added.

## Reproduce and remaining work

From a checkout with the retained private cache:

```sh
node scripts/verify-pricing-evidence.mjs --cache .local/history \
  --evidence research/pricing-ten-tool-evidence.json --out .local/pricing-verification.json
make check
wrangler deploy --dry-run --config worker/history/wrangler.jsonc
```

Offline verification makes no source requests, changes no discovery gates and never confirms observations. This run checked 31 unique selected records: 18 digest matches, nine qualified legacy records, four missing bodies and zero integrity errors among retained bodies. Missing bodies include rejected or oversized responses; a fresh checkout without the private cache reports additional gaps.

Production discovery remains serial and resumable:

```sh
npm run pricing:backfill -- --base-url http://127.0.0.1:4173 \
  --products slack,notion,figma,asana,trello,airtable,dropbox,zoom,linear,calendly --passes 1
```

These samples verify extraction and review, **not complete longitudinal histories**. Dense landing histories currently block extraction until their full bounded index is collected, and domains can contain captures from before the product existed. Streaming product-era inventory, documented historical aliases, and broader template coverage remain necessary for comprehensive backfill. Neither a missing capture nor a parser gap proves that a paid plan did not exist.
