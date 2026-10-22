# Learning management

Create and deliver courses, enroll learners, assess progress and manage organizational training.

Audience: Education providers, trainers and learning and development teams.. Specialized administrators and educators operate systems serving learners across schools and organizations.

Use-case sources: [1](https://docs.moodle.org/503/en/Features), [2](https://openedx.org/get-started/), [3](https://www.docebo.com/pricing/).

- [Docebo](https://www.docebo.com): entry amount unverified/quote, quote billing. Custom pricing tailored to organization; no public entry amount. [Pricing](https://www.docebo.com/pricing/).
  [Pricing tiers, organization and product reasons](../products/docebo.md).
- [TalentLMS](https://www.talentlms.com): USD 119/account/month, annual billing. Core, 1–40 users, USD119/month billed yearly. Free plan available; paid entry shown. User brackets and add-ons change price. [Pricing](https://www.talentlms.com/prices).
  [Pricing tiers, organization and product reasons](../products/talentlms.md).

### Open edX — A

Self-managed LMS and Studio authoring available without license fees; no first-party paid software edition gate found. AGPLv3 applies unless individual files state otherwise; surrounding projects have their own licenses. Provider-specific commercial additions are outside this record.

License: AGPL-3.0-only; identified core OSI: yes; self-hostable: yes; first-party hosted offer: no. [License](https://github.com/openedx/openedx-platform/blob/c4e066770a014e3fc1256ed9291a19aed69a9f98/LICENSE), [edition evidence](https://openedx.org/platform/features/), [hosting](https://openedx.org/get-started/), [repository](https://github.com/openedx/openedx-platform).

[Sponsors, requirements, installation options, pricing and product profile](../products/open-edx.md).

Service costs/limits: Self-hosting requires infrastructure, updates and technical administration.; Project-listed providers sell hosting and support; these are third-party offers. edX.org is a separate commercial course destination, not first-party hosting for your LMS.

Repository: pushed 2026-10-21T19:28:24Z; latest commit 2026-10-21T17:36:26Z; latest published release named-release/birch (2015-03-02T21:13:51Z). Quick analysis: 4.6/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Docebo → Open edX: **different-approach**. Fits structured course delivery and enterprise education with self-managed authoring. Docebo multi-audience administration, compliance workflows and integration automation require explicit redesign. Learner histories, certification evidence and content packages need a migration pilot; no direct importer or package parity verified. [1](https://www.docebo.com/pricing/) [2](https://openedx.org/get-started/) [3](https://openedx.org/platform/features/)
- TalentLMS → Open edX: **different-approach**. Course-centric LMS with Studio authoring and self-managed operation. Rebuild courses, learner administration, SSO and integrations. Existing TalentLMS SCORM/Tin Can/cmi5 content and reporting histories require a separate compatibility/import pilot; no package parity or turnkey migration verified. [1](https://www.talentlms.com/prices) [2](https://openedx.org/get-started/) [3](https://openedx.org/platform/features/)

### Moodle LMS — B

Free self-hosted LMS core; B reflects proprietary Workplace corporate administration extensions built on that core. MoodleCloud subscription and partner support are services, not core license gates. This record identifies Moodle LMS, not Workplace or the separate Open LMS vendor.

License: GPL-3.0-or-later; identified core OSI: yes; self-hostable: yes; first-party hosted offer: yes. [License](https://github.com/moodle/moodle/blob/46c042e7da65f8cb2ec7dc19f46566ce61a393e1/COPYING.txt), [edition evidence](https://docs.moodle.org/503/en/Features), [hosting](https://support.moodle.com/support/solutions/articles/80001075420), [repository](https://github.com/moodle/moodle).

[Sponsors, requirements, installation options, pricing and product profile](../products/moodle.md).

Paid restrictions: Moodle Workplace multi-tenancy, recurring program certifications, dynamic rules and organizational hierarchies are commercial extensions, absent from the base Moodle LMS distribution.

Service costs/limits: Self-hosting requires infrastructure, updates and technical administration.; MoodleCloud is first-party subscription hosting with plan user/storage quotas; partner hosting/customization/support may cost extra.

Repository: pushed 2026-10-21T10:46:01Z; latest commit 2026-10-21T08:03:23Z; latest published release unverified or unavailable (n/a). Quick analysis: 4.8/10; balanced policy passed. Automated repository signals; not a version-specific security audit.

- Docebo → Moodle LMS: **partial**. Suitable for course delivery and assessment after redesign. Map learners, enrolments and completion evidence separately; no verified direct import of Docebo histories or admin rules. Workplace multi-tenancy, recurring certification programs and dynamic rules require the commercial extension. Rebuild integrations and validate content package versions. [1](https://www.docebo.com/pricing/) [2](https://docs.moodle.org/503/en/Features) [3](https://docs.moodle.org/503/en/Moodle_Workplace) [4](https://docs.moodle.org/503/en/SCORM_FAQ)
- TalentLMS → Moodle LMS: **partial**. Moodle covers courses, enrolment and progress tracking. Reuse original SCORM1.2/AICC packages after testing; Moodle does not generate SCORM exports. Tin Can/cmi5 parity is not established; native SCORM2004 unsupported. Rebuild branches, SSO/API links and reporting; Workplace corporate automation is commercial. No automatic history transfer verified. [1](https://www.talentlms.com/prices) [2](https://docs.moodle.org/503/en/Features) [3](https://docs.moodle.org/503/en/SCORM_FAQ) [4](https://support.moodle.com/support/solutions/articles/80001074804-difference-between-moodle-workplace-and-moodle-lms) [5](https://docs.moodle.org/503/en/Moodle_Workplace)

[Category research and unresolved questions](../../research/categories/learning-management.json) · [Research audit](../../research/audits/learning-management.md) · [Sourced claims](../../research/claims/learning-management.jsonl)
