# Video editing

Non-linear desktop video editing, audio mixing, titles, effects, grading and rendered output.

Audience: Video creators, filmmakers, editors and marketing teams.. Used across industries by people creating edited video; the workflow requires creative production skills rather than serving every employee.

Use-case sources: [1](https://kdenlive.org/), [2](https://www.apple.com/final-cut-pro/).

- [Adobe Premiere Pro](https://www.adobe.com/products/premiere/plans.html): USD 22.99/seat/month, annual billing. US individual single-app plan; annual commitment, billed monthly; teams and multi-app plans cost more. [Pricing](https://www.adobe.com/products/premiere/plans.html).
- [Final Cut Pro](https://www.apple.com/final-cut-pro/): USD 299.99/account/one-time, one-time billing. US Mac App Store standalone Mac purchase; no recurring billing. This record does not price the iPad edition or optional bundles. [Pricing](https://apps.apple.com/us/app/final-cut-pro/id424389933).

### Kdenlive — A

Tier A: free local desktop editor with the documented editing feature set available in the open application; no paid feature edition identified on official feature/download pages. GPLv3 COPYING verified at default-branch SHA. selfHostable=false denotes a desktop application, locally operable; hostedOffer=false reflects downloadable software with no first-party hosted editing service identified. License field retains the GitHub GPL-3.0 identifier; file-level only/or-later scope not fully audited.

License: GPL-3.0; identified core OSI: yes; self-hostable: no; first-party hosted offer: no. [License](https://github.com/KDE/kdenlive/blob/f39d75b27fe2ca7395e40663e4e2ec6561d75c4d/COPYING), [edition evidence](https://kdenlive.org/), [hosting](https://kdenlive.org/download/), [repository](https://github.com/KDE/kdenlive).

Repository: pushed 2026-10-21T22:07:31Z; latest commit 2026-10-21T16:20:26Z; latest published release 26.08.2 (2026-10-13). Quick analysis: 4.4/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Adobe Premiere Pro → Kdenlive: **partial**. Partial replacement for local timeline editing, effects, audio and grading. Reuse source media; native Premiere projects or Final Cut libraries were not verified as importable. Kdenlive saves MLT-based .kdenlive XML that references media; archive the project to collect media for moving computers. Test representative timelines and rebuild unsupported effects/titles; proprietary project fidelity is unverified. [1](https://kdenlive.org/) [2](https://docs.kdenlive.org/en/project_and_asset_management/file_management/project_files.html) [3](https://docs.kdenlive.org/en/project_and_asset_management/file_management/archiving.html) [4](https://www.adobe.com/products/premiere/plans.html)
- Final Cut Pro → Kdenlive: **partial**. Partial replacement for local timeline editing, effects, audio and grading. Reuse source media; native Premiere projects or Final Cut libraries were not verified as importable. Kdenlive saves MLT-based .kdenlive XML that references media; archive the project to collect media for moving computers. Test representative timelines and rebuild unsupported effects/titles; proprietary project fidelity is unverified. [1](https://kdenlive.org/) [2](https://docs.kdenlive.org/en/project_and_asset_management/file_management/project_files.html) [3](https://docs.kdenlive.org/en/project_and_asset_management/file_management/archiving.html) [4](https://apps.apple.com/us/app/final-cut-pro/id424389933)

### Shotcut — A

Tier A: free local desktop editor with the documented editing feature set available in the open application; no paid feature edition identified on official feature/download pages. GPLv3 COPYING verified at default-branch SHA. selfHostable=false denotes a desktop application, locally operable; hostedOffer=false reflects downloadable software with no first-party hosted editing service identified. License field retains the GitHub GPL-3.0 identifier; file-level only/or-later scope not fully audited.

License: GPL-3.0; identified core OSI: yes; self-hostable: no; first-party hosted offer: no. [License](https://github.com/mltframework/shotcut/blob/0d30d391a8fc9a68c1c82b3651afa4c5c069a6e3/COPYING), [edition evidence](https://shotcut.org/features/), [hosting](https://shotcut.org/download/), [repository](https://github.com/mltframework/shotcut).

Repository: pushed 2026-10-21T19:08:18Z; latest commit 2026-10-21T19:01:59Z; latest published release v26.9.27 (2026-09-28T00:29:29Z). Quick analysis: 6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Adobe Premiere Pro → Shotcut: **partial**. Partial replacement for local multitrack editing and rendered video delivery. Shotcut saves MLT XML projects and exports video separately; its FAQ suggests DNxHR HQ or ProRes 422 intermediates when accepted by the other tool. EDL export is documented, not native Premiere/Final Cut project import. Rebuild and verify existing timelines; plugin/effect fidelity is unverified. [1](https://shotcut.org/features/) [2](https://shotcut.org/FAQ/) [3](https://www.adobe.com/products/premiere/plans.html)
- Final Cut Pro → Shotcut: **partial**. Partial replacement for local multitrack editing and rendered video delivery. Shotcut saves MLT XML projects and exports video separately; its FAQ suggests DNxHR HQ or ProRes 422 intermediates when accepted by the other tool. EDL export is documented, not native Premiere/Final Cut project import. Rebuild and verify existing timelines; plugin/effect fidelity is unverified. [1](https://shotcut.org/features/) [2](https://shotcut.org/FAQ/) [3](https://apps.apple.com/us/app/final-cut-pro/id424389933)

[Category research and unresolved questions](../../research/categories/video-editing.json) · [Research audit](../../research/audits/video-editing.md) · [Sourced claims](../../research/claims/video-editing.jsonl)
