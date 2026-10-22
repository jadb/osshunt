# Independent profile source review — 2026-10-21

The reports below retain findings, primary-page locators, failed fetches and review steps. Temporary paths are normalized; exact originals remain local. Proposed corrections were checked during integration. All documented corporate supporter additions and scoped usage-rate corrections were applied; nonprofit/unverified identities remain excluded with explicit notes. The price contract now allows a published metered add-on alongside a quoted subscription base, with a separate usage denominator. A quote never becomes an invented seat subscription. Targeted review does not assert exhaustive worldwide donor or investor discovery.

## Organization, pricing and dependency review

# Independent catalog QA — 2026-10-21

Scope: completed imported profiles under research/profiles, with research set01 through research set07 and research set09 source records as leads. Read-only review; no profile, ledger, repository, or shared-file changes. research set08 latest work remains authoritative and was excluded from this independent report. Findings below are concrete corrections supported by pages actually read. This is targeted QA, not a claim that every sponsor directory or product was exhaustively researched.

## Actionable findings

### 1. keycloak — omitted explicit corporate in-kind sponsor

Field: alternativeDetails.sponsorship.status, organizations, notes, sources. Current imported record says none-found and has no organizations, despite citing the page containing the acknowledgment.

Correction: status identified; add **ej-technologies**, URL https://www.ej-technologies.com/, relationship corporate-sponsor. Explain donated JProfiler licenses to core-team members, not equity or a cash commitment.

Evidence: https://www.keycloak.org/community — public heading **Thanks!**, searchable phrase **ej-technologies**, line63 in extracted page. This is the sole named corporate donor in that acknowledgment block; generic thanks to GitHub contributors are not a GitHub sponsorship claim.

### 2. krita — six omitted corporate donors/grant providers

Field: alternativeDetails.sponsorship.organizations and notes. Current record lists only Intel and FossHub. Its notes say historical grants are listed separately on the page, but those verified corporate contributors are absent from the structured list.

Evidence: https://krita.org/en/sponsors/ — **Current Sponsors**. Complete named page inventory, with date scope retained:

| Name | Evidence / scope |
| --- | --- |
| **Epic Games** (Epic Mega Grants) | 2019 grant, USD25,000 |
| **Intel** | Corporate gold sponsor in2022; already present |
| **Broken Rules** | 2023 sponsorship, EUR5,000 |
| **Gamechuck** | 2019 sponsorship |
| **FossHub** | Monthly donation from2019 onward; already present |
| **Agile Coach** | 2018 sponsorship |
| **Private Internet Access** | 2017 donation, GBP20,000 |
| **xoio** | 2017 sponsorship |
| **ASIFA-Hollywood** | 2017 and2018 sponsorship; named organization, not independently established here as a business, so keep separate from the corporate-only list |

Add the six omitted verified business names. Preserve historical years; the current page heading does not establish that each old one-time donor still pays in2026. These are grants/donations, not equity investors. Public organization links provided by page: https://www.unrealengine.com/en-US/megagrants , https://brokenrul.es/ , https://game-chuck.com/ , https://agile.coach/ , https://xoio.de/ . Private Internet Access name appears in text without a corporate link.

### 3. wordpress — staff-time sponsorship omitted

Field: alternativeDetails.sponsorship.organizations and notes. Current record lists only Salesforce. Add **XWP**, **Bluehost**, and **Multidots** as corporate-sponsor, with explicit in-kind staff-contribution scope.

Evidence: https://wordpress.org/five-for-the-future/ — **Contributor experiences**, each **Sponsored by** label: XWP sponsors Milana Cap; Bluehost sponsors Jonathan Desrosiers; Multidots sponsors Pooja Bhimani, whose Gutenberg contribution is40hours/week. The same page's **Salesforce empowers WordPress** block supports the existing Salesforce Slack contribution. These four are all named sponsor businesses on that main page.

The separate https://wordpress.org/five-for-the-future/sponsorships/ page, heading **Organizations Supporting WordPress Infrastructure**, names Salesforce only because it covers infrastructure resources; it does not negate staff sponsorship. Keep cash, infrastructure value, and staff time distinct.

The linked https://wordpress.org/five-for-the-future/pledges/ directory reports307 pledges across11pages and presents a random first-page sample. Those pledges are evidence of declared contributions, not an independent audit of delivered hours. Do not claim the main-page four are an exhaustive worldwide sponsor list. Do not silently promote every personal directory entry into a verified corporation. The concrete omission above is established without that inference.

### 4. drupal — verified business in-kind contributors omitted

Field: alternativeDetails.sponsorship.organizations and notes. Current imported record lists Acquia only.

Add **Acro Commerce**, URL https://www.acrocommerce.com/, relationship corporate-sponsor, explicitly in-kind developer time. Evidence: https://www.acrocommerce.com/solutions/drupal-and-drupal-commerce — **Drupal and Drupal Commerce. It's what we do.**, searchable **4,000+ developer hours donated back to Drupal annually**. This is an actual donated-resource statement, not merely agency/customer status. Its Signature Supporting Partner badge is supplementary.

Add **Zoocha**, URL https://www.zoocha.com/, relationship corporate-sponsor if in-kind sprint-space provision is included. Evidence: https://www.zoocha.com/systems-partnerships — **Diamond Certified Drupal Partner**, searchable **offer up our office space for Drupal "code sprints"**. Scope the claim to contributed event/development space, without inventing a cash amount or ongoing schedule. The current page says Diamond, not the older search excerpt's Signature tier; avoid copying the stale excerpt.

Acquia remains supported by the existing2026 funding announcement. These are all corporate contributors explicitly established on the targeted pages read, not an exhaustive Drupal Association partner inventory. Central supporter-directory attempts failed; no completeness assertion is justified.

### 5. intercom — published outcome rates missing from structured pricing

Field: pricingTiers entry/business/enterprise usagePrice and unit/notes. Base subscriptions are retained: Essential USD348/seat/year, Advanced USD1,020/seat/year, Expert USD1,584/seat/year, each derived from annual-billed monthly display. Entry notes mention USD0.99/outcome, while Advanced and Expert notes only say usage extra; none exposes usagePrice.

Correction: add usagePrice0.99 to the three applicable rows and distinguish **base per seat; usage per Fin outcome** in unit/notes. Preserve **from** qualifier; other channel usage is separate. Do not turn outcomes into seats or multiply the rate by12.

Evidence: https://www.intercom.com/pricing — Essential, Advanced and Expert plan cards: Fin **From $0.99 per outcome**, plus the respective seat subscription. Source supports concurrent seat base and metered outcome charge.

### 6. postman — Enterprise AI overage missing from structured pricing

Field: pricingTiers enterprise usagePrice. Current row correctly keeps the Enterprise subscription quote-only and mentions USD0.035/credit in notes, but usagePrice is null; Solo/Team already expose their corresponding0.05/0.04rates.

Correction: usagePrice0.035, precise unit **AI overage per credit**, retain subscription status quote and volume-pricing qualifier. No numeric Enterprise base should be invented.

Evidence: https://www.postman.com/pricing/ — **Comparison Table**, row **Postman AI overages (Pay-as-you-go)**, Enterprise column **$0.035 / credit (volume pricing available)**.

### 7. firebase — scoped published usage rate can replace an all-unknown display

Field: pricingTiers business usagePrice, status, unit, scope. Current Blaze row has no numeric amount/statusunknown while its own notes already quote App Hosting rates.

Correction within the existing four-role schema: expose usagePrice0.15 with unit **GiB of cached App Hosting outgoing bandwidth after the10GiB/month no-cost allowance**; scope explicitly to **Blaze example: App Hosting cached outgoing bandwidth**, status published. Keep uncached USD0.20/GiB in notes and state that Blaze has many service-specific rates and no single subscription total. Do not present0.15 as the price of all Firebase usage. If preserving aggregate Blaze scope, retain unknown aggregate total but provide this scoped metered rate in an appropriately separate rendering instead.

Evidence: https://firebase.google.com/pricing — **App Hosting**, **Outgoing bandwidth**, cached/uncached rows; rates effective August1,2025. The same page distinguishes classic **Hosting** using GB from **App Hosting** using GiB; keep units exact.

## Checks resolved without a correction

- **kanboard**: official requirements really include experimental SQL Server as well as SQLite, MySQL/MariaDB, PostgreSQL. Existing experimental qualifier resolves the apparent contradiction. Source: https://docs.kanboard.org/v1/admin/requirements/ .
- **headscale**: official FAQ supports the record's PostgreSQL maintenance-mode qualification; do not relabel unsupported solely from memory. Sources: https://headscale.net/stable/about/faq/ and https://headscale.net/stable/setup/requirements/ .
- **opensign**: official DigitalOcean installer is a genuine documented platform route; source itself warns about its nonpersistent MongoDB configuration. Existing notes capture that limitation. Source: https://docs.opensignlabs.com/docs/self-host/One-click-Install/DigitalOcean/ .
- **bookstack**: official Ubuntu scripts are automated shell installers requiring download/permission/execution and fresh-server preparation. They should not be called true one-click. The installation page lists Cloudron/YunoHost and other platforms but explicitly disclaims testing/vetting/support. Cloudron marketplace returned no extractable body and YunoHost fetch failed; no new verified marketplace option asserted. Source: https://www.bookstackapp.com/docs/admin/installation/ , headings **Ubuntu24.04 Installation Script** and **Other Hosting Options**. Optional cache/session backends and S3-like storage are documented there; local filesystem baseline remains valid.
- **mermaid**, **restic**, **kopia**, **wekan**: targeted official sponsorship/repository checks did not establish an omitted named corporate donor. GitHub Sponsors aggregation does not mean GitHub itself donated. Image-only/empty sponsor extraction is not evidence that no sponsors exist.
- Organization ownership/age review sampled airtable, intercom, harvest, talentlms, keycloak, kdenlive, mermaid, restic, kopia, freescout, wordpress, drupal, krita, node-red, zammad. No additional source-backed material contradiction established. Future2026 ownership changes documented in records were not rejected using older recollection.
- Product-reason text screen and focused self-host review found no additional verified material violation worth reporting. GIMP and mailcow known issues remained outside this pass, per review scope.

## Chronological audit

Local review operations, in order:
1. Read profile inventory; compared organization fields and sponsorship status/name arrays across imported records.
2. Read full organization/sponsorship objects for the ownership sample named above.
3. Read all alternative runtime dependency necessity groups and installation options; focused on explicit defaults versus alternatives.
4. Read full alternatives for bookstack, kanboard, opensign, wekan, headscale, keycloak, budibase, formbricks, stirling-pdf, onlyoffice-docs, node-red, n8n. Large output truncated; did not treat truncation as evidence.
5. Filtered paid pricing rows mentioning usage, then read intercom, postman, firebase, moodle pricing and headscale requirements.
6. Screened productReasons for hosting/support/deployment wording, then inspected apparent matches in context. Coolify's deployment workflow remains a functional product benefit.
7. Mapped suspect IDs to assigned source-group inputs.
8. Browser requests below were performed sequentially, using primary official/project/company sources. Public-page locators above carry the evidence; internal result IDs below are only exact request audit.
10. Final targeted source reopen/find requests confirmed exact locators, current Zoocha tier, and rate units. Wrote this report only.

Known fetch/extraction failures and resulting decisions:
- Drupal Association /association/supporters/partners unavailable; /association/supporters timeout/400. Used two company-owned explicit in-kind contribution statements, without implying complete directory coverage.
- Cloudron BookStack marketplace returned zero text lines on initial and repeated requests. YunoHost install-app target returned Internal Error. Did not infer install capability from inaccessible content.
- Wekan sponsor page yielded headings/image references without corporate identities; retained uncertainty.
- GitHub repository find results did not establish restic/kopia corporate sponsorship; no inference from absence of a matching string.
- Zoocha search excerpt mentioned Signature Supporting Partner, but current full page says Diamond Certified Drupal Partner and gives sprint-space evidence. Current page governs report.

Exact recorded browser request arguments, chronological:

```json
[
  {
    "open": [
      {
        "ref_id": "https://docs.kanboard.org/v1/admin/requirements/"
      },
      {
        "ref_id": "https://www.bookstackapp.com/docs/admin/installation/"
      },
      {
        "ref_id": "https://www.keycloak.org/community"
      },
      {
        "ref_id": "https://krita.org/en/sponsors/"
      },
      {
        "ref_id": "https://wordpress.org/five-for-the-future/"
      },
      {
        "ref_id": "https://nodered.org/about/"
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://github.com/mermaid-js/mermaid"
      },
      {
        "ref_id": "https://github.com/restic/restic"
      },
      {
        "ref_id": "https://github.com/kopia/kopia"
      },
      {
        "ref_id": "https://wekan.fi/sponsors/"
      },
      {
        "ref_id": "https://www.drupal.org/association/supporters/partners"
      }
    ],
    "find": [
      {
        "ref_id": "turn722view1",
        "pattern": "Ubuntu 24.04"
      },
      {
        "ref_id": "turn722view4",
        "pattern": "Sponsored by"
      }
    ],
    "response_length": "long"
  },
  {
    "find": [
      {
        "ref_id": "turn722view1",
        "pattern": "Cloudron"
      },
      {
        "ref_id": "turn723view0",
        "pattern": "Sponsors"
      },
      {
        "ref_id": "turn723view1",
        "pattern": "Thanks"
      },
      {
        "ref_id": "turn723view2",
        "pattern": "Sponsors"
      }
    ],
    "open": [
      {
        "ref_id": "https://www.drupal.org/association/supporters"
      },
      {
        "ref_id": "https://headscale.net/stable/setup/requirements/"
      },
      {
        "ref_id": "https://docs.opensignlabs.com/docs/self-host/One-click-Install/DigitalOcean/"
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://www.postman.com/pricing/"
      },
      {
        "ref_id": "https://firebase.google.com/pricing"
      },
      {
        "ref_id": "https://www.intercom.com/pricing"
      },
      {
        "ref_id": "https://headscale.net/stable/about/faq/"
      }
    ],
    "click": [
      {
        "ref_id": "turn726view1",
        "id": 12
      },
      {
        "ref_id": "turn722view4",
        "id": 30
      },
      {
        "ref_id": "turn722view1",
        "id": 113
      },
      {
        "ref_id": "turn722view1",
        "id": 106
      }
    ],
    "response_length": "long"
  },
  {
    "search_query": [
      {
        "q": "site.drupal.org \"Supporting Partner\" \"Deloitte\""
      },
      {
        "q": "site.drupal.org \"Signature Supporting Partner\""
      },
      {
        "q": "site.mermaid.js.org \"sponsor\""
      },
      {
        "q": "site.wekan.fi/sponsors \"Sponsor\""
      }
    ],
    "find": [
      {
        "ref_id": "turn732view4",
        "pattern": "sponsor"
      },
      {
        "ref_id": "turn732view3",
        "pattern": "maintenance"
      },
      {
        "ref_id": "turn732view5",
        "pattern": "Sponsors"
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://wordpress.org/five-for-the-future/sponsorships/",
        "lineno": 50
      },
      {
        "ref_id": "https://www.zoocha.com/systems-partnerships"
      },
      {
        "ref_id": "https://www.acrocommerce.com/solutions/drupal-and-drupal-commerce"
      }
    ],
    "click": [
      {
        "ref_id": "turn722view4",
        "id": 29
      }
    ],
    "response_length": "long"
  },
  {
    "find": [
      {
        "ref_id": "https://www.zoocha.com/systems-partnerships",
        "pattern": "Signature Supporting"
      },
      {
        "ref_id": "https://wordpress.org/five-for-the-future/pledges/",
        "pattern": "Automattic"
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://www.zoocha.com/systems-partnerships",
        "lineno": 220
      },
      {
        "ref_id": "https://www.acrocommerce.com/solutions/drupal-and-drupal-commerce",
        "lineno": 20
      },
      {
        "ref_id": "https://krita.org/en/sponsors/",
        "lineno": 30
      },
      {
        "ref_id": "https://wordpress.org/five-for-the-future/",
        "lineno": 90
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://www.cloudron.io/store/com.bookstackapp.cloudronapp.html"
      }
    ],
    "find": [
      {
        "ref_id": "https://www.bookstackapp.com/docs/admin/installation/",
        "pattern": "Cloudron"
      },
      {
        "ref_id": "https://www.keycloak.org/community",
        "pattern": "JProfiler"
      },
      {
        "ref_id": "https://www.postman.com/pricing/",
        "pattern": "0.035"
      },
      {
        "ref_id": "https://firebase.google.com/pricing",
        "pattern": "$0.15/GiB"
      }
    ],
    "response_length": "long"
  }
]
```

Recent exact local command requests retained:

```text


python3 - <<'PY'
import json,pathlib
p=pathlib.Path('research/profiles')
for i in ['keycloak','krita','wordpress','drupal','bookstack','intercom','postman','firebase']:
 d=json.loads((p/(i+'.json')).read_text()); print(i)
 if d.get('alternativeDetails'): print(json.dumps(d['alternativeDetails']['sponsorship']))
 else: print(json.dumps(d['pricingTiers']))
PY
```

No repository edits, commits, pushes, PRs, destructive commands, or external messages.


## Sponsor completeness review

# Final sponsorship coverage QA
Checked 2026-10-21. Read-only review; no profile changes. Scope excludes research set09 and research set10; prior QA handles Keycloak/Krita/WordPress and GIMP already corrected.

## Material corrections

### obs-studio — omitted current named project sponsors
Source: https://obsproject.com/contribute — **PREMIER TIER SPONSORS**, **DIAMOND TIER SPONSORS**, **GOLD TIER SPONSORS**. Hydrated browser snapshot resolves logo links omitted from static fetch. These are project sponsors, not merely event sponsors. Keep existing Multi Media LLC.

| Organization / displayed brand | Public URL | Explicit tier/scope |
|---|---|---|
| YouTube | https://www.youtube.com/ | Premier project sponsor |
| Logitech | https://www.logitech.com | Premier project sponsor |
| Twitch | https://twitch.tv | Premier project sponsor |
| NVIDIA | https://www.nvidia.com/broadcast | Diamond project sponsor, tier pledge at least$50,000/year |
| Advanced Micro Devices (AMD) | https://www.amd.com/ | Diamond project sponsor |
| Intel | https://intel.com | Diamond project sponsor |
| Yamaha | https://www.yamaha.com/2/ag/ | Diamond project sponsor |
| Steinberg | https://www.steinberg.net/ | Diamond project sponsor |
| Overwolf | https://www.overwolf.com/ | Gold project sponsor, tier pledge at least$20,000/year |

Additional verified Bronze sponsor: **Releaf Dispensary Ltd**, URL https://releaf.co.uk/medical-cannabis-glossary . The OBS logo/link label is “medical-cannabis-glossary”; target page footer explicitly identifies Releaf Dispensary Ltd. Bronze tier pledge at least$250/month. Add with both OBS source and target footer identity source. Gold guest-41b944fe has no public name/link; excluded. Do not infer Fastly sponsorship solely from downloads-provider footer.


### restic — none-found should identify AppsCode
Source: https://raw.githubusercontent.com/restic/restic/master/README.md — **Sponsorship** (last section). **AppsCode Inc.**, https://appscode.com/ . Explicitly sponsors backend integration tests for Google Cloud Storage and Microsoft Azure Blob Storage. This is narrowly scoped in-kind infrastructure/test sponsorship, not an inferred relationship from storage support. AppsCode commercial identity confirmed by company home page.

### excalidraw — omitted free-service and financial sponsors
Sources: https://raw.githubusercontent.com/excalidraw/excalidraw/master/README.md — **Thank you for supporting Excalidraw**, final paragraph; https://opencollective.com/excalidraw — **Top financial contributors / Organizations** and **Our contributors**.

Explicit README companies providing services free: **Vercel** https://vercel.com ; **Sentry** https://sentry.io ; **Crowdin** https://crowdin.com . These satisfy in-kind sponsorship; no inference from generic integration badges.

Additional financial business donors beyond existing Datadog/CraftDocs/Slite/MATHEMA:

| Name | Public URL | Scope verified |
|---|---|---|
| Agendalink.com | https://www.agendalink.com/ | OC cumulative donor$3,100 sinceSep2023; sponsor badge |
| Scott Logic Ltd. | https://www.scottlogic.com/ | OC cumulative donor$3,000 sinceSep2021; commercial consulting home verified |
| sipgate GmbH | https://opencollective.com/sipgate | OC cumulative donor$1,725 sinceJan2021; September2026 monthly backer transaction verified |
| Improving | https://opencollective.com/improving | OC cumulative donor$1,700 sinceFeb2021; explicitly software consulting company |
| Eraser | https://www.eraser.io/ | OC cumulative donor$1,500 sinceJun2021; commercial diagramming platform verified |
| Taskade | https://opencollective.com/taskade | OC cumulative donor$1,200 sinceApr2020; verified2020–2021 monthly sponsor history, no2026 recurring assertion |

**Logseq** also appears as$2,900 sinceMar2021 donor, but OC profile is a collective and product homepage empty in extraction; corporate-business identity not independently established here. Flag for further verification; do not automatically equate collective with corporation. All OC totals are lifetime financial recognition, not proof every donor currently recurs.

### ghost — roster sampled at2 of14
Source: https://ghost.org/partners/ — **Ghost Partners** opening explicitly thanks companies providing services and sponsorships to ongoing work. Existing DigitalOcean/Fastly retained. Add all remaining12 named businesses as official service/sponsorship supporters (cash versus services not individually specified):

| Name | Public URL |
|---|---|
| Tinybird | https://tbrd.co/ |
| Ahrefs | https://ahrefs.com/ |
| 1Password | https://1password.com/ |
| Netlify | https://netlify.com/ |
| Zapier | https://zapier.com/ |
| Tuple | https://tuple.app/ |
| Shopify | https://shopify.com/ |
| BairesDev | https://www.bairesdev.com/ |
| Icons8 | https://icons8.com/ |
| Clay | https://clay.global/ |
| BuiltWith | https://builtwith.com/ |
| Segment.io | https://segment.io/ |

These are in the official thanks roster, not inferred from Ghost integrations/customers.

### borgbackup — business fallback omits financial donors
Source: https://opencollective.com/borgbackup — **Top financial contributors / Organizations**. **Arcanite**, https://opencollective.com/arcanite : cumulative€1,750 sinceDec2023; donor profile explicitly software development company, transactions confirm2023/2024 contributions. **SWEETGOOD**, https://opencollective.com/sweetgood : cumulative€215 sinceApr2023, explicitly IT consulting; May–July2026 monthly contributions verified. Change business-fallback to identified and describe historical/cumulative versus observed2026 recurring scopes. WaldmannEDV remains legitimate steward; no reason to recast it as an outside financial donor. GitHubSponsors payment aggregator excluded; TechTransThai business identity unresolved, excluded.

### suitecrm — omitted6 explicitly thanked business donors
Sources: https://suitecrm.com/join-the-project/suitecrm-community-sponsorship/ — **Thank you to all our sponsors**; https://opencollective.com/suitecrm — **Top financial contributors / Organizations**. Existing3 retained. Add **01systems**, **Jackal Software**, **server.camp**, **ComputerButler Germany UG**, **APPSInvent Inc.**, **Rad Web Hosting**. All directly named by project and corroborated as financial organizations. For public organization URLs use the project source itself where named profile is unavailable; loaded donor URLs: https://opencollective.com/jackal-software , https://opencollective.com/servercamp , https://opencollective.com/radwebhosting . Financial contributions are cumulative/historical (2020–2025 starts), not all current subscription pledges. Original roster only selected$1,000+ logo placements and missed smaller explicitly thanked businesses.

### mautic — omitted13 corporate financial members
Sources: https://mautic.org/members-partners/ and https://mautic.org/members-partners/?e-page-c9143cd=2 — **Members & Partners**. Heading explicitly says corporate members financially support and partners provide financial plus practical contributions. Names hidden in logo/image links in static extraction; hydrated browser snapshots resolve names/links and both pages. Thus provider listings qualify here because of explicit financial membership definition, not just marketplace presence.

| Name | Official public profile URL | Membership scope |
|---|---|---|
| Leuchtfeuer Digital Marketing | https://mautic.org/member/leuchtfeuer-digital-marketing/ | Platinum Member; featured partner |
| Webmecanik | https://mautic.org/member/webmecanik/ | Gold Member; partner |
| Sales Snap | https://mautic.org/member/sales-snap/ | Community Member; partner |
| Axelerant | https://mautic.org/member/axelerant/ | Community Member |
| Droptica | https://mautic.org/member/droptica/ | Community Member |
| Eyedro Green Solutions Inc. | https://mautic.org/member/eyedro-green-solutions/ | Community Member |
| Fire Multimedia | https://mautic.org/member/firemultimedia/ | Community Member |
| Data Innovation | https://mautic.org/member/data-innovation/ | Community Member |
| Hostnet | https://mautic.org/member/hostnet/ | Community Member |
| Collabora Productivity / Collabora Office | https://mautic.org/member/collabora-office/ | Community Member |
| Stepin Solutions | https://mautic.org/member/stepin-solutions/ | Community Member |
| SignPresenter | https://mautic.org/member/signpresenter/ | Community Member |
| OPEN | https://mautic.org/member/open/ | Community Member |

Existing Dropsolid/Friendly/Aivie retained. Acquia appeared in static source but absent hydrated page1; retain qualified existing evidence pending fuller status research, not enough to assert cancellation. Member-profile fetch timeout for Leuchtfeuer does not negate working directory evidence.

### postiz — omitted2 current explicit repository sponsors
Source: https://raw.githubusercontent.com/gitroomhq/postiz-app/main/README.md — **Our Sponsors** and **Sponsor Postiz**. Add **ChatbotX**, https://chatbotx.io/ ; **RapidProxy**, https://www.rapidproxy.io/ . Both explicitly in sponsor table beside existing Hostinger/Virlo. SponsorPostiz explains paid repository logo/backlink placements. Treat as project sponsorship/advertising, not customers or OAuth providers.

## Sweep scope and limitations
All remaining none-found/unknown entries were directly rechecked: copyparty,darktable,FreeScout,headscale,Kanboard,Kdenlive,Kopia,Mermaid,OpenCATS,PDFarranger,restic,vaultwarden; Keycloak intentionally delegated elsewhere. Only restic yielded firm new corporate sponsor. No absence claim strengthened from failed page. Identified rosters directly checked: OBS,Authelia,Excalidraw,Ghost,Mautic,SuiteCRM,Postiz,Screenity,Paperless; existing OpenedX/Zulip/Formbricks qualifications inspected. Drupal old directory fetches failed and new sustaining roster lacked static entries then browserClientChallenge; no automatic donor additions from generic certified-partner or conference listings. This was a focused sweep, not exhaustive live crawl of every business fallback.

## Chronological audit
1. `exec_command`: Python read-only inventory of `research/profiles/*.json`, excluding own20; printed sponsorship status/organizations/source arrays. Inspected input research set10 IDs to exclude last group.
2. `web.open`: https://headscale.net/stable/about/sponsor/ ; https://opencollective.com/mermaid ; https://kdenlive.org/fund/ ; https://kanboard.org/ ; https://github.com/kopia/kopia . Headscale donation request no named company; Kdenlive community fund no named company. Mermaid only payment aggregator GitHub Sponsors, not attributable donor.
3. `exec_command`: list `temporary-research`; read research set10 input IDs. No profile mutation.
4. `web.open`: current raw README URLs https://raw.githubusercontent.com/9001/copyparty/hovudstraum/README.md ; https://raw.githubusercontent.com/darktable-org/darktable/master/README.md ; https://raw.githubusercontent.com/freescout-help-desk/freescout/master/README.md ; https://raw.githubusercontent.com/restic/restic/master/README.rst ; https://raw.githubusercontent.com/dani-garcia/vaultwarden/main/README.md ; https://raw.githubusercontent.com/pdfarranger/pdfarranger/main/README.md . Restic .rst404; fallback .md later succeeded.
5. `web.find(pattern=sponsor)` on copyparty/darktable/FreeScout/vaultwarden/PDFarranger raw READMEs: no match. Kanboard Donations clicked to https://kanboard.org/donations.html — request for contributions, no roster.
6. `web.open`: https://obsproject.com/contribute static text shows tier headings but omits logos. Guessed https://www.asterisk.org/community/sponsors/ inaccessible; https://drupal.org/association/supporters inaccessible.
7. `web.search` queries: `site.darktable.org sponsors`; `site.kopia.io sponsors`; `site.mermaid.js.org sponsors`; `site.obsproject.com sponsors YouTube Twitch NVIDIA`. Search supplied official OBS2019NVIDIA/2024YouTube historical posts; historical alone not treated current. Read https://mermaid.js.org (now links mermaid.ai), https://www.darktable.org/contact/ and /about/ as search excerpts; no named corporate donor evidence.
8. `web.open`: https://raw.githubusercontent.com/restic/restic/master/README.md ; https://www.opencats.org/ ; https://obsproject.com . No named new donors in firsttwo; OBS home static again omitted logos.
9. `Playwright.browser_navigate(url=https://obsproject.com/contribute)` then `browser_snapshot({})`: explicit hydrated names/URLs under sponsor tiers establish OBS correction. Snapshot includes additional unnamed guest and ambiguous Releaf label, not blindly counted.
10. `web.search` queries: `site.drupal.org "supporting partners" "Diamond"`; `site.darktable.org "sponsorship"`; `site.kopia.io "support" "sponsor"`; `site.restic.net "sponsors"`. Results mostly irrelevant or old event material; no unsupported additions made.
11. `web.open`: https://mermaid.js.org ; https://www.borgbackup.org/support/fund.html . Borg explicitly says WaldmannEDV is maintainer company; funding links alone not proof sponsor omissions.
12. `web.open`: https://www.drupal.org/association/partners inaccessible; https://www.drupal.org/association/supporters timeout; https://restic.net ; https://kopia.io ; https://www.opencats.org/sponsors/ inaccessible. Restic/Kopia landing pages no named company sponsor found.

13. `web.open`: raw Excalidraw and Mermaid READMEs; Authelia About; Zulip History; Mautic Members&Partners. Excalidraw README has explicit free-service sponsor thanks. Authelia roster complete for active businesses; Balto expressly shut down (historical, not current omission). Mautic static extraction hides names in image links and paginates.
14. `web.find`: Mermaid Appreciation (library/individual thanks, not corporate grants); Zulip sponsor (no literal match); Mautic Member; Excalidraw sponsor. `web.open` Drupal Association succeeded; followed current program URLs instead of guessed dead URLs.
15. `web.open`: BorgBackup OC; actual financial organization donors found; followed Arcanite/SWEETGOOD/TechTransThai profiles. Arcanite explicitly software company, SWEETGOOD explicitly IT consulting and recurring2026 backer. TechTransThai identity insufficient; excluded. GitHub Sponsors is payment aggregation, excluded as donor identity.
16. `web.open`: Excalidraw OC Top financial contributors Organizations; clicked7 omitted organization profiles. Agendalink,ScottLogic,Eraser profile fetches returnedInternalError; Logseq,sipgate,Improving,Taskade profiles loaded. OC financial attribution itself remains readable.
17. `web.click`: Mautic Page2; Drupal CertifiedPartner/SustainingMember links. Drupal program explains annual donations, but roster absent static. `Playwright.navigate`+snapshot Mautic page1 resolves actual corporate member names and profileURLs. Page2 navigate+snapshot resolves8 more. Acquia appears in static fetched page1 but absent current hydrated page1; do not remove without full status research.
18. `web.open`: Restic README tail yields explicit AppsCode sponsorship, reversing earlier none-found assumption. Kopia raw README no sponsors. Drupal services directory timeout. Excalidraw sponsor-index redirect Cache miss.
19. `exec_command`: read sponsorship notes for open-edx,asterisk,zulip,ghost,suitecrm,formbricks. OpenedX2026event, ZulipGSoC and Formbricks2023accelerator already explicitly qualified historical/program/event; no corrective claim required.
20. `web.open`: Ghost Partners full roster and SuiteCRM Sponsorship full roster; clear omitted companies in both. SuiteCRM OC corroborates6 financial organizations; clicked profiles, some fetch failures. Full contributor totals are cumulative, not guaranteed current recurring status.
21. `web.open`: AppsCode company home; Agendalink and Eraser homes; ScottLogic non-www inaccessible and Logseq home empty text. `web.open` sipgate/Improving/Taskade OC profiles verifies corporate identity and historical/current transaction scope (Taskade2020–2021; sipgateSep2026).
22. `Playwright.navigate` Drupal SustainingMembers shows ClientChallenge; no bypass attempted. `web.open` current raw Screenity/Postiz/Paperless READMEs. Screenity/HelpKit and Paperless/Fyra already complete; Postiz has2 omitted named current sponsors.
23. `web.open` Releaf target glossary verifies commercial clinic website; `web.find(Ltd)` checked business identity. `web.click` SuiteCRM organization profiles: Jackal/servercamp/Rad loaded,01systems/ComputerButler/APPSInvent fetch errors; source project sponsorship page + financial OC roster still explicit.

24. `web.open` www.scottlogic.com succeeds after non-www failure; sponsor index0redirect stillCacheMiss. `web.find` ReleafLtd identifies ReleafDispensaryLtdfooter, so previous ambiguous Bronze candidate now verified. Logseq collective business identity remains deliberately unresolved.
25. Wrote final corrections and scoped negatives to this report only. No profiles changed.

## Final integration clarifications

- Mautic page1 supports Leuchtfeuer, Webmecanik, Sales Snap, Axelerant and Droptica; page2 supports Eyedro, Fire Multimedia, Data Innovation, Hostnet, Collabora Office, Stepin Solutions, SignPresenter and OPEN. Source routing confirmed from retained hydrated snapshots.
- Reopened https://obsproject.com/contribute during integration: static extraction shows Multi Media LLC under Bronze but omits many linked sponsor logos; hydrated roster supplies the other names.
- Executed the review integration helper against authoritative reviewed files, appending source-routed claims and per-product review notes. Historical builders were not rerun.
