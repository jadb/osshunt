// Reusable product enrichment contract; prices retain their stated billing period.
export function productProfile(z) {
  const text = () => z.string().min(1);
  const sources = () => z.array(z.url().refine(url => /^https?:/.test(url), 'HTTP(S) source required')).min(1);
  const amount = () => z.number().nonnegative().nullable();
  const assessment = z.strictObject({ claim: text(), basis: z.literal('assessment'), sources: sources() });
  const pricingTier = z.strictObject({
    role: z.enum(['entry', 'popular', 'business', 'enterprise']), name: text().nullable(),
    status: z.enum(['published', 'free', 'quote', 'not-offered', 'unknown']),
    monthlyPrice: amount(), annualPrice: amount(), oneTimePrice: amount(),
    usagePrice: amount().optional().default(null),
    currency: text(), unit: text(), minimumQuantity: z.number().positive().nullable(),
    scope: text(), notes: text(), sources: sources(),
  }).superRefine((row, ctx) => {
    const amounts = [row.monthlyPrice, row.annualPrice, row.oneTimePrice, row.usagePrice].filter(value => value !== null);
    if (row.status === 'published' && !amounts.length) ctx.addIssue({ code: 'custom', message: 'published price needs an amount' });
    if (['quote', 'not-offered', 'unknown'].includes(row.status) && amounts.length) {
      ctx.addIssue({ code: 'custom', message: 'unresolved or unavailable plan cannot have numeric prices' });
    }
    if (row.status === 'free' && (!amounts.length || amounts.some(value => value !== 0))) {
      ctx.addIssue({ code: 'custom', message: 'free plan needs zero-valued price evidence' });
    }
  });
  const requirement = z.strictObject({
    component: text(), necessity: z.enum(['required', 'optional', 'conditional', 'one-of']),
    group: text().nullable(), condition: text(), notes: text(), sources: sources(),
  }).superRefine((row, ctx) => {
    if (row.necessity === 'one-of' && row.group === null) ctx.addIssue({ code: 'custom', message: 'one-of dependency needs an alternative group' });
  });
  const alternativeDetails = z.strictObject({
    sponsorship: z.strictObject({
      status: z.enum(['identified', 'business-fallback', 'none-found', 'unknown']),
      organizations: z.array(z.strictObject({
        name: text(), url: z.url(), relationship: z.enum(['corporate-sponsor', 'business-steward']), source: z.url(),
      })), notes: text(), sources: sources(),
    }).superRefine((row, ctx) => {
      if (row.status === 'identified' && !row.organizations.some(org => org.relationship === 'corporate-sponsor')) {
        ctx.addIssue({ code: 'custom', message: 'identified sponsorship needs a corporate sponsor' });
      }
      if (row.status === 'business-fallback' && !row.organizations.some(org => org.relationship === 'business-steward')) {
        ctx.addIssue({ code: 'custom', message: 'fallback sponsorship needs a business steward' });
      }
      if (['none-found', 'unknown'].includes(row.status) && row.organizations.length) {
        ctx.addIssue({ code: 'custom', message: 'unidentified sponsorship cannot list confirmed organizations' });
      }
    }),
    selfHosting: z.strictObject({
      mode: z.enum(['server', 'desktop', 'library', 'hybrid', 'unknown']), requirements: z.array(requirement),
      resources: z.strictObject({
        cpu: text().nullable(), memory: text().nullable(), storage: text().nullable(), os: text().nullable(),
        notes: text(), sources: sources(),
      }), notes: text(), sources: sources(),
    }),
    oneClickInstall: z.strictObject({
      status: z.enum(['offered', 'none-found', 'unknown', 'not-applicable']),
      hasVerifiedOneClick: z.boolean().optional(),
      options: z.array(z.strictObject({
        name: text(), url: z.url(), kind: z.enum(['one-click', 'marketplace', 'one-command']),
        officialStatus: z.enum(['first-party', 'officially-linked-third-party']), notes: text(), sources: sources(),
      })), notes: text(), sources: sources(),
    }).superRefine((row, ctx) => {
      const hasVerifiedOneClick = row.options.some(option => ['one-click', 'marketplace'].includes(option.kind));
      if (row.hasVerifiedOneClick !== undefined && row.hasVerifiedOneClick !== hasVerifiedOneClick) {
        ctx.addIssue({ code: 'custom', message: 'one-click availability must match verified option types' });
      }
      if (row.status === 'offered' && !row.options.length) ctx.addIssue({ code: 'custom', message: 'offered install needs a verified option' });
      if (row.status !== 'offered' && row.options.length) ctx.addIssue({ code: 'custom', message: 'unavailable install cannot list verified options' });
    }),
  });
  return z.strictObject({
    id: z.string().regex(/^[a-z0-9-]+$/), checkedAt: z.iso.date(),
    organization: z.strictObject({
      name: text(), kind: z.enum(['business', 'foundation', 'community', 'individual', 'unknown']),
      foundedYear: z.int().min(1800).nullable(),
      ageBasis: z.enum(['company-founded', 'project-started', 'product-launched', 'unknown']),
      yearsActive: z.int().nonnegative().nullable().optional(),
      yearsInBusiness: z.int().nonnegative().nullable().optional(),
      ownership: z.enum(['public', 'private', 'public-subsidiary', 'nonprofit', 'community', 'individual', 'unknown']),
      parent: text().nullable(), stockSymbols: z.array(text()),
      funding: z.enum(['bootstrapped', 'funded', 'mixed', 'not-applicable', 'unknown']),
      investors: z.array(z.strictObject({ name: text(), source: z.url() })),
      notes: text(), sources: sources(),
    }),
    pricingTiers: z.array(pricingTier).length(4),
    moats: z.array(assessment).min(1).max(3), productReasons: z.array(assessment).length(3),
    alternativeDetails: alternativeDetails.nullable(),
  }).superRefine((row, ctx) => {
    if (new Set(row.pricingTiers.map(tier => tier.role)).size !== 4) ctx.addIssue({ code: 'custom', message: 'four distinct pricing roles required' });
    const year = Number(row.checkedAt.slice(0, 4));
    if (row.organization.foundedYear !== null && row.organization.foundedYear > year) {
      ctx.addIssue({ code: 'custom', message: 'founding year cannot follow evidence date' });
    }
    if (row.organization.funding === 'bootstrapped' && row.organization.investors.length) {
      ctx.addIssue({ code: 'custom', message: 'bootstrapped status conflicts with known equity investors' });
    }
  });
}
