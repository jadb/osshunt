# Search infrastructure

Search engines and APIs for application search, indexing and selected search analytics workloads.

Audience: Product and platform engineering teams. Engineers maintaining search-backed applications; end users benefit indirectly, but most business employees do not procure or operate search infrastructure.

Use-case sources: [1](https://typesense.org/), [2](https://opensearch.org/about/).

- [Algolia](https://www.algolia.com/pricing): USD 0.5/usage/month, monthly billing. Grow usage rate: USD 0.50 per additional 1,000 search requests after 10,000/month; 100,000 records included then USD 0.40 per additional 1,000 records. Monthly billing. This is one usage unit, not a complete monthly subscription cost. [Pricing](https://www.algolia.com/pricing).
- [Elastic Cloud](https://www.elastic.co/pricing/): entry amount unverified/quote, monthly billing. Hosted is resource-based and serverless usage-based, billed monthly or prepaid. Region, capacity, deployment and tier affect cost; no reliable static dollar minimum exposed by the reviewed official pricing pages. [Pricing](https://www.elastic.co/pricing/).

### OpenSearch — A

Foundation-governed open search suite; official principles describe the suite as Apache 2.0, with no paid software edition gates identified. Amazon OpenSearch Service is a separate AWS service, not a foundation-operated SaaS.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/opensearch-project/OpenSearch/blob/ea69463d634e30316a9037e544c0434b4ae80b4a/LICENSE.txt), [edition evidence](https://opensearch.org/about/), [hosting](https://opensearch.org/solutions-providers/), [repository](https://github.com/opensearch-project/OpenSearch).

Service costs/limits: AWS and other providers sell managed hosting; service-specific features and operational tooling are separate from the community distribution.; Self-hosted production clusters require security configuration, capacity planning, backups and upgrades.

Repository: pushed 2026-10-21T22:12:19Z; latest commit 2026-10-21T22:12:19Z; latest published release 3.9.0 (2026-09-29T21:54:18Z). Quick analysis: 7.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Elastic Cloud → OpenSearch: **partial**. Replace selected Elasticsearch search/analytics workloads after version, query, mapping and plugin compatibility review. Migration Assistant supports data/metadata/traffic migration and validation. Self-hosting takes over operations; Elastic proprietary solutions, agents and managed-service features need separate replacement assessment. [1](https://docs.opensearch.org/latest/migration-assistant/) [2](https://opensearch.org/about/) [3](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/index/)

### Typesense — C

GPL search engine has the same core APIs/binaries as Cloud. Tier C records the first-party cloud-only visual search-management workflow; equivalent engine operations remain available through APIs. Paid hosting alone does not drive this classification.

License: GPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/typesense/typesense/blob/66fec878d3e5bff41be13cd1a25c2bbb8313bd77/LICENSE.txt), [edition evidence](https://typesense.org/docs/guide/faqs.html), [hosting](https://cloud.typesense.org/pricing/calculator), [repository](https://github.com/typesense/typesense).

Paid restrictions: First-party visual admin UI for synonyms, overrides and merchandising is Typesense Cloud-only; self-hosted product is API-only.; Cloud team RBAC UI is absent from the self-hosted engine.

Service costs/limits: Cloud adds managed operations, a Search Delivery Network and hosted MCP service; self-hosting requires infrastructure and operational work.

Repository: pushed 2026-10-21T03:31:19Z; latest commit 2026-10-20T12:56:51Z; latest published release v30.2 (2026-04-19T16:00:09Z). Quick analysis: 6.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Algolia → Typesense: **partial**. Reindex exported documents into typed collections; adapt APIs, synonyms and query rules. InstantSearch adapter can retain selected frontend widgets. Native APIs differ; assess personalization and experimentation requirements. Cloud visual admin remains unavailable in the API-only self-hosted engine. [1](https://typesense.org/docs/guide/migrating-from-algolia.html) [2](https://typesense.org/docs/guide/faqs.html)
- Elastic Cloud → Typesense: **different-approach**. Applicable to application search over documents with faceting, typo tolerance or vectors. Rebuild ingestion, schemas and search queries around Typesense APIs. This search engine does not replace the full Elastic Cloud observability/security platform. [1](https://typesense.org/) [2](https://www.elastic.co/pricing/)

[Category research and unresolved questions](../../research/categories/search-infrastructure.json) · [Research audit](../../research/audits/search-infrastructure.md) · [Sourced claims](../../research/claims/search-infrastructure.jsonl)
