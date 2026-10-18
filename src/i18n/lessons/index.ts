import { lessons, modules } from "../../lib/lessons.js";
export { lessons, modules };
import type { SupportedLanguage } from "../languages";
import type { LessonTranslation, ModuleTranslation } from "./types.ts";
import { moduleTranslations } from "./modules.ts";
import { levelNames, badgeTranslations } from "./levels.ts";

import { translations_es } from "./translations_es.ts";
import { translations_fr } from "./translations_fr.ts";
import { translations_de } from "./translations_de.ts";
import { translations_ja } from "./translations_ja.ts";
import { translations_pt } from "./translations_pt.ts";
import { translations_ko } from "./translations_ko.ts";
import { translations_it } from "./translations_it.ts";

const allTranslations: Record<SupportedLanguage, Record<number, LessonTranslation> | null> = {
  en: null,
  es: translations_es,
  fr: translations_fr,
  de: translations_de,
  ja: translations_ja,
  pt: translations_pt,
  ko: translations_ko,
  it: translations_it,
};

export function getLocalizedModules(lang: SupportedLanguage = "en"): ModuleTranslation[] {
  if (moduleTranslations[lang]) {
    return moduleTranslations[lang];
  }
  return moduleTranslations.en || modules;
}

export function getLocalizedBadge(badge: string, lang: SupportedLanguage = "en"): string {
  if (!badge) return "";
  if (badgeTranslations[badge] && badgeTranslations[badge][lang]) {
    return badgeTranslations[badge][lang];
  }
  return badge;
}

export function getLevelName(level: number, lang: SupportedLanguage = "en"): string {
  const names = levelNames[lang] || levelNames.en;
  const clampedIndex = Math.min(Math.max(0, level - 1), names.length - 1);
  const baseName = names[clampedIndex];
  if (level > 10) {
    return `${baseName} (Lv. ${level})`;
  }
  return baseName;
}

export function getLocalizedLesson(id: number, lang: SupportedLanguage = "en") {
  const baseLesson = lessons.find((l: any) => l.id === id);
  if (!baseLesson) return null;

  if (lang === "en" || !allTranslations[lang]) {
    return { ...baseLesson };
  }

  const langDict = allTranslations[lang];
  const translation = langDict ? langDict[id] : null;
  if (!translation) {
    return { ...baseLesson };
  }

  const localizedBadge = translation.badge || getLocalizedBadge(baseLesson.badge, lang) || baseLesson.badge;

  return {
    ...baseLesson,
    title: translation.title || baseLesson.title,
    description: translation.description || baseLesson.description,
    instructions: translation.instructions || baseLesson.instructions,
    badge: localizedBadge,
    commandHelp: baseLesson.commandHelp
      ? baseLesson.commandHelp.map((baseItem: any, idx: number) => {
          const transItem = translation.commandHelp?.[idx];
          return {
            cmd: baseItem.cmd,
            desc: transItem?.desc || baseItem.desc,
          };
        })
      : baseLesson.commandHelp,
    objectives: baseLesson.objectives
      ? baseLesson.objectives.map((baseObj: any, idx: number) => {
          let transObj = translation.objectives?.find((o: any) => o.id === baseObj.id);
          if (!transObj && translation.objectives && translation.objectives.length === baseLesson.objectives.length) {
            transObj = translation.objectives[idx];
          }
          return {
            id: baseObj.id,
            text: transObj?.text || baseObj.text,
          };
        })
      : baseLesson.objectives,
    hints: translation.hints && translation.hints.length > 0
      ? translation.hints
      : baseLesson.hints,
  };
}

export function getLocalizedLessons(lang: SupportedLanguage = "en") {
  if (lang === "en" || !allTranslations[lang]) {
    return lessons;
  }
  return lessons.map((l: any) => getLocalizedLesson(l.id, lang));
}

export * from "./types.ts";
export * from "./modules.ts";
export * from "./levels.ts";
