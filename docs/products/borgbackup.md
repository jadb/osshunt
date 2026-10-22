# BorgBackup

[Product](https://www.borgbackup.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

The Borg Collective / BorgBackup project (community); ownership: **community**; funding: **not-applicable**.

Started 2015 (project-started); years active: 11; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Project established 2015 per homepage, separate from predecessor Attic. Donations/fiscal host are not equity financing. Waldmann EDV is lead maintainer Thomas Waldmann’s company and donation recipient; community project not owned by fiscal host. [1](https://www.borgbackup.org/) [2](https://www.borgbackup.org/support/fund.html)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | BorgBackup | free | USD 0/user | USD 0/user | — | — | unspecified | free backup archiver. Open program; infrastructure and third-party services are separate. [1](https://www.borgbackup.org/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial product. No explicit most-popular/recommended designation found on the checked page. [1](https://www.borgbackup.org/) |
| business | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party organizational commercial software plan found in the checked project source. [1](https://www.borgbackup.org/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party enterprise commercial software plan found in the checked project source. [1](https://www.borgbackup.org/) |

## Defensibility assessments

- Long repository histories and mature Unix metadata handling can increase migration effort, while the open format and license limit vendor lock-in. [1](https://www.borgbackup.org/) [2](https://borgbackup.readthedocs.io/en/stable/usage/general.html)

## Three product reasons to consider it

1. Content-defined chunking deduplicates data across files, machines and archive history. [1](https://www.borgbackup.org/)
2. FUSE-mounted archives allow browsing historical files as a regular filesystem. [1](https://www.borgbackup.org/)
3. Authenticated encryption and selectable compression suit encrypted archival workflows. [1](https://www.borgbackup.org/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsor identified in checked official sources; verified business steward included. [1](https://www.borgbackup.org/support/fund.html)

- [Waldmann EDV](https://www.borgbackup.org/support/fund.html): business-steward. [Evidence](https://www.borgbackup.org/support/fund.html).

## Self-operation requirements

Mode: **hybrid**. Stable 1.4.5 docs. Standalone binary bundles dependencies; Python/compiler/library headers are source-build requirements, not extra services for standalone binary. No external database or queue. [1](https://borgbackup.readthedocs.io/en/stable/installation.html)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Borg standalone binary or packaged installation | required | — | Always | Documented deployment component. [1](https://borgbackup.readthedocs.io/en/stable/installation.html) |
| Local filesystem repository | one-of | storage | Local backup path | Documented deployment component. [1](https://borgbackup.readthedocs.io/en/stable/usage/general.html) |
| SSH server with compatible Borg installed | one-of | storage | Remote SSH repository | Documented deployment component. [1](https://borgbackup.readthedocs.io/en/stable/usage/general.html) |
| FUSE with llfuse/pyfuse3 | optional | — | Mounting backup archives as a filesystem | Documented deployment component. [1](https://borgbackup.readthedocs.io/en/stable/installation.html) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux, macOS, BSD; Windows WSL/Cygwin experimental. Hardware depends on chunk/file counts and cache indexes; resource-usage guide provides workload-dependent guidance, not a universal numerical minimum. [1](https://borgbackup.readthedocs.io/en/stable/installation.html)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual installation/Compose alone is not a one-click offering. [1](https://borgbackup.readthedocs.io/en/stable/installation.html)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/borgbackup.json) · [Claim ledger](../../research/profile-claims/borgbackup.jsonl) · [Research steps](../../research/profile-audits/borgbackup.md)
