# Build checklist — Figma frame → live section

```
Progress:
- [ ] 1. Confirm Figma auth (other account, not Bexolutions MCP)
- [ ] 2. Inspect target frame + export reference image
- [ ] 3. Map to existing Section* or plan new file
- [ ] 4. Implement SectionName.astro + tokens
- [ ] 5. Verify in mock / local with hardcoded props
- [ ] 6. Confirm Orbitype connector context
- [ ] 7. Read + backup target page sections
- [ ] 8. User confirms SQL mutation
- [ ] 9. Mutate with RETURNING, re-read, open URL
```

## Existing sections (prefer reuse)

SectionHero, SectionFeatureCallout, SectionFeatureGrid, SectionProse,
SectionQuote, SectionCta, SectionWelcome, SectionSpacer.

Prefer a `variant` prop over cloning a whole section.

## Section file skeleton

```astro
---
// SectionName.astro
//
// CMS JSON:
// {
//   "title": { "en": "..." },
//   "_orbi": { "component": "SectionName" }
// }
import { translate } from "~/lib/i18n"
import type { I18nString } from "~/types/i18n"
import type { Locale } from "~/config/locales"

interface Props {
  title?: I18nString
  locale: Locale
}

const { title, locale } = Astro.props
const heading = translate(title, locale)
---

<section class="container-wide py-section">
  {heading && <h2 class="text-3xl font-semibold">{heading}</h2>}
</section>
```

## Quality gates

```bash
pnpm run lint
pnpm run typecheck
```

Unknown `_orbi.component` → DebugPanel (never blank, never 500).
