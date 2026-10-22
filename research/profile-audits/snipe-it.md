> Temporary paths normalized; local setup omitted. Exact original retained locally.

# snipe-it research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open pricing,requirements,installation,FAQ,features,support. Aboutguessfailed; FAQcompanylink resolved/company.
2. Read project2013origin; fundingunknown,notbootstrapped. Read SpecialThanks/repository; no separatelyverifiedcorporatesponsor,stewardfallback.
3. Read explicitmonthly/annualhostingprices and supportFAQannual4999.99; didnotinfer12xmonthlydiscount.
4. Read PHP8.2<8.6,MySQL/MariaDB,GD/Imagick,LDAPconditional; configdefaultfilecache/session and syncroutes.
5. GuessedDigitalOcean/installshdocURLsfailed; searchfoundofficialDownloadinginstaller and officialDockerguide.
6. Installer documentedfreshLinuxonly; recordedone-commandwithpreparation,nottrueoneclick.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Final evidence QA (after initial save):
- web.find({ref_id:"https://snipe-it.readme.io/docs/configuration",pattern:"QUEUE_DRIVER"}); filecache/syncqueue defaults and optionalS3/SES confirmed.
- web.find SpecialThanks patternsJetBrains/Bugsnag: no matches; no corporate sponsorship inferred.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "site:snipe-it.readme.io \"one-click\""}
- web.search_query {"q": "site:snipeitapp.com \"2015\" \"Grokability\""}
- web.search_query {"q": "site:snipe-it.readme.io \"install.sh\""}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://snipeitapp.com/company
- https://snipeitapp.com/faq
- https://snipeitapp.com/pricing
- https://snipeitapp.com/support
- https://snipeitapp.com/product
- https://snipe-it.readme.io/docs/requirements
- https://snipe-it.readme.io/docs/installation
- https://snipe-it.readme.io/docs/configuration
- https://snipe-it.readme.io/docs/downloading

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
