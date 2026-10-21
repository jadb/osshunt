import importlib.util
import json
from pathlib import Path
import tempfile
from threading import Lock
from types import SimpleNamespace
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('capture', Path(__file__).parents[1] / 'scripts/capture-github.py')
capture = importlib.util.module_from_spec(spec)
spec.loader.exec_module(capture)


class EvidenceContract(unittest.TestCase):
    def test_license_uses_observed_sha_and_release_404_kept(self):
        calls = []
        def run(command, **kwargs):
            calls.append(command)
            endpoint = command[-1]
            body = {'sha': 'abc123'} if endpoint.endswith('/commits/HEAD') else {}
            code = 1 if endpoint.endswith('/releases/latest') else 0
            return SimpleNamespace(stdout=json.dumps(body), returncode=code, stderr='HTTP 404' if code else '')
        with tempfile.TemporaryDirectory() as folder, patch.object(capture.subprocess, 'run', side_effect=run):
            target = Path(folder)
            self.assertTrue(capture.capture('owner/repo', target, target / 'audit.jsonl', Lock()))
            self.assertIn(['gh', 'api', 'repos/owner/repo/license?ref=abc123'], calls)
            result = json.loads((target / 'owner__repo.json').read_text())
            self.assertEqual(result['responses']['release']['status'], 1)
            self.assertEqual(len((target / 'audit.jsonl').read_text().splitlines()), 4)


if __name__ == '__main__':
    unittest.main()
