import { splitCommands } from "./shellSyntax.js";
// BashQuest Progressive Linux Lessons & Verifications

export const modules = [
  { id: 'basics', title: '1. Filesystem Basics' },
  { id: 'manipulation', title: '2. File Manipulation' },
  { id: 'plumbing', title: '3. Pipes & Filtering' },
  { id: 'advanced', title: '4. Redirection & Security' },
  { id: 'system', title: '5. Superuser & Packages' },
  { id: 'resources', title: '6. Disk & System Resources' },
  { id: 'processes', title: '7. Process Management' },
  { id: 'networking', title: '8. Network Troubleshooting' },
  { id: 'searching', title: '9. Finding Files & Search' },
  { id: 'services', title: '10. Services & Systemd' },
  { id: 'editing', title: '11. Terminal Text Editing' },
  { id: 'scripting', title: '12. Shell Scripting & Automation' },
  { id: 'processing', title: '13. Advanced Text Processing' },
  { id: 'env_admin', title: '14. Environment & Shell Config' },
  { id: 'archiving', title: '15. Archiving, Backups & Checksums' },
  { id: 'remote_users', title: '16. Remote Access & User Admin' },
  { id: 'devops', title: '17. Git & Linux Containers' }
];

/**
 * Parse a command invocation string into command segments (supporting pipelines and redirects).
 * Splits short flags (e.g. -la -> 'l', 'a'), preserves long flags (e.g. --parents),
 * supports flag arguments, and provides helper query methods.
 */
export function parseCommandLine(cmdStr) {
  if (!cmdStr || typeof cmdStr !== 'string') return [];
  const segments = [];
  const pipeParts = splitCommands(cmdStr);
  for (const part of pipeParts) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const tokens = [];
    const tokenRegex = /[^\s"']+|"([^"]*)"|'([^']*)'/g;
    let match;
    while ((match = tokenRegex.exec(trimmed)) !== null) {
      if (match[1] !== undefined) tokens.push(match[1]);
      else if (match[2] !== undefined) tokens.push(match[2]);
      else tokens.push(match[0]);
    }
    if (tokens.length === 0) continue;
    let isSudo = false;
    let cmdIdx = 0;
    if (tokens[cmdIdx] === 'sudo') {
      isSudo = true;
      cmdIdx++;
    }
    const cmdName = tokens[cmdIdx] || '';
    const rawArgs = tokens.slice(cmdIdx + 1);
    const flags = new Set();
    const args = [];
    for (let i = 0; i < rawArgs.length; i++) {
      const arg = rawArgs[i];
      if (arg === '>' || arg === '>>' || arg === '<' || arg === '2>' || arg === '2>>' || arg === '&>' || arg === '&>>' || arg === '2>&1' || arg.startsWith('<<')) {
        args.push(arg);
      } else if (arg.startsWith('--')) {
        flags.add(arg.slice(2));
        flags.add(arg);
      } else if (arg.startsWith('-') && arg.length > 1) {
        if (/^-\d+$/.test(arg)) {
          flags.add(arg);
          args.push(arg);
        } else {
          for (let c = 1; c < arg.length; c++) flags.add(arg[c]);
          flags.add(arg);
        }
      } else if (cmdName === 'ps' && /^[auxefl]+$/i.test(arg)) {
        for (const ch of arg) flags.add(ch);
        flags.add(arg);
      } else if (cmdName === 'tar' && /^[czvxfjJ]+$/i.test(arg)) {
        for (const ch of arg) flags.add(ch);
        flags.add(arg);
      } else {
        args.push(arg);
      }
    }
    segments.push({
      raw: trimmed,
      command: cmdName,
      isSudo,
      flags,
      args,
      hasFlag: (...fList) => fList.every(f => flags.has(f) || (f.startsWith('-') && flags.has(f.replace(/^-+/, '')))),
      hasAnyFlag: (...fList) => fList.some(f => flags.has(f) || (f.startsWith('-') && flags.has(f.replace(/^-+/, '')))),
      hasArg: (pattern) => args.some(a => typeof pattern === 'string' ? a === pattern || a.includes(pattern) : pattern.test(a))
    });
  }
  return segments;
}

export function hasCommandInHistory(history, matchFn) {
  if (!Array.isArray(history)) return false;
  return history.some(entry => {
    const segments = parseCommandLine(entry);
    return segments.some(seg => matchFn(seg, entry));
  });
}

const baseLessons = [
  {
    id: 1,
    moduleId: 'basics',
    title: 'Who Am I and Where Am I?',
    xp: 100,
    badge: 'Explorer',
    description: 'Imagine walking into a massive, dark library with millions of books, but you have no map, and you can\'t even remember your own name tag. Before you can look up anything, you need to know who you are and where you are standing. In the Linux shell, we start with the exact same questions!\n\n- The `whoami` command prints the username you are currently logged in as.\n- The `pwd` (print working directory) command acts like a GPS, showing you the exact folder path where you are currently standing.',
    instructions: 'Let\'s find our bearings! First, run `whoami` to see your active username, and then run `pwd` to print your current folder location in the filesystem.',
    commandHelp: [
      { cmd: 'whoami', desc: 'Prints active username' },
      { cmd: 'pwd', desc: 'Prints current working directory' }
    ],
    objectives: [
      { id: 'ran_whoami', text: 'Run the "whoami" command' },
      { id: 'ran_pwd', text: 'Run the "pwd" command' }
    ],
    hints: [
      "Check which commands you need to run to identify your user and path.",
      "The 'whoami' command shows your username, and 'pwd' shows your current path.",
      "Try running: whoami, and then pwd"
    ],
    verify: (_fs, _session, history) => {
      const ranWhoami = hasCommandInHistory(history, c => c.command === 'whoami');
      const ranPwd = hasCommandInHistory(history, c => c.command === 'pwd');
      return {
        success: ranWhoami && ranPwd,
        checks: [
          { id: 'ran_whoami', passed: ranWhoami },
          { id: 'ran_pwd', passed: ranPwd }
        ]
      };
    }
  },
  {
    id: 2,
    moduleId: 'basics',
    title: 'Navigating & Listing Files',
    xp: 120,
    badge: 'Navigator',
    description: 'Now that you know where you are, how do you look around and move to a different room in this digital library? In Linux, we do this using two simple commands:\n\n- `ls`: It\'s like turning on the lights in a room to see all the files and folders sitting inside it.\n- `cd <path>`: Short for "change directory", this lets you walk through a door into another folder.\n\nTo specify where you want to go, you can use **absolute** paths (starting from the very root `/` of the system, like `/var/log`) or **relative** paths (based on where you are right now, like using `..` to step back out into the parent folder).',
    instructions: 'Let\'s explore. Step into the `/var/log` folder by running `cd /var/log`, and then run the `ls` command to see the log files stored inside.',
    commandHelp: [
      { cmd: 'ls', desc: 'Lists files in the current directory' },
      { cmd: 'cd /var/log', desc: 'Change directory to /var/log' }
    ],
    objectives: [
      { id: 'in_var_log', text: 'Change directory to /var/log' },
      { id: 'ran_ls', text: 'Run the "ls" command in /var/log' }
    ],
    hints: [
      "Think about how to navigate and list files in a specific directory.",
      "Change directory to /var/log using cd, then use ls.",
      "Try running: cd /var/log, and then ls"
    ],
    verify: (_fs, session, history) => {
      let path = '/home/learner';
      let visitedVarLog = false;
      let ranLsInVarLog = false;
      for (const cmd of history) {
        const parts = cmd.trim().split(/\s+/);
        if (parts[0] === 'cd') {
          const target = parts[1] || '~';
          if (target === '~' || target === '/home/learner') {
            path = '/home/learner';
          } else if (target === '/var/log' || (target === 'log' && path === '/var')) {
            path = '/var/log';
          } else if (target === '..') {
            const segs = path.split('/').filter(Boolean);
            segs.pop();
            path = '/' + segs.join('/');
          } else if (target.startsWith('/')) {
            path = target;
          } else {
            path = path + (path === '/' ? '' : '/') + target;
          }
        }
        if (path === '/var/log') {
          visitedVarLog = true;
        }
        if (parts.includes('ls')) {
          if (path === '/var/log' || parts.includes('/var/log')) {
            ranLsInVarLog = true;
          }
        }
      }
      const inVarLog = visitedVarLog || session.currentPath === '/var/log';
      const ranLs = ranLsInVarLog || history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('ls') && (parts.includes('/var/log') || session.currentPath === '/var/log');
      });
      return {
        success: inVarLog && ranLs,
        checks: [
          { id: 'in_var_log', passed: inVarLog },
          { id: 'ran_ls', passed: ranLs }
        ]
      };
    }
  },
  {
    id: 148,
    moduleId: 'basics',
    title: 'Listing Detailed Information',
    xp: 130,
    badge: 'Detailer',
    description: 'A standard `ls` lists only the names of files, giving you no indication of how large they are, who owns them, or when they were last modified. In Linux, we inspect detailed file metadata using the long listing option:\n\n- The `-l` (long) option shows permissions, link counts, file owner, group, exact size in bytes, and last modification date.\n- The `-h` (human-readable) option, when combined with `-l` as `ls -lh`, translates raw byte counts into intuitive units like `K` (kilobytes), `M` (megabytes), and `G` (gigabytes).',
    instructions: 'Let\'s inspect file details. First, run `ls -l` to see the full permissions, owners, and byte sizes of files in your directory. Then, run `ls -lh` to view the file sizes in human-readable units.',
    commandHelp: [
      { cmd: 'ls -l', desc: 'List files in detailed long format' },
      { cmd: 'ls -lh', desc: 'List files in human-readable long format (K, M, G)' }
    ],
    objectives: [
      { id: 'ran_ls_l', text: 'Run the "ls -l" command' },
      { id: 'ran_ls_lh', text: 'Run the "ls -lh" command' }
    ],
    hints: [
      "Use 'ls -l' to view file permissions, owner, and byte size.",
      "Add the -h flag (ls -lh) to convert byte sizes into human-readable units like K or M.",
      "Try running: ls -l, and then ls -lh"
    ],
    verify: (_fs, _session, history) => {
      const ranLsL = hasCommandInHistory(history, seg => seg.command === 'ls' && (seg.hasFlag('l') || seg.hasArg('-l') || seg.args.some(a => a.startsWith('-') && a.includes('l'))));
      const ranLsLh = hasCommandInHistory(history, seg => seg.command === 'ls' && (seg.hasFlag('h') || seg.hasArg('-lh') || seg.args.some(a => a.startsWith('-') && a.includes('h'))));
      return {
        success: Boolean(ranLsL && ranLsLh),
        checks: [
          { id: 'ran_ls_l', passed: Boolean(ranLsL) },
          { id: 'ran_ls_lh', passed: Boolean(ranLsLh) }
        ]
      };
    }
  },
  {
    id: 3,
    moduleId: 'basics',
    title: 'Creating Directories',
    xp: 150,
    badge: 'Builder',
    description: 'Imagine your desk is piled high with loose papers, and you need physical folders to keep things tidy. In Linux, we organize files by creating folders (directories) using the `mkdir` (make directory) command.\n\nRunning `mkdir code` creates a brand-new folder named "code" right where you are. You can create folders anywhere in the filesystem by giving `mkdir` a relative or absolute path.',
    instructions: 'Let\'s build a workspace. Go back to your home directory by running `cd ~` (or `cd /home/learner`), then create a new folder named `projects` inside it.',
    commandHelp: [
      { cmd: 'cd ~', desc: 'Go back to home directory' },
      { cmd: 'mkdir projects', desc: 'Create projects folder' }
    ],
    objectives: [
      { id: 'in_home', text: 'Be in your home folder (/home/learner)' },
      { id: 'used_mkdir', text: 'Use the "mkdir" command' },
      { id: 'dir_exists', text: 'Create a directory named "projects"' }
    ],
    hints: [
      "Ensure you are in the correct starting directory first.",
      "Go to your home directory (~ or /home/learner) and use the mkdir command.",
      "Try running: cd ~ followed by mkdir projects"
    ],
    verify: (fs, session, history) => {
      let path = '/home/learner';
      let wasInHome = true;
      for (const cmd of history) {
        const parts = cmd.trim().split(/\s+/);
        if (parts[0] === 'cd') {
          const target = parts[1] || '~';
          if (target === '~' || target === '/home/learner') {
            path = '/home/learner';
          } else if (target === '..') {
            const segs = path.split('/').filter(Boolean);
            segs.pop();
            path = '/' + segs.join('/');
          } else if (target.startsWith('/')) {
            path = target;
          } else {
            path = path + (path === '/' ? '' : '/') + target;
          }
        }
        if (path === '/home/learner') {
          wasInHome = true;
        }
      }
      const inHome = wasInHome || (session && session.currentPath === '/home/learner');
      const node = fs.getNodeByPath('/home/learner', 'projects');
      const dirExists = Boolean(node && node.type === 'dir');
      const usedMkdir = Boolean(dirExists || hasCommandInHistory(history, seg => seg.command === 'mkdir'));

      return {
        success: Boolean(inHome && usedMkdir && dirExists),
        checks: [
          { id: 'in_home', passed: Boolean(inHome) },
          { id: 'used_mkdir', passed: Boolean(usedMkdir) },
          { id: 'dir_exists', passed: Boolean(dirExists) }
        ]
      };
    }
  },
  {
    id: 4,
    moduleId: 'basics',
    title: 'Nested Directories & Options',
    xp: 160,
    badge: 'Architect',
    description: 'Imagine trying to build a set of nesting dolls, but you have to build the outermost ones before you can build the tiny one inside. By default, `mkdir` is like that—it refuses to create a folder deep inside folders that don\'t exist yet. To skip the hassle of creating folders one-by-one, we use a switch:\n\n- The `-p` (or `--parents`) option tells `mkdir` to automatically build any missing parent folders on its way to the final folder. For example, `mkdir -p workspace/src/utils` creates `workspace`, `workspace/src`, and `workspace/src/utils` all in a single command.\n\n**Why this matters**: If you run `mkdir workspace/src/utils` without `-p`, and `workspace` and `workspace/src` don\'t already exist, you\'ll get: `mkdir: cannot create directory \'workspace/src/utils\': No such file or directory`. The `-p` flag fixes this by creating all missing parent folders automatically.',
    instructions: 'Let\'s build a deep folder structure. Create a nested path `workspace/src/utils` in your home folder using `mkdir -p workspace/src/utils`.',
    commandHelp: [
      { cmd: 'mkdir -p path', desc: 'Create nested directories and parent directories' }
    ],
    objectives: [
      { id: 'nested_dir_exists', text: 'Create nested directory workspace/src/utils' },
      { id: 'used_p_switch', text: 'Use the -p or --parents switch in mkdir' }
    ],
    hints: [
      "Look for a mkdir flag that creates parent directories automatically if they don't exist.",
      "Use mkdir with the -p switch to create nested folders.",
      "Try running: mkdir -p workspace/src/utils"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner/workspace/src', 'utils') || fs.getNodeByPath('/home/learner', 'workspace/src/utils');
      const nestedDirExists = Boolean(node && node.type === 'dir');
      const usedPSwitch = Boolean(nestedDirExists || hasCommandInHistory(history, seg => seg.command === 'mkdir' && seg.hasAnyFlag('p', 'parents')));

      return {
        success: Boolean(nestedDirExists && usedPSwitch),
        checks: [
          { id: 'nested_dir_exists', passed: Boolean(nestedDirExists) },
          { id: 'used_p_switch', passed: Boolean(usedPSwitch) }
        ]
      };
    }
  },
  {
    id: 101,
    moduleId: 'basics',
    title: 'Visualizing Directory Trees (tree)',
    xp: 150,
    badge: 'Tree Navigator',
    description: 'When navigating complex project directories, flat listings from `ls` make it difficult to visualize nested structures. The `tree` command recursively lists directory contents in a clear, tree-like ASCII visual hierarchy with branch lines showing directory nesting.\n\nIn large repositories, a full recursive tree can produce thousands of lines. To keep output manageable, use the `-L <level>` switch (e.g., `tree -L 2`) to restrict visualization depth to a specific number of directory levels.',
    instructions: 'Visualize your directory hierarchy! First run `tree` to view the full directory tree starting from your current directory, then run `tree -L 2` to constrain the tree view to 2 levels of depth.',
    commandHelp: [
      { cmd: 'tree', desc: 'Display directory structure as a visual tree' },
      { cmd: 'tree -L 2', desc: 'Constrain directory tree depth to 2 levels' }
    ],
    objectives: [
      { id: 'ran_tree', text: 'Run the "tree" command' },
      { id: 'ran_tree_l', text: 'Run "tree -L 2" to constrain tree depth' }
    ],
    hints: [
      "Run 'tree' to render the visual tree of your current folder.",
      "Add the -L flag to control depth: tree -L 2",
      "Try running: tree and then tree -L 2"
    ],
    verify: (_fs, _session, history) => {
      const ranTree = hasCommandInHistory(history, seg => seg.command === 'tree');
      const ranTreeL = hasCommandInHistory(history, seg => seg.command === 'tree' && (seg.hasFlag('L') || seg.hasArg('-L') || seg.args.includes('2')));
      return {
        success: Boolean(ranTree && ranTreeL),
        checks: [
          { id: 'ran_tree', passed: Boolean(ranTree) },
          { id: 'ran_tree_l', passed: Boolean(ranTreeL) }
        ]
      };
    }
  },
  {
    id: 83,
    moduleId: 'basics',
    title: 'Linux Directory Structure & FHS',
    xp: 130,
    badge: 'Architect',
    description: 'Every Linux system follows a standard filesystem hierarchy starting from the root directory `/`. Unlike Windows (which uses drive letters like `C:` or `D:`), Linux unifies all files and storage under `/`.\n\nHere are key system directories every Linux user should know:\n- `/` (Root): The top-level parent folder of the entire system.\n- `/etc`: Holds system configurations (e.g. `/etc/hosts`, `/etc/passwd`).\n- `/var`: Holds variable data that changes over time (logs, spool, caches like `/var/log`).\n- `/home`: User personal folders (e.g. `/home/learner`).\n- `/tmp`: Temporary storage area for transient files.\n- `/usr`: User utilities, applications, and system libraries.',
    instructions: 'Let\'s explore the system layout! First, navigate to the root directory by running `cd /`. Then run `ls /etc` to view system configuration files stored inside `/etc`.',
    commandHelp: [
      { cmd: 'cd /', desc: 'Navigate to root directory' },
      { cmd: 'ls /etc', desc: 'List configuration files in /etc' }
    ],
    objectives: [
      { id: 'visited_root', text: 'Navigate to the root directory (/)' },
      { id: 'listed_etc', text: 'List contents of /etc directory' }
    ],
    hints: [
      "Use 'cd /' to jump to the root directory.",
      "Use 'ls /etc' to view configuration files inside /etc.",
      "Try running: cd / and then: ls /etc"
    ],
    verify: (_fs, session, history) => {
      let visitedRoot = false;
      let listedEtc = false;
      let path = '/home/learner';

      for (const cmd of history) {
        const parts = cmd.trim().split(/\s+/);
        if (parts[0] === 'cd') {
          const target = parts[1] || '~';
          if (target === '~' || target === '/home/learner') {
            path = '/home/learner';
          } else if (target === '/') {
            path = '/';
          } else if (target === '/etc' || (target === 'etc' && path === '/')) {
            path = '/etc';
          } else if (target === '/var/log' || (target === 'log' && path === '/var')) {
            path = '/var/log';
          } else if (target === '..') {
            const segs = path.split('/').filter(Boolean);
            segs.pop();
            path = '/' + segs.join('/');
          } else if (target.startsWith('/')) {
            path = target;
          } else {
            path = path + (path === '/' ? '' : '/') + target;
          }
        }

        if (path === '/') {
          visitedRoot = true;
        }

        if (parts.includes('ls')) {
          if (parts.includes('/etc') || (parts.includes('etc') && path === '/') || path === '/etc') {
            listedEtc = true;
          }
        }
      }

      const inRoot = visitedRoot || session.currentPath === '/';
      const ranLsEtc = listedEtc || history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('ls') && (parts.includes('/etc') || (parts.includes('etc') && session.currentPath === '/'));
      });

      return {
        success: inRoot && ranLsEtc,
        checks: [
          { id: 'visited_root', passed: inRoot },
          { id: 'listed_etc', passed: ranLsEtc }
        ]
      };
    }
  },
  {
    id: 100,
    moduleId: 'basics',
    title: 'Inspecting File Types & Metadata (file & stat)',
    xp: 140,
    badge: 'Inspector',
    description: 'In Linux, file extensions (like `.txt` or `.png`) are merely hints for humans—the operating system does not rely on them. To identify what a file truly contains, the `file` command reads the file\'s binary header (magic bytes) and determines its actual format (ASCII text, ELF executable, gzip archive, etc.).\n\nTo inspect deep filesystem metadata beyond what `ls -l` shows, the `stat` command displays the file\'s exact size in bytes, allocated blocks, filesystem inode number, octal access permissions (e.g. `0644`), and exact timestamps: Access (`atime`), Modify (`mtime`), and Change (`ctime`).',
    instructions: 'Inspect the type and metadata of `/home/learner/notes.txt`. First run `file notes.txt` to detect its file format, then run `stat notes.txt` to view its inode, size, octal permissions, and timestamps.',
    commandHelp: [
      { cmd: 'file notes.txt', desc: 'Detect file format and MIME encoding' },
      { cmd: 'stat notes.txt', desc: 'Display inode, octal permissions, and timestamps' }
    ],
    objectives: [
      { id: 'ran_file', text: 'Run the "file" command on notes.txt' },
      { id: 'ran_stat', text: 'Run the "stat" command on notes.txt' }
    ],
    hints: [
      "Use 'file notes.txt' to identify the file's format.",
      "Use 'stat notes.txt' to display its inode, octal permissions, and timestamps.",
      "Try running: file notes.txt, and then stat notes.txt"
    ],
    verify: (_fs, _session, history) => {
      const ranFile = hasCommandInHistory(history, seg => seg.command === 'file' && (seg.hasArg('notes.txt') || seg.args.length > 0));
      const ranStat = hasCommandInHistory(history, seg => seg.command === 'stat' && (seg.hasArg('notes.txt') || seg.args.length > 0));
      return {
        success: Boolean(ranFile && ranStat),
        checks: [
          { id: 'ran_file', passed: Boolean(ranFile) },
          { id: 'ran_stat', passed: Boolean(ranStat) }
        ]
      };
    }
  },
  {
    id: 5,
    moduleId: 'basics',
    title: 'Clearing the Screen',
    xp: 100,
    badge: 'Neat-Freak',
    description: 'Ever get overwhelmed when your desk is covered in messy notes and papers? Your terminal can get just as cluttered. When it does, you can sweep all the old text away and start fresh.\n\n- The `clear` command wipes the visible screen clean, sliding previous output out of view so you have a fresh, blank canvas at the top of the terminal.',
    instructions: 'Give yourself some breathing room! Run `clear` to sweep the screen clean.',
    commandHelp: [
      { cmd: 'clear', desc: 'Clear the terminal screen' }
    ],
    objectives: [
      { id: 'ran_clear', text: 'Run the "clear" command' }
    ],
    hints: [
      "Sweep all the old text away and start fresh.",
      "Run the command that clears the terminal screen.",
      "Try running: clear"
    ],
    verify: (_fs, _session, history) => {
      const ranClear = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('clear');
      });
      return {
        success: ranClear,
        checks: [
          { id: 'ran_clear', passed: ranClear }
        ]
      };
    }
  },
  {
    id: 6,
    moduleId: 'basics',
    title: 'Finding Shell Help',
    xp: 100,
    badge: 'Helpful',
    description: 'When exploring the terminal, you often need a built-in reference for available tools and syntax capabilities. In our terminal emulator, you have a built-in cheat sheet!\n\n- The `help` command lists all supported simulator commands.\n- It also details input/output redirections (`>` overwrite, `>>` append, `2>` stderr, `2>&1 / &>` combined streams) and pipe (`|`) chaining capabilities.',
    instructions: 'Let\'s inspect the rulebook. Run `help` to list all supported simulator commands and stream redirection/piping capabilities.',
    commandHelp: [
      { cmd: 'help', desc: 'List all supported commands, pipes, and redirection capabilities' }
    ],
    objectives: [
      { id: 'ran_help', text: 'Run the "help" command' }
    ],
    hints: [
      "Review the instructions to find the appropriate command for rulebook and simulator help.",
      "Use the 'help' command.",
      "Try running: help"
    ],
    verify: (_fs, _session, history) => {
      const ranHelp = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('help');
      });
      return {
        success: ranHelp,
        checks: [
          { id: 'ran_help', passed: ranHelp }
        ]
      };
    }
  },
  {
    id: 7,
    moduleId: 'manipulation',
    title: 'Creating Empty Files',
    xp: 150,
    badge: 'Creator',
    description: 'Imagine wanting to start writing a new journal entry, but first you need a blank piece of paper. In Linux, we grab a fresh, empty text file using the `touch` command.\n\n- The `touch` command creates a brand new, empty file if it doesn\'t exist yet (like running `touch draft.txt` to create `draft.txt`). If the file already exists, it simply updates the file\'s "last modified" timestamp without changing its contents. Let\'s put a file in our new projects folder.',
    instructions: 'Let\'s create a blank slate. Create an empty file named `task.txt` inside the `projects` folder (either enter the folder first or use `touch projects/task.txt`).',
    commandHelp: [
      { cmd: 'cd projects', desc: 'Enter the projects folder' },
      { cmd: 'touch task.txt', desc: 'Create file task.txt' }
    ],
    objectives: [
      { id: 'used_touch', text: 'Use the "touch" command' },
      { id: 'file_exists', text: 'Create file "task.txt" inside "projects"' }
    ],
    hints: [
      "Think about which command creates a new empty file.",
      "Use the 'touch' command inside the 'projects' directory.",
      "Try running: touch projects/task.txt"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner/projects', 'task.txt') || fs.getNodeByPath('/home/learner', 'projects/task.txt');
      const fileExists = Boolean(node && node.type === 'file');
      const usedTouch = Boolean(fileExists || hasCommandInHistory(history, seg => seg.command === 'touch'));

      return {
        success: Boolean(usedTouch && fileExists),
        checks: [
          { id: 'used_touch', passed: Boolean(usedTouch) },
          { id: 'file_exists', passed: Boolean(fileExists) }
        ]
      };
    }
  },
  {
    id: 8,
    moduleId: 'manipulation',
    title: 'Reading File Contents',
    xp: 150,
    badge: 'Reader',
    description: 'Think of opening a folder, pulling out a page of text, and holding it up to read. In Linux, we read files instantly without opening a heavy text editor using the `cat` (concatenate) command.\n\n- The `cat` command prints the entire contents of a file directly onto your terminal screen. For instance, running `cat notes.txt` lets you see what is written inside `notes.txt` right away.',
    instructions: 'Let\'s read a system file. Print the contents of the local network configuration file at `/etc/hosts` by running `cat /etc/hosts`.',
    commandHelp: [
      { cmd: 'cat /etc/hosts', desc: 'Print hosts file content' }
    ],
    objectives: [
      { id: 'cat_hosts', text: 'Run the "cat" command on /etc/hosts' }
    ],
    hints: [
      "Think about which command outputs/displays the contents of a file.",
      "Use the 'cat' command on the file /etc/hosts.",
      "Try running: cat /etc/hosts"
    ],
    verify: (_fs, _session, history) => {
      const catHosts = history.some(cmd => {
        const trimmed = cmd.trim();
        return trimmed.startsWith('cat ') && (trimmed.includes('/etc/hosts') || trimmed.includes('etc/hosts'));
      });

      return {
        success: catHosts,
        checks: [
          { id: 'cat_hosts', passed: catHosts }
        ]
      };
    }
  },
  {
    id: 51,
    moduleId: 'manipulation',
    title: 'Peeking at Files (head & tail)',
    xp: 180,
    badge: 'Peeker',
    description: 'Now that you can read a whole file with `cat`, what if the file has thousands of lines and you only want to see the top or bottom? Dumping a huge file with `cat` floods your screen. Instead, we use `head` and `tail` to peek at the edges.\n\n- The `head` command displays the first 10 lines of a file by default. You can change this using `-n <number>` (e.g. `head -n 5 logs/app.log` for the first 5 lines).\n- The `tail` command displays the last 10 lines by default, supporting the same `-n` option (e.g. `tail -n 2 logs.txt` to view the last 2 lines of a file).\n- Crucially, `tail -f logs.txt` (follow) monitors a file in real-time, showing new lines as they are written by the system. This is a sysadmin\'s favorite tool for watching live logs.',
    instructions: 'Let\'s inspect the logs. Use `tail -n 2 logs.txt` (or `head -n 5 logs/app.log` / `tail -n 3 logs/security.log`) to view file lines, and run `tail -f logs.txt` to simulate real-time log monitoring (it will print mock entries and exit).',
    commandHelp: [
      { cmd: 'tail -n 2 logs.txt', desc: 'Display last 2 lines of logs.txt' },
      { cmd: 'tail -f logs.txt', desc: 'Monitor logs.txt updates in real-time' },
      { cmd: 'head -n 5 logs/app.log', desc: 'Display first 5 lines of app.log' },
      { cmd: 'tail -n 3 logs/security.log', desc: 'Display last 3 lines of security.log' }
    ],
    objectives: [
      { id: 'used_tail_n', text: 'Run tail with -n (e.g. tail -n 2 logs.txt)' },
      { id: 'used_tail_f', text: 'Run tail with -f (e.g. tail -f logs.txt)' }
    ],
    hints: [
      "Use 'tail -n 2 logs.txt' to view the last 2 lines of logs.txt.",
      "To follow live logs, add the -f option: 'tail -f logs.txt'.",
      "Try running: tail -n 2 logs.txt, then tail -f logs.txt"
    ],
    verify: (_fs, _session, history) => {
      const ranTailN = hasCommandInHistory(history, seg => seg.command === 'tail' && (seg.hasFlag('n') || seg.flags.has('-n') || seg.hasArg('-n') || seg.args.some(a => /^-\d+$/.test(a) || a === '2' || a === '3')));
      const ranHead = hasCommandInHistory(history, seg => seg.command === 'head');
      const ranTailF = hasCommandInHistory(history, seg => seg.command === 'tail' && seg.hasAnyFlag('f', 'follow'));
      const tailPassed = Boolean(ranTailN || ranHead);
      const tailFPassed = Boolean(ranTailF);
      return {
        success: Boolean(tailPassed && tailFPassed),
        checks: [
          { id: 'used_tail_n', passed: tailPassed },
          { id: 'used_tail_f', passed: tailFPassed }
        ]
      };
    }
  },
  {
    id: 52,
    moduleId: 'manipulation',
    title: 'Paging Through Large Files',
    xp: 150,
    badge: 'Pager',
    description: 'Peeking at the top and bottom of a file with `head` and `tail` is great, but what if you need to browse a long configuration file page-by-page? That\'s what pagers like `less` and `more` are for.\n\n- Pagers load files interactively, showing one page of text at a time to prevent system slowdowns on large files.\n- `less logs.txt` is the modern choice, allowing you to scroll both forward and backward using the arrow keys, search text with `/`, and exit by pressing `q`.\n- `more logs.txt` is an older, simpler pager that only scrolls forward.',
    instructions: 'Let\'s read a long file page-by-page. Run `less logs.txt` or `more logs.txt` (or `/etc/hosts`) to open it in a scrolling view. (In our terminal, this will output the contents in a scrollable frame. Press `q` to return).',
    commandHelp: [
      { cmd: 'less logs.txt', desc: 'Open logs.txt in the less pager' },
      { cmd: 'more logs.txt', desc: 'Open logs.txt in the more pager' },
      { cmd: 'less /etc/hosts', desc: 'Open hosts file in the less pager' },
      { cmd: 'more /etc/hosts', desc: 'Open hosts file in the more pager' }
    ],
    objectives: [
      { id: 'used_less', text: 'Open logs.txt or /etc/hosts in a pager (less or more)' }
    ],
    hints: [
      "Use the 'less' or 'more' command on logs.txt or /etc/hosts.",
      "Try running: less logs.txt or more logs.txt"
    ],
    verify: (_fs, _session, history) => {
      const ranPager = history.some(cmd => {
        const trimmed = cmd.trim();
        return (trimmed.startsWith('less ') || trimmed.startsWith('more '));
      });
      return {
        success: ranPager,
        checks: [
          { id: 'used_less', passed: ranPager }
        ]
      };
    }
  },
  {
    id: 9,
    moduleId: 'manipulation',
    title: 'Handling Spaces in File Names',
    xp: 170,
    badge: 'Quoter',
    description: 'If you tell a robot to "paint my bedroom blue", it needs to know whether "my bedroom" is a single place or if "my" and "bedroom" are two different instructions. Linux uses spaces to separate commands from their arguments. So if you run `mkdir my folder`, Linux thinks you want to create two separate folders: one named "my" and another named "folder"!\n\n- To tell Linux that a name with spaces is a single item, we must wrap it in quotes (`"my folder"` or `\'my folder\'`) or use a backslash to escape the space (`my\\ folder`).',
    instructions: 'Let\'s handle names with spaces. Create a folder named `"my code"` in your home directory, and then create an empty file named `"my task"` inside it.',
    commandHelp: [
      { cmd: 'mkdir "my code"', desc: 'Create a folder with a space in the name' },
      { cmd: 'touch "my code/my task"', desc: 'Create a file with a space in the name' }
    ],
    objectives: [
      { id: 'dir_with_space_exists', text: 'Create directory "my code"' },
      { id: 'file_with_space_exists', text: 'Create file "my task" inside "my code"' }
    ],
    hints: [
      "When creating files or directories with spaces in their names, wrap the name in quotes.",
      "Use mkdir \"my code\" followed by touch \"my code/my task\".",
      "Try running: mkdir \"my code\" and touch \"my code/my task\""
    ],
    verify: (fs, _session, _history) => {
      const dirNode = fs.getNodeByPath('/home/learner', 'my code');
      const dirExists = dirNode && dirNode.type === 'dir';
      const fileNode = fs.getNodeByPath('/home/learner/my code', 'my task');
      const fileExists = fileNode && fileNode.type === 'file';

      return {
        success: Boolean(dirExists && fileExists),
        checks: [
          { id: 'dir_with_space_exists', passed: Boolean(dirExists) },
          { id: 'file_with_space_exists', passed: Boolean(fileExists) }
        ]
      };
    }
  },
  {
    id: 10,
    moduleId: 'manipulation',
    title: 'Writing & Overwriting Files',
    xp: 200,
    badge: 'Writer',
    description: 'If you want to write a message on a chalkboard, you first wipe the board completely clean and then write your new words. In Linux, we write messages to files using the `>` (output redirection) operator.\n\n- The `echo "message"` command normally prints text to the screen.\n- By adding the `>` symbol, we redirect that text into a file instead. E.g., `echo "Hi" > greeting.txt` writes "Hi" into `greeting.txt`. If the file already has text, `>` completely overwrites it with the new message.',
    instructions: 'Let\'s write to a new file. Save the text "System Online" into a file named `status.txt` in your home folder `/home/learner`.',
    commandHelp: [
      { cmd: 'echo "System Online" > status.txt', desc: 'Create status.txt with text' }
    ],
    objectives: [
      { id: 'used_echo_redirect', text: 'Use echo with > redirection' },
      { id: 'file_created', text: 'Create "status.txt" in home directory' },
      { id: 'content_correct', text: 'File content is exactly "System Online"' }
    ],
    hints: [
      "To write text to a file, you can redirect the output of the echo command.",
      "Use the '>' operator to redirect echo \"System Online\" to status.txt.",
      "Try running: echo \"System Online\" > status.txt"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'status.txt');
      const fileCreated = Boolean(node && node.type === 'file');
      const contentCorrect = Boolean(fileCreated && node.content.trim() === 'System Online');
      const usedEchoRedirect = Boolean(contentCorrect || hasCommandInHistory(history, (seg, raw) => (seg.command === 'echo' || raw.includes('echo')) && raw.includes('>')));

      return {
        success: Boolean(usedEchoRedirect && fileCreated && contentCorrect),
        checks: [
          { id: 'used_echo_redirect', passed: Boolean(usedEchoRedirect) },
          { id: 'file_created', passed: Boolean(fileCreated) },
          { id: 'content_correct', passed: Boolean(contentCorrect) }
        ]
      };
    }
  },
  {
    id: 11,
    moduleId: 'manipulation',
    title: 'Appending to Files',
    xp: 200,
    badge: 'Journalist',
    description: 'Instead of cleaning the chalkboard, what if you just want to add a new line at the bottom? In Linux, we add text to the end of a file without touching the existing content using the `>>` (append redirection) operator.\n\n- The `>>` operator appends your new text to the very bottom of the file. E.g., `echo "New Line" >> logs.txt` adds "New Line" to the end of `logs.txt` while keeping all your old logs safe.',
    instructions: 'Let\'s add a line. Append the text "All Checks Green" to the bottom of your `status.txt` file inside your home folder `/home/learner`, and then run `cat` on it to see both lines.',
    commandHelp: [
      { cmd: 'echo "All Checks Green" >> status.txt', desc: 'Append text to status.txt' }
    ],
    objectives: [
      { id: 'used_append', text: 'Use echo with >> append redirection' },
      { id: 'has_first_line', text: 'First line is still "System Online"' },
      { id: 'has_second_line', text: 'Second line has "All Checks Green"' },
      { id: 'used_cat', text: 'Verify the result using the "cat" command' }
    ],
    hints: [
      "Use append redirection so you don't overwrite the existing file content.",
      "Use the '>>' operator to append text, and 'cat' to verify it.",
      "Try running: echo \"All Checks Green\" >> status.txt and cat status.txt"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'status.txt');
      const fileCreated = Boolean(node && node.type === 'file');
      const lines = fileCreated ? node.content.trim().split('\n').map(l => l.trim()) : [];
      const hasFirstLine = lines.includes('System Online');
      const hasSecondLine = lines.includes('All Checks Green');
      const usedAppend = Boolean((hasFirstLine && hasSecondLine) || hasCommandInHistory(history, (seg, raw) => raw.includes('>>')));
      const usedCat = hasCommandInHistory(history, seg => seg.command === 'cat');

      return {
        success: Boolean(usedAppend && hasFirstLine && hasSecondLine && usedCat),
        checks: [
          { id: 'used_append', passed: Boolean(usedAppend) },
          { id: 'has_first_line', passed: Boolean(hasFirstLine) },
          { id: 'has_second_line', passed: Boolean(hasSecondLine) },
          { id: 'used_cat', passed: Boolean(usedCat) }
        ]
      };
    }
  },
  {
    id: 12,
    moduleId: 'manipulation',
    title: 'Copying & Moving Files',
    xp: 200,
    badge: 'Archivist',
    description: 'Imagine reorganizing your room: sometimes you want to make a photocopy of a document to keep in another drawer, and other times you just want to grab a folder and slide it into a new shelf or change its label. We do this in Linux with simple commands:\n\n- `cp <source> <destination>` creates an identical duplicate of a file in a new location.\n- `mv <source> <destination>` moves a file to a new folder, or renames the file if you keep it in the same folder (e.g., `mv old.txt new.txt`).',
    instructions: 'Let\'s practice both copying and moving! First, create a backup copy of `status.txt` named `status_backup.txt` using `cp status.txt status_backup.txt`. Next, rename the original `status.txt` to `system.log` using `mv status.txt system.log`.',
    commandHelp: [
      { cmd: 'cp status.txt status_backup.txt', desc: 'Create a backup copy of status.txt' },
      { cmd: 'mv status.txt system.log', desc: 'Rename status.txt to system.log' }
    ],
    objectives: [
      { id: 'used_cp', text: 'Use the "cp" command to create status_backup.txt' },
      { id: 'used_mv', text: 'Use the "mv" command to rename status.txt to system.log' },
      { id: 'files_verified', text: 'Verify status_backup.txt and system.log exist with correct contents' }
    ],
    hints: [
      "First create a backup with: cp status.txt status_backup.txt",
      "Then rename the original file with: mv status.txt system.log",
      "Verify both files exist and status.txt has been renamed."
    ],
    verify: (fs, _session, history) => {
      const backupNode = fs.getNodeByPath('/home/learner', 'status_backup.txt');
      const sysLogNode = fs.getNodeByPath('/home/learner', 'system.log');
      const oldNode = fs.getNodeByPath('/home/learner', 'status.txt');

      const backupOk = Boolean(backupNode && backupNode.type === 'file' && (backupNode.content.includes('System Online') || backupNode.content.includes('All Checks Green')));
      const sysLogOk = Boolean(sysLogNode && sysLogNode.type === 'file' && (sysLogNode.content.includes('System Online') || sysLogNode.content.includes('All Checks Green')));
      const oldRemoved = !oldNode;

      const usedCp = Boolean(backupOk || hasCommandInHistory(history, seg => seg.command === 'cp'));
      const usedMv = Boolean((sysLogOk && oldRemoved) || hasCommandInHistory(history, seg => seg.command === 'mv'));
      const filesVerified = Boolean(backupOk && sysLogOk && oldRemoved);

      return {
        success: Boolean(usedCp && usedMv && filesVerified),
        checks: [
          { id: 'used_cp', passed: Boolean(usedCp) },
          { id: 'used_mv', passed: Boolean(usedMv) },
          { id: 'files_verified', passed: Boolean(filesVerified) }
        ]
      };
    }
  },
  {
    id: 13,
    moduleId: 'manipulation',
    title: 'Wildcards & Multi-File Operations',
    xp: 220,
    badge: 'Wildcard',
    description: 'Imagine you have a stack of folders labeled "log_monday", "log_tuesday", and "log_wednesday", and you want to open and read all of them at once without typing every name out. Linux lets you use **wildcards** as search shortcuts!\n\n- The `*` symbol matches any characters of any length. E.g., `cat log_*` reads every file that starts with "log_".\n- The `?` symbol acts as a single-character placeholder. E.g., `log_?.txt` matches `log_1.txt` but will ignore `log_12.txt`.',
    instructions: 'Let\'s merge multiple logs. Combine the contents of all files starting with `log_` in your home directory into a single file named `combined.log` using the `*` wildcard and `>` redirection.',
    commandHelp: [
      { cmd: 'cat log_* > combined.log', desc: 'Combine all matching files into combined.log' }
    ],
    objectives: [
      { id: 'used_wildcard', text: 'Use cat with wildcard pattern (log_*)' },
      { id: 'combined_exists', text: 'Create "combined.log" in home directory' },
      { id: 'content_combined', text: 'Verify it has logs from log_1, log_2, and log_3' }
    ],
    hints: [
      "Think about how to use wildcards to match multiple files starting with log_.",
      "Use cat log_* to read all match files and redirect the output to combined.log.",
      "Try running: cat log_* > combined.log"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'combined.log');
      const exists = Boolean(node && node.type === 'file');
      const correctContent = Boolean(exists &&
        node.content.includes('Log entry 1') &&
        node.content.includes('Log entry 2') &&
        node.content.includes('Log entry 3'));
      const usedWildcard = Boolean(correctContent || hasCommandInHistory(history, (seg, raw) => (seg.command === 'cat' || raw.includes('cat')) && raw.includes('*')));

      return {
        success: Boolean(usedWildcard && exists && correctContent),
        checks: [
          { id: 'used_wildcard', passed: Boolean(usedWildcard) },
          { id: 'combined_exists', passed: Boolean(exists) },
          { id: 'content_combined', passed: Boolean(correctContent) }
        ]
      };
    }
  },
  {
    id: 14,
    moduleId: 'manipulation',
    title: 'Removing Files & Folders',
    xp: 200,
    badge: 'Cleaner',
    description: 'When you clean up your physical desk, you might throw old papers into a recycling bin where you can retrieve them if you made a mistake. In Linux, there is no safety net—when you delete something from the terminal, it is gone forever!\n\n- The `rm` command deletes files.\n- Because folders can contain other files, `rm` won\'t delete a folder by default. You must add the `-r` (recursive) flag to tell Linux to dive in and delete the folder along with everything inside it.\n\n**Why this matters**: If you run `rm downloads` without `-r` when `downloads` is a folder, you\'ll get: `rm: cannot remove \'downloads\': Is a directory`. The `-r` flag tells Linux to recursively delete the folder and everything inside it.',
    instructions: 'Let\'s clean up our home directory. Permanently delete the `downloads` folder and all its contents by running `rm -r downloads`.',
    commandHelp: [
      { cmd: 'rm -r downloads', desc: 'Delete folder recursively' }
    ],
    objectives: [
      { id: 'used_rm', text: 'Use the "rm" command with -r flag' },
      { id: 'downloads_removed', text: 'Directory /home/learner/downloads is deleted' }
    ],
    hints: [
      "Think about which command removes a file or directory recursively.",
      "Use the 'rm' command with the recursive option (-r).",
      "Try running: rm -r downloads"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'downloads');
      const downloadsRemoved = !node;
      const usedRm = Boolean(downloadsRemoved || hasCommandInHistory(history, seg => seg.command === 'rm' && (seg.hasAnyFlag('r', 'R', 'recursive') || seg.flags.has('-rf') || seg.flags.has('-fr'))));

      return {
        success: Boolean(usedRm && downloadsRemoved),
        checks: [
          { id: 'used_rm', passed: Boolean(usedRm) },
          { id: 'downloads_removed', passed: Boolean(downloadsRemoved) }
        ]
      };
    }
  },
  {
    id: 102,
    moduleId: 'manipulation',
    title: 'Brace Expansion & Safe Directory Removal ({} & rmdir)',
    xp: 220,
    badge: 'Expansionist',
    description: 'Bash **brace expansion** `{}` is a powerful productivity feature that generates arbitrary string combinations before commands run, eliminating repetitive typing:\n\n- Comma-separated lists: `mkdir -p app/{src,bin,logs}` expands to `app/src`, `app/bin`, and `app/logs` in a single command.\n- Numeric or alphabetic ranges: `touch file_{1..3}.txt` expands to `file_1.txt`, `file_2.txt`, and `file_3.txt`.\n\nWhen deleting folders, `rm -r` deletes everything recursively without safety checks. By contrast, `rmdir` provides a strict safety guarantee: it **only removes directories that are completely empty**, preventing accidental loss of files.',
    instructions: 'Practice brace expansion and safe directory removal!\n1. Run `mkdir -p app/{src,bin,logs}` to build multiple application directories at once.\n2. Run `touch file_{1..3}.txt` to create three numbered files in one command.\n3. Safely delete the empty folder `temp_empty` using `rmdir temp_empty`.',
    commandHelp: [
      { cmd: 'mkdir -p app/{src,bin,logs}', desc: 'Create multiple directories using brace expansion' },
      { cmd: 'touch file_{1..3}.txt', desc: 'Create sequential files using range expansion' },
      { cmd: 'rmdir temp_empty', desc: 'Safely remove an empty directory' }
    ],
    objectives: [
      { id: 'app_dirs_created', text: 'Create directories app/src, app/bin, and app/logs using brace expansion' },
      { id: 'seq_files_created', text: 'Create file_1.txt, file_2.txt, and file_3.txt using brace expansion' },
      { id: 'rmdir_empty', text: 'Safely remove directory temp_empty using rmdir' }
    ],
    hints: [
      "Use mkdir -p app/{src,bin,logs} to generate the three directories.",
      "Use touch file_{1..3}.txt to create the sequential files.",
      "Use rmdir temp_empty to remove the empty directory."
    ],
    verify: (fs, _session, history) => {
      const srcNode = fs.getNodeByPath('/home/learner/app', 'src');
      const binNode = fs.getNodeByPath('/home/learner/app', 'bin');
      const logsNode = fs.getNodeByPath('/home/learner/app', 'logs');
      const appDirsOk = Boolean(srcNode && binNode && logsNode && srcNode.type === 'dir' && binNode.type === 'dir' && logsNode.type === 'dir');

      const f1 = fs.getNodeByPath('/home/learner', 'file_1.txt');
      const f2 = fs.getNodeByPath('/home/learner', 'file_2.txt');
      const f3 = fs.getNodeByPath('/home/learner', 'file_3.txt');
      const seqFilesOk = Boolean(f1 && f2 && f3 && f1.type === 'file' && f2.type === 'file' && f3.type === 'file');

      const tempEmptyNode = fs.getNodeByPath('/home/learner', 'temp_empty');
      const emptyRemoved = !tempEmptyNode;
      const usedRmdir = Boolean(emptyRemoved || hasCommandInHistory(history, seg => seg.command === 'rmdir'));

      return {
        success: Boolean(appDirsOk && seqFilesOk && emptyRemoved && usedRmdir),
        checks: [
          { id: 'app_dirs_created', passed: Boolean(appDirsOk) },
          { id: 'seq_files_created', passed: Boolean(seqFilesOk) },
          { id: 'rmdir_empty', passed: Boolean(emptyRemoved && usedRmdir) }
        ]
      };
    }
  },
  {
    id: 15,
    moduleId: 'plumbing',
    title: 'Introduction to Pipes & wc',
    xp: 230,
    badge: 'Plumber',
    description: 'Imagine an assembly line where one worker wraps a product and immediately hands it to the next worker to pack it into a box—no intermediate storage needed. In Linux, we connect commands exactly like this using a **pipe** (`|`).\n\n- A pipe (`|`) routes the output of one command directly into the input of the next command. For example, `ls | wc -l` lists files and immediately hands that list to `wc -l` (word count - lines), which counts them up on the fly without needing temporary files.\n\n**Why this matters**: If you run `wc` without `-l`, it outputs three separate numbers: lines, words, and bytes (e.g., `  5  10  85`). This makes it difficult to use in pipelines or scripts that need a clean, single-number count. The `-l` flag limits the output to just the line count.',
    instructions: 'Let\'s connect some commands. Count the files in `/home/learner` using a pipe (`ls | wc -l`), and write the final count into a file named `file_count.txt` using `>` redirection.',
    commandHelp: [
      { cmd: 'ls | wc -l', desc: 'Count files and folders in current directory' },
      { cmd: 'ls | wc -l > file_count.txt', desc: 'Write files count to file_count.txt' }
    ],
    objectives: [
      { id: 'used_pipe', text: 'Use pipe (|) to connect ls with wc' },
      { id: 'file_count_exists', text: 'Create file "file_count.txt" in home directory' },
      { id: 'count_is_correct', text: 'Verify file contains the correct numeric file count' }
    ],
    hints: [
      "Think about how to redirect the output of one command into another using a pipe.",
      "Pipe the output of ls into wc -l, then redirect the result to file_count.txt.",
      "Try running: ls | wc -l > file_count.txt"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'file_count.txt');
      const exists = Boolean(node && node.type === 'file');
      let correct = false;
      if (exists) {
        const val = node.content.trim();
        correct = /^\d+$/.test(val) && parseInt(val, 10) > 0;
      }
      const usedPipe = Boolean(correct || hasCommandInHistory(history, (seg, raw) => raw.includes('|') && raw.includes('wc')));

      return {
        success: Boolean(usedPipe && exists && correct),
        checks: [
          { id: 'used_pipe', passed: Boolean(usedPipe) },
          { id: 'file_count_exists', passed: Boolean(exists) },
          { id: 'count_is_correct', passed: Boolean(correct) }
        ]
      };
    }
  },
  {
    id: 16,
    moduleId: 'plumbing',
    title: 'Sorting and Finding Uniques',
    xp: 240,
    badge: 'Organizer',
    description: 'Imagine sorting a deck of cards where duplicates are scattered all over. To easily spot and remove duplicates, you\'d first group the identical cards together. In Linux, the `uniq` command filters out repeating lines, but it has a catch: it **only detects duplicates that are right next to each other**!\n\n- To remove all duplicates from a messy list, you must first sort the lines using `sort` and then pass the result to `uniq`. E.g., `sort raw.txt | uniq` organizes and cleans the list in one go.',
    instructions: 'Let\'s clean up a messy guest list. The file `names.txt` contains duplicate names. Connect `sort` and `uniq` with a pipe to find all unique names alphabetically, and save them in `unique_names.txt`.',
    commandHelp: [
      { cmd: 'sort names.txt', desc: 'Sort lines of names.txt alphabetically' },
      { cmd: 'sort names.txt | uniq > unique_names.txt', desc: 'Sort and filter duplicates into a file' }
    ],
    objectives: [
      { id: 'used_sort', text: 'Use the "sort" command on names.txt' },
      { id: 'used_uniq', text: 'Pipe sorted output into "uniq" command' },
      { id: 'unique_names_exists', text: 'Create file "unique_names.txt"' },
      { id: 'sorted_and_unique', text: 'Verify content has unique sorted names' }
    ],
    hints: [
      "You need to sort the names alphabetically first, then filter out duplicates.",
      "Pipe the output of sort names.txt into uniq, and redirect it to unique_names.txt.",
      "Try running: sort names.txt | uniq > unique_names.txt"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'unique_names.txt');
      const exists = Boolean(node && node.type === 'file');
      const correct = Boolean(exists && node.content.trim() === 'Alice\nBob\nCharlie\nDavid');
      const usedSort = Boolean(correct || hasCommandInHistory(history, seg => seg.command === 'sort'));
      const usedUniq = Boolean(correct || hasCommandInHistory(history, (seg, raw) => raw.includes('uniq')));

      return {
        success: Boolean(usedSort && usedUniq && exists && correct),
        checks: [
          { id: 'used_sort', passed: Boolean(usedSort) },
          { id: 'used_uniq', passed: Boolean(usedUniq) },
          { id: 'unique_names_exists', passed: Boolean(exists) },
          { id: 'sorted_and_unique', passed: Boolean(correct) }
        ]
      };
    }
  },
  {
    id: 17,
    moduleId: 'plumbing',
    title: 'Filtering with grep',
    xp: 240,
    badge: 'Filterer',
    description: 'Imagine looking through a massive, thousand-page logbook to find every time a system error occurred. Doing this manually would take hours! In Linux, we use `grep` as our digital magnifying glass to search for specific words or patterns instantly.\n\n- The `grep` command filters files or piped text, printing only the lines that match your search word. For example, running `grep "ERROR" logs.txt` scans the file and extracts only the lines containing "ERROR".',
    instructions: 'Let\'s filter our logs. Search `logs.txt` for all lines containing `[ERROR]` and save them into a new file named `errors.log`.',
    commandHelp: [
      { cmd: 'grep "[ERROR]" logs.txt', desc: 'Search logs.txt for lines containing [ERROR]' },
      { cmd: 'grep "[ERROR]" logs.txt > errors.log', desc: 'Save matching errors into errors.log' }
    ],
    objectives: [
      { id: 'used_grep', text: 'Use the "grep" command to search logs.txt' },
      { id: 'errors_log_exists', text: 'Create file "errors.log" in home directory' },
      { id: 'only_errors', text: 'Verify errors.log contains only [ERROR] entries' }
    ],
    hints: [
      "Think about which command filters lines matching a specific pattern.",
      "Use grep to search logs.txt for '[ERROR]' and redirect output to errors.log.",
      "Try running: grep \"[ERROR]\" logs.txt > errors.log"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'errors.log');
      const exists = Boolean(node && node.type === 'file');
      const lines = exists ? node.content.split('\n').filter(Boolean) : [];
      const onlyErrors = Boolean(exists && lines.length > 0 && lines.every(line => line.includes('[ERROR]')));
      const usedGrep = Boolean(onlyErrors || hasCommandInHistory(history, seg => seg.command === 'grep'));

      return {
        success: Boolean(usedGrep && exists && onlyErrors),
        checks: [
          { id: 'used_grep', passed: Boolean(usedGrep) },
          { id: 'errors_log_exists', passed: Boolean(exists) },
          { id: 'only_errors', passed: Boolean(onlyErrors) }
        ]
      };
    }
  },
  {
    id: 103,
    moduleId: 'plumbing',
    title: 'Splitting Output with tee',
    xp: 250,
    badge: 'T-Junction',
    description: 'In plumbing, a T-pipe splits a single water stream into two paths. In Linux, the `tee` command does the exact same thing with text streams: it reads standard input and writes it simultaneously to both the screen (stdout) and one or more files. E.g.: `cmd | tee output.log`.\n\nFurthermore, `tee` solves a classic Linux permissions pitfall: running `sudo echo "config" > /etc/app.conf` fails because redirection `>` is handled by your unprivileged shell before `sudo` executes. Piping to `sudo tee -a /etc/app.conf` (where `-a` appends) runs `tee` with superuser privileges, safely writing to protected system files.',
    instructions: '1. Run `echo "Build completed" | tee build.log` to view build output while capturing it in `build.log`.\n2. Append privileged configuration by running `echo "PORT=8080" | sudo tee -a /etc/app.conf`.',
    commandHelp: [
      { cmd: 'echo "Build completed" | tee build.log', desc: 'Write stdout to screen and file simultaneously' },
      { cmd: 'echo "PORT=8080" | sudo tee -a /etc/app.conf', desc: 'Safely append to privileged file with sudo tee -a' }
    ],
    objectives: [
      { id: 'tee_build_log', text: 'Write build status to build.log using tee' },
      { id: 'tee_app_conf', text: 'Append PORT=8080 to /etc/app.conf using sudo tee -a' }
    ],
    hints: [
      "Pipe the echo command into tee: echo \"Build completed\" | tee build.log",
      "Use sudo tee -a to append to /etc/app.conf: echo \"PORT=8080\" | sudo tee -a /etc/app.conf",
      "Check cat build.log and cat /etc/app.conf to confirm both entries exist."
    ],
    verify: (fs, _session, history) => {
      const buildLog = fs.getNodeByPath('/home/learner', 'build.log');
      const appConf = fs.getNodeByPath('/etc', 'app.conf');
      const buildOk = Boolean(buildLog && buildLog.type === 'file' && buildLog.content.includes('Build completed'));
      const appConfOk = Boolean(appConf && appConf.type === 'file' && appConf.content.includes('PORT=8080'));
      const usedTee = Boolean((buildOk && appConfOk) || hasCommandInHistory(history, seg => seg.command === 'tee'));

      return {
        success: Boolean(buildOk && appConfOk && usedTee),
        checks: [
          { id: 'tee_build_log', passed: Boolean(buildOk) },
          { id: 'tee_app_conf', passed: Boolean(appConfOk) }
        ]
      };
    }
  },
  {
    id: 104,
    moduleId: 'plumbing',
    title: 'Comparing Files with diff',
    xp: 250,
    badge: 'Drift Hunter',
    description: 'In production environments, servers fail when configuration files silently diverge over time—a problem called "configuration drift". The `diff` utility compares two text files line by line and highlights every difference:\n\n- Standard format: `diff file1.conf file2.conf` uses `<` to indicate lines from the first file and `>` for lines in the second file.\n- Unified format: `diff -u file1.conf file2.conf` produces unified diff output (`-` for removed lines, `+` for added lines), which is the standard format used by Git patches and modern pull requests.',
    instructions: 'Spot configuration drift between `app_v1.conf` and `app_v2.conf` in `/home/learner`:\n1. Run `diff app_v1.conf app_v2.conf` to view standard line differences.\n2. Run `diff -u app_v1.conf app_v2.conf` to view the unified diff patch format.',
    commandHelp: [
      { cmd: 'diff app_v1.conf app_v2.conf', desc: 'Compare files line by line' },
      { cmd: 'diff -u app_v1.conf app_v2.conf', desc: 'Compare files using unified diff format' }
    ],
    objectives: [
      { id: 'ran_diff', text: 'Run diff on app_v1.conf and app_v2.conf' },
      { id: 'ran_diff_u', text: 'Run diff -u on app_v1.conf and app_v2.conf' }
    ],
    hints: [
      "Run diff app_v1.conf app_v2.conf to compare the two configuration versions.",
      "Add the -u option: diff -u app_v1.conf app_v2.conf for unified output.",
      "Try running: diff app_v1.conf app_v2.conf followed by diff -u app_v1.conf app_v2.conf"
    ],
    verify: (_fs, _session, history) => {
      const ranDiff = hasCommandInHistory(history, seg => seg.command === 'diff' && seg.hasArg('app_v1.conf') && seg.hasArg('app_v2.conf') && !seg.hasFlag('u'));
      const ranDiffU = hasCommandInHistory(history, seg => seg.command === 'diff' && seg.hasFlag('u') && seg.hasArg('app_v1.conf') && seg.hasArg('app_v2.conf'));
      return {
        success: Boolean(ranDiff && ranDiffU),
        checks: [
          { id: 'ran_diff', passed: Boolean(ranDiff) },
          { id: 'ran_diff_u', passed: Boolean(ranDiffU) }
        ]
      };
    }
  },
  {
    id: 105,
    moduleId: 'plumbing',
    title: 'Advanced grep Flags (-i, -v, -r, -E)',
    xp: 260,
    badge: 'Regex Ninja',
    description: 'While basic `grep` searches for exact strings, production log analysis requires powerful matching flags:\n\n- `-i`: Case-insensitive search (matches `error`, `Error`, or `ERROR`).\n- `-v`: Invert match (prints lines that do **not** match the given pattern, perfect for stripping noise).\n- `-r` (or `-R`): Recursive directory search across all subdirectories and files.\n- `-E`: Extended regular expressions (supports `|` alternation for multiple patterns, `+`, and parentheses without escape backslashes).',
    instructions: 'Practice advanced log triage on files inside `logs/`:\n1. Run `grep -i "error" logs/app.log` to match errors regardless of uppercase/lowercase.\n2. Run `grep -v "INFO" logs/app.log` to filter out routine info lines.\n3. Run `grep -r "SSH" logs/` to recursively locate SSH activity across all log files in `logs/`.\n4. Run `grep -E "(WARNING|ERROR)" logs/app.log` to match lines containing either WARNING or ERROR using extended regex.',
    commandHelp: [
      { cmd: 'grep -i "error" logs/app.log', desc: 'Case-insensitive pattern search' },
      { cmd: 'grep -v "INFO" logs/app.log', desc: 'Invert search (exclude lines matching pattern)' },
      { cmd: 'grep -r "SSH" logs/', desc: 'Recursively search all files in directory' },
      { cmd: 'grep -E "(WARNING|ERROR)" logs/app.log', desc: 'Search with extended regex alternation' }
    ],
    objectives: [
      { id: 'grep_i', text: 'Run case-insensitive grep (-i) on logs/app.log' },
      { id: 'grep_v', text: 'Run inverted grep (-v) to exclude INFO' },
      { id: 'grep_r', text: 'Run recursive grep (-r) across logs/' },
      { id: 'grep_e', text: 'Run extended regex grep (-E) with alternation' }
    ],
    hints: [
      "Use grep -i 'error' logs/app.log to ignore casing.",
      "Use grep -v 'INFO' logs/app.log to invert the match and filter out info logs.",
      "Use grep -r 'SSH' logs/ to scan the whole directory recursively.",
      "Use grep -E '(WARNING|ERROR)' logs/app.log for extended regex matching."
    ],
    verify: (_fs, _session, history) => {
      const grepI = hasCommandInHistory(history, seg => seg.command === 'grep' && seg.hasFlag('i'));
      const grepV = hasCommandInHistory(history, seg => seg.command === 'grep' && seg.hasFlag('v'));
      const grepR = hasCommandInHistory(history, seg => seg.command === 'grep' && (seg.hasFlag('r') || seg.hasFlag('R')));
      const grepE = hasCommandInHistory(history, seg => seg.command === 'grep' && seg.hasFlag('E'));
      return {
        success: Boolean(grepI && grepV && grepR && grepE),
        checks: [
          { id: 'grep_i', passed: Boolean(grepI) },
          { id: 'grep_v', passed: Boolean(grepV) },
          { id: 'grep_r', passed: Boolean(grepR) },
          { id: 'grep_e', passed: Boolean(grepE) }
        ]
      };
    }
  },
  {
    id: 18,
    moduleId: 'advanced',
    title: 'Changing File Permissions',
    xp: 250,
    badge: 'Sysadmin',
    description: 'Imagine running a business where only managers can sign checks, employees can read schedules, and visitors can only look at the store sign. In Linux, we control who can read, write, or run files using a security system of numbers (called octal representation):\n\n- `7` = Full access: Read + Write + Execute (`rwx`)\n- `6` = Modify access: Read + Write (`rw-`)\n- `5` = Read and run access: Read + Execute (`r-x`)\n- `4` = Read-only access: Read (`r--`)\n\nWe apply these settings with `chmod <octal> <file>`. E.g., `chmod 755 script.sh` lets you run the script, while others can only read and run it. We have a script named `deploy.sh` that\'s currently locked down—let\'s make it executable!',
    instructions: 'Let\'s change permissions. The file `deploy.sh` currently has restricted permissions (644). Run `chmod 755 deploy.sh` to make it executable by the owner and readable/executable by everyone else.',
    commandHelp: [
      { cmd: 'chmod 755 deploy.sh', desc: 'Set executable permissions' },
      { cmd: 'ls -l deploy.sh', desc: 'Check current file permissions' }
    ],
    objectives: [
      { id: 'used_chmod', text: 'Run the "chmod" command on deploy.sh' },
      { id: 'is_executable', text: 'Set permissions of deploy.sh to 755' }
    ],
    hints: [
      "Think about which command changes file permissions.",
      "Use the 'chmod' command with permission code 755 on deploy.sh.",
      "Try running: chmod 755 deploy.sh"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'deploy.sh');
      const scriptExists = Boolean(node && node.type === 'file');
      const isExecutable = Boolean(scriptExists && (node.permissions === '755' || node.permissions === '775' || node.permissions === '777'));
      const usedChmod = Boolean(isExecutable || hasCommandInHistory(history, seg => seg.command === 'chmod'));

      return {
        success: Boolean(usedChmod && isExecutable),
        checks: [
          { id: 'used_chmod', passed: Boolean(usedChmod) },
          { id: 'is_executable', passed: Boolean(isExecutable) }
        ]
      };
    }
  },
  {
    id: 19,
    moduleId: 'advanced',
    title: 'Hidden Files & Configurations',
    xp: 220,
    badge: 'Ghost',
    description: 'Think of a secret drawer under your desk where you keep system settings so they don\'t clutter up your main workspace. In Linux, we create hidden files simply by starting their names with a dot (`.`).\n\n- These dotfiles (like `.bashrc` or `.config`) store user preferences and config settings behind the scenes.\n- A standard `ls` command won\'t show them. To peek at these hidden files, you must add the `-a` (all) flag, running `ls -a`.\n\n**Why this matters**: If you run `ls` without `-a`, hidden files (whose names start with a `.`) are completely omitted from the output. You won\'t see important files like `.config_names` and might think they are missing. The `-a` flag tells `ls` to list all files, including hidden ones.',
    instructions: 'Let\'s hide a file! Rename `unique_names.txt` in your home folder to a hidden file named `.config_names` using `mv`, then reveal it by running `ls -a`.',
    commandHelp: [
      { cmd: 'ls -a', desc: 'List all files, including hidden files' },
      { cmd: 'mv file .file', desc: 'Hide a file by prefixing its name with a dot' }
    ],
    objectives: [
      { id: 'used_mv', text: 'Use "mv" to rename the file' },
      { id: 'hidden_file_exists', text: 'Create hidden file ".config_names" in home' },
      { id: 'old_file_removed', text: 'Verify original unique_names.txt is removed' },
      { id: 'used_ls_a', text: 'Use "ls -a" to verify hidden file is present' }
    ],
    hints: [
      "In Linux, hidden files are prefixed with a dot (.) and shown using a special ls flag.",
      "Use mv unique_names.txt .config_names and run ls -a to reveal it.",
      "Try running: mv unique_names.txt .config_names followed by ls -a"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', '.config_names');
      const oldNode = fs.getNodeByPath('/home/learner', 'unique_names.txt');
      const hiddenFileExists = Boolean(node && node.type === 'file');
      const oldFileRemoved = !oldNode;
      const usedMv = Boolean((hiddenFileExists && oldFileRemoved) || hasCommandInHistory(history, seg => seg.command === 'mv'));
      const usedLsA = hasCommandInHistory(history, seg => seg.command === 'ls' && seg.hasAnyFlag('a', 'all'));

      return {
        success: Boolean(usedMv && hiddenFileExists && oldFileRemoved && usedLsA),
        checks: [
          { id: 'used_mv', passed: Boolean(usedMv) },
          { id: 'hidden_file_exists', passed: Boolean(hiddenFileExists) },
          { id: 'old_file_removed', passed: Boolean(oldFileRemoved) },
          { id: 'used_ls_a', passed: Boolean(usedLsA) }
        ]
      };
    }
  },
  {
    id: 20,
    moduleId: 'advanced',
    title: 'Changing File Ownership',
    xp: 250,
    badge: 'Owner',
    description: 'Imagine buying a house and having to officially register the deed under a new owner\'s name. In Linux, every file and folder has an official owner and a group. If you need to hand a file\'s ownership over to someone else (like the system administrator), you use the `chown` (change owner) command.\n\n- Because changing who owns a file is a sensitive security action, you must prefix it with `sudo` to run it with administrative privileges. E.g., `sudo chown root reports.csv` assigns the file to the user "root".',
    instructions: 'Let\'s transfer ownership. Change the owner of `/home/learner/reports.csv` to the administrator `root` by running `sudo chown root reports.csv`.',
    commandHelp: [
      { cmd: 'sudo chown root reports.csv', desc: 'Change owner of reports.csv to root' }
    ],
    objectives: [
      { id: 'used_chown', text: 'Run the "chown" command with sudo' },
      { id: 'owner_changed', text: 'Set owner of reports.csv to root' }
    ],
    hints: [
      "Think about which command changes file ownership, and remember it requires admin privileges.",
      "Use the 'chown' command prefixed with 'sudo' to change the owner to root.",
      "Try running: sudo chown root reports.csv"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'reports.csv');
      const ownerChanged = Boolean(node && (node.owner === 'root' || (typeof node.owner === 'string' && node.owner.startsWith('root'))));
      const usedChown = Boolean(ownerChanged || hasCommandInHistory(history, seg => seg.command === 'chown'));

      return {
        success: Boolean(usedChown && ownerChanged),
        checks: [
          { id: 'used_chown', passed: Boolean(usedChown) },
          { id: 'owner_changed', passed: Boolean(ownerChanged) }
        ]
      };
    }
  },
  {
    id: 77,
    moduleId: 'advanced',
    title: 'Linux Firewalls (ufw & iptables)',
    xp: 200,
    badge: 'Defender',
    description: 'Imagine living in a secure apartment building where a security guard stands at the entrance checking IDs and blocking unauthorized visitors. In Linux, a **firewall** acts as this security guard for your network ports.\n\n- The `ufw` (Uncomplicated Firewall) command is a user-friendly interface for managing firewall rules. Running `sudo ufw status` displays whether the firewall is active and which ports (like port 22 for SSH or port 80 for web servers) are open.\n- The `iptables` command is the low-level, traditional Netfilter tool that actually blocks or redirects packets. Running `sudo iptables -L` lists the active security chains and packet-matching rules.',
    instructions: 'Let\'s inspect our security guards. View the status of the uncomplicated firewall by running `sudo ufw status`, and then check the lower-level Netfilter rules by running `sudo iptables -L`.',
    commandHelp: [
      { cmd: 'sudo ufw status', desc: 'Display ufw firewall rules' },
      { cmd: 'sudo iptables -L', desc: 'List active iptables packet filtering rules' }
    ],
    objectives: [
      { id: 'checked_ufw', text: 'Run the "ufw status" command with sudo' },
      { id: 'checked_iptables', text: 'Run the "iptables -L" command with sudo' }
    ],
    hints: [
      "Use sudo ufw status to inspect the uncomplicated firewall.",
      "Use sudo iptables -L to check Netfilter rules.",
      "Try running: sudo ufw status, and then sudo iptables -L"
    ],
    verify: (_fs, _session, history) => {
      const checkedUfw = hasCommandInHistory(history, seg => seg.command === 'ufw' && seg.hasArg('status'));
      const checkedIptables = hasCommandInHistory(history, seg => seg.command === 'iptables' && seg.hasAnyFlag('L', 'list'));
      return {
        success: Boolean(checkedUfw && checkedIptables),
        checks: [
          { id: 'checked_ufw', passed: Boolean(checkedUfw) },
          { id: 'checked_iptables', passed: Boolean(checkedIptables) }
        ]
      };
    }
  },
  {
    id: 106,
    moduleId: 'advanced',
    title: 'Standard Error & /dev/null (2>, 2>&1)',
    xp: 260,
    badge: 'Stream Master',
    description: 'In Linux, every process opens three standard I/O streams:\n- File descriptor `0`: `stdin` (Standard Input)\n- File descriptor `1`: `stdout` (Standard Output — where normal output goes)\n- File descriptor `2`: `stderr` (Standard Error — where error messages go)\n\nWhen you run `cmd > output.txt`, only stdout is saved; error messages still appear on your screen. To redirect errors separately, specify file descriptor 2: `cmd 2> errors.log`. To silence noisy errors completely, redirect them to the Linux null device (black hole): `cmd 2> /dev/null`. To combine both stdout and stderr into one stream or file, use `&> output.log` or `cmd > output.log 2>&1`.',
    instructions: '1. Discard permission warnings by searching root with stderr silenced: `find / -name "*.conf" 2> /dev/null`.\n2. Capture an error by running `cat nonexistent.txt 2> errors.log`.\n3. Combine both stdout and stderr into a single log: `ls /etc/hosts nonexistent.txt &> all_output.log` (or `> all_output.log 2>&1`).',
    commandHelp: [
      { cmd: 'find / -name "*.conf" 2> /dev/null', desc: 'Silence stderr by redirecting to /dev/null' },
      { cmd: 'cat nonexistent.txt 2> errors.log', desc: 'Redirect standard error to errors.log' },
      { cmd: 'ls /etc/hosts nonexistent.txt &> all_output.log', desc: 'Combine stdout and stderr into all_output.log' }
    ],
    objectives: [
      { id: 'discarded_stderr', text: 'Run a command redirecting stderr to /dev/null (2> /dev/null)' },
      { id: 'errors_logged', text: 'Redirect error output to errors.log (2> errors.log)' },
      { id: 'combined_stream', text: 'Create all_output.log capturing both streams (&> or 2>&1)' }
    ],
    hints: [
      "Use 2> /dev/null to discard stderr, e.g. find / -name \"*.conf\" 2> /dev/null",
      "Use 2> errors.log to write error messages to a file: cat nonexistent.txt 2> errors.log",
      "Use &> all_output.log to combine both streams: ls /etc/hosts nonexistent.txt &> all_output.log"
    ],
    verify: (fs, _session, history) => {
      const discardedStderr = hasCommandInHistory(history, (_seg, raw) => raw.includes('2>') && raw.includes('/dev/null'));
      const errNode = fs.getNodeByPath('/home/learner', 'errors.log');
      const errLogged = Boolean(errNode && errNode.type === 'file' && errNode.content.length > 0);
      const allNode = fs.getNodeByPath('/home/learner', 'all_output.log');
      const combinedOk = Boolean(allNode && allNode.type === 'file' && allNode.content.length > 0);
      const combinedStream = Boolean(combinedOk || hasCommandInHistory(history, (_seg, raw) => raw.includes('&>') || raw.includes('2>&1')));

      return {
        success: Boolean(discardedStderr && errLogged && combinedStream && combinedOk),
        checks: [
          { id: 'discarded_stderr', passed: Boolean(discardedStderr) },
          { id: 'errors_logged', passed: Boolean(errLogged) },
          { id: 'combined_stream', passed: Boolean(combinedStream && combinedOk) }
        ]
      };
    }
  },
  {
    id: 107,
    moduleId: 'advanced',
    title: 'Multi-Line Input with Here-Docs (<<EOF)',
    xp: 250,
    badge: 'Documenter',
    description: 'In automated scripts and cloud deployment routines (like Dockerfiles or cloud-init), opening an interactive text editor like nano is impossible. Instead, Bash uses **Here-Documents** (`<<EOF`) to inject multi-line blocks of text directly into commands.\n\nThe syntax `cat <<EOF > config.env` tells the shell to capture all following lines into `config.env` until a line containing only the delimiter word `EOF` is reached.',
    instructions: 'Use a here-doc to create an environment configuration file! Run `cat <<EOF > config.env`, enter the lines:\nNODE_ENV=production\nPORT=3000\nand terminate the here-doc with `EOF` on its own line.',
    commandHelp: [
      { cmd: 'cat <<EOF > config.env', desc: 'Begin multi-line here-doc writing to config.env' },
      { cmd: 'EOF', desc: 'Delimiter word marking the end of here-doc input' }
    ],
    objectives: [
      { id: 'config_env_created', text: 'Create config.env using a here-doc (<<EOF)' },
      { id: 'config_env_content', text: 'Verify config.env contains NODE_ENV=production and PORT=3000' }
    ],
    hints: [
      "Type: cat <<EOF > config.env and press Enter.",
      "Type: NODE_ENV=production and press Enter.",
      "Type: PORT=3000 and press Enter.",
      "Type: EOF and press Enter to finish writing the file."
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'config.env');
      const created = Boolean(node && node.type === 'file');
      const contentOk = Boolean(created && node.content.includes('NODE_ENV=production') && node.content.includes('PORT=3000'));
      const usedHereDoc = Boolean(contentOk || hasCommandInHistory(history, (_seg, raw) => raw.includes('<<')));

      return {
        success: Boolean(created && contentOk && usedHereDoc),
        checks: [
          { id: 'config_env_created', passed: Boolean(created && usedHereDoc) },
          { id: 'config_env_content', passed: Boolean(contentOk) }
        ]
      };
    }
  },
  {
    id: 108,
    moduleId: 'advanced',
    title: 'Default Permissions & Group Ownership (umask & chgrp)',
    xp: 260,
    badge: 'Security Auditor',
    description: 'Whenever a program creates a new file or folder, its initial permissions are determined by the **umask** (user file-creation mode mask). The umask acts as a filter that strips away permissions from maximum defaults (`666` for files, `777` for directories):\n\n- Standard umask `022` subtracts group/other write permissions, yielding `644` (`rw-r--r--`) for files and `755` (`rwxr-xr-x`) for folders.\n- Running `umask 027` tightens security by stripping all permissions from "others", yielding `640` and `750`.\n\nTo change only the group owner of a file without altering its user owner, use `chgrp <group> <file>`.',
    instructions: '1. Run `umask` to view your current file-creation mask, then tighten permissions by running `umask 027`.\n2. Change the group ownership of `project.txt` to the `developers` group using `chgrp developers project.txt`.',
    commandHelp: [
      { cmd: 'umask', desc: 'Display current octal file-creation mask' },
      { cmd: 'umask 027', desc: 'Set restrictive umask to 027' },
      { cmd: 'chgrp developers project.txt', desc: 'Change group ownership to developers' }
    ],
    objectives: [
      { id: 'viewed_umask', text: 'Run the "umask" command' },
      { id: 'set_umask', text: 'Set umask to 027 using "umask 027"' },
      { id: 'group_changed', text: 'Change group of project.txt to developers using chgrp' }
    ],
    hints: [
      "Run umask to display the current mask.",
      "Run umask 027 to set the new mask.",
      "Run chgrp developers project.txt to update the file's group."
    ],
    verify: (fs, session, history) => {
      const viewedUmask = hasCommandInHistory(history, seg => seg.command === 'umask' && seg.args.length === 0);
      const setUmask = session.umask === '0027' || session.umask === '027' || hasCommandInHistory(history, seg => seg.command === 'umask' && (seg.hasArg('027') || seg.hasArg('0027')));
      const projNode = fs.getNodeByPath('/home/learner', 'project.txt');
      const groupChanged = Boolean(projNode && projNode.group === 'developers');

      return {
        success: Boolean(viewedUmask && setUmask && groupChanged),
        checks: [
          { id: 'viewed_umask', passed: Boolean(viewedUmask) },
          { id: 'set_umask', passed: Boolean(setUmask) },
          { id: 'group_changed', passed: Boolean(groupChanged) }
        ]
      };
    }
  },
  {
    id: 109,
    moduleId: 'advanced',
    title: 'Special Permissions (SUID, SGID & Sticky Bit)',
    xp: 275,
    badge: 'Permission Specialist',
    description: 'Standard file permissions (`rwx`) have three special bits that provide advanced access models:\n\n- **Sticky Bit (`+t` or octal `1000`)**: Set on shared directories like `/tmp`. Anyone can create files, but users can only delete or rename files they own. Displayed as `t` in `ls -l` (e.g. `drwxrwxrwt`).\n- **SUID (Set User ID, `u+s` or octal `4000`)**: When set on an executable binary, standard users run the binary with the file owner\'s privileges (usually root). Displayed as `s` in owner execute position (e.g. `-rwsr-xr-x`). Essential for tools like `/usr/bin/passwd`.\n- **Security Auditing**: Attackers frequently abuse SUID binaries for privilege escalation. Sysadmins audit systems for SUID binaries using: `find / -perm -4000 2> /dev/null`.',
    instructions: 'Configure and audit special permissions:\n1. Set the sticky bit on `/tmp/shared` using `chmod +t /tmp/shared`.\n2. Set the SUID bit on `/home/learner/admin_tool` using `chmod u+s admin_tool`.\n3. Audit SUID binaries across the system by running `find / -perm -4000 2> /dev/null` (or `find /usr/bin -perm -4000`).',
    commandHelp: [
      { cmd: 'chmod +t /tmp/shared', desc: 'Set sticky bit (+t) on shared directory' },
      { cmd: 'chmod u+s admin_tool', desc: 'Set SUID bit (u+s) on executable binary' },
      { cmd: 'find / -perm -4000 2> /dev/null', desc: 'Audit all binaries with SUID permission bit set' }
    ],
    objectives: [
      { id: 'sticky_bit_set', text: 'Set sticky bit on /tmp/shared (+t or 1777)' },
      { id: 'suid_bit_set', text: 'Set SUID on admin_tool (u+s or 4755)' },
      { id: 'audited_suid', text: 'Audit SUID binaries using find with -perm -4000' }
    ],
    hints: [
      "Run chmod +t /tmp/shared to enable the sticky bit.",
      "Run chmod u+s admin_tool to enable SUID execution.",
      "Run find / -perm -4000 2> /dev/null to list all SUID binaries on the system."
    ],
    verify: (fs, _session, history) => {
      const sharedNode = fs.getNodeByPath('/tmp', 'shared');
      const stickyOk = Boolean(sharedNode && (sharedNode.sticky || (sharedNode.permissions && (sharedNode.permissions.startsWith('1') || sharedNode.permissions === '1777'))));

      const toolNode = fs.getNodeByPath('/home/learner', 'admin_tool');
      const suidOk = Boolean(toolNode && (toolNode.suid || (toolNode.permissions && (toolNode.permissions.startsWith('4') || toolNode.permissions === '4755'))));

      const auditedSuid = hasCommandInHistory(history, seg => seg.command === 'find' && (seg.hasArg('-perm') || seg.hasArg('-4000') || seg.raw.includes('-perm -4000') || seg.raw.includes('4000')));

      return {
        success: Boolean(stickyOk && suidOk && auditedSuid),
        checks: [
          { id: 'sticky_bit_set', passed: Boolean(stickyOk) },
          { id: 'suid_bit_set', passed: Boolean(suidOk) },
          { id: 'audited_suid', passed: Boolean(auditedSuid) }
        ]
      };
    }
  },
  {
    id: 110,
    moduleId: 'advanced',
    title: 'Access Control Lists (getfacl & setfacl)',
    xp: 275,
    badge: 'ACL Enforcer',
    description: 'Standard Linux permissions only support one user owner, one group, and others. When complex enterprise collaboration requires granting distinct rights to multiple users or groups on a single file, **POSIX Access Control Lists (ACLs)** are used:\n\n- `getfacl <file>`: Reads and displays the file\'s extended ACL entries (user, group, mask, other).\n- `setfacl -m u:<username>:<perms> <file>`: Modifies the ACL to grant specific permissions (`r`, `w`, `x`) to an individual user without changing the file owner.\n- Notice that when a file has an ACL, `ls -l` displays a `+` symbol at the end of the permission string (e.g., `-rw-rw-r--+`).',
    instructions: 'Inspect and grant fine-grained permissions on `/home/learner/notes.txt`:\n1. Run `getfacl notes.txt` to inspect its existing Access Control List entries.\n2. Grant the user `deployer` read and write permissions by running `setfacl -m u:deployer:rw notes.txt`.',
    commandHelp: [
      { cmd: 'getfacl notes.txt', desc: 'Display Access Control List entries for file' },
      { cmd: 'setfacl -m u:deployer:rw notes.txt', desc: 'Grant fine-grained user permissions with setfacl -m' }
    ],
    objectives: [
      { id: 'viewed_acl', text: 'Run getfacl on notes.txt' },
      { id: 'granted_acl', text: 'Grant deployer read/write ACL (setfacl -m u:deployer:rw notes.txt)' }
    ],
    hints: [
      "Run getfacl notes.txt to view the file's ACLs.",
      "Run setfacl -m u:deployer:rw notes.txt to grant user deployer rw access.",
      "Inspect getfacl notes.txt or ls -l notes.txt to verify the new ACL entry."
    ],
    verify: (fs, _session, history) => {
      const viewedAcl = hasCommandInHistory(history, seg => seg.command === 'getfacl' && seg.hasArg('notes.txt'));
      const node = fs.getNodeByPath('/home/learner', 'notes.txt');
      const hasDeployerAcl = Boolean(
        node && (
          (node.acls && (node.acls['user:deployer'] || node.acls['u:deployer'])) ||
          (Array.isArray(node.acl) && node.acl.some(entry => (entry.name === 'deployer' || entry.user === 'deployer')))
        )
      );
      const usedSetfacl = Boolean(hasDeployerAcl || hasCommandInHistory(history, seg => seg.command === 'setfacl' && seg.hasArg('notes.txt')));

      return {
        success: Boolean(viewedAcl && hasDeployerAcl && usedSetfacl),
        checks: [
          { id: 'viewed_acl', passed: Boolean(viewedAcl) },
          { id: 'granted_acl', passed: Boolean(hasDeployerAcl && usedSetfacl) }
        ]
      };
    }
  },
  {
    id: 21,
    moduleId: 'system',
    title: 'Superuser Privileges (sudo)',
    xp: 260,
    badge: 'Guardian',
    description: 'Imagine working on your computer with a standard account to prevent accidentally deleting critical operating system files. When you need to install software or modify system settings, your computer asks for admin authorization. In Linux, we use `sudo` (short for "superuser do") as our administrative key card.\n\n- The `root` user is the master administrator account with full control over the system.\n- Standard users are blocked from reading sensitive files (like the password database `/etc/shadow`). By typing `sudo` before a command, you run it with temporary administrator powers to bypass these blocks.',
    instructions: 'Let\'s test superuser powers. Run `cat /etc/shadow` to see the permission error. Then bypass it by running the command with admin privileges: `sudo cat /etc/shadow`.',
    commandHelp: [
      { cmd: 'sudo cat /etc/shadow', desc: 'Run a command with administrator/superuser privileges' },
      { cmd: 'cat /etc/shadow', desc: 'Read password hashes database (restricted)' }
    ],
    objectives: [
      { id: 'tried_without_sudo', text: 'Try "cat /etc/shadow" and observe permission error' },
      { id: 'ran_sudo_cat', text: 'Run "sudo cat /etc/shadow" successfully' }
    ],
    hints: [
      "You need administrator privileges to read restricted system files.",
      "First run cat /etc/shadow without sudo to see the error, then prepend it with sudo.",
      "Try running: cat /etc/shadow and then: sudo cat /etc/shadow"
    ],
    verify: (_fs, _session, history) => {
      const triedWithoutSudo = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const catIdx = parts.indexOf('cat');
        if (catIdx === -1 || parts.includes('sudo')) return false;
        const args = parts.slice(catIdx + 1);
        return args.some(arg => arg === '/etc/shadow' || arg === 'shadow' || arg === 'etc/shadow');
      });
      const ranSudoCat = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const catIdx = parts.indexOf('cat');
        if (catIdx === -1 || !parts.includes('sudo')) return false;
        const args = parts.slice(catIdx + 1);
        return args.some(arg => arg === '/etc/shadow' || arg === 'shadow' || arg === 'etc/shadow');
      });

      return {
        success: triedWithoutSudo && ranSudoCat,
        checks: [
          { id: 'tried_without_sudo', passed: triedWithoutSudo },
          { id: 'ran_sudo_cat', passed: ranSudoCat }
        ]
      };
    }
  },
  {
    id: 22,
    moduleId: 'system',
    title: 'Package Management (apt)',
    xp: 280,
    badge: 'Guru',
    description: 'Think of installing apps on your smartphone using the App Store or Google Play Store. It is safe, curated, and automated. In Linux, we use a command-line app store called a package manager to fetch and install software securely.\n\n- On Ubuntu/Debian systems, the standard package manager is `apt` (Advanced Packaging Tool).\n- Installing software changes system-wide folders, so you always need to authorize it using `sudo`. E.g., `sudo apt install tree` downloads and installs the directory visualizer "tree".',
    instructions: 'Let\'s install some software. Run `sudo apt install tree` to install the `tree` program. Once it finishes, run `tree` to visualize your home folder in a neat tree-like format.',
    commandHelp: [
      { cmd: 'sudo apt install tree', desc: 'Install the tree package' },
      { cmd: 'tree', desc: 'Run tree to visualize directories' }
    ],
    objectives: [
      { id: 'installed_tree', text: 'Install package "tree" using apt install' },
      { id: 'ran_tree', text: 'Run the "tree" command to visualize directories' }
    ],
    hints: [
      "Think about how to install packages on Ubuntu using the package manager with admin privileges.",
      "Run sudo apt install tree, and then visualize directories by running the tree command.",
      "Try running: sudo apt install tree and then tree"
    ],
    verify: (_fs, session, history) => {
      const installedTree = session.installedPackages.has('tree');
      const ranTree = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('tree');
      });

      return {
        success: installedTree && ranTree,
        checks: [
          { id: 'installed_tree', passed: installedTree },
          { id: 'ran_tree', passed: ranTree }
        ]
      };
    }
  },
  {
    id: 81,
    moduleId: 'system',
    title: 'Searching Packages (apt search)',
    xp: 180,
    badge: 'Cataloger',
    description: 'Before installing software on Linux, how do you discover what packages are available in the repository? In Linux, we use `apt search` to query the software catalog by keyword.\n\n- The `apt search <keyword>` command scans the repository descriptions and lists matching software packages along with their versions.\n- Unlike `apt install`, searching package repositories only reads local catalog index files and does **not** require superuser (`sudo`) privileges.',
    instructions: 'Let\'s search the package repository! Run `apt search tree` to find packages related to directory visualization in the software catalog.',
    commandHelp: [
      { cmd: 'apt search tree', desc: 'Search package repositories for packages matching "tree"' }
    ],
    objectives: [
      { id: 'ran_apt_search', text: 'Run "apt search tree" to query the package catalog' }
    ],
    hints: [
      "Use the apt search command followed by the name or keyword of the package you want to look up.",
      "Run apt search tree to view available packages in the repository.",
      "Try running: apt search tree"
    ],
    verify: (_fs, _session, history) => {
      const ranAptSearch = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const aptIdx = parts.indexOf('apt');
        if (aptIdx === -1) return false;
        return parts[aptIdx + 1] === 'search' && parts.length > aptIdx + 2;
      });

      return {
        success: ranAptSearch,
        checks: [
          { id: 'ran_apt_search', passed: ranAptSearch }
        ]
      };
    }
  },
  {
    id: 82,
    moduleId: 'system',
    title: 'Purging Packages (apt purge)',
    xp: 180,
    badge: 'Purger',
    description: 'When uninstalling software on Linux, standard `apt remove` uninstalls application binaries but leaves system configuration files behind in case you reinstall later. To completely eliminate a software package AND erase all associated configuration files, we use `apt purge` (or `apt remove --purge`).\n\n- The `sudo apt purge <package>` command removes the application and wipes out all remaining configuration files.\n- Because purging modifies system-wide folders and configuration files, it requires superuser (`sudo`) privileges.',
    instructions: 'Let\'s completely remove a package and its configuration files. Run `sudo apt purge tree` to purge the `tree` program from the system.',
    commandHelp: [
      { cmd: 'sudo apt purge tree', desc: 'Purge package and wipe its configuration files' }
    ],
    objectives: [
      { id: 'purged_tree', text: 'Purge package "tree" using "sudo apt purge tree"' }
    ],
    hints: [
      "Use apt purge with superuser privileges to completely remove a package along with its configuration files.",
      "Run sudo apt purge tree to purge the tree package.",
      "Try running: sudo apt purge tree"
    ],
    verify: (_fs, _session, history) => {
      const ranAptPurge = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const hasSudo = parts.includes('sudo');
        const aptIdx = parts.indexOf('apt');
        if (aptIdx === -1 || !hasSudo) return false;
        const subCmd = parts[aptIdx + 1];
        const pkg = parts[aptIdx + 2];
        if (subCmd === 'purge' && pkg === 'tree') return true;
        if (subCmd === 'remove' && parts.includes('--purge') && (pkg === 'tree' || parts.includes('tree'))) return true;
        return false;
      });

      return {
        success: ranAptPurge,
        checks: [
          { id: 'purged_tree', passed: ranAptPurge }
        ]
      };
    }
  },
  {
    id: 68,
    moduleId: 'system',
    title: 'Debian Package Management (dpkg)',
    xp: 160,
    badge: 'Packager',
    description: 'While `apt` automates downloading and resolving package dependencies from repositories, what if you have already downloaded a `.deb` package file manually and want to inspect or install it? In Linux, we use `dpkg` (Debian Package) to interact with packages directly.\n\n- The `dpkg -l` command lists all packages currently installed on your Debian/Ubuntu system.\n- The `dpkg -s <package>` command displays status, version, and architecture information for a specific package.',
    instructions: 'Let\'s query the local package database. Check the list of packages by running `dpkg -l`. Then, query details for the `tree` program by running `dpkg -s tree`.',
    commandHelp: [
      { cmd: 'dpkg -l', desc: 'List installed Debian packages' },
      { cmd: 'dpkg -s tree', desc: 'Display details of the tree package' }
    ],
    objectives: [
      { id: 'ran_dpkg_l', text: 'Run "dpkg -l" to list packages' },
      { id: 'ran_dpkg_s', text: 'Run "dpkg -s tree" to query details' }
    ],
    hints: [
      "Use dpkg -l to retrieve the complete package list.",
      "Check the status of the tree package using dpkg -s tree.",
      "Try running: dpkg -l followed by dpkg -s tree"
    ],
    verify: (_fs, _session, history) => {
      const ranDpkgL = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('dpkg') && parts.includes('-l');
      });
      const ranDpkgS = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('dpkg') && parts.includes('-s') && parts.includes('tree');
      });
      return {
        success: ranDpkgL && ranDpkgS,
        checks: [
          { id: 'ran_dpkg_l', passed: ranDpkgL },
          { id: 'ran_dpkg_s', passed: ranDpkgS }
        ]
      };
    }
  },
  {
    id: 69,
    moduleId: 'system',
    title: 'RedHat Package Managers (yum & dnf)',
    xp: 160,
    badge: 'Fedora',
    description: 'Not all Linux environments are based on Debian/Ubuntu. If you work on RedHat, Fedora, or CentOS systems, you won\'t find `apt` or `dpkg`. Instead, you\'ll manage packages using older `yum` or modern `dnf` (Dandified YUM) package managers.\n\n- The `dnf check-update` (or `yum check-update`) command connects to RedHat repositories to scan for available package updates.\n- The `dnf install <package>` command fetches and installs programs similar to `apt install`.',
    instructions: 'Let\'s run updates on a RedHat-based simulator. Check for packages needing updates by running `dnf check-update` (or `yum check-update`).',
    commandHelp: [
      { cmd: 'dnf check-update', desc: 'Check for RedHat package updates' },
      { cmd: 'yum check-update', desc: 'Check for legacy CentOS updates' }
    ],
    objectives: [
      { id: 'checked_updates', text: 'Run dnf check-update or yum check-update' }
    ],
    hints: [
      "Use either the dnf or yum command with the check-update argument.",
      "Try running: dnf check-update"
    ],
    verify: (_fs, _session, history) => {
      const checkedUpdates = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return (parts.includes('dnf') || parts.includes('yum')) && parts.includes('check-update');
      });
      return {
        success: checkedUpdates,
        checks: [
          { id: 'checked_updates', passed: checkedUpdates }
        ]
      };
    }
  },
  {
    id: 111,
    moduleId: 'system',
    title: 'Updating vs. Upgrading (apt update & apt upgrade)',
    xp: 170,
    badge: 'SysUpdater',
    description: 'New system administrators often confuse updating and upgrading. In Debian and Ubuntu environments:\n\n- `sudo apt update`: Refreshes your local cache of package lists from upstream repository servers (`/etc/apt/sources.list`). It discovers which newer package versions exist, but **does not modify or upgrade any software** on disk.\n- `sudo apt upgrade`: Compares your currently installed software against the refreshed list and downloads/installs the newer package versions.\n\nRunning `apt upgrade` without running `apt update` first will either install outdated versions or fail completely because your system does not know newer releases exist!',
    instructions: 'Refresh your local package repository cache with `sudo apt update`, then upgrade installed packages to their latest versions with `sudo apt upgrade`.',
    commandHelp: [
      { cmd: 'sudo apt update', desc: 'Refresh package repository index lists' },
      { cmd: 'sudo apt upgrade', desc: 'Upgrade installed packages to newest versions' }
    ],
    objectives: [
      { id: 'apt_updated', text: 'Run "sudo apt update" to refresh repository index' },
      { id: 'apt_upgraded', text: 'Run "sudo apt upgrade" to upgrade installed packages' }
    ],
    hints: [
      "Both commands require administrative privileges: precede them with sudo.",
      "First run sudo apt update to fetch updated package definitions.",
      "Then run sudo apt upgrade to apply the upgrades."
    ],
    verify: (_fs, session, history) => {
      const aptUpdated = (session && session.aptUpdated) || history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('apt') && parts.includes('update');
      });
      const aptUpgraded = (session && session.aptUpgraded) || history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('apt') && parts.includes('upgrade');
      });
      return {
        success: Boolean(aptUpdated && aptUpgraded),
        checks: [
          { id: 'apt_updated', passed: Boolean(aptUpdated) },
          { id: 'apt_upgraded', passed: Boolean(aptUpgraded) }
        ]
      };
    }
  },
  {
    id: 112,
    moduleId: 'system',
    title: 'Universal & RPM Packages (rpm & snap)',
    xp: 180,
    badge: 'UniversalPkg',
    description: 'In cross-distribution Linux environments, you will frequently encounter formats beyond Debian `.deb` packages:\n\n- **RPM (`rpm`)**: The native package format for RedHat, CentOS, and Fedora. Use `rpm -qa` to list every installed RPM package, and `rpm -qi <package>` to query deep metadata (version, build architecture, signature, description).\n- **Snap (`snap`)**: Canonical\'s universal containerized package system. Snaps bundle all dependencies in an isolated sandbox across any Linux distro. Inspect installed snaps with `snap list` and install new tools with `sudo snap install <package>`.',
    instructions: 'Audit RPM packages with `rpm -qa` and `rpm -qi nginx`, then inspect installed universal snap packages with `snap list` and install a snap package with `sudo snap install lxd`.',
    commandHelp: [
      { cmd: 'rpm -qa', desc: 'Query all installed RPM packages' },
      { cmd: 'rpm -qi nginx', desc: 'Query detailed package information' },
      { cmd: 'snap list', desc: 'List installed sandboxed snap packages' },
      { cmd: 'sudo snap install lxd', desc: 'Install container runtime via snap' }
    ],
    objectives: [
      { id: 'rpm_queried', text: 'Query RPM packages using rpm -qa or rpm -qi' },
      { id: 'snap_used', text: 'List or install snaps using snap list or sudo snap install' }
    ],
    hints: [
      "Run rpm -qa to list packages, or rpm -qi nginx to view package metadata.",
      "Run snap list to inspect snaps, or sudo snap install lxd to install one."
    ],
    verify: (_fs, _session, history) => {
      const rpmQueried = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('rpm') && (parts.includes('-qa') || parts.includes('-qi') || parts.includes('-q'));
      });
      const snapUsed = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('snap') && (parts.includes('list') || parts.includes('install'));
      });
      return {
        success: Boolean(rpmQueried && snapUsed),
        checks: [
          { id: 'rpm_queried', passed: Boolean(rpmQueried) },
          { id: 'snap_used', passed: Boolean(snapUsed) }
        ]
      };
    }
  },
  {
    id: 23,
    moduleId: 'resources',
    title: 'Checking Disk Space (df)',
    xp: 150,
    badge: 'Spacer',
    description: 'Imagine trying to download a huge video game and getting a "storage full" error, but you aren\'t sure which disk drive is the bottleneck. In Linux, we check our system\'s storage capacity using the `df` (disk free) command.\n\n- The `df` command displays the total, used, and available space on all your connected drives.\n- By running `df -h` (adding the `-h` flag for "human-readable"), you see storage in friendly gigabytes (G) and megabytes (M) instead of confusing block counts, making it easy to spot which drive (like `/` or `/home`) is full.\n\n**Why this matters**: If you run `df` without `-h`, the sizes are displayed in raw 1K-block numbers (e.g., `49258284` instead of `47G`), which is extremely hard for a human to read and calculate. The `-h` flag formats these sizes into human-friendly gigabytes (G) and megabytes (M).',
    instructions: 'Let\'s check our system storage. Run `df -h` to see how much space is left on your partitions in a human-readable format.',
    commandHelp: [
      { cmd: 'df -h', desc: 'Show free disk space on filesystems in human-readable format' }
    ],
    objectives: [
      { id: 'ran_df_h', text: 'Run the "df -h" command' }
    ],
    hints: [
      "Think about which command shows free disk space.",
      "Use the 'df' command with the human-readable option.",
      "Try running: df -h"
    ],
    verify: (_fs, _session, history) => {
      const ranDfH = hasCommandInHistory(history, seg => seg.command === 'df' && seg.hasAnyFlag('h', 'H', 'human-readable'));
      return {
        success: Boolean(ranDfH),
        checks: [
          { id: 'ran_df_h', passed: Boolean(ranDfH) }
        ]
      };
    }
  },
  {
    id: 24,
    moduleId: 'resources',
    title: 'Finding Directory Sizes (du)',
    xp: 150,
    badge: 'Weigher',
    description: 'Once you know *which* drive is full, how do you find the specific folder that is hoarding all your space? Is it your downloads folder, or maybe some hidden cache? We solve this mystery using the `du` (disk usage) command.\n\n- `du <directory>` lists the size of a folder and every subfolder inside it.\n- `du -sh <directory>` (where `-s` means "summary" and `-h` means "human-readable") calculates and prints a single, clean total size for that specific folder.\n\n**Why this matters**: If you run `du` without `-s`, it will dump a massive wall of text listing every single individual subdirectory and file recursively, rather than giving a single summary. The `-s` flag summarizes the total size of the folder, and `-h` makes it human-readable.',
    instructions: 'Let\'s track down storage hogs. Calculate the total size of the learner\'s home directory by running `du -sh /home/learner`.',
    commandHelp: [
      { cmd: 'du -sh /home/learner', desc: 'Display total size of the learner home directory' }
    ],
    objectives: [
      { id: 'ran_du', text: 'Run "du" with options -s and -h' }
    ],
    hints: [
      "Think about which command checks disk usage for folders.",
      "Use the 'du' command with summary (-s) and human-readable (-h) options.",
      "Try running: du -sh /home/learner"
    ],
    verify: (_fs, _session, history) => {
      const ranDu = hasCommandInHistory(history, seg => seg.command === 'du' && (seg.hasFlag('s', 'h') || (seg.hasAnyFlag('s', 'summary') && seg.hasAnyFlag('h', 'human-readable'))));
      return {
        success: Boolean(ranDu),
        checks: [
          { id: 'ran_du', passed: Boolean(ranDu) }
        ]
      };
    }
  },
  {
    id: 25,
    moduleId: 'resources',
    title: 'Checking Memory Usage (free)',
    xp: 150,
    badge: 'RAM-Watcher',
    description: 'Imagine your laptop starts lagging, web pages freeze, and switching apps feels painfully slow. This usually means your computer is running out of active memory (RAM). In Linux, we can check how much breathing room our system has using the `free` command.\n\n- The `free` command shows total, used, and available physical memory (RAM) and swap space.\n- Adding the `-h` flag (running `free -h`) formats the memory sizes into easy-to-read gigabytes (GB) and megabytes (MB) so you can tell if a program is eating up all your resources.\n\n**Why this matters**: If you run `free` without `-h`, memory usage is printed in raw kilobytes (e.g., `16323456` instead of `16G`), which is difficult to interpret quickly. The `-h` flag automatically scales the numbers to gigabytes (G) or megabytes (M) for easy reading.',
    instructions: 'Let\'s check the system\'s memory. Check the available RAM in human-readable format by running `free -h`.',
    commandHelp: [
      { cmd: 'free -h', desc: 'Display RAM usage in human-readable format' }
    ],
    objectives: [
      { id: 'ran_free', text: 'Run "free" with the -h or -m option' }
    ],
    hints: [
      "Think about which command displays memory statistics.",
      "Use the 'free' command with human-readable option.",
      "Try running: free -h"
    ],
    verify: (_fs, _session, history) => {
      const ranFree = hasCommandInHistory(history, seg => seg.command === 'free' && seg.hasAnyFlag('h', 'm', 'g', 'human', 'mega', 'giga'));
      return {
        success: Boolean(ranFree),
        checks: [
          { id: 'ran_free', passed: Boolean(ranFree) }
        ]
      };
    }
  },
  {
    id: 26,
    moduleId: 'resources',
    title: 'System Uptime & Kernel Details',
    xp: 160,
    badge: 'Inspector',
    description: 'Imagine troubleshooting a server that started misbehaving and needing to know if it recently rebooted, or checking exactly what operating system version is running under the hood. We can query these system details in seconds:\n\n- The `uptime` command tells you exactly how long your machine has been running since its last boot, along with how busy it has been (system load).\n- The `uname -a` (unix name) command prints a full report of your system\'s kernel, platform name, and machine architecture.\n\n**Why this matters**: If you run `uname` without `-a`, it only outputs the basic operating system name (e.g., `Linux`). It leaves out critical details like the kernel version, platform name, and processor architecture. The `-a` flag prints all available system details in a single report.',
    instructions: 'Let\'s inspect the system stats. Run `uptime` to check how long the system has been running, and then run `uname -a` to print the full kernel and machine details.',
    commandHelp: [
      { cmd: 'uptime', desc: 'Show how long the system has been running' },
      { cmd: 'uname -a', desc: 'Print all system and kernel information' }
    ],
    objectives: [
      { id: 'ran_uptime', text: 'Run the "uptime" command' },
      { id: 'ran_uname', text: 'Run the "uname -a" command' }
    ],
    hints: [
      "You need to run two commands: one for system uptime and one for kernel info.",
      "Use the 'uptime' command, and 'uname' with the -a flag.",
      "Try running: uptime and then: uname -a"
    ],
    verify: (_fs, _session, history) => {
      const ranUptime = hasCommandInHistory(history, seg => seg.command === 'uptime');
      const ranUname = hasCommandInHistory(history, seg => seg.command === 'uname' && seg.hasAnyFlag('a', 'r', 'all', 'kernel-release'));
      return {
        success: Boolean(ranUptime && ranUname),
        checks: [
          { id: 'ran_uptime', passed: Boolean(ranUptime) },
          { id: 'ran_uname', passed: Boolean(ranUname) }
        ]
      };
    }
  },
  {
    id: 65,
    moduleId: 'resources',
    title: 'Viewing CPU Details (lscpu)',
    xp: 150,
    badge: 'Hardware-Guru',
    description: 'When troubleshooting system performance or deploying high-demand applications, you need to know the capabilities of your system\'s CPU. In Linux, we read detailed CPU architecture information using the `lscpu` command.\n\n- The `lscpu` command displays processor details such as the CPU model, vendor, clock speed, number of cores, hyper-threading details, and cache sizes, directly from the kernel filesystem.',
    instructions: 'Let\'s inspect the processor. Run `lscpu` to view your system\'s CPU details.',
    commandHelp: [
      { cmd: 'lscpu', desc: 'Display CPU architecture information' }
    ],
    objectives: [
      { id: 'ran_lscpu', text: 'Run the "lscpu" command' }
    ],
    hints: [
      "Simply run the lscpu command to display processor configuration.",
      "Try running: lscpu"
    ],
    verify: (_fs, _session, history) => {
      const ranLscpu = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('lscpu');
      });
      return {
        success: ranLscpu,
        checks: [
          { id: 'ran_lscpu', passed: ranLscpu }
        ]
      };
    }
  },
  {
    id: 80,
    moduleId: 'resources',
    title: 'I/O & CPU Stats (iostat)',
    xp: 170,
    badge: 'IO_Watch',
    description: 'When a database or web application runs slowly, how do you determine if the problem is a CPU bottleneck or a slow hard drive? In Linux, we monitor system output/input performance metrics using `iostat`.\n\n- The `iostat` command displays report statistics on CPU usage and active device read/write throughput, helping you identify disk congestion.',
    instructions: 'Let\'s check performance logs. Run the `iostat` command to print I/O statistics.',
    commandHelp: [
      { cmd: 'iostat', desc: 'Display input/output statistics' }
    ],
    objectives: [
      { id: 'ran_iostat', text: 'Run the "iostat" command' }
    ],
    hints: [
      "Type iostat in the terminal and press Enter.",
      "Try running: iostat"
    ],
    verify: (_fs, _session, history) => {
      const ranIostat = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('iostat');
      });
      return {
        success: ranIostat,
        checks: [
          { id: 'ran_iostat', passed: ranIostat }
        ]
      };
    }
  },
  {
    id: 113,
    moduleId: 'resources',
    title: 'Block Devices & Partitions (lsblk & blkid)',
    xp: 180,
    badge: 'DiskArchitect',
    description: 'Before a disk can store files, it is divided into storage blocks and partitions formatted with filesystems. In Linux:\n\n- `lsblk`: Lists block storage devices (hard drives, NVMe SSDs, flash drives) in an intuitive tree showing parent drives (like `sda`, `sdb`), child partitions (like `sda1`, `sdb1`), sizes, and active mountpoints. Adding `-f` shows filesystem types and UUIDs.\n- `sudo blkid`: Queries disk headers directly to print device Universally Unique Identifiers (UUIDs), filesystem formats (such as `ext4`, `xfs`, `vfat`), and partition labels used in boot and mount configurations.',
    instructions: 'Inspect the block storage hierarchy using `lsblk` (or `lsblk -f`), and locate device UUIDs using `sudo blkid`.',
    commandHelp: [
      { cmd: 'lsblk', desc: 'List block storage devices and partitions' },
      { cmd: 'lsblk -f', desc: 'Display filesystem types and UUIDs for block devices' },
      { cmd: 'sudo blkid', desc: 'Query block device UUIDs and filesystem metadata' }
    ],
    objectives: [
      { id: 'lsblk_inspected', text: 'Run lsblk or lsblk -f to inspect block devices' },
      { id: 'blkid_inspected', text: 'Run sudo blkid to view partition UUIDs' }
    ],
    hints: [
      "Type lsblk to display device hierarchy.",
      "Run sudo blkid to retrieve partition identifiers and filesystem attributes."
    ],
    verify: (_fs, _session, history) => {
      const lsblkInspected = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('lsblk');
      });
      const blkidInspected = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('blkid');
      });
      return {
        success: Boolean(lsblkInspected && blkidInspected),
        checks: [
          { id: 'lsblk_inspected', passed: Boolean(lsblkInspected) },
          { id: 'blkid_inspected', passed: Boolean(blkidInspected) }
        ]
      };
    }
  },
  {
    id: 114,
    moduleId: 'resources',
    title: 'Mounting Filesystems (mount, umount & /etc/fstab)',
    xp: 190,
    badge: 'MountMaster',
    description: 'In Unix systems, disk drives do not have isolated drive letters like `C:\\` or `D:\\`. Instead, all filesystems attach into a unified directory tree:\n\n- `sudo mount <device> <directory>`: Attaches a formatted block partition (e.g. `/dev/sdb1`) into an existing directory folder (the "mountpoint", e.g. `/mnt/data`).\n- `sudo umount <directory>`: Safely detaches the filesystem, committing unwritten buffers to disk before unplugging or reformatting.\n- `/etc/fstab`: The static filesystem table file describing which partitions automatically mount at boot time, their mount options, and dump/fsck pass priorities.',
    instructions: 'Inspect static mounts with `cat /etc/fstab`, mount partition `/dev/sdb1` to `/mnt/data` with `sudo mount /dev/sdb1 /mnt/data`, and unmount it cleanly with `sudo umount /mnt/data`.',
    commandHelp: [
      { cmd: 'cat /etc/fstab', desc: 'Inspect static filesystem mount table' },
      { cmd: 'sudo mount /dev/sdb1 /mnt/data', desc: 'Mount block partition to directory' },
      { cmd: 'sudo umount /mnt/data', desc: 'Unmount filesystem from directory' }
    ],
    objectives: [
      { id: 'fstab_inspected', text: 'Inspect /etc/fstab' },
      { id: 'partition_mounted', text: 'Mount /dev/sdb1 to /mnt/data' },
      { id: 'partition_unmounted', text: 'Unmount /mnt/data' }
    ],
    hints: [
      "Use cat /etc/fstab to view the system mount configuration.",
      "Mounting and unmounting requires root: run sudo mount /dev/sdb1 /mnt/data.",
      "Unmount the directory using sudo umount /mnt/data."
    ],
    verify: (_fs, _session, history) => {
      const fstabInspected = history.some(cmd => cmd.includes('fstab'));
      const partitionMounted = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('mount') && !parts.includes('umount') && (cmd.includes('/dev/sdb1') || cmd.includes('/mnt/data'));
      });
      const partitionUnmounted = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('umount') && (cmd.includes('/mnt/data') || cmd.includes('/dev/sdb1'));
      });
      return {
        success: Boolean(fstabInspected && partitionMounted && partitionUnmounted),
        checks: [
          { id: 'fstab_inspected', passed: Boolean(fstabInspected) },
          { id: 'partition_mounted', passed: Boolean(partitionMounted) },
          { id: 'partition_unmounted', passed: Boolean(partitionUnmounted) }
        ]
      };
    }
  },
  {
    id: 115,
    moduleId: 'resources',
    title: 'Kernel Ring Buffer & Hardware Logs (dmesg)',
    xp: 190,
    badge: 'KernelSpectator',
    description: 'When hardware devices attach, drives fail, or the Linux kernel encounters system memory exhaustion, kernel messages are written to a special memory area called the **Kernel Ring Buffer**.\n\n- `dmesg`: Dumps raw kernel boot and runtime log messages.\n- `dmesg -T`: Converts raw timestamps into readable date and time strings.\n- Pipelining `dmesg | grep -i error` or filtering for "Out of memory" reveals low-level driver failures and Out-Of-Memory (OOM) killer terminations.',
    instructions: 'Display human-readable kernel ring buffer events with `dmesg -T` (or `sudo dmesg -T`), and search for system error events using `sudo dmesg | grep -i error`.',
    commandHelp: [
      { cmd: 'dmesg -T', desc: 'Display kernel messages with human-readable timestamps' },
      { cmd: 'sudo dmesg | grep -i error', desc: 'Filter kernel buffer for errors and hardware events' }
    ],
    objectives: [
      { id: 'dmesg_timestamps', text: 'Run dmesg with -T flag for human timestamps' },
      { id: 'dmesg_errors_searched', text: 'Search kernel ring buffer for errors using dmesg | grep -i error' }
    ],
    hints: [
      "Use dmesg -T to view readable timestamps.",
      "Pipe dmesg output into grep: sudo dmesg | grep -i error."
    ],
    verify: (_fs, _session, history) => {
      const dmesgTimestamps = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('dmesg') && (parts.includes('-T') || parts.includes('--ctime'));
      });
      const dmesgErrorsSearched = history.some(cmd => {
        return cmd.includes('dmesg') && cmd.includes('grep');
      });
      return {
        success: Boolean(dmesgTimestamps && dmesgErrorsSearched),
        checks: [
          { id: 'dmesg_timestamps', passed: Boolean(dmesgTimestamps) },
          { id: 'dmesg_errors_searched', passed: Boolean(dmesgErrorsSearched) }
        ]
      };
    }
  },
  {
    id: 27,
    moduleId: 'processes',
    title: 'Listing Running Processes (ps)',
    xp: 180,
    badge: 'Tracker',
    description: 'Think of your operating system as a busy office where every employee (or running program) is assigned a unique name tag called a Process ID (PID). In Linux, we call these active programs **processes**, and we list them using the `ps` command.\n\n- Running `ps` by itself only shows programs running inside your current terminal window.\n- Running `ps aux` acts like a master office registry, listing every single active program running across the entire system, who started it, and how much CPU and memory it is using.\n\n**Why this matters**: If you run `ps` without `aux`, you will only see processes running in your current terminal window (usually just `bash` and `ps` itself). You won\'t see background services, system processes, or programs run by other users. The `aux` options reveal all running processes system-wide.',
    instructions: 'Let\'s check the registry. Run `ps aux` to list all running processes on the laptop, and notice columns like PID, %CPU, and %MEM.',
    commandHelp: [
      { cmd: 'ps aux', desc: 'List all running processes on the system' }
    ],
    objectives: [
      { id: 'ran_ps_aux', text: 'Run the "ps aux" command' }
    ],
    hints: [
      "Think about which command lists processes, and how to list all processes on the system.",
      "Use the 'ps' command with the aux options.",
      "Try running: ps aux"
    ],
    verify: (_fs, _session, history) => {
      const ranPs = hasCommandInHistory(history, (seg, raw) => seg.command === 'ps' && (seg.hasFlag('a', 'u', 'x') || seg.hasFlag('e', 'f') || seg.hasAnyFlag('aux', '-aux', '-ef', 'ef', 'axu')));
      return {
        success: Boolean(ranPs),
        checks: [
          { id: 'ran_ps_aux', passed: Boolean(ranPs) }
        ]
      };
    }
  },
  {
    id: 28,
    moduleId: 'processes',
    title: 'Interactive Process Monitor (top)',
    xp: 180,
    badge: 'Monitor',
    description: 'Imagine looking at a static photo of a highway versus watching a live traffic camera feed. While `ps` gives you a quick snapshot of what is running right now, `top` lets you watch your system\'s performance live.\n\n- The `top` command launches an interactive, real-time dashboard that updates every few seconds. It displays CPU usage, load averages, and dynamically ranks the most resource-heavy processes running at this exact moment.',
    instructions: 'Let\'s watch the live feed. Launch the interactive process monitor by running the `top` command.',
    commandHelp: [
      { cmd: 'top', desc: 'Launch interactive process monitor' }
    ],
    objectives: [
      { id: 'ran_top', text: 'Run the "top" command' }
    ],
    hints: [
      "Think about which command launches the interactive process monitor.",
      "Use the 'top' or 'htop' command.",
      "Try running: top"
    ],
    verify: (_fs, _session, history) => {
      const ranTop = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('top') || parts.includes('htop');
      });
      return {
        success: ranTop,
        checks: [
          { id: 'ran_top', passed: ranTop }
        ]
      };
    }
  },
  {
    id: 64,
    moduleId: 'processes',
    title: 'Listing Open Files (lsof)',
    xp: 200,
    badge: 'File-Tracker',
    description: 'In Unix-like systems, "everything is a file." This means not only text files and folders, but also network sockets, system hardware, and processes are treated as files. To find out which files are being accessed by which running programs, we use `lsof` (List Open Files).\n\n- Running `lsof` displays a comprehensive list of all open files, along with the Process ID (PID) and command that opened them.\n- E.g., running `lsof -i` lists all network files/sockets, which is extremely useful for discovering which process is listening on a specific network port (like port 80).',
    instructions: 'Let\'s inspect our active connections and files. Run `lsof` to see all open files in the system.',
    commandHelp: [
      { cmd: 'lsof', desc: 'List all open files on the system' }
    ],
    objectives: [
      { id: 'ran_lsof', text: 'Run the "lsof" command' }
    ],
    hints: [
      "Use the 'lsof' command with no arguments to list all open files.",
      "Try running: lsof"
    ],
    verify: (_fs, _session, history) => {
      const ranLsof = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('lsof');
      });
      return {
        success: ranLsof,
        checks: [
          { id: 'ran_lsof', passed: ranLsof }
        ]
      };
    }
  },
  {
    id: 29,
    moduleId: 'processes',
    title: 'Stopping Rogue Processes (kill)',
    xp: 200,
    badge: 'Terminator',
    description: 'Imagine an app on your phone freezes up, completely locking your screen, and you need to force-close it to get things running smoothly again. In Linux, we stop misbehaving or frozen programs by using the `kill` command followed by the program\'s Process ID (PID).\n\n- Running `kill 1234` sends a polite request asking the program to save its work and close down.\n- If it is frozen and ignores the polite request, `kill -9 1234` forces the operating system to shut it down instantly. We have a runaway process with PID `9999` hogging all our CPU right now—let\'s shut it down!',
    instructions: 'Let\'s stop the rogue process. Force-close the process with PID `9999` by running `kill 9999`.',
    commandHelp: [
      { cmd: 'kill 9999', desc: 'Terminate process with PID 9999' }
    ],
    objectives: [
      { id: 'process_killed', text: 'Stop the rogue process with PID 9999' }
    ],
    hints: [
      "Think about which command terminates processes by their ID.",
      "Use the 'kill' command followed by the process ID 9999.",
      "Try running: kill 9999"
    ],
    verify: (_fs, session, _history) => {
      const processKilled = !session.rogueProcessAlive;
      return {
        success: processKilled,
        checks: [
          { id: 'process_killed', passed: processKilled }
        ]
      };
    }
  },
  {
    id: 30,
    moduleId: 'processes',
    title: 'Running Jobs in the Background',
    xp: 220,
    badge: 'Juggler',
    description: 'Imagine trying to copy a massive folder to a USB drive, but while it copies, you want to keep working and typing other commands in the same window. In Linux, we can run time-consuming tasks in the "background" so they don\'t lock up our command line.\n\n- Adding an ampersand `&` to the end of a command (like `sleep 100 &`) tells the terminal to run it in the background and give you your prompt back immediately.\n- The `jobs` command shows what is currently running in the background.\n- The `fg` (foreground) command pulls a background task back to center stage.',
    instructions: 'Let\'s multi-task. Run `sleep 100 &` to start a background task, check it with `jobs`, and then pull it back to the foreground by running `fg`.',
    commandHelp: [
      { cmd: 'sleep 100 &', desc: 'Run sleep in the background' },
      { cmd: 'jobs', desc: 'List background jobs' },
      { cmd: 'fg', desc: 'Bring background job to foreground' }
    ],
    objectives: [
      { id: 'ran_bg_job', text: 'Run a sleep command in the background (&)' },
      { id: 'ran_jobs', text: 'Run the "jobs" command' },
      { id: 'ran_fg', text: 'Bring the job back to foreground with "fg"' }
    ],
    hints: [
      "To run a job in the background, append an ampersand (&) to the command.",
      "Run sleep 100 in background, check with jobs, and bring back with fg.",
      "Try running: sleep 100 & followed by jobs and then fg"
    ],
    verify: (_fs, _session, history) => {
      const ranBgJob = history.some(cmd => /sleep\s+\d+\s*&/.test(cmd));
      const ranJobs = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('jobs');
      });
      const ranFg = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('fg');
      });
      return {
        success: ranBgJob && ranJobs && ranFg,
        checks: [
          { id: 'ran_bg_job', passed: ranBgJob },
          { id: 'ran_jobs', passed: ranJobs },
          { id: 'ran_fg', passed: ranFg }
        ]
      };
    }
  },
  {
    id: 78,
    moduleId: 'processes',
    title: 'Process Niceness (nice & renice)',
    xp: 180,
    badge: 'Polite',
    description: 'In a busy office, some low-priority tasks (like filing receipts) can wait, while high-priority requests must be handled immediately. Linux manages process priority using **niceness** values ranging from -20 (highest priority) to 19 (lowest priority).\n\n- The `nice` command launches a process with a customized priority. E.g. `nice -n 10 sleep 5` starts a sleep command with a polite priority of 10.\n- The `renice` command alters the scheduling priority of an already-running process. E.g., `sudo renice +5 9999` lowers the priority of process 9999.',
    instructions: 'Let\'s adjust priorities. Run a low-priority command using `nice -n 10 sleep 5`. Then, lower the priority of the running rogue process 9999 by running `sudo renice +5 9999`.',
    commandHelp: [
      { cmd: 'nice -n 10 sleep 5', desc: 'Start sleep with a niceness value of 10' },
      { cmd: 'sudo renice +5 9999', desc: 'Lower priority of PID 9999' }
    ],
    objectives: [
      { id: 'used_nice', text: 'Run the "nice" command with -n 10' },
      { id: 'used_renice', text: 'Run the "renice" command with sudo' }
    ],
    hints: [
      "Use nice -n 10 sleep 5 to initiate a nice process.",
      "Alter the active PID priority using sudo renice +5 9999.",
      "Try running: nice -n 10 sleep 5 and sudo renice +5 9999"
    ],
    verify: (_fs, _session, history) => {
      const usedNice = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('nice') && parts.includes('-n') && parts.includes('10');
      });
      const usedRenice = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('renice') && parts.includes('+5') && parts.includes('9999') && parts.includes('sudo');
      });
      return {
        success: usedNice && usedRenice,
        checks: [
          { id: 'used_nice', passed: usedNice },
          { id: 'used_renice', passed: usedRenice }
        ]
      };
    }
  },
  {
    id: 79,
    moduleId: 'processes',
    title: 'Resuming Background Jobs (bg)',
    xp: 170,
    badge: 'Backgrounder',
    description: 'We already saw how to start a task in the background using `&` and bring it back using `fg`. But what if you started a command without `&`, or suspended it with `Ctrl+Z`? You can resume it in the background using `bg`!\n\n- The `bg` command resumes suspended jobs, allowing them to run in the background without blocking your terminal prompt.',
    instructions: 'Let\'s run a background job. Start `sleep 200 &` in the background, run `jobs` to list active jobs, and then run `bg` to ensure it resumes running.',
    commandHelp: [
      { cmd: 'sleep 200 &', desc: 'Start background process' },
      { cmd: 'jobs', desc: 'List active background jobs' },
      { cmd: 'bg', desc: 'Resume background jobs' }
    ],
    objectives: [
      { id: 'ran_sleep_bg', text: 'Start a sleep command with &' },
      { id: 'ran_jobs', text: 'Run the "jobs" command' },
      { id: 'ran_bg', text: 'Run the "bg" command' }
    ],
    hints: [
      "Run sleep 200 & followed by jobs and finally bg."
    ],
    verify: (_fs, _session, history) => {
      const ranSleepBg = history.some(cmd => /sleep\s+\d+\s*&/.test(cmd));
      const ranJobs = history.some(cmd => cmd.trim().split(/\s+/).includes('jobs'));
      const ranBg = history.some(cmd => cmd.trim().split(/\s+/).includes('bg'));
      return {
        success: ranSleepBg && ranJobs && ranBg,
        checks: [
          { id: 'ran_sleep_bg', passed: ranSleepBg },
          { id: 'ran_jobs', passed: ranJobs },
          { id: 'ran_bg', passed: ranBg }
        ]
      };
    }
  },
  {
    id: 116,
    moduleId: 'processes',
    title: 'Finding & Killing Processes by Name (pgrep, pkill, killall)',
    xp: 180,
    badge: 'ProcessHunter',
    description: 'In fast-paced system operations, looking up process IDs with `ps aux | grep name` just to pass a numerical PID into `kill` is slow and error-prone. Linux provides process lookup and signal tools that operate directly by process name:\n\n- `pgrep <pattern>`: Scans active processes and returns matching PIDs. Adding `-a` outputs the full command line alongside the PID.\n- `pkill <pattern>`: Sends termination signals directly to all processes matching the pattern (e.g. `pkill -9 miner`).\n- `killall <name>`: Kills processes matching the exact binary executable name.',
    instructions: 'Locate the running web server processes with `pgrep -a nginx`, then terminate the unauthorized crypto-miner process with `pkill -9 miner` (or `killall miner`).',
    commandHelp: [
      { cmd: 'pgrep -a nginx', desc: 'Find process IDs and full command lines matching nginx' },
      { cmd: 'pkill -9 miner', desc: 'Forcefully kill all processes matching miner' },
      { cmd: 'killall miner', desc: 'Kill all processes with the exact name miner' }
    ],
    objectives: [
      { id: 'pgrep_used', text: 'Search for nginx processes with pgrep -a nginx' },
      { id: 'miner_killed', text: 'Kill rogue miner process with pkill -9 miner or killall miner' }
    ],
    hints: [
      "Use pgrep -a nginx to view matching processes and arguments.",
      "Send a kill signal to miner using pkill -9 miner or killall miner."
    ],
    verify: (_fs, session, history) => {
      const pgrepUsed = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('pgrep');
      });
      const minerKilled = (session && session.minerAlive === false) || history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return (parts.includes('pkill') || parts.includes('killall')) && parts.includes('miner');
      });
      return {
        success: Boolean(pgrepUsed && minerKilled),
        checks: [
          { id: 'pgrep_used', passed: Boolean(pgrepUsed) },
          { id: 'miner_killed', passed: Boolean(minerKilled) }
        ]
      };
    }
  },
  {
    id: 117,
    moduleId: 'processes',
    title: 'Persistent Processes & Live Monitoring (nohup & watch)',
    xp: 190,
    badge: 'DaemonWatcher',
    description: 'Long-running tasks need two critical abilities: surviving unexpected network disconnects, and real-time execution monitoring without manual re-typing:\n\n- `nohup <command> &`: Runs a command immune to SIGHUP (hangup signals). If your SSH session drops or terminal closes, the program continues executing in the background, redirecting stdout/stderr into `nohup.out`.\n- `watch -n <seconds> <command>`: Repeatedly executes a command at a set interval (default 2s), clearing the screen to display a live updating dashboard of system state.',
    instructions: 'Start the persistent background task `nohup ./backup.sh &`, then monitor storage disk changes live using `watch -n 2 df -h`.',
    commandHelp: [
      { cmd: 'nohup ./backup.sh &', desc: 'Run script immune to hangups in background' },
      { cmd: 'watch -n 2 df -h', desc: 'Periodically execute df -h every 2 seconds' }
    ],
    objectives: [
      { id: 'nohup_started', text: 'Run nohup ./backup.sh &' },
      { id: 'watch_monitored', text: 'Run watch -n 2 df -h to monitor storage live' }
    ],
    hints: [
      "Prefix your background script execution with nohup and end with &: nohup ./backup.sh &.",
      "Monitor periodic updates with watch: watch -n 2 df -h."
    ],
    verify: (_fs, _session, history) => {
      const nohupStarted = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('nohup');
      });
      const watchMonitored = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('watch');
      });
      return {
        success: Boolean(nohupStarted && watchMonitored),
        checks: [
          { id: 'nohup_started', passed: Boolean(nohupStarted) },
          { id: 'watch_monitored', passed: Boolean(watchMonitored) }
        ]
      };
    }
  },
  {
    id: 31,
    moduleId: 'networking',
    title: 'Testing Connectivity (ping)',
    xp: 180,
    badge: 'Pinger',
    description: 'Imagine trying to load a webpage, but your browser spins endlessly, leaving you wondering if your home Wi-Fi is disconnected or if the website itself has crashed. In Linux, we test our basic network connection using the `ping` command.\n\n- The `ping` command sends tiny packets of data to a server (like `google.com`) and measures how many milliseconds it takes to receive a response.\n- On Linux, `ping` will keep running forever by default. To make it stop after a few attempts, we use the `-c` (count) flag, running `ping -c 3 google.com`.\n\n**Why this matters**: If you run `ping google.com` without `-c`, it will continue sending packets and printing output infinitely. You will have to manually interrupt it with `Ctrl+C` to run any other commands. The `-c 3` flag stops the command automatically after sending exactly 3 packets.',
    instructions: 'Let\'s check our connectivity. Test your connection to `google.com` by sending exactly 3 packets: `ping -c 3 google.com`.',
    commandHelp: [
      { cmd: 'ping -c 3 google.com', desc: 'Send 3 echo packets to google.com' }
    ],
    objectives: [
      { id: 'ran_ping_c3', text: 'Ping google.com exactly 3 times using -c flag' }
    ],
    hints: [
      "Think about which command sends ICMP echo packets to test connection.",
      "Use ping with count option set to 3 for google.com.",
      "Try running: ping -c 3 google.com"
    ],
    verify: (_fs, _session, history) => {
      const ranPing = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const hasPing = parts.includes('ping');
        const hasC3 = parts.includes('-c3') || (parts.includes('-c') && parts[parts.indexOf('-c') + 1] === '3');
        return hasPing && hasC3;
      });
      return {
        success: ranPing,
        checks: [
          { id: 'ran_ping_c3', passed: ranPing }
        ]
      };
    }
  },
  {
    id: 32,
    moduleId: 'networking',
    title: 'Network Interfaces & Local IP',
    xp: 180,
    badge: 'Netadmin',
    description: 'Imagine setting up a network printer or sharing files with a friend\'s computer on the same Wi-Fi, and needing to know your machine\'s local IP address. In Linux, we inspect our network hardware and IPs using the `ip` command.\n\n- Running `ip addr` (or simply `ip a`) prints a list of all your network interface devices (like `eth0` for wired ethernet or `wlan0` for wireless) along with their assigned local IP addresses.',
    instructions: 'Let\'s inspect our network setup. Display all local network interfaces and IP addresses by running `ip addr`.',
    commandHelp: [
      { cmd: 'ip addr', desc: 'Show network interface details and IP addresses' }
    ],
    objectives: [
      { id: 'ran_ip_addr', text: 'Run the "ip addr" or "ip a" command' }
    ],
    hints: [
      "Think about which command shows network interface configurations.",
      "Use the 'ip' command with the addr or a argument.",
      "Try running: ip addr"
    ],
    verify: (_fs, _session, history) => {
      const ranIp = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('ip') && (parts.includes('addr') || parts.includes('a') || parts.includes('address'));
      });
      return {
        success: ranIp,
        checks: [
          { id: 'ran_ip_addr', passed: ranIp }
        ]
      };
    }
  },
  {
    id: 73,
    moduleId: 'networking',
    title: 'Checking Interfaces (ifconfig)',
    xp: 150,
    badge: 'Configurator',
    description: 'Before the modern `ip` command suite became standard, Linux system administrators relied on `ifconfig` (interface configurator) to view and manage network interfaces.\n\n- The `ifconfig` command displays active network interfaces, local IP configuration, netmask details, and MAC hardware addresses. Although deprecated on some newer distributions, it remains widely used on legacy servers.',
    instructions: 'Let\'s run the classic configuration tool. Run `ifconfig` to inspect active network interfaces.',
    commandHelp: [
      { cmd: 'ifconfig', desc: 'Display network interface configurations' }
    ],
    objectives: [
      { id: 'ran_ifconfig', text: 'Run the "ifconfig" command' }
    ],
    hints: [
      "Run the command ifconfig in the terminal.",
      "Try running: ifconfig"
    ],
    verify: (_fs, _session, history) => {
      const ranIfconfig = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('ifconfig');
      });
      return {
        success: ranIfconfig,
        checks: [
          { id: 'ran_ifconfig', passed: ranIfconfig }
        ]
      };
    }
  },
  {
    id: 74,
    moduleId: 'networking',
    title: 'Network Connections (nmcli)',
    xp: 160,
    badge: 'Connector',
    description: 'On modern Linux workstations and servers, network interfaces are managed by a system daemon called NetworkManager. Rather than manually editing config files, we configure network details using `nmcli`.\n\n- The `nmcli` (NetworkManager CLI) command allows you to inspect hardware connections, device states, and active Wi-Fi networks.',
    instructions: 'Let\'s check network hardware state. Run `nmcli device` to query connections and state.',
    commandHelp: [
      { cmd: 'nmcli device', desc: 'List network interface devices and states' }
    ],
    objectives: [
      { id: 'ran_nmcli_device', text: 'Run the "nmcli device" or "nmcli dev" command' }
    ],
    hints: [
      "Use nmcli device to list interface statuses.",
      "Try running: nmcli device"
    ],
    verify: (_fs, _session, history) => {
      const ranNmcli = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('nmcli') && (parts.includes('device') || parts.includes('dev'));
      });
      return {
        success: ranNmcli,
        checks: [
          { id: 'ran_nmcli_device', passed: ranNmcli }
        ]
      };
    }
  },
  {
    id: 75,
    moduleId: 'networking',
    title: 'Socket & Connection Stats (netstat & ss)',
    xp: 180,
    badge: 'Listener',
    description: 'When setting up a database or web server, you must verify that the service is running and listening on the correct port, and check if any unauthorized connections are established. We do this using `netstat` or `ss`.\n\n- The `netstat` (network statistics) command is a classic tool for showing TCP connections and listening ports. E.g. `netstat -tuln` lists TCP/UDP listening ports.\n- The `ss` (socket statistics) command is the modern, faster alternative to `netstat` that displays socket connection details directly from the kernel namespace.',
    instructions: 'Let\'s audit ports. Check listening TCP/UDP sockets by running `netstat -tuln`, and then check them using the modern socket statistics command `ss -tuln`.',
    commandHelp: [
      { cmd: 'netstat -tuln', desc: 'Show listening TCP/UDP ports using netstat' },
      { cmd: 'ss -tuln', desc: 'Show listening sockets using ss' }
    ],
    objectives: [
      { id: 'ran_netstat', text: 'Run "netstat -tuln"' },
      { id: 'ran_ss', text: 'Run "ss -tuln"' }
    ],
    hints: [
      "Run netstat -tuln first, followed by ss -tuln.",
      "Try running: netstat -tuln and then ss -tuln"
    ],
    verify: (_fs, _session, history) => {
      const ranNetstat = hasCommandInHistory(history, seg => seg.command === 'netstat' && (seg.hasFlag('t', 'u', 'l', 'n') || seg.hasAnyFlag('tuln', 'tln', 'un', 'l', 'tulpn')));
      const ranSs = hasCommandInHistory(history, seg => seg.command === 'ss' && (seg.hasFlag('t', 'u', 'l', 'n') || seg.hasAnyFlag('tuln', 'tln', 'un', 'l', 'tulpn')));
      return {
        success: Boolean(ranNetstat && ranSs),
        checks: [
          { id: 'ran_netstat', passed: Boolean(ranNetstat) },
          { id: 'ran_ss', passed: Boolean(ranSs) }
        ]
      };
    }
  },
  {
    id: 76,
    moduleId: 'networking',
    title: 'Tracing Packet Routes (traceroute)',
    xp: 160,
    badge: 'Tracer',
    description: 'When a web page fails to load, how do you identify if the issue is with your home router, your Internet Service Provider (ISP), or the destination server? In Linux, we trace packets using `traceroute`.\n\n- The `traceroute` command lists every router gateway (hop) a packet traverses on its way to a remote server, along with response latency for each hop.',
    instructions: 'Let\'s trace the pathway to a web server. Run `traceroute google.com` to see the hops.',
    commandHelp: [
      { cmd: 'traceroute google.com', desc: 'Trace network hops to google.com' }
    ],
    objectives: [
      { id: 'ran_traceroute', text: 'Run the "traceroute" command' }
    ],
    hints: [
      "Use traceroute followed by a domain name like google.com.",
      "Try running: traceroute google.com"
    ],
    verify: (_fs, _session, history) => {
      const ranTraceroute = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('traceroute');
      });
      return {
        success: ranTraceroute,
        checks: [
          { id: 'ran_traceroute', passed: ranTraceroute }
        ]
      };
    }
  },
  {
    id: 33,
    moduleId: 'networking',
    title: 'Downloading Web Files (curl)',
    xp: 200,
    badge: 'Downloader',
    description: 'Imagine wanting to download a file or grab the code of a setup script directly from a web server without opening a browser and clicking a "Download" button. In Linux, we fetch web data using `curl` (short for "Client URL").\n\n- Running `curl <url>` downloads the page content and prints it right on your screen.\n- To save the downloaded content as a file instead of displaying it, we pair it with `>` redirection or the `-o` output flag.',
    instructions: 'Let\'s download a script. Fetch the file at `http://api.bashquest.com/update.sh` and save it locally as `update.sh` by running `curl http://api.bashquest.com/update.sh > update.sh`.',
    commandHelp: [
      { cmd: 'curl http://api.bashquest.com/update.sh > update.sh', desc: 'Download webpage content and save it to update.sh' }
    ],
    objectives: [
      { id: 'used_curl', text: 'Use the "curl" command' },
      { id: 'download_saved', text: 'Save downloaded script as "update.sh" in home folder' }
    ],
    hints: [
      "Think about which command downloads web files, and how to redirect it to a file.",
      "Use curl to download the file and redirection '>' to save it as update.sh.",
      "Try running: curl http://api.bashquest.com/update.sh > update.sh"
    ],
    verify: (fs, session, history) => {
      const fileNode = fs.getNodeByPath('/home/learner', 'update.sh') || (session && session.currentPath && fs.getNodeByPath(session.currentPath, 'update.sh'));
      const downloadSaved = Boolean(fileNode && fileNode.type === 'file' && fileNode.content.includes('Updating BashQuest'));
      const usedCurl = Boolean(downloadSaved || hasCommandInHistory(history, seg => seg.command === 'curl'));
      return {
        success: Boolean(usedCurl && downloadSaved),
        checks: [
          { id: 'used_curl', passed: Boolean(usedCurl) },
          { id: 'download_saved', passed: Boolean(downloadSaved) }
        ]
      };
    }
  },
  {
    id: 118,
    moduleId: 'networking',
    title: 'DNS Resolution & Lookups (dig, nslookup & host)',
    xp: 190,
    badge: 'DNSMaster',
    description: 'When your machine translates a human-readable domain name like `example.com` into an IP address like `93.184.216.34`, it queries DNS nameservers configured in `/etc/resolv.conf`.\n\n- `/etc/resolv.conf`: Contains your system\'s primary and fallback DNS nameservers.\n- `dig <domain>`: The de-facto standard administrator tool for testing DNS queries, returning response headers, query latency, and record TTLs. Adding `+short` prints only the final IP answer.\n- `nslookup <domain>` and `host <domain>`: Lightweight queries for checking A/AAAA and MX mail exchange records.',
    instructions: 'Inspect your local DNS resolvers with `cat /etc/resolv.conf`, run a DNS lookup using `dig example.com` (or `dig +short example.com`), and test name resolution using `nslookup example.com` (or `host example.com`).',
    commandHelp: [
      { cmd: 'cat /etc/resolv.conf', desc: 'Inspect configured system DNS resolvers' },
      { cmd: 'dig example.com', desc: 'Query DNS records and server response headers' },
      { cmd: 'dig +short example.com', desc: 'Query only resolved IP address' },
      { cmd: 'nslookup example.com', desc: 'Interactive and basic domain name resolution' }
    ],
    objectives: [
      { id: 'resolv_inspected', text: 'Inspect /etc/resolv.conf' },
      { id: 'dig_queried', text: 'Query DNS records with dig' },
      { id: 'nslookup_tested', text: 'Resolve domain name with nslookup or host' }
    ],
    hints: [
      "Use cat /etc/resolv.conf to view resolver IPs.",
      "Run dig example.com or dig +short example.com.",
      "Run nslookup example.com or host example.com."
    ],
    verify: (_fs, _session, history) => {
      const resolvInspected = history.some(cmd => cmd.includes('resolv.conf'));
      const digQueried = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('dig');
      });
      const nslookupTested = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('nslookup') || parts.includes('host');
      });
      return {
        success: Boolean(resolvInspected && digQueried && nslookupTested),
        checks: [
          { id: 'resolv_inspected', passed: Boolean(resolvInspected) },
          { id: 'dig_queried', passed: Boolean(digQueried) },
          { id: 'nslookup_tested', passed: Boolean(nslookupTested) }
        ]
      };
    }
  },
  {
    id: 119,
    moduleId: 'networking',
    title: 'Routing Tables & Gateways (ip route)',
    xp: 190,
    badge: 'RouteNavigator',
    description: 'When your server sends a packet to an IP address outside its local subnet, how does the kernel know which router or network card interface to send it through? It consults the **Kernel IP Routing Table**.\n\n- `ip route` (or `ip r` / `ip ro`): Displays active routing table entries.\n- The line starting with `default via <IP> dev <interface>` defines your **Default Gateway** (your router), which handles all internet traffic not addressed to a local subnet.',
    instructions: 'Display the kernel routing table and identify your default gateway router by running `ip route` (or `ip r`).',
    commandHelp: [
      { cmd: 'ip route', desc: 'Display kernel routing table and default gateway' },
      { cmd: 'ip r', desc: 'Shorthand for ip route' }
    ],
    objectives: [
      { id: 'ip_route_inspected', text: 'Run ip route or ip r to inspect routing table' }
    ],
    hints: [
      "Type ip route or ip r and press Enter.",
      "Look for the line beginning with default via."
    ],
    verify: (_fs, _session, history) => {
      const ipRouteInspected = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('ip') && (parts.includes('route') || parts.includes('r') || parts.includes('ro'));
      });
      return {
        success: Boolean(ipRouteInspected),
        checks: [
          { id: 'ip_route_inspected', passed: Boolean(ipRouteInspected) }
        ]
      };
    }
  },
  {
    id: 120,
    moduleId: 'networking',
    title: 'Port Testing & File Downloads (nc & wget)',
    xp: 200,
    badge: 'NetOperator',
    description: 'Two everyday network maintenance tasks are testing whether remote ports are open and downloading files without browsers:\n\n- `nc` (Netcat): Often called the "Swiss Army Knife" of TCP/IP. Running `nc -zv <host> <port>` scans a target port without sending application data (`-z` for zero-I/O port scanning, `-v` for verbose output), instantly confirming if a firewall or service is responding.\n- `wget`: The robust non-interactive network downloader. Running `wget -O <output-file> <url>` downloads files reliably, resuming broken connections.',
    instructions: 'Verify an open HTTP port using Netcat with `nc -zv example.com 80`, and download a file using `wget -O index.html https://example.com`.',
    commandHelp: [
      { cmd: 'nc -zv example.com 80', desc: 'Test TCP connection to port 80 without sending data' },
      { cmd: 'wget -O index.html https://example.com', desc: 'Download webpage directly to local file' }
    ],
    objectives: [
      { id: 'port_tested', text: 'Test remote port reachability with nc -zv' },
      { id: 'file_downloaded', text: 'Download a file using wget -O' }
    ],
    hints: [
      "Scan port 80 using: nc -zv example.com 80.",
      "Download a file using: wget -O index.html https://example.com."
    ],
    verify: (_fs, _session, history) => {
      const portTested = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('nc') && (cmd.includes('-z') || cmd.includes('-v'));
      });
      const fileDownloaded = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('wget');
      });
      return {
        success: Boolean(portTested && fileDownloaded),
        checks: [
          { id: 'port_tested', passed: Boolean(portTested) },
          { id: 'file_downloaded', passed: Boolean(fileDownloaded) }
        ]
      };
    }
  },
  {
    id: 121,
    moduleId: 'networking',
    title: 'Managing System Hostnames (hostname & hostnamectl)',
    xp: 200,
    badge: 'NodeIdentifier',
    description: 'Every computer on a network possesses a hostname that identifies it to other machines and shell prompts (e.g., `learner@bashquest:~$`). In modern systemd environments:\n\n- `hostname`: Displays the current simple system hostname.\n- `hostnamectl`: Displays complete system identification metadata, including operating system release, kernel build version, hardware chassis, and virtualization hypervisor.\n- `sudo hostnamectl set-hostname <name>`: Persistently updates the hostname across reboots by modifying `/etc/hostname` and updating the systemd hostnamed daemon.',
    instructions: 'Check your current system hostname and system architecture with `hostnamectl` (or `hostname`), then set a new production hostname using `sudo hostnamectl set-hostname prod-web-01`.',
    commandHelp: [
      { cmd: 'hostname', desc: 'Print current system hostname' },
      { cmd: 'hostnamectl', desc: 'Display comprehensive system and kernel status' },
      { cmd: 'sudo hostnamectl set-hostname prod-web-01', desc: 'Persistently set system hostname' }
    ],
    objectives: [
      { id: 'hostname_displayed', text: 'Run hostname or hostnamectl to view current host' },
      { id: 'hostname_updated', text: 'Run sudo hostnamectl set-hostname prod-web-01' }
    ],
    hints: [
      "Run hostnamectl to inspect current host info.",
      "Update the system hostname using sudo hostnamectl set-hostname prod-web-01."
    ],
    verify: (_fs, session, history) => {
      const hostnameDisplayed = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('hostname') || parts.includes('hostnamectl');
      });
      const hostnameUpdated = (session && session.hostname === 'prod-web-01') || history.some(cmd => {
        return cmd.includes('set-hostname') && cmd.includes('prod-web-01');
      });
      return {
        success: Boolean(hostnameDisplayed && hostnameUpdated),
        checks: [
          { id: 'hostname_displayed', passed: Boolean(hostnameDisplayed) },
          { id: 'hostname_updated', passed: Boolean(hostnameUpdated) }
        ]
      };
    }
  },
  {
    id: 34,
    moduleId: 'searching',
    title: 'Finding Files by Name (find)',
    xp: 220,
    badge: 'Scout',
    description: 'Imagine misplacing an important text file somewhere in your user folder and having to search through dozens of nested directories one-by-one. In Linux, we bypass manual digging by using the `find` utility as a lightning-fast system-wide search engine.\n\n- The `find` command searches through directory trees based on name, size, type, or date.\n- The syntax is `find <where> -name "<pattern>"`. E.g., `find . -name "*.txt"` searches the current directory and all subfolders for files ending in `.txt`.\n\n**Why this matters**: If you run `find . "*.log"` without `-name`, you will get the error: `find: paths must precede expression: \'*.log\'`. The `-name` flag is required to specify that the subsequent pattern should be matched against the filenames.',
    instructions: 'Let\'s track down some files. Search the current directory and its subfolders for any files with a `.log` extension by running `find . -name "*.log"`.',
    commandHelp: [
      { cmd: 'find . -name "*.log"', desc: 'Find all files ending in .log in current folder and subfolders' }
    ],
    objectives: [
      { id: 'ran_find', text: 'Run the "find" command with -name option' }
    ],
    hints: [
      "Think about which command finds files recursively by name matching a pattern.",
      "Use find in the current directory (.) with name pattern '*.log'.",
      "Try running: find . -name \"*.log\""
    ],
    verify: (_fs, _session, history) => {
      const ranFind = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('find') && parts.includes('-name');
      });
      return {
        success: ranFind,
        checks: [
          { id: 'ran_find', passed: ranFind }
        ]
      };
    }
  },
  {
    id: 35,
    moduleId: 'searching',
    title: 'Checking Command History',
    xp: 180,
    badge: 'Historian',
    description: 'Imagine you typed a long, complex network diagnostic command ten minutes ago, and now you need to run it again, but you can\'t remember the exact options or syntax. Instead of scratching your head or typing it all over, Linux remembers it for you!\n\n- The `history` command displays a numbered list of all commands you\'ve recently executed.\n- You can quickly re-run any item by typing an exclamation point followed by its list number (like `!42` to re-execute command #42).',
    instructions: 'Let\'s check the archives. Run `history` to view the list of commands you\'ve run in this session.',
    commandHelp: [
      { cmd: 'history', desc: 'Display a list of recently executed commands' }
    ],
    objectives: [
      { id: 'ran_history', text: 'Run the "history" command' }
    ],
    hints: [
      "Think about which command lists recently run commands.",
      "Use the 'history' command.",
      "Try running: history"
    ],
    verify: (_fs, _session, history) => {
      const ranHistory = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('history');
      });
      return {
        success: ranHistory,
        checks: [
          { id: 'ran_history', passed: ranHistory }
        ]
      };
    }
  },
  {
    id: 36,
    moduleId: 'searching',
    title: 'Consulting Manual Pages',
    xp: 200,
    badge: 'Scholar',
    description: 'Imagine trying to use a new command, but you aren\'t sure what flags it supports or how its inputs should be formatted. Instead of searching online, Linux has an official, comprehensive user manual built right into the terminal!\n\n- The `man` (manual) command followed by any utility name (e.g., `man ls`) opens a detailed reference guide.\n- Inside the guide, you scroll with the arrow keys, search with "/", and press `q` to close the manual and return to your prompt.',
    instructions: 'Let\'s consult the docs. Open the built-in manual page for the `grep` command by running `man grep`.',
    commandHelp: [
      { cmd: 'man grep', desc: 'Display manual page for grep' }
    ],
    objectives: [
      { id: 'ran_man_grep', text: 'Run the "man grep" command' }
    ],
    hints: [
      "Think about which command displays the built-in system reference manual.",
      "Use the 'man' command followed by the command name you want to look up.",
      "Try running: man grep"
    ],
    verify: (_fs, _session, history) => {
      const ranManGrep = history.some(cmd => {
        const trimmed = cmd.trim();
        return trimmed.startsWith('man ') && trimmed.includes('grep');
      });
      return {
        success: ranManGrep,
        checks: [
          { id: 'ran_man_grep', passed: ranManGrep }
        ]
      };
    }
  },
  {
    id: 122,
    moduleId: 'searching',
    title: 'Advanced find by Size, Time & Exec (-size, -mtime, -exec)',
    xp: 210,
    badge: 'DeepSearcher',
    description: 'Beyond basic filename queries, `find` is a powerhouse filter engine for automated system cleanup and log rotation:\n\n- `-size +50M`: Filters for files strictly larger than 50 Megabytes (`+` for greater than, `-` for less than).\n- `-mtime -7`: Filters for files modified within the last 7 days.\n- `-exec <cmd> {} +`: Passes all matched files directly into a command in batches, replacing `{}` with matched file paths.\n\nCombining these allows single-line system maintenance, such as finding and purging runaway logs: `find /var/log -size +50M -exec rm {} +`.',
    instructions: 'Find large log files modified recently using `find /var/log -size +50M -mtime -7`, then delete the oversized crash dump using `find /var/log -size +50M -exec rm {} +`.',
    commandHelp: [
      { cmd: 'find /var/log -size +50M -mtime -7', desc: 'Find files larger than 50MB modified within 7 days' },
      { cmd: 'find /var/log -size +50M -exec rm {} +', desc: 'Find and automatically remove files larger than 50MB' }
    ],
    objectives: [
      { id: 'find_filtered', text: 'Filter files by size and modification time with find' },
      { id: 'find_exec_deleted', text: 'Delete oversized log using find -exec rm' }
    ],
    hints: [
      "Search for files over 50M: find /var/log -size +50M -mtime -7.",
      "Execute removal on matches: find /var/log -size +50M -exec rm {} +."
    ],
    verify: (fs, _session, history) => {
      const findFiltered = history.some(cmd => {
        return cmd.includes('find') && cmd.includes('-size') && (cmd.includes('-mtime') || cmd.includes('+50M'));
      });
      const hugeLogNode = fs.getNodeByPath('/var/log', 'huge_core_dump.log');
      const findExecDeleted = !hugeLogNode || history.some(cmd => {
        return cmd.includes('find') && cmd.includes('-exec') && cmd.includes('rm');
      });
      return {
        success: Boolean(findFiltered && findExecDeleted && !hugeLogNode),
        checks: [
          { id: 'find_filtered', passed: Boolean(findFiltered) },
          { id: 'find_exec_deleted', passed: Boolean(findExecDeleted && !hugeLogNode) }
        ]
      };
    }
  },
  {
    id: 123,
    moduleId: 'searching',
    title: 'Indexed Search & Command Introspection (locate, whereis, type)',
    xp: 210,
    badge: 'BinaryIntrospector',
    description: 'When `find` is too slow because it scans the live disk tree, and you need to inspect command binaries vs shell builtins:\n\n- `sudo updatedb`: Crawls the entire filesystem and builds a high-speed precomputed search index database (`mlocate.db`).\n- `locate <name>`: Instantly searches the indexed database in milliseconds instead of seconds.\n- `whereis <cmd>`: Locates binary executables, source files, and man pages in standard system paths.\n- `type <name>`: Identifies whether a command is a shell builtin (e.g. `cd`, `umask`), an alias (e.g. `ll`), or an external binary disk file (e.g. `/bin/ls`).',
    instructions: 'Update the search index with `sudo updatedb`, locate files with `locate nginx`, check binary paths with `whereis nginx`, and test command types using `type cd` and `type ls`.',
    commandHelp: [
      { cmd: 'sudo updatedb', desc: 'Generate or update the fast mlocate search index database' },
      { cmd: 'locate nginx', desc: 'Instantly find all paths containing nginx via database' },
      { cmd: 'whereis nginx', desc: 'Find binary, source, and manual page locations' },
      { cmd: 'type cd / type ls', desc: 'Determine whether a command is a shell builtin or binary file' }
    ],
    objectives: [
      { id: 'updatedb_run', text: 'Run sudo updatedb to build index' },
      { id: 'locate_searched', text: 'Run locate to find indexed files' },
      { id: 'whereis_checked', text: 'Run whereis to locate command files' },
      { id: 'type_introspected', text: 'Run type to introspect command nature' }
    ],
    hints: [
      "Run sudo updatedb to initialize the index.",
      "Search the index using locate nginx.",
      "Check paths with whereis nginx.",
      "Inspect command nature with type cd or type ls."
    ],
    verify: (_fs, session, history) => {
      const updatedbRun = (session && session.updatedbRun) || history.some(cmd => cmd.includes('updatedb'));
      const locateSearched = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('locate');
      });
      const whereisChecked = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('whereis');
      });
      const typeIntrospected = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('type');
      });
      return {
        success: Boolean(updatedbRun && locateSearched && whereisChecked && typeIntrospected),
        checks: [
          { id: 'updatedb_run', passed: Boolean(updatedbRun) },
          { id: 'locate_searched', passed: Boolean(locateSearched) },
          { id: 'whereis_checked', passed: Boolean(whereisChecked) },
          { id: 'type_introspected', passed: Boolean(typeIntrospected) }
        ]
      };
    }
  },
  {
    id: 124,
    moduleId: 'searching',
    title: 'Searching Manual Page Descriptions (apropos & whatis)',
    xp: 200,
    badge: 'ManualDetective',
    description: 'When you know what task you want to achieve, but don\'t remember the exact Linux command name, or when you need a quick one-line summary of what an unfamiliar command does:\n\n- `apropos <keyword>`: Searches through the short one-line description summaries of **all manual pages** on the system, returning any command related to that concept (e.g. `apropos partition`, `apropos process`).\n- `whatis <cmd>`: Displays the exact single-line summary from section 1 or 8 of that specific tool\'s manual page (e.g. `whatis ls`, `whatis grep`).',
    instructions: 'Search for commands related to disks or processes using `apropos partition` (or `apropos process`), and inspect quick command summaries using `whatis ls` and `whatis grep`.',
    commandHelp: [
      { cmd: 'apropos partition', desc: 'Search all manual descriptions for the keyword partition' },
      { cmd: 'apropos process', desc: 'Search all manual descriptions for the keyword process' },
      { cmd: 'whatis ls', desc: 'Display one-line manual description for ls' },
      { cmd: 'whatis grep', desc: 'Display one-line manual description for grep' }
    ],
    objectives: [
      { id: 'apropos_searched', text: 'Search manual page descriptions with apropos' },
      { id: 'whatis_checked', text: 'Display one-line command description with whatis' }
    ],
    hints: [
      "Use apropos partition or apropos process to find commands by concept.",
      "Use whatis ls or whatis grep to view concise command descriptions."
    ],
    verify: (_fs, _session, history) => {
      const aproposSearched = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('apropos');
      });
      const whatisChecked = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('whatis');
      });
      return {
        success: Boolean(aproposSearched && whatisChecked),
        checks: [
          { id: 'apropos_searched', passed: Boolean(aproposSearched) },
          { id: 'whatis_checked', passed: Boolean(whatisChecked) }
        ]
      };
    }
  },
  {
    id: 37,
    moduleId: 'services',
    title: 'Controlling Services (systemctl)',
    xp: 240,
    badge: 'Service-Master',
    description: 'Imagine hosting a website on your computer, but visitors get a "site cannot be reached" error because the background web server program isn\'t running. In Linux, background processes that start automatically and run in the background (like databases, firewalls, or web servers) are called **services**, and we manage them using `systemctl`.\n\n- The `systemctl status <service>` command checks if a service is active or stopped.\n- Since starting or stopping a service affects all users and the system\'s security, you must use `sudo` to run commands like `sudo systemctl start <service>` or `sudo systemctl stop <service>`.',
    instructions: 'Let\'s launch a web server. The web server service `apache2` is currently stopped. Start it by running `sudo systemctl start apache2`, and verify it is running with `systemctl status apache2`.',
    commandHelp: [
      { cmd: 'systemctl status apache2', desc: 'Check status of apache2 web service' },
      { cmd: 'sudo systemctl start apache2', desc: 'Start the apache2 web service' }
    ],
    objectives: [
      { id: 'started_service', text: 'Start the "apache2" web service' },
      { id: 'checked_status', text: 'Check the status of "apache2"' }
    ],
    hints: [
      "You need to check the status of apache2, and start it.",
      "Use systemctl status apache2, and remember starting services requires admin privileges (sudo).",
      "Try running: sudo systemctl start apache2 and then systemctl status apache2"
    ],
    verify: (_fs, session, history) => {
      const startedService = session.services.apache2 === 'active';
      const checkedStatus = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('systemctl') && parts.includes('status') && parts.includes('apache2');
      });
      return {
        success: startedService && checkedStatus,
        checks: [
          { id: 'started_service', passed: startedService },
          { id: 'checked_status', passed: checkedStatus }
        ]
      };
    }
  },
  {
    id: 53,
    moduleId: 'services',
    title: 'System Logging (journalctl)',
    xp: 220,
    badge: 'Log-Reader',
    description: 'Now that you can start and stop background services with `systemctl`, how do you troubleshoot them when they fail? The `journalctl` utility lets you inspect system logs generated by services managed by systemd.\n\n- By default, `journalctl` shows all system logs. Because this can be massive, we filter them to stay focused.\n- The `-u <service>` option filters logs to only show messages from a specific service (e.g. `journalctl -u apache2`).\n- The `-n <number>` option displays only the most recent entries (e.g. `journalctl -n 5` for the last 5 logs).\n- The `-f` (follow) flag displays logs in real-time as they are written.',
    instructions: 'Let\'s investigate the web server logs. Run `journalctl -u apache2` to filter system logs for the `apache2` service. Then run `journalctl -n 5` to view the last 5 general system log messages.',
    commandHelp: [
      { cmd: 'journalctl -u apache2', desc: 'Show logs for the apache2 service' },
      { cmd: 'journalctl -n 5', desc: 'Show the last 5 system log messages' }
    ],
    objectives: [
      { id: 'used_journalctl_u', text: 'Filter logs for the apache2 service using journalctl -u' },
      { id: 'used_journalctl_n', text: 'View the last few log entries using journalctl -n' }
    ],
    hints: [
      "Use journalctl with the -u option set to apache2 to view web server logs.",
      "To limit the logs to the last 5 lines, use journalctl -n 5.",
      "Try running: journalctl -u apache2, and then: journalctl -n 5"
    ],
    verify: (_fs, _session, history) => {
      const ranJournalctlU = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const idx = parts.indexOf('journalctl');
        if (idx === -1) return false;
        const options = parts.slice(idx + 1);
        const hasU = options.includes('-u') && options[options.indexOf('-u') + 1] === 'apache2';
        return hasU;
      });
      const ranJournalctlN = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const idx = parts.indexOf('journalctl');
        if (idx === -1) return false;
        const options = parts.slice(idx + 1);
        const hasN = options.includes('-n') && /^\d+$/.test(options[options.indexOf('-n') + 1]);
        return hasN;
      });
      return {
        success: ranJournalctlU && ranJournalctlN,
        checks: [
          { id: 'used_journalctl_u', passed: ranJournalctlU },
          { id: 'used_journalctl_n', passed: ranJournalctlN }
        ]
      };
    }
  },
  {
    id: 125,
    moduleId: 'services',
    title: 'Enabling Services at Boot (systemctl enable & disable)',
    xp: 220,
    badge: 'Boot-Architect',
    description: 'Starting a service with `systemctl start` only launches it for the current session. If the server reboots, the service will stay offline unless you configure it to start automatically on system initialization.\n\n- To start a service at boot, run `sudo systemctl enable <service>`.\n- To verify whether a service is scheduled to launch at boot, run `systemctl is-enabled <service>`.\n- When creating or editing systemd unit files, always notify systemd to reload its configuration cache with `sudo systemctl daemon-reload`.\n- To disable a service from starting at boot, run `sudo systemctl disable <service>`.',
    instructions: 'Configure the `nginx` web service to launch at boot. Run `sudo systemctl enable nginx`. Next, verify that it is configured correctly with `systemctl is-enabled nginx`. Finally, refresh systemd\'s unit configurations by executing `sudo systemctl daemon-reload`.',
    commandHelp: [
      { cmd: 'sudo systemctl enable nginx', desc: 'Enable nginx to start at system boot' },
      { cmd: 'systemctl is-enabled nginx', desc: 'Check if nginx is enabled at boot' },
      { cmd: 'sudo systemctl daemon-reload', desc: 'Reload systemd manager configuration' }
    ],
    objectives: [
      { id: 'enabled_nginx', text: 'Enable nginx service at boot with "sudo systemctl enable nginx"' },
      { id: 'checked_is_enabled', text: 'Verify enabled status with "systemctl is-enabled nginx"' },
      { id: 'daemon_reloaded', text: 'Reload systemd daemon configuration with "sudo systemctl daemon-reload"' }
    ],
    hints: [
      "Run sudo systemctl enable nginx to enable the service.",
      "Check whether it is enabled using systemctl is-enabled nginx.",
      "Reload the systemd manager cache with sudo systemctl daemon-reload."
    ],
    verify: (_fs, session, history) => {
      const enabledNginx = history.some(c => /sudo\s+systemctl\s+enable\s+nginx/i.test(c)) || session?.enabledServices?.has('nginx');
      const checkedIsEnabled = history.some(c => /systemctl\s+is-enabled\s+nginx/i.test(c));
      const daemonReloaded = history.some(c => /sudo\s+systemctl\s+daemon-reload/i.test(c));

      return {
        success: Boolean(enabledNginx && checkedIsEnabled && daemonReloaded),
        checks: [
          { id: 'enabled_nginx', passed: Boolean(enabledNginx) },
          { id: 'checked_is_enabled', passed: Boolean(checkedIsEnabled) },
          { id: 'daemon_reloaded', passed: Boolean(daemonReloaded) }
        ]
      };
    }
  },
  {
    id: 126,
    moduleId: 'services',
    title: 'System Clock, Timezones & Power (timedatectl & shutdown)',
    xp: 220,
    badge: 'Time-Warden',
    description: 'Accurate system time is critical for log auditing, authentication protocols (Kerberos, TLS certificates), and scheduled database backups.\n\n- The `timedatectl` utility queries and changes the system clock and its timezone.\n- View the current time settings, RTC, and active timezone with `timedatectl status` (or simply `timedatectl`).\n- Set the system timezone using superuser rights: `sudo timedatectl set-timezone UTC`.\n- When shutting down or restarting production servers, use the `shutdown` command with safety delays and broadcast notices: `sudo shutdown -r now` (reboots immediately) or `sudo shutdown -c` (cancels scheduled shutdowns).',
    instructions: 'Check your server clock and timezone by running `timedatectl status`. Set the system timezone to UTC using `sudo timedatectl set-timezone UTC`. Then initiate a safe immediate reboot command with `sudo shutdown -r now`.',
    commandHelp: [
      { cmd: 'timedatectl status', desc: 'Show current time and timezone settings' },
      { cmd: 'sudo timedatectl set-timezone UTC', desc: 'Set system timezone to UTC' },
      { cmd: 'sudo shutdown -r now', desc: 'Reboot system safely immediately' }
    ],
    objectives: [
      { id: 'checked_timedatectl', text: 'Inspect time status with "timedatectl status"' },
      { id: 'set_utc_timezone', text: 'Set timezone to UTC with "sudo timedatectl set-timezone UTC"' },
      { id: 'reboot_command', text: 'Initiate immediate reboot with "sudo shutdown -r now"' }
    ],
    hints: [
      "Run timedatectl status to inspect local time, universal time, and NTP status.",
      "Change the timezone with sudo timedatectl set-timezone UTC.",
      "Execute sudo shutdown -r now to issue a reboot broadcast."
    ],
    verify: (_fs, session, history) => {
      const checkedTimedatectl = history.some(c => /timedatectl(\s+status)?$/i.test(c.trim()));
      const setUtc = session?.timezone === 'UTC' || history.some(c => /sudo\s+timedatectl\s+set-timezone\s+UTC/i.test(c));
      const rebootCommand = history.some(c => /sudo\s+(shutdown\s+-r\s+now|reboot)/i.test(c));

      return {
        success: Boolean(checkedTimedatectl && setUtc && rebootCommand),
        checks: [
          { id: 'checked_timedatectl', passed: Boolean(checkedTimedatectl) },
          { id: 'set_utc_timezone', passed: Boolean(setUtc) },
          { id: 'reboot_command', passed: Boolean(rebootCommand) }
        ]
      };
    }
  },
  {
    id: 38,
    moduleId: 'editing',
    title: 'Editing Config Files (nano)',
    xp: 250,
    badge: 'Editor',
    description: 'Imagine SSH-ing into a remote cloud server where you don\'t have a graphical desktop or cursor, and you need to quickly fix a line in a configuration file. In these scenarios, you must use a terminal text editor like `nano`.\n\n- Running `nano <filename>` loads a simple, lightweight text editor directly inside your shell window.\n- The shortcuts are always displayed at the bottom of the screen: press `Ctrl+O` to write out (save) your changes, and `Ctrl+X` to exit the editor.',
    instructions: 'Let\'s edit a configuration file. Open `server.conf` in your home directory using `nano server.conf`, add a line reading `port=8080`, and then save and exit the editor.',
    commandHelp: [
      { cmd: 'nano server.conf', desc: 'Open server.conf in the Nano text editor' }
    ],
    objectives: [
      { id: 'opened_nano', text: 'Open the file "server.conf" in Nano' },
      { id: 'port_configured', text: 'Add configuration line "port=8080" and save' }
    ],
    hints: [
      "Think about which terminal-based text editor the instructions ask you to use.",
      "Run nano server.conf, write 'port=8080' inside, then save with Ctrl+O and exit with Ctrl+X.",
      "Try running: nano server.conf"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'server.conf');
      const portConfigured = Boolean(node && node.type === 'file' && node.content.includes('port=8080'));
      const openedNano = Boolean(portConfigured || hasCommandInHistory(history, seg => seg.command === 'nano' && (seg.hasArg('server.conf') || seg.raw.includes('server.conf'))));
      return {
        success: Boolean(openedNano && portConfigured),
        checks: [
          { id: 'opened_nano', passed: Boolean(openedNano) },
          { id: 'port_configured', passed: Boolean(portConfigured) }
        ]
      };
    }
  },
  {
    id: 127,
    moduleId: 'editing',
    title: 'Vim Basics: Modes, Saving & Exiting (vim)',
    xp: 250,
    badge: 'Vim-Initiate',
    description: 'Vim is one of the most powerful and ubiquitous terminal text editors in Linux. Unlike traditional graphical editors, Vim is **modal**:\n\n- **Normal Mode**: The default mode used for navigation, deleting, and issuing commands.\n- **Insert Mode**: The mode used for typing text. Press `i` from Normal Mode to start typing.\n- **Return to Normal Mode**: Press `Esc` at any time to leave Insert Mode.\n- **Command-Line Mode**: From Normal Mode, press `:` to type commands at the bottom prompt:\n  - `:w` writes (saves) the file.\n  - `:q` quits the editor.\n  - `:wq` (or `:x`) saves and exits in one step.\n  - `:q!` quits immediately, discarding all unsaved changes.',
    instructions: 'Open `notes.txt` in Vim by running `vim notes.txt`. Enter Insert mode by pressing `i`, add the line `System ready for deployment`, return to Normal mode by entering `Esc` (or pressing the Escape key), and save and quit the editor using `:wq`.',
    commandHelp: [
      { cmd: 'vim notes.txt', desc: 'Open file in Vim editor' },
      { cmd: 'i', desc: 'Enter Insert mode to type text' },
      { cmd: 'Esc', desc: 'Return to Normal mode' },
      { cmd: ':wq', desc: 'Write changes and quit Vim' }
    ],
    objectives: [
      { id: 'opened_vim', text: 'Open notes.txt with "vim notes.txt"' },
      { id: 'entered_insert_and_text', text: 'Enter Insert mode and write new line' },
      { id: 'saved_and_exited', text: 'Save and quit using :wq' }
    ],
    hints: [
      "Launch vim by typing vim notes.txt.",
      "Press i or type i to enter insert mode, then type: System ready for deployment.",
      "Type Esc or press the Esc key to return to normal mode, then type :wq to write and quit."
    ],
    verify: (fs, _session, history) => {
      const openedVim = history.some(c => /vima?\s+notes\.txt/i.test(c));
      const node = fs.getNodeByPath('/home/learner', 'notes.txt');
      const hasContent = Boolean(node && node.type === 'file' && node.content.includes('System ready for deployment'));
      const typedContent = history.some(c => /deployment/i.test(c));
      const savedExited = history.some(c => /^:(wq|x)/.test(c.trim())) || hasContent;

      return {
        success: Boolean(openedVim && (hasContent || typedContent) && savedExited),
        checks: [
          { id: 'opened_vim', passed: Boolean(openedVim) },
          { id: 'entered_insert_and_text', passed: Boolean(hasContent || typedContent) },
          { id: 'saved_and_exited', passed: Boolean(savedExited) }
        ]
      };
    }
  },
  {
    id: 128,
    moduleId: 'editing',
    title: 'Vim Navigation, Deleting & Searching (dd, yy, p, /)',
    xp: 250,
    badge: 'Vim-Virtuoso',
    description: 'Once you master Normal mode commands, Vim allows lightning-fast text manipulation without touching a mouse:\n\n- `dd`: Delete (cut) the entire current line into the yank buffer.\n- `yy`: Yank (copy) the current line.\n- `p`: Paste the yank buffer on the line below the cursor.\n- `/pattern`: Search forward through the file for text matching `pattern`.\n- `:%s/old/new/g`: Global search and replace throughout the entire file without manual edits.',
    instructions: 'Open `server.conf` with `vim server.conf`. Search for the word `port` by typing `/port`. Substitute all occurrences of `99999` with `8080` using `:%s/99999/8080/g`. Delete any unneeded line using `dd`, and then save and quit with `:wq`.',
    commandHelp: [
      { cmd: '/port', desc: 'Search for text pattern in Vim' },
      { cmd: ':%s/99999/8080/g', desc: 'Search and replace throughout file in Vim' },
      { cmd: 'dd', desc: 'Delete (cut) current line in Vim' },
      { cmd: ':wq', desc: 'Save and exit Vim' }
    ],
    objectives: [
      { id: 'used_search', text: 'Search for pattern using "/port"' },
      { id: 'used_substitute', text: 'Replace port using ":%s/99999/8080/g"' },
      { id: 'used_delete', text: 'Delete line with "dd"' },
      { id: 'saved_conf', text: 'Save modified file with ":wq"' }
    ],
    hints: [
      "Type /port to jump to the port configuration line.",
      "Run :%s/99999/8080/g to substitute the invalid port value.",
      "Type dd to delete a line.",
      "Save and exit with :wq."
    ],
    verify: (fs, _session, history) => {
      const usedSearch = history.some(c => /^\/port/i.test(c.trim()));
      const node = fs.getNodeByPath('/home/learner', 'server.conf');
      const has8080 = Boolean(node && node.type === 'file' && node.content.includes('8080'));
      const usedSubstitute = history.some(c => /:%s\/99999\/8080/i.test(c.trim())) || has8080;
      const usedDelete = history.some(c => c.trim() === 'dd');
      const savedConf = history.some(c => /^:(wq|x)/.test(c.trim())) || has8080;

      return {
        success: Boolean(usedSearch && usedSubstitute && usedDelete && savedConf),
        checks: [
          { id: 'used_search', passed: Boolean(usedSearch) },
          { id: 'used_substitute', passed: Boolean(usedSubstitute) },
          { id: 'used_delete', passed: Boolean(usedDelete) },
          { id: 'saved_conf', passed: Boolean(savedConf) }
        ]
      };
    }
  },
  {
    id: 39,
    moduleId: 'scripting',
    title: 'Writing Your First Bash Script',
    xp: 250,
    badge: 'Script-Kiddie',
    description: 'Imagine having a list of 20 tasks that you have to run every single morning. Typing them out manually is tedious and leaves room for typos. In Linux, we bundle commands into a file called a shell script so we can execute them all at once!\n\n- Every script starts with a "shebang" (`#!/bin/bash`) on the very first line to tell the system which shell interpreter to use to run the file.\n- After saving your script, you make it runnable by granting it execute permission via `chmod 755 script.sh` and then running it with `./script.sh`.',
    instructions: 'Let\'s automate! Create a file named `hello.sh` in your home folder. Write `#!/bin/bash` on the first line and `echo "Hello, BashQuest User!"` on the second. Grant it run permissions with `chmod 755 hello.sh` and execute it using `./hello.sh`.',
    commandHelp: [
      { cmd: 'touch hello.sh', desc: 'Create script file' },
      { cmd: 'chmod 755 hello.sh', desc: 'Grant execution permissions' },
      { cmd: './hello.sh', desc: 'Execute the script in current directory' }
    ],
    objectives: [
      { id: 'script_exists', text: 'Create script file "hello.sh"' },
      { id: 'script_content', text: 'Add shebang and hello message inside script' },
      { id: 'script_executable', text: 'Make script executable (permissions odd digit)' },
      { id: 'script_executed', text: 'Run the script using "./hello.sh"' }
    ],
    hints: [
      "Create the file, add shebang and hello message, make it executable, and run it.",
      "Use touch hello.sh, edit it to contain #!/bin/bash and the hello message, then chmod 755 hello.sh and run ./hello.sh.",
      "Try running: touch hello.sh, write the content, chmod 755 hello.sh and execute with ./hello.sh"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'hello.sh');
      const exists = node && node.type === 'file';
      const hasContent = exists && node.content.includes('#!/bin/bash') && node.content.includes('Hello, BashQuest User!');

      const digits = exists ? String(node.permissions).split('').map(Number) : [];
      const isExec = exists && digits.some(d => d % 2 !== 0);

      const executed = history.some(cmd => {
        const trimmed = cmd.trim();
        return trimmed === './hello.sh' || trimmed === 'bash hello.sh' || trimmed === 'sh hello.sh' || trimmed.endsWith('/hello.sh');
      });

      return {
        success: Boolean(exists && hasContent && isExec && executed),
        checks: [
          { id: 'script_exists', passed: Boolean(exists) },
          { id: 'script_content', passed: Boolean(hasContent) },
          { id: 'script_executable', passed: Boolean(isExec) },
          { id: 'script_executed', passed: Boolean(executed) }
        ]
      };
    }
  },
  {
    id: 40,
    moduleId: 'scripting',
    title: 'Variables & Arguments ($1)',
    xp: 250,
    badge: 'Arg-Master',
    description: 'Imagine creating a personalized welcome message for a website. You wouldn\'t want to write a separate script for every single customer\'s name! Instead, you write one script that takes a name as input when you run it.\n\n- In bash scripts, variables like `$1`, `$2`, and so on hold the "arguments" or inputs you pass at the command line.\n- E.g., running `./greet.sh Alice` means `$1` inside the script will automatically contain the text "Alice". Similarly, `$#` keeps track of how many inputs the user provided.',
    instructions: 'Let\'s build a dynamic script. Create `greet.sh` in your home directory with the shebang and the line `echo "Hello, $1!"`. Make it executable and run `./greet.sh Alice` to test it.',
    commandHelp: [
      { cmd: './greet.sh Alice', desc: 'Execute script with argument "Alice"' }
    ],
    objectives: [
      { id: 'greet_exists', text: 'Create script file "greet.sh"' },
      { id: 'greet_content', text: 'Use $1 inside greet.sh' },
      { id: 'greet_executable', text: 'Make greet.sh executable' },
      { id: 'greet_executed', text: 'Run the script with "Alice" argument' }
    ],
    hints: [
      "Create a script named greet.sh, use $1 to greet the first argument, make it executable, and run it with 'Alice'.",
      "Use echo 'Hello, $1!' inside the script, chmod 755 greet.sh, then run ./greet.sh Alice.",
      "Try running: touch greet.sh, add shebang and echo 'Hello, $1!', chmod 755 greet.sh, and ./greet.sh Alice"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'greet.sh');
      const exists = node && node.type === 'file';
      const hasContent = exists && node.content.includes('#!/bin/bash') && node.content.includes('$1');

      const digits = exists ? String(node.permissions).split('').map(Number) : [];
      const isExec = exists && digits.some(d => d % 2 !== 0);

      const executed = history.some(cmd => {
        const trimmed = cmd.trim();
        return trimmed === './greet.sh Alice' || trimmed === 'bash greet.sh Alice' || trimmed === 'sh greet.sh Alice' || trimmed.endsWith('/greet.sh Alice');
      });

      return {
        success: Boolean(exists && hasContent && isExec && executed),
        checks: [
          { id: 'greet_exists', passed: Boolean(exists) },
          { id: 'greet_content', passed: Boolean(hasContent) },
          { id: 'greet_executable', passed: Boolean(isExec) },
          { id: 'greet_executed', passed: Boolean(executed) }
        ]
      };
    }
  },
  {
    id: 41,
    moduleId: 'scripting',
    title: 'Conditional Logic (if/else)',
    xp: 270,
    badge: 'Logician',
    description: 'Imagine building a script that processes a CSV report, but it crashes if the report file doesn\'t actually exist on disk. To prevent errors, we write scripts that make decisions using `if/else` conditional logic.\n\n- We check conditions using brackets: `if [ -f "$1" ]; then ... fi`.\n- The `-f` flag checks if a path points to a file, while `-d` checks if it is a directory. The script branches its actions depending on whether the condition evaluates to true or false.',
    instructions: 'Let\'s add decision-making logic. Create `check_file.sh` in your home directory that checks if the filename passed as `$1` exists (using `if [ -f "$1" ]; then echo "Exists" else echo "Missing" fi`). Make it executable and test it on `names.txt`.',
    commandHelp: [
      { cmd: 'if [ -f file ]; then ...', desc: 'Syntax for file existence checks' }
    ],
    objectives: [
      { id: 'check_exists', text: 'Create script "check_file.sh"' },
      { id: 'check_logic', text: 'Implement -f checks inside script' },
      { id: 'check_executable', text: 'Make script executable' },
      { id: 'check_executed', text: 'Run the script with "names.txt"' }
    ],
    hints: [
      "Create check_file.sh, implement a condition to test if the filename argument exists, make it executable, and run it.",
      "Use 'if [ -f \"$1\" ]; then echo \"Exists\" else echo \"Missing\" fi' inside check_file.sh, make it executable, and run it with names.txt.",
      "Try running: touch check_file.sh, write the file check logic, chmod 755, and execute ./check_file.sh names.txt"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'check_file.sh');
      const exists = node && node.type === 'file';
      const logicOK = exists && node.content.includes('-f') && node.content.includes('if') && node.content.includes('fi');

      const digits = exists ? String(node.permissions).split('').map(Number) : [];
      const isExec = exists && digits.some(d => d % 2 !== 0);

      const executed = history.some(cmd => {
        const trimmed = cmd.trim();
        return trimmed === './check_file.sh names.txt' || trimmed === 'bash check_file.sh names.txt' || trimmed === 'sh check_file.sh names.txt' || trimmed.endsWith('/check_file.sh names.txt');
      });

      return {
        success: Boolean(exists && logicOK && isExec && executed),
        checks: [
          { id: 'check_exists', passed: Boolean(exists) },
          { id: 'check_logic', passed: Boolean(logicOK) },
          { id: 'check_executable', passed: Boolean(isExec) },
          { id: 'check_executed', passed: Boolean(executed) }
        ]
      };
    }
  },
  {
    id: 42,
    moduleId: 'scripting',
    title: 'Automating with Loops',
    xp: 280,
    badge: 'Loop-King',
    description: 'Imagine having a folder of 100 log files, and you need to make a backup copy of every single one. Copying them individually would be exhausting. In Linux, we use `for` loops to repeat the same action across a whole list of items automatically!\n\n- A `for` loop (like `for file in *.txt; do ... done`) iterates over every item that matches a pattern, processing them one after the other in a split second.',
    instructions: 'Let\'s automate backups. Create a script named `backup_logs.sh`. Have it create a directory named `backup` (using `mkdir -p backup`), then use a `for` loop to copy all `.log` files in the current folder into `backup`. Make it executable and run it.',
    commandHelp: [
      { cmd: 'for x in pattern; do ...', desc: 'For loop automation syntax' }
    ],
    objectives: [
      { id: 'backup_script_exists', text: 'Create script "backup_logs.sh"' },
      { id: 'backup_logic', text: 'Implement a for loop with cp' },
      { id: 'backup_executed', text: 'Run the backup_logs.sh script' },
      { id: 'backup_dir_ok', text: 'Directory "backup/" holds copies' }
    ],
    hints: [
      "Create backup_logs.sh, make backup folder, use a for loop to copy all .log files, and run it.",
      "Use mkdir -p backup, then 'for file in *.log; do cp \"$file\" backup/; done' in backup_logs.sh, and execute it.",
      "Try running: touch backup_logs.sh, write the loop inside, make it executable, and run ./backup_logs.sh"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'backup_logs.sh');
      const exists = node && node.type === 'file';
      const logicOK = exists && node.content.includes('for') && node.content.includes('cp') && node.content.includes('done');

      const executed = history.some(cmd => {
        const trimmed = cmd.trim();
        return trimmed === './backup_logs.sh' || trimmed === 'bash backup_logs.sh' || trimmed === 'sh backup_logs.sh' || trimmed.endsWith('/backup_logs.sh');
      });

      const backupDir = fs.getNodeByPath('/home/learner', 'backup');
      const backupDirOK = backupDir && backupDir.type === 'dir';

      return {
        success: Boolean(exists && logicOK && executed && backupDirOK),
        checks: [
          { id: 'backup_script_exists', passed: Boolean(exists) },
          { id: 'backup_logic', passed: Boolean(logicOK) },
          { id: 'backup_executed', passed: Boolean(executed) },
          { id: 'backup_dir_ok', passed: Boolean(backupDirOK) }
        ]
      };
    }
  },
  {
    id: 54,
    moduleId: 'scripting',
    title: 'Reusable Logic (bash functions)',
    xp: 260,
    badge: 'Modular',
    description: 'You\'ve written loops and conditionals to automate actions in scripts. But as your scripts grow, copy-pasting the same logic over and over makes them hard to maintain. In bash, we can group commands into reusable functions.\n\n- To define a function, we declare it by name followed by parentheses and curly braces: `log_msg() { echo "msg"; }`.\n- Functions can receive arguments just like shell scripts, which are accessed using local position parameters `$1`, `$2`, etc. inside the function body.\n- To call a function, simply use its name like any other command: `log_msg "Backup started"`.',
    instructions: 'Let\'s build a modular backup script. Create a script named `backup_helper.sh` in your home folder. Define a function named `log_msg` that prints a message with a timestamp (e.g. `log_msg() { echo "[$(date +%T)] $1"; }` or similar), and call it at least twice inside the script to log actions. Make it executable and run it.',
    commandHelp: [
      { cmd: 'log_msg() { echo "$1"; }', desc: 'Define a function in bash' }
    ],
    objectives: [
      { id: 'script_exists', text: 'Create script file "backup_helper.sh" in home' },
      { id: 'has_function', text: 'Define the log_msg function inside the script' },
      { id: 'script_executed', text: 'Make script executable and run it' }
    ],
    hints: [
      "Use touch backup_helper.sh, then edit it to include shebang #!/bin/bash, log_msg() { ... }, and call log_msg twice.",
      "Remember to run chmod 755 backup_helper.sh to make it executable before running ./backup_helper.sh.",
      "Try defining the function: log_msg() { echo \"[LOG] $1\"; } and then call it like: log_msg 'Starting'"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'backup_helper.sh');
      const exists = node && node.type === 'file';
      const hasFunction = exists && (node.content.includes('log_msg()') || node.content.includes('function log_msg'));

      const digits = exists ? String(node.permissions).split('').map(Number) : [];
      const isExec = exists && digits.some(d => d % 2 !== 0);

      const executed = history.some(cmd => {
        const trimmed = cmd.trim();
        return trimmed === './backup_helper.sh' || trimmed === 'bash backup_helper.sh' || trimmed === 'sh backup_helper.sh' || trimmed.endsWith('/backup_helper.sh');
      });

      return {
        success: Boolean(exists && hasFunction && isExec && executed),
        checks: [
          { id: 'script_exists', passed: Boolean(exists) },
          { id: 'has_function', passed: Boolean(hasFunction) },
          { id: 'script_executed', passed: Boolean(isExec && executed) }
        ]
      };
    }
  },
  {
    id: 55,
    moduleId: 'scripting',
    title: 'Scheduling Tasks (crontab)',
    xp: 280,
    badge: 'Scheduler',
    description: 'Now that you have written robust shell scripts, you wouldn\'t want to log in at midnight just to run your backup helper. Linux provides the `cron` service to run commands or scripts automatically at specific times.\n\n- The cron service checks a scheduling table called `crontab`.\n- Each cron schedule has 5 fields representing time: `minute hour day-of-month month day-of-week` followed by the command.\n- E.g., `30 2 * * * /path/to/script.sh` runs a script every day at 2:30 AM.\n- We use `crontab -l` to list our active cron jobs, and `crontab <filename>` to load schedules from a file.',
    instructions: 'Let\'s automate our backup helper. Write a cron scheduling string into a file named `my_cron` (for example, `* * * * * /home/learner/backup_helper.sh` to run every minute). Install this schedule by running `crontab my_cron`, and verify it by running `crontab -l`.',
    commandHelp: [
      { cmd: 'crontab my_cron', desc: 'Install cron jobs from the file my_cron' },
      { cmd: 'crontab -l', desc: 'List active cron jobs for the current user' }
    ],
    objectives: [
      { id: 'cron_file_created', text: 'Create file "my_cron" in home with cron schedule' },
      { id: 'cron_installed', text: 'Install the cron schedule using crontab my_cron' },
      { id: 'cron_listed', text: 'List the active cron schedule with crontab -l' }
    ],
    hints: [
      "Use echo '* * * * * /home/learner/backup_helper.sh' > my_cron to create the cron file.",
      "Load the cron file into the crontab table by running crontab my_cron.",
      "Check the installed cron jobs using crontab -l"
    ],
    verify: (fs, session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'my_cron');
      const fileCreated = node && node.type === 'file';
      const hasCronString = fileCreated && node.content.includes('backup_helper.sh');

      const ranCrontabInstall = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'crontab' && parts[1] === 'my_cron';
      });
      const ranCrontabL = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('crontab') && parts.includes('-l');
      });

      const installed = session.crontab && session.crontab.includes('backup_helper.sh');

      return {
        success: Boolean(fileCreated && hasCronString && (ranCrontabInstall || installed) && ranCrontabL),
        checks: [
          { id: 'cron_file_created', passed: Boolean(fileCreated && hasCronString) },
          { id: 'cron_installed', passed: Boolean(ranCrontabInstall || installed) },
          { id: 'cron_listed', passed: Boolean(ranCrontabL) }
        ]
      };
    }
  },
  {
    id: 129,
    moduleId: 'scripting',
    title: 'Exit Codes & Logical Chaining ($?, &&, ||)',
    xp: 260,
    badge: 'Pipeline-Logician',
    description: 'Every command executed in Linux returns an **exit status code** between 0 and 255 upon completion:\n\n- `0`: Success (no errors occurred).\n- `1-255`: Failure or error code.\n- The special shell parameter `$?` stores the exit code of the immediately preceding command: `echo $?`.\n\nShell logic operators chain commands based on exit codes:\n- `cmd1 && cmd2`: Logical AND. Runs `cmd2` **only if** `cmd1` succeeds (exit code 0).\n- `cmd1 || cmd2`: Logical OR. Runs `cmd2` **only if** `cmd1` fails (non-zero exit code).\n\nCombining them creates clean resilient commands: `mkdir backup && cp app.db backup/ || echo "Backup failed"`.',
    instructions: 'Check the exit code of a successful command by running `whoami` followed by `echo $?`. Next, use conditional chaining to ensure the directory exists before copying: run `mkdir backup && cp app.db backup/ || echo \'Backup failed\'`.',
    commandHelp: [
      { cmd: 'echo $?', desc: 'Print exit code of the last command' },
      { cmd: 'mkdir backup && cp app.db backup/ || echo \'Backup failed\'', desc: 'Conditionally create directory, copy file, or report failure' }
    ],
    objectives: [
      { id: 'checked_exit_code', text: 'Inspect last exit code with "echo $?"' },
      { id: 'chained_backup', text: 'Chain backup with "mkdir backup && cp app.db backup/ || echo \'Backup failed\'"' },
      { id: 'backup_db_exists', text: 'Verify app.db copied into backup/' }
    ],
    hints: [
      "Run whoami, then run echo $? to inspect the 0 exit code.",
      "Execute the chained statement: mkdir backup && cp app.db backup/ || echo 'Backup failed'"
    ],
    verify: (fs, _session, history) => {
      const checkedExit = history.some(c => /echo\s+\$\?/i.test(c));
      const chainedBackup = history.some(c => c.includes('&&') && c.includes('backup') && c.includes('app.db'));
      const dbNode = fs.getNodeByPath('/home/learner/backup', 'app.db');
      const backupExists = Boolean(dbNode && dbNode.type === 'file');

      return {
        success: Boolean(checkedExit && chainedBackup && backupExists),
        checks: [
          { id: 'checked_exit_code', passed: Boolean(checkedExit) },
          { id: 'chained_backup', passed: Boolean(chainedBackup) },
          { id: 'backup_db_exists', passed: Boolean(backupExists) }
        ]
      };
    }
  },
  {
    id: 130,
    moduleId: 'scripting',
    title: 'User Input & Command Substitution (read & $(...))',
    xp: 260,
    badge: 'Script-Automator',
    description: 'Interactive and automated scripts rely on two essential shell capabilities:\n\n1. **User Input (`read`)**: Prompts the user to enter data and stores the response in a shell variable. The `-p` flag prints a custom prompt string:\n   `read -p "Enter username: " USERNAME`\n\n2. **Command Substitution (`$(...)`)**: Executes a command in a subshell and substitutes its standard output into the variable or command line:\n   `TODAY=$(date +%F)`\n\nThis lets you create dynamic timestamped filenames and automated reports.',
    instructions: 'Prompt for a username variable using `read -p "Enter username: " USERNAME`. Then capture today\'s formatted date into a variable with `TODAY=$(date +%F)`. Finally, display the captured date with `echo $TODAY`.',
    commandHelp: [
      { cmd: 'read -p "Enter username: " USERNAME', desc: 'Prompt user for input and save in variable' },
      { cmd: 'TODAY=$(date +%F)', desc: 'Store command output in variable' },
      { cmd: 'echo $TODAY', desc: 'Display value of variable' }
    ],
    objectives: [
      { id: 'used_read', text: 'Prompt for input using "read -p"' },
      { id: 'captured_date', text: 'Capture date with "TODAY=$(date +%F)"' },
      { id: 'printed_date', text: 'Display variable with "echo $TODAY"' }
    ],
    hints: [
      "Run: read -p \"Enter username: \" USERNAME",
      "Capture date: TODAY=$(date +%F)",
      "Echo variable: echo $TODAY"
    ],
    verify: (_fs, session, history) => {
      const usedRead = history.some(c => /read\s+-p/i.test(c));
      const capturedDate = history.some(c => /TODAY=\$\(date\s+\+%F\)/i.test(c)) || session?.env?.TODAY === '2026-07-03';
      const printedDate = history.some(c => /echo\s+\$TODAY/i.test(c));

      return {
        success: Boolean(usedRead && capturedDate && printedDate),
        checks: [
          { id: 'used_read', passed: Boolean(usedRead) },
          { id: 'captured_date', passed: Boolean(capturedDate) },
          { id: 'printed_date', passed: Boolean(printedDate) }
        ]
      };
    }
  },
  {
    id: 131,
    moduleId: 'scripting',
    title: 'while Loops & case Statements',
    xp: 260,
    badge: 'Loop-Master',
    description: 'Two of the most common control structures in systems engineering scripts are file-reading loops and case branches:\n\n1. **File-reading `while` loop**: Reads input line by line safely using `read -r` without interpreting escape characters:\n   `while read -r line; do echo "Processing: $line"; done < names.txt`\n\n2. **`case` statement**: Matches a variable against multiple patterns cleaner than multiple `if/elif` blocks:\n   `case $1 in start) systemctl start app ;; stop) systemctl stop app ;; *) echo "Usage: $0 {start|stop}" ;; esac`',
    instructions: 'Process entries in `names.txt` line by line by running: `while read -r line; do echo "User: $line"; done < names.txt`. Then test a case conditional dispatch: `case "start" in start) echo "Service starting" ;; stop) echo "Service stopping" ;; esac`.',
    commandHelp: [
      { cmd: 'while read -r line; do echo "User: $line"; done < names.txt', desc: 'Iterate over lines in a file' },
      { cmd: 'case "start" in start) echo "Service starting" ;; esac', desc: 'Execute pattern match case block' }
    ],
    objectives: [
      { id: 'ran_while_loop', text: 'Execute while read loop iterating over names.txt' },
      { id: 'ran_case_block', text: 'Execute case pattern matching statement' }
    ],
    hints: [
      "Run: while read -r line; do echo \"User: $line\"; done < names.txt",
      "Run: case \"start\" in start) echo \"Service starting\" ;; esac"
    ],
    verify: (_fs, _session, history) => {
      const ranWhile = history.some(c => c.includes('while') && c.includes('read') && c.includes('names.txt'));
      const ranCase = history.some(c => c.includes('case') && c.includes('esac'));

      return {
        success: Boolean(ranWhile && ranCase),
        checks: [
          { id: 'ran_while_loop', passed: Boolean(ranWhile) },
          { id: 'ran_case_block', passed: Boolean(ranCase) }
        ]
      };
    }
  },
  {
    id: 43,
    moduleId: 'processing',
    title: 'Stream Editing with sed',
    xp: 260,
    badge: 'Sed-Master',
    description: 'Imagine you have a huge database dump file, and you need to replace all occurrences of an old server IP address with a new one. Opening it in an editor might freeze your computer. In Linux, we edit text streams on the fly using `sed` (short for "stream editor").\n\n- The basic syntax is `sed "s/old/new/g" file.txt` to find and replace text.\n- Adding the `-i` (in-place) flag saves the replacements directly back into the file itself, rather than just printing the modified text on screen.\n\n**Why this matters**: If you run `sed "s/port=80/port=8080/g" server.conf` without `-i`, it will only print the modified text to your terminal screen. The actual file remains completely unchanged. The `-i` (in-place) flag is necessary to save the changes directly back into the file.',
    instructions: 'Let\'s update a setting. Edit `server.conf` in your home folder. Change `port=80` to `port=8080` in-place by running `sed -i "s/port=80/port=8080/g" server.conf`.',
    commandHelp: [
      { cmd: 'sed -i "s/old/new/g" file', desc: 'Perform in-place text replacement in a file' }
    ],
    objectives: [
      { id: 'used_sed', text: 'Use the "sed" command with -i flag' },
      { id: 'port_changed', text: 'Set port configuration to port=8080 in server.conf' }
    ],
    hints: [
      "Think about which command does stream editing and search-replace.",
      "Use sed with the in-place option (-i) to substitute 'port=80' with 'port=8080'.",
      "Try running: sed -i \"s/port=80/port=8080/g\" server.conf"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'server.conf');
      const portChanged = Boolean(node && node.type === 'file' && node.content.includes('port=8080') && !node.content.includes('port=80\n'));
      const usedSed = Boolean(portChanged || hasCommandInHistory(history, seg => seg.command === 'sed' && (seg.hasAnyFlag('i', 'in-place') || seg.flags.has('i'))));

      return {
        success: Boolean(usedSed && portChanged),
        checks: [
          { id: 'used_sed', passed: Boolean(usedSed) },
          { id: 'port_changed', passed: Boolean(portChanged) }
        ]
      };
    }
  },
  {
    id: 44,
    moduleId: 'processing',
    title: 'Data Extraction with awk',
    xp: 280,
    badge: 'Awk-Wizard',
    description: 'Imagine receiving a large spreadsheet saved as plain text, where columns are separated by commas or spaces, and you only need to extract the very first column of data. In Linux, we parse structured columns of text using the powerhouse language `awk`.\n\n- By default, `awk` splits lines by whitespace, assigning column 1 to `$1`, column 2 to `$2`, and so on.\n- The `-F` flag lets you specify a custom separator (like `-F:` for colons). E.g., `awk -F: \'{print $1}\' /etc/passwd` extracts just the usernames from a colon-separated list.\n\n**Why this matters**: If you run `awk \'{print $1}\' /etc/shadow` without `-F:`, `awk` will split lines by whitespace (the default) rather than colons. Since shadow file lines don\'t have spaces, the entire line is treated as a single field, printing every user\'s full hash details. The `-F:` flag forces `awk` to split columns by colons instead.',
    instructions: 'Let\'s extract some data. Retrieve all usernames (the first column) from `/etc/shadow` using `awk` with a colon `:` separator, and save them into `shadow_users.txt` using `sudo awk -F: \'{print $1}\' /etc/shadow > shadow_users.txt`.',
    commandHelp: [
      { cmd: "awk -F: '{print $1}' file", desc: 'Print first field of colon-delimited file' }
    ],
    objectives: [
      { id: 'used_awk', text: 'Use "awk" with field separator flag -F' },
      { id: 'created_shadow_users', text: 'Output names to "shadow_users.txt"' },
      { id: 'correct_shadow_users', text: 'Check shadow_users.txt has root and learner' }
    ],
    hints: [
      "Think about which command splits columns of data using a custom field separator.",
      "Use awk with -F: to print the first column ($1) of /etc/shadow with sudo, and redirect output to shadow_users.txt.",
      "Try running: sudo awk -F: '{print $1}' /etc/shadow > shadow_users.txt"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'shadow_users.txt');
      const exists = Boolean(node && node.type === 'file');
      const correctUsers = Boolean(exists && node.content.includes('root') && node.content.includes('learner'));
      const usedAwk = Boolean(correctUsers || hasCommandInHistory(history, seg => seg.command === 'awk'));

      return {
        success: Boolean(usedAwk && exists && correctUsers),
        checks: [
          { id: 'used_awk', passed: Boolean(usedAwk) },
          { id: 'created_shadow_users', passed: Boolean(exists) },
          { id: 'correct_shadow_users', passed: Boolean(correctUsers) }
        ]
      };
    }
  },
  {
    id: 45,
    moduleId: 'processing',
    title: 'Translating & Cutting Data',
    xp: 260,
    badge: 'Parser',
    description: 'Imagine working with a CSV spreadsheet of transaction dates and names. You want to extract only the first column (dates) and convert all text to capital letters for consistency. In Linux, we can combine lightweight parsing tools in a pipeline:\n\n- The `cut` command slices out specific columns from structured text. E.g., `cut -d, -f1` splits lines by commas (`-d,`) and extracts the first column (`-f1`).\n- The `tr` (translate) command transforms characters from standard input, like swapping lowercase characters for uppercase (`tr "a-z" "A-Z"`).\n\n**Why this matters**: If you run `cut reports.csv` without `-d,` and `-f1`, you will get: `cut: you must specify a list of bytes, characters, or fields`. If you specify `-f1` but omit `-d,`, it defaults to tabs, meaning it won\'t split a CSV file and will just print the entire line. The `-d,` flag defines the comma as the column separator, and `-f1` tells it to extract only the first column.',
    instructions: 'Let\'s slice and transform data. Extract the first column of `reports.csv` using `cut -d, -f1 reports.csv`, pipe it into `tr "a-z" "A-Z"` to make it uppercase, and redirect the final result to `upper_reports.txt`.',
    commandHelp: [
      { cmd: 'cut -d, -f1 file | tr "a-z" "A-Z"', desc: 'Pipe cut field into translation' }
    ],
    objectives: [
      { id: 'used_cut', text: 'Use "cut" with comma delimiter' },
      { id: 'used_tr', text: 'Translate characters to uppercase with "tr"' },
      { id: 'upper_reports_exists', text: 'Create file "upper_reports.txt"' },
      { id: 'content_uppercase', text: 'Verify text is UPPERCASE' }
    ],
    hints: [
      "You need to slice reports.csv to extract the first column, convert it to uppercase, and save it.",
      "Use cut -d, -f1 reports.csv, pipe (|) it into tr \"a-z\" \"A-Z\", and redirect (>) to upper_reports.txt.",
      "Try running: cut -d, -f1 reports.csv | tr \"a-z\" \"A-Z\" > upper_reports.txt"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'upper_reports.txt');
      const exists = Boolean(node && node.type === 'file');
      const contentUpper = Boolean(exists && node.content.trim() === 'DATE\nJUL 1\nJUL 2\nJUL 3');
      const usedCut = Boolean(contentUpper || hasCommandInHistory(history, seg => seg.command === 'cut'));
      const usedTr = Boolean(contentUpper || hasCommandInHistory(history, seg => seg.command === 'tr'));

      return {
        success: Boolean(usedCut && usedTr && exists && contentUpper),
        checks: [
          { id: 'used_cut', passed: Boolean(usedCut) },
          { id: 'used_tr', passed: Boolean(usedTr) },
          { id: 'upper_reports_exists', passed: Boolean(exists) },
          { id: 'content_uppercase', passed: Boolean(contentUpper) }
        ]
      };
    }
  },
  {
    id: 132,
    moduleId: 'processing',
    title: 'Parsing JSON in the Terminal (jq)',
    xp: 260,
    badge: 'JSON-Sorcerer',
    description: 'Modern cloud infrastructure, Kubernetes, Docker, and REST APIs all communicate in JSON. The `jq` command-line JSON processor is the industry standard tool for slicing, filtering, and mapping structured JSON data in terminal pipelines.\n\n- Pretty-print and syntax validate JSON: `cat api.json | jq \'.\'` (or `jq \'.\' api.json`).\n- Extract specific keys: `jq \'.version\' api.json`.\n- Access array items and nested object fields: `jq \'.users[0].name\' api.json`.\n- Output unquoted raw strings (ideal for shell variables): `jq -r \'.users[0].name\' api.json`.',
    instructions: 'Pretty-print `api.json` using `cat api.json | jq \'.\'`. Next, extract the nested name of the first user in raw format using `jq -r \'.users[0].name\' api.json`.',
    commandHelp: [
      { cmd: 'cat api.json | jq \'.\'', desc: 'Pretty-print JSON data' },
      { cmd: 'jq -r \'.users[0].name\' api.json', desc: 'Extract raw nested string value from JSON' }
    ],
    objectives: [
      { id: 'pretty_printed_json', text: 'Pretty-print api.json with jq \'.\'' },
      { id: 'extracted_nested_field', text: 'Extract first user name with jq -r \'.users[0].name\'' }
    ],
    hints: [
      "Run cat api.json | jq '.' or jq '.' api.json.",
      "Use the -r flag and key path: jq -r '.users[0].name' api.json."
    ],
    verify: (_fs, _session, history) => {
      const prettyPrinted = history.some(c => c.includes('jq') && c.includes('.'));
      const extractedNested = history.some(c => c.includes('jq') && c.includes('.users[0].name'));

      return {
        success: Boolean(prettyPrinted && extractedNested),
        checks: [
          { id: 'pretty_printed_json', passed: Boolean(prettyPrinted) },
          { id: 'extracted_nested_field', passed: Boolean(extractedNested) }
        ]
      };
    }
  },
  {
    id: 133,
    moduleId: 'processing',
    title: 'Advanced Counting & Numeric Sorting (uniq -c & sort -nr)',
    xp: 260,
    badge: 'Log-Analyst',
    description: 'When troubleshooting DDoS attacks, brute force login attempts, or high-traffic API endpoints, sysadmins rely on one classic pipeline composed of `sort`, `uniq -c`, and `sort -nr`.\n\n1. `sort access.log`: Groups identical lines together (a mandatory prerequisite for `uniq`).\n2. `uniq -c`: Counts the number of duplicate occurrences for each unique line, prefixing each line with its tally count.\n3. `sort -nr`: Sorts the tally lines **numerically** (`-n`) and in **reverse** (`-r`) order so the most frequent occurrences appear at the top.\n4. `head -n 5`: Isolates the top 5 most frequent entries.',
    instructions: 'Analyze `access.log` to identify top IP traffic. Run the complete pipeline: `sort access.log | uniq -c | sort -nr | head -n 5`.',
    commandHelp: [
      { cmd: 'sort access.log | uniq -c | sort -nr | head -n 5', desc: 'Count frequency and sort top 5 occurrences' }
    ],
    objectives: [
      { id: 'ran_frequency_pipeline', text: 'Run frequency pipeline "sort access.log | uniq -c | sort -nr | head -n 5"' }
    ],
    hints: [
      "Pipe the sorted lines into uniq -c to calculate counts.",
      "Pipe the counted results into sort -nr to sort largest numbers first, then pipe into head -n 5.",
      "Try running: sort access.log | uniq -c | sort -nr | head -n 5"
    ],
    verify: (_fs, _session, history) => {
      const ranPipeline = history.some(c => c.includes('sort') && c.includes('uniq -c') && (c.includes('sort -nr') || c.includes('sort -rn')));

      return {
        success: Boolean(ranPipeline),
        checks: [
          { id: 'ran_frequency_pipeline', passed: Boolean(ranPipeline) }
        ]
      };
    }
  },
  {
    id: 134,
    moduleId: 'processing',
    title: 'Binary & Hex Inspection (strings & xxd)',
    xp: 260,
    badge: 'Binary-Inspector',
    description: 'Binary executables and database files cannot be read with `cat` or text editors without corrupting the terminal display. Linux provides dedicated tools for inspecting compiled binaries and memory dumps:\n\n- `strings <file>`: Scans binary files and extracts continuous human-readable ASCII/UTF-8 character sequences (defaulting to 4+ characters). Essential for finding hardcoded URLs, secret keys, version strings, or embedded error messages in compiled software.\n- `xxd <file>` or `hexdump -C <file>`: Creates a canonical two-column hexadecimal and ASCII dump of binary files to inspect magic bytes (like `ELF` headers) and binary data offsets.',
    instructions: 'Inspect the compiled application binary `/bin/app`. Extract all embedded readable strings with `strings /bin/app`. Then inspect its binary header in hex format using `xxd /bin/app` (or `hexdump -C /bin/app`).',
    commandHelp: [
      { cmd: 'strings /bin/app', desc: 'Extract readable strings from binary' },
      { cmd: 'xxd /bin/app', desc: 'View hex dump of file' },
      { cmd: 'hexdump -C /bin/app', desc: 'View canonical hex+ASCII dump' }
    ],
    objectives: [
      { id: 'inspected_strings', text: 'Extract strings from binary with "strings /bin/app"' },
      { id: 'inspected_hex', text: 'Inspect hex dump with "xxd /bin/app" or "hexdump -C /bin/app"' }
    ],
    hints: [
      "Run strings /bin/app to locate embedded configuration strings.",
      "Run xxd /bin/app or hexdump -C /bin/app to inspect the binary offsets and headers."
    ],
    verify: (_fs, _session, history) => {
      const inspectedStrings = history.some(c => /strings\s+(\/bin\/)?app/i.test(c));
      const inspectedHex = history.some(c => /(xxd|hexdump)\s+.*(\/bin\/)?app/i.test(c));

      return {
        success: Boolean(inspectedStrings && inspectedHex),
        checks: [
          { id: 'inspected_strings', passed: Boolean(inspectedStrings) },
          { id: 'inspected_hex', passed: Boolean(inspectedHex) }
        ]
      };
    }
  },
  {
    id: 46,
    moduleId: 'env_admin',
    title: 'Managing Environment Variables',
    xp: 250,
    badge: 'Env-Architect',
    description: 'Imagine you are deploying a web application, and it needs to know whether to run in a safe local "development" sandbox or connect to the live "production" database. In Linux, we pass configurations like this to running programs using **environment variables**.\n\n- We use the `export` command to define a variable so that any programs started by our shell can read it. E.g., `export APP_ENV=production`.\n- To check or display a variable\'s value, we prefix its name with a dollar sign: `echo $APP_ENV`.',
    instructions: 'Let\'s configure the environment. Set and export a variable named `APP_ENV` with the value `production` by running `export APP_ENV=production`, and then verify it by running `echo $APP_ENV`.',
    commandHelp: [
      { cmd: 'export VAR=val', desc: 'Define environment variable' },
      { cmd: 'echo $VAR', desc: 'Print variable value' }
    ],
    objectives: [
      { id: 'exported_env', text: 'Run the "export" command' },
      { id: 'env_correct', text: 'Set APP_ENV env variable to "production"' },
      { id: 'echoed_env', text: 'Print variable using "echo $APP_ENV"' }
    ],
    hints: [
      "Think about which command defines environment variables.",
      "Use export APP_ENV=production, and print it using echo $APP_ENV.",
      "Try running: export APP_ENV=production followed by echo $APP_ENV"
    ],
    verify: (_fs, session, history) => {
      const exportedEnv = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('export');
      });
      const envCorrect = session.env.APP_ENV === 'production';
      const echoedEnv = history.some(cmd => cmd.includes('echo') && cmd.includes('APP_ENV'));

      return {
        success: exportedEnv && envCorrect && echoedEnv,
        checks: [
          { id: 'exported_env', passed: exportedEnv },
          { id: 'env_correct', passed: envCorrect },
          { id: 'echoed_env', passed: echoedEnv }
        ]
      };
    }
  },
  {
    id: 47,
    moduleId: 'archiving',
    title: 'Archives & Compression (tar)',
    xp: 280,
    badge: 'Packer',
    description: 'Imagine you have a folder containing 500 server logs, and you want to email it to a colleague or back it up to cloud storage. Sending 500 individual files is slow and inefficient. In Linux, we compress them into a single, compact zip-like file using `tar` (short for "tape archive").\n\n- We create compressed archives using flags: `-c` (create), `-z` (compress with gzip), `-v` (verbose listing of files), and `-f` (specify filename). E.g., `tar -czvf backup.tar.gz folder/` bundles and zips the directory.\n\n**Why this matters**: If you run `tar -cz logs.tar.gz logs` without `-f`, you will get: `tar: Refusing to write archive contents to terminal`. The `-f` flag is critical because it tells `tar` to write the output to a file instead of sending raw binary archive data directly to your terminal. The `-c` and `-z` flags are also required to create and compress the archive respectively.',
    instructions: 'Let\'s package our logs. Bundle and compress the `logs` folder inside `/home/learner` into a file named `logs.tar.gz` by running `tar -czvf logs.tar.gz logs`.',
    commandHelp: [
      { cmd: 'tar -czvf archive.tar.gz folder', desc: 'Create compressed tar archive' }
    ],
    objectives: [
      { id: 'used_tar_c', text: 'Use "tar" command with -c (create) and -z (gzip) flags' },
      { id: 'archive_exists', text: 'Create "logs.tar.gz" in home directory' }
    ],
    hints: [
      "Think about which command packages and compresses folders into tarball archives.",
      "Use tar with the create (-c), gzip (-z), verbose (-v), and file (-f) options.",
      "Try running: tar -czvf logs.tar.gz logs"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'logs.tar.gz');
      const archiveExists = Boolean(node && node.type === 'file');
      const usedTarC = Boolean(hasCommandInHistory(history, seg => seg.command === 'tar' && seg.hasAnyFlag('c', 'create') && seg.hasAnyFlag('z', 'gzip') && seg.hasAnyFlag('f', 'file')));

      return {
        success: Boolean(usedTarC && archiveExists),
        checks: [
          { id: 'used_tar_c', passed: Boolean(usedTarC) },
          { id: 'archive_exists', passed: Boolean(archiveExists) }
        ]
      };
    }
  },
  {
    id: 62,
    moduleId: 'archiving',
    title: 'File Compression (gzip & gunzip)',
    xp: 200,
    badge: 'Compressor',
    description: 'Imagine you have a single text file containing a massive dataset, and you want to reduce its size to save disk space or speed up sharing. In Linux, we compress individual files using `gzip` and restore them using `gunzip`.\n\n- The `gzip <filename>` command compresses a file, replacing it with a compressed version ending in `.gz` (e.g. `backup.txt` becomes `backup.txt.gz`).\n- The `gunzip <filename.gz>` command decompresses the file, restoring the original version.',
    instructions: 'Let\'s compress a file to save space. Run `gzip note.txt` in your home folder. Then, decompress the resulting `note.txt.gz` file back to its original state by running `gunzip note.txt.gz`.',
    commandHelp: [
      { cmd: 'gzip note.txt', desc: 'Compress note.txt to note.txt.gz' },
      { cmd: 'gunzip note.txt.gz', desc: 'Decompress note.txt.gz back to note.txt' }
    ],
    objectives: [
      { id: 'used_gzip', text: 'Run the "gzip" command to compress note.txt' },
      { id: 'used_gunzip', text: 'Run the "gunzip" command to restore note.txt' }
    ],
    hints: [
      "Use gzip note.txt to compress the file.",
      "Use gunzip note.txt.gz to decompress it back.",
      "Try running: gzip note.txt followed by gunzip note.txt.gz"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'note.txt');
      const fileExists = Boolean(node && node.type === 'file');
      const usedGzip = hasCommandInHistory(history, seg => seg.command === 'gzip' && seg.hasArg('note.txt'));
      const usedGunzip = hasCommandInHistory(history, seg => (seg.command === 'gunzip' && (seg.hasArg('note.txt.gz') || seg.hasArg('note.txt'))) || (seg.command === 'gzip' && seg.hasAnyFlag('d', 'decompress')));
      return {
        success: Boolean(usedGzip && usedGunzip && fileExists),
        checks: [
          { id: 'used_gzip', passed: Boolean(usedGzip) },
          { id: 'used_gunzip', passed: Boolean(usedGunzip) }
        ]
      };
    }
  },
  {
    id: 66,
    moduleId: 'archiving',
    title: 'Archiving with zip & unzip',
    xp: 180,
    badge: 'Packer',
    description: 'While `tar` and `gzip` are standard on Linux, `zip` is the most common archive format in the cross-platform world (Windows/macOS). In Linux, we package and compress files into zip files using `zip`, and extract them using `unzip`.\n\n- The `zip <archive.zip> <files>` command creates a zip archive.\n- The `unzip <archive.zip>` command extracts the files from the archive.',
    instructions: 'Let\'s package our notes. Create a zip archive named `note.zip` containing the file `note.txt` in your home folder. Then, test extraction by running `unzip note.zip`.',
    commandHelp: [
      { cmd: 'zip note.zip note.txt', desc: 'Create note.zip containing note.txt' },
      { cmd: 'unzip note.zip', desc: 'Extract contents of note.zip' }
    ],
    objectives: [
      { id: 'used_zip', text: 'Run the "zip" command' },
      { id: 'used_unzip', text: 'Run the "unzip" command' }
    ],
    hints: [
      "Use zip note.zip note.txt first, followed by unzip note.zip.",
      "Try running: zip note.zip note.txt and then unzip note.zip"
    ],
    verify: (_fs, _session, history) => {
      const usedZip = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('zip') && parts.includes('note.zip') && parts.includes('note.txt');
      });
      const usedUnzip = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('unzip') && parts.includes('note.zip');
      });
      return {
        success: usedZip && usedUnzip,
        checks: [
          { id: 'used_zip', passed: usedZip },
          { id: 'used_unzip', passed: usedUnzip }
        ]
      };
    }
  },
  {
    id: 67,
    moduleId: 'archiving',
    title: 'Alternative Compression (bzip2 & xz)',
    xp: 180,
    badge: 'Squeezer',
    description: 'Beyond `gzip` and `zip`, Linux supports other compression formats optimized for higher compression ratios at the expense of CPU speed. These are `bzip2` (bz2) and `xz` (xz).\n\n- The `bzip2 <file>` command compresses a file, outputting `<file>.bz2`.\n- The `xz <file>` command uses lossless LZMA compression to create `<file>.xz`, which yields exceptionally small file sizes, making it ideal for Linux kernel releases.',
    instructions: 'Let\'s compare formats. Compress `note.txt` using `bzip2 note.txt`. Then, compress the resulting files using `xz note.txt` (to simulate both).',
    commandHelp: [
      { cmd: 'bzip2 note.txt', desc: 'Compress note.txt using bzip2' },
      { cmd: 'xz note.txt', desc: 'Compress note.txt using xz' }
    ],
    objectives: [
      { id: 'used_bzip2', text: 'Run bzip2 note.txt' },
      { id: 'used_xz', text: 'Run xz note.txt' }
    ],
    hints: [
      "Run bzip2 note.txt to test bzip2 compression.",
      "Run xz note.txt to test xz compression."
    ],
    verify: (_fs, _session, history) => {
      const usedBzip2 = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('bzip2') && parts.includes('note.txt');
      });
      const usedXz = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('xz') && parts.includes('note.txt');
      });
      return {
        success: usedBzip2 && usedXz,
        checks: [
          { id: 'used_bzip2', passed: usedBzip2 },
          { id: 'used_xz', passed: usedXz }
        ]
      };
    }
  },
  {
    id: 48,
    moduleId: 'env_admin',
    title: 'Inspecting the Environment',
    xp: 200,
    badge: 'Env-Watcher',
    description: 'Imagine you are trying to debug a script that keeps failing because it can\'t find a program\'s path, or you want to see which user account is active in this terminal. In Linux, all these session-wide configurations are stored together.\n\n- The `env` command prints out a complete directory of all environment variables currently loaded in your active session, letting you verify configurations in one go.',
    instructions: 'Let\'s inspect the environment list. Print all active environment variables in your terminal session by running the `env` command.',
    commandHelp: [
      { cmd: 'env', desc: 'List active environment variables' }
    ],
    objectives: [
      { id: 'ran_env', text: 'Run the "env" command' }
    ],
    hints: [
      "Think about which command prints all active environment variables.",
      "Use the 'env' command.",
      "Try running: env"
    ],
    verify: (_fs, _session, history) => {
      const ranEnv = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('env');
      });
      return {
        success: ranEnv,
        checks: [
          { id: 'ran_env', passed: ranEnv }
        ]
      };
    }
  },
  {
    id: 56,
    moduleId: 'env_admin',
    title: 'Finding Commands (which)',
    xp: 150,
    badge: 'Locator',
    description: 'Now that you are familiar with active environment variables like `PATH` (which stores the directories where Linux looks for commands), how do you find the exact file path of the program that runs when you type `ls` or `grep`? We use `which` to locate command binaries.\n\n- The `which` command searches the folders listed in your `$PATH` variable and prints the absolute path of the binary executed when the command is run (e.g. `which ls` outputs `/bin/ls`).\n- This is useful to find where a tool is installed or resolve conflicts between multiple versions of the same tool.',
    instructions: 'Let\'s find our tools. Run `which ls` to see where the `ls` executable is stored on the system. Then, find the path of the `grep` command by running `which grep`.',
    commandHelp: [
      { cmd: 'which ls', desc: 'Find absolute path of ls' },
      { cmd: 'which grep', desc: 'Find absolute path of grep' }
    ],
    objectives: [
      { id: 'used_which_ls', text: 'Run the "which" command on ls' },
      { id: 'used_which_grep', text: 'Run the "which" command on grep' }
    ],
    hints: [
      "Run which ls to find the path of ls, and which grep to find the path of grep.",
      "Try running: which ls, and then which grep"
    ],
    verify: (_fs, _session, history) => {
      const ranWhichLs = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('which') && parts.includes('ls');
      });
      const ranWhichGrep = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('which') && parts.includes('grep');
      });
      return {
        success: ranWhichLs && ranWhichGrep,
        checks: [
          { id: 'used_which_ls', passed: ranWhichLs },
          { id: 'used_which_grep', passed: ranWhichGrep }
        ]
      };
    }
  },
  {
    id: 57,
    moduleId: 'env_admin',
    title: 'Custom Shell Shortcuts (alias)',
    xp: 180,
    badge: 'Shortcutter',
    description: 'Typing long commands with multiple flags can get exhausting. In Linux, we can create custom shortcuts called aliases. For example, you can map `ll` to run `ls -la` automatically.\n\n- To create a temporary alias, run `alias name=\'command\'` (e.g. `alias ll=\'ls -la\'`).\n- Running `alias` without arguments lists all active aliases in the current session.\n- To make aliases permanent across reboots, they are typically written to `.bashrc` or `.bash_profile` configuration files.',
    instructions: 'Let\'s set up some shortcuts. Create a temporary alias named `la` that runs `ls -a` by running `alias la=\'ls -a\'`. Test it by running `la` in your terminal.',
    commandHelp: [
      { cmd: 'alias la=\'ls -a\'', desc: 'Alias la to run ls -a' },
      { cmd: 'alias', desc: 'List active aliases' }
    ],
    objectives: [
      { id: 'alias_created', text: 'Create alias la for ls -a' },
      { id: 'alias_run', text: 'Execute the newly created alias la' }
    ],
    hints: [
      "Define the alias using alias la='ls -a' exactly as shown.",
      "Run the alias la command in the terminal to verify it works.",
      "Try running: alias la='ls -a' followed by: la"
    ],
    verify: (_fs, _session, history) => {
      const aliasCreated = history.some(cmd => {
        const clean = cmd.replace(/\s+/g, '');
        return clean.includes("aliasla=") && (clean.includes("ls-a") || clean.includes("ls-la") || clean.includes("ls-CF"));
      });
      const aliasRun = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('la');
      });
      return {
        success: aliasCreated && aliasRun,
        checks: [
          { id: 'alias_created', passed: aliasCreated },
          { id: 'alias_run', passed: aliasRun }
        ]
      };
    }
  },
  {
    id: 139,
    moduleId: 'env_admin',
    title: 'Reloading Shell Configs (source & .bashrc)',
    xp: 200,
    badge: 'Config Reloader',
    description: 'When you edit your startup scripts like `~/.bashrc` to add new environment variables or aliases, those changes do not automatically affect your current shell session. Traditionally, users had to log out and log back in. In Linux, we use the `source` command (or its POSIX shorthand `.`) to read and execute commands from a file directly in the current shell context.\n\n- Syntax: `source ~/.bashrc` or `. ~/.bashrc`\n- This loads newly defined variables, updated `$PATH` directories, and aliases immediately without killing your session.',
    instructions: 'Let\'s reload your shell configuration without logging out. Apply the settings in your home configuration file by running `source ~/.bashrc` (or `. ~/.bashrc`).',
    commandHelp: [
      { cmd: 'source ~/.bashrc', desc: 'Execute commands from .bashrc in current shell' },
      { cmd: '. ~/.bashrc', desc: 'POSIX dot alias for source command' }
    ],
    objectives: [
      { id: 'used_source', text: 'Run source ~/.bashrc or . ~/.bashrc' }
    ],
    hints: [
      "Use 'source ~/.bashrc' to execute configuration commands in the active session.",
      "Alternatively, use '. ~/.bashrc' which is the POSIX equivalent.",
      "Try running: source ~/.bashrc"
    ],
    verify: (_fs, _session, history) => {
      const usedSource = hasCommandInHistory(history, seg => {
        return (seg.command === 'source' || seg.command === '.') &&
          (seg.hasArg('~/.bashrc') || seg.hasArg('/home/learner/.bashrc') || seg.hasArg('.bashrc'));
      });
      return {
        success: usedSource,
        checks: [
          { id: 'used_source', passed: usedSource }
        ]
      };
    }
  },
  {
    id: 140,
    moduleId: 'env_admin',
    title: 'Cleaning the Environment (unset & unalias)',
    xp: 200,
    badge: 'Environment Purifier',
    description: 'During debugging or deployment, you may temporarily export sensitive API keys, database credentials, or create test shortcuts. Leaving these variables active in your environment can cause security leaks or unintended script behavior. Linux provides `unset` to delete variables and `unalias` to delete custom command shortcuts.\n\n- `unset SECRET_KEY`: Permanently deletes the `SECRET_KEY` variable from the current environment.\n- `unalias la`: Removes the shortcut `la` so typing `la` no longer executes `ls -a`.',
    instructions: 'Let\'s clean up your environment. Remove the sensitive variable `SECRET_KEY` by running `unset SECRET_KEY`, and remove the shortcut `la` using `unalias la`.',
    commandHelp: [
      { cmd: 'unset SECRET_KEY', desc: 'Remove variable from active environment' },
      { cmd: 'unalias la', desc: 'Remove defined command alias' }
    ],
    objectives: [
      { id: 'unset_var', text: 'Remove SECRET_KEY with unset' },
      { id: 'unalias_run', text: 'Remove "la" shortcut with unalias' }
    ],
    hints: [
      "Run 'unset SECRET_KEY' to remove the environment variable.",
      "Run 'unalias la' to unregister the alias.",
      "Try running: unset SECRET_KEY followed by unalias la"
    ],
    verify: (_fs, session, history) => {
      const ranUnset = hasCommandInHistory(history, seg => seg.command === 'unset' && seg.hasArg('SECRET_KEY'));
      const ranUnalias = hasCommandInHistory(history, seg => seg.command === 'unalias' && (seg.hasArg('la') || seg.hasAnyFlag('a')));
      const varUnset = !session.env || !session.env['SECRET_KEY'];
      const aliasUnset = !session.aliases || !session.aliases['la'];
      const success = (ranUnset && varUnset) && (ranUnalias && aliasUnset);
      return {
        success: Boolean(success),
        checks: [
          { id: 'unset_var', passed: Boolean(ranUnset && varUnset) },
          { id: 'unalias_run', passed: Boolean(ranUnalias && aliasUnset) }
        ]
      };
    }
  },
  {
    id: 49,
    moduleId: 'archiving',
    title: 'Creating Links (ln -s)',
    xp: 270,
    badge: 'Linker',
    description: 'Imagine you have a config file buried deep in a nested folder, say `/var/www/html/configs/app/settings.conf`, but you need to edit it constantly. Instead of typing the long folder path every time, you want a quick desktop shortcut. In Linux, we do this by creating links.\n\n- **Hard Link**: A direct clone pointing to the raw file data. If you delete the original file, the link still works.\n- **Symbolic Link (Soft Link)**: A path-based shortcut (just like Windows shortcuts). If you delete the original file, the link breaks. We create them using `ln -s target link_name`.\n\n**Why this matters**: If you run `ln logs/app.log app_link.log` without `-s`, you will create a hard link instead of a symbolic shortcut. If the files reside on different disk partitions, you will get: `ln: failed to create hard link: Invalid cross-device link`. The `-s` flag creates a flexible symbolic link (shortcut) that works across different drives and directories.',
    instructions: 'Let\'s create a shortcut. Create a symbolic link named `app_link.log` in `/home/learner` that points to the target file `logs/app.log` by running `ln -s logs/app.log app_link.log`.',
    commandHelp: [
      { cmd: 'ln -s target link_name', desc: 'Create symbolic link' }
    ],
    objectives: [
      { id: 'used_ln_s', text: 'Use "ln" with symbolic flag -s' },
      { id: 'link_created', text: 'Create link "app_link.log" pointing to target logs/app.log' }
    ],
    hints: [
      "Think about which command creates file shortcuts/links.",
      "Use 'ln -s' with the target path followed by the link name.",
      "Try running: ln -s logs/app.log app_link.log"
    ],
    verify: (fs, session, history) => {
      // 1. Get the symlink file from the virtual directory
      const linkNode = fs.getNodeByPath('/home/learner', 'app_link.log') || fs.getNodeByPath('/home/learner/app_link.log');

      // 2. Support both relative ('logs/app.log') and absolute ('/home/learner/logs/app.log') targets
      const targetIsCorrect = Boolean(linkNode && (
        linkNode.type === 'link' || linkNode.target !== undefined
      ) && (
        linkNode.target === 'logs/app.log' ||
        linkNode.target === './logs/app.log' ||
        linkNode.target === '/home/learner/logs/app.log'
      ));

      // 3. State-first: if the link is created pointing to the target, used_ln_s is satisfied or check history
      const usedSymbolic = Boolean(targetIsCorrect || hasCommandInHistory(history, seg => seg.command === 'ln' && (seg.hasAnyFlag('s', 'symbolic') || seg.flags.has('s') || seg.flags.has('-s'))));

      return {
        success: Boolean(usedSymbolic && targetIsCorrect),
        checks: [
          { id: 'used_ln_s', passed: Boolean(usedSymbolic) },
          { id: 'link_created', passed: Boolean(targetIsCorrect) }
        ]
      };
    }
  },
  {
    id: 50,
    moduleId: 'archiving',
    title: 'Processing Search Results (xargs)',
    xp: 290,
    badge: 'Advanced-Ops',
    description: 'Imagine you ran a search that returned 100 temporary files, and now you want to delete all of them. The search output is just a list of text names on your screen—how do you feed those names as direct inputs to the delete command? In Linux, we bridge this gap using `xargs`.\n\n- The `xargs` (execute arguments) command takes lines of standard input (like the file list from `find`) and feeds them one by one as arguments to another command.\n- E.g., `find . -name "*.tmp" | xargs rm` finds all temporary files and removes them all in a single sweep.',
    instructions: 'Let\'s process some search results. Find all `.log` files in `/home/learner/logs` using `find logs -name "*.log"`, and pipe them into `xargs wc -l` to count all of their lines collectively.',
    commandHelp: [
      { cmd: 'find logs -name "*.log" | xargs wc -l', desc: 'Pass search results as arguments to wc -l' }
    ],
    objectives: [
      { id: 'used_find', text: 'Run the "find" command on logs folder' },
      { id: 'used_xargs', text: 'Pipe results into "xargs"' },
      { id: 'ran_wc_l', text: 'Run "wc -l" via xargs pipeline' }
    ],
    hints: [
      "Search for all log files, and pipe the names into wc -l using xargs.",
      "Use find logs -name \"*.log\" and pipe (|) it into xargs wc -l.",
      "Try running: find logs -name \"*.log\" | xargs wc -l"
    ],
    verify: (_fs, _session, history) => {
      const usedFind = history.some(cmd => cmd.includes('find') && cmd.includes('logs'));
      const usedXargs = history.some(cmd => cmd.includes('|') && cmd.includes('xargs'));
      const ranWcL = history.some(cmd => cmd.includes('wc') && (cmd.includes('-l') || cmd.includes('--lines')));

      return {
        success: usedFind && usedXargs && ranWcL,
        checks: [
          { id: 'used_find', passed: usedFind },
          { id: 'used_xargs', passed: usedXargs },
          { id: 'ran_wc_l', passed: ranWcL }
        ]
      };
    }
  },
  {
    id: 98,
    moduleId: 'archiving',
    title: 'Repairing Symbolic Links (ln -sf)',
    xp: 280,
    badge: 'Inode Master',
    description: 'DANGLING LINK ALERT: Following a log consolidation migration, the operational link at `/home/learner/links/current_log` became dangling because its original target was moved.\n\nRepair the link farm: update the symbolic link `/home/learner/links/current_log` so it points directly to the real system logging destination `/var/log/syslog`.',
    instructions: 'Create or update the symbolic link `/home/learner/links/current_log` pointing to `/var/log/syslog`.',
    commandHelp: [
      { cmd: 'ls -l /home/learner/links', desc: 'Inspect existing symbolic links' },
      { cmd: 'ln -sf /var/log/syslog /home/learner/links/current_log', desc: 'Force update symbolic link target' }
    ],
    objectives: [
      { id: 'symlink_repaired', text: 'Point symlink /home/learner/links/current_log to /var/log/syslog' }
    ],
    hints: [
      "Check where current_log currently points using a long listing command.",
      "Use ln with symbolic and force flags to redirect the link to /var/log/syslog.",
      "Verify that the link resolves to /var/log/syslog."
    ],
    verify: (fs) => {
      const linkNode = fs.getNodeByPath('/home/learner/links', 'current_log');
      const valid = !!(linkNode && (linkNode.type === 'symlink' || linkNode.target) && (linkNode.target === '/var/log/syslog' || linkNode.content === '/var/log/syslog'));
      return {
        success: valid,
        checks: [
          { id: 'symlink_repaired', passed: valid }
        ]
      };
    }
  },
  {
    id: 135,
    moduleId: 'archiving',
    title: 'Incremental Sync with rsync',
    xp: 220,
    badge: 'Synchronizer',
    description: 'While `cp` blindly copies entire files every time, `rsync` (remote sync) uses a delta-transfer algorithm to copy only files and bytes that have changed. It is the gold standard for server migrations, incremental directory backups, and continuous mirroring.\n\n- `-a` (archive): Preserves timestamps, symlinks, permissions, and operates recursively.\n- `-v` (verbose): Shows which files are being copied.\n- `-z` (compress): Compresses file data during transmission.\n- Notice trailing slashes: `rsync -avz src/ backup/` copies the contents of `src/` inside `backup/`.',
    instructions: 'Let\'s run an incremental directory sync. Mirror the contents of the `src/` directory into `backup/` with archive mode: run `rsync -avz src/ backup/` (or `rsync -av src/ backup/`).',
    commandHelp: [
      { cmd: 'rsync -avz src/ backup/', desc: 'Sync directory contents preserving file permissions and timestamps' },
      { cmd: 'rsync -av src/ backup/', desc: 'Archive copy directory without compression' }
    ],
    objectives: [
      { id: 'used_rsync', text: 'Run rsync with archive mode' },
      { id: 'backup_synced', text: 'Sync files into backup directory' }
    ],
    hints: [
      "Use 'rsync -avz src/ backup/' to sync directory contents into backup.",
      "Ensure you include the -a (archive) flag.",
      "Try running: rsync -avz src/ backup/"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner/backup', 'app.js');
      const backupSynced = Boolean(node && node.type === 'file');
      const usedRsync = hasCommandInHistory(history, seg => seg.command === 'rsync' && (seg.hasAnyFlag('a', 'archive') || seg.flags.has('a')));
      return {
        success: Boolean(backupSynced && (usedRsync || backupSynced)),
        checks: [
          { id: 'used_rsync', passed: Boolean(usedRsync || backupSynced) },
          { id: 'backup_synced', passed: Boolean(backupSynced) }
        ]
      };
    }
  },
  {
    id: 136,
    moduleId: 'archiving',
    title: 'Verifying File Integrity (sha256sum & md5sum)',
    xp: 220,
    badge: 'Integrity Guardian',
    description: 'When downloading critical software, ISO images, or backup tarballs over the network, files can become corrupted by transmission errors or tampered with by malicious actors. In Linux, cryptographic checksums verify file integrity bit-for-bit.\n\n- `sha256sum <file>`: Computes a 256-bit SHA-2 cryptographic hash.\n- `md5sum <file>`: Computes a 128-bit MD5 digest.\n- If a single bit in the file changes, the entire hash string changes completely (the avalanche effect).',
    instructions: 'Let\'s verify file checksums. Generate the SHA256 checksum of `server.js` by running `sha256sum server.js`. Then, compute its MD5 digest by running `md5sum server.js`.',
    commandHelp: [
      { cmd: 'sha256sum server.js', desc: 'Compute SHA256 checksum of file' },
      { cmd: 'md5sum server.js', desc: 'Compute MD5 digest of file' },
      { cmd: 'sha256sum -c checksums.txt', desc: 'Check files against hash list' }
    ],
    objectives: [
      { id: 'used_sha256sum', text: 'Run sha256sum on server.js' },
      { id: 'used_md5sum', text: 'Run md5sum on server.js' }
    ],
    hints: [
      "Run 'sha256sum server.js' to generate the 64-character SHA256 hex string.",
      "Run 'md5sum server.js' to generate the 32-character MD5 hash.",
      "Try running: sha256sum server.js followed by md5sum server.js"
    ],
    verify: (_fs, _session, history) => {
      const usedSha = hasCommandInHistory(history, seg => seg.command === 'sha256sum' && (seg.hasArg('server.js') || seg.args.length > 0));
      const usedMd5 = hasCommandInHistory(history, seg => seg.command === 'md5sum' && (seg.hasArg('server.js') || seg.args.length > 0));
      return {
        success: Boolean(usedSha && usedMd5),
        checks: [
          { id: 'used_sha256sum', passed: Boolean(usedSha) },
          { id: 'used_md5sum', passed: Boolean(usedMd5) }
        ]
      };
    }
  },
  {
    id: 137,
    moduleId: 'archiving',
    title: 'Block Cloning & Temp Files (dd & mktemp)',
    xp: 220,
    badge: 'Block Master',
    description: 'Sometimes system administrators need to manipulate raw disk blocks rather than regular filesystem files—such as creating empty swapfiles, zeroing out drives, or writing ISO images directly to USB disks. We use `dd` (dataset definition).\n\n- `dd if=<source> of=<destination> bs=<block_size> count=<number>` clones raw blocks.\n- E.g. `dd if=/dev/zero of=disk.img bs=1M count=1` creates a 1MB dummy disk file filled with null bytes.\n- When automation scripts require scratch files without race conditions or overwriting existing user data, `mktemp` creates uniquely named files under `/tmp`.',
    instructions: 'Let\'s create a block device file and generate a scratch file. Create a 1MB zero-filled disk image named `disk.img` by running `dd if=/dev/zero of=disk.img bs=1M count=1`. Then, generate a safe temporary file using `mktemp`.',
    commandHelp: [
      { cmd: 'dd if=/dev/zero of=disk.img bs=1M count=1', desc: 'Create 1MB disk image using dd' },
      { cmd: 'mktemp', desc: 'Generate unique temporary file in /tmp' }
    ],
    objectives: [
      { id: 'disk_img_created', text: 'Create disk.img using dd' },
      { id: 'used_mktemp', text: 'Create temporary file with mktemp' }
    ],
    hints: [
      "Use 'dd if=/dev/zero of=disk.img bs=1M count=1' to create the file.",
      "Run 'mktemp' to create a unique temporary file in /tmp.",
      "Try running: dd if=/dev/zero of=disk.img bs=1M count=1 followed by mktemp"
    ],
    verify: (fs, _session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'disk.img');
      const imgCreated = Boolean(node && node.type === 'file');
      const usedMktemp = hasCommandInHistory(history, seg => seg.command === 'mktemp');
      return {
        success: Boolean(imgCreated && usedMktemp),
        checks: [
          { id: 'disk_img_created', passed: Boolean(imgCreated) },
          { id: 'used_mktemp', passed: Boolean(usedMktemp) }
        ]
      };
    }
  },
  {
    id: 58,
    moduleId: 'remote_users',
    title: 'User Administration (useradd & passwd)',
    xp: 220,
    badge: 'Sys-Creator',
    description: 'So far, you\'ve been working as the `learner` user. But in real-world servers, sysadmins must manage multiple accounts. Let\'s learn how to add new users and set their passwords.\n\n- The `useradd` command creates a brand new user account. Since creating accounts affects system security, it must be run with superuser privileges (e.g. `sudo useradd deployer`).\n- The `passwd` command sets or changes a user\'s password. Run as `sudo passwd deployer` to set the deployer user\'s password.',
    instructions: 'Let\'s add a colleague\'s account. Create a new user named `deployer` by running `sudo useradd deployer`. Then, set a password for them by running `sudo passwd deployer` (type any mock password when prompted).',
    commandHelp: [
      { cmd: 'sudo useradd deployer', desc: 'Create new user deployer' },
      { cmd: 'sudo passwd deployer', desc: 'Set password for user deployer' }
    ],
    objectives: [
      { id: 'user_created', text: 'Create user "deployer" using useradd' },
      { id: 'passwd_changed', text: 'Set password for "deployer" using passwd' }
    ],
    hints: [
      "Use sudo useradd deployer to register the user account.",
      "Set the password by running sudo passwd deployer.",
      "Try running: sudo useradd deployer, and then: sudo passwd deployer"
    ],
    verify: (fs, _session, history) => {
      const ranUseradd = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('useradd') && parts.includes('deployer') && parts.includes('sudo');
      });
      const ranPasswd = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('passwd') && parts.includes('deployer') && parts.includes('sudo');
      });
      const passwdNode = fs.getNodeByPath('/etc', 'passwd');
      const userExists = passwdNode && passwdNode.content.includes('deployer:');
      return {
        success: ranUseradd && ranPasswd && userExists,
        checks: [
          { id: 'user_created', passed: !!(ranUseradd && userExists) },
          { id: 'passwd_changed', passed: ranPasswd }
        ]
      };
    }
  },
  {
    id: 70,
    moduleId: 'remote_users',
    title: 'Managing Users (adduser & userdel)',
    xp: 180,
    badge: 'Supervisor',
    description: 'While `useradd` is a low-level utility that merely registers user details in system config files, Debian/Ubuntu systems provide a high-level interactive script called `adduser` that automates creating home folders, setting passwords, and initializing shell environments. Conversely, `userdel` cleanly deletes user accounts.\n\n- Running `sudo adduser tester` guides you through user configuration interactively.\n- Running `sudo userdel tester` deletes the user account.',
    instructions: 'Let\'s handle user lifecycles. Create a user using `sudo adduser tester`. After that, delete the user by running `sudo userdel tester`.',
    commandHelp: [
      { cmd: 'sudo adduser tester', desc: 'Create user tester interactively' },
      { cmd: 'sudo userdel tester', desc: 'Delete user tester account' }
    ],
    objectives: [
      { id: 'ran_adduser', text: 'Run the "adduser" command with sudo' },
      { id: 'ran_userdel', text: 'Run the "userdel" command with sudo' }
    ],
    hints: [
      "Use sudo adduser tester followed by sudo userdel tester.",
      "Try running: sudo adduser tester, and then: sudo userdel tester"
    ],
    verify: (_fs, _session, history) => {
      const ranAdduser = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('adduser') && parts.includes('tester') && parts.includes('sudo');
      });
      const ranUserdel = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('userdel') && parts.includes('tester') && parts.includes('sudo');
      });
      return {
        success: ranAdduser && ranUserdel,
        checks: [
          { id: 'ran_adduser', passed: ranAdduser },
          { id: 'ran_userdel', passed: ranUserdel }
        ]
      };
    }
  },
  {
    id: 71,
    moduleId: 'remote_users',
    title: 'Viewing User Identities (id)',
    xp: 150,
    badge: 'Identifier',
    description: 'When troubleshooting permission errors, you must verify the exact user and group identifier context you are running under. We do this using `id`.\n\n- Running `id` prints the current user\'s User ID (UID), primary Group ID (GID), and all supplementary group lists.\n- Running `id <username>` queries information for a specific user.',
    instructions: 'Let\'s check active identities. Run `id` to see your details, and then run `id root` to inspect the superuser\'s account identifiers.',
    commandHelp: [
      { cmd: 'id', desc: 'Display active user identification details' },
      { cmd: 'id root', desc: 'Query root identification details' }
    ],
    objectives: [
      { id: 'ran_id_learner', text: 'Run the "id" command for learner' },
      { id: 'ran_id_root', text: 'Run the "id root" command' }
    ],
    hints: [
      "Run id followed by id root.",
      "Try running: id and id root"
    ],
    verify: (_fs, _session, history) => {
      const ranIdLearner = history.some(cmd => cmd.trim() === 'id');
      const ranIdRoot = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('id') && parts.includes('root');
      });
      return {
        success: ranIdLearner && ranIdRoot,
        checks: [
          { id: 'ran_id_learner', passed: ranIdLearner },
          { id: 'ran_id_root', passed: ranIdRoot }
        ]
      };
    }
  },
  {
    id: 63,
    moduleId: 'remote_users',
    title: 'Group Administration (groupadd & groups)',
    xp: 220,
    badge: 'Group-Master',
    description: 'In Linux, users are organized into **groups** to share permissions easily. For example, all developers might belong to a group named `developers`. This allows us to share files with the entire team at once.\n\n- The `groupadd` command creates a new group. Since this is a system configuration, it requires superuser privileges (e.g. `sudo groupadd developers`).\n- The `groups [username]` command lists all the groups a user belongs to. Run without arguments, it displays groups for the current user.',
    instructions: 'Let\'s manage groups. Create a new group named `developers` by running `sudo groupadd developers`. Then, check your own active groups by running the `groups` command.',
    commandHelp: [
      { cmd: 'sudo groupadd developers', desc: 'Create a new group named developers' },
      { cmd: 'groups', desc: 'Display active groups for current user' }
    ],
    objectives: [
      { id: 'group_created', text: 'Create group "developers" using groupadd' },
      { id: 'checked_groups', text: 'Run the "groups" command' }
    ],
    hints: [
      "Use sudo groupadd developers to create the group.",
      "Simply run the groups command to list groups.",
      "Try running: sudo groupadd developers followed by groups"
    ],
    verify: (fs, _session, history) => {
      const groupNode = fs.getNodeByPath('/etc', 'group');
      const groupExists = Boolean(groupNode && groupNode.content.includes('developers:'));
      const ranGroupadd = Boolean(groupExists || hasCommandInHistory(history, seg => seg.command === 'groupadd' && seg.hasArg('developers')));
      const ranGroups = hasCommandInHistory(history, seg => seg.command === 'groups');
      return {
        success: Boolean(ranGroupadd && ranGroups && groupExists),
        checks: [
          { id: 'group_created', passed: Boolean(ranGroupadd && groupExists) },
          { id: 'checked_groups', passed: Boolean(ranGroups) }
        ]
      };
    }
  },
  {
    id: 72,
    moduleId: 'remote_users',
    title: 'Deleting Groups (groupdel)',
    xp: 150,
    badge: 'Deleter',
    description: 'When project teams reorganize or decommission services, the corresponding security groups must be cleaned up. In Linux, we delete groups using `groupdel`.\n\n- The `groupdel <group_name>` command permanently deletes a group from the system configuration files, requiring superuser privileges.',
    instructions: 'Let\'s clean up our groups. Delete the `developers` group by running `sudo groupdel developers`.',
    commandHelp: [
      { cmd: 'sudo groupdel developers', desc: 'Delete the developers group' }
    ],
    objectives: [
      { id: 'group_deleted', text: 'Delete group "developers" using groupdel' }
    ],
    hints: [
      "Use sudo groupdel developers to remove the group from /etc/group.",
      "Try running: sudo groupdel developers"
    ],
    verify: (fs, _session, history) => {
      const groupNode = fs.getNodeByPath('/etc', 'group');
      const groupMissing = Boolean(!groupNode || !groupNode.content.includes('developers:'));
      const ranGroupdel = Boolean(hasCommandInHistory(history, seg => seg.command === 'groupdel' && seg.hasArg('developers')));
      return {
        success: Boolean(ranGroupdel && groupMissing),
        checks: [
          { id: 'group_deleted', passed: Boolean(ranGroupdel && groupMissing) }
        ]
      };
    }
  },
  {
    id: 59,
    moduleId: 'remote_users',
    title: 'Switching Security Contexts (su)',
    xp: 200,
    badge: 'Shapeshifter',
    description: 'Now that you\'ve created the `deployer` account, how do you log into it locally to test its environment? In Linux, we use the `su` (substitute user) command to switch accounts without logging out.\n\n- The `su <username>` command switches the current terminal shell to that user\'s session.\n- When switched, running `whoami` will reflect the new user name.\n- To return to your original user account session, type `exit` or press `Ctrl+D`.',
    instructions: 'Let\'s switch contexts. Switch to the `deployer` user by running `su deployer`. Once logged in, run `whoami` to verify you are indeed running as `deployer`. When you\'re done, type `exit` to switch back.',
    commandHelp: [
      { cmd: 'su deployer', desc: 'Substitute user session to deployer' },
      { cmd: 'whoami', desc: 'Verify the active user session name' },
      { cmd: 'exit', desc: 'Exit active user session' }
    ],
    objectives: [
      { id: 'switched_user', text: 'Switch shell context to deployer using su' },
      { id: 'verified_whoami', text: 'Run whoami to confirm you are deployer' }
    ],
    hints: [
      "Use su deployer to switch to the deployer shell session.",
      "Check who is active by typing whoami.",
      "Try running: su deployer, then whoami, and then exit"
    ],
    verify: (_fs, session, history) => {
      const ranSu = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('su') && parts.includes('deployer');
      });
      const ranWhoami = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('whoami');
      });
      const switched = session.env.USER === 'deployer' || history.some(cmd => cmd.trim().split(/\s+/)[0] === 'exit');
      return {
        success: ranSu && ranWhoami && switched,
        checks: [
          { id: 'switched_user', passed: !!(ranSu && switched) },
          { id: 'verified_whoami', passed: ranWhoami }
        ]
      };
    }
  },
  {
    id: 60,
    moduleId: 'remote_users',
    title: 'Secure Shell Access (ssh)',
    xp: 240,
    badge: 'Teleporter',
    description: 'Switching users locally is useful, but in cloud computing, servers live in remote data centers. To connect to them securely over the network, we use `ssh` (Secure Shell).\n\n- The `ssh` command encrypts the connection between your machine and a remote host to prevent eavesdropping.\n- Syntax: `ssh user@hostname` or `ssh user@ip_address` (e.g. `ssh admin@192.168.1.100`).\n- The first connection will prompt you to verify the remote host\'s authenticity by displaying a unique ECDSA fingerprint.\n\n**Note:** Since this is a browser-based sandbox, there\'s no real remote server to connect to. Running this command will show you the expected real-world output pattern (host verification, connection, session) instantly, rather than an actual live interactive session. In a real terminal, ssh would drop you into a genuinely separate remote shell until you type `exit`.',
    instructions: 'Let\'s connect to a remote staging server. Connect to the server at `192.168.1.100` as the `admin` user by running `ssh admin@192.168.1.100` (type `yes` if prompted to verify host key, and enter any password).',
    commandHelp: [
      { cmd: 'ssh admin@192.168.1.100', desc: 'Securely connect to remote staging server' }
    ],
    objectives: [
      { id: 'ssh_connected', text: 'SSH into the remote server at 192.168.1.100 as admin' }
    ],
    hints: [
      "Use the ssh command followed by user@host. Here, user is admin and host is 192.168.1.100.",
      "Try running: ssh admin@192.168.1.100"
    ],
    verify: (_fs, _session, history) => {
      const ranSsh = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const sshIdx = parts.indexOf('ssh');
        if (sshIdx === -1) return false;
        const dest = parts[sshIdx + 1] || '';
        return dest.includes('192.168.1.100') && dest.includes('admin');
      });
      return {
        success: ranSsh,
        checks: [
          { id: 'ssh_connected', passed: ranSsh }
        ]
      };
    }
  },
  {
    id: 61,
    moduleId: 'remote_users',
    title: 'Secure File Transfer (scp)',
    xp: 250,
    badge: 'Transporter',
    description: 'Now that you know how to log into a remote server via SSH, how do you copy a local file (like a backup archive) to it? The `scp` (secure copy) command copies files securely between hosts using SSH under the hood.\n\n- The syntax is `scp source_path user@host:destination_path`.\n- E.g., `scp log.txt admin@192.168.1.100:/tmp/` copies the local `log.txt` file to the remote `/tmp/` folder.\n\n**Note:** Just like with ssh, there\'s no real remote server here — running this command confirms your local file exists and shows you the expected transfer output, but doesn\'t actually send data anywhere.',
    instructions: 'Let\'s send our log archive to the remote staging server. Copy the local archive `logs.tar.gz` to the `/tmp` folder on `192.168.1.100` as the `admin` user by running `scp logs.tar.gz admin@192.168.1.100:/tmp/`.',
    commandHelp: [
      { cmd: 'scp logs.tar.gz admin@192.168.1.100:/tmp/', desc: 'Copy logs.tar.gz to remote server /tmp folder' }
    ],
    objectives: [
      { id: 'scp_completed', text: 'Transfer logs.tar.gz to 192.168.1.100:/tmp/ via scp' }
    ],
    hints: [
      "Specify scp followed by the local file logs.tar.gz, and then the remote destination admin@192.168.1.100:/tmp/.",
      "Try running: scp logs.tar.gz admin@192.168.1.100:/tmp/"
    ],
    verify: (_fs, _session, history) => {
      const ranScp = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const scpIdx = parts.indexOf('scp');
        if (scpIdx === -1) return false;
        const src = parts[scpIdx + 1] || '';
        const dest = parts[scpIdx + 2] || '';
        return src.includes('logs.tar.gz') && dest.includes('192.168.1.100') && dest.includes('admin') && dest.includes('/tmp');
      });
      return {
        success: ranScp,
        checks: [
          { id: 'scp_completed', passed: ranScp }
        ]
      };
    }
  },
  {
    id: 141,
    moduleId: 'remote_users',
    title: 'Modifying User Groups & Shell (usermod)',
    xp: 220,
    badge: 'Group Manager',
    description: 'When onboarding engineers or automation service accounts, you must configure their supplementary group memberships and default login shells. In Linux, `usermod` modifies existing accounts in `/etc/passwd` and `/etc/group`.\n\n- `-aG <group>`: Appends the user to supplementary groups without removing them from existing groups. (CRITICAL: omitting `-a` would replace all existing secondary groups!).\n- `-s <shell>`: Specifies the new login shell (e.g. `/bin/bash` or `/usr/sbin/nologin`).',
    instructions: 'Let\'s modify account permissions for deployer. Add user `deployer` to the `sudo` group using `sudo usermod -aG sudo deployer`, then change their login shell to bash using `sudo usermod -s /bin/bash deployer`.',
    commandHelp: [
      { cmd: 'sudo usermod -aG sudo deployer', desc: 'Append user deployer to administrative sudo group' },
      { cmd: 'sudo usermod -s /bin/bash deployer', desc: 'Set default shell to bash for user' }
    ],
    objectives: [
      { id: 'user_in_sudo_group', text: 'Add deployer to sudo group with usermod -aG' },
      { id: 'shell_updated', text: 'Update deployer login shell to /bin/bash' }
    ],
    hints: [
      "Run 'sudo usermod -aG sudo deployer' to grant sudo privileges.",
      "Run 'sudo usermod -s /bin/bash deployer' to change their shell.",
      "Try running: sudo usermod -aG sudo deployer followed by sudo usermod -s /bin/bash deployer"
    ],
    verify: (fs, _session, history) => {
      const groupNode = fs.getNodeByPath('/etc', 'group');
      const passwdNode = fs.getNodeByPath('/etc', 'passwd');
      const inSudo = Boolean(groupNode && groupNode.content && groupNode.content.split('\n').some(line => {
        const parts = line.split(':');
        return parts[0] === 'sudo' && parts[3] && parts[3].includes('deployer');
      }));
      const shellBash = Boolean(passwdNode && passwdNode.content && passwdNode.content.split('\n').some(line => {
        const parts = line.split(':');
        return parts[0] === 'deployer' && parts[6] === '/bin/bash';
      }));
      const usedA = hasCommandInHistory(history, seg => seg.command === 'usermod' && (seg.hasAnyFlag('a', 'G') || seg.flags.has('a')));
      const usedS = hasCommandInHistory(history, seg => seg.command === 'usermod' && seg.hasAnyFlag('s'));
      return {
        success: Boolean((inSudo || usedA) && (shellBash || usedS)),
        checks: [
          { id: 'user_in_sudo_group', passed: Boolean(inSudo || usedA) },
          { id: 'shell_updated', passed: Boolean(shellBash || usedS) }
        ]
      };
    }
  },
  {
    id: 142,
    moduleId: 'remote_users',
    title: 'SSH Key Authentication (ssh-keygen & ssh-copy-id)',
    xp: 220,
    badge: 'Key Master',
    description: 'Password authentication on remote SSH servers is vulnerable to brute-force attacks and credential stuffing. Production infrastructure relies on asymmetric SSH keypair authentication.\n\n- `ssh-keygen -t ed25519`: Generates a high-security Ed25519 public/private keypair (`~/.ssh/id_ed25519` and `~/.ssh/id_ed25519.pub`).\n- `ssh-copy-id deployer@192.168.1.50`: Automatically appends your local public key to the remote user\'s `~/.ssh/authorized_keys` file, enabling passwordless login.',
    instructions: 'Let\'s set up key-based authentication. Generate an Ed25519 SSH keypair by running `ssh-keygen -t ed25519`, then install your public key onto the remote host using `ssh-copy-id deployer@192.168.1.50`.',
    commandHelp: [
      { cmd: 'ssh-keygen -t ed25519', desc: 'Generate Ed25519 SSH cryptographic keypair' },
      { cmd: 'ssh-copy-id user@host', desc: 'Copy public key to remote host authorized_keys' }
    ],
    objectives: [
      { id: 'ssh_key_generated', text: 'Generate SSH keypair with ssh-keygen' },
      { id: 'ssh_key_copied', text: 'Install public key with ssh-copy-id' }
    ],
    hints: [
      "Run 'ssh-keygen -t ed25519' to generate your key pair.",
      "Deploy it using 'ssh-copy-id deployer@192.168.1.50'.",
      "Try running: ssh-keygen -t ed25519 followed by ssh-copy-id deployer@192.168.1.50"
    ],
    verify: (fs, _session, history) => {
      const pubNode = fs.getNodeByPath('/home/learner/.ssh', 'id_ed25519.pub') || fs.getNodeByPath('/home/learner/.ssh', 'id_rsa.pub');
      const keyGenRan = hasCommandInHistory(history, seg => seg.command === 'ssh-keygen');
      const keyCopied = hasCommandInHistory(history, seg => seg.command === 'ssh-copy-id');
      const keyExists = Boolean(pubNode && pubNode.type === 'file');
      return {
        success: Boolean((keyGenRan || keyExists) && keyCopied),
        checks: [
          { id: 'ssh_key_generated', passed: Boolean(keyGenRan || keyExists) },
          { id: 'ssh_key_copied', passed: Boolean(keyCopied) }
        ]
      };
    }
  },
  {
    id: 143,
    moduleId: 'remote_users',
    title: 'Auditing Active Sessions (who, w & last)',
    xp: 200,
    badge: 'Session Auditor',
    description: 'When investigating unexpected system load or performing security audits on multi-tenant servers, you must know who is logged in and what commands they are executing.\n\n- `who`: Prints logged-in usernames, terminal devices (TTY/PTS), and login timestamps.\n- `w`: Comprehensive snapshot showing system uptime, load averages, logged-in users, and their currently running processes.\n- `last`: Parses `/var/log/wtmp` to show recent system reboot and user login history.',
    instructions: 'Let\'s audit server activity. Run `who` to list active users, `w` to view their active processes and load, and `last` to inspect recent login history.',
    commandHelp: [
      { cmd: 'who', desc: 'Display logged in users' },
      { cmd: 'w', desc: 'Display active users and their running processes' },
      { cmd: 'last', desc: 'Display history of recent user logins' }
    ],
    objectives: [
      { id: 'used_who', text: 'Run who command' },
      { id: 'used_w', text: 'Run w command' },
      { id: 'used_last', text: 'Run last command' }
    ],
    hints: [
      "Run 'who' to see active terminal sessions.",
      "Run 'w' to see resource usage per user.",
      "Run 'last' to view the historical login log.",
      "Try running: who, then w, then last"
    ],
    verify: (_fs, _session, history) => {
      const usedWho = hasCommandInHistory(history, seg => seg.command === 'who');
      const usedW = hasCommandInHistory(history, seg => seg.command === 'w');
      const usedLast = hasCommandInHistory(history, seg => seg.command === 'last');
      return {
        success: Boolean(usedWho && usedW && usedLast),
        checks: [
          { id: 'used_who', passed: Boolean(usedWho) },
          { id: 'used_w', passed: Boolean(usedW) },
          { id: 'used_last', passed: Boolean(usedLast) }
        ]
      };
    }
  },
  {
    id: 144,
    moduleId: 'remote_users',
    title: 'Terminal Multiplexing (tmux)',
    xp: 220,
    badge: 'Multiplexer',
    description: 'When working over SSH, closing your laptop lid or losing Wi-Fi sends a hangup signal (SIGHUP) that immediately terminates your long-running builds, database dumps, and tests. A terminal multiplexer like `tmux` runs persistent virtual terminals on the server independent of your SSH connection.\n\n- `tmux new -s <name>`: Starts a new persistent session.\n- `tmux ls`: Lists all running sessions.\n- `tmux attach -t <name>`: Re-attaches to a running session from any computer at any time.',
    instructions: 'Let\'s manage persistent terminal sessions. Start a session named `work` by running `tmux new -s work`, list running sessions with `tmux ls`, and attach to it using `tmux attach -t work`.',
    commandHelp: [
      { cmd: 'tmux new -s work', desc: 'Start a new named tmux session' },
      { cmd: 'tmux ls', desc: 'List active persistent sessions' },
      { cmd: 'tmux attach -t work', desc: 'Attach to running session' }
    ],
    objectives: [
      { id: 'tmux_created', text: 'Create or inspect sessions with tmux new / tmux ls' },
      { id: 'tmux_attached', text: 'Attach to session with tmux attach -t work' }
    ],
    hints: [
      "Create the session with 'tmux new -s work'.",
      "Check running sessions with 'tmux ls'.",
      "Re-attach using 'tmux attach -t work'.",
      "Try running: tmux new -s work, then tmux ls, then tmux attach -t work"
    ],
    verify: (_fs, session, history) => {
      const created = hasCommandInHistory(history, seg => seg.command === 'tmux' && (seg.hasArg('new') || seg.hasArg('new-session') || seg.hasArg('ls') || seg.hasArg('list-sessions')));
      const attached = hasCommandInHistory(history, seg => seg.command === 'tmux' && (seg.hasArg('attach') || seg.hasArg('attach-session') || seg.hasArg('a')));
      const hasWork = session.tmuxSessions && session.tmuxSessions.has('work');
      return {
        success: Boolean((created || hasWork) && attached),
        checks: [
          { id: 'tmux_created', passed: Boolean(created || hasWork) },
          { id: 'tmux_attached', passed: Boolean(attached) }
        ]
      };
    }
  },
  {
    id: 145,
    moduleId: 'devops',
    title: 'Version Control Basics (git status, diff, log)',
    xp: 240,
    badge: 'Git Committer',
    description: 'Modern Linux servers and cloud infrastructure rely on Git for version control, continuous integration, and infrastructure-as-code deployments. Let\'s master the core introspection commands.\n\n- `git status`: Checks working tree and staging area state, revealing modified, untracked, and staged files.\n- `git diff`: Shows line-by-line differences between modified files and the last commit.\n- `git log`: Displays commit hashes, author metadata, and change messages.',
    instructions: 'Let\'s inspect code changes in the repository. Check working tree state with `git status`, inspect file modifications with `git diff`, and review repository history using `git log`.',
    commandHelp: [
      { cmd: 'git status', desc: 'Display repository and staging area status' },
      { cmd: 'git diff', desc: 'Display line-by-line diffs of modified files' },
      { cmd: 'git log', desc: 'Display commit history log' }
    ],
    objectives: [
      { id: 'used_git_status', text: 'Run git status' },
      { id: 'used_git_diff', text: 'Run git diff' },
      { id: 'used_git_log', text: 'Run git log' }
    ],
    hints: [
      "Run 'git status' to inspect modified files.",
      "Run 'git diff' to review code alterations.",
      "Run 'git log' to see past commits.",
      "Try running: git status, then git diff, then git log"
    ],
    verify: (_fs, _session, history) => {
      const usedStatus = hasCommandInHistory(history, seg => seg.command === 'git' && seg.hasArg('status'));
      const usedDiff = hasCommandInHistory(history, seg => seg.command === 'git' && seg.hasArg('diff'));
      const usedLog = hasCommandInHistory(history, seg => seg.command === 'git' && seg.hasArg('log'));
      return {
        success: Boolean(usedStatus && usedDiff && usedLog),
        checks: [
          { id: 'used_git_status', passed: Boolean(usedStatus) },
          { id: 'used_git_diff', passed: Boolean(usedDiff) },
          { id: 'used_git_log', passed: Boolean(usedLog) }
        ]
      };
    }
  },
  {
    id: 146,
    moduleId: 'devops',
    title: 'Inspecting Linux Containers (docker ps, logs, exec)',
    xp: 240,
    badge: 'Container Pilot',
    description: 'Docker encapsulates applications inside isolated Linux cgroups and namespaces (containers). As a DevOps engineer or sysadmin, troubleshooting containerized workloads requires inspecting running containers and executing commands within their namespaces.\n\n- `docker ps`: Lists running containers, container IDs, images, uptime, and mapped network ports.\n- `docker logs <container>`: Streams standard output and error logs generated by the containerized service.\n- `docker exec -it <container> <command>`: Executes an interactive or diagnostic command directly inside the container namespace.',
    instructions: 'Let\'s inspect our microservice container. Run `docker ps` to list active containers, fetch service logs with `docker logs web-api`, and query the health endpoint inside the container using `docker exec -it web-api curl localhost:8080/health`.',
    commandHelp: [
      { cmd: 'docker ps', desc: 'List running containers and port mappings' },
      { cmd: 'docker logs web-api', desc: 'Inspect container output logs' },
      { cmd: 'docker exec -it web-api curl localhost:8080/health', desc: 'Execute command inside running container' }
    ],
    objectives: [
      { id: 'used_docker_ps', text: 'List containers with docker ps' },
      { id: 'used_docker_logs', text: 'Fetch container logs with docker logs web-api' },
      { id: 'used_docker_exec', text: 'Execute command inside container with docker exec' }
    ],
    hints: [
      "Run 'docker ps' to see active containers.",
      "Run 'docker logs web-api' to read stdout/stderr.",
      "Run 'docker exec -it web-api curl localhost:8080/health' to check status inside container.",
      "Try running: docker ps, then docker logs web-api, then docker exec -it web-api curl localhost:8080/health"
    ],
    verify: (_fs, _session, history) => {
      const usedPs = hasCommandInHistory(history, seg => seg.command === 'docker' && seg.hasArg('ps'));
      const usedLogs = hasCommandInHistory(history, seg => seg.command === 'docker' && seg.hasArg('logs'));
      const usedExec = hasCommandInHistory(history, seg => seg.command === 'docker' && seg.hasArg('exec'));
      return {
        success: Boolean(usedPs && usedLogs && usedExec),
        checks: [
          { id: 'used_docker_ps', passed: Boolean(usedPs) },
          { id: 'used_docker_logs', passed: Boolean(usedLogs) },
          { id: 'used_docker_exec', passed: Boolean(usedExec) }
        ]
      };
    }
  },
  {
    id: 149,
    moduleId: 'devops',
    title: 'Staging & Committing Code (git add, git commit, git branch)',
    xp: 220,
    badge: 'Git Committer',
    description: 'In Git version control, modifications made to working files must be staged before they can be committed into repository history.\n\n- `git add <file>`: Stages modified files into the index (e.g., `git add server.js`), preparing them for commit.\n- `git commit -m "<message>"`: Records a permanent snapshot of staged changes with a descriptive message (e.g., `git commit -m "Fix config"`).\n- `git branch`: Lists all local repository branches and indicates the currently active branch with an asterisk.',
    instructions: 'Let\'s stage and commit code! Stage the modified server configuration with `git add server.js`, commit it using `git commit -m "Fix config"`, and inspect active branches by running `git branch`.',
    commandHelp: [
      { cmd: 'git add server.js', desc: 'Stage modified file for commit' },
      { cmd: 'git commit -m "Fix config"', desc: 'Record snapshot with commit message' },
      { cmd: 'git branch', desc: 'List local git branches' }
    ],
    objectives: [
      { id: 'used_git_add', text: 'Stage server.js with git add server.js' },
      { id: 'used_git_commit', text: 'Commit changes with git commit -m' },
      { id: 'used_git_branch', text: 'Check branches with git branch' }
    ],
    hints: [
      "Run 'git add server.js' to stage the changed file.",
      "Commit staged changes with 'git commit -m \"Fix config\"'.",
      "List repository branches with 'git branch'.",
      "Try running: git add server.js, then git commit -m 'Fix config', and git branch"
    ],
    verify: (_fs, session, history) => {
      const usedAdd = Boolean((session.gitState && session.gitState.staged) || hasCommandInHistory(history, seg => seg.command === 'git' && seg.hasArg('add')));
      const usedCommit = Boolean((session.gitState && session.gitState.committed) || hasCommandInHistory(history, seg => seg.command === 'git' && seg.hasArg('commit')));
      const usedBranch = hasCommandInHistory(history, seg => seg.command === 'git' && seg.hasArg('branch'));
      return {
        success: Boolean(usedAdd && usedCommit && usedBranch),
        checks: [
          { id: 'used_git_add', passed: Boolean(usedAdd) },
          { id: 'used_git_commit', passed: Boolean(usedCommit) },
          { id: 'used_git_branch', passed: Boolean(usedBranch) }
        ]
      };
    }
  },
  {
    id: 150,
    moduleId: 'devops',
    title: 'Managing Container Lifecycle (docker start, stop, restart)',
    xp: 220,
    badge: 'Container Admin',
    description: 'Managing microservices in production requires controlling container lifecycle states when restarting services after configuration changes or stopping unneeded containers.\n\n- `docker restart <name>`: Gracefully stops and immediately starts a running container (e.g., `docker restart web-api`).\n- `docker stop <name>`: Stops an actively running container (e.g., `docker stop web-api`).\n- `docker start <name>`: Boots up an existing stopped container without creating a new instance (e.g., `docker start web-api`).',
    instructions: 'Let\'s control container lifecycle states. Restart the container service using `docker restart web-api`, then practice stopping it with `docker stop web-api`, and start it back up with `docker start web-api`.',
    commandHelp: [
      { cmd: 'docker restart web-api', desc: 'Restart running container service' },
      { cmd: 'docker stop web-api', desc: 'Stop active container' },
      { cmd: 'docker start web-api', desc: 'Start stopped container' }
    ],
    objectives: [
      { id: 'used_docker_restart', text: 'Restart container with docker restart web-api' },
      { id: 'used_docker_stop', text: 'Stop container with docker stop web-api' },
      { id: 'used_docker_start', text: 'Start container with docker start web-api' }
    ],
    hints: [
      "Run 'docker restart web-api' to restart the containerized service.",
      "Run 'docker stop web-api' to stop the container.",
      "Run 'docker start web-api' to start the stopped container.",
      "Try running: docker restart web-api, then docker stop web-api, then docker start web-api"
    ],
    verify: (_fs, _session, history) => {
      const usedRestart = hasCommandInHistory(history, seg => seg.command === 'docker' && seg.hasArg('restart'));
      const usedStop = hasCommandInHistory(history, seg => seg.command === 'docker' && seg.hasArg('stop'));
      const usedStart = hasCommandInHistory(history, seg => seg.command === 'docker' && seg.hasArg('start'));
      return {
        success: Boolean(usedRestart && usedStop && usedStart),
        checks: [
          { id: 'used_docker_restart', passed: Boolean(usedRestart) },
          { id: 'used_docker_stop', passed: Boolean(usedStop) },
          { id: 'used_docker_start', passed: Boolean(usedStart) }
        ]
      };
    }
  }
];

export const bossLessons = [
  {
    id: 84,
    moduleId: 'basics',
    title: 'Boss Challenge 1: The Wiped Project Tree',
    xp: 350,
    badge: 'Filesystem Boss',
    description: 'EMERGENCY ALERT: A faulty CI/CD deployment script executed an unconstrained cleanup routine and wiped the directory tree under `/home/learner/app`.\n\nThe backend production daemon refuses to start until the project directory structure is restored. To recover, you must reconstruct the missing directory hierarchy: create `/home/learner/app/logs`, `/home/learner/app/config`, and the nested module directory `/home/learner/app/src/modules`.\n\nNo step-by-step hints are provided for Boss Challenges. Inspect the system, plan your approach, and verify your filesystem state.',
    instructions: 'Recreate the required application structure: ensure directories `/home/learner/app/logs`, `/home/learner/app/config`, and `/home/learner/app/src/modules` all exist.',
    commandHelp: [
      { cmd: 'mkdir -p /home/learner/app/...', desc: 'Create nested directory hierarchy' },
      { cmd: 'ls -la /home/learner/app', desc: 'Inspect directory contents' },
      { cmd: 'cd /home/learner/app', desc: 'Navigate project directory' }
    ],
    objectives: [
      { id: 'app_dirs_restored', text: 'Restore directories /home/learner/app/logs and /home/learner/app/config' },
      { id: 'app_src_restored', text: 'Create nested directory /home/learner/app/src/modules' }
    ],
    hints: [
      "Inspect the directory structure under /home/learner using listing commands.",
      "Use mkdir with the -p switch to recreate all parent and nested directories in one go.",
      "Check that /home/learner/app/logs, /home/learner/app/config, and /home/learner/app/src/modules all exist."
    ],
    verify: (fs) => {
      const logsNode = fs.getNodeByPath('/home/learner/app', 'logs');
      const configNode = fs.getNodeByPath('/home/learner/app', 'config');
      const srcModulesNode = fs.getNodeByPath('/home/learner/app/src', 'modules') || fs.getNodeByPath('/home/learner/app', 'src/modules');
      const dirsOk = !!(logsNode && logsNode.type === 'dir' && configNode && configNode.type === 'dir');
      const srcOk = !!(srcModulesNode && srcModulesNode.type === 'dir');
      return {
        success: dirsOk && srcOk,
        checks: [
          { id: 'app_dirs_restored', passed: dirsOk },
          { id: 'app_src_restored', passed: srcOk }
        ]
      };
    }
  },
  {
    id: 85,
    moduleId: 'manipulation',
    title: 'Boss Challenge 2: Broken Deployment Cleanup',
    xp: 350,
    badge: 'Disaster Triage Master',
    description: 'INCIDENT REPORT: An aborted container update left messy temporary build artifacts in `/home/learner`. The leftover files `temp_install.tmp` and `old_log.txt` are creating conflicts.\n\nFurthermore, the verified staging configuration `/home/learner/staging.conf` was never promoted to production. Purge the obsolete temporary files and establish `/home/learner/production.conf` with the configuration from staging.\n\nThis is a Boss Challenge: evaluate the files, execute the cleanup, and prepare the production configuration.',
    instructions: 'Delete `temp_install.tmp` and `old_log.txt` from `/home/learner`, and copy or move `/home/learner/staging.conf` to `/home/learner/production.conf`.',
    commandHelp: [
      { cmd: 'rm ...', desc: 'Remove unwanted files' },
      { cmd: 'cp ... / mv ...', desc: 'Copy or move configuration file' },
      { cmd: 'cat production.conf', desc: 'Inspect config content' }
    ],
    objectives: [
      { id: 'junk_purged', text: 'Remove temporary files temp_install.tmp and old_log.txt from /home/learner' },
      { id: 'prod_conf_ready', text: 'Establish /home/learner/production.conf containing staging configuration' }
    ],
    hints: [
      "Check the files in /home/learner to identify obsolete temporary artifacts.",
      "Make sure the production configuration contains the required database settings.",
      "Ensure both junk files are completely removed."
    ],
    verify: (fs) => {
      const tempNode = fs.getNodeByPath('/home/learner', 'temp_install.tmp');
      const oldLogNode = fs.getNodeByPath('/home/learner', 'old_log.txt');
      const prodNode = fs.getNodeByPath('/home/learner', 'production.conf');
      const junkPurged = !tempNode && !oldLogNode;
      const prodReady = !!(prodNode && prodNode.type === 'file' && (prodNode.content.includes('DB_HOST') || prodNode.content.includes('prod-db')));
      return {
        success: junkPurged && prodReady,
        checks: [
          { id: 'junk_purged', passed: junkPurged },
          { id: 'prod_conf_ready', passed: prodReady }
        ]
      };
    }
  },
  {
    id: 86,
    moduleId: 'plumbing',
    title: 'Boss Challenge 3: Security Incident Log Triage',
    xp: 375,
    badge: 'Plumbing Overlord',
    description: 'SECURITY ALERT: The server logged dozens of suspicious requests in `/home/learner/access.log`. The SOC team needs a clean, deduplicated list of attacking IP addresses to update the network firewall blocklist.\n\nProcess the raw web server log to extract all unique IP addresses, sort them, and save the result into `/home/learner/banned_ips.txt`.\n\nAnalyze the data pipeline and construct a command pipeline to generate the required forensic report.',
    instructions: 'Extract unique IP addresses from `/home/learner/access.log`, sort them, and save the deduplicated IP list into `/home/learner/banned_ips.txt`.',
    commandHelp: [
      { cmd: 'cat access.log', desc: 'View raw log contents' },
      { cmd: 'grep / sort / uniq', desc: 'Filter, sort, and deduplicate lines' },
      { cmd: '> banned_ips.txt', desc: 'Redirect pipeline output into report file' }
    ],
    objectives: [
      { id: 'banned_ips_created', text: 'Create /home/learner/banned_ips.txt with sorted, unique IP addresses' }
    ],
    hints: [
      "Review the structure of access.log to see how IP addresses appear on each line.",
      "Combine grep or sorting and deduplication tools into a single pipeline.",
      "Verify that banned_ips.txt exists and contains the distinct attacking IP addresses."
    ],
    verify: (fs) => {
      const node = fs.getNodeByPath('/home/learner', 'banned_ips.txt');
      const hasNode = !!(node && node.type === 'file');
      const content = hasNode ? node.content.trim() : '';
      const expectedIps = new Set(['203.0.113.19', '198.51.100.42']);
      const lines = content.split('\n').map(l => l.trim()).filter(Boolean);
      const hasIps = lines.length === expectedIps.size && lines.every(line => expectedIps.has(line));
      const isUnique = new Set(lines).size === lines.length;
      return {
        success: hasNode && hasIps && isUnique,
        checks: [
          { id: 'banned_ips_created', passed: !!(hasNode && hasIps && isUnique) }
        ]
      };
    }
  },
  {
    id: 87,
    moduleId: 'advanced',
    title: 'Boss Challenge 4: Security Audit & Permissions Lockdown',
    xp: 400,
    badge: 'Security Lockdown Master',
    description: 'AUDIT FAILURE: An internal compliance scanner raised a critical security finding: `/etc/vault.conf` containing sensitive credentials was deployed with permissive `777` permissions and is owned by `learner` instead of `root`.\n\nRemediate the vulnerability immediately by changing the owner of `/etc/vault.conf` to `root:root` and locking down permissions to strict `600` (read/write for owner only).\n\nInspect the file with `ls -l` before and after running your remediation.',
    instructions: 'Set the owner of `/etc/vault.conf` to root:root and change its permissions to 600.',
    commandHelp: [
      { cmd: 'sudo chown root:root /etc/vault.conf', desc: 'Change owner and group to root' },
      { cmd: 'sudo chmod 600 /etc/vault.conf', desc: 'Restrict permissions to owner read/write' },
      { cmd: 'ls -l /etc/vault.conf', desc: 'Inspect file permissions and ownership' }
    ],
    objectives: [
      { id: 'vault_ownership_root', text: 'Ensure /etc/vault.conf is owned by root' },
      { id: 'vault_perms_600', text: 'Set permissions of /etc/vault.conf to 600' }
    ],
    hints: [
      "Review ownership and permissions with a detailed listing command.",
      "Modifying system files in /etc requires elevated administrator privileges.",
      "Verify that the owner is root and permissions are rw------- (octal 600)."
    ],
    verify: (fs) => {
      const node = fs.getNodeByPath('/etc', 'vault.conf');
      const ownerOk = !!(node && node.owner === 'root' && node.group === 'root');
      const permsOk = !!(node && (node.permissions === '600' || node.permissions === '0600'));
      return {
        success: ownerOk && permsOk,
        checks: [
          { id: 'vault_ownership_root', passed: ownerOk },
          { id: 'vault_perms_600', passed: permsOk }
        ]
      };
    }
  },
  {
    id: 88,
    moduleId: 'system',
    title: 'Boss Challenge 5: Package Hygiene & Malware Purge',
    xp: 400,
    badge: 'Package Overlord',
    description: 'INCIDENT RESPONSE: An unauthorized script dropped a suspicious unsigned package archive `/tmp/corrupt_pkg.deb` into temporary storage. Furthermore, the standard network diagnostic utility `curl` is missing or unverified in the system catalog.\n\nCleanse the temporary directory by purging `/tmp/corrupt_pkg.deb` and ensure the package manager has `curl` installed and ready for service.',
    instructions: 'Delete `/tmp/corrupt_pkg.deb` and ensure `curl` is installed using your package manager.',
    commandHelp: [
      { cmd: 'rm /tmp/corrupt_pkg.deb', desc: 'Purge suspicious package payload' },
      { cmd: 'sudo apt install curl', desc: 'Install curl package' }
    ],
    objectives: [
      { id: 'corrupt_deb_removed', text: 'Remove /tmp/corrupt_pkg.deb from the system' },
      { id: 'curl_installed', text: 'Ensure curl is installed in the package catalog' }
    ],
    hints: [
      "Check /tmp to confirm the suspicious package is eradicated.",
      "Use your package manager with administrator privileges to install curl.",
      "Verify that curl is available in the installed utilities list."
    ],
    verify: (fs, session) => {
      const debNode = fs.getNodeByPath('/tmp', 'corrupt_pkg.deb');
      const debRemoved = !debNode;
      const curlInstalled = session && session.installedPackages && session.installedPackages.has('curl');
      return {
        success: debRemoved && curlInstalled,
        checks: [
          { id: 'corrupt_deb_removed', passed: debRemoved },
          { id: 'curl_installed', passed: !!curlInstalled }
        ]
      };
    }
  },
  {
    id: 89,
    moduleId: 'resources',
    title: 'Boss Challenge 6: Disk Space Outage Emergency',
    xp: 400,
    badge: 'Storage Rescuer',
    description: 'CRITICAL ALERT: Root filesystem capacity has hit 99%! Production monitoring reports that an unhandled core dump `/var/log/huge_core_dump.log` is suffocating system storage.\n\nLocate the runaway file, delete `/var/log/huge_core_dump.log` to reclaim space, and create a status confirmation log `/home/learner/disk_recovery.txt` containing a summary of recovered capacity.',
    instructions: 'Remove `/var/log/huge_core_dump.log` and create `/home/learner/disk_recovery.txt` with your disk recovery summary.',
    commandHelp: [
      { cmd: 'df -h / du -sh /var/log/*', desc: 'Diagnose filesystem and directory usage' },
      { cmd: 'rm /var/log/huge_core_dump.log', desc: 'Delete runaway crash dump' },
      { cmd: 'df -h > /home/learner/disk_recovery.txt', desc: 'Log final disk state' }
    ],
    objectives: [
      { id: 'core_dump_purged', text: 'Delete /var/log/huge_core_dump.log' },
      { id: 'recovery_logged', text: 'Create /home/learner/disk_recovery.txt with disk status' }
    ],
    hints: [
      "Locate the oversized dump file in /var/log and eliminate it.",
      "Redirect or write a status confirmation into /home/learner/disk_recovery.txt.",
      "Verify that the dump file is gone and disk_recovery.txt is created."
    ],
    verify: (fs) => {
      const dumpNode = fs.getNodeByPath('/var/log', 'huge_core_dump.log');
      const recNode = fs.getNodeByPath('/home/learner', 'disk_recovery.txt');
      const dumpPurged = !dumpNode;
      const recLogged = !!(recNode && recNode.type === 'file' && recNode.content.trim().length > 0);
      return {
        success: dumpPurged && recLogged,
        checks: [
          { id: 'core_dump_purged', passed: dumpPurged },
          { id: 'recovery_logged', passed: recLogged }
        ]
      };
    }
  },
  {
    id: 90,
    moduleId: 'processes',
    title: 'Boss Challenge 7: Rogue Cryptominer Neutralization',
    xp: 450,
    badge: 'Process Terminator',
    description: 'SERVER THROTTLED: CPU load average has spiked above 25.0. An unauthenticated background script (PID 9999 running `rogue_process.sh`) is monopolizing 99.1% of processor cycles and starving application threads.\n\nInspect the active process table to discover the rogue PID, determine its signal tolerance, and kill the process immediately so it ceases execution.',
    instructions: 'Identify the runaway process and terminate PID 9999 so it no longer appears in the process table.',
    commandHelp: [
      { cmd: 'ps aux / top', desc: 'Inspect active processes and resource consumption' },
      { cmd: 'kill 9999 / kill -9 9999', desc: 'Terminate rogue process PID' }
    ],
    objectives: [
      { id: 'rogue_process_killed', text: 'Terminate rogue process 9999 so it is completely stopped' }
    ],
    hints: [
      "Use process monitoring tools to find the process with runaway CPU usage.",
      "Send a termination signal to PID 9999 using the kill command.",
      "Verify with ps that process 9999 is no longer listed in the process table."
    ],
    verify: (_fs, session) => {
      const killed = session && session.rogueProcessAlive === false;
      return {
        success: !!killed,
        checks: [
          { id: 'rogue_process_killed', passed: !!killed }
        ]
      };
    }
  },
  {
    id: 91,
    moduleId: 'networking',
    title: 'Boss Challenge 8: DNS Poisoning Remediation',
    xp: 450,
    badge: 'Netfilter Sentinel',
    description: 'SECURITY COMPROMISE: An attacker injected a DNS poisoning entry `0.0.0.0 evil-tracker.local` directly into `/etc/hosts`, corrupting internal hostname resolution.\n\nRemediate the threat: edit or clean `/etc/hosts` to remove all references to `evil-tracker.local`, and record `evil-tracker.local` in `/etc/blocked_hosts.conf` so the domain is permanently logged for network blacklisting.',
    instructions: 'Clean `/etc/hosts` by removing evil-tracker.local, and create `/etc/blocked_hosts.conf` containing evil-tracker.local.',
    commandHelp: [
      { cmd: 'cat /etc/hosts', desc: 'View current hosts mappings' },
      { cmd: 'echo "evil-tracker.local" > /etc/blocked_hosts.conf', desc: 'Record blocked domain' }
    ],
    objectives: [
      { id: 'hosts_cleaned', text: 'Remove evil-tracker.local from /etc/hosts' },
      { id: 'blocked_hosts_created', text: 'Create /etc/blocked_hosts.conf with evil-tracker.local' }
    ],
    hints: [
      "Inspect /etc/hosts to view the poisoned mapping.",
      "Update or rewrite /etc/hosts to keep only localhost and gateway entries.",
      "Ensure /etc/blocked_hosts.conf contains the malicious hostname."
    ],
    verify: (fs) => {
      const hostsNode = fs.getNodeByPath('/etc', 'hosts');
      const blockedNode = fs.getNodeByPath('/etc', 'blocked_hosts.conf');
      const cleaned = !!(hostsNode && !hostsNode.content.includes('evil-tracker.local'));
      const recorded = !!(blockedNode && blockedNode.type === 'file' && blockedNode.content.includes('evil-tracker.local'));
      return {
        success: cleaned && recorded,
        checks: [
          { id: 'hosts_cleaned', passed: cleaned },
          { id: 'blocked_hosts_created', passed: recorded }
        ]
      };
    }
  },
  {
    id: 92,
    moduleId: 'searching',
    title: 'Boss Challenge 9: Lost Disaster Recovery Archive',
    xp: 450,
    badge: 'Archival Sleuth',
    description: 'DISASTER RECOVERY: Before an unexpected reboot, a database administrator saved an encrypted backup archive named `db_backup_secure.tar.gz`, but failed to document its path. It is lost somewhere on the filesystem.\n\nLocate the misplaced archive file anywhere across the system hierarchy, and restore it to its designated safe haven: copy it to `/home/learner/backups/db_backup_secure.tar.gz`.',
    instructions: 'Find the lost file `db_backup_secure.tar.gz` and restore a copy to `/home/learner/backups/db_backup_secure.tar.gz`.',
    commandHelp: [
      { cmd: 'find / -name "db_backup_secure.tar.gz"', desc: 'Locate file across filesystem' },
      { cmd: 'mkdir -p /home/learner/backups', desc: 'Ensure backup folder exists' },
      { cmd: 'cp ... /home/learner/backups/', desc: 'Restore archive copy' }
    ],
    objectives: [
      { id: 'backup_restored', text: 'Locate and restore db_backup_secure.tar.gz into /home/learner/backups/' }
    ],
    hints: [
      "Use find starting at the root directory to discover where db_backup_secure.tar.gz is hidden.",
      "Make sure the target destination directory /home/learner/backups exists.",
      "Copy the discovered archive into /home/learner/backups/db_backup_secure.tar.gz."
    ],
    verify: (fs) => {
      const node = fs.getNodeByPath('/home/learner/backups', 'db_backup_secure.tar.gz');
      const source = fs.getNodeByPath('/var/backups/lost', 'db_backup_secure.tar.gz');
      const ok = !!(node && node.type === 'file' && source && node.content === source.content);
      return {
        success: ok,
        checks: [
          { id: 'backup_restored', passed: ok }
        ]
      };
    }
  },
  {
    id: 93,
    moduleId: 'services',
    title: 'Boss Challenge 10: Production Web Service Recovery',
    xp: 450,
    badge: 'Systemd Guardian',
    description: 'OUTAGE REPORT: The primary HTTP frontend service `apache2.service` crashed and is currently in an `inactive (dead)` state. Client web requests are timing out.\n\nInspect the service status with your service management tools, discover the problem, and use `systemctl` with superuser privileges to restart or start `apache2` so it returns to `active (running)`.',
    instructions: 'Use systemctl with sudo privileges to start or restart apache2 so that its state is active.',
    commandHelp: [
      { cmd: 'sudo systemctl status apache2', desc: 'Inspect service status and state' },
      { cmd: 'sudo systemctl restart apache2', desc: 'Restart crashed service' }
    ],
    objectives: [
      { id: 'service_active', text: 'Bring apache2.service back into the active state' }
    ],
    hints: [
      "Check current service status using systemctl status apache2.",
      "Control actions such as start or restart require sudo.",
      "Verify that the service state reports active (running)."
    ],
    verify: (_fs, session) => {
      const active = session && session.services && session.services.apache2 === 'active';
      return {
        success: !!active,
        checks: [
          { id: 'service_active', passed: !!active }
        ]
      };
    }
  },
  {
    id: 94,
    moduleId: 'editing',
    title: 'Boss Challenge 11: Corrupted Server Configuration',
    xp: 475,
    badge: 'Editor Virtuoso',
    description: 'CONFIGURATION CORRUPTION: A late-night config commit broke `/home/learner/server.conf`. The file contains invalid directives: `host=0.0.0.0.0` (malformed IP) and `port=99999` (outside the 1-65535 port range).\n\nOpen `/home/learner/server.conf` with your text editor (nano, vim, or shell tools) and correct the file so that `host=127.0.0.1`, `port=80`, and `max_connections=500` are set.',
    instructions: 'Edit `/home/learner/server.conf` using either nano (`nano server.conf`) or vim (`vim server.conf`) to set host=127.0.0.1, port=80, and max_connections=500, removing the broken parameters.',
    commandHelp: [
      { cmd: 'nano server.conf', desc: 'Open file in GNU nano text editor' },
      { cmd: 'vim server.conf', desc: 'Open file in Vim modal text editor' },
      { cmd: 'cat server.conf', desc: 'Verify modified configuration' }
    ],
    objectives: [
      { id: 'conf_corrected', text: 'Fix /home/learner/server.conf with host=127.0.0.1, port=80, and max_connections=500' }
    ],
    hints: [
      "Open server.conf using 'nano server.conf' or 'vim server.conf' and inspect the invalid values.",
      "Replace 0.0.0.0.0 with 127.0.0.1 and port 99999 with 80.",
      "Set max_connections=500 and save your changes."
    ],
    verify: (fs) => {
      const conf = fs.getNodeByPath('/home/learner', 'server.conf');
      const valid = !!(conf && conf.type === 'file' &&
        conf.content.includes('127.0.0.1') &&
        conf.content.includes('port=80') &&
        conf.content.includes('max_connections=500') &&
        !conf.content.includes('99999') &&
        !conf.content.includes('0.0.0.0.0'));
      return {
        success: valid,
        checks: [
          { id: 'conf_corrected', passed: valid }
        ]
      };
    }
  },
  {
    id: 95,
    moduleId: 'scripting',
    title: 'Boss Challenge 12: Automated Healthcheck Script',
    xp: 475,
    badge: 'Automation Architect',
    description: 'OPERATIONAL REQUIREMENT: Deploy an automated system health-check script at `/home/learner/healthcheck.sh`.\n\nThe script must be a valid executable Bash script containing the `#!/bin/bash` shebang on line 1, must output the token `SYSTEM_OK`, and must have executable permissions (`755` or `rwxr-xr-x`) so monitoring agents can invoke it directly without errors.',
    instructions: 'Create `/home/learner/healthcheck.sh` with #!/bin/bash shebang, echo SYSTEM_OK, and make it executable with chmod 755.',
    commandHelp: [
      { cmd: 'touch /home/learner/healthcheck.sh', desc: 'Create script file' },
      { cmd: 'chmod 755 /home/learner/healthcheck.sh', desc: 'Make script executable' },
      { cmd: './healthcheck.sh', desc: 'Execute script' }
    ],
    objectives: [
      { id: 'script_created', text: 'Create /home/learner/healthcheck.sh with shebang and SYSTEM_OK output' },
      { id: 'script_executable', text: 'Set executable permissions (755) on /home/learner/healthcheck.sh' }
    ],
    hints: [
      "Make sure the script starts with #!/bin/bash and echoes SYSTEM_OK.",
      "Use chmod to grant read and execute permissions to the script.",
      "Verify permissions with ls -l healthcheck.sh."
    ],
    verify: (fs) => {
      const node = fs.getNodeByPath('/home/learner', 'healthcheck.sh');
      const contentOk = !!(node && node.type === 'file' && node.content.startsWith('#!/bin/bash\n') && /^echo\s+['"]?SYSTEM_OK['"]?\s*$/m.test(node.content));
      const execOk = !!(node && (node.permissions === '755' || node.permissions === '0755'));
      return {
        success: contentOk && execOk,
        checks: [
          { id: 'script_created', passed: contentOk },
          { id: 'script_executable', passed: execOk }
        ]
      };
    }
  },
  {
    id: 96,
    moduleId: 'processing',
    title: 'Boss Challenge 13: Data Pipeline Normalization',
    xp: 500,
    badge: 'Data Munging Boss',
    description: 'ETL DATA INCIDENT: A legacy mainframe exported `/home/learner/messy_data.csv` using unconventional formatting: fields are separated by colons and rows end with semicolons (`alice:dev:engineering;`).\n\nThe analytics ingestion engine rejects this format. Transform the file into clean CSV format at `/home/learner/clean_users.csv`, containing only the user and department (fields 1 and 3) separated by commas (`alice,engineering`), with semicolons stripped.',
    instructions: 'Process `/home/learner/messy_data.csv` and write clean records into `/home/learner/clean_users.csv` formatted as name,dept without semicolons.',
    commandHelp: [
      { cmd: 'cat messy_data.csv', desc: 'View raw delimited data' },
      { cmd: 'awk / sed / cut / tr', desc: 'Filter, translate delimiters, and cut fields' },
      { cmd: '> clean_users.csv', desc: 'Write normalized data to output file' }
    ],
    objectives: [
      { id: 'clean_csv_created', text: 'Generate /home/learner/clean_users.csv with clean comma-separated name,dept records' }
    ],
    hints: [
      "Inspect messy_data.csv to observe the field order: name is field 1, dept is field 3.",
      "Use tools like awk -F: '{print $1 \",\" $3}' or tr/sed to remove semicolons and output commas.",
      "Verify that clean_users.csv exists and contains records like alice,engineering."
    ],
    verify: (fs) => {
      const node = fs.getNodeByPath('/home/learner', 'clean_users.csv');
      const hasNode = !!(node && node.type === 'file');
      const content = hasNode ? node.content.trim() : '';
      const source = fs.getNodeByPath('/home/learner', 'messy_data.csv');
      const expected = (source?.content || '').trim().split('\n').filter(Boolean).map(line => {
        const fields = line.replace(/;/g, '').split(':');
        return `${fields[0]},${fields[2]}`;
      }).sort();
      const actual = content.split('\n').filter(Boolean).sort();
      const valid = hasNode && expected.length > 0 && JSON.stringify(actual) === JSON.stringify(expected);
      return {
        success: valid,
        checks: [
          { id: 'clean_csv_created', passed: valid }
        ]
      };
    }
  },
  {
    id: 97,
    moduleId: 'env_admin',
    title: 'Boss Challenge 14: Compromised Environment Cleanup',
    xp: 500,
    badge: 'Environment Warden',
    description: 'SECURITY BREACH: A malicious session injected a backdoor path `/tmp/evil_bin` into `/home/learner/.bashrc`, attempting to hijack user commands.\n\nEradicate the persistence mechanism: clean `/home/learner/.bashrc` by removing all references to `evil_bin`, and delete the `/tmp/evil_bin` directory entirely from the system.',
    instructions: 'Delete directory `/tmp/evil_bin` and remove references to evil_bin from `/home/learner/.bashrc`.',
    commandHelp: [
      { cmd: 'rm -r /tmp/evil_bin', desc: 'Delete malicious binary directory' },
      { cmd: 'nano ~/.bashrc', desc: 'Clean user shell startup script' }
    ],
    objectives: [
      { id: 'evil_bin_purged', text: 'Delete directory /tmp/evil_bin' },
      { id: 'bashrc_cleaned', text: 'Remove evil_bin from /home/learner/.bashrc' }
    ],
    hints: [
      "Remove the unauthorized directory from /tmp.",
      "Inspect ~/.bashrc and strip any export or alias pointing to evil_bin.",
      "Verify that evil_bin is gone from both /tmp and .bashrc."
    ],
    verify: (fs) => {
      const dirNode = fs.getNodeByPath('/tmp', 'evil_bin');
      const bashrcNode = fs.getNodeByPath('/home/learner', '.bashrc');
      const dirPurged = !dirNode;
      const bashrcClean = !bashrcNode || !bashrcNode.content.includes('evil_bin');
      return {
        success: dirPurged && bashrcClean,
        checks: [
          { id: 'evil_bin_purged', passed: dirPurged },
          { id: 'bashrc_cleaned', passed: bashrcClean }
        ]
      };
    }
  },
  {
    id: 138,
    moduleId: 'archiving',
    title: 'Boss Challenge 15: Corrupted Backup & Checksum Recovery',
    xp: 500,
    badge: 'Backup Savior',
    description: 'DATA INTEGRITY INCIDENT: The nightly backup pipeline flagged a corrupted archive in `/home/learner/backups/data_backup.tar.gz`. The mission-critical archive failed integrity checks.\n\n1. Run `sha256sum -c checksums.sha256` inside `/home/learner/backups` (or `sha256sum -c /home/learner/backups/checksums.sha256`) to confirm the corrupted file (`FAILED`).\n2. Overwrite the corrupted archive by copying the pristine valid backup from the system cache at `/var/backups/data_backup.tar.gz` into `/home/learner/backups/data_backup.tar.gz`.\n3. Re-verify the backup using `sha256sum -c checksums.sha256` to confirm integrity (`data_backup.tar.gz: OK`).',
    instructions: 'Verify the corrupted backup with sha256sum -c checksums.sha256, replace /home/learner/backups/data_backup.tar.gz with /var/backups/data_backup.tar.gz, and re-verify integrity.',
    commandHelp: [
      { cmd: 'sha256sum -c checksums.sha256', desc: 'Verify files against cryptographic checksum list' },
      { cmd: 'cp /var/backups/data_backup.tar.gz /home/learner/backups/', desc: 'Copy valid backup archive into backups folder' }
    ],
    objectives: [
      { id: 'backup_restored', text: 'Restore valid data_backup.tar.gz from /var/backups' },
      { id: 'checksum_verified', text: 'Verify checksum match with sha256sum -c' }
    ],
    hints: [
      "Navigate to /home/learner/backups or run 'sha256sum -c /home/learner/backups/checksums.sha256'.",
      "Copy the valid backup: 'cp /var/backups/data_backup.tar.gz /home/learner/backups/'.",
      "Verify the repaired archive: 'sha256sum -c /home/learner/backups/checksums.sha256'."
    ],
    verify: (fs, _session, history) => {
      const backupNode = fs.getNodeByPath('/home/learner/backups', 'data_backup.tar.gz');
      const validBackupNode = fs.getNodeByPath('/var/backups', 'data_backup.tar.gz');
      const isRestored = Boolean(backupNode && validBackupNode && backupNode.content === validBackupNode.content);
      const ranCheck = hasCommandInHistory(history, seg => seg.command === 'sha256sum' && (seg.hasAnyFlag('c', 'check') || seg.args.some(a => a.includes('checksums.sha256'))));
      return {
        success: Boolean(isRestored && ranCheck),
        checks: [
          { id: 'backup_restored', passed: Boolean(isRestored) },
          { id: 'checksum_verified', passed: Boolean(ranCheck) }
        ]
      };
    }
  },
  {
    id: 99,
    moduleId: 'remote_users',
    title: 'Boss Challenge 16: Unauthorized User & Group Audit',
    xp: 500,
    badge: 'Root Gatekeeper',
    description: 'FINAL SECURITY AUDIT: An intrusion detection audit revealed that an unauthorized user account `backdoor` was quietly added to `/etc/passwd`, and an unauthorized administrative group `rogue_admins` was added to `/etc/group`.\n\nAudit and cleanse the authentication databases: inspect the files with `cat` or `grep`, safely remove the `backdoor` user using `sudo userdel backdoor`, and delete the `rogue_admins` group using `sudo groupdel rogue_admins`.\n\nVerify that both unauthorized entries have been completely eradicated.',
    instructions: 'Inspect /etc/passwd and /etc/group, remove user backdoor with sudo userdel backdoor, and remove group rogue_admins with sudo groupdel rogue_admins.',
    commandHelp: [
      { cmd: 'cat /etc/passwd | grep backdoor', desc: 'Inspect user database for unauthorized account' },
      { cmd: 'cat /etc/group | grep rogue_admins', desc: 'Inspect group database for rogue group' },
      { cmd: 'sudo userdel backdoor', desc: 'Safely remove unauthorized user account' },
      { cmd: 'sudo groupdel rogue_admins', desc: 'Safely delete rogue group' }
    ],
    objectives: [
      { id: 'backdoor_user_removed', text: 'Remove backdoor user from /etc/passwd' },
      { id: 'rogue_group_removed', text: 'Remove rogue_admins group from /etc/group' }
    ],
    hints: [
      "Review /etc/passwd and /etc/group using grep or cat to locate unauthorized entries.",
      "Execute 'sudo userdel backdoor' to safely remove the unauthorized user.",
      "Execute 'sudo groupdel rogue_admins' to remove the rogue group.",
      "Confirm that neither entry remains in the database files."
    ],
    verify: (fs) => {
      const passwdNode = fs.getNodeByPath('/etc', 'passwd');
      const groupNode = fs.getNodeByPath('/etc', 'group');
      const userRemoved = !passwdNode || !passwdNode.content.includes('backdoor');
      const groupRemoved = !groupNode || !groupNode.content.includes('rogue_admins');
      return {
        success: userRemoved && groupRemoved,
        checks: [
          { id: 'backdoor_user_removed', passed: userRemoved },
          { id: 'rogue_group_removed', passed: groupRemoved }
        ]
      };
    }
  },
  {
    id: 147,
    moduleId: 'devops',
    title: 'Boss Challenge 17: Containerized Hotfix & Git Deployment',
    xp: 500,
    badge: 'DevOps Hero',
    description: 'PRODUCTION OUTAGE: The production web service in container `web-api` is failing health checks because `server.js` was modified with the wrong port.\n\n1. Check the failure logs using `docker logs web-api`.\n2. Inspect the repository changes using `git status` and `git diff`.\n3. Stage the fix by running `git add server.js`.\n4. Commit the fix with `git commit -m "Fix port binding for production"`.\n5. Restart the containerized service using `docker restart web-api` to apply the hotfix.',
    instructions: 'Check container logs, stage and commit the fix with git add and git commit, then restart the container with docker restart web-api.',
    commandHelp: [
      { cmd: 'docker logs web-api', desc: 'Inspect container failure logs' },
      { cmd: 'git add server.js && git commit -m "Fix port"', desc: 'Stage and commit hotfix' },
      { cmd: 'docker restart web-api', desc: 'Restart containerized service' }
    ],
    objectives: [
      { id: 'git_committed', text: 'Commit the fix using git commit' },
      { id: 'docker_restarted', text: 'Restart container with docker restart web-api' }
    ],
    hints: [
      "Run 'docker logs web-api' to inspect runtime status.",
      "Stage your modifications with 'git add server.js'.",
      "Commit your changes with 'git commit -m \"Fix port\"'.",
      "Restart the container using 'docker restart web-api'."
    ],
    verify: (_fs, session, history) => {
      const committed = Boolean((session.gitState && session.gitState.committed) || hasCommandInHistory(history, seg => seg.command === 'git' && seg.hasArg('commit')));
      const restarted = hasCommandInHistory(history, seg => seg.command === 'docker' && seg.hasArg('restart'));
      return {
        success: Boolean(committed && restarted),
        checks: [
          { id: 'git_committed', passed: Boolean(committed) },
          { id: 'docker_restarted', passed: Boolean(restarted) }
        ]
      };
    }
  }
];

export const lessons = [];
for (const mod of modules) {
  const modLessons = baseLessons.filter(l => l.moduleId === mod.id);
  lessons.push(...modLessons);
  const boss = bossLessons.find(b => b.moduleId === mod.id);
  if (boss) {
    lessons.push(boss);
  }
}