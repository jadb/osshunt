# Appointment scheduling

Booking links, availability, appointments and service-provider scheduling.

Audience: Sales, recruiting, customer-facing teams and service businesses.. Cross-industry need for customer and colleague bookings, especially customer-facing teams; less universal than office communication.

Use-case sources: [1](https://calendly.com/pricing), [2](https://easyappointments.org/).

- [Cal.com](https://cal.com): USD 12/seat/month, annual billing. Teams $12/user/month billed annually; individual free plan exists. Distinct commercial application from Cal.diy. [Pricing](https://cal.com/pricing).
  [Pricing tiers, organization and product reasons](../products/cal-com.md).
- [Calendly](https://calendly.com): USD 10/seat/month, annual billing. Standard $10/seat/month billed annually; free plan exists. [Pricing](https://calendly.com/pricing).

### Easy!Appointments — A

Documented application is free/open source; commercial offerings are hosting, support and commissioned customization. No packaged paid edition feature gate identified in official FAQ/features. Custom work can add capabilities absent from standard application.

License: GPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/alextselegidis/easyappointments/blob/f6c8a4c2f364bf8c64b1f913a531a7134dcfd3c6/LICENSE), [edition evidence](https://easyappointments.org/features/), [hosting](https://easyappointments.org/), [repository](https://github.com/alextselegidis/easyappointments).

Repository: pushed 2026-10-19T12:47:00Z; latest commit 2026-10-19T08:29:46Z; latest published release 1.6.1 (2026-10-19T08:45:26Z). Quick analysis: 5.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Cal.com → Easy!Appointments: **partial**. Service/provider appointment booking, group sessions, Google/CalDAV sync and API/webhooks. Rebuild booking links, availability and integrations; no verified native import or equivalent sales routing/round-robin claim. [1](https://easyappointments.org/features/)
- Calendly → Easy!Appointments: **partial**. Service/provider appointment booking, group sessions, Google/CalDAV sync and API/webhooks. Rebuild booking links, availability and integrations; no verified native import or equivalent sales routing/round-robin claim. [1](https://easyappointments.org/features/)

### Cal.diy — C

Former calcom/cal.com repository is now MIT Cal.diy, with commercial code removed. Classified C relative to Cal.com because routine team workflows are missing. Vendor recommends personal/non-production use; this recommendation does not override MIT commercial permission.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/calcom/cal.diy/blob/0f19cc46ef6b6426ee398c670575b3c96be7af9e/LICENSE), [edition evidence](https://www.cal.diy/), [hosting](https://github.com/calcom/cal.diy), [repository](https://github.com/calcom/cal.diy).

[Sponsors, requirements, installation options, pricing and product profile](../products/cal-diy.md).

Paid restrictions: Cal.com-only: teams and round-robin/collective scheduling; Cal.com-only: managed events, workflows and routing forms; Cal.com-only: insights, organizations, SAML/SCIM and admin panel

Repository: pushed 2026-10-19T18:46:00Z; latest commit 2026-10-19T18:45:59Z; latest published release v6.2.0 (2026-03-01T23:49:01Z). Quick analysis: 5.6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Cal.com → Cal.diy: **partial**. Individual scheduling with calendar/video integrations, paid events and embeds. Team scheduling, workflows and routing excluded; vendor recommends personal/non-production use. Reconfigure credentials and booking pages; native migration parity unverified. [1](https://www.cal.diy/)
- Calendly → Cal.diy: **partial**. Individual scheduling with calendar/video integrations, paid events and embeds. Team scheduling, workflows and routing excluded; vendor recommends personal/non-production use. Reconfigure credentials and booking pages; native migration parity unverified. [1](https://www.cal.diy/)

[Category research and unresolved questions](../../research/categories/scheduling.json) · [Research audit](../../research/audits/scheduling.md)
