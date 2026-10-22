import { createHistoryService } from '../../lib/history/service.mjs';
import { CloudflareHistoryStore } from '../../lib/history/stores-cloudflare.mjs';
import { discoverScreenshots, assertExactReplayUrl } from '../../lib/history/archive.mjs';
import { selectHistoricalFrames, selectNewFrame } from '../../lib/history/selection.mjs';
import { verifyImage } from '../../lib/history/image.mjs';
import { preserveHistoryRequest } from './request-lifecycle.mjs';

const services = new WeakMap();
async function service(env, origin) {
  if (!services.has(env.DB)) {
    const pending = (async () => {
      const response = await env.ASSETS.fetch(new Request(`${origin}/catalog.json`));
      if (!response.ok) throw new Error('Catalog unavailable');
      return createHistoryService({ catalog: await response.json(), store: new CloudflareHistoryStore(env.DB, env.MEDIA),
        archive: { discoverScreenshots, assertExactReplayUrl, selectHistoricalFrames, selectNewFrame, verifyImage } });
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
