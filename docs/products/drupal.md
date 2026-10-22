# Drupal

[Product](https://www.drupal.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Drupal project; Drupal Association supporting nonprofit (community); ownership: **community**; funding: **not-applicable**.

Started 2001 (project-started); years active: 25; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

2001 dates public release of Drupal; supporting Drupal Association was founded in 2008. Association supports infrastructure and community rather than selling or owning an exclusive software license. Memberships, grants and sponsors are not equity investors. [1](https://www.drupal.org/about/history) [2](https://www.drupal.org/association/faq)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open-source core | free | USD 0/site | — | — | — | unspecified | free self-hosted core. Software license cost is zero; infrastructure, extensions and external services can cost extra. [1](https://www.drupal.org/about) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. Project core has no paid plan cards or popular designation. [1](https://www.drupal.org/about) |
| business | unknown | not-offered | — | — | — | — | unspecified | open-source core. Drupal core has no paid Business license; ecosystem services are separate. [1](https://www.drupal.org/about) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | open-source core. Drupal core remains free; no paid Enterprise code tier identified. [1](https://www.drupal.org/about) |

## Defensibility assessments

- Longstanding community expertise and a large module/agency ecosystem create defensibility through specialized implementation knowledge. [1](https://www.drupal.org/about)

## Three product reasons to consider it

1. Structured content and modular fields suit complex content models and reusable editorial data. [1](https://www.drupal.org/about)
2. Drupal 11 workflows and content governance support organizations with controlled publishing processes. [1](https://www.drupal.org/about)
3. Modules, distributions and integration points support building an application around a content platform. [1](https://www.drupal.org/about)

## Corporate sponsorship

Status: **identified**. June 2026 Drupal Association announcement says Acquia funds a 2% contribution from eligible partner transactions out of its own margin. [1](https://www.drupal.org/association/blog/acquias-fair-trade-initiative-a-new-model-for-sustainable-drupal-funding)

- [Acquia](https://www.acquia.com/): corporate-sponsor. [Evidence](https://www.drupal.org/association/blog/acquias-fair-trade-initiative-a-new-model-for-sustainable-drupal-funding).

## Self-operation requirements

Mode: **server**. Drupal 11 scope; no mandatory Redis/queue/object-store baseline. Contributed modules can impose database-specific or external-service requirements. [1](https://www.drupal.org/docs/getting-started/system-requirements) [2](https://www.drupal.org/docs/getting-started/system-requirements/memory-requirements)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP 8.3 or 8.4 | required | — | Always | Drupal 11 production scope; version compatibility table governs. [1](https://www.drupal.org/docs/getting-started/system-requirements/php-requirements) |
| MariaDB 10.6+ | one-of | database | Choose one supported database | Documented deployment component. [1](https://www.drupal.org/docs/getting-started/system-requirements/database-server-requirements) |
| MySQL 8.0+ | one-of | database | Choose one supported database | Documented deployment component. [1](https://www.drupal.org/docs/getting-started/system-requirements/database-server-requirements) |
| PostgreSQL 16+ with pg_trgm | one-of | database | Choose one supported database | Documented deployment component. [1](https://www.drupal.org/docs/getting-started/system-requirements/database-server-requirements) |
| SQLite 3.45+ | one-of | database | Choose one supported database | Documented deployment component. [1](https://www.drupal.org/docs/getting-started/system-requirements/database-server-requirements) |
| Apache or Nginx compatible web server | required | — | Always | Documented deployment component. [1](https://www.drupal.org/docs/getting-started/system-requirements) |
| Composer | required | — | Always | Installation/update dependency tooling, not a separate always-on service. [1](https://www.drupal.org/docs/getting-started/system-requirements) |
| Solr and Memcache | optional | — | Only for modules/configurations using them | Not core baseline dependencies. [1](https://www.drupal.org/docs/getting-started/system-requirements/memory-requirements) |

Resources: CPU not specified; memory 1 GB minimum system RAM; storage not specified; OS Linux or similar; Windows development only. Memory guide lists 1 GB system minimum, PHP 64 MB minimum and typical production PHP 128–256 MB; workload changes needs. [1](https://www.drupal.org/docs/getting-started/system-requirements) [2](https://www.drupal.org/docs/getting-started/system-requirements/memory-requirements)

## One-click and installer options

Status: **none-found**. Official guide mentions provider one-click flows, but current try-hosting page advertises an Acquia trial rather than an identifiable one-click self-host template. Manual installer is not one-click. [1](https://www.drupal.org/docs/user_guide/en/install-run.html) [2](https://new.drupal.org/try-hosting)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/drupal.json) · [Claim ledger](../../research/profile-claims/drupal.jsonl) · [Research steps](../../research/profile-audits/drupal.md)
