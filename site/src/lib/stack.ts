// Maps a documented self-hosting component to a logo (svgl) or a drawn icon.
export type Mark = { key: string; label: string; logo?: string; icon?: string };

const RULES: [RegExp, Omit<Mark, 'label'> & { name: string }][] = [
  [/postgre ?sql|aurora/i, { key: 'postgresql', name: 'PostgreSQL', logo: 'postgresql' }],
  [/maria ?db/i, { key: 'mariadb', name: 'MariaDB', logo: 'mariadb' }],
  [/my ?sql/i, { key: 'mysql', name: 'MySQL', logo: 'mysql-icon-light' }],
  [/sqlite/i, { key: 'sqlite', name: 'SQLite', logo: 'sqlite' }],
  [/mongo ?db/i, { key: 'mongodb', name: 'MongoDB', logo: 'mongodb-icon-light' }],
  [/redis/i, { key: 'redis', name: 'Redis', logo: 'redis' }],
  [/docker|compose/i, { key: 'docker', name: 'Docker', logo: 'docker' }],
  [/kubernetes|helm/i, { key: 'kubernetes', name: 'Kubernetes', logo: 'kubernetes' }],
  [/nginx/i, { key: 'nginx', name: 'Nginx', logo: 'nginx' }],
  [/\bphp\b/i, { key: 'php', name: 'PHP', logo: 'php' }],
  [/node\.?js/i, { key: 'nodejs', name: 'Node.js', logo: 'nodejs' }],
  [/python/i, { key: 'python', name: 'Python', logo: 'python' }],
  [/linux/i, { key: 'linux', name: 'Linux binary', logo: 'linux' }],
  [/smtp|resend|email/i, { key: 'mail', name: 'SMTP email', icon: 'mail' }],
  [/s ?3|object (stor|store)/i, { key: 'bucket', name: 'S3-compatible storage', icon: 'bucket' }],
  [/nfs|network drive/i, { key: 'network', name: 'Network drive', icon: 'network' }],
  [/local (disk|file)|filesystem/i, { key: 'disk', name: 'Local disk', icon: 'disk' }],
];

export function markFor(component: string): Mark | null {
  for (const [re, m] of RULES) if (re.test(component)) return { key: m.key, label: m.name, logo: m.logo, icon: m.icon };
  return null;
}

// Collapse versioned / duplicate component names into one mark; unmatched names stay as text.
export function marks(components: string[]): (Mark | { key: string; label: string })[] {
  const seen = new Set<string>();
  const out: (Mark | { key: string; label: string })[] = [];
  for (const c of components) {
    const m = markFor(c) ?? { key: c.toLowerCase().replace(/[\d.+\s]+/g, ''), label: c };
    if (seen.has(m.key)) continue;
    seen.add(m.key);
    out.push(m);
  }
  return out;
}
