# Jitsi Meet

[Product](https://jitsi.org/jitsi-meet/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Jitsi project / 8x8, Inc. (community); ownership: **public-subsidiary**; funding: **mixed**.

Started 2014 (project-started); years active: 12; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Parent: 8x8, Inc. (NASDAQ:EGHT).

Listed symbols: NASDAQ:EGHT.

2014 is Jitsi Meet start; predecessor SIP Communicator began 2003. 8x8 acquired team and technology in 2018; project remains community-developed. Acquisition is not a named equity round in the project. [1](https://jitsi.org/about/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Jitsi Meet core | free | USD 0/organization | — | — | — | unspecified | self-hosted core. No recurring license charge for this core scope; infrastructure and optional services separate. [1](https://jitsi.org/about/) |
| popular | unknown | unknown | — | — | — | — | unspecified | self-hosted core. No explicitly highlighted popular plan verified in the reviewed official offer. No inferred designation. [1](https://jitsi.org/about/) |
| business | unknown | not-offered | — | — | — | — | unspecified | self-hosted core. No separate business-priced core code edition on reviewed project page; JaaS is a distinct 8x8 managed offer, not substituted. [1](https://jitsi.org/about/) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | self-hosted core. No enterprise-priced core code edition verified; optional deployment/integration services distinct. [1](https://jitsi.org/about/) |

## Defensibility assessments

- Its established WebRTC routing stack and extension projects form reusable integration expertise; the code is readily forkable. [1](https://jitsi.org/about/)

## Three product reasons to consider it

1. WebRTC participation enables meetings directly in compatible browsers. [1](https://jitsi.org/about/)
2. Simulcast and scalable video coding adapt conference streams to participant bandwidth. [1](https://jitsi.org/about/)
3. Separate recording and SIP bridge projects extend meetings into capture and telephone workflows. [1](https://jitsi.org/about/)

## Corporate sponsorship

Status: **identified**. Official source identifies corporate project investment/contribution. [1](https://jitsi.org/about/)

- [8x8](https://jitsi.org/about/): corporate-sponsor. [Evidence](https://jitsi.org/about/).

## Self-operation requirements

Mode: **server**. Documented default deployment path; optional services are separate from core runtime. No unverified backend alternatives asserted. [1](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-requirements/) [2](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-quickstart/) [3](https://jitsi.org/about/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| OpenJDK 17, Jitsi Videobridge and Jicofo | required | — | Always | Documented deployment component. [1](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-quickstart/) |
| Prosody XMPP server | required | — | Always | Documented deployment component. [1](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-quickstart/) |
| nginx-full and HTTPS/DNS configuration | required | — | Always | Documented deployment component. [1](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-quickstart/) |
| coturn | conditional | — | TCP fallback media / restricted networks; optional STUN enabled separately | Documented deployment component. [1](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-quickstart/) |
| Jibri / Jigasi | conditional | — | Recording/streaming / SIP dial-in respectively | Separate add-on processes; PSTN carrier connectivity external, not bundled telephone service. [1](https://jitsi.org/about/) |

Resources: CPU 4 dedicated cores basic planning guidance; memory 8 GB suggested; 4 GB small meetings; 2 GB tests; storage 20 GB without heavy logging/recording; OS Debian 12+ or Ubuntu 24.04+ native packages; Docker/openSUSE guides linked. Planning guidance, not participant capacity guarantee. Recording raises requirements. [1](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-requirements/)

## One-click and installer options

Status: **none-found**. Reviewed official installation guide. Manual packages, build steps and Compose recipes are not treated as one-click. No distinct officially linked template verified. [1](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-requirements/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.


[Structured profile](../../research/profiles/jitsi-meet.json) · [Claim ledger](../../research/profile-claims/jitsi-meet.jsonl) · [Research steps](../../research/profile-audits/jitsi-meet.md)
