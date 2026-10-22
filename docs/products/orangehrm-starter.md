# OrangeHRM Starter

[Product](https://orangehrm.com/orangehrm-starter-open-source-software) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

OrangeHRM Inc. (business); ownership: **private**; funding: **funded**.

Started 2005 (company-founded); years active: 21; years in business: 21. Ages are approximate calendar-year differences as of 2026-10-21.

About page says founded 2005; leadership bio says co-founded Inc. in 2006, so founding history uses 2005 and incorporation date remains distinct. Historical Series A names Larry Stefanic and David Axmark. No current cap table published. [1](https://orangehrm.com/company/about-us) [2](https://orangehrm.com/assets/Documents/Resources/Press-Releases/OrangeHRM-Financing.pdf)

Known investors: [Larry Stefanic](https://orangehrm.com/assets/Documents/Resources/Press-Releases/OrangeHRM-Financing.pdf), [David Axmark](https://orangehrm.com/assets/Documents/Resources/Press-Releases/OrangeHRM-Financing.pdf).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Starter | free | USD 0/organization | — | — | — | unspecified | free self-hosted Starter core. GPL Starter software; infrastructure separate. Advanced functionality is a different commercial edition. [1](https://orangehrm.com/orangehrm-starter-open-source-software) |
| popular | unknown | unknown | — | — | — | — | unspecified | paid product. No explicit Most popular or Recommended designation verified on the official plan page; no plan inferred. [1](https://orangehrm.com/pricing) |
| business | Advanced | quote | — | — | — | — | unspecified | separate commercial Advanced edition. Per-employee-per-month, module selection and personalized quote. Officially available cloud or on-premises; no numeric rate published. [1](https://orangehrm.com/pricing) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | paid product. No separate Enterprise plan; Advanced is explicitly described as enterprise-grade and quoted per requirements. [1](https://orangehrm.com/pricing) |

## Defensibility assessments

- A long-lived HR data model covering employee administration and time/leave workflows can create migration costs; paid Advanced remains a separate edition. [1](https://orangehrm.com/orangehrm-starter-open-source-software)

## Three product reasons to consider it

1. Employee database, profiles and corporate directory consolidate basic personnel information. [1](https://orangehrm.com/orangehrm-starter-open-source-software)
2. Leave requests and approvals work alongside time tracking for routine attendance administration. [1](https://orangehrm.com/orangehrm-starter-open-source-software)
3. Built-in recruitment and basic performance reviews cover more of the employee lifecycle in one HR application. [1](https://orangehrm.com/orangehrm-starter-open-source-software)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate financial/in-kind sponsor identified in reviewed official project and business pages. Verified commercial steward included as business fallback; customers, partners and investors are not classified as sponsors. [1](https://orangehrm.com/company/about-us)

- [OrangeHRM Inc.](https://orangehrm.com/company/about-us): business-steward. [Evidence](https://orangehrm.com/company/about-us).

## Self-operation requirements

Mode: **server**. Starter v5.9 source requirements checked; Linux/Windows prerequisites Help Center pages lacked usable body text, so versioned Composer and installer config plus official middleware guide used. No external Redis/queue/object-store service required by reviewed baseline. [1](https://starterhelp.orangehrm.com/hc/en-us/articles/5295915003666-OrangeHRM-Starter-Installation-Guide) [2](https://raw.githubusercontent.com/orangehrm/orangehrm/v5.9/src/composer.json) [3](https://raw.githubusercontent.com/orangehrm/orangehrm/v5.9/installer/cli_install_config.yaml) [4](https://www.orangehrm.com/assets/Files/OrangeHRM-Middleware-Installation-Guide-Automated-RHEL8.pdf)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP 7.4 or PHP 8.x and required extensions | required | — | Always | v5.9 Composer constraint ^7.4\|^8.0; PDO, curl, JSON, mbstring, zip, DOM, XML/simplexml, GD, LDAP and OpenSSL extensions. Constraint is software compatibility, not recommendation to use obsolete PHP. [1](https://raw.githubusercontent.com/orangehrm/orangehrm/v5.9/src/composer.json) |
| MySQL | one-of | database | MySQL-compatible documented deployment | Installer defaults to port3306/mysql schema; exact minimum database version not verified. [1](https://raw.githubusercontent.com/orangehrm/orangehrm/v5.9/installer/cli_install_config.yaml) |
| MariaDB | one-of | database | MySQL-compatible documented deployment | Official middleware guide supplies MariaDB route; no PostgreSQL/SQLite route verified. [1](https://www.orangehrm.com/assets/Files/OrangeHRM-Middleware-Installation-Guide-Automated-RHEL8.pdf) |
| Apache web server | required | — | Always | Official middleware path uses Apache; other web servers not independently established. [1](https://www.orangehrm.com/assets/Files/OrangeHRM-Middleware-Installation-Guide-Automated-RHEL8.pdf) |
| SMTP service | conditional | — | Email notifications configured | Email delivery requires a mail provider; not required merely to run employee database. [1](https://starterhelp.orangehrm.com/hc/en-us/articles/5295915003666-OrangeHRM-Starter-Installation-Guide) |
| Composer / Node.js asset tooling | conditional | — | Building source rather than release package | Bundled production dependencies differ from build tooling; no external Redis/cache/search service established. [1](https://raw.githubusercontent.com/orangehrm/orangehrm/v5.9/src/composer.json) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux; Windows installation route linked by official README. Only explicit documented hardware figures included; null means no minimum verified in reviewed installation source. [1](https://starterhelp.orangehrm.com/hc/en-us/articles/5295915003666-OrangeHRM-Starter-Installation-Guide)

## One-click and installer options

Status: **none-found**. Reviewed official installation instructions; no current first-party or officially linked one-click or one-command installer verified. Manual package/Compose instructions excluded. [1](https://starterhelp.orangehrm.com/hc/en-us/articles/5295915003666-OrangeHRM-Starter-Installation-Guide)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/orangehrm-starter.json) · [Claim ledger](../../research/profile-claims/orangehrm-starter.jsonl) · [Research steps](../../research/profile-audits/orangehrm-starter.md)
