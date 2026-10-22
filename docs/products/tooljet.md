# ToolJet

[Product](https://tooljet.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

ToolJet Solutions Inc. (business); ownership: **private**; funding: **funded**.

Started 2021 (product-launched); years active: 5; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Private investor-backed business. Date refers to launch timeline, not separately verified incorporation. M12, Nexus, January Capital and Ratio explicitly displayed as investors; round amounts not established. [1](https://tooljet.com/about)

Known investors: [M12](https://tooljet.com/about), [Nexus Venture Partners](https://tooljet.com/about), [January Capital](https://tooljet.com/about), [Ratio](https://tooljet.com/about).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Free | free | USD 0/instance;2 builders | — | — | — | unspecified | self-hosted Community/free distribution. Distributed self-host plan lists2 builders,50 end users,10 apps; source-build entitlements not inferred. [1](https://tooljet.com/pricing) |
| popular | Team | published | USD 249/builder | USD 2388/builder | — | — | unspecified | paid self-host license. Explicit Most Popular. Annual display$199 per builder/month ×12=$2,388; Monthly selected changes to$249. Up to100 end users. [1](https://tooljet.com/pricing) |
| business | Team | published | USD 249/builder | USD 2388/builder | — | — | unspecified | paid self-host license. Named organizational tier, also explicitly most popular. Same plan deliberately occupies both roles;100 end users and3,000 AI credits/builder/month. [1](https://tooljet.com/pricing) |
| enterprise | Enterprise | quote | — | — | — | — | unspecified | paid self-host license. Schedule a Call; custom deployment and unlimited end users; airgap add-on. [1](https://tooljet.com/pricing) |

## Defensibility assessments

- App-specific components, data-source bindings and reusable modules accumulate internal workflow switching costs; low-code primitives remain widely available. [1](https://tooljet.com/about) [2](https://tooljet.com/pricing)

## Three product reasons to consider it

1. Create internal applications with AI generation, visual editing and custom code in one builder. [1](https://tooljet.com/about)
2. Use a built-in PostgreSQL-backed database alongside external APIs and data sources. [1](https://tooljet.com/pricing)
3. Reuse app modules and version changes through Git sync in commercial Team edition. [1](https://tooljet.com/pricing)

## Corporate sponsorship

Status: **business-fallback**. Corporate sponsorship source checked. No separate corporate sponsor verified; accountable commercial steward included. [1](https://tooljet.com/about)

- [ToolJet Solutions Inc.](https://tooljet.com): business-steward. [Evidence](https://tooljet.com/about).

## Self-operation requirements

Mode: **server**. PostgreSQL is the actual platform backend; other SQL connectors are user data sources. Current docs predominantly describe EE/LTS containers; free CE feature availability separate. [1](https://docs.tooljet.com/docs/setup/docker/) [2](https://docs.tooljet.com/docs/setup/system-requirements/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker and Compose | required | — | Always | Production service; may be bundled in the documented container stack. [1](https://docs.tooljet.com/docs/setup/docker/) |
| PostgreSQL16.x recommended | required | — | Always | Platform PG_DB and TOOLJET_DB; bundled or managed. Existing13.x mentioned, with upstream EOL caveat in docs. [1](https://docs.tooljet.com/docs/setup/system-requirements/) |
| Redis7.x | required | — | Always | Cache/session requirement; built-in single-container path or external stateful Redis when multiple workers/instances. [1](https://docs.tooljet.com/docs/setup/system-requirements/) |
| Worker process | conditional | — | Workflow scheduling and distributed workflow execution | WORKER=true; external Redis persistent queue across containers. [1](https://docs.tooljet.com/docs/setup/docker/) |
| ToolJet AI outbound API access | conditional | — | When enabling ToolJet AI | api-gateway.tooljet.ai and python-server.tooljet.ai allowlist; not required for every manual app. [1](https://docs.tooljet.com/docs/setup/docker/) |
| Persistent database storage | required | — | Always | Back up both application and internal databases; optional SMTP setting exists for email workflows. [1](https://docs.tooljet.com/docs/setup/docker/) |

Resources: CPU App1vCPU; database2vCPU; Redis1vCPU documented; memory App4GB; PostgreSQL8GB; Redis512MB minimum (1GB production recommended); storage App8GiB; PostgreSQL20GB; Redis1GB minimum; OS Ubuntu22.04+ x86_64; arm64 unsupported; Windows via WSL2/VM. Service-specific documented sizing, not a combined host minimum. Application4GB1vCPU and supporting PostgreSQL/Redis budgets separate. [1](https://docs.tooljet.com/docs/setup/docker/)

## One-click and installer options

Status: **offered**. Only verified official deployment options included; one-command installers labelled separately from one-click. Manual Docker Compose alone is not counted as one-click. [1](https://docs.tooljet.com/docs/setup/docker/) [2](https://docs.tooljet.com/docs/setup/) [3](https://docs.tooljet.com/docs/setup/try-tooljet/)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [AWS ToolJet marketplace image](https://aws.amazon.com/marketplace/pp/prodview-fxjto27jkpqfg?applicationId=AWSMPContessa&ref_=beagle&sr=0-1): **marketplace**, officially-linked-third-party. Verified linked from official deployment overview; provider/license costs apply. [1](https://docs.tooljet.com/docs/setup/)
- [Azure ToolJet virtual machine](https://marketplace.microsoft.com/en-us/product/tooljetsolutioninc1679496832216.tooljet-vm?tab=Overview): **marketplace**, officially-linked-third-party. Verified official deployment overview link. [1](https://docs.tooljet.com/docs/setup/)
- [Try ToolJet local Docker](https://docs.tooljet.com/docs/setup/try-tooljet/): **one-command**, first-party. Evaluation EE/LTS container with bundled PostgreSQL; not production one-click or Community entitlement claim. [1](https://docs.tooljet.com/docs/setup/try-tooljet/)

[Structured profile](../../research/profiles/tooljet.json) · [Claim ledger](../../research/profile-claims/tooljet.jsonl) · [Research steps](../../research/profile-audits/tooljet.md)
