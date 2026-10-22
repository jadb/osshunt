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

`osshunt.com` is served by this worker (`routes` with `custom_domain: true` in `site/wrangler.jsonc`). The zone is in the Idea Crafters Cloudflare account and the registrar nameservers point at Cloudflare. `workers_dev` and `preview_urls` stay on, so the workers.dev address and PR preview URLs keep working.

For a new site, the `cfsite` helper (`~/.agents/scripts/cfsite`) scaffolds the workflow, creates the zone, checks and sets the registrar nameservers, creates the scoped deploy token, sets the repo secrets and deploys.

The history backend in `worker/history/` is a separate Worker and is not deployed by this workflow.
