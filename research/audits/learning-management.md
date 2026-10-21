> Temporary paths normalized; local operating setup omitted. Original retained locally.

# Learning management audit — 2026-10-21

- Inspected CWD instruction/context filenames; no matching files returned.
- Listed shared GitHub and rsx captures. Read metadata capture structure for moodle/moodle and openedx/edx-platform. Open edX upstream repository redirects to openedx/openedx-platform; use canonical repository in output.
- Searched existing category paths and product collection for moodle/openedx/talentlms/docebo: no records returned; no existing IDs to preserve.
- Inspected available search tool metadata; use official web sources for current edition/pricing evidence.
- Web search (official-domain targets): Moodle Workplace licensing, Open edX self management, TalentLMS pricing, Docebo pricing. Used official support/product/docs results only; ignored secondary pricing and Reddit.
- Opened https://www.talentlms.com/prices : Core 1–40 users USD119/month, yearly billing; SSO/API/custom reporting listed. Opened https://www.docebo.com/pricing/ : custom quote, enterprise administrative/integration features.
- Opened https://moodle.com/products/workplace/ : HTTP403; fallback official US page found by search. Search snippet explicitly says Workplace not open source and partner licensed.
- Opened https://openedx.org/get-started/ : self-managed software without license fees; provider-managed hosting, nonprofit steward; edX.org explicitly distinct and not hosting for customers' own instances.
- Opened https://docs.openedx.org/projects/edx-platform/en/latest/references/docs/README.html : upstream deployment/licensing documentation.
- Opened https://docs.moodle.org/en/SCORM_activity : upload SCORM/AICC packages and teacher attempt reporting, not proof of standards/version parity.
- Decoded shared LICENSE capture at each current default-branch SHA, read metadata/latest-release responses and rsx scores. Moodle latest GitHub release404, current push present. Open edX latest GitHub release Birch is stale despite current push; retain API release honestly, do not infer inactivity.
- Opened US Workplace page: also403. Opened official Moodle support article above successfully, followed its difference article to https://support.moodle.com/support/solutions/articles/80001074804-difference-between-moodle-workplace-and-moodle-lms : explicit proprietary Workplace confirmation. Followed highlights to https://docs.moodle.org/en/Moodle_Workplace (redirect503 docs) : verified multi-tenancy, recurring certifications, dynamic rules and organizational hierarchies.
- Opened Moodle Features and SCORM FAQ (both redirected503 docs). FAQ confirms SCORM1.2/AICC, no native SCORM2004, third-party Tin Can plugins, no SCORM generation. Avoid assumed TalentLMS Tin Can/cmi5 parity.
- Opened https://openedx.org/the-platform/features/ redirected https://openedx.org/platform/features/ : native authoring, SSO integration and analytics, self-host/provider distinction. No paid core feature gate found; TierA limited to named open platform, provider extensions excluded.
- Web find README License confirms AGPLv3 unless otherwise noted; TalentLMS pricing find SCORM confirms1.2/Tin Can/cmi5 formats. No direct migration importer claimed.
- Raw Moodle README.md, lib/moodlelib.php and public/lib/moodlelib.php web opens failed cache misses; one urllib fallback failed DNS. Stopped raw fetch attempts. Official-domain search for GPL later found https://moodledev.io/general/license explicit later-version grant; used GPL-3.0-or-later with SHA-pinned root COPYING text.
- Classification: Moodle TierB for named proprietary Workplace administration extensions, not for hosting or partner services; base LMS remains OSI. Open edX TierA for open platform, first-party hostedOffer=false; third-party providers not first-party. Moodle hostedOffer=true based on MoodleCloud described as our SaaS.
- Wrote JSON, audit and claims with local builder under /tmp only. Two OSS candidates; no speculative third candidate. Moodle Workplace excluded from OSS recommendations; edX.org excluded as separate commercial course destination.
- Validated JSON parsing, required product/edge references and claims JSONL parsing; outputs2 paid,2 OSS,4 bounded partial/different-approach edges,15 claims. No repository files changed.
