// Browser-based Linux Filesystem and Shell Emulator

export class FileSystem {
  constructor(initialTree = null) {
    this.tree = initialTree || this.getDefaultTree();
  }

  getDefaultTree() {
    return {
      name: '/',
      type: 'dir',
      permissions: '755',
      owner: 'root',
      group: 'root',
      children: [
        {
          name: 'home',
          type: 'dir',
          permissions: '755',
          owner: 'root',
          group: 'root',
          children: [
            {
              name: 'learner',
              type: 'dir',
              permissions: '755',
              owner: 'learner',
              group: 'learner',
              children: [
                {
                  name: 'downloads',
                  type: 'dir',
                  permissions: '755',
                  owner: 'learner',
                  group: 'learner',
                  children: []
                },
                {
                  name: 'documents',
                  type: 'dir',
                  permissions: '755',
                  owner: 'learner',
                  group: 'learner',
                  children: [
                    {
                      name: 'notes.txt',
                      type: 'file',
                      content: 'Welcome to BashQuest!\nPractice your Linux skills here.\n',
                      permissions: '644',
                      owner: 'learner',
                      group: 'learner'
                    }
                  ]
                },
                {
                  name: 'names.txt',
                  type: 'file',
                  content: 'Alice\nBob\nAlice\nCharlie\nBob\nDavid\nCharlie\n',
                  permissions: '644',
                  owner: 'learner',
                  group: 'learner'
                },
                {
                  name: 'logs.txt',
                  type: 'file',
                  content: '[INFO] Service started.\n[WARNING] High memory usage.\n[ERROR] Database connection failed.\n[INFO] User logged in.\n[ERROR] Failed to start database service.\n',
                  permissions: '644',
                  owner: 'learner',
                  group: 'learner'
                },
                {
                  name: 'log_1.txt',
                  type: 'file',
                  content: 'Log entry 1: System initiated.\n',
                  permissions: '644',
                  owner: 'learner',
                  group: 'learner'
                },
                {
                  name: 'log_2.txt',
                  type: 'file',
                  content: 'Log entry 2: System update started.\n',
                  permissions: '644',
                  owner: 'learner',
                  group: 'learner'
                },
                {
                  name: 'log_3.txt',
                  type: 'file',
                  content: 'Log entry 3: Database sync complete.\n',
                  permissions: '644',
                  owner: 'learner',
                  group: 'learner'
                }
              ]
            }
          ]
        },
        {
          name: 'var',
          type: 'dir',
          permissions: '755',
          owner: 'root',
          group: 'root',
          children: [
            {
              name: 'log',
              type: 'dir',
              permissions: '755',
              owner: 'root',
              group: 'root',
              children: [
                {
                  name: 'syslog',
                  type: 'file',
                  content: 'Jul  3 10:00:01 kernel: Booting Linux...\nJul  3 10:02:15 systemd[1]: Started System Logging Service.\nJul  3 10:05:32 sshd[1245]: Accepted publickey for learner\nJul  3 10:12:00 systemd[1]: Error: Failed to start database service.\nJul  3 10:15:40 kernel: CPU temperature high: 72C\n',
                  permissions: '644',
                  owner: 'root',
                  group: 'root'
                }
              ]
            }
          ]
        },
        {
          name: 'etc',
          type: 'dir',
          permissions: '755',
          owner: 'root',
          group: 'root',
          children: [
            {
              name: 'hosts',
              type: 'file',
              content: '127.0.0.1 localhost\n192.168.1.1 gateway\n',
              permissions: '644',
              owner: 'root',
              group: 'root'
            },
            {
              name: 'shadow',
              type: 'file',
              content: 'root:$6$8zLx92xp$H9s2:18200:0:99999:7:::\nlearner:$6$1bYtM2op$P4w1:18200:0:99999:7:::\n',
              permissions: '000',
              owner: 'root',
              group: 'shadow'
            }
          ]
        },
        {
          name: 'tmp',
          type: 'dir',
          permissions: '777',
          owner: 'root',
          group: 'root',
          children: []
        }
      ]
    };
  }

  // Clone the filesystem tree for safe state management
  clone() {
    const deepClone = (node) => {
      const cloned = { ...node };
      if (node.children) {
        cloned.children = node.children.map(child => deepClone(child));
      }
      return cloned;
    };
    return new FileSystem(deepClone(this.tree));
  }

  // Helper to split paths and remove empty segments
  parsePath(pathStr) {
    return pathStr.split('/').filter(p => p !== '');
  }

  // Resolves a target path relative to a current directory, outputting an absolute path array
  resolvePathArray(currentPathStr, targetPathStr) {
    if (!targetPathStr) {
      return this.parsePath(currentPathStr);
    }

    let absoluteSegments = [];

    // Check if target is absolute or points to home
    if (targetPathStr.startsWith('~')) {
      absoluteSegments = ['home', 'learner'];
      const remainder = targetPathStr.substring(1);
      if (remainder.startsWith('/')) {
        absoluteSegments = absoluteSegments.concat(this.parsePath(remainder));
      }
    } else if (targetPathStr.startsWith('/')) {
      absoluteSegments = this.parsePath(targetPathStr);
    } else {
      absoluteSegments = this.parsePath(currentPathStr).concat(this.parsePath(targetPathStr));
    }

    // Resolve . and ..
    const resolved = [];
    for (const segment of absoluteSegments) {
      if (segment === '.') {
        continue;
      } else if (segment === '..') {
        resolved.pop();
      } else {
        resolved.push(segment);
      }
    }

    return resolved;
  }

  resolvePathStr(currentPathStr, targetPathStr) {
    const array = this.resolvePathArray(currentPathStr, targetPathStr);
    return '/' + array.join('/');
  }

  // Traverse the tree to find a node by its absolute path segments
  getNodeByPathSegments(segments) {
    let current = this.tree;
    for (const segment of segments) {
      if (current.type !== 'dir' || !current.children) {
        return null;
      }
      const next = current.children.find(child => child.name === segment);
      if (!next) {
        return null;
      }
      current = next;
    }
    return current;
  }

  getNodeByPath(currentPathStr, targetPathStr) {
    const segments = this.resolvePathArray(currentPathStr, targetPathStr);
    return this.getNodeByPathSegments(segments);
  }

  // Create a file or directory
  createNode(currentPathStr, targetPathStr, type, options = {}) {
    const targetSegments = this.resolvePathArray(currentPathStr, targetPathStr);
    if (targetSegments.length === 0) {
      return { success: false, error: 'Cannot create root directory' };
    }

    const nodeName = targetSegments[targetSegments.length - 1];
    const parentSegments = targetSegments.slice(0, -1);
    
    // Find parent directory
    const parentNode = this.getNodeByPathSegments(parentSegments);
    if (!parentNode) {
      if (options.createParents) {
        // Equivalent to mkdir -p, create intermediate dirs
        let currentSegs = [];
        let cur = this.tree;
        for (const seg of parentSegments) {
          currentSegs.push(seg);
          let child = cur.children.find(c => c.name === seg);
          if (!child) {
            child = {
              name: seg,
              type: 'dir',
              permissions: '755',
              owner: options.owner || 'learner',
              group: options.group || 'learner',
              children: []
            };
            cur.children.push(child);
          } else if (child.type !== 'dir') {
            return { success: false, error: `Path component '${seg}' is not a directory` };
          }
          cur = child;
        }
        return this.createNode(currentPathStr, targetPathStr, type, { ...options, createParents: false });
      }
      return { success: false, error: 'No such file or directory' };
    }

    if (parentNode.type !== 'dir') {
      return { success: false, error: 'Not a directory' };
    }

    // Check if node already exists
    const existing = parentNode.children.find(child => child.name === nodeName);
    if (existing) {
      if (type === 'file') {
        // touch updates access times, we do nothing for mock
        return { success: true, node: existing };
      }
      return { success: false, error: 'File or directory already exists' };
    }

    const newNode = {
      name: nodeName,
      type: type,
      permissions: options.permissions || (type === 'dir' ? '755' : '644'),
      owner: options.owner || 'learner',
      group: options.group || 'learner',
      ...(type === 'dir' ? { children: [] } : { content: options.content || '' })
    };

    parentNode.children.push(newNode);
    return { success: true, node: newNode };
  }

  // Delete a node
  deleteNode(currentPathStr, targetPathStr, recursive = false) {
    const targetSegments = this.resolvePathArray(currentPathStr, targetPathStr);
    if (targetSegments.length === 0) {
      return { success: false, error: 'Cannot delete root directory' };
    }

    const nodeName = targetSegments[targetSegments.length - 1];
    const parentSegments = targetSegments.slice(0, -1);
    
    const parentNode = this.getNodeByPathSegments(parentSegments);
    if (!parentNode || parentNode.type !== 'dir') {
      return { success: false, error: 'No such file or directory' };
    }

    const index = parentNode.children.findIndex(child => child.name === nodeName);
    if (index === -1) {
      return { success: false, error: 'No such file or directory' };
    }

    const nodeToDelete = parentNode.children[index];
    if (nodeToDelete.type === 'dir' && !recursive) {
      return { success: false, error: `${nodeToDelete.name} is a directory (use -r)` };
    }

    parentNode.children.splice(index, 1);
    return { success: true };
  }
}

// Shell Command Interpreter Engine
export class ShellSession {
  constructor(fileSystem, currentPath = '/home/learner', installedPackages = null) {
    this.fs = fileSystem;
    this.currentPath = currentPath;
    this.history = [];
    this.installedPackages = installedPackages 
      ? new Set(installedPackages)
      : new Set([
          'pwd', 'whoami', 'clear', 'help', 'cd', 'ls', 'mkdir', 'touch', 'cat', 'echo', 
          'rm', 'cp', 'mv', 'chmod', 'grep', 'wc', 'uniq', 'sort', 'man', 'apt'
        ]);
  }

  execute(commandLine) {
    const trimmed = commandLine.trim();
    if (!trimmed) {
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    this.history.push(trimmed);

    // Support pipeline split
    const pipelineSegments = [];
    let currentSegment = '';
    let inQuotes = false;
    let quoteChar = '';

    for (let i = 0; i < trimmed.length; i++) {
      const char = trimmed[i];
      if ((char === '"' || char === "'") && (i === 0 || trimmed[i - 1] !== '\\')) {
        if (inQuotes && char === quoteChar) {
          inQuotes = false;
        } else if (!inQuotes) {
          inQuotes = true;
          quoteChar = char;
        }
        currentSegment += char;
      } else if (char === '|' && !inQuotes) {
        pipelineSegments.push(currentSegment.trim());
        currentSegment = '';
      } else {
        currentSegment += char;
      }
    }
    if (currentSegment.trim()) {
      pipelineSegments.push(currentSegment.trim());
    }

    if (pipelineSegments.length === 0) {
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    let stdin = '';
    let lastResult = { stdout: '', stderr: '', currentPath: this.currentPath };

    for (let s = 0; s < pipelineSegments.length; s++) {
      const segment = pipelineSegments[s];
      const isPiped = s < pipelineSegments.length - 1;

      // Support basic redirection on the last command in the pipeline
      let redirectType = null; // 'write' or 'append'
      let redirectFile = null;
      let cmdToRun = segment;

      if (s === pipelineSegments.length - 1) {
        if (segment.includes('>>')) {
          const parts = segment.split('>>');
          cmdToRun = parts[0].trim();
          redirectFile = parts[1].trim();
          redirectType = 'append';
        } else if (segment.includes('>')) {
          const parts = segment.split('>');
          cmdToRun = parts[0].trim();
          redirectFile = parts[1].trim();
          redirectType = 'write';
        }
      }

      // Parse command arguments, respecting quotes
      const args = [];
      let currentArg = '';
      let argInQuotes = false;
      let argQuoteChar = '';

      for (let i = 0; i < cmdToRun.length; i++) {
        const char = cmdToRun[i];
        if ((char === '"' || char === "'") && (i === 0 || cmdToRun[i - 1] !== '\\')) {
          if (argInQuotes && char === argQuoteChar) {
            argInQuotes = false;
          } else if (!argInQuotes) {
            argInQuotes = true;
            argQuoteChar = char;
          }
        } else if (char === ' ' && !argInQuotes) {
          if (currentArg !== '') {
            args.push(currentArg);
            currentArg = '';
          }
        } else {
          // handle escaped quotes
          if (char === '\\' && i + 1 < cmdToRun.length && (cmdToRun[i + 1] === '"' || cmdToRun[i + 1] === "'")) {
            continue;
          }
          currentArg += char;
        }
      }
      if (currentArg !== '') {
        args.push(currentArg);
      }

      if (args.length === 0) {
        lastResult = { stdout: '', stderr: '', currentPath: this.currentPath };
        break;
      }

      let isSudo = false;
      let command = args[0];
      let cmdArgs = args.slice(1);

      if (command === 'sudo') {
        isSudo = true;
        if (cmdArgs.length === 0) {
          lastResult = { stdout: '', stderr: 'usage: sudo command [args]', currentPath: this.currentPath };
          break;
        }
        command = cmdArgs[0];
        cmdArgs = cmdArgs.slice(1);
      }

      if (!this.installedPackages.has(command)) {
        lastResult = { stdout: '', stderr: `bash: ${command}: command not found`, currentPath: this.currentPath };
        break;
      }

      let result = { stdout: '', stderr: '', currentPath: this.currentPath, clear: false };

      switch (command) {
        case 'pwd':
          result.stdout = this.currentPath;
          break;

        case 'whoami':
          result.stdout = isSudo ? 'root' : 'learner';
          break;

        case 'clear':
          result.clear = true;
          break;

        case 'help':
          result.stdout = 'Available commands: cd, ls, pwd, mkdir, touch, cat, echo, rm, cp, mv, chmod, grep, wc, uniq, sort, man, tree, sudo, apt, whoami, clear, help\nRedirections > (overwrite) and >> (append), and pipes | are supported.';
          break;

        case 'cd':
          result = this.runCd(cmdArgs);
          break;

        case 'ls':
          result = this.runLs(cmdArgs, isPiped);
          break;

        case 'mkdir':
          result = this.runMkdir(cmdArgs);
          break;

        case 'touch':
          result = this.runTouch(cmdArgs);
          break;

        case 'cat':
          result = this.runCat(cmdArgs, stdin, isSudo);
          break;

        case 'echo':
          result = this.runEcho(cmdArgs);
          break;

        case 'rm':
          result = this.runRm(cmdArgs);
          break;

        case 'cp':
          result = this.runCp(cmdArgs);
          break;

        case 'mv':
          result = this.runMv(cmdArgs);
          break;

        case 'chmod':
          result = this.runChmod(cmdArgs);
          break;

        case 'grep':
          result = this.runGrep(cmdArgs, stdin, isSudo);
          break;

        case 'wc':
          result = this.runWc(cmdArgs, stdin, isSudo);
          break;

        case 'uniq':
          result = this.runUniq(cmdArgs, stdin, isSudo);
          break;

        case 'sort':
          result = this.runSort(cmdArgs, stdin, isSudo);
          break;

        case 'man':
          result = this.runMan(cmdArgs);
          break;

        case 'tree':
          result = this.runTree(cmdArgs);
          break;

        case 'apt':
          result = this.runApt(cmdArgs, isSudo);
          break;

        default:
          result.stderr = `bash: ${command}: command not found`;
      }

      if (result.stderr) {
        lastResult = result;
        break;
      }

      // Process redirection if on the last command in the pipeline
      if (s === pipelineSegments.length - 1 && redirectFile) {
        const fileResult = this.handleRedirection(redirectFile, result.stdout, redirectType);
        if (!fileResult.success) {
          result.stderr = `bash: ${redirectFile}: ${fileResult.error}`;
        }
        result.stdout = ''; // Redirection consumes stdout
      }

      stdin = result.stdout;
      lastResult = result;
    }

    return lastResult;
  }

  runWc(args, stdin, isSudo) {
    let showLines = false;
    const files = [];

    for (const arg of args) {
      if (arg.startsWith('-')) {
        if (arg.includes('l')) showLines = true;
      } else {
        files.push(arg);
      }
    }

    let content = '';
    if (files.length === 0) {
      content = stdin || '';
    } else {
      const contents = [];
      for (const file of files) {
        const node = this.fs.getNodeByPath(this.currentPath, file);
        if (!node) {
          return { stdout: '', stderr: `wc: ${file}: No such file or directory`, currentPath: this.currentPath };
        }
        if (node.type === 'dir') {
          return { stdout: '', stderr: `wc: ${file}: Is a directory`, currentPath: this.currentPath };
        }
        if (node.permissions === '000' && !isSudo) {
          return { stdout: '', stderr: `wc: ${file}: Permission denied`, currentPath: this.currentPath };
        }
        contents.push(node.content);
      }
      content = contents.join('\n');
    }

    let count = 0;
    for (let i = 0; i < content.length; i++) {
      if (content[i] === '\n') count++;
    }
    // If the content does not end with newline and is not empty, count it as a line
    if (content.length > 0 && !content.endsWith('\n')) {
      count++;
    }

    return {
      stdout: showLines ? String(count) : `      ${count}      ${content.split(/\s+/).filter(Boolean).length}     ${content.length}`,
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runUniq(args, stdin, isSudo) {
    const files = args.filter(arg => !arg.startsWith('-'));
    let content = '';

    if (files.length === 0) {
      content = stdin || '';
    } else {
      const node = this.fs.getNodeByPath(this.currentPath, files[0]);
      if (!node) {
        return { stdout: '', stderr: `uniq: ${files[0]}: No such file or directory`, currentPath: this.currentPath };
      }
      if (node.type === 'dir') {
        return { stdout: '', stderr: `uniq: ${files[0]}: Is a directory`, currentPath: this.currentPath };
      }
      if (node.permissions === '000' && !isSudo) {
        return { stdout: '', stderr: `uniq: ${files[0]}: Permission denied`, currentPath: this.currentPath };
      }
      content = node.content;
    }

    const lines = content.split('\n');
    if (lines.length > 0 && lines[lines.length - 1] === '') {
      lines.pop();
    }

    const resultLines = [];
    let lastLine = null;
    for (const line of lines) {
      if (line !== lastLine) {
        resultLines.push(line);
        lastLine = line;
      }
    }

    return {
      stdout: resultLines.join('\n'),
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runSort(args, stdin, isSudo) {
    const files = args.filter(arg => !arg.startsWith('-'));
    let content = '';

    if (files.length === 0) {
      content = stdin || '';
    } else {
      const node = this.fs.getNodeByPath(this.currentPath, files[0]);
      if (!node) {
        return { stdout: '', stderr: `sort: ${files[0]}: No such file or directory`, currentPath: this.currentPath };
      }
      if (node.type === 'dir') {
        return { stdout: '', stderr: `sort: ${files[0]}: Is a directory`, currentPath: this.currentPath };
      }
      if (node.permissions === '000' && !isSudo) {
        return { stdout: '', stderr: `sort: ${files[0]}: Permission denied`, currentPath: this.currentPath };
      }
      content = node.content;
    }

    const lines = content.split('\n');
    if (lines.length > 0 && lines[lines.length - 1] === '') {
      lines.pop();
    }

    lines.sort();

    return {
      stdout: lines.join('\n'),
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runMan(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'What manual page do you want?', currentPath: this.currentPath };
    }
    const cmd = args[0];
    const manuals = {
      ls: 'LS(1) - List directory contents\n\nSYNOPSIS\n       ls [OPTION]... [FILE]...\n\nDESCRIPTION\n       List information about the FILEs (the current directory by default).\n\n       -a, --all\n              do not ignore entries starting with .\n       -l     use a long listing format',
      uniq: 'UNIQ(1) - Report or omit repeated lines\n\nSYNOPSIS\n       uniq [OPTION]... [INPUT [OUTPUT]]\n\nDESCRIPTION\n       Filter adjacent matching lines from INPUT (or standard input), writing to OUTPUT (or standard output).',
      sort: 'SORT(1) - Sort lines of text files\n\nSYNOPSIS\n       sort [OPTION]... [FILE]...\n\nDESCRIPTION\n       Write sorted concatenation of all FILE(s) to standard output.',
      wc: 'WC(1) - Print newline, word, and byte counts for each file\n\nSYNOPSIS\n       wc [OPTION]... [FILE]...\n\nDESCRIPTION\n       Print newline, word, and byte counts for each FILE, and a total line if more than one FILE is specified.\n\n       -l, --lines\n              print the newline counts',
      grep: 'GREP(1) - Print lines matching a pattern\n\nSYNOPSIS\n       grep [PATTERN] [FILE]...\n\nDESCRIPTION\n       Search for PATTERN in each FILE or standard input.',
      tree: 'TREE(1) - List contents of directories in a tree-like format\n\nSYNOPSIS\n       tree [OPTION]... [DIRECTORY...]\n\nDESCRIPTION\n       Tree is a recursive directory listing program that produces a depth indented listing of files.',
      man: 'MAN(1) - Interface to the system reference manuals\n\nSYNOPSIS\n       man [COMMAND]\n\nDESCRIPTION\n       man formats and displays the on-line manual pages.'
    };
    if (manuals[cmd]) {
      return { stdout: manuals[cmd], stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: `No manual entry for ${cmd}`, currentPath: this.currentPath };
  }

  runTree(args) {
    let showAll = false;
    const paths = [];

    for (const arg of args) {
      if (arg.startsWith('-')) {
        if (arg.includes('a')) showAll = true;
      } else {
        paths.push(arg);
      }
    }

    const target = paths[0] || '.';
    const node = this.fs.getNodeByPath(this.currentPath, target);
    if (!node) {
      return { stdout: '', stderr: `${target} [error opening dir]`, currentPath: this.currentPath };
    }
    if (node.type !== 'dir') {
      return { stdout: '', stderr: `[error opening dir]`, currentPath: this.currentPath };
    }

    const lines = [];
    lines.push(node.name === '/' ? '/' : node.name);

    const buildTree = (dirNode, prefix = '') => {
      let children = [...dirNode.children];
      if (!showAll) {
        children = children.filter(c => !c.name.startsWith('.'));
      }
      children.sort((a, b) => a.name.localeCompare(b.name));

      children.forEach((child, index) => {
        const isLast = index === children.length - 1;
        const connector = isLast ? '└── ' : '├── ';
        lines.push(`${prefix}${connector}${child.name}`);
        if (child.type === 'dir' && child.children) {
          const newPrefix = prefix + (isLast ? '    ' : '│   ');
          buildTree(child, newPrefix);
        }
      });
    };

    buildTree(node);
    return {
      stdout: lines.join('\n'),
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runApt(args, isSudo) {
    if (!isSudo) {
      return { stdout: '', stderr: 'E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)\nE: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), are you root?', currentPath: this.currentPath };
    }
    if (args[0] === 'install') {
      const pkg = args[1];
      if (!pkg) {
        return { stdout: '', stderr: 'apt install: missing package name', currentPath: this.currentPath };
      }
      if (pkg === 'tree') {
        this.installedPackages.add('tree');
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('app:package-installed', { detail: { package: 'tree' } }));
        }
        return {
          stdout: `Reading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\nThe following NEW packages will be installed:\n  tree\n0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.\nNeed to get 43.0 kB of archives.\nAfter this operation, 115 kB of additional disk space will be used.\nGet:1 http://archive.ubuntu.com/ubuntu noble/main amd64 tree amd64 2.1.1-2 [43.0 kB]\nFetched 43.0 kB in 0s (150 kB/s)\nSelecting previously unselected package tree.\n(Reading database ... 12845 files and directories currently installed.)\nPreparing to unpack .../tree_2.1.1-2_amd64.deb ...\nUnpacking tree (2.1.1-2) ...\nSetting up tree (2.1.1-2) ...\nProcessing triggers for man-db (2.12.0-1) ...`,
          stderr: '',
          currentPath: this.currentPath
        };
      }
      return { stdout: '', stderr: `E: Unable to locate package ${pkg}`, currentPath: this.currentPath };
    }
    return { stdout: '', stderr: 'apt: usage: apt install [package]', currentPath: this.currentPath };
  }

  // Redirection logic
  handleRedirection(filePath, content, type) {
    const resolvedPath = this.fs.resolvePathStr(this.currentPath, filePath);
    const existingFile = this.fs.getNodeByPath(this.currentPath, filePath);

    if (existingFile) {
      if (existingFile.type !== 'file') {
        return { success: false, error: 'Is a directory' };
      }
      if (type === 'write') {
        existingFile.content = content + '\n';
      } else {
        existingFile.content += content + '\n';
      }
      return { success: true };
    } else {
      // Create file and write content
      const contentWithNewline = content + '\n';
      const createRes = this.fs.createNode(this.currentPath, filePath, 'file', {
        content: contentWithNewline
      });
      return createRes;
    }
  }

  // CD: Change directory
  runCd(args) {
    const target = args[0] || '~';
    const targetAbsStr = this.fs.resolvePathStr(this.currentPath, target);
    const node = this.fs.getNodeByPath(this.currentPath, target);

    if (!node) {
      return { stdout: '', stderr: `bash: cd: ${target}: No such file or directory`, currentPath: this.currentPath };
    }
    if (node.type !== 'dir') {
      return { stdout: '', stderr: `bash: cd: ${target}: Not a directory`, currentPath: this.currentPath };
    }

    this.currentPath = targetAbsStr;
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  // LS: List directory
  runLs(args, isPiped = false) {
    let showDetails = false;
    let showAll = false;
    const paths = [];

    // Parse options
    for (const arg of args) {
      if (arg.startsWith('-')) {
        if (arg.includes('l')) showDetails = true;
        if (arg.includes('a')) showAll = true;
      } else {
        paths.push(arg);
      }
    }

    const target = paths[0] || '.';
    const node = this.fs.getNodeByPath(this.currentPath, target);

    if (!node) {
      return { stdout: '', stderr: `ls: cannot access '${target}': No such file or directory`, currentPath: this.currentPath };
    }

    if (node.type === 'file') {
      if (showDetails) {
        return { stdout: `${this.formatFileRow(node)}`, stderr: '', currentPath: this.currentPath };
      }
      return { stdout: node.name, stderr: '', currentPath: this.currentPath };
    }

    // Listing directory
    let items = [...node.children];
    if (showAll) {
      // Mock . and ..
      items.unshift({ name: '..', type: 'dir', permissions: node.permissions, owner: node.owner, group: node.group });
      items.unshift({ name: '.', type: 'dir', permissions: node.permissions, owner: node.owner, group: node.group });
    } else {
      // Filter out hidden files unless showAll is true
      items = items.filter(item => !item.name.startsWith('.'));
    }

    // Sort items
    items.sort((a, b) => a.name.localeCompare(b.name));

    if (showDetails) {
      const rows = items.map(item => this.formatFileRow(item));
      return { stdout: rows.join('\n'), stderr: '', currentPath: this.currentPath };
    } else {
      const names = items.map(item => item.name);
      return { stdout: names.join(isPiped ? '\n' : '  '), stderr: '', currentPath: this.currentPath };
    }
  }

  formatFileRow(node) {
    const typeChar = node.type === 'dir' ? 'd' : '-';
    // Map permissions (e.g. 755 -> rwxr-xr-x)
    const mapPerms = (octalStr) => {
      const lookup = ['---', '--x', '-w-', '-wx', 'r--', 'r-x', 'rw-', 'rwx'];
      const digits = String(octalStr).split('').map(Number);
      return lookup[digits[0] || 0] + lookup[digits[1] || 0] + lookup[digits[2] || 0];
    };
    const permsString = mapPerms(node.permissions);
    
    // File size mockup
    let size = 4096;
    if (node.type === 'file') {
      size = node.content ? node.content.length : 0;
    }
    
    return `${typeChar}${permsString} 1 ${node.owner} ${node.group} ${size} Jul 3 13:37 ${node.name}`;
  }

  // MKDIR: Make directory
  runMkdir(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'mkdir: missing operand', currentPath: this.currentPath };
    }

    let createParents = false;
    const paths = [];

    for (const arg of args) {
      if (arg === '-p' || arg === '--parents') {
        createParents = true;
      } else {
        paths.push(arg);
      }
    }

    if (paths.length === 0) {
      return { stdout: '', stderr: 'mkdir: missing operand', currentPath: this.currentPath };
    }

    const errors = [];
    for (const p of paths) {
      const res = this.fs.createNode(this.currentPath, p, 'dir', { createParents });
      if (!res.success) {
        errors.push(`mkdir: cannot create directory '${p}': ${res.error}`);
      }
    }

    return {
      stdout: '',
      stderr: errors.join('\n'),
      currentPath: this.currentPath
    };
  }

  // TOUCH: Create/update file
  runTouch(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'touch: missing file operand', currentPath: this.currentPath };
    }

    const errors = [];
    for (const file of args) {
      const res = this.fs.createNode(this.currentPath, file, 'file');
      if (!res.success) {
        errors.push(`touch: cannot touch '${file}': ${res.error}`);
      }
    }

    return {
      stdout: '',
      stderr: errors.join('\n'),
      currentPath: this.currentPath
    };
  }

  // CAT: Concatenate/read file contents
  runCat(args, stdin, isSudo) {
    if (args.length === 0) {
      return { stdout: stdin || '', stderr: '', currentPath: this.currentPath };
    }

    const outputs = [];
    const errors = [];

    for (const target of args) {
      const node = this.fs.getNodeByPath(this.currentPath, target);
      if (!node) {
        errors.push(`cat: ${target}: No such file or directory`);
      } else if (node.type === 'dir') {
        errors.push(`cat: ${target}: Is a directory`);
      } else if (node.permissions === '000' && !isSudo) {
        errors.push(`cat: ${target}: Permission denied`);
      } else {
        outputs.push(node.content);
      }
    }

    return {
      stdout: outputs.join('\n'),
      stderr: errors.join('\n'),
      currentPath: this.currentPath
    };
  }

  // ECHO: Print arguments
  runEcho(args) {
    // E.g. echo hello world -> "hello world"
    return {
      stdout: args.join(' '),
      stderr: '',
      currentPath: this.currentPath
    };
  }

  // RM: Remove file/directory
  runRm(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'rm: missing operand', currentPath: this.currentPath };
    }

    let recursive = false;
    let force = false;
    const paths = [];

    for (const arg of args) {
      if (arg.startsWith('-')) {
        if (arg.includes('r') || arg.includes('R')) recursive = true;
        if (arg.includes('f')) force = true;
      } else {
        paths.push(arg);
      }
    }

    if (paths.length === 0) {
      return { stdout: '', stderr: 'rm: missing operand', currentPath: this.currentPath };
    }

    const errors = [];
    for (const p of paths) {
      const res = this.fs.deleteNode(this.currentPath, p, recursive);
      if (!res.success) {
        if (!force) {
          errors.push(`rm: cannot remove '${p}': ${res.error}`);
        }
      }
    }

    return {
      stdout: '',
      stderr: errors.join('\n'),
      currentPath: this.currentPath
    };
  }

  // CP: Copy file/folder
  runCp(args) {
    if (args.length < 2) {
      return { stdout: '', stderr: 'cp: missing file operand', currentPath: this.currentPath };
    }

    let recursive = false;
    const paths = [];

    for (const arg of args) {
      if (arg.startsWith('-')) {
        if (arg.includes('r') || arg.includes('R')) recursive = true;
      } else {
        paths.push(arg);
      }
    }

    if (paths.length < 2) {
      return { stdout: '', stderr: `cp: missing destination file operand after '${paths[0]}'`, currentPath: this.currentPath };
    }

    const srcPath = paths[0];
    const destPath = paths[1];

    const srcNode = this.fs.getNodeByPath(this.currentPath, srcPath);
    if (!srcNode) {
      return { stdout: '', stderr: `cp: cannot stat '${srcPath}': No such file or directory`, currentPath: this.currentPath };
    }

    if (srcNode.type === 'dir' && !recursive) {
      return { stdout: '', stderr: `cp: -r not specified; omitting directory '${srcPath}'`, currentPath: this.currentPath };
    }

    // Clone function for node duplication
    const cloneNode = (node, newName) => {
      const cloned = { ...node, name: newName };
      if (node.children) {
        cloned.children = node.children.map(child => cloneNode(child, child.name));
      }
      return cloned;
    };

    // Determine dest node parent and name
    const destAbsStr = this.fs.resolvePathStr(this.currentPath, destPath);
    const destNode = this.fs.getNodeByPath(this.currentPath, destPath);

    let parentNode;
    let newName;

    if (destNode && destNode.type === 'dir') {
      parentNode = destNode;
      newName = srcNode.name;
    } else {
      const destSegments = this.fs.resolvePathArray(this.currentPath, destPath);
      newName = destSegments[destSegments.length - 1];
      const parentSegs = destSegments.slice(0, -1);
      parentNode = this.fs.getNodeByPathSegments(parentSegs);
    }

    if (!parentNode || parentNode.type !== 'dir') {
      return { stdout: '', stderr: `cp: cannot create regular file '${destPath}': No such file or directory`, currentPath: this.currentPath };
    }

    // Remove existing if any
    const existingIdx = parentNode.children.findIndex(c => c.name === newName);
    if (existingIdx !== -1) {
      if (parentNode.children[existingIdx].type === 'dir' && srcNode.type === 'file') {
        return { stdout: '', stderr: `cp: cannot overwrite directory '${destPath}' with non-directory`, currentPath: this.currentPath };
      }
      parentNode.children.splice(existingIdx, 1);
    }

    parentNode.children.push(cloneNode(srcNode, newName));

    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  // MV: Move / Rename file/folder
  runMv(args) {
    if (args.length < 2) {
      return { stdout: '', stderr: 'mv: missing file operand', currentPath: this.currentPath };
    }

    const srcPath = args[0];
    const destPath = args[1];

    const srcNode = this.fs.getNodeByPath(this.currentPath, srcPath);
    if (!srcNode) {
      return { stdout: '', stderr: `mv: cannot stat '${srcPath}': No such file or directory`, currentPath: this.currentPath };
    }

    // Determine dest node parent and name
    const destNode = this.fs.getNodeByPath(this.currentPath, destPath);
    let parentNode;
    let newName;

    if (destNode && destNode.type === 'dir') {
      parentNode = destNode;
      newName = srcNode.name;
    } else {
      const destSegments = this.fs.resolvePathArray(this.currentPath, destPath);
      newName = destSegments[destSegments.length - 1];
      const parentSegs = destSegments.slice(0, -1);
      parentNode = this.fs.getNodeByPathSegments(parentSegs);
    }

    if (!parentNode || parentNode.type !== 'dir') {
      return { stdout: '', stderr: `mv: cannot move to '${destPath}': No such file or directory`, currentPath: this.currentPath };
    }

    // Check if source and destination are the same
    const srcSegments = this.fs.resolvePathArray(this.currentPath, srcPath);
    const destSegmentsResolved = this.fs.resolvePathArray(this.currentPath, destPath);
    if (srcSegments.join('/') === destSegmentsResolved.join('/')) {
      return { stdout: '', stderr: `mv: '${srcPath}' and '${destPath}' are the same file`, currentPath: this.currentPath };
    }

    // Delete from old parent
    const srcParentSegs = srcSegments.slice(0, -1);
    const srcParentNode = this.fs.getNodeByPathSegments(srcParentSegs);
    const srcIndex = srcParentNode.children.findIndex(c => c.name === srcNode.name);
    srcParentNode.children.splice(srcIndex, 1);

    // Remove existing at target if any
    const existingIdx = parentNode.children.findIndex(c => c.name === newName);
    if (existingIdx !== -1) {
      parentNode.children.splice(existingIdx, 1);
    }

    // Insert with new name
    srcNode.name = newName;
    parentNode.children.push(srcNode);

    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  // CHMOD: Change permissions
  runChmod(args) {
    if (args.length < 2) {
      return { stdout: '', stderr: 'chmod: missing operand', currentPath: this.currentPath };
    }

    const mode = args[0]; // e.g. "755" or "+x"
    const target = args[1];

    const node = this.fs.getNodeByPath(this.currentPath, target);
    if (!node) {
      return { stdout: '', stderr: `chmod: cannot access '${target}': No such file or directory`, currentPath: this.currentPath };
    }

    // Handle octal mode (e.g. 755, 644)
    if (/^[0-7]{3}$/.test(mode)) {
      node.permissions = mode;
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    // Handle simple symbolic mode "+x" (makes executable for everyone)
    if (mode === '+x') {
      const original = node.permissions; // e.g. "644"
      const digits = original.split('').map(Number);
      // add execute bit: odd numbers (1, 3, 5, 7) have execute bit.
      // If even, add 1.
      const newDigits = digits.map(d => (d % 2 === 0 ? d + 1 : d));
      node.permissions = newDigits.join('');
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    return { stdout: '', stderr: `chmod: invalid mode: '${mode}'`, currentPath: this.currentPath };
  }

  // GREP: Search text
  runGrep(args, stdin, isSudo) {
    if (args.length < 1) {
      return { stdout: '', stderr: 'grep: usage: grep [pattern] [file]', currentPath: this.currentPath };
    }

    const pattern = args[0];
    const target = args[1];
    let content = '';

    if (!target) {
      content = stdin || '';
    } else {
      const node = this.fs.getNodeByPath(this.currentPath, target);
      if (!node) {
        return { stdout: '', stderr: `grep: ${target}: No such file or directory`, currentPath: this.currentPath };
      }
      if (node.type === 'dir') {
        return { stdout: '', stderr: `grep: ${target}: Is a directory`, currentPath: this.currentPath };
      }
      if (node.permissions === '000' && !isSudo) {
        return { stdout: '', stderr: `grep: ${target}: Permission denied`, currentPath: this.currentPath };
      }
      content = node.content;
    }

    const lines = content.split('\n');
    if (lines.length > 0 && lines[lines.length - 1] === '') {
      lines.pop();
    }
    const matched = lines.filter(line => line.includes(pattern));

    return {
      stdout: matched.join('\n'),
      stderr: '',
      currentPath: this.currentPath
    };
  }
}
