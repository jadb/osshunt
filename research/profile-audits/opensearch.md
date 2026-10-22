> Temporary paths normalized; local setup omitted. Exact original retained locally.

# opensearch research audit

2026-10-21; current official sources unless otherwise specified.

1. web.open about/foundation/install/currentDocker/tarball; tarball source explicitly3.9.0.
2. Search foundation2024/currentmembers; official2026announcement listsAWS,IBM,SAP,Uber premier members; foundation page supplies paid membership evidence.
3. Read fourth-birthday post:2021firststable vs2024foundation; product age separated.
4. Read production prep: replace demo TLS/users,authroles,multinode,snapshots. DockerDesktop4GB noted as example rather than production minimum.
5. Guessed important-settings URL failed; tarball page supplied sysctl/swapping fallback.
6. Reviewed official install routes; no verified official-linked one-click service template; managedAmazonoffer excluded from foundation pricing.

Decision: preserve explicit unknowns; annual totals differ from monthly billing; popular requires an actual vendor designation. Product reasons and moats are assessments.
Wrote profile, claim ledger and audit incrementally.

Exact query arguments, in the product research order (queries may have been batched with other products):
- web.search_query {"q": "site:opensearch.org foundation members funding 2024"}
- web.search_query {"q": "site:opensearch.org \"one-click\" install"}

Repeatable source URL index (read through open/click/search results; chronological decisions and failures above):
- https://opensearch.org/foundation/
- https://opensearch.org/blog/happy-fourth-birthday-opensearch/
- https://opensearch.org/about/
- https://aws.amazon.com
- https://opensearch.org/announcements/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members/
- https://www.ibm.com
- https://www.sap.com
- https://www.uber.com
- https://docs.opensearch.org/latest/install-and-configure/install-opensearch/tar/
- https://docs.opensearch.org/latest/install-and-configure/install-opensearch/index/

Output/check steps: wrote assigned profiles, claims and audits only. Local construction scripts batch1.py through batch5.py and finalqa.py are preserved beside outputs. First python command was unavailable; python3 fallback succeeded. Final validation command: node scripts/validate-profiles.mjs profiles . Result:21 valid profiles. Claims checked separately because validator external-directory mode does not read ledgers.
