# restic

[Product](https://restic.net/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

restic project (community); ownership: **community**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Community backup program, not a verified commercial company. Project start year and formal capital history not established from checked homepage/repository; no bootstrapping inference. [1](https://restic.net/) [2](https://github.com/restic/restic)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | restic | free | USD 0/user | USD 0/user | — | — | unspecified | free local command-line backup program. Open program; infrastructure and third-party services are separate. [1](https://restic.net/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial product. No explicit most-popular/recommended designation found on the checked page. [1](https://restic.net/) |
| business | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party organizational commercial software plan found in the checked project source. [1](https://restic.net/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party enterprise commercial software plan found in the checked project source. [1](https://restic.net/) |

## Defensibility assessments

- Portable repository format, storage integrations and accumulated backup history create practical retention costs; open tooling limits exclusive control. [1](https://restic.net/) [2](https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html)

## Three product reasons to consider it

1. Content-aware incremental transfers avoid reuploading unchanged parts of files. [1](https://restic.net/)
2. Encrypted repositories support both local and multiple remote storage backends. [1](https://restic.net/) [2](https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html)
3. Repository verification allows operators to check backup restorability. [1](https://restic.net/)

## Corporate sponsorship

Status: **none-found**. Checked official project source/sponsorship section; no named corporate sponsor identified. This does not establish absence of sponsors. [1](https://github.com/restic/restic)


## Self-operation requirements

Mode: **desktop**. CLI client, not an always-on server. No SQL, cache or queue required; schedule jobs externally. Storage endpoints and credentials depend on backend. Native binary download/package installation, not a server one-click service. [1](https://restic.readthedocs.io/en/stable/020_installation.html)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| restic standalone executable | required | — | Always | Documented deployment component. [1](https://restic.readthedocs.io/en/stable/020_installation.html) |
| Local filesystem | one-of | storage | Local repository | Documented deployment component. [1](https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html) |
| SFTP / REST server | one-of | storage | Selected remote server backend | Documented deployment component. [1](https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html) |
| S3-compatible, Azure, B2, Google Cloud, Swift or rclone backend | one-of | storage | Selected object/cloud backend; provider credentials required | Documented deployment component. [1](https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html) |
| rclone executable | conditional | — | rclone backend selected | Documented deployment component. [1](https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux, BSD, macOS and Windows. No numerical hardware minimum established from the checked documentation. [1](https://restic.readthedocs.io/en/stable/020_installation.html)

## One-click and installer options

Status: **not-applicable**. Checked official installation documentation; manual installation/Compose alone is not a one-click offering. [1](https://restic.readthedocs.io/en/stable/020_installation.html)

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/restic.json) · [Claim ledger](../../research/profile-claims/restic.jsonl) · [Research steps](../../research/profile-audits/restic.md)
