> Temporary paths normalized; local setup omitted. Exact original retained locally.

# Mayan EDMS research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Opened support, documentation and author biography. About route unavailable; biography explicitly generated, so exact founding year kept unknown. Funding search of official sources did not establish financing.
3. Read current4.12.2 requirements/features/license. Legacy deployment guesses404; followed official Docker Compose link.
4. Opened linked raw Compose and.env:default profiles all_in_one,postgresql,rabbitmq,redis. Exact services separated from optional Elasticsearch/Traefik.

## Source review and decisions
- Open/read `https://www.mayan-edms.com/support/`; public locator: Terms and conditions / supported by. Decision: Official support terms and footer identify Mayan EDMS LLC.
- Open/read `https://www.mayan-edms.com/support/`; public locator: supported by / copyright. Decision: Exact company/project founding year unresolved; support footer2016 is a copyright year.
- Open/read `https://www.mayan-edms.com/support/`; public locator: Terms and conditions. Decision: LLC exists; equity ownership not disclosed on reviewed official page. Code rights do not establish company equity ownership.
- Open/read `https://www.mayan-edms.com/support/`; public locator: We need your help! / Support. Decision: Support/donation page does not establish outside funding or bootstrapping; unknown.
- Open/read `https://docs.mayan-edms.com/chapters/license.html`; public locator: License. Decision: Open-source core: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://www.mayan-edms.com/support/`; public locator: Multiple options for all needs and budgets. Decision: No explicit Most popular or Recommended designation verified on the current public pricing page.
- Open/read `https://www.mayan-edms.com/support/`; public locator: Level4enterprise. Decision: Level4enterprise support: published; monthly=None; annual total=13188; USD/support contract for one installation. Advertised$1,099/month with yearly plan, multiplied by12=$13,188/year. This is a support service, not a software license or mandatory hosting charge.
- Open/read `https://www.mayan-edms.com/support/`; public locator: Custom contract. Decision: Custom contract support: published; monthly=None; annual total=35000; USD/support contract starting price. Starts at$35KUSD/year; custom scope and contract. Relicensing is separately contact-sales. Core software remains free.
- Open/read `https://docs.mayan-edms.com/chapters/features.html`; public locator: Automation and collaboration. Decision: State-based workflows with expiration, escalation and external actions model document approvals and reviews.
- Open/read `https://docs.mayan-edms.com/chapters/features.html`; public locator: Documents and files. Decision: Non-destructive versions, page edits and redactions preserve original files and prior states for audit or rollback.
- Open/read `https://docs.mayan-edms.com/chapters/features.html`; public locator: Organization and retrieval / Security and access control. Decision: Template-generated metadata indexes and fine-grained role permissions organize large collections around business rules.
- Open/read `https://docs.mayan-edms.com/chapters/features.html`; public locator: Automation and collaboration / Security and access control. Decision: Configured workflow states, metadata templates and atomic permissions can embed business processes deeply enough to make migration costly; no exclusive network advantage is established.
- Open/read `https://www.mayan-edms.com/support/`; public locator: We need your help! / supported by. Decision: No corporate sponsor named on official support/donation page reviewed; include verified service business Mayan EDMS LLC as steward fallback, not as an equity investor.
- Open/read `https://www.mayan-edms.com/support/`; public locator: We need your help! / supported by. Decision: Mayan EDMS LLC: business-steward
- Open/read `https://docs.mayan-edms.com/chapters/docker/install_docker_compose.html`; public locator: Install with Docker Compose. Decision: Docker Engine and Docker Compose: required. Always. Verified official deployment route; app image includes Python/Django and document tooling.
- Open/read `https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml`; public locator: MAYAN_DATABASES / postgresql. Decision: PostgreSQL: required. Always. Official Compose default15.17; documented minimum13.11. No alternative SQL backend claimed for this production route.
- Open/read `https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml`; public locator: MAYAN_CELERY_BROKER_URL / rabbitmq. Decision: RabbitMQ: required. Always. Default Compose4.1.8 management image, Celery message broker.
- Open/read `https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml`; public locator: MAYAN_CELERY_RESULT_BACKEND / redis. Decision: Redis: required. Always. Default Compose7.4.8 for results, locks and event stream; do not treat all keys as disposable cache.
- Open/read `https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/.env`; public locator: COMPOSE_PROFILES. Decision: Application with background Celery workers: required. Always. Default all_in_one profile; separate worker profiles available in Compose.
- Open/read `https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml`; public locator: volumes. Decision: Persistent application/document and database volumes: required. Always. Preserve app, PostgreSQL and broker volumes.
- Open/read `https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml`; public locator: elasticsearch. Decision: Elasticsearch: optional. Enable Elasticsearch profile when using this search backend.. Default optional image9.1.10; not in default profile list.
- Open/read `https://gitlab.com/mayan-edms/mayan-edms/-/raw/master/docker/docker-compose.yml`; public locator: traefik. Decision: Traefik and DNS/TLS configuration: optional. Enable optional reverse proxy/HTTPS profile.. Documented deployment component.
- Open/read `https://docs.mayan-edms.com/chapters/features.html`; public locator: Email documents. Decision: SMTP mailing server: conditional. Only when sending documents by mailing profile.. Documented deployment component.
- Open/read `https://docs.mayan-edms.com/chapters/features.html`; public locator: Office document format support. Decision: LibreOffice: conditional. Only for Office previews; packaged or installed with chosen deployment.. Documented deployment component.
- Open/read `https://docs.mayan-edms.com/chapters/features.html`; public locator: Antivirus scanning. Decision: ClamAV: optional. Only when scanning enabled; disabled by default.. Documented deployment component.
- Open/read `https://docs.mayan-edms.com/chapters/features.html`; public locator: AI integration with OpenAI / AI integration with Ollama. Decision: OpenAI API or Ollama endpoint: conditional. Only for optional AI summarization, semantic search and extraction.. Remote OpenAI usage can incur provider fees; local or remote Ollama alternative.
- Open/read `https://docs.mayan-edms.com/chapters/requirements.html`; public locator: System requirements. Decision: {'cpu': '64-bit dual-core1GHz minimum;8cores2GHz+ recommended', 'memory': '4GB minimum;16GB+ recommended', 'storage': None, 'os': 'GNU/Linux or mature virtualized Docker/Compose host', 'notes': 'System requirements minimum; SSD recommended. No fixed storage capacity verified.'}
- Open/read `https://docs.mayan-edms.com/chapters/docker/install_docker_compose.html`; public locator: Install with Docker Compose. Decision: none-found. Official page gives multiple Docker installation/configuration/start commands. Docker convenience installer installs Docker only, not Mayan; not counted as one-click.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.

- Persistence command `python records_06.py` failed because `python` alias absent; retried with `python3`, succeeded. Final group validation:23 valid profiles.
