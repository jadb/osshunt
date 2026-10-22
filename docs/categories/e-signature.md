# E-signature

Send business documents for electronic signature and track completion.

Audience: Businesses sending contracts, offers, purchase agreements, waivers, and approvals.. Agreement workflows span sales, HR, procurement, operations, and customer onboarding; use varies with document volume.

Use-case sources: [1](https://www.docusign.com/products/electronic-signature), [2](https://docs.opensignlabs.com/docs/API-docs/v1.2/intro/).

- [Docusign](https://www.docusign.com/products/electronic-signature): USD 11/seat/month, annual billing. US checkout Personal displays USD 11/month, billed monthly with USD 132 annual commitment; 5 envelopes/month. Current rendered checkout differs from older USD 10 marketing/search pricing. [Pricing](https://ecom.docusign.com/en-US/plans-and-pricing/esignature).
  [Pricing tiers, organization and product reasons](../products/docusign.md).

### Documenso — C

AGPL core includes community API/signing/templates, but embedded authoring/editor requires a commercial key, alongside enterprise SSO and audit features. Embedded authoring is a daily integration workflow, so classified C under the common rubric.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/documenso/documenso/blob/68b9d2093c35079276d2ad9bd25467f5dd705588/LICENSE), [edition evidence](https://docs.documenso.com/docs/self-hosting), [hosting](https://documenso.com), [repository](https://github.com/documenso/documenso).

[Sponsors, requirements, installation options, pricing and product profile](../products/documenso.md).

Paid restrictions: Enterprise SSO and advanced audit capabilities; Enterprise embedded authoring/editor and white-label embedding

Repository: pushed 2026-10-21T18:10:28Z; latest commit 2026-10-21T05:26:58Z; latest published release v2.21.0 (2026-10-19T01:25:42Z). Quick analysis: 6.9/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Docusign → Documenso: **partial**. PDF signing, templates and API suit basic agreement flows. Recreate templates and integrations; enterprise SSO and embedded editor needs require edition review. [1](https://docs.documenso.com/docs/policies/community-edition) [2](https://docs.documenso.com/docs/self-hosting)

### DocuSeal — C

AGPL core is self-hostable; official on-prem comparison explicitly reserves routine reminders, bulk workflow and integrations to Pro.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/docusealco/docuseal/blob/8f8f69f0bc6ac2e59746cd6efac54a852289bec3/LICENSE), [edition evidence](https://www.docuseal.com/pricing), [hosting](https://www.docuseal.com), [repository](https://github.com/docusealco/docuseal).

[Sponsors, requirements, installation options, pricing and product profile](../products/docuseal.md).

Paid restrictions: Automated reminders; Custom email content and branding; Bulk sending; API and embedding require Pro; on-prem API/embedding also metered

Repository: pushed 2026-10-19T12:29:41Z; latest commit 2026-10-19T11:57:12Z; latest published release 3.3.3 (2026-10-19T12:29:42Z). Quick analysis: 5.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Docusign → DocuSeal: **partial**. Basic PDF document signing and templates; official pricing offers DocuSign template import with Pro. Reminders, bulk sends, API/embedding require Pro; no archive migration verified. [1](https://www.docuseal.com/pricing)

### OpenSign — C

AGPL core excludes customRoute under root license; API-token docs explicitly require paid self-hosted upgrade, while ordinary individual sends remain free.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/OpenSignLabs/OpenSign/blob/62117d36e0ef087db3157139daf4c67b5d612580/LICENSE), [edition evidence](https://docs.opensignlabs.com/docs/help/Settings/APIToken/), [hosting](https://www.opensignlabs.com), [repository](https://github.com/OpenSignLabs/OpenSign).

[Sponsors, requirements, installation options, pricing and product profile](../products/opensign.md).

Paid restrictions: API token generation unavailable in free self-hosted edition; Premium-credit features include bulk sending, public template signing, kiosk mode and embedded signing

Repository: pushed 2026-10-21T16:53:51Z; latest commit 2026-10-21T14:02:34Z; latest published release v3.0.0 (2026-10-21T16:53:51Z). Quick analysis: 5.4/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Docusign → OpenSign: **partial**. PDF signing, templates, signing order and completion tracking fit basic workflows. Free self-hosted API token generation unavailable; paid integration and premium-credit workflows need separate evaluation. [1](https://github.com/OpenSignLabs/OpenSign) [2](https://docs.opensignlabs.com/docs/help/Settings/APIToken/)

[Category research and unresolved questions](../../research/categories/e-signature.json) · [Research audit](../../research/audits/e-signature.md)
