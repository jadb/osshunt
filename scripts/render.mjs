import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = async path => JSON.parse(await readFile(resolve(root, path), 'utf8'));
const [categories, products, edges, next] = await Promise.all([
  read('data/collections/categories.json'), read('data/collections/products.json'),
  read('data/collections/alternatives.json'), read('research/next-24.json'),
]);
const tiers = { A: 0, B: 1, C: 2, S: 3, U: 4 };
const esc = text => String(text).replaceAll('|', '\\|').replaceAll('\n', ' ');
let catalog = '# Business software alternatives\n\n';
catalog += 'Checked 2026-10-21. Audience order is an editorial estimate of potential business reach, not measured market size. ';
catalog += '[Ranking method and tiers](methodology.md). A = ungated; B = enterprise extras; C = daily-workflow gates; S = source-available; U = unresolved. The transparency table includes S/U; default OSS recommendation queries exclude them.\n\n';
catalog += '| Reach rank | Category | Paid incumbents | Candidates, openness order |\n|---:|---|---|---|\n';
for (const c of [...categories].sort((a,b) => a.audienceRank-b.audienceRank)) {
  const paid = products.filter(p => p.kind === 'paid' && p.categories.includes(c.id));
  const candidates = products.filter(p => p.kind === 'oss' && p.categories.includes(c.id))
    .sort((a,b) => tiers[a.tier]-tiers[b.tier] || a.name.localeCompare(b.name));
  catalog += `| ${c.audienceRank} | [${esc(c.name)}](categories/${c.id}.md) | ${paid.map(p=>esc(p.name)).join(', ')} | ${candidates.map(p=>`${esc(p.name)} **${p.tier}**`).join(' · ')} |\n`;
}
const overview = catalog;
await mkdir(resolve(root, 'docs/categories'), { recursive: true });
for (const c of [...categories].sort((a,b) => a.audienceRank-b.audienceRank)) {
  catalog = `# ${c.name}\n\n${c.description}\n\nAudience: ${c.audience}. ${c.audienceRationale}\n\n`;
  catalog += `Use-case sources: ${c.audienceSources.map((url,i)=>`[${i+1}](${url})`).join(', ')}.\n\n`;
  const paid = products.filter(p => p.kind === 'paid' && p.categories.includes(c.id));
  for (const p of paid) {
    const price = p.pricing;
    catalog += `- [${p.name}](${p.url}): ${price.entryAmount === null ? 'entry amount unverified/quote' : `${price.currency} ${price.entryAmount}/${price.unit}/${price.period}`}, ${price.billing} billing. ${price.note} [Pricing](${price.source}).\n`;
  }
  catalog += '\n';
  const candidates = products.filter(p => p.kind === 'oss' && p.categories.includes(c.id))
    .sort((a,b) => tiers[a.tier]-tiers[b.tier] || a.name.localeCompare(b.name));
  for (const p of candidates) {
    catalog += `### ${p.name} — ${p.tier}\n\n${p.classificationReason}\n\n`;
    catalog += `License: ${p.license}; identified core OSI: ${p.osi ? 'yes' : 'no/unresolved'}; self-hostable: ${p.selfHostable ? 'yes' : 'no'}; first-party hosted offer: ${p.hostedOffer ? 'yes' : 'no'}. `;
    catalog += `[License](${p.sources.license}), [edition evidence](${p.sources.features}), [hosting](${p.sources.hosting}), [repository](${p.repo}).\n\n`;
    if (p.locked.length) catalog += `Paid restrictions: ${p.locked.join('; ')}\n\n`;
    if (p.serviceLimitations?.length) catalog += `Service costs/limits: ${p.serviceLimitations.join('; ')}\n\n`;
    catalog += `Repository: pushed ${p.health.pushedAt ?? 'unknown'}; latest commit ${p.health.lastCommitAt ?? 'unknown'}; latest published release ${p.health.lastRelease ?? 'unverified or unavailable'} (${p.health.lastReleaseAt ?? 'n/a'}). ${p.health.rsx}\n\n`;
    for (const edge of edges.filter(a => a.to === p.id && paid.some(x => x.id === a.from))) {
      const from = products.find(x=>x.id===edge.from);
      catalog += `- ${from.name} → ${p.name}: **${edge.fit}**. ${edge.migrationNotes} ${edge.sources.map((url,i)=>`[${i+1}](${url})`).join(' ')}\n`;
    }
    catalog += '\n';
  }
  catalog += `[Category research and unresolved questions](../../research/categories/${c.id}.json) · [Research audit](../../research/audits/${c.id}.md)`;
  if (next.some(row => row.id === c.id && row.status === 'curated')) catalog += ` · [Sourced claims](../../research/claims/${c.id}.jsonl)`;
  catalog += '\n';
  await writeFile(resolve(root, `docs/categories/${c.id}.md`), catalog);
}
await writeFile(resolve(root,'docs/catalog.md'), overview);
const completed = next.length > 0 && next.every(row => row.status === 'curated');
let backlog;
if (completed) {
  backlog = '# Second 24 categories — researched\n\n';
  backlog += 'Completed additions from the original next-24 research list. Global reach positions place these alongside the first batch in the [full catalog](catalog.md). Audience order estimates potential business reach; adjacent ranks remain editorial judgments. A/B/C are eligible OSS tiers; S/U are labelled exceptions.\n\n';
  backlog += '| Global reach rank | Category | Paid incumbents | Candidates, openness order |\n|---:|---|---|---|\n';
  const selected = new Set(next.map(row => row.id));
  for (const c of [...categories].filter(c => selected.has(c.id)).sort((a,b) => a.audienceRank-b.audienceRank)) {
    const paid = products.filter(p => p.kind === 'paid' && p.categories.includes(c.id));
    const candidates = products.filter(p => p.kind === 'oss' && p.categories.includes(c.id))
      .sort((a,b) => tiers[a.tier]-tiers[b.tier] || a.name.localeCompare(b.name));
    backlog += `| ${c.audienceRank} | [${esc(c.name)}](categories/${c.id}.md) | ${paid.map(p=>esc(p.name)).join(', ')} | ${candidates.map(p=>`${esc(p.name)} **${p.tier}**`).join(' · ')} |\n`;
  }
} else {
  backlog = '# Suggested next 24 categories\n\n';
  backlog += 'Research backlog ordered by estimated potential business audience. Candidate examples require license, health, feature-gate and migration checks before inclusion.\n\n';
  backlog += '| Priority | Category | Paid targets | Candidates to investigate | Audience and scope |\n|---:|---|---|---|---|\n';
  next.forEach((row,i)=>{
    backlog += `| ${i+1} | ${row.name} | ${row.paid.map(esc).join(', ')} | ${row.candidates.map(esc).join(', ')} | ${esc(row.audience)}. ${row.sources.map((url,j)=>`[Source ${j+1}](${url})`).join(' ')} |\n`;
  });
}
await writeFile(resolve(root,'docs/next-24.md'),backlog);
console.log('Rendered catalog and next 24.');
