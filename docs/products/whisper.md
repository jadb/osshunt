# Whisper

[Product](https://github.com/openai/whisper) · Checked 2026-10-21. Unknown means unverified; not-offered means no matching offering established in the reviewed scope. Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.

## Organization

OpenAI (business); ownership: **nonprofit**; funding: **mixed**.

Started 2015 (company-founded); years active: 11; years in business: 11. Ages are approximate calendar-year differences as of 2026-10-21.

Parent: OpenAI Foundation controls for-profit business.

Organization founded as nonprofit2015; Whisper released2022. Nonprofit control is distinct from equity ownership in its business. Exact investor roster not established in reviewed structural announcement; no absence claim. [1](https://openai.com/index/built-to-benefit-everyone/)

Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.

## Starting prices

Monthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.

| Role | Plan | Status | Monthly | Annual total | One-time | Usage rate | Minimum | Scope and evidence |
|---|---|---|---|---|---|---|---|---|
| entry | Whisper code and weights | free | USD 0/local installation | — | — | — | unspecified | self-hosted core. No recurring license charge for this core scope; infrastructure and optional services separate. [1](https://github.com/openai/whisper) |
| popular | unknown | unknown | — | — | — | — | unspecified | self-hosted core. No explicitly highlighted popular plan verified in the reviewed official offer. No inferred designation. [1](https://github.com/openai/whisper) |
| business | unknown | not-offered | — | — | — | — | unspecified | self-hosted core. No business-priced local code/model edition in repository. Separate paid API not substituted for local code. [1](https://github.com/openai/whisper) |
| enterprise | unknown | not-offered | — | — | — | — | unspecified | self-hosted core. No enterprise-priced local edition in repository. Local compute supplied by user. [1](https://github.com/openai/whisper) |

## Defensibility assessments

- Published pretrained multilingual models and established integrations support adoption, while permissive code/weights keep exclusive lock-in limited. [1](https://github.com/openai/whisper)

## Three product reasons to consider it

1. Multilingual transcription, language identification and translation to English share one model pipeline. [1](https://github.com/openai/whisper)
2. Six model sizes let users choose inference speed and memory tradeoffs. [1](https://github.com/openai/whisper)
3. CLI and Python interface support batch transcription and embedding in custom workflows. [1](https://github.com/openai/whisper)

## Corporate sponsorship

Status: **business-fallback**. No separate corporate sponsor verified in reviewed project sources; accountable business steward included. [1](https://openai.com/index/built-to-benefit-everyone/)

- [OpenAI](https://openai.com/index/built-to-benefit-everyone/): business-steward. [Evidence](https://openai.com/index/built-to-benefit-everyone/).

## Self-operation requirements

Mode: **library**. Documented default deployment path; optional services are separate from core runtime. No unverified backend alternatives asserted. [1](https://github.com/openai/whisper)

| Component | Requirement | Alternative group | Applies when | Detail and evidence |
|---|---|---|---|---|
| Python 3.8–3.11 and PyTorch | required | — | Always | README compatibility scope; training tested Python3.9.9/PyTorch1.10.1, recent PyTorch expected. [1](https://github.com/openai/whisper) |
| Whisper model weights, tiktoken and Python package dependencies | required | — | Always | Documented deployment component. [1](https://github.com/openai/whisper) |
| FFmpeg command-line tool | required | — | Always | Documented deployment component. [1](https://github.com/openai/whisper) |
| Rust toolchain | conditional | — | tiktoken has no prebuilt wheel on selected platform | Documented deployment component. [1](https://github.com/openai/whisper) |
| CUDA GPU | optional | — | GPU acceleration; CPU inference also possible | Documented deployment component. [1](https://github.com/openai/whisper) |

Resources: CPU not specified; memory GPU VRAM approx1GB tiny/base;2GB small;5GB medium;10GB large;6GB turbo; storage not specified; OS Linux/macOS/Windows package examples. VRAM table is model-dependent GPU guidance, not total system RAM minimum. Library/CLI, not a meeting notes server. [1](https://github.com/openai/whisper)

## One-click and installer options

Status: **offered**. Verified options classified individually; configuration may still be required. [1](https://github.com/openai/whisper)

Verified one-click/marketplace option: **no**. Unverified options remain unknown in the status above.

One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.

- [Python package install](https://github.com/openai/whisper#setup): **one-command**, first-party. pip install -U openai-whisper installs library; Python/FFmpeg prerequisites remain. [1](https://github.com/openai/whisper)

[Structured profile](../../research/profiles/whisper.json) · [Claim ledger](../../research/profile-claims/whisper.jsonl) · [Research steps](../../research/profile-audits/whisper.md)
