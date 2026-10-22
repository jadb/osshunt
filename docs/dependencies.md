# Dependency vetting — 2026-10-21

Exact pins; production dependencies zod and yaml, development dependencies ajv and ajv-formats. npm installation scripts disabled. Locked dependency tree: zero known advisories reported by npm audit on this date.

| Package | Pin | Published | License | Upstream health / balanced policy |
|---|---|---|---|---|
| zod | 4.6.5 | 2026-09-13 | MIT | colinhacks/zod, 7.2/10, passed |
| yaml | 2.9.1 | 2026-09-11 | ISC | eemeli/yaml, 6.3/10, passed |
| ajv | 8.20.0 | 2026-04-24 | MIT | ajv-validator/ajv, 6.2/10, passed |
| ajv-formats | 3.0.1 | 2024-03-30 | MIT | ajv-validator/ajv-formats, 5.1/10, passed |
| astro (`site/`) | 7.3.7 | 2026-10-07 | MIT | withastro/astro, 5.5/10, balanced policy passed; npm audit zero advisories; 7.3.8 (2026-10-08) and 7.4.x (2026-10-15 onward) under 14 days |

Zod 4.6.7 from the earlier format probe was nine days old; selected 4.6.5 to satisfy the 14-day age gate. AJV 8.20.0 selected instead of the older probe-era pin. Health scores describe upstream repositories, not a package-version security certification.

Official API references: [Zod JSON Schema](https://zod.dev/json-schema), [YAML parser](https://eemeli.org/yaml/), [AJV formats](https://ajv.js.org/guide/formats.html). Reused the established schema-factory and object-loader interfaces. No Astro dependency needed to generate JSON Schemas or validate the seed.

## Archived-pricing parser — 2026-10-22

Added exact production pin `parse5@8.0.1`, published 2026-04-19 (186 days old), MIT; transitive lock
`entities@8.1.0`, published 2026-09-07 (45 days old), BSD-2-Clause, Node >=20.19.0.
Both licenses permit this private repository's use and redistribution with their notices; dependency packages retain
those notices. Repository health `inikulin/parse5`: 6.4/10; balanced-policy result embedded in analysis: passed;
zero critical/high repository advisories reported. `npm audit --json`: zero known advisories across the locked tree.
Installation used `--ignore-scripts`; no install hooks executed.

The standalone policy CLI could not independently reproduce the embedded result: the documented command prints
subcommand usage; `rsx policy test inikulin/parse5 --policy balanced --format json` returns
`--policy is set but no policy loader is wired (cli.WithPolicy)`. This tooling limitation does not constitute an
independent policy pass; the recorded pass is the analysis result. Parser API/source locations/entity decoding
probed locally before implementation. Browser-targeted ESM bundle passed an inert extraction smoke check without
Node built-ins; this is bundle compatibility evidence, not a deployed Worker execution claim.

Primary references: [parse5 API](https://parse5.js.org/functions/parse5.parse.html),
[parse5 releases](https://github.com/inikulin/parse5/releases),
[entities repository/license](https://github.com/fb55/entities).
