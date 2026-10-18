import { languages, defaultLang, type SupportedLanguage } from "./languages";
import { ui } from "./ui";

export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as SupportedLanguage;
  return defaultLang;
}

export function useTranslations(lang: SupportedLanguage) {
  return function t(key: keyof (typeof ui)[typeof defaultLang] | string): string {
    const langDict = ui[lang] as Record<string, string> | undefined;
    const defaultDict = ui[defaultLang] as Record<string, string> | undefined;
    const val = langDict?.[key];
    if (val !== undefined && val !== "") return val;
    const defaultVal = defaultDict?.[key];
    if (defaultVal !== undefined && defaultVal !== "") return defaultVal;
    return key;
  };
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split("/").filter(Boolean);
  
  if (parts.length > 0 && parts[0] in languages) {
    const remaining = parts.slice(1).join("/");
    return remaining ? `/${remaining}` : "/";
  }
  
  return pathname || "/";
}

export function useTranslatedPath(lang: SupportedLanguage) {
  return function translatePath(path: string, targetLang: SupportedLanguage = lang): string {
    // Normalize path to always start with /
    let cleanPath = path.startsWith("/") ? path : `/${path}`;
    
    // Strip existing language prefix if present
    const parts = cleanPath.split("/").filter(Boolean);
    if (parts.length > 0 && parts[0] in languages) {
      cleanPath = "/" + parts.slice(1).join("/");
    }
    
    if (cleanPath === "//") cleanPath = "/";

    if (targetLang === defaultLang) {
      return cleanPath;
    }
    
    return cleanPath === "/" ? `/${targetLang}` : `/${targetLang}${cleanPath}`;
  };
}

export function getAlternateLinks(currentUrl: URL, siteUrl: string = "https://bashquest.com") {
  const cleanRoute = getRouteFromUrl(currentUrl);
  const base = siteUrl.replace(/\/$/, "");

  const links: Array<{ hreflang: string; href: string }> = [];

  // x-default points to default language (English)
  const defaultPath = cleanRoute === "/" ? "" : cleanRoute;
  links.push({
    hreflang: "x-default",
    href: `${base}${defaultPath || "/"}`,
  });

  for (const lang of Object.keys(languages) as SupportedLanguage[]) {
    if (lang === defaultLang) {
      links.push({
        hreflang: lang,
        href: `${base}${defaultPath || "/"}`,
      });
    } else {
      const localizedPath = cleanRoute === "/" ? `/${lang}` : `/${lang}${cleanRoute}`;
      links.push({
        hreflang: lang,
        href: `${base}${localizedPath}`,
      });
    }
  }

  return links;
}
