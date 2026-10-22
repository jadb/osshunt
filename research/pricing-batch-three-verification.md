# Pricing batch three: next twenty tools

**All 20 tools completed collection. The process is repeatable, but automatic pricing extraction remains unready: zero raw plans, zero valid proposals and zero new confirmed observations.** Five tools have clear static priced material the pipeline missed, while other failures require different treatment. The eight earlier confirmed observations remain unchanged.

The [frozen cohort](pricing-batch-three-cohort.json) contains the next 20 previously unsampled paid catalog entries in audience order. Cal.com is included as a commercial offering; `paid` does not imply all components are proprietary. [Acceptance criteria](pricing-batch-three-acceptance.md) preceded collection. Dates and limits match the earlier pilots: June 2025 landings, at most two approved pricing candidates per landing, and pricing captures within 30 days at or before that landing. Pricing discovery reservations remain six calendar months apart. This bounded test is not a complete historical series.

| Measurement | Result |
| --- | --- |
| Tools completed | 20/20 |
| Source requests | 56; all HTTP 200; zero missing response records |
| Live rate-limit / failure pause | None |
| Product outcomes | Six extraction unavailable, five missing landing, eight missing pricing, one error |
| Candidate outcomes | Seven extraction unavailable, five missing captures, one digest error |
| Products with candidate errors / mixed outcomes | 1 / 2 |
| Selected / retained landing records | 15 / 14 |
| Selected / retained pricing records | 8 / 7 |
| Body-cache hits during collection | 0 |
| Raw plan / offer fragments | 0 / 0 |
| Valid proposals / new confirmed observations | 0 / 0 |
| Completed-journal replay | Zero fetch attempts; unchanged journal |

The [request trace](pricing-batch-three-requests.jsonl) records every URL, source phase, timestamp and HTTP status. The [results](pricing-batch-three-results.json) retain original outcomes and additive candidate-level error counts. Adobe's product outcome is `missing_pricing`, but its second candidate failed digest verification; the new audit facets expose both. WeTransfer has a missing first candidate and an unsupported second one. A single product status cannot describe all candidate failures.

## Source review for every tool

The [independent review](pricing-batch-three-review.json) records findings, qualifications, source URLs, dates, hashes and integrity grades. No saved page was executed or replaced with a present-day rendering.

| Tool | Finding | Automation implication |
| --- | --- | --- |
| Front | Verified static pricing tiers, seat limits, billing terms and separate add-ons; parser returned no plans. | Generic card/table structure extraction with units and conditions. |
| Microsoft Outlook | No exact successful landing capture in the fixed window. | Reviewed historical URL/locale aliases; no inference that pricing is absent elsewhere. |
| Adobe Acrobat | Student candidate has no capture; comparison candidate failed digest verification. General pricing hint was outside the two-candidate budget. Landing contains unresolved price fragments. | Edition-aware ranking and explicit mixed-error reporting. Rejected content remains unavailable. |
| Smallpdf | Named plans, features and a free amount are present; paid amounts are placeholders. No defensible paid numbers found in inspected inline state. | Partial structure can be useful; never fill missing prices from trials, ranges or placeholders. |
| Microsoft Teams | No exact successful landing capture in the fixed window. | Reviewed URL/locale aliases; retain product/bundle distinction. |
| Google Meet | Canonical URL returned German content; linked Workspace pricing is outside the configured Meet path. | Observed locale and bundle association require explicit reviewed scope. |
| Wix | Static paid tiers present, but visible currency/tax wording conflicts with embedded locale/currency configuration. | Extract structure while leaving unresolved currency, tax and commitment unknown. |
| Acronis Cyber Protect | No exact successful landing capture in the fixed window. | Source-window gap, not an extraction failure. |
| Backblaze Business Backup | Landing already has a base rate and a separately priced add-on; sibling pricing link is outside scope. | Inspect landing pricing; distinguish Computer Backup from unrelated B2 storage. |
| MASV | No exact successful landing capture in the fixed window. | Source-window gap; no claims about other captures. |
| WeTransfer | Retained pricing body is a JavaScript-required failure fallback; runtime data supplies no plan offers. | Genuine source-content gap. Present-day rendering cannot supply historical prices. |
| Cal.com | Selected landing exceeds the configured response-size limit; no body retained. | Evaluate bounded large-capture handling without weakening integrity checks. |
| Docusign | Landing already contains named eSignature tiers, rates and annual bills. Pricing link uses an unapproved subdomain and path. | Landing-source extraction and reviewed dated host/path association. |
| Expensify | Landing has an incomplete starting rate per member without a billing period; exact query-bearing pricing hint has no capture. | Retain partial evidence and query identity; never assume a monthly rate. |
| SAP Concur | No exact successful landing capture in the fixed window. | Source-window gap, not proof of no paid offering. |
| Spendesk | Verified static pricing describes quote-only base/package and module structure. Second candidate is an unrelated subscription-management feature page. | Support quote-only structure; narrow subscription discovery intent. |
| DocuWare | Landing has no rate structure; exact pricing FAQ hint has no eligible capture. | Missing source; quote-only status is unproven. |
| M-Files | Landing has a trial and editions navigation but no price structure or selected pricing candidate. | Discovery gap; a free trial is not a free recurring plan. |
| Fireflies.ai | Landing has four named USD offers in inert JSON-LD, without billing period, commitment or unit. Exact pricing hint has no capture. | Inspect embedded landing data; an aggregate zero does not make the whole product free. |
| Otter.ai | Static paid/free tiers and separate monthly, annual and education offers exist; parser returned no plans. | Generic structure and billing-variant extraction; do not derive annual totals from rounded monthly amounts. |

Clear static priced sources: Front, Wix and Otter pricing pages, plus Backblaze and Docusign landings. Expensify adds an incomplete landing rate; Fireflies adds embedded offers with unknown billing terms. Smallpdf's free amount does not establish its paid prices. Spendesk is a genuine quote-only structure; WeTransfer is a genuine failure fallback. These distinctions prevent all empty extractions from being incorrectly labelled JavaScript-only or no pricing.

There are no raw offers to review for tuple correctness, so precision is **not estimable**, not 100%. All retained sources were still inspected to find false negatives and source limitations. No product-specific extraction adapter was added for this batch.

## Reproduction and process changes

Collection loaded code at `11c1670`, after the preflight scope fix `3afc9c6`. Run: October 22, 2026, 16:39:51.407–16:49:02.241 UTC, approximately nine minutes 11 seconds. Parser, collector and catalog hashes stayed unchanged throughout. The additive report renderer changed independently; it does not affect source collection or extraction.

The completed frozen replay ran with fetch disabled and counted zero attempts. Journal SHA-256 stayed `73a6751afa281b822be189a677fc54145e68fd8f83172879726b42dfcee77ead`. [Offline evidence verification](pricing-batch-three-evidence.json) checked 23 selected roles: **13 matching archive digests, eight qualified legacy records, two missing bodies, zero integrity errors among retained bodies**. The missing bodies are Adobe's rejected comparison response and Cal.com's oversized landing. HTTP 200 did not make either usable evidence.

```sh
npm run pricing:sample -- \
  --products front,microsoft-outlook,adobe-acrobat,smallpdf,microsoft-teams,google-meet,wix,acronis-cyber-protect,backblaze-business-backup,masv,wetransfer,cal-com,docusign,expensify,sap-concur,spendesk,docuware,m-files,fireflies,otter \
  --from 2025-06-01T00:00:00.000Z --to 2025-06-30T23:59:59.000Z \
  --cache .local/history --out .local/next-twenty-tools/journal.json
npm run pricing:sample-report -- \
  --journal .local/next-twenty-tools/baseline-journal.json \
  --out-dir research --prefix pricing-batch-three
node scripts/verify-pricing-evidence.mjs --cache .local/history \
  --evidence research/pricing-batch-three-evidence.json \
  --out .local/next-twenty-tools/offline-verification.json
```

The first command documents the frozen run. Later parser changes require cached offline evaluation; a changed parser must not resume that frozen journal. A fresh checkout needs the retained private journal and HTML cache; missing cache bodies remain explicit gaps. Raw HTML, private checkpoints and cookies are excluded from public artifacts. Active review/engineering effort was not separately timed.

Three reusable process bugs were fixed and tested independently of the live result:

- Preflight rejected Adobe's approved `.html` landing after deriving its product-directory scope. Shared narrow path matching now accepts the approved exact `.html`/`.htm` root while retaining explicit narrower-scope and sibling exclusions. Preflight errors identify the product and rejected URL. Five regression guards failed with the original defect restored, then passed after the fix.
- A top-level missing-capture outcome obscured Adobe's other candidate integrity failure. Additive candidate status/error facets now expose mixed outcomes without changing product status meanings. Original-defect mutation failed both new audit tests; restored tests passed.
- Broad subscription matching selected Spendesk's subscription-management feature page as pricing. A post-batch correction retains genuine subscription-plan navigation while excluding feature/integration topics. The [offline discovery comparison](pricing-batch-three-discovery-shadow.json) independently rechecked 29 cached landings with zero requests: Spendesk's unrelated second candidate disappeared; the prior cohort's selected sources stayed unchanged, with only an unused Mailchimp integration link removed. Exact retained-anchor regression tests failed under the original matcher and passed with the fix. Original live results remain unchanged.

Final local validation: collection/site build, schema checks, 270 Node tests and five Python tests passed. No new production history Worker deployment or merge was performed.

## What should improve next

1. **Extract structure from landing pages as well as dedicated pricing pages.** Bind named tiers, exact rates, billing variants, units and conditions. Retain unknown fields and add explicit landing-source provenance. Front, Backblaze, Docusign and Otter are useful cached regression cases; Wix tests conflicting locale/tax signals.
2. **Make discovery failures diagnosable.** Retain safe reasons for rejected pricing links. Current link filtering hides blocked Meet and Docusign links before the journal's rejection list; `missing_pricing` therefore needs source review. Add reviewed dated aliases and edition/locale/bundle associations rather than automatically broadening scope.
3. **Model partial, quote-only and unavailable source structures separately.** Smallpdf placeholders, Spendesk quotes, Fireflies incomplete embedded offers and WeTransfer's fallback require distinct outcomes. Keep large-capture and missing-window failures separate from parser misses.

The preceding [20-tool baseline](pricing-twenty-tool-verification.md) also produced zero valid new observations. This run used fewer requests because its source/candidate coverage differed; that is not evidence of better extraction or faster work on equivalent inputs. Further blind batches have limited value until the generic extraction and discovery-diagnostic gaps are addressed. Use the retained evidence as regression cases, then test improved extraction on fresh held-out tools. Collection, immutable caching, replay and audit export can be automated now; correct pricing publication still requires explicit evidence review. Complete six-month histories remain separate unfinished work.
