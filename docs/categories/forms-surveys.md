# Forms and surveys

Collect leads, feedback, questionnaires, polls and research responses.

Audience: Marketing, customer success, HR, operations, product and research teams across business sizes.. Forms and feedback span multiple business functions and industries; adoption is broad but not required by every employee.

Use-case sources: [1](https://www.typeform.com/pricing), [2](https://www.limesurvey.org/pricing).

- [Typeform](https://www.typeform.com): USD 28/account/month, annual billing. Basic $28/month billed annually; $39/month monthly billing. Includes one user and 100 responses/month. Free plan is distinct from paid Basic. [Pricing](https://www.typeform.com/pricing).

### Formbricks Community Edition — C

OSI AGPL core; MIT SDK/survey packages and separately licensed apps/web/modules/ee. Paid gates include routine feedback workflows and segmentation, not only enterprise administration. Community docs specify unlimited surveys, responses and users; hosted response quotas differ.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/formbricks/formbricks/blob/fd98f4b0ea7d8b6b187e2e894af7b202c91f7a24/LICENSE), [edition evidence](https://formbricks.com/docs/self-hosting/advanced/license), [hosting](https://formbricks.com/pricing), [repository](https://github.com/formbricks/formbricks).

Paid restrictions: Community Edition limited to one workspace; Enterprise license required for contact management and segments, workflows, Unify Feedback and dashboards; Enterprise license required for branding removal, white-label follow-ups, RBAC, SSO and audit logging

Repository: pushed 2026-10-21T18:56:24Z; latest commit 2026-10-21T14:59:04Z; latest published release 6.1.0 (2026-10-19T12:09:29Z). Quick analysis: 6.2/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Typeform → Formbricks Community Edition: **partial**. Link surveys and embedded/in-app feedback overlap Typeform. Recreate Typeform forms and automations; current CE has one workspace and paid workflow/segmentation gates. [1](https://formbricks.com/docs/self-hosting/advanced/license) [2](https://formbricks.com/open-source-form-builder)

### HeyForm — U

AGPL repository documents conversational forms, logic, custom CSS, analytics and CSV export. Self-host configuration is documented; hosted pricing gates collaboration, domains and branding, but official sources inspected do not establish whether those gates apply to self-hosted edition.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/heyform/heyform/blob/938c7dfef82969a557da9d479ca249179ff1c206/LICENSE), [edition evidence](https://github.com/heyform/heyform#features), [hosting](https://heyform.net/pricing), [repository](https://github.com/heyform/heyform).

Paid restrictions: Self-hosted versus hosted feature parity not fully verified; published cloud plan limits must not be interpreted as OSS limits

Repository: pushed 2026-10-19T01:57:00Z; latest commit 2026-10-19T01:56:54Z; latest published release v3.0.4 (2026-10-15T03:34:57Z). Quick analysis: 4.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Typeform → HeyForm: **partial**. Conversational forms, logic, CSS and CSV export overlap Typeform; recreate existing forms and integrations. No verified automatic Typeform import. [1](https://docs.heyform.net/introduction) [2](https://github.com/heyform/heyform#features)

### LimeSurvey Community Edition — U

GPL CE is self-hostable with mature research survey functionality. Current official site explicitly says Cloud includes exclusive features; older forum assertions of full parity are superseded. Exact exclusives not sufficiently enumerated to assign A/B/C confidently.

License: GPL-2.0-or-later; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/LimeSurvey/LimeSurvey/blob/f485440ff59329d51277cf065e974d82114b9bbc/LICENSE), [edition evidence](https://community.limesurvey.org/comfort-update-extension/), [hosting](https://www.limesurvey.org/pricing), [repository](https://github.com/LimeSurvey/LimeSurvey).

Paid restrictions: ComfortUpdate automated updates require paid subscription after trial; manual updates remain available; Cloud has exclusive features; complete current Cloud-versus-CE feature list not established

Repository: pushed 2026-10-21T21:02:31Z; latest commit 2026-10-21T21:02:06Z; latest published release unverified or unavailable (n/a). Quick analysis: 5.6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Typeform → LimeSurvey Community Edition: **partial**. Research-oriented survey workflows differ from Typeform conversational forms. Rebuild questions, branching, styling and integrations; LSS supports LimeSurvey survey interchange rather than Typeform imports. [1](https://community.limesurvey.org/)

[Category research and unresolved questions](../../research/categories/forms-surveys.json) · [Research audit](../../research/audits/forms-surveys.md)
