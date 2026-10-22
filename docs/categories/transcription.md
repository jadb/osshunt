# Transcription & Meeting Notes

Turn recorded or live speech into text; meeting services add capture, summaries and collaboration, while open engines provide a lower-level alternative.

Audience: People documenting meetings, interviews and recordings; developers building private speech-to-text workflows.. Speech-to-text supports recurring meetings and recorded content across roles; engine deployment requires technical integration.

Use-case sources: [1](https://otter.ai/pricing), [2](https://fireflies.ai/pricing), [3](https://alphacephei.com/vosk/).

- [Fireflies.ai](https://fireflies.ai): USD 10/seat/month, annual billing. Pro USD price per seat/month billed annually; monthly $18. Free plan exists; additional AI usage subject to credits/rate limits. [Pricing](https://fireflies.ai/pricing).
  [Pricing tiers, organization and product reasons](../products/fireflies.md).
- [Otter.ai](https://otter.ai): USD 8.33/seat/month, annual billing. Pro standard USD price per user/month billed annually; monthly standard $16.99. Conditional regional promotions excluded. [Pricing](https://otter.ai/pricing).
  [Pricing tiers, organization and product reasons](../products/otter.md).

### Vosk — A

Tier A for Vosk API plus an Apache-2.0 model such as vosk-model-small-en-us-0.15. Offline library with streaming and speaker-identification primitives; not a meeting-notes application. Model catalog licenses vary, including noncommercial choices; API license does not cover every model.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/alphacep/vosk-api/blob/4ab9821510b488efb7740094714a130bd3545e90/COPYING), [edition evidence](https://alphacephei.com/vosk/), [hosting](https://alphacephei.com/vosk/server), [repository](https://github.com/alphacep/vosk-api).

[Sponsors, requirements, installation options, pricing and product profile](../products/vosk.md).

Service costs/limits: User supplies runtime hardware and integration.; No first-party managed hosting offer verified in reviewed official documentation.; Select models individually: some French/Dutch catalog entries use noncommercial licenses and are outside this scoped OSS recommendation.

Repository: pushed 2026-10-15T08:36:44Z; latest commit 2026-10-15T08:36:44Z; latest published release v0.3.50 (2024-04-22T13:02:41Z). Quick analysis: 5.6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Fireflies.ai → Vosk: **different-approach**. For developers rebuilding only the transcription layer: supply recordings or audio streams and integrate the API/server. Speaker identification primitives exist; evaluate/build meeting diarization, capture, UI, summaries, storage, sharing and integrations. No native incumbent workspace import verified. [1](https://fireflies.ai/pricing) [2](https://alphacephei.com/vosk/)
- Otter.ai → Vosk: **different-approach**. For developers rebuilding only the transcription layer: supply recordings or audio streams and integrate the API/server. Speaker identification primitives exist; evaluate/build meeting diarization, capture, UI, summaries, storage, sharing and integrations. No native incumbent workspace import verified. [1](https://otter.ai/pricing) [2](https://alphacephei.com/vosk/)

### Whisper — A

Tier A for the published speech recognition code and model weights, explicitly MIT in README. Local CLI/Python workflow has no documented paid edition gate. A developer engine, not a meeting-notes workspace. May be run locally or embedded in a self-operated service.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/openai/whisper/blob/86098128c0b4f24f0e2aa2994de830614b474227/LICENSE), [edition evidence](https://github.com/openai/whisper), [hosting](https://developers.openai.com/api/docs/guides/speech-to-text), [repository](https://github.com/openai/whisper).

[Sponsors, requirements, installation options, pricing and product profile](../products/whisper.md).

Service costs/limits: Local inference requires user-provided compute and setup.; Optional first-party whisper-1 API is separate hosted usage; current documentation marks it deprecated, available to existing integrations until 2027-02-26.

Repository: pushed 2026-08-31T17:19:19Z; latest commit 2026-08-31T17:19:19Z; latest published release v20250625 (2025-06-26T01:06:09Z). Quick analysis: 6.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Fireflies.ai → Whisper: **different-approach**. For teams replacing only audio-to-text: export or record audio separately and process with local CLI/Python. Build meeting capture, transcript UI, speaker diarization, summaries, search, sharing and integrations separately. No native incumbent workspace import or workflow parity verified. [1](https://fireflies.ai/pricing) [2](https://github.com/openai/whisper)
- Otter.ai → Whisper: **different-approach**. For teams replacing only audio-to-text: export or record audio separately and process with local CLI/Python. Build meeting capture, transcript UI, speaker diarization, summaries, search, sharing and integrations separately. No native incumbent workspace import or workflow parity verified. [1](https://otter.ai/pricing) [2](https://github.com/openai/whisper)

[Category research and unresolved questions](../../research/categories/transcription.json) · [Research audit](../../research/audits/transcription.md) · [Sourced claims](../../research/claims/transcription.jsonl)
