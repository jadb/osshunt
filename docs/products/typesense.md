# Typesense

[Product](https://typesense.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Typesense, Inc. (business); ownership: **private**; funding: **bootstrapped**.

Started 2018 (product-launched); years active: 8; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official About names Typesense Inc. and customer-funded team. Timeline idea 2015, firstopen-source release 2018, Cloud 2020; age uses public product launch, not incorporation. Founder article explicitly explains not raising VC; no outside equity investors identified from these affirmative funding statements. [1](https://typesense.org/about/) [2](https://typesense.org/blog/why-we-are-not-raising-funds/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Typesense Server | free | USD 0/organization | — | — | — | unspecified | free self-hosted engine. Open source engine; infrastructure and Cloud-only workflow features separate. [1](https://typesense.org/docs/guide/install-typesense.html) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No public designation or verified amount found in reviewed pricing page. [1](https://cloud.typesense.org/pricing/calculator) |
| business | Dedicated Cloud cluster | unknown | — | — | — | — | unspecified | vendor commercial cloud. Closest organizational offer; capacity, HA, region, SDN affect calculator. No reliable numeric selected-configuration price extracted; no fixed record/query fee inferred. [1](https://cloud.typesense.org/pricing/calculator) |
| enterprise | Custom Cloud configuration | unknown | — | — | — | — | unspecified | vendor commercial cloud. Configuration assistance/contact exists, but no explicit Enterprise plan or sales quote requirement verified; amount unknown. [1](https://cloud.typesense.org/pricing/calculator) |

## Defensibility assessments

- Opinionated relevance defaults and search UI/client ecosystem lower adoption friction, but open engine and standard API workflows limit proprietary lock-in. [1](https://typesense.org/) [2](https://typesense.org/about/)

## Three product reasons to consider it

1. Typo-tolerant search-as-you-type and faceting support interactive catalog discovery. [1](https://typesense.org/)
2. Vector and semantic retrieval combine exact and meaning-based search within the same engine. [1](https://typesense.org/)
3. Geo search and federated/union results can serve location-aware discovery across collections. [1](https://typesense.org/docs/guide/faqs.html)

## Corporate sponsorship

Status: **business-fallback**. Reviewed project/company sources; no separate corporate sponsor verified. Verified business steward supplied as fallback. [1](https://typesense.org/about/)

- [Typesense, Inc.](https://typesense.org/about/): business-steward. [Evidence](https://typesense.org/about/).

## Self-operation requirements

Mode: **server**. Standalone engine, container/package/mac OS/WSL routes; no mandatory external SQL/cache/queue. Configure API keys, TLS and backups. Cloud provisioning is managed service, not self-host one-click. [1](https://typesense.org/docs/guide/install-typesense.html)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Typesense native binary/package | one-of | runtime | Linux/mac OS native route | Ubuntu 20+/recent Linuxkernel; mac OS 13+ native; Windows WSL available. [1](https://typesense.org/docs/guide/install-typesense.html) |
| Official Docker image | one-of | runtime | Container route | Engine includes persistence; no external SQL/Redis/queue required in documented basic route. [1](https://typesense.org/docs/guide/install-typesense.html) |
| Persistent disk | required | — | Always | Raw records on disk, search index in RAM; SSD recommended. [1](https://typesense.org/docs/guide/system-requirements.html) |
| 3 or 5-node cluster | conditional | — | Recommended production HA | Raft requires 3 nodes to tolerate 1 failure; single node possible without HA. [1](https://typesense.org/docs/guide/system-requirements.html) |
| Local embedding model OR remote embedding provider | conditional | — | Semantic/hybrid search automatic embeddings | Localmodel adds 2–6 GBRAM; remote embedding APIs have separate costs. Keyword search needs neither. [1](https://typesense.org/docs/guide/system-requirements.html) |
| NVIDIA GPU/CUDA/cu DNN | optional | — | Acceleration for local embeddings/voice | CPU inference supported; GPU not mandatory. [1](https://typesense.org/docs/guide/install-typesense.html) |

Resources: CPU At least 2 v CPUs; memory Keyword index typically 2–3 times indexed-field data; localembeddings add 2–6 GB; storage At least raw dataset size; SSD recommended; OS Linux; mac OS 13+; Windowsvia WSL; Dockerhosts. Workload-dependent estimates, not guaranteed capacity. Empty process 20 MB is not a production sizing recommendation. [1](https://typesense.org/docs/guide/install-typesense.html)

## One-click and installer options

Status: **none-found**. Reviewed official deployment instructions; no verified one-click option found. Manual container instructions are not one-click. [1](https://typesense.org/docs/guide/install-typesense.html)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/typesense.json) · [Claim ledger](../../research/profile-claims/typesense.jsonl) · [Research steps](../../research/profile-audits/typesense.md)
