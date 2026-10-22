import { createHistoryService } from '../history/service.mjs';
import { discoverScreenshots, assertExactReplayUrl } from '../history/archive.mjs';
import { selectHistoricalFrames, selectNewFrame } from '../history/selection.mjs';
import { verifyImage } from '../history/image.mjs';
import { createPricingService } from './service.mjs';
import { extractPricing } from './extract.mjs';
import { discoverPricingLinks } from './links.mjs';
import { comparePricingHistory } from './compare.mjs';
import { validatePricingObservations } from './schema.mjs';

export function createArchiveApplication({ catalog, historyStore, pricingStore, confirmed = [], fetchImpl = fetch, clock = Date.now }) {
  const published = validatePricingObservations(confirmed, catalog);
  const history = createHistoryService({ catalog, store: historyStore, fetchImpl, clock,
    archive: { discoverScreenshots, assertExactReplayUrl, selectHistoricalFrames, selectNewFrame, verifyImage } });
  const pricing = createPricingService({ catalog, store: pricingStore, fetchImpl, clock, confirmed: published,
    extractor: extractPricing, discoverLinks: discoverPricingLinks });
  return { async fetch(request) {
    if (!new URL(request.url).pathname.startsWith('/api/pricing/')) return history.fetch(request);
    const response = await pricing.fetch(request);
    const body = await response.json();
    if (Array.isArray(body.observations)) body.changes = comparePricingHistory(body.observations);
    return Response.json(body, { status: response.status, headers: response.headers });
  } };
}
