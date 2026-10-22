# Deploy the site

The Astro site in `site/` builds to static files in `site/dist` and is served by a Cloudflare Worker with static assets, worker name `osshunt` (config: `site/wrangler.jsonc`). Cloudflare Pages is now delegated to Workers, so this is the current path.

- Live: https://osshunt.ideacrafters-llc.workers.dev
- Push to `main` that touches `site/`, `data/collections/` or `lib/`: production deploy (`wrangler deploy`).
- Same-repo pull request: preview version uploaded with tag `pr-<number>` (`wrangler versions upload`); the preview URL is in the Cloudflare dashboard under the worker's versions.
- Workflow: `.github/workflows/deploy-site.yml`. Wrangler is pinned to 4.148.0, past the 14-day age gate.
- Repository secrets required: `CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit) and `CLOUDFLARE_ACCOUNT_ID`.
- Local: `cd site && npm ci && npm run build && npx wrangler deploy`.
- Unknown paths return `dist/404.html`.

## Custom domain

Add a route to `site/wrangler.jsonc` once the domain's DNS is a zone in the same Cloudflare account:

```jsonc
"routes": [{ "pattern": "osshunt.com", "custom_domain": true }]
```

Cloudflare then creates the DNS record and certificate on the next deploy. A domain whose nameservers are at another provider is not eligible until its zone is added to the account and the registrar points to Cloudflare's nameservers.

The history backend in `worker/history/` is a separate Worker and is not deployed by this workflow.
