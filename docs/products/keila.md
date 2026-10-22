# Keila

[Product](https://www.keila.io/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Pentacent / Keila (business); ownership: **private**; funding: **bootstrapped**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Pricing FAQ explicitly calls Keila a small bootstrapped business. Pentacent commercial site and repository stewardship verified; exact business/project founding year unresolved after primary searches. Private sponsor identities not guessed. [1](https://www.keila.io/pricing/) [2](https://pentacent.com/) [3](https://github.com/sponsors/pentacent)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open-source self-hosted | free | EUR 0/instance | — | — | — | unspecified | free self-hosted core. No proprietary premium features; infrastructure/email transport separate. Cloud starts€8/month for2,000emails. [1](https://www.keila.io/) |
| popular | unknown | unknown | — | — | — | — | unspecified | product plans. No explicitly highlighted Most popular or Recommended plan found in the public pricing page. [1](https://www.keila.io/pricing/) |
| business | unknown | not-offered | — | — | — | — | unspecified | vendor commercial cloud. Cloud plans are XS–XXL volume bands with unlimited contacts/projects, not a separate Team/Business edition. [1](https://www.keila.io/pricing/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | vendor commercial cloud. No named Enterprise plan in volume-band cloud catalog; self-host setup assistance available by contact. [1](https://www.keila.io/pricing/) |

## Defensibility assessments

- Focused open newsletter workflow and flexible templating offer customization value; no exclusive platform network effect is evidenced. [1](https://www.keila.io/)

## Three product reasons to consider it

1. Block, Markdown, MJML and plain-text editors support different newsletter authoring styles. [1](https://www.keila.io/)
2. Liquid templates and JSON contact data support deeply personalized campaign content. [1](https://www.keila.io/)
3. Visual segmentation and configurable tracking combine audience targeting with privacy controls. [1](https://www.keila.io/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsorship established in the checked project/business pages; commercial steward included as business fallback. [1](https://pentacent.com/)

- [Pentacent / Keila](https://pentacent.com/): business-steward. [Evidence](https://pentacent.com/).

## Self-operation requirements

Mode: **server**. Container+PostgreSQL default; background processing within application, no separate Redis/queue documented. Select external delivery service. Official docs do not publish CPU/RAM/storage minima. [1](https://www.keila.io/docs/installation/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Container engine and pentacent/keila image | required | — | Documented deployment route includes Elixir/Phoenix runtime. | Documented production component. [1](https://www.keila.io/docs/installation/) |
| PostgreSQL | required | — | Always; DB_URL required. | Documented production component. [1](https://www.keila.io/docs/configuration/) |
| SMTP | one-of | email-transport | Choose a campaign sender. | Documented production component. [1](https://www.keila.io/docs/senders/) |
| AWS SES / Sendgrid / Mailgun / Postmark API | one-of | email-transport | Alternative campaign sender; provider account/key needed. | Documented production component. [1](https://www.keila.io/docs/senders/) |
| WebSocket-capable reverse proxy | conditional | — | When running behind proxy; preserve WebSocket forwarding. | Documented production component. [1](https://www.keila.io/docs/installation/) |
| hCaptcha / Friendly Captcha | optional | — | Form bot protection when enabled. | Documented production component. [1](https://www.keila.io/) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. No numerical hardware minima verified in the cited deployment documentation. [1](https://www.keila.io/docs/installation/)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual Docker Compose or source installation does not qualify as one-click. [1](https://www.keila.io/docs/installation/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/keila.json) · [Claim ledger](../../research/profile-claims/keila.jsonl) · [Research steps](../../research/profile-audits/keila.md)
