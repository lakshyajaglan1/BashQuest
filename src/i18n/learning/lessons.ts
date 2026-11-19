import { getLocalizedLesson } from '../lessons/index';
import type { SupportedLanguage } from '../languages';
import { questTitles } from './questTitles.js';

/** Keep the reference and practice titles localized without changing stable quest URLs. */
export function getLearningLesson(id: number, lang: SupportedLanguage) {
  const lesson = getLocalizedLesson(id, lang);
  if (!lesson) throw new Error(`Unknown learning quest: ${id}`);
  return { ...lesson, title: questTitles[lang]?.[id] ?? lesson.title };
}
