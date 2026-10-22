# Work with the collections

Three collections: `categories`, `products`, `alternatives`. Paid and community products share stable IDs; mapping records join `from` paid IDs to `to` community IDs. A product can appear in multiple categories and map to several incumbents.

`products[].profile` adds organization history, ownership/funding and known investors, four pricing roles with separate base/usage amounts and units, moat assessments and exactly three product reasons. Alternative profiles also include sponsorship, dependency alternatives/optional requirements and installation shortcuts. Reviewed profile inputs join by stable ID from `research/profiles/`; their claim ledgers and audits remain separate. [Field interpretation](product-profile-methodology.md), [coverage](../research/enrichment-manifest.json).

`data/collections/*.json` are deterministic snapshots: top-level arrays, explicit lower-case IDs, ID order, two-space JSON and final newline. Metadata belongs in adjacent generated JSON Schemas. Schema factories accept the consumer's zod instance. There are no timestamps refreshed merely by building.

1. Edit reviewed category research under `research/categories/`.
2. Run `python3 scripts/assemble.py research/categories` to assemble source records and refresh shared GitHub/health evidence. Review `research/merge-decisions.json` for product deduplication.
3. Apply editorial corrections in `data/collections/NAME.overrides.yaml`. Keys are case-insensitive IDs. Patches use RFC 7386: null deletes keys; arrays replace wholesale. Orphans, duplicate normalized keys and ID changes fail.
4. Run `make check`. This builds snapshots, validates schemas and references, then runs contract tests.

The factory is the schema source of truth; generated schemas are committed. Validation adds constraints JSON Schema/Astro do not guarantee: unique IDs, non-empty collections, valid references, paid-to-community edge direction, shared-category fit, source-available labels, tier consistency and inactive repositories.

For Astro, adapt `examples/astro/content.config.ts` in the future site's `src/` directory. Its `file()` loaders consume committed snapshots offline. No site build requires GitHub credentials. The example is integration guidance, not a built website.

Query directly with jq, for example:

```sh
jq 'sort_by(.audienceRank) | .[] | [.audienceRank,.name,.audienceReach]' data/collections/categories.json
jq '.[] | select(.kind=="oss" and .osi and (.tier=="A" or .tier=="B" or .tier=="C"))' data/collections/products.json
jq '.[] | select(.from=="slack")' data/collections/alternatives.json
```
