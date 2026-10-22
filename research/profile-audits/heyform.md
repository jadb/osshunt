> Temporary paths normalized; local setup omitted. Exact original retained locally.

# HeyForm research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Opened pricing, About and repository; About confirms explicit bootstrapped EarlyBird business.
3. Original /self-hosting docs path returned empty page; followed repository exact link to /open-source/self-hosting. Raw main/docker-compose.yml returned 404; used current official documented compose instead.
4. Followed Zeabur option link to actual template; read environment reference for optional S3, SMTP, OIDC, Stripe and AI services.
5. Searched founding dates; no company founding verified. Official open-source announcement dates April 2024; earlier changelog means this is not original product founding.

## Source review and decisions
- Open/read `https://heyform.net/blog/open-source/`; public locator: HeyForm is open-source! But why?. Decision: Open-source release announced April 5, 2024; product existed earlier.
- Open/read `https://heyform.net/about-us`; public locator: Footer — Made by EarlyBird. Decision: HeyForm is made by EarlyBird and its two named makers.
- Open/read `https://heyform.net/about-us`; public locator: Footer — bootstrapped SaaS company. Decision: EarlyBird explicitly calls itself a bootstrapped SaaS company.
- Open/read `https://github.com/heyform/heyform`; public locator: License. Decision: Community Edition: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://heyform.net/pricing`; public locator: Premium — Most popular; Compare the plans. Decision: Premium: published; monthly=None; annual total=288; USD/cloud workspace. Explicit Most popular. $24/month billed annually ×12; hosted quotas differ from OSS code. Monthly-billed rate not verified.
- Open/read `https://heyform.net/pricing`; public locator: Compare the plans — Business. Decision: Business: published; monthly=None; annual total=480; USD/cloud workspace (up to 10 members). $40/month billed annually ×12; 150K responses/month. Commercial Cloud scope, not self-host license.
- Open/read `https://heyform.net/pricing`; public locator: Compare the plans — Enterprise. Decision: Enterprise: quote; monthly=None; annual total=None; USD/cloud organization. Custom pricing; Contact Sales.
- Open/read `https://github.com/heyform/heyform`; public locator: Build Forms with Ease. Decision: Conversational forms combine varied input types with conditional logic and redirects for adaptive questionnaires.
- Open/read `https://github.com/heyform/heyform`; public locator: Customize to Your Brand. Decision: Visual themes and custom CSS let teams match forms to a detailed brand style.
- Open/read `https://github.com/heyform/heyform`; public locator: Analyze and Act on Data. Decision: Drop-off/completion analytics and CSV export help diagnose form performance and reuse collected data.
- Open/read `https://github.com/heyform/heyform`; public locator: Features; Support & Community. Decision: Differentiation rests on conversational UX and customizable form workflows; a modest ecosystem offers less defensibility than incumbent form platforms.
- Open/read `https://docs.heyform.net/open-source/self-hosting`; public locator: Sponsor us; Footer. Decision: Official docs request sponsorship but no named corporate financial sponsor verified. EarlyBird is explicitly a bootstrapped SaaS business and supplied as verified steward fallback; testimonials and integrations are not sponsors.
- Open/read `https://heyform.net/about-us`; public locator: Sponsor us; Footer. Decision: EarlyBird: business-steward
- Open/read `https://docs.heyform.net/open-source/self-hosting`; public locator: Requirements. Decision: Docker and Docker Compose: required. Always. Documented deployment component.
- Open/read `https://docs.heyform.net/open-source/self-hosting`; public locator: Docker Compose — Deploy to a public server. Decision: MongoDB: required. Always. Official example uses Percona Server for MongoDB 4.4; exact current supported version range not specified.
- Open/read `https://docs.heyform.net/open-source/self-hosting`; public locator: Configuration; Docker Compose. Decision: KeyDB: one-of. Bundled KeyDB OR compatible external Redis. Architecture-specific 6.3.3 images for x86_64/ARM64.
- Open/read `https://docs.heyform.net/open-source/configuration/environment-variables`; public locator: REDIS_HOST; REDIS_PORT. Decision: Redis-compatible server: one-of. External Redis OR bundled KeyDB. Documented deployment component.
- Open/read `https://github.com/heyform/heyform`; public locator: Structure. Decision: Node.js app runtime: required. Always. Bundled in community-edition container; separate Node setup not needed for Docker route.
- Open/read `https://docs.heyform.net/open-source/self-hosting`; public locator: Deploy to a public server; Run it. Decision: Nginx or HTTPS reverse proxy: conditional. Public HTTPS deployment; app itself serves HTTP. Documented deployment component.
- Open/read `https://docs.heyform.net/open-source/configuration/environment-variables`; public locator: S3_ENDPOINT; S3_BUCKET. Decision: S3-compatible storage: optional. Alternative upload storage; local persisted assets in default compose. Documented deployment component.
- Open/read `https://docs.heyform.net/open-source/configuration/environment-variables`; public locator: SMTP_HOST. Decision: SMTP server: conditional. For email verification/notification delivery. Documented deployment component.
- Open/read `https://docs.heyform.net/open-source/configuration/environment-variables`; public locator: STRIPE; GOOGLE_RECAPTCHA; OPENAI; OIDC variables. Decision: Stripe, reCAPTCHA/Akismet, OpenAI-compatible API or OIDC provider: optional. Enable corresponding payment, spam, AI or SSO integration. External provider costs may apply.
- Open/read `https://docs.heyform.net/open-source/self-hosting`; public locator: Requirements; Configuration. Decision: {'cpu': None, 'memory': None, 'storage': None, 'os': 'Docker-compatible Linux/macOS/Windows; matching KeyDB image architecture', 'notes': 'Official setup guide gives no fixed CPU/RAM/disk minimum.'}
- Open/read `https://docs.heyform.net/open-source/self-hosting`; public locator: One Click Deployment. Decision: offered. Verified official-link target for Zeabur. Sealos, RepoCloud and Alibaba also named by docs but not independently validated here, so options limited to verified Zeabur target.
- Open/read `https://docs.heyform.net/open-source/self-hosting`; public locator: One Click Deployment. Decision: Zeabur HeyForm template: one-click. Current self-host docs link this one-click template; custom domain requires APP_HOMEPAGE_URL update.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.
