# Dependency vetting — 2026-10-21

Exact pins; production dependencies zod and yaml, development dependencies ajv and ajv-formats. npm installation scripts disabled. Locked dependency tree: zero known advisories reported by npm audit on this date.

| Package | Pin | Published | License | Upstream health / balanced policy |
|---|---|---|---|---|
| zod | 4.6.5 | 2026-09-13 | MIT | colinhacks/zod, 7.2/10, passed |
| yaml | 2.9.1 | 2026-09-11 | ISC | eemeli/yaml, 6.3/10, passed |
| ajv | 8.20.0 | 2026-04-24 | MIT | ajv-validator/ajv, 6.2/10, passed |
| ajv-formats | 3.0.1 | 2024-03-30 | MIT | ajv-validator/ajv-formats, 5.1/10, passed |

Zod 4.6.7 from the earlier format probe was nine days old; selected 4.6.5 to satisfy the 14-day age gate. AJV 8.20.0 selected instead of the older probe-era pin. Health scores describe upstream repositories, not a package-version security certification.

Official API references: [Zod JSON Schema](https://zod.dev/json-schema), [YAML parser](https://eemeli.org/yaml/), [AJV formats](https://ajv.js.org/guide/formats.html). Reused the established schema-factory and object-loader interfaces. No Astro dependency needed to generate JSON Schemas or validate the seed.
