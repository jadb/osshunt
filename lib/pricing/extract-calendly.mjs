import { ancestor, attr, evidence, nodes, text } from './html.mjs';
import { emptyQualifications } from './extract-offers.mjs';

export function calendlyPlans(doc, { originalUrl, issues }) {
  let url; try { url = new URL(originalUrl); } catch { return []; }
  if (url.hostname.replace(/^www\./, '') !== 'calendly.com' || !/^\/pricing\/?$/.test(url.pathname)) return [];
  const selection = nodes(doc, n => attr(n, 'aria-pressed') === 'true' && /Billed (yearly|monthly)/i.test(attr(n, 'aria-label') || ''));
  const billing = selection.length === 1 ? attr(selection[0], 'aria-label') : null;
  const commitment = /yearly/i.test(billing || '') ? 'annual' : /monthly/i.test(billing || '') ? 'monthly' : 'unknown';
  const plans = [];
  for (const card of nodes(doc, n => attr(n, 'data-testid') === 'pricing-plan-card')) {
    const title = nodes(card, n => n.tagName === 'h5')[0];
    const price = nodes(card, n => /(?:^|\s)plan-card__price-wrapper(?:\s|$)/.test(attr(n, 'class') || ''))[0];
    if (!title || !price) continue;
    const literal = text(price), free = /always free/i.test(literal), match = literal.match(/\$\s*(\d+(?:\.\d+)?)(k)?\b/i);
    if (!free && !match) continue;
    let amount = free ? '0' : match[1];
    if (match?.[2]) {
      const [whole, fraction = ''] = amount.split('.');
      amount = fraction.length <= 3 ? `${whole}${fraction.padEnd(3, '0')}`.replace(/^0+(?=\d)/, '') : null;
    }
    const billingPeriod = /\/\s*(?:seat\/)?mo\b/i.test(literal) ? 'month' : /\/\s*yr\b/i.test(literal) ? 'year' : 'unknown';
    const source = evidence(price);
    if (!free && billingPeriod === 'month' && billing) {
      source.locator += ` + ${evidence(selection[0]).locator}`; source.text += `; ${billing}`;
    }
    const offer = { literal, amount, currency: null, billingPeriod,
      commitment: !free && billingPeriod === 'month' ? commitment : 'unknown',
      unit: /\/seat\b/i.test(literal) ? 'seat' : null, minimumQuantity: null,
      qualifications: { ...emptyQualifications(), startingAt: /starts? at/i.test(literal) ? true : null,
        promotion: text(card).match(/Save \d+%/)?.[0] || null }, source };
    plans.push({ name: text(title), order: plans.length, popular: /Recommended plan/i.test(text(card)) ? true : null,
      kind: 'plan', status: free ? 'free' : 'paid', offers: [offer],
      features: nodes(card, n => n.tagName === 'li').map(n => {
        const list = ancestor(n, p => p.tagName === 'ul');
        const siblings = list?.parentNode?.childNodes || [];
        const heading = siblings.slice(0, siblings.indexOf(list)).filter(p => p.tagName).at(-1);
        const addon = heading && /add[ -]on/i.test(text(heading));
        const source = evidence(n);
        if (addon) { source.locator += ` + ${evidence(heading).locator}`; source.text += `; ${text(heading)}`; }
        return { name: text(n), value: addon ? `${text(n)}; ${text(heading)}` : text(n), source };
      }),
      source: evidence(title) });
  }
  if (plans.length) issues.push('Calendly card evidence only; comparison matrix, inherited features, quantity discounts and unselected billing prices remain incomplete', 'Dollar currency unspecified in the archived plan cards');
  return plans;
}
