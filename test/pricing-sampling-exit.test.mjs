import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const run = promisify(execFile);
test('rate-limited CLI returns a retryable exit and leaves untouched products resumable', async t => {
 const directory=await mkdtemp(join(tmpdir(),'pricing-cli-exit-'));t.after(()=>rm(directory,{recursive:true}));
 const preload=join(directory,'source.mjs'),journal=join(directory,'journal.json'),cache=join(directory,'cache');
 await writeFile(preload,"globalThis.fetch = async () => new Response('rate limited', {status:429,headers:{'Retry-After':'3600'}});\n");
 let output;
 try { output={...(await run(process.execPath,['--import',preload,resolve('scripts/sample-pricing.mjs'),'--products','1password,miro','--from','2025-06-01','--to','2025-06-30T23:59:59Z','--cache',cache,'--out',journal],{timeout:5000})),code:0}; }
 catch(error){output=error;}
 assert.equal(output.code,75,'an unattended scheduler must distinguish a source pause from successful completion');
 assert.match(output.stdout,/"stopped":"archive_cooldown"/);
 const saved=JSON.parse(await readFile(journal));assert.equal(saved.requests.length,1);
 assert.equal(saved.products[0].done,false);assert.equal(saved.products[1].status,'pending');assert.equal(saved.products[1].reservation,null);
 assert.equal((await readFile(join(cache,'archive-cooldown.json'),'utf8')).includes('retryAt'),true);
});
