import type { Post } from "~/types/post"
import { normalizeSections } from "~/lib/normalize-sections"
import { orbitypeSql } from "./client"
import { hasSqlConfigured, isMockMode } from "./config"

function normalizePost(post: Post): Post {
  return { ...post, sections: normalizeSections(post.sections) }
}

export type ListPostsOptions = {
  page?: number
  limit?: number
  status?: string
}

export async function listPosts(
  options: ListPostsOptions = {},
): Promise<{ posts: Post[]; total: number }> {
  const page = Math.max(1, options.page ?? 1)
  const limit = Math.min(50, Math.max(1, options.limit ?? 10))
  const status = options.status ?? "published"
  const offset = (page - 1) * limit

  if (isMockMode() || !hasSqlConfigured()) {
    return { posts: [], total: 0 }
  }

  try {
    const countRows = await orbitypeSql<{ count: string }>(
      `SELECT COUNT(*)::text AS count FROM posts
       WHERE status->>'value' = :status`,
      { status },
    )
    const total = Number(countRows[0]?.count ?? 0)

    const posts = await orbitypeSql<Post>(
      `SELECT * FROM posts
       WHERE status->>'value' = :status
       ORDER BY created_at DESC
       LIMIT :limit OFFSET :offset`,
      { status, limit, offset },
    )

    return { posts: posts.map(normalizePost), total }
  } catch (error) {
    console.error("[orbitype] listPosts failed:", error)
    return { posts: [], total: 0 }
  }
}

export async function getPost(id: string): Promise<Post | null> {
  if (isMockMode() || !hasSqlConfigured()) {
    return null
  }

  try {
    const rows = await orbitypeSql<Post>(
      "SELECT * FROM posts WHERE id = :id LIMIT 1",
      { id },
    )
    const row = rows[0]
    if (row) return normalizePost(row)
    return null
  } catch (error) {
    console.error("[orbitype] getPost failed:", error)
    return null
  }
}

export async function listPublishedPostIds(): Promise<
  Array<Pick<Post, "id" | "title" | "updated_at">>
> {
  if (isMockMode() || !hasSqlConfigured()) {
    return []
  }

  try {
    return await orbitypeSql(
      `SELECT id, title, updated_at FROM posts
       WHERE status->>'value' = 'published'
       ORDER BY updated_at DESC`,
    )
  } catch (error) {
    console.error("[orbitype] listPublishedPostIds failed:", error)
    return []
  }
}
