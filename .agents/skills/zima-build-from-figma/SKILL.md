---
name: zima-build-from-figma
description: >-
  End-to-end Zima workflow: read a Figma frame via REST API keys, implement an
  Astro Section*.astro component, then publish sections JSON through the
  Orbitype SQL HTTP API. Use when building or updating site sections from the
  ZIMA Coffee design file, implementing landing pages from Figma, or wiring
  design → code → CMS without Figma/Orbitype MCP.
---

# Build Zima from Figma → Astro → Orbitype

Orchestrates `$zima-figma-api` and `$zima-orbitype-api`. No Figma MCP. No Orbitype MCP.

## When to use

- User asks to implement a page/section from the Zima Figma file.
- User wants design tokens or frames turned into CMS-driven Astro sections.
- Coding the rest of the site after env + API keys are already configured.

## Steps

Copy and track:

```
- [ ] Figma: me + file (correct account + ZIMA file)
- [ ] Figma: tree/nodes/export for the target frame
- [ ] Code: reuse or add Section*.astro
- [ ] Local: lint + typecheck; visual check on pnpm dev
- [ ] Orbitype: context (confirm connector)
- [ ] Orbitype: read + backup sections
- [ ] User confirms mutate SQL
- [ ] Orbitype: mutate + re-read + browser verify
```

### 1. Design (Figma REST)

```bash
node .agents/skills/zima-figma-api/scripts/figma.mjs me
node .agents/skills/zima-figma-api/scripts/figma.mjs tree "03 — Desktop pages" 2
node .agents/skills/zima-figma-api/scripts/figma.mjs nodes <NODE_ID>
node .agents/skills/zima-figma-api/scripts/figma.mjs export <NODE_ID> png 2
```

Read `$zima-figma-api` if unsure.

### 2. Implement (Astro)

1. Check existing sections under `src/components/sections/`.
2. Prefer extending with `variant` over cloning.
3. New file: `SectionName.astro` with `locale: Locale`, optional CMS props, `translate()`, `SafeHtml` for HTML.
4. Tokens only — edit `src/styles/global.css` for new colors/type.
5. No `client:*` unless justified; no imports from `~/lib/orbitype/*` in sections.

Details: [references/checklist.md](references/checklist.md).

### 3. Publish (Orbitype SQL)

```bash
node .agents/skills/zima-orbitype-api/scripts/orbitype-sql.mjs context
node .agents/skills/zima-orbitype-api/scripts/orbitype-sql.mjs query \
  'SELECT id, slug, sections FROM pages WHERE slug = :slug' --bind slug=home
```

Propose `UPDATE ... RETURNING id, slug`. Wait for explicit user OK. Then mutate and re-query.

Read `$zima-orbitype-api` for the sections contract and SQL templates.

## Done when

- Component renders locally without DebugPanel.
- CMS row `_orbi.component` matches the filename.
- Live/mock page shows the section; lint + typecheck clean.
