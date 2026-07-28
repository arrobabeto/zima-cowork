---
name: zima-figma-api
description: >-
  Reads the Zima Figma file via the Figma REST API using FIGMA_API_KEY and
  FIGMA_FILE_KEY (no Figma MCP, no Bexolutions account). Use when inspecting
  Zima designs, listing pages/frames, exporting node images, extracting
  typography/layout specs, or when the user mentions Figma API key, file key,
  ZIMA Coffee design system, or design-to-code from Figma without MCP.
---

# Zima Figma API (REST only)

Do **not** use the Figma MCP plugin or any Bexolutions-linked Figma session for this project.
Use `FIGMA_API_KEY` + `FIGMA_FILE_KEY` from the shell or project `.env`.

## Prerequisites

```bash
# .env (already used by the helper)
FIGMA_API_KEY=figd_...
FIGMA_FILE_KEY=VHmdNXMthrm7hlsRjMg20m
```

Verify:

```bash
node .agents/skills/zima-figma-api/scripts/figma.mjs me
node .agents/skills/zima-figma-api/scripts/figma.mjs file
# or: pnpm run figma:verify
```

Expected account for Zima: the key owner's email (not Bexolutions). Expected file name: **ZIMA Coffee + Cowork — Website Design System**.

## Commands

Run from the repo root:

```bash
node .agents/skills/zima-figma-api/scripts/figma.mjs me
node .agents/skills/zima-figma-api/scripts/figma.mjs file
node .agents/skills/zima-figma-api/scripts/figma.mjs pages
node .agents/skills/zima-figma-api/scripts/figma.mjs tree "03 — Desktop pages" 2
node .agents/skills/zima-figma-api/scripts/figma.mjs nodes 7:2
node .agents/skills/zima-figma-api/scripts/figma.mjs export 7:2 png 2
```

URL `node-id=7-2` → pass `7:2` (or let the script rewrite `-` → `:`).

## Workflow

1. `me` + `file` — confirm account and file.
2. `pages` / `tree` — find the frame that maps to a site section.
3. `nodes` — pull structure, text, and sizes for implementation.
4. `export` — grab a PNG reference URL when visual fidelity matters.
5. Hand off to `$zima-build-from-figma` to implement Astro + publish CMS JSON.

## Hard rules

- Never print or commit `FIGMA_API_KEY`.
- Map colors to tokens in `src/styles/global.css` — no hex in section components.
- Prefer existing `Section*.astro` components before creating new ones.
- For endpoint details, read [references/api.md](references/api.md).
