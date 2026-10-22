# NetBird Community Edition

[Product](https://netbird.io/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

NetBird GmbH (business); ownership: **private**; funding: **funded**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official imprint identifies Berlin NetBird GmbH. Investor announces $10M Series A in January 2026 led by Pace with Nauta/InReach/Antler. Founding-year sources conflict (2021 project/2022 earlier investor statement), so company year unresolved. [1](https://netbird.io/imprint) [2](https://www.nautacapital.com/news-insights/netbird-10m-series-a)

Known investors: [Pace Capital](https://www.nautacapital.com/news-insights/netbird-10m-series-a), [Nauta Capital](https://www.nautacapital.com/news-insights/netbird-10m-series-a), [InReach Ventures](https://www.nautacapital.com/news-insights/netbird-10m-series-a), [Antler](https://www.nautacapital.com/news-insights/netbird-10m-series-a).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community Edition | free | USD 0/user | USD 0/user | — | — | unspecified | self-hosted community core. Commercial self-hosted enterprise gates separate from open core. [1](https://docs.netbird.io/selfhosted/enterprise) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial product. No explicit most-popular/recommended designation found on the checked page. [1](https://netbird.io/pricing) |
| business | Business | published | EUR 12/active cloud user | — | — | — | unspecified | vendor commercial cloud. EUR page rendered €12/user/month; not self-hosted license price. Additional machines €0.50/month. Annual commitment/discount not established. [1](https://netbird.io/pricing) |
| enterprise | Enterprise Commercial License | quote | — | — | — | — | unspecified | paid self-hosted enterprise licensing. Commercial features described separately; public amount not verified. [1](https://docs.netbird.io/selfhosted/enterprise) |

## Defensibility assessments

- Integrated peer/routing/DNS administration and growing community create adoption momentum, but competing WireGuard overlays limit protocol-level differentiation. [1](https://netbird.io/pricing) [2](https://www.nautacapital.com/news-insights/netbird-10m-series-a)

## Three product reasons to consider it

1. Peer-to-peer encrypted connections and network routes cover device and site connectivity. [1](https://netbird.io/pricing)
2. Private DNS and access controls simplify application discovery while restricting network reach. [1](https://netbird.io/pricing)
3. NetBird SSH and the management dashboard combine remote access with network administration. [1](https://netbird.io/pricing)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsor identified in checked official sources; verified business steward included. [1](https://netbird.io/imprint)

- [NetBird GmbH](https://netbird.io/imprint): business-steward. [Evidence](https://netbird.io/imprint).

## Self-operation requirements

Mode: **server**. Current combined setup, not older mandatory external IdP/Coturn multi-container instructions. Public domain and TCP80/443, UDP3478 required. SMTP not established as baseline dependency. [1](https://docs.netbird.io/selfhosted/selfhosted-quickstart)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker with Compose v2+ | required | — | Always | Documented deployment component. [1](https://docs.netbird.io/selfhosted/selfhosted-quickstart) |
| Combined netbird-server (management, signal, relay, STUN) plus dashboard | required | — | Always | Documented deployment component. [1](https://docs.netbird.io/selfhosted/selfhosted-quickstart) |
| SQLite embedded | one-of | database | Default management/auth/activity storage | Documented deployment component. [1](https://docs.netbird.io/selfhosted/maintenance/configuration-files) |
| PostgreSQL | one-of | database | External database; recommended production and HA | Documented deployment component. [1](https://docs.netbird.io/selfhosted/maintenance/configuration-files) |
| MySQL (deprecated) | one-of | database | Legacy management store only; migration advised | Documented deployment component. [1](https://docs.netbird.io/selfhosted/maintenance/configuration-files) |
| Traefik or existing supported HTTPS reverse proxy | required | — | Always | Documented deployment component. [1](https://docs.netbird.io/selfhosted/selfhosted-quickstart) |
| External OIDC identity provider | optional | — | Embedded Dex/local user management is default | Documented deployment component. [1](https://docs.netbird.io/selfhosted/selfhosted-quickstart) |
| CrowdSec LAPI | optional | — | Optional reverse-proxy IP reputation feature | Documented deployment component. [1](https://docs.netbird.io/selfhosted/selfhosted-quickstart) |

Resources: CPU 1 CPU minimum; memory 2GB minimum; storage not specified; OS Linux VM. Quickstart explicit VM requirements. [1](https://docs.netbird.io/selfhosted/selfhosted-quickstart)

## One-click and installer options

Status: **offered**. Officially documented install options; one-command is separate from browser one-click. [1](https://docs.netbird.io/selfhosted/selfhosted-quickstart)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Official getting-started installer](https://docs.netbird.io/selfhosted/selfhosted-quickstart): **one-command**, first-party. Interactive shell installer generates Compose; not browser one-click. [1](https://docs.netbird.io/selfhosted/selfhosted-quickstart)

[Structured profile](../../research/profiles/netbird.json) · [Claim ledger](../../research/profile-claims/netbird.jsonl) · [Research steps](../../research/profile-audits/netbird.md)
