// Compact display name: drops edition and packaging suffixes. The full name stays on pages where the edition matters.
const SUFFIX = /\s+(Community Edition|Open Source Edition|Team Edition|Server Suite Community|self-hosted stack|Community|Starter|Hub|core|SDK|LMS)$/i;
export const shortName = (name: string) => name.replace(/\s*\([^)]*\)\s*$/, '').replace(SUFFIX, '').trim() || name;
