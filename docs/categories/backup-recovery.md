# Backup and recovery

Create recoverable file backups and restore lost data; distinguish managed endpoint services from self-operated backup tools and full-system disaster recovery.

Audience: Individuals protecting computer files and IT teams operating endpoint or server backups.. File loss and device failure affect personal and business computing; operation of server repositories requires technical administration.

Use-case sources: [1](https://www.backblaze.com/cloud-backup/business), [2](https://restic.net/), [3](https://kopia.io/).

- [Acronis Cyber Protect](https://www.acronis.com/en/products/cyber-protect/): entry amount unverified/quote, quote billing. Base amount not rendered in current purchasing page; device/workload-specific licensing. Quote fields represent unverified price, not a claim that every edition is quote-only. Acronis True Image is a separate consumer product. [Pricing](https://www.acronis.com/en/products/cyber-protect/purchasing/).
  [Pricing tiers, organization and product reasons](../products/acronis-cyber-protect.md).
- [Backblaze Business Backup](https://www.backblaze.com/cloud-backup/business): USD 99/seat/year, annual billing. Business Backup shown at $99/year per computer subscription; seat means protected computer. Enterprise Control upgrade quoted separately. [Pricing](https://www.backblaze.com/cloud-backup/pricing).
  [Pricing tiers, organization and product reasons](../products/backblaze-business-backup.md).

### BorgBackup — A

Official site identifies 100% free BSD software; backup, encryption, compression and restore workflow in open program, paid offerings are support/storage services. Supports local repositories and SSH repository servers. Recommend stable 1.4, not master/2.0 testing.

License: BSD-3-Clause; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/borgbackup/borg/blob/45f8b178ae892ae73fcaa3127c951b0044cd7a7e/LICENSE), [edition evidence](https://www.borgbackup.org/), [hosting](https://www.borgbackup.org/), [repository](https://github.com/borgbackup/borg).

[Sponsors, requirements, installation options, pricing and product profile](../products/borgbackup.md).

Service costs/limits: Third-party repository hosting/support costs separate from software; Windows WSL/Cygwin support experimental, not a native Windows managed-backup agent.

Repository: pushed 2026-10-20T09:49:03Z; latest commit 2026-10-20T09:48:53Z; latest published release 1.4.5 (2026-07-18T22:36:16Z). Quick analysis: 7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Acronis Cyber Protect → BorgBackup: **partial**. Limited to self-operated Unix-like file/archive backups and restores, using local or SSH repositories. Does not establish replacement for Acronis imaging, application-aware workloads, endpoint security or cloud failover. Windows support experimental; keep proprietary archives recoverable separately. [1](https://www.acronis.com/en/products/cyber-protect/) [2](https://borgbackup.readthedocs.io/en/stable/)

### Kopia — A

Open CLI exposes all features, with official desktop GUI and optional repository server; no paid software edition identified. Tier A covers this backup tool, not managed storage or whole-machine imaging.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/kopia/kopia/blob/0835005737025dc3e5203df0138c8265686cb4b3/LICENSE), [edition evidence](https://kopia.io/docs/features/), [hosting](https://kopia.io/docs/), [repository](https://github.com/kopia/kopia).

[Sponsors, requirements, installation options, pricing and product profile](../products/kopia.md).

Service costs/limits: User provisions and pays storage separately; no bundled unlimited backup cloud.; Repository server permissions cover snapshot/policy manifests; known content IDs can expose shared repository content.

Repository: pushed 2026-10-20T03:30:12Z; latest commit 2026-10-20T03:30:11Z; latest published release v0.23.1 (2026-06-16T01:27:33Z). Quick analysis: 6.9/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Acronis Cyber Protect → Kopia: **partial**. Replaces selected file/directory snapshot and restore workflows after creating new backups. Kopia expressly does not image the machine; Acronis system imaging, endpoint protection and cloud failover remain separate requirements. No proprietary-archive import established. [1](https://www.acronis.com/en/products/cyber-protect/) [2](https://kopia.io/docs/)
- Backblaze Business Backup → Kopia: **different-approach**. Desktop GUI file snapshots on Windows/macOS/Linux with user-selected storage. Recreate policies and seed a new backup; cloud capacity and recovery operations belong to the user. B2 integration uses a separate object-storage service, not the Business Backup subscription. [1](https://www.backblaze.com/cloud-backup/business) [2](https://kopia.io/docs/) [3](https://kopia.io/docs/features/)

### restic — A

Entire program described as free and completely open source; no paid software feature gates identified. Locally operated CLI, no dedicated server required; selfHostable=false reflects client-tool scope, while storage can be self-hosted.

License: BSD-2-Clause; identified core OSI: yes; self-hostable: no; first-party hosted offer: no. [License](https://github.com/restic/restic/blob/dd09b6bd01af220b1d5d95c0d4d7d472e05e05c4/LICENSE), [edition evidence](https://restic.net/), [hosting](https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html), [repository](https://github.com/restic/restic).

[Sponsors, requirements, installation options, pricing and product profile](../products/restic.md).

Service costs/limits: Storage, remote server operation, scheduling and key custody are the operator’s responsibility; cloud storage fees are separate.

Repository: pushed 2026-10-18T14:23:55Z; latest commit 2026-10-18T14:23:55Z; latest published release v0.19.1 (2026-07-05T08:13:33Z). Quick analysis: 7.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Backblaze Business Backup → restic: **different-approach**. File-backup option for operators comfortable configuring a CLI, retention/scheduling and storage. New repository and first backup required; no bundled unlimited cloud or equivalent managed endpoint console established. Backblaze B2 storage, if selected, is separate from Business Backup. [1](https://www.backblaze.com/cloud-backup/business) [2](https://restic.net/) [3](https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html)

[Category research and unresolved questions](../../research/categories/backup-recovery.json) · [Research audit](../../research/audits/backup-recovery.md) · [Sourced claims](../../research/claims/backup-recovery.jsonl)
