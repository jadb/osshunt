# Grafana OSS

[Product](https://grafana.com/oss/grafana/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Grafana Labs (business); ownership: **private**; funding: **funded**.

Started 2014 (company-founded); years active: 12; years in business: 12. Ages are approximate calendar-year differences as of 2026-10-21.

Grafana Labs, formerly Raintank, founded in 2014; Grafana project began in December 2013. Official 2024 announcement documents private primary/secondary financing and named institutional investors; historical participation does not prove current stakes. [1](https://grafana.com/about/grafana-labs/) [2](https://grafana.com/blog/the-story-of-grafana-documentary-the-business-of-open-source/) [3](https://grafana.com/press/2024/08/21/grafana-labs-soars-past-250m-arr-and-5000-customers-completes-270m-primary-and-secondary-transaction-and-named-a-leader-in-the-gartner-magic-quadrant-for-observability-platforms/)

Known investors: [Lightspeed Venture Partners](https://grafana.com/press/2024/08/21/grafana-labs-soars-past-250m-arr-and-5000-customers-completes-270m-primary-and-secondary-transaction-and-named-a-leader-in-the-gartner-magic-quadrant-for-observability-platforms/), [GIC](https://grafana.com/press/2024/08/21/grafana-labs-soars-past-250m-arr-and-5000-customers-completes-270m-primary-and-secondary-transaction-and-named-a-leader-in-the-gartner-magic-quadrant-for-observability-platforms/), [Sequoia Capital](https://grafana.com/press/2024/08/21/grafana-labs-soars-past-250m-arr-and-5000-customers-completes-270m-primary-and-secondary-transaction-and-named-a-leader-in-the-gartner-magic-quadrant-for-observability-platforms/), [Coatue](https://grafana.com/press/2024/08/21/grafana-labs-soars-past-250m-arr-and-5000-customers-completes-270m-primary-and-secondary-transaction-and-named-a-leader-in-the-gartner-magic-quadrant-for-observability-platforms/), [Lead Edge Capital](https://grafana.com/press/2024/08/21/grafana-labs-soars-past-250m-arr-and-5000-customers-completes-270m-primary-and-secondary-transaction-and-named-a-leader-in-the-gartner-magic-quadrant-for-observability-platforms/), [J.P. Morgan](https://grafana.com/press/2024/08/21/grafana-labs-soars-past-250m-arr-and-5000-customers-completes-270m-primary-and-secondary-transaction-and-named-a-leader-in-the-gartner-magic-quadrant-for-observability-platforms/).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Grafana OSS | free | USD 0/organization | — | — | — | unspecified | free self-hosted Grafana core. Open source distribution; infrastructure and optional commercial products separate. [1](https://grafana.com/oss/grafana/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No public designation or verified amount found in reviewed pricing page. [1](https://grafana.com/pricing/) |
| business | Grafana Cloud Pro | published | USD 19/organization | — | — | — | unspecified | vendor commercial cloud. Closest self-serve organizational offer; $19 monthly platform charge plus usage, not an OSS license price. [1](https://grafana.com/pricing/) |
| enterprise | Grafana Cloud Enterprise | published | — | USD 25000/organization | — | — | unspecified | vendor commercial cloud. Starting annual spend commitment, not a fixed all-inclusive subscription or self-host license. [1](https://grafana.com/pricing/) |

## Defensibility assessments

- Plugin/community ecosystem and existing dashboard investment create a defensible integration network and migration friction. [1](https://grafana.com/oss/grafana/)

## Three product reasons to consider it

1. Combine heterogeneous data sources in one dashboard through a large plugin catalog. [1](https://grafana.com/oss/grafana/)
2. Time-series, heatmap and other visualizations let teams inspect different operational data shapes. [1](https://grafana.com/oss/grafana/)
3. Provision dashboards and alerts through software pipelines to keep monitoring aligned with releases. [1](https://grafana.com/oss/grafana/)

## Corporate sponsorship

Status: **business-fallback**. Reviewed project/company sources; no separate corporate sponsor verified. Verified business steward supplied as fallback. [1](https://grafana.com/about/grafana-labs/)

- [Grafana Labs](https://grafana.com/about/grafana-labs/): business-steward. [Evidence](https://grafana.com/about/grafana-labs/).

## Self-operation requirements

Mode: **server**. Binary/package and Docker deployment routes. Production should use MySQL or PostgreSQL; SQLite is an embedded evaluation default. No mandatory standalone cache/queue identified for a single Grafana server. [1](https://grafana.com/docs/grafana/latest/setup-grafana/installation/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Grafana binary/package or Docker image | required | — | Always | Production dependency documented by project. [1](https://grafana.com/docs/grafana/latest/setup-grafana/installation/) |
| MySQL 8.0+ | one-of | metadata-database | Production metadata database option | Production dependency documented by project. [1](https://grafana.com/docs/grafana/latest/setup-grafana/installation/) |
| PostgreSQL 12+ | one-of | metadata-database | Production metadata database option | Production dependency documented by project. [1](https://grafana.com/docs/grafana/latest/setup-grafana/installation/) |
| SQLite 3 embedded database | conditional | — | Default for evaluation/small local instances; explicitly not recommended for production | Production dependency documented by project. [1](https://grafana.com/docs/grafana/latest/setup-grafana/installation/) |
| Telemetry data sources such as Prometheus/Loki/Tempo | conditional | — | As required by dashboard and alert queries | Separate systems with separate sizing; Grafana is not itself their storage backend. [1](https://grafana.com/docs/grafana/latest/setup-grafana/installation/) |
| Image renderer service | conditional | — | When image rendering is required | Separate renderer worker; about 1 GB memory each. [1](https://grafana.com/docs/grafana/latest/setup-grafana/installation/) |
| Redis session store or sticky sessions | conditional | — | Multiple Grafana instances / HA | Alternative session routes; Redis is not mandatory for a single server. [1](https://grafana.com/docs/grafana/latest/setup-grafana/installation/) |

Resources: CPU 1 core evaluation floor; memory 512 MB minimum recommended; production sizing higher; storage not specified; OS Linux, Windows, macOS supported installation routes. Documented evaluation floor covers Grafana process only; production capacity and data backends sized separately. [1](https://grafana.com/docs/grafana/latest/setup-grafana/installation/)

## One-click and installer options

Status: **none-found**. Reviewed official deployment instructions; no verified one-click option found. Manual container instructions are not one-click. [1](https://grafana.com/docs/grafana/latest/setup-grafana/installation/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/grafana.json) · [Claim ledger](../../research/profile-claims/grafana.jsonl) · [Research steps](../../research/profile-audits/grafana.md)
