// README badges for listed open-source alternatives.
// Pure functions: shared by the site build (profile pages, badge index) and the worker that serves /badge/*.

export const SITE = 'https://osshunt.com';
export const LABEL = 'OSSHunt';
export const MAX_NAMED = 3;

// Fit scale is drop-in > partial > different-approach. A badge says "replaces", so only
// mappings where the everyday workflow carries over in whole or in part count.
export const GOOD_FIT = new Set(['drop-in', 'partial']);
// S (source-available) and U (unresolved) stay outside default OSS recommendations.
export const OPEN_TIERS = new Set(['A', 'B', 'C']);

export const STYLES = ['flat', 'flat-square', 'plastic', 'for-the-badge'];

const INK = '#0d0d0d';
const BAND = '#ffd400';
const GREY = '#9f9f9f';
const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Paid tool names to print on the badge, or null when the alternative is not eligible.
 *  maps: every mapping to this alternative as { fit, name } (name = paid tool name). */
export function badgeTools(alt, maps) {
  if (alt?.kind !== 'oss' || !OPEN_TIERS.has(alt.tier) || alt.osi !== true) return null;
  if (alt.health?.archived === true || alt.health?.disabled === true) return null;
  const names = [...new Set(maps.filter(m => GOOD_FIT.has(m.fit)).map(m => m.name))];
  return names.length ? names.sort((a, b) => a.localeCompare(b, 'en')) : null;
}

export function badgeMessage(tools) {
  if (!tools?.length) throw new Error('badge needs at least one paid tool');
  return tools.length > MAX_NAMED ? `replaces ${tools.length} paid tools` : `replaces ${tools.join(' · ')}`;
}

/** { [alternativeId]: { name, tools, message } } for every eligible alternative, keys sorted. */
export function badgeIndex(products, mappings) {
  const byId = new Map(products.map(p => [p.id, p]));
  const into = new Map();
  for (const m of mappings) {
    const from = byId.get(m.from);
    if (!from) throw new Error(`mapping ${m.id}: unknown paid product ${m.from}`);
    if (from.kind !== 'paid') throw new Error(`mapping ${m.id}: ${m.from} is not paid`);
    if (!into.has(m.to)) into.set(m.to, []);
    into.get(m.to).push({ fit: m.fit, name: from.name });
  }
  const index = {};
  for (const p of [...products].sort((a, b) => a.id.localeCompare(b.id))) {
    const tools = badgeTools(p, into.get(p.id) ?? []);
    if (tools) index[p.id] = { name: p.name, tools, message: badgeMessage(tools) };
  }
  return index;
}

export function escapeXml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]);
}

export function normalizeStyle(s) {
  return STYLES.includes(s) ? s : 'flat';
}

// Approximate Verdana 11px advance widths; textLength pins the rendered width to this estimate.
const NARROW = { i: 3.1, j: 3.4, l: 3.1, I: 4.6, f: 3.9, t: 4.3, r: 4.7, ' ': 3.9, '.': 3.9, ',': 3.9, ':': 4.5, ';': 4.5, '!': 4.5, '|': 4.7, "'": 3.4, '·': 4.5, '(': 4.5, ')': 4.5, '[': 4.5, ']': 4.5, '-': 4.6 };
const WIDE = { m: 10.7, w: 8.9, M: 8.9, W: 10.9, O: 8.6, Q: 8.6, D: 8.3, G: 8.4, H: 8.3, N: 8.2, U: 8.1, C: 7.7, '@': 10 };
function textWidth(s, size = 11) {
  let w = 0;
  for (const c of s) w += NARROW[c] ?? WIDE[c] ?? (/[A-Z]/.test(c) ? 7.5 : /[0-9]/.test(c) ? 7 : /[a-z]/.test(c) ? 6.6 : 8);
  return w * size / 11;
}

const GEOMETRY = {
  flat: { h: 20, rx: 3, size: 11, pad: 6, y: 14, gradient: [['0', '#bbb', '.1'], ['1', '#000', '.1']] },
  'flat-square': { h: 20, rx: 0, size: 11, pad: 6, y: 14, gradient: null },
  plastic: { h: 18, rx: 4, size: 11, pad: 6, y: 13, gradient: [['0', '#fff', '.7'], ['.1', '#aaa', '.1'], ['.9', '#000', '.3'], ['1', '#000', '.5']] },
  'for-the-badge': { h: 28, rx: 0, size: 10, pad: 12, y: 18, gradient: null, caps: true, spacing: 1.25 },
};

/** Shields-like two-part badge. Every text slot is escaped; style is whitelisted. */
export function renderSvg({ label = LABEL, message, style = 'flat', labelColor = INK, color = BAND, labelText = BAND, messageText = INK }) {
  const g = GEOMETRY[normalizeStyle(style)];
  const shown = s => (g.caps ? String(s).toUpperCase() : String(s));
  const [l, m] = [shown(label), shown(message)];
  const len = s => Math.round(textWidth(s, g.size) * (g.caps ? 1.1 : 1) + (g.spacing ?? 0) * [...s].length);
  const [lt, mt] = [len(l), len(m)];
  const lw = lt + g.pad * 2;
  const mw = mt + g.pad * 2;
  const w = lw + mw;
  const name = escapeXml(`${label}: ${message}`);
  const weight = g.caps ? ' font-weight="bold"' : '';
  const ls = g.spacing ? ` letter-spacing="${g.spacing}"` : '';
  const grad = g.gradient
    ? `<linearGradient id="osh-s" x2="0" y2="100%">${g.gradient.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}" stop-opacity="${a}"/>`).join('')}</linearGradient>`
    : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${g.h}" role="img" aria-label="${name}">`
    + `<title>${name}</title>${grad}`
    + `<clipPath id="osh-r"><rect width="${w}" height="${g.h}" rx="${g.rx}" fill="#fff"/></clipPath>`
    + `<g clip-path="url(#osh-r)"><rect width="${lw}" height="${g.h}" fill="${escapeXml(labelColor)}"/>`
    + `<rect x="${lw}" width="${mw}" height="${g.h}" fill="${escapeXml(color)}"/>`
    + (g.gradient ? `<rect width="${w}" height="${g.h}" fill="url(#osh-s)"/>` : '')
    + `</g><g text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="${g.size}"${ls}>`
    + `<text x="${lw / 2}" y="${g.y}" fill="${escapeXml(labelText)}" font-weight="bold" textLength="${lt}" lengthAdjust="spacingAndGlyphs">${escapeXml(l)}</text>`
    + `<text x="${lw + mw / 2}" y="${g.y}" fill="${escapeXml(messageText)}"${weight} textLength="${mt}" lengthAdjust="spacingAndGlyphs">${escapeXml(m)}</text>`
    + '</g></svg>';
}

/** https://shields.io/badges/endpoint-badge response body. */
export function shieldsEndpoint({ message, style, isError = false }) {
  const body = { schemaVersion: 1, label: LABEL, message, color: isError ? 'lightgrey' : BAND.slice(1), labelColor: INK.slice(1) };
  if (isError) body.isError = true;
  if (STYLES.includes(style)) body.style = style;
  body.cacheSeconds = isError ? 3600 : 86400;
  return body;
}

const oneLine = s => String(s).replace(/\s+/g, ' ').trim();

/** Copy-paste embeds linking the badge to the alternative's profile page. */
export function snippets({ id, message }) {
  if (!ID.test(id)) throw new Error(`invalid alternative id: ${id}`);
  const profile = `${SITE}/alternatives/${id}/`;
  const image = `${SITE}/badge/${id}.svg`;
  const alt = oneLine(`${LABEL}: ${message}`);
  return {
    profile, image, alt,
    markdown: `[![${alt.replace(/[\\[\]]/g, c => `\\${c}`)}](${image})](${profile})`,
    html: `<a href="${profile}"><img src="${image}" alt="${escapeXml(alt).replace(/&apos;/g, "'")}"></a>`,
    rst: `.. image:: ${image}\n   :target: ${profile}\n   :alt: ${alt}`,
  };
}

const ROUTE = /^\/badge\/([a-z0-9]+(?:-[a-z0-9]+)*)\.(svg|json)$/;
const SVG_HEADERS = {
  'content-type': 'image/svg+xml; charset=utf-8',
  'content-security-policy': "default-src 'none'; style-src 'unsafe-inline'",
  'x-content-type-options': 'nosniff',
  'access-control-allow-origin': '*',
};
const JSON_HEADERS = {
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'access-control-allow-origin': '*',
};

/** Route /badge/<id>.svg and /badge/<id>.json against the badge index. */
export function badgeResponse(index, pathname, params) {
  const hit = ROUTE.exec(pathname);
  const kind = hit?.[2] ?? (pathname.endsWith('.json') ? 'json' : 'svg');
  const entry = hit && Object.hasOwn(index, hit[1]) ? index[hit[1]] : null;
  const style = params?.get('style') ?? undefined;
  const status = entry ? 200 : 404;
  const cache = { 'cache-control': entry ? 'public, max-age=86400' : 'public, max-age=3600' };
  const message = entry ? entry.message : 'not listed';
  if (kind === 'json') {
    return { status, headers: { ...JSON_HEADERS, ...cache }, body: JSON.stringify(shieldsEndpoint({ message, style, isError: !entry })) };
  }
  const svg = renderSvg(entry ? { message, style } : { message, style, color: GREY, messageText: '#fff' });
  return { status, headers: { ...SVG_HEADERS, ...cache }, body: svg };
}
