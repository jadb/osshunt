# Chatwoot

[Product](https://www.chatwoot.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Chatwoot Inc. (business); ownership: **private**; funding: **funded**.

Started 2020 (company-founded); years active: 6; years in business: 6. Ages are approximate calendar-year differences as of 2026-10-21.

Company founded2020 per investor profile; older project history is not company age. Official handbook names $1.6M seed backers; no separate corporate sponsor identified. [1](https://www.ycombinator.com/companies/chatwoot) [2](https://chatwoot.help/hc/handbook/articles/investors-27)

Known investors: [Goat Capital](https://chatwoot.help/hc/handbook/articles/investors-27), [Uncorrelated Ventures](https://chatwoot.help/hc/handbook/articles/investors-27), [Y Combinator](https://chatwoot.help/hc/handbook/articles/investors-27), [Serra Angels](https://chatwoot.help/hc/handbook/articles/investors-27), [Hack VC](https://chatwoot.help/hc/handbook/articles/investors-27), [Austen Allred](https://chatwoot.help/hc/handbook/articles/investors-27), [Kurt Mackey](https://chatwoot.help/hc/handbook/articles/investors-27), [Mikhail Seregine](https://chatwoot.help/hc/handbook/articles/investors-27).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community Edition | free | USD 0/agent | — | — | — | unspecified | free self-hosted core. Free OSS core; paid enterprise features and infrastructure separate. [1](https://www.chatwoot.com/pricing/self-hosted-plans) |
| popular | Business | published | USD 39/agent | — | — | — | unspecified | vendor commercial cloud. Explicit Most popular cloud plan; self-host edition differs. Published $39/agent/month. [1](https://www.chatwoot.com/pricing) |
| business | Business | published | USD 39/agent | — | — | — | unspecified | vendor commercial cloud. Named Business cloud plan; teams and automation included. Self-host Premium Support separately lists $19/agent/month. [1](https://www.chatwoot.com/pricing) |
| enterprise | Enterprise Edition | published | USD 99/agent | — | — | — | unspecified | paid self-host edition. Paid self-host license/services; published $99/agent/month; hardware extra. [1](https://www.chatwoot.com/pricing/self-hosted-plans) |

## Defensibility assessments

- Open core plus multichannel inbox ecosystem enables customization, while channel integrations and conversation history create moderate switching costs. [1](https://www.ycombinator.com/companies/chatwoot)

## Three product reasons to consider it

1. Unified inbox combines website live chat, email and social messaging conversations. [1](https://www.ycombinator.com/companies/chatwoot)
2. Team assignment and automation rules coordinate conversation triage. [1](https://www.chatwoot.com/pricing)
3. Help-center articles let customers find answers alongside conversational support. [1](https://www.chatwoot.com/pricing)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsorship established in the checked project/business pages; commercial steward included as business fallback. [1](https://www.ycombinator.com/companies/chatwoot)

- [Chatwoot](https://www.ycombinator.com/companies/chatwoot): business-steward. [Evidence](https://www.ycombinator.com/companies/chatwoot).

## Self-operation requirements

Mode: **server**. Production web+worker+PostgreSQL+Redis stack; native build needs Node24/pnpm10 for frontend assets. SMTP/local Postfix are mail alternatives; object storage optional. [1](https://developers.chatwoot.com/self-hosted/deployment/requirements)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Ruby on Rails web application | required | — | Always; provided by production image. | MRI Ruby 3.4.4 currently documented; pin release runtime. [1](https://developers.chatwoot.com/self-hosted/deployment/requirements) |
| PostgreSQL | required | — | Always; only supported SQL backend. | Documented production component. [1](https://developers.chatwoot.com/self-hosted/deployment/requirements) |
| Redis | required | — | Always; queue/cache. | Redis7+ recommended. [1](https://developers.chatwoot.com/self-hosted/deployment/requirements) |
| Sidekiq workers | required | — | Always; background processing. | Documented production component. [1](https://developers.chatwoot.com/self-hosted/deployment/requirements) |
| SMTP service | one-of | mail-transport | Production email delivery. | External SMTP including SES or SendGrid. [1](https://developers.chatwoot.com/self-hosted/configuration/environment-variables) |
| Postfix | one-of | mail-transport | Production email delivery when SMTP_ADDRESS is unset. | Local mail-server path; outbound port25 and DNS required. [1](https://developers.chatwoot.com/self-hosted/configuration/environment-variables) |
| Nginx or reverse proxy | required | — | Public production Docker deployment. | Documented production component. [1](https://developers.chatwoot.com/self-hosted/deployment/docker) |
| S3-compatible / Azure / GCS object storage | optional | — | Replace local attachment storage when desired. | Documented production component. [1](https://developers.chatwoot.com/self-hosted/deployment/requirements) |
| Channel developer credentials | conditional | — | Only for configured external social/messaging channels. | Provider setup and approvals depend on channel. [1](https://developers.chatwoot.com/self-hosted/configuration/environment-variables) |

Resources: CPU 4 cores recommended minimum; memory 4GB minimum plus at least1GB swap; storage PostgreSQL5–10GB available; attachments depend on usage; OS Linux; Ubuntu supported; requirements page still lists20.04. Requirements-page sizing supports up to10,000 conversations/day; DigitalOcean guide recommends4vCPU/8GB. Follow release-specific runtime pins. [1](https://developers.chatwoot.com/self-hosted/deployment/requirements) [2](https://developers.chatwoot.com/self-hosted/deployment/digitalocean)

## One-click and installer options

Status: **offered**. Official DigitalOcean guide explicitly links 1-click k8s marketplace. Docker Compose instructions are manual. [1](https://developers.chatwoot.com/self-hosted/deployment/digitalocean)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [DigitalOcean Kubernetes marketplace](https://developers.chatwoot.com/self-hosted/deployment/digitalocean): **marketplace**, officially-linked-third-party. Official docs link a 1-click Kubernetes marketplace app; droplet instructions themselves remain manual. [1](https://developers.chatwoot.com/self-hosted/deployment/digitalocean)

[Structured profile](../../research/profiles/chatwoot.json) · [Claim ledger](../../research/profile-claims/chatwoot.jsonl) · [Research steps](../../research/profile-audits/chatwoot.md)
