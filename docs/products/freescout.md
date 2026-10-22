# FreeScout

[Product](https://freescout.net) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

FreeScout project (community); ownership: **community**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Small open-source project with commercial module sales; accountable legal company and precise project start not established from primary pages. Homepage says eight years. Funding search yielded no primary financing announcement; no inference of bootstrapping. [1](https://freescout.net/) [2](https://freescout.net/modules/) [3](https://github.com/freescout-help-desk/freescout)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | FreeScout core | free | USD 0/instance | — | — | — | unspecified | free self-hosted core. Free self-hosted core. Paid modules sold separately as lifetime per-instance licenses. [1](https://freescout.net/) |
| popular | unknown | unknown | — | — | — | — | unspecified | product plans. No explicitly highlighted Most popular or Recommended plan found in the public pricing page. [1](https://freescout.net/modules/) |
| business | unknown | not-offered | — | — | — | — | unspecified | optional self-host modules. Module catalog rather than Team/Business subscription; individual optional modules differ in price. [1](https://freescout.net/modules/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | optional self-host modules. No named Enterprise edition in official module catalog; customized module combinations are not an enterprise tier. [1](https://freescout.net/modules/) |

## Defensibility assessments

- Module ecosystem and email workflow familiarity offer moderate customization value; common shared-inbox functionality limits exclusive differentiation. [1](https://freescout.net/modules/)

## Three product reasons to consider it

1. Email-native shared mailboxes provide collision detection, internal notes and conversation merging. [1](https://freescout.net/)
2. Modern OAuth connections to Microsoft365 and Google Workspace preserve existing mailbox workflows. [1](https://freescout.net/)
3. Optional workflow, SLA, customer-portal and reporting modules extend a compact shared-inbox workflow. [1](https://freescout.net/modules/)

## Corporate sponsorship

Status: **none-found**. Sponsorship status limited to the official sources checked; donors and investors are not treated as corporate sponsors. [1](https://github.com/freescout-help-desk/freescout)


## Self-operation requirements

Mode: **server**. PHP web+SQL stack. Cron-managed queue daemon required; no separate Redis service required by documented default install. Optional social modules need provider credentials. [1](https://github.com/freescout-help-desk/freescout/wiki/Installation-Guide)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP7.4–8.x | required | — | Always; PHP application. | Documented production component. [1](https://github.com/freescout-help-desk/freescout) |
| MySQL5+ | one-of | database | Select one SQL backend. | Documented production component. [1](https://github.com/freescout-help-desk/freescout) |
| MariaDB5+ | one-of | database | Select one SQL backend. | Documented production component. [1](https://github.com/freescout-help-desk/freescout) |
| PostgreSQL | one-of | database | Select one SQL backend. | Documented production component. [1](https://github.com/freescout-help-desk/freescout) |
| Nginx | one-of | webserver | Select one supported web server. | Documented production component. [1](https://github.com/freescout-help-desk/freescout) |
| Apache | one-of | webserver | Select one supported web server. | Documented production component. [1](https://github.com/freescout-help-desk/freescout) |
| IIS | one-of | webserver | Select one supported web server. | Documented production component. [1](https://github.com/freescout-help-desk/freescout) |
| Cron and background queue worker | required | — | Run schedule:run each minute; starts queue:work daemon. | Documented production component. [1](https://github.com/freescout-help-desk/freescout/wiki/Installation-Guide) |
| SMTP and IMAP/POP3 mailboxes | required | — | Email support workflow and system email. | Documented production component. [1](https://freescout.net/) |
| S3 object storage | optional | — | Alternative attachment storage. | Documented production component. [1](https://github.com/freescout-help-desk/freescout/wiki/Installation-Guide) |

Resources: CPU not specified; memory not specified; storage not specified; OS PHP-capable host; Linux/Windows web servers. README explicitly publishes no CPU/RAM minimum; storage and PHP memory must accommodate attachments. [1](https://github.com/freescout-help-desk/freescout) [2](https://github.com/freescout-help-desk/freescout/wiki/Installation-Guide)

## One-click and installer options

Status: **offered**. Official README Images & One-Click Installs links Softaculous and Cloudron; manual web installer separate. [1](https://github.com/freescout-help-desk/freescout)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Softaculous](https://www.softaculous.com/apps/customersupport/FreeScout): **one-click**, officially-linked-third-party. Control-panel installer officially linked; host must provide Softaculous. [1](https://github.com/freescout-help-desk/freescout)
- [Cloudron](https://www.cloudron.io/store/net.freescout.cloudronapp.html): **marketplace**, officially-linked-third-party. Official README links Cloudron app listing. [1](https://github.com/freescout-help-desk/freescout)

[Structured profile](../../research/profiles/freescout.json) · [Claim ledger](../../research/profile-claims/freescout.jsonl) · [Research steps](../../research/profile-audits/freescout.md)
