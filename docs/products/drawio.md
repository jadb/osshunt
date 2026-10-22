# draw.io

[Product](https://www.drawio.com) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

draw.io Ltd and draw.io AG (business); ownership: **private**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Official About names private UK and Swiss businesses. Diagram software history since 2005, not asserted company founding. Explicitly not VC-funded; other financing history unresolved, so funding unknown rather than bootstrapped. [1](https://www.drawio.com/docs/about/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | draw.io editor | free | USD 0/user | USD 0/user | — | — | unspecified | free desktop/core. Application/core available without a license subscription; optional distribution/hosting costs are separate. [1](https://www.drawio.com/docs/about/) |
| popular | unknown | unknown | — | — | — | — | unspecified | free desktop/core. No explicitly highlighted Most popular or Recommended plan found. [1](https://www.drawio.com/docs/about/) |
| business | unknown | not-offered | — | — | — | — | unspecified | free desktop/core. No named organizational edition for this exact product in checked official source; separate commercial products are not substituted. [1](https://www.drawio.com/docs/about/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | free desktop/core. No separate enterprise edition identified for this exact product in checked official source. [1](https://www.drawio.com/docs/about/) |

## Defensibility assessments

- Broad file compatibility, shape libraries and long-lived diagram formats create ecosystem value; open format/code constrains exclusive lock-in. [1](https://www.drawio.com/docs/features/)

## Three product reasons to consider it

1. Extensive technical shape libraries support architecture, UML and process diagrams. [1](https://www.drawio.com/docs/features/)
2. Imports/exports across diagram formats help continue existing diagram work. [1](https://www.drawio.com/docs/features/)
3. Mermaid, CSV and SQL inputs can generate diagrams from structured sources. [1](https://www.drawio.com/docs/features/)

## Corporate sponsorship

Status: **business-fallback**. Official sustainability/about source identifies commercial publishers, no corporate donor list. Paid Atlassian customers are not sponsors. [1](https://www.drawio.com/docs/about/)

- [draw.io Ltd](https://www.drawio.com/): business-steward. [Evidence](https://www.drawio.com/docs/about/).
- [draw.io AG](https://www.drawio.com/): business-steward. [Evidence](https://www.drawio.com/docs/about/).

## Self-operation requirements

Mode: **hybrid**. Editor can run as desktop or self-operated web container. Default container exports in browser and uses local/chosen storage; no required database, Redis, queue or SMTP. Paid Atlassian integrations separate. [1](https://www.drawio.com/docs/security/diagrams-docker-app/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker/Tomcat container | one-of | runtime | Self-operated web editor | Official image bundles Tomcat; no SQL/cache/queue needed for default editor. [1](https://www.drawio.com/docs/security/diagrams-docker-app/) |
| Desktop binary | one-of | runtime | Local desktop editing | Local runtime component; bundled by official binary where applicable. [1](https://www.drawio.com/docs/security/diagrams-docker-app/) |
| Browser and local/chosen file storage | required | — | Always | Local runtime component; bundled by official binary where applicable. [1](https://www.drawio.com/docs/security/diagrams-docker-app/) |
| Google Drive or OneDrive | optional | — | Chosen external document storage | Not a required vendor repository. [1](https://www.drawio.com/docs/security/diagrams-docker-app/) |
| Separate export server | conditional | — | Only server-rendered exports or PDF embedded diagram copy | Default uses browser rendering/print-to-PDF, no export-server dependency. [1](https://www.drawio.com/docs/security/diagrams-docker-app/) |

Resources: CPU not specified; memory not specified; storage not specified; OS Container host; Windows/macOS/Linux desktop. No documented minima in checked page; example -m1g container flag is an example limit, not a minimum. [1](https://www.drawio.com/docs/security/diagrams-docker-app/)

## One-click and installer options

Status: **offered**. Checked official deployment documentation; manual Docker Compose is not a one-click offer. [1](https://www.drawio.com/docs/security/diagrams-docker-app/)

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Docker run](https://www.drawio.com/docs/security/diagrams-docker-app/): **one-command**, first-party. Single documented container command after installing Docker; not true one-click. [1](https://www.drawio.com/docs/security/diagrams-docker-app/)

[Structured profile](../../research/profiles/drawio.json) · [Claim ledger](../../research/profile-claims/drawio.jsonl) · [Research steps](../../research/profile-audits/drawio.md)
