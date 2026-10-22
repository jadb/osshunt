> Temporary paths normalized; local setup omitted. Exact original retained locally.

# easyappointments — research audit 2026-10-21


1. Opened homepage, features, Premium, agency, anniversary history and documentation archive. Initial /documentation/installation-guide/ failed; correct /documentation/installation/ found by search.
2. Queries: EasyAppointments funding sponsors site:easyappointments.org; excluded unrelated easy-appointments.com WordPress plugin by Nikola Loncar. Agency site verifies business fallback, not its customer logos as sponsors.
3. Read 1.6.1 composer manifest, stable config sample and develop README. Stable README fetch cache-missed twice; explicit stable PHP>=8.2 overrides stale generic developer portal PHP7.4 / installation PHP7.2. Raw stable application/config/email.php cache miss; official email guide and official Docker SMTP README used instead.
4. Queries: site:easyappointments.org SMTP installation Softaculous EasyAppointments; site:easyappointments.org SMTP 1.6. Official Softaculous announcement found. Linked www.softaculous.com/softaculous/apps/others/EasyAppointments fetch inaccessible; provider search result softaculous.net/apps/others/EasyAppointments lists 1.6.0. Official deployment guide retained with version caveat.
5. Product now stable 1.6.1 released Oct19 2026. No invented hardware minimum. Premium business/enterprise rows explicitly services/licensing scope, not invented software editions.

Primary URLs read / decisions documented in claim ledger:
- https://alextselegidis.com/
- https://easyappointments.org/blog/10th-anniversary-how-did-it-all-start/
- https://easyappointments.org/
- https://easyappointments.org/premium/
- https://easyappointments.org/features/
- https://raw.githubusercontent.com/alextselegidis/easyappointments/1.6.1/composer.json
- https://raw.githubusercontent.com/alextselegidis/easyappointments/develop/README.md
- https://github.com/alextselegidis/easyappointments-docker/blob/main/README.md
- https://easyappointments.org/documentation/installation/
- https://easyappointments.org/2022/05/16/how-to-fix-email-delivery-problems/

Persistence command: execute group-local build script; write profile JSON, claims JSONL, and audit markdown. Amounts unknown where billing term or numeric price could not be established. Assessments explicitly distinguished from vendor facts.

Final QA: schema validated all 22 profiles. Commands: python3 records01.py through records06.py (group-local absolute paths); python3 finalize.py; node scripts/validate-profiles.mjs profiles. Initial `python` executable absent; used python3. Claim headings normalized to public page sections/searchable phrases; no JSON machine field used as locator. Full public fetch-result chronology retained in group-local research-web-log.txt (research batches 1–46), including failed URL attempts. Validation command only reads profile files when custom directory supplied; separate parseClaims check validates ledgers.
