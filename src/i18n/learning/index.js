import { chapters as baseChapters, realLabs as baseLabs } from '../../lib/learning.js';
import * as en from './en.js';
import * as es from './es.js';
import * as ja from './ja.js';
import * as fr from './fr.js';
import * as de from './de.js';
import * as pt from './pt.js';
import * as ko from './ko.js';
import * as it from './it.js';

const translations = { es, ja, fr, de, pt, ko, it };
const stageNames = ['Foundation', 'Administration', 'Automation', 'Operations'];

/** @param {import('../languages').SupportedLanguage} lang */
export function getLearningContent(lang = 'en') {
  if (lang === 'en') return { ui: en.ui, chapters: baseChapters, realLabs: baseLabs };
  const translation = translations[lang];
  return {
    ui: translation.ui,
    chapters: baseChapters.map(chapter => {
      const [title, summary, concepts, explain, pitfall, question, options, rationale] = translation.chapters[chapter.id];
      return { ...chapter, title, summary, concepts, explain, pitfall, question, options, rationale,
        stage: translation.stages[stageNames.indexOf(chapter.stage)] };
    }),
    realLabs: baseLabs.map(lab => {
      const [title, level, goal, steps, evidence, recovery] = translation.labs[lab.id];
      return { ...lab, title, level, goal, steps, evidence, recovery };
    }),
  };
}
