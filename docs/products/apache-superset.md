# Apache Superset

[Product](https://superset.apache.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Apache Software Foundation / Superset PMC (foundation); ownership: **nonprofit**; funding: **not-applicable**.

Started 1999 (company-founded); years active: 27; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

ASF is a US 501(c)(3) charitable foundation active since 1999, not a business; age records legal steward formation rather than Superset project start. Superset is ASF project; no company equity investors. Foundation donors are separate sponsors; exact Superset start year not verified here. [1](https://www.apache.org/foundation/) [2](https://superset.apache.org/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Apache Superset | free | USD 0/organization | — | — | — | unspecified | free self-hosted project. Apache 2.0 distribution; own infrastructure/operations separate. [1](https://superset.apache.org/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No public designation or verified amount found in reviewed pricing page. [1](https://superset.apache.org/) |
| business | unknown | not-offered | — | — | — | — | unspecified | ASF commercial plan. No ASF Business subscription identified. Preset/other vendors are distinct businesses. [1](https://superset.apache.org/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | ASF commercial plan. No ASF Enterprise license offer identified; project describes enterprise-ready capabilities without paid tier. [1](https://superset.apache.org/) |

## Defensibility assessments

- Broad connectors, visualization ecosystem and dashboard investment provide community/workflow defensibility without an exclusive proprietary engine. [1](https://superset.apache.org/)

## Three product reasons to consider it

1. SQL Lab and visual exploration support both SQL specialists and dashboard builders. [1](https://superset.apache.org/)
2. Many chart types and interactive dashboard filters support visual exploration across datasets. [1](https://superset.apache.org/)
3. A semantic layer and broad SQL database connectivity centralize reusable metrics across warehouses. [1](https://superset.apache.org/)

## Corporate sponsorship

Status: **identified**. ASF lists AWS, Google and Microsoft as Platinum Foundation sponsors. These fund the steward foundation generally; no Superset-specific earmarking or equity investment asserted. [1](https://www.apache.org/foundation/sponsors)

- [Amazon Web Services](https://aws.amazon.com): corporate-sponsor. [Evidence](https://www.apache.org/foundation/sponsors).
- [Google](https://google.com): corporate-sponsor. [Evidence](https://www.apache.org/foundation/sponsors).
- [Microsoft](https://microsoft.com): corporate-sponsor. [Evidence](https://www.apache.org/foundation/sponsors).

## Self-operation requirements

Mode: **server**. Stable 6.1 source confirms application/Postgre SQL/Redis/Celery example, but explicitly states Compose unsupported for production. Use hardened production WSGI/container deployment with external metadata DB; Next admin architecture consulted only for established optional-service roles. SQLite default is evaluation-only, not production. [1](https://superset.apache.org/admin-docs/installation/architecture/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Superset Python application with production WSGI server | required | — | Always | Stable 6.1 compose uses app-gunicorn; Python package or built container route. [1](https://raw.githubusercontent.com/apache/superset/6.1.0/docker-compose-non-dev.yml) |
| Postgre SQL | one-of | metadata-database | Production metadata option | Stable 6.1 compose example uses Postgres 17; live admin docs marked Next are architectural reference only. [1](https://superset.apache.org/admin-docs/installation/architecture/) |
| My SQL | one-of | metadata-database | Alternative production metadata store | Production dependency documented by project. [1](https://superset.apache.org/admin-docs/installation/architecture/) |
| SQLAlchemy database drivers and connected analytical database | required | — | Always | Warehouse/source connections separate from metadata; lean images need selected driver installation. [1](https://superset.apache.org/admin-docs/installation/installation-methods/) |
| Redis or another supported cache/broker | conditional | — | Caching/async/report functions | Redis 7 in 6.1 example; no standalone cache required for every basic synchronous dashboard. [1](https://superset.apache.org/admin-docs/installation/architecture/) |
| Celery worker and beat | conditional | — | Async SQL, alerts/reports or thumbnails | Included in stable compose; configured separately on package route. [1](https://superset.apache.org/admin-docs/installation/architecture/) |
| Headless browser and email/Slack transport | conditional | — | Rendered scheduled alerts/reports | Requires browser/transport setup; not core SQL dashboard prerequisite. [1](https://superset.apache.org/admin-docs/installation/installation-methods/) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. No universal production hardware minimum verified; size to actual workload. [1](https://superset.apache.org/admin-docs/installation/architecture/)

## One-click and installer options

Status: **none-found**. Reviewed official deployment instructions; no verified one-click option found. Manual container instructions are not one-click. [1](https://superset.apache.org/admin-docs/installation/architecture/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/apache-superset.json) · [Claim ledger](../../research/profile-claims/apache-superset.jsonl) · [Research steps](../../research/profile-audits/apache-superset.md)
