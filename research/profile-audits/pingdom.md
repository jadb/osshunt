> Temporary paths normalized; local setup omitted. Exact original retained locally.

# pingdom research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open pricing and product; inspected Customize your subscription and Enterprise sections. Dynamic prices empty; did not invent dollar amount.
2. web.open /about unexpectedly redirected to outage blog; fallback official /why-pingdom history used.
3. web.search Pingdom founded2007; official history confirms 2007 and 2014 acquisition.
4. web.search SolarWinds Turn/River completion; official April16 2025 press release establishes current private ownership and delisting.
5. Search pricing15/month found2020 PDF; rejected historical rate as current evidence.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "site:pingdom.com \"2007\" \"founded\""}
- web.search_query {"q": "site:pingdom.com \"15\" \"month\" pricing"}
- web.search_query {"q": "SolarWinds Turn River acquisition completed April 2025 official"}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://www.pingdom.com/why-pingdom/
- https://www.solarwinds.com/company/newsroom/press-releases/turnriver-completes-acquisition-of-solarwinds
- https://www.pingdom.com/pricing/
- https://www.pingdom.com/product/

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.

Final parent-level funding scope QA, 2026-10-21:
- Re-read profile, first claim and audit, then web.open {"ref_id":"https://www.solarwinds.com/company/newsroom/press-releases/turnriver-completes-acquisition-of-solarwinds"} and web.open {"ref_id":"https://www.pingdom.com/why-pingdom/"}. Both succeeded.
- Completion press release explicitly calls Turn/River SolarWinds new owner and identifies it as a private equity firm in About Turn/River Capital; equity ownership is supported directly, not inferred from an acquisition announcement alone.
- Decision: retain funded for the current parent group and list Turn/River Capital with explicit parent-level qualification. Independent Pingdom historical direct financing remains unknown. Updated profile notes, routed the general history claim to Pingdom history only, and added a direct funding/owner claim at the press-release heading and public search phrases.
- Re-ran the 21-profile schema validator after the change.
