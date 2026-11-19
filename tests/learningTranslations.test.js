import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { getLearningContent } from '../src/i18n/learning/index.js';
import { questTitles } from '../src/i18n/learning/questTitles.js';
import { lessons } from '../src/lib/lessons.js';

const english = getLearningContent('en');
const languages = ['es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'];

for (const lang of languages) {
  test(`${lang}: every Learn chapter and lab is translated without changing executable examples or quiz answers`, () => {
    const content = getLearningContent(lang);
    assert.deepEqual(Object.keys(content.ui).sort(), Object.keys(english.ui).sort());
    for (const [key, value] of Object.entries(content.ui)) {
      assert.ok(typeof value === 'string' && value.trim(), `${lang}: missing UI ${key}`);
      // ‘Correct’ is also the French word.
      if (!(lang === 'fr' && key === 'correct')) assert.notEqual(value, english.ui[key], `${lang}: English UI ${key}`);
    }
    assert.ok(content.ui.chapter.includes('{number}') && content.ui.chapter.includes('{total}'));
    assert.deepEqual(content.chapters.map(c => c.id), english.chapters.map(c => c.id));
    content.chapters.forEach((chapter, index) => {
      const base = english.chapters[index];
      assert.equal(chapter.example, base.example);
      assert.equal(chapter.answer, base.answer);
      assert.equal(chapter.concepts.length, base.concepts.length);
      assert.equal(chapter.options.length, base.options.length);
      assert.ok(chapter.options[chapter.answer]);
      assert.equal(new Set(chapter.options).size, chapter.options.length);
      for (const key of ['title', 'summary', 'stage', 'explain', 'pitfall', 'question', 'rationale']) {
        assert.ok(typeof chapter[key] === 'string' && chapter[key].trim(), `${chapter.id}: missing ${key}`);
        // Administration is shared by French, German, and English.
        if (!(key === 'stage' && ['fr', 'de'].includes(lang) && base.stage === 'Administration')) {
          assert.notEqual(chapter[key], base[key], `${chapter.id}: English ${key}`);
        }
      }
      chapter.concepts.forEach((concept, i) => {
        assert.ok(concept.trim());
        assert.notEqual(concept, base.concepts[i]);
      });
    });
    assert.deepEqual(content.realLabs.map(l => l.id), english.realLabs.map(l => l.id));
    content.realLabs.forEach((lab, index) => {
      const base = english.realLabs[index];
      assert.equal(lab.commands, base.commands);
      assert.equal(lab.steps.length, base.steps.length);
      for (const key of ['title', 'level', 'goal', 'evidence', 'recovery']) {
        assert.ok(lab[key].trim());
        assert.notEqual(lab[key], base[key], `${lab.id}: English ${key}`);
      }
      lab.steps.forEach((step, i) => {
        assert.ok(step.trim());
        assert.notEqual(step, base.steps[i]);
      });
    });
  });

  test(`${lang}: all 150 Learn quest titles have localized text`, async () => {
    const source = await readFile(new URL(`../src/i18n/lessons/translations_${lang}.ts`, import.meta.url), 'utf8');
    const original = JSON.parse(source.slice(source.indexOf('= {') + 2).replace(/;\s*$/, ''));
    for (const lesson of lessons) {
      const title = questTitles[lang]?.[lesson.id] ?? original[lesson.id]?.title;
      assert.ok(title?.trim(), `Missing title for ${lesson.id}`);
      assert.notEqual(title, lesson.title, `English title for ${lesson.id}`);
    }
  });
}
