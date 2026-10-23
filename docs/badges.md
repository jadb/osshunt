# README badges

Open-source projects listed on OSSHunt can show a badge naming the paid tools they are mapped against. Public explanation: https://osshunt.com/badges/ (`site/src/pages/badges.astro`).

## Eligibility

Defined once in `lib/badges.mjs` (`badgeTools`), used by the profile pages, the badge index and the worker.

- `kind: oss`, tier A, B or C (S and U excluded) and `osi: true`.
- Repository health not `archived` or `disabled`.
- At least one mapping with fit `drop-in` or `partial`. Fit scale is drop-in > partial > different-approach; "different approach" means a redesign, so it does not support a "replaces" claim and is never named.

Count on 2026-10-23: 91 of 132 listed alternatives (113 OSS tier A/B/C; 19 S/U). `/badges.json` holds the live list.

## Badge text

Label `OSSHunt` (the wordmark, band yellow on ink). Message `replaces A · B · C`: paid tools from qualifying mappings, deduplicated, alphabetical. More than three: `replaces N paid tools`. Paid tools appear as text only, never logos. Ineligible or unknown ids: grey `not listed` with status 404, so a README never keeps a stale claim.

## Endpoints

| Path | Response |
|---|---|
| `/badge/<id>.svg` | SVG badge; `?style=flat` (default), `flat-square`, `plastic`, `for-the-badge`; any other value renders flat |
| `/badge/<id>.json` | [Shields endpoint](https://shields.io/badges/endpoint-badge) body; a valid `?style=` is passed through as `style` |
| `/badges.json` | Static index `{ id: { name, tools, message } }` built from the collections |

Headers: 200 `cache-control: public, max-age=86400`; 404 `public, max-age=3600`; `x-content-type-options: nosniff`; `access-control-allow-origin: *`; SVG adds `content-security-policy: default-src 'none'; style-src 'unsafe-inline'`. Only GET and HEAD (others 405). Ids must match `^[a-z0-9]+(-[a-z0-9]+)*$`; lookups use own properties only. All SVG text is XML-escaped.

## Serving

`site/worker.mjs` is the worker entry. `run_worker_first: ["/badge/*"]` in `site/wrangler.jsonc` sends only badge paths through it; everything else stays a static asset. The worker reads `/badges.json` from the `ASSETS` binding once per isolate. A deploy rebuilds the index, so data changes reach badges on the next deploy (plus client cache age).

## Profile mark

Eligible pages under `/alternatives/<id>/` show a "Selected by OSSHunt" stamp in the header and a section with the badge plus Markdown, HTML and reStructuredText snippets linking to the profile page (`site/src/components/BadgeMark.astro`).

## Preview

```sh
cd site && npm run build
npx --yes wrangler@4.148.0 dev --compatibility-date 2026-10-13
# http://localhost:8787/badge/appsmith.svg
```

`astro dev` and `astro preview` do not run the worker, so `/badge/*` 404s there. The local workerd in wrangler 4.148.0 supports compatibility dates up to 2026-10-13; the override is local only.

## Corrections and removal

Removal: maintainers delete the README line. Listing corrections and removal requests: hello@osshunt.com (Cloudflare Email Routing, forwarded to the owner), also named on the badges, terms and privacy pages.
