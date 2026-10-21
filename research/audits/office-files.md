> Temporary output paths normalized for portability; local operating setup omitted. Original audit retained locally.

# Office suite and files audit — 2026-10-21

2. Read rsx and git/gh guides before tool use. All work artifacts limited to `research`.

3. `command -v rsx; command -v gh; ls …` → both binaries present; no .ctxt/project instruction files in research directory.
4. Web search five assigned edition comparisons; primary Nextcloud homepage, docs, and ONLYOFFICE community result discovered. Broad combined search returned mostly Nextcloud, so split searches next.

### nextcloud/server metadata batch
- `gh api repos/nextcloud/server` → exit 1; error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/nextcloud/server/releases/latest` → exit 1; error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/nextcloud/server/commits/main --jq .sha` → error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/nextcloud/server/license?ref=<SHA>` → exit 1; license body saved

### CollaboraOnline/online metadata batch
- `gh api repos/CollaboraOnline/online` → exit 1; error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/CollaboraOnline/online/releases/latest` → exit 1; error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/CollaboraOnline/online/commits/main --jq .sha` → error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/CollaboraOnline/online/license?ref=<SHA>` → exit 1; license body saved

### ONLYOFFICE/DocumentServer metadata batch
- `gh api repos/ONLYOFFICE/DocumentServer` → exit 1; error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/ONLYOFFICE/DocumentServer/releases/latest` → exit 1; error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/ONLYOFFICE/DocumentServer/commits/main --jq .sha` → error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/ONLYOFFICE/DocumentServer/license?ref=<SHA>` → exit 1; license body saved

### haiwen/seafile metadata batch
- `gh api repos/haiwen/seafile` → exit 1; error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/haiwen/seafile/releases/latest` → exit 1; error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/haiwen/seafile/commits/main --jq .sha` → error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/haiwen/seafile/license?ref=<SHA>` → exit 1; license body saved

### owncloud/ocis metadata batch
- `gh api repos/owncloud/ocis` → exit 1; error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/owncloud/ocis/releases/latest` → exit 1; error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/owncloud/ocis/commits/main --jq .sha` → error connecting to api.github.com
check your internet connection or https://githubstatus.com
- `gh api repos/owncloud/ocis/license?ref=<SHA>` → exit 1; license body saved

5. GitHub CLI all metadata/release/commit/license calls failed: cannot connect api.github.com; files retain errors. `rsx analyze nextcloud/server --mode quick --json` failed before analysis: cache backup permission denied under ~/.cache/rsx. integration notified for shared fallback.
6. Web API opens attempted https://api.github.com/repos/{nextcloud/server,CollaboraOnline/online,ONLYOFFICE/DocumentServer,haiwen/seafile,owncloud/ocis}; only Seafile succeeded (pushed 2026-10-16; archived=false; disabled=false). Others inaccessible.
7. Split edition searches visited primary sources https://www.seafile.com/en/product/seafile_on_premise/ (Pro full-text search, granular permissions, audit, HA/S3); https://www.onlyoffice.com/compare-editions (AGPL CE and commercial editions); https://community.onlyoffice.com/t/onlyoffice-docs-community-edition-is-the-simultaneous-connection-limit-for-editing-only-or-does-it-also-apply-to-viewing/18127 (2026 maintainer confirms 20 editing connections). Secondary results not used for conclusions.

8. Direct opens: https://www.collaboraonline.com/code/ failed 502; https://owncloud.com/ocis/ bot verification; https://owncloud.com/enterprise/ inaccessible. https://nextcloud.com/enterprise/ and /providers/ succeeded; hosted partners verified.
9. Searches for Collabora CODE production, ownCloud Apache/community commercial use, Nextcloud fair use. Used https://www.collaboraonline.com/de/code/ (current CODE self-host installation, production caveat), https://forum.collaboraonline.com/t/questions-about-using-collabora-code-in-production-licensing-branding-nextcloud/4033 (maintainer: source remains OSS, editor needs storage/auth integration), https://forum.collaboraonline.com/t/does-collabora-code-26-04-2-4-have-any-user-or-concurrent-connection-limits/5023 (September 2026 maintainer: no default connection/document limit; home mode 20/10). https://sdk.collaboraonline.com/CO-SDK-manual.pdf says direct vendor hosting demo only; partner hosting counted instead.
10. Opened https://workspace.google.com/pricing.html (rendered incompletely); https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products (Business Basic no Teams $5.40/user/month annual; with Teams $7); https://www.dropbox.com/plans (Standard $15/user/month, billing selector ambiguous => leave exact entry unknown). Search workspace pricing fallback official https://workspace.google.com/pricing and https://knowledge.workspace.google.com/admin/getting-started/editions/business-editions; Business Starter $7 monthly equivalent with annual commitment. Promotional discounts excluded.
11. Opened https://nextcloud.com/enterprises/ via comparison link; enterprise-only authentication/workflow/security apps, Guard monitoring and unlimited vendor push support shown. Classify B, not inferred A from AGPL. https://docs.nextcloud.com/server/stable/Nextcloud_Server_Administration_Manual.pdf fair use wording says recommends Enterprise beyond 500; do not misstate source user cap.
12. ownCloud search exposed old https://owncloud.com/pricing-copy-2/ and 5.0.8 binary EULA; NOT used as current source license. Current https://owncloud.com/blogs/open-source-efss-is-not-a-stepping-stone-to-a-sales-call/ (May 2026) defines Apache-2.0 core with enterprise compliance/policy layer. Opened https://owncloud.com/pricing/ current Community/Enterprise and hosted offer; source vs restricted vendor binaries recorded as uncertainty.
13. Opened all five assigned GitHub landing pages and inspected READMEs. Collabora online moved source to Gerrit and https://github.com/CollaboraOnline/online.mirror; requested additional capture. Seafile front page identifies https://github.com/haiwen/seafile-server as server, https://github.com/haiwen/seafile client daemon (GPLv2), seahub Apache-2.0; requested correct server core capture rather than assume frontend repo license.
14. Search/open https://www.onlyoffice.com/docs and https://helpcenter.onlyoffice.com/docs/faq/docs-enterprise.aspx verify mobile web editing excluded from CE and 20 editing connections; classify C. https://www.onlyoffice.com/compare-editions icon-only cells lose meaning in text extraction; rely explicit FAQ prose instead. https://helpcenter.onlyoffice.com/docs/installation/docs-cloud-registration.aspx confirms Docs Cloud hosted offer; https://www.onlyoffice.com/pricing consulted, no OSS price inference.
15. Seafile hosted offer verified https://shop.seafile.com/en/pricing/ (Plus Cloud). Edition specifics from explicit https://www.seafile.com/en/product/seafile_on_premise/ prose; classify C due full-text file search/granular permissions, not only compliance gates. https://de.seafile.com/seafile-editionen/ and /downloads/ reviewed but icon table ambiguous; avoid deriving absent gates solely from extracted blank cells.
16. integration centralized GitHub capture succeeded via `../capture-github.py`; full commands and timestamps `../github-commands.jsonl`. Read matching JSON metadata, decoded license, release, commit. Own initial failures preserved separately. Read/pin SHA license URLs for Nextcloud, ONLYOFFICE, ownCloud using raw.githubusercontent.com. Latest release != recommended install version; this is curation, no dependencies installed.
17. https://nextcloud.com/migration/ direct open failed; retain capability-based partial-fit notes; no unverified automated migration claims. https://www.collaboraonline.com/become-partner/ and /partners/open-circle-ag/ verify hosted partner availability; https://www.collaboraonline.com/blog/why-the-best-online-office-doesnt-try-to-store-your-files/ explicitly limits product to editor, storage/identity/sharing external.





19. Additional source-role captures read: CollaboraOnline/online.mirror (MPL-2.0; no release 404; active 2026-10-21), haiwen/seafile-server (AGPLv3 + OpenSSL exception; python Apache; active 2026-10-20; latest GitHub release old). Opened both GitHub pages. No archived candidates.
20. Pinned raw license URLs attempted for Nextcloud, ONLYOFFICE, ownCloud returned cache miss. integration asked to add ref-qualified shared capture; no claim these web opens succeeded.
21. Wrote `build-office-files.py` and generated `office-files.json`: 3 paid, 5 OSS, 13 partial mappings. A Collabora, B Nextcloud/ownCloud, C Seafile/ONLYOFFICE. No Dropbox-to-editor-only mapping because editors do not replace file storage. Distinct records prevent self-alternative/free-SaaS confusion.

22. Validation: JSON parse; unique 8 product IDs; 13 unique valid cross-product edges; 5 nonarchived active repository metadata; 40-character captured HEAD SHAs. Passed. Branch-license-vs-composed-pinned URL uncertainty remains explicitly recorded for integration central refinement. No repository edited.

## Repeated steps suitable for scripting/tests
- Capture metadata/default HEAD/latest release/license at same ref; test 404 release is allowed, disabled/archived rejects recommendation.
- Read source-role README to catch issue-only repo, moved mirror, client/server split before measuring health/license.
- Extract edition matrix icons or prefer explicit prose; blank text cells are not evidence of feature presence.
- Distinguish source rights, vendor binary EULA, enterprise code, hosted product/backend.
- Validate separate paid/OSS IDs, many-to-many edges, editor-vs-storage-vs-suite fit and citation completeness.
- Preserve dated counterexamples to stale limits: current Collabora unlimited default mode vs historical 20/10 cap.
