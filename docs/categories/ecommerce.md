# Ecommerce

Build online storefronts and manage catalogs, checkout, orders and commerce integrations.

Audience: Online merchants and the developers or agencies building their stores.. Used across industries by businesses selling online; adoption centers on commerce operations and implementation teams.

Use-case sources: [1](https://www.shopify.com/about), [2](https://prestashop.com/open-source/).

- [BigCommerce](https://www.bigcommerce.com): USD 29/account/month, annual billing. Core: USD 29/month billed annually; up to USD 30K trailing-twelve-month GMV then automatic Growth upgrade. Payment charges may apply. [Pricing](https://www.bigcommerce.com/pricing/).
  [Pricing tiers, organization and product reasons](../products/bigcommerce.md).
- [Shopify](https://www.shopify.com): USD 29/account/month, annual billing. Basic storefront plan: USD 29/month billed yearly; promotional trial excluded. Payment processing and apps may add costs. [Pricing](https://www.shopify.com/about).
  [Pricing tiers, organization and product reasons](../products/shopify.md).

### PrestaShop — A

Tier A applies to the PrestaShop Project core (OSL-3.0) and bundled modules (AFL-3.0), both OSI licenses. Classic is a free downloadable distribution; Hosted adds hosting, installation and support. Marketplace modules and remote services need separate review; Enterprise source access alone does not prove its additions are OSI.

License: OSL-3.0 AND AFL-3.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/PrestaShop/PrestaShop/blob/6d78ac503209f6dc86488644abe7cf15c01d348c/LICENSE.md), [edition evidence](https://prestashop.com/prestashop-offers/), [hosting](https://prestashop.com/prestashop-offers/), [repository](https://github.com/PrestaShop/PrestaShop).

Service costs/limits: Paid hosting, support, payment processing and optional marketplace modules/services can add costs.

Repository: pushed 2026-10-21T12:33:35Z; latest commit 2026-10-21T12:33:34Z; latest published release 9.2.0 (2026-09-30T09:56:24Z). Quick analysis: 5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Shopify → PrestaShop: **partial**. Another merchant storefront and back office, with responsibility for self-hosting or a separate hosting plan. Rebuild theme and integrations and validate catalog, order and customer migration. No automatic Shopify app, checkout or full-store transfer established. [1](https://prestashop.com/open-source/) [2](https://prestashop.com/prestashop-offers/)

### Medusa — B

MIT core is self-hostable; root LICENSE explicitly excludes proprietary Enterprise materials listed in ENTERPRISE-LICENSE.md. RBAC and SSO are licensed software gates, not just hosting benefits. Tier B and osi=true refer to MIT core only.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/medusajs/medusa/blob/f7add009dd2f142d98090a5194750e71b2147ddf/LICENSE), [edition evidence](https://medusajs.com/pricing), [hosting](https://medusajs.com/pricing), [repository](https://github.com/medusajs/medusa).

Paid restrictions: Role-based access control (RBAC) requires an Enterprise commercial agreement.; Single sign-on (SSO) requires an Enterprise commercial agreement.

Service costs/limits: Medusa Cloud hosting, infrastructure, email and search allowances have separate paid plans and usage limits.

Repository: pushed 2026-10-21T20:53:22Z; latest commit 2026-10-21T13:35:10Z; latest published release v2.22.0 (2026-10-21T10:58:20Z). Quick analysis: 6.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Shopify → Medusa: **different-approach**. Developer-built commerce backend and admin with storefront starters rather than a turnkey merchant SaaS. Budget implementation of storefront and integrations; no automatic Shopify app or complete data transfer verified. Enterprise RBAC/SSO need a commercial agreement. [1](https://github.com/medusajs/medusa) [2](https://medusajs.com/pricing)

### WooCommerce — C

GPL WooCommerce core is free and self-hostable. Tier C reflects first-party paid software extensions for recurring commerce workflows, including WooCommerce Subscriptions. The extensions remain GPL; this is a paid acquisition boundary, not a claim of proprietary licensing. Core one-time storefront, catalog and order workflows remain available without that extension.

License: GPL-2.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/woocommerce/woocommerce/blob/f9281bb7f7f44b95fa700b3b1b0a07f263bd2df5/license.txt), [edition evidence](https://woocommerce.com/products/woocommerce-subscriptions/), [hosting](https://wordpress.com/support/plan-features/ecommerce-plan/), [repository](https://github.com/woocommerce/woocommerce).

Paid restrictions: First-party WooCommerce Subscriptions adds recurring billing, automatic renewal retries and subscriber plan management through a paid annual extension; GPL licensing does not make vendor acquisition free.

Service costs/limits: Marketplace downloads, updates and support may require a paid subscription.; Payments, tax, shipping and other remote services may require vendor accounts, connections and usage charges.; First-party hosted WooCommerce is available through Automattic WordPress.com Commerce; Woo Express is discontinued.

Repository: pushed 2026-10-21T21:03:30Z; latest commit 2026-10-21T19:22:40Z; latest published release 11.2.1 (2026-10-09T18:16:12Z). Quick analysis: 6.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- BigCommerce → WooCommerce: **partial**. Suitable for a merchant storefront on WordPress. Built-in CSV tools move product catalog data after mapping the WooCommerce schema; this is not a full-store migration. Rebuild design, checkout integrations and platform-specific apps; plan separately for orders, customers, subscriptions and URLs. [1](https://woocommerce.com/pricing/) [2](https://woocommerce.com/document/product-csv-importer-exporter/)
- Shopify → WooCommerce: **partial**. Suitable for a merchant storefront on WordPress. Built-in CSV tools move product catalog data after mapping the WooCommerce schema; this is not a full-store migration. Rebuild design, checkout integrations and platform-specific apps; plan separately for orders, customers, subscriptions and URLs. [1](https://woocommerce.com/pricing/) [2](https://woocommerce.com/document/product-csv-importer-exporter/)

[Category research and unresolved questions](../../research/categories/ecommerce.json) · [Research audit](../../research/audits/ecommerce.md) · [Sourced claims](../../research/claims/ecommerce.jsonl)
