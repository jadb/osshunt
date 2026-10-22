import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { z } from 'zod';
import { pricingObservation, validatePricingObservations } from '../lib/pricing/schema.mjs';

export async function buildPricingCollection(root = resolve(import.meta.dirname, '..')) {
  const catalog = JSON.parse(await readFile(resolve(root, 'public/catalog.json'), 'utf8'));
  const rows = validatePricingObservations(JSON.parse(await readFile(resolve(root, 'research/pricing/confirmed.json'), 'utf8')), catalog);
  const json = value => `${JSON.stringify(value, null, 2)}\n`;
  await writeFile(resolve(root, 'data/collections/pricing-observations.json'), json(rows));
  await writeFile(resolve(root, 'data/collections/pricing-observations.schema.json'), json(z.toJSONSchema(z.array(pricingObservation(z)), { io: 'input' })));
  await writeFile(resolve(root, 'public/pricing-observations.json'), json(rows));
  console.log(`Pricing history: ${rows.length} confirmed archive observations.`);
  return rows;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await buildPricingCollection();
