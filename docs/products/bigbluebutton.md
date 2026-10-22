# BigBlueButton

[Product](https://bigbluebutton.org/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

BigBlueButton project (community); ownership: **community**; funding: **unknown**.

Started 2007 (project-started); years active: 19; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

External project launch 2007 from Carleton University program. Project itself is not a verified standalone corporation; equity funding/investors unresolved. [1](https://bigbluebutton.org/open-source-project/about/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | BigBlueButton core | free | USD 0/organization | — | — | — | unspecified | self-hosted core. No recurring license charge for this core scope; infrastructure and optional services separate. [1](https://bigbluebutton.org/open-source-project/about/) |
| popular | unknown | unknown | — | — | — | — | unspecified | self-hosted core. No explicitly highlighted popular plan verified in the reviewed official offer. No inferred designation. [1](https://bigbluebutton.org/open-source-project/about/) |
| business | Enterprise | unknown | — | — | — | — | unspecified | commercial hosted offering. Commercial page returned empty extraction; exact packages and amounts unresolved, not presumed quote. [1](https://bigbluebutton.com/enterprise) |
| enterprise | Enterprise | unknown | — | — | — | — | unspecified | commercial hosted offering. Pricing inaccessible in extraction; unknown rather than inferred quotation. [1](https://bigbluebutton.com/enterprise) |

## Defensibility assessments

- A teaching-focused integration ecosystem creates domain-specific adoption and workflow familiarity. [1](https://docs.bigbluebutton.org/4.0/development/architecture/)

## Three product reasons to consider it

1. Polling, breakout rooms and timer apps let teachers vary classroom activities. [1](https://docs.bigbluebutton.org/4.0/development/architecture/)
2. Shared whiteboard and presentation conversion put teaching materials inside the live session. [1](https://docs.bigbluebutton.org/4.0/development/architecture/)
3. LMS API integration connects courses, room access and recording workflows. [1](https://docs.bigbluebutton.org/4.0/development/architecture/)

## Corporate sponsorship

Status: **business-fallback**. Official project page identifies Blindside Networks as creator and manager of worldwide project growth.2025 developer summit event sponsors were also checked; event sponsorship is not automatically ongoing project funding. [1](https://bigbluebutton.org/oeb-conference-2024/) [2](https://bigbluebutton.org/bigbluebutton-developer-summit-2025/)

- [Blindside Networks](https://blindsidenetworks.com/): business-steward. [Evidence](https://bigbluebutton.org/oeb-conference-2024/).

## Self-operation requirements

Mode: **server**. Scope:official v4.0.0 released14October2026, not preview, confirmed by GitHub release. Search index retained older DRAFT wording; current release/page controls.3.0 remains a separately documented route requiring Ubuntu22.04/Linux5.x; do not mix4.0 LiveKit default with older3.0 stack. No direct in-place upgrade from older3.x asserted. [1](https://docs.bigbluebutton.org/administration/install/) [2](https://docs.bigbluebutton.org/4.0/development/architecture/) [3](https://github.com/bigbluebutton/bigbluebutton/releases/tag/v4.0.0) [4](https://docs.bigbluebutton.org/3.0/administration/install/)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Docker on Ubuntu 24.04 64-bit | required | — | Always | Documented deployment component. [1](https://docs.bigbluebutton.org/administration/install/) |
| PostgreSQL and Hasura GraphQL service | required | — | Always | Documented deployment component. [1](https://docs.bigbluebutton.org/4.0/development/architecture/) |
| Redis PubSub/DB | required | — | Always | Documented deployment component. [1](https://docs.bigbluebutton.org/4.0/development/architecture/) |
| nginx and HAProxy | required | — | Always | Documented deployment component. [1](https://docs.bigbluebutton.org/4.0/development/architecture/) |
| Java/Scala BBB web and Node.js services | required | — | Always | Documented deployment component. [1](https://docs.bigbluebutton.org/4.0/development/architecture/) |
| LiveKit | one-of | media-backend | Default 4.0 unified audio/video/screenshare SFU | Documented deployment component. [1](https://docs.bigbluebutton.org/4.0/development/architecture/) |
| FreeSWITCH + mediasoup | one-of | media-backend | Alternative configured audio/video bridge | Documented deployment component. [1](https://docs.bigbluebutton.org/4.0/development/architecture/) |
| FreeSWITCH and external VoIP provider | conditional | — | PSTN dial-in; carrier charges separate | Documented deployment component. [1](https://docs.bigbluebutton.org/4.0/development/architecture/) |
| LibreOffice | conditional | — | Office presentation conversion | Documented deployment component. [1](https://docs.bigbluebutton.org/4.0/development/architecture/) |
| Greenlight or LMS front end | one-of | front-end | Choose room-access front end | Documented deployment component. [1](https://docs.bigbluebutton.org/4.0/development/architecture/) |

Resources: CPU 8 cores high single-thread performance production recommendation; memory 16 GB with swap production recommendation; storage 500 GB recording; 50 GB recording disabled; OS Ubuntu 24.04 64-bit, Linux 6.x. 4.0 production baseline; 250 Mbps symmetric networking and public DNS/TLS required. Development lower limits differ. [1](https://docs.bigbluebutton.org/administration/install/)

## One-click and installer options

Status: **offered**. Verified options classified individually; configuration may still be required. [1](https://docs.bigbluebutton.org/administration/install/)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [bbb-install.sh](https://github.com/bigbluebutton/bbb-install): **one-command**, first-party. Official shell installation script; flags/DNS/server prerequisites required; not a click deployment. [1](https://docs.bigbluebutton.org/administration/install/)

[Structured profile](../../research/profiles/bigbluebutton.json) · [Claim ledger](../../research/profile-claims/bigbluebutton.jsonl) · [Research steps](../../research/profile-audits/bigbluebutton.md)
