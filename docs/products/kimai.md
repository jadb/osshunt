# Kimai

[Product](https://www.kimai.org/en/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Kevin Papst / Kimai business (business); ownership: **individual**; funding: **bootstrapped**.

Started 2018 (company-founded); years active: 8; years in business: 8. Ages are approximate calendar-year differences as of 2026-10-21.

Commercial activity founded2018 according to official press FAQ; original Kimai release2006 and maintainer involvement2009 are earlier project history. Single founder Kevin Papst; explicitly no external investment. Sole-trader business, not inferred corporation. [1](https://www.kimai.org/en/press-media) [2](https://www.kimai.org/en/about.html) [3](https://www.kimai.org/en/blog/2026/fair-pricing)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Self-hosted core | free | EUR 0/organization | — | — | — | unspecified | free self-hosted core. Software license fee0; infrastructure and optional paid plugins separate. Core includes time tracking, reporting and invoicing. [1](https://www.kimai.org/en/blog/2026/fair-pricing) |
| popular | Professional | published | EUR 4.99/user | EUR 47.88/user | — | — | unspecified | vendor commercial cloud. Explicit Most popular. €4.99/user monthly, or €47.88/user annual payment; cloud scope, not self-host license. [1](https://www.kimai.cloud/) |
| business | Professional | published | EUR 4.99/user | EUR 47.88/user | — | — | unspecified | vendor commercial cloud. Closest growing-team/company plan; same Professional plan as popular role, not an additional tier. Optional self-host plugin prices vary. [1](https://www.kimai.cloud/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | paid product. No separate enterprise pricing tier verified; Professional is highest public cloud plan in reviewed offer. [1](https://www.kimai.cloud/) |

## Defensibility assessments

- Custom invoice templates, rate rules and time/project history can create workflow switching costs; extensibility offers more defensibility than the basic timer alone. [1](https://www.kimai.org/en/blog/2026/fair-pricing)

## Three product reasons to consider it

1. Customer/project management and multiple billing rates accommodate different client and work charging arrangements. [1](https://www.kimai.org/en/blog/2026/fair-pricing)
2. Core invoicing turns recorded billable and non-billable time into client-ready billing records. [1](https://www.kimai.org/en/blog/2026/fair-pricing)
3. Reports and PDF/spreadsheet exports let teams review work and pass timesheets into financial workflows. [1](https://www.kimai.cloud/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate financial/in-kind sponsor identified in reviewed official project and business pages. Verified commercial steward included as business fallback; customers, partners and investors are not classified as sponsors. [1](https://www.kimai.org/en/press-media)

- [Kevin Papst / Kimai business](https://www.kimai.org/en/press-media): business-steward. [Evidence](https://www.kimai.org/en/press-media).

## Self-operation requirements

Mode: **server**. Current Kimai2 requirements from maintained README and installation guide. No SQLite alternative. Native PHP route or Docker; external database remains required. Old1.14 docs list third-party one-click providers but current official installer no longer endorses them, so no shortcut asserted. [1](https://www.kimai.org/documentation/installation.html) [2](https://github.com/kimai/kimai/blob/main/README.md) [3](https://www.kimai.org/en/download.html) [4](https://www.kimai.org/documentation/emails.html)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP8.2+ and required extensions | required | — | Always | Supports8.3/8.4/8.5; gd,intl,json,mbstring,pdo,tokenizer,xml,xsl,zip. [1](https://github.com/kimai/kimai/blob/main/README.md) |
| MariaDB10.6+ | one-of | database | MariaDB or MySQL | Oldest maintained LTS or newer; current README gives MariaDB>=10.6. [1](https://github.com/kimai/kimai/blob/main/README.md) |
| MySQL8.4+ | one-of | database | MariaDB or MySQL | Current README gives MySQL>=8.4; SQLite/PostgreSQL not asserted. [1](https://github.com/kimai/kimai/blob/main/README.md) |
| Nginx or Apache with mod_rewrite | required | — | Always | Choose one compatible web server; subdomain required rather than subdirectory. [1](https://www.kimai.org/documentation/installation.html) |
| Git, Composer and SSH access | required | — | Always | Native installation/administration tooling. Packaged Docker route alternative; FTP upload unsupported. [1](https://www.kimai.org/documentation/installation.html) |
| Docker Engine / Compose | conditional | — | Container deployment route | Alternative to native PHP installation; multi-step Compose/Caddy setup is not a one-click installer. [1](https://www.kimai.org/en/download.html) |
| SMTP or Sendmail transport | conditional | — | Outgoing application email enabled | MAILER_URL supports SMTP, Sendmail and hosted SMTP providers; null://null disables email. Configure one transport, not all providers; no mandatory external Redis/search/queue/object-store established for core. [1](https://www.kimai.org/documentation/emails.html) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux server; Docker hosts or compatible PHP web hosting with SSH. Only explicit documented hardware figures included; null means no minimum verified in reviewed installation source. [1](https://www.kimai.org/documentation/installation.html)

## One-click and installer options

Status: **none-found**. Reviewed official installation instructions; no current first-party or officially linked one-click or one-command installer verified. Manual package/Compose instructions excluded. [1](https://www.kimai.org/documentation/installation.html)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/kimai.json) · [Claim ledger](../../research/profile-claims/kimai.jsonl) · [Research steps](../../research/profile-audits/kimai.md)
