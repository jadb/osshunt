CREATE TABLE IF NOT EXISTS history (
  id TEXT PRIMARY KEY,
  data TEXT,
  checked_ms INTEGER,
  token TEXT
);
CREATE TABLE IF NOT EXISTS image_leases (
  id TEXT PRIMARY KEY,
  retry_at INTEGER NOT NULL DEFAULT 0,
  token TEXT
);
