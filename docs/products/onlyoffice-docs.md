# ONLYOFFICE Docs Community

[Product](https://www.onlyoffice.com/docs) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Ascensio System SIA (ONLYOFFICE) (business); ownership: **private**; funding: **unknown**.

Started 2009 (company-founded); years active: 17; years in business: 17. Ages are approximate calendar-year differences as of 2026-10-21.

Parent: ONLYOFFICE Capital Group Pte. Ltd. (Singapore).

2009 is Latvian company founding, 2010 TeamLab public launch. Official About identifies Ascensio as IP holder and Singapore holding company. Ultimate beneficial owners, outside equity investors and financing history not disclosed by these primary sources searched; holding company is not assumed venture investor. [1](https://www.onlyoffice.com/about) [2](https://www.onlyoffice.com/blog/2026/06/remember-2009-saas-tools) [3](https://www.onlyoffice.com/blog/2023/08/onlyoffice-opens-holding-in-singapore)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Docs Community | free | USD 0/installation | — | — | — | unspecified | free AGPL self-hosted Docs engine. Free Community engine; edition limitations apply. Not DocSpace/Workspace subscription. [1](https://www.onlyoffice.com/compare-editions) |
| popular | unknown | unknown | — | — | — | — | unspecified | Docs engine editions. No public Most popular or Recommended plan designation found in the source inspected; no popularity inferred. [1](https://www.onlyoffice.com/pricing) |
| business | Docs Connect | published | USD 8/user | — | — | — | unspecified | commercial cloud editor integration add-on. Current pricing page lists $8/user/month add-on for embedding online editors. Broader room/admin platform has separate costs; not a paid Community self-host license or complete deployment price. [1](https://www.onlyoffice.com/pricing) |
| enterprise | Docs Enterprise | unknown | — | — | — | — | unspecified | paid self-hosted commercial Docs engine. Paid downloadable Enterprise confirmed. Legacy Enterprise price URLs redirect to new broader pricing page; indexed legacy From$1500/configured$2100 amounts conflict in scope/duration, so no current numeric total asserted; request edition-specific quote. [1](https://helpcenter.onlyoffice.com/docs/faq/docs-enterprise.aspx) |

## Defensibility assessments

- Format-compatibility work and embeddable editing integrations create specialized engineering differentiation, though open document standards and competing engines constrain lock-in. [1](https://www.onlyoffice.com/about) [2](https://www.onlyoffice.com/docs)

## Three product reasons to consider it

1. Browser editors cover documents, spreadsheets, presentations, forms and PDFs within existing collaboration platforms. [1](https://www.onlyoffice.com/docs)
2. Microsoft Office and OpenDocument format support suits exchanging complex documents across different office suites. [1](https://www.onlyoffice.com/about)
3. Real-time document coauthoring lets multiple collaborators work in the embedded editing workflow. [1](https://www.onlyoffice.com/docs)

## Corporate sponsorship

Status: **business-fallback**. Official About identifies Ascensio as business building open-source project and IP holder. No separate corporate sponsor list identified; partner/customer relationships not treated as sponsorship. [1](https://www.onlyoffice.com/about)

- [Ascensio System SIA](https://www.onlyoffice.com/): business-steward. [Evidence](https://www.onlyoffice.com/about).

## Self-operation requirements

Mode: **server**. Current Docs10 Community Docker guide is the verified installation path and needs supported Docker plus bundled editor runtime; no separate host Node.js or external SQL/cache/broker prerequisite established. Current official Docker README/startup source explicitly gates PostgreSQL/RabbitMQ/Redis configuration to Enterprise/Developer, so commercial dependencies are conditional and SQL backends are replacements. Exact Docker v10.0.0 source tag URLs404; source-level edition details refer to current master and must be rechecked against chosen image. Community embedded storage implementation not named by these sources; no guessed SQLite claim. Document storage/authentication host separate for real collaboration. Exact internal SQL/cache/queue components inside the chosen stable Community image remain unresolved; absence of external configuration parameters is not evidence of absent bundled internals. [1](https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-docker.aspx) [2](https://raw.githubusercontent.com/ONLYOFFICE/Docker-DocumentServer/master/README.md) [3](https://raw.githubusercontent.com/ONLYOFFICE/Docker-DocumentServer/master/run-document-server.sh)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker runtime | required | — | Documented Community Docker path | Supported Docker release; image bundles runtime services. Native Linux installation available separately. [1](https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-docker.aspx) |
| Document editor/conversion processes and nginx | required | — | Bundled Docs engine | Docker contains application and web runtime; no separate Node.js installation on host needed. [1](https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-docker.aspx) |
| Document storage/integration platform | conditional | — | Production collaborative document workflow | Connect engine to Nextcloud/ownCloud/other system for document management and user access; Docs is engine, not complete storage platform. [1](https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-docker.aspx) |
| TLS certificate and JWT integration secret | conditional | — | Secured production integration | Persistent JWT secret avoids regeneration/integration failures; TLS certificate required for chosen HTTPS endpoint. [1](https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-docker.aspx) |
| PostgreSQL | one-of | commercial-database | Enterprise/Developer commercial image SQL store; default backend, bundled locally unless replaced | Current official README places DB_TYPE/DB_HOST parameters under Enterprise and Developer Edition Parameters only. Not a required external Community component. [1](https://raw.githubusercontent.com/ONLYOFFICE/Docker-DocumentServer/master/README.md) [2](https://raw.githubusercontent.com/ONLYOFFICE/Docker-DocumentServer/master/run-document-server.sh) |
| MySQL / MariaDB / MSSQL / Oracle / Dameng | one-of | commercial-database | Enterprise/Developer commercial edition only; replacement SQL backend instead of PostgreSQL | DB_TYPE values documented for commercial builds; not simultaneous requirements. Exact database server versions not provided in inspected configuration table. No Community support claimed. [1](https://raw.githubusercontent.com/ONLYOFFICE/Docker-DocumentServer/master/README.md) |
| RabbitMQ or ActiveMQ message broker | conditional | — | Enterprise/Developer commercial image only | RabbitMQ default bundled locally; AMQP_TYPE can select ActiveMQ replacement. Startup gates broker initialization on commercial edition. No external broker requirement established for current Community path. [1](https://raw.githubusercontent.com/ONLYOFFICE/Docker-DocumentServer/master/README.md) [2](https://raw.githubusercontent.com/ONLYOFFICE/Docker-DocumentServer/master/run-document-server.sh) |
| Redis | conditional | — | Enterprise/Developer commercial image only | Bundled locally or externalizable through commercial dependency parameters; startup gates service initialization on commercial edition. No external Redis prerequisite claimed for current Community. [1](https://raw.githubusercontent.com/ONLYOFFICE/Docker-DocumentServer/master/README.md) [2](https://raw.githubusercontent.com/ONLYOFFICE/Docker-DocumentServer/master/run-document-server.sh) |

Resources: CPU Dual-core 2 GHz or better; memory 4 GB RAM or more; at least4 GB swap, OS dependent; storage 40 GB free disk minimum; OS amd64 Linux, kernel3.10+ for documented Docker path. Current Community Docker installation hardware minimums; dedicated DigitalOcean example recommends4 CPUs/8 GB, a larger deployment choice rather than revised universal minimum. [1](https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-docker.aspx)

## One-click and installer options

Status: **offered**. Official Docs Community documentation provides DigitalOcean Marketplace one-click image; cloud server charges separate. Manual Docker run is a command-line alternative, not graphical one-click. [1](https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-digitalocean.aspx)

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [ONLYOFFICE Docs DigitalOcean Marketplace](https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-digitalocean.aspx): **marketplace**, first-party. First-party documented one-click app deploys Ubuntu/Docker/Docs. Choose droplet size and then integrate storage platform. [1](https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-digitalocean.aspx)

[Structured profile](../../research/profiles/onlyoffice-docs.json) · [Claim ledger](../../research/profile-claims/onlyoffice-docs.jsonl) · [Research steps](../../research/profile-audits/onlyoffice-docs.md)
