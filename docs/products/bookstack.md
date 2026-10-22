# BookStack

[Product](https://www.bookstackapp.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Dan Brown / BookStack contributors (individual); ownership: **individual**; funding: **bootstrapped**.

Started 2015 (project-started); years active: 11; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Dan Brown began project2015. Official FAQ refuses investment and describes self-funded project; donation/support revenue helps living costs and development. Sponsors are donors, not equity investors. No separate Enterprise edition or official managed hosting. [1](https://www.bookstackapp.com/about/project-faq/) [2](https://www.bookstackapp.com/donate/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | BookStack | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. No software subscription fee for core edition; optional commercial editions and infrastructure separate. [1](https://www.bookstackapp.com/about/project-faq/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified in the public pricing material read; role remains unknown. [1](https://www.bookstackapp.com/about/project-faq/) |
| business | unknown | not-offered | — | — | — | — | unspecified | vendor commercial cloud. FAQ explicitly one free edition; paid support services do not create a Business software tier. [1](https://www.bookstackapp.com/about/project-faq/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | vendor commercial cloud. FAQ explicitly no separate enterprise/custom edition; support services separate. [1](https://www.bookstackapp.com/about/project-faq/) |

## Defensibility assessments

- An opinionated book hierarchy and familiar authoring experience establish a clear niche, while MIT licensing and portable content limit proprietary lock-in. [1](https://www.bookstackapp.com/about/project-faq/)

## Three product reasons to consider it

1. Organize documentation as shelves, books, chapters and pages. [1](https://www.bookstackapp.com/docs/user/content-overview/)
2. Let mixed-skill authors use visual word-processing or Markdown editors. [1](https://www.bookstackapp.com/docs/user/wysiwyg-editor/)
3. Create and revise diagrams inside pages while preserving earlier drawing revisions. [1](https://www.bookstackapp.com/docs/user/diagrams/)

## Corporate sponsorship

Status: **identified**. Named corporate sponsors verified from official repository README after homepage text omitted logos; donor relationships, not software endorsements or equity. [1](https://raw.githubusercontent.com/BookStackApp/BookStack/development/readme.md) [2](https://www.bookstackapp.com/donate/)

- [Diagrams.net](https://www.diagrams.net/): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/BookStackApp/BookStack/development/readme.md).
- [Onyx](https://www.onyx.app/): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/BookStackApp/BookStack/development/readme.md).
- [Cloudabove](https://cloudabove.com/hosting): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/BookStackApp/BookStack/development/readme.md).
- [Practicali](https://www.practicali.be): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/BookStackApp/BookStack/development/readme.md).
- [Stellar Hosted](https://www.stellarhosted.com/bookstack/): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/BookStackApp/BookStack/development/readme.md).
- [NETWAYS Web Services](https://nws.netways.de): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/BookStackApp/BookStack/development/readme.md).
- [Practinet](https://practinet.be/): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/BookStackApp/BookStack/development/readme.md).
- [Route4Me](https://route4me.com/): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/BookStackApp/BookStack/development/readme.md).
- [phamos](https://phamos.eu): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/BookStackApp/BookStack/development/readme.md).
- [SiteSpeakAI](https://sitespeak.ai/bookstack): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/BookStackApp/BookStack/development/readme.md).
- [Admin Intelligence](https://www.admin-intelligence.de/bookstack/): corporate-sponsor. [Evidence](https://raw.githubusercontent.com/BookStackApp/BookStack/development/readme.md).

## Self-operation requirements

Mode: **server**. Standard PHP/database application; no required PostgreSQL/Redis/search service in documented core. Official fresh-Ubuntu scripts automate installation but require download/chmod/run and configuration, so not counted as true one-click. [1](https://www.bookstackapp.com/docs/admin/installation/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP>=8.2 with required extensions | required | — | Default documented deployment | curl,dom,gd,iconv,mbstring,mysqlnd,openssl,pdo,pdo_mysql,tokenizer,xml,zip. [1](https://www.bookstackapp.com/docs/admin/installation/) |
| MySQL>=8.0 | one-of | database | Choose one content database | As documented; no unsupported version assumption. [1](https://www.bookstackapp.com/docs/admin/installation/) |
| MariaDB>=10.6 | one-of | database | Choose one content database | As documented; no unsupported version assumption. [1](https://www.bookstackapp.com/docs/admin/installation/) |
| PHP-compatible web server | required | — | Default documented deployment | As documented; no unsupported version assumption. [1](https://www.bookstackapp.com/docs/admin/installation/) |
| Composer>=2.2 and Git | required | — | Default documented deployment | Standard installation/dependency management and updates, not separate application services. [1](https://www.bookstackapp.com/docs/admin/installation/) |
| ldap/exif PHP extensions | optional | — | LDAP authentication or image rotation | As documented; no unsupported version assumption. [1](https://www.bookstackapp.com/docs/admin/installation/) |
| SMTP | conditional | — | Email service configured | Ubuntu script does not configure mail. [1](https://www.bookstackapp.com/docs/admin/installation/) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. Hardware minima not specified in the reviewed installation instructions. [1](https://www.bookstackapp.com/docs/admin/installation/)

## One-click and installer options

Status: **none-found**. Official installation instructions checked. Manual Docker Compose is not a one-click installation; no additional maintained provider template verified. [1](https://www.bookstackapp.com/docs/admin/installation/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/bookstack.json) · [Claim ledger](../../research/profile-claims/bookstack.jsonl) · [Research steps](../../research/profile-audits/bookstack.md)
