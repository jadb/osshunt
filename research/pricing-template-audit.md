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

## Zoom: split header and comparison tables

[Pricing capture](https://web.archive.org/web/20151013071321/http://zoom.us/pricing),
2015-10-13T07:13:21Z, 56,116 bytes. CDX SHA-1/base32 `FKU366K45G7XR6FECQWEPL3WYRK4MQ5B` verified against
cached bytes. SHA-256 `141f3a247a9167946335194c96811e83a0ed1b52618b2bbb4936ac08dbaae48f`.

Actual markup separates four plan headings in `plans_header` from offers/features in `plans`; a final spanned footnote
made generic comparison extraction reject the table. A Zoom `/pricing` adapter joins the explicit four header columns
to equal-width participant rows. Row capacities remain offer qualifications; hidden 100/200-participant expansion
rows retain unknown active state. No archived scripts or CSS executed.

| Plan | 50 participants | 100 participants, hidden | 200 participants, hidden | Explicit host condition |
| --- | --- | --- | --- | --- |
| Basic | Free | No observed offer | No observed offer | Unknown |
| Pro | $14.99 /mo/host | $54.99 /mo/host | $104.99 /mo/host | Up to 9 hosts |
| Business | $19.99 /mo/host | $59.99 /mo/host | $109.99 /mo/host | 10 or more hosts |
| Enterprise | Contact Sales | Contact Sales | Contact Sales | Unknown |

Dollar currency remains unknown. Paid offers retain monthly period, host denominator and unknown commitment;
Business explicitly requires a minimum of 10 hosts. Participant capacities and upper/lower host conditions remain
literal volume qualifications. Quote amounts stay unknown. No empty offer cell becomes a zero or an excluded feature.
Offer evidence joins exact header, participant-label and price-cell locators so conditions cannot detach from prices.

Literal table values retain meeting-duration and meeting-count limits. Symbol-only checked classes are retained as
`marker: checked`, with attribute evidence; no claim that an unrendered CSS marker proves inclusion or exclusion.
Empty cells remain unnormalized. Starred rows retain the explicit add-on footnote. All results partial pending review.

An authored split-table fixture used different amounts/capacities/minimum quantity. It first failed with no plans,
passed after adaptation, failed again when the original omission was restored, then passed after restoration.
All 34 extraction/link tests passed. Actual cached Zoom bytes independently produced four named plans, ten qualified
offers and the amounts above after a fresh payload-integrity check. Figma remained unavailable; Dropbox remained three
plans. No full archived HTML or current page data committed.
