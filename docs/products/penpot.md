# Penpot

[Product](https://penpot.app) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Kaleidos (business); ownership: **private**; funding: **funded**.

Started 2011 (company-founded); years active: 15; years in business: 15. Ages are approximate calendar-year differences as of 2026-10-21.

Kaleidos founded 2011; Penpot project launched later. Company-operated product; official 2021 seed and 2022 Series A establish funding. Named investors historical; 2026 rumored/public-private round not verified from primary announcement here. [1](https://www.kaleidos.net/) [2](https://community.penpot.app/t/penpot-our-time-has-come/1563) [3](https://www.kaleidos.net/blog/Taiga-and-Penpot-lead-our-new-chapter-at-Kaleidos)

Known investors: [Decibel Partners](https://community.penpot.app/t/penpot-our-time-has-come/1563), [Athos Capital](https://community.penpot.app/t/penpot-our-time-has-come/1563), [CDTI Innvierte](https://community.penpot.app/t/penpot-our-time-has-come/1563), [Eric Wittman](https://community.penpot.app/t/penpot-our-time-has-come/1563), [Dave Crossland](https://community.penpot.app/t/penpot-our-time-has-come/1563).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Professional | free | USD 0/user | USD 0/user | — | — | unspecified | self-host core. Unlimited users/teams/files and all design/prototyping; infrastructure separate. [1](https://penpot.app/pricing/self-host) |
| popular | unknown | unknown | — | — | — | — | unspecified | paid product. No public designation or amount established from checked pricing page. [1](https://penpot.app/pricing/self-host) |
| business | Professional | free | USD 0/user | USD 0/user | — | — | unspecified | self-host team core. Closest team-capable core plan; advanced organizational governance belongs to Enterprise. [1](https://penpot.app/pricing/self-host) |
| enterprise | Enterprise | published | USD 25/member; organization floor $950/month | — | — | — | unspecified | paid self-host governance license. Published $25/member/month starting at $950/month organization; minimum seat quantity and annual commitment not established. [1](https://penpot.app/pricing/self-host) |

## Defensibility assessments

- Web-standard design artifacts and shared design systems create workflow investment while open formats reduce proprietary lock-in. [1](https://penpot.app/features)

## Three product reasons to consider it

1. SVG-native vector editing keeps designs aligned with web graphics. [1](https://penpot.app/features)
2. Flex and CSS Grid layouts reproduce responsive web layout behavior. [1](https://penpot.app/features)
3. Shared components and design systems keep interface assets consistent across teams. [1](https://penpot.app/features)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsorship roster found in checked official company/product sources; verified product business included. Equity investors not reclassified as sponsors. [1](https://www.kaleidos.net/)

- [Kaleidos](https://www.kaleidos.net/): business-steward. [Evidence](https://www.kaleidos.net/).

## Self-operation requirements

Mode: **server**. 2.18 compose plus current technical docs verified. Cache/websocket services and PostgreSQL required on standard path. Filesystem default; S3 alternative. SMTP required for real email flows, mailcatcher for evaluation. CPU/RAM recommendation is scale example, not enforced minimum. [1](https://help.penpot.app/technical-guide/getting-started/docker/) [2](https://raw.githubusercontent.com/penpot/penpot/main/docker/images/docker-compose.yaml) [3](https://help.penpot.app/technical-guide/getting-started/recommended-settings/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker with Compose | one-of | orchestration | Official container deployment | Local runtime component; bundled by official binary where applicable. [1](https://help.penpot.app/technical-guide/getting-started/docker/) |
| Kubernetes with official Helm chart | one-of | orchestration | Alternative orchestration | Local runtime component; bundled by official binary where applicable. [1](https://help.penpot.app/technical-guide/getting-started/docker/) |
| Penpot frontend/backend/exporter services | required | — | Always | Local runtime component; bundled by official binary where applicable. [1](https://raw.githubusercontent.com/penpot/penpot/main/docker/images/docker-compose.yaml) |
| PostgreSQL 15 | required | — | Always | Default compose database, persistent volume; not an optional external service. [1](https://raw.githubusercontent.com/penpot/penpot/main/docker/images/docker-compose.yaml) |
| Valkey 8.1 | one-of | cache | Current compose cache and websocket notifications | Local runtime component; bundled by official binary where applicable. [1](https://raw.githubusercontent.com/penpot/penpot/main/docker/images/docker-compose.yaml) |
| Redis | one-of | cache | Documented compatible cache alternative | Local runtime component; bundled by official binary where applicable. [1](https://help.penpot.app/technical-guide/getting-started/recommended-settings/) |
| Filesystem asset volume | one-of | asset-storage | Default asset storage | Local runtime component; bundled by official binary where applicable. [1](https://raw.githubusercontent.com/penpot/penpot/main/docker/images/docker-compose.yaml) |
| S3-compatible object storage | one-of | asset-storage | Configured alternative to filesystem | Local runtime component; bundled by official binary where applicable. [1](https://raw.githubusercontent.com/penpot/penpot/main/docker/images/docker-compose.yaml) |
| SMTP provider | conditional | — | Production registration confirmations and invitations | Compose mailcatcher is temporary testing substitute, not production mail delivery. [1](https://raw.githubusercontent.com/penpot/penpot/main/docker/images/docker-compose.yaml) |
| Admin console service | conditional | — | Enterprise administration | 2.18 compose includes console and MCP services; governance license scope separate. [1](https://raw.githubusercontent.com/penpot/penpot/main/docker/images/docker-compose.yaml) |

Resources: CPU 4 CPUs sufficient for thousands of users (recommendation); memory 16GB sufficient for thousands of users (not minimum); storage Recommended elastic database baseline 50–100GB for up to 10 editors; OS Linux server; recent browser on user devices. Recommended-settings server figures; storage scales with documents. Elestio guide separately suggests 2GB for 20-person managed team, not same deployment envelope. [1](https://help.penpot.app/technical-guide/getting-started/recommended-settings/)

## One-click and installer options

Status: **offered**. Checked official deployment documentation; manual Docker Compose is not a one-click offer. [1](https://help.penpot.app/technical-guide/getting-started/docker/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Elestio](https://help.penpot.app/technical-guide/getting-started/elestio/): **marketplace**, officially-linked-third-party. Official guide walks managed service creation; dedicated instance deployed through marketplace settings. [1](https://help.penpot.app/technical-guide/getting-started/elestio/)
- [TrueNAS Apps](https://apps.truenas.com/catalog/penpot/): **marketplace**, officially-linked-third-party. Official installation page links this distribution; not a hosted server deployment. [1](https://help.penpot.app/technical-guide/getting-started/)

[Structured profile](../../research/profiles/penpot.json) · [Claim ledger](../../research/profile-claims/penpot.jsonl) · [Research steps](../../research/profile-audits/penpot.md)
