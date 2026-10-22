> Temporary paths normalized; local setup omitted. Exact original retained locally.

# Paperless-ngx research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Opened docs.paperless-ngx.com setup/configuration:403; fallback to official repository raw documentation pinned to current v3.3.3.
3. Queried project fork2022; secondary results not used as founding evidence. Opened ngx-1.6.0 release; date not extractable.
4. Read stable setup, configuration and index; searched Gotenberg, Redis, LLM; opened Fyra Stack commercial site to verify sponsor business.

## Source review and decisions
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Home. Decision: Paperless-ngx identifies as community-supported.
- Open/read `https://github.com/paperless-ngx/paperless-ngx`; public locator: About / README. Decision: Exact project start unresolved after repository, release and documentation review.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Home. Decision: Community-supported project, not a verified incorporated vendor.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Demo hosting by. Decision: Equity funding not applicable to the community project; separate in-kind hosting sponsor identified.
- Open/read `https://github.com/paperless-ngx/paperless-ngx`; public locator: License. Decision: Open-source core: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Home. Decision: No explicit Most popular or Recommended designation verified on the current public pricing page.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Home / Features. Decision: No official organizational subscription verified in project docs; third-party hosting is separate.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Home / Features. Decision: No official enterprise software plan verified in project docs.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Features. Decision: OCR in more than100 languages and PDF/A copies make scanned paper searchable while preserving originals.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Features. Decision: Automatic correspondent/type/tag classification and email rules reduce repetitive filing.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Features. Decision: Custom fields, saved views, full-text relevance and document file versions support a flexible personal or team archive.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Features. Decision: A well-integrated archive model joining OCR, classification and file history can create switching costs once users organize a large collection; no exclusive data advantage is established.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Demo hosting by. Decision: Project homepage credits Fyra Stack with demo hosting. This is in-kind sponsorship; Fyra Stack website confirms a commercial server business.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Demo hosting by. Decision: Fyra Stack: corporate-sponsor
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/setup.md`; public locator: Installation using Docker. Decision: Docker Engine and Docker Compose: one-of. Container route; alternative to bare-metal Python runtime.. Documented deployment component.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/setup.md`; public locator: Bare metal route. Decision: Python3.11–3.14 with Linux native OCR dependencies: one-of. Bare-metal route; image bundles these for containers.. Includes Tesseract, OCRmyPDF, Ghostscript, qpdf, ImageMagick and document parsing libraries.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md`; public locator: PAPERLESS_DBENGINE. Decision: SQLite: one-of. Default embedded database; alternative to PostgreSQL/MariaDB.. Documented deployment component.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md`; public locator: Database. Decision: PostgreSQL: one-of. Recommended for multiple users or higher throughput.. Documented deployment component.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md`; public locator: PAPERLESS_DBENGINE. Decision: MariaDB: one-of. Alternative documented database; observe documented compatibility caveats.. Documented deployment component.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md`; public locator: PAPERLESS_REDIS. Decision: Valkey: one-of. Redis-protocol message broker; bundled default choice.. Documented deployment component.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md`; public locator: PAPERLESS_REDIS. Decision: Redis: one-of. Alternative Redis-protocol broker for scheduled tasks and cache.. Documented deployment component.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md`; public locator: Paths and folders. Decision: Persistent data/media/consume directories: required. Always. Holds originals, archive files, classifier/index data and default SQLite database.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md`; public locator: Optional Services / Tika. Decision: Apache Tika and Gotenberg: conditional. Required only for Office document and .eml parsing; disabled by default.. Documented deployment component.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Email processing. Decision: IMAP email account: conditional. Only for email ingestion rules.. Documented deployment component.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/configuration.md`; public locator: PAPERLESS_AI_LLM_ENDPOINT. Decision: Ollama or OpenAI-compatible endpoint, optional embedding model: conditional. Only when opt-in AI enabled.. Local Ollama endpoint or remote compatible API; provider key may be required and usage can cost extra.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/index.md`; public locator: Features. Decision: Azure AI OCR endpoint: conditional. Only for opt-in remote OCR; local Tesseract is available.. Documented deployment component.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/setup.md`; public locator: Setup. Decision: {'cpu': None, 'memory': None, 'storage': None, 'os': 'Linux for bare metal; Docker-capable host for containers', 'notes': 'No fixed hardware minimum verified; size to workload.'}
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/setup.md`; public locator: Use the installation script. Decision: offered. Official script and manual Compose reviewed; no verified graphical provider template added.
- Open/read `https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/v3.3.3/docs/setup.md`; public locator: Use the installation script. Decision: Interactive Paperless-ngx installation script: one-command. Guided shell installer requires Docker/Compose; this is a one-command route, not a graphical one-click service.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.

- Persistence command `python records_06.py` failed because `python` alias absent; retried with `python3`, succeeded. Final group validation:23 valid profiles.
