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
8. Ran `node --test test/pricing-extract.test.mjs test/pricing-links.test.mjs`: 19 tests passed.
   Reintroduced original defects for space-delimited `/ month`, mixed displayed totals,
   hidden-ancestor billing variants, object-vs-array structured evidence locators and malformed structured specifications;
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
