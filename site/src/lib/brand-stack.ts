/**
 * The OSSHunt brand on the AAARRR stack. Every value is public by design: the
 * project key is publishable (it only allows signups, consent decisions,
 * events and flag evaluation for this brand, from this brand's origins) and
 * all of it appears in the page source.
 */
export const STACK = {
  tenant: 'osshunt',
  apiUrl: 'https://api.aaarrr.tools',
  cmsUrl: 'https://console.aaarrr.tools',
  projectKey: 'pk_live_d440f32dbb64d0b34f0d10be9b2c06d9c4ce1c068d84acef',
  /** Cloudflare Turnstile site key of the stack's signup challenge (the widget lists osshunt.com). */
  challengeSiteKey: '0x4AAAAAAFiYqBRVFKMf2jRD',
  umami: { scriptUrl: 'https://stats.aaarrr.tools/script.js', websiteId: '7fa7359f-7ff0-4f18-b3ea-f676d409d0ee' },
  lineup: 'newsletter',
  formTopic: 'newsletter',
  /** GrowthBook flag of the home headline test; its variations carry the headline text. */
  headlineExperiment: 'osshunt-headline',
} as const;

export const HEADLINE_CONTROL = 'Find the open-source alternative to what you pay for';
