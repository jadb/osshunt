import { readFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import { schemas } from '../lib/schemas.mjs';
import { validateCollections } from '../lib/validate.mjs';
import { parseClaims } from '../lib/claims.mjs';

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
const root = resolve(import.meta.dirname, '..');
const additions = JSON.parse(await readFile(join(root, 'research/next-24.json'), 'utf8'));
let claimCount = 0;
for (const addition of additions.filter(row => row.status === 'curated')) {
  if (!data.categories.some(category => category.id === addition.id)) throw new Error(`curated category missing: ${addition.id}`);
  claimCount += parseClaims(await readFile(join(root, `research/claims/${addition.id}.jsonl`), 'utf8'), addition.id).length;
}
console.log('Schema, uniqueness, references, mappings, tiers, activity and formatting valid.');
if (claimCount) console.log(`${claimCount} sourced claims with dates and page locators valid.`);
