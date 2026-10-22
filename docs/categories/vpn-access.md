# VPN and private network access

Identity-aware private connectivity for remote staff, devices and internal resources.

Audience: IT and security teams serving remote staff. Many employees benefit from private access, while product selection and operation primarily belong to network, IT and security teams; narrower buying audience than general business collaboration.

Use-case sources: [1](https://tailscale.com/pricing), [2](https://www.cloudflare.com/sase/products/access/), [3](https://docs.netbird.io/about-netbird/self-hosted-vs-cloud).

- [Cloudflare Access](https://www.cloudflare.com/sase/products/access/): USD 7/seat/month, annual billing. Pay-as-you-go $7/user/month paid annually. Product page also offers a free plan for teams under 50 users; paid product remains distinct from open-source connector software. [Pricing](https://www.cloudflare.com/sase/products/access/).
  [Pricing tiers, organization and product reasons](../products/cloudflare-access.md).
- [Tailscale](https://tailscale.com/pricing): USD 8/seat/month, monthly billing. Standard $8/seat/month. Resource and platform add-ons extra; Personal free plan is non-commercial. Monthly seat billing documented. [Pricing](https://tailscale.com/pricing).
  [Pricing tiers, organization and product reasons](../products/tailscale.md).

### Headscale — A

BSD-3-Clause self-hosted control server with no commercial edition or paid software gate found in official project docs. A applies to this narrow server, not enterprise Tailscale platform parity. No built-in web interface; clients are separate.

License: BSD-3-Clause; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/juanfont/headscale/blob/cc66979b16cfbdc76b1d582b028108bb8b823354/LICENSE), [edition evidence](https://headscale.net/stable/about/features/), [hosting](https://headscale.net/stable/), [repository](https://github.com/juanfont/headscale).

[Sponsors, requirements, installation options, pricing and product profile](../products/headscale.md).

Service costs/limits: Narrow single-tailnet Tailscale-compatible control-server scope; personal/lab/small-organisation focus.; Requires separately distributed compatible Tailscale clients; community web interfaces are separate projects.; No first-party hosted service identified in official project documentation.

Repository: pushed 2026-10-21T04:29:41Z; latest commit 2026-10-20T09:55:11Z; latest published release v0.29.5 (2026-10-13T13:05:15Z). Quick analysis: 7.3/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Tailscale → Headscale: **partial**. Use compatible Tailscale clients configured for a new Headscale control-server URL; re-register nodes and recreate policy, DNS and routes. One tailnet, small-organisation focus; no built-in web UI or promised enterprise-service parity. [1](https://headscale.net/stable/) [2](https://headscale.net/stable/about/clients/) [3](https://headscale.net/stable/ref/integration/web-ui/) [4](https://tailscale.com/pricing)

### NetBird Community Edition — B

OSI community code: root BSD-3-Clause excludes management, signal, relay and combined directories licensed AGPLv3. Core connectivity/access control/routing remain community features; documented enterprise administration, approval and observability gates warrant B. NetBird Cloud tiers are separate from self-hosted Enterprise licensing.

License: BSD-3-Clause AND AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/netbirdio/netbird/blob/b03d1c7d0794dec3d96072c98e01811535ace19a/LICENSE), [edition evidence](https://docs.netbird.io/selfhosted/enterprise), [hosting](https://docs.netbird.io/about-netbird/self-hosted-vs-cloud), [repository](https://github.com/netbirdio/netbird).

[Sponsors, requirements, installation options, pricing and product profile](../products/netbird.md).

Paid restrictions: Enterprise Commercial License: active-active HA, SCIM provisioning, EDR/MDM integration, traffic-flow logging/streaming, peer approval, audit-event streaming and notifications.

Service costs/limits: Self-hosters operate control plane and relays; hosting and relay bandwidth have infrastructure costs.; MSP multi-tenant management is cloud-only.

Repository: pushed 2026-10-21T22:35:24Z; latest commit 2026-10-21T18:37:48Z; latest published release v0.81.3 (2026-10-19T13:50:20Z). Quick analysis: 6.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Cloudflare Access → NetBird Community Edition: **different-approach**. Scope is remote private-network access through NetBird clients and access policies. Rebuild enrolment and resource rules and operate infrastructure. Cloudflare clientless application access, browser terminals and broader SASE services need separate evaluation; no full platform replacement claim. [1](https://www.cloudflare.com/sase/products/access/) [2](https://docs.netbird.io/about-netbird/self-hosted-vs-cloud) [3](https://docs.netbird.io/selfhosted/enterprise)
- Tailscale → NetBird Community Edition: **partial**. Re-enrol devices with NetBird clients and recreate identities, DNS, routing and access policies. Community includes networking but enterprise provisioning, approvals and flow observability require the commercial self-hosted license; Tailscale platform extensions are not interchangeable. [1](https://tailscale.com/pricing) [2](https://docs.netbird.io/selfhosted/enterprise) [3](https://docs.netbird.io/about-netbird/self-hosted-vs-cloud)

[Category research and unresolved questions](../../research/categories/vpn-access.json) · [Research audit](../../research/audits/vpn-access.md) · [Sourced claims](../../research/claims/vpn-access.jsonl)
