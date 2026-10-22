# Docs and wiki

Team documentation, internal wikis and shared knowledge workspaces.

Audience: Employees and teams documenting decisions, procedures, project plans and institutional knowledge.. Documentation spans business functions; adoption does not require a specialist department. Qualitative potential reach, not a headcount estimate.

Use-case sources: [1](https://www.notion.com/pricing), [2](https://www.atlassian.com/en/software/confluence/pricing).

- [Confluence](https://www.atlassian.com/en/software/confluence/pricing): USD 5.78/seat/month, monthly billing. Standard public calculator displayed $5.78/user/month on monthly billing; price changes with seat count and billing. Free plan up to 10 users exists. [Pricing](https://www.atlassian.com/en/software/confluence/pricing).
  [Pricing tiers, organization and product reasons](../products/confluence.md).
- [Notion](https://www.notion.com/pricing): entry amount unverified/quote, monthly billing. Paid Plus exists; page auto-selected EUR 9.50/member/month and billing state was ambiguous. USD entry intentionally unverified; free SaaS tier is not OSS. [Pricing](https://www.notion.com/pricing).
  [Pricing tiers, organization and product reasons](../products/notion.md).

### BookStack — A

Project FAQ explicitly confirms one free open edition, no enterprise/custom edition and no feature locks. Official support is paid; no official managed hosting. Codeberg is now canonical; GitHub remains an active mirror.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/BookStackApp/BookStack/blob/045c6a98cac21ea86906674bb91d01f375460db6/LICENSE), [edition evidence](https://www.bookstackapp.com/about/project-faq/), [hosting](https://www.bookstackapp.com/about/project-faq/), [repository](https://github.com/BookStackApp/BookStack).

[Sponsors, requirements, installation options, pricing and product profile](../products/bookstack.md).

Repository: pushed 2026-10-21T04:31:17Z; latest commit 2026-10-18T18:33:04Z; latest published release v26.09.2 (2026-10-20T11:48:40Z). Quick analysis: 6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Confluence → BookStack: **partial**. Documentation/wiki use case covered with book/chapter/page hierarchy, roles, API and export options; validate Confluence macros/integrations and rebuild unsupported content. [1](https://www.bookstackapp.com/about/confluence-alternative/) [2](https://www.bookstackapp.com/)
- Notion → BookStack: **different-approach**. Useful for the wiki/documentation portion of Notion; hierarchical documentation model rather than Notion database workspace. No verified native Notion importer. [1](https://www.bookstackapp.com/) [2](https://www.notion.com/pricing)

### Docmost Community — C

AGPL applies to community core; apps/server/src/ee, apps/client/src/ee and packages/ee use commercial license per pinned README. Everyday migration and collaboration controls require Business. README links a cloud version, but current pricing emphasizes self-managed and hosted price is unverified.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/docmost/docmost/blob/9250ca8305cbb7d04dc1973b8b83346784fc361a/LICENSE), [edition evidence](https://docmost.com/pricing), [hosting](https://github.com/docmost/docmost), [repository](https://github.com/docmost/docmost).

[Sponsors, requirements, installation options, pricing and product profile](../products/docmost.md).

Paid restrictions: Business license gates SSO, AI, granular page permissions and Confluence importer.; Enterprise adds SCIM, audit logs, SIEM and page verification/review.

Repository: pushed 2026-10-21T19:48:50Z; latest commit 2026-10-21T19:48:49Z; latest published release v0.96.0 (2026-09-08T14:18:03Z). Quick analysis: 5.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Confluence → Docmost Community: **partial**. Confluence HTML space ZIP importer is Business-gated; docs claim formatting, hierarchy, internal links, images/attachments and Draw.io diagrams preserved. Test macros and integrations separately. [1](https://docmost.com/docs/user-guide/import-export) [2](https://docmost.com/pricing)
- Notion → Docmost Community: **partial**. Notion ZIP import preserves page structure; pilot databases, permissions and linked content. Export pages/spaces as Markdown or HTML. [1](https://docmost.com/docs/user-guide/import-export) [2](https://docmost.com/pricing)

### Outline — S

Pinned license explicitly says it is not an open source license. Additional Use Grant forbids commercial third-party Document Services. Pinned version changes to Apache-2.0 on 2030-10-12; that future conversion does not make current version OSS.

License: BUSL-1.1; identified core OSI: no/unresolved; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/outline/outline/blob/4f4fd882786685ee684fd1994601539a3bcd7812/LICENSE), [edition evidence](https://www.getoutline.com/pricing), [hosting](https://www.getoutline.com/pricing), [repository](https://github.com/outline/outline).

[Sponsors, requirements, installation options, pricing and product profile](../products/outline.md).

Paid restrictions: Community on-premises edition has limited features; Business and Enterprise sold separately.; Exact matrix checkmark mapping did not survive text extraction; paid migration/AI/security feature allocation requires visual verification.

Repository: pushed 2026-10-21T21:26:26Z; latest commit 2026-10-21T12:36:51Z; latest published release v1.11.0 (2026-10-12T14:22:35Z). Quick analysis: 5.1/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Confluence → Outline: **partial**. Knowledge-base replacement candidate under BSL rather than OSS; Confluence importer listed among on-premise features but exact paid-tier placement not verified. API export capabilities documented. [1](https://www.getoutline.com/pricing) [2](https://www.getoutline.com/developers)
- Notion → Outline: **partial**. Fits shared documentation; Notion database/workflow parity not claimed. Review BSL Document Service restriction and community edition limits. [1](https://www.getoutline.com/pricing) [2](https://www.getoutline.com/developers)

### AFFiNE — U

MIT covers code outside backend/native. Backend EE license explicitly exempts CE-distributed and specified client-side portions under MPL-2.0. Official marketing calls backend source-available, while blogs acknowledge MPL CE carveout. Full current CE boundary not independently reconstructed: do not present full stack as verified OSI OSS. MIT local editor is clearly OSS.

License: MIT AND MPL-2.0 AND LicenseRef-AFFiNE-EE; identified core OSI: no/unresolved; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/toeverything/AFFiNE/blob/0b69a6da21e8fd35beb85667bb8496d9b3852238/LICENSE), [edition evidence](https://affine.pro/enterprise), [hosting](https://affine.pro/pricing), [repository](https://github.com/toeverything/AFFiNE).

[Sponsors, requirements, installation options, pricing and product profile](../products/affine.md).

Paid restrictions: Official enterprise page says self-hosted Team required for more than 10 seats; multiple admin roles and priority support in Team.; Non-CE backend/native code has commercial EE production and redistribution restrictions.

Repository: pushed 2026-10-12T09:51:10Z; latest commit 2026-10-11T14:49:18Z; latest published release v0.27.4 (2026-08-18T16:51:39Z). Quick analysis: 6.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Confluence → AFFiNE: **different-approach**. Docs/whiteboards for shared knowledge; verify EE/CE license scope and procurement before production. Migration compatibility not independently tested. [1](https://affine.pro/about-us) [2](https://affine.pro/enterprise)
- Notion → AFFiNE: **different-approach**. Docs and canvas approach; local MIT editor is useful, but full self-hosted collaboration has mixed licensing and seat/plan questions. Pilot database parity and export/import round trips. [1](https://affine.pro/pricing) [2](https://affine.pro/blog/notion-alternative)

### AppFlowy client core — U

AGPL client core is OSI, but current production collaboration uses separately commercial server images. Full collaborative self-hosted OSS eligibility is unresolved; archived AGPL AppFlowy-Cloud excluded. Local client remains usable under AGPL. Excluded from default OSS collaboration recommendations pending a clearly eligible maintained full stack.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/AppFlowy-IO/AppFlowy/blob/5cf3a365dec0d59f64bad1ee4bb1050471a39b93/LICENSE), [edition evidence](https://github.com/AppFlowy-IO/AppFlowy-SelfHost-Commercial), [hosting](https://appflowy.com/pricing), [repository](https://github.com/AppFlowy-IO/AppFlowy).

[Sponsors, requirements, installation options, pricing and product profile](../products/appflowy.md).

Paid restrictions: Current commercial self-hosted server free tier is limited to one user seat per instance and three guest editors.; Commercial server enterprise authentication needs Seed or higher; server is separately licensed.

Repository: pushed 2026-10-21T04:12:10Z; latest commit 2026-06-26T02:35:45Z; latest published release 0.14.10 (2026-10-21T04:12:10Z). Quick analysis: 6.6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Notion → AppFlowy client core: **different-approach**. AGPL client supports documents/databases and local data control. Full team replacement needs separately commercial self-hosted services; do not treat AGPL client as unlimited OSS server. [1](https://github.com/AppFlowy-IO/AppFlowy) [2](https://github.com/AppFlowy-IO/AppFlowy-SelfHost-Commercial)

[Category research and unresolved questions](../../research/categories/docs-wiki.json) · [Research audit](../../research/audits/docs-wiki.md)
