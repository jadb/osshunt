# WooCommerce

[Product](https://woocommerce.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Woo; Automattic Inc. (business); ownership: **private**; funding: **funded**.

Started 2008 (company-founded); years active: 18; years in business: 18. Ages are approximate calendar-year differences as of 2026-10-21.

Parent: Automattic Inc. (privately held).

Woo began as WooThemes in 2008; WooCommerce plugin launched 2011. Automattic acquired WooThemes in 2015. Funding and investor list below refer to parent Automattic, not a separate WooCommerce round; current exact parent cap table not asserted. [1](https://woocommerce.com/about/) [2](https://www.prnewswire.com/news-releases/automattic-announces-series-d-funding-from-salesforce-ventures-300921452.html)

Known investors: [Salesforce Ventures](https://www.prnewswire.com/news-releases/automattic-announces-series-d-funding-from-salesforce-ventures-300921452.html), [Insight Partners](https://www.prnewswire.com/news-releases/automattic-announces-series-d-funding-from-salesforce-ventures-300921452.html), [Tiger Global](https://www.prnewswire.com/news-releases/automattic-announces-series-d-funding-from-salesforce-ventures-300921452.html), [True Ventures](https://www.prnewswire.com/news-releases/automattic-announces-series-d-funding-from-salesforce-ventures-300921452.html).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open-source core | free | USD 0/site | — | — | — | unspecified | free self-hosted core. Software license cost is zero; infrastructure, extensions and external services can cost extra. [1](https://woocommerce.com/pricing/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified on the current public pricing page. [1](https://woocommerce.com/pricing/) |
| business | unknown | not-offered | — | — | — | — | unspecified | open-source core. Core has no Business subscription tier; extensions and third-party hosting are purchased separately. [1](https://woocommerce.com/pricing/) |
| enterprise | Enterprise commerce solution | unknown | — | — | — | — | unspecified | vendor commercial cloud. Official enterprise solution is sales-led via Request a demo; no verified license/subscription amount or explicit pricing quote captured. Core stays free. [1](https://woocommerce.com/enterprise-ecommerce/) |

## Defensibility assessments

- The WordPress installed base and Woo extension marketplace create complementary-development and migration-cost advantages. [1](https://woocommerce.com/about/)

## Three product reasons to consider it

1. WordPress content and store management let merchants combine editorial publishing with product selling. [1](https://woocommerce.com/about/)
2. Store and checkout customization allow merchants to shape product presentation and buying steps. [1](https://woocommerce.com/)
3. Marketplace extensions add specialist payment, shipping and merchandising capabilities to an existing catalog. [1](https://woocommerce.com/pricing/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsor roster identified on About, pricing or repository leads. Verified commercial steward Woo (Automattic subsidiary) supplied as business fallback, not as an external sponsor. [1](https://woocommerce.com/about/) [2](https://woocommerce.com/pricing/)

- [Woo / Automattic](https://woocommerce.com/about/): business-steward. [Evidence](https://woocommerce.com/about/).

## Self-operation requirements

Mode: **server**. Current WooCommerce 10.8+ documented recommended stack. Redis/object caches and remote gateways are store-specific; gateways can require external paid services. [1](https://woocommerce.com/document/server-requirements/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| WordPress 6.9+ | required | — | Always | Documented deployment component. [1](https://woocommerce.com/document/server-requirements/) |
| PHP 8.3+ | required | — | Always | WooCommerce 10.8+ recommendations; tested through PHP 8.4. [1](https://woocommerce.com/document/server-requirements/) |
| MySQL 8.0+ | one-of | database | MySQL OR MariaDB | Documented deployment component. [1](https://woocommerce.com/document/server-requirements/) |
| MariaDB 10.6+ | one-of | database | MariaDB OR MySQL | Documented deployment component. [1](https://woocommerce.com/document/server-requirements/) |
| Apache or Nginx-compatible PHP web server and HTTPS | required | — | Always | Documented deployment component. [1](https://woocommerce.com/document/server-requirements/) |
| cURL/fsockopen, SOAP and mbstring extensions | conditional | — | Relevant payment integrations, extensions or non-English stores | Core baseline does not require a separate Redis, search or queue service. [1](https://woocommerce.com/document/server-requirements/) |

Resources: CPU not specified; memory 256 MB WordPress memory limit or greater; storage not specified; OS Compatible PHP/WordPress host. 256 MB is the WordPress process memory limit, not a guaranteed machine RAM capacity; CPU and disk minimum not specified. [1](https://woocommerce.com/document/server-requirements/)

## One-click and installer options

Status: **offered**. Verified built-in WordPress plugin marketplace install; it assumes a working WordPress installation. [1](https://woocommerce.com/document/installing-uninstalling-woocommerce/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [WordPress plugin installer](https://wordpress.org/plugins/woocommerce/): **marketplace**, first-party. Plugin Install Now then Activate in an existing WordPress site; not full server provisioning. [1](https://woocommerce.com/document/installing-uninstalling-woocommerce/)

[Structured profile](../../research/profiles/woocommerce.json) · [Claim ledger](../../research/profile-claims/woocommerce.jsonl) · [Research steps](../../research/profile-audits/woocommerce.md)
