# Vosk

[Product](https://alphacephei.com/vosk/) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

Alpha Cephei Inc. (business); ownership: **unknown**; funding: **unknown**.

Started unknown (unknown); years active: unknown; years in business: not established/applicable. Ages are approximate calendar-year differences as of 2026-10-21.

Business identity verified by Inc. footer and Enterprise/Mobile commercial offers. Founding year/equity owners/funding unresolved; copyright start not used as founding evidence. [1](https://alphacephei.com/en/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Vosk API plus separately licensed model | free | USD 0/local installation | — | — | — | unspecified | self-hosted core. Free API/toolkit scope; choose model license individually. Some model catalog entries are noncommercial; API license does not cover every model. [1](https://alphacephei.com/vosk/) |
| popular | unknown | unknown | — | — | — | — | unspecified | self-hosted core. No explicitly highlighted popular plan verified in the reviewed official offer. No inferred designation. [1](https://alphacephei.com/en/) |
| business | Vosk Enterprise | unknown | — | — | — | — | unspecified | commercial Vosk Enterprise. Enterprise exists with Contact Us but no numeric pricing or named Business tier verified. [1](https://alphacephei.com/en/) |
| enterprise | Vosk Enterprise | quote | — | — | — | — | unspecified | commercial Vosk models/services. Contact Us offer; no numeric amount. Commercial models not silently treated as bundled open source. [1](https://alphacephei.com/en/) |

## Defensibility assessments

- Offline multi-platform bindings and model adaptation expertise support integration stickiness; open APIs and varied model licenses limit exclusivity. [1](https://alphacephei.com/vosk/)

## Three product reasons to consider it

1. Streaming recognition yields partial results for interactive speech workflows. [1](https://alphacephei.com/vosk/)
2. Offline recognition runs without a remote transcription service. [1](https://alphacephei.com/vosk/)
3. Reconfigurable vocabulary and speaker-identification primitives support domain-specific applications. [1](https://alphacephei.com/vosk/)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsor verified in reviewed project sources; accountable business steward included. [1](https://alphacephei.com/en/)

- [Alpha Cephei Inc.](https://alphacephei.com/en/): business-steward. [Evidence](https://alphacephei.com/en/).

## Self-operation requirements

Mode: **hybrid**. Documented default deployment path; optional services are separate from core runtime. No unverified backend alternatives asserted. [1](https://alphacephei.com/vosk/install) [2](https://alphacephei.com/vosk/server)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Vosk native library and a licensed language model | required | — | Always | Documented deployment component. [1](https://alphacephei.com/vosk/install) |
| Python | one-of | binding-runtime | Python pip binding; docs list3.5–3.9, potentially dated compatibility | Documented deployment component. [1](https://alphacephei.com/vosk/install) |
| Java 8+ / JNA | one-of | binding-runtime | Java binding alternative | Documented deployment component. [1](https://alphacephei.com/vosk/install) |
| .NET runtime / Vosk NuGet | one-of | binding-runtime | C# alternative; Linux/Windows documented | Documented deployment component. [1](https://alphacephei.com/vosk/install) |
| Node.js / node-ffi-napi | one-of | binding-runtime | JavaScript binding alternative | Documented deployment component. [1](https://alphacephei.com/vosk/install) |
| Docker | conditional | — | Optional Vosk websocket/gRPC/MQTT/WebRTC server route | Documented deployment component. [1](https://alphacephei.com/vosk/server) |
| FFmpeg | conditional | — | Convert unsupported input audio; native PCM16-bit mono examples do not need it | Documented deployment component. [1](https://alphacephei.com/vosk/install) |
| Kaldi, OpenBLAS+CLAPACK or MKL; optional CUDA | conditional | — | Source build only; prebuilt pip path avoids compilation | Documented deployment component. [1](https://alphacephei.com/vosk/install) |

Resources: CPU not specified; memory Some large CARPA server models need16GB or more; storage not specified; OS Linux x86_64/arm64; RaspberryPi3/4; macOS x86/M1; Windows x86/64 pip routes. Primarily library, with separate server wrappers. Docs exclude ARMv6/WindowsARM64 for pip. Model-specific memory; no universal minimum. [1](https://alphacephei.com/vosk/install)

## One-click and installer options

Status: **offered**. Verified options classified individually; configuration may still be required. [1](https://alphacephei.com/vosk/install)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Vosk server Docker launch](https://alphacephei.com/vosk/server): **one-command**, first-party. Official docker run image launches server; model/network/storage choices remain. [1](https://alphacephei.com/vosk/server)

[Structured profile](../../research/profiles/vosk.json) · [Claim ledger](../../research/profile-claims/vosk.jsonl) · [Research steps](../../research/profile-audits/vosk.md)
