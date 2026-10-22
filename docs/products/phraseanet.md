# Phraseanet

[Product](https://www.phraseanet.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Alchemy (business); ownership: **unknown**; funding: **unknown**.

Started 1996 (company-founded); years active: 30; years in business: 30. Ages are approximate calendar-year differences as of 2026-10-21.

1996 company creation; Phraseanet web/open-source release2005. Official site says Phrasea replaces Phraseanet in2026. This profile remains scoped to Phraseanet4.1; no migration of unrelated Phrasea dependencies/features. Equity owners/funding not established. [1](https://www.phraseanet.com/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Phraseanet4.1 core | free | USD 0/organization | — | — | — | unspecified | self-hosted core. No recurring license charge for this core scope; infrastructure and optional services separate. [1](https://github.com/alchemy-fr/Phraseanet) |
| popular | unknown | unknown | — | — | — | — | unspecified | Phraseanet software/services. No explicitly highlighted popular plan verified in the reviewed official offer. No inferred designation. [1](https://www.phraseanet.com/services) |
| business | unknown | unknown | — | — | — | — | unspecified | commercial SaaS/implementation services. Commercial services described; no named Business package or numeric recurring amount verified. [1](https://www.phraseanet.com/services) |
| enterprise | unknown | unknown | — | — | — | — | unspecified | commercial SaaS/implementation services. Commercial implementation/maintenance available; no explicit enterprise quotation or price verified. [1](https://www.phraseanet.com/services) |

## Defensibility assessments

- Domain metadata/thesaurus workflows and plugin integrations create specialized switching costs, although a successor product changes the long-term ecosystem. [1](https://github.com/alchemy-fr/Phraseanet)

## Three product reasons to consider it

1. Thesaurus and Dublin Core mappings structure descriptive metadata. [1](https://github.com/alchemy-fr/Phraseanet)
2. Collaborative editing and approval processes coordinate asset review. [1](https://github.com/alchemy-fr/Phraseanet)
3. Multi-resolution generation and video tools prepare media for reuse. [1](https://github.com/alchemy-fr/Phraseanet)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsor verified in reviewed project sources; accountable business steward included. [1](https://www.phraseanet.com/)

- [Alchemy](https://www.phraseanet.com/): business-steward. [Evidence](https://www.phraseanet.com/).

## Self-operation requirements

Mode: **server**. Current Phraseanet4.1 README stack runs test defaults. Production requires customized credentials, storage/DB tuning; external infrastructure services can replace included containers except app/workers. Linux preferred; macOS/Windows use Linux containers via VM. Manual Compose build/pull plus up is not one-click. [1](https://github.com/alchemy-fr/Phraseanet) [2](https://www.phraseanet.com/services)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker27.3.1+ and Compose2.30.3+ | required | — | Always | Documented deployment component. [1](https://github.com/alchemy-fr/Phraseanet) |
| Phraseanet PHP application and worker containers | required | — | Always | Documented deployment component. [1](https://github.com/alchemy-fr/Phraseanet) |
| MariaDB | one-of | database | Bundled/default or external production datastore | Documented deployment component. [1](https://github.com/alchemy-fr/Phraseanet) |
| MySQL | one-of | database | Supported production database alternative | Documented deployment component. [1](https://github.com/alchemy-fr/Phraseanet) |
| Elasticsearch | required | — | Always | Documented deployment component. [1](https://github.com/alchemy-fr/Phraseanet) |
| Redis including session role | required | — | Always | Documented deployment component. [1](https://github.com/alchemy-fr/Phraseanet) |
| RabbitMQ | required | — | Always | Documented deployment component. [1](https://github.com/alchemy-fr/Phraseanet) |
| nginx gateway and host-provided filer | required | — | Always | Documented deployment component. [1](https://github.com/alchemy-fr/Phraseanet) |
| SMTP service | conditional | — | Production outgoing email; Mailhog is test-only stack component | Documented deployment component. [1](https://www.phraseanet.com/services) |
| Builder/Composer/Node; Mailhog/phpMyAdmin tools | conditional | — | Development/test tools; production app image excludes Composer/Node | Documented deployment component. [1](https://github.com/alchemy-fr/Phraseanet) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. No universal hardware minimum established; workload determines capacity. [1](https://github.com/alchemy-fr/Phraseanet)

## One-click and installer options

Status: **none-found**. Reviewed official installation guide. Manual packages, build steps and Compose recipes are not treated as one-click. No distinct officially linked template verified. [1](https://github.com/alchemy-fr/Phraseanet)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/phraseanet.json) · [Claim ledger](../../research/profile-claims/phraseanet.jsonl) · [Research steps](../../research/profile-audits/phraseanet.md)
