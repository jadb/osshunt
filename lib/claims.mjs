import { z } from 'zod';

const claim = z.object({
  claim: z.string().min(1),
  url: z.url().refine(value => ['https:', 'http:'].includes(new URL(value).protocol), 'public HTTP source required'),
  locator: z.string().min(1),
  checkedAt: z.iso.date(),
  evidence: z.string().min(1),
}).passthrough();

export function parseClaims(text, name = 'claims') {
  const lines = text.split(/\r?\n/).filter(line => line.trim());
  if (!lines.length) throw new Error(`${name}: empty claim ledger`);
  return lines.map((line, index) => {
    try { return claim.parse(JSON.parse(line)); }
    catch (error) { throw new Error(`${name}:${index + 1}: ${error.message}`); }
  });
}
