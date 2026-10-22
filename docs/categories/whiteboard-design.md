# Whiteboards and UI design

Collaborative visual thinking, sketching and interface design; whiteboard and UI-design mappings are distinct.

Audience: Cross-functional workshop participants, product teams, designers and engineers.. Whiteboarding spans operations, marketing and product collaboration; professional interface design has a narrower designer/developer audience.

Use-case sources: [1](https://miro.com/pricing/), [2](https://www.figma.com/pricing/).

- [FigJam](https://www.figma.com/figjam/): USD 3/seat/month, annual billing. Professional Collab seat monthly equivalent with annual billing; covers FigJam, not Figma Design editing. [Pricing](https://www.figma.com/pricing/).
  [Pricing tiers, organization and product reasons](../products/figjam.md).
- [Figma Design](https://www.figma.com): USD 16/seat/month, annual billing. Professional Full seat monthly equivalent with annual billing; free Starter also exists. [Pricing](https://www.figma.com/pricing/).
  [Pricing tiers, organization and product reasons](../products/figma.md).
- [Miro](https://miro.com): USD 8/seat/month, annual billing. Starter per member monthly equivalent, billed yearly; free plan also exists. [Pricing](https://miro.com/pricing/).
  [Pricing tiers, organization and product reasons](../products/miro.md).

### Penpot — B

Core Professional edition is MPL-2.0 and self-hostable with all design/prototyping features and unlimited users/teams/files. Current self-host pricing explicitly gates governance extras; hosted storage limits are separate service limits.

License: MPL-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/penpot/penpot/blob/6acb360f4ad5dc24faec9d67f1fc8725456755de/LICENSE), [edition evidence](https://penpot.app/pricing/self-host), [hosting](https://penpot.app/pricing), [repository](https://github.com/penpot/penpot).

Paid restrictions: Enterprise centralized administration, multi-organization management and advanced team/user permissions; Enterprise SSO/identity governance and extended recovery/version retention

Repository: pushed 2026-10-21T16:57:59Z; latest commit 2026-10-21T13:59:31Z; latest published release 2.18.3 (2026-10-06T12:46:50Z). Quick analysis: 6.3/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Figma Design → Penpot: **partial**. Interface design/prototyping alternative; evaluate Figma file conversion, libraries, plugins and developer handoff before migration. No lossless import or full feature parity claimed. [1](https://penpot.app/pricing/self-host) [2](https://www.figma.com/pricing/)

### Excalidraw — C

MIT editor and app source are available. Commercial Plus adds workflow features as well as cloud persistence; cloud storage alone is not the reason for C. Self-host collaboration requires separately configured backend services.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/excalidraw/excalidraw/blob/1d4dc2c0e6e476911d0760e9c3cf3694f2d43384/LICENSE), [edition evidence](https://plus.excalidraw.com/pricing), [hosting](https://plus.excalidraw.com), [repository](https://github.com/excalidraw/excalidraw).

Paid restrictions: Excalidraw+ comments, presentations and PDF/PPTX frame export; Excalidraw+ workspace access management and team organization

Repository: pushed 2026-10-21T16:42:17Z; latest commit 2026-10-21T10:36:40Z; latest published release v0.18.1 (2026-04-21T08:43:20Z). Quick analysis: 6.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- FigJam → Excalidraw: **partial**. Collaborative sketching alternative; not a Figma Design editor. Excalidraw JSON/PNG/SVG portability does not establish native FigJam import, voting or workshop feature parity. [1](https://github.com/excalidraw/excalidraw) [2](https://www.figma.com/pricing/)
- Miro → Excalidraw: **partial**. Sketching and diagramming alternative for simpler whiteboards. Excalidraw supports its own JSON and image exports; no native lossless Miro import verified. Miro integrations/facilitation workflows require separate review. [1](https://github.com/excalidraw/excalidraw) [2](https://miro.com/pricing/)

### tldraw SDK — S

Current default core license is custom, development-only and not OSI OSS. SDK can be deployed with separately granted production rights; public tldraw.com is a hosted application, not proof of OSS rights.

License: LicenseRef-tldraw; identified core OSI: no/unresolved; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/tldraw/tldraw/blob/e8eb1cf5635d28a2d516f0c0d823ed35f3ea9dc9/LICENSE.md), [edition evidence](https://tldraw.dev/community/license), [hosting](https://www.tldraw.com), [repository](https://github.com/tldraw/tldraw).

Paid restrictions: Production deployment requires an active trial, commercial or hobby license key; default source license permits development only

Repository: pushed 2026-10-21T17:13:42Z; latest commit 2026-10-20T17:07:53Z; latest published release v5.5.2 (2026-10-02T13:35:52Z). Quick analysis: 6.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.


[Category research and unresolved questions](../../research/categories/whiteboard-design.json) · [Research audit](../../research/audits/whiteboard-design.md)
