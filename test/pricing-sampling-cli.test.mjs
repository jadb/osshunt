import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, stat, readFile, utimes } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { withSamplingJournalLock, writeSamplingJournal } from '../scripts/sample-pricing.mjs';
test('CLI journal lock excludes concurrent writers and private atomic save survives normal reopening', async () => {
  const root = await mkdtemp(join(tmpdir(), 'sample-cli-'));
  try {
    const path = join(root, 'journal.json');
    let release, started;
    const gate = new Promise((r) => {
        release = r;
      }),
      begun = new Promise((r) => {
        started = r;
      });
    const first = withSamplingJournalLock(path, async (guard) => {
      started();
      await gate;
      await guard();
      await writeSamplingJournal(path, { value: 'one' });
    });
    await begun;
    await utimes(`${path}.lock`, new Date(0), new Date(0));
    await assert.rejects(
      withSamplingJournalLock(path, async () => {}),
      /locked/,
    );
    release();
    await first;
    assert.equal((await stat(path)).mode & 0o777, 0o600);
    assert.deepEqual(JSON.parse(await readFile(path, 'utf8')), { value: 'one' });
    await withSamplingJournalLock(path, async (guard) => {
      await guard();
      await writeSamplingJournal(path, { value: 'two' });
    });
    assert.deepEqual(JSON.parse(await readFile(path, 'utf8')), { value: 'two' });
  } finally {
    await rm(root, { recursive: true });
  }
});
