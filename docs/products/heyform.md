# HeyForm

[Product](https://heyform.net) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

EarlyBird / HeyForm (business); ownership: **private**; funding: **bootstrapped**.

Started 2024 (project-started); years active: 2; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

2024 dates the open-source release announced April 5, not the original product or EarlyBird founding (both unresolved). About explicitly calls EarlyBird a bootstrapped SaaS company, run by Luo Baishun and Wu Qin. No equity investor asserted. [1](https://heyform.net/blog/open-source/) [2](https://heyform.net/about-us)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community Edition | free | USD 0/site | — | — | — | unspecified | free self-hosted core. Software license cost is zero; infrastructure, extensions and external services can cost extra. [1](https://github.com/heyform/heyform) |
| popular | Premium | published | — | USD 288/cloud workspace | — | — | unspecified | vendor commercial cloud. Explicit Most popular. $24/month billed annually ×12; hosted quotas differ from OSS code. Monthly-billed rate not verified. [1](https://heyform.net/pricing) |
| business | Business | published | — | USD 480/cloud workspace (up to 10 members) | — | — | unspecified | vendor commercial cloud. $40/month billed annually ×12; 150K responses/month. Commercial Cloud scope, not self-host license. [1](https://heyform.net/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | vendor commercial cloud. Custom pricing; Contact Sales. [1](https://heyform.net/pricing) |

## Defensibility assessments

- Differentiation rests on conversational UX and customizable form workflows; a modest ecosystem offers less defensibility than incumbent form platforms. [1](https://github.com/heyform/heyform)

## Three product reasons to consider it

1. Conversational forms combine varied input types with conditional logic and redirects for adaptive questionnaires. [1](https://github.com/heyform/heyform)
2. Visual themes and custom CSS let teams match forms to a detailed brand style. [1](https://github.com/heyform/heyform)
3. Drop-off/completion analytics and CSV export help diagnose form performance and reuse collected data. [1](https://github.com/heyform/heyform)

## Corporate sponsorship

Status: **business-fallback**. Official docs request sponsorship but no named corporate financial sponsor verified. EarlyBird is explicitly a bootstrapped SaaS business and supplied as verified steward fallback; testimonials and integrations are not sponsors. [1](https://docs.heyform.net/open-source/self-hosting) [2](https://heyform.net/about-us)

- [EarlyBird](https://earlybird.im/): business-steward. [Evidence](https://heyform.net/about-us).

## Self-operation requirements

Mode: **server**. Default path uses MongoDB and KeyDB; no SQL database. Bull queue settings use Redis-compatible service, not a separate broker. Docker requirements kept distinct from development tooling. [1](https://docs.heyform.net/open-source/self-hosting) [2](https://docs.heyform.net/open-source/configuration/environment-variables)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker and Docker Compose | required | — | Always | Documented deployment component. [1](https://docs.heyform.net/open-source/self-hosting) |
| MongoDB | required | — | Always | Official example uses Percona Server for MongoDB 4.4; exact current supported version range not specified. [1](https://docs.heyform.net/open-source/self-hosting) |
| KeyDB | one-of | cache-queue | Bundled KeyDB OR compatible external Redis | Architecture-specific 6.3.3 images for x86_64/ARM64. [1](https://docs.heyform.net/open-source/self-hosting) |
| Redis-compatible server | one-of | cache-queue | External Redis OR bundled KeyDB | Documented deployment component. [1](https://docs.heyform.net/open-source/configuration/environment-variables) |
| Node.js app runtime | required | — | Always | Bundled in community-edition container; separate Node setup not needed for Docker route. [1](https://github.com/heyform/heyform) |
| Nginx or HTTPS reverse proxy | conditional | — | Public HTTPS deployment; app itself serves HTTP | Documented deployment component. [1](https://docs.heyform.net/open-source/self-hosting) |
| S3-compatible storage | optional | — | Alternative upload storage; local persisted assets in default compose | Documented deployment component. [1](https://docs.heyform.net/open-source/configuration/environment-variables) |
| SMTP server | conditional | — | For email verification/notification delivery | Documented deployment component. [1](https://docs.heyform.net/open-source/configuration/environment-variables) |
| Stripe, reCAPTCHA/Akismet, OpenAI-compatible API or OIDC provider | optional | — | Enable corresponding payment, spam, AI or SSO integration | External provider costs may apply. [1](https://docs.heyform.net/open-source/configuration/environment-variables) |

Resources: CPU not specified; memory not specified; storage not specified; OS Docker-compatible Linux/macOS/Windows; matching KeyDB image architecture. Official setup guide gives no fixed CPU/RAM/disk minimum. [1](https://docs.heyform.net/open-source/self-hosting) [2](https://docs.heyform.net/open-source/configuration/environment-variables)

## One-click and installer options

Status: **offered**. Verified official-link target for Zeabur. Sealos, RepoCloud and Alibaba also named by docs but not independently validated here, so options limited to verified Zeabur target. [1](https://docs.heyform.net/open-source/self-hosting)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Zeabur HeyForm template](https://zeabur.com/templates/9YAUUO): **one-click**, officially-linked-third-party. Current self-host docs link this one-click template; custom domain requires APP_HOMEPAGE_URL update. [1](https://docs.heyform.net/open-source/self-hosting)

[Structured profile](../../research/profiles/heyform.json) · [Claim ledger](../../research/profile-claims/heyform.jsonl) · [Research steps](../../research/profile-audits/heyform.md)
