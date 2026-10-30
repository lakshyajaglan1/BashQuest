import { readdir, readFile, access } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';

// Run after the production build. Check all local HTML links and asset references,
// including translated quest links that can silently diverge from generated slugs.
const root = resolve('dist');
async function* files(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* files(path);
    else if (entry.name.endsWith('.html')) yield path;
  }
}
const exists = async path => access(path).then(() => true, () => false);
const missing = new Map();
let pages = 0;
for await (const page of files(root)) {
  pages++;
  const html = await readFile(page, 'utf8');
  for (const [, href] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href)) continue;
    const path = decodeURIComponent(href.split(/[?#]/)[0]);
    if (!path) continue;
    const target = path.startsWith('/') ? join(root, path) : resolve(dirname(page), path);
    if (!(await exists(target)) && !(await exists(join(target, 'index.html'))) && !(await exists(target.replace(/\/$/, '') + '.html'))) {
      if (!missing.has(href)) missing.set(href, page);
    }
  }
}
if (missing.size) {
  for (const [href, page] of missing) console.error(`${href} — ${page}`);
  throw new Error(`${missing.size} broken local links or assets`);
}
console.log(`Checked ${pages} HTML files: no broken local links or assets.`);
