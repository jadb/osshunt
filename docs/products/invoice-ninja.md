# Invoice Ninja

[Product](https://invoiceninja.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Invoice Ninja LLC (business); ownership: **private**; funding: **bootstrapped**.

Started 2014 (company-founded); years active: 12; years in business: 12. Ages are approximate calendar-year differences as of 2026-10-21.

Founder-run company launched March 2014; official current story explicitly calls business 100% self-funded. No outside equity investors identified or implied. [1](https://invoiceninja.com/our-story/) [2](https://invoiceninja.com/self-hosting-terms/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Self-hosted | free | USD 0/organization | — | — | — | unspecified | free source-available self-hosted core. Self-hosted software free under ELv2, not OSI OSS. Optional annual white-label licensing and external services separate. [1](https://www.invoiceninja.org/) |
| popular | Ninja Pro | published | USD 14/account | USD 140/account | — | — | unspecified | vendor commercial cloud. Explicitly Most popular; $14/month or $140 annually per FAQ. Cloud plan, not a self-host fee. [1](https://invoiceninja.com/pricing-plans/) |
| business | Premium Business | published | — | USD 280/account | — | — | unspecified | vendor commercial cloud. Custom package advertised from $280/year; final scope and price require contact. Minimum published annual amount only. [1](https://invoiceninja.com/pricing-plans/) |
| enterprise | Enterprise | published | USD 18/account with 1–2 users | USD 180/account with 1–2 users | — | — | unspecified | vendor commercial cloud. Starting $18/month for 1–2 users; annual total $180 derived from $36 annual savings versus 12 monthly payments. Scales to $300/month for 51–100 users. [1](https://invoiceninja.com/pricing-plans/) |

## Defensibility assessments

- Invoice/payment automation, client portals and established integrations can create workflow switching costs for invoice-heavy businesses. [1](https://invoiceninja.com/pricing-plans/)

## Three product reasons to consider it

1. Recurring invoices, auto-billing, deposits and partial payments support flexible client billing. [1](https://invoiceninja.com/pricing-plans/)
2. Project timers and Kanban boards convert billable work into invoicing records. [1](https://invoiceninja.com/pricing-plans/)
3. Client portals consolidate invoices, payments and document exchange without separate customer record tools. [1](https://invoiceninja.com/pricing-plans/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate financial/in-kind sponsor identified in reviewed official project and business pages. Verified commercial steward included as business fallback; customers, partners and investors are not classified as sponsors. [1](https://invoiceninja.com/our-story/)

- [Invoice Ninja LLC](https://invoiceninja.com/our-story/): business-steward. [Evidence](https://invoiceninja.com/our-story/).

## Self-operation requirements

Mode: **server**. v5 manual PHP stack; current detailed installation guide requires PHP 8.2, while general getting-started page says 8.1+. Prefer detailed guide. Hardware figures from first-party getting-started page. Native clients still connect to server API; they do not replace backend. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP 8.2 with documented extensions | required | — | Always | bcmath, ctype, imagick, soap, gd, mbstring, openssl, tokenizer, xml, curl, zip, gmp, iconv, mysqli, intl; FPM with nginx. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation) |
| MySQL 5.7+ | one-of | database | MySQL or MariaDB | Documented deployment dependency. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation) |
| MariaDB 10.3+ | one-of | database | MySQL or MariaDB | Documented deployment dependency. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation) |
| Nginx or Apache with HTTPS | required | — | Always | Choose one web server. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation) |
| Cron Laravel scheduler | required | — | Always | Runs schedule:run every minute for scheduled workflows. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation) |
| Laravel queue worker / Supervisor | conditional | — | Asynchronous database queue enabled | Sync queue alternative exists; shared hosting can use periodic queue:work cron. Redis is not required by this default. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation) |
| SMTP | one-of | outbound-mail | When sending email: SMTP or documented API mail provider | Documented deployment dependency. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation) |
| Postmark, Mailgun, Brevo or Amazon SES | one-of | outbound-mail | When sending email: SMTP or documented API mail provider | External accounts/API credentials may incur provider fees; one provider sufficient. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation) |
| Saxon PHP extension | conditional | — | E-invoice XSLT validation | Additional validator for electronic invoices. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation) |
| Open Exchange API key | optional | — | Automatic currency conversion updates | External service; daily-update free tier described. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation) |
| Docker or Podman | conditional | — | Container route | Alternative to manual PHP deployment. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation) |

Resources: CPU 1 vCPU; memory 1 GB minimum; 2 GB recommended; storage 20 GB; OS Linux; Ubuntu 20.04+/CentOS 8+ listed on getting-started page. Only explicit documented hardware figures included; null means no minimum verified in reviewed installation source. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation)

## One-click and installer options

Status: **offered**. Verified options listed; manual multi-step installation and Docker Compose alone are not treated as one-click. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Softaculous one-click](https://invoiceninja.github.io/docs/self-host/self-host-installation): **marketplace**, officially-linked-third-party. Official documentation directly offers Softaculous one-click installation on supported hosting panels. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation)
- [Cloudron marketplace](https://invoiceninja.github.io/docs/self-host/self-host-installation): **marketplace**, officially-linked-third-party. Official documentation directly links Cloudron marketplace installation; Cloudron server required. [1](https://invoiceninja.github.io/docs/self-host/self-host-installation)

[Structured profile](../../research/profiles/invoice-ninja.json) · [Claim ledger](../../research/profile-claims/invoice-ninja.jsonl) · [Research steps](../../research/profile-audits/invoice-ninja.md)
