import { FileSystem, ShellSession } from './src/lib/linuxEngine.js';
const fs = new FileSystem();
const session = new ShellSession(fs);
console.log(session.execute('which ls'));
console.log(session.execute('which grep'));
console.log('history:', session.history);
