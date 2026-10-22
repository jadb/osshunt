CREATE TABLE IF NOT EXISTS pricing_history (
  id TEXT PRIMARY KEY,
  checked_at TEXT NOT NULL,
  next_check_at TEXT NOT NULL,
  token TEXT,
  lease_until INTEGER NOT NULL DEFAULT 0,
  checkpoint TEXT
);
