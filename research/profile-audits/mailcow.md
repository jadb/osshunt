> Temporary paths normalized; local setup omitted. Exact original retained locally.

# Research audit — mailcow

Checked 2026-10-21. Chronological research and output decisions.

2. Used web open/search/find on primary official sources. Shared parent-company research reused with provenance retained per product.
3. web.open official system requirements, install docs, component overview and current Compose. Verified Docker >=24/Compose >=2, MariaDB and Redis rather than assuming generic dependencies.
4. web.search Servercow pricing found January 2026 price list and checkout; price list VAT-inclusive differs from checkout presentation. Preserved explicit price-list scope/tax qualifier.
5. web.open README sponsor section identified ColbaNet, Maehdros, Garske. Direct sponsor home pages failed; official indexed searches verified ColbaNet and Garske as businesses, omitted unverified Maehdros identity.
6. web.open Servercow legal notice verified accountable GmbH; company founding/funding not disclosed, left unknown.
7. No official mailcow one-click option found in installation docs; Compose explicitly manual.
8. Wrote profiles/mailcow.json and claims/mailcow.jsonl with group-local build.py save(); validated four unique pricing roles, exactly three functional reasons and 1–3 assessment moats. Unknown values deliberately left null with source limitations.

- Final company age/funding QA: web.open Servercow Über uns and Impressum. Neither gives company founding date or financing; retained null, no substitution of project date.
- Final ledger QA: rebuilt organization field claims with specific source mappings; each investor uses its primary funding/investor URL; public headings/searchable text added to claim locators. Executed group-local finalize.py; validated all23 profiles and companion files.

- Final validation: all23 assigned IDs have profiles, JSONL claims and chronological audit companions. Four unique pricing roles, exactlythree functional assessments and nonempty source/limitation notes checked. Edits restricted to assigned group directory. Final artifacts authoritative; build.py is intermediate and not a regeneration entrypoint.

## Sponsor follow-up

1. Reopened https://raw.githubusercontent.com/mailcow/mailcow-dockerized/master/README.md ; current100$/Month roster remains ColbaNet, Maehdros and Garske.
2. Searched `Maehdros company site:maehdros.com`: no results. Opened https://www.maehdros.com/ (inaccessible) and https://github.com/Maehdros (cache miss). No independent corporate identity verified, so retained Maehdros as an explicitly unresolved roster name in notes; did not silently claim absence or promote an unverified identity.
