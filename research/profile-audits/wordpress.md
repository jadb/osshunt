> Temporary paths normalized; local setup omitted. Exact original retained locally.

# WordPress research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Opened WordPress About, Features and Requirements pages with web open; followed administration install guide.
3. Opened Five for the Future pledges and searched `site.wordpress.org/five-for-the-future/pledge/automattic`; used current official resource-sponsorship page for identified sponsor.
4. Attempted web click on install guide DigitalOcean link (id 39); tool rejected arguments. Recorded installer availability as none-found rather than inventing a target.

## Source review and decisions
- Open/read `https://wordpress.org/about/`; public locator: our story. Decision: WordPress started as a b2/cafelog fork in 2003.
- Open/read `https://wordpress.org/about/`; public locator: our mission; footer trademark notice. Decision: Community open-source project; WordPress Foundation owns the trademark.
- Open/read `https://wordpress.org/five-for-the-future/`; public locator: Five for the Future. Decision: Contributor and resource sponsorship supports the project; no project equity entity asserted.
- Open/read `https://wordpress.org/about/features/`; public locator: Features: licensing fees. Decision: Open-source core: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://wordpress.org/about/features/`; public locator: Features. Decision: Core has no plan cards or explicit popular plan designation.
- Open/read `https://wordpress.org/about/features/`; public locator: Features. Decision: No paid organizational edition offered by the WordPress.org core project; commercial hosts and plugins are separate.
- Open/read `https://wordpress.org/about/features/`; public locator: Features. Decision: No core Enterprise license tier; commercial WordPress services are separate.
- Open/read `https://wordpress.org/about/features/`; public locator: Easy Publishing; Media Management; Easy Theme System. Decision: Block editing, themes and media tools suit editorial sites that need visual page composition.
- Open/read `https://wordpress.org/about/features/`; public locator: Custom Content Types. Decision: Custom post types and taxonomies let teams model content beyond ordinary pages and posts.
- Open/read `https://wordpress.org/about/features/`; public locator: Extend with Plugins. Decision: A large plugin catalog lets sites add specialized workflows without replacing the publishing system.
- Open/read `https://wordpress.org/about/features/`; public locator: Features introduction; Extend with Plugins. Decision: The installed base and plugin/theme ecosystem create strong complementary-development and switching-cost advantages.
- Open/read `https://wordpress.org/five-for-the-future/`; public locator: Sponsoring resources; Salesforce. Decision: Official Five for the Future page identifies Salesforce’s in-kind Slack sponsorship; contributor pledges are distinct from equity investment.
- Open/read `https://wordpress.org/five-for-the-future/`; public locator: Sponsoring resources; Salesforce. Decision: Salesforce: corporate-sponsor
- Open/read `https://wordpress.org/about/requirements/`; public locator: Requirements. Decision: PHP: required. Always. 8.3+ recommended; legacy 7.4+ works but is end-of-life.
- Open/read `https://wordpress.org/about/requirements/`; public locator: Requirements. Decision: MariaDB: one-of. MariaDB OR MySQL. 10.11+ recommended.
- Open/read `https://wordpress.org/about/requirements/`; public locator: Requirements. Decision: MySQL: one-of. MySQL OR MariaDB. 8.0+ recommended.
- Open/read `https://wordpress.org/about/requirements/`; public locator: Requirements. Decision: Apache: one-of. Apache OR Nginx OR compatible PHP web server. Documented deployment component.
- Open/read `https://wordpress.org/about/requirements/`; public locator: Requirements. Decision: Nginx: one-of. Nginx OR Apache OR compatible PHP web server. Documented deployment component.
- Open/read `https://wordpress.org/about/requirements/`; public locator: Requirements. Decision: HTTPS: required. Always. Recommended public production stack includes HTTPS.
- Open/read `https://developer.wordpress.org/advanced-administration/before-install/howto-install/`; public locator: Things to Know Before Installing WordPress. Decision: Mail delivery: conditional. For account and site email. Verify delivery on host; no specific SMTP vendor required.
- Open/read `https://wordpress.org/about/requirements/`; public locator: Requirements. Decision: {'cpu': None, 'memory': None, 'storage': None, 'os': 'Any compatible PHP/MySQL host', 'notes': 'Official core requirements do not publish fixed CPU/RAM/storage minima.'}
- Open/read `https://developer.wordpress.org/advanced-administration/before-install/howto-install/`; public locator: How to install WordPress; Installing WordPress at popular Hosting Companies. Decision: none-found. Official handbook documents manual five-minute setup and links to host installers. No currently verified specific one-click template was established in this review; host autoinstall references alone are not represented as a verified option.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.
