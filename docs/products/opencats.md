# OpenCATS

[Product](https://www.opencats.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

OpenCATS community (community); ownership: **community**; funding: **not-applicable**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Community-maintained recruiting project; commercial CATSOne explicitly unaffiliated. Project start year not established after official overview/homepage/history search. No business equity funding model or named equity investors established. [1](https://www.opencats.org/) [2](https://documentation.opencats.org/introduction-and-overview)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | OpenCATS | free | USD 0/organization | — | — | — | unspecified | free source-available community application. No software subscription. Combined license has legacy CATS restrictions; not wholly OSI OSS. Infrastructure and optional external APIs separate. [1](https://www.opencats.org/) |
| popular | unknown | unknown | — | — | — | — | unspecified | paid product. No explicit Most popular or Recommended designation verified on the official plan page; no plan inferred. [1](https://www.opencats.org/) |
| business | unknown | not-offered | — | — | — | — | unspecified | paid product. No paid Business edition from OpenCATS; community application serves internal and agency recruiting. Unaffiliated CATSOne not substituted. [1](https://documentation.opencats.org/introduction-and-overview) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | paid product. No paid Enterprise edition from OpenCATS established in official community overview. [1](https://documentation.opencats.org/introduction-and-overview) |

## Defensibility assessments

- Recruiting-specific candidate/client history provides modest workflow switching costs; differentiation is limited relative to modern commercial ATS suites, as project docs acknowledge. [1](https://documentation.opencats.org/introduction-and-overview)

## Three product reasons to consider it

1. Candidate records combine resumes, notes, status history and activity for coordinated recruiter follow-up. [1](https://www.opencats.org/)
2. Recruiting CRM connects jobs, client companies, contacts and submissions for staffing workflows. [1](https://www.opencats.org/)
3. Public job portal and candidate questionnaires feed applications into job pipelines. [1](https://documentation.opencats.org/introduction-and-overview)

## Corporate sponsorship

Status: **none-found**. Reviewed project homepage, current README and community overview; no corporate financial/in-kind sponsors identified. OpenCATS is a community, with no verified business steward to substitute. CATSOne is explicitly unaffiliated; no inferred sponsor. [1](https://www.opencats.org/) [2](https://raw.githubusercontent.com/opencats/OpenCATS/v0.11.1/README.md) [3](https://documentation.opencats.org/introduction-and-overview)


## Self-operation requirements

Mode: **server**. Version0.11.1 current documentation baseline. PHP8.4.1+ and MariaDB supersede stale indexed0.9.7.4/PHP7.2 pages. Parsing/email/address lookup optional; no Redis, queue broker, external search or object-store dependency verified. [1](https://documentation.opencats.org/) [2](https://documentation.opencats.org/installation/run-the-installer)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP8.4.1+ within PHP8 and required extensions | required | — | Always | Current baseline tests8.4.1 and8.5; older cached docs describing PHP7.2 are superseded. [1](https://documentation.opencats.org/) |
| MariaDB | required | — | Always | MariaDB10.7 is current CI baseline, not stated universal minimum. MySQL explicitly not documented target. [1](https://documentation.opencats.org/) |
| Web server | required | — | Always | Linux/Unix CI baseline; Apache used in Ubuntu instructions. Exact alternative server support not verified. [1](https://documentation.opencats.org/) |
| antiword, pdftotext, html2text, unrtf | optional | — | Resume/document full-text extraction and indexing | Application installs without these local parsing utilities; improved search requires them. [1](https://documentation.opencats.org/installation/run-the-installer) |
| SMTP/PHPMailer configuration | optional | — | Sending emails/notifications | Core works without email; mail relay required for actual delivery. [1](https://documentation.opencats.org/installation/run-the-installer) |
| Google address lookup API key | optional | — | Address lookup feature enabled | External provider API; not necessary to run ATS. [1](https://documentation.opencats.org/installation/run-the-installer) |
| Composer | conditional | — | Source checkout or non-full archive | Full release packages bundle dependencies; composer install --no-dev needed for source route. [1](https://documentation.opencats.org/) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux/Unix current CI baseline. Only explicit documented hardware figures included; null means no minimum verified in reviewed installation source. [1](https://documentation.opencats.org/)

## One-click and installer options

Status: **none-found**. Reviewed official installation instructions; no current first-party or officially linked one-click or one-command installer verified. Manual package/Compose instructions excluded. [1](https://documentation.opencats.org/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/opencats.json) · [Claim ledger](../../research/profile-claims/opencats.jsonl) · [Research steps](../../research/profile-audits/opencats.md)
