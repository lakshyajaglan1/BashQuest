import ts from 'typescript';
import { readFileSync } from 'node:fs';
const source = readFileSync(new URL('../src/scripts/appController.ts', import.meta.url),'utf8').replace(/from "\.\.\/lib\/([^".]+)"/g, (_, name)=>`from "${new URL(`../src/lib/${name}.js`,import.meta.url).href}"`);
const compiled=ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022}}).outputText;
const { AppStateManager }=await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
export function createApp() {
  const data=new Map();
  globalThis.localStorage={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v),removeItem:k=>data.delete(k)};
  globalThis.window=new EventTarget();
  window.location={search:'',pathname:'/',reload(){}};
  globalThis.document={getElementById:()=>null,querySelector:()=>null};
  return new AppStateManager();
}
