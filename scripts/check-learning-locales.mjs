import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { chapters } from '../src/lib/learning.js';
import { getLearningContent } from '../src/i18n/learning/index.js';

// Run against the production build: the language choice must survive every
// handbook entry point, chapter link, practice launch, and language-menu link.
const locales = ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'];
const routes = ['/learn/', ...chapters.map(chapter => `/learn/${chapter.id}/`)];
const prefix = lang => lang === 'en' ? '' : `/${lang}`;
let checked = 0;

const decode = text => text.replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&#x27;', "'").replaceAll('&amp;', '&');

for (const lang of locales) {
  const content = getLearningContent(lang);
  for (const route of routes) {
    const path = `${prefix(lang)}${route}`;
    const html = await readFile(`dist${path}index.html`, 'utf8');
    assert.match(html, new RegExp(`<html[^>]*lang="${lang}"`), `${path}: document language`);
    assert.match(html, new RegExp(`<main[^>]*lang="${lang}"`), `${path}: handbook language`);
    const decoded = decode(html);
    const chapter = content.chapters.find(chapter => route === `/learn/${chapter.id}/`);
    const visibleText = chapter
      ? [chapter.title, chapter.summary, ...chapter.concepts, chapter.explain, chapter.pitfall, chapter.question, ...chapter.options, chapter.rationale, content.ui.checkAnswer, content.ui.correct, content.ui.incorrect, chapter.example]
      : [content.ui.hero, content.ui.heroEnd, content.ui.search, content.ui.retrySearch, ...content.chapters.flatMap(chapter => [chapter.title, chapter.summary]), ...content.realLabs.flatMap(lab => [lab.title, lab.goal, ...lab.steps, lab.evidence, lab.recovery, lab.commands])];
    for (const text of visibleText) assert.ok(decoded.includes(text), `${path}: missing translated content: ${text.slice(0, 80)}`);
    for (const locale of locales) {
      assert.match(html, new RegExp(`<link[^>]*hreflang="${locale}"`), `${path}: alternate ${locale}`);
    }

    for (const [anchor] of html.matchAll(/<a\b[^>]*>/g)) {
      const href = anchor.match(/\bhref="([^"]+)"/)?.[1];
      if (!href?.startsWith('/')) continue;
      if (anchor.includes('data-language-path=')) {
        const targetLang = anchor.match(/\bhreflang="([^"]+)"/)?.[1];
        const expected = `${prefix(targetLang)}${route}`.replace(/\/$/, '');
        assert.equal(href.replace(/\/$/, ''), expected, `${path}: language picker must retain chapter`);
      } else if (lang !== 'en') {
        assert.ok(href === prefix(lang) || href.startsWith(`${prefix(lang)}/`) || href.startsWith(`${prefix(lang)}?`), `${path}: link loses language: ${href}`);
      }
    }
    checked++;
  }

  const home = await readFile(`dist${prefix(lang)}/index.html`, 'utf8');
  const learnLinks = [...home.matchAll(/<a\b[^>]*href="([^"]*\/learn\/[^"?]*)"[^>]*>/g)];
  assert.ok(learnLinks.length >= 3, `${lang}: navigation, dashboard, and lesson handbook links`);
  for (const [, href] of learnLinks) {
    assert.ok(href.startsWith(`${prefix(lang)}/learn/`), `${lang}: homepage entry loses language: ${href}`);
  }
}

console.log(`Checked ${checked} Learn pages and all 8 homepage entry points: language and translated content are preserved.`);
