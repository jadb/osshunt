# Asterisk

[Product](https://www.asterisk.org) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Asterisk project / Sangoma Technologies Corporation (business); ownership: **public-subsidiary**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Parent: Sangoma Technologies Corporation.

Listed symbols: TSX:STC, NASDAQ:SANG.

Sangoma is verified primary developer and sponsor; project start and company founding are not conflated. Sponsor ownership public; specific project equity financing/investors not established. [1](https://sangoma.com/company/investor-relations/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Asterisk core | free | USD 0/organization | — | — | — | unspecified | self-hosted core. No recurring license charge for this core scope; infrastructure and optional services separate. [1](https://www.asterisk.org/get-started/) |
| popular | unknown | unknown | — | — | — | — | unspecified | self-hosted core. No explicitly highlighted popular plan verified in the reviewed official offer. No inferred designation. [1](https://www.asterisk.org/products/add-ons/g729-codec/) |
| business | G.729 codec add-on | published | — | — | USD 8/concurrent channel | — | unspecified | optional proprietary codec license. One-time listed $8 per concurrent channel for G.729 transcoding; not an Asterisk business subscription. Core supports other codecs. [1](https://www.asterisk.org/products/add-ons/g729-codec/) |
| enterprise | unknown | unknown | — | — | — | — | unspecified | Asterisk core. No enterprise-priced core edition verified in project introduction; commercial derived products/services separate. [1](https://www.asterisk.org/get-started/) |

## Defensibility assessments

- A long-lived telephony integration ecosystem and specialist dialplan expertise create switching costs. [1](https://www.asterisk.org/get-started/)

## Three product reasons to consider it

1. Programmable dialplans build IVR and call-routing behavior beyond a fixed calling app. [1](https://www.asterisk.org/get-started/)
2. PBX, conferencing and VoIP gateways share a communications framework. [1](https://www.asterisk.org/get-started/)
3. Multiple signaling protocols and developer interfaces enable custom telephony integrations. [1](https://www.asterisk.org/get-started/)

## Corporate sponsorship

Status: **identified**. Official source identifies corporate project investment/contribution. [1](https://www.asterisk.org/get-started/)

- [Sangoma](https://www.asterisk.org/get-started/): corporate-sponsor. [Evidence](https://www.asterisk.org/get-started/).

## Self-operation requirements

Mode: **server**. Developer telephony server, not turnkey agent desktop. Source-build module dependencies vary; no external SQL/cache mandatory stack established in reviewed installation guide. [1](https://docs.asterisk.org/Getting-Started/Installing-Asterisk/Installing-Asterisk-From-Source/Building-and-Installing-Asterisk/) [2](https://www.asterisk.org/get-started/) [3](https://www.asterisk.org/products/add-ons/g729-codec/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Linux server and built Asterisk binary | required | — | Always | Documented deployment component. [1](https://docs.asterisk.org/Getting-Started/Installing-Asterisk/Installing-Asterisk-From-Source/Building-and-Installing-Asterisk/) |
| C compiler/build toolchain and development libraries | conditional | — | Building from source; configure/menuselect resolve module-specific dependencies | Documented deployment component. [1](https://docs.asterisk.org/Getting-Started/Installing-Asterisk/Installing-Asterisk-From-Source/Building-and-Installing-Asterisk/) |
| SIP endpoints and network connectivity | conditional | — | VoIP calling integration; endpoints supplied separately | Documented deployment component. [1](https://www.asterisk.org/get-started/) |
| PSTN trunk/carrier or telephony hardware | conditional | — | External public phone calls; numbers/usage separate from source code | Documented deployment component. [1](https://www.asterisk.org/get-started/) |
| Optional modules and codecs | conditional | — | G.729 transcoding requires separately licensed vendor binary; other codecs possible | Documented deployment component. [1](https://www.asterisk.org/products/add-ons/g729-codec/) |

Resources: CPU not specified; memory not specified; storage not specified; OS not specified. No universal hardware minimum established; workload determines capacity. [1](https://docs.asterisk.org/Getting-Started/Installing-Asterisk/Installing-Asterisk-From-Source/Building-and-Installing-Asterisk/)

## One-click and installer options

Status: **none-found**. Reviewed official installation guide. Manual packages, build steps and Compose recipes are not treated as one-click. No distinct officially linked template verified. [1](https://docs.asterisk.org/Getting-Started/Installing-Asterisk/Installing-Asterisk-From-Source/Building-and-Installing-Asterisk/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/asterisk.json) · [Claim ledger](../../research/profile-claims/asterisk.jsonl) · [Research steps](../../research/profile-audits/asterisk.md)
