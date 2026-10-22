# solidtime

[Product](https://www.solidtime.io) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

solidtime GesbR (business); ownership: **private**; funding: **unknown**.

Started unknown (company-founded); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Austrian civil-law partnership; official imprint names Gregor Vostrak and Constantin Graf with50% each. Company founding year and financing history not stated in reviewed primary legal/blog pages. Public beta existed byMay2024, but that is not an exact formation date. Founder ownership alone does not prove bootstrap. [1](https://www.solidtime.io/imprint) [2](https://www.solidtime.io/blog)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open Source | free | EUR 0/organization | — | — | — | unspecified | free self-hosted core. AGPL core includes time tracking; on-premise invoicing and Audit Log require Business or Enterprise commercial license. [1](https://www.solidtime.io/pricing/on-premise) |
| popular | unknown | unknown | — | — | — | — | unspecified | paid product. No explicit Most popular or Recommended designation verified on the official plan page; no plan inferred. [1](https://www.solidtime.io/pricing/on-premise) |
| business | Business (5 users) | published | — | EUR 199/organization with 5 users | — | — | unspecified | paid on-premise license. Selector currently5 users at€199/year exclVAT. Comparison says from€49/year, a smaller configuration; not a conflicting five-user rate. [1](https://www.solidtime.io/pricing/on-premise) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | paid on-premise license. Custom terms for big companies, contact vendor; no numeric amount published. [1](https://www.solidtime.io/pricing/on-premise) |

## Defensibility assessments

- Project/time history, organization roles and report-sharing create moderate workflow switching costs, with the core timer itself offering limited barriers to imitation. [1](https://www.solidtime.io/)

## Three product reasons to consider it

1. Calendar/timesheet editing and desktop activity/idle detection make filling time records easier across different work styles. [1](https://www.solidtime.io/)
2. Project rates and budgets update spend as hours accumulate, helping teams monitor delivery cost. [1](https://www.solidtime.io/)
3. Multi-level report grouping, shareable read-only links and PDF/CSV/Excel exports support client and finance reporting. [1](https://www.solidtime.io/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate financial/in-kind sponsor identified in reviewed official project and business pages. Verified commercial steward included as business fallback; customers, partners and investors are not classified as sponsors. [1](https://www.solidtime.io/imprint)

- [solidtime GesbR](https://www.solidtime.io/imprint): business-steward. [Evidence](https://www.solidtime.io/imprint).

## Self-operation requirements

Mode: **server**. Official Docker production path. PostgreSQL required; queue can use database with worker or nonrecommended sync; no Redis requirement inferred. Gotenberg conditional for PDF generation; local disk versus S3 storage explicit. [1](https://docs.solidtime.io/self-hosting/guides/docker) [2](https://docs.solidtime.io/self-hosting/configuration)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Engine and Docker Compose | required | — | Always | Official image bundles PHP/application/web runtime; manual host PHP stack not required for container route. [1](https://docs.solidtime.io/self-hosting/guides/docker) |
| PostgreSQL | required | — | Always | Only supported SQL backend. Existing managed PostgreSQL or provided database container; not MySQL/SQLite. [1](https://docs.solidtime.io/self-hosting/configuration) |
| Nginx, Traefik or another HTTPS reverse proxy | required | — | Always | Choose one; application container web server does not handle TLS certificates. [1](https://docs.solidtime.io/self-hosting/guides/docker) |
| SMTP server | conditional | — | Delivering notifications, verification and password reset emails | Transactional provider or own relay; log mailer is testing-only alternative. [1](https://docs.solidtime.io/self-hosting/guides/docker) |
| Database queue worker container | conditional | — | Recommended asynchronous production queue mode | QUEUE_CONNECTION=database needs separate worker; sync mode exists but not recommended for production. Redis is not required for documented database queue. [1](https://docs.solidtime.io/self-hosting/configuration) |
| Gotenberg PDF renderer | conditional | — | PDF report/invoice generation | Separate reachable service, supplied as container in guide. [1](https://docs.solidtime.io/self-hosting/configuration) |
| Local persistent disk | one-of | file-storage | Local files or S3-compatible object storage | Private local disk and public disk default path. [1](https://docs.solidtime.io/self-hosting/configuration) |
| S3-compatible object storage | one-of | file-storage | Local files or S3-compatible object storage | Scaleway example documented; external service and API credentials only if this route selected. [1](https://docs.solidtime.io/self-hosting/configuration) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux. Only explicit documented hardware figures included; null means no minimum verified in reviewed installation source. [1](https://docs.solidtime.io/self-hosting/guides/docker)

## One-click and installer options

Status: **none-found**. Reviewed official installation instructions; no current first-party or officially linked one-click or one-command installer verified. Manual package/Compose instructions excluded. [1](https://docs.solidtime.io/self-hosting/guides/docker)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/solidtime.json) · [Claim ledger](../../research/profile-claims/solidtime.jsonl) · [Research steps](../../research/profile-audits/solidtime.md)
