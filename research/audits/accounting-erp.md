> Temporary output paths normalized for portability; local operating setup omitted. Original audit retained locally.

# Accounting / ERP refresh audit — 2026-10-21

3. Listed research directory and inspected centralized snapshots `github/{frappe__erpnext,odoo__odoo,akaunting__akaunting,invoiceninja__invoiceninja}.json` and matching `rsx/*.json`. These record metadata, HEAD commit, LICENSE at HEAD SHA and latest release API commands. Central command ledger: `github-commands.jsonl`; central rsx logs: `rsx-batch-authenticated.log`. No duplicate upstream calls needed. Decoded license payloads to category-local `.license.txt` evidence copies.
4. Inspected `crm.json` canonical `odoo-ce` record. Preserve identity/license/tier; rsx now has successful centrally refreshed result, earlier CRM rate-limit note stale.
5. Web search queries: `site.akaunting.com on premise pricing license BSL 2026`; `site.invoiceninja.com self hosted license 2026 white label`; `site.frappe.io erpnext pricing all features open source`; `site.odoo.com editions accounting community enterprise`. Used official sources only. Found Akaunting BSL transition and Invoice Ninja white-label documentation. Ignored Reddit/third-party results.
6. Opened https://frappe.io/erpnext/pricing — success: self hosting GPL, hosted/support revenue, explicit no paid product feature paywalls. Tier A.
7. Opened https://www.odoo.com/page/editions — timeout. https://akaunting.com/on-premise and https://invoiceninja.com/self-hosting/ — inaccessible; followup official URLs needed.
8. License inspection: ERPNext GPLv3; Odoo explicitly LGPLv3 with bundled GPL-compatible libraries; Akaunting Business Source License 1.1 limits production to two users/one company/1,000 invoices and prohibits accounting-service use; four-year GPL change date does not make current edition OSS. Invoice Ninja ELv2 forbids substantial hosted/managed service and license-key bypass. Akaunting and Invoice Ninja excluded from recommended OSS (tier S evidence recorded in exclusions).
9. Followup opens: https://akaunting.com/plans-on-premise timed out; https://invoiceninja.com/pricing/ redirected to unrelated price-negotiation blog (not used for product pricing); https://invoiceninja.github.io/docs/self-host/self-host-white-labeling succeeded (annual white label fee, admin branding retained).
10. Opened https://quickbooks.intuit.com/pricing/ and https://www.xero.com/us/pricing-plans/ successfully. `find` Simple Start: regular $38/month US, introductory $19/month for three months, free proprietary plan also displayed. `find` Early: regular $27/month US, $2.70 first six months, invoice/bill caps. Regular prices retained in paid records; offers separated in notes.
11. Search `site.odoo.com/blog/business-hacks-1/odoo-community-vs-odoo-enterprise-which-one-should-you-choose-for-your-business-2406 accounting` returned official primary article, crawled today: Community basic invoicing/expenses; Enterprise full accounting, bank sync, OCR. Tier C; partial maps only. Article source URL retained in product JSON.
12. Inspected four centralized rsx objects: successful authenticated analyses, overall 5.3 ERPNext, 5.5 Odoo, 5.9 Akaunting, 6.5 Invoice Ninja. Scores not used to override manual license findings. All four unarchived/active. Odoo latest-release API 404 accurately retained as null, not inferred inactive.
13. Wrote `build-accounting-erp.py` in temporary research directory; ran it to emit `accounting-erp.json`; `python3 -m json.tool ... > /dev/null` passed syntax validation. Two OSI choices (ERPNext A, Odoo Community C), four partial many-to-many relationships, two explicit S exclusions. Deliberately fewer than 3 OSS entries rather than include non-OSI candidates.

## Automation candidates
- Reuse centralized repo metadata/HEAD/LICENSE/latest-release snapshots and decode pinned LICENSE content automatically.
- Normalize absence of releases vs fetch failure; avoid inferring inactivity from 404.
- Detect BSL additional-use production caps and ELv2 restrictions; assert source-available entries cannot appear as OSI recommendations.
- Detect pricing URLs that redirect to blog articles; extract regular vs promotional price separately.
- Shared product identities should combine category coverage while allowing category-specific fit and edition caveats.

Integration: retained Akaunting and Invoice Ninja as labelled S product records, outside default OSS recommendations, as the planned model requires. Existing exclusion health/license facts reused; first-party cloud availability checked at https://akaunting.com/plans and https://invoiceninja.com/. No recommendation edges added for these exclusions.
Integration website check: /pricing/ redirected to an unrelated negotiation article; followed official Pricing navigation to https://invoiceninja.com/pricing-plans/ and verified hosted offer. Stored actual navigation target.
