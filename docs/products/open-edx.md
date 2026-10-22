# Open edX

[Product](https://openedx.org) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Axim Collaborative / Open edX project (foundation); ownership: **nonprofit**; funding: **not-applicable**.

Started 2012 (project-started); years active: 14; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Axim is nonprofit steward founded by Harvard and MIT and successor to nonprofit edX. Year follows official project story2012 platform launch; source-code Open edX name/release is later than original edX course launch. Sale of commercial edX business did not transfer nonprofit stewardship. Grants/endowment/conference sponsorship are not equity investors. [1](https://openedx.org/about/) [2](https://www.axim.org/about) [3](https://openedx.org/blog/introducing-axim-collaborative-new-ceo/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Open edX self-managed | free | USD 0/organization | — | — | — | unspecified | free self-hosted Open edX software. No software-license fee; operation, infrastructure and provider services separate. [1](https://openedx.org/get-started/self-managed/) |
| popular | unknown | unknown | — | — | — | — | unspecified | paid product. No explicit Most popular or Recommended designation verified on the official plan page; no plan inferred. [1](https://openedx.org/get-started/self-managed/) |
| business | unknown | not-offered | — | — | — | — | unspecified | paid product. No first-party paid Business software tier. Independent providers sell hosting/customization; not substituted for project pricing. [1](https://openedx.org/get-started/self-managed/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | paid product. No first-party paid Enterprise software tier. Enterprise deployments use same project software plus independent services. [1](https://openedx.org/get-started/self-managed/) |

## Defensibility assessments

- Reusable course content, institutional integrations and a large contributor ecosystem create content/process switching costs for established learning programs. [1](https://openedx.org/platform/features/)

## Three product reasons to consider it

1. Native authoring and reusable content blocks simplify building and reusing course material. [1](https://openedx.org/platform/features/)
2. Formative and summative assessment tools support evaluating learning through varied activities. [1](https://openedx.org/platform/features/)
3. Analytics aggregate enrollment, progress, assessment, forum and video engagement for program review. [1](https://openedx.org/platform/features/)

## Corporate sponsorship

Status: **identified**. Verified corporate sponsors of the2026 Open edX conference/community event, not asserted recurring unrestricted core funding. Axim and WGU also sponsor/contribute, but nonprofits/universities are not labeled corporate sponsors. Other provider listings alone not used as sponsorship proof. [1](https://openedx.org/blog/reflecting-on-an-unforgettable-open-edx-conference-2026-a-big-thank-you/) [2](https://openedx.org/community/mission-aligned-organizations/)

- [Unicon](https://www.unicon.net/): corporate-sponsor. [Evidence](https://openedx.org/blog/reflecting-on-an-unforgettable-open-edx-conference-2026-a-big-thank-you/).
- [Walmart](https://www.walmart.com/): corporate-sponsor. [Evidence](https://openedx.org/blog/reflecting-on-an-unforgettable-open-edx-conference-2026-a-big-thank-you/).
- [Edly / Arbisoft](https://edly.io/): corporate-sponsor. [Evidence](https://openedx.org/blog/reflecting-on-an-unforgettable-open-edx-conference-2026-a-big-thank-you/).
- [OpenCraft](https://opencraft.com/): corporate-sponsor. [Evidence](https://openedx.org/blog/reflecting-on-an-unforgettable-open-edx-conference-2026-a-big-thank-you/).
- [Pearson](https://www.pearson.com/): corporate-sponsor. [Evidence](https://openedx.org/blog/reflecting-on-an-unforgettable-open-edx-conference-2026-a-big-thank-you/).
- [Raccoon Gang](https://raccoongang.com/): corporate-sponsor. [Evidence](https://openedx.org/blog/reflecting-on-an-unforgettable-open-edx-conference-2026-a-big-thank-you/).
- [edunext](https://www.edunext.co/): corporate-sponsor. [Evidence](https://openedx.org/blog/reflecting-on-an-unforgettable-open-edx-conference-2026-a-big-thank-you/).

## Self-operation requirements

Mode: **server**. Officially recommended Tutor release/verawood.1 deployment. Native application is Python/Django, packaged in containers. SQL+document+cache/broker+search services required by default; production Celery workers included. External services may replace local containers. Default volumes local;S3 optional integration, not mandatory. [1](https://docs.tutor.edly.io/en/latest/install.html) [2](https://raw.githubusercontent.com/overhangio/tutor/release/tutor/templates/config/defaults.yml) [3](https://raw.githubusercontent.com/overhangio/tutor/release/tutor/templates/local/docker-compose.yml) [4](https://raw.githubusercontent.com/overhangio/tutor/release/tutor/templates/local/docker-compose.prod.yml)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker24.0.5+ and Compose2+ | required | — | Always | Official Tutor deployment;64-bit UNIX host,AMD64/ARM64;Python3.9+ only if installing Tutor through pip rather than binary. [1](https://docs.tutor.edly.io/en/latest/install.html) |
| MySQL8.4 | required | — | Always | Default SQL service; current release template pins8.4.11. Can be externally managed; disabling local container does not remove SQL dependency. [1](https://raw.githubusercontent.com/overhangio/tutor/release/tutor/templates/config/defaults.yml) |
| MongoDB7 | required | — | Always | Default document store; template7.0.39. External service alternative possible; local container toggle does not mean optional application data. [1](https://raw.githubusercontent.com/overhangio/tutor/release/tutor/templates/config/defaults.yml) |
| Redis7 | required | — | Always | Default caching/Celery broker; template7.4.10. Not RabbitMQ by default. [1](https://raw.githubusercontent.com/overhangio/tutor/release/tutor/templates/config/defaults.yml) |
| Meilisearch | required | — | Always | Default search backend; template1.36.0. Do not substitute older Elasticsearch stack from stale deployment guides. [1](https://raw.githubusercontent.com/overhangio/tutor/release/tutor/templates/config/defaults.yml) |
| LMS and CMS application containers and Celery workers | required | — | Always | Python/Django application packaged in official images; production workers handle asynchronous jobs. [1](https://raw.githubusercontent.com/overhangio/tutor/release/tutor/templates/local/docker-compose.prod.yml) |
| Caddy HTTPS reverse proxy | conditional | — | Default production exposure | Bundled proxy; own reverse proxy/load balancer can replace it with configuration. [1](https://raw.githubusercontent.com/overhangio/tutor/release/tutor/templates/local/docker-compose.prod.yml) |
| SMTP relay | conditional | — | Delivering enrollment/reset/notification email | Bundled Exim relay configured by default; external SMTP service alternative. [1](https://raw.githubusercontent.com/overhangio/tutor/release/tutor/templates/local/docker-compose.yml) |
| Persistent local database/media volumes | required | — | Always | Default local storage; object-storage integrations need separate credentials/services if selected. [1](https://raw.githubusercontent.com/overhangio/tutor/release/tutor/templates/local/docker-compose.yml) |
| Kubernetes | conditional | — | tutor k8s deployment route | Not required for single-server tutor local route. Optional plugins can add services; requirements cover release baseline. [1](https://docs.tutor.edly.io/en/latest/install.html) |

Resources: CPU 2CPU minimum;4CPU recommended; memory 4GB minimum;8GB recommended; storage 8GB minimum;25GB recommended; OS 64-bit UNIX (Linux/macOS); WindowsWSL2 reported;AMD64/ARM64. Only explicit documented hardware figures included; null means no minimum verified in reviewed installation source. [1](https://docs.tutor.edly.io/en/latest/install.html)

## One-click and installer options

Status: **offered**. Verified options listed; manual multi-step installation and Docker Compose alone are not treated as one-click. [1](https://docs.tutor.edly.io/en/latest/install.html)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Tutor single-server launch](https://docs.tutor.edly.io/quickstart.html): **one-command**, officially-linked-third-party. Project-recommended distribution: after installing Tutor and Docker, run tutor local launch and answer configuration prompts. CLI one-command provisioning, not literal browser one-click. [1](https://docs.tutor.edly.io/quickstart.html)

[Structured profile](../../research/profiles/open-edx.json) · [Claim ledger](../../research/profile-claims/open-edx.jsonl) · [Research steps](../../research/profile-audits/open-edx.md)
