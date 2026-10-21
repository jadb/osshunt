> Temporary output paths normalized for portability; local operating setup omitted. Original audit retained locally.

# Password managers audit — 2026-10-21

2. Listed shared research directory and inspected central GitHub snapshots for bitwarden/server, dani-garcia/vaultwarden, passbolt/passbolt_api. Metadata, release, commit and SHA-pinned license requests available; reused rather than duplicate network requests. Central command log: github-commands.jsonl.
3. Read corresponding rsx JSON outputs; analyzer results available.
4. web.open: https://bitwarden.com/pricing/business/ — USD 4 Teams, 6 Enterprise user/month annually; premium integrated authenticator and attachments; business SSO/policies paid.
5. web.open: https://www.passbolt.com/pricing redirected https://www.passbolt.com/pricing/pro — CE unlimited users AGPL; Pro includes tags, LDAP, SSO, recovery, activity log. Pro also AGPL, requiring subscription key; these are distribution/edition gates, not proprietary licensing claims.
6. web.open: https://github.com/dani-garcia/vaultwarden — unofficial client-compatible server; feature list includes premium-like functions; official Bitwarden support not provided.
7. Python decoded three SHA-pinned GitHub license bodies to local .license.txt snapshots: Bitwarden root explicitly defaults AGPL except /bitwarden_license; Vaultwarden and Passbolt AGPL v3.
8. web.open: https://1password.com/pricing/business — Business USD 8.99/user/month yearly. Starter headline 2.49/seat but FAQ flat 24.95 for ten; chose unambiguous Business plan.
9. web.open: https://bitwarden.com/help/licensing/ failed inaccessible; root pinned LICENSE supplies mixed-license evidence.
10. web.open: https://github.com/dani-garcia/vaultwarden/wiki — feature list, missing custom roles/passkey login and partial public API; no vendor-hosted offering found on official project docs.
11. web.open import-from-1password, Passbolt cloud pricing, pinned Bitwarden proprietary license (URLs retained in JSON sources).
12. Pinned Bitwarden commercial-license web fetch failed cache miss; gh api repos/bitwarden/server/contents/LICENSE_BITWARDEN.txt?ref=0f02a03b331bc5822a1d595668cb6264678bc520 failed network. Subsequent JSON decoding failed because response empty; no license-body conclusions inferred. Root license evidence retained.
13. Wrote build-passwords.py and passwords.json. Decision: Vaultwarden A for server functionality (technical/client/service gaps separate); Passbolt CE C because Pro gates everyday tags, explicitly AGPL Pro; Bitwarden AGPL core C with mixed proprietary directory flag.
14. Python JSON load and structural count check: 1 paid, 3 OSS, 3 mappings. No live migration test; no repository writes.

## Repeatable operations / future checks
- Batch metadata/default-SHA/license/release snapshot; decode licenses; keep immutable links.
- Separate OSI core licensing, paid edition gates, technical gaps and external service terms.
- Check feature matrices for ordinary workflow gates even where all editions are AGPL.
- Detect failed/empty network output before JSON decoding.
