# Archived image discovery protocol

The archive adapter reads image records already held by Internet Archive. It never requests a new capture, runs a browser, or renders archived HTML. A normal archived HTML capture does not establish that a screenshot exists.

## Namespaces and timestamps

Discovery issues exact CDX queries for both HTTP and HTTPS landing URL variants in three image namespaces:

- `http://web.archive.org/screenshot/<landing-url>`: legacy screenshot metadata indexed by CDX-Writer's `ScreenshotHandler`.
- `screenshot:<landing-url>`: Brozzler screenshot resource records.
- `thumbnail:<landing-url>`: Brozzler thumbnail resource records, identified as thumbnails in frame metadata.

CDX exact lookups can return both bare-host and leading-`www.` records. Landing identity accepts only this precise host alias and HTTP/HTTPS equivalence; other subdomains, paths and query strings remain distinct. The exact indexed source target is preserved for replay.

The [CDX-Writer source](https://github.com/internetarchive/CDX-Writer/blob/master/cdx_writer.py) maps metadata image records into the legacy screenshot namespace. Its screenshot handler inherits the record date and does not assign an HTTP response status. Consequently, `statuscode=-` is valid; discovery must not require HTTP 200 in CDX metadata. The [Brozzler source](https://github.com/internetarchive/brozzler/blob/master/brozzler/worker.py) records screenshot and thumbnail JPEG resources under their separate URI schemes.

A frame's `timestamp` and `capturedAt` describe the image WARC record, never a nearby HTML capture. `originalUrl` remains the catalog landing URL. `sourceImageUrl` and `archiveUrl` point to the exact indexed image target:

```text
https://web.archive.org/web/<14-digit-image-timestamp>id_/<CDX-original>
```

`imageKind` distinguishes `screenshot` and `thumbnail`. Selection removes a thumbnail candidate when an eligible full screenshot lies less than 30 days away. Other candidates retain earliest-first chronological backfill spacing. A later refresh selects one newest eligible unseen candidate. Equal 30-day elapsed intervals are accepted; calendar months are not substituted for 2,592,000,000 milliseconds. Duplicate payload digests do not add redundant displayed frames.

Frame IDs encode the timestamp, exact image URL, and trusted digest using reversible URL-safe encoding. They do not change when dimensions or other descriptive metadata are added. They are longer than hashes but avoid collision assumptions and asynchronous ID generation.

## Completeness and failure

Queries request `timestamp,original,mimetype,statuscode,digest`, `matchType=exact`, JSON output and `showResumeKey=true`, without collapsing records. Only PNG, JPEG, GIF and WebP records become frames. The adapter follows opaque continuation tokens with unchanged query scope. The [CDX API documentation](https://github.com/internetarchive/wayback/tree/master/wayback-cdx-server#resumption-key) specifies JSON continuation as a final empty array and single-element token array.

`maxRecords` bounds records read across all namespace queries, including duplicate results returned for protocol variants. The default is 5,000, with a permitted maximum of 50,000. Pages contain at most 500 records; a request may read one additional record to prove that the configured bound was exceeded. Responses are capped at 4 MiB and each request has a 15-second deadline. Caller cancellation applies to both headers and body reads.

Successful enumeration returns `complete=true`, frames and query HTTP statuses. A validated `[]` or header-only result is empty history. A network failure, invalid metadata, rate limit, oversized response, repeated continuation, exhausted record budget or ambiguous full page without continuation throws a typed error instead of returning empty history. No incomplete partial list is labeled complete. Callers should retain previously stored frames when discovery fails. Supported error codes include:

| Code | Meaning |
| --- | --- |
| `unsafe_url` | Landing identifier fails public HTTP(S) URL validation |
| `archive_unavailable` | Network failure or unsuccessful archive HTTP status |
| `archive_rate_limited` | HTTP 429; `retryAfter` contains seconds when supplied |
| `archive_timeout` / `archive_aborted` | Request deadline / caller cancellation |
| `archive_bad_response` | Invalid CDX schema, date, digest or unrelated image |
| `archive_incomplete` | Bounded enumeration cannot establish completeness |
| `unsafe_archive_url` | Replay URL outside supported image namespaces/host |
| `archive_timestamp_mismatch` | Replay timestamp or indexed image target changed |
| `invalid_image` / `image_digest_mismatch` | Invalid image bytes / source checksum mismatch |

Landing URLs are identifiers, not fetch destinations. IP literals, credentials, private naming conventions, wildcard hosts and nonstandard ports are refused. All discovery requests go to `https://web.archive.org`; metadata redirects are refused. This is separate from the service's catalog-ID restriction.

## Exact image retrieval and verification

An image client must validate the source replay URL before requesting bytes, use manual redirects, validate every redirect destination and validate the final response URL with `assertExactReplayUrl`. A closest-timestamp redirect is a failure even if it returns a valid image. Replay targets must match the stored exact target and image timestamp; the outer host is restricted to `web.archive.org`. A final `Memento-Datetime`, when present, should also agree with the frame timestamp. The archive-link header's original landing URL is not the replay image target.

Await `verifyImage(bytes, {mimeType, digest})` before persisting bytes. It checks binary format, structure and dimensions; limits size to 10 MiB by default; rejects dimensions above 100,000 per side or 100 million pixels; checks MIME against actual bytes; verifies a known CDX SHA-1 base32 payload digest using native WebCrypto; and returns MIME, dimensions, size and a SHA-256 hex checksum. Its format checks parse PNG/GIF/JPEG/WebP headers, rather than fully decoding every compressed pixel. SVG and HTML are refused. Missing CDX digests are permitted for server retrieval with exact replay validation, but cannot authorize a browser upload.

A storage service should read its immutable object first and copy a missing image only after these checks. Browser-readable direct retrieval additionally requires actual CORS permission; the ability to display an image in an `<img>` does not grant access to its bytes.

## Read-only public probes

Observed on 2026-10-22 UTC. These commands query existing records and download existing image bytes only:

```sh
curl --max-time 25 -sS -D cdx-headers.txt \
  'https://web.archive.org/cdx/search/cdx?url=http%3A%2F%2Fweb.archive.org%2Fscreenshot%2Fhttps%3A%2F%2Fwebapps.stackexchange.com%2F&output=json&fl=timestamp%2Coriginal%2Cmimetype%2Cstatuscode%2Cdigest&limit=3'

curl --max-time 25 -sS \
  'https://web.archive.org/cdx/search/cdx?url=http%3A%2F%2Fweb.archive.org%2Fscreenshot%2Fhttps%3A%2F%2Fwebapps.stackexchange.com%2F&output=json&fl=timestamp%2Coriginal%2Cmimetype%2Cstatuscode%2Cdigest&limit=2&showResumeKey=true'

curl --max-time 35 -sS -L -D image-headers.txt \
  -w '\n%{http_code} %{url_effective} %{size_download}\n' \
  'https://web.archive.org/web/20120329224219id_/http://web.archive.org/screenshot/http://webapps.stackexchange.com/' \
  -o screenshot.png

curl --max-time 25 -sS \
  'https://web.archive.org/cdx/search/cdx?url=screenshot%3Ahttps%3A%2F%2Fwebapps.stackexchange.com%2F&output=json&fl=timestamp%2Coriginal%2Cmimetype%2Cstatuscode%2Cdigest&limit=2&showResumeKey=true'
```

The first query returned HTTP 200 with three `image/png`, dash-status rows at `20120329224219`, `20120627200053` and `20120908045637`. Their original target was `http://web.archive.org/screenshot/http://webapps.stackexchange.com/`, even though the query used the HTTPS landing variant. The two-record query returned an opaque continuation in the documented JSON shape. The Brozzler namespace query returned HTTP 200 with `[]`.

A further exact query for the GitHub root confirmed the leading-`www.` alias:

```sh
curl --max-time 20 -sS \
  'https://web.archive.org/cdx/search/cdx?url=http%3A%2F%2Fweb.archive.org%2Fscreenshot%2Fhttps%3A%2F%2Fgithub.com%2F&output=json&fl=timestamp%2Coriginal%2Cmimetype%2Cstatuscode%2Cdigest&limit=10'
```

Its first record was timestamp `20120111144336`, target `http://web.archive.org/screenshot/http://www.github.com/`, MIME `image/png`, status `-`, digest `AWNL27Y2NKUGNJDHCAYX7VXH4P45KPLY`. Later rows included bare `github.com` targets. Both forms belong to the same lookup; neither is rewritten in the image source URL.

The exact replay request returned HTTP 200, unchanged final URL, 964,029 bytes and `Content-Type: image/png`. `Memento-Datetime` was `Thu, 29 Mar 2012 22:42:19 GMT`. Native verification established dimensions 1024 × 4096 and these checksums:

```text
CDX SHA-1 base32: AU55WVCJLG4RFYWWHPRXKLGLLBWIYK7N
SHA-256: eed0d858bfa07d8349caad04762d3b28d301518a911c9c3a1d57af9e90b2a0e3
```

Neither the CDX response nor the image response supplied `Access-Control-Allow-Origin`. Backend copying is therefore the usable byte-access path for this observed image. A full native discovery call also completed all six namespace/protocol queries with HTTP 200, finding actual screenshot timestamps from 2012-03-29 through 2024-03-26.

## Known limits

Completeness means enumeration of supported public CDX namespaces for the given landing page, not proof that every historical screenshot ever taken is publicly indexed. Archive exclusions, unavailable records, other collections/namespaces, URL changes and path changes may create gaps. URL protocol variants are queried explicitly; unrelated landing paths are not guessed. The archive may change access rules, CORS policy or availability. Historical bytes can still be unavailable after metadata discovery, so image retrieval remains independently validated and may fail without removing existing cached images. A thumbnail is lower resolution; preserving its record does not establish a full screenshot exists.
