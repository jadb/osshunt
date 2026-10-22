# Collabora Online

[Product](https://www.collaboraonline.com/code/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Collabora Productivity (business); ownership: **unknown**; funding: **unknown**.

Started 2013 (company-founded); years active: 13; years in business: 13. Ages are approximate calendar-year differences as of 2026-10-21.

Parent: Collabora (division/group affiliation).

Collabora Productivity incorporated September2013; broader Collabora consultancy founded2005. Official About calls Productivity a division of Collabora. Exact equity ownership/private listing status, financing history and investor identities not verified from inspected primary sources; no bootstrapping assumption. [1](https://www.collaboraonline.com/about-us/) [2](https://www.collaboraonline.com/blog/collabora-productivity-turns-10/) [3](https://www.collabora.com/about-us/who-we-are/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | CODE | free | USD 0/installation | — | — | — | unspecified | free self-hosted development edition. Rolling development build for home/testing/startups; vendor does not recommend CODE for production. Paid supported edition separate. [1](https://www.collaboraonline.com/subscriptions/) |
| popular | unknown | unknown | — | — | — | — | unspecified | Collabora editions. No public Most popular or Recommended plan designation found in the source inspected; no popularity inferred. [1](https://www.collaboraonline.com/subscriptions/) |
| business | Collabora Online for Business | published | — | USD 40.8/user | — | — | unspecified | paid self-hosted supported edition. Published USD$3.40/user/month; official FAQ says subscriptions based on yearly price, so annual total $3.40×12=$40.80. Up to99 users. Monthly-billed charge not verified; quote confirms final terms. [1](https://www.collaboraonline.com/subscriptions/) |
| enterprise | Collabora Online for Enterprise | quote | — | — | — | — | 100 | paid self-hosted supported edition. 100+ users; personalized volume discounts/contact sales, no fixed numeric enterprise price. [1](https://www.collaboraonline.com/subscriptions/) |

## Defensibility assessments

- LibreOffice-derived format/rendering expertise and WOPI integration ecosystem create substantial engineering specialization, though standards allow competing editor engines. [1](https://www.collaboraonline.com/about-us/) [2](https://www.collaboraonline.com/faqs/)

## Three product reasons to consider it

1. Writer, Calc, Impress and Draw cover collaborative text, spreadsheets, presentations and diagrams. [1](https://www.collaboraonline.com/fr/code/)
2. Pivot tables, formulas and per-user spreadsheet views support analytical spreadsheet work alongside collaboration. [1](https://www.collaboraonline.com/fr/code/)
3. Change tracking and history-based review workflows help teams inspect and control document revisions. [1](https://www.collaboraonline.com/faqs/)

## Corporate sponsorship

Status: **business-fallback**. Official company About identifies business developing Online and contributing LibreOffice engineering. Separate corporate financial/in-kind sponsor roster not found; business-steward fallback; integration partners not automatic sponsors. [1](https://www.collaboraonline.com/about-us/)

- [Collabora Productivity](https://www.collaboraonline.com/): business-steward. [Evidence](https://www.collaboraonline.com/about-us/).

## Self-operation requirements

Mode: **server**. CODE is rolling development edition, not a stable production release. Current official FAQ plus SDK25.04 installation chapter used because current HTML SDK hit bot challenge; current official Nextcloud app metadata confirms supported built-in integration. WOPI host dependencies must be budgeted separately. [1](https://www.collaboraonline.com/faqs/) [2](https://sdk.collaboraonline.com/25.04/CO-SDK-manual.pdf) [3](https://www.collaboraonline.com/fr/code/) [4](https://apps.nextcloud.com/apps/richdocumentscode)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Linux system/VM or container host | required | — | Server engine | CODE prebuilt Docker available for x86-64 and arm64, with ppc64le listed in SDK; no Windows-native server assumption. [1](https://sdk.collaboraonline.com/25.04/CO-SDK-manual.pdf) |
| Docker | conditional | — | CODE container path | Prebuilt image contains editor engine runtime; native Linux package path also exists. [1](https://sdk.collaboraonline.com/25.04/CO-SDK-manual.pdf) |
| WOPI-compatible document storage/authentication host | required | — | Functional document editing integration | Nextcloud/ownCloud or custom WOPI host provides persistent documents, access control and users; engine itself does not provide complete document platform. [1](https://www.collaboraonline.com/faqs/) |
| Reverse proxy with WebSocket support and TLS | conditional | — | Production HTTPS routing | Official integration guide recommends Apache/nginx reverse proxy; secure browser/WOPI URLs must be configured. [1](https://www.collaboraonline.com/fr/code/) |
| Database/cache services for integrated storage platform | conditional | — | Only if WOPI host requires them | No standalone SQL/Redis/RabbitMQ requirement for CODE engine verified; dependencies belong to chosen Nextcloud/other host. [1](https://www.collaboraonline.com/faqs/) |

Resources: CPU Vendor sizing expectation: about10 users per CPU thread; memory About1 GB system overhead plus50 MB per user, per vendor guidance; storage not specified; OS Linux server/VM; Docker image predominantly tested on Linux. Vendor capacity estimates, not guaranteed hardware minima. Document size/complexity changes usage; bandwidth guidance about100 kbit/s per user. No fixed storage minimum verified. [1](https://www.collaboraonline.com/faqs/)

## One-click and installer options

Status: **offered**. First-party Collabora-authored built-in CODE Server can be installed through existing Nextcloud App Store. This is an app marketplace integration, not independent turnkey cloud deployment. Manual Docker instructions alone not counted. [1](https://apps.nextcloud.com/apps/richdocumentscode) [2](https://collabora-online-for-nextcloud.readthedocs.io/en/stable/install/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Nextcloud built-in CODE Server](https://apps.nextcloud.com/apps/richdocumentscode): **marketplace**, first-party. Collabora Productivity authored app for existing Nextcloud. Needs Nextcloud Office integration and platform requirements; app edition has different operational characteristics from standalone Docker. [1](https://apps.nextcloud.com/apps/richdocumentscode)

[Structured profile](../../research/profiles/collabora-online.json) · [Claim ledger](../../research/profile-claims/collabora-online.jsonl) · [Research steps](../../research/profile-audits/collabora-online.md)
