const escape = value => String(value ?? 'unknown').replaceAll('|', '\\|').replaceAll('\n', ' ');
const refs = urls => [...new Set(urls)].map((url, i) => `[${i + 1}](${url})`).join(' ');
const price = (value, row) => value === null ? '—' : `${row.currency} ${value}/${escape(row.unit)}`;

export function renderProfile(product) {
  const p = product.profile, org = p.organization;
  let text = `# ${product.name}\n\n[Product](${product.url}) · Checked ${p.checkedAt}. `;
  text += 'Unknown means unverified; not-offered means no matching offering established in the reviewed scope. ';
  text += 'Moats and selection reasons are editorial assessments based on the linked product facts, not proven competitive outcomes.\n\n';
  text += `## Organization\n\n${org.name} (${org.kind}); ownership: **${org.ownership}**; funding: **${org.funding}**.\n\n`;
  text += `Started ${org.foundedYear ?? 'unknown'} (${org.ageBasis}); years active: ${org.yearsActive ?? 'unknown'}; `;
  text += `years in business: ${org.yearsInBusiness ?? 'not established/applicable'}. Ages are approximate calendar-year differences as of ${p.checkedAt}.\n\n`;
  if (org.parent) text += `Parent: ${org.parent}.\n\n`;
  if (org.stockSymbols.length) text += `Listed symbols: ${org.stockSymbols.join(', ')}.\n\n`;
  text += `${org.notes} ${refs(org.sources)}\n\n`;
  text += org.investors.length ? `Known investors: ${org.investors.map(x => `[${x.name}](${x.source})`).join(', ')}.\n\n` : 'Known equity investors: none listed in the reviewed evidence; this alone does not establish bootstrapping.\n\n';
  text += '## Starting prices\n\nMonthly is the monthly-billed amount; annual is the full annual amount. Annual totals derived from annual-billed monthly rates are identified in notes. Minimum quantities, scope and usage denominators matter. A dash is unavailable or unresolved, not zero.\n\n';
  text += '| Role | Plan | Status | Monthly | Annual total | One-time | Minimum | Scope and evidence |\n|---|---|---|---|---|---|---|---|\n';
  for (const row of p.pricingTiers) {
    text += `| ${row.role} | ${escape(row.name)} | ${row.status} | ${price(row.monthlyPrice, row)} | ${price(row.annualPrice, row)} | ${price(row.oneTimePrice, row)} | ${row.minimumQuantity ?? 'unspecified'} | ${escape(row.scope)}. ${escape(row.notes)} ${refs(row.sources)} |\n`;
  }
  text += '\n## Defensibility assessments\n\n';
  for (const item of p.moats) text += `- ${item.claim} ${refs(item.sources)}\n`;
  text += '\n## Three product reasons to consider it\n\n';
  p.productReasons.forEach((item, i) => { text += `${i + 1}. ${item.claim} ${refs(item.sources)}\n`; });
  if (p.alternativeDetails) {
    const { sponsorship, selfHosting, oneClickInstall } = p.alternativeDetails;
    text += `\n## Corporate sponsorship\n\nStatus: **${sponsorship.status}**. ${sponsorship.notes} ${refs(sponsorship.sources)}\n\n`;
    for (const item of sponsorship.organizations) text += `- [${item.name}](${item.url}): ${item.relationship}. [Evidence](${item.source}).\n`;
    text += `\n## Self-operation requirements\n\nMode: **${selfHosting.mode}**. ${selfHosting.notes} ${refs(selfHosting.sources)}\n\n`;
    text += '| Component | Requirement | Alternative group | Applies when | Detail and evidence |\n|---|---|---|---|---|\n';
    for (const item of selfHosting.requirements) {
      text += `| ${escape(item.component)} | ${item.necessity} | ${escape(item.group ?? '—')} | ${escape(item.condition)} | ${escape(item.notes)} ${refs(item.sources)} |\n`;
    }
    const r = selfHosting.resources;
    text += `\nResources: CPU ${r.cpu ?? 'not specified'}; memory ${r.memory ?? 'not specified'}; storage ${r.storage ?? 'not specified'}; OS ${r.os ?? 'not specified'}. ${r.notes} ${refs(r.sources)}\n\n`;
    text += `## One-click and installer options\n\nStatus: **${oneClickInstall.status}**. ${oneClickInstall.notes} ${refs(oneClickInstall.sources)}\n\n`;
    text += 'One-command installers are labelled separately; manual Docker Compose instructions are not one-click deployment.\n\n';
    for (const item of oneClickInstall.options) text += `- [${item.name}](${item.url}): **${item.kind}**, ${item.officialStatus}. ${item.notes} ${refs(item.sources)}\n`;
  }
  text += `\n[Structured profile](../../research/profiles/${p.id}.json) · [Claim ledger](../../research/profile-claims/${p.id}.jsonl) · [Research steps](../../research/profile-audits/${p.id}.md)\n`;
  return text;
}

export function renderProfileIndex(products) {
  let text = '# Product and organization profiles\n\n';
  text += 'Sourced organization history, ownership, funding, investors and pricing; product selection and moat assessments. Alternative profiles also cover sponsors, self-operation dependencies and installation shortcuts. Unknowns remain explicit.\n\n';
  text += '| Product | Organization | Ownership | Funding | Started | Age basis |\n|---|---|---|---|---:|---|\n';
  for (const p of products.filter(p => p.profile)) {
    const org = p.profile.organization;
    text += `| [${escape(p.name)}](products/${p.id}.md) | ${escape(org.name)} | ${org.ownership} | ${org.funding} | ${org.foundedYear ?? 'unknown'} | ${org.ageBasis} |\n`;
  }
  return text;
}
