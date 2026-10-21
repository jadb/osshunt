> Temporary output paths normalized for portability; local operating setup omitted. Original audit retained locally.

# Support and helpdesk audit — 2026-10-21

2. `ls ../github ../rsx; cat ...` inspected central evidence. Output too large: fallback Python summary by field. No missing candidate artifacts.
3. Web open official pricing URLs: https://www.zammad.com/en/pricing failed (inaccessible); https://www.chatwoot.com/pricing/ fetched; https://freescout.net/modules/ fetched; https://www.zendesk.com/pricing/ fetched; https://www.intercom.com/pricing fetched. Zendesk Support Team USD19/researcher/month annual; Suite Team55. Intercom Essential29/seat/month annual plus Fin outcome0.99.
4. Python summarized central GitHub metadata/license/commit evidence and rsx output. All three active/non-archived. Zammad rsx hit abuse detection; use GitHub API fallback.
5. Web retry Zammad URL failed; Chatwoot https://www.chatwoot.com/pricing/self-hosted-plans/ redirected without trailing slash. Community excludes Captain AI, voice, branding, researcher capacity, roles/permissions, SAML, SLA. Classify C (voice and routing/capacity affect daily support).
6. FreeScout modules official page lists paid tags, saved replies, workflows, API/webhooks, custom fields, portal, reports, knowledge base; AGPL modules sold under lifetime per-instance license. Classify C for paid acquisition of daily workflow modules; do not call modules proprietary.
7. Python base64-decoded central LICENSE payloads at captured SHA: Zammad and FreeScout GNU AGPL3; Chatwoot MIT outside enterprise directory, separate license inside enterprise. GitHub license classifier NOASSERTION does not override actual license text. Releases: Chatwoot v4.19.0 (2026-10-20); FreeScout1.8.248 (2026-10-17); Zammad releases endpoint has no tag in response.
8. Web search `site.zammad.com self hosted same features open source pricing all features` and `site.freescout.net hosting FreeScout official hosting`: found canonical non-www Zammad URLs; official knowledge base explicitly states Community and Support Contract packages identical. Mark Zammad A; hosted plan gates not self-hosted gates.
9. Open https://support.zammad.com/help/en-us/51-getting-started/38-what-s-the-difference-between-the-community-and-the-support-contract-versions confirmed identical packages. Open https://zammad.com/en/pricing succeeded: managed hosting and support contracts. Open https://freescout.net/ confirmed shared inbox, self-hosting, unlimited agents, mailboxes and paid module links; footer cloud hosting link. Open Chatwoot enterprise/LICENSE at pinned SHA failed Cache miss; root LICENSE separation sufficient for MIT core claim, do not claim enterprise OSI.
10. Python rsx summaries: Chatwoot4.8/10 balanced passed; FreeScout5.0/10 balanced passed. These heuristic scores are not endorsement or license verdict.
11. Clicked official Zammad migration article: fresh target required because migration overwrites data; captured migration limit. Clicked FreeScout cloud-hosted wiki: explicitly no common cloud service, only recommended hosts; hostedOffer=false. Clicked FreeScout migration wiki: API/Webhooks paid module required; tags/custom fields require modules; ticket IDs cannot be preserved and chat messenger links cannot transfer.
12. First Python JSON construction failed SyntaxError (mixed list/comprehension); no output file created. Rewrote builder `../build-support.py`, generated JSON and parsed it to validate. No repository changes.

## Repeated operations suitable for automation
- Summarize cached GitHub API artifacts by selected fields; decode pinned licenses; avoid dumping commit file arrays.
- Record canonical www/non-www fallbacks; distinguish transport failures from absent products.
- Extract self-hosted comparison tables separately from managed hosting price tiers.
- Check footer hosted-service link: a label may lead to explicit denial of first-party hosting (FreeScout).
- Keep paid AGPL module acquisition distinct from proprietary enterprise code.
