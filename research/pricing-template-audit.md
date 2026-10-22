# Archived pricing template verification — 2026-10-22

Offline inspection of actual immutable cached archive bodies. No network requests made for this extraction work;
full historical inventories remain incomplete. Source bodies remain private; authored tests reproduce only structural
markup and use different example names/amounts. Positive test fixtures alone do not establish live source success.

## Figma: genuine client-rendered gap

[Pricing capture](https://web.archive.org/web/20180430041341/https://www.figma.com/pricing),
2018-04-30T04:13:41Z, 6,887 bytes. CDX SHA-1/base32 `4MQLGRRV5BDNMCHNOQ3ATYSUYK2BYXAC` verified against
cached bytes. SHA-256 `dffdae2f9e0b1f61e9537e7a11a2913bc0b9f941ec010b6dcee2dcb48d8fddd9`.

Parsed body text empty; an empty `react-page` mount and external vendor/landing bundles supply the page UI.
Inline initial options contain application configuration, not plans or prices. No adapter justified by this source;
result remains extraction unavailable. No scripts executed, bundles fetched or current prices substituted.

## Dropbox: legacy row cards

[Pricing capture](https://web.archive.org/web/20110103065507/http://www.dropbox.com/pricing),
2011-01-03T06:55:07Z, 16,842 bytes. CDX SHA-1/base32 `GJKOVM37BHUG5HIYJZOYFIPN4AOX5MGD` verified against
cached bytes. SHA-256 `d508382586442c6b62140e00e565b92ccd32fd6bb89977881ad6637d0749269e`.

Actual markup: one layout table per plan; `plan-description` contains the heading, `plan-pricing` contains the offer
paragraph plus a separate upgrade link, `db_badge_content` contains capacity. Generic card/comparison recognition
missed this structure. A narrowly scoped Dropbox `/pricing` adapter reads those explicit cells, excluding upgrade-link
numbers from price parsing. Other hosts cannot activate the adapter.

| Original plan | Observed offer | Normalized amount | Currency | Period | Capacity |
| --- | --- | --- | --- | --- | --- |
| Basic | Free | 0 | Unknown | Unknown | 2GB |
| Pro 50 | $9.99 /month | 9.99 | Unknown | Month | 50GB |
| Pro 100 | $19.99 /month | 19.99 | Unknown | Month | 100GB |

The dollar sign alone does not establish USD. Commitment, minimum quantity, popularity and unstated features remain
unknown. Capacity retains its original badge value and locator; `Storage` is a normalized feature category. Proposals
remain partial and require confirmation before publication.

## Verification steps

1. Read source records from the bounded sample audit; looked up immutable bodies by exact original URL/timestamp/digest.
2. Ran `verifyHtmlIntegrity(bytes, digest)` and `sha256(bytes)` on actual cached bodies; parsed those bytes inertly.
3. Inspected grouped semantic elements, heading/price cells, source offsets and literal text; no full source HTML committed.
4. Added an authored three-plan row-card fixture; initial extraction returned no plans and failed the requirement test.
5. Implemented the minimal scoped adapter; test passed. Reintroduced the original omission of adapter invocation;
   same test failed with an empty plan list. Restored adapter; all 33 extraction/link tests passed.
6. Re-ran extraction against the actual cached Dropbox pricing body; recovered the three plans and exact amounts above.
   Figma's actual body still correctly returned no plans. Adapter success therefore includes actual source verification.
