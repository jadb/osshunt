# File transfer

Send, receive and share large files through browser links or client delivery portals.

Audience: Individuals, client-facing teams, creative studios and organizations exchanging files externally.. File delivery spans individual sharing and recurring client work across industries; specialized high-volume routing serves production teams.

Use-case sources: [1](https://wetransfer.com/help-center/subscriptions/plan-limits), [2](https://www.projectsend.org/), [3](https://masv.io/pricing).

- [MASV](https://masv.io/): USD 0.25/usage/month, monthly billing. On-Demand USD $0.25 per GB leaving MASV after 15 GB free monthly; not a flat monthly subscription. Storage beyond five days costs extra. Annual commitments/pre-buy and custom enterprise options also offered. [Pricing](https://masv.io/pricing).
- [WeTransfer](https://wetransfer.com/): entry amount unverified/quote, monthly billing. Paid Starter/Ultimate/Teams confirmed in official help. Current entry price could not be verified because pricing page requires JavaScript; do not substitute third-party or app-store prices. [Pricing](https://wetransfer.com/pricing).

### copyparty — A

MIT self-operated server; README documents browser uploads, permissions and sharing without a paid edition or license gate. No official managed hosting offer identified; linked read-only demo is not hosting.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/9001/copyparty/blob/1af7efeca858dcfa29f797d7ae93f22eb2fdecf0/LICENSE), [edition evidence](https://github.com/9001/copyparty), [hosting](https://github.com/9001/copyparty#quickstart), [repository](https://github.com/9001/copyparty).

Service costs/limits: Operator supplies storage, bandwidth, reachable server, TLS and maintenance; no managed delivery network or SLA established.

Repository: pushed 2026-10-21T05:09:01Z; latest commit 2026-10-21T05:09:00Z; latest published release v1.20.26 (2026-10-14T23:43:28Z). Quick analysis: 6.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- MASV → copyparty: **partial**. Candidate for operator-run large-file upload/download endpoints: up2k chunks/checksums and resumes uploads with no software file-size limit. MASV accelerated cloud egress, destination routing, integrations and managed availability need separate replacement; throughput depends on own server/network. No MASV package/history migration verified. [1](https://masv.io/pricing) [2](https://github.com/9001/copyparty#uploading)
- WeTransfer → copyparty: **partial**. Replace selected browser send/download workflows with own server and password-protected expiring share links, optionally allowing recipient uploads. up2k resumes chunked uploads. Existing WeTransfer links/accounts do not migrate automatically; re-upload files and issue new links. Operator owns capacity and service availability. [1](https://wetransfer.com/help-center/subscriptions/plan-limits) [2](https://github.com/9001/copyparty#uploading) [3](https://github.com/9001/copyparty#shares)

### ProjectSend — A

GPL v2 self-hosted core; licensing page explicitly includes client delivery, accounts, permissions, branding, storage and public links without artificial caps. Tier A applies to this complete open core; Cloud fleet operations and optional alternative commercial licensing do not restrict it.

License: GPL-2.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/projectsend/projectsend/blob/f22a346469505bc5542e236b59fdcd2a3e1d3ec5/LICENSE), [edition evidence](https://www.projectsend.org/licensing), [hosting](https://www.projectsend.cloud/), [repository](https://github.com/projectsend/projectsend).

Service costs/limits: Cloud-only services: billing/subscriptions, fleet provisioning, managed backups/restore, monitoring/uptime SLA, email deliverability and cross-organization administration.; Self-hosted operation requires infrastructure, backups and email configuration; Cloud service quotas are not software license gates.

Repository: pushed 2026-10-20T17:57:49Z; latest commit 2026-10-07T02:12:10Z; latest published release v2.7.0 (2026-10-07T02:38:26Z). Quick analysis: 5.5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- WeTransfer → ProjectSend: **different-approach**. Persistent client accounts/groups and upload-back portals suit recurring client delivery; core includes public links and file expiration. Requires deployment and recipient access setup; export/download original files and re-upload, replacing old links. No verified automatic WeTransfer importer or equivalent anonymous send experience. [1](https://wetransfer.com/help-center/subscriptions/plan-limits) [2](https://www.projectsend.org/) [3](https://www.projectsend.org/licensing)

[Category research and unresolved questions](../../research/categories/file-transfer.json) · [Research audit](../../research/audits/file-transfer.md) · [Sourced claims](../../research/claims/file-transfer.jsonl)
