# Password managers

Store, share and administer business credentials.

Audience: Employees and organizations using online accounts. Credentials and controlled sharing apply across industries and company sizes; qualitative reach, not a market-size estimate.

Use-case sources: [1](https://1password.com/pricing/business), [2](https://bitwarden.com/pricing/business/).

- [1Password](https://1password.com): USD 8.99/seat/month, annual billing. Business plan, USD 8.99 per user/month annually. Teams Starter has a lower ten-user minimum package; not a single-seat entry price. [Pricing](https://1password.com/pricing/business).
  [Pricing tiers, organization and product reasons](../products/1password.md).

### Vaultwarden — A

AGPL server has no commercial edition gate in official feature documentation; broad vault/sharing functionality included. Unofficial Bitwarden-compatible server, not a full Bitwarden enterprise implementation.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/dani-garcia/vaultwarden/blob/58a980f850464f7d9cdc99a765df36f0a3308b91/LICENSE.txt), [edition evidence](https://github.com/dani-garcia/vaultwarden/wiki), [hosting](https://github.com/dani-garcia/vaultwarden), [repository](https://github.com/dani-garcia/vaultwarden).

[Sponsors, requirements, installation options, pricing and product profile](../products/vaultwarden.md).

Service costs/limits: Official Bitwarden clients and external push services retain their own terms and availability; no official Bitwarden support for this server.; Missing or partial upstream features are implementation gaps, not paid unlocks; custom roles and public API coverage require review.

Repository: pushed 2026-10-16T09:51:32Z; latest commit 2026-10-16T09:51:32Z; latest published release 1.37.4 (2026-10-05T23:40:54Z). Quick analysis: 5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- 1Password → Vaultwarden: **partial**. Use Bitwarden-compatible clients with this unofficial server. Verify import and administration requirements on a test instance; upstream API and client compatibility may vary. [1](https://github.com/dani-garcia/vaultwarden) [2](https://github.com/dani-garcia/vaultwarden/wiki)

### Bitwarden — C

AGPL core is OSI licensed; /bitwarden_license is separately Bitwarden-licensed. Paid entitlements include ordinary vault functions, so mixed repository must not be presented as entirely AGPL.

License: AGPL-3.0-only AND LicenseRef-Bitwarden-1.0 (mixed repository; AGPL core); identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/bitwarden/server/blob/0f02a03b331bc5822a1d595668cb6264678bc520/LICENSE.txt), [edition evidence](https://bitwarden.com/pricing/business/), [hosting](https://bitwarden.com/pricing/business/), [repository](https://github.com/bitwarden/server).

[Sponsors, requirements, installation options, pricing and product profile](../products/bitwarden.md).

Paid restrictions: Integrated TOTP authenticator and file attachments require Premium entitlements; Business event logs, directory provisioning, SSO and enterprise policies require paid organization plans

Service costs/limits: Official hosted service plan limits and storage quotas are distinct from the AGPL core license.

Repository: pushed 2026-10-21T21:24:36Z; latest commit 2026-10-21T21:24:33Z; latest published release v2026.10.0 (2026-10-14T00:26:48Z). Quick analysis: 6.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- 1Password → Bitwarden: **partial**. Official 1Password import documented. Review shared-vault permissions, attachments, passkeys and paid organization requirements before replacing business administration. [1](https://bitwarden.com/help/import-from-1password/) [2](https://bitwarden.com/pricing/business/)

### Passbolt Community Edition — C

CE is AGPL and unlimited-user. Tags affect routine organization, giving C under this rubric. Pro is also AGPL; paid distribution and subscription-key requirements must not be described as proprietary-code gates.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/passbolt/passbolt_api/blob/5de65b8491b925fdf500e1b06e1f6fafa3b7bc29/LICENSE.txt), [edition evidence](https://www.passbolt.com/pricing/pro), [hosting](https://www.passbolt.com/pricing/cloud), [repository](https://github.com/passbolt/passbolt_api).

[Sponsors, requirements, installation options, pricing and product profile](../products/passbolt.md).

Paid restrictions: Tags require Pro; SSO, LDAP provisioning, account recovery and audit logs require Pro

Service costs/limits: Pro subscription governs updates/support and supplied license keys; vendor describes Pro source as AGPL.

Repository: pushed 2026-10-20T11:03:40Z; latest commit 2026-10-20T10:29:54Z; latest published release v5.17.0 (2026-10-20T11:57:25Z). Quick analysis: 6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- 1Password → Passbolt Community Edition: **different-approach**. Team password sharing and browser workflows overlap; rebuild access groups and evaluate CE versus Pro needs. Direct 1Password import parity was not established. [1](https://www.passbolt.com/pricing/pro)

[Category research and unresolved questions](../../research/categories/passwords.json) · [Research audit](../../research/audits/passwords.md)
