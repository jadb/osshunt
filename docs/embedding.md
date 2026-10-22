# Embed a website history player

## Any website: paste an iframe

Paste this into the page's HTML or a CMS custom-HTML block. It shows only the selected player's heading and controls, without the full product index:

```html
<iframe
  src="https://osshunt-history.ideacrafters-llc.workers.dev/embed.html?product=wordpress"
  title="WordPress website history"
  width="100%"
  height="760"
  style="border: 0; display: block;"
  loading="lazy"
  allow="fullscreen"
  allowfullscreen>
</iframe>
```

Change `wordpress` to a catalog ID, and update the accessible `title`. Find IDs in the [catalog API](https://osshunt-history.ideacrafters-llc.workers.dev/api/catalog) or the `product` query parameter when choosing an entry in the [gallery](https://osshunt-history.ideacrafters-llc.workers.dev/). Examples: `wordpress`, `nextcloud`, `google-workspace`. IDs are catalog identifiers, not website URLs. Multiple independent iframes can appear on one page.

The width follows its container. Start with a height of 760 pixels; adjust for your layout. Narrow screens, long messages or enlarged browser text may need more height; the iframe can scroll. Height is explicit rather than automatically synchronized with the parent page. `loading="lazy"` delays loading until the frame approaches the viewport; remove it when immediate loading is preferred.

### What the embedding page needs

- A modern browser with JavaScript enabled and an internet connection.
- Permission to insert an iframe. Some CMS plans or editors remove iframe HTML; use their supported embed/custom-HTML feature.
- If the parent page sets Content Security Policy, allow `https://osshunt-history.ideacrafters-llc.workers.dev` in its existing `frame-src` directive. Preserve its other policies and allowed hosts.
- Keep the fullscreen attributes for the enlargement control. A parent `Permissions-Policy` can still disallow fullscreen; the player then uses an in-frame dialog.

No API key, login, package installation, database, parent-page JavaScript or cross-origin API configuration is required on the embedding website. The hosted iframe loads its module, stylesheet, API and images from the same backend origin. Custom sandbox restrictions can block JavaScript, requests or outbound archive links; the snippet does not add a sandbox. [Browser iframe reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe).

The hosted OSSHunt service must remain online. Its backend performs archive discovery and retains copies; the visitor's browser is not a screenshot renderer. Existing archive images must be available for the selected product. A listed product can legitimately show an empty, pending or temporarily unavailable history. [Current coverage and source limits](website-history.md#verification).

## Native component on your own website

Use this when the page and history backend share an origin, including through your site's reverse proxy:

```html
<script type="module" src="/history-player.mjs"></script>
<website-history product-id="wordpress"></website-history>
```

Publish these three files together at the paths shown, or together in a subdirectory and update the script URL:

```text
public/history-player.mjs
public/history-utils.mjs
public/history.css
```

The module imports its helper and loads the stylesheet relative to its own URL. The stylesheet applies inside the component's shadow root. Load the module once per page, then add as many `<website-history>` elements as needed. No framework is required. To switch products, change the `product-id` attribute. The component emits a bubbling `framechange` event with `event.detail = { frame, index, total }` after an image loads.

The backend must handle these routes on the **page's origin**:

| Route | Purpose |
| --- | --- |
| `GET /api/history/:id` | Read the persisted manifest |
| `POST /api/history/:id/refresh` | Attempt initial or due discovery; empty request body |
| `GET` / `HEAD /api/history/:id/frames/:frameId/image` | Read or fill an immutable image copy; HEAD never fetches an uncached source image |
| `GET /api/catalog` | Optional product selector; required by the full gallery |

If reverse proxying the hosted service, forward the complete `/api/` path and supported methods; preserve status, `Content-Type`, `Cache-Control`, `ETag` and `Retry-After` headers. Serve modules over HTTP(S) with a JavaScript MIME type, rather than opening the page as a `file:` URL. A restrictive page policy must permit the module/styles, API connections and image URLs. [Browser module requirements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

`api-base="https://another-backend.example"` changes the API origin, but does not enable CORS. The deployed service deliberately does not expose a cross-origin JavaScript API. Loading its module directly from another website also requires module CORS headers. Use the iframe above for another website, or serve the assets locally and reverse proxy the API. A separately configured backend could opt into explicit cross-origin access; that is additional hosting configuration.

## Run your own backend

Embedding the hosted iframe needs none of this. Independent hosting requires the files above, `public/catalog.json`, the backend code and persistent storage:

- **Cloudflare:** a deployed Worker with `ASSETS` bound to `public/`, migrated D1 binding `DB`, and R2 Standard binding `MEDIA`. Keep the R2 bucket free of completed-image expiry rules. Use the setup in [Website histories](website-history.md#cloudflare-backend).
- **Node:** Node 22+ and a server running `npm run history:serve`. Preserve `.local/history/` on a persistent disk; deploy behind HTTPS when embedding on an HTTPS website. The default server is loopback-only; choose the host/port intentionally for a hosted deployment. No Redis or separate SQL server is required by this filesystem backend.

The backend needs outbound HTTPS access to `web.archive.org` for discovery and first image copies. Existing cached copies continue to work during source outages or cooldowns. Archive requests identify the application and reject redirected timestamps, non-image responses and oversized images. Embedding sites never receive storage credentials.

New checks are driven by visits or the explicit backfill command, not a scheduled crawler. The first successful discovery can backfill older dates at least 30 days apart; later checks add at most one new eligible frame per landing page every 30 days. Failed attempts retain their monthly gate. Shared archive rate limits pause new source requests across all embeds, with a one-hour minimum cooldown. Images already copied have no application expiry and are not fetched again. Storage still depends on the hosting account, retained bucket/disk and provider allowances; indefinite retention does not mean unlimited free storage.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Blank iframe | CMS preserved the iframe; URL correct; parent CSP permits the host; JavaScript allowed |
| Controls clipped | Increase the iframe height; check parent CSS sizing |
| Unknown product or no player | Use a catalog ID in `?product=ID`; a native element needs `product-id="ID"` |
| Native component appears empty | Module, imported helper and stylesheet all return 200 with correct MIME types; use HTTP(S) |
| Browser reports CORS failure | Use the iframe or a same-origin API proxy; `api-base` alone does not grant access |
| Empty/pending/unavailable history | Review coverage, stored error and cooldown; do not remove reservations or repeatedly fetch the source |
| New frames stop after a restart | Retain the backend's database and image storage; apply both D1 migrations when self-hosting |
