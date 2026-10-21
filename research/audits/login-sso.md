> Temporary output paths normalized for portability; local operating setup omitted. Original audit retained locally.

# Login and SSO audit — 2026-10-21

2. Listed central evidence files and read four category GitHub snapshots plus rsx results. Central snapshots hold pinned metadata/license/release evidence; checked details below.

3. Web search: site.zitadel.com license AGPL self hosted enterprise; site.goauthentik.io enterprise features pricing; site.authelia.com overview features license; site.keycloak.org about features. Primary results used, Reddit/aggregators ignored.
4. Opened https://www.keycloak.org/, https://www.authelia.com/, https://zitadel.com/pricing, https://goauthentik.io/pricing/, https://www.okta.com/pricing/, https://auth0.com/pricing. Verified capabilities and current paid gates; Auth0 Essentials displayed $35/month for 500 MAU, conditional on plan selection.

- ('gh api repos/keycloak/keycloak/contents/LICENSE.txt?ref=3c07b879d5cfaf277caa5d4bc96174347f71f91c', 1, 'error connecting to api.github.com\ncheck your internet connection or https://githubstatus.com\n')

- ('gh api repos/goauthentik/authentik/contents/LICENSE?ref=088d72e671c7ec5680cc101e80b4e6ce4f332424', 1, 'error connecting to api.github.com\ncheck your internet connection or https://githubstatus.com\n')

- ('gh api repos/goauthentik/authentik/contents/authentik/enterprise/LICENSE?ref=088d72e671c7ec5680cc101e80b4e6ce4f332424', 1, 'error connecting to api.github.com\ncheck your internet connection or https://githubstatus.com\n')

- ('gh api repos/zitadel/zitadel/contents/LICENSE?ref=ce12560d2491f12bb96f20805ad532f7d6dd5875', 1, 'error connecting to api.github.com\ncheck your internet connection or https://githubstatus.com\n')

- ('gh api repos/zitadel/zitadel/contents/LICENSING.md?ref=ce12560d2491f12bb96f20805ad532f7d6dd5875', 1, 'error connecting to api.github.com\ncheck your internet connection or https://githubstatus.com\n')

- ('gh api repos/authelia/authelia/contents/LICENSE?ref=e6cd61d33e9e23fe7e85e66e9937bddc67de466b', 1, 'error connecting to api.github.com\ncheck your internet connection or https://githubstatus.com\n')

5. Opened https://help.zitadel.com/zitadel-enterprise-cloud-vs-enterprise-self-hosted and https://help.zitadel.com/zitadel-licensing-faqs; current core AGPL transition confirmed. Opened https://www.authelia.com/overview/prologue/introduction/. Find on Okta pricing for Starter/$6 confirmed annual billing; find on authentik pricing for host confirms no vendor hosting.
6. Read central evidence URLs; all four central license API requests already pinned to commit SHAs. Supplementary gh contents requests failed due restricted network; raw GitHub attempts for Zitadel LICENSING.md and authentik enterprise/LICENSE failed web cache. Preserved failures; no invented enterprise-license SPDX.
7. Ran build-login-sso.py to decode full pinned licenses, read release/activity/rsx metadata, write JSON. Classification: Keycloak A; ZITADEL A with AGPL/package exception caveat; authentik B MIT core with enterprise carve-out and concrete security/admin gates; Authelia A with narrower scope. No source-available exclusions needed.
8. Mapped Okta/Auth0 to Keycloak and authentik; Auth0 to ZITADEL; Okta to Authelia explicitly different approach. Avoided unsupported universal many-to-many/drop-in assertions. No repository changes or external messages.
9. Automation candidates: snapshot metadata+default SHA+license+release; decode mixed-license exceptions; capture pricing and paid gates; check feature-vs-cloud-quota distinction; preserve failed evidence requests. Regression cases: Zitadel v3 Apache→AGPL; authentik root MIT does not imply enterprise MIT; Authelia partial scope; Auth0 free SaaS is not OSS.

10. Verified JSON parse, all alternative references, non-archived flags and commit presence; passed. Read current release tags from central metadata.
