> Temporary paths normalized; local setup omitted. Exact original retained locally.

# DocuSeal research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Opened pricing, About, changelog, install and enterprise. Explicit bootstrapping and July2023 first stable release verified.
3. Guessed .env.example/configuration URLs failed; search found current configuring-docuseal-via-environment-variables and navigation led to server requirements.
4. Read database compatibility caveats and exact workload-sizing tables; distinguished SQLite default from PostgreSQL production recommendation.
5. Followed official Railway install link; removed referral query in product URL. Confirmed API/embedding $0.20 completion fee applies self-host and cloud.

## Source review and decisions
- Open/read `https://www.docuseal.com/changelog`; public locator: 1.0.0 — First Stable Release Now Available. Decision: First stable version1.0.0 released July10,2023.
- Open/read `https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables`; public locator: Footer — DocuSeal LLC. Decision: Current site identifies DocuSeal LLC.
- Open/read `https://www.docuseal.com/about`; public locator: Our Funding; Why did we decide to bootstrap?. Decision: About describes organic bootstrapped growth and independence from external investors.
- Open/read `https://www.docuseal.com/pricing`; public locator: On-Premises Pricing — Open Source. Decision: Open-source core: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://www.docuseal.com/pricing`; public locator: Cloud and On-Premises Pricing. Decision: No explicit popular/recommended plan badge verified.
- Open/read `https://www.docuseal.com/pricing`; public locator: On-Premises Pricing — Pro. Decision: Pro (On-Premises): published; monthly=20; annual total=None; USD/Web UI user seat. Teams and roles make Pro closest organizational tier. API/embedding adds $0.20 per completed submission, even on premises; multiple files/signers in one submission count once. Cloud Pro annual $200 advertised separately; self-host annual amount not independently verified.
- Open/read `https://www.docuseal.com/pricing`; public locator: Do you offer volume discounts?. Decision: Enterprise: quote; monthly=None; annual total=None; USD/organization. Contact sales for custom quote on volume and seats; Enterprise offers tailored integrations.
- Open/read `https://github.com/docusealco/docuseal`; public locator: Features. Decision: Visual PDF field building and multiple submitters turn existing documents into reusable signing forms.
- Open/read `https://github.com/docusealco/docuseal`; public locator: Features. Decision: Mobile-optimized signing and multilingual interfaces help recipients finish documents across devices and languages.
- Open/read `https://github.com/docusealco/docuseal`; public locator: Features; Enhanced Document Tracking and Signing Process Control. Decision: Signature verification and document audit logs help teams inspect completed-document integrity and signing history.
- Open/read `https://github.com/docusealco/docuseal`; public locator: Features; Pro Features. Decision: Reusable document templates and embedded application workflows can create migration costs, although the open document-signing core remains broadly reproducible.
- Open/read `https://www.docuseal.com/about`; public locator: Our Funding; For Businesses. Decision: No named corporate sponsor found in official About/repository sources. Verified bootstrapped business DocuSeal LLC supplied as steward fallback; customers are not sponsors.
- Open/read `https://www.docuseal.com/about`; public locator: Our Funding; For Businesses. Decision: DocuSeal LLC: business-steward
- Open/read `https://github.com/docusealco/docuseal`; public locator: Docker; Topics. Decision: Docker image or Ruby on Rails source runtime: required. Always. Documented Docker path bundles application runtime; native source version range not established here.
- Open/read `https://www.docuseal.com/install`; public locator: Docker. Decision: SQLite: one-of. Default embedded DB for small personal/business use OR PostgreSQL/MySQL. Partial compatibility relative to PostgreSQL.
- Open/read `https://www.docuseal.com/docs/on-premises-server-requirements`; public locator: Database requirements. Decision: PostgreSQL: one-of. Choose one database; recommended for production API/embedding. Documented deployment component.
- Open/read `https://www.docuseal.com/docs/on-premises-server-requirements`; public locator: Database requirements. Decision: MySQL: one-of. Alternative for smaller workload; limited compatibility. Text-length, full-text-search and partial-index limitations.
- Open/read `https://github.com/docusealco/docuseal`; public locator: Features. Decision: Local disk: one-of. Default documents OR configured cloud object storage. Documented deployment component.
- Open/read `https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables`; public locator: AWS S3 Configuration. Decision: S3-compatible object store: one-of. Alternative to local disk/GCS/Azure. Documented deployment component.
- Open/read `https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables`; public locator: GCP Storage Configuration. Decision: Google Cloud Storage: one-of. Alternative to local disk/S3/Azure. Documented deployment component.
- Open/read `https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables`; public locator: Azure Cloud Configuration. Decision: Azure Blob storage: one-of. Alternative to local disk/S3/GCS. Documented deployment component.
- Open/read `https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables`; public locator: SMTP Configuration. Decision: SMTP: conditional. Sending document requests/notifications. Documented deployment component.
- Open/read `https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables`; public locator: Misc (optional) — GOTENBERG_URL. Decision: Gotenberg: conditional. Pro DOCX/HTML document conversion. Documented deployment component.
- Open/read `https://www.docuseal.com/docs/configuring-docuseal-via-environment-variables`; public locator: Misc (optional) — STRIPE_SECRET_KEY. Decision: Stripe API: optional. Payment collection. Documented deployment component.
- Open/read `https://www.docuseal.com/install`; public locator: Scenario1; Database requirements. Decision: {'cpu': '1 vCPU example for500KB docs', 'memory': '1 GB example for500KB docs', 'storage': '12 GB example for10,000 single-use/single-signer500KB documents', 'os': 'Docker-compatible host', 'notes': 'Workload examples, not universal minima: large100MB docs scenarios call for2vCPU/4GB and terabytes depending reuse/signers.'}
- Open/read `https://www.docuseal.com/install`; public locator: Find the best installation option for you. Decision: offered. Verified official-link Railway template. Also official Heroku/DigitalOcean/Render links present; no deployment performed.
- Open/read `https://www.docuseal.com/install`; public locator: Deploy on Railway. Decision: Railway DocuSeal template: one-click. Official install page links this actual template. Infrastructure charges separate.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.
