> Temporary paths normalized; local setup omitted. Exact original retained locally.

# Drupal research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Opened About, Our history, system requirements, database/PHP/memory requirements.
3. Supporters URL timed out and association/partners inaccessible; searched `site.drupal.org Drupal Association supporting partners Acquia`, then read Association FAQ and June 2026 Fair Trade funding announcement.
4. Searched `site.drupal.org install one click hosting`; read interactive installer and current official try-hosting page. Kept no unverified marketplace URL.

## Source review and decisions
- Open/read `https://www.drupal.org/about/history`; public locator: Our history; Behind the name. Decision: Drupal released publicly in January 2001.
- Open/read `https://www.drupal.org/association/faq`; public locator: What is the Drupal Association?. Decision: Drupal is a community open-source project supported by a US 501(c)(3) nonprofit.
- Open/read `https://www.drupal.org/association/faq`; public locator: How is the Drupal Association funded?. Decision: Association funding includes partner fees, memberships, donations, events and grants.
- Open/read `https://www.drupal.org/about`; public locator: Make something amazing, for anyone. Decision: Open-source core: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://www.drupal.org/about`; public locator: Make something amazing, for anyone. Decision: Project core has no paid plan cards or popular designation.
- Open/read `https://www.drupal.org/about`; public locator: Make something amazing, for anyone. Decision: Drupal core has no paid Business license; ecosystem services are separate.
- Open/read `https://www.drupal.org/about`; public locator: Make something amazing, for anyone. Decision: Drupal core remains free; no paid Enterprise code tier identified.
- Open/read `https://www.drupal.org/about`; public locator: Make something amazing, for anyone. Decision: Structured content and modular fields suit complex content models and reusable editorial data.
- Open/read `https://www.drupal.org/about`; public locator: Drupal 11. Decision: Drupal 11 workflows and content governance support organizations with controlled publishing processes.
- Open/read `https://www.drupal.org/about`; public locator: Make something amazing, for anyone. Decision: Modules, distributions and integration points support building an application around a content platform.
- Open/read `https://www.drupal.org/about`; public locator: Made possible by a global community. Decision: Longstanding community expertise and a large module/agency ecosystem create defensibility through specialized implementation knowledge.
- Open/read `https://www.drupal.org/association/blog/acquias-fair-trade-initiative-a-new-model-for-sustainable-drupal-funding`; public locator: Funded Completely by Acquia. Decision: June 2026 Drupal Association announcement says Acquia funds a 2% contribution from eligible partner transactions out of its own margin.
- Open/read `https://www.drupal.org/association/blog/acquias-fair-trade-initiative-a-new-model-for-sustainable-drupal-funding`; public locator: Funded Completely by Acquia. Decision: Acquia: corporate-sponsor
- Open/read `https://www.drupal.org/docs/getting-started/system-requirements/php-requirements`; public locator: PHP version / Drupal version table. Decision: PHP 8.3 or 8.4: required. Always. Drupal 11 production scope; version compatibility table governs.
- Open/read `https://www.drupal.org/docs/getting-started/system-requirements/database-server-requirements`; public locator: MariaDB or MySQL. Decision: MariaDB 10.6+: one-of. Choose one supported database. Documented deployment component.
- Open/read `https://www.drupal.org/docs/getting-started/system-requirements/database-server-requirements`; public locator: MariaDB or MySQL. Decision: MySQL 8.0+: one-of. Choose one supported database. Documented deployment component.
- Open/read `https://www.drupal.org/docs/getting-started/system-requirements/database-server-requirements`; public locator: PostgreSQL. Decision: PostgreSQL 16+ with pg_trgm: one-of. Choose one supported database. Documented deployment component.
- Open/read `https://www.drupal.org/docs/getting-started/system-requirements/database-server-requirements`; public locator: SQLite. Decision: SQLite 3.45+: one-of. Choose one supported database. Documented deployment component.
- Open/read `https://www.drupal.org/docs/getting-started/system-requirements`; public locator: Web server requirements. Decision: Apache or Nginx compatible web server: required. Always. Documented deployment component.
- Open/read `https://www.drupal.org/docs/getting-started/system-requirements`; public locator: Composer requirements. Decision: Composer: required. Always. Installation/update dependency tooling, not a separate always-on service.
- Open/read `https://www.drupal.org/docs/getting-started/system-requirements/memory-requirements`; public locator: Solr, Memcache, etc.. Decision: Solr and Memcache: optional. Only for modules/configurations using them. Not core baseline dependencies.
- Open/read `https://www.drupal.org/docs/getting-started/system-requirements`; public locator: Minimum RAM; PHP. Decision: {'cpu': None, 'memory': '1 GB minimum system RAM', 'storage': None, 'os': 'Linux or similar; Windows development only', 'notes': 'Memory guide lists 1 GB system minimum, PHP 64 MB minimum and typical production PHP 128–256 MB; workload changes needs.'}
- Open/read `https://www.drupal.org/docs/user_guide/en/install-run.html`; public locator: Running the Interactive Installer. Decision: none-found. Official guide mentions provider one-click flows, but current try-hosting page advertises an Acquia trial rather than an identifiable one-click self-host template. Manual installer is not one-click.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.

## Independent source review integration

Also verified Acro Commerce donated developer hours and Zoocha contributed office space for code sprints (in-kind, not assumed cash sponsorship). Current Zoocha page says Diamond Certified Partner; no recurring cash amount or exhaustive supporter inventory inferred. Sources: https://www.acrocommerce.com/solutions/drupal-and-drupal-commerce, https://www.zoocha.com/systems-partnerships
Reviewed exact browser requests, locators and failures in the shared profile review record. Applied with the review integration helper; retained original evidence and appended correcting claims. No historical builder rerun.

Shared full review transcript: research/profile-review.md ; primary source locators and query/fetch failures retained there. Integration used the review helper to update profile fields and append evidence.
