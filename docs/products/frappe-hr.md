# Frappe HR

[Product](https://frappe.io/hr) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Frappe Technologies (business); ownership: **private**; funding: **funded**.

Started 2008 (company-founded); years active: 18; years in business: 18. Ages are approximate calendar-year differences as of 2026-10-21.

For-profit company established 2008; ERP development preceded company. Rainmatter/Zerodha announced $1.35m first external investment in 2020 after 12 years. Funding history is not proof of present investor shareholding. [1](https://frappe.io/welcome) [2](https://frappe.io/about) [3](https://frappe.io/blog/announcements/frappe-zerodha)

Known investors: [Rainmatter / Zerodha](https://frappe.io/blog/announcements/frappe-zerodha).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Self-hosted core | free | USD 0/organization | — | — | — | unspecified | free self-hosted software. No software license fee; hosting and implementation separate. [1](https://frappe.io/hr/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | paid product. No explicit Most popular or Recommended designation verified on the official plan page; no plan inferred. [1](https://frappe.io/hr/pricing) |
| business | Frappe Cloud Servers | published | USD 20/server | — | — | — | unspecified | vendor commercial cloud hosting. Server hosting starts at $20/month; not a per-user software fee. Sites start at $5/month; stronger dedicated options start $125/month. Resource usage and implementation extra. [1](https://frappe.io/hr/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | vendor enterprise hosting/support services. Official page directs enterprise needs to solution consultants; custom quote, no numeric software-license fee. [1](https://frappe.io/hr/pricing) |

## Defensibility assessments

- Integrated applications on the Frappe data model and accumulated process customizations can create workflow switching costs. [1](https://frappe.io/hr)

## Three product reasons to consider it

1. Payroll integrates with ERPNext accounting so salary transactions need less cross-system reconciliation. [1](https://frappe.io/hr)
2. Rosters, mobile check-ins and automatic attendance connect shift planning with employee attendance records. [1](https://frappe.io/hr)
3. Custom forms, approval workflows and reports let HR adapt processes to its own policies. [1](https://frappe.io/hr)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate financial/in-kind sponsor identified in reviewed official project and business pages. Verified commercial steward included as business fallback; customers, partners and investors are not classified as sponsors. [1](https://frappe.io/about)

- [Frappe Technologies](https://frappe.io/about): business-steward. [Evidence](https://frappe.io/about).

## Self-operation requirements

Mode: **server**. Use native Bench or official Docker production setup. MariaDB is the verified default for these applications. Framework installation mentions PostgreSQL, but this is not asserted as a supported ERPNext/HR application backend. No separate object store required by default; local site volumes used. Branch-specific version table preserved. [1](https://docs.frappe.io/framework/user/en/installation) [2](https://raw.githubusercontent.com/frappe/erpnext/develop/README.md) [3](https://raw.githubusercontent.com/frappe/frappe_docker/main/compose.yaml)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| MariaDB | required | — | Always | Default application database: 10.6.6+ for v14/v15; current table lists 11.8 for v16/develop. Framework mentions PostgreSQL alternative; application compatibility must be checked, not assumed. [1](https://docs.frappe.io/framework/user/en/installation) |
| Python and Frappe Bench | required | — | Always | v15 Python 3.10+ (3.10–3.13 noted); current v16/develop table lists Python 3.14. Match app branch to Framework branch. [1](https://docs.frappe.io/framework/user/en/installation) |
| Node.js and Yarn | required | — | Always | v15 Node 18+; v16/develop Node 24 and Yarn 1.22+ in current table. Node also supplies websocket service. [1](https://docs.frappe.io/framework/user/en/installation) |
| Redis | one-of | cache-and-queue | Redis or Valkey | Cache and background-job queue; Redis 6+ in requirements table. [1](https://docs.frappe.io/framework/user/en/installation) |
| Valkey | one-of | cache-and-queue | Redis or Valkey | Documented Redis-compatible alternative, version 6+ table. [1](https://docs.frappe.io/framework/user/en/installation) |
| Nginx, application workers, queue workers and scheduler | required | — | Always | Official container stack includes frontend, backend, websocket, short/long queue workers and scheduler; these services are not optional for full production behavior. [1](https://raw.githubusercontent.com/frappe/frappe_docker/main/compose.yaml) |
| wkhtmltopdf | conditional | — | PDF rendering on v16 and older | v17 replaces it with Chromium; avoid mixing branch requirements. [1](https://docs.frappe.io/framework/user/en/installation) |
| SMTP service | conditional | — | Outgoing email notifications | Mail service configuration needed for actual email delivery; no mandatory paid provider established. [1](https://docs.frappe.io/framework/user/en/installation) |
| Docker Engine and Compose v2 | conditional | — | Official container deployment route | Container runtime packages application dependencies; native Bench route is an alternative. [1](https://raw.githubusercontent.com/frappe/erpnext/develop/README.md) |

Resources: CPU not specified; memory not specified; storage not specified; OS Debian/Ubuntu production; macOS documented; Windows via WSL. Only explicit documented hardware figures included; null means no minimum verified in reviewed installation source. [1](https://docs.frappe.io/framework/user/en/installation)

## One-click and installer options

Status: **none-found**. Reviewed official installation instructions; no current first-party or officially linked one-click or one-command installer verified. Manual package/Compose instructions excluded. [1](https://docs.frappe.io/framework/user/en/installation)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/frappe-hr.json) · [Claim ledger](../../research/profile-claims/frappe-hr.jsonl) · [Research steps](../../research/profile-audits/frappe-hr.md)
