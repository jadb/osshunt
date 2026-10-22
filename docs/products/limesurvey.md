# LimeSurvey Community Edition

[Product](https://community.limesurvey.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

LimeSurvey GmbH (business); ownership: **private**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

German GmbH operator verified. Project copyright reaches 2003, but copyright alone is not a verified project-start or company-foundation date. Official About/company routes failed and funding/ownership search found no primary transaction announcement; funding and ultimate shareholders remain unresolved. [1](https://www.limesurvey.org/legal-notice) [2](https://community.limesurvey.org/licence-trademark/) [3](https://community.limesurvey.org/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Community Edition | free | USD 0/site | — | — | — | unspecified | free self-hosted core. Software license cost is zero; infrastructure, extensions and external services can cost extra. [1](https://community.limesurvey.org/licence-trademark/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. Expert has Best price label, which is not Most popular or Recommended; no qualifying designation verified. [1](https://www.limesurvey.org/pricing) |
| business | Business | published | — | JPY 122904/cloud survey account | — | — | unspecified | vendor commercial cloud. Current localized page displays JPY10,242/month billed annually ×12. Also displays underlying EUR693 equivalent; local reference exchange rates can change. Cloud scope distinct from CE and paid ComfortUpdate. [1](https://www.limesurvey.org/pricing) |
| enterprise | Corporate | quote | — | — | — | — | unspecified | vendor commercial cloud. Tailored survey solution via sales; no fixed price. [1](https://www.limesurvey.org/pricing) |

## Defensibility assessments

- A mature research-oriented question/logic model and reusable survey assets create expertise and migration costs for established research teams. [1](https://www.limesurvey.org/manual/LimeSurvey_Manual)

## Three product reasons to consider it

1. ExpressionScript and question logic enable complex branching, calculations and validation in research questionnaires. [1](https://www.limesurvey.org/manual/LimeSurvey_Manual)
2. Multilingual surveys and reusable label sets support international research without separate questionnaire systems. [1](https://www.limesurvey.org/manual/LimeSurvey_Manual)
3. Participant management, quotas and statistical exports support controlled survey sampling and analysis. [1](https://www.limesurvey.org/manual/LimeSurvey_Manual)

## Corporate sponsorship

Status: **business-fallback**. Community contribution and donation sources checked without a verified corporate sponsor roster. Verified LimeSurvey GmbH business operator supplied as fallback; commercial partners are not automatically sponsors. [1](https://community.limesurvey.org/) [2](https://www.limesurvey.org/legal-notice)

- [LimeSurvey GmbH](https://www.limesurvey.org/): business-steward. [Evidence](https://www.limesurvey.org/legal-notice).

## Self-operation requirements

Mode: **server**. No baseline Redis, separate queue or object store required in official CE installation. Email delivery configuration needed for invitation workflows; exact SMTP route not verified in this pass. [1](https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| PHP | required | — | Always | LS7:8.1.29+ tested through8.4; LS6:8.1–8.3. Match installed major. [1](https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE) |
| MariaDB 10.3.38+ | one-of | database | Choose one supported SQL database | Documented deployment component. [1](https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE) |
| MySQL 8+ | one-of | database | Choose one supported SQL database | Documented deployment component. [1](https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE) |
| Microsoft SQL Server 2019+ | one-of | database | Choose one supported SQL database | Documented deployment component. [1](https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE) |
| PostgreSQL 14+ | one-of | database | Choose one supported SQL database | Documented deployment component. [1](https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE) |
| PHP-capable web server and PHP extensions | required | — | Always | mbstring, correct PDO driver, cURL and default PHP libraries including session, fileinfo, SimpleXML and crypto. [1](https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE) |

Resources: CPU not specified; memory not specified; storage 250 MB minimum application disk; OS not specified. Disk minimum excludes growing survey uploads and database; CPU/RAM minimum not published in reviewed installation page. [1](https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE)

## One-click and installer options

Status: **none-found**. Official installation manual documents downloading, uploading and configuring application/database and running browser installer; no currently verified official-link marketplace or one-command install option found. [1](https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/limesurvey.json) · [Claim ledger](../../research/profile-claims/limesurvey.jsonl) · [Research steps](../../research/profile-audits/limesurvey.md)
