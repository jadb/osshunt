import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import * as cli from '../scripts/sample-pricing.mjs';
test('sampler fingerprint includes new pricing helpers, collection code, CLI and shared archive dependencies', async t => {
  assert.equal(typeof cli.samplingFingerprint, 'function');
  const root = await mkdtemp(join(tmpdir(), 'sampling-fingerprint-'));
  t.after(() => rm(root, { recursive: true }));
  for (const directory of ['lib/pricing', 'lib/history', 'scripts']) await mkdir(join(root, directory), { recursive: true });
  const paths = ['lib/pricing/extract.mjs', 'lib/pricing/proposal.mjs', 'lib/pricing/service.mjs',
    'lib/pricing/sampling.mjs', 'lib/pricing/schema.mjs', 'scripts/sample-pricing.mjs',
    'lib/history/archive.mjs', 'lib/history/selection.mjs', 'lib/history/stores-file.mjs'];
  for (const path of paths) await writeFile(join(root, path), path);
  let previous = await cli.samplingFingerprint(root);
  for (const path of paths) {
    await writeFile(join(root, path), `${path} changed`);
    const current = await cli.samplingFingerprint(root);
    assert.notEqual(current, previous, path);
    previous = current;
  }
  await writeFile(join(root, 'lib/pricing/new-helper.mjs'), 'export const value = true;');
  assert.notEqual(await cli.samplingFingerprint(root), previous);
});
