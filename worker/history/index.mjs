import { createArchiveApplication } from '../../lib/pricing/application.mjs';
import { CloudflareHistoryStore } from '../../lib/history/stores-cloudflare.mjs';
import { CloudflarePricingStore } from '../../lib/pricing/stores-cloudflare.mjs';
import { preserveHistoryRequest } from './request-lifecycle.mjs';

const services = new WeakMap();
async function service(env, origin) {
  if (!services.has(env.DB)) {
    const pending = (async () => {
      const [response, observations] = await Promise.all([
        env.ASSETS.fetch(new Request(`${origin}/catalog.json`)),
        env.ASSETS.fetch(new Request(`${origin}/pricing-observations.json`)),
      ]);
      if (!response.ok || !observations.ok) throw new Error('Catalog unavailable');
      const historyStore = new CloudflareHistoryStore(env.DB, env.MEDIA);
      return createArchiveApplication({ catalog: await response.json(), confirmed: await observations.json(),
        historyStore, pricingStore: new CloudflarePricingStore(env.DB, env.MEDIA, { historyStore }) });
    })();
    services.set(env.DB, pending);
    pending.catch(() => services.delete(env.DB));
  }
  return services.get(env.DB);
}
export default {
  async fetch(request, env, context) {
    if (!new URL(request.url).pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
    return preserveHistoryRequest(async () => {
      try { return await (await service(env, new URL(request.url).origin)).fetch(request); }
      catch { return Response.json({ error: 'History is temporarily unavailable' }, { status: 503 }); }
    }, context);
  },
};
