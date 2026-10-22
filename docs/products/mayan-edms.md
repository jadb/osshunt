# Mayan EDMS

[Product](https://www.mayan-edms.com/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Mayan EDMS LLC / Mayan EDMS project (business); ownership: **unknown**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Mayan EDMS LLC sells official services; current code copyright/trademarks name Roberto Rosario. Incorporation year, equity ownership and financing unverified. Creator biography reports2010 project launch but labels its biography generated from other sources; not adopted as a verified date. Historical Apache licensing replaced by current GPL2.0 documentation. [1](https://www.mayan-edms.com/support/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open-source core | free | USD 0/site | — | — | — | unspecified | free self-hosted core. Software license cost is zero; infrastructure, extensions and external services can cost extra. [1](https://docs.mayan-edms.com/chapters/license.html) |
| popular | unknown | unknown | — | — | — | — | unspecified | vendor commercial cloud. No explicit Most popular or Recommended designation verified on the current public pricing page. [1](https://www.mayan-edms.com/support/) |
| business | Level4enterprise support | published | — | USD 13188/support contract for one installation | — | — | unspecified | optional paid support for self-hosted software. Advertised$1,099/month with yearly plan, multiplied by12=$13,188/year. This is a support service, not a software license or mandatory hosting charge. [1](https://www.mayan-edms.com/support/) |
| enterprise | Custom contract support | published | — | USD 35000/support contract starting price | — | — | unspecified | optional enterprise support. Starts at$35KUSD/year; custom scope and contract. Relicensing is separately contact-sales. Core software remains free. [1](https://www.mayan-edms.com/support/) |

## Defensibility assessments

- Configured workflow states, metadata templates and atomic permissions can embed business processes deeply enough to make migration costly; no exclusive network advantage is established. [1](https://docs.mayan-edms.com/chapters/features.html)

## Three product reasons to consider it

1. State-based workflows with expiration, escalation and external actions model document approvals and reviews. [1](https://docs.mayan-edms.com/chapters/features.html)
2. Non-destructive versions, page edits and redactions preserve original files and prior states for audit or rollback. [1](https://docs.mayan-edms.com/chapters/features.html)
3. Template-generated metadata indexes and fine-grained role permissions organize large collections around business rules. [1](https://docs.mayan-edms.com/chapters/features.html)

## Corporate sponsorship

Status: **business-fallback**. No corporate sponsor named on official support/donation page reviewed; include verified service business Mayan EDMS LLC as steward fallback, not as an equity investor. [1](https://www.mayan-edms.com/support/)

- [Mayan EDMS LLC](https://www.mayan-edms.com): business-steward. [Evidence](https://www.mayan-edms.com/support/).

## Self-operation requirements

Mode: **server**. Official4.12.2 documentation and currently linked s4.12 Compose stack. Minimum and recommended sizing distinct; actual throughput depends on OCR and document workload. [1](https://docs.mayan-edms.com/chapters/requirements.html) [2](https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml) [3](https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/.env) [4](https://docs.mayan-edms.com/chapters/docker/install_docker_compose.html)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Engine and Docker Compose | required | — | Always | Verified official deployment route; app image includes Python/Django and document tooling. [1](https://docs.mayan-edms.com/chapters/docker/install_docker_compose.html) |
| PostgreSQL | required | — | Always | Official Compose default15.17; documented minimum13.11. No alternative SQL backend claimed for this production route. [1](https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml) |
| RabbitMQ | required | — | Always | Default Compose4.1.8 management image, Celery message broker. [1](https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml) |
| Redis | required | — | Always | Default Compose7.4.8 for results, locks and event stream; do not treat all keys as disposable cache. [1](https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml) |
| Application with background Celery workers | required | — | Always | Default all_in_one profile; separate worker profiles available in Compose. [1](https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/.env) |
| Persistent application/document and database volumes | required | — | Always | Preserve app, PostgreSQL and broker volumes. [1](https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml) |
| Elasticsearch | optional | — | Enable Elasticsearch profile when using this search backend. | Default optional image9.1.10; not in default profile list. [1](https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml) |
| Traefik and DNS/TLS configuration | optional | — | Enable optional reverse proxy/HTTPS profile. | Documented deployment component. [1](https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml) |
| SMTP mailing server | conditional | — | Only when sending documents by mailing profile. | Documented deployment component. [1](https://docs.mayan-edms.com/chapters/features.html) |
| LibreOffice | conditional | — | Only for Office previews; packaged or installed with chosen deployment. | Documented deployment component. [1](https://docs.mayan-edms.com/chapters/features.html) |
| ClamAV | optional | — | Only when scanning enabled; disabled by default. | Documented deployment component. [1](https://docs.mayan-edms.com/chapters/features.html) |
| OpenAI API or Ollama endpoint | conditional | — | Only for optional AI summarization, semantic search and extraction. | Remote OpenAI usage can incur provider fees; local or remote Ollama alternative. [1](https://docs.mayan-edms.com/chapters/features.html) |

Resources: CPU 64-bit dual-core1GHz minimum;8cores2GHz+ recommended; memory 4GB minimum;16GB+ recommended; storage not specified; OS GNU/Linux or mature virtualized Docker/Compose host. System requirements minimum; SSD recommended. No fixed storage capacity verified. [1](https://docs.mayan-edms.com/chapters/requirements.html) [2](https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml) [3](https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/.env) [4](https://docs.mayan-edms.com/chapters/docker/install_docker_compose.html)

## One-click and installer options

Status: **none-found**. Official page gives multiple Docker installation/configuration/start commands. Docker convenience installer installs Docker only, not Mayan; not counted as one-click. [1](https://docs.mayan-edms.com/chapters/docker/install_docker_compose.html)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/mayan-edms.json) · [Claim ledger](../../research/profile-claims/mayan-edms.jsonl) · [Research steps](../../research/profile-audits/mayan-edms.md)
