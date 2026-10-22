// Sponsorship ladder: slot n costs STEP * n per month, capped at CAP.
export const STEP = 100;
export const CAP = 1000;
export const DEPOSIT = 0.1;
export const OPEN_SLOTS = 3;

export const slotPrice = (n: number) => Math.min(STEP * n, CAP);
export const deposit = (n: number) => Math.round(slotPrice(n) * DEPOSIT);

// Stripe Payment Link buy buttons (stripe.com/docs/payment-links/buy-button). Fill these in to enable checkout;
// while a value is null the sponsor page says checkout is not connected instead of showing a dead button.
export const STRIPE = {
  publishableKey: null as string | null,
  slotButtons: {} as Record<number, string | null>,    // slot number -> buy-button-id
  depositButtons: {} as Record<number, string | null>, // slot number -> buy-button-id for the 10% reservation
};
