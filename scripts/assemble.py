#!/usr/bin/env python3
"""Assemble reviewed category research into collection source arrays."""
import argparse
from copy import deepcopy
import json
from pathlib import Path

ORDER = ['office-files', 'email-clients', 'passwords', 'pdf-tools', 'team-chat', 'video-calls', 'website-cms',
 'backup-recovery', 'docs-wiki', 'project-management', 'file-transfer', 'forms-surveys', 'kanban',
 'scheduling', 'e-signature', 'expense-reimbursements', 'document-management', 'transcription',
 'whiteboard-design', 'accounting-erp', 'time-tracking', 'learning-management', 'crm',
 'support-helpdesk', 'email-marketing', 'spreadsheet-database', 'ecommerce', 'image-editing',
 'diagramming', 'video-editing', 'social-publishing', 'automation', 'web-analytics', 'screen-recording',
 'hr', 'telephony', 'digital-assets', 'business-intelligence', 'recruiting', 'email-hosting',
 'login-sso', 'vpn-access', 'it-assets', 'hosting-backend', 'monitoring', 'internal-tools',
 'api-testing', 'search-infrastructure']


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('directory', type=Path)
    parser.add_argument('--evidence-dir', type=Path, help='shared GitHub/health capture directory; defaults to research parent')
    parser.add_argument('--partial', action='store_true', help='allow incomplete research during preparation')
    args = parser.parse_args()
    evidence_dir = args.evidence_dir or args.directory.parent
    repo_evidence = {}
    for path in (evidence_dir / 'github').glob('*.json'):
        capture = json.loads(path.read_text())
        repo_evidence[capture['repo'].lower()] = path
        canonical = (capture['responses']['metadata'].get('data') or {}).get('full_name')
        if canonical:
            repo_evidence[canonical.lower()] = path
    root = Path(__file__).resolve().parents[1]
    data = {'categories': [], 'products': [], 'alternatives': []}
    products, edges, conflicts = {}, {}, []
    for rank, category_id in enumerate(ORDER, 1):
        path = args.directory / f'{category_id}.json'
        if not path.exists():
            if args.partial:
                continue
            raise SystemExit(f'Missing category research: {category_id}')
        research = json.loads(path.read_text())
        category = research['category']
        if category['id'] != category_id:
            raise SystemExit(f'Category id mismatch: {path.name}')
        category['audienceRank'] = rank
        category.setdefault('parent', None)
        data['categories'].append(category)
        category_product_ids = set()
        category_edge_ids = set()
        for product in research['paid'] + research['oss']:
            normalized = product['id'].lower()
            if normalized in category_product_ids:
                raise SystemExit(f'{category_id}: duplicate product id {normalized}')
            category_product_ids.add(normalized)
            if product['id'] in products:
                old = products[product['id']]
                different = [key for key in product if key != 'categories' and old.get(key) != product[key]]
                if different:
                    conflicts.append({'id': product['id'], 'category': category_id, 'fields': different,
                                      'decision': 'First category provides canonical core attributes; restrictions and classification context merged; all source evidence retained.'})
                old['categories'] = sorted(set(old['categories'] + product['categories']))
                if product['kind'] == 'oss':
                    for field in ['locked', 'serviceLimitations']:
                        if field in old or field in product:
                            old[field] = list(dict.fromkeys(old.get(field, []) + product.get(field, [])))
                    context = product.get('classificationReason', '')
                    if context and context not in old.get('classificationReason', ''):
                        old['classificationReason'] += f' {category_id} scope: {context}'
            else:
                products[product['id']] = deepcopy(product)
        for edge in research['alternatives']:
            if edge['id'] in category_edge_ids:
                raise SystemExit(f"{category_id}: duplicate edge id {edge['id']}")
            category_edge_ids.add(edge['id'])
            if edge['id'] in edges:
                old = edges[edge['id']]
                old['sources'] = sorted(set(old['sources'] + edge['sources']))
                if edge['migrationNotes'] not in old['migrationNotes']:
                    old['migrationNotes'] += ' ' + edge['migrationNotes']
            else:
                edges[edge['id']] = deepcopy(edge)
    for product in products.values():
        if product['kind'] != 'oss':
            continue
        # Vendor-operated push is a paid service, not a proprietary software feature.
        if product['id'] == 'zulip':
            product['serviceLimitations'] = product['locked']
            product['locked'] = []
        repo = product['repo'].removeprefix('https://github.com/').rstrip('/')
        evidence = repo_evidence.get(repo.lower())
        if evidence:
            raw = json.loads(evidence.read_text())['responses']
            meta, commit, release = (raw[key].get('data') or {} for key in ('metadata', 'commit', 'release'))
            if raw['metadata']['status'] == 0:
                product['health'].update(archived=meta['archived'], disabled=meta['disabled'], pushedAt=meta.get('pushed_at'),
                                         commit=commit.get('sha'), lastCommitAt=commit.get('commit', {}).get('committer', {}).get('date'))
                if raw['release'].get('status') == 0 and release.get('tag_name') and not product['health'].get('releaseSource'):
                    product['health'].update(lastRelease=release['tag_name'], lastReleaseAt=release.get('published_at'),
                                             releaseSource=release.get('html_url', raw['release']['url']))
            license_data = raw['license'].get('data') or {}
            if raw['license']['status'] == 0 and '?ref=' in raw['license']['url']:
                product['sources']['license'] = license_data.get('html_url', product['sources']['license'])
        rsx_repo = json.loads(evidence.read_text())['repo'] if evidence else repo
        rsx = evidence_dir / 'rsx' / (rsx_repo.replace('/', '__') + '.json')
        if rsx.exists():
            check = json.loads(rsx.read_text())
            if 'policy' in check:
                product['health']['rsx'] = f"Quick analysis: {check['scores']['overall']}/10; balanced policy {'passed' if check['policy']['passed'] else 'failed'}. Automated repository signals; not a version-specific security audit."
    data['products'] = list(products.values())
    data['alternatives'] = list(edges.values())
    out = root / 'research/source'
    out.mkdir(parents=True, exist_ok=True)
    for name, rows in data.items():
        (out / f'{name}.json').write_text(json.dumps(sorted(rows, key=lambda row: row['id']), indent=2, ensure_ascii=False) + '\n')
    (root / 'research/merge-decisions.json').write_text(json.dumps(conflicts, indent=2) + '\n')
    print({name: len(rows) for name, rows in data.items()})


if __name__ == '__main__':
    main()
