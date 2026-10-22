# Manual recovery from saved pricing sources

The earlier parser results understated recoverable evidence. Manual curation adds **16 products with positive numerical prices**, bringing the collection from 13 to **29 such products**. 37 products have some reviewed structure; this larger count includes free, trial, quote-only and unknown-price records and is not a numerical-price success count.

92 observations, 239 plan records and 370 offer records now publish. Offer counts include billing variants, introductory promotions, explicit reference amounts, annual equivalents, zeros and quotes; they are not unique paid subscriptions. All observations remain partial. These are historical sampled snapshots, not complete price histories or current prices.

No reusable site reader was required. Manual candidates use producer `manual-1.0.0`, exact retained captures, SHA256, archive-integrity grades and source locators. Every imported group received an independent source review before normal export/import checks. Unsupported currency, commitment, unit and limits remain unknown. Separate product families/deployments use explicit scopes; no artificial promotional scopes bypass six-month spacing. Webflow Site was extended with Business; prior Basic/CMS objects remain unchanged. All other 12 existing observation records remain unchanged.

## Verification

- Zero source requests; original three journals unchanged byte-for-byte.
- All 70 saved product states, reservations and discovery gates unchanged.
- 184 landing/pricing body checks passed against immutable saved hashes, transport and archive-integrity evidence.
- All original 13 observations retain every prior plan, price and qualification unchanged.
- Original archive digests remain unverified where qualified as legacy; explicit editorial acceptance retains those warnings rather than upgrading integrity.
- Strict full-catalog schema, scope, date and six-month-spacing checks run during import and collection build.

[Machine-readable counts, evidence and remaining gaps](pricing-manual-recovery-results.json). The original blind-run reports remain unchanged. Manual recovery does not measure general automated extraction success.

## Method and repeatable steps

1. Freeze saved cohort journals, product states and confirmed records.
2. Load selected immutable source bodies locally; verify body hashes and retained archive-integrity grades. No replacement fetch.
3. Inspect visible cards, tables and embedded product data. Transcribe named plans, amounts, units, billing periods, commitment, quantities, promotions, and exact field locators. Retain uncertain facts as research instead of inventing comparable prices.
4. Independently reconcile numerical values and qualifiers against those same saved bodies. Correct source-specific conflicts before review export.
5. Stage strict manual candidates; export review documents; confirm unchanged candidates using normal body/integrity/schema guards. Preserve private review decisions and inspection logs.
6. Rebuild collection, run existing checks and compare frozen journals, original records and all reservation states. Useful automation targets: evidence lookup by identity/offset, repeated qualification checks, duplicate-card reconciliation and source-bound proposal staging. Semantic conflicts still require review.

Repository checks: `npm run build`, `npm run check`, `npm test`. These verify integration and regressions; they do not make manual transcription a reusable reader.

Build, catalog/profile validation, 356 existing Node tests and five Python tests pass.

Jira and Confluence: [108 raw serialized pricing schedules](pricing-manual-atlassian-research.json), including 1,387 exact monetary tokens, retained with currency, billing cycle, quantity tiers and field locators. Their currency-dependent amount scaling remains unproven; these are research values, excluded from confirmed-price counts. Google Workspace promotional facts from a second same-period capture are also retained in the results research section rather than merged across dates.

## All 70 sampled tools

| Tool | Reviewed result | Observations | Plans | Offers |
| --- | --- | ---: | ---: | ---: |
| 1Password | quote only | 1 | 3 | 3 |
| Acronis Cyber Protect | no confirmed observation | 0 | 0 | 0 |
| Adobe Acrobat | structure only | 1 | 2 | 0 |
| Adobe Lightroom | no confirmed observation | 0 | 0 | 0 |
| Adobe Photoshop | no confirmed observation | 0 | 0 | 0 |
| Adobe Premiere Pro | no confirmed observation | 0 | 0 | 0 |
| Airtable | positive price | 1 | 4 | 4 |
| Asana | positive price | 1 | 5 | 7 |
| Backblaze Business Backup | positive price | 1 | 2 | 3 |
| BigCommerce | quote only | 1 | 1 | 1 |
| Bitwarden | no confirmed observation | 0 | 0 | 0 |
| Buffer | positive price | 1 | 3 | 5 |
| Cal.com | no confirmed observation | 0 | 0 | 0 |
| Calendly | positive price | 1 | 4 | 4 |
| Confluence | no confirmed observation | 0 | 0 | 0 |
| Datadog | positive price | 35 | 80 | 156 |
| Docebo | no confirmed observation | 0 | 0 | 0 |
| Docusign | positive price | 1 | 4 | 7 |
| DocuWare | no confirmed observation | 0 | 0 | 0 |
| Dropbox | positive price | 1 | 3 | 3 |
| Expensify | positive price | 1 | 2 | 2 |
| FigJam | no confirmed observation | 0 | 0 | 0 |
| Figma Design | positive price | 1 | 4 | 10 |
| Final Cut Pro | no confirmed observation | 0 | 0 | 0 |
| Fireflies.ai | positive price | 1 | 4 | 4 |
| Front | positive price | 1 | 8 | 8 |
| Ghost | no confirmed observation | 0 | 0 | 0 |
| Google Meet | free only | 1 | 1 | 1 |
| Google Workspace | positive price | 1 | 4 | 7 |
| Harvest | no confirmed observation | 0 | 0 | 0 |
| Hootsuite | structure only | 2 | 4 | 2 |
| HubSpot | positive price | 1 | 4 | 5 |
| Intercom | positive price | 3 | 5 | 5 |
| Jira | no confirmed observation | 0 | 0 | 0 |
| Linear | no confirmed observation | 0 | 0 | 0 |
| Loom | no confirmed observation | 0 | 0 | 0 |
| Lucidchart | no confirmed observation | 0 | 0 | 0 |
| M-Files | trial only | 1 | 1 | 1 |
| Mailchimp | positive price | 1 | 4 | 7 |
| Make | no confirmed observation | 0 | 0 | 0 |
| MASV | no confirmed observation | 0 | 0 | 0 |
| Mattermost Team Edition | positive price | 1 | 1 | 1 |
| Microsoft 365 | positive price | 3 | 8 | 8 |
| Microsoft Outlook | no confirmed observation | 0 | 0 | 0 |
| Microsoft Teams | no confirmed observation | 0 | 0 | 0 |
| Microsoft Visio | no confirmed observation | 0 | 0 | 0 |
| Miro | no confirmed observation | 0 | 0 | 0 |
| Notion | positive price | 1 | 4 | 4 |
| Otter.ai | positive price | 1 | 4 | 9 |
| Passbolt Community Edition | positive price | 5 | 5 | 6 |
| QuickBooks Online | positive price | 1 | 4 | 8 |
| Salesforce | no confirmed observation | 0 | 0 | 0 |
| SAP Concur | no confirmed observation | 0 | 0 | 0 |
| Sentry | no confirmed observation | 0 | 0 | 0 |
| Shopify | no confirmed observation | 0 | 0 | 0 |
| Slack | no confirmed observation | 0 | 0 | 0 |
| Smallpdf | free only | 1 | 4 | 5 |
| Spendesk | quote only | 1 | 7 | 7 |
| Squarespace | no confirmed observation | 0 | 0 | 0 |
| TalentLMS | no confirmed observation | 0 | 0 | 0 |
| Toggl Track | positive price | 1 | 4 | 6 |
| Trello | positive price | 1 | 4 | 7 |
| Typeform | no confirmed observation | 0 | 0 | 0 |
| Webflow | positive price | 5 | 12 | 24 |
| WeTransfer | no confirmed observation | 0 | 0 | 0 |
| Wix | positive price | 1 | 4 | 4 |
| Xero | no confirmed observation | 0 | 0 | 0 |
| Zapier | positive price | 5 | 8 | 8 |
| Zendesk | positive price | 5 | 14 | 18 |
| Zoom | positive price | 1 | 4 | 10 |
