# Odoo Community

[Product](https://www.odoo.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Odoo S.A. (business); ownership: **private**; funding: **funded**.

Started 2002 (company-founded); years active: 24; years in business: 24. Ages are approximate calendar-year differences as of 2026-10-21.

Company announcement dates incorporation/founding to April 2002; product history is often dated 2005 (TinyERP). Uses company-founded basis. 2024 €500m transaction was secondary capital, not all new operating cash. Listed backers include current and selling historical holders; Summit remained largest institutional shareholder at announcement. [1](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508)

Known investors: [CapitalG](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508), [Sequoia Capital](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508), [BlackRock](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508), [Mubadala Investment Company](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508), [HarbourVest Partners](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508), [AVP](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508), [Alkeon](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508), [Summit Partners](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508), [Noshaq](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508), [Wallonie Entreprendre](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community | free | USD 0/organization | — | — | — | unspecified | free self-hosted Community core. Community software download is free; infrastructure and optional Enterprise modules cost separately. One App Free is a different SaaS offer. [1](https://download.odoocdn.com/static/whitepaper/whitepaper-2023-sales.pdf) |
| popular | unknown | unknown | — | — | — | — | unspecified | paid product. No explicit Most popular or Recommended designation verified on the official plan page; no plan inferred. [1](https://www.odoo.com/pricing) |
| business | Custom (Enterprise) | unknown | — | — | — | — | unspecified | separate commercial Enterprise license. Custom permits on-premise/custom modules. Pricing extraction shows promotional/list rates with yearly/monthly switch; exact monthly-versus-annual billing not independently disambiguated, so amounts withheld. [1](https://www.odoo.com/pricing) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | paid product. No distinct Enterprise-named pricing plan; Custom is the commercial plan supporting on-premise Enterprise. Community has no enterprise software fee. [1](https://www.odoo.com/pricing) |

## Defensibility assessments

- A shared data model across business modules and a large extension ecosystem can create integration and customization switching costs. [1](https://github.com/odoo/odoo/blob/19.0/README.md)

## Three product reasons to consider it

1. Sales, purchasing and inventory modules let teams carry business records across order-to-stock workflows. [1](https://github.com/odoo/odoo/blob/19.0/README.md)
2. CRM and website/e-commerce modules connect customer-facing activity with back-office records. [1](https://github.com/odoo/odoo/blob/19.0/README.md)
3. Manufacturing and project modules extend beyond bookkeeping for organizations coordinating production or billable work. [1](https://github.com/odoo/odoo/blob/19.0/README.md)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate financial/in-kind sponsor identified in reviewed official project and business pages. Verified commercial steward included as business fallback; customers, partners and investors are not classified as sponsors. [1](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508)

- [Odoo S.A.](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508): business-steward. [Evidence](https://www.odoo.com/blog/odoo-news-5/odoo-s-a-announces-a-500-million-transaction-increasing-the-belgian-unicorn-s-valuation-to-5-billion-1508).

## Self-operation requirements

Mode: **server**. Odoo 19 Community source/production path. PostgreSQL is required; no MySQL alternative. Bundled server provides HTTP/cron; multi-process workers recommended in production. No external Redis/search/object store requirement established. [1](https://www.odoo.com/documentation/19.0/administration/install/source.html) [2](https://www.odoo.com/documentation/19.0/administration/on_premise/deploy.html)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Python 3.10+ and Python package dependencies | required | — | Always | Documented deployment dependency. [1](https://www.odoo.com/documentation/19.0/administration/install/source.html) |
| PostgreSQL 13+ | required | — | Always | Documented deployment dependency. [1](https://www.odoo.com/documentation/19.0/administration/install/source.html) |
| wkhtmltopdf | conditional | — | PDF report generation | Install documented patched build when PDF rendering is required. [1](https://www.odoo.com/documentation/19.0/administration/install/source.html) |
| Node.js / npm / rtlcss | conditional | — | Right-to-left language asset processing | Asset tooling; not a substitute for Python runtime. [1](https://www.odoo.com/documentation/19.0/administration/install/source.html) |
| HTTPS reverse proxy such as Nginx | conditional | — | Internet-facing production deployment | Production docs recommend TLS termination; Odoo supplies its application and cron workers. [1](https://www.odoo.com/documentation/19.0/administration/on_premise/deploy.html) |
| SMTP service | conditional | — | Sending outgoing email | External email provider or locally administered mail service; no mandatory paid mail provider established. [1](https://www.odoo.com/documentation/19.0/administration/on_premise/deploy.html) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux production; Windows/macOS source installation documented. Only explicit documented hardware figures included; null means no minimum verified in reviewed installation source. [1](https://www.odoo.com/documentation/19.0/administration/install/source.html)

## One-click and installer options

Status: **none-found**. Reviewed official installation instructions; no current first-party or officially linked one-click or one-command installer verified. Manual package/Compose instructions excluded. [1](https://www.odoo.com/documentation/19.0/administration/install/source.html)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/odoo-ce.json) · [Claim ledger](../../research/profile-claims/odoo-ce.jsonl) · [Research steps](../../research/profile-audits/odoo-ce.md)
