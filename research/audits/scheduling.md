> Temporary output paths normalized for portability; local operating setup omitted. Original audit retained locally.

# Scheduling refresh audit — 2026-10-21

2. Read central `../github/calcom__cal.com.json` and `alextselegidis__easyappointments.json` with `cat`: output excessively large/truncated (failure of presentation, not evidence collection). Re-read using Python JSON extraction of metadata/license/release/commit fields. Collection provenance and original API commands retained in `../github-commands.jsonl`. No gh invocation in this category task.
3. Official web opens: https://cal.com/pricing, https://easyappointments.org/, https://calendly.com/pricing. Used Calendly Standard $10/seat/month annual; Cal.com Teams $12/user/month annual. Easy!Appointments FAQ says product is free/open-source and lists paid services including customization/hosting/white labeling; did not equate paid custom work to locked edition functionality.
4. Python extraction confirmed calcom/cal.com now resolves to calcom/cal.diy; pinned MIT license at `0f19cc46ef6b6426ee398c670575b3c96be7af9e`, non-archived, latest v6.2.0. Easy!Appointments pinned GPLv3 license at `f6c8a4c2f364bf8c64b1f913a531a7134dcfd3c6`, non-archived, latest 1.6.1.
5. Official web opens: https://cal.diy (redirect https://www.cal.diy/), https://github.com/calcom/cal.diy, https://easyappointments.org/features/. Cal.diy documentation comparison and README show commercial edition split, removed team scheduling/workflows/routing/analytics. README says no hosted Cal.diy; vendor recommends personal/non-production use. MIT permission is not a noncommercial license restriction. Decision: record Cal.com as distinct paid record; Cal.diy OSS tier C relative to its commercial counterpart because ordinary team workflows excluded, not B. Easy!Appointments feature page verifies service/provider scheduling, Google/CalDAV sync, API/webhooks, group sessions, self/managed hosting. Decision: tier A for documented product, custom commissioned additions are services rather than established premium edition gates.
6. Sent concise finding to coordinating researcher: canonical repo/product rename, C classification, no hosted Cal.diy, personal-use recommendation.
7. Read existing centralized rsx JSON reports using Python: `../rsx/calcom__cal.com.json` and `alextselegidis__easyappointments.json`. Existing successful reports include maintenance/activity evidence. Did not re-run rsx. Avoid treating generic rsx commercial-compatibility heuristic as legal judgment: GPL is OSI OSS and permits commercial use. Do not copy unsubstantiated vulnerability counts from summary into product claims.
8. Attempted https://easyappointments.org/services/ with web open: inaccessible. Fallback official homepage FAQ and features page sufficient for stated services; no claim of packaged premium feature parity.
9. Wrote `scheduling.json` using `python3 ../build-scheduling.py`, constructing health from central pinned API evidence and rsx summaries. Two researched OSS products retained; optional Rallly omitted to keep focused appointment-booking scope. No invented third recommendation.
10. Validated JSON parse and required referenced product IDs locally. No publication, PR, commit, or repository change.

## Repeated operations worth scripting / testing

- Resolve GitHub redirects/canonical repo names before assigning product identity; preserve old slug as provenance, not current identity.
- Fetch metadata + default-branch SHA + SHA-pinned license + latest release as one cached bundle; print selected fields, never entire commit diff payload.
- Compare hosted pricing with self-host edition matrix; fail a classifier that labels all MIT products A or all team gates enterprise-only.
- Keep hosted offer specific to product/edition; Cal.com hosting is not Cal.diy hosting.
- rsx report reuse and provenance; reject license-commercial-compatibility heuristics as substitute for actual SPDX/license text.
- Distinguish vendor recommendation from legal restriction; distinguish paid services from packaged feature gates.
