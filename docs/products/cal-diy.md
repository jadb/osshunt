# Cal.diy

[Product](https://www.cal.diy) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Cal.diy community; originated by Cal.com, Inc. (community); ownership: **community**; funding: **not-applicable**.

Started 2026 (product-launched); years active: 0; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

2026 company announcement identifies Cal.diy spinout; project carries older Cal.com history. Community-maintained MIT edition has no standalone equity cap table. Cal.com Inc venture funding listed in related commercial product, not treated as corporate sponsorship of community edition. [1](https://www.cal.diy/) [2](https://raw.githubusercontent.com/calcom/cal.diy/main/README.md) [3](https://www.prnewswire.com/news-releases/open-source-is-collapsing-under-ai-powered-threats--calcom-302742216.html)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Cal.diy | free | USD 0/instance | — | — | — | unspecified | free self-hosted software. MIT community edition; no license key. Server/provider costs separate; vendor recommends personal/non-production use. [1](https://raw.githubusercontent.com/calcom/cal.diy/main/README.md) |
| popular | unknown | unknown | — | — | — | — | unspecified | product plans. No explicitly highlighted Most popular or Recommended plan found in the public pricing page. [1](https://www.cal.diy/) |
| business | unknown | not-offered | — | — | — | — | unspecified | Cal.diy community edition. Team/organization features removed from community edition; paid Cal.com a distinct product. [1](https://www.cal.diy/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | Cal.diy community edition. No proprietary Enterprise edition within Cal.diy; commercial on-prem Cal.com access separate. [1](https://www.cal.diy/) |

## Defensibility assessments

- MIT code and broad inherited scheduling integrations permit substantial customization, but missing team workflows and forkability limit exclusive defensibility. [1](https://raw.githubusercontent.com/calcom/cal.diy/main/README.md)

## Three product reasons to consider it

1. Recurring and seated event types support repeat sessions and capacity-limited bookings. [1](https://www.cal.diy/)
2. Date overrides, travel schedules and booking buffers express personal availability constraints. [1](https://www.cal.diy/)
3. Calendar/video integrations and embedded booking pages connect appointments to existing work tools. [1](https://www.cal.diy/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsorship established in the checked project/business pages; commercial steward included as business fallback. [1](https://www.cal.diy/)

- [Cal.com, Inc.](https://www.cal.diy/): business-steward. [Evidence](https://www.cal.diy/).

## Self-operation requirements

Mode: **server**. Source/native or Docker app+Postgres; no required Redis detected in official default requirements. Integration provider keys conditional. Documentation contains production-build guidance while overall project recommendation remains personal/non-production. [1](https://www.cal.diy/installation)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Node.js/Next.js application | required | — | Always; README>=18.x, check release pins. | Documented production component. [1](https://raw.githubusercontent.com/calcom/cal.diy/main/README.md) |
| PostgreSQL13+ | required | — | Always; Prisma database. | Documented production component. [1](https://raw.githubusercontent.com/calcom/cal.diy/main/README.md) |
| Yarn/Git | conditional | — | Source installation/build only; supplied containers avoid manual install tooling. | Documented production component. [1](https://www.cal.diy/installation) |
| SMTP or Resend email transport | conditional | — | Booking/account email delivery; localhost Mailhog is development default. | Documented production component. [1](https://raw.githubusercontent.com/calcom/cal.diy/main/.env.example) |
| Google/Microsoft/CalDAV credentials | conditional | — | Only selected calendar synchronization integrations. | Documented production component. [1](https://raw.githubusercontent.com/calcom/cal.diy/main/README.md) |
| Video provider credentials (Daily/Zoom etc.) | conditional | — | Only selected conferencing integration; external API. | Documented production component. [1](https://www.cal.diy/) |
| Stripe/PayPal account | conditional | — | Only paid-event booking workflows. | Documented production component. [1](https://www.cal.diy/) |
| Cron scheduler | conditional | — | Only features whose cron endpoints require periodic execution. | Documented production component. [1](https://www.cal.diy/installation) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. No numerical hardware minima verified in the cited deployment documentation. [1](https://www.cal.diy/installation)

## One-click and installer options

Status: **unknown**. Official Railway, Render and Elestio pages describe One Click Deployment but extracts expose no actual actionable deploy button/template URL. Options not verified enough to list; manual Docker/source route confirmed. [1](https://www.cal.diy/installation)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/cal-diy.json) · [Claim ledger](../../research/profile-claims/cal-diy.jsonl) · [Research steps](../../research/profile-audits/cal-diy.md)
