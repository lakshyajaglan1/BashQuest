import test from 'node:test';
import assert from 'node:assert/strict';
import { createApp } from './fixtures.js';
import { lessons } from '../src/lib/lessons.js';
import { validateProgress, safeStorage } from '../src/lib/progress.js';
test('every quest starts incomplete with its application fixtures', () => {
  const app=createApp();
  for (const lesson of lessons) {
    app.state.fsTree=null; app.state.completedLessons=[]; app.state.activeLessonId=lesson.id; app.resetFilesystem();
    const {fs,session}=window.appState;
    assert.equal(lesson.verify(fs,session,[]).success,false, `${lesson.id}: ${lesson.title}`);
  }
});
test('environment and group cleanup quests require work and can be completed', () => {
  const app=createApp();
  for(const [id,commands] of [[140,['unset SECRET_KEY','unalias la']],[72,['sudo groupdel developers']],[47,['tar -czvf logs.tar.gz logs']]]) {
    app.state.fsTree=null;app.state.activeLessonId=id;app.resetFilesystem();
    const {fs,session}=window.appState;
    for(const command of commands) assert.equal(session.execute(command).stderr,'',command);
    assert.equal(lessons.find(l=>l.id===id).verify(fs,session,commands).success,true,String(id));
  }
});
test('duplicate completion events cannot award XP twice or choose the reward', () => {
  const app=createApp();
  for(let i=0;i<2;i++)window.dispatchEvent(new CustomEvent('app:complete-lesson',{detail:{lessonId:1,xp:999999}}));
  assert.deepEqual(app.state.completedLessons,[1]); assert.equal(app.state.xp,100);
});
test('save data validates before changing state', () => {
  const app=createApp();
  const clean=validateProgress(JSON.parse(JSON.stringify(app.state)));
  assert.deepEqual(clean.completedLessons,[]);
  for(const invalid of [{xp:2,completedLessons:'bad'},{xp:-5,completedLessons:[]},{xp:4,completedLessons:[900000]},{xp:4,completedLessons:[],fsTree:{type:'dir',name:'/',children:'broken'}}])assert.throws(()=>validateProgress(invalid));
  assert.equal(Object.hasOwn(validateProgress({...app.state,unexpected:'discard me'}),'unexpected'),false);
});
test('storage failures preserve a temporary in-memory save', () => {
  Object.defineProperty(globalThis,'localStorage',{configurable:true,get(){throw new Error('Access denied')}});
  safeStorage.setItem('test','saved'); assert.equal(safeStorage.getItem('test'),'saved'); safeStorage.removeItem('test'); assert.equal(safeStorage.getItem('test'),null);
  delete globalThis.localStorage;
});
