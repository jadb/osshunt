> Temporary paths normalized; local operating setup omitted. Original retained locally.

# Video editing audit — 2026-10-21

2. Listed shared GitHub directory; KDE/kdenlive and mltframework/shotcut captures available.
3. Inspected shared capture schemas and metadata: both active, nonarchived; Kdenlive GitHub releases/latest Not Found; Shotcut v26.9.27 published 2026-09-28T00:29:29Z. SHA-pinned COPYING captures present.
4. `rg -n 'kdenlive|shotcut|premiere|final-cut'` existing category/catalog: no matches; no stable IDs to reuse. Checked CWD frame files and global .ctxt: none found.
5. Web open https://kdenlive.org/features/ failed 404; fallback /en/features/ and homepage next. Opened https://shotcut.org/features/ (multitrack, MLT XML projects, subtitles, EDL export), https://shotcut.org/FAQ/ (commercial use, offline use, MLT save vs rendered export), Adobe plans (US$22.99 monthly annual commitment), Apple Final Cut Pro homepage (editing/audio/color capabilities).
6. Opened Kdenlive homepage (local Linux/Windows/macOS/BSD, full editing/effects/audio/color/subtitles, official 26.08.2 release dated 2026-10-13), /en/features/ 404, /en/download/ redirected to /download/ but empty extraction. Shotcut download confirms 26.9.27 free local packages and source; US Mac App Store Final Cut Pro confirms $299.99 standalone purchase.
7. Decoded both SHA-pinned COPYING payloads to inspect GPLv3 text. No new GitHub queries; centralized health evidence reused.
8. Read Kdenlive project format and archiving manual URLs: XML references media, archive packages assets. Read official release https://kdenlive.org/news/releases/26.08.2/; date preserved separately from GitHub release 404. Canonical /download/ successfully extracted: local native packages, no paid edition visible.
9. Shotcut /about/ inaccessible; relied on official feature, download and FAQ pages instead. FAQ commercial use confirms GPLv3; offline operation and MLT save/render export verified.
10. Attempted SHA-pinned README.md and src/main.cpp raw GitHub URLs for both repos; all web fetches cache-miss. Root COPYING captured successfully; retained GPL-3.0 without unsupported only/or-later specificity, uncertainty recorded.
11. Asked coordinator for centralized rsx status; none present in shared captures. No redundant local rsx or GitHub calls made.
12. Classification: both Tier A locally operated desktop OSS, selfHostable=false, hostedOffer=false. No paid software feature gates identified from free application/download evidence. No archived exclusions. Only partial video-editing substitutions; four explicit edges describe independently verified local editing overlap, not native project compatibility. Two candidates retained for evidence quality.
13. Wrote video-editing.json and video-editing.claims.jsonl with primary-source claim locators. Final Cut purchase uses period=one-time; billing=free is schema workaround for no recurring charge, documented as uncertainty.
14. Coordinator supplied rsx paths; read both central analyses and replaced pending summaries. Kdenlive score 4.4/10, policy passed; Shotcut 6/10, policy passed. Mirror-specific gaps retained, no rsx rerun.
15. Validation: JSON parse, required category/paid/oss/alternatives keys, unique product IDs, valid edge references, claims JSONL parse; passed. No repository modifications.

Integration: schema now supports one-time billing explicitly; Final Cut purchase represented one-time rather than free. Kdenlive official release mapped into lastRelease/lastReleaseAt/releaseSource, preserving calendar precision and provenance despite mirror API404.
