# API clients and testing

Develop, inspect and automate tests for HTTP and other APIs, with explicit separation between local clients and managed team platforms.

Audience: Software developers, API QA engineers and technical integration teams. Daily utility for API development and quality assurance roles; narrower than general business collaboration tools.

Use-case sources: [1](https://www.postman.com/pricing/), [2](https://insomnia.rest/pricing).

- [Insomnia paid plans](https://insomnia.rest/): entry amount unverified/quote, quote billing. Pricing page displays Pro $12/user/month and annual/monthly selector, but extracted state does not establish billing basis. Confirm at checkout. Free Essentials available; mock request overages extra. [Pricing](https://insomnia.rest/pricing).
  [Pricing tiers, organization and product reasons](../products/insomnia.md).
- [Postman](https://www.postman.com/): USD 9/account/month, annual billing. Solo entry $9/month billed annually; Team $19/user/month annually. Free core client exists; usage/add-ons extra. [Pricing](https://www.postman.com/pricing/).
  [Pricing tiers, organization and product reasons](../products/postman.md).

### Hoppscotch Community Edition — B

MIT self-hosted CE includes workspace member roles and invitations. Enterprise administration/security extras justify B; hosted Cloud Business gates are not assumed to restrict CE.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/hoppscotch/hoppscotch/blob/63273f8e599e73f0fb38c0739314e8d46b6bc83d/LICENSE), [edition evidence](https://docs.hoppscotch.io/documentation/self-host/getting-started), [hosting](https://hoppscotch.com/pricing), [repository](https://github.com/hoppscotch/hoppscotch).

[Sponsors, requirements, installation options, pricing and product profile](../products/hoppscotch.md).

Paid restrictions: Enterprise self-host adds SAML/OIDC authentication, audit/admin tools and domain/site access controls.

Service costs/limits: First-party Cloud has separate Free/Business/Enterprise plans; self-host operators supply deployment, upgrades and database operations.

Repository: pushed 2026-10-20T07:04:35Z; latest commit 2026-09-30T06:59:53Z; latest published release 2026.9.0 (2026-09-30T11:50:32Z). Quick analysis: 6.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Insomnia paid plans → Hoppscotch Community Edition: **partial**. Import Insomnia collection/environment JSON. Scripts, tests and advanced authorization do not migrate; regular environment variables supported. Rebuild and test missing workflows; self-host import limit 50 MB. [1](https://docs.hoppscotch.io/documentation/features/importer) [2](https://docs.hoppscotch.io/documentation/self-host/getting-started)
- Postman → Hoppscotch Community Edition: **partial**. Import Postman collections/environments. Script import is experimental and requires consent; advanced authorization and collection-level settings are omitted. Revalidate tests and authentication. Self-host import limit documented at 50 MB. [1](https://docs.hoppscotch.io/documentation/features/importer) [2](https://docs.hoppscotch.io/documentation/self-host/getting-started)

### Bruno — C

MIT desktop client and CLI; local operation, not a hosted collaboration server. Paid migration and ordinary workspace/sync capabilities justify C. CLI data-driven execution and reports exist, so GUI edition gates do not imply their total absence.

License: MIT; identified core OSI: yes; self-hostable: no; first-party hosted offer: no. [License](https://github.com/usebruno/bruno/blob/dd0281dad107247a4653ff514feb069ac42e7ff8/license.md), [edition evidence](https://www.usebruno.com/pricing), [hosting](https://www.usebruno.com/pricing), [repository](https://github.com/usebruno/bruno).

[Sponsors, requirements, installation options, pricing and product profile](../products/bruno.md).

Paid restrictions: Full Postman Data Export import is Ultimate-only; individual collection import remains available.; Open Source edition has 2 workspaces and 5 OpenAPI syncs/month; paid editions remove these limits.

Service costs/limits: Git collaboration uses locally stored collections and a separately operated Git provider; catalog does not claim managed cloud team parity.

Repository: pushed 2026-10-19T10:09:22Z; latest commit 2026-10-19T09:25:10Z; latest published release v4.2.1 (2026-09-30T13:52:52Z). Quick analysis: 6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Insomnia paid plans → Bruno: **partial**. Bruno accepts Insomnia collection exports in JSON (v4) and YAML (v5+). Review requests, variables and authentication after import; Git-based local collaboration differs from managed organizational controls. [1](https://docs.usebruno.com/get-started/import-export-data/import-collections) [2](https://www.usebruno.com/pricing)
- Postman → Bruno: **partial**. Import individual Postman JSON collections into local Bruno files; complete Data Export import requires Ultimate. Recheck environments, authentication and tests; managed workspaces and monitoring do not transfer as a complete platform. [1](https://docs.usebruno.com/get-started/import-export-data/import-collections) [2](https://www.usebruno.com/pricing)

[Category research and unresolved questions](../../research/categories/api-testing.json) · [Research audit](../../research/audits/api-testing.md) · [Sourced claims](../../research/claims/api-testing.jsonl)
