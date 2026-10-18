import type { APIRoute } from "astro";
import { lessons } from "../lib/lessons.js";
import { getQuestSlug } from "../lib/questSlug";
import { languages, defaultLang, type SupportedLanguage } from "../i18n/languages";

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site ? site.toString() : "https://bashquest.com").replace(/\/$/, "");
  const today = new Date().toISOString().split("T")[0];
  const langKeys = Object.keys(languages) as SupportedLanguage[];

  const coreRoutes = ["", "about", "faq", "contact", "privacy", "terms"];
  const questRoutes = lessons.map((l: any, i: number) => `quests/${getQuestSlug(l, i)}`);
  const allRoutes = [...coreRoutes, ...questRoutes];

  // Helper to build full localized URL
  function buildUrl(route: string, lang: SupportedLanguage): string {
    const cleanRoute = route ? `${route}/` : "";
    if (lang === defaultLang) {
      return `${baseUrl}/${cleanRoute}`;
    }
    return `${baseUrl}/${lang}/${cleanRoute}`;
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const route of allRoutes) {
    const isHome = route === "";
    const isQuest = route.startsWith("quests/");
    const priority = isHome ? "1.0" : isQuest ? "0.8" : "0.7";
    const changefreq = isHome ? "daily" : isQuest ? "weekly" : "monthly";

    // Alternate links for all languages
    const alternatesXml = [
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${buildUrl(route, defaultLang)}" />`,
      ...langKeys.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${buildUrl(route, l)}" />`,
      ),
    ].join("\n");

    for (const lang of langKeys) {
      const loc = buildUrl(route, lang);
      xml += `  <url>\n`;
      xml += `    <loc>${loc}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += `${alternatesXml}\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
};
