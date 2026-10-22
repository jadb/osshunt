# Easy!Appointments

[Product](https://easyappointments.org) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Alex Tselegidis / AT Software Development Agency (business); ownership: **individual**; funding: **unknown**.

Started 2013 (project-started); years active: 13; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official anniversary history dates initial Google Code publication to 2013; 2014 stable-release anniversary is distinct. Current agency site verifies commercial stewardship by Alex and his team, but no legal incorporation year or equity funding history established. Public funding/sponsor searches did not establish investors; unknown is not bootstrap classification. [1](https://alextselegidis.com/) [2](https://easyappointments.org/blog/10th-anniversary-how-did-it-all-start/) [3](https://easyappointments.org/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Easy!Appointments | free | USD 0/installation | — | — | — | unspecified | free self-hosted core. GPL core is free; infrastructure and optional premium services separate. [1](https://easyappointments.org/) |
| popular | unknown | unknown | — | — | — | — | unspecified | product plans. No explicitly highlighted Most popular or Recommended plan found in the public pricing page. [1](https://easyappointments.org/premium/) |
| business | Premium custom development / managed hosting | quote | — | — | — | — | unspecified | vendor professional services. Closest explicitly business service offer; formal custom-development quote and quote form. Not a separate packaged feature edition. [1](https://easyappointments.org/premium/) |
| enterprise | Extended License / enterprise-grade managed hosting | quote | — | — | — | — | unspecified | vendor commercial licensing and services. White-label Extended License for SaaS providers/resellers and enterprise-grade managed hosting are quoted services; no published recurring Enterprise software tier. [1](https://easyappointments.org/premium/) |

## Defensibility assessments

- A mature appointment, customer and provider data model plus accumulated scheduling configuration can create moderate switching costs; GPL availability limits exclusivity. [1](https://easyappointments.org/features/)

## Three product reasons to consider it

1. Separate service and provider schedules model employee availability, breaks and booking rules. [1](https://easyappointments.org/features/)
2. Group sessions allow several customers to reserve places within one appointment slot. [1](https://easyappointments.org/features/)
3. Google and CalDAV synchronization connect bookable availability to external calendars. [1](https://easyappointments.org/features/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsorship established in the checked project/business pages; commercial steward included as business fallback. [1](https://alextselegidis.com/)

- [AT Software Development Agency](https://alextselegidis.com/): business-steward. [Evidence](https://alextselegidis.com/).

## Self-operation requirements

Mode: **server**. Production PHP/web-server/MySQL route; official container image bundles application runtime and uses a separate MySQL service. No mandatory Redis, queue broker or search engine documented. Email delivery transport needed only when enabling notifications. Release 1.6.1 PHP floor takes precedence over stale generic installation page. [1](https://easyappointments.org/documentation/installation/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP >=8.2 and required extensions | required | — | Easy!Appointments 1.6.1 stable package. | Stable require block lists curl, JSON, mbstring, gd, simplexml and fileinfo; bundled PHP libraries are not external services. [1](https://raw.githubusercontent.com/alextselegidis/easyappointments/1.6.1/composer.json) |
| Apache | one-of | web-server | One supported web-server route. | Production web server; older installation article has stale PHP minimum, superseded by stable composer manifest. [1](https://raw.githubusercontent.com/alextselegidis/easyappointments/develop/README.md) |
| Nginx | one-of | web-server | Alternative supported web server. | Documented production component. [1](https://raw.githubusercontent.com/alextselegidis/easyappointments/develop/README.md) |
| MySQL | required | — | Production relational data store; official Docker example uses MySQL 8.0. | Documented production component. [1](https://github.com/alextselegidis/easyappointments-docker/blob/main/README.md) |
| Writable persistent storage | required | — | Sessions, logs and uploaded files. | Documented production component. [1](https://easyappointments.org/documentation/installation/) |
| Host mail transport | one-of | notification-email | When notification email enabled; default PHP mail transport. | Documented production component. [1](https://easyappointments.org/2022/05/16/how-to-fix-email-delivery-problems/) |
| Remote SMTP service | one-of | notification-email | Alternative when notification email enabled. | Documented production component. [1](https://github.com/alextselegidis/easyappointments-docker/blob/main/README.md) |
| Google Calendar API credentials | conditional | — | Only Google synchronization. | Documented production component. [1](https://easyappointments.org/documentation/installation/) |
| CalDAV server credentials | conditional | — | Only CalDAV synchronization. | Documented production component. [1](https://easyappointments.org/features/) |
| Composer / Node.js / npm / Git | conditional | — | Building from development checkout only; not extra production services for a prepared release. | Documented production component. [1](https://raw.githubusercontent.com/alextselegidis/easyappointments/develop/README.md) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. No numerical hardware minima verified in the cited deployment documentation. [1](https://easyappointments.org/documentation/installation/)

## One-click and installer options

Status: **offered**. Official automated Softaculous deployment documented. Linked target www.softaculous.com/softaculous/apps/others/EasyAppointments inaccessible in fetch; provider search result confirms current listing but one release behind. Manual web wizard and Compose are separate routes. [1](https://easyappointments.org/2020/12/02/automatically-install-easyappointments-on-your-server-with-softaculous/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Softaculous automated installation](https://easyappointments.org/2020/12/02/automatically-install-easyappointments-on-your-server-with-softaculous/): **one-click**, officially-linked-third-party. Official project guide links provider installer; target URL failed tool access, so official deployment guide is used as allowed actionable deployment URL. Current provider search result lists 1.6.0 while project stable is 1.6.1; check version before deployment. [1](https://easyappointments.org/2020/12/02/automatically-install-easyappointments-on-your-server-with-softaculous/)

[Structured profile](../../research/profiles/easyappointments.json) · [Claim ledger](../../research/profile-claims/easyappointments.jsonl) · [Research steps](../../research/profile-audits/easyappointments.md)
