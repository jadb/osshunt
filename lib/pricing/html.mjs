import { parse } from 'parse5';

export function documentOf(html) {
  if (typeof html !== 'string' || html.length > 2_000_000) throw new TypeError('HTML must be a string of at most 2000000 characters');
  return parse(html, { sourceCodeLocationInfo: true });
}
export const attr = (node, name) => node?.attrs?.find(a => a.name === name)?.value ?? null;
export const hasAttr = (node, name) => node?.attrs?.some(a => a.name === name) ?? false;
export function nodes(root, predicate = () => true) {
  const found = [], stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (predicate(node)) found.push(node);
    if (node.childNodes) for (let i = node.childNodes.length - 1; i >= 0; i--) stack.push(node.childNodes[i]);
  }
  return found;
}
export function text(node, { scripts = false } = {}) {
  return nodes(node, n => n.nodeName === '#text' && (scripts || !ancestor(n, n => ['script', 'style', 'template'].includes(n.tagName))))
    .map(n => n.value).join(' ').replace(/\s+/g, ' ').trim();
}
export function ancestor(node, predicate) {
  for (let parent = node?.parentNode; parent; parent = parent.parentNode) if (predicate(parent)) return parent;
  return null;
}
export function evidence(node, value = text(node)) {
  const loc = node.sourceCodeLocation;
  return { locator: loc ? `offset:${loc.startOffset}-${loc.endOffset}` : 'document', text: String(value).slice(0, 4000) };
}
export function inherited(node, name) {
  for (let n = node; n; n = n.parentNode) { const v = attr(n, name); if (v !== null) return v; }
  return null;
}
