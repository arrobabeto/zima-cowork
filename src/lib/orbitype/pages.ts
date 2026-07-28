import type { Page } from "~/types/page"
import { normalizeSections } from "~/lib/normalize-sections"
import { orbitypeSql } from "./client"
import { hasSqlConfigured, isMockMode } from "./config"

function normalizePage(page: Page): Page {
  return { ...page, sections: normalizeSections(page.sections) }
}

export async function getPage(slug: string): Promise<Page | null> {
  if (isMockMode() || !hasSqlConfigured()) {
    return null
  }

  try {
    const rows = await orbitypeSql<Page>(
      "SELECT * FROM pages WHERE slug = :slug LIMIT 1",
      { slug },
    )
    const row = rows[0]
    if (row) return normalizePage(row)
    return null
  } catch (error) {
    console.error("[orbitype] getPage failed:", error)
    return null
  }
}

export async function listPageSlugs(): Promise<
  Array<Pick<Page, "slug" | "updated_at">>
> {
  if (isMockMode() || !hasSqlConfigured()) {
    return []
  }

  try {
    return await orbitypeSql(
      "SELECT slug, updated_at FROM pages ORDER BY updated_at DESC",
    )
  } catch (error) {
    console.error("[orbitype] listPageSlugs failed:", error)
    return []
  }
}
