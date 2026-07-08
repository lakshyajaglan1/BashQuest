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
    this.rogueProcessAlive = true;
    this.services = { apache2: 'inactive' };
    this.bgJobs = [];
    
    const defaultPkgs = [
      'pwd', 'whoami', 'clear', 'help', 'cd', 'ls', 'mkdir', 'touch', 'cat', 'echo', 
      'rm', 'cp', 'mv', 'chmod', 'grep', 'wc', 'uniq', 'sort', 'man', 'apt',
      'df', 'du', 'free', 'uptime', 'uname', 'ps', 'top', 'htop', 'kill', 'sleep',
      'jobs', 'fg', 'ping', 'ip', 'curl', 'find', 'history', 'systemctl', 'nano',
      'bash', 'sed', 'awk', 'cut', 'tr', 'ln', 'tar', 'chown', 'export', 'env', 'xargs',
      'head', 'tail', 'less', 'more', 'journalctl', 'which', 'alias', 'crontab',
      'useradd', 'passwd', 'su', 'ssh', 'scp'
    ];
    this.installedPackages = new Set(defaultPkgs);
    if (installedPackages) {
      for (const pkg of installedPackages) {
        this.installedPackages.add(pkg);
      }
    }
    this.env = {
      USER: 'learner',
      HOME: '/home/learner',
      PATH: '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
      SHELL: '/bin/bash',
      TERM: 'xterm-256color'
    };
  }

  // Expand wildcard patterns (* and ?) against the virtual filesystem
  expandWildcard(pattern) {
    const lastSlash = pattern.lastIndexOf('/');
    let searchDir, filePattern;
    if (lastSlash !== -1) {
      searchDir = pattern.substring(0, lastSlash) || '/';
      filePattern = pattern.substring(lastSlash + 1);
    } else {
      searchDir = '.';
      filePattern = pattern;
    }

    const node = this.fs.getNodeByPath(this.currentPath, searchDir);
    if (!node || node.type !== 'dir') {
      return [pattern]; // no match, return as-is
    }

    // Convert glob pattern to regex: escape regex-special chars, then replace glob wildcards
    let regexStr = '';
    for (let i = 0; i < filePattern.length; i++) {
      const ch = filePattern[i];
      if (ch === '*') {
        regexStr += '.*';
      } else if (ch === '?') {
        regexStr += '.';
      } else if ('.+^${}()|[]\\'.includes(ch)) {
        regexStr += '\\' + ch;
      } else {
        regexStr += ch;
      }
    }
    const regex = new RegExp('^' + regexStr + '$');

    const children = node.children || [];
    const sortedChildren = [...children].sort((a, b) => a.name.localeCompare(b.name));

    const matches = [];
    for (const child of sortedChildren) {
      // Wildcards don't match hidden files unless the pattern starts with '.'
      if (child.name.startsWith('.') && !filePattern.startsWith('.')) {
        continue;
      }
      if (regex.test(child.name)) {
        const prefix = lastSlash !== -1 ? pattern.substring(0, lastSlash + 1) : '';
        matches.push(prefix + child.name);
      }
    }

    return matches.length > 0 ? matches : [pattern];
  }

  execute(commandLine) {
    const trimmed = commandLine.trim();
    if (!trimmed) {
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    this.history.push(trimmed);

    // Substitute environment variables (except inside single quotes if possible)
    let substituted = trimmed;
    const varRegex = /\$(\w+)/g;
    substituted = substituted.replace(varRegex, (match, varName) => {
      if (/^\d+$/.test(varName)) return match;
      return this.env[varName] !== undefined ? this.env[varName] : '';
    });

    // Support pipeline split
    const pipelineSegments = [];
    let currentSegment = '';
    let inQuotes = false;
    let quoteChar = '';

    for (let i = 0; i < substituted.length; i++) {
      const char = substituted[i];
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

      // Parse command arguments, respecting quotes and tracking quote status
      const args = [];
      const argsQuoted = [];
      let currentArg = '';
      let argInQuotes = false;
      let argQuoteChar = '';
      let wasQuoted = false;

      for (let i = 0; i < cmdToRun.length; i++) {
        const char = cmdToRun[i];
        if ((char === '"' || char === "'") && (i === 0 || cmdToRun[i - 1] !== '\\')) {
          if (argInQuotes && char === argQuoteChar) {
            argInQuotes = false;
          } else if (!argInQuotes) {
            argInQuotes = true;
            argQuoteChar = char;
            wasQuoted = true;
          }
        } else if (char === ' ' && !argInQuotes) {
          if (currentArg !== '') {
            args.push(currentArg);
            argsQuoted.push(wasQuoted);
            currentArg = '';
            wasQuoted = false;
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
        argsQuoted.push(wasQuoted);
      }

      if (args.length === 0) {
        lastResult = { stdout: '', stderr: '', currentPath: this.currentPath };
        break;
      }

      // Perform wildcard (glob) expansion on unquoted arguments containing * or ?
      const expandedArgs = [];
      for (let i = 0; i < args.length; i++) {
        if (!argsQuoted[i] && (args[i].includes('*') || args[i].includes('?'))) {
          expandedArgs.push(...this.expandWildcard(args[i]));
        } else {
          expandedArgs.push(args[i]);
        }
      }

      let isSudo = false;
      let command = expandedArgs[0];
      let cmdArgs = expandedArgs.slice(1);

      if (command === 'sudo') {
        isSudo = true;
        if (cmdArgs.length === 0) {
          lastResult = { stdout: '', stderr: 'usage: sudo command [args]', currentPath: this.currentPath };
          break;
        }
        command = cmdArgs[0];
        cmdArgs = cmdArgs.slice(1);
      }

      const isPathExecution = command.startsWith('./') || command.startsWith('/');
      if (isPathExecution) {
        const node = this.fs.getNodeByPath(this.currentPath, command);
        if (!node) {
          lastResult = { stdout: '', stderr: `bash: ${command}: No such file or directory`, currentPath: this.currentPath };
          break;
        }
        if (node.type !== 'file') {
          lastResult = { stdout: '', stderr: `bash: ${command}: Is a directory`, currentPath: this.currentPath };
          break;
        }
        // Check executable bits
        const digits = String(node.permissions).split('').map(Number);
        const isExec = digits.some(d => d % 2 !== 0); // odd digits have executable permission
        if (!isExec) {
          lastResult = { stdout: '', stderr: `bash: ${command}: Permission denied`, currentPath: this.currentPath };
          break;
        }
        // Execute it as bash script
        const runRes = this.runBash([command, ...cmdArgs]);
        lastResult = runRes;
        
        // Also ensure any FS changes in script update parent window if in browser
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('app:filesystem-update'));
        }
        
        stdin = lastResult.stdout;
        continue;
      }

      // Graceful fallback for bash control-flow syntax (if, while, for, etc.)
      const bashKeywords = ['if', 'while', 'for', 'else', 'fi', 'do', 'done', 'then', 'elif', 'case', 'esac'];
      if (bashKeywords.includes(command) || (command === 'if' && cmdArgs[0] === '[') || (command === 'while' && cmdArgs[0] === '[')) {
        lastResult = { stdout: '[Simulated bash execution... Done]', stderr: '', currentPath: this.currentPath };
        stdin = lastResult.stdout;
        continue;
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
          result.stdout = 'Available commands: cd, ls, pwd, mkdir, touch, cat, echo, rm, cp, mv, chmod, grep, wc, uniq, sort, man, tree, sudo, apt, whoami, clear, help, df, du, free, uptime, uname, ps, top, htop, kill, sleep, jobs, fg, ping, ip, curl, find, history, systemctl, nano, bash, sed, awk, cut, tr, ln, tar, chown, export, env, xargs\nRedirections > (overwrite) and >> (append), and pipes | are supported.';
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

        case 'df':
          result.stdout = `Filesystem      Size  Used Avail Use% Mounted on\nudev            3.9G     0  3.9G   0% /dev\ntmpfs           797M  1.6M  795M   1% /run\n/dev/sda2       117G   32G   80G  29% /\ntmpfs           3.9G   24M  3.9G   1% /dev/shm\ntmpfs           5.0M  4.0K  5.0M   1% /run/lock\n/dev/sda1       511M  6.1M  505M   2% /boot/efi\ntmpfs           797M   80K  797M   1% /run/user/1000`;
          break;

        case 'du':
          result = this.runDu(cmdArgs);
          break;

        case 'free':
          {
            let useMega = false;
            for (const arg of cmdArgs) {
              if (arg === '-m') useMega = true;
            }
            if (useMega) {
              result.stdout = `               total        used        free      shared  buff/cache   available\nMem:            7962        3412        2104         248        2446        4018\nSwap:           2048         512        1536`;
            } else {
              result.stdout = `               total        used        free      shared  buff/cache   available\nMem:            7.8Gi       3.3Gi       2.1Gi       248Mi       2.4Gi       3.9Gi\nSwap:           2.0Gi       512Mi       1.5Gi`;
            }
          }
          break;

        case 'uptime':
          result.stdout = ` 16:10:04 up 4:12,  1 user,  load average: 0.15, 0.08, 0.03`;
          break;

        case 'uname':
          {
            const showAll = cmdArgs.includes('-a') || cmdArgs.includes('--all');
            result.stdout = showAll 
              ? `Linux bashquest 6.8.0-35-generic #35-Ubuntu SMP PREEMPT_DYNAMIC Mon May 20 15:51:52 UTC 2026 x86_64 x86_64 x86_64 GNU/Linux`
              : `Linux`;
          }
          break;

        case 'ps':
          {
            const showAux = cmdArgs.includes('aux') || cmdArgs.includes('-ef');
            if (showAux) {
              let rows = [
                `USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND`,
                `root           1  0.0  0.1 168432  9412 ?        Ss   12:00   0:02 /sbin/init`,
                `root          42  0.0  0.0  48212  4102 ?        S    12:00   0:00 /lib/systemd/systemd-journald`,
                `learner     1245  0.0  0.2  22412  8510 pts/0    Ss   12:05   0:00 -bash`
              ];
              if (this.rogueProcessAlive) {
                rows.push(`learner     9999 99.1  1.4  41812 12844 pts/0    R    12:10   5:42 /bin/bash /home/learner/rogue_process.sh`);
              }
              rows.push(`learner    10245  0.0  0.1  18432  4122 pts/0    R+   16:10   0:00 ps aux`);
              result.stdout = rows.join('\n');
            } else {
              let rows = [
                `  PID TTY          TIME CMD`,
                ` 1245 pts/0    00:00:00 bash`
              ];
              if (this.rogueProcessAlive) {
                rows.push(` 9999 pts/0    00:05:42 rogue_process.sh`);
              }
              rows.push(`10245 pts/0    00:00:00 ps`);
              result.stdout = rows.join('\n');
            }
          }
          break;

        case 'top':
        case 'htop':
          {
            let rows = [
              `top - 16:10:04 up 4:12,  1 user,  load average: 0.15, 0.08, 0.03`,
              `Tasks:  48 total,   2 running,  46 sleeping,   0 stopped,   0 zombie`,
              `%Cpu(s): 24.8 us,  4.2 sy,  0.0 ni, 71.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st`,
              `MiB Mem :   7962.4 total,   2104.1 free,   3412.3 used,   2446.0 buff/cache`,
              `MiB Swap:   2048.0 total,   1536.0 free,    512.0 used.   4018.4 avail Mem `,
              ``,
              `  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND`
            ];
            if (this.rogueProcessAlive) {
              rows.push(` 9999 learner   20   0   41812  12844   4102 R  99.1   0.2   5:42.12 rogue_process.sh`);
            }
            rows.push(` 1245 learner   20   0   22412   8510   3812 S   0.0   0.1   0:00.12 bash`);
            rows.push(`    1 root      20   0  168432   9412   5120 S   0.0   0.1   0:02.10 init`);
            result.stdout = rows.join('\n');
          }
          break;

        case 'kill':
          {
            if (cmdArgs.length === 0) {
              result.stderr = `kill: usage: kill [-s sigspec | -n signum | -sigspec] pid | jobspec ... or kill -l`;
            } else {
              const has9 = cmdArgs.includes('-9');
              const pidArg = has9 ? cmdArgs[cmdArgs.indexOf('-9') + 1] : cmdArgs[0];
              if (pidArg === '9999') {
                this.rogueProcessAlive = false;
                result.stdout = `Process 9999 terminated successfully.`;
              } else if (pidArg === '%1' && this.bgJobs.length > 0) {
                this.bgJobs = [];
                result.stdout = `Job [1] terminated.`;
              } else if (/^\d+$/.test(pidArg)) {
                result.stderr = `kill: (${pidArg}) - No such process`;
              } else {
                result.stderr = `kill: ${pidArg}: invalid process id`;
              }
            }
          }
          break;

        case 'sleep':
          {
            const duration = cmdArgs[0] || '1';
            const isBackground = cmdArgs.includes('&') || duration.endsWith('&');
            const cleanDur = duration.replace('&', '');
            
            if (isBackground) {
              const jobNum = this.bgJobs.length + 1;
              this.bgJobs.push({ id: jobNum, cmd: `sleep ${cleanDur}`, status: 'Running' });
              result.stdout = `[${jobNum}] 10452\n(Type 'jobs' to check background tasks)`;
            } else {
              result.stdout = `slept for ${cleanDur} seconds`;
            }
          }
          break;

        case 'jobs':
          {
            if (this.bgJobs.length === 0) {
              result.stdout = '';
            } else {
              result.stdout = this.bgJobs.map(j => `[${j.id}]+  ${j.status}                 ${j.cmd} &`).join('\n');
            }
          }
          break;

        case 'fg':
          {
            if (this.bgJobs.length === 0) {
              result.stderr = `bash: fg: current: no such job`;
            } else {
              const job = this.bgJobs.pop();
              result.stdout = `${job.cmd}\n[Job ${job.id} brought to foreground and completed]`;
            }
          }
          break;

        case 'ping':
          {
            const host = cmdArgs.filter(a => !a.startsWith('-')).pop();
            if (!host) {
              result.stderr = `ping: missing host operand`;
            } else {
              result.stdout = `PING ${host} (142.250.190.46) 56(84) bytes of data.\n64 bytes from ${host} (142.250.190.46): icmp_seq=1 ttl=116 time=14.2 ms\n64 bytes from ${host} (142.250.190.46): icmp_seq=2 ttl=116 time=12.8 ms\n64 bytes from ${host} (142.250.190.46): icmp_seq=3 ttl=116 time=15.1 ms\n\n--- ${host} ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 2002ms\nrtt min/avg/max/mdev = 12.821/14.052/15.110/0.951 ms`;
            }
          }
          break;

        case 'ip':
          {
            const sub = cmdArgs[0];
            if (sub === 'a' || sub === 'addr' || sub === 'address') {
              result.stdout = `1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000\n    link/ether 52:54:00:12:34:56 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.1.15/24 brd 192.168.1.255 scope global dynamic eth0\n       valid_lft 86320sec preferred_lft 86320sec\n3: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000\n    link/ether 00:c0:ca:98:76:54 brd ff:ff:ff:ff:ff:ff`;
            } else {
              result.stderr = `ip: usage: ip [OPTIONS] OBJECT { COMMAND | help }\nOBJECT := { link | addr | route }`;
            }
          }
          break;

        case 'curl':
          {
            const url = cmdArgs.filter(a => !a.startsWith('-')).pop();
            if (!url) {
              result.stderr = `curl: no URL specified!`;
            } else if (url === 'http://api.bashquest.com/update.sh' || url === 'api.bashquest.com/update.sh') {
              result.stdout = `#!/bin/bash\necho "Updating BashQuest"\necho "All packages current!"`;
            } else {
              result.stdout = `<html><body>Welcome to ${url}</body></html>`;
            }
          }
          break;

        case 'find':
          result = this.runFind(cmdArgs);
          break;

        case 'history':
          result.stdout = this.history.map((cmd, idx) => `  ${idx + 1}  ${cmd}`).join('\n');
          break;

        case 'systemctl':
          result = this.runSystemctl(cmdArgs, isSudo);
          break;

        case 'xargs':
          result = this.runXargs(cmdArgs, stdin, isSudo);
          break;

        case 'nano':
          {
            const targetFile = cmdArgs[0];
            if (!targetFile) {
              result.stderr = `nano: missing file operand`;
            } else {
              const node = this.fs.getNodeByPath(this.currentPath, targetFile);
              const content = (node && node.type === 'file') ? node.content : '';
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('app:open-nano', {
                  detail: {
                    filename: targetFile,
                    currentPath: this.currentPath,
                    content: content
                  }
                }));
              }
              result.stdout = `[ GNU nano 7.2 opened in editor workspace overlay ]`;
            }
          }
          break;

        case 'bash':
          result = this.runBash(cmdArgs);
          break;

        case 'sed':
          result = this.runSed(cmdArgs, stdin, isSudo);
          break;

        case 'awk':
          result = this.runAwk(cmdArgs, stdin, isSudo);
          break;

        case 'cut':
          result = this.runCut(cmdArgs, stdin, isSudo);
          break;

        case 'tr':
          result = this.runTr(cmdArgs, stdin, isSudo);
          break;

        case 'ln':
          result = this.runLn(cmdArgs);
          break;

        case 'tar':
          result = this.runTar(cmdArgs);
          break;

        case 'chown':
          result = this.runChown(cmdArgs);
          break;

        case 'export':
          result = this.runExport(cmdArgs);
          break;

        case 'env':
          result = this.runEnv(cmdArgs);
          break;

        case 'head':
          result = this.runHead(cmdArgs, stdin, isSudo);
          break;

        case 'tail':
          result = this.runTail(cmdArgs, stdin, isSudo);
          break;

        case 'less':
        case 'more':
          result = this.runLess(cmdArgs, stdin, isSudo);
          break;

        case 'journalctl':
          result = this.runJournalctl(cmdArgs, isSudo);
          break;

        case 'which':
          result = this.runWhich(cmdArgs);
          break;

        case 'alias':
          result = this.runAlias(cmdArgs);
          break;

        case 'crontab':
          result = this.runCrontab(cmdArgs, stdin);
          break;

        case 'useradd':
          result = this.runUseradd(cmdArgs, isSudo);
          break;

        case 'passwd':
          result = this.runPasswd(cmdArgs, isSudo);
          break;

        case 'su':
          result = this.runSu(cmdArgs);
          break;

        case 'ssh':
          result = this.runSsh(cmdArgs);
          break;

        case 'scp':
          result = this.runScp(cmdArgs);
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

  runDu(args) {
    let summarize = false;
    let humanReadable = false;
    const targets = [];
    for (const arg of args) {
      if (arg.startsWith('-')) {
        if (arg.includes('s')) summarize = true;
        if (arg.includes('h')) humanReadable = true;
      } else {
        targets.push(arg);
      }
    }
    const target = targets[0] || '.';
    const node = this.fs.getNodeByPath(this.currentPath, target);
    if (!node) {
      return { stdout: '', stderr: `du: cannot access '${target}': No such file or directory`, currentPath: this.currentPath };
    }
    const getSizes = (n, currentRelPath) => {
      let size = 0;
      const list = [];
      if (n.type === 'file') {
        size = n.content ? n.content.length : 0;
      } else if (n.type === 'dir' && n.children) {
        size = 4096;
        for (const child of n.children) {
          const res = getSizes(child, currentRelPath === '/' ? `/${child.name}` : `${currentRelPath}/${child.name}`);
          size += res.size;
          list.push(...res.list);
        }
      }
      list.push({ path: currentRelPath, size });
      return { size, list };
    };
    const absPath = this.fs.resolvePathStr(this.currentPath, target);
    const { list } = getSizes(node, absPath);
    const formatSize = (s) => {
      if (!humanReadable) return String(Math.ceil(s / 1024));
      if (s < 1024) return `${s}B`;
      if (s < 1024 * 1024) return `${Math.round(s / 102.4) / 10}K`;
      return `${Math.round(s / (1024 * 102.4)) / 10}M`;
    };
    if (summarize) {
      const total = list.find(item => item.path === absPath);
      return { stdout: `${formatSize(total.size)}\t${target}`, stderr: '', currentPath: this.currentPath };
    } else {
      list.sort((a, b) => a.path.localeCompare(b.path));
      const out = list.map(item => `${formatSize(item.size)}\t${item.path === '/' ? '/' : '.' + item.path.substring(this.currentPath === '/' ? 0 : this.currentPath.length)}`);
      return { stdout: out.join('\n'), stderr: '', currentPath: this.currentPath };
    }
  }

  runFind(args) {
    let startPath = '.';
    let namePattern = '*';
    const pathIdx = args.findIndex(a => !a.startsWith('-') && args[args.indexOf(a) - 1] !== '-name');
    if (pathIdx !== -1) {
      startPath = args[pathIdx];
    }
    const nameIdx = args.indexOf('-name');
    if (nameIdx !== -1 && args[nameIdx + 1]) {
      namePattern = args[nameIdx + 1].replace(/['"]/g, '');
    }
    const startNode = this.fs.getNodeByPath(this.currentPath, startPath);
    if (!startNode) {
      return { stdout: '', stderr: `find: '${startPath}': No such file or directory`, currentPath: this.currentPath };
    }
    let regexStr = '';
    for (let i = 0; i < namePattern.length; i++) {
      const ch = namePattern[i];
      if (ch === '*') regexStr += '.*';
      else if (ch === '?') regexStr += '.';
      else if ('.+^${}()|[]\\'.includes(ch)) regexStr += '\\' + ch;
      else regexStr += ch;
    }
    const regex = new RegExp('^' + regexStr + '$');
    const results = [];
    const traverse = (node, currentRelPath) => {
      if (regex.test(node.name) && node.name !== '/') {
        results.push(currentRelPath);
      }
      if (node.type === 'dir' && node.children) {
        for (const child of node.children) {
          traverse(child, currentRelPath === '/' ? `/${child.name}` : `${currentRelPath}/${child.name}`);
        }
      }
    };
    const absPath = this.fs.resolvePathStr(this.currentPath, startPath);
    traverse(startNode, absPath);
    results.sort();
    const relativeResults = results.map(r => {
      if (startPath === '.') {
        return '.' + r.substring(this.currentPath === '/' ? 0 : this.currentPath.length);
      }
      return r;
    });
    return {
      stdout: relativeResults.join('\n'),
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runXargs(args, stdin, isSudo) {
    if (args.length === 0) {
      args = ['echo'];
    }
    const stdinArgs = (stdin || '').split(/\s+/).filter(Boolean);
    const combinedArgs = [...args, ...stdinArgs];
    const quotedArgs = combinedArgs.map(arg => {
      if (arg.includes(' ') || arg.includes('"') || arg.includes("'") || arg.includes('*') || arg.includes('?')) {
        return JSON.stringify(arg);
      }
      return arg;
    });
    const commandLine = (isSudo ? 'sudo ' : '') + quotedArgs.join(' ');
    const result = this.execute(commandLine);
    if (this.history.length > 0) {
      this.history.pop();
    }
    return result;
  }

  runSystemctl(args, isSudo) {
    if (args.length < 2) {
      return { stdout: '', stderr: `systemctl: missing command or service name`, currentPath: this.currentPath };
    }
    const action = args[0];
    const service = args[1];
    if (service !== 'apache2') {
      return { stdout: '', stderr: `Failed to ${action} ${service}.service: Unit ${service}.service not found.`, currentPath: this.currentPath };
    }
    if (action === 'status') {
      const state = this.services.apache2 || 'inactive';
      let lines = [
        `● apache2.service - LSB: Apache2 web server`,
        `     Loaded: loaded (/etc/init.d/apache2; generated)`,
        `     Active: ${state === 'active' ? 'active (running)' : 'inactive (dead)'} since Fri 2026-07-03 12:00:00 UTC; 4h ago`,
        `       Docs: man:systemd-sysv-generator(8)`,
        `    Process: 1025 ExecStart=/etc/init.d/apache2 start (code=exited, status=0/SUCCESS)`
      ];
      if (state === 'active') {
        lines.push(`   Main PID: 1042 (apache2)`);
        lines.push(`      Tasks: 55 (limit: 9345)`);
        lines.push(`     Memory: 24.5M`);
        lines.push(`        CPU: 1.25s`);
      }
      return { stdout: lines.join('\n'), stderr: '', currentPath: this.currentPath };
    }
    if (!isSudo) {
      return { stdout: '', stderr: `Access denied. systemctl control operations require sudo privileges.`, currentPath: this.currentPath };
    }
    if (action === 'start') {
      this.services.apache2 = 'active';
      return { stdout: `Synchronizing state of apache2.service with SysV service script...\nExecuting: /lib/systemd/systemd-sysv-install enable apache2\nStarting apache2.service... Done!`, stderr: '', currentPath: this.currentPath };
    } else if (action === 'stop') {
      this.services.apache2 = 'inactive';
      return { stdout: `Stopping apache2.service... Done!`, stderr: '', currentPath: this.currentPath };
    } else if (action === 'restart') {
      this.services.apache2 = 'active';
      return { stdout: `Restarting apache2.service... Done!`, stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: `systemctl: unknown command '${action}'`, currentPath: this.currentPath };
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
        let node = this.fs.getNodeByPath(this.currentPath, file);
        if (node && node.type === 'link') {
          node = this.fs.getNodeByPath('/', node.target);
        }
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
      man: 'MAN(1) - Interface to the system reference manuals\n\nSYNOPSIS\n       man [COMMAND]\n\nDESCRIPTION\n       man formats and displays the on-line manual pages.',
      xargs: 'XARGS(1) - Build and execute command lines from standard input\n\nSYNOPSIS\n       xargs [COMMAND [INITIAL-ARGS...]]\n\nDESCRIPTION\n       xargs reads items from the standard input, delimited by blanks or newlines, and executes the COMMAND one or more times with any INITIAL-ARGS followed by the items read from standard input.'
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
    const typeChar = node.type === 'dir' ? 'd' : (node.type === 'link' ? 'l' : '-');
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
    } else if (node.type === 'link') {
      size = node.target ? node.target.length : 0;
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
      let node = this.fs.getNodeByPath(this.currentPath, target);
      if (node && node.type === 'link') {
        node = this.fs.getNodeByPath('/', node.target);
      }
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
      let node = this.fs.getNodeByPath(this.currentPath, target);
      if (node && node.type === 'link') {
        node = this.fs.getNodeByPath('/', node.target);
      }
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

  runBash(args) {
    const scriptName = args[0];
    if (!scriptName) {
      return { stdout: '', stderr: 'bash: missing script name', currentPath: this.currentPath };
    }
    const node = this.fs.getNodeByPath(this.currentPath, scriptName);
    if (!node || node.type !== 'file') {
      return { stdout: '', stderr: `bash: ${scriptName}: No such file or directory`, currentPath: this.currentPath };
    }

    const scriptArgs = args.slice(1);
    const lines = node.content.split('\n');
    const stdoutParts = [];
    const stderrParts = [];

    for (let line of lines) {
      line = line.trim();
      if (!line || line.startsWith('#')) continue;

      // Replace positional parameters: $1, $2, etc.
      for (let i = 0; i < scriptArgs.length; i++) {
        line = line.replace(new RegExp('\\$' + (i + 1), 'g'), scriptArgs[i]);
      }
      // Replace $# (argument count)
      line = line.replace(/\$#/g, String(scriptArgs.length));

      const res = this.execute(line);
      if (res.stdout) stdoutParts.push(res.stdout);
      if (res.stderr) stderrParts.push(res.stderr);
      this.currentPath = res.currentPath; // Let directories change inside script if cd runs
    }

    return {
      stdout: stdoutParts.join('\n'),
      stderr: stderrParts.join('\n'),
      currentPath: this.currentPath
    };
  }

  runSed(args, stdin, isSudo) {
    let inPlace = false;
    const cleanArgs = [];
    for (const arg of args) {
      if (arg === '-i') {
        inPlace = true;
      } else {
        cleanArgs.push(arg);
      }
    }

    if (cleanArgs.length === 0) {
      return { stdout: '', stderr: 'sed: missing expression', currentPath: this.currentPath };
    }

    const script = cleanArgs[0].replace(/['"]/g, '');
    const file = cleanArgs[1];
    let content = '';
    let fileNode = null;

    if (!file) {
      content = stdin || '';
    } else {
      fileNode = this.fs.getNodeByPath(this.currentPath, file);
      if (fileNode && fileNode.type === 'link') {
        fileNode = this.fs.getNodeByPath('/', fileNode.target);
      }
      if (!fileNode) {
        return { stdout: '', stderr: `sed: can't read ${file}: No such file or directory`, currentPath: this.currentPath };
      }
      if (fileNode.type !== 'file') {
        return { stdout: '', stderr: `sed: ${file}: Is a directory`, currentPath: this.currentPath };
      }
      content = fileNode.content;
    }

    if (script.startsWith('s/')) {
      const parts = script.split('/');
      if (parts.length >= 3) {
        const pattern = parts[1];
        const replacement = parts[2];
        const flags = parts[3] || '';
        const global = flags.includes('g') ? 'g' : '';
        try {
          const regex = new RegExp(pattern, global);
          content = content.replace(regex, replacement);
        } catch (e) {
          return { stdout: '', stderr: `sed: invalid regular expression: ${pattern}`, currentPath: this.currentPath };
        }
      }
    }

    if (inPlace && fileNode) {
      fileNode.content = content;
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('app:filesystem-update'));
      }
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    return { stdout: content, stderr: '', currentPath: this.currentPath };
  }

  runAwk(args, stdin, isSudo) {
    let separator = /\s+/;
    let script = '';
    let file = '';

    let i = 0;
    while (i < args.length) {
      const arg = args[i];
      if (arg === '-F') {
        const sepChar = args[i + 1]?.replace(/['"]/g, '') || ' ';
        separator = new RegExp(sepChar);
        i += 2;
      } else if (arg.startsWith('-F')) {
        const sepChar = arg.substring(2).replace(/['"]/g, '') || ' ';
        separator = new RegExp(sepChar);
        i += 1;
      } else {
        if (!script) {
          script = arg;
        } else {
          file = arg;
        }
        i += 1;
      }
    }

    if (!script) {
      return { stdout: '', stderr: 'awk: missing script', currentPath: this.currentPath };
    }

    let content = '';
    if (!file) {
      content = stdin || '';
    } else {
      let node = this.fs.getNodeByPath(this.currentPath, file);
      if (node && node.type === 'link') {
        node = this.fs.getNodeByPath('/', node.target);
      }
      if (!node) {
        return { stdout: '', stderr: `awk: cannot open ${file}: No such file or directory`, currentPath: this.currentPath };
      }
      content = node.content;
    }

    const cleanScript = script.replace(/['"]/g, '').trim();
    const match = cleanScript.match(/\{print\s+([^}]+)\}/);
    if (match) {
      const printArgsStr = match[1];
      const printTokens = printArgsStr.split(/\s*,\s*|\s+/).filter(Boolean);

      const lines = content.split('\n');
      if (lines.length > 0 && lines[lines.length - 1] === '') {
        lines.pop();
      }

      const outLines = lines.map(line => {
        const fields = line.split(separator);
        return printTokens.map(token => {
          if (token === '$0') return line;
          if (token.startsWith('$')) {
            const idx = parseInt(token.substring(1));
            return fields[idx - 1] || '';
          }
          return token.replace(/['"]/g, '');
        }).join(' ');
      });

      return { stdout: outLines.join('\n'), stderr: '', currentPath: this.currentPath };
    }

    return { stdout: content, stderr: '', currentPath: this.currentPath };
  }

  runCut(args, stdin, isSudo) {
    let delimiter = '\t';
    let fields = [];
    let chars = null;
    let file = '';

    let i = 0;
    while (i < args.length) {
      const arg = args[i];
      if (arg === '-d') {
        delimiter = args[i + 1] || '\t';
        i += 2;
      } else if (arg.startsWith('-d')) {
        delimiter = arg.substring(2);
        i += 1;
      } else if (arg === '-f') {
        fields = (args[i + 1] || '').split(',').map(Number);
        i += 2;
      } else if (arg.startsWith('-f')) {
        fields = arg.substring(2).split(',').map(Number);
        i += 1;
      } else if (arg === '-c') {
        chars = args[i + 1] || '';
        i += 2;
      } else if (arg.startsWith('-c')) {
        chars = arg.substring(2);
        i += 1;
      } else {
        file = arg;
        i += 1;
      }
    }

    let content = '';
    if (!file) {
      content = stdin || '';
    } else {
      let node = this.fs.getNodeByPath(this.currentPath, file);
      if (node && node.type === 'link') {
        node = this.fs.getNodeByPath('/', node.target);
      }
      if (!node) {
        return { stdout: '', stderr: `cut: ${file}: No such file or directory`, currentPath: this.currentPath };
      }
      content = node.content;
    }

    const lines = content.split('\n');
    if (lines.length > 0 && lines[lines.length - 1] === '') {
      lines.pop();
    }

    let outLines = [];
    if (chars) {
      let start = 0, end = 0;
      if (chars.includes('-')) {
        const parts = chars.split('-');
        start = parseInt(parts[0]) - 1;
        end = parseInt(parts[1]);
      } else {
        start = parseInt(chars) - 1;
        end = start + 1;
      }
      outLines = lines.map(line => line.substring(start, end));
    } else {
      outLines = lines.map(line => {
        const parts = line.split(delimiter);
        if (fields.length > 0) {
          return fields.map(f => parts[f - 1] || '').join(delimiter);
        }
        return line;
      });
    }

    return { stdout: outLines.join('\n'), stderr: '', currentPath: this.currentPath };
  }

  runTr(args, stdin, isSudo) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'tr: missing operand', currentPath: this.currentPath };
    }

    const content = stdin || '';
    const opt = args[0];

    if (opt === '-d') {
      const target = (args[1] || '').replace(/['"]/g, '');
      let out = content;
      for (const char of target) {
        out = out.split(char).join('');
      }
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }

    const set1 = args[0].replace(/['"]/g, '');
    const set2 = (args[1] || '').replace(/['"]/g, '');

    if (set1 === 'a-z' && set2 === 'A-Z') {
      return { stdout: content.toUpperCase(), stderr: '', currentPath: this.currentPath };
    } else if (set1 === 'A-Z' && set2 === 'a-z') {
      return { stdout: content.toLowerCase(), stderr: '', currentPath: this.currentPath };
    }

    let out = '';
    for (let i = 0; i < content.length; i++) {
      const char = content[i];
      const idx = set1.indexOf(char);
      if (idx !== -1 && set2[idx]) {
        out += set2[idx];
      } else {
        out += char;
      }
    }
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runLn(args) {
    let symbolic = false;
    const paths = [];
    for (const arg of args) {
      if (arg === '-s' || arg === '--symbolic') {
        symbolic = true;
      } else {
        paths.push(arg);
      }
    }
    if (paths.length < 2) {
      return { stdout: '', stderr: 'ln: missing file operand', currentPath: this.currentPath };
    }
    const target = paths[0];
    const linkName = paths[1];

    const targetAbs = this.fs.resolvePathStr(this.currentPath, target);

    const res = this.fs.createNode(this.currentPath, linkName, symbolic ? 'link' : 'file', {
      target: targetAbs
    });

    if (!res.success) {
      return { stdout: '', stderr: `ln: failed to create link '${linkName}': ${res.error}`, currentPath: this.currentPath };
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('app:filesystem-update'));
    }

    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runTar(args) {
    let create = false;
    let extract = false;
    let archiveFile = '';
    let target = '';

    let i = 0;
    while (i < args.length) {
      const arg = args[i];
      if (arg.startsWith('-')) {
        if (arg.includes('c')) create = true;
        if (arg.includes('x')) extract = true;
        if (arg.includes('f')) {
          archiveFile = args[i + 1];
          i += 2;
          continue;
        }
      } else {
        if (!target) {
          target = arg;
        }
      }
      i++;
    }

    if (create) {
      if (!archiveFile || !target) {
        return { stdout: '', stderr: 'tar: missing archive file or target', currentPath: this.currentPath };
      }
      const targetNode = this.fs.getNodeByPath(this.currentPath, target);
      if (!targetNode) {
        return { stdout: '', stderr: `tar: ${target}: Cannot stat: No such file or directory`, currentPath: this.currentPath };
      }

      const createRes = this.fs.createNode(this.currentPath, archiveFile, 'file', {
        content: `MOCK_TAR_ARCHIVE:${target}`
      });
      if (!createRes.success) {
        return { stdout: '', stderr: `tar: failed to create archive: ${createRes.error}`, currentPath: this.currentPath };
      }

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('app:filesystem-update'));
      }

      return {
        stdout: `${target}/\n${target}/app.log\n${target}/security.log`,
        stderr: '',
        currentPath: this.currentPath
      };
    }

    if (extract) {
      if (!archiveFile) {
        archiveFile = args.find(a => !a.startsWith('-'));
      }
      if (!archiveFile) {
        return { stdout: '', stderr: 'tar: missing archive file name', currentPath: this.currentPath };
      }
      const archiveNode = this.fs.getNodeByPath(this.currentPath, archiveFile);
      if (!archiveNode || archiveNode.type !== 'file') {
        return { stdout: '', stderr: `tar: ${archiveFile}: Cannot open: No such file or directory`, currentPath: this.currentPath };
      }

      if (archiveNode.content.startsWith('MOCK_TAR_ARCHIVE:')) {
        const targetName = archiveNode.content.replace('MOCK_TAR_ARCHIVE:', '');
        if (!this.fs.getNodeByPath(this.currentPath, targetName)) {
          this.fs.createNode(this.currentPath, targetName, 'dir');
          this.fs.createNode(this.currentPath + '/' + targetName, 'app.log', 'file', { content: 'recovered log' });
        }
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('app:filesystem-update'));
        }
      }

      return { stdout: 'extracted files', stderr: '', currentPath: this.currentPath };
    }

    return { stdout: '', stderr: 'tar: must specify -c or -x', currentPath: this.currentPath };
  }

  runChown(args) {
    if (args.length < 2) {
      return { stdout: '', stderr: 'chown: missing operand', currentPath: this.currentPath };
    }
    const ownerGroup = args[0];
    const target = args[1];

    const node = this.fs.getNodeByPath(this.currentPath, target);
    if (!node) {
      return { stdout: '', stderr: `chown: cannot access '${target}': No such file or directory`, currentPath: this.currentPath };
    }

    const parts = ownerGroup.split(':');
    node.owner = parts[0] || node.owner;
    if (parts[1]) {
      node.group = parts[1];
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('app:filesystem-update'));
    }

    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runExport(args) {
    if (args.length === 0) {
      const out = Object.keys(this.env).map(k => `declare -x ${k}="${this.env[k]}"`).join('\n');
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }
    for (const arg of args) {
      if (arg.includes('=')) {
        const parts = arg.split('=');
        const key = parts[0];
        const val = parts.slice(1).join('=').replace(/['"]/g, '');
        this.env[key] = val;
      }
    }
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runEnv(args) {
    const out = Object.keys(this.env).map(k => `${k}=${this.env[k]}`).join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runHead(args, stdin, isSudo) {
    let numLines = 10;
    const files = [];
    for (let i = 0; i < args.length; i++) {
      if (args[i] === '-n' && args[i + 1]) {
        numLines = parseInt(args[i + 1], 10) || 10;
        i++;
      } else if (args[i].startsWith('-n')) {
        numLines = parseInt(args[i].substring(2), 10) || 10;
      } else {
        files.push(args[i]);
      }
    }

    if (files.length === 0) {
      if (!stdin) return { stdout: '', stderr: '', currentPath: this.currentPath };
      const lines = stdin.split('\n').slice(0, numLines);
      return { stdout: lines.join('\n'), stderr: '', currentPath: this.currentPath };
    }

    const outputs = [];
    const errors = [];
    for (const target of files) {
      let node = this.fs.getNodeByPath(this.currentPath, target);
      if (node && node.type === 'link') {
        node = this.fs.getNodeByPath('/', node.target);
      }
      if (!node) {
        errors.push(`head: cannot open '${target}' for reading: No such file or directory`);
      } else if (node.type === 'dir') {
        errors.push(`head: error reading '${target}': Is a directory`);
      } else if (node.permissions === '000' && !isSudo) {
        errors.push(`head: cannot open '${target}' for reading: Permission denied`);
      } else {
        const fileLines = node.content.split('\n');
        const sliced = fileLines.slice(0, numLines);
        outputs.push(sliced.join('\n'));
      }
    }

    return {
      stdout: outputs.join('\n'),
      stderr: errors.join('\n'),
      currentPath: this.currentPath
    };
  }

  runTail(args, stdin, isSudo) {
    let numLines = 10;
    let follow = false;
    const files = [];
    for (let i = 0; i < args.length; i++) {
      if (args[i] === '-n' && args[i + 1]) {
        numLines = parseInt(args[i + 1], 10) || 10;
        i++;
      } else if (args[i].startsWith('-n')) {
        numLines = parseInt(args[i].substring(2), 10) || 10;
      } else if (args[i] === '-f' || args[i] === '--follow') {
        follow = true;
      } else {
        files.push(args[i]);
      }
    }

    if (follow) {
      const target = files[0] || 'stdin';
      return {
        stdout: `Jul 5 18:10:04 [INFO] Web server socket opened.\nJul 5 18:10:05 [INFO] Connection received from 192.168.1.15.\nJul 5 18:10:06 [INFO] Request GET /index.html HTTP/1.1 200.\n[Live monitoring active on ${target}. Press Ctrl+C to stop...]`,
        stderr: '',
        currentPath: this.currentPath
      };
    }

    if (files.length === 0) {
      if (!stdin) return { stdout: '', stderr: '', currentPath: this.currentPath };
      const lines = stdin.split('\n');
      const sliced = lines.slice(-numLines);
      return { stdout: sliced.join('\n'), stderr: '', currentPath: this.currentPath };
    }

    const outputs = [];
    const errors = [];
    for (const target of files) {
      let node = this.fs.getNodeByPath(this.currentPath, target);
      if (node && node.type === 'link') {
        node = this.fs.getNodeByPath('/', node.target);
      }
      if (!node) {
        errors.push(`tail: cannot open '${target}' for reading: No such file or directory`);
      } else if (node.type === 'dir') {
        errors.push(`tail: error reading '${target}': Is a directory`);
      } else if (node.permissions === '000' && !isSudo) {
        errors.push(`tail: cannot open '${target}' for reading: Permission denied`);
      } else {
        const fileLines = node.content.split('\n');
        const cleanLines = (fileLines[fileLines.length - 1] === '') ? fileLines.slice(0, -1) : fileLines;
        const sliced = cleanLines.slice(-numLines);
        outputs.push(sliced.join('\n'));
      }
    }

    return {
      stdout: outputs.join('\n'),
      stderr: errors.join('\n'),
      currentPath: this.currentPath
    };
  }

  runLess(args, stdin, isSudo) {
    if (args.length === 0 && !stdin) {
      return { stdout: '', stderr: 'less: missing filename', currentPath: this.currentPath };
    }

    let content = '';
    let targetName = 'standard input';
    if (args.length > 0) {
      const target = args[0];
      targetName = target;
      let node = this.fs.getNodeByPath(this.currentPath, target);
      if (node && node.type === 'link') {
        node = this.fs.getNodeByPath('/', node.target);
      }
      if (!node) {
        return { stdout: '', stderr: `less: ${target}: No such file or directory`, currentPath: this.currentPath };
      }
      if (node.type === 'dir') {
        return { stdout: '', stderr: `less: ${target}: Is a directory`, currentPath: this.currentPath };
      }
      if (node.permissions === '000' && !isSudo) {
        return { stdout: '', stderr: `less: ${target}: Permission denied`, currentPath: this.currentPath };
      }
      content = node.content;
    } else {
      content = stdin;
    }

    return {
      stdout: `${content}\n\n--- Page 1 of 1 ---\n[Pager: showing ${targetName} content. Press 'q' to return to terminal]`,
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runJournalctl(args, isSudo) {
    let service = null;
    let numLines = null;
    let follow = false;

    for (let i = 0; i < args.length; i++) {
      if ((args[i] === '-u' || args[i] === '--unit') && args[i + 1]) {
        service = args[i + 1];
        i++;
      } else if (args[i] === '-n' && args[i + 1]) {
        numLines = parseInt(args[i + 1], 10);
        i++;
      } else if (args[i] === '-f' || args[i] === '--follow') {
        follow = true;
      }
    }

    let logs = [
      `Jul 05 17:55:12 kernel: Booting Linux kernel version 6.8.0-35-generic...`,
      `Jul 05 17:55:14 systemd[1]: Started Journal Service.`,
      `Jul 05 17:55:15 systemd[1]: Reached target Local File Systems.`,
      `Jul 05 17:55:16 systemd[1]: Started Network Time Synchronization.`,
      `Jul 05 17:56:00 systemd[1]: Starting OpenSSH Daemon...`,
      `Jul 05 17:56:01 sshd[945]: Server listening on 0.0.0.0 port 22.`,
      `Jul 05 17:56:01 sshd[945]: Server listening on :: port 22.`,
      `Jul 05 17:56:01 systemd[1]: Started OpenSSH Daemon.`,
      `Jul 05 18:00:00 systemd[1]: Starting LSB: Apache2 web server...`,
      `Jul 05 18:00:02 apache2[1025]:  * Starting Apache httpd web server apache2`,
      `Jul 05 18:00:05 apache2[1025]:  *`,
      `Jul 05 18:00:06 systemd[1]: Started LSB: Apache2 web server.`,
      `Jul 05 18:01:00 sshd[1240]: Connection closed by authenticating user root 192.168.1.100 port 45212 [preauth]`,
      `Jul 05 18:05:12 sshd[1245]: Accepted password for learner from 192.168.1.15 port 51240 ssh2`,
      `Jul 05 18:05:12 systemd-logind[452]: New session 1 of user learner.`,
      `Jul 05 18:10:00 systemd[1]: Starting Daily Cleanup of Temporary Directories...`,
      `Jul 05 18:10:01 systemd[1]: systemd-tmpfiles-clean.service: Deactivated successfully.`,
      `Jul 05 18:10:01 systemd[1]: Finished Daily Cleanup of Temporary Directories.`
    ];

    if (service) {
      logs = logs.filter(log => log.includes(service));
      if (logs.length === 0) {
        logs = [`-- No entries for unit ${service} --`];
      }
    }

    if (numLines !== null && numLines > 0) {
      logs = logs.slice(-numLines);
    }

    if (follow) {
      logs.push(`[Live logs following active. Press Ctrl+C to exit...]`);
    }

    return {
      stdout: logs.join('\n'),
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runWhich(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    const target = args[0];
    if (this.installedPackages.has(target)) {
      const pathMap = {
        pwd: '/bin/pwd',
        whoami: '/usr/bin/whoami',
        clear: '/usr/bin/clear',
        cd: 'shell built-in',
        ls: '/bin/ls',
        grep: '/bin/grep',
        cat: '/bin/cat',
        bash: '/bin/bash'
      };
      const foundPath = pathMap[target] || `/usr/bin/${target}`;
      return { stdout: foundPath, stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runAlias(args) {
    if (!this.aliases) {
      this.aliases = {
        la: 'ls -a',
        ll: 'ls -la',
        l: 'ls -CF'
      };
    }
    if (args.length === 0) {
      const out = Object.keys(this.aliases).map(k => `alias ${k}='${this.aliases[k]}'`).join('\n');
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }
    for (const arg of args) {
      if (arg.includes('=')) {
        const parts = arg.split('=');
        const name = parts[0];
        const val = parts.slice(1).join('=').replace(/['"]/g, '');
        this.aliases[name] = val;
      } else {
        const val = this.aliases[arg];
        if (val) {
          return { stdout: `alias ${arg}='${val}'`, stderr: '', currentPath: this.currentPath };
        } else {
          return { stdout: '', stderr: `bash: alias: ${arg}: not found`, currentPath: this.currentPath };
        }
      }
    }
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runCrontab(args, stdin) {
    if (!this.crontab) {
      this.crontab = '';
    }
    let list = false;
    let edit = false;
    let filename = null;

    for (const arg of args) {
      if (arg === '-l') list = true;
      else if (arg === '-e') edit = true;
      else if (!arg.startsWith('-')) filename = arg;
    }

    if (list) {
      if (!this.crontab) {
        return { stdout: '', stderr: 'no crontab for learner', currentPath: this.currentPath };
      }
      return { stdout: this.crontab, stderr: '', currentPath: this.currentPath };
    }

    if (edit) {
      return {
        stdout: `[ crontab editor opened. Simulated update: crontab saved ]`,
        stderr: '',
        currentPath: this.currentPath
      };
    }

    if (filename) {
      const node = this.fs.getNodeByPath(this.currentPath, filename);
      if (!node) {
        return { stdout: '', stderr: `crontab: file '${filename}' does not exist`, currentPath: this.currentPath };
      }
      if (node.type !== 'file') {
        return { stdout: '', stderr: `crontab: '${filename}' is not a regular file`, currentPath: this.currentPath };
      }
      this.crontab = node.content;
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    if (stdin) {
      this.crontab = stdin;
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    return {
      stdout: '',
      stderr: 'crontab: usage error: must specify -l, -e, or a input file',
      currentPath: this.currentPath
    };
  }

  runUseradd(args, isSudo) {
    if (!isSudo) {
      return { stdout: '', stderr: 'useradd: Permission denied.', currentPath: this.currentPath };
    }
    if (args.length === 0) {
      return { stdout: '', stderr: 'useradd: missing username operand', currentPath: this.currentPath };
    }
    const username = args[args.length - 1];
    
    let passwdNode = this.fs.getNodeByPath('/etc', 'passwd');
    if (!passwdNode) {
      passwdNode = this.fs.createNode('/etc', 'passwd', 'file', {
        content: 'root:x:0:0:root:/root:/bin/bash\nlearner:x:1000:1000:learner:/home/learner:/bin/bash\n',
        permissions: '644',
        owner: 'root',
        group: 'root'
      });
    }
    
    if (passwdNode.content.includes(`${username}:`)) {
      return { stdout: '', stderr: `useradd: user '${username}' already exists`, currentPath: this.currentPath };
    }

    passwdNode.content += `${username}:x:1001:1001::/home/${username}:/bin/bash\n`;
    
    if (!this.fs.getNodeByPath('/home', username)) {
      this.fs.createNode('/home', username, 'dir', {
        permissions: '755',
        owner: username,
        group: username
      });
    }

    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runPasswd(args, isSudo) {
    if (args.length === 0) {
      return {
        stdout: `Changing password for learner.\nCurrent password: \nNew password: \nRetype new password: \npasswd: password updated successfully`,
        stderr: '',
        currentPath: this.currentPath
      };
    }
    const username = args[0];
    if (!isSudo && username !== 'learner') {
      return { stdout: '', stderr: 'passwd: You may not view or modify password information for other users.', currentPath: this.currentPath };
    }
    return {
      stdout: `New password: \nRetype new password: \npasswd: password updated successfully for ${username}`,
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runSu(args) {
    const targetUser = args[0] || 'root';
    if (targetUser === 'deployer') {
      const passwdNode = this.fs.getNodeByPath('/etc', 'passwd');
      if (!passwdNode || !passwdNode.content.includes('deployer:')) {
        return { stdout: '', stderr: 'su: user deployer does not exist', currentPath: this.currentPath };
      }
      this.env.USER = 'deployer';
      this.env.HOME = '/home/deployer';
      this.currentPath = '/home/deployer';
      return {
        stdout: `Password: \nWelcome to the deployer account.`,
        stderr: '',
        currentPath: this.currentPath
      };
    } else if (targetUser === 'root' || targetUser === '-') {
      this.env.USER = 'root';
      this.env.HOME = '/root';
      this.currentPath = '/root';
      return {
        stdout: `Password: \nWelcome to the superuser root account.`,
        stderr: '',
        currentPath: this.currentPath
      };
    } else if (targetUser === 'learner') {
      this.env.USER = 'learner';
      this.env.HOME = '/home/learner';
      this.currentPath = '/home/learner';
      return {
        stdout: `Password: \nReturned to learner account.`,
        stderr: '',
        currentPath: this.currentPath
      };
    }
    return { stdout: '', stderr: `su: user ${targetUser} does not exist`, currentPath: this.currentPath };
  }

  runSsh(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'ssh: missing hostname or destination address', currentPath: this.currentPath };
    }
    const destination = args[args.length - 1];
    return {
      stdout: `The authenticity of host '${destination} (${destination})' can't be established.\nECDSA key fingerprint is SHA256:abc123xyz987qwe...\nAre you sure you want to continue connecting (yes/no)? yes\nWarning: Permanently added '${destination}' (ECDSA) to the list of known hosts.\nConnection to ${destination} established.\nWelcome to remote-host!\nLast login: Sun Jul  5 18:05:12 2026 from 192.168.1.15\n\n[Remote session active. Type exit to close connection]\nConnection closed by remote host.`,
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runScp(args) {
    if (args.length < 2) {
      return { stdout: '', stderr: 'scp: missing file operand or destination', currentPath: this.currentPath };
    }
    const src = args[0];
    const dest = args[1];

    const srcNode = this.fs.getNodeByPath(this.currentPath, src);
    if (!srcNode) {
      return { stdout: '', stderr: `scp: ${src}: No such file or directory`, currentPath: this.currentPath };
    }

    return {
      stdout: `Sending file...\n${src}              100%   12KB  12.0KB/s   00:01\nTransfer completed successfully.`,
      stderr: '',
      currentPath: this.currentPath
    };
  }
}
