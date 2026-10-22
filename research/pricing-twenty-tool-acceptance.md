# Twenty-tool automation acceptance

Frozen parser: 3ebf6a6b75a3bf5a018a5d3ff80bde63a6b6abc0. Fixed window: 2025-06-01T00:00:00.000Z through 2025-06-30T23:59:59.000Z.

This cohort measures existing extraction before any product-specific fixes. Collection completion, extraction coverage, evidence integrity and fact correctness are separate measurements.

- 1Password (1password)
- Bitwarden (bitwarden)
- Confluence (confluence)
- Jira (jira)
- Typeform (typeform)
- Miro (miro)
- HubSpot (hubspot)
- Intercom (intercom)
- Zendesk (zendesk)
- Mailchimp (mailchimp)
- Loom (loom)
- Datadog (datadog)
- Sentry (sentry)
- Google Workspace (google-workspace)
- Microsoft 365 (microsoft-365)
- Squarespace (squarespace)
- Webflow (webflow)
- Ghost (ghost)
- Mattermost Team Edition (mattermost)
- Passbolt Community Edition (passbolt)

## Required collection behavior

- Validate the whole cohort and fixed inputs before reserving or fetching.
- Retain six-calendar-month discovery gates; deny pre-request global cooldown without consuming a new reservation.
- Query only approved Archive endpoints and product scope; retain exact timestamps and link/hint provenance.
- Persist every query, selected record, immutable body identity and processing outcome.
- Resume interrupted work from recorded stages, preserving production checkpoints and reservation ownership.
- Stop the batch on HTTP 429 and honor the shared cooldown; record unattempted products.
- A completed same-journal repeat makes zero source requests.
- Re-extraction operates on cached evidence without changing the frozen baseline.

## Required quality measurements

- Products attempted, gated, unattempted and completed; source requests and cache hits.
- Landings retrieved and verified or qualified; usable historical pricing links versus hints; no-capture and wrong-scope gaps.
- Pricing pages retrieved; pages with no supported structures; raw nonempty extractions.
- Independently reviewed named plan structures and exact offers, including currency, unit, billing basis, conditions and edition/deployment scope.
- Product-level metadata, unnamed offers, unsupported free/quote claims, misleading generic zero prices and unrelated vendor tiers counted as review failures or unresolved cases.
- Per-offer correctness reported over reviewed offers, with unknown fields retained; no confidence claim from a small sample alone.
- Manual interventions and reusable process fixes recorded separately from new product-specific adapters.
- No automatic confirmation. Publication requires per-observation evidence review; qualified legacy digests require explicit acknowledgement.

## Automation boundary

Retrieval, caching, resumable staging, deterministic extraction, evidence checks and review-package generation can be batched. Correct publication and complete six-month histories require separate evidence: this bounded cohort does not establish either by itself.
