# Pricing improvements and fresh twenty-tool reassessment

**Implemented landing-page extraction, generic partial/quote structure, reviewed dated aliases and discovery diagnostics. All 20 fresh tools completed collection; three schema-valid proposals contain 14 plan records and 17 offers, but none is ready to publish unchanged.** The earlier eight confirmed observations remain unchanged. Collection and replay work; unattended pricing publication still needs the corrections below.

The [acceptance criteria](pricing-batch-four-acceptance.md) and [frozen cohort](pricing-batch-four-cohort.json) preceded source collection. These are the next 20 untried paid catalog tools in audience order, excluding the previous 50. No tools were replaced based on likely extraction success. Sources are June 2025 landings with pricing captures at most 30 days earlier; pricing discovery remains six calendar months apart. This bounded cohort does not establish a complete historical series.

## Implemented improvements

- Shared production/operator extraction now inspects landing HTML, with exact `landing-page` source provenance and matching capture, body, transport and hash identities. Partial landing structure remains a fallback while dedicated pricing sources are checked; restart revalidates its identity.
- Generic heading/group extraction supplements cards, tables and inert JSON-LD without adding product-specific adapters. Named quote-only plans, separate modules and paid placeholders can remain partial; missing prices, currency, commitment and units stay unknown. Extraction output and diagnostics are bounded.
- Trials remain separate from recurring free plans. Hidden contextual terms cannot supply visible offer commitments or quantities; script/style/template text cannot fabricate prices. Visible popularity badges are scoped separately from hidden or negated claims.
- Safe rejected pricing navigation now retains reasons and omission counts. Three source-evidenced, exact, dated alias associations cover Docusign eSignature, German Workspace pricing linked from Meet, and Computer Backup pricing linked from Backblaze. Their scopes remain explicit; no host-wide expansion.
- Audit export exposes landing versus candidate structures, partial/embedded/static classifications, candidate errors, invalid proposal envelopes and malformed-fragment omission counts. The additive report fix made during collection did not change the frozen extractor or source selection.

See the [implementation contract](../docs/architecture/pricing-extraction-improvements.md). Schema validity checks evidence structure; it does not establish that a displayed rate is active, fully qualified or correctly attached to a product.

## Development results, separate from fresh tools

The [cached eight-source reassessment](pricing-batch-four-development.json) made zero requests. Seven cases now form schema-valid proposals: Front, Wix, Smallpdf, Spendesk, Docusign, Backblaze and Fireflies. Otter remains invalid because billing representations repeat plan identities. Across all eight, extraction retained 35 raw plan records and 38 raw offers; these are development results, not held-out precision or 35 distinct subscription tiers.

Independent review checked retained source hashes/grades and field locators. Unknown currency, incomplete billing terms, paid placeholders, quote-only module structure, and a separately displayed Backblaze add-on rate remain explicit limitations. Wix currency/tax and active-variant ambiguity remain unresolved. This supports broader structure coverage; it does not prove price completeness or publication readiness. The original unsuccessful live results remain unchanged.

## Fresh collection and evidence

| Measurement | Result |
| --- | --- |
| Tools completed | 20/20 |
| Source attempts | 60: 58 HTTP 200, two 15-second timeouts |
| Live rate limits / global stop | Zero / none |
| Product outcomes | Three review pending; four extraction unavailable; four missing landing; three missing pricing; five errors; one wrong scope |
| Candidate outcomes | 15: two review pending, six extraction unavailable, five missing captures, two digest errors |
| Products with candidate errors / mixed outcomes | 2 / 2 |
| Nonempty raw extractions | Four products; 21 plan fragments, 23 offers including invalid/duplicate representations |
| Landing / candidate fragments | 4 / 17 plan records; 4 / 19 offers |
| Invalid extraction envelopes | One: Toggl duplicate identities; retained for audit, no proposal |
| Schema-valid proposals | Three: QuickBooks, Buffer, Zapier; 14 plan records / 17 offers |
| New confirmations / proposals ready unchanged | Zero / zero |
| Retained rejected pricing links | Four; zero omitted |
| Selected evidence roles | 25: 15 digest verified, six qualified legacy, four missing bodies |
| Completed-journal replay | Zero fetch attempts; unchanged bytes |

The [request trace](pricing-batch-four-requests.jsonl) records URLs, source phases, timestamps, status and error codes. Xero's index query and Shopify's landing replay timed out without HTTP responses; these are not pending requests. Three Adobe responses returned HTTP 200 but failed digest verification and were not retained as usable bodies. The fourth missing body is Shopify's timeout. [Offline evidence](pricing-batch-four-evidence.json), [results](pricing-batch-four-results.json) and [source review](pricing-batch-four-review.json) preserve those distinctions.

## Source assessment for all 20

| Tool | Finding and next correction |
| --- | --- |
| FigJam | No rate structure on retained landing. Shared Figma pricing is now visibly rejected as outside product path; requires reviewed bundle association. Temporary guest access is not a recurring free tier. |
| QuickBooks Online | Four named JSON-LD offers conflict with both regular and promotional cards. All four need cross-representation/promotion reconciliation; tier names remain useful. |
| Xero | Landing index query timed out. No retained source; no claim about historical price availability elsewhere. |
| Harvest | Exact pricing capture missing. Second candidate is a customer case study about its own prices; tighten navigation intent. Neither retained page yields vendor subscription offers. |
| Toggl Track | Seven raw plan representations/six offers fail duplicate-identity validation. Permanent free zeros are supported; paid alternatives remain unknown rather than choosing between displayed amounts. Reconcile variants; exclude distinct Toggl Plan product. |
| Docebo | Landing has no paid rates; slash/no-slash pricing candidates both lack captures. Review candidate budgeting without erasing exact URL identities. |
| TalentLMS | No rates on retained landing; exact pricing candidate lacks capture. Source gap. |
| Salesforce | No successful exact landing capture in fixed window. Source gap. |
| BigCommerce | Verified enterprise FAQ explicitly describes tailored pricing; generic extractor misses quote-only structure. A zero-percent transaction fee is not a free plan. |
| Shopify | Selected landing replay timed out; no body retained. Source gap. |
| Adobe Lightroom | Verified landing contains unresolved template tokens; pricing body rejected for digest mismatch. No fabricated rate. |
| Adobe Photoshop | Same template-content limitation; selected pricing body fails digest verification. |
| Lucidchart | No successful exact landing capture in window. No inferred alternate-host price. |
| Microsoft Visio | No successful exact landing capture in window; editions remain unresolved. |
| Adobe Premiere Pro | Selected landing body fails digest verification. No usable pricing evidence. |
| Final Cut Pro | Verified product landing contains no displayed price or selected pricing candidate. Requires evidenced purchase-page discovery. |
| Buffer | Four numeric literals are supported, but two plan names absorb adjacent badge text, including a hidden placeholder. Annual commitment and channel basis are incompletely bound; neither plan is ready unchanged. |
| Hootsuite | Named Standard/Advanced/Enterprise structure and explicit contact-for-pricing exist; no static numerical rates. Partial/quote extraction miss, not proven empty JavaScript content. |
| Make | No successful exact landing capture in window. Source gap. |
| Zapier | Four main tiers plus four separately marketed products are flattened together. Displayed amounts and main annual commitments are supported, but product grouping, starting-at qualifiers and usage basis need correction. |

All 23 raw offers were inspected, including the six from schema-invalid Toggl fragments. QuickBooks' four source-price conflicts and Buffer's two contaminated names are material errors. Zapier's separate product families and omitted starting-at flags prevent full-proposal publication. Supported numeric literals and conservative unknowns remain useful evidence; they do not establish complete recurring-price tuples. No blanket accuracy percentage is warranted from these incomplete outputs.

## Reproduction and safeguards

Collection loaded `9e5dfe4`, extractor version **1.1.0**, from October 22, 2026, 17:28:15.248–17:38:20.501 UTC (10 minutes 5 seconds). The manifest's `baselineCommit` identifies the implementation parent before the cohort/schema commit. All 30 collector/parser files, catalog and lockfile hashes stayed unchanged through the completed replay. Reporting changed independently in `bb1dc0b`.

Replay journal SHA-256 before/after: `56014aa01569586b48ea5933d47ac5a44743b0d33f125a84f74f709c1b1fa4b1`. All 20 store reservations match their journal dates, enforce six calendar months, release ownership and preserve their previous production checkpoints. [Process verification](pricing-batch-four-process.json) records these checks. Offline verification found zero errors among retained bodies; legacy records remain explicitly unverified. No failed-integrity response was silently accepted.

```sh
npm run pricing:sample -- \
  --products figjam,quickbooks-online,xero,harvest,toggl-track,docebo,talentlms,salesforce,bigcommerce,shopify,adobe-lightroom,adobe-photoshop,lucidchart,microsoft-visio,adobe-premiere-pro,final-cut-pro,buffer,hootsuite,make,zapier \
  --from 2025-06-01T00:00:00.000Z --to 2025-06-30T23:59:59.000Z \
  --cache .local/history --out .local/batch-four/journal.json
npm run pricing:sample-report -- \
  --journal .local/batch-four/baseline-journal.json \
  --out-dir research --prefix pricing-batch-four
node scripts/verify-pricing-evidence.mjs --cache .local/history \
  --evidence research/pricing-batch-four-evidence.json \
  --out .local/batch-four/offline-verification.json
```

The first command documents the frozen run; a changed parser must use separate cached evaluation, not resume its baseline journal. The completed replay used a fetch-denying preload and counted zero attempts. Reproduction requires the retained private journal and immutable cache; public artifacts exclude HTML, cookies and private checkpoints. Review, offline re-extraction, export and validation made no additional source requests. No present-day rendering or archived scripts were executed.

Validation: build/schema checks, **321 Node tests and five Python tests passed**; Worker dry-run bundle passed. Local HTTP integration tests required permission to listen; their initial sandbox-only attempt failed before rerunning the full suite successfully. The audit regression was tested red first, with the original defect restored to fail, then restored green. Earlier implementation regressions received the same mutation checks. No new production history Worker deployment or merge was performed.

## Remaining automation work

1. Reconcile structured and visible offers, promotions and repeated billing variants before accepting a price. QuickBooks, Toggl and development Otter provide retained regressions; serialized runtime data remains another unsupported source representation.
2. Separate plan title text from badges, retain annual/channel/task qualifications, distinguish product families and capture starting-at semantics. Buffer and Zapier show why structurally valid output still needs review.
3. Expand generic partial/quote structure and narrow pricing navigation intent. BigCommerce/Hootsuite are structure misses; Harvest's story and Toggl Plan are wrong-topic/product candidates. Review exact duplicate candidate budgets and evidenced bundle/locale aliases separately.

The previous fresh batches each produced zero valid proposals; this one produced three, with material semantic issues. Different cohorts prevent a direct accuracy or efficiency comparison. Collection, caching, rate limiting, replay and audit export are suitable for automation. Publishing correct prices and completing full six-month histories remain unfinished work.
