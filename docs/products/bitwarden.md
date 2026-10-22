# Bitwarden

[Product](https://bitwarden.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Bitwarden, Inc. (business); ownership: **private**; funding: **funded**.

Started 2016 (company-founded); years active: 10; years in business: 10. Ages are approximate calendar-year differences as of 2026-10-21.

About page identifies Bitwarden, Inc. and founding in 2016; parent of 8bit Solutions LLC. 2022 minority growth investment led by PSG with Battery participation; no later ownership change established. [1](https://bitwarden.com/about/) [2](https://bitwarden.com/blog/accelerating-value-for-bitwarden-users-bitwarden-raises-usd100-million/?trk=article-ssr-frontend-pulse_little-text-block)

Known investors: [PSG](https://bitwarden.com/blog/accelerating-value-for-bitwarden-users-bitwarden-raises-usd100-million/?trk=article-ssr-frontend-pulse_little-text-block), [Battery Ventures](https://bitwarden.com/blog/accelerating-value-for-bitwarden-users-bitwarden-raises-usd100-million/?trk=article-ssr-frontend-pulse_little-text-block).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|
| entry | Free | free | USD 0/user | USD 0/user | — | unspecified | free password-manager core/cloud account. Unlimited passwords/devices; separate paid features and infrastructure costs. [1](https://bitwarden.com/pricing/) |
| popular | unknown | unknown | — | — | — | unspecified | vendor commercial product. No explicit most-popular/recommended designation found on the checked page. [1](https://bitwarden.com/pricing/) |
| business | Teams | published | — | USD 48/user | — | unspecified | vendor commercial cloud organization. $4/user/month billed annually multiplied by 12; Teams is not the self-hosted Enterprise entitlement. [1](https://bitwarden.com/pricing/) |
| enterprise | Enterprise | published | — | USD 72/user | — | unspecified | commercial enterprise organization; cloud or eligible self-host licensing. $6/user/month billed annually multiplied by 12; verify applicable self-host entitlements before purchase. [1](https://bitwarden.com/pricing/) |

## Defensibility assessments

- Open-source client/server ecosystem and broad device coverage support trust and workflow retention, though credential export limits lock-in. [1](https://bitwarden.com/about/) [2](https://bitwarden.com/pricing/)

## Three product reasons to consider it

1. Cross-platform apps and browser extensions keep password/passkey access consistent across devices. [1](https://bitwarden.com/pricing/)
2. Bitwarden Send enables encrypted transmission to people without a Bitwarden account. [1](https://bitwarden.com/pricing/)
3. Organization collections and permissions organize shared credentials for teams. [1](https://bitwarden.com/pricing/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsor identified in checked official sources; verified business steward included. [1](https://bitwarden.com/about/)

- [Bitwarden, Inc.](https://bitwarden.com/about/): business-steward. [Evidence](https://bitwarden.com/about/).

## Self-operation requirements

Mode: **server**. Standard Docker deployment uses bundled SQL Server Express. Other Bitwarden deployment editions may differ; not conflated with Vaultwarden. [1](https://bitwarden.com/help/install-on-premise-linux/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Engine 26+ and Docker Compose | required | — | Always | Documented deployment component. [1](https://bitwarden.com/help/install-on-premise-linux/) |
| MSSQL Express bundled, or supported external SQL Server | one-of | database | Standard deployment | Documented deployment component. [1](https://bitwarden.com/help/install-on-premise-linux/) |
| SMTP server | conditional | — | Invitations and email verification | Documented deployment component. [1](https://bitwarden.com/help/install-on-premise-linux/) |

Resources: CPU x64 1.4GHz minimum; x64 2GHz dual core recommended; memory 2GB minimum; 4GB recommended; storage 12GB minimum; 25GB recommended; OS Linux; separate Windows installation documented. Official standard-deployment minimum and recommended values. [1](https://bitwarden.com/help/install-on-premise-linux/)

## One-click and installer options

Status: **offered**. Officially documented install options; one-command is separate from browser one-click. [1](https://bitwarden.com/help/install-on-premise-linux/)

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [DigitalOcean marketplace](https://marketplace.digitalocean.com/apps/bitwarden): **marketplace**, officially-linked-third-party. Official deployment guide links provider marketplace. [1](https://bitwarden.com/help/install-on-premise-linux/)

[Structured profile](../../research/profiles/bitwarden.json) · [Claim ledger](../../research/profile-claims/bitwarden.jsonl) · [Research steps](../../research/profile-audits/bitwarden.md)
