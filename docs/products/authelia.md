# Authelia

[Product](https://www.authelia.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Authelia project (community); ownership: **community**; funding: **not-applicable**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official About explicitly states unincorporated volunteer project without monetization model. Corporate in-kind sponsors are not equity investors. Exact project-start year not established; copyright year not used as founding evidence. [1](https://www.authelia.com/information/about/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Authelia | free | USD 0/user | USD 0/user | — | — | unspecified | free self-hosted core. Open program; infrastructure and third-party services are separate. [1](https://www.authelia.com/information/about/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial product. No explicit most-popular/recommended designation found on the checked page. [1](https://www.authelia.com/information/about/) |
| business | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party organizational commercial software plan found in the checked project source. [1](https://www.authelia.com/information/about/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party enterprise commercial software plan found in the checked project source. [1](https://www.authelia.com/information/about/) |

## Defensibility assessments

- Focused proxy integrations and community configuration knowledge offer modest ecosystem differentiation; implementation is readily substitutable. [1](https://www.authelia.com/overview/prologue/architecture/) [2](https://www.authelia.com/information/about/)

## Three product reasons to consider it

1. Reverse-proxy authentication extends a central login portal to web applications without their own SSO integration. [1](https://www.authelia.com/overview/prologue/architecture/)
2. Several second-factor methods and device-registration identity checks cover varied authentication workflows. [1](https://www.authelia.com/overview/prologue/introduction/)
3. OIDC and trusted-header SSO connect both standards-aware applications and proxy-protected sites. [1](https://www.authelia.com/overview/prologue/introduction/)

## Corporate sponsorship

Status: **identified**. Corporate support explicitly identified in the checked official source. [1](https://www.authelia.com/information/about/)

- [Buildkite](https://buildkite.com/): corporate-sponsor. [Evidence](https://www.authelia.com/information/about/).
- [Crowdin](https://crowdin.com/): corporate-sponsor. [Evidence](https://www.authelia.com/information/about/).
- [JetBrains](https://www.jetbrains.com/): corporate-sponsor. [Evidence](https://www.authelia.com/information/about/).
- [Microsoft](https://www.microsoft.com/): corporate-sponsor. [Evidence](https://www.authelia.com/information/about/).
- [Netlify](https://www.netlify.com/): corporate-sponsor. [Evidence](https://www.authelia.com/information/about/).

## Self-operation requirements

Mode: **server**. Storage, user directory, session and notifier alternatives are separate groups. Redis not mandatory for single-instance in-memory sessions. Duo API is conditional on selecting Duo push MFA, not a baseline service. [1](https://www.authelia.com/overview/prologue/architecture/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Supported reverse proxy | required | — | Always | Documented deployment component. [1](https://www.authelia.com/overview/prologue/architecture/) |
| Authelia executable or container | required | — | Always | Documented deployment component. [1](https://www.authelia.com/overview/prologue/architecture/) |
| SQLite3 | one-of | database | Persistent authentication/2FA state | Documented deployment component. [1](https://www.authelia.com/configuration/storage/introduction/) |
| PostgreSQL | one-of | database | Persistent authentication/2FA state | Documented deployment component. [1](https://www.authelia.com/configuration/storage/introduction/) |
| MySQL | one-of | database | Persistent authentication/2FA state | Documented deployment component. [1](https://www.authelia.com/configuration/storage/introduction/) |
| YAML user file | one-of | identity | Local users | Documented deployment component. [1](https://www.authelia.com/configuration/first-factor/introduction/) |
| LDAP directory | one-of | identity | Remote directory users | Documented deployment component. [1](https://www.authelia.com/configuration/first-factor/introduction/) |
| In-memory sessions | one-of | session | Default single-instance | Documented deployment component. [1](https://www.authelia.com/configuration/session/introduction/) |
| Redis / Redis Sentinel | one-of | session | Stateless or highly available sessions | Documented deployment component. [1](https://www.authelia.com/configuration/session/introduction/) |
| SMTP notifier | one-of | notification | Email identity-verification messages | Documented deployment component. [1](https://www.authelia.com/configuration/notifications/introduction/) |
| Filesystem notifier | one-of | notification | Alternative notification delivery | Documented deployment component. [1](https://www.authelia.com/configuration/notifications/introduction/) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. No numerical hardware minimum established from the checked documentation. [1](https://www.authelia.com/overview/prologue/architecture/)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual installation/Compose alone is not a one-click offering. [1](https://www.authelia.com/overview/prologue/architecture/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/authelia.json) · [Claim ledger](../../research/profile-claims/authelia.jsonl) · [Research steps](../../research/profile-audits/authelia.md)
