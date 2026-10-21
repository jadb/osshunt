> Temporary output paths normalized for portability; local operating setup omitted. Original audit retained locally.

# Docs and wiki refresh audit — 2026-10-21

3. Checked current directory, `command -v gh`, `command -v rsx`, and output directory inventory. Both tools available; no repository modifications.
4. `gh api repos/BookStackApp/BookStack`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
5. `gh api repos/BookStackApp/BookStack/commits/HEAD`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
6. `gh api repos/BookStackApp/BookStack/license`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
7. `gh api repos/BookStackApp/BookStack/releases/latest`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
8. `gh api repos/AppFlowy-IO/AppFlowy`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
9. `gh api repos/AppFlowy-IO/AppFlowy/commits/HEAD`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
10. `gh api repos/AppFlowy-IO/AppFlowy/license`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
11. `gh api repos/AppFlowy-IO/AppFlowy/releases/latest`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
12. `gh api repos/docmost/docmost`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
13. `gh api repos/docmost/docmost/commits/HEAD`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
14. `gh api repos/docmost/docmost/license`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
15. `gh api repos/docmost/docmost/releases/latest`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
16. `gh api repos/toeverything/AFFiNE`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
17. `gh api repos/toeverything/AFFiNE/commits/HEAD`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
18. `gh api repos/toeverything/AFFiNE/license`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
19. `gh api repos/toeverything/AFFiNE/releases/latest`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
20. `gh api repos/outline/outline`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
21. `gh api repos/outline/outline/commits/HEAD`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
22. `gh api repos/outline/outline/license`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
23. `gh api repos/outline/outline/releases/latest`: exit 1; error connecting to api.github.com check your internet connection or https://githubstatus.com 
24. `rsx analyze BookStackApp/BookStack --mode quick --json`: failed before analysis; cache backup write outside writable roots denied. No result claimed; GitHub metadata fallback.
25. `web.open` official URLs https://www.bookstackapp.com/ (MIT, all free, authentication included, Codeberg now canonical), https://appflowy.com/pricing (cloud vs self-hosted tab; extraction misses self-hosted matrix), https://docmost.com/pricing (Business gates include migration/AI), https://affine.pro/pricing (explicit MIT editor/source-available backend).
26. `web.open` https://www.getoutline.com/pricing (community and paid on-premises editions), https://www.notion.com/pricing (EUR auto-selected, USD price not verified), https://www.atlassian.com/software/confluence/pricing (empty extraction).
27. `gh api` commands in step 4 all failed connecting to api.github.com. Web API fallback: BookStack and Docmost inaccessible; AppFlowy and AFFiNE metadata available. AFFiNE default canary and NOASSERTION; requires actual license review. AppFlowy AGPL core detected, nonarchived.
28. Escalated network read `gh api repos/BookStackApp/BookStack`: exit 0; response saved locally
29. Escalated network read `gh api repos/BookStackApp/BookStack/commits/HEAD`: exit 0; response saved locally
30. Escalated network read `gh api repos/BookStackApp/BookStack/license`: exit 0; response saved locally
31. Escalated network read `gh api repos/BookStackApp/BookStack/releases/latest`: exit 0; response saved locally
32. Escalated network read `gh api repos/AppFlowy-IO/AppFlowy`: exit 0; response saved locally
33. Escalated network read `gh api repos/AppFlowy-IO/AppFlowy/commits/HEAD`: exit 0; response saved locally
34. Escalated network read `gh api repos/AppFlowy-IO/AppFlowy/license`: exit 0; response saved locally
35. Escalated network read `gh api repos/AppFlowy-IO/AppFlowy/releases/latest`: exit 0; response saved locally
36. Escalated network read `gh api repos/docmost/docmost`: exit 0; response saved locally
37. Escalated network read `gh api repos/docmost/docmost/commits/HEAD`: exit 0; response saved locally
38. Escalated network read `gh api repos/docmost/docmost/license`: exit 0; response saved locally
39. Escalated network read `gh api repos/docmost/docmost/releases/latest`: exit 0; response saved locally
40. Escalated network read `gh api repos/toeverything/AFFiNE`: exit 0; response saved locally
41. Escalated network read `gh api repos/toeverything/AFFiNE/commits/HEAD`: exit 0; response saved locally
42. Escalated network read `gh api repos/toeverything/AFFiNE/license`: exit 0; response saved locally
43. Escalated network read `gh api repos/toeverything/AFFiNE/releases/latest`: exit 0; response saved locally
44. Escalated network read `gh api repos/outline/outline`: exit 0; response saved locally
45. Escalated network read `gh api repos/outline/outline/commits/HEAD`: exit 0; response saved locally
46. Escalated network read `gh api repos/outline/outline/license`: exit 0; response saved locally
47. Escalated network read `gh api repos/outline/outline/releases/latest`: exit 0; response saved locally
48. `gh api repos/toeverything/AFFiNE/contents/packages/backend/server/LICENSE?ref=0b69a6da21e8fd35beb85667bb8496d9b3852238` exit 0; saved response and decoded text where applicable.
49. `gh api repos/docmost/docmost/contents/README.md?ref=9250ca8305cbb7d04dc1973b8b83346784fc361a` exit 0; saved response and decoded text where applicable.
50. `gh api repos/AppFlowy-IO/AppFlowy/contents/README.md?ref=5cf3a365dec0d59f64bad1ee4bb1050471a39b93` exit 0; saved response and decoded text where applicable.
51. `gh api repos/AppFlowy-IO/AppFlowy-Cloud` exit 0; saved response and decoded text where applicable.
52. `gh api repos/AppFlowy-IO/AppFlowy-SelfHost-Commercial` exit 0; saved response and decoded text where applicable.
53. `web.search`: `site.appflowy.com self hosted community enterprise license features` and `site:atlassian.com/software/confluence/pricing Standard $5.42`. Used only official results; old AppFlowy forum statement from 2024 superseded by current commercial repository. Did not use third-party/Reddit claims.
54. `web.open`: https://appflowy.com/self-host failed (guessed URL); https://www.bookstackapp.com/about/bookstack-vs-notion/ failed (guessed URL); https://docmost.com/docs/ yielded edition/import links. No unsupported page assumed.
55. Read https://github.com/AppFlowy-IO/AppFlowy-SelfHost-Commercial and https://github.com/AppFlowy-IO/AppFlowy-Cloud; commercial README describes one-seat free tier, old AGPL cloud archived. Read https://www.getoutline.com/developers for API/export capability.
56. Read https://docmost.com/docs/editions (AGPL core, commercial additions activated by license). Read https://www.bookstackapp.com/about/ then followed project-faq and confluence-alternative links. Read https://docmost.com/docs/user-guide/import-export (Notion ZIP, Confluence HTML export; price page gates Confluence migration).
57. `web.open` https://www.atlassian.com/en/software/confluence/pricing succeeds; current calculator shows $5.78/user/month rather than cached search $5.42. Current page takes precedence; volume/billing-dependent price noted. https://www.notion.com/pricing?currency=usd inaccessible; retain null USD entry, EUR observed only.
58. BookStack FAQ explicitly one edition/no paid features/no official hosting; tier A and hostedOffer false (third-party hosting acknowledged). Docmost tier C because paid migration/AI/permissions affect workflows. Outline tier S because BSL explicitly non-open-source, change date 2030-10-12. AFFiNE requires care: root splits MIT outside backend/native; backend EE license exempts CE portions as MPL-2.0; website says source-available backend. Preserve ambiguity rather than equating all source with OSS.
59. Escalated `rsx analyze BookStackApp/BookStack --mode quick --json`: exit 0; {   "repo": {     "owner": "BookStackApp",     "name": "BookStack",     "url": "https://github.com/BookStackApp/BookStack",     "description": "NOW MANAGED ON CODEBERG",     "homepage": "https://codeberg.org/bookstack/bookstack",     "topics": [       "bookstack",       "documentation",       "laravel",       "php",       "selfhosted",       "wiki"     ]   },   "scores": {     "overall": 6,     "categories": {       "activity": {         "id": "activity",         "label": "Activity",         "sc
60. Escalated `rsx analyze AppFlowy-IO/AppFlowy --mode quick --json`: exit 0; {   "repo": {     "owner": "AppFlowy-IO",     "name": "AppFlowy",     "url": "https://github.com/AppFlowy-IO/AppFlowy",     "description": "Bring projects, wikis, and teams together with AI. AppFlowy is the AI collaborative workspace where you achieve more without losing control of your data. The leading open source Notion alternative.",     "homepage": "https://appflowy.com",     "topics": [       "blog",       "confluence-alternative",       "content-management",       "content-services",     
61. Escalated `rsx analyze docmost/docmost --mode quick --json`: exit 0; {   "repo": {     "owner": "docmost",     "name": "docmost",     "url": "https://github.com/docmost/docmost",     "description": "Docmost is an open-source collaborative wiki and documentation software. It is an open-source alternative to Confluence and Notion.",     "homepage": "https://docmost.com",     "topics": [       "ai",       "ai-agents",       "collaborative",       "confluence",       "document",       "documentation",       "documents",       "dot",       "dots",       "drawio",     
62. `gh api repos/BookStackApp/BookStack/contents/LICENSE?ref=045c6a98cac21ea86906674bb91d01f375460db6` exit 0; read pinned license; 1122 decoded characters.
63. Escalated `rsx analyze toeverything/AFFiNE --mode quick --json`: exit 0; {   "repo": {     "owner": "toeverything",     "name": "AFFiNE",     "url": "https://github.com/toeverything/AFFiNE",     "description": "There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use. ",     "homepage": "https://affine.pro",     "topics": [       "app",       "crdt",       "editor",       "electron",       "knowledge-base",       "
64. `gh api repos/AppFlowy-IO/AppFlowy/contents/LICENSE?ref=5cf3a365dec0d59f64bad1ee4bb1050471a39b93` exit 0; read pinned license; 34523 decoded characters.
65. `gh api repos/docmost/docmost/contents/LICENSE?ref=9250ca8305cbb7d04dc1973b8b83346784fc361a` exit 0; read pinned license; 34523 decoded characters.
66. `gh api repos/toeverything/AFFiNE/contents/LICENSE?ref=0b69a6da21e8fd35beb85667bb8496d9b3852238` exit 0; read pinned license; 1663 decoded characters.
67. `gh api repos/outline/outline/contents/LICENSE?ref=4f4fd882786685ee684fd1994601539a3bcd7812` exit 0; read pinned license; 4618 decoded characters.
68. Escalated `rsx analyze outline/outline --mode quick --json`: exit 0; {   "repo": {     "owner": "outline",     "name": "outline",     "url": "https://github.com/outline/outline",     "description": "The fastest knowledge base for growing teams. Beautiful, realtime collaborative, feature packed, and markdown compatible.",     "homepage": "https://www.getoutline.com",     "topics": [       "docker",       "javascript",       "mobx",       "nodejs",       "react",       "slack",       "wiki"     ]   },   "scores": {     "overall": 5.1,     "categories": {       "act
69. Read decoded pinned LICENSE files and pinned READMEs using Python and `rg`; Docmost precise commercial boundaries: apps/server/src/ee, apps/client/src/ee, packages/ee. AFFiNE backend license contains explicit MPL-2.0 CE/client-side carveout. Outline license explicitly non-open-source, Apache conversion 2030-10-12.
70. `web.search`: `site:affine.pro self hosted source available backend MIT MPL community license` and `site:appflowy.com self-hosted plans pricing one user seat Seed`. Primary results used: https://affine.pro/about-us, https://affine.pro/enterprise, https://affine.pro/blog/notion-alternative, https://affine.pro/blog/best-knowledge-base-software-for-teams. Conflicting https://affine.pro/self-host claim (no fee) retained as uncertainty, not authoritative over license. Results from Portuguese/Italian pricing and generic comparison blogs not used for price assertions. AppFlowy current commercial README remains direct authority.
71. Inspected all five rsx JSON result keys, scores and observations with Python. Successful analysis after escalation; preserved automated scores as supplemental signals only, not evidence of actual deployed vulnerability or license classification. Initial sandbox cache failure resolved.
72. Wrote `../build-docs-wiki.py` and executed it; built category, distinct paid/OSS records, nine many-to-many mappings, archive exclusion and explicit uncertainties. No installation/migration testing claimed. Chose broad audience reach from cross-function documentation use cases, no invented headcounts.
73. Classification refinement: AFFiNE U, rather than blanket S, because pinned EE license explicitly exempts CE/client portions as MPL-2.0 and current CE boundary not reconstructed. `osi:false` denotes full collaborative stack not verified OSI; MIT local editor explicitly recognized. AppFlowy OSI true applies only to named AGPL client core, with commercial collaboration boundary stated.
74. Validated JSON syntax, unique product/mapping IDs, category and edge references, five candidate health commits/licenses, and required fields. Final deliverables are docs-wiki.json and this audit; raw snapshots retained for reproducibility. Captures executed concurrently; audit rows are appended as results completed.

## Repeated operations worth scripting/testing

- Repository metadata + default-branch SHA + LICENSE at that SHA + latest release: reusable capture bundle with source timestamps and failure status.
- Mixed-license detector: root SPDX alone insufficient. Follow directory exceptions and README links, distinguish client/core from collaboration server, preserve EE/CE carveouts.
- Dependency/project topology: AppFlowy client active while legacy server archived; ensure companion repositories receive archive checks.
- Pricing extraction: empty pages/locale selection/missing matrix icons can change interpretation. Return uncertainty when currency, billing or feature-column association cannot be proven.
- Canonical hosting migration: BookStack GitHub mirror points to Codeberg; GitHub activity alone can mislead.
- Tier decisions need edition evidence; empty locked array allowed only when one-edition/no-lock policy explicitly verified (BookStack).

Final rubric review: appflowy — AGPL client core is OSI, but current production collaboration uses separately commercial server images. Full collaborative self-hosted OSS eligibility is unresolved; archived AGPL AppFlowy-Cloud excluded. Local client remains usable under AGPL. Excluded from default OSS collaboration recommendations pending a clearly eligible maintained full stack.
