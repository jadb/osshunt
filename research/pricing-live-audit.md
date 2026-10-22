# Historical pricing live-source audit — 2026-10-22

Result: **zero positive pricing observations collected; zero prices confirmed**. An earlier verified Zulip landing body retained; another landing replay fetched but its payload digest mismatched
the indexed capture and cannot support verified historical claims. Three catalog products attempted. These are bounded manual source probes,
not completed historical inventories or six-month batch coverage.

## Mechanism and safeguards

Used the application's `queryHtmlPage(url, {from, cutoff, limit:100})`, `fetchHtml(record)` and
`FilePricingStore.getBody/putBody(bodyIdentity(record), ...)` APIs. Before each outbound request, checked the persisted
archive-wide cooldown; checked again after pacing. Requests serial, at least 30 seconds apart; hard cap 16 requests.
Actual pass used 7 requests, then stopped after the last 3 requests timed out. Four total timeouts; no HTTP 429 observed.
A 429 would extend the shared cooldown by at least 1 hour and stop further requests. No retry, redirect, date substitution,
current-page fallback or wider historical pricing lookup used. Existing cached source bodies never refetched.

CDX requests used exact-match original URLs, successful HTML only, timestamp/original/mimetype/statuscode/digest fields,
100-record limit and opaque continuation support. Requests identified OSSHunt through its descriptive User-Agent.
Exact replay validated capture timestamp, response MIME and source digest where supplied. Network timeout 15 seconds;
timeouts happened before response headers and therefore have no HTTP status.

## Commands and observed source requests

Equivalent module calls and windows below retain the source/query choices without private cache locations.
All timestamps UTC on 2026-10-22. `queryHtmlPage` cutoff/from values inclusive.

| Start | Operation | Outcome |
| --- | --- | --- |
| 08:51:53.457 | `queryHtmlPage('https://zulip.com/', {from:'2022-05-01T00:00:00.000Z', cutoff:'2022-05-31T23:59:59.000Z', limit:100})` | HTTP 200, 15 records, complete page inventory |
| 08:52:23.459 | `fetchHtml` for exact Zulip record 20220526032913 | HTTP 200, HTML cached; later offline payload digest mismatch |
| 08:52:53.461 | `queryHtmlPage('https://zulip.com/plans/', {from:'2022-04-26T03:29:13.000Z', cutoff:'2022-05-26T03:29:13.000Z', limit:100})` | Timeout before headers; unknown pricing coverage |
| 08:53:23.462 | `queryHtmlPage('https://slack.com/', {from:'2020-06-01T00:00:00.000Z', cutoff:'2020-06-30T23:59:59.000Z', limit:100})` | HTTP 200, 100 records plus continuation; incomplete inventory |
| 08:53:53.463 | `fetchHtml` for exact Slack record 20200606180530 | Timeout before headers; no cached landing body |
| 08:54:23.465 | `queryHtmlPage('https://zulip.com/plans', {from:'2022-04-26T03:29:13.000Z', cutoff:'2022-05-26T03:29:13.000Z', limit:100})` | Timeout before headers; second URL found in returned landing body; integrity unverified |
| 08:54:53.466 | `queryHtmlPage('https://ghost.org/', {from:'2021-06-01T00:00:00.000Z', cutoff:'2021-06-07T23:59:59.000Z', limit:100})` | Timeout before headers; unknown landing coverage |

## Retained historical evidence

[Requested Zulip landing capture](https://web.archive.org/web/20220526032913/https://zulip.com/),
requested indexed date 2022-05-26T03:29:13Z, archive digest `YGE3E2SGP7UKOYXWUW64CCRV7IS57TTS`.
Fetched 2026-10-22T08:52:24.174Z; cached HTML SHA-256
`5cbbb76064c440174dc0d0f52a227e393be956707a9c4be3ba600aff195f5561`.
Parsed links in the returned body, retained as unverified discovery candidates:

- `https://zulip.com/plans/`, label `Pricing`, source locator `offset:10352-10381`.
- `https://zulip.com/plans`, label `See plans and pricing`, source locator `offset:21822-21965`.

Offline verification found returned-body SHA-1/base32 `J5YPP7CE2TXOSZ74FP5OCACSTBQBOWA4`, which differs from the
indexed digest above. Both replay bytes and mismatch evidence remain retained for diagnosis; no assumption that this
is a harmless replay rewrite. This body cannot support confirmed historical facts.

Neither URL's eligible pricing body recovered. Landing HTML itself contains no supported pricing structure;
this does not establish that Zulip had no commercial pricing. No adapter justified without an actual pricing body.

The earlier independent Zulip 2020 probe recovered exact landing 20200511022621
([source](https://web.archive.org/web/20200511022621/https://zulip.com/)); cached payload SHA-1/base32
`HAC4FBY4DAINUQ4OWA6ZFJRPGS4AHU5I` matches its indexed digest. That probe also recovered an HTTP 200 empty `/plans/`
pricing index in its preceding 30-day window. Retain that as a real coverage gap. The 2022 timeouts are unavailable
coverage and must not be reported as empty. Slack's page continuation must likewise stay incomplete; a selected
record can be used as a manual evidence sample without claiming the index is complete.

## Remaining acceptance work

The required two different-product historical landing-to-pricing examples remain outstanding. A later bounded pass
must retrieve exact eligible pricing bodies, extract supported plan structure, retain source/date/hash evidence and
confirm each factual field before publishing. No observation proposal or historical amount was manufactured to fill
this gap. The private review-proposal export is an empty array; separate private coverage records preserve all attempts.

## Offline payload-integrity check

Computed `base32(SHA1(cachedBodyBytes))` for both retained landing bodies with Node crypto; no network request.
The 2020 body matched, the 2022 body mismatched. The archive client checked exact URL/date, MIME and optional archive
digest headers but did not recompute the indexed payload digest. This gap requires an integrity guard before source
bytes can support confirmed facts, including previously cached bytes. Existing cached bytes preserved unchanged.
