> Temporary output paths normalized for portability; local operating setup omitted. Original audit retained locally.

# Team chat research audit — 2026-10-21

3. Discovered web tools by metadata name/description; using public-source browsing plus read-only GitHub API.
4. `command -v gh rsx`: both available. Web search batch: `site.zulip.com self hosting paid features free open source pricing`; `site.mattermost.com teams edition free entry license 2026`; `site.rocket.chat pricing starter 50 users community`; `site.element.io server suite community edition AGPL enterprise pricing`. Used only official result URLs; community posts treated as leads, not evidence. Leads: Zulip paid mobile push above 10 users, Rocket.Chat Community vs proprietary Starter distinction, Mattermost v11 Entry vs Team Edition, Element Community vs Pro.

- `gh api repos/zulip/zulip`: error connecting to api.github.com check your internet connection or https://githubstatus.com 

- `gh api repos/zulip/zulip/commits/HEAD`: error connecting to api.github.com check your internet connection or https://githubstatus.com 

- `gh api repos/zulip/zulip/releases/latest`: error connecting to api.github.com check your internet connection or https://githubstatus.com 
- `gh api repos/zulip/zulip/license?ref=None`: {'path': None, 'html_url': None, 'license': None, 'message': None}; decoded license saved to metadata evidence.

- `gh api repos/mattermost/mattermost`: error connecting to api.github.com check your internet connection or https://githubstatus.com 

- `gh api repos/mattermost/mattermost/commits/HEAD`: error connecting to api.github.com check your internet connection or https://githubstatus.com 

- `gh api repos/mattermost/mattermost/releases/latest`: error connecting to api.github.com check your internet connection or https://githubstatus.com 
- `gh api repos/mattermost/mattermost/license?ref=None`: {'path': None, 'html_url': None, 'license': None, 'message': None}; decoded license saved to metadata evidence.

- `gh api repos/RocketChat/Rocket.Chat`: error connecting to api.github.com check your internet connection or https://githubstatus.com 

- `gh api repos/RocketChat/Rocket.Chat/commits/HEAD`: error connecting to api.github.com check your internet connection or https://githubstatus.com 

- `gh api repos/RocketChat/Rocket.Chat/releases/latest`: error connecting to api.github.com check your internet connection or https://githubstatus.com 
- `gh api repos/RocketChat/Rocket.Chat/license?ref=None`: {'path': None, 'html_url': None, 'license': None, 'message': None}; decoded license saved to metadata evidence.

- `gh api repos/element-hq/element-web`: error connecting to api.github.com check your internet connection or https://githubstatus.com 

- `gh api repos/element-hq/element-web/commits/HEAD`: error connecting to api.github.com check your internet connection or https://githubstatus.com 

- `gh api repos/element-hq/element-web/releases/latest`: error connecting to api.github.com check your internet connection or https://githubstatus.com 
- `gh api repos/element-hq/element-web/license?ref=None`: {'path': None, 'html_url': None, 'license': None, 'message': None}; decoded license saved to metadata evidence.

- `gh api repos/element-hq/synapse`: error connecting to api.github.com check your internet connection or https://githubstatus.com 

- `gh api repos/element-hq/synapse/commits/HEAD`: error connecting to api.github.com check your internet connection or https://githubstatus.com 

- `gh api repos/element-hq/synapse/releases/latest`: error connecting to api.github.com check your internet connection or https://githubstatus.com 
- `gh api repos/element-hq/synapse/license?ref=None`: {'path': None, 'html_url': None, 'license': None, 'message': None}; decoded license saved to metadata evidence.

- `gh api repos/element-hq/ess-helm`: error connecting to api.github.com check your internet connection or https://githubstatus.com 

- `gh api repos/element-hq/ess-helm/commits/HEAD`: error connecting to api.github.com check your internet connection or https://githubstatus.com 

- `gh api repos/element-hq/ess-helm/releases/latest`: error connecting to api.github.com check your internet connection or https://githubstatus.com 
- `gh api repos/element-hq/ess-helm/license?ref=None`: {'path': None, 'html_url': None, 'license': None, 'message': None}; decoded license saved to metadata evidence.
5. Opened `https://zulip.com/plans/`: all self-hosted functionality open source; vendor mobile push free only through 10 users outside eligible communities, Basic $3.50/user/month. Opened `https://docs.rocket.chat/docs/our-plans`: Community MIT core, 100 concurrent users, 10,000 pushes/month, limited calls/integrations; Starter separate 50-user premium-feature free offer. Opened `https://element.io/server-suite/community` (redirect `/en/server-suite/community`): AGPL Community suite, Synapse/Web/MAS/Call, enterprise omissions; vendor positions Community for non-commercial/non-professional use, which must not be represented as an AGPL license prohibition. Opening `https://mattermost.com/plans/` failed in web tool; search official documentation fallback next.
6. `rsx analyze zulip/zulip --mode quick --json` failed: cache backup permission denied under `~/.cache/rsx`. Recorded unavailable; no attempt to modify protected cache. Python subprocess batch `gh api repos/<repo>`, `/commits/HEAD`, `/releases/latest`, `/license?ref=None` across zulip, mattermost, Rocket.Chat, element-web, synapse, ess-helm all failed network access; raw errors persisted in `team-chat.github.json`. Direct CLI call had succeeded, so switch to direct tool calls; do not interpret null SHA licenses as findings.
7. Searched official Mattermost Team/Entry and Slack/Teams pricing; opened `https://docs.mattermost.com/product-overview/editions-and-offerings.html` (redirect no suffix), `https://docs.mattermost.com/product-overview/faq-general`, `https://slack.com/pricing`, `https://www.microsoft.com/en-US/microsoft-365/microsoft-teams/compare-microsoft-teams-options` (redirect `https://www.microsoft.com/en-US/microsoft-teams/compare-microsoft-teams-business-options`). Mattermost Entry proprietary free mode, 10k history cap does NOT apply to Team Edition. Teams Essentials $4 USD/seat/month annual. Slack search showed USD $7.25 annual, live open geolocated EUR €6.75; explicit US URL needed.
8. Direct `gh api repos/<repo> --jq '{full_name,default_branch,archived,disabled,pushed_at,license}'` succeeded for zulip/zulip, mattermost/mattermost, RocketChat/Rocket.Chat, element-hq/ess-helm and element-hq/element-web. All unarchived/enabled, current pushes. Followed with direct `/commits/HEAD` and `/releases/latest` for four complete-product repos; all successful. Zulip 12.3; Mattermost v12.0.0; Rocket.Chat 8.9.0; ESS 26.10.2. Full SHA values recorded in final JSON.
9. Direct `/license?ref=<current SHA>` for four repositories succeeded. Initial content-as-base64 output too verbose; switched to `.content | @base64d | .[0:5500]` for mixed-license roots. Zulip Apache-2.0; Mattermost AGPLv3 source / Apache-2.0 certain folders / MIT vendor-compiled Team; Rocket.Chat MIT except ee directories proprietary; ESS file `LICENSE-AGPL-3.0-only` AGPL. Crucial: root GitHub detected `NOASSERTION` does not mean no OSS edition.
10. Opened `https://slack.com/intl/en-us/pricing` → pricing USD confirmed Pro $7.25 annual, standard monthly $8.75; ignore introductory discount. Clicked official Element Community Get it on GitHub → `https://github.com/element-hq/ess-helm`, confirming full suite repo rather than just client.
11. Read Mattermost edition page lower section: Team Edition MIT compiled binary, intended <250 activated users, SSO removed; Entry proprietary + 10k history differs. Opened `https://zulip.com/help/import-from-slack`, `https://zulip.com/help/import-from-microsoft-teams`; Teams beta importer excludes DMs/private channels. Opened `https://docs.rocket.chat/docs/our-plans` at Community: 100 concurrent limit and current paid plans Commercial/Government/Defense; Pro legacy since 2026-04-29. Tried `https://element.io/hosting` and `https://docs.mattermost.com/migrate/slack.html`; results reviewed next.
12. Official feature-gate search batch: Mattermost Team Calls/guest; Rocket.Chat Slack importer; Element Slack/Teams bridges. Opened `https://docs.mattermost.com/product-overview/plans`: Team lacks group calls and guest accounts, so tier C (everyday collaboration gates), beyond enterprise-only B. `https://docs.rocket.chat/docs/import-from-slack` supports users/channels/messages; attachment download separate step. Element historic bridge post exists but not sufficient for current migration inclusion guarantees.
13. Opened `https://element.io/en/pricing`: Community vs Enterprise/Sovereign; quote-based paid editions. `https://element.io/en/hosting` failed too. Searched current official hosted/ESS sources, found `https://element.io/server-suite` explicitly self-hosted + fully managed deployments. Mattermost old migration URL failed; search resolved current `https://docs.mattermost.com/administration-guide/onboard/migrate-from-slack`; upgrade notes say old built-in Slack API/CLI removed, use mmetl/mmctl. Current Slack guide labels supported editions Entry and paid editions; Team import parity therefore unresolved, no claim of verified Team migration.
14. GitHub ESS README FAQ confirms no hard user cap (100 is intended scale), commercial use allowed with license compliance; mark marketing noncommercial positioning as recommendation, not license restriction. Chosen full suite `element-hq/ess-helm` with bundled components, not standalone Element Web client. Pro gates advanced IAM, HA, audit, management (tier B).
15. Retried rsx using writable cache: `env XDG_CACHE_HOME=../rsx-cache rsx analyze zulip/zulip --mode quick --json` → DNS lookup api.github.com failed; GitHub direct metadata fallback retained for all candidates. No health score inferred from failure. Reopened current official ESS server-suite, Mattermost migration guide, Rocket.Chat importer to confirm exact findings.
16. Read centralized `../github/<owner>__<repo>.json` envelope shape; integration capture script plus `github-commands.jsonl` supplies reproducible raw responses. Product fields use current primary edition descriptions; candidate order A then B then C reflects feature freedom, not GitHub stars.
17. Wrote reproducible `build-team-chat.py`, generated `team-chat.json` (2 paid products, 4 OSS, 8 many-to-many alternatives, 3 edition/record exclusions). Used centralized metadata plus directly observed ESS API fields. Corrected license paths from raw license endpoint metadata; validated JSON parse, mapping references, current commit fields and non-archived state with Python assertions. No repository changes, commits, remote writes, or upstream messages.

## Repeated operations worth scripting/testing
- Official category/capability source → distinct paid/OSS product records → explicit many-to-many relation rows.
- Default-branch SHA + SHA-pinned LICENSE; test mixed-license metadata (`NOASSERTION` must not equal source-available), binary vs source licensing.
- Edition matrix extraction; regression fixtures for free proprietary editions vs OSS editions (Mattermost Entry/Team, Rocket.Chat Starter/Community).
- Marketing intended-scale / production recommendation vs enforced user limit / license rights (ESS 100-user and commercial-use FAQs).
- Migration URL redirects and old-command removal detection; tests should fail unsupported one-click/full-fidelity claims.
- Locale-specific price verification, introductory-offer exclusion, annual-vs-monthly normalization.
- rsx permission/DNS failures should yield explicit unavailable status + metadata fallback, never a fabricated score.
