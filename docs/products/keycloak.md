# Keycloak

[Product](https://www.keycloak.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Keycloak project (CNCF) (foundation); ownership: **community**; funding: **not-applicable**.

Started 2013 (project-started); years active: 13; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

CNCF project page dates first commit July 2013; age refers to project start, not CNCF founding. First stable release 2014. Community project; no equity investment entity. Named financial/in-kind corporate sponsors not established by checked project/community pages. [1](https://www.cncf.io/projects/keycloak/) [2](https://www.keycloak.org/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Keycloak | free | USD 0/user | USD 0/user | — | — | unspecified | free self-hosted core. Open program; infrastructure and third-party services are separate. [1](https://www.keycloak.org/) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial product. No explicit most-popular/recommended designation found on the checked page. [1](https://www.keycloak.org/) |
| business | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party organizational commercial software plan found in the checked project source. [1](https://www.keycloak.org/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | vendor commercial product. No distinct first-party enterprise commercial software plan found in the checked project source. [1](https://www.keycloak.org/) |

## Defensibility assessments

- Long-lived standards implementation and ecosystem integrations create knowledge and migration costs; permissive open source limits proprietary lock-in. [1](https://www.keycloak.org/) [2](https://www.cncf.io/projects/keycloak/)

## Three product reasons to consider it

1. Identity brokering combines social sign-in and existing OIDC/SAML providers through an administration console. [1](https://www.keycloak.org/)
2. LDAP/Active Directory federation allows existing workforce identities to participate in application sign-in. [1](https://www.keycloak.org/)
3. Central administration covers realms, sessions, applications and fine-grained authorization policies. [1](https://www.keycloak.org/)

## Corporate sponsorship

Status: **none-found**. Checked official project source/sponsorship section; no named corporate sponsor identified. This does not establish absence of sponsors. [1](https://www.keycloak.org/community)


## Self-operation requirements

Mode: **server**. Native Linux/Windows JVM distribution or container deployment supported. Production relational database required; development file DB unsuitable. JVM bundled in official container (OpenJDK21), separately installed for native path (17/21/25 supported). No external Redis/queue baseline; documented HA topology adds Infinispan. [1](https://www.keycloak.org/server/containers) [2](https://www.keycloak.org/server/supported-configurations) [3](https://www.keycloak.org/getting-started/getting-started-zip)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| OpenJDK17,21 or25 LTS | conditional | — | Native Linux/Windows server installation; latest supported JDK25 recommended | Documented deployment component. [1](https://www.keycloak.org/server/supported-configurations) |
| Docker | one-of | container-runtime | Container deployment; image bundles OpenJDK21 | Documented deployment component. [1](https://www.keycloak.org/server/supported-configurations) |
| Podman | one-of | container-runtime | Container deployment; image bundles OpenJDK21 | Documented deployment component. [1](https://www.keycloak.org/server/supported-configurations) |
| PostgreSQL 14–18; EnterpriseDB 17–18; Aurora PostgreSQL 15–17 | one-of | database | Production relational database | Documented deployment component. [1](https://www.keycloak.org/server/db) |
| MariaDB 10.6/10.11/11.4/11.8 LTS | one-of | database | Production relational database | Documented deployment component. [1](https://www.keycloak.org/server/db) |
| MySQL 8.0/8.4 LTS | one-of | database | Production relational database | Documented deployment component. [1](https://www.keycloak.org/server/db) |
| Microsoft SQL Server 2019/2022 or Azure SQL | one-of | database | Production relational database | Documented deployment component. [1](https://www.keycloak.org/server/db) |
| Oracle 19c or 23.x | one-of | database | Production relational database | Documented deployment component. [1](https://www.keycloak.org/server/db) |
| TLS certificates / HTTPS | required | — | Always | Documented deployment component. [1](https://www.keycloak.org/server/containers) |
| SMTP | conditional | — | Email verification/password reset | Documented deployment component. [1](https://www.keycloak.org/) |
| External Infinispan16.0.15 | conditional | — | Documented clustering/high-availability topology; not a single-node baseline requirement | Documented deployment component. [1](https://www.keycloak.org/server/supported-configurations) |

Resources: CPU not specified; memory not specified; storage not specified; OS Linux or Windows native server; Linux container images. No numerical hardware minimum established from the checked documentation. [1](https://www.keycloak.org/server/containers)

## One-click and installer options

Status: **none-found**. Checked official installation documentation; manual installation/Compose alone is not a one-click offering. [1](https://www.keycloak.org/server/containers)

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/keycloak.json) · [Claim ledger](../../research/profile-claims/keycloak.jsonl) · [Research steps](../../research/profile-audits/keycloak.md)
