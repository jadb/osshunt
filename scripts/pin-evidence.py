#!/usr/bin/env python3
"""Pin existing GitHub license captures to their already observed commit."""
import argparse
import base64
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
import json
from pathlib import Path
import subprocess
from threading import Lock

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('directory', type=Path)
args = parser.parse_args()
lock = Lock()

def pin(path):
    data = json.loads(path.read_text())
    sha = (data['responses']['commit']['data'] or {}).get('sha')
    if not sha:
        return
    endpoint = f"repos/{data['repo']}/license?ref={sha}"
    command = ['gh', 'api', endpoint]
    result = subprocess.run(command, text=True, capture_output=True, timeout=45)
    try:
        body = json.loads(result.stdout)
    except json.JSONDecodeError:
        body = None
    license_data = {'status': result.returncode, 'url': 'https://api.github.com/' + endpoint,
                    'data': body, 'error': result.stderr.strip() if result.returncode else None}
    if result.returncode == 0 and body.get('encoding') == 'base64':
        license_data['text'] = base64.b64decode(body['content']).decode('utf-8', errors='replace')
    data['responses']['license'] = license_data
    path.write_text(json.dumps(data, indent=2) + '\n')
    with lock:
        with (args.directory.parent / 'github-commands.jsonl').open('a') as stream:
            stream.write(json.dumps({'startedAt': datetime.now(timezone.utc).isoformat(), 'command': command,
                                     'exitCode': result.returncode, 'result': 'pinned license' if result.returncode == 0 else result.stderr.strip(),
                                     'evidence': 'github/' + path.name + '#/responses/license'}) + '\n')

with ThreadPoolExecutor(max_workers=4) as pool:
    list(pool.map(pin, sorted(args.directory.glob('*.json'))))
