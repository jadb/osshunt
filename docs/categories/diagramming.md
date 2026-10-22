# Diagramming

Create flowcharts, process maps, technical diagrams and visual documentation.

Audience: Business teams, educators, engineers and developers communicating processes and systems.. Process and system diagrams span business, technical and education work; creation is an occasional or specialist task for many users.

Use-case sources: [1](https://www.drawio.com/docs/about/), [2](https://mermaid.js.org/intro/), [3](https://lucid.co/lucidchart/trial).

- [Lucidchart](https://lucid.co/lucidchart): entry amount unverified/quote, quote billing. Official Individual trial page advertises $9/month plus tax; billing commitment not exposed by accessible pricing page. Confirm checkout terms; amount left null. [Pricing](https://lucid.co/lucidchart/trial).
  [Pricing tiers, organization and product reasons](../products/lucidchart.md).
- [Microsoft Visio](https://www.microsoft.com/en-us/microsoft-365/visio): USD 5/seat/month, annual billing. Visio Plan 1, $5 per user/month paid yearly; web and Teams apps. Desktop included in higher Plan 2. [Pricing](https://www.microsoft.com/en-us/microsoft-365/visio/visio-plans-and-pricing).
  [Pricing tiers, organization and product reasons](../products/microsoft-visio.md).

### draw.io — A

Scope: Apache-2.0 general diagram editor, free to use and deploy yourself. Publisher explicitly describes free editor and no enterprise SSO tier. Paid Atlassian integrations are separate commercial add-ons; this classification does not assert their code or functionality is included in the OSS editor.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/jgraph/drawio/blob/17b367b91dbab91804f852645788d7ffb46dcb79/LICENSE), [edition evidence](https://www.drawio.com/docs/about/), [hosting](https://www.drawio.com/docs/about/), [repository](https://github.com/jgraph/drawio).

Service costs/limits: First-party app.diagrams.net serves the free editor; diagrams remain on your device or chosen storage, rather than a first-party document repository.; Paid Confluence/Jira integrations provide embedded Atlassian workflows and support; external storage and collaboration deployment must be evaluated separately.

Repository: pushed 2026-10-18T10:53:15Z; latest commit 2026-10-18T10:53:02Z; latest published release v32.5.5 (2026-10-18T10:54:09Z). Quick analysis: 5.9/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Lucidchart → draw.io: **partial**. Import supported Lucidchart diagram files or .vsdx exports into the visual editor. Validate layout and custom shapes on representative files. Hosted comments, permissions and integration behavior are not established as transferable. [1](https://www.drawio.com/docs/manual/import/import-formats/) [2](https://drawio-app.com/blog/migrating-draw-io-dc-to-cloud-faqs/)
- Microsoft Visio → draw.io: **partial**. Imports .vsdx and supported older .vsd/.vst and stencil formats. .vdx/.vsx need conversion in Visio first. Test fidelity; no editable Visio round-trip, data-link or Microsoft workflow parity asserted. [1](https://www.drawio.com/docs/manual/import/import-formats/)

### Mermaid — A

Scope: MIT text-to-diagram JavaScript library, installable and usable in your own pages; not a standalone collaboration server. All identified library functionality is open. First-party Mermaid Live Editor is linked by official docs. Mermaid Chart / Mermaid.ai commercial editor and collaboration plans are separate from this library.

License: MIT; identified core OSI: yes; self-hostable: no; first-party hosted offer: yes. [License](https://github.com/mermaid-js/mermaid/blob/6d8921f94f9a12b76586eddcf45a566080d4767e/LICENSE), [edition evidence](https://mermaid.js.org/intro/), [hosting](https://mermaid.js.org/ecosystem/mermaid-chart.html), [repository](https://github.com/mermaid-js/mermaid).

Service costs/limits: Self-operated library can render locally or within your website; selfHostable=false records that the library is not a server application.; Mermaid.ai paid platform has hosted diagram, AI, collaboration and enterprise features; these are not bundled into the MIT library.

Repository: pushed 2026-10-21T21:30:09Z; latest commit 2026-10-19T15:05:59Z; latest published release @mermaid-js/tiny@12.2.0 (2026-10-13T08:32:56Z). Quick analysis: 6.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Lucidchart → Mermaid: **different-approach**. Recreate supported flowcharts, sequence, class or entity-relationship diagrams as Mermaid text. Suitable for versioned documentation; switching from canvas editing changes the authoring workflow. No native Lucidchart import or transfer of hosted collaboration asserted. [1](https://mermaid.js.org/intro/) [2](https://mermaid.ai/open-source/config/usage.html)
- Microsoft Visio → Mermaid: **different-approach**. Re-author supported technical and process diagrams as Markdown-inspired text in documentation or a website. Library does not supply a Visio-compatible desktop suite or collaboration server. No Visio import/export round-trip asserted. [1](https://mermaid.js.org/intro/) [2](https://mermaid.ai/open-source/config/usage.html)

[Category research and unresolved questions](../../research/categories/diagramming.json) · [Research audit](../../research/audits/diagramming.md) · [Sourced claims](../../research/claims/diagramming.jsonl)
