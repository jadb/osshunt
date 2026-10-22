const MAX_BYTES = 120000;
const serializedBytes = value => new TextEncoder().encode(JSON.stringify(value)).byteLength;
export function boundExtraction(plans, issues) {
  let truncated = plans.length > 32;
  plans = plans.slice(0, 32).map(plan => {
    if (plan.offers.length > 16 || plan.features.length > 64) truncated = true;
    return { ...plan, offers: plan.offers.slice(0, 16), features: plan.features.slice(0, 64) };
  });
  // Retain plan and offer identities first; remove trailing feature evidence before whole source groups.
  while (serializedBytes(plans) > MAX_BYTES) {
    const withFeatures = [...plans].reverse().find(plan => plan.features.length);
    if (withFeatures) withFeatures.features.splice(Math.max(0, withFeatures.features.length - 16));
    else plans.pop();
    truncated = true;
  }
  if (truncated) issues.push('Extraction truncated at explicit plan, offer, feature or evidence-budget limits');
  const boundedIssues = [...new Set(issues)].slice(0, 32).map(issue => String(issue).slice(0, 180));
  if (issues.length > 32) boundedIssues[31] = 'Additional extraction issues truncated at explicit issue limit';
  return { plans, issues: boundedIssues };
}
