import test from 'node:test';
import assert from 'node:assert/strict';
import { getLanguageHref } from '../src/lib/languageNavigation.js';

test('switching languages preserves query parameters and anchors', () => {
  assert.equal(getLanguageHref('https://bashquest.com/?view=sandbox&quest=2#main-content', '/es'), '/es?view=sandbox&quest=2#main-content');
  assert.equal(getLanguageHref('https://bashquest.com/ja/faq?topic=progress#saving', '/faq'), '/faq?topic=progress#saving');
});

test('client-side workspace selection takes precedence over stale URL state in every language', () => {
  for (const lang of ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it']) {
    const path = lang === 'en' ? '/' : `/${lang}`;
    for (const source of ['/', `/${lang}`, `/${lang}/`]) {
      assert.equal(getLanguageHref(`https://bashquest.com${source}?view=dashboard&quest=1`, path, { activeView: 'sandbox', activeLessonId: 2 }), `${path}?view=sandbox&quest=2`);
    }
  }
});

test('switching from a quest to tools or dashboard cannot reopen a stale custom quest', () => {
  for (const view of ['tools', 'dashboard', 'about']) {
    assert.equal(getLanguageHref('https://bashquest.com/es?custom=abc&quest=9999&view=sandbox', '/fr', { activeView: view, activeLessonId: 9999 }), `/fr?view=${view}`);
  }
});

test('an active shared custom quest survives a language change', () => {
  assert.equal(getLanguageHref('https://bashquest.com/?custom=abc%2Bdef%3D', '/ko', { activeView: 'sandbox', activeLessonId: 9999 }), '/ko?custom=abc%2Bdef%3D&view=sandbox&quest=9999');
});

test('static quest and information pages ignore application view state', () => {
  const state = { activeView: 'sandbox', activeLessonId: 2 };
  assert.equal(getLanguageHref('https://bashquest.com/es/quests/1-who-am-i?ref=learn#objectives', '/ja/quests/1-who-am-i', state), '/ja/quests/1-who-am-i?ref=learn#objectives');
  assert.equal(getLanguageHref('https://bashquest.com/about', '/de/about', state), '/de/about');
  assert.equal(getLanguageHref('https://bashquest.com/es/learn/basics/?ref=quest#practice-title', '/it/learn/basics', state), '/it/learn/basics?ref=quest#practice-title');
});
