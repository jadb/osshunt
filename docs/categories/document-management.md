# Document Management

Capture, OCR, organize, search and control business documents, with document workflows and access permissions.

Audience: Operations, finance, HR, records administrators and teams managing document collections.. Document capture and retrieval span business departments and industries; advanced approval and governance needs vary by organization.

Use-case sources: [1](https://start.docuware.com/faq/docuware-pricing), [2](https://www.mayan-edms.com/).

- [DocuWare](https://start.docuware.com/): entry amount unverified/quote, quote billing. Tailored quote; official Cloud FAQ publishes typical USD30–125+ per user/month depending on plan, user type and scale. Annual subscription; not a guaranteed entry plan price. [Pricing](https://start.docuware.com/faq/docuware-pricing).
- [M-Files](https://www.m-files.com/): EUR 65/seat/month, annual billing. Essentials EUR65/seat/month; subscriptions typically billed annually, other terms by agreement. Enterprise custom quote. [Pricing](https://www.m-files.com/editions/).

### Mayan EDMS — A

Current canonical GitLab LICENSE and official FAQ establish GPL-2.0-only since 4.6; Apache metadata belongs to older mirror. Public software includes workflows, versions, OCR, granular permissions and REST API. Commercial support tiers limit service coverage, not software user/document capacity. No separate paid software edition identified.

License: GPL-2.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://gitlab.com/mayan-edms/mayan-edms/-/raw/834ffec1b539171390358e60a0406870108514f5/LICENSE), [edition evidence](https://docs.mayan-edms.com/chapters/features.html), [hosting](https://www.mayan-edms.com/support/), [repository](https://gitlab.com/mayan-edms/mayan-edms).

Service costs/limits: Paid support contracts restrict covered users/documents/installations and offer SLAs, migration assistance, customization and early access; these are service terms.; Optional external OpenAI API usage may incur provider costs; local Ollama integration also documented.

Repository: pushed unknown; latest commit 2026-09-21T05:03:57.000-04:00; latest published release 4.12.2 (2026-09-14). Canonical GitLab live metadata, commit, pinned LICENSE and empty releases API captured; GitHub mirror not canonical. rsx results pending centrally.

- DocuWare → Mayan EDMS: **partial**. Both support document versions, permissions and workflows. Export documents/metadata and rebuild workflow states, roles and integrations using Mayan REST API; DocuWare forms and add-on modules are not proven portable. [1](https://start.docuware.com/faq/docuware-pricing) [2](https://docs.mayan-edms.com/chapters/features.html)
- M-Files → Mayan EDMS: **partial**. Partial fit for document storage, metadata, versioning and approval workflows. Rebuild M-Files metadata relationships, workflows, access rules and Microsoft 365 experiences; Mayan API supports custom integration but no direct vault migration was verified. [1](https://www.m-files.com/editions/) [2](https://docs.mayan-edms.com/chapters/features.html)

### Paperless-ngx — A

Community self-hosted project; official source documents OCR, search, permissions, versions and workflows in the open application, with no paid software edition identified. Tier applies to public product; remote AI/OCR service costs are separate.

License: GPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/paperless-ngx/paperless-ngx/blob/f25fd5365fcc32d06c24306535c7b55e93fbb259/LICENSE), [edition evidence](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/dev/docs/index.md), [hosting](https://github.com/paperless-ngx/paperless-ngx), [repository](https://github.com/paperless-ngx/paperless-ngx).

Service costs/limits: Optional Azure AI remote OCR or remote LLM providers may require separately paid services; local OCR is included.; Project demo is not production managed hosting.

Repository: pushed 2026-10-21T21:50:49Z; latest commit 2026-10-21T15:47:44Z; latest published release v3.3.3 (2026-10-19T17:24:02Z). Quick analysis: 7.1/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- DocuWare → Paperless-ngx: **partial**. Suitable for OCR, indexing and searchable document archives. Export source files and metadata, then map document types/tags/permissions on import. DocuWare forms, approval routing, SAP/signature add-ons and configurations require separate evaluation and rebuilding; no verified direct migration tool. [1](https://start.docuware.com/faq/docuware-pricing) [2](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/dev/docs/index.md)

[Category research and unresolved questions](../../research/categories/document-management.json) · [Research audit](../../research/audits/document-management.md) · [Sourced claims](../../research/claims/document-management.jsonl)
