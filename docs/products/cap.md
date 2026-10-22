# Cap

[Product](https://cap.so) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Cap Software, Inc. (business); ownership: **unknown**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Legal business identity verified. About/pricing/privacy reviewed; founding year, equity ownership, investment funding and investors not established. No bootstrapped inference. [1](https://cap.so/privacy)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Self-built Cap source | free | USD 0/local build | — | — | — | unspecified | self-hosted core. Source-built versions exempt from distributed-binary commercial license; official desktop business-use license is$29/year or$58 lifetime separately. Personal-use binary free. [1](https://cap.so/docs/commercial-license) |
| popular | Cap Pro | published | USD 12/user | USD 97.92/user | — | — | unspecified | vendor cloud/team subscription. Explicit Most popular. $8.16 annual-billed monthly ×12=$97.92. Not a self-host license price. [1](https://cap.so/pricing) |
| business | Cap Pro | published | USD 12/user | USD 97.92/user | — | — | unspecified | vendor cloud/team subscription. Closest explicit team-workspace plan; $8.16×12 annual. Standalone Desktop License$29/year or$58 one-time licenses official binaries for commercial use. [1](https://cap.so/pricing) |
| enterprise | Enterprise / Cap Pro base | published | USD 12/user | USD 97.92/user | — | — | unspecified | vendor enterprise cloud subscription. Same published Pro base, no minimum seats. Optional organization-wide SAML SSO$199/month and signed BAA$99/month added separately; not per-seat base or a forced bundle. [1](https://cap.so/pricing) |

## Defensibility assessments

- A combined native recorder/editor and sharing workflow can create product familiarity; source availability reduces exclusive lock-in. [1](https://cap.so/pricing)

## Three product reasons to consider it

1. Studio Mode provides a full editor for polished screen recordings. [1](https://cap.so/pricing)
2. Instant Mode creates a shareable clip immediately after capture. [1](https://cap.so/pricing)
3. Recording transcripts, summaries and clickable chapters make long demonstrations navigable when optional AI features are configured. [1](https://cap.so/pricing)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsor verified in reviewed project sources; accountable business steward included. [1](https://cap.so/privacy)

- [Cap Software, Inc.](https://cap.so/privacy): business-steward. [Evidence](https://cap.so/privacy).

## Self-operation requirements

Mode: **hybrid**. Documented default deployment path; optional services are separate from core runtime. No unverified backend alternatives asserted. [1](https://cap.so/docs/self-hosting) [2](https://cap.so/download)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Cap Desktop recorder | conditional | — | Local recording; web-only uploads can use existing videos | Documented deployment component. [1](https://cap.so/download) |
| Docker and Compose; Cap Web and FFmpeg media server | conditional | — | Self-operated web sharing stack | Documented deployment component. [1](https://cap.so/docs/self-hosting) |
| MySQL | conditional | — | Web stack database; bundled in Compose | Documented deployment component. [1](https://cap.so/docs/self-hosting) |
| MinIO | one-of | web-object-storage | Default S3-compatible web storage | Documented deployment component. [1](https://cap.so/docs/self-hosting) |
| External S3-compatible storage | one-of | web-object-storage | Alternative configured object storage | Documented deployment component. [1](https://cap.so/docs/self-hosting) |
| Reverse proxy with SSL: nginx/Caddy/Traefik | conditional | — | Public production web deployment | Documented deployment component. [1](https://cap.so/docs/self-hosting) |
| Resend API | conditional | — | Email login delivery; default local testing prints links in logs | Documented deployment component. [1](https://cap.so/docs/self-hosting) |
| AssemblyAI / Groq / OpenAI / Anthropic APIs | conditional | — | Selected transcription and AI features; external services and credentials, not bundled local models | Documented deployment component. [1](https://cap.so/docs/self-hosting) |
| Google/Apple OAuth credentials | optional | — | Enable selected social login providers | Documented deployment component. [1](https://cap.so/docs/self-hosting) |

Resources: CPU not specified; memory not specified; storage not specified; OS Desktop macOS/Windows/Linux; current Linux binaries glibc2.39+; web stack Docker-capable host. No universal CPU/RAM minimum verified. Current download recommends macOS13.1+; Windows beta listed. Desktop distinct from optional web server. [1](https://cap.so/docs/self-hosting) [2](https://cap.so/download)

## One-click and installer options

Status: **offered**. Verified options classified individually; configuration may still be required. [1](https://cap.so/docs/self-hosting)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Railway deployment](https://cap.so/docs/self-hosting#deployment-options): **one-click**, officially-linked-third-party. Officially linked Railway option; hosted infrastructure charges/configuration separate. Click-through could not be fetched; official deployment guide is evidence. [1](https://cap.so/docs/self-hosting)
- [Cap CLI link installer](https://cap.so/download): **one-command**, first-party. Links CLI bundled with an existing Desktop installation; does not deploy Cap Web. [1](https://cap.so/download)

[Structured profile](../../research/profiles/cap.json) · [Claim ledger](../../research/profile-claims/cap.jsonl) · [Research steps](../../research/profile-audits/cap.md)
