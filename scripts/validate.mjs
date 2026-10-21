import { readFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import { schemas } from '../lib/schemas.mjs';
import { validateCollections } from '../lib/validate.mjs';

const dir = process.argv[2] ? resolve(process.argv[2]) : resolve(import.meta.dirname, '../data/collections');
const ajv = new Ajv2020({ allErrors: true });
addFormats(ajv);
for (const key of ['x-key', 'x-key-case', 'x-source']) ajv.addKeyword(key);
const data = {};
for (const name of Object.keys(schemas)) {
  const raw = await readFile(join(dir, `${name}.json`), 'utf8');
  data[name] = JSON.parse(raw);
  const schema = JSON.parse(await readFile(join(dir, `${name}.schema.json`), 'utf8'));
  if (!ajv.validate(schema, data[name])) throw new Error(`${name}: ${JSON.stringify(ajv.errors)}`);
  const sorted = [...data[name]].sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  if (JSON.stringify(sorted, null, 2) + '\n' !== raw) throw new Error(`${name}: noncanonical formatting or ordering`);
}
validateCollections(data);
console.log('Schema, uniqueness, references, mappings, tiers, activity and formatting valid.');
