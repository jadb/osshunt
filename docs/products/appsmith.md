# Appsmith

[Product](https://www.appsmith.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Appsmith, Inc. (business); ownership: **private**; funding: **funded**.

Started 2019 (company-founded); years active: 7; years in business: 7. Ages are approximate calendar-year differences as of 2026-10-21.

Private company founded2019. $41m Series B announcedJune2022; identified investors include earlier seed/Series A participants. Historical backing, not current equity proportions. [1](https://www.accel.com/news/supporting-engineers-app-development-our-investment-in-appsmith) [2](https://www.appsmith.com/blog/series-b-funding) [3](https://www.businesswire.com/news/home/20211005005171/en/Appsmith-Announces-10.5-Million-Series-A-and-Seed-Funding-Rounds-to-Develop-Low-Code-Open-Source-Software)

Known investors: [Insight Partners](https://www.appsmith.com/blog/series-b-funding), [Canaan Partners](https://www.appsmith.com/blog/series-b-funding), [Accel](https://www.appsmith.com/blog/series-b-funding), [Abhinav Asthana](https://www.appsmith.com/blog/series-b-funding), [Jeff Hammerbacher](https://www.appsmith.com/blog/series-b-funding), [Bessemer Venture Partners](https://www.businesswire.com/news/home/20211005005171/en/Appsmith-Announces-10.5-Million-Series-A-and-Seed-Funding-Rounds-to-Develop-Low-Code-Open-Source-Software), [OSS Capital](https://www.businesswire.com/news/home/20211005005171/en/Appsmith-Announces-10.5-Million-Series-A-and-Seed-Funding-Rounds-to-Develop-Low-Code-Open-Source-Software), [Prasanna Sankar](https://www.businesswire.com/news/home/20211005005171/en/Appsmith-Announces-10.5-Million-Series-A-and-Seed-Funding-Rounds-to-Develop-Low-Code-Open-Source-Software).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Free | free | USD 0/account | — | — | — | unspecified | free self-hosted core / cloud free tier. Cloud free capped5 users; self-host edition separate resource costs. [1](https://www.appsmith.com/pricing) |
| popular | unknown | unknown | — | — | — | — | unspecified | self-hosted/cloud editions. No explicit Most popular or Recommended plan designation verified in the pricing source; no plan inferred. [1](https://www.appsmith.com/pricing) |
| business | Business | published | USD 15/user | — | — | — | unspecified | paid self-host license or vendor cloud. Up to99 users; monthly end-of-month billing per FAQ. Developer and end-user counted equally; no separate developer price. [1](https://www.appsmith.com/pricing) |
| enterprise | Enterprise | published | USD 2500/instance license starting100 users | — | — | — | 100 | paid self-host license or vendor cloud. Published starting$2,500/month for100 users. Enterprise typically billed annually by agreement; annual total not assumed from this monthly display; airgap/managed hosting extra. [1](https://www.appsmith.com/pricing) |

## Defensibility assessments

- Widget/query/JavaScript bindings and reusable internal app packages can accumulate organization-specific switching costs; many UI patterns are reproducible elsewhere. [1](https://www.appsmith.com/pricing)

## Three product reasons to consider it

1. Assemble internal app screens from widgets and bind them to database/API queries. [1](https://www.appsmith.com/pricing)
2. Use custom JavaScript and custom widgets to express logic beyond visual component settings. [1](https://www.appsmith.com/pricing)
3. Version internal app changes in Git and use reusable packages/workflows in commercial editions. [1](https://www.appsmith.com/pricing)

## Corporate sponsorship

Status: **business-fallback**. Corporate sponsorship source checked. No separate corporate sponsor verified; accountable commercial steward included. [1](https://www.accel.com/news/supporting-engineers-app-development-our-investment-in-appsmith)

- [Appsmith, Inc.](https://www.appsmith.com): business-steward. [Evidence](https://www.accel.com/news/supporting-engineers-app-development-our-investment-in-appsmith).

## Self-operation requirements

Mode: **server**. Current Docker guide uses EE image; Community image/entitlements differ. Requirements reflect current deployment docs, not data-source connectors. SQL backends queried by apps are optional user data sources, not interchangeable platform state stores. [1](https://docs.appsmith.com/getting-started/setup/installation-guides/docker) [2](https://docs.appsmith.com/getting-started/setup/infrastructure-sizing)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker20.10.7+ and Compose1.29.2+ | required | — | Always | Documented simple route; production Kubernetes recommended when scaling. [1](https://docs.appsmith.com/getting-started/setup/installation-guides/docker) |
| MongoDB | required | — | Always | Bundled state store in all-in-one deployment; can externalize. [1](https://docs.appsmith.com/getting-started/setup/infrastructure-sizing) |
| Redis | required | — | Always | Bundled sessions/cache service; can externalize. [1](https://docs.appsmith.com/getting-started/setup/infrastructure-sizing) |
| PostgreSQL | required | — | Always | Current docs explicitly include PostgreSQL supporting store; can externalize. Not a replacement for MongoDB. [1](https://docs.appsmith.com/getting-started/setup/infrastructure-sizing) |
| Persistent appsmith-stacks volume | required | — | Always | Persists application data/configuration and embedded services. [1](https://docs.appsmith.com/getting-started/setup/installation-guides/docker) |
| Outbound cs.appsmith.com connectivity | conditional | — | Standard non-air-gapped image/installation path | Docs require outbound allowlist; licensed air-gapped edition is separate. [1](https://docs.appsmith.com/getting-started/setup/installation-guides/docker) |

Resources: CPU not specified; memory 8GB minimum planned for all-in-one host; storage not specified; OS Docker-supported host; Linux production. At least8GB host RAM for bundled MongoDB+Redis+PostgreSQL; external services alter sizing. CPU/disk minima not fixed in checked docs. [1](https://docs.appsmith.com/getting-started/setup/installation-guides/docker)

## One-click and installer options

Status: **offered**. Only verified official deployment options included; one-command installers labelled separately from one-click. Manual Docker Compose alone is not counted as one-click. [1](https://docs.appsmith.com/getting-started/setup/installation-guides/docker) [2](https://docs.appsmith.com/getting-started/setup/installation-guides/digitalocean)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [DigitalOcean preconfigured Droplet](https://docs.appsmith.com/getting-started/setup/installation-guides/digitalocean): **marketplace**, officially-linked-third-party. Official deployment guide selects Appsmith image in DigitalOcean Marketplace; provider costs separate. [1](https://docs.appsmith.com/getting-started/setup/installation-guides/digitalocean)

[Structured profile](../../research/profiles/appsmith.json) · [Claim ledger](../../research/profile-claims/appsmith.jsonl) · [Research steps](../../research/profile-audits/appsmith.md)
