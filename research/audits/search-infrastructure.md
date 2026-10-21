> Temporary paths normalized; local operating setup omitted. Original retained locally.

# Search infrastructure refresh — 2026-10-21

2. Read shared GitHub captures for typesense/typesense and opensearch-project/OpenSearch using Python; all metadata, pinned-license, commit and release endpoints succeeded. Decoded pinned license text: GPL-3.0 for Typesense; Apache-2.0 for OpenSearch. Typesense SHA 66fec878d3e5bff41be13cd1a25c2bbb8313bd77; OpenSearch SHA ea69463d634e30316a9037e544c0434b4ae80b4a. Shared authenticated health captures reused rather than repeated.
3. Read web-fetching guide. web.open visited https://typesense.org/, https://typesense.org/pricing/ (redirect https://cloud.typesense.org/pricing/calculator), https://www.algolia.com/pricing/ (canonical no trailing slash), https://www.elastic.co/pricing/. All succeeded. Typesense describes search API, faceting, vectors and clustering; first-party cloud is separately paid infrastructure. Prices require unit review; no total cost inferred from a single usage unit.
4. web.find Algolia Grow/$0.50 and Elastic pricing dollars/Hosted; Algolia Grow monthly usage billing confirmed, including separate record charges; Elastic general page contains no dollar figure. web.open Typesense FAQ, OpenSearch about (redirect /about/), and Migration Assistant docs succeeded.
5. web.find Typesense FAQ feature/GPL: no GPL match, license remains pinned source evidence. Cloud comparison explicitly says core API parity but cloud-only visual admin/merchandising, RBAC and hosted operations. Tier C chosen for missing daily visual management, while documenting API parity. OpenSearch about says whole suite Apache 2.0; no paid software gates found.
6. web.open https://opensearch.org/partners/ failed 404; used actual Solutions Providers navigation https://opensearch.org/solutions-providers/ successfully. https://www.elastic.co/pricing/hosted/ failed cache miss; followed official pricing navigation to https://www.elastic.co/pricing/cloud-hosted?cta=es successfully. These guessed paths should be replaced by navigation in automation.
7. web.click Typesense migration guide https://typesense.org/docs/guide/migrating-from-algolia.html succeeded: APIs not wire-compatible, export/transform/import and rules conversion required; no drop-in claim. OpenSearch Migration Assistant describes moving Elasticsearch data/metadata/live traffic with validation; managed-service parity not asserted.
8. Read shared rsx JSON: Typesense overall 6.2/10 and OpenSearch 7.8/10; scores descriptive only, not recommendation gates. GitHub archive/disabled false for both.
9. web.open official OpenSearch installation docs and AWS OpenSearch Service; web.click foundation navigation https://opensearch.org/foundation/ succeeded. Self-install packages and production security/backup requirements confirmed. AWS service availability recorded separately from foundation governance; hostedOffer=false for community project.
10. web.find hosted Elastic page dollar amounts: no match; price minimum left null with capacity/region/deployment explanation. No retry of failed guessed paths. Algolia entryAmount 0.50 expressly labeled per additional 1,000 requests, not a total monthly price; separate records charge retained.
11. Wrote search-infrastructure.json and 16 source/locator/evidence claim rows with Python; three supported edges: Algolia→Typesense, Elastic Cloud→OpenSearch, selected Elastic Cloud application search→Typesense. No Cartesian Algolia→OpenSearch claim. Only two candidates finalized to prioritize verified boundaries over a quota. OpenSearch listed ahead of Typesense due unrestricted suite versus cloud-only visual management.
12. Validation: parsed JSON and all JSONL records; checked 2 paid, 2 OSS, 3 edges; required claim traceability fields present. No repository or Git operations performed.

## Repeated steps to automate

- Reuse repository/commit/license/release captures and authenticated health snapshot once per canonical repository.
- Follow official pricing navigation rather than guess hosted/pricing URL paths.
- Detect API parity separately from visual daily-workflow gates; cloud UI is software functionality, unlike hosting operations.
- Record price denominator and included allowance beside rate; never present a request-unit price as a subscription.
- Resolve project governance versus commercial provider identity before setting first-party hostedOffer.
