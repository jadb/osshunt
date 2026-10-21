# Video calls

Browser and app video meetings, screen sharing, and virtual classrooms.

Audience: Businesses holding internal meetings, customer calls, and remote training.. Meeting tools serve staff across functions and industries; classroom software is a narrower training use case.

Use-case sources: [1](https://www.zoom.com/en/products/virtual-meetings/), [2](https://workspace.google.com/pricing).

- [Google Meet](https://workspace.google.com/pricing): USD 7/seat/month, annual billing. Workspace Business Starter standard USD/user/month with one-year commitment, billed monthly; bundled suite, not standalone Meet. Promotions excluded. [Pricing](https://workspace.google.com/pricing).
- [Zoom](https://zoom.us/pricing): USD 14.16/seat/month, annual billing. Workplace Pro displayed annual-equivalent USD/user/month; monthly plan $16.99. Basic free plan exists. Tax excluded. [Pricing](https://zoom.us/pricing).

### Jitsi Meet — A

Official FAQ describes entire Jitsi offering as 100% OSS; self-hostable meeting implementation, recorder Jibri and SIP bridge Jigasi available as OSS projects. Hosting/support and third-party phone service incur separate costs; no verified self-hosted edition license gates. JaaS managed service is separate.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/jitsi/jitsi-meet/blob/55430513980db97d73e0f605df591b8028c23342/LICENSE), [edition evidence](https://jitsi.org/user-faq/), [hosting](https://jitsi.org/about/), [repository](https://github.com/jitsi/jitsi-meet).

Repository: pushed 2026-10-21T21:24:56Z; latest commit 2026-10-21T16:34:56Z; latest published release stable/jitsi-meet_11248 (2026-09-14T13:07:11Z). Quick analysis: 7.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Google Meet → Jitsi Meet: **partial**. Suitable for browser meetings with screen sharing and chat. Recreate meeting URLs/calendar invitations; existing incumbent links and cloud recording libraries are not automatically migrated. Recording needs Jibri; PSTN access needs Jigasi plus SIP provider. Operate and size the deployment. [1](https://jitsi.org/user-faq/) [2](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-requirements/)
- Zoom → Jitsi Meet: **partial**. Suitable for browser meetings with screen sharing and chat. Recreate meeting URLs/calendar invitations; existing incumbent links and cloud recording libraries are not automatically migrated. Recording needs Jibri; PSTN access needs Jigasi plus SIP provider. Operate and size the deployment. [1](https://jitsi.org/user-faq/) [2](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-requirements/)

### BigBlueButton — U

Core conferencing/virtual classroom software is LGPL and supports self-hosting without proprietary restrictions. Commercial Enterprise comparison primarily sells operations/support, but Enhanced plugins/analytics licensing needs item-by-item verification before claiming all functionality is OSS. Tier U concerns feature parity, not core OSS license.

License: LGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/bigbluebutton/bigbluebutton/blob/63e66ed7587ff377b56e396974b423d7423d0ee6/LICENSE), [edition evidence](https://bigbluebutton.com/enterprise), [hosting](https://bigbluebutton.com/), [repository](https://github.com/bigbluebutton/bigbluebutton).

Paid restrictions: Commercial hosted Enhanced offering advertises additional plugins and enterprise analytics; precise OSS availability of all enhancements not established.

Repository: pushed 2026-10-21T19:04:21Z; latest commit 2026-10-21T19:04:21Z; latest published release v4.0.0 (2026-10-14T23:32:13Z). Quick analysis: 5.6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Google Meet → BigBlueButton: **different-approach**. Strongest for training and classrooms using polls, breakout rooms, and shared notes. Integrate through an LMS/front-end/API and recreate sessions/invitations. Does not replace the surrounding Workspace or Zoom suite. Dedicated Ubuntu server and operational capacity required. [1](https://docs.bigbluebutton.org/4.0/testing/release-testing/) [2](https://docs.bigbluebutton.org/administration/install/) [3](https://bigbluebutton.org/global-community/)
- Zoom → BigBlueButton: **different-approach**. Strongest for training and classrooms using polls, breakout rooms, and shared notes. Integrate through an LMS/front-end/API and recreate sessions/invitations. Does not replace the surrounding Workspace or Zoom suite. Dedicated Ubuntu server and operational capacity required. [1](https://docs.bigbluebutton.org/4.0/testing/release-testing/) [2](https://docs.bigbluebutton.org/administration/install/) [3](https://bigbluebutton.org/global-community/)

[Category research and unresolved questions](../../research/categories/video-calls.json) · [Research audit](../../research/audits/video-calls.md)
