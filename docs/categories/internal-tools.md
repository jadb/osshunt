# Internal tools and low-code apps

Build admin panels, operational apps and workflows over databases and APIs.

Audience: Operations and IT teams, developers and business teams building bespoke internal software. Cross-industry use, but direct buyers are teams creating custom internal software rather than every employee.

Use-case sources: [1](https://tooljet.com/pricing), [2](https://www.appsmith.com/pricing).

- [Retool](https://retool.com): USD 10/seat/month, annual billing. Team: $10/builder/month and $5/internal user/month, billed annually; free plan for up to five users. Usage and higher tiers differ. [Pricing](https://retool.com/pricing).

### Appsmith — C

Apache-2.0 Community core; commercial editions separately gate workflow building and reusable packages, so C rather than enterprise-only B.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/appsmithorg/appsmith/blob/67bcbe12c962a5c5feef9793ad87d66c331b8d59/LICENSE), [edition evidence](https://www.appsmith.com/pricing), [hosting](https://www.appsmith.com/pricing), [repository](https://github.com/appsmithorg/appsmith).

Paid restrictions: Workflows and reusable packages; Premium integrations; More than three Git repositories and custom environments; Custom access roles, audit logs, SAML/OIDC SSO and SCIM

Repository: pushed 2026-10-21T21:22:59Z; latest commit 2026-10-21T20:47:06Z; latest published release v2.5.1 (2026-10-21T02:29:46Z). Quick analysis: 6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Retool → Appsmith: **partial**. Rebuild Retool screens, queries and access rules against supported data sources. Validate connector coverage and workflow/edition gates before migration. No verified direct Retool app import. [1](https://www.appsmith.com/pricing) [2](https://retool.com/pricing)

### Budibase — C

GPLv3 core and MPL-2.0 generated-app packages; paid packages/pro uses non-OSI BSL. Unlimited OSS apps/users/actions, but one workspace plus paid backup/environment capabilities warrant C.

License: GPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/Budibase/budibase/blob/90aa490bb1692934be473907b77077d94aef6fc1/LICENSE), [edition evidence](https://budibase.com/pricing/), [hosting](https://budibase.com/pricing/), [repository](https://github.com/Budibase/budibase).

Paid restrictions: Open source limited to one workspace; Built-in backups and restore, environment variables and custom branding; Enforced SSO, user groups, Active Directory/SCIM and audit logs

Repository: pushed 2026-10-21T15:20:53Z; latest commit 2026-10-21T14:12:44Z; latest published release v3.50.0 (2026-10-19T08:09:46Z). Quick analysis: 5.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Retool → Budibase: **partial**. Rebuild Retool screens, queries and access rules against supported data sources. Validate connector coverage and workflow/edition gates before migration. No verified direct Retool app import. [1](https://budibase.com/pricing/) [2](https://retool.com/pricing)

### ToolJet — C

AGPL Community core, not a claim about commercial Enterprise code. Official self-host pricing gates ordinary development and deployment functions, therefore C. Pricing-plan caps may depend on distributed edition; source-build entitlements need confirmation.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/ToolJet/ToolJet/blob/a743e91bf48b9b6377aca69699b39698e06fb5f3/LICENSE), [edition evidence](https://tooljet.com/pricing), [hosting](https://tooljet.com/pricing), [repository](https://github.com/ToolJet/ToolJet).

Paid restrictions: Self-host free plan: two builders, up to 50 end users, up to ten apps; Version control, Git sync, custom styling, themes and modules; Scheduled workflow triggers; Custom groups, audit logs, SSO and air-gapped deployment

Repository: pushed 2026-10-21T20:19:45Z; latest commit 2026-10-21T17:28:35Z; latest published release v3.20.247-lts (2026-10-21T14:25:43Z). Quick analysis: 6.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Retool → ToolJet: **partial**. Rebuild Retool screens, queries and access rules against supported data sources. Validate connector coverage and workflow/edition gates before migration. No verified direct Retool app import. [1](https://tooljet.com/pricing) [2](https://retool.com/pricing)

[Category research and unresolved questions](../../research/categories/internal-tools.json) · [Research audit](../../research/audits/internal-tools.md)
