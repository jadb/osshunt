# Image editing

Raster image retouching, compositing and digital painting, plus RAW photo development and library workflows.

Audience: Photographers, designers, illustrators and people preparing images for work or personal projects.. Image preparation spans creative professions and occasional general use; RAW development and digital painting are more specialized workflows within the category.

Use-case sources: [1](https://www.gimp.org/), [2](https://www.darktable.org/about/), [3](https://www.adobe.com/products/photoshop-lightroom/plans.html).

- [Adobe Lightroom](https://www.adobe.com/products/photoshop-lightroom/plans.html): USD 11.99/seat/month, annual billing. Individual Lightroom plan US$11.99/month, annual commitment billed monthly; includes mobile, desktop, web and Lightroom Classic. [Pricing](https://www.adobe.com/products/photoshop-lightroom/plans.html).
  [Pricing tiers, organization and product reasons](../products/adobe-lightroom.md).
- [Adobe Photoshop](https://www.adobe.com/products/photoshop/plans.html): USD 19.99/seat/month, annual billing. Lowest listed individual plan including desktop Photoshop is Photography at US$19.99/month on an annual commitment billed monthly; standalone Photoshop US$22.99/month. Web/mobile-only offer excluded from desktop comparison. [Pricing](https://www.adobe.com/products/photoshop/plans.html).
  [Pricing tiers, organization and product reasons](../products/adobe-photoshop.md).

### darktable — A

Locally operated desktop RAW developer and photo library application. Published workflow functionality available in the GPL edition; official source and installers available without a paid edition. Community Flatpak omits AI features: packaging limitation, not a paid software gate.

License: GPL-3.0-or-later; identified core OSI: yes; self-hostable: no; first-party hosted offer: no. [License](https://github.com/darktable-org/darktable/blob/2af685755d806c27af43fcc132cf68fb268962b1/LICENSE), [edition evidence](https://www.darktable.org/about/), [hosting](https://www.darktable.org/install/), [repository](https://github.com/darktable-org/darktable).

[Sponsors, requirements, installation options, pricing and product profile](../products/darktable.md).

Repository: pushed 2026-10-21T19:49:10Z; latest commit 2026-10-21T19:49:03Z; latest published release release-5.6.2 (2026-10-04T16:36:31Z). Quick analysis: 6.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Adobe Lightroom → darktable: **different-approach**. Local RAW development and photo-library workflow. Official FAQ warns this is not a direct replacement: presets are incompatible, Lightroom edit import is old and unreliable, and edits may need rebuilding. Check camera support; do not assume Adobe cloud/library synchronization transfers. [1](https://www.darktable.org/about/) [2](https://www.darktable.org/about/faq/)

### GIMP — A

Locally operated desktop image editor. All published application functionality available as free software; no commercial feature edition identified. Core GPL v3 or later; libgimp libraries LGPL, icons CC BY-SA, data licensing has historical caveats in LICENSE. GitHub is an active read-only GNOME GitLab mirror.

License: GPL-3.0-or-later; identified core OSI: yes; self-hostable: no; first-party hosted offer: no. [License](https://github.com/GNOME/gimp/blob/e7617d91ca3f795cd6277814d1d02a59e90c1a29/LICENSE), [edition evidence](https://www.gimp.org/docs/userfaq.html), [hosting](https://www.gimp.org/), [repository](https://github.com/GNOME/gimp).

[Sponsors, requirements, installation options, pricing and product profile](../products/gimp.md).

Repository: pushed 2026-10-21T21:36:47Z; latest commit 2026-10-21T21:31:59Z; latest published release 3.2.6 (2026-09-10). Quick analysis: 4.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Adobe Photoshop → GIMP: **partial**. Local retouching and compositing alternative. Workflow/UI differ; save editable projects as XCF and export interchange copies, since non-native formats lose some project information. RAW development uses darktable or RawTherapee plug-ins. Validate required project features before switching. [1](https://www.gimp.org/) [2](https://www.gimp.org/docs/userfaq.html) [3](https://docs.gimp.org/3.0/en/gimp-images-out.html)

### Krita — A

Locally operated desktop digital painting application. GPL v3 application with some more permissively licensed parts. Free installers/source and paid store distribution; store income funds development and automatic updates, no separate paid feature edition identified. Canonical development on KDE Invent; active GitHub mirror.

License: GPL-3.0-only; identified core OSI: yes; self-hostable: no; first-party hosted offer: no. [License](https://github.com/KDE/krita/blob/ec6a328c805b397dddbacd48d5e1a950540c0792/COPYING), [edition evidence](https://krita.org/en/about/license/), [hosting](https://krita.org/en/download/), [repository](https://github.com/KDE/krita).

[Sponsors, requirements, installation options, pricing and product profile](../products/krita.md).

Repository: pushed 2026-10-21T11:05:17Z; latest commit 2026-10-21T11:04:19Z; latest published release 5.3.4.1 (2026-10-07). Quick analysis: 4.9/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Adobe Photoshop → Krita: **partial**. Best fit for digital painting and illustration done in Photoshop. Krita emphasizes painting rather than the full image-manipulation workflow. Supports PSD layers and masks but does not promise complete compatibility; official manual recommends ORA or TIFF interchange when possible. [1](https://docs.krita.org/en/user_manual/introduction_from_other_software/introduction_from_photoshop.html) [2](https://docs.krita.org/en/general_concepts/file_formats/file_psd.html)

[Category research and unresolved questions](../../research/categories/image-editing.json) · [Research audit](../../research/audits/image-editing.md) · [Sourced claims](../../research/claims/image-editing.jsonl)
