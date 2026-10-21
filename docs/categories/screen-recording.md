# Screen recording and asynchronous video

Record demonstrations, tutorials, feedback and asynchronous team video.

Audience: Knowledge workers, support, sales, product and training teams. Cross-functional business communication and demonstrations, with adoption dependent on video workflows.

Use-case sources: [1](https://www.loom.com/pricing), [2](https://github.com/alyssaxuu/screenity).

- [Loom](https://www.loom.com): entry amount unverified/quote, monthly billing. Business displays $18 per user/month; pricing page has monthly/annual toggle without unambiguous captured state, so entry amount not asserted. [Pricing](https://www.loom.com/pricing).

### OBS Studio — A

Full local video recorder and streaming application offered free with no paid first-party feature edition; GPL COPYING at pinned SHA. Local installation, not a hosted video collaboration platform.

License: GPL-2.0-or-later; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/obsproject/obs-studio/blob/95d5223b66da1c162acdb61c1bae2b9123a60f0e/COPYING), [edition evidence](https://obsproject.com), [hosting](https://obsproject.com), [repository](https://github.com/obsproject/obs-studio).

Repository: pushed 2026-10-20T23:09:59Z; latest commit unknown; latest published release 32.2.2 (2026-08-14T22:43:31Z). Unavailable: cache backup write outside permitted directory denied; GitHub metadata fallback used

- Loom → OBS Studio: **different-approach**. Captures screen, camera and audio locally with scenes; upload/export files into another service for Loom-style link sharing and team feedback. No Loom library importer established. [1](https://obsproject.com) [2](https://www.loom.com/pricing)

### Screenity — C

GPL recorder provides unlimited local capture, annotations and exports. Paid separate Pro platform adds everyday sharing/editing/caption workflows; rank by the local extension, not hosted platform parity.

License: GPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/alyssaxuu/screenity/blob/c5b344fbb3d9a126c4b3a39f0979c7976392fa96/LICENSE), [edition evidence](https://github.com/alyssaxuu/screenity), [hosting](https://screenity.io), [repository](https://github.com/alyssaxuu/screenity).

Paid restrictions: Pro platform link sharing and cloud media library; Pro multi-scene editing and captions; self-hosted extension is local-only with platform features disabled

Repository: pushed 2026-10-20T19:22:14Z; latest commit 2026-10-20T19:14:36Z; latest published release v4.7.0 (2026-10-20T19:22:15Z). Quick analysis: 5/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Loom → Screenity: **partial**. Browser extension handles unlimited capture, annotations and MP4/GIF/WebM exports. Self-host is local-only; sharing via external storage or paid Pro. No migration preserving Loom comments/analytics established. [1](https://github.com/alyssaxuu/screenity) [2](https://screenity.io)

### Cap — U

Pinned root LICENSE states AGPLv3 except MIT cap-camera/scap crate families. Commercial-license docs explicitly exempt self-built versions; core qualifies as OSS. U reflects unverified self-host feature gates, not license uncertainty.

License: AGPL-3.0-only AND MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/CapSoftware/Cap/blob/d16fd199bbe8bd2a1c52fb19bcb3d383e9a2ff61/LICENSE), [edition evidence](https://cap.so/docs/commercial-license), [hosting](https://cap.so/docs/self-hosting), [repository](https://github.com/CapSoftware/Cap).

Paid restrictions: Official distributed desktop binaries require a paid commercial license for business use; self-built source versions exempt; Cap Pro cloud plan gates unlimited sharing, transcription, analytics, custom domains and Loom importer; self-host parity not fully verified

Repository: pushed 2026-10-21T21:29:20Z; latest commit 2026-10-21T04:36:31Z; latest published release cap-v0.6.1 (2026-10-20T14:14:57Z). Quick analysis: 5.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Loom → Cap: **partial**. Closer capture-and-sharing workflow with own-server deployment. Loom importer supports URLs/CSV but is Pro-gated, requires download access and maps space labels rather than nested folder hierarchy. Build desktop from source for commercial-license exemption. [1](https://cap.so/docs/migrating-to-cap) [2](https://cap.so/docs/commercial-license) [3](https://cap.so/docs/self-hosting)

[Category research and unresolved questions](../../research/categories/screen-recording.json) · [Research audit](../../research/audits/screen-recording.md)
