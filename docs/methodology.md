# Curation and ranking

Use the catalog to discover potential replacements. Confirm the particular workflow before migrating.

## Audience order

Audience rank estimates potential business reach across roles and company sizes. Cross-functional tools precede tools for a specific department; specialist developer/operator tools follow. Sources establish the intended use cases, not comparable population counts. No headcount, market-share or numerical TAM claim is made. Adjacent positions are editorial judgments, with overlapping audiences. Do not sum audiences: the same person uses several categories.

The initial scope contains 24 categories, not 24 paid products. The next 24 are proposed research categories, separate from the verified seed. Narrower categories can overlap broad suites where the buying/search intent differs.

## Openness and preference

- A: identified self-hosted software edition has no paid functionality gates; paid hosting/support may exist.
- B: paid enterprise administration, identity, audit or compliance extras.
- C: daily-workflow functionality, capacity, collaboration or essential integrations require a paid edition/module.
- S: identified core/full-stack edition uses a source-available, non-OSI license. Excluded from default OSS results.
- U: material license scope or feature-parity uncertainty. Excluded from default OSS results until resolved.

Sort A, B, C inside each paid product; S/U require explicit opt-in. `osi` describes the named core edition, not enterprise folders or every distributed binary. A permissive root license alone does not establish feature parity. Paid downloadable GPL/AGPL modules can still create acquisition friction, so C does not necessarily mean proprietary code.

Vendor-operated push, SMTP, PSTN, storage and managed AI are service costs. Keep them in `serviceLimitations` when they do not remove functionality from the open code. Functional gaps against a paid incumbent belong in migration notes even if an OSS product itself has no paid gates.

## Evidence

Check official license files at an observed commit, edition comparisons, deployment instructions, pricing and repository status. Record unknown prices as null; include billing period, unit, currency and commitment for known prices. Exclude temporary promotions. Retain source links and disagreements rather than filling gaps from memory.

Repository archive/disabled state is a hard exclusion. Last push and latest published release are separate signals. A null release can mean releases happen elsewhere; an active repository can still be a client, mirror or issue tracker rather than the deployable server. Community, enterprise and hosted offerings must be named separately when their licenses differ.

Repository health scores are triage signals. Several underlying metrics are explicitly proxies, and published advisory counts are not a version-specific security assessment. They do not establish audience size or suitability for production.

Mappings are explicit, many-to-many records. `partial` is the normal fit: migration, integrations, deployment work, feature differences and service costs still matter. Reserve `drop-in` for demonstrated compatibility, never marketing claims alone.
