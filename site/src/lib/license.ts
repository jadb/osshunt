import data from './licenses.json';

export type Rule = { label: string; description: string };
export type LicenseInfo = { title: string; description: string; permissions: Rule[]; conditions: Rule[]; limitations: Rule[]; url: string };

// Logo per licence family (Simple Icons artwork, files lic-*.svg). Licences with no recognised mark fall back to a drawn document icon.
const FAMILY: [RegExp, { logo?: string; icon?: string }][] = [
  [/^(A|L)?GPL/i, { logo: 'lic-gnu' }],
  [/^Apache/i, { logo: 'lic-apache' }],
  [/^MPL/i, { logo: 'lic-mozilla' }],
  [/^EPL/i, { logo: 'lic-eclipseide' }],
  [/^(MIT|BSD|ISC|OSL|AFL)/i, { logo: 'lic-opensourceinitiative' }],
];

export type Token = { id: string; label: string; logo?: string; icon?: string; info: LicenseInfo | null };

// Base id used by GitHub's licence chooser: AGPL-3.0-only / -or-later fold into AGPL-3.0.
const base = (id: string) => id.replace(/-(only|or-later)$/i, '');

export function licenseTokens(raw: string): Token[] {
  const clean = raw.replace(/\(.*?\)/g, '').trim();
  return clean.split(/\s+(?:AND|WITH|OR)\s+/i).map((part) => {
    const id = part.trim();
    const info = (data as Record<string, LicenseInfo>)[base(id)] ?? null;
    const fam = FAMILY.find(([re]) => re.test(id))?.[1] ?? { icon: 'doc' };
    return { id, label: id.replace(/^LicenseRef-/, '').replace(/-/g, ' '), info, ...fam };
  });
}
