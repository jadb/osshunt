> Temporary paths normalized; local setup omitted. Exact original retained locally.

# Ghost research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Opened current Ghost pricing, About, Ubuntu production installation, preview Docker installation and Partners.
3. Searched `site.ghost.org sponsors DigitalOcean`; verified sponsor page plus GitHub Sponsors lead.
4. Opened official DigitalOcean installation and located exact marketplace app link; no deployment performed.
5. Compared Business plan card with feature table: member allowance inconsistent; preserved audience setting caveat, no invented monthly-billed rate.

## Source review and decisions
- Open/read `https://ghost.org/about/`; public locator: non-profit organisation. Decision: Ghost founded in April 2013 by John O’Nolan and Hannah Wolfe.
- Open/read `https://ghost.org/about/`; public locator: shareholders or investors. Decision: Nonprofit foundation cannot be bought or sold under its constitution.
- Open/read `https://ghost.org/about/`; public locator: It’s a sustainable open source model. Decision: Ghost describes itself as financially self-sufficient through Ghost(Pro) revenue.
- Open/read `https://github.com/TryGhost/Ghost`; public locator: README; MIT license. Decision: Open-source core: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://ghost.org/pricing/`; public locator: Ghost(Pro) plans & pricing. Decision: No explicit Most popular or Recommended designation verified on the current public pricing page.
- Open/read `https://ghost.org/pricing/`; public locator: Business plan card. Decision: Business: published; monthly=None; annual total=2388; USD/publication up to 1,000 members (card setting). Ghost(Pro) commercial managed service, distinct from free code. $199/month billed yearly ×12; card and comparison table have differing member limits, confirm selected audience at checkout.
- Open/read `https://ghost.org/pricing/`; public locator: Custom plan card. Decision: Custom: quote; monthly=None; annual total=None; USD/publication. Custom configuration and member limits; Get in touch for pricing.
- Open/read `https://ghost.org/pricing/`; public locator: Paid subscriptions; Premium tiers. Decision: Membership tiers and Stripe subscriptions let publications run gated content and paid reader relationships.
- Open/read `https://ghost.org/pricing/`; public locator: Email Newsletters. Decision: Native email newsletters combine publishing and subscriber delivery in one editorial workflow.
- Open/read `https://ghost.org/pricing/`; public locator: Social web distribution; Recommendations. Decision: ActivityPub distribution and publication recommendations provide built-in readership discovery workflows.
- Open/read `https://ghost.org/pricing/`; public locator: Audience; Growth. Decision: Its publication and membership specialization plus reader-discovery integrations can create workflow switching costs for independent publishers.
- Open/read `https://ghost.org/partners/`; public locator: Ghost Partners. Decision: Official partners page thanks businesses providing services and sponsorships; DigitalOcean powers Ghost(Pro), and Fastly is listed. These are not equity investors.
- Open/read `https://ghost.org/partners/`; public locator: Ghost Partners. Decision: DigitalOcean: corporate-sponsor
- Open/read `https://ghost.org/partners/`; public locator: Ghost Partners. Decision: Fastly: corporate-sponsor
- Open/read `https://docs.ghost.org/install/ubuntu/`; public locator: Prerequisites. Decision: Node.js supported LTS: required. Always. Use supported Node release for the installed Ghost major.
- Open/read `https://docs.ghost.org/install/ubuntu/`; public locator: Prerequisites. Decision: MySQL 8.0 or 8.4: required. Always. Production database; SQLite is not represented as supported production alternative.
- Open/read `https://docs.ghost.org/install/ubuntu/`; public locator: Prerequisites. Decision: NGINX: conditional. Recommended Ubuntu Ghost-CLI stack. Minimum 1.9.5 for SSL.
- Open/read `https://docs.ghost.org/install/ubuntu/`; public locator: Prerequisites. Decision: systemd: conditional. Ubuntu Ghost-CLI stack. Documented deployment component.
- Open/read `https://docs.ghost.org/install/docker/`; public locator: What’s included?. Decision: Docker Compose and Caddy: conditional. Alternative preview Docker stack. Replaces CLI NGINX/systemd setup; MySQL remains.
- Open/read `https://docs.ghost.org/install/docker/`; public locator: Enabling Web Analytics; Get Tinybird setup. Decision: Tinybird: optional. For Docker web analytics. External analytics service account; distinct from Ghost core.
- Open/read `https://docs.ghost.org/install/docker/`; public locator: Enabling Social Web (ActivityPub). Decision: ActivityPub service: optional. For social web features. Docker can self-host; CLI uses Ghost(Pro) hosted ActivityPub service.
- Open/read `https://docs.ghost.org/install/ubuntu/`; public locator: Prerequisites. Decision: {'cpu': None, 'memory': '1 GB minimum', 'storage': None, 'os': 'Ubuntu 22.04, 24.04 or 26.04 recommended', 'notes': 'Official CLI prerequisite: at least 1 GB RAM; CPU and disk minimum not specified.'}
- Open/read `https://docs.ghost.org/install/digitalocean/`; public locator: Overview. Decision: offered. Verified officially linked DigitalOcean app; Ghost-CLI is a separate command-driven install.
- Open/read `https://docs.ghost.org/install/digitalocean/`; public locator: Overview; Setting up the marketplace app. Decision: DigitalOcean Ghost marketplace app: marketplace. Official docs call it an officially supported 1-click app; account, SSH and domain configuration still required.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.

## Independent source review integration

Official partner thanks roster includes these service/sponsorship businesses alongside DigitalOcean/Fastly. Services versus cash are not individually specified; these are explicit ongoing-work acknowledgments, not inferred customers or integrations. Sources: https://ghost.org/partners/
Reviewed exact browser requests, locators and failures in the shared profile review record. Applied with the review integration helper; retained original evidence and appended correcting claims. No historical builder rerun.

Shared full review transcript: research/profile-review.md ; primary source locators and query/fetch failures retained there. Integration used the review helper to update profile fields and append evidence.
