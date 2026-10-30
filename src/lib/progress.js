import { lessons } from './lessons.js';

export function validateProgress(value) {
  const fail = () => { throw new Error('Invalid progress data. Export a fresh save from BashQuest and try again.'); };
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail();
  for (const key of ['xp', 'streak']) if (value[key] !== undefined && (!Number.isSafeInteger(value[key]) || value[key] < 0)) fail();
  if (typeof value.xp !== 'number' || !Array.isArray(value.completedLessons)) fail();
  const ids = new Set(lessons.map(l => l.id));
  ids.add(9999);
  if (!value.completedLessons.every(id => ids.has(id))) fail();
  if (value.activeLessonId !== undefined && !ids.has(value.activeLessonId)) fail();
  if (value.activeView !== undefined && !['dashboard','sandbox','tools','about'].includes(value.activeView)) fail();
  if (value.installedPackages !== undefined && (!Array.isArray(value.installedPackages) || !value.installedPackages.every(p=>typeof p === 'string' && p.length < 100))) fail();
  if (value.lastCompletedDate != null && (typeof value.lastCompletedDate !== 'string' || !Number.isFinite(Date.parse(value.lastCompletedDate)))) fail();
  for (const key of ['bossRushStartTime','fastestBossRushTime']) if (value[key] != null && (!Number.isSafeInteger(value[key]) || value[key] < 0)) fail();
  if (value.bossRushMode !== undefined && typeof value.bossRushMode !== 'boolean') fail();
  const checkTree = (root) => {
    if (root == null) return;
    if (root.name !== '/' || root.type !== 'dir') fail();
    const queue = [[root,0]]; let count = 0;
    while (queue.length) {
      const [node,depth] = queue.pop();
      if (++count > 20000 || depth > 100 || !node || typeof node.name !== 'string' || !['file','dir','link'].includes(node.type)) fail();
      if (node.type === 'dir') {
        if (!Array.isArray(node.children)) fail();
        queue.push(...node.children.map(child=>[child,depth+1]));
      } else if (node.type === 'file' && typeof node.content !== 'string') fail();
      else if (node.type === 'link' && typeof node.target !== 'string') fail();
    }
  };
  checkTree(value.fsTree);
  if (value.lessonStartTrees != null) {
    if (typeof value.lessonStartTrees !== 'object' || Array.isArray(value.lessonStartTrees)) fail();
    Object.values(value.lessonStartTrees).forEach(checkTree);
  }
  // Retain supported fields only; imported data must not change arbitrary runtime state.
  const keys = ['xp','completedLessons','activeLessonId','activeView','streak','lastCompletedDate','fsTree','lessonStartTrees','installedPackages','bossRushMode','bossRushStartTime','fastestBossRushTime','fastestBossRushStr'];
  const clean = Object.fromEntries(keys.filter(key=>Object.hasOwn(value,key)).map(key=>[key,value[key]]));
  clean.completedLessons = [...new Set(value.completedLessons)];
  if (value.customQuest && typeof value.customQuest === 'object' && !Array.isArray(value.customQuest)) clean.customQuest = value.customQuest;
  return clean;
}

const memory = new Map();
const unsaved = new Set();
let warned = false;
function warnStorage() {
  if (!warned && typeof window !== 'undefined') {
    warned = true;
    // Deliver after the application has mounted its listener.
    setTimeout(() => window.dispatchEvent(new CustomEvent('app:storage-unavailable')), 0);
  }
}
export const safeStorage = {
  getItem(key) { try { return unsaved.has(key) ? (memory.get(key) ?? null) : localStorage.getItem(key); } catch { warnStorage(); return memory.get(key) ?? null; } },
  setItem(key,value) { memory.set(key,value); try { localStorage.setItem(key,value); unsaved.delete(key); } catch { unsaved.add(key); warnStorage(); } },
  removeItem(key) { memory.delete(key); unsaved.delete(key); try { localStorage.removeItem(key); } catch { warnStorage(); } }
};
