# Application hosting and backends

Deployment platforms and backend services for business web and mobile applications.

Audience: Software teams and businesses building their own applications. Relevant across industries but directly used by software delivery teams rather than every employee.

Use-case sources: [1](https://www.heroku.com/), [2](https://firebase.google.com/).

- [Firebase](https://firebase.google.com/): entry amount unverified/quote, monthly billing. Blaze pay-as-you-go per service after applicable free quotas; no single monthly entry price. [Pricing](https://firebase.google.com/pricing).
  [Pricing tiers, organization and product reasons](../products/firebase.md).
- [Heroku](https://www.heroku.com/): USD 7/usage/month, monthly billing. Basic always-on dyno $7/month; Eco $5/month sleeps and personal accounts only; databases and add-ons extra. [Pricing](https://www.heroku.com/pricing/).
  [Pricing tiers, organization and product reasons](../products/heroku.md).
- [Vercel](https://vercel.com/): USD 20/seat/month, monthly billing. Pro developer seat $20/month plus metered services; Hobby free plan separate. [Pricing](https://vercel.com/pricing).

### Coolify — A

Pricing explicitly grants all self-hosted features with no restrictions; cloud fee buys managed control-plane hosting, not application server capacity.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/coollabsio/coolify/blob/91ea7d851e214951799842837a010a4dfe3487e7/LICENSE), [edition evidence](https://coolify.io/pricing), [hosting](https://coolify.io/pricing), [repository](https://github.com/coollabsio/coolify).

Repository: pushed 2026-10-21T21:18:03Z; latest commit 2026-10-21T20:58:00Z; latest published release v4.4.7 (2026-10-21T14:12:45Z). Quick analysis: 6.4/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Heroku → Coolify: **partial**. Git/container app deployment on your own servers; move environment variables, domains and databases; operate backups, security and scaling yourself. Heroku add-ons need replacements. [1](https://coolify.io/) [2](https://coolify.io/docs/)
- Vercel → Coolify: **partial**. Deploy web apps and static sites to owned infrastructure; Vercel edge/CDN, serverless integrations and managed observability require separate infrastructure or adaptation. [1](https://coolify.io/) [2](https://coolify.io/docs/)

### PocketBase — A

MIT volunteer project; FAQ confirms no commercial organization or vendor hosting. Technical single-server/SQLite limits are architecture, not paid feature gates.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/pocketbase/pocketbase/blob/6f370ea741f33adf889eef02e3c1b884a47aa522/LICENSE.md), [edition evidence](https://pocketbase.io/faq/), [hosting](https://pocketbase.io/faq/), [repository](https://github.com/pocketbase/pocketbase).

Repository: pushed 2026-10-14T18:45:14Z; latest commit 2026-10-08T16:21:49Z; latest published release v0.40.5 (2026-10-08T16:45:10Z). Quick analysis: 6.7/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Firebase → PocketBase: **different-approach**. Small single-server auth/realtime/file backend using SQLite; no Cloud Functions and vertical scaling only. Rewrite client calls and rules; FAQ reports no built-in data import/export helpers. [1](https://pocketbase.io/faq/)

### Supabase self-hosted stack — A

Apache-2.0 self-hosted Postgres/auth/storage/realtime stack has no documented paid self-hosted code tier. A applies to this named OSS backend stack. Managed-platform services and control-plane gaps are separately disclosed; it is a partial Firebase alternative, not an equivalent managed platform.

License: Apache-2.0; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/supabase/supabase/blob/96d51239c65f22d751482bf15b5fcb2216991233/LICENSE), [edition evidence](https://supabase.com/docs/guides/self-hosting), [hosting](https://supabase.com/pricing), [repository](https://github.com/supabase/supabase).

Service costs/limits: Managed cloud branching, Management API, managed backups/PITR, advanced platform metrics, analytics/vector buckets and ETL are absent from the self-hosted distribution; no paid self-hosted unlock is claimed. Operate backups, monitoring and deployment workflows yourself or use managed cloud.

Repository: pushed 2026-10-21T21:28:10Z; latest commit 2026-10-21T20:18:20Z; latest published release v1.26.08 (2026-08-07T13:57:57Z). Quick analysis: 7.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Firebase → Supabase self-hosted stack: **different-approach**. Postgres relational backend with auth, realtime and storage; rewrite Firebase SDK calls, security rules and document data into SQL schemas; self-hosting requires production operations. [1](https://supabase.com/docs/guides/self-hosting)

### Appwrite — B

BSD-3-Clause core self-hosts auth, database, storage, functions and realtime. Enterprise page explicitly reserves premium self-hosted management capabilities. General guide parity language is broader, so exact edition boundary merits continued checking.

License: BSD-3-Clause; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/appwrite/appwrite/blob/7ef921e5df638bd4e332de7d6c85e5aeb289b93c/LICENSE), [edition evidence](https://appwrite.io/enterprise), [hosting](https://appwrite.io/pricing), [repository](https://github.com/appwrite/appwrite).

Paid restrictions: Premium Enterprise self-hosted edition: console SSO, custom organization roles, activity logs, advanced management tools and compliance options

Repository: pushed 2026-10-21T21:25:03Z; latest commit 2026-10-21T20:59:00Z; latest published release 2.6.1 (2026-10-21T20:52:58Z). Quick analysis: 7.9/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Firebase → Appwrite: **partial**. Backend auth, databases, files, functions and realtime overlap; replace Firebase SDKs, migrate users/data and reimplement security/permissions. Firebase analytics and mobile services require separate evaluation. [1](https://appwrite.io/docs/advanced/self-hosting) [2](https://appwrite.io/enterprise)

### Dokku — C

MIT core deploys Heroku-compatible apps through Git and CLI. Paid self-hosted Pro add-on supplies everyday graphical administration and API/HTTP push; Pro is explicitly not hosting.

License: MIT; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/dokku/dokku/blob/9dd14b73859d86ec39539f6a6dbb91d19ae02ef5/LICENSE), [edition evidence](https://pro.dokku.com/), [hosting](https://pro.dokku.com/), [repository](https://github.com/dokku/dokku).

Paid restrictions: Dokku Pro web dashboard; Dokku Pro JSON API and HTTP(S) Git push; Dokku Pro team management

Repository: pushed 2026-10-21T21:18:13Z; latest commit 2026-10-21T21:01:40Z; latest published release v0.38.31 (2026-09-27T01:46:26Z). Quick analysis: 6.1/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Heroku → Dokku: **partial**. Supports Heroku-compatible apps/buildpacks and git push, but owner operates host and datastores; audit buildpack/plugin compatibility, migrate add-on data and configure backups. [1](https://dokku.com/)

[Category research and unresolved questions](../../research/categories/hosting-backend.json) · [Research audit](../../research/audits/hosting-backend.md)
