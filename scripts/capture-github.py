#!/usr/bin/env python3
"""Capture public GitHub evidence with an append-only command audit. Requires gh auth."""
import argparse
import base64
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
import json
from pathlib import Path
import re
import subprocess
from threading import Lock


def capture(repo, output, audit, lock):
    result = {"repo": repo, "checkedAt": datetime.now(timezone.utc).isoformat(), "responses": {}}
    for name, suffix in (("metadata", ""), ("commit", "/commits/HEAD"), ("license", "/license"), ("release", "/releases/latest")):
        if name == "license":
            sha = (result["responses"].get("commit", {}).get("data") or {}).get("sha")
            if sha:
                suffix += f"?ref={sha}"
        endpoint = f"repos/{repo}{suffix}"
        command = ["gh", "api", endpoint]
        started = datetime.now(timezone.utc).isoformat()
        try:
            proc = subprocess.run(command, text=True, capture_output=True, timeout=45)
            try:
                body = json.loads(proc.stdout)
            except json.JSONDecodeError:
                body = None
            result["responses"][name] = {"status": proc.returncode, "url": f"https://api.github.com/{endpoint}", "data": body, "error": proc.stderr.strip() if proc.returncode else None}
            if name == "license" and proc.returncode == 0 and body.get("encoding") == "base64":
                result["responses"][name]["text"] = base64.b64decode(body["content"]).decode("utf-8", errors="replace")
            record = {"startedAt": started, "command": command, "exitCode": proc.returncode, "result": "captured" if proc.returncode == 0 else proc.stderr.strip(), "evidence": f"github/{repo.replace('/', '__')}.json#/responses/{name}"}
        except subprocess.TimeoutExpired:
            result["responses"][name] = {"status": 124, "url": f"https://api.github.com/{endpoint}", "data": None, "error": "45 second timeout"}
            record = {"startedAt": started, "command": command, "exitCode": 124, "result": "timeout"}
        with lock:
            with audit.open("a") as stream:
                stream.write(json.dumps(record) + "\n")
    target = output / f"{repo.replace('/', '__')}.json"
    target.write_text(json.dumps(result, indent=2) + "\n")
    print(f"{repo}: metadata={result['responses']['metadata']['status']} license={result['responses']['license']['status']}", flush=True)
    return result["responses"]["metadata"]["status"] == 0


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("repos", nargs="+")
    parser.add_argument("--out", type=Path, default=Path("research/github"))
    parser.add_argument("--workers", type=int, default=4, choices=range(1, 9))
    args = parser.parse_args()
    if any(not re.fullmatch(r"[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+", repo) for repo in args.repos):
        parser.error("repository must be owner/name")
    args.out.mkdir(parents=True, exist_ok=True)
    lock = Lock()
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        outcomes = list(pool.map(lambda repo: capture(repo, args.out, args.out.parent / "github-commands.jsonl", lock), dict.fromkeys(args.repos)))
    raise SystemExit(0 if all(outcomes) else 1)


if __name__ == "__main__":
    main()
