> Temporary paths normalized; local setup omitted. Exact original retained locally.

# glpi research audit

2026-10-21; current official sources unless otherwise specified.

1. web.openpricing/about/prerequisites;aboutguessfailed;clickedcompanylinkto/about-us.
2. Readhistory:2003project,2009Teclib,2015editor;searchedfunding,notresolved. Customer/partnerlogosexcludedfromsponsors;businessstewardfallback.
3. Read2026selfhostNetworkBasic100,Standard300,Advanced1000,Enterprise4500EURmonthly;noPopularbadge.
4. InstallmatrixstopsatGLPI11;readpinned12.0.0composerconfirmPHP8.3. GuessedDBversionclass/configpathsfailed;exact12databaseversionminimumleftunresolved.
5. ReadactualofficialDockerrepository;nooneclickbuttonverified.
6. Readfeaturepage;premiumpluginscopekeptseparatefromfreecore.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Final evidence QA (after initial save):
- web.find({ref_id:"https://github.com/glpi-project/docker-images",pattern:"cron"}); Docker/Podman and bundled minute scheduler verified; manualCompose still not oneclick.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "site:glpi-project.org \"one-click\""}
- web.search_query {"q": "site:glpi-project.org \"Teclib\" \"funding\""}
- web.search_query {"q": "site:github.com/glpi-project/glpi/12.0.0 \"MYSQL_MIN_VERSION\""}
- web.search_query {"q": "site:glpi-project.org \"GLPI12\" \"MySQL\""}
- web.search_query {"q": "site:glpi-project.org \"Teclib\" \"shareholders\""}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://www.glpi-project.org/en/about-us/
- https://www.glpi-project.org/es/glpi-20-years/
- https://www.glpi-project.org/en/features/
- https://www.glpi-project.org/en/pricing/
- https://raw.githubusercontent.com/glpi-project/glpi/12.0.0/composer.json
- https://glpi-install.readthedocs.io/en/latest/prerequisites.html
- https://github.com/glpi-project/docker-images

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
