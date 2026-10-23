// Serves /badge/<id>.svg and /badge/<id>.json; every other path goes straight to static assets.
import { badgeResponse } from '../lib/badges.mjs';

let index;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith('/badge/')) return env.ASSETS.fetch(request);
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', { status: 405, headers: { allow: 'GET, HEAD' } });
    }
    if (!index) {
      const res = await env.ASSETS.fetch(new URL('/badges.json', url));
      if (!res.ok) return new Response('Badge index unavailable', { status: 503, headers: { 'retry-after': '60' } });
      index = await res.json();
    }
    const r = badgeResponse(index, url.pathname, url.searchParams);
    return new Response(request.method === 'HEAD' ? null : r.body, { status: r.status, headers: r.headers });
  },
};
