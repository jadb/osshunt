import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const products = JSON.parse(await readFile(resolve(root, 'data/collections/products.json'), 'utf8'));
const profiles = products.filter(p => p.profile);
const tally = values => Object.fromEntries([...new Set(values)].sort().map(value => [value, values.filter(v => v === value).length]));
const sourceProducts = new Map();
function collectUrls(value, urls = new Set()) {
  if (typeof value === 'string' && /^https?:\/\/[^\s]+$/.test(value)) urls.add(value);
  else if (value && typeof value === 'object') for (const child of Object.values(value)) collectUrls(child, urls);
  return urls;
}
for (const product of profiles) {
  for (const url of collectUrls(product.profile)) {
    if (!sourceProducts.has(url)) sourceProducts.set(url, []);
    sourceProducts.get(url).push(product.id);
  }
}
const report = {
  totalProducts: products.length, researchedProfiles: profiles.length,
  researchedAlternatives: profiles.filter(p => p.kind === 'oss').length,
  missingProfiles: products.filter(p => !p.profile).map(p => p.id),
  ownership: tally(profiles.map(p => p.profile.organization.ownership)),
  funding: tally(profiles.map(p => p.profile.organization.funding)),
  unknownFoundedYear: profiles.filter(p => p.profile.organization.foundedYear === null).map(p => p.id),
  fundedWithUnverifiedInvestorNames: profiles.filter(p => p.profile.organization.funding === 'funded' && !p.profile.organization.investors.length).map(p => p.id),
  pricingRoles: Object.fromEntries(['entry', 'popular', 'business', 'enterprise'].map(role => [role,
    tally(profiles.map(p => p.profile.pricingTiers.find(t => t.role === role).status))])),
  sponsorship: tally(profiles.filter(p => p.kind === 'oss').map(p => p.profile.alternativeDetails.sponsorship.status)),
  installOptions: tally(profiles.filter(p => p.kind === 'oss').flatMap(p => p.profile.alternativeDetails.oneClickInstall.options.map(o => o.kind))),
  sharedSourceUrls: [...sourceProducts].filter(([, ids]) => ids.length > 1)
    .map(([url, productIds]) => ({ url, productCount: productIds.length, productIds: productIds.sort() }))
    .sort((a, b) => b.productCount - a.productCount || (a.url < b.url ? -1 : a.url > b.url ? 1 : 0)),
};
await writeFile(resolve(root, 'research/profile-coverage.json'), JSON.stringify(report, null, 2) + '\n');
console.log(`${report.researchedProfiles}/${report.totalProducts} profiles; ${report.researchedAlternatives} alternative deployment/sponsor reviews.`);
