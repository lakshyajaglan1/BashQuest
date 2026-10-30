import test from 'node:test';
import assert from 'node:assert/strict';
import { FileSystem, ShellSession } from '../src/lib/linuxEngine.js';
import { lessons, modules, parseCommandLine } from '../src/lib/lessons.js';
import { chapters } from '../src/lib/learning.js';
const shell = () => new ShellSession(new FileSystem());
test('curriculum IDs, objectives, and handbook coverage are consistent', () => {
  assert.equal(new Set(lessons.map(l=>l.id)).size, lessons.length);
  for (const module of modules) assert.ok(chapters.some(c=>c.id===module.id));
  for (const lesson of lessons) {
    assert.ok(modules.some(m=>m.id===lesson.moduleId));
    assert.ok(lesson.description && lesson.instructions && lesson.hints.length);
    assert.equal(new Set(lesson.objectives.map(o=>o.id)).size, lesson.objectives.length);
    const session = shell();
    const result = lesson.verify(session.fs,session,[]);
    assert.deepEqual(result.checks.map(c=>c.id).sort(), lesson.objectives.map(o=>o.id).sort(), lesson.title);
  }
});
test('quest one requires command invocations, not words echoed as text', () => {
  const session = shell(); const lesson=lessons.find(l=>l.id===1);
  assert.equal(lesson.verify(session.fs,session,['echo whoami pwd']).success,false);
  assert.equal(lesson.verify(session.fs,session,['whoami','pwd']).success,true);
});
test('quest parser respects quoted pipes and recognizes chained commands', () => {
  assert.deepEqual(parseCommandLine('echo "a | b" | grep a').map(c=>c.command),['echo','grep']);
  assert.deepEqual(parseCommandLine('whoami && pwd; ls').map(c=>c.command),['whoami','pwd','ls']);
});
test('quoted operators remain literal data', () => {
  const session=shell();
  assert.equal(session.execute('echo "a > b"').stdout,'a > b');
  assert.equal(session.fs.getNodeByPath(session.currentPath,'b"'),null);
  assert.equal(session.execute('echo "it\'s Linux"').stdout,"it's Linux");
  assert.equal(session.execute("echo '$?' ").stdout,'$?');
});
test('redirection supports quoted filenames and preserves contents', () => {
  const session=shell();
  assert.equal(session.execute('echo first > "my notes.txt"').stderr,'');
  session.execute('echo second >> "my notes.txt"');
  assert.match(session.execute('cat "my notes.txt"').stdout,/first\nsecond/);
});
test('grep no-match has status one and conditional chains use it', () => {
  const session=shell();
  session.execute('echo alpha > sample.txt');
  assert.equal(session.execute('grep omega sample.txt').exitCode,1);
  assert.equal(session.execute('echo $?').stdout,'1');
  assert.equal(session.execute('grep omega sample.txt || echo absent').stdout,'absent');
});
test('redirecting an error does not turn failure into success', () => {
  const session=shell();
  const result=session.execute('cat missing-file 2>/dev/null && echo wrong');
  assert.equal(result.stdout,'');
  assert.equal(session.lastExitCode,1);
});
test('basic file workflows and permissions', () => {
  const session=shell();
  for(const cmd of ['mkdir -p work/notes','echo Linux > work/notes/a.txt','cp work/notes/a.txt work/notes/b.txt','mv work/notes/b.txt work/notes/c.txt','chmod 600 work/notes/c.txt']) assert.equal(session.execute(cmd).stderr,'',cmd);
  assert.equal(session.fs.getNodeByPath(session.currentPath,'work/notes/c.txt').permissions,'600');
  assert.match(session.execute('cat work/notes/c.txt').stdout,/Linux/);
  assert.equal(session.execute('rm work').exitCode,1);
});
test('checksum failures keep a failing exit status', () => {
  const session=shell();session.execute('echo actual > data.txt');
  session.execute(`echo "${'0'.repeat(64)}  data.txt" > checksums`);
  assert.equal(session.execute('sha256sum -c checksums').exitCode,1);
});
test('invalid expressions and oversized expansions do not crash the terminal', () => {
  const session=shell();
  assert.notEqual(session.execute("awk -F '[' '{print $1}' notes.txt").exitCode,0);
  assert.notEqual(session.execute('touch item{1..1000000000}').exitCode,0);
  assert.equal(session.execute('pwd').stdout,'/home/learner');
});
test('moving a directory into itself cannot corrupt the tree', () => {
  const session=shell();session.execute('mkdir -p work/sub');
  assert.notEqual(session.execute('mv work work/sub').exitCode,0);
  assert.ok(session.fs.getNodeByPath(session.currentPath,'work/sub'));
  assert.doesNotThrow(()=>JSON.stringify(session.fs.tree));
});
