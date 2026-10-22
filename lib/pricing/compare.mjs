const identity = (row, plan) => row.planIdentities?.[plan.name] || `name:${plan.kind}:${plan.name}`;
const basis = offer => JSON.stringify([offer.currency, offer.billingPeriod, offer.commitment, offer.unit,
  offer.minimumQuantity, ...['region', 'locale', 'tax', 'promotion', 'startingAt', 'range', 'volume', 'billingVariant']
    .map(key => offer.qualifications?.[key] ?? null)]);
const decimal = value => value === null ? null : String(value).replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
const knownBasis = offer => offer.currency && offer.billingPeriod !== 'unknown' &&
  (offer.commitment !== 'unknown' || offer.billingPeriod === 'one-time') && offer.unit &&
  !offer.qualifications?.billingVariant?.includes('unknown');

function comparePair(from, to) {
  const changes = [], complete = from.quality === 'complete' && to.quality === 'complete';
  let incompatible = JSON.stringify(from.scope) !== JSON.stringify(to.scope);
  const add = (type, plan, detail, before, after) => changes.push({ type, plan, detail,
    ...(before !== undefined ? { before } : {}), ...(after !== undefined ? { after } : {}) });
  if (!incompatible) {
    const oldPlans = new Map(from.plans.map(plan => [identity(from, plan), plan]));
    const newPlans = new Map(to.plans.map(plan => [identity(to, plan), plan]));
    if (oldPlans.size !== from.plans.length || newPlans.size !== to.plans.length) {
      return { fromId: from.id, toId: to.id, status: 'incompatible_basis', changes: [] };
    }
    for (const [id, plan] of oldPlans) {
      const next = newPlans.get(id);
      if (!next) { if (complete) add('plan_removed', plan.name, 'Plan absent from the later complete observation'); continue; }
      if (plan.name !== next.name) add('plan_renamed', next.name, 'Maintainer-reconciled plan identity', plan.name, next.name);
      if (plan.status !== next.status) add('plan_status', next.name, 'Plan availability changed', plan.status, next.status);
      const oldOffers = new Map(plan.offers.map(offer => [basis(offer), offer]));
      const newOffers = new Map(next.offers.map(offer => [basis(offer), offer]));
      if (oldOffers.size !== plan.offers.length || newOffers.size !== next.offers.length) incompatible = true;
      for (const [key, offer] of oldOffers) {
        const updated = newOffers.get(key);
        if (!updated || !knownBasis(offer) || !knownBasis(updated)) { incompatible = true; continue; }
        if (offer.amount !== null && updated.amount !== null && decimal(offer.amount) !== decimal(updated.amount)) {
          add('amount', next.name, 'Observed amount changed on the same billing basis', offer.amount, updated.amount);
        }
      }
      if ([...newOffers.keys()].some(key => !oldOffers.has(key))) incompatible = true;
      const oldFeatures = new Map(plan.features.map(feature => [feature.name, feature.value]));
      const newFeatures = new Map(next.features.map(feature => [feature.name, feature.value]));
      for (const [name, before] of oldFeatures) {
        if (newFeatures.has(name) && newFeatures.get(name) !== before) add('feature', next.name, name, before, newFeatures.get(name));
        else if (complete && !newFeatures.has(name)) add('feature_removed', next.name, name, before, null);
      }
      for (const [name, after] of newFeatures) if (complete && !oldFeatures.has(name)) add('feature_added', next.name, name, null, after);
    }
    for (const [id, plan] of newPlans) if (complete && !oldPlans.has(id)) add('plan_added', plan.name, 'Plan appears in the later complete observation');
  }
  return { fromId: from.id, toId: to.id, status: !complete ? 'incomplete' : incompatible ? 'incompatible_basis' : 'comparable', changes };
}

export function comparePricingHistory(observations) {
  const rows = observations.filter(row => row.reviewState === 'confirmed')
    .slice().sort((a, b) => a.pricingCapturedAt.localeCompare(b.pricingCapturedAt) || a.id.localeCompare(b.id));
  const previous = new Map(), pairs = [];
  for (const row of rows) {
    const key = JSON.stringify([row.productId, row.scope.edition, row.scope.deployment]);
    if (previous.has(key)) pairs.push(comparePair(previous.get(key), row));
    previous.set(key, row);
  }
  return pairs;
}
