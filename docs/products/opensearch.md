# OpenSearch

[Product](https://opensearch.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Open Search Software Foundation (foundation); ownership: **nonprofit**; funding: **not-applicable**.

Started 2021 (product-launched); years active: 5; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Parent: Linux Foundation project.

Open Search 1.0 first stable launch July 2021; this is product age. Open Search Software Foundation formed September 2024 within Linux Foundation; nonprofit governance/member funding, no equity investors. Paid member support separate from foundation-operated software pricing. [1](https://opensearch.org/foundation/) [2](https://opensearch.org/blog/happy-fourth-birthday-opensearch/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open Search | free | USD 0/organization | — | — | — | unspecified | free self-hosted project. Apache 2.0 suite; infrastructure/provider fees separate. [1](https://opensearch.org/about/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No public designation or verified amount found in reviewed pricing page. [1](https://opensearch.org/about/) |
| business | unknown | not-offered | — | — | — | — | unspecified | foundation commercial software plan. No foundation Business edition identified; managed services from AWS/others are separate offers. [1](https://opensearch.org/about/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | foundation commercial software plan. No foundation Enterprise license plan identified; paid foundation membership is not a product subscription. [1](https://opensearch.org/about/) |

## Defensibility assessments

- Lucene-based APIs, plugins and multi-company governance provide compatibility and ecosystem defensibility, while open licensing limits exclusive engine control. [1](https://opensearch.org/about/) [2](https://opensearch.org/foundation/)

## Three product reasons to consider it

1. Full-text and vector search support hybrid retrieval over a shared search platform. [1](https://opensearch.org/about/)
2. Dashboards, log analytics and anomaly detection combine search with operational investigation. [1](https://opensearch.org/about/)
3. Security analytics and event correlation extend indexed data into threat investigation workflows. [1](https://opensearch.org/about/)

## Corporate sponsorship

Status: **identified**. Current September 2026 announcement identifies AWS, IBM, SAP, Uber as Premier members. Foundation page documents paid Premier membership funding; these are corporate foundation supporters, not equity investors or mere customers. [1](https://opensearch.org/announcements/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members/) [2](https://opensearch.org/foundation/)

- [Amazon Web Services](https://aws.amazon.com): corporate-sponsor. [Evidence](https://opensearch.org/announcements/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members/).
- [IBM](https://www.ibm.com): corporate-sponsor. [Evidence](https://opensearch.org/announcements/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members/).
- [SAP](https://www.sap.com): corporate-sponsor. [Evidence](https://opensearch.org/announcements/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members/).
- [Uber](https://www.uber.com): corporate-sponsor. [Evidence](https://opensearch.org/announcements/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members/).

## Self-operation requirements

Mode: **server**. Current 3.9.0 tarball documented; JDK bundled. No mandatory external Postgres/My SQL/Redis/Kafka for engine. Docker sample security is demonstration-only; production requires authentication/TLS and HA planning. [1](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/index/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Open Search Java runtime | required | — | Always | Tarball self-contained with bundled JDK; alternate compatible local JDK possible. Native/package or Docker/Kubernetes routes. [1](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/tar/) |
| Persistent local storage and tuned host settings | required | — | Always | vm.max_map_count 262144; avoid swapping. Core engine stores indexes without external SQL backend. [1](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/tar/) |
| Multiple Open Search nodes | conditional | — | Production availability | Guide recommends dedicated manager nodes plus multiple data-serving nodes. [1](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/index/) |
| TLS certificates and authentication/role configuration | required | — | Always | Replace demo certificates/users for production; internal users OR optional SAML/OIDC/LDAP provider. [1](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/index/) |
| Open Search Dashboards | optional | — | Web visualization UI | Separate service; not required for REST search engine. [1](https://opensearch.org/about/) |
| Data Prepper | optional | — | Ingestion transformation pipelines | Not required for direct indexing. [1](https://opensearch.org/about/) |
| Snapshot repository / object storage | conditional | — | Backups and recovery | Configure snapshots; not a universal required external SQL/cache/queue. [1](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/index/) |

Resources: CPU not specified; memory Docker Desktop host allocation at least 4 GB for documented example; storage not specified; OS Linux packages/tarball; Windows; compatible Dockerhosts inclmac OS. Docker example allocation is not universal production minimum; cluster workload determines sizing. [1](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/index/)

## One-click and installer options

Status: **none-found**. Reviewed official deployment instructions; no verified one-click option found. Manual container instructions are not one-click. [1](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/index/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/opensearch.json) · [Claim ledger](../../research/profile-claims/opensearch.jsonl) · [Research steps](../../research/profile-audits/opensearch.md)
