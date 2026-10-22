> Temporary paths normalized; local setup omitted. Exact original retained locally.

# WooCommerce research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Opened About, pricing, recommended production server specifications, enterprise solution, recommended hosts and installation guide.
3. Direct Python urllib network check for server requirements failed DNS; web browsing succeeded and supplied evidence.
4. Searched Automattic funding and read issuer-supplied Series D press release. Investor attribution explicitly parent-level.
5. Searched official Woo one-click install hosting; plugin installation verified via current official admin guide, without treating host logos as installer proof.

## Source review and decisions
- Open/read `https://woocommerce.com/about/`; public locator: Our mission; The origin story. Decision: Woo began as WooThemes in 2008; plugin launched 2011.
- Open/read `https://woocommerce.com/about/`; public locator: Joining Automattic. Decision: WooThemes acquired by Automattic in 2015.
- Open/read `https://www.prnewswire.com/news-releases/automattic-announces-series-d-funding-from-salesforce-ventures-300921452.html`; public locator: Automattic Announces Series D Funding. Decision: Parent Automattic raised 2019 Series D from Salesforce Ventures, joining Insight, Tiger Global and True Ventures.
- Open/read `https://www.prnewswire.com/news-releases/automattic-announces-series-d-funding-from-salesforce-ventures-300921452.html`; public locator: Automattic Announces Series D Funding. Decision: Salesforce Ventures is a documented equity investor; historical unless specified.
- Open/read `https://www.prnewswire.com/news-releases/automattic-announces-series-d-funding-from-salesforce-ventures-300921452.html`; public locator: Automattic Announces Series D Funding. Decision: Insight Partners is a documented equity investor; historical unless specified.
- Open/read `https://www.prnewswire.com/news-releases/automattic-announces-series-d-funding-from-salesforce-ventures-300921452.html`; public locator: Automattic Announces Series D Funding. Decision: Tiger Global is a documented equity investor; historical unless specified.
- Open/read `https://www.prnewswire.com/news-releases/automattic-announces-series-d-funding-from-salesforce-ventures-300921452.html`; public locator: Automattic Announces Series D Funding. Decision: True Ventures is a documented equity investor; historical unless specified.
- Open/read `https://woocommerce.com/pricing/`; public locator: Core platform: WooCommerce. Decision: Open-source core: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://woocommerce.com/pricing/`; public locator: How WooCommerce pricing works. Decision: No explicit Most popular or Recommended designation verified on the current public pricing page.
- Open/read `https://woocommerce.com/pricing/`; public locator: How WooCommerce pricing works. Decision: Core has no Business subscription tier; extensions and third-party hosting are purchased separately.
- Open/read `https://woocommerce.com/enterprise-ecommerce/`; public locator: Enterprise ecommerce, elevated. Decision: Enterprise commerce solution: unknown; monthly=None; annual total=None; USD/site. Official enterprise solution is sales-led via Request a demo; no verified license/subscription amount or explicit pricing quote captured. Core stays free.
- Open/read `https://woocommerce.com/about/`; public locator: The origin story. Decision: WordPress content and store management let merchants combine editorial publishing with product selling.
- Open/read `https://woocommerce.com/`; public locator: No-code customization; Checkout. Decision: Store and checkout customization allow merchants to shape product presentation and buying steps.
- Open/read `https://woocommerce.com/pricing/`; public locator: Extensions: Add à la carte. Decision: Marketplace extensions add specialist payment, shipping and merchandising capabilities to an existing catalog.
- Open/read `https://woocommerce.com/about/`; public locator: Joining Automattic; Marketplace. Decision: The WordPress installed base and Woo extension marketplace create complementary-development and migration-cost advantages.
- Open/read `https://woocommerce.com/about/`; public locator: About Woo; Joining Automattic. Decision: No separate corporate sponsor roster identified on About, pricing or repository leads. Verified commercial steward Woo (Automattic subsidiary) supplied as business fallback, not as an external sponsor.
- Open/read `https://woocommerce.com/about/`; public locator: About Woo; Joining Automattic. Decision: Woo / Automattic: business-steward
- Open/read `https://woocommerce.com/document/server-requirements/`; public locator: Server requirements. Decision: WordPress 6.9+: required. Always. Documented deployment component.
- Open/read `https://woocommerce.com/document/server-requirements/`; public locator: Server requirements. Decision: PHP 8.3+: required. Always. WooCommerce 10.8+ recommendations; tested through PHP 8.4.
- Open/read `https://woocommerce.com/document/server-requirements/`; public locator: Server requirements. Decision: MySQL 8.0+: one-of. MySQL OR MariaDB. Documented deployment component.
- Open/read `https://woocommerce.com/document/server-requirements/`; public locator: Server requirements. Decision: MariaDB 10.6+: one-of. MariaDB OR MySQL. Documented deployment component.
- Open/read `https://woocommerce.com/document/server-requirements/`; public locator: Server requirements. Decision: Apache or Nginx-compatible PHP web server and HTTPS: required. Always. Documented deployment component.
- Open/read `https://woocommerce.com/document/server-requirements/`; public locator: Optional items. Decision: cURL/fsockopen, SOAP and mbstring extensions: conditional. Relevant payment integrations, extensions or non-English stores. Core baseline does not require a separate Redis, search or queue service.
- Open/read `https://woocommerce.com/document/server-requirements/`; public locator: Server requirements. Decision: {'cpu': None, 'memory': '256 MB WordPress memory limit or greater', 'storage': None, 'os': 'Compatible PHP/WordPress host', 'notes': '256 MB is the WordPress process memory limit, not a guaranteed machine RAM capacity; CPU and disk minimum not specified.'}
- Open/read `https://woocommerce.com/document/installing-uninstalling-woocommerce/`; public locator: Install via WordPress admin. Decision: offered. Verified built-in WordPress plugin marketplace install; it assumes a working WordPress installation.
- Open/read `https://woocommerce.com/document/installing-uninstalling-woocommerce/`; public locator: Install via WordPress admin. Decision: WordPress plugin installer: marketplace. Plugin Install Now then Activate in an existing WordPress site; not full server provisioning.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.
