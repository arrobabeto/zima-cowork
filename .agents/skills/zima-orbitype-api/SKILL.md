---
name: zima-orbitype-api
description: >-
  Talks to the Zima Orbitype CMS over the SQL HTTP API using
  ORBITYPE_API_SQL_KEY (no Orbitype MCP). Use when reading or updating pages,
  posts, settings, or sections JSON; probing connector scope; seeding/installing
  schema; or when the user mentions Orbitype, CMS SQL, sections contract,
  _orbi.component, or publishing content without MCP.
---

# Zima Orbitype API (HTTP SQL only)

Do **not** rely on Orbitype MCP tools (`orbitype_get_context`, `sql_*`) for this workflow.
Use the REST SQL API via the bundled script (or equivalent `curl`).

## Prerequisites

```bash
# .env
ORBITYPE_MOCK=false
ORBITYPE_API_SQL_URL=https://core.orbitype.com/api/sql/v1
ORBITYPE_API_SQL_KEY=...
ORBITYPE_SQL_API_KEY=...   # same key; MCP naming alias
```

Verify:

```bash
node .agents/skills/zima-orbitype-api/scripts/orbitype-sql.mjs context
```

Expect HTTP 200 and JSON with `projectId` + `connectorId`. Confirm those IDs with the user before any write.

## Commands

```bash
node .agents/skills/zima-orbitype-api/scripts/orbitype-sql.mjs context

node .agents/skills/zima-orbitype-api/scripts/orbitype-sql.mjs query \
  'SELECT id, slug, updated_at FROM pages ORDER BY updated_at DESC'

node .agents/skills/zima-orbitype-api/scripts/orbitype-sql.mjs query \
  'SELECT id, slug, sections FROM pages WHERE slug = :slug LIMIT 1' \
  --bind slug=home

# ONLY after user confirms — must include RETURNING
node .agents/skills/zima-orbitype-api/scripts/orbitype-sql.mjs mutate \
  "UPDATE pages SET sections = ... WHERE slug = :slug RETURNING id, slug" \
  --bind slug=home
```

The `mutate` command refuses SQL without `RETURNING`.

## Safe content workflow

1. `context` — confirm connector.
2. `query` — read the target row; paste/backup current `sections` in the chat or a scratch file.
3. Propose the exact SQL + bindings to the user.
4. After confirmation → `mutate` with `RETURNING`.
5. Re-`query` the row; open the page URL and verify render.

## Hard rules

- Named bindings only (`:name`).
- Mutations always `RETURNING`.
- Bad key returns **404**, not 401 — treat bodies as text.
- Never put `_orbi` or `img` as the first key in a section object.
- `_orbi.component` must match `src/components/sections/Section*.astro` stem.
- Never log the API key.
- Full contract: [references/contract.md](references/contract.md).
