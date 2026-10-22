> Temporary paths normalized; local setup omitted. Exact original retained locally.

# plane research audit
Checked 2026-10-21

1. Read task brief and QA clarifications; read global operating instructions. Scope limited to assigned temporary group directory.
2. Public primary-source web research; results and page sections listed below.
3. web.open pricing/developer overview; /about-us returned404.
4. web.search Plane seed funding OSS Capital2023 returned official seed announcement.
5. web.click Docker Compose and Coolify; web.find CPU/Redis; distinguished commercial Free from CE.
6. web.open current CE raw compose to verify PostgreSQL, Valkey, RabbitMQ, MinIO and worker services.

## Public pages read and claim locators
- https://plane.so/blog/plane-raises-4m-seed — Founded in November, 2022; seed round funded solely by OSS Capital → organization.name
- https://plane.so/blog/plane-raises-4m-seed — Founded in November, 2022; seed round funded solely by OSS Capital → organization.foundedYear
- https://plane.so/blog/plane-raises-4m-seed — Founded in November, 2022; seed round funded solely by OSS Capital → organization.ageBasis
- https://plane.so/blog/plane-raises-4m-seed — Founded in November, 2022; seed round funded solely by OSS Capital → organization.ownership
- https://plane.so/blog/plane-raises-4m-seed — Founded in November, 2022; seed round funded solely by OSS Capital → organization.funding
- https://plane.so/blog/plane-raises-4m-seed — Founded in November, 2022; seed round funded solely by OSS Capital → organization.investors
- https://plane.so/blog/plane-raises-4m-seed — Founded in November, 2022; seed round funded solely by OSS Capital → organization.notes
- https://plane.so/pricing — Community → pricingTiers.entry
- https://plane.so/pricing — Pricing plans → pricingTiers.popular
- https://plane.so/pricing — Business → pricingTiers.business
- https://plane.so/pricing — Enterprise Grid → pricingTiers.enterprise
- https://plane.so/pricing — Cycles and Modules → productReasons.0
- https://plane.so/pricing — Layouts and Views → productReasons.1
- https://plane.so/pricing — Project Pages → productReasons.2
- https://plane.so/pricing — Projects and Work Items; Project Pages → moats.0
- https://plane.so/blog/plane-raises-4m-seed — About Plane → alternativeDetails.sponsorship
- https://developers.plane.so/self-hosting/methods/docker-compose — Install Community Edition → alternativeDetails.selfHosting
- https://developers.plane.so/self-hosting/methods/docker-compose — Install Plane — Procedure → alternativeDetails.oneClickInstall
- https://developers.plane.so/self-hosting/methods/docker-compose — x-db-env; x-redis-env; x-mq-env; services → alternativeDetails.selfHosting.requirements.0
- https://raw.githubusercontent.com/makeplane/plane/master/deployments/cli/community/docker-compose.yml — x-db-env; x-redis-env; x-mq-env; services → alternativeDetails.selfHosting.requirements.1
- https://raw.githubusercontent.com/makeplane/plane/master/deployments/cli/community/docker-compose.yml — x-db-env; x-redis-env; x-mq-env; services → alternativeDetails.selfHosting.requirements.2
- https://raw.githubusercontent.com/makeplane/plane/master/deployments/cli/community/docker-compose.yml — x-db-env; x-redis-env; x-mq-env; services → alternativeDetails.selfHosting.requirements.3
- https://raw.githubusercontent.com/makeplane/plane/master/deployments/cli/community/docker-compose.yml — x-db-env; x-redis-env; x-mq-env; services → alternativeDetails.selfHosting.requirements.4
- https://raw.githubusercontent.com/makeplane/plane/master/deployments/cli/community/docker-compose.yml — x-db-env; x-redis-env; x-mq-env; services → alternativeDetails.selfHosting.requirements.5
- https://developers.plane.so/self-hosting/overview — x-db-env; x-redis-env; x-mq-env; services → alternativeDetails.selfHosting.requirements.6
- https://developers.plane.so/self-hosting/methods/docker-compose — Install Community Edition — Prerequisites → alternativeDetails.selfHosting.resources

## Decisions
- Four pricing roles retained. Unknown is explicit rather than inferred pricing or financing. Annual totals derived only from a documented annual-billed monthly figure.
- Three functional reasons and moat are assessments grounded in the cited feature facts.
- Builder command: python3 batch2.py; writes only this product profile, claims ledger and audit. Validation: node scripts/validate-profiles.mjs profiles .

## Final local checks
- Executed `python3 finalize.py` for targeted corrections and per-investor/sponsor/install ledger granularity.
- Executed `node scripts/validate-profiles.mjs profiles .`:23validprofiles. Separate claims parser check validates nonempty ledgers/publicHTTPURLs/date/locator fields.
