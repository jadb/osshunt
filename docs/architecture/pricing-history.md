# Historical pricing observations

Proposed 2026-10-21. User scope: discover pricing pages from archived landing pages, extract their structure and prices, and track changes over time. Pricing checks use six calendar months; website-image history retains its separate 30-day interval. This document is a design for review, not a claim that historical prices have already been collected.

## Source and cadence

Support all 227 catalog products and alternative candidates, including commercial offerings around OSS projects. Each observation identifies the product, edition and deployment scope; hosted commercial prices must not become prices for the free self-hosted core.

Use existing Internet Archive HTML and embedded structured data. No live-page price fallback, current-page rendering, screenshot OCR, archived script execution or Save Page Now requests. The image player continues to use only stored archive images; reading archived HTML is a separate pricing operation.

Pricing discovery becomes eligible six calendar months after its last attempted check, independently of image discovery. Calendar-month addition uses UTC and clamps an unavailable day to the target month's final day: August31 plus six months is February28 or29, not a fixed180-day offset. Initial historical selection likewise keeps observations at least six calendar months apart using actual capture timestamps. A later successful check adds at most one newest eligible pricing observation per target.

Checks run through visits or an explicit batch, matching the existing fetch mechanism. No scheduled crawler is implied. Empty and genuinely failed archive checks retain the six-month gate. An archive-wide cooldown denied before an outbound request does not consume it. Cached source bodies never refetch. Initial historical body retrieval/extraction is resumable from a persisted inventory without rerunning an already consumed discovery pass.

Inventory landing HTML independently of screenshot availability. Historical anchors start at the earliest successful landing HTML capture, then advance by six calendar months from the previous anchor through the inventory cutoff. At each anchor select the latest landing HTML capture at or before it, within 30 days. An absent capture records a gap. Apply the pricing lookup below, then enforce that its actual pricing timestamp is at least six calendar months after the previous retained pricing timestamp; an earlier or duplicate result records a sampling gap rather than an observation. This final check prevents lookup offsets from shortening the requested interval. Future checks use their own six-month eligibility gate and the latest eligible landing capture; image dates never generate pricing anchors.

Persist the inventory cutoff, pagination cursors, unfinished URL queries, selected anchors and extraction progress under the original reservation. An interrupted initial inventory remains `incomplete`, never `empty`. Resuming that same inventory after cooldown is continuation of the reserved pass; it may retrieve outstanding pages without opening a new discovery pass. A fresh index/discovery pass remains subject to the six-month gate.

The Internet Archive's CDX `collapse=timestamp:6` groups by year/month prefix; it does **not** implement a six-month interval. Perform calendar-month selection in application code. [CDX documentation](https://github.com/internetarchive/wayback/tree/master/wayback-cdx-server).

## Discover the pricing page

For each historical pricing anchor:

1. Select the landing HTML record using the independent anchor rule above. Keep anchor, HTML and eventual image timestamps and offsets separately; never claim they are simultaneous.
2. Read its archived anchors and labels. Resolve relative links against that capture's original landing URL, including a valid archived base URL; unwrap archive replay links back to their original target. Retain anchor text, locator and exact landing replay URL as discovery evidence.
3. Rank explicit pricing, plans, subscription and plan-comparison links. Require the correct product/edition scope. A repository's global GitHub pricing link or another product in a vendor navigation menu is not that project's pricing page.
4. Treat already sourced current pricing URLs as fallback candidates, labelled `current-source-hint`; they do not prove that the URL was linked historically. Historical domain/brand moves require an evidenced alias record. Do not guess `/pricing` and publish it as discovered evidence.
5. Query the exact candidate URL's archived HTML records. Select the most recent successful pricing capture at or before the anchor, at most30days older. Record missing coverage explicitly rather than substituting a future or much older price. Future checks may use the latest archived landing capture even when no new screenshot exists.

Pages without screenshot images can still have pricing histories. An observation becomes eligible for image association only when every historical capture in its discovery chain is at or before the image timestamp: use the maximum of landing, pricing and any alias-evidence capture timestamps. Link each monthly image to the latest eligible observation, clearly showing its actual pricing date and age. A June 1 pricing capture discovered through a June 30 landing capture cannot attach to a June 15 image. If the pricing capture is over six calendar months old, show it as stale last-known evidence, not as the price at that frame. Missing initial coverage stays unknown.

Fetches remain limited to the archive host. Original targets must be public HTTP(S) identifiers, restricted to the catalog product and explicitly approved vendor hosts. Follow no unexpected replay host or date substitution. Historical HTML and pricing pages can have different capture times; every retained link must reference the actual selected record.

## What an observation contains

Use a new collections-format dataset, separate from the existing current product profiles:

| Field group | Retained information |
| --- | --- |
| Identity | Stable observation ID, product ID, edition/deployment scope, extractor version, review state |
| Dates | Requested anchor, landing capture, pricing capture, latest historical evidence timestamp, fetched-at, checked-at and next eligible check |
| Discovery | Original URLs, exact landing/pricing archive URLs, link text/locator, discovered-link versus current-source hint |
| Plans | Original tier names and order, explicit recommended/popular labels, free/trial/paid/quote/unknown status |
| Offers | Literal displayed amount, exact decimal value, explicit currency, billing frequency, commitment, denominator and minimum quantity |
| Qualifications | Region/locale, tax treatment if stated, introductory discounts, promotions, starting-at/range/volume conditions |
| Structure | Pricing cards and groups, feature categories, plan comparisons, included/excluded features, limits and add-ons with source locators |
| Evidence | Source body SHA-256, original archive digest when present, exact source text/structured-data path for each extracted field |
| Quality | Complete/partial/unavailable extraction, unresolved ambiguity, review decisions, missing or stale coverage |

Keep `$12/month billed annually` distinct from a monthly subscription charge and from an annual total. Preserve currency ambiguity: `$` alone does not establish USD. Do not turn quote-only plans into zero, invent minimum seats, infer a most-popular plan or assume missing features are excluded. Any derived annual total must be labelled derived and retain its formula; observed source values remain authoritative.

## Extraction and review

Parse archived HTML as data with a standards-based HTML parser, shared between Node and the Worker bundle. Use parse5, subject to the repository's dependency vetting, exact-version pinning and edge-runtime fixture verification before installation. Parse embedded JSON-LD or serialized JSON only as inert data; never evaluate scripts or fetch current assets. [Parser documentation](https://parse5.js.org/).

Start with explicitly structured offers and semantically grouped pricing cards/tables. Product-specific adapters handle the verified page structures that generic extraction cannot interpret. Retain bounded card/section evidence instead of matching every currency-like number on the page. Funding totals, testimonials, savings banners and footer amounts are not automatically plan prices.

Every field needs a source locator and value evidence. Proposed normalized observations enter a review queue; ambiguous, partial or template-unknown results stay unverified. Publish confirmed structured observations only. Human review can confirm a new template or reconcile a plan rename; a parser confidence score alone does not establish a price. No archived pricing amounts will be populated from the current profile as a shortcut.

The catalog maintainer confirms each observation against its retained evidence. Planned local commands are `npm run pricing:review -- export --product <id> --out <file>` and `npm run pricing:review -- import --file <file>`; these interfaces are part of this proposal, not existing commands. Export includes proposed facts, source locators, hashes and unresolved fields. Import validates unchanged evidence hashes and schema, records reviewer/date/decision, and publishes only explicitly confirmed observations. Confirming a template alone does not confirm later observations. Review can reject a proposal or confirm supported fields while retaining explicit unknowns; every published fact must have checked evidence.

Compare confirmed observations by product, edition, currency, region, quantity basis, billing period, commitment and promotion status. Preserve tier additions/removals and feature-limit changes separately from amount changes. Plan renames need explicit identity reconciliation; do not infer a price increase by joining similarly named tiers or silently converting currencies.

## Storage, access and integration

Reuse D1 metadata/reservations, R2 immutable source bodies and the local filesystem preview. Share the archive-wide cooldown and descriptive request headers with image retrieval; six-month pricing reservations use their own keys. Reuse capture bodies across observations and products only where exact source identity matches. Keep source SHA-256 and archive record identity even when an identical body appears at several dates.

Raw HTML remains private evidence storage, never inserted into the public page or returned as executable HTML. Public collections expose structured facts, short field evidence and archive links. Source bodies, failed attempts, cursors and extraction versions survive restarts. A slow or partial backfill resumes its known capture inventory; it does not bypass source cooldowns or create observations closer than six calendar months apart.

Coverage includes every catalog ID and distinguishes awaiting discovery, archive cooldown, incomplete inventory, missing landing capture, missing pricing capture, wrong product scope, extraction unavailable, review pending, confirmed pricing and an explicitly evidenced absence of a commercial offer. Retain these outcomes per anchor as well as product summaries. A current-source hint remains labelled in published provenance and never counts as a verified historical landing-to-pricing link. Catalog support does not imply that all products will obtain confirmed histories.

Integrate a pricing-history section with the product view and embeddable player. Show the pricing observation's own date, source link, verification state and gap/staleness warning. A monthly image must not silently advance the pricing check. Existing permanent image delivery and iframe embedding continue to work independently.

## Verification and acceptance

- Calendar tests cover end-of-month clamping, leap years, exact six-month boundaries and unchanged30-day image gates.
- Archive fixtures cover rewritten/relative/base links, product scope, URL/domain moves, missing captures, incomplete pagination, replay-date drift and global429 cooldowns.
- Extraction fixtures cover monthly versus annual commitment, quote/free plans, unknown currency, regional offers, promotions, volume tiers, limits, comparison tables and missing client-rendered prices. Include decimal locales (`1.299,00` / `1,299.00`) and hidden monthly/annual variants whose active state is unknown.
- Sampling fixtures cover image-free products, independent anchor generation, actual pricing-date spacing after offsets, and future discovery evidence excluded from earlier frames.
- Restart/concurrency tests prove one eligible pricing discovery across visitors, preserved failed attempts and reusable immutable bodies. Collection validation rejects unknown products and unsupported evidence.
- Confirm two archived historical examples from different products before broad backfill, each with a landing-to-pricing link chain, actual source dates and reviewed plans/prices. Source cooldowns take precedence over collecting those examples immediately.
- Existing catalog/profile/image/embed tests continue to pass. Publish a command/source audit and explicit coverage counts; no assertion that all227 products have recoverable archived pricing pages.

## Feasibility findings and limits

The existing current-profile source inventory contains pricing-like URL paths for165/227 products, including plan pages, comparison pages and billing help. These are discovery hints; archive availability and historical product fit remain unverified. Existing code already provides archive headers, exact-date guards, immutable cache semantics and a shared rate-limit cooldown.

At design time, the last recorded archive-wide cooldown extends to2026-10-22T02:58:03.106Z. No new pricing-page fetch has been made during it. Missing HTML, unarchived JavaScript-populated prices and unverified templates will produce gaps or review items, not reconstructed prices. Six-month observations show differences between captured dates; they cannot establish the exact date a price changed between those observations.
