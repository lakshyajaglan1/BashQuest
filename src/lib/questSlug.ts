import { lessons } from "./lessons.js";

/**
 * Generates an SEO-friendly URL slug for a quest.
 * Example: "1-who-am-i-and-where-am-i"
 */
export function getQuestSlug(lesson: { title: string }, index: number): string {
  const cleanTitle = lesson.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${index + 1}-${cleanTitle}`;
}

/**
 * Returns all quest slugs with their 0-based indices and quest IDs.
 */
export function getAllQuestSlugs(): Array<{ slug: string; index: number; id: number }> {
  return lessons.map((l: any, i: number) => ({
    slug: getQuestSlug(l, i),
    index: i,
    id: l.id,
  }));
}
