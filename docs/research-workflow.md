# Refresh a category

Keep a chronological audit as research proceeds. Record commands/tool arguments, official URLs, relevant output, failures, fallback and the decision supported. Preserve exact local transcripts separately when they contain machine paths or internal operating context. Published audits normalize temporary output locations; product evidence uses public sources only.

1. Identify the exact deployable product and canonical repository. Confirm redirects, split client/server repositories, read-only mirrors and enterprise distributions.
2. Capture public GitHub evidence:

   ```sh
   python3 scripts/capture-github.py --out research/github owner/repo another/project
   ```

   The helper records metadata, observed HEAD, a license pinned to that SHA, and latest published release. Every request is appended to `research/github-commands.jsonl`; failures are evidence, not empty success. A release 404 must not be interpreted as an archived project. Existing branch-only captures can be pinned with `python3 scripts/pin-evidence.py research/github`.
3. Inspect all licensing boundaries. Read enterprise-folder/custom license exceptions and source-versus-binary terms. Record actual license text when automatic SPDX detection says `NOASSERTION`.
4. Read first-party edition comparisons and pricing. Separate cloud quotas from self-hosted code gates; paid services from proprietary features; paid GPL modules from proprietary ones. A free hosted plan is not evidence of OSS.
5. If root license lookup fails, inspect the repository tree and canonical source host. Preserve exact alternate paths and failed requests; never replace a custom license with a similar SPDX identifier.
6. Check repository health, for example `rsx analyze owner/repo --mode quick --json`. Retain raw results in `research/rsx/`. Use GitHub evidence when checks fail. Authentication may be required; never put credentials in command logs or data.
7. Verify each mapping against the particular paid workflow. Do not generate a full Cartesian product for loosely related products. Capture migration/import constraints and external-service requirements.
8. Record price units, currency, billing commitment and minimum seats. Use null for unresolved/quote prices. Keep uncertainties in category research.
9. Append material license, feature, hosting, price and migration claims to `research/claims/<category>.jsonl`: `claim`, official `url`, page `locator`, `checkedAt` and evidence paraphrase. Preserve extra product/type provenance.
10. Assemble, build and validate. Review tier changes and duplicate-product merge decisions before committing refreshed snapshots.

## Repeatable work already scripted

- Repository metadata, archive state, commit, pinned license and release capture.
- Per-request command audit, including nonzero exit status and timeouts.
- Canonical repository rename lookup when shared evidence uses a historical namespace.
- Shared repository captures and authenticated health results reused across categories.
- Validated claim ledgers with dates, page locators and evidence; second batch fully covered.
- Official release evidence retained when mirrors have no release, with date precision preserved.
- Cross-category product deduplication and explicit merge decisions.
- Deterministic collections, schema generation, override validation, graph checks and catalog rendering.

## Next scripts worth building

| Repeated work | Proposed improvement | Guard that must accompany it |
|---|---|---|
| Find pricing/edition matrix across changing documentation URLs | URL registry per product, stable section fingerprints | Stale pages and redirects must not silently retain old tier |
| Root license differs from enterprise folders or binaries | License-boundary inventory and changed-file diff | Root MIT must not classify a restricted complete stack as OSS |
| Hosted quotas mistaken for self-host limits | Separate deployment/edition/service fields in evidence extraction | Same product, cloud quota vs self-hosted unlimited fixture |
| License text automatic detector returns NOASSERTION | Flag for manual SPDX review | Never auto-convert unknown or modified license to OSI |
| Tag/latest release is beta or repository mirror has no releases | Record stable-release channel and canonical release source | Prerelease must not become stable; mirror null must not imply dead |
| Multiple official prices disagree or vary by locale | Structured locale/currency/commitment capture | Promo vs standard, per-seat vs minimum organization fee |
| Manual audience ordering | Buyer-role taxonomy plus comparable adoption evidence when available | Never combine customers, seats, downloads and website visits as one metric |
| Repeated failed HTTP/tool attempts | Domain-specific fetch strategy and bounded retry | Preserve failure status; test auth failure, rate limit, 404 and timeout |

## Verification already included

Contract tests cover duplicate/normalized IDs, orphan/duplicate overrides, immutable IDs, RFC 7386 array/null semantics, YAML 1.2 scalars, duplicate YAML keys, broken/directed edges, unknown categories, source-available OSI mislabelling, tier-A feature gates, archived projects and URL formats. Evidence tests require license requests to use observed commits and preserve release failures. Assembly tests require explicit evidence paths and canonical repository alias matching, preservation of reviewed release sources, calendar-only dates, unknown API flags and one-time billing. New claim ledgers require public source URLs, dated page locators and nonempty evidence.

Seven regression guards were checked by deliberately reintroducing defects: the headless store adapter, unpinned license request, discarded schema defaults, collapsed product IDs, collapsed mapping IDs, lost shared-product restrictions and erased canonical release evidence. Their regression checks failed with the defects restored and passed after restoration. The evidence is in `research/mutation-results.json`.

## Evidence improvements still needed

Web edition/pricing claims currently retain checked-date URLs, paraphrases and tool steps; every rendered page body or screenshot is not frozen for replay. The second batch adds validated claim ledgers with stable section locators; backfill these for the first batch. Timestamped comparison-table captures and explicit supersession records remain improvements. Compact evidence projections would avoid repeated truncated output; shared authentication/cache preflight would avoid repeated permission/rate-limit failures. Test checkbox/icon interpretation, recommended versus enforced capacities, first-party versus third-party hosting, and stale error notes superseded by later successful captures.

## Product profile enrichment

For each stable product ID, research organization history, ownership and funding through first-party histories, investor announcements and filings. Record historical investor names without implying current cap-table ownership. Open alternatives also require sponsor/backing evidence, supported production deployment dependencies and documented installation shortcuts.

Use `research/profiles/<id>.json`, `research/profile-claims/<id>.jsonl` and `research/profile-audits/<id>.md`. Claims need actual page headings or searchable locations, not just JSON field names. Preserve every search, failed URL and fallback in chronological order. Source bodies are not universally archived.

Recurring work worth scripting: company-entity source registry shared across products; direction checks for money raised versus investments made (an issuer filing can describe its stake in another company); locale and billing-selector capture; company versus project age reconciliation; sponsor/investor/customer relationship checks; production Compose dependency extraction with environment-controlled optional services; template-link freshness checks. Automated extraction must retain human verification for sponsor relationships, source interpretation and competitive assessments.

New contract checks reject duplicate pricing roles, numeric sales quotes, nonzero free plans, ungrouped dependency alternatives, unsupported sponsor labels, bootstrap/investor conflicts, future founding dates and empty installation offerings. Assembly preserves project-versus-company age and rejects orphan profiles. The coverage report lists missing profiles, unresolved funding/ownership/year facts and pricing statuses rather than hiding unknowns.
