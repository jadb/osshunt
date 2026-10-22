# Bounded pricing samples

The operator sampler tests archived discovery and extraction on a fixed product cohort and a landing-capture window of at most 31 days. It does not establish complete historical coverage or publish confirmed prices.

```sh
node scripts/sample-pricing.mjs --products PRODUCT_A,PRODUCT_B --from 2025-06-01 --to 2025-06-30T23:59:59Z --cache .local/history --out .local/pricing-samples.json
```

Requests run serially, ten seconds apart by default. Pricing lookup uses at most two approved candidates and captures within 30 days at or before the selected landing. Source pacing occurs before the archive helper's request deadline. A shared rate limit stops the entire batch with at least a one-hour cooldown. Three consecutive product attempts failing due to transport also stop the batch. Unsupported extraction, integrity failures and source gaps retain their own outcomes; missing prices never become free or absent commercial offers.

The private journal freezes product IDs, URLs, scope, approved hosts, hints, date window and parser-file fingerprint. It records query selections, candidate outcomes, immutable body-cache events, extraction proposals, and source URLs/status/timing with a bounded header whitelist. Cookies and raw HTML are excluded. Journal files use atomic replacement and private permissions. Repeating a completed journal makes no source requests. Changing its inputs or parser baseline is rejected; deliberate later extraction changes belong in an offline verification pass.

Resumptions reuse completed query results and reverify cached HTML SHA-256 and archive integrity grades. All saved records are rechecked for product scope, original identity, MIME type and capture window. Proposals retain literal evidence, remain partial, and require maintainer review through an explicit private review-source integration.

A product receives the existing six-month pricing reservation before its first source request. A cooldown denied before any request cancels a new unused reservation. Once a source request occurs, the six-month gate remains. Sampler continuation requires the same checked-at date and an unchanged production checkpoint, with an expired or released lease. Sampling never replaces production checkpoints or proposals: after release, the production initial inventory can continue under that reservation. Completed and gated samples do not automatically retry.

The CLI holds an exclusive journal lock with a random owner token. It never takes over an old lock automatically, including while its owner is suspended. Normal exit releases the lock. After a hard crash, inspect the lock's owner PID and confirm that process has exited before explicitly recovering the orphan lock. Retain the journal and cache; a reserved product may still need its ten-minute lease to expire before continuation. Never remove a lock owned by a live process.
