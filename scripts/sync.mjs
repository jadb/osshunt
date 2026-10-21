import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { z } from 'zod';
import { schemas } from '../lib/schemas.mjs';
import { snapshotLoader } from '../lib/loaders.mjs';
import { validateCollections } from '../lib/validate.mjs';
import { runLoader } from '../lib/run-loader.mjs';

const root = resolve(import.meta.dirname, '..');
const output = process.argv[2] ? resolve(process.argv[2]) : join(root, 'data/collections');
const data = {}, emittedSchemas = {};
for (const [name, factory] of Object.entries(schemas)) {
  const item = factory(z);
  const loader = snapshotLoader({ name, sourceDir: join(root, 'research/source'), overridesDir: join(root, 'data/collections') });
  data[name] = await runLoader(loader, item);
  emittedSchemas[name] = z.toJSONSchema(z.array(item), { io: 'input' });
}
validateCollections(data);
await mkdir(output, { recursive: true });
for (const name of Object.keys(schemas)) {
  await writeFile(join(output, `${name}.json`), JSON.stringify(data[name], null, 2) + '\n');
  await writeFile(join(output, `${name}.schema.json`), JSON.stringify(emittedSchemas[name], null, 2) + '\n');
  console.log(`${name}: ${data[name].length} records`);
}
