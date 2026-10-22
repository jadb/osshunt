# Login and single sign-on

Workforce SSO, application/customer identity and web access authentication; distinct use cases with partial overlap.

Audience: IT/security teams managing employee application access and software teams implementing customer login.. Employee access spans industries; customer IAM also serves businesses operating applications. Deployment requires identity and security expertise.

Use-case sources: [1](https://www.okta.com/pricing/), [2](https://auth0.com/pricing).

- [Auth0](https://auth0.com/): USD 35/account/month, monthly billing. Displayed Essentials B2C price for 500 monthly active users; B2B and MAU selections change price; free plan also exists. [Pricing](https://auth0.com/pricing).
  [Pricing tiers, organization and product reasons](../products/auth0.md).
- [Okta Workforce Identity](https://www.okta.com/): USD 6/seat/month, annual billing. Starter suite advertised per user/month, billed annually; standalone products/add-ons differ. [Pricing](https://www.okta.com/pricing/).
  [Pricing tiers, organization and product reasons](../products/okta.md).

### Authelia — A

Community product includes documented reverse-proxy authentication, MFA and OIDC. No commercial feature edition or project-hosted service identified; scope is narrower than full workforce lifecycle or customer identity suites.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/authelia/authelia/blob/e6cd61d33e9e23fe7e85e66e9937bddc67de466b/LICENSE), [edition evidence](https://www.authelia.com/), [hosting](https://www.authelia.com/), [repository](https://github.com/authelia/authelia).

[Sponsors, requirements, installation options, pricing and product profile](../products/authelia.md).

Repository: pushed 2026-10-21T12:33:32Z; latest commit 2026-10-21T04:35:43Z; latest published release v4.39.28 (2026-09-17T12:13:30Z). Quick analysis: 7.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Okta Workforce Identity → Authelia: **different-approach**. Useful for internal web apps secured by reverse proxy or OIDC. Requires proxy/app configuration and an identity backend; does not replace the whole workforce lifecycle, governance and SaaS provisioning suite. [1](https://www.authelia.com/)

### Keycloak — A

Community IAM product; documented SSO, federation, administration, MFA and authorization included. No project commercial feature edition identified. Third-party hosting/support not counted as a project hosted offering.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/keycloak/keycloak/blob/3c07b879d5cfaf277caa5d4bc96174347f71f91c/LICENSE.txt), [edition evidence](https://www.keycloak.org/), [hosting](https://www.keycloak.org/), [repository](https://github.com/keycloak/keycloak).

[Sponsors, requirements, installation options, pricing and product profile](../products/keycloak.md).

Repository: pushed 2026-10-21T15:49:15Z; latest commit 2026-10-21T15:49:14Z; latest published release 26.8.1 (2026-10-13T08:58:15Z). Quick analysis: 5.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Auth0 → Keycloak: **partial**. Reconfigure applications for OIDC/SAML, migrate or federate directories, rebuild policies and login flows. Covers identity provider/login needs; assess workforce lifecycle and vendor integration parity separately. [1](https://www.keycloak.org/)
- Okta Workforce Identity → Keycloak: **partial**. Reconfigure applications for OIDC/SAML, migrate or federate directories, rebuild policies and login flows. Covers identity provider/login needs; assess workforce lifecycle and vendor integration parity separately. [1](https://www.keycloak.org/)

### ZITADEL — A

Current core uses AGPL v3, replacing Apache licensing for v3 onward; commercial license/support and managed cloud available. Vendor describes same core across deployments; cloud usage limits are not self-hosted feature locks. Package exceptions may apply.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/zitadel/zitadel/blob/ce12560d2491f12bb96f20805ad532f7d6dd5875/LICENSE), [edition evidence](https://help.zitadel.com/zitadel-enterprise-cloud-vs-enterprise-self-hosted), [hosting](https://help.zitadel.com/zitadel-enterprise-cloud-vs-enterprise-self-hosted), [repository](https://github.com/zitadel/zitadel).

[Sponsors, requirements, installation options, pricing and product profile](../products/zitadel.md).

Repository: pushed 2026-10-21T12:54:22Z; latest commit 2026-10-21T12:54:21Z; latest published release v4.19.5 (2026-10-15T09:40:41Z). Quick analysis: 5.3/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Auth0 → ZITADEL: **partial**. Customer and B2B identity infrastructure with managed or self-hosted deployment. Adapt application issuer/client settings and migrate users, organizations and policies; not an SDK-compatible swap. [1](https://zitadel.com/docs)

### authentik — B

Core MIT; root LICENSE explicitly carves out enterprise directory under separate terms. Paid administration/security integrations; community protocols and B2B/B2C login remain available. Vendor explicitly states no hosted service.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/goauthentik/authentik/blob/088d72e671c7ec5680cc101e80b4e6ce4f332424/LICENSE), [edition evidence](https://goauthentik.io/pricing/), [hosting](https://goauthentik.io/pricing/), [repository](https://github.com/goauthentik/authentik).

[Sponsors, requirements, installation options, pricing and product profile](../products/authentik.md).

Paid restrictions: Privileged access management and agent accounts; Google Workspace and Microsoft Entra ID integrations; Enhanced audit logging, scheduled offboarding and CSV reports; mTLS authentication and device trust integrations

Repository: pushed 2026-10-21T17:33:49Z; latest commit 2026-10-21T16:42:40Z; latest published release version/2026.8.5 (2026-10-21T12:57:59Z). Quick analysis: 5.4/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Auth0 → authentik: **partial**. Supports SAML/OIDC and directory/proxy protocols. Recreate app integrations, policy flows and user stores. Some workplace provisioning/security integrations require Enterprise. [1](https://goauthentik.io/pricing/)
- Okta Workforce Identity → authentik: **partial**. Supports SAML/OIDC and directory/proxy protocols. Recreate app integrations, policy flows and user stores. Some workplace provisioning/security integrations require Enterprise. [1](https://goauthentik.io/pricing/)

[Category research and unresolved questions](../../research/categories/login-sso.json) · [Research audit](../../research/audits/login-sso.md)
