# Pricing extraction audit — 2026-10-22

No Internet Archive requests made for this parser work. Fixtures are synthetic requirements, not historical price claims.

## Steps and sources

1. Read approved historical-pricing design and existing collection/dependency conventions.
2. Ran `rsx analyze inikulin/parse5 --json`: repository health 6.4/10; embedded balanced policy passed.
   Explicit policy subcommand unavailable because its policy loader is not wired; details in dependency record.
3. Queried `npm view parse5 time --json`, `npm view parse5@8.0.1 license dependencies --json`,
   `npm view entities time --json`, `npm view entities@8.1.0 license engines --json`.
   Selected mature exact parse5 pin, with locked entities version; both over 14 days old.
4. Consulted primary [parse5 parse API](https://parse5.js.org/functions/parse5.parse.html),
   [Schema.org Offer](https://schema.org/Offer) and
   [UnitPriceSpecification](https://schema.org/UnitPriceSpecification). No script execution or external asset retrieval.
5. Installed with `npm install --ignore-scripts --save-exact parse5@8.0.1`;
   `npm audit --json` reported zero known advisories. Empirically verified parser source offsets and entity decoding.
6. Wrote extraction/link tests before implementation; both files failed with missing-module errors.
7. Implemented inert parsing, conservative card/table/JSON-LD proposals and scoped historical links.
8. Ran `node --test test/pricing-extract.test.mjs test/pricing-links.test.mjs`: 20 tests passed.
   Reintroduced original defects for space-delimited `/ month`, mixed displayed totals,
   hidden-ancestor billing variants, object-vs-array structured evidence locators and malformed structured specifications and pricing-link ranking;
   regression guards failed as expected, restored fixes, suite passed.
9. Bundled extraction with esbuild `--bundle --format=esm --platform=browser --target=es2022`;
   imported bundle and checked structured offer extraction. No Node built-ins required.

## Extraction boundaries

Exports match the shared pricing contracts. Evidence retains source offsets and bounded literal text;
JSON-LD adds actual object/array paths. Proposals preserve exact decimals, explicit currency, billing period versus
commitment, unit/minimum quantity, regional/locale/tax/promotional/range/volume conditions and feature-table values.
Unknown `$` currency, ambiguous decimal separators, competing displayed totals and variant activation remain unknown.
Quotes never become zero. Source offers are never current profile facts.

Supported initial structures: explicitly grouped pricing cards, regular comparison tables and named JSON-LD Offers.
Complex spanned tables, unknown templates and client-rendered prices remain unavailable or partial. Semantic structured
billing durations are not converted into billing frequency; contractual duration and price denominator differ.
Generic results remain partial pending review; no assertion that every possible plan or hidden feature was recovered.
No normalization of plan identities across observations. Every proposal still requires independent confirmation.

Link scope: public HTTP(S), same product host or explicit approved vendor host; rejected credentials, non-default ports,
local/IP identifiers and unrelated hosts. Shared repository hosts require a product path; catalog product path scopes
exclude other vendor products. Current hints retain distinct provenance. Safe archived base/replay links unwrap to
original targets. No URL guessing, DNS/network validation, archive capture selection or live fetching performed here.

Explicit pricing links rank above generic comparison navigation; current-source hints remain last.
The original link fixture asserted DOM order, not a discovery requirement; changed it to assert URL membership while
a separate regression enforces pricing-first ranking. Original unsorted implementation fails that regression.

## Extraction correctness review — 2026-10-22

Added independent guards for offer-local commitments, negated free wording, numeric JSON precision, popularity labels,
hidden sources and scoped vendor links. All six initial guards failed before changes. Restored the original affected
modules after fixes; all new regression guards failed again; restored fixes and passed the complete focused suite.
Separate numeric subtests demonstrated original defects for `9007199254740993`, `0.123456789012345678901` and `12.50`;
separate minimum-quantity guard demonstrated `5.00000000000000001` must not become five seats.

- Multiple offers use their own independent container evidence. Monthly billing cannot inherit a hidden annual offer's
  commitment. Conflicting commitment evidence stays unknown; no automatic choice of annual billing.
- Explicit positive free labels support free status; negated free text cannot produce zero. Quote evidence retained.
- Popularity requires a standalone positive label; arbitrary prose, feature-list mentions and negation do not qualify.
- A sole hidden offer, or an entirely hidden card, retains unknown active-variant status.
- Inert structured data preserves raw JSON evidence, including whitespace and numeric spelling. The standard
  [`JSON.parse` reviver source context](https://tc39.es/ecma262/multipage/structured-data.html#sec-json.parse)
  supplies original number tokens; API behavior empirically probed. A runtime without that context leaves numeric
  prices unknown with an issue instead of publishing rounded values. Exact string-valued prices remain supported.
- Explicit product paths constrain archived-link discovery; approved catalog hints can name other same-host paths,
  but remain `current-source-hint` evidence and cannot establish historical linkage. Catalog scope generation belongs
  to the integration layer.

Final focused run: `node --test test/pricing-extract.test.mjs test/pricing-links.test.mjs`, 32 tests/subtests passed.
Full repository check passed with 134 Node tests and 5 Python tests before the final separate numeric guards;
those additional guards passed in the final focused run. Browser-targeted ESM bundle preserved the large integer token.
No dependency changes or archive requests made for these corrections.
