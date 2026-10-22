# Kopia

[Product](https://kopia.io/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Kopia project (community); ownership: **community**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Community open-source backup tool. Exact start year, incorporated steward and capital history not established in checked project material; no inferred bootstrapped company. [1](https://github.com/kopia/kopia) [2](https://kopia.io/docs/features/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Kopia | free | USD 0/user | USD 0/user | — | — | unspecified | free CLI, desktop GUI and optional repository server. Open program; infrastructure and third-party services are separate. [1](https://github.com/kopia/kopia) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial product. No explicit most-popular/recommended designation found on the checked page. [1](https://github.com/kopia/kopia) |
| business | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party organizational commercial software plan found in the checked project source. [1](https://github.com/kopia/kopia) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party enterprise commercial software plan found in the checked project source. [1](https://github.com/kopia/kopia) |

## Defensibility assessments

- Multiple storage adapters and policy-managed backup histories provide practical workflow retention; repository portability and open code limit exclusive lock-in. [1](https://kopia.io/docs/repositories/) [2](https://kopia.io/docs/features/)

## Three product reasons to consider it

1. Snapshot policies combine scheduling, retention, exclusions and compression controls. [1](https://kopia.io/docs/features/) [2](https://kopia.io/docs/installation/)
2. Content deduplication recognizes copied, moved and renamed files across shared repository snapshots. [1](https://kopia.io/docs/features/)
3. CLI, desktop GUI and optional repository-server workflows cover individual and multi-machine backup administration. [1](https://kopia.io/docs/installation/) [2](https://kopia.io/docs/repository-server/)

## Corporate sponsorship

Status: **none-found**. Checked official project source/sponsorship section; no named corporate sponsor identified. This does not establish absence of sponsors. [1](https://github.com/kopia/kopia)


## Self-operation requirements

Mode: **hybrid**. No external SQL/cache/queue needed for standalone path. Optional repository server requires underlying storage and reachable clients. Server only access-controls snapshot/policy manifests; not arbitrary content-ID reads. Desktop installers are not a server one-click template. [1](https://kopia.io/docs/installation/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Kopia standalone binary / KopiaUI | required | — | Always | Documented deployment component. [1](https://kopia.io/docs/installation/) |
| Local filesystem / NAS | one-of | storage | Local or mounted repository | Documented deployment component. [1](https://kopia.io/docs/repositories/) |
| S3-compatible, Azure Blob, B2, Google Cloud, WebDAV or SFTP endpoint | one-of | storage | Selected remote backend | Documented deployment component. [1](https://kopia.io/docs/repositories/) |
| Kopia repository server | one-of | storage | Optional mediated repository access | Documented deployment component. [1](https://kopia.io/docs/repository-server/) |
| rclone executable | conditional | — | Experimental rclone storage backend | Documented deployment component. [1](https://kopia.io/docs/repositories/) |
| TLS certificate | conditional | — | Repository server selected; can auto-generate | Documented deployment component. [1](https://kopia.io/docs/repository-server/) |

Resources: CPU not specified; memory not specified; storage not specified; OS Windows, macOS, Linux. No numerical hardware minimum established from the checked documentation. [1](https://kopia.io/docs/installation/)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual installation/Compose alone is not a one-click offering. [1](https://kopia.io/docs/installation/)

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/kopia.json) · [Claim ledger](../../research/profile-claims/kopia.jsonl) · [Research steps](../../research/profile-audits/kopia.md)
