# Ghost

[Product](https://ghost.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Ghost Foundation (foundation); ownership: **nonprofit**; funding: **bootstrapped**.

Started 2013 (company-founded); years active: 13; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Founded April 2013. Nonprofit constitution prevents acquisition; revenue from Ghost(Pro) sustains development. Self-funded service model is explicit; corporate in-kind sponsors are separate from equity investors. [1](https://ghost.org/about/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open-source core | free | USD 0/site | — | — | — | unspecified | free self-hosted core. Software license cost is zero; infrastructure, extensions and external services can cost extra. [1](https://github.com/TryGhost/Ghost) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified on the current public pricing page. [1](https://ghost.org/pricing/) |
| business | Business | published | — | USD 2388/publication up to 1,000 members (card setting) | — | — | unspecified | vendor commercial cloud. Ghost(Pro) commercial managed service, distinct from free code. $199/month billed yearly ×12; card and comparison table have differing member limits, confirm selected audience at checkout. [1](https://ghost.org/pricing/) |
| enterprise | Custom | quote | — | — | — | — | unspecified | vendor commercial cloud. Custom configuration and member limits; Get in touch for pricing. [1](https://ghost.org/pricing/) |

## Defensibility assessments

- Its publication and membership specialization plus reader-discovery integrations can create workflow switching costs for independent publishers. [1](https://ghost.org/pricing/)

## Three product reasons to consider it

1. Membership tiers and Stripe subscriptions let publications run gated content and paid reader relationships. [1](https://ghost.org/pricing/)
2. Native email newsletters combine publishing and subscriber delivery in one editorial workflow. [1](https://ghost.org/pricing/)
3. ActivityPub distribution and publication recommendations provide built-in readership discovery workflows. [1](https://ghost.org/pricing/)

## Corporate sponsorship

Status: **identified**. Official partners page thanks businesses providing services and sponsorships; DigitalOcean powers Ghost(Pro), and Fastly is listed. These are not equity investors. [1](https://ghost.org/partners/)

- [DigitalOcean](https://www.digitalocean.com/): corporate-sponsor. [Evidence](https://ghost.org/partners/).
- [Fastly](https://www.fastly.com/): corporate-sponsor. [Evidence](https://ghost.org/partners/).

## Self-operation requirements

Mode: **server**. Recommended CLI production path plus explicitly labeled preview Docker alternative. Mail delivery and bulk-newsletter service configuration should be planned separately; no mandatory Redis is listed in baseline. [1](https://docs.ghost.org/install/ubuntu/) [2](https://docs.ghost.org/install/docker/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Node.js supported LTS | required | — | Always | Use supported Node release for the installed Ghost major. [1](https://docs.ghost.org/install/ubuntu/) |
| MySQL 8.0 or 8.4 | required | — | Always | Production database; SQLite is not represented as supported production alternative. [1](https://docs.ghost.org/install/ubuntu/) |
| NGINX | conditional | — | Recommended Ubuntu Ghost-CLI stack | Minimum 1.9.5 for SSL. [1](https://docs.ghost.org/install/ubuntu/) |
| systemd | conditional | — | Ubuntu Ghost-CLI stack | Documented deployment component. [1](https://docs.ghost.org/install/ubuntu/) |
| Docker Compose and Caddy | conditional | — | Alternative preview Docker stack | Replaces CLI NGINX/systemd setup; MySQL remains. [1](https://docs.ghost.org/install/docker/) |
| Tinybird | optional | — | For Docker web analytics | External analytics service account; distinct from Ghost core. [1](https://docs.ghost.org/install/docker/) |
| ActivityPub service | optional | — | For social web features | Docker can self-host; CLI uses Ghost(Pro) hosted ActivityPub service. [1](https://docs.ghost.org/install/docker/) |

Resources: CPU not specified; memory 1 GB minimum; storage not specified; OS Ubuntu 22.04, 24.04 or 26.04 recommended. Official CLI prerequisite: at least 1 GB RAM; CPU and disk minimum not specified. [1](https://docs.ghost.org/install/ubuntu/) [2](https://docs.ghost.org/install/docker/)

## One-click and installer options

Status: **offered**. Verified officially linked DigitalOcean app; Ghost-CLI is a separate command-driven install. [1](https://docs.ghost.org/install/digitalocean/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [DigitalOcean Ghost marketplace app](https://marketplace.digitalocean.com/apps/ghost): **marketplace**, officially-linked-third-party. Official docs call it an officially supported 1-click app; account, SSH and domain configuration still required. [1](https://docs.ghost.org/install/digitalocean/)

[Structured profile](../../research/profiles/ghost.json) · [Claim ledger](../../research/profile-claims/ghost.jsonl) · [Research steps](../../research/profile-audits/ghost.md)
