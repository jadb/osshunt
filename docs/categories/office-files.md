# Office suite and files

Business document editing, office collaboration and file sync/share; distinguish integrated hubs from file platforms and editor components.

Audience: Business teams across functions creating, storing and collaborating on documents.. Documents, spreadsheets and shared files recur across most office-based businesses; broad suite and storage incumbents address small teams through enterprises. This is qualitative reach, not a measured market-size ranking.

Use-case sources: [1](https://workspace.google.com/pricing), [2](https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products), [3](https://www.dropbox.com/plans).

- [Dropbox](https://www.dropbox.com/plans): entry amount unverified/quote, quote billing. Business Standard displayed $15/user/month; billing selector state not reliably preserved by extraction, so no normalized entry amount claimed. Personal Plus $9.99 also shown. [Pricing](https://www.dropbox.com/plans).
- [Google Workspace](https://workspace.google.com/pricing): USD 7/seat/month, annual billing. Business Starter standard USD $7/user/month with one-year commitment; temporary promotions excluded. [Pricing](https://workspace.google.com/pricing).
- [Microsoft 365](https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products): USD 5.4/seat/month, annual billing. Business Basic without Teams USD $5.40/user/month paid yearly; web/mobile apps. Basic with Teams $7; desktop apps require another plan. [Pricing](https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products).

### Collabora Online (CODE) — A

Source and functionality remain open; commercial offering sells stable supported builds. CODE rolling builds lack SLA/LTS and are not recommended by vendor for production. September 2026 maintainer confirms default CODE has no document/connection caps; optional home mode introduces 20-connection/10-document limits. Source is now in Gerrit; GitHub source mirror used for health, not old issue-only repository.

License: MPL-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/CollaboraOnline/online.mirror/blob/832ea2c5b04f8f935d90cd33926b10450d9c0dd9/COPYING), [edition evidence](https://www.collaboraonline.com/de/code/), [hosting](https://www.collaboraonline.com/become-partner/), [repository](https://github.com/CollaboraOnline/online.mirror).

Repository: pushed 2026-10-21T20:43:38Z; latest published release none on this repository (n/a). Quick analysis: 4.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Google Workspace → Collabora Online (CODE): **partial**. Editor component for documents/spreadsheets/slides, requiring external file storage/authentication such as Nextcloud, ownCloud or Seafile. Does not supply the full email/calendar/meetings/storage suite; test Office-format, macro and layout fidelity. CODE rolling builds carry production stability caveat. [1](https://www.collaboraonline.com/de/code/) [2](https://www.collaboraonline.com/blog/why-the-best-online-office-doesnt-try-to-store-your-files/)
- Microsoft 365 → Collabora Online (CODE): **partial**. Editor component for documents/spreadsheets/slides, requiring external file storage/authentication such as Nextcloud, ownCloud or Seafile. Does not supply the full email/calendar/meetings/storage suite; test Office-format, macro and layout fidelity. CODE rolling builds carry production stability caveat. [1](https://www.collaboraonline.com/de/code/) [2](https://www.collaboraonline.com/blog/why-the-best-online-office-doesnt-try-to-store-your-files/)

### Nextcloud Hub — B

AGPL server and broad OSS app ecosystem; current official Enterprise comparison explicitly differentiates enterprise apps/monitoring, so not tier A. Core sharing/collaboration remains available; ~500-user community positioning is not a license cap. Office engine, mail transport and third-party connectors are separate integrations with their own terms.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/nextcloud/server/blob/b9759221cbbed0c07edb06f834f508eb1d0fff8c/COPYING), [edition evidence](https://nextcloud.com/enterprises/), [hosting](https://nextcloud.com/providers/), [repository](https://github.com/nextcloud/server).

Paid restrictions: Dedicated enterprise apps for authentication, workflows and security; Nextcloud Guard enterprise monitoring; Unlimited vendor push notification service and extended maintenance require Enterprise

Repository: pushed 2026-10-21T16:37:10Z; latest published release v33.0.10 (2026-10-15T08:37:28Z). Quick analysis: 7.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Dropbox → Nextcloud Hub: **partial**. Self-hosted file sync/share alternative with desktop/mobile clients, sharing and versioning; own server/storage/backup operations required. Dropbox signatures, Replay, AI connectors and complex team policies need independent replacement or evaluation. [1](https://nextcloud.com/) [2](https://nextcloud.com/enterprises/) [3](https://www.dropbox.com/plans)
- Google Workspace → Nextcloud Hub: **partial**. Broad collaboration hub: file sync/share, groupware, calls and document collaboration via apps. Configure an office engine and existing email server/provider; not a replacement for all proprietary desktop features, advanced formulas/macros, tenant identity or compliance services. Export native cloud document formats to portable Office/ODF files and pilot fidelity before migrating. [1](https://nextcloud.com/) [2](https://nextcloud.com/enterprises/) [3](https://docs.nextcloud.com/server/stable/admin_manual/office/index.html)
- Microsoft 365 → Nextcloud Hub: **partial**. Broad collaboration hub: file sync/share, groupware, calls and document collaboration via apps. Configure an office engine and existing email server/provider; not a replacement for all proprietary desktop features, advanced formulas/macros, tenant identity or compliance services. Export native cloud document formats to portable Office/ODF files and pilot fidelity before migrating. [1](https://nextcloud.com/) [2](https://nextcloud.com/enterprises/) [3](https://docs.nextcloud.com/server/stable/admin_manual/office/index.html)

### ownCloud Infinite Scale (oCIS source edition) — B

Apache-2.0 backend plus in-tree web source; May 2026 vendor statement defines complete core EFSS/federation/APIs/governance/clients with enterprise compliance extras. Some vendor stable binaries carry separate EULA; source-build rights and vendor packaged licensing must be distinguished. Exact enterprise boundary not exhaustively enumerated. Hosted ownCloud offering exists, but its backend/version equivalence to this source edition is not verified.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/owncloud/ocis/blob/2d8841f490b68adbec01373961111fd90f7d26c1/LICENSE), [edition evidence](https://owncloud.com/blogs/open-source-efss-is-not-a-stepping-stone-to-a-sales-call/), [hosting](https://owncloud.com/pricing/), [repository](https://github.com/owncloud/ocis).

Paid restrictions: Enterprise compliance and policy-enforcement layer

Repository: pushed 2026-10-21T13:45:37Z; latest published release v8.2.2 (2026-10-21T10:09:21Z). Quick analysis: 7.4/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Dropbox → ownCloud Infinite Scale (oCIS source edition): **partial**. File sync/share with team-owned spaces, desktop/mobile clients and WebDAV. Recreate sharing/permissions and evaluate editor integrations; does not cover all Dropbox PDF/signing/video/AI bundles. Separate source rights from vendor stable binary EULA. [1](https://github.com/owncloud/ocis) [2](https://owncloud.com/features/spaces/)
- Google Workspace → ownCloud Infinite Scale (oCIS source edition): **partial**. Replaces Drive/OneDrive file sync/share portion with team spaces and WebDAV APIs; Office editors integrated separately. Mail/calendar/meetings and proprietary tenant services require other products. Choose source or vendor build after checking relevant distribution terms. [1](https://github.com/owncloud/ocis) [2](https://owncloud.com/features/spaces/)
- Microsoft 365 → ownCloud Infinite Scale (oCIS source edition): **partial**. Replaces Drive/OneDrive file sync/share portion with team spaces and WebDAV APIs; Office editors integrated separately. Mail/calendar/meetings and proprietary tenant services require other products. Choose source or vendor build after checking relevant distribution terms. [1](https://github.com/owncloud/ocis) [2](https://owncloud.com/features/spaces/)

### ONLYOFFICE Docs Community — C

Community editor source AGPLv3; current LICENSE adds attribution/origin/legal-notice conditions and licenses non-code content CC-BY-SA-4.0. Enterprise/Developer proprietary. Everyday mobile browser editing and concurrency gates warrant C. This record describes Docs engine, not separate Workspace or DocSpace products.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/ONLYOFFICE/DocumentServer/blob/37678343ec4155e1c32d1e9aac9deb02f1036500/LICENSE), [edition evidence](https://helpcenter.onlyoffice.com/docs/faq/docs-enterprise.aspx), [hosting](https://helpcenter.onlyoffice.com/docs/installation/docs-cloud-registration.aspx), [repository](https://github.com/ONLYOFFICE/DocumentServer).

Paid restrictions: Community capped at 20 simultaneous editing connections; Mobile web editing excluded from Community; Administration panel and commercial branding/automation options require paid editions

Repository: pushed 2026-10-21T10:05:34Z; latest published release v10.0.0 (2026-10-12T15:01:39Z). Quick analysis: 5.6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Google Workspace → ONLYOFFICE Docs Community: **partial**. Office editing component, typically integrated with sync/share storage. Not the complete mail/calendar/file suite; Docs Community has 20-editing-connection ceiling and no mobile browser editing. Export native Google documents first; test complex Office documents and integrations. [1](https://www.onlyoffice.com/docs) [2](https://helpcenter.onlyoffice.com/docs/faq/docs-enterprise.aspx)
- Microsoft 365 → ONLYOFFICE Docs Community: **partial**. Office editing component, typically integrated with sync/share storage. Not the complete mail/calendar/file suite; Docs Community has 20-editing-connection ceiling and no mobile browser editing. Export native Google documents first; test complex Office documents and integrations. [1](https://www.onlyoffice.com/docs) [2](https://helpcenter.onlyoffice.com/docs/faq/docs-enterprise.aspx)

### Seafile Community Edition — C

Server core AGPLv3 with explicit OpenSSL linking permission; python directory Apache-2.0, Seahub web UI separately Apache-2.0 and desktop sync daemon GPLv2. Community sync/share usable, but common search and permission workflows are paid. Popular haiwen/seafile repository is client daemon; server-core repository used for license/health.

License: AGPL-3.0-only WITH LicenseRef-OpenSSL-linking-exception; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/haiwen/seafile-server/blob/a652460e9d4314d5e67c82e0ebe9aa48e8ea1212/LICENSE.txt), [edition evidence](https://www.seafile.com/en/product/seafile_on_premise/), [hosting](https://shop.seafile.com/en/pricing/), [repository](https://github.com/haiwen/seafile-server).

Paid restrictions: Full-text file search requires Professional; Granular folder/subfolder permissions require Professional; Comprehensive audit logs, HA/clustering and S3 deployment require Professional

Repository: pushed 2026-10-20T03:51:24Z; latest published release v7.1.1-server (2019-12-17T02:43:09Z). Quick analysis: 4.3/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Dropbox → Seafile Community Edition: **partial**. File sync/share and library versioning fit; libraries replace Dropbox folder model, so permissions, shares and links need recreation/testing. Pro is needed for full-text search and granular folder permissions; Dropbox bundled signatures/video review not covered. [1](https://github.com/haiwen/seafile) [2](https://www.seafile.com/en/product/seafile_on_premise/)
- Google Workspace → Seafile Community Edition: **partial**. Replaces Drive/OneDrive-style file sync/share portion only; Office editing requires an external editor integration. Email, meetings and full suite absent; full-text file search and fine-grained permissions are paid Professional features. [1](https://www.seafile.com/en/product/seafile_on_premise/) [2](https://github.com/haiwen/seafile)
- Microsoft 365 → Seafile Community Edition: **partial**. Replaces Drive/OneDrive-style file sync/share portion only; Office editing requires an external editor integration. Email, meetings and full suite absent; full-text file search and fine-grained permissions are paid Professional features. [1](https://www.seafile.com/en/product/seafile_on_premise/) [2](https://github.com/haiwen/seafile)

[Category research and unresolved questions](../../research/categories/office-files.json) · [Research audit](../../research/audits/office-files.md)
