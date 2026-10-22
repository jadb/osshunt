# PDF editing and processing

Tools to edit PDF content or organize, split, merge, convert and process PDF documents.

Audience: People handling forms, reports, scans and other PDF documents at home, school and work.. PDF work spans many roles and personal document tasks; editing and page processing are distinct needs.

Use-case sources: [1](https://www.adobe.com/acrobat/pricing.html), [2](https://pdfsam.org/pdfsam-basic/), [3](https://smallpdf.com/pricing).

- [Adobe Acrobat](https://www.adobe.com/acrobat.html): USD 14.99/seat/month, annual billing. Acrobat Standard individual plan, annual commitment billed monthly; Pro US$19.99/month. [Pricing](https://www.adobe.com/acrobat/pricing.html).
  [Pricing tiers, organization and product reasons](../products/adobe-acrobat.md).
- [Smallpdf](https://smallpdf.com/): entry amount unverified/quote, annual billing. Pro annual billing offered; numeric price failed to render in official page extraction (ellipsis). [Pricing](https://smallpdf.com/pricing).
  [Pricing tiers, organization and product reasons](../products/smallpdf.md).

### PDF Arranger — A

GPL desktop source application with page split/merge, rotate, crop and rearrange functions; source installation and binary downloads documented. No commercial edition or paid gate found in the official product README. Scope is page arrangement, not full PDF content editing.

License: GPL-3.0-only; identified core OSI: yes; self-hostable: no; first-party hosted offer: no. [License](https://github.com/pdfarranger/pdfarranger/blob/fb76e09762677fe5c3e205bb89ca474500fce53c/COPYING), [edition evidence](https://github.com/pdfarranger/pdfarranger#about), [hosting](https://github.com/pdfarranger/pdfarranger#install-from-source), [repository](https://github.com/pdfarranger/pdfarranger).

[Sponsors, requirements, installation options, pricing and product profile](../products/pdf-arranger.md).

Service costs/limits: Local GTK desktop app; no vendor hosted service documented.

Repository: pushed 2026-10-01T02:15:06Z; latest commit 2026-09-30T16:26:13Z; latest published release 1.14.0 (2026-05-23T03:47:07Z). Quick analysis: 5.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Smallpdf → PDF Arranger: **partial**. Open PDF files locally for page split, merge, rotate, crop and rearrangement. Does not replace the wider conversion, text editing, signing or cloud-sharing service. [1](https://github.com/pdfarranger/pdfarranger) [2](https://smallpdf.com/pricing)

### PDFsam Basic — A

The named Basic desktop edition runs locally without watermarks or file-size limits; all six Basic tools are free. Enhanced and Visual are distinct commercial products, not extra Basic OSS modules. Basic handles page manipulation rather than full text editing, OCR or conversion.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: no; first-party hosted offer: no. [License](https://github.com/torakiki/pdfsam/blob/4e4dd4dc5b14a1d328837c2b549fbe0b43cec83f/LICENSE), [edition evidence](https://pdfsam.org/pdfsam-basic/), [hosting](https://pdfsam.org/pdfsam-basic/), [repository](https://github.com/torakiki/pdfsam).

[Sponsors, requirements, installation options, pricing and product profile](../products/pdfsam-basic.md).

Service costs/limits: Local desktop app, not a hosted web service or self-hosted server.

Repository: pushed 2026-10-02T11:03:21Z; latest commit 2026-10-02T11:03:17Z; latest published release v6.0.6 (2026-10-02T06:43:06Z). Quick analysis: 5.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Adobe Acrobat → PDFsam Basic: **partial**. Use existing PDF files locally for split, merge, rotate, mix and page extraction. Basic does not replace Acrobat text editing, OCR, conversion, forms or e-signature collection. [1](https://pdfsam.org/pdfsam-basic/) [2](https://www.adobe.com/acrobat/pricing.html)
- Smallpdf → PDFsam Basic: **partial**. Local page-processing replacement for Smallpdf merge, split, rotate and extract tasks. No cloud account migration; retain PDF files. Basic lacks Smallpdf OCR, content editing and compression workflows. [1](https://pdfsam.org/pdfsam-basic/) [2](https://smallpdf.com/pricing)

### Stirling PDF — U

Mixed-license project. Pinned root grants MIT only outside eight excluded directories, including engine, proprietary editor, desktop, SaaS/cloud and processor. Restrictive User License observed for engine/editor modules. A complete operational build from only MIT code was not established; full distribution is not certified OSI and excluded from default recommendations. Paid admin gates are documented separately from processing service costs.

License: MIT AND LicenseRef-Stirling-PDF-User-License; identified core OSI: no/unresolved; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/Stirling-Tools/Stirling-PDF/blob/dd48e0b25f364e587f308b279d6d60c365fcd24d/LICENSE), [edition evidence](https://docs.stirlingpdf.com/Server/Licensing/Plans-and-Licences/), [hosting](https://docs.stirlingpdf.com/Server/), [repository](https://github.com/Stirling-Tools/Stirling-PDF).

Paid restrictions: Login-capable Free server limited to five users; Team adds capacity.; External database, clustering, S3/database file storage, metrics and custom metadata require Team.; SAML, audit logs and offline license activation require Enterprise.

Service costs/limits: Processor/AI automation and API-key calls can draw on processing allowances; these are separate from software admin gates.

Repository: pushed 2026-10-21T22:29:26Z; latest commit 2026-10-21T22:21:07Z; latest published release v3.2.0 (2026-10-15T20:36:26Z). Quick analysis: 5.6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.


[Category research and unresolved questions](../../research/categories/pdf-tools.json) · [Research audit](../../research/audits/pdf-tools.md) · [Sourced claims](../../research/claims/pdf-tools.jsonl)
