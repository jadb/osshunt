const norm = (u: string) => {
  try {
    const x = new URL(u);
    return `${x.hostname.replace(/^www\./, '')}${x.pathname.replace(/\/+$/, '').replace(/\.git$/, '')}`.toLowerCase();
  } catch { return u.toLowerCase(); }
};

export type Hosting = 'github' | 'gitlab' | 'code';
export const repoHost = (repo: string): Hosting => {
  try {
    const h = new URL(repo).hostname;
    if (/(^|\.)github\.com$/.test(h)) return 'github';
    if (/(^|\.)gitlab\./.test(h)) return 'gitlab';
  } catch { /* fall through */ }
  return 'code';
};

// Website and repository links for an alternative. When the website is the repository, only the repository shows.
export function sourceLinks(url: string | undefined, repo: string | undefined) {
  const same = url && repo && norm(url) === norm(repo);
  return {
    website: url && !same ? url : null,
    repo: repo ?? null,
    host: repo ? repoHost(repo) : null,
  };
}
