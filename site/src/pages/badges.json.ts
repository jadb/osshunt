import { getCollection } from 'astro:content';
import { badgeIndex } from '../../../lib/badges.mjs';

// Eligible alternatives and their badge text; read by the worker that serves /badge/*.
export async function GET() {
  const [prods, maps] = await Promise.all([getCollection('products'), getCollection('alternatives')]);
  const index = badgeIndex(prods.map((p) => p.data), maps.map((m) => m.data));
  return new Response(JSON.stringify(index), { headers: { 'content-type': 'application/json; charset=utf-8' } });
}
