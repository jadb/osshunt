# Websites and CMS

Build websites and manage published content.

Audience: Individuals, small businesses, publishers, agencies and organizations maintaining websites.. Website publishing serves personal, commercial, nonprofit and institutional needs across industries.

Use-case sources: [1](https://wordpress.org/about/features/), [2](https://www.drupal.org/about), [3](https://www.wix.com/plans).

- [Squarespace](https://www.squarespace.com/pricing): entry amount unverified/quote, annual billing. Basic is paid; page renders $25/$19 without sufficiently clear currency and billing mapping. USD amount unresolved. [Pricing](https://www.squarespace.com/pricing).
- [Webflow](https://webflow.com/pricing): USD 15/account/month, annual billing. Basic site plan: USD 15 per site/month billed yearly; lacks CMS. Premium with CMS starts at USD 25/site/month billed yearly. Workspace seats/add-ons separate. [Pricing](https://webflow.com/pricing).
- [Wix](https://www.wix.com/plans): entry amount unverified/quote, annual billing. Paid Light plan; localized rendering includes GST and conflicting currency cues, so a reliable USD entry price was not established. Free SaaS plan also exists. [Pricing](https://www.wix.com/plans).

### Drupal — A

Tier A for Drupal core: project explicitly provides free CMS functionality without licensing fees; modules/themes and vendor platforms separate. Hosting directory lists independent providers, not a Drupal Association managed service. GitHub repository is a mirror; canonical development is on Drupal.org GitLab. Pinned core/LICENSE.txt contains GPL v2; official licensing policy explicitly grants version 2 or later.

License: GPL-2.0-or-later; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/drupal/drupal/blob/89df3a065deb760a82a67ef8854f25d26bd05722/core/LICENSE.txt), [edition evidence](https://www.drupal.org/about), [hosting](https://www.drupal.org/hosting), [repository](https://github.com/drupal/drupal).

Service costs/limits: Hosting, implementation and optional vendor services are separate costs; contributed modules are outside core assessment.

Repository: pushed 2026-10-21T18:30:59Z; latest commit 2026-10-21T15:54:31Z; latest published release unverified or unavailable (n/a). Quick analysis: 4.3/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Webflow → Drupal: **different-approach**. For structured CMS projects with developer implementation. Webflow CSV content needs mapping into Drupal; Migrate provides APIs/base implementations, not a verified automatic Webflow importer. Rebuild templates and backend behavior. [1](https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code) [2](https://www.drupal.org/docs/develop/core-modules-and-themes/core-modules/migrate-module) [3](https://www.drupal.org/about)

### Ghost — A

Tier A for self-hosted Ghost: official comparison explicitly says product features are identical. Ghost(Pro) hosting plan gates do not gate self-hosted software. Social web and analytics require separate services and supported deployment setup.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/TryGhost/Ghost/blob/c6cebcd2221e7492c5c84aa1c90411a421977118/LICENSE), [edition evidence](https://docs.ghost.org/hosting/), [hosting](https://ghost.org/pricing/), [repository](https://github.com/TryGhost/Ghost).

Service costs/limits: Self-hosting requires operations and email delivery services.; Hosted ActivityPub access for self-hosters has follower and interaction limits; independent self-hosting available.

Repository: pushed 2026-10-21T21:23:58Z; latest commit 2026-10-21T20:53:54Z; latest published release v6.72.0 (2026-10-20T15:09:13Z). Quick analysis: 6.1/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Squarespace → Ghost: **partial**. Best for a publication/blog. Built-in Squarespace XML migrator imports posts/pages and converts categories to tags; review redirects and rebuild design. Broader store/scheduling workflows need separate solutions. [1](https://docs.ghost.org/migration/squarespace/) [2](https://ghost.org/)

### WordPress — A

Tier A for community WordPress core: standard publishing, users and themes available without licensing fees. Commercial plugins/themes are separate products, not core gates. WordPress.com is a distinct Automattic managed service linked by WordPress.org; its plan limits do not apply to self-hosted core. GitHub distribution repository mirrors SVN; wordpress-develop is also a mirror used for contribution workflow.

License: GPL-2.0-or-later; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/WordPress/WordPress/blob/d564e4e697ede9cbed1117dde61b47ffd713e660/license.txt), [edition evidence](https://wordpress.org/about/features/), [hosting](https://wordpress.com/support/com-vs-org/), [repository](https://github.com/WordPress/WordPress).

Service costs/limits: Self-hosting requires infrastructure and maintenance; optional commercial plugins/themes/services may cost extra.

Repository: pushed 2026-10-21T20:41:05Z; latest commit 2026-10-21T20:40:59Z; latest published release unverified or unavailable (n/a). Quick analysis: 4.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Squarespace → WordPress: **partial**. Squarespace exports WordPress XML for selected pages and one blog. Store/portfolio pages, styles, custom CSS and several block types do not export; rebuild design and integrations. [1](https://support.squarespace.com/hc/en-us/articles/206566687-Export-your-site-content) [2](https://developer.wordpress.org/advanced-administration/wordpress/import/)
- Webflow → WordPress: **different-approach**. WordPress supplies a theme/plugin CMS rather than Webflow Designer. Webflow CMS collections export separately as CSV; code export omits CMS runtime, forms and ecommerce. Map content and rebuild templates/integrations. [1](https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code) [2](https://developer.wordpress.org/advanced-administration/wordpress/import/)
- Wix → WordPress: **partial**. Suitable for business sites and blogs using WordPress themes and publishing. Wix site runtime cannot transfer to another host; rebuild layout and business integrations, migrate content separately. Optional plugins may be needed. [1](https://wordpress.org/about/features/) [2](https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere)

[Category research and unresolved questions](../../research/categories/website-cms.json) · [Research audit](../../research/audits/website-cms.md) · [Sourced claims](../../research/claims/website-cms.jsonl)
