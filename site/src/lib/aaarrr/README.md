# AAARRR browser modules

`consent-core.ts`, `consent-banner.ts`, `consent.ts`, `identity.ts`, `variant.ts`, `waitlist.ts` and `../../public/aaarrr.js` are copies of the AAARRR stack's web modules (commit `e1d3570d` of its web app), kept unchanged so a newer copy drops in. The site wires them in `src/lib/brand-stack.ts`, `src/layouts/Base.astro`, `src/components/Newsletter.astro` and `src/components/Headline.astro`.

Update: copy the six files and `aaarrr.js` over these, run `npm run build`, check the banner, a signup and the headline on a preview.
