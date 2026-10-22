# Archived HTML integrity

Pricing evidence retains the original CDX digest, the SHA-256 of cached replay bytes, and a bounded whitelist of archive response metadata. Raw HTML stays private. Integrity grades describe source bytes, independently of a maintainer's pricing review.

- `verified`: replay bytes match the selected CDX SHA-1 payload digest.
- `unknown`: the selected CDX record supplies no payload digest. Cached bytes still require their recorded SHA-256.
- `legacy_chunked_unverified`: an exact historical replay qualifies for the narrow exception below. Its original payload digest remains unverified; extracted proposals stay partial and require explicit review.

Legacy Heritrix FetchHTTP could digest HTTP chunk framing when HTTP/1.1 was enabled. This did not affect every crawler configuration or FetchHTTP2. The upstream fix merged on September 17, 2026. A historical chunked response alone does not identify its collector or prove the cause of a mismatch. [Upstream issue](https://github.com/internetarchive/heritrix3/issues/769), [fix](https://github.com/internetarchive/heritrix3/pull/770).

A mismatching replay can receive the legacy grade only when all of these hold:

- The selected record has a valid CDX SHA-1 digest and predates September 17, 2026 UTC.
- The response is exact HTTP 200 HTML from the selected `id_` archive URL, with no redirect, original-URL change, or capture substitution.
- `Memento-Datetime` exactly matches the selected capture.
- The archived original transfer-encoding explicitly includes `chunked`.
- No returned original digest contradicts the selected CDX digest.
- Cached bytes match their recorded SHA-256, and retained transport evidence supports the same qualification on subsequent reads.

Other unexplained digest mismatches remain errors. Timestamp drift, unexpected redirects, non-200 responses, wrong content types, and contradictory digest headers always fail. No exception reconstructs missing chunk framing or claims the collector's version is known.

The retained transport whitelist includes HTTP status, Memento date, original URL, archived transfer-encoding, original content-encoding, original digest header, and a bounded WARC identifier. Cookies and other response headers are omitted. The current FetchHTTP implementation preserves content encoding when calculating its entity digest; replay and original digest representations therefore require care. [Implementation](https://github.com/internetarchive/heritrix3/blob/master/modules/src/main/java/org/archive/modules/fetcher/FetchHTTP.java).
