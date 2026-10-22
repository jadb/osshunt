> Temporary paths normalized; local setup omitted. Exact original retained locally.

# LimeSurvey Community Edition research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Opened current Cloud pricing, CE community, license/trademark, manual and installation. /about-us and /company inaccessible.
3. Searched official LimeSurvey/saas.group ownership/funding, sponsors and history: no primary transaction or company start statement verified. No bootstrap inference made.
4. Pricing rendered Japanese yen and placeholder feature keys; retained directly displayed yen Business annual calculation and caveat. Best price badge does not meet popular-plan rule.
5. Current CE manual lists MariaDB/MySQL/MSSQL/PostgreSQL separately and LS major-specific PHP compatibility.

## Source review and decisions
- Open/read `https://www.limesurvey.org/legal-notice`; public locator: Operator and Contact; Representation. Decision: LimeSurvey GmbH is the operator, Hamburg commercial register HRB137625.
- Open/read `https://www.limesurvey.org/legal-notice`; public locator: Representation — Handelsregister Hamburg. Decision: German privately organized GmbH; ultimate shareholders not established.
- Open/read `https://community.limesurvey.org/licence-trademark/`; public locator: License & Copyright. Decision: Project license carries 2003 copyright but no precise start or corporate founding verified.
- Open/read `https://community.limesurvey.org/`; public locator: Contribute; ComfortUpdate Extension. Decision: Official community and commercial pages checked; no primary equity funding statement located.
- Open/read `https://community.limesurvey.org/licence-trademark/`; public locator: License & Copyright. Decision: Community Edition: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://www.limesurvey.org/pricing`; public locator: Basic / Expert / Business / Corporate cards. Decision: Expert has Best price label, which is not Most popular or Recommended; no qualifying designation verified.
- Open/read `https://www.limesurvey.org/pricing`; public locator: Business — billed annually. Decision: Business: published; monthly=None; annual total=122904; JPY/cloud survey account. Current localized page displays JPY10,242/month billed annually ×12. Also displays underlying EUR693 equivalent; local reference exchange rates can change. Cloud scope distinct from CE and paid ComfortUpdate.
- Open/read `https://www.limesurvey.org/pricing`; public locator: Corporate — Contact sales. Decision: Corporate: quote; monthly=None; annual total=None; USD/cloud organization. Tailored survey solution via sales; no fixed price.
- Open/read `https://www.limesurvey.org/manual/LimeSurvey_Manual`; public locator: Quick start guide — ExpressionScript; Check question logic. Decision: ExpressionScript and question logic enable complex branching, calculations and validation in research questionnaires.
- Open/read `https://www.limesurvey.org/manual/LimeSurvey_Manual`; public locator: Multilingual survey; Label sets. Decision: Multilingual surveys and reusable label sets support international research without separate questionnaire systems.
- Open/read `https://www.limesurvey.org/manual/LimeSurvey_Manual`; public locator: Survey participants; Quotas; Exporting results. Decision: Participant management, quotas and statistical exports support controlled survey sampling and analysis.
- Open/read `https://www.limesurvey.org/manual/LimeSurvey_Manual`; public locator: Question types; Survey participants; ExpressionScript. Decision: A mature research-oriented question/logic model and reusable survey assets create expertise and migration costs for established research teams.
- Open/read `https://community.limesurvey.org/`; public locator: Contribute; Operator and Contact. Decision: Community contribution and donation sources checked without a verified corporate sponsor roster. Verified LimeSurvey GmbH business operator supplied as fallback; commercial partners are not automatically sponsors.
- Open/read `https://www.limesurvey.org/legal-notice`; public locator: Contribute; Operator and Contact. Decision: LimeSurvey GmbH: business-steward
- Open/read `https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE`; public locator: Make sure you can use LimeSurvey on your website. Decision: PHP: required. Always. LS7:8.1.29+ tested through8.4; LS6:8.1–8.3. Match installed major.
- Open/read `https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE`; public locator: minimum set of requirements. Decision: MariaDB 10.3.38+: one-of. Choose one supported SQL database. Documented deployment component.
- Open/read `https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE`; public locator: minimum set of requirements. Decision: MySQL 8+: one-of. Choose one supported SQL database. Documented deployment component.
- Open/read `https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE`; public locator: minimum set of requirements. Decision: Microsoft SQL Server 2019+: one-of. Choose one supported SQL database. Documented deployment component.
- Open/read `https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE`; public locator: minimum set of requirements. Decision: PostgreSQL 14+: one-of. Choose one supported SQL database. Documented deployment component.
- Open/read `https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE`; public locator: minimum set of requirements. Decision: PHP-capable web server and PHP extensions: required. Always. mbstring, correct PDO driver, cURL and default PHP libraries including session, fileinfo, SimpleXML and crypto.
- Open/read `https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE`; public locator: minimum set of requirements. Decision: {'cpu': None, 'memory': None, 'storage': '250 MB minimum application disk', 'os': None, 'notes': 'Disk minimum excludes growing survey uploads and database; CPU/RAM minimum not published in reviewed installation page.'}
- Open/read `https://www.limesurvey.org/manual/Installation_-_LimeSurvey_CE`; public locator: Installation - LimeSurvey CE. Decision: none-found. Official installation manual documents downloading, uploading and configuring application/database and running browser installer; no currently verified official-link marketplace or one-command install option found.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.
