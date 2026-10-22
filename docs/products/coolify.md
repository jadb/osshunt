# Coolify

[Product](https://coolify.io/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

coolLabs Solutions Kft. (business); ownership: **private**; funding: **bootstrapped**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Private independent company; official site explicitly says no investors, with Cloud revenue, donations and merch sustaining work. Bootstrapped refers to absence of equity investors, not absence of corporate sponsorship. Exact company founding date not verified from checked Team/philosophy/site pages. [1](https://coollabs.io/) [2](https://coollabs.io/philosophy)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Self-hosted | free | USD 0/account | — | — | — | unspecified | free self-hosted core. All features; provide infrastructure. [1](https://coolify.io/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | self-host/cloud plans. No explicit Most popular or Recommended plan designation verified in the pricing source; no plan inferred. [1](https://coolify.io/pricing) |
| business | Cloud | published | USD 5/team account,2 connected servers | — | — | — | unspecified | vendor commercial control-plane cloud. Closest organizational plan; no named Business tier. Base$5/month includes2 connected servers; +$3/month per extra server. Applications still run on separately paid user servers; each team needs subscription. [1](https://coolify.io/pricing) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | self-hosted software. No separate enterprise license tier offered; all self-host features available. Cloud remains optional. [1](https://coolify.io/pricing) |

## Defensibility assessments

- A service-template ecosystem and accumulated server/deployment configuration build operational familiarity; standard Docker workloads and open code limit proprietary lock-in. [1](https://coolify.io/pricing) [2](https://coollabs.io/)

## Three product reasons to consider it

1. Deploy applications, databases and packaged service templates from one dashboard. [1](https://coolify.io/pricing) [2](https://coollabs.io/)
2. Manage application deployments across multiple SSH-connected Linux servers. [1](https://coolify.io/pricing) [2](https://coolify.io/docs/start-with-self-hosted)
3. Configure deployment backups, domain routing and event notifications through the platform. [1](https://coolify.io/pricing)

## Corporate sponsorship

Status: **identified**. Corporate sponsorship source checked. Listed organizations explicitly support the project; customers and investors excluded. [1](https://coollabs.io/) [2](https://coolify.io/docs/sponsors)

- [CubePath](https://cubepath.com): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [Context.dev](https://www.context.dev): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [Ginernet](https://ginernet.com): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [SerpAPI](https://serpapi.com): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [MVPS](https://www.mvps.net): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [ScreenshotOne](https://screenshotone.com): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [PrivateAlps](https://privatealps.net): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [Seibert Group](https://seibert.group): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [Contabo](https://contabo.com): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [Hetzner](https://www.hetzner.com): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [Cloudways](https://www.cloudways.com): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [Bytebase](https://www.bytebase.com): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [Logto](https://logto.io): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [CodeRabbit](https://coderabbit.ai): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [Convex](https://convex.dev): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).
- [Tigris](https://www.tigrisdata.com): corporate-sponsor. [Evidence](https://coolify.io/docs/sponsors).

## Self-operation requirements

Mode: **server**. Default control plane uses Docker+Postgres+Redis. Requirements verified current4.4.7 Compose; PHP/runtime bundled inside image. Extra CPU/RAM/disk needed for application builds and workloads. [1](https://coolify.io/docs/start-with-self-hosted) [2](https://raw.githubusercontent.com/coollabsio/coolify/v4.4.7/docker-compose.yml) [3](https://raw.githubusercontent.com/coollabsio/coolify/v4.4.7/docker-compose.prod.yml) [4](https://coolify.io/pricing)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Linux server with SSH/root or sudo | required | — | Always | AMD64/ARM64; supported distributions listed; automatic installer requiresroot. [1](https://coolify.io/docs/start-with-self-hosted) |
| Docker Engine and Compose | required | — | Always | Installer handles Docker; snap Docker not supported by recommended path. [1](https://coolify.io/docs/start-with-self-hosted) |
| PostgreSQL15 | required | — | Always | Bundled control-plane database; deployed-app SQL choices are separate. [1](https://raw.githubusercontent.com/coollabsio/coolify/v4.4.7/docker-compose.yml) |
| Redis7 | required | — | Always | Bundled control-plane Redis, not an optional user app cache alternative. [1](https://raw.githubusercontent.com/coollabsio/coolify/v4.4.7/docker-compose.yml) |
| Realtime server | required | — | Always | Current4.4.7 runs inside Coolify container; legacy separate Soketi entry inactive. [1](https://raw.githubusercontent.com/coollabsio/coolify/v4.4.7/docker-compose.prod.yml) |
| SMTP/Resend; backup destination | conditional | — | Email event notifications or off-server backup configuration | Self-host email requires SMTP/Resend; user apps may add arbitrary services. [1](https://coolify.io/pricing) |

Resources: CPU 2 cores minimum; memory 2GB minimum; storage 10GB free minimum; OS Linux: Debian/Ubuntu, supported RedHat/SUSE/Arch/Alpine derivatives;64-bit RaspberryPiOS. Documented minimum for Coolify; lower configurations discussed but not recommendation. Application workloads additional. [1](https://coolify.io/docs/start-with-self-hosted)

## One-click and installer options

Status: **offered**. Only verified official deployment options included; one-command installers labelled separately from one-click. Manual Docker Compose alone is not counted as one-click. [1](https://coolify.io/docs/start-with-self-hosted)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Official Coolify installation script](https://coolify.io/docs/start-with-self-hosted): **one-command**, first-party. curl cdn.coollabs.io/coolify/install.sh | bash; provisions local control plane; not browser one-click. [1](https://coolify.io/docs/start-with-self-hosted)

[Structured profile](../../research/profiles/coolify.json) · [Claim ledger](../../research/profile-claims/coolify.jsonl) · [Research steps](../../research/profile-audits/coolify.md)
