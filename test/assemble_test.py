import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest


class AssemblyEvidenceContract(unittest.TestCase):
    def test_profile_join_preserves_company_and_project_age_distinction(self):
        for kind, basis, business_age in [('business', 'company-founded', 6), ('community', 'project-started', None)]:
            with self.subTest(basis=basis), tempfile.TemporaryDirectory() as folder:
                root = Path(folder)
                (root / 'scripts').mkdir()
                shutil.copyfile(Path(__file__).parents[1] / 'scripts/assemble.py', root / 'scripts/assemble.py')
                (root / 'input').mkdir()
                (root / 'profiles').mkdir()
                (root / 'input/office-files.json').write_text(json.dumps({'category': {'id': 'office-files'},
                    'paid': [{'id': 'sample', 'kind': 'paid'}], 'oss': [], 'alternatives': []}))
                (root / 'profiles/sample.json').write_text(json.dumps({'id': 'sample', 'checkedAt': '2026-10-21',
                    'organization': {'kind': kind, 'ageBasis': basis, 'foundedYear': 2020}}))
                result = subprocess.run([sys.executable, str(root / 'scripts/assemble.py'), str(root / 'input'), '--partial'],
                                        capture_output=True, text=True)
                self.assertEqual(result.returncode, 0, result.stderr)
                profile = json.loads((root / 'research/source/products.json').read_text())[0]['profile']
                self.assertEqual(profile['organization']['yearsActive'], 6)
                self.assertEqual(profile['organization']['yearsInBusiness'], business_age)

    def test_orphan_profile_cannot_silently_enter_snapshot(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            (root / 'scripts').mkdir()
            shutil.copyfile(Path(__file__).parents[1] / 'scripts/assemble.py', root / 'scripts/assemble.py')
            (root / 'input').mkdir()
            (root / 'profiles').mkdir()
            (root / 'input/office-files.json').write_text(json.dumps({'category': {'id': 'office-files'},
                'paid': [{'id': 'sample', 'kind': 'paid'}], 'oss': [], 'alternatives': []}))
            (root / 'profiles/absent.json').write_text(json.dumps({'id': 'absent'}))
            result = subprocess.run([sys.executable, str(root / 'scripts/assemble.py'), str(root / 'input'), '--partial'],
                                    capture_output=True, text=True)
            self.assertNotEqual(result.returncode, 0)
            self.assertIn('Orphan', result.stderr)

    def test_duplicate_product_or_edge_in_one_category_must_fail(self):
        for duplicate in ['product', 'edge']:
            with self.subTest(duplicate=duplicate), tempfile.TemporaryDirectory() as folder:
                root = Path(folder)
                (root / 'scripts').mkdir()
                shutil.copyfile(Path(__file__).parents[1] / 'scripts/assemble.py', root / 'scripts/assemble.py')
                source = root / 'input'
                source.mkdir()
                product = {'id': 'paid', 'kind': 'paid', 'categories': ['office-files']}
                edge = {'id': 'paid--community', 'sources': [], 'migrationNotes': 'Requires import'}
                data = {'category': {'id': 'office-files'}, 'paid': [product, product] if duplicate == 'product' else [product],
                        'oss': [], 'alternatives': [edge, edge] if duplicate == 'edge' else [edge]}
                (source / 'office-files.json').write_text(json.dumps(data))
                result = subprocess.run([sys.executable, str(root / 'scripts/assemble.py'), str(source), '--partial'],
                                        capture_output=True, text=True)
                self.assertNotEqual(result.returncode, 0, f'{duplicate} silently collapsed')
                self.assertIn('duplicate', result.stderr.lower())

    def test_explicit_evidence_location_and_canonical_repo_alias(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            (root / 'scripts').mkdir()
            shutil.copyfile(Path(__file__).parents[1] / 'scripts/assemble.py', root / 'scripts/assemble.py')
            categories = root / 'input'
            categories.mkdir()
            evidence = root / 'captured'
            (evidence / 'github').mkdir(parents=True)
            product = {'id': 'community', 'kind': 'oss', 'categories': ['office-files'],
                       'repo': 'https://github.com/example/new-name', 'sources': {'license': 'https://example.org/old'},
                       'health': {'lastRelease': 'official-1.2.3', 'lastReleaseAt': '2026-10-10'},
                       'locked': ['office restriction'], 'classificationReason': 'Office scope'}
            (categories / 'office-files.json').write_text(json.dumps({'category': {'id': 'office-files'}, 'paid': [],
                        'oss': [product], 'alternatives': []}))
            second = {**product, 'categories': ['crm'], 'locked': ['CRM restriction'], 'classificationReason': 'CRM scope'}
            (categories / 'crm.json').write_text(json.dumps({'category': {'id': 'crm'}, 'paid': [], 'oss': [second], 'alternatives': []}))
            (evidence / 'github/example__old-name.json').write_text(json.dumps({'repo': 'example/old-name', 'responses': {
                'metadata': {'status': 0, 'data': {'full_name': 'example/new-name', 'archived': False, 'disabled': False}},
                'commit': {'data': {'sha': 'pinned-sha'}}, 'release': {'status': 1, 'data': {'message': 'Not Found'}},
                'license': {'status': 0, 'url': 'https://api.github.com/repos/example/new-name/license?ref=pinned-sha',
                            'data': {'html_url': 'https://github.com/example/new-name/blob/pinned-sha/LICENSE'}}}}))
            result = subprocess.run([sys.executable, str(root / 'scripts/assemble.py'), str(categories),
                                     '--evidence-dir', str(evidence), '--partial'], capture_output=True, text=True)
            self.assertEqual(result.returncode, 0, result.stderr)
            actual = json.loads((root / 'research/source/products.json').read_text())[0]
            self.assertEqual(actual['health']['commit'], 'pinned-sha')
            self.assertIn('/pinned-sha/LICENSE', actual['sources']['license'])
            self.assertEqual(actual['categories'], ['crm', 'office-files'])
            self.assertEqual(actual['locked'], ['office restriction', 'CRM restriction'])
            self.assertIn('CRM scope', actual['classificationReason'])
            self.assertEqual(actual['health']['lastRelease'], 'official-1.2.3')
            self.assertEqual(actual['health']['lastReleaseAt'], '2026-10-10')


if __name__ == '__main__':
    unittest.main()
