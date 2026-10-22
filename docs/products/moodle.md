# Moodle LMS

[Product](https://moodle.org) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Moodle Pty Ltd / Moodle project (business); ownership: **private**; funding: **funded**.

Started 2002 (product-launched); years active: 24; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Year is Moodle1.0 public release2002, not company incorporation. For-profit commercial steward is Moodle PtyLtd; open software has community contributors. Official history confirms2017 angel funding and2018 company report names Education For The Many investment partnership. Historical investor, exact present stake unverified; not inferred foundation/nonprofit. [1](https://docs.moodle.org/401/en/History) [2](https://moodle.com/news/moodle-goals-help-us-advance-mission-empowering-educators-improve-world/) [3](https://support.moodle.com/support/solutions/articles/80001075416-how-to-support-and-contribute-to-moodle)

Known investors: [Education For The Many](https://moodle.com/news/moodle-goals-help-us-advance-mission-empowering-educators-improve-world/).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Moodle LMS self-hosted | free | USD 0/organization | — | — | — | unspecified | free self-hosted Moodle LMS core. GPL core has no software license fee; infrastructure and paid Workplace extensions separate. [1](https://docs.moodle.org/503/en/Features) |
| popular | unknown | unknown | — | — | — | — | unspecified | paid product. No explicit Most popular or Recommended designation verified on the official plan page; no plan inferred. [1](https://www.moodlecloud.com/standard-plans/) |
| business | MoodleCloud Small | published | — | USD 490/site with up to 200 users and5GB storage | — | — | unspecified | vendor commercial cloud hosting. Displayed indicative USD annual amount; actual billing exclusively inAUD. No monthly subscription. Small is a modest organization plan; exact AUD total not retrieved from pricing switch. Taxes/provider conversion vary. [1](https://www.moodlecloud.com/standard-plans/) |
| enterprise | Moodle Premium Solutions | quote | — | — | — | — | unspecified | vendor custom hosting/services. For flexibility/custom plugins beyond MoodleCloud, official page directs users to Premium Solutions quote. Separate Workplace licensing not priced as core LMS. [1](https://www.moodlecloud.com/standard-plans/) |

## Defensibility assessments

- An extensive learning activity/plugin ecosystem and accumulated courses, gradebooks and institutional integrations create content/process migration costs. [1](https://docs.moodle.org/503/en/Features)

## Three product reasons to consider it

1. Quizzes, assignments and question banks support multiple assessment and grading workflows. [1](https://docs.moodle.org/503/en/Features)
2. Forums, collaborative activities and completion tracking support instructor-led and self-paced learning. [1](https://docs.moodle.org/503/en/Features)
3. Configurable roles, competencies and course-management tools let institutions adapt learning structure to their programs. [1](https://docs.moodle.org/503/en/Features)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate financial/in-kind sponsor identified in reviewed official project and business pages. Verified commercial steward included as business fallback; customers, partners and investors are not classified as sponsors. [1](https://support.moodle.com/support/solutions/articles/80001075416-how-to-support-and-contribute-to-moodle)

- [Moodle Pty Ltd](https://support.moodle.com/support/solutions/articles/80001075416-how-to-support-and-contribute-to-moodle): business-steward. [Evidence](https://support.moodle.com/support/solutions/articles/80001075416-how-to-support-and-contribute-to-moodle).

## Self-operation requirements

Mode: **server**. MoodleLMS5.3LTS released5October2026; PHP/database minima taken from that release, not generic old install pages. Choose one SQL backend. Optional external cache/email/integration services distinguished from required PHP/SQL/file/cron stack. [1](https://docs.moodle.org/503/en/Installing_Moodle) [2](https://moodledev.io/general/releases/5.3)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| 64-bit PHP8.3+ with required extensions | required | — | Always | PHP8.4 supported; sodium required; max_input_vars>=5000. Version5.3 requirements, not older Moodle releases. [1](https://moodledev.io/general/releases/5.3) |
| PostgreSQL17+ | one-of | database | Choose one supported database | Documented deployment dependency. [1](https://moodledev.io/general/releases/5.3) |
| MySQL8.4+ | one-of | database | Choose one supported database | Documented deployment dependency. [1](https://moodledev.io/general/releases/5.3) |
| MariaDB11.4+ | one-of | database | Choose one supported database | Documented deployment dependency. [1](https://moodledev.io/general/releases/5.3) |
| Aurora MySQL8.0-compatible | one-of | database | Choose one supported database | Managed AWS service; compatibility version8.0 rather than internal Aurora3.x. [1](https://moodledev.io/general/releases/5.3) |
| Microsoft SQL Server2019+ | one-of | database | Choose one supported database | Oracle no longer supported fromMoodle5.0; SQLite not a supported production alternative. [1](https://moodledev.io/general/releases/5.3) |
| Apache, Nginx, OpenLiteSpeed or IIS | required | — | Always | One compatible PHP web server; from5.1 web root must point to public/. [1](https://docs.moodle.org/503/en/Installing_Moodle) |
| Persistent moodledata file storage | required | — | Always | Course uploads and user content stored separately from application code; size scales with content. [1](https://docs.moodle.org/503/en/Installing_Moodle) |
| Cron/background task runner | required | — | Always | Scheduled tasks required for normal notifications and maintenance workflows. [1](https://docs.moodle.org/503/en/Installing_Moodle) |
| SMTP relay | conditional | — | Outgoing mail delivery | External email relay if used; local mail configuration alternative. No mandatory paid mail vendor established. [1](https://docs.moodle.org/503/en/Installing_Moodle) |
| Redis/cache backend | optional | — | Additional performance/session infrastructure | Core installation does not require an external Redis broker. Search/object-storage plugins can add services but are not base requirements. [1](https://docs.moodle.org/503/en/Installing_Moodle) |

Resources: CPU 1GHz minimum;2GHz dual-core+ recommended; memory 512MB minimum;1GB+ recommended;8GB+ likely for large production; storage 200MB code plus content;5GB described as realistic minimum; OS Linux typical; Windows server and other PHP-compatible systems documented. Only explicit documented hardware figures included; null means no minimum verified in reviewed installation source. [1](https://docs.moodle.org/503/en/Installing_Moodle)

## One-click and installer options

Status: **none-found**. Reviewed official installation instructions; no current first-party or officially linked one-click or one-command installer verified. Manual package/Compose instructions excluded. [1](https://docs.moodle.org/503/en/Installing_Moodle)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/moodle.json) · [Claim ledger](../../research/profile-claims/moodle.jsonl) · [Research steps](../../research/profile-audits/moodle.md)
