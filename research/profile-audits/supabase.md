> Temporary paths normalized; local setup omitted. Exact original retained locally.

# supabase — research audit
Checked 2026-10-21

## Chronological research actions
1. Read assignment schema and QA clarifications; original repository left read only.
2. web.open pricing and Docker docs; exact MostPopularPro25 andTeam599 current cards read. Subscription versus per-MAU usage kept separate.
3. web.search funding found June2026SeriesF; read SeriesF,SeriesE,company investor list and YC2020. Do not stop at2025 financing.
4. Read current raw Compose: Envoy default,Postgres17, services; Redis absent. Official docs confirm Kong override and analytics now optional.
5. Read self-host overview: Docker official, Kubernetes community maintained; no unverified marketplace included.
6. Quick-start shell script only sets up configuration; separate start retained in installer notes. Nothing installed.
7. Read REST API,RLS,Realtime documentation for three functional assessments.

## Sources read and public-page locators
- https://supabase.com/company — Our investors; $1b funding; Supabase Inc footer
- https://www.ycombinator.com/companies/supabase — Founded2020; Summer2020; active company
- https://supabase.com/blog/series-f — June4 2026 opening: $500m SeriesF; GIC, Stripe, Georgian and Salesforce Ventures
- https://supabase.com/blog/supabase-series-e — October3 2025 opening investor list
- https://supabase.com/docs/guides/self-hosting — Get started; Community projects; How self-hosted differs
- https://supabase.com/pricing — Pro Most Popular; Team; Enterprise cards; compute credits and overage rows
- https://supabase.com/docs/guides/api — Data REST API; Features; PostgREST and Row Level Security
- https://supabase.com/docs/guides/database/postgres/row-level-security — Row Level Security overview and policies
- https://supabase.com/docs/guides/realtime — Broadcast; Presence; Postgres Changes
- https://supabase.com/docs/guides/self-hosting/docker — System requirements; Quick start Linux; Architecture; Configuring email/S3/AI Assistant
- https://raw.githubusercontent.com/supabase/supabase/master/docker/docker-compose.yml — services: api-gw, auth, rest, realtime, storage, imgproxy, meta, functions, db, supavisor

## Decisions
- Four pricing roles retained; annual totals derived only where annual billing is explicit. Unknown does not imply absent.
- Each of three product reasons and moat marked assessment; sponsors distinguished from investors/customers.
- Persisted profile, claim ledger and this audit together.

## Price denominator refinement

Split existing combined base/usage unit text into unit=organization and usageUnit=additional monthly active user. Published amounts, included allowances and source citations retained unchanged. Executed the price-unit refinement helper; no new price inferred.
