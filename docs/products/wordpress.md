# WordPress

[Product](https://wordpress.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

WordPress open-source project (community); ownership: **community**; funding: **not-applicable**.

Started 2003 (project-started); years active: 23; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Project started in 2003; WordPress.org software is distinct from Automattic’s WordPress.com business. WordPress Foundation holds the trademark; project equity investors do not apply. [1](https://wordpress.org/about/) [2](https://wordpress.org/five-for-the-future/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open-source core | free | USD 0/site | — | — | — | unspecified | free self-hosted core. Software license cost is zero; infrastructure, extensions and external services can cost extra. [1](https://wordpress.org/about/features/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. Core has no plan cards or explicit popular plan designation. [1](https://wordpress.org/about/features/) |
| business | unknown | not-offered | — | — | — | — | unspecified | open-source core. No paid organizational edition offered by the WordPress.org core project; commercial hosts and plugins are separate. [1](https://wordpress.org/about/features/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | open-source core. No core Enterprise license tier; commercial WordPress services are separate. [1](https://wordpress.org/about/features/) |

## Defensibility assessments

- The installed base and plugin/theme ecosystem create strong complementary-development and switching-cost advantages. [1](https://wordpress.org/about/features/)

## Three product reasons to consider it

1. Block editing, themes and media tools suit editorial sites that need visual page composition. [1](https://wordpress.org/about/features/)
2. Custom post types and taxonomies let teams model content beyond ordinary pages and posts. [1](https://wordpress.org/about/features/)
3. A large plugin catalog lets sites add specialized workflows without replacing the publishing system. [1](https://wordpress.org/about/features/)

## Corporate sponsorship

Status: **identified**. Official Five for the Future page identifies Salesforce’s in-kind Slack sponsorship; contributor pledges are distinct from equity investment. [1](https://wordpress.org/five-for-the-future/)

- [Salesforce](https://www.salesforce.com/): corporate-sponsor. [Evidence](https://wordpress.org/five-for-the-future/).

## Self-operation requirements

Mode: **server**. Core needs no mandatory Redis, queue broker, search server or object store; plugins may introduce them. Database alternatives share the database group. [1](https://wordpress.org/about/requirements/) [2](https://developer.wordpress.org/advanced-administration/before-install/howto-install/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP | required | — | Always | 8.3+ recommended; legacy 7.4+ works but is end-of-life. [1](https://wordpress.org/about/requirements/) |
| MariaDB | one-of | database | MariaDB OR MySQL | 10.11+ recommended. [1](https://wordpress.org/about/requirements/) |
| MySQL | one-of | database | MySQL OR MariaDB | 8.0+ recommended. [1](https://wordpress.org/about/requirements/) |
| Apache | one-of | web-server | Apache OR Nginx OR compatible PHP web server | Documented deployment component. [1](https://wordpress.org/about/requirements/) |
| Nginx | one-of | web-server | Nginx OR Apache OR compatible PHP web server | Documented deployment component. [1](https://wordpress.org/about/requirements/) |
| HTTPS | required | — | Always | Recommended public production stack includes HTTPS. [1](https://wordpress.org/about/requirements/) |
| Mail delivery | conditional | — | For account and site email | Verify delivery on host; no specific SMTP vendor required. [1](https://developer.wordpress.org/advanced-administration/before-install/howto-install/) |

Resources: CPU not specified; memory not specified; storage not specified; OS Any compatible PHP/MySQL host. Official core requirements do not publish fixed CPU/RAM/storage minima. [1](https://wordpress.org/about/requirements/) [2](https://developer.wordpress.org/advanced-administration/before-install/howto-install/)

## One-click and installer options

Status: **none-found**. Official handbook documents manual five-minute setup and links to host installers. No currently verified specific one-click template was established in this review; host autoinstall references alone are not represented as a verified option. [1](https://developer.wordpress.org/advanced-administration/before-install/howto-install/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/wordpress.json) · [Claim ledger](../../research/profile-claims/wordpress.jsonl) · [Research steps](../../research/profile-audits/wordpress.md)
