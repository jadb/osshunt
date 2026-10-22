# Budibase

[Product](https://budibase.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Budibase (business); ownership: **private**; funding: **funded**.

Started 2019 (project-started); years active: 7; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

2019 date uses documented project activity, not an independently verified incorporation date. Private business; $7m Seed II announcedNov2022; historical round participants listed. [1](https://budibase.com/blog/budibase-core-intro/) [2](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/)

Known investors: [SignalFire](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/), [Angular Ventures](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/), [Techstart Ventures](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/), [Ben Lang](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/), [Marcus Eagan](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/), [Jana Iris](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/), [Kyle Parish](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/), [Matt Robinson](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/), [Ovais Tariq](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/).

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open source | free | USD 0/account | — | — | — | unspecified | free self-hosted core. One workspace; unlimited apps/actions/users; infrastructure separate. [1](https://budibase.com/pricing/) |
| popular | unknown | unknown | — | — | — | — | unspecified | cloud/self-host plans. No explicit Most popular or Recommended plan designation verified in the pricing source; no plan inferred. [1](https://budibase.com/pricing/) |
| business | Business | published | — | USD 3588/workspace account,3 creators and250,000 actions/month | — | — | unspecified | vendor commercial cloud. Explicit cloud plan; $299/yearly-billed month ×12. Monthly amount not independently selected. Best value is not a Most popular/Recommended badge. End users and extra creators add fees. [1](https://budibase.com/pricing/) |
| enterprise | Enterprise self-host | quote | — | — | — | — | unspecified | paid self-host license. Custom; contact sales. Self-host Enterprise differs from cloud Business. [1](https://budibase.com/pricing/) |

## Defensibility assessments

- A combined internal app/data/automation model and installed workspace workflows can create migration friction; feature categories overlap competing low-code platforms. [1](https://budibase.com/pricing/)

## Three product reasons to consider it

1. Build forms and operational apps against built-in tables and external data sources. [1](https://budibase.com/pricing/)
2. Chain triggers and actions into synchronous automations that return results to apps/webhooks. [1](https://budibase.com/pricing/)
3. Combine agent instructions, tools and knowledge sources with app data in the same workspace. [1](https://budibase.com/pricing/)

## Corporate sponsorship

Status: **business-fallback**. Corporate sponsorship source checked. No separate corporate sponsor verified; accountable commercial steward included. [1](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/)

- [Budibase](https://budibase.com): business-steward. [Evidence](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/).

## Self-operation requirements

Mode: **server**. Requirements verified against stablev3.50.0 Compose, including LiteLLM/Postgres supporting services often missing in older summaries. Database/data connectors such as MySQL/Postgres are not alternative platform state stores. [1](https://docs.budibase.com/docs/docker-compose) [2](https://raw.githubusercontent.com/Budibase/budibase/v3.50.0/hosting/docker-compose.yaml) [3](https://budibase.com/pricing/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker Engine and Compose | required | — | Always | Production service; may be bundled in the documented container stack. [1](https://docs.budibase.com/docs/docker-compose) |
| CouchDB | required | — | Always | Bundled Budibase database image stores platform data; not an optional Postgres replacement. [1](https://raw.githubusercontent.com/Budibase/budibase/v3.50.0/hosting/docker-compose.yaml) |
| Redis | required | — | Always | Sessions/cache/queues used by app and worker. [1](https://raw.githubusercontent.com/Budibase/budibase/v3.50.0/hosting/docker-compose.yaml) |
| MinIO object store | required | — | Always | Bundled persistent objects; alternative external S3 configuration not asserted from this source. [1](https://raw.githubusercontent.com/Budibase/budibase/v3.50.0/hosting/docker-compose.yaml) |
| App, worker and reverse proxy | required | — | Always | Separate services in stable3.50.0 Compose. [1](https://raw.githubusercontent.com/Budibase/budibase/v3.50.0/hosting/docker-compose.yaml) |
| LiteLLM and PostgreSQL16 | required | — | Standard3.50.0 Compose stack | LiteLLM depends on separate Postgres16; app/worker depend on LiteLLM. SQL database here supports AI gateway, not CouchDB replacement. [1](https://raw.githubusercontent.com/Budibase/budibase/v3.50.0/hosting/docker-compose.yaml) |
| External model/API credentials | conditional | — | AI agents or selected external integrations | Chosen provider/model may incur separate API costs. [1](https://budibase.com/pricing/) |

Resources: CPU not specified; memory 4GB minimum for documented DigitalOcean image; storage not specified; OS Docker host: Linux, Windows/macOS via Docker Desktop. 4GB figure belongs to DigitalOcean documented path; full3.50.0 AI-enabled Compose capacity should be sized separately. [1](https://docs.budibase.com/docs/docker-compose)

## One-click and installer options

Status: **offered**. Only verified official deployment options included; one-command installers labelled separately from one-click. Manual Docker Compose alone is not counted as one-click. [1](https://docs.budibase.com/docs/docker-compose) [2](https://docs.budibase.com/docs/digitalocean)

Verified one-click/marketplace option: **yes**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [DigitalOcean Budibase Droplet](https://docs.budibase.com/docs/digitalocean): **marketplace**, officially-linked-third-party. Official one-click Marketplace offering; choose at least4GB image. [1](https://docs.budibase.com/docs/digitalocean)

[Structured profile](../../research/profiles/budibase.json) · [Claim ledger](../../research/profile-claims/budibase.jsonl) · [Research steps](../../research/profile-audits/budibase.md)
