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
  { id: 'env_admin', title: '14. Environment & Users' },
  { id: 'adv_fs', title: '15. Advanced Filesystem' },
  { id: 'remote_users', title: '16. Remote Access & User Admin' }
];

export const lessons = [
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
    verify: (fs, session, history) => {
      const ranWhoami = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('whoami');
      });
      const ranPwd = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('pwd');
      });
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
    verify: (fs, session, history) => {
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
      const inHome = wasInHome || session.currentPath === '/home/learner';
      const usedMkdir = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('mkdir');
      });
      const node = fs.getNodeByPath('/home/learner', 'projects');
      const dirExists = node && node.type === 'dir';

      return {
        success: inHome && usedMkdir && dirExists,
        checks: [
          { id: 'in_home', passed: inHome },
          { id: 'used_mkdir', passed: usedMkdir },
          { id: 'dir_exists', passed: dirExists }
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
    verify: (fs, session, history) => {
      const node = fs.getNodeByPath('/home/learner/workspace/src', 'utils');
      const nestedDirExists = node && node.type === 'dir';
      const usedPSwitch = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const mkdirIdx = parts.indexOf('mkdir');
        return mkdirIdx !== -1 && (parts.includes('-p') || parts.includes('--parents') || parts.some(p => p.startsWith('-') && p.includes('p')));
      });

      return {
        success: nestedDirExists && usedPSwitch,
        checks: [
          { id: 'nested_dir_exists', passed: !!nestedDirExists },
          { id: 'used_p_switch', passed: usedPSwitch }
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
    verify: (fs, session, history) => {
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
    description: 'When you buy a new board game, you usually peek at the rulebook or reference card to see what moves are allowed. In our terminal emulator, you have a built-in cheat sheet!\n\n- The `help` command lists every single command this simulator supports, along with details about whether it supports piping or redirecting outputs.',
    instructions: 'Let\'s inspect the rulebook. Run `help` to see the full list of commands you can play with.',
    commandHelp: [
      { cmd: 'help', desc: 'List available commands' }
    ],
    objectives: [
      { id: 'ran_help', text: 'Run the "help" command' }
    ],
        hints: [
      "Review the instructions to find the appropriate command for rulebook help.",
      "Use the 'help' command.",
      "Try running: help"
    ],
verify: (fs, session, history) => {
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
verify: (fs, session, history) => {
      const usedTouch = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('touch');
      });
      const node = fs.getNodeByPath('/home/learner/projects', 'task.txt');
      const fileExists = node && node.type === 'file';

      return {
        success: usedTouch && fileExists,
        checks: [
          { id: 'used_touch', passed: usedTouch },
          { id: 'file_exists', passed: fileExists }
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
verify: (fs, session, history) => {
      const catHosts = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const catIdx = parts.indexOf('cat');
        if (catIdx === -1) return false;
        const args = parts.slice(catIdx + 1);
        return args.some(arg => arg === '/etc/hosts' || arg === 'hosts' || arg === 'etc/hosts');
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
    description: 'Now that you can read a whole file with `cat`, what if the file has thousands of lines and you only want to see the top or bottom? Dumping a huge file with `cat` floods your screen. Instead, we use `head` and `tail` to peek at the edges.\n\n- The `head` command displays the first 10 lines of a file by default. You can change this using `-n <number>` (e.g. `head -n 5 log.txt` for the first 5 lines).\n- The `tail` command displays the last 10 lines by default, supporting the same `-n` option.\n- Crucially, `tail -f` (follow) monitors a file in real-time, showing new lines as they are written by the system. This is a sysadmin\'s favorite tool for watching live logs.',
    instructions: 'Let\'s inspect the logs. Use `head -n 5 logs/app.log` to view the first 5 lines of the application log. Next, run `tail -n 3 logs/security.log` to view the last 3 security events. Finally, run `tail -f logs/app.log` to simulate real-time log monitoring (it will print mock entries and exit).',
    commandHelp: [
      { cmd: 'head -n 5 logs/app.log', desc: 'Display first 5 lines of app.log' },
      { cmd: 'tail -n 3 logs/security.log', desc: 'Display last 3 lines of security.log' },
      { cmd: 'tail -f logs/app.log', desc: 'Monitor app.log updates in real-time' }
    ],
    objectives: [
      { id: 'used_head', text: 'Run the "head" command with -n 5 on logs/app.log' },
      { id: 'used_tail', text: 'Run the "tail" command with -n 3 on logs/security.log' },
      { id: 'used_tail_f', text: 'Run the "tail" command with -f to follow app.log' }
    ],
    hints: [
      "Use head -n 5 followed by the filename, and tail -n 3 followed by the security log path.",
      "To follow live logs, add the -f option to the tail command.",
      "Try running: head -n 5 logs/app.log, then tail -n 3 logs/security.log, and finally tail -f logs/app.log"
    ],
    verify: (fs, session, history) => {
      const ranHead = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const idx = parts.indexOf('head');
        if (idx === -1) return false;
        const options = parts.slice(idx + 1);
        const hasN5 = options.includes('-n5') || (options.includes('-n') && options[options.indexOf('-n') + 1] === '5');
        const hasFile = options.some(arg => arg.includes('app.log'));
        return hasN5 && hasFile;
      });
      const ranTail = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const idx = parts.indexOf('tail');
        if (idx === -1) return false;
        const options = parts.slice(idx + 1);
        const hasN3 = options.includes('-n3') || (options.includes('-n') && options[options.indexOf('-n') + 1] === '3');
        const hasFile = options.some(arg => arg.includes('security.log'));
        return hasN3 && hasFile;
      });
      const ranTailF = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const idx = parts.indexOf('tail');
        if (idx === -1) return false;
        const options = parts.slice(idx + 1);
        return options.includes('-f') || options.includes('--follow');
      });
      return {
        success: ranHead && ranTail && ranTailF,
        checks: [
          { id: 'used_head', passed: ranHead },
          { id: 'used_tail', passed: ranTail },
          { id: 'used_tail_f', passed: ranTailF }
        ]
      };
    }
  },
  {
    id: 52,
    moduleId: 'manipulation',
    title: 'Interactive File Scrolling (less & more)',
    xp: 150,
    badge: 'Pager',
    description: 'Peeking at the top and bottom of a file with `head` and `tail` is great, but what if you need to browse a long configuration file page-by-page? That\'s what pagers like `less` and `more` are for.\n\n- Pagers load files interactively, showing one page of text at a time to prevent system slowdowns on large files.\n- `less` is the modern choice, allowing you to scroll both forward and backward using the arrow keys, search text with `/`, and exit by pressing `q`.\n- `more` is an older, simpler pager that only scrolls forward.',
    instructions: 'Let\'s read a long file page-by-page. Run `less /etc/hosts` to open it in a scrolling view. (In our terminal, this will output the contents in a scrollable frame. Press `q` to return).',
    commandHelp: [
      { cmd: 'less /etc/hosts', desc: 'Open hosts file in the less pager' },
      { cmd: 'more /etc/hosts', desc: 'Open hosts file in the more pager' }
    ],
    objectives: [
      { id: 'used_less', text: 'Open /etc/hosts in a pager (less or more)' }
    ],
    hints: [
      "Use the 'less' or 'more' command on the file path /etc/hosts.",
      "Try running: less /etc/hosts"
    ],
    verify: (fs, session, history) => {
      const ranPager = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return (parts.includes('less') || parts.includes('more')) && parts.some(arg => arg.includes('hosts'));
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
verify: (fs, session, history) => {
      const dirNode = fs.getNodeByPath('/home/learner', 'my code');
      const dirExists = dirNode && dirNode.type === 'dir';
      const fileNode = fs.getNodeByPath('/home/learner/my code', 'my task');
      const fileExists = fileNode && fileNode.type === 'file';

      return {
        success: dirExists && fileExists,
        checks: [
          { id: 'dir_with_space_exists', passed: !!dirExists },
          { id: 'file_with_space_exists', passed: !!fileExists }
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
verify: (fs, session, history) => {
      const usedEchoRedirect = history.some(cmd => {
        return cmd.includes('echo') && cmd.includes('>');
      });
      const node = fs.getNodeByPath('/home/learner', 'status.txt');
      const fileCreated = node && node.type === 'file';
      const contentCorrect = fileCreated && node.content.trim() === 'System Online';

      return {
        success: usedEchoRedirect && fileCreated && contentCorrect,
        checks: [
          { id: 'used_echo_redirect', passed: usedEchoRedirect },
          { id: 'file_created', passed: fileCreated },
          { id: 'content_correct', passed: contentCorrect }
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
verify: (fs, session, history) => {
      const usedAppend = history.some(cmd => {
        return cmd.includes('echo') && cmd.includes('>>');
      });
      const usedCat = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('cat');
      });
      const node = fs.getNodeByPath('/home/learner', 'status.txt');
      if (!node || node.type !== 'file') {
        return { success: false, checks: [{ id: 'used_append', passed: usedAppend }, { id: 'has_first_line', passed: false }, { id: 'has_second_line', passed: false }, { id: 'used_cat', passed: usedCat }] };
      }
      
      const lines = node.content.trim().split('\n');
      const hasFirstLine = lines[0] && lines[0].trim() === 'System Online';
      const hasSecondLine = lines[1] && lines[1].trim() === 'All Checks Green';

      return {
        success: usedAppend && hasFirstLine && hasSecondLine && usedCat,
        checks: [
          { id: 'used_append', passed: usedAppend },
          { id: 'has_first_line', passed: hasFirstLine },
          { id: 'has_second_line', passed: hasSecondLine },
          { id: 'used_cat', passed: usedCat }
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
    instructions: 'Let\'s rename a file. Change the name of `status.txt` in your home folder to `system.log` using the `mv` command.',
    commandHelp: [
      { cmd: 'mv status.txt system.log', desc: 'Rename status.txt to system.log' }
    ],
    objectives: [
      { id: 'used_mv', text: 'Use the "mv" command to rename' },
      { id: 'old_removed', text: 'Original status.txt is deleted/renamed' },
      { id: 'new_created', text: 'New file system.log exists with correct contents' }
    ],
        hints: [
      "Think about which command renames or moves a file.",
      "Use the 'mv' command to rename status.txt to system.log.",
      "Try running: mv status.txt system.log"
    ],
verify: (fs, session, history) => {
      const usedMv = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('mv');
      });
      const oldNode = fs.getNodeByPath('/home/learner', 'status.txt');
      const newNode = fs.getNodeByPath('/home/learner', 'system.log');
      
      const oldRemoved = !oldNode;
      const newCreated = newNode && newNode.type === 'file' && newNode.content.includes('System Online');

      return {
        success: usedMv && oldRemoved && newCreated,
        checks: [
          { id: 'used_mv', passed: usedMv },
          { id: 'old_removed', passed: oldRemoved },
          { id: 'new_created', passed: !!newCreated }
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
verify: (fs, session, history) => {
      const usedWildcard = history.some(cmd => {
        return cmd.includes('cat') && cmd.includes('*');
      });
      const node = fs.getNodeByPath('/home/learner', 'combined.log');
      const exists = node && node.type === 'file';
      const correctContent = exists && 
        node.content.includes('Log entry 1') && 
        node.content.includes('Log entry 2') && 
        node.content.includes('Log entry 3');

      return {
        success: usedWildcard && exists && correctContent,
        checks: [
          { id: 'used_wildcard', passed: usedWildcard },
          { id: 'combined_exists', passed: !!exists },
          { id: 'content_combined', passed: !!correctContent }
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
verify: (fs, session, history) => {
      const usedRm = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('rm') && (parts.includes('-r') || parts.includes('-rf') || parts.includes('-fr') || parts.some(p => p.startsWith('-') && p.includes('r')));
      });
      const node = fs.getNodeByPath('/home/learner', 'downloads');
      const downloadsRemoved = !node;

      return {
        success: usedRm && downloadsRemoved,
        checks: [
          { id: 'used_rm', passed: usedRm },
          { id: 'downloads_removed', passed: downloadsRemoved }
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
verify: (fs, session, history) => {
      const usedPipe = history.some(cmd => {
        return cmd.includes('|') && cmd.includes('wc');
      });
      const node = fs.getNodeByPath('/home/learner', 'file_count.txt');
      const exists = node && node.type === 'file';
      let correct = false;
      if (exists) {
        const val = node.content.trim();
        correct = /^\d+$/.test(val) && parseInt(val) > 0;
      }

      return {
        success: usedPipe && exists && correct,
        checks: [
          { id: 'used_pipe', passed: usedPipe },
          { id: 'file_count_exists', passed: !!exists },
          { id: 'count_is_correct', passed: correct }
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
verify: (fs, session, history) => {
      const usedSort = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('sort');
      });
      const usedUniq = history.some(cmd => {
        return cmd.includes('|') && cmd.includes('uniq');
      });
      const node = fs.getNodeByPath('/home/learner', 'unique_names.txt');
      const exists = node && node.type === 'file';
      const correct = exists && node.content.trim() === 'Alice\nBob\nCharlie\nDavid';

      return {
        success: usedSort && usedUniq && exists && correct,
        checks: [
          { id: 'used_sort', passed: usedSort },
          { id: 'used_uniq', passed: usedUniq },
          { id: 'unique_names_exists', passed: !!exists },
          { id: 'sorted_and_unique', passed: !!correct }
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
verify: (fs, session, history) => {
      const usedGrep = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('grep');
      });
      const node = fs.getNodeByPath('/home/learner', 'errors.log');
      const exists = node && node.type === 'file';
      const lines = exists ? node.content.split('\n').filter(Boolean) : [];
      const onlyErrors = exists && lines.length > 0 && lines.every(line => line.includes('[ERROR]'));

      return {
        success: usedGrep && exists && onlyErrors,
        checks: [
          { id: 'used_grep', passed: usedGrep },
          { id: 'errors_log_exists', passed: !!exists },
          { id: 'only_errors', passed: onlyErrors }
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
verify: (fs, session, history) => {
      const usedChmod = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('chmod');
      });
      const node = fs.getNodeByPath('/home/learner', 'deploy.sh');
      const scriptExists = node && node.type === 'file';
      const isExecutable = scriptExists && node.permissions === '755';

      return {
        success: usedChmod && isExecutable,
        checks: [
          { id: 'used_chmod', passed: usedChmod },
          { id: 'is_executable', passed: !!isExecutable }
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
verify: (fs, session, history) => {
      const usedMv = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('mv');
      });
      const usedLsA = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('ls') && (parts.includes('-a') || parts.includes('-la') || parts.includes('-al') || parts.some(p => p.startsWith('-') && p.includes('a')));
      });
      const node = fs.getNodeByPath('/home/learner', '.config_names');
      const oldNode = fs.getNodeByPath('/home/learner', 'unique_names.txt');
      const exists = node && node.type === 'file';
      const oldRemoved = !oldNode;

      return {
        success: usedMv && exists && oldRemoved && usedLsA,
        checks: [
          { id: 'used_mv', passed: usedMv },
          { id: 'hidden_file_exists', passed: !!exists },
          { id: 'old_file_removed', passed: oldRemoved },
          { id: 'used_ls_a', passed: usedLsA }
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
verify: (fs, session, history) => {
      const usedChown = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('chown');
      });
      const node = fs.getNodeByPath('/home/learner', 'reports.csv');
      const ownerChanged = node && node.owner === 'root';
      
      return {
        success: usedChown && ownerChanged,
        checks: [
          { id: 'used_chown', passed: usedChown },
          { id: 'owner_changed', passed: !!ownerChanged }
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
      { cmd: 'sudo command', desc: 'Run a command with administrator/superuser privileges' },
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
verify: (fs, session, history) => {
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
verify: (fs, session, history) => {
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
verify: (fs, session, history) => {
      const ranDfH = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('df') && (parts.includes('-h') || parts.includes('--human-readable'));
      });
      return {
        success: ranDfH,
        checks: [
          { id: 'ran_df_h', passed: ranDfH }
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
verify: (fs, session, history) => {
      const ranDu = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const isDu = parts.includes('du');
        const hasS = parts.some(p => p.startsWith('-') && !p.startsWith('--') && p.includes('s')) || parts.includes('--summary');
        const hasH = parts.some(p => p.startsWith('-') && !p.startsWith('--') && p.includes('h')) || parts.includes('--human-readable');
        return isDu && hasS && hasH;
      });
      return {
        success: ranDu,
        checks: [
          { id: 'ran_du', passed: ranDu }
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
verify: (fs, session, history) => {
      const ranFree = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('free') && (parts.includes('-h') || parts.includes('-m') || parts.includes('--human') || parts.includes('--mega'));
      });
      return {
        success: ranFree,
        checks: [
          { id: 'ran_free', passed: ranFree }
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
verify: (fs, session, history) => {
      const ranUptime = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('uptime');
      });
      const ranUname = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('uname') && (parts.includes('-a') || parts.includes('--all'));
      });
      return {
        success: ranUptime && ranUname,
        checks: [
          { id: 'ran_uptime', passed: ranUptime },
          { id: 'ran_uname', passed: ranUname }
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
verify: (fs, session, history) => {
      const ranPs = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('ps') && (parts.includes('aux') || parts.includes('-ef'));
      });
      return {
        success: ranPs,
        checks: [
          { id: 'ran_ps_aux', passed: ranPs }
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
verify: (fs, session, history) => {
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
verify: (fs, session, history) => {
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
verify: (fs, session, history) => {
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
verify: (fs, session, history) => {
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
verify: (fs, session, history) => {
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
      const usedCurl = history.some(cmd => cmd.includes('curl'));
      const fileNode = fs.getNodeByPath('/home/learner', 'update.sh');
      const downloadSaved = fileNode && fileNode.type === 'file' && fileNode.content.includes('echo "Updating BashQuest"');
      return {
        success: usedCurl && downloadSaved,
        checks: [
          { id: 'used_curl', passed: usedCurl },
          { id: 'download_saved', passed: !!downloadSaved }
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
verify: (fs, session, history) => {
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
verify: (fs, session, history) => {
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
verify: (fs, session, history) => {
      const ranManGrep = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('man') && parts.includes('grep');
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
verify: (fs, session, history) => {
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
    verify: (fs, session, history) => {
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
verify: (fs, session, history) => {
      const openedNano = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('nano') && parts.some(p => p.includes('server.conf'));
      });
      const node = fs.getNodeByPath('/home/learner', 'server.conf');
      const portConfigured = node && node.type === 'file' && node.content.includes('port=8080');
      return {
        success: openedNano && portConfigured,
        checks: [
          { id: 'opened_nano', passed: openedNano },
          { id: 'port_configured', passed: !!portConfigured }
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
verify: (fs, session, history) => {
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
        success: exists && hasContent && isExec && executed,
        checks: [
          { id: 'script_exists', passed: !!exists },
          { id: 'script_content', passed: !!hasContent },
          { id: 'script_executable', passed: !!isExec },
          { id: 'script_executed', passed: executed }
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
verify: (fs, session, history) => {
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
        success: exists && hasContent && isExec && executed,
        checks: [
          { id: 'greet_exists', passed: !!exists },
          { id: 'greet_content', passed: !!hasContent },
          { id: 'greet_executable', passed: !!isExec },
          { id: 'greet_executed', passed: executed }
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
verify: (fs, session, history) => {
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
        success: exists && logicOK && isExec && executed,
        checks: [
          { id: 'check_exists', passed: !!exists },
          { id: 'check_logic', passed: !!logicOK },
          { id: 'check_executable', passed: !!isExec },
          { id: 'check_executed', passed: executed }
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
verify: (fs, session, history) => {
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
        success: exists && logicOK && executed && backupDirOK,
        checks: [
          { id: 'backup_script_exists', passed: !!exists },
          { id: 'backup_logic', passed: !!logicOK },
          { id: 'backup_executed', passed: executed },
          { id: 'backup_dir_ok', passed: !!backupDirOK }
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
      { cmd: 'func_name() { ... }', desc: 'Define a function in bash' }
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
    verify: (fs, session, history) => {
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
        success: exists && hasFunction && isExec && executed,
        checks: [
          { id: 'script_exists', passed: !!exists },
          { id: 'has_function', passed: !!hasFunction },
          { id: 'script_executed', passed: isExec && executed }
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
        success: fileCreated && hasCronString && (ranCrontabInstall || installed) && ranCrontabL,
        checks: [
          { id: 'cron_file_created', passed: !!(fileCreated && hasCronString) },
          { id: 'cron_installed', passed: !!(ranCrontabInstall || installed) },
          { id: 'cron_listed', passed: ranCrontabL }
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
verify: (fs, session, history) => {
      const usedSed = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('sed') && parts.includes('-i');
      });
      const node = fs.getNodeByPath('/home/learner', 'server.conf');
      const portChanged = node && node.type === 'file' && node.content.includes('port=8080') && !node.content.includes('port=80\n');

      return {
        success: usedSed && portChanged,
        checks: [
          { id: 'used_sed', passed: usedSed },
          { id: 'port_changed', passed: !!portChanged }
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
verify: (fs, session, history) => {
      const usedAwk = history.some(cmd => {
        const clean = cmd.replace(/\s+/g, '');
        return cmd.includes('awk') && (clean.includes('-F:') || clean.includes('-F":"') || clean.includes("-F':'") || clean.includes("-F\\:"));
      });
      const node = fs.getNodeByPath('/home/learner', 'shadow_users.txt');
      const exists = node && node.type === 'file';
      const correctUsers = exists && node.content.includes('root') && node.content.includes('learner');

      return {
        success: usedAwk && exists && correctUsers,
        checks: [
          { id: 'used_awk', passed: usedAwk },
          { id: 'created_shadow_users', passed: !!exists },
          { id: 'correct_shadow_users', passed: !!correctUsers }
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
verify: (fs, session, history) => {
      const usedCut = history.some(cmd => {
        const clean = cmd.replace(/\s+/g, '');
        return cmd.includes('cut') && (clean.includes('-d,') || clean.includes("-d','") || clean.includes('-d","'));
      });
      const usedTr = history.some(cmd => {
        return cmd.includes('tr') && (
          (cmd.includes('a-z') && cmd.includes('A-Z')) || 
          (cmd.includes('[:lower:]') && cmd.includes('[:upper:]'))
        );
      });
      
      const node = fs.getNodeByPath('/home/learner', 'upper_reports.txt');
      const exists = node && node.type === 'file';
      const contentUpper = exists && node.content.trim() === 'DATE\nJUL 1\nJUL 2\nJUL 3';

      return {
        success: usedCut && usedTr && exists && contentUpper,
        checks: [
          { id: 'used_cut', passed: usedCut },
          { id: 'used_tr', passed: usedTr },
          { id: 'upper_reports_exists', passed: !!exists },
          { id: 'content_uppercase', passed: !!contentUpper }
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
verify: (fs, session, history) => {
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
    moduleId: 'env_admin',
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
verify: (fs, session, history) => {
      const usedTarC = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const tarIdx = parts.indexOf('tar');
        if (tarIdx === -1) return false;
        const options = parts.slice(tarIdx + 1);
        return options.some(p => (p.includes('c') && p.includes('z')) || (p.startsWith('--') && (p.includes('create') || p.includes('gzip'))));
      });
      const node = fs.getNodeByPath('/home/learner', 'logs.tar.gz');
      const exists = node && node.type === 'file';

      return {
        success: usedTarC && exists,
        checks: [
          { id: 'used_tar_c', passed: usedTarC },
          { id: 'archive_exists', passed: !!exists }
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
verify: (fs, session, history) => {
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
    verify: (fs, session, history) => {
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
    verify: (fs, session, history) => {
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
    id: 49,
    moduleId: 'adv_fs',
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
      const usedLnS = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('ln') && (parts.includes('-s') || parts.includes('--symbolic') || parts.some(p => p.startsWith('-') && p.includes('s')));
      });
      const node = fs.getNodeByPath('/home/learner', 'app_link.log');
      const isLink = node && node.type === 'link';
      const targetCorrect = isLink && (node.target === '/home/learner/logs/app.log' || node.target === 'logs/app.log');

      return {
        success: usedLnS && isLink && targetCorrect,
        checks: [
          { id: 'used_ln_s', passed: usedLnS },
          { id: 'link_created', passed: !!(isLink && targetCorrect) }
        ]
      };
    }
  },
  {
    id: 50,
    moduleId: 'adv_fs',
    title: 'Processing Search Results (xargs)',
    xp: 290,
    badge: 'Advanced-Ops',
    description: 'Imagine you ran a search that returned 100 temporary files, and now you want to delete all of them. The search output is just a list of text names on your screen—how do you feed those names as direct inputs to the delete command? In Linux, we bridge this gap using `xargs`.\n\n- The `xargs` (execute arguments) command takes lines of standard input (like the file list from `find`) and feeds them one by one as arguments to another command.\n- E.g., `find . -name "*.tmp" | xargs rm` finds all temporary files and removes them all in a single sweep.',
    instructions: 'Let\'s process some search results. Find all `.log` files in `/home/learner/logs` using `find logs -name "*.log"`, and pipe them into `xargs wc -l` to count all of their lines collectively.',
    commandHelp: [
      { cmd: 'find path -name "pattern" | xargs command', desc: 'Pass search results to command' }
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
verify: (fs, session, history) => {
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
    verify: (fs, session, history) => {
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
    verify: (fs, session, history) => {
      const ranSu = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('su') && parts.includes('deployer');
      });
      const ranWhoami = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts.includes('whoami');
      });
      const switched = session.env.USER === 'deployer';
      return {
        success: ranSu && ranWhoami && switched,
        checks: [
          { id: 'switched_user', passed: ranSu && switched },
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
    verify: (fs, session, history) => {
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
    verify: (fs, session, history) => {
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
  }
];
