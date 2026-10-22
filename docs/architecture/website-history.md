# Archived website image history

Approved2026-10-21. Cover all227 catalog products and alternative candidates. Use existing screenshots stored by Internet Archive; preserve their actual image-record dates and exact archived image links. No reconstruction of archived HTML, current-site screenshots, synthetic history or Save Page Now submissions.

## Behavior

Initial backfill selects all available historical screenshot records with at least30days between displayed frames. Later discovery attempts are globally limited to one per landing page every30days, including failed attempts. A successful later check appends at most one newest eligible screenshot. Unavailable periods remain gaps; stored frames remain readable on archive errors.

An accessible browser player provides play/pause, previous/next, speed, date slider, source link and image enlargement. A gallery covers the existing catalog, with a product selector and paid/alternative filters. Every page can embed the same custom element using a product ID.

## Discovery and storage

Enumerate screenshot image records independently of HTML captures. Internet Archive screenshot metadata can have statuscode dash; filtering every record to HTTP200 would erase valid images. Distinguish empty validated results from fetch failures, truncated pagination and rate limits. Follow exact screenshot timestamps, refusing closest-date substitutions.

Metadata and refresh reservations live in CloudflareD1; successful image bytes live in CloudflareR2 without lifecycle deletion. Immutable object keys and source checksums prevent replacement. CDN/browser caching is delivery acceleration; object storage is canonical. Initial historical image bodies may fill on demand or through an explicit backfill command. A repeat image request never refetches an existing object.

Prefer browser-origin image retrieval only where real CORS permission allows reading bytes. Otherwise backend retrieval copies the existing image bytes. Browser uploads require a matching trusted archive digest. Displaying a cross-origin image alone does not grant permission to upload its bytes. No storage credentials ship to the browser.

## Components

- Archive adapter: native fetch, screenshot enumeration, exact replay URLs, deterministic frame IDs,30-day selection and image verification.
- Service: common application core with durable metadata reservations and object storage; Cloudflare bindings for deployment and filesystem storage for local preview. Accept known catalog IDs only, never arbitrary visitor URLs. Bound fetch duration, record count, image bytes and redirects.
- Player: dependency-free browser component and standalone gallery. Explicit pending/empty/error states; frame load failures preserve the last loaded image; playback respects page visibility.

## Public routes

`GET /api/catalog`: catalog array. `GET /api/history/:id`: manifest. `POST /api/history/:id/refresh`: gated initial discovery/monthly append. `GET /api/history/:id/frames/:frameId/image`: cached image or first existing-image retrieval. Cache-only probes must not contact the archive. Optional image upload verifies the trusted archive digest.

A manifest records product, status, frames, checkedAt, nextCheckAt, error and backfillComplete. Frames record id,14-digit timestamp, ISO capture time, original URL, exact source image URL, archive link, MIME type and source digest. Verified dimensions may be added.

## Validation and delivery

Test spacing, exact30-day boundaries, screenshot dash-status records, empty versus failed fetches, concurrent refresh reservations, one monthly append, immutable cache hits, image validation and unsafe URL rejection. Reuse existing collection checks and deterministic builds. Verify the player in a browser using real stored images and empty/error fixtures. Preserve read-only protocol probes and source URLs.

Start with local preview and portable Cloudflare deployment configuration. Production deployment requires working account/bindings; do not claim a deployed cache from configuration alone. Free storage quotas can be exceeded by long histories; image generation costs are absent because all images already exist.
