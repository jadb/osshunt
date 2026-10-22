> Temporary paths normalized; local setup omitted. Exact original retained locally.

# bynder research audit — 2026-10-21

## Method and scope
Research only. No repository edits, git actions, external messages or installs of the researched software. Public sources reviewed; private ownership/funding unknown unless evidenced. Numeric annual prices only advertised annual-billed monthly amount multiplied12; unknowns retained when extraction cannot establish billing. Exactly3 functional assessments; hosted services excluded from reasons.

## Chronological commands and queries
Initial chronological research before structured tool-argument log:
2. web.run open: https://www.zoom.com/en/products/collaboration-tools/zoom-workplace-pro/ ; https://www.zoom.com/en/about/ ; https://jitsi.org/about/ ; https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-quickstart/ .
3. web.run open: https://zoom.us/pricing ; https://bigbluebutton.com/enterprise ; https://docs.bigbluebutton.org/administration/install/ ; https://element.io/en/server-suite ; https://docs.element.io/latest/element-server-suite-community/requirements/ . Search queries: site.investors.zoom.us founded2011 NASDAQ ZM; site.8x8.com Jitsi acquisition2018; site.bigbluebutton.org started2007 BlindsideNetworks. Results: BBB commercial empty extraction; Element requirements inaccessible; followed public repository README instead.
4. web.run find Zoom Pro and16.99; BBB Minimum and Mongo; Element Pro. Open https://github.com/element-hq/ess-helm ; https://element.io/blog/element-raises-30m-in-series-b-funding/ (inaccessible; actual-title search fallback); https://www.rocket.chat/pricing (redirect plans); https://docs.rocket.chat/docs/deploy-with-docker-docker-compose .
5. web.run targeted open same pricing/deployment pages plus https://docs.mattermost.com/deployment-guide/software-hardware-requirements.html ; https://mattermost.com/pricing/ ; https://zulip.com/plans/ ; https://zulip.readthedocs.io/en/stable/production/requirements.html .
6. Search queries: site.element.io SeriesB30million Automattic Notion founded2017; site.rocket.chat seriesA19million NEA2015; site.mattermost.com seriesB50million2019 YCombinator; site.zulip.com about KandraLabs2016 funding. Find ESS Requirements/PostgreSQL, Rocket Contact, Mattermost Professional, Zulip dollars.
7. Command: python urllib.request.urlopen('https://zulip.com/plans/'): failed DNS/network access in shell; web.run remained research source.
8. web.run targeted reads Zulip plan cards, Mattermost pricing, Rocket deployment and Mattermost requirements. Searches: site.zulip.com history KandraLabs bootstrapped; site.docs.rocket.chat MongoDB NATS deployment; site.bigbluebutton.org Blindside sponsor; site.mattermost.com2015 founded. Critical finding: current Zulip history reports Foundation ownership2026; outdated subdomain history excluded as current ownership source.

Structured chronological web.run arguments (including targeted reads and fallback searches):

```json
[
  {
    "open": [
      {
        "ref_id": "https://www.asterisk.org/about/"
      },
      {
        "ref_id": "https://www.asterisk.org/products/add-ons/g729-codec/"
      },
      {
        "ref_id": "https://docs.asterisk.org/Getting-Started/Installing-Asterisk/Installing-Asterisk-From-Source/Building-and-Installing-Asterisk/"
      }
    ],
    "search_query": [
      {
        "q": "site.sangoma.com investors NASDAQ SANG founded 1984 Digium 2018"
      },
      {
        "q": "site.bigbluebutton.org \"sponsors\""
      },
      {
        "q": "site.zulip.com/plans \"Self-hosted\" \"Basic\" \"Business\""
      },
      {
        "q": "site.docs.mattermost.com \"Team Edition\" \"PostgreSQL\""
      }
    ],
    "response_length": "long"
  },
  {
    "search_query": [
      {
        "q": "site.docs.bigbluebutton.org 4.0 architecture PostgreSQL Redis"
      },
      {
        "q": "site.jitsi.github.io \"Minimum\" \"4\" \"GB\""
      },
      {
        "q": "site.zulip.readthedocs.io \"RabbitMQ\" \"memcached\" \"PostgreSQL\""
      },
      {
        "q": "site.8x8.com 2026 NASDAQ EGHT"
      }
    ],
    "open": [
      {
        "ref_id": "https://www.asterisk.org/get-started/features/"
      },
      {
        "ref_id": "https://zulip.com/history/"
      },
      {
        "ref_id": "https://zulip.com/plans/",
        "lineno": 200
      },
      {
        "ref_id": "https://docs.mattermost.com/deployment-guide/software-hardware-requirements",
        "lineno": 98
      },
      {
        "ref_id": "https://www.rocket.chat/plans",
        "lineno": 7
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-requirements/"
      },
      {
        "ref_id": "https://bigbluebutton.org/open-source-project/community/"
      },
      {
        "ref_id": "https://www.asterisk.org/get-started/"
      },
      {
        "ref_id": "https://docs.asterisk.org/Getting-Started/Installing-Asterisk/Installing-Asterisk-From-Source/Checking-Asterisk-Requirements/"
      },
      {
        "ref_id": "https://zulip.com/plans/",
        "lineno": 211
      }
    ],
    "find": [
      {
        "ref_id": "turn603view5",
        "pattern": "$"
      },
      {
        "ref_id": "turn603view4",
        "pattern": "Server software"
      },
      {
        "ref_id": "turn602view0",
        "pattern": "Commercial use"
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://signalwire.com/developers/freeswitch"
      },
      {
        "ref_id": "https://developer.signalwire.com/freeswitch/FreeSWITCH-Explained/Installation/"
      },
      {
        "ref_id": "https://aircall.io/pricing/"
      },
      {
        "ref_id": "https://www.ringcentral.com/office/plansandpricing.html"
      },
      {
        "ref_id": "https://otter.ai/pricing"
      },
      {
        "ref_id": "https://fireflies.ai/pricing"
      },
      {
        "ref_id": "https://docs.rocket.chat/docs/our-plans"
      },
      {
        "ref_id": "https://docs.mattermost.com/product-overview/editions-and-offerings"
      }
    ],
    "response_length": "long"
  },
  {
    "search_query": [
      {
        "q": "site.signalwire.com 30 million series B 2021 investors founded 2017"
      },
      {
        "q": "site.aircall.io 120 million series D 2021 Goldman Sachs founded 2014"
      },
      {
        "q": "site.ringcentral.com company founded 1999 NYSE RNG"
      },
      {
        "q": "site.otter.ai 50 million series B 2021 Spectrum Horizons"
      }
    ],
    "find": [
      {
        "ref_id": "turn630view2",
        "pattern": "Essentials"
      },
      {
        "ref_id": "turn630view4",
        "pattern": "$8"
      },
      {
        "ref_id": "turn630view5",
        "pattern": "Enterprise"
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://github.com/openai/whisper"
      },
      {
        "ref_id": "https://alphacephei.com/vosk/"
      },
      {
        "ref_id": "https://alphacephei.com/vosk/install"
      },
      {
        "ref_id": "https://alphacephei.com/vosk/server"
      },
      {
        "ref_id": "https://developer.signalwire.com/freeswitch/module-reference/commercial-modules/"
      }
    ],
    "search_query": [
      {
        "q": "site.fireflies.ai 14 million series A Khosla Canaan 2021 founded 2016"
      },
      {
        "q": "site.otter.ai \"2016\" \"founded\""
      },
      {
        "q": "site.ringcentral.com \"Sequoia\" \"Khosla\" funding"
      },
      {
        "q": "site.ringcentral.com/office/plansandpricing \"Core\" \"$20\""
      }
    ],
    "response_length": "long"
  },
  {
    "click": [
      {
        "ref_id": "turn630view1",
        "id": 4
      }
    ],
    "open": [
      {
        "ref_id": "https://www.ringcentral.com/office/plansandpricing.html?bmid=SEM2301GGL964077"
      },
      {
        "ref_id": "https://otter.ai/about"
      },
      {
        "ref_id": "https://fireflies.ai/about"
      },
      {
        "ref_id": "https://alphacephei.com/"
      }
    ],
    "search_query": [
      {
        "q": "site.openai.com \"OpenAI Foundation\" \"2015\" \"2025\""
      },
      {
        "q": "site.openai.com \"Whisper\" \"September 21, 2022\""
      },
      {
        "q": "site.fireflies.ai \"founded in 2016\""
      },
      {
        "q": "site.ringcentral.com \"Sequoia Capital\" funding round 2012"
      }
    ],
    "response_length": "long"
  },
  {
    "find": [
      {
        "ref_id": "turn632view0",
        "pattern": "Setup"
      },
      {
        "ref_id": "turn632view2",
        "pattern": "Python"
      },
      {
        "ref_id": "turn632view3",
        "pattern": "docker"
      },
      {
        "ref_id": "turn633view3",
        "pattern": "Company"
      },
      {
        "ref_id": "turn633view4",
        "pattern": "Installation"
      }
    ],
    "open": [
      {
        "ref_id": "https://openai.com/index/built-to-benefit-everyone/"
      },
      {
        "ref_id": "https://cap.so/pricing"
      },
      {
        "ref_id": "https://cap.so/docs/self-hosting"
      },
      {
        "ref_id": "https://screenity.io"
      },
      {
        "ref_id": "https://www.loom.com/pricing"
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://github.com/alyssaxuu/screenity"
      },
      {
        "ref_id": "https://cap.so/about"
      },
      {
        "ref_id": "https://obsproject.com/"
      },
      {
        "ref_id": "https://obsproject.com/kb/system-requirements"
      },
      {
        "ref_id": "https://obsproject.com/contribute"
      }
    ],
    "find": [
      {
        "ref_id": "turn635view2",
        "pattern": "Database"
      },
      {
        "ref_id": "turn635view2",
        "pattern": "Optional"
      },
      {
        "ref_id": "turn635view1",
        "pattern": "Pro"
      },
      {
        "ref_id": "turn635view3",
        "pattern": "\u20ac"
      },
      {
        "ref_id": "turn635view4",
        "pattern": "MOST"
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "turn633view4",
        "lineno": 30
      },
      {
        "ref_id": "turn632view0",
        "lineno": 252
      },
      {
        "ref_id": "turn633view3",
        "lineno": 5
      },
      {
        "ref_id": "turn637view1",
        "lineno": 35
      },
      {
        "ref_id": "turn637view0",
        "lineno": 230
      },
      {
        "ref_id": "turn637view3",
        "lineno": 30
      }
    ],
    "search_query": [
      {
        "q": "site.atlassian.com Loom founded 2015 acquisition completed 2023"
      },
      {
        "q": "site.obsproject.com \"2012\" Jim"
      },
      {
        "q": "site.fireflies.ai \"2016\" \"started\""
      },
      {
        "q": "site.otter.ai \"founded\" \"2016\" Sam"
      }
    ],
    "response_length": "long"
  },
  {
    "click": [
      {
        "ref_id": "turn633view4",
        "id": 6
      },
      {
        "ref_id": "turn635view2",
        "id": 27
      }
    ],
    "search_query": [
      {
        "q": "site.obsproject.com \"YouTube\" \"sponsor\" \"NVIDIA\""
      },
      {
        "q": "site.obsproject.com \"2012\""
      },
      {
        "q": "site.cap.so \"2023\" \"Richie\""
      },
      {
        "q": "site.loom.com/blog \"funding\" \"Andreessen\""
      }
    ],
    "find": [
      {
        "ref_id": "turn637view0",
        "pattern": "Self-hosting"
      },
      {
        "ref_id": "turn637view1",
        "pattern": "bootstrapped"
      },
      {
        "ref_id": "turn635view3",
        "pattern": "$"
      },
      {
        "ref_id": "turn633view3",
        "pattern": "About"
      },
      {
        "ref_id": "turn632view0",
        "pattern": "VRAM"
      }
    ],
    "response_length": "long"
  },
  {
    "find": [
      {
        "ref_id": "turn640view0",
        "pattern": "Debian"
      },
      {
        "ref_id": "turn640view0",
        "pattern": "SQLite"
      },
      {
        "ref_id": "turn635view0",
        "pattern": "Microsoft"
      },
      {
        "ref_id": "turn637view1",
        "pattern": "Richie"
      },
      {
        "ref_id": "turn632view1",
        "pattern": "50"
      }
    ],
    "open": [
      {
        "ref_id": "https://obsproject.com/blog/youtube-becomes-premier-sponsor-of-the-obs-project"
      },
      {
        "ref_id": "https://www.bynder.com/en/pricing/"
      },
      {
        "ref_id": "https://brandfolder.com/pricing/"
      },
      {
        "ref_id": "https://www.resourcespace.com/knowledge-base/systemadmin/install_overview"
      },
      {
        "ref_id": "https://www.phraseanet.com/resourcecenter"
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://www.phraseanet.com/"
      },
      {
        "ref_id": "https://github.com/alchemy-fr/Phraseanet"
      },
      {
        "ref_id": "https://www.resourcespace.com/pricing"
      },
      {
        "ref_id": "https://www.resourcespace.com/about"
      },
      {
        "ref_id": "https://www.resourcespace.com/faq"
      }
    ],
    "search_query": [
      {
        "q": "site.bynder.com \"2013\" \"Thomas H. Lee\""
      },
      {
        "q": "site.brandfolder.com \"2012\" \"Smartsheet\""
      },
      {
        "q": "site.smartsheet.com \"Blackstone\" \"Vista\" \"2025\""
      },
      {
        "q": "site.phraseanet.com \"Alchemy\" \"1996\""
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://www.bynder.com/en/press-media/bynder-receives-majority-investment-from-thomas-h-lee-partners/"
      },
      {
        "ref_id": "https://www.bynder.com/en/about-us/"
      },
      {
        "ref_id": "https://www.resourcespace.com/knowledge-base/systemadmin/install_php"
      },
      {
        "ref_id": "https://www.phraseanet.com/services"
      },
      {
        "ref_id": "https://www.phraseanet.com/resourcecenter"
      }
    ],
    "find": [
      {
        "ref_id": "turn655view1",
        "pattern": "Docker"
      },
      {
        "ref_id": "turn645view3",
        "pattern": "Requirements"
      },
      {
        "ref_id": "turn655view2",
        "pattern": "$"
      },
      {
        "ref_id": "turn655view3",
        "pattern": "2005"
      },
      {
        "ref_id": "turn655view3",
        "pattern": "employee"
      }
    ],
    "response_length": "long"
  },
  {
    "click": [
      {
        "ref_id": "turn645view3",
        "id": 43
      },
      {
        "ref_id": "turn645view3",
        "id": 48
      }
    ],
    "open": [
      {
        "ref_id": "https://cap.so/privacy"
      },
      {
        "ref_id": "https://cap.so/docs/commercial-license"
      },
      {
        "ref_id": "https://screenity.io/terms"
      },
      {
        "ref_id": "https://www.bynder.com/en/press-media/"
      },
      {
        "ref_id": "https://thl.com/companies/bynder/"
      }
    ],
    "find": [
      {
        "ref_id": "turn655view2",
        "pattern": "Essential"
      },
      {
        "ref_id": "turn635view3",
        "pattern": "Pro"
      },
      {
        "ref_id": "turn656view1",
        "pattern": "2013"
      },
      {
        "ref_id": "turn655view1",
        "pattern": "Phraseanet is"
      }
    ],
    "response_length": "long"
  },
  {
    "find": [
      {
        "ref_id": "turn658view5",
        "pattern": "PHP"
      },
      {
        "ref_id": "turn658view5",
        "pattern": "MySQL"
      },
      {
        "ref_id": "turn658view5",
        "pattern": "ImageMagick"
      },
      {
        "ref_id": "turn655view2",
        "pattern": "Business"
      },
      {
        "ref_id": "turn655view2",
        "pattern": "Enterprise"
      },
      {
        "ref_id": "turn658view6",
        "pattern": "compose"
      },
      {
        "ref_id": "turn635view3",
        "pattern": "month"
      },
      {
        "ref_id": "turn637view1",
        "pattern": "founded"
      }
    ],
    "search_query": [
      {
        "q": "site.bynder.com \"majority\" \"THL\""
      },
      {
        "q": "site.cap.so \"funding\""
      },
      {
        "q": "site.screenity.io \"2020\""
      },
      {
        "q": "site.obsproject.com \"10 years\" \"2012\""
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://cap.so/docs/studio-mode"
      },
      {
        "ref_id": "https://cap.so/download"
      },
      {
        "ref_id": "https://www.phraseanet.com/decouvrir"
      },
      {
        "ref_id": "https://www.alchemy.fr/en/"
      },
      {
        "ref_id": "https://docs.bigbluebutton.org/3.0/administration/install/"
      },
      {
        "ref_id": "https://github.com/bigbluebutton/bigbluebutton/releases/tag/v4.0.0"
      }
    ],
    "find": [
      {
        "ref_id": "turn658view5",
        "pattern": "CPU"
      },
      {
        "ref_id": "turn656view1",
        "pattern": "Founded"
      },
      {
        "ref_id": "turn635view4",
        "pattern": "Contact Sales"
      },
      {
        "ref_id": "turn637view3",
        "pattern": "Linux"
      },
      {
        "ref_id": "turn637view3",
        "pattern": "macOS"
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://bigbluebutton.org/oeb-conference-2024/"
      },
      {
        "ref_id": "https://bigbluebutton.com/"
      },
      {
        "ref_id": "https://bigbluebutton.org/bigbluebutton-developer-summit-2025/"
      },
      {
        "ref_id": "https://obsproject.com/download"
      },
      {
        "ref_id": "https://github.com/alyssaxuu/screenity/releases"
      },
      {
        "ref_id": "https://github.com/bigbluebutton/bigbluebutton/releases/tag/v4.0.0"
      }
    ],
    "find": [
      {
        "ref_id": "turn662view5",
        "pattern": "Latest"
      },
      {
        "ref_id": "turn655view4",
        "pattern": "free"
      },
      {
        "ref_id": "turn655view0",
        "pattern": "1996"
      }
    ],
    "response_length": "long"
  },
  {
    "find": [
      {
        "ref_id": "turn680view0",
        "pattern": "growth"
      },
      {
        "ref_id": "turn680view2",
        "pattern": "Premium Sponsors"
      },
      {
        "ref_id": "turn603view5",
        "pattern": "Contact Sales"
      },
      {
        "ref_id": "turn600view0",
        "pattern": "Enterprise"
      },
      {
        "ref_id": "turn606view1",
        "pattern": "$8"
      }
    ],
    "click": [
      {
        "ref_id": "turn637view0",
        "id": 118
      },
      {
        "ref_id": "turn680view3",
        "id": 17
      }
    ],
    "search_query": [
      {
        "q": "site.openai.com Microsoft investor 2025 recapitalization"
      },
      {
        "q": "site.openai.com \"SoftBank\" \"funding\" \"2026\""
      },
      {
        "q": "site.otter.ai \"Founded in\""
      },
      {
        "q": "site.cap.so \"funded\" \"funding\""
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://openai.com/index/accelerating-the-next-phase-ai/"
      },
      {
        "ref_id": "https://openai.com/our-structure/"
      },
      {
        "ref_id": "https://jobs.dukecapitalpartners.duke.edu/companies/otter-ai"
      }
    ],
    "find": [
      {
        "ref_id": "turn606view1",
        "pattern": "Purchase"
      },
      {
        "ref_id": "turn685view4",
        "pattern": "Enterprise"
      },
      {
        "ref_id": "turn635view2",
        "pattern": "Railway"
      }
    ],
    "search_query": [
      {
        "q": "site.asterisk.org \"G.729\" \"$8\""
      },
      {
        "q": "site.sangoma.com \"G.729\" \"$8\""
      },
      {
        "q": "site.signalwire.com/freeswitch \"SQLite\" PostgreSQL"
      },
      {
        "q": "site.bigbluebutton.org \"Blindside Networks\" \"manages its growth\""
      }
    ],
    "response_length": "long"
  },
  {
    "search_query": [
      {
        "q": "site.docs.asterisk.org SQLite3 \"required\""
      },
      {
        "q": "site.docs.asterisk.org \"libjansson\" \"libxml2\" \"libedit\""
      },
      {
        "q": "site.docs.asterisk.org \"PostgreSQL\" \"ODBC\" \"realtime\""
      }
    ],
    "find": [
      {
        "ref_id": "turn687view0",
        "pattern": "Microsoft"
      },
      {
        "ref_id": "turn687view0",
        "pattern": "SoftBank"
      },
      {
        "ref_id": "turn687view1",
        "pattern": "Foundation"
      }
    ],
    "open": [
      {
        "ref_id": "https://developer.signalwire.com/freeswitch/configuration/core-settings/"
      }
    ],
    "response_length": "long"
  },
  {
    "open": [
      {
        "ref_id": "https://github.com/asterisk/asterisk/blob/master/README.md"
      },
      {
        "ref_id": "https://docs.asterisk.org/Fundamentals/Asterisk-Internal-Database/"
      }
    ],
    "response_length": "long"
  }
]
```

Commands after research batches, in order: mkdir -p group profiles/claims/audit; write build.py/records.py/records2.py/records3.py with apply_patch; run each records script incrementally (8,16,23 records); node scripts/validate-profiles.mjs profiles; update build helper and rerun three scripts; run qa.py; run finalize.py. All writes stayed in assigned temporary directory.

## Failures, fallback and decisions
Guessed funding-page slug inaccessible; investor THL announcement and current portfolio page verify majority investment/current status. Insight historical exit explicitly distinguished.

## Public evidence URLs for this record
- https://thl.com/articles/thl_bynder/
- https://www.bynder.com/en/pricing/
- https://thl.com/companies/bynder/

Public-page headings/searchable phrases and evidence paraphrases accompany every ledger claim. Structural validation run after final updates; generated files counted against all23 assigned IDs.

Final QA command: group-only Python pass appended specific OS/hardware evidence routes for Jitsi,OBS,Cap,Vosk and program-sponsorship evidence for Zulip; reran validator and coverage/count checks. No source or repository mutation.
