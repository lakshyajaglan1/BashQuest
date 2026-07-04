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
  { id: 'adv_fs', title: '15. Advanced Filesystem' }
];

export const lessons = [
  {
    id: 1,
    moduleId: 'basics',
    title: 'Who Am I and Where Am I?',
    xp: 100,
    badge: 'Explorer',
    description: 'Welcome to BashQuest! In the Linux shell, you interact with the operating system using commands. Before we start making changes, we need to answer two fundamental questions: "Who am I logged in as?" and "Where in the filesystem am I right now?"\n\n- The `whoami` command prints the username of the active session.\n- The `pwd` (print working directory) command outputs the absolute path of your current folder.',
    instructions: 'Run `whoami` to check your username, and then run `pwd` to print your current location in the filesystem.',
    commandHelp: [
      { cmd: 'whoami', desc: 'Prints active username' },
      { cmd: 'pwd', desc: 'Prints current working directory' }
    ],
    objectives: [
      { id: 'ran_whoami', text: 'Run the "whoami" command' },
      { id: 'ran_pwd', text: 'Run the "pwd" command' }
    ],
    verify: (fs, session, history) => {
      const ranWhoami = history.some(cmd => cmd.trim() === 'whoami');
      const ranPwd = history.some(cmd => cmd.trim() === 'pwd');
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
    description: 'To browse the filesystem, we use two crucial commands:\n\n- `ls`: Lists files and folders in the current folder.\n- `cd <path>`: Changes the current working directory to the target path.\n\nPaths can be **absolute** (starting from the root `/`, like `/var/log`) or **relative** (relative to your current position). You can also use `..` to go up one folder.',
    instructions: 'Navigate into the `/var/log` directory using `cd /var/log`, and then list its contents using the `ls` command to find the log files.',
    commandHelp: [
      { cmd: 'ls', desc: 'Lists files in the current directory' },
      { cmd: 'cd /var/log', desc: 'Change directory to /var/log' }
    ],
    objectives: [
      { id: 'in_var_log', text: 'Change directory to /var/log' },
      { id: 'ran_ls', text: 'Run the "ls" command in /var/log' }
    ],
    verify: (fs, session, history) => {
      const inVarLog = session.currentPath === '/var/log';
      const ranLs = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'ls' && session.currentPath === '/var/log';
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
    description: 'Folders (directories) help organize files in Linux. We create them using the `mkdir` (make directory) command.\n\nFor example, `mkdir code` creates a folder named "code" in the current directory. You can use relative or absolute paths to specify where the folder should go.',
    instructions: 'Go back to your home directory (`cd ~` or `cd /home/learner`) and create a new directory named `projects` inside `/home/learner`.',
    commandHelp: [
      { cmd: 'cd ~', desc: 'Go back to home directory' },
      { cmd: 'mkdir projects', desc: 'Create projects folder' }
    ],
    objectives: [
      { id: 'in_home', text: 'Be in your home folder (/home/learner)' },
      { id: 'used_mkdir', text: 'Use the "mkdir" command' },
      { id: 'dir_exists', text: 'Create a directory named "projects"' }
    ],
    verify: (fs, session, history) => {
      const inHome = session.currentPath === '/home/learner';
      const usedMkdir = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'mkdir';
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
    description: 'When creating nested folders (folders inside folders), the `mkdir` command fails by default if parent directories do not exist. We can override this behavior by using options (or switches).\n\nThe option `-p` (or `--parents`) creates parent directories as needed. For example, `mkdir -p workspace/src/utils` creates `workspace`, `workspace/src`, and `workspace/src/utils` all at once.',
    instructions: 'Create a nested folder path `workspace/src/utils` in your home directory `/home/learner` using the parents switch `-p` (i.e. `mkdir -p workspace/src/utils`).',
    commandHelp: [
      { cmd: 'mkdir -p path', desc: 'Create nested directories and parent directories' }
    ],
    objectives: [
      { id: 'nested_dir_exists', text: 'Create nested directory workspace/src/utils' },
      { id: 'used_p_switch', text: 'Use the -p or --parents switch in mkdir' }
    ],
    verify: (fs, session, history) => {
      const node = fs.getNodeByPath('/home/learner/workspace/src', 'utils');
      const nestedDirExists = node && node.type === 'dir';
      const usedPSwitch = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'mkdir' && (parts.includes('-p') || parts.includes('--parents') || parts.some(p => p.startsWith('-') && p.includes('p')));
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
    moduleId: 'manipulation',
    title: 'Creating Empty Files',
    xp: 150,
    badge: 'Creator',
    description: 'We can create new empty files or update the modification time of existing files using the `touch` command.\n\nE.g. `touch draft.txt` creates an empty file named `draft.txt` in the current folder. Let\'s place a file inside our new `projects` directory.',
    instructions: 'Create an empty file named `task.txt` inside the `projects` directory you created. (You can navigate into `projects` first or do it via `touch projects/task.txt`).',
    commandHelp: [
      { cmd: 'cd projects', desc: 'Enter the projects folder' },
      { cmd: 'touch task.txt', desc: 'Create file task.txt' }
    ],
    objectives: [
      { id: 'used_touch', text: 'Use the "touch" command' },
      { id: 'file_exists', text: 'Create file "task.txt" inside "projects"' }
    ],
    verify: (fs, session, history) => {
      const usedTouch = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'touch';
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
    id: 6,
    moduleId: 'manipulation',
    title: 'Reading File Contents',
    xp: 150,
    badge: 'Reader',
    description: 'In Linux, almost everything is represented as a file. To view the text inside a file quickly, we use the `cat` (concatenate) command.\n\nFor example, running `cat notes.txt` prints its content on the screen. Let\'s look at some system configurations.',
    instructions: 'Display the contents of the global hosts file located at `/etc/hosts` by running the command `cat /etc/hosts`.',
    commandHelp: [
      { cmd: 'cat /etc/hosts', desc: 'Print hosts file content' }
    ],
    objectives: [
      { id: 'cat_hosts', text: 'Run the "cat" command on /etc/hosts' }
    ],
    verify: (fs, session, history) => {
      const catHosts = history.some(cmd => {
        const cleaned = cmd.trim().replace(/\s+/g, ' ');
        return cleaned === 'cat /etc/hosts' || 
               (cleaned === 'cat hosts' && session.currentPath === '/etc');
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
    id: 7,
    moduleId: 'manipulation',
    title: 'Handling Spaces in File Names',
    xp: 170,
    badge: 'Quoter',
    description: 'Linux uses spaces to separate commands and arguments. If you create a file or directory with a space in the name (e.g. `mkdir my folder`), Linux interprets it as two separate arguments, creating "my" and "folder".\n\nTo handle spaces in names, we must escape them by enclosing the name in double quotes `"my folder"`, single quotes `\'my folder\'`, or using a backslash escape `my\\ folder`.',
    instructions: 'Create a directory named `"my code"` (with space) in your home directory, and inside it create an empty file named `"my task"` (also with space).',
    commandHelp: [
      { cmd: 'mkdir "my code"', desc: 'Create a folder with a space in the name' },
      { cmd: 'touch "my code/my task"', desc: 'Create a file with a space in the name' }
    ],
    objectives: [
      { id: 'dir_with_space_exists', text: 'Create directory "my code"' },
      { id: 'file_with_space_exists', text: 'Create file "my task" inside "my code"' }
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
    id: 8,
    moduleId: 'manipulation',
    title: 'Writing & Overwriting Files',
    xp: 200,
    badge: 'Writer',
    description: 'To write text to files, we can combine `echo` with **output redirection**.\n\n- `echo "Hello"` prints Hello on screen.\n- The `>` symbol redirects standard output into a file, **overwriting** its existing content.\n\nE.g. `echo "Hi" > greeting.txt` writes "Hi" to `greeting.txt`, creating it if it doesn\'t exist.',
    instructions: 'Write the text "System Online" to a file named `status.txt` in your home folder `/home/learner`. Ensure it matches exactly.',
    commandHelp: [
      { cmd: 'echo "System Online" > status.txt', desc: 'Create status.txt with text' }
    ],
    objectives: [
      { id: 'used_echo_redirect', text: 'Use echo with > redirection' },
      { id: 'file_created', text: 'Create "status.txt" in home directory' },
      { id: 'content_correct', text: 'File content is exactly "System Online"' }
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
    id: 9,
    moduleId: 'manipulation',
    title: 'Appending to Files',
    xp: 200,
    badge: 'Journalist',
    description: 'While `>` overwrites a file, the double redirection operator `>>` **appends** text to the end of the file without deleting existing contents.\n\nE.g. `echo "New Line" >> logs.txt` adds "New Line" to the bottom of the file.',
    instructions: 'Append the text "All Checks Green" to the file `status.txt` inside your home folder `/home/learner`. Verify the result using `cat`.',
    commandHelp: [
      { cmd: 'echo "All Checks Green" >> status.txt', desc: 'Append text to status.txt' }
    ],
    objectives: [
      { id: 'used_append', text: 'Use echo with >> append redirection' },
      { id: 'has_first_line', text: 'First line is still "System Online"' },
      { id: 'has_second_line', text: 'Second line has "All Checks Green"' },
      { id: 'used_cat', text: 'Verify the result using the "cat" command' }
    ],
    verify: (fs, session, history) => {
      const usedAppend = history.some(cmd => {
        return cmd.includes('echo') && cmd.includes('>>');
      });
      const usedCat = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'cat';
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
    id: 10,
    moduleId: 'manipulation',
    title: 'Copying & Moving Files',
    xp: 200,
    badge: 'Archivist',
    description: 'We organize our workspace by copying and moving files around:\n\n- `cp <source> <destination>` copies files.\n- `mv <source> <destination>` moves or **renames** files.\n\nFor example, `mv old.txt new.txt` renames a file. Let\'s back up our status log.',
    instructions: 'Rename the file `status.txt` in your home folder to `system.log` using the `mv` command.',
    commandHelp: [
      { cmd: 'mv status.txt system.log', desc: 'Rename status.txt to system.log' }
    ],
    objectives: [
      { id: 'used_mv', text: 'Use the "mv" command to rename' },
      { id: 'old_removed', text: 'Original status.txt is deleted/renamed' },
      { id: 'new_created', text: 'New file system.log exists with correct contents' }
    ],
    verify: (fs, session, history) => {
      const usedMv = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'mv';
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
    id: 11,
    moduleId: 'manipulation',
    title: 'Wildcards & Multi-File Operations',
    xp: 220,
    badge: 'Wildcard',
    description: 'Linux supports **wildcards** to perform actions on multiple files at once:\n\n- `*` matches zero or more characters. E.g. `cat log_*.txt` displays all files starting with log_ and ending with .txt.\n- `?` matches exactly one character. E.g. `cat log_?.txt` displays log_1.txt, but not log_12.txt.\n\nLet\'s combine wildcards with redirection to consolidate logs.',
    instructions: 'Concatenate the contents of all files starting with `log_` in your home directory into a single file named `combined.log` using redirection (i.e. `cat log_* > combined.log`).',
    commandHelp: [
      { cmd: 'cat log_* > combined.log', desc: 'Combine all matching files into combined.log' }
    ],
    objectives: [
      { id: 'used_wildcard', text: 'Use cat with wildcard pattern (log_*)' },
      { id: 'combined_exists', text: 'Create "combined.log" in home directory' },
      { id: 'content_combined', text: 'Verify it has logs from log_1, log_2, and log_3' }
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
    id: 12,
    moduleId: 'manipulation',
    title: 'Removing Files & Folders',
    xp: 200,
    badge: 'Cleaner',
    description: 'To clean up files and folders, we use the `rm` (remove) command:\n\n- `rm file.txt` deletes a file.\n- `rm -r folder/` deletes a directory and all of its contents **recursively**.\n\nBe extremely careful, because removing files in Linux is permanent — there is no recycle bin!',
    instructions: 'Delete the `downloads` directory inside `/home/learner`. Since it is a directory, make sure to use recursive option `rm -r downloads` or `rm -rf downloads`.',
    commandHelp: [
      { cmd: 'rm -r downloads', desc: 'Delete folder recursively' }
    ],
    objectives: [
      { id: 'used_rm', text: 'Use the "rm" command with -r flag' },
      { id: 'downloads_removed', text: 'Directory /home/learner/downloads is deleted' }
    ],
    verify: (fs, session, history) => {
      const usedRm = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'rm' && (parts.includes('-r') || parts.includes('-rf') || parts.includes('-fr') || parts.some(p => p.startsWith('-') && p.includes('r')));
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
    id: 13,
    moduleId: 'plumbing',
    title: 'Introduction to Pipes & wc',
    xp: 230,
    badge: 'Plumber',
    description: 'One of the most powerful features of Linux is command piping. A **pipe** (`|`) redirects the output (**stdout**) of one command directly into the input (**stdin**) of another.\n\nFor example, `ls | wc -l` takes the file list produced by `ls` and feeds it to `wc -l` (word count - lines), which counts the number of files without needing a temporary file.',
    instructions: 'Count the files and directories in `/home/learner` using a pipe (`ls | wc -l`), and redirect this line count into a new file named `file_count.txt` (using `ls | wc -l > file_count.txt`).',
    commandHelp: [
      { cmd: 'ls | wc -l', desc: 'Count files and folders in current directory' },
      { cmd: 'ls | wc -l > file_count.txt', desc: 'Write files count to file_count.txt' }
    ],
    objectives: [
      { id: 'used_pipe', text: 'Use pipe (|) to connect ls with wc' },
      { id: 'file_count_exists', text: 'Create file "file_count.txt" in home directory' },
      { id: 'count_is_correct', text: 'Verify file contains the correct numeric file count' }
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
    id: 14,
    moduleId: 'plumbing',
    title: 'Sorting and Finding Uniques',
    xp: 240,
    badge: 'Organizer',
    description: 'The `sort` command rearranges lines of text alphabetically. The `uniq` command filters out duplicate lines, but **only if they are adjacent**.\n\nTo find true unique lines in an unsorted list, you must sort the file first, and then pipe it into uniq! E.g. `sort raw.txt | uniq`.',
    instructions: 'The file `names.txt` in your home folder contains duplicate names. Use a pipeline of `sort` and `uniq` to output only unique sorted names, and write the output into `unique_names.txt` (i.e. `sort names.txt | uniq > unique_names.txt`).',
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
    verify: (fs, session, history) => {
      const usedSort = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'sort';
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
    id: 15,
    moduleId: 'plumbing',
    title: 'Filtering with grep',
    xp: 240,
    badge: 'Filterer',
    description: 'The `grep` command searches files (or piped text) for lines containing a specific keyword or pattern.\n\nFor example, `grep "ERROR" logs.txt` outputs only lines in logs.txt that contain the word "ERROR". Or we can pipe output: `cat logs.txt | grep "ERROR"`.',
    instructions: 'Search the file `logs.txt` for all lines containing `[ERROR]` and save them into a new file named `errors.log` (i.e. `grep "[ERROR]" logs.txt > errors.log`).',
    commandHelp: [
      { cmd: 'grep "[ERROR]" logs.txt', desc: 'Search logs.txt for lines containing [ERROR]' },
      { cmd: 'grep "[ERROR]" logs.txt > errors.log', desc: 'Save matching errors into errors.log' }
    ],
    objectives: [
      { id: 'used_grep', text: 'Use the "grep" command to search logs.txt' },
      { id: 'errors_log_exists', text: 'Create file "errors.log" in home directory' },
      { id: 'only_errors', text: 'Verify errors.log contains only [ERROR] entries' }
    ],
    verify: (fs, session, history) => {
      const usedGrep = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'grep';
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
    id: 16,
    moduleId: 'advanced',
    title: 'Changing File Permissions',
    xp: 250,
    badge: 'Sysadmin',
    description: 'Linux secures files through permissions. Every file has owner, group, and other permissions, often set using numbers (octal representation):\n\n- `7` = read + write + execute (`rwx`)\n- `6` = read + write (`rw-`)\n- `5` = read + execute (`r-x`)\n- `4` = read (`r--`)\n\nWe set permissions with `chmod <octal> <file>`. For example, `chmod 755 script.sh` makes a script executable by the owner and readable by others.\n\nA file named `deploy.sh` already exists in your home folder, but currently has restrictive permissions (`644` — read/write for owner only). You need to make it executable.',
    instructions: 'The file `deploy.sh` already exists in `/home/learner` with default permissions (644). Use `chmod 755 deploy.sh` to make it executable by the owner and readable/executable by others.',
    commandHelp: [
      { cmd: 'chmod 755 deploy.sh', desc: 'Set executable permissions' },
      { cmd: 'ls -l deploy.sh', desc: 'Check current file permissions' }
    ],
    objectives: [
      { id: 'used_chmod', text: 'Run the "chmod" command on deploy.sh' },
      { id: 'is_executable', text: 'Set permissions of deploy.sh to 755' }
    ],
    verify: (fs, session, history) => {
      const usedChmod = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'chmod';
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
    id: 17,
    moduleId: 'advanced',
    title: 'Hidden Files & Configurations',
    xp: 220,
    badge: 'Ghost',
    description: 'In Linux, any file or directory whose name begins with a dot (`.`) is treated as **hidden**.\n\nThese are typically used for user-specific configurations (like `.bashrc` or `.config`). Standard directory listings (`ls`) do not display them. You must pass the `-a` (show all) switch to see them: `ls -a`.',
    instructions: 'Rename the file `unique_names.txt` in your home folder to a hidden file named `.config_names` (using `mv unique_names.txt .config_names`). Check its presence using `ls -a`.',
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
    verify: (fs, session, history) => {
      const usedMv = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'mv';
      });
      const usedLsA = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'ls' && (parts.includes('-a') || parts.includes('-la') || parts.includes('-al') || parts.some(p => p.startsWith('-') && p.includes('a')));
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
    id: 18,
    moduleId: 'system',
    title: 'Superuser Privileges (sudo)',
    xp: 260,
    badge: 'Guardian',
    description: 'Linux systems have an administrator account traditionally named `root`, which has unrestricted access. To protect the system, users run normal sessions and use `sudo` ("switch user and do") to execute individual commands as the administrator.\n\nIf you try to read restricted files (like the password hashes file `/etc/shadow`) with normal user permissions, you will receive `Permission denied`. Prefixing the command with `sudo` bypasses this protection.',
    instructions: 'Try running `cat /etc/shadow` and observe the permission error. Then run it using administrator privileges: `sudo cat /etc/shadow`.',
    commandHelp: [
      { cmd: 'sudo command', desc: 'Run a command with administrator/superuser privileges' },
      { cmd: 'cat /etc/shadow', desc: 'Read password hashes database (restricted)' }
    ],
    objectives: [
      { id: 'tried_without_sudo', text: 'Try "cat /etc/shadow" and observe permission error' },
      { id: 'ran_sudo_cat', text: 'Run "sudo cat /etc/shadow" successfully' }
    ],
    verify: (fs, session, history) => {
      const triedWithoutSudo = history.some(cmd => {
        const cleaned = cmd.trim().replace(/\s+/g, ' ');
        return cleaned === 'cat /etc/shadow' || 
               (cleaned === 'cat shadow' && session.currentPath === '/etc');
      });
      const ranSudoCat = history.some(cmd => {
        const cleaned = cmd.trim().replace(/\s+/g, ' ');
        return cleaned === 'sudo cat /etc/shadow' || 
               (cleaned === 'sudo cat shadow' && session.currentPath === '/etc');
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
    id: 19,
    moduleId: 'system',
    title: 'Package Management (apt)',
    xp: 280,
    badge: 'Guru',
    description: 'Linux distributions use package managers to download, install, update, and remove applications from secure repositories.\n\nOn Ubuntu/Debian-based systems, `apt` (Advanced Packaging Tool) is used. Since installing software modifies system files, it requires superuser privileges: `sudo apt install <package_name>`.',
    instructions: 'Install the directory visualization tool `tree` by running `sudo apt install tree`. After installation completes, run the `tree` command to view your files.',
    commandHelp: [
      { cmd: 'sudo apt install tree', desc: 'Install the tree package' },
      { cmd: 'tree', desc: 'Run tree to visualize directories' }
    ],
    objectives: [
      { id: 'installed_tree', text: 'Install package "tree" using apt install' },
      { id: 'ran_tree', text: 'Run the "tree" command to visualize directories' }
    ],
    verify: (fs, session, history) => {
      const installedTree = session.installedPackages.has('tree');
      const ranTree = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'tree';
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
    id: 20,
    moduleId: 'resources',
    title: 'Checking Disk Space (df)',
    xp: 150,
    badge: 'Spacer',
    description: 'When running out of storage on your laptop, the first tool you should reach for is `df` (disk free). It displays the amount of disk space available on filesystems.\n\nRunning `df -h` (human-readable) shows storage in gigabytes (G) and megabytes (M) instead of block counts, making it much easier to see which partition (like `/` or `/home`) is full.',
    instructions: 'Run `df -h` to check the disk space usage on your system\'s partitions in human-readable format.',
    commandHelp: [
      { cmd: 'df -h', desc: 'Show free disk space on filesystems in human-readable format' }
    ],
    objectives: [
      { id: 'ran_df_h', text: 'Run the "df -h" command' }
    ],
    verify: (fs, session, history) => {
      const ranDfH = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'df' && (parts.includes('-h') || parts.includes('--human-readable'));
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
    id: 21,
    moduleId: 'resources',
    title: 'Finding Directory Sizes (du)',
    xp: 150,
    badge: 'Weigher',
    description: 'While `df` tells you which disk is full, `du` (disk usage) tells you which directories and files are taking up that space.\n\n- `du <directory>` lists sizes of all subdirectories.\n- `du -sh <directory>` (summary, human-readable) outputs a single size total for that directory.\n- `du -sh *` inside a directory lists the sizes of each file and folder in the current directory.',
    instructions: 'Determine the size of the home directory by running the summary, human-readable command: `du -sh /home/learner`.',
    commandHelp: [
      { cmd: 'du -sh /home/learner', desc: 'Display total size of the learner home directory' }
    ],
    objectives: [
      { id: 'ran_du', text: 'Run "du" with options -s and -h' }
    ],
    verify: (fs, session, history) => {
      const ranDu = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        const isDu = parts[0] === 'du';
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
    id: 22,
    moduleId: 'resources',
    title: 'Checking Memory Usage (free)',
    xp: 150,
    badge: 'RAM-Watcher',
    description: 'If your laptop is running sluggishly, you might be running out of random access memory (RAM). The `free` command displays the total amount of free and used physical memory and swap space in the system.\n\n- `free -m` displays memory in megabytes.\n- `free -h` displays memory in human-readable sizes (GB/MB).',
    instructions: 'Display system memory usage in human-readable format using `free -h`.',
    commandHelp: [
      { cmd: 'free -h', desc: 'Display RAM usage in human-readable format' }
    ],
    objectives: [
      { id: 'ran_free', text: 'Run "free" with the -h or -m option' }
    ],
    verify: (fs, session, history) => {
      const ranFree = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'free' && (parts.includes('-h') || parts.includes('-m') || parts.includes('--human') || parts.includes('--mega'));
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
    id: 23,
    moduleId: 'resources',
    title: 'System Uptime & Kernel Details',
    xp: 160,
    badge: 'Inspector',
    description: 'To check how long your computer has been running since boot, you can use the `uptime` command. It also lists the number of users and the load average (over 1, 5, and 15 minutes).\n\nAdditionally, to see system specifications and the Linux kernel version, you can run `uname -a` (unix name).',
    instructions: 'Run `uptime` to check system run statistics, and then run `uname -a` to print the system kernel version and platform details.',
    commandHelp: [
      { cmd: 'uptime', desc: 'Show how long the system has been running' },
      { cmd: 'uname -a', desc: 'Print all system and kernel information' }
    ],
    objectives: [
      { id: 'ran_uptime', text: 'Run the "uptime" command' },
      { id: 'ran_uname', text: 'Run the "uname -a" command' }
    ],
    verify: (fs, session, history) => {
      const ranUptime = history.some(cmd => cmd.trim() === 'uptime');
      const ranUname = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'uname' && (parts.includes('-a') || parts.includes('--all'));
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
    id: 24,
    moduleId: 'processes',
    title: 'Listing Running Processes (ps)',
    xp: 180,
    badge: 'Tracker',
    description: 'In Linux, every running program is called a **process**. Each process has a unique process ID (PID).\n\nThe `ps` command is used to list running processes.\n\n- `ps` alone shows processes in your current terminal session.\n- `ps aux` lists ALL running processes on the system, regardless of who owns them or what terminal they run on. (The `a` stands for all users, `u` for user-oriented format, and `x` for processes not attached to a terminal).',
    instructions: 'View all running processes on the laptop by executing `ps aux`. Take note of the columns: USER, PID, %CPU, %MEM, and COMMAND.',
    commandHelp: [
      { cmd: 'ps aux', desc: 'List all running processes on the system' }
    ],
    objectives: [
      { id: 'ran_ps_aux', text: 'Run the "ps aux" command' }
    ],
    verify: (fs, session, history) => {
      const ranPs = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'ps' && (parts.includes('aux') || parts.includes('-ef'));
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
    id: 25,
    moduleId: 'processes',
    title: 'Interactive Process Monitor (top)',
    xp: 180,
    badge: 'Monitor',
    description: 'While `ps` gives a single static snapshot, the `top` command (and its modern, colorful alternative `htop`) provides a real-time, dynamic view of a running system.\n\nIt updates every few seconds to show you which processes are consuming the most CPU, memory, and system load at this exact moment.',
    instructions: 'Launch the real-time process monitor by running the `top` command.',
    commandHelp: [
      { cmd: 'top', desc: 'Launch interactive process monitor' }
    ],
    objectives: [
      { id: 'ran_top', text: 'Run the "top" command' }
    ],
    verify: (fs, session, history) => {
      const ranTop = history.some(cmd => cmd.trim() === 'top' || cmd.trim() === 'htop');
      return {
        success: ranTop,
        checks: [
          { id: 'ran_top', passed: ranTop }
        ]
      };
    }
  },
  {
    id: 26,
    moduleId: 'processes',
    title: 'Stopping Rogue Processes (kill)',
    xp: 200,
    badge: 'Terminator',
    description: 'If an application freezes, slows down your laptop, or goes rogue, you can force it to stop using the `kill` command followed by the process ID (PID).\n\nE.g. `kill 1234` sends a signal asking the process with PID 1234 to shut down safely. If it refuses, `kill -9 1234` forces it to terminate immediately.\n\nThere is currently a runaway background script named `rogue_process` running on this system, consuming 99% CPU. Its Process ID is `9999`. Let\'s stop it!',
    instructions: 'Terminate the rogue process with PID `9999` using the `kill` command (i.e. `kill 9999`).',
    commandHelp: [
      { cmd: 'kill 9999', desc: 'Terminate process with PID 9999' }
    ],
    objectives: [
      { id: 'process_killed', text: 'Stop the rogue process with PID 9999' }
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
    id: 27,
    moduleId: 'processes',
    title: 'Running Jobs in the Background',
    xp: 220,
    badge: 'Juggler',
    description: 'If a command takes a long time to complete (like a backup or download), you don\'t want it blocking your terminal. You can run it in the background by appending an ampersand `&` to the end of the command.\n\n- `sleep 100 &` runs sleep in the background.\n- The `jobs` command lists all your current background tasks.\n- The `fg` command (foreground) pulls a background job back to the active screen (e.g. `fg`).',
    instructions: 'Start a sleep command for 100 seconds in the background (`sleep 100 &`), then run the `jobs` command to list active jobs. Finally, bring it to the foreground using `fg`.',
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
    verify: (fs, session, history) => {
      const ranBgJob = history.some(cmd => /sleep\s+\d+\s+&/.test(cmd));
      const ranJobs = history.some(cmd => cmd.trim() === 'jobs');
      const ranFg = history.some(cmd => cmd.trim() === 'fg' || cmd.trim().startsWith('fg %'));
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
    id: 28,
    moduleId: 'networking',
    title: 'Testing Connectivity (ping)',
    xp: 180,
    badge: 'Pinger',
    description: 'When your internet goes down or a site won\'t load, `ping` is the go-to tool. It sends small packets of data (ICMP Echo Requests) to an IP address or domain name and measures how long it takes to get a response.\n\nBy default, `ping` runs forever on Linux. Use option `-c <count>` to specify the number of packets to send (e.g. `ping -c 3 google.com`).',
    instructions: 'Test your connection to `google.com` by sending exactly 3 pings: `ping -c 3 google.com`.',
    commandHelp: [
      { cmd: 'ping -c 3 google.com', desc: 'Send 3 echo packets to google.com' }
    ],
    objectives: [
      { id: 'ran_ping_c3', text: 'Ping google.com exactly 3 times using -c flag' }
    ],
    verify: (fs, session, history) => {
      const ranPing = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'ping' && (parts.includes('-c') && parts[parts.indexOf('-c') + 1] === '3');
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
    id: 29,
    moduleId: 'networking',
    title: 'Network Interfaces & Local IP',
    xp: 180,
    badge: 'Netadmin',
    description: 'To find your laptop\'s IP address on the local network (Wi-Fi or Ethernet), you can check your network interfaces using the `ip` utility.\n\nRunning `ip addr` (or `ip a`) lists all network interfaces (like `lo` for loopback, `eth0` or `wlan0` for wireless) along with their assigned IP addresses.',
    instructions: 'Check your network interfaces and IP addresses by running `ip addr`.',
    commandHelp: [
      { cmd: 'ip addr', desc: 'Show network interface details and IP addresses' }
    ],
    objectives: [
      { id: 'ran_ip_addr', text: 'Run the "ip addr" or "ip a" command' }
    ],
    verify: (fs, session, history) => {
      const ranIp = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'ip' && (parts.includes('addr') || parts.includes('a') || parts.includes('address'));
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
    id: 30,
    moduleId: 'networking',
    title: 'Downloading Web Files (curl)',
    xp: 200,
    badge: 'Downloader',
    description: 'In the terminal, we can download files from servers using `curl` (Client URL). It can fetch webpages, download source codes, or test API endpoints.\n\n- `curl <url>` prints the URL\'s content directly on the screen.\n- Redirecting the output (`curl <url> > file.sh`) or using `-o <file>` saves the downloaded content to a file.',
    instructions: 'Download the script from `http://api.bashquest.com/update.sh` and save it locally as a file named `update.sh` (e.g. `curl http://api.bashquest.com/update.sh > update.sh`).',
    commandHelp: [
      { cmd: 'curl http://api.bashquest.com/update.sh > update.sh', desc: 'Download webpage content and save it to update.sh' }
    ],
    objectives: [
      { id: 'used_curl', text: 'Use the "curl" command' },
      { id: 'download_saved', text: 'Save downloaded script as "update.sh" in home folder' }
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
    id: 31,
    moduleId: 'searching',
    title: 'Finding Files by Name (find)',
    xp: 220,
    badge: 'Scout',
    description: 'Laptops store thousands of files. The `find` command is an incredibly powerful search engine that queries the directory tree for files matching specific criteria (like name, type, size, or modification date).\n\nFormat: `find <starting_directory> -name "<pattern>"`\n\nE.g. `find . -name "*.txt"` searches the current directory recursively for all files ending in `.txt`.',
    instructions: 'Search the current directory recursively for all files with a `.log` extension by running the command `find . -name "*.log"`.',
    commandHelp: [
      { cmd: 'find . -name "*.log"', desc: 'Find all files ending in .log in current folder and subfolders' }
    ],
    objectives: [
      { id: 'ran_find', text: 'Run the "find" command with -name option' }
    ],
    verify: (fs, session, history) => {
      const ranFind = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'find' && parts.includes('-name');
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
    id: 32,
    moduleId: 'searching',
    title: 'Checking Command History',
    xp: 180,
    badge: 'Historian',
    description: 'Don\'t waste time typing long commands again. Linux maintains a log of recently run commands, which you can view using the `history` command.\n\n- Type `history` to view your numbered history list.\n- Type `!number` to quickly re-run a specific command from that list (e.g. `!5` runs command #5).',
    instructions: 'Display the list of your past commands by running the command `history`.',
    commandHelp: [
      { cmd: 'history', desc: 'Display a list of recently executed commands' }
    ],
    objectives: [
      { id: 'ran_history', text: 'Run the "history" command' }
    ],
    verify: (fs, session, history) => {
      const ranHistory = history.some(cmd => cmd.trim() === 'history');
      return {
        success: ranHistory,
        checks: [
          { id: 'ran_history', passed: ranHistory }
        ]
      };
    }
  },
  {
    id: 33,
    moduleId: 'services',
    title: 'Controlling Services (systemctl)',
    xp: 240,
    badge: 'Service-Master',
    description: 'Modern Linux systems use `systemd` to manage background services (like database servers, web servers, or bluetooth daemons). We control these services using the `systemctl` command.\n\n- `systemctl status <service>` checks if a service is running.\n- `sudo systemctl start <service>` starts it.\n- `sudo systemctl stop <service>` stops it.\n\nSince managing services changes system states, starting and stopping them requires `sudo` privileges.',
    instructions: 'A web server daemon `apache2` is currently installed but stopped. Use `sudo systemctl start apache2` to start the service, and verify its state with `systemctl status apache2`.',
    commandHelp: [
      { cmd: 'systemctl status apache2', desc: 'Check status of apache2 web service' },
      { cmd: 'sudo systemctl start apache2', desc: 'Start the apache2 web service' }
    ],
    objectives: [
      { id: 'started_service', text: 'Start the "apache2" web service' },
      { id: 'checked_status', text: 'Check the status of "apache2"' }
    ],
    verify: (fs, session, history) => {
      const startedService = session.services.apache2 === 'active';
      const checkedStatus = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'systemctl' && parts[1] === 'status' && parts[2] === 'apache2';
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
    id: 34,
    moduleId: 'editing',
    title: 'Editing Config Files (nano)',
    xp: 250,
    badge: 'Editor',
    description: 'To edit system configurations on your laptop, you need a terminal text editor. `nano` is the easiest and most common command-line text editor.\n\nWhen you run `nano <filename>`, it opens the file in a text-editing workspace directly inside your terminal.\n\n- To exit the editor, press `Ctrl+X`.\n- To save (write out) changes, press `Ctrl+O`.',
    instructions: 'Open the config file `server.conf` in your home folder using `nano server.conf`. Edit its contents so that it contains the line `port=8080`, then save and exit nano.',
    commandHelp: [
      { cmd: 'nano server.conf', desc: 'Open server.conf in the Nano text editor' }
    ],
    objectives: [
      { id: 'opened_nano', text: 'Open the file "server.conf" in Nano' },
      { id: 'port_configured', text: 'Add configuration line "port=8080" and save' }
    ],
    verify: (fs, session, history) => {
      const openedNano = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'nano' && parts[1] === 'server.conf';
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
    id: 35,
    moduleId: 'scripting',
    title: 'Writing Your First Bash Script',
    xp: 250,
    badge: 'Script-Kiddie',
    description: 'Automation is a superpower in Linux. Instead of typing commands one-by-one, you can write them inside a file called a shell script, and execute them all at once!\n\nEvery script starts with a shebang `#!/bin/bash` on the first line to tell Linux which interpreter to use.\n\nAfter writing the script, you must grant it execute permission with `chmod +x <filename>` (or `chmod 755`) and run it with `./<filename>`.',
    instructions: 'Create a script file named `hello.sh` in `/home/learner` using `touch hello.sh` or `nano hello.sh`. Add `#!/bin/bash` on the first line and `echo "Hello, BashQuest User!"` on the second line. Make it executable with `chmod 755 hello.sh` and run it using `./hello.sh`.',
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
    verify: (fs, session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'hello.sh');
      const exists = node && node.type === 'file';
      const hasContent = exists && node.content.includes('#!/bin/bash') && node.content.includes('Hello, BashQuest User!');
      
      const digits = exists ? String(node.permissions).split('').map(Number) : [];
      const isExec = exists && digits.some(d => d % 2 !== 0);

      const executed = history.some(cmd => cmd.trim() === './hello.sh' || cmd.trim() === 'bash hello.sh');

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
    id: 36,
    moduleId: 'scripting',
    title: 'Variables & Arguments ($1)',
    xp: 250,
    badge: 'Arg-Master',
    description: 'Scripts can be dynamic using command-line arguments. In bash, the special variables `$1`, `$2`, etc., hold the values passed to the script when calling it.\n\nFor example, if you run `./greet.sh Alice`, then inside the script `$1` holds the string "Alice". `$#` holds the total count of arguments passed to the script.',
    instructions: 'Create a script named `greet.sh` inside your home directory. Write `#!/bin/bash` and `echo "Hello, $1!"` on the next line. Run `chmod 755 greet.sh` and execute `./greet.sh Alice` to verify it prints "Hello, Alice!".',
    commandHelp: [
      { cmd: './greet.sh Alice', desc: 'Execute script with argument "Alice"' }
    ],
    objectives: [
      { id: 'greet_exists', text: 'Create script file "greet.sh"' },
      { id: 'greet_content', text: 'Use $1 inside greet.sh' },
      { id: 'greet_executable', text: 'Make greet.sh executable' },
      { id: 'greet_executed', text: 'Run the script with "Alice" argument' }
    ],
    verify: (fs, session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'greet.sh');
      const exists = node && node.type === 'file';
      const hasContent = exists && node.content.includes('#!/bin/bash') && node.content.includes('$1');
      
      const digits = exists ? String(node.permissions).split('').map(Number) : [];
      const isExec = exists && digits.some(d => d % 2 !== 0);

      const executed = history.some(cmd => cmd.trim() === './greet.sh Alice' || cmd.trim() === 'bash greet.sh Alice');

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
    id: 37,
    moduleId: 'scripting',
    title: 'Conditional Logic (if/else)',
    xp: 270,
    badge: 'Logician',
    description: 'We can check conditions in bash scripts using `if` blocks. The syntax is:\n\n```bash\nif [ -f "$1" ]; then\n  echo "File exists"\nelse\n  echo "File missing"\nfi\n```\n\n- The `-f` flag checks if a path is a regular file.\n- The `-d` flag checks if a path is a directory.',
    instructions: 'Create a script named `check_file.sh` in `/home/learner` that checks if the file provided as `$1` exists. It must have shebang, `if [ -f "$1" ]; then echo "Exists" else echo "Missing" fi` structure. Make it executable and run `./check_file.sh names.txt`.',
    commandHelp: [
      { cmd: 'if [ -f file ]; then ...', desc: 'Syntax for file existence checks' }
    ],
    objectives: [
      { id: 'check_exists', text: 'Create script "check_file.sh"' },
      { id: 'check_logic', text: 'Implement -f checks inside script' },
      { id: 'check_executable', text: 'Make script executable' },
      { id: 'check_executed', text: 'Run the script with "names.txt"' }
    ],
    verify: (fs, session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'check_file.sh');
      const exists = node && node.type === 'file';
      const logicOK = exists && node.content.includes('-f') && node.content.includes('if') && node.content.includes('fi');
      
      const digits = exists ? String(node.permissions).split('').map(Number) : [];
      const isExec = exists && digits.some(d => d % 2 !== 0);

      const executed = history.some(cmd => cmd.trim() === './check_file.sh names.txt' || cmd.trim() === 'bash check_file.sh names.txt');

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
    id: 38,
    moduleId: 'scripting',
    title: 'Automating with Loops',
    xp: 280,
    badge: 'Loop-King',
    description: 'Loops let us repeat actions across multiple items. A `for` loop in bash follows this structure:\n\n```bash\nfor file in *.txt; do\n  echo "Processing $file"\ndone\n```\n\nThis is useful to automate backups, bulk edits, or multi-file renaming.',
    instructions: 'Create a script named `backup_logs.sh` in home. Write a `for` loop that iterates over all files matching `*.log` in the current directory, copying each one to a directory named `backup`. Ensure the script creates the `backup` directory first (`mkdir -p backup`). Make it executable and run it.',
    commandHelp: [
      { cmd: 'for x in pattern; do ...', desc: 'For loop automation syntax' }
    ],
    objectives: [
      { id: 'backup_script_exists', text: 'Create script "backup_logs.sh"' },
      { id: 'backup_logic', text: 'Implement a for loop with cp' },
      { id: 'backup_executed', text: 'Run the backup_logs.sh script' },
      { id: 'backup_dir_ok', text: 'Directory "backup/" holds copies' }
    ],
    verify: (fs, session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'backup_logs.sh');
      const exists = node && node.type === 'file';
      const logicOK = exists && node.content.includes('for') && node.content.includes('cp') && node.content.includes('done');
      
      const executed = history.some(cmd => cmd.trim() === './backup_logs.sh' || cmd.trim() === 'bash backup_logs.sh');
      
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
    id: 39,
    moduleId: 'processing',
    title: 'Stream Editing with sed',
    xp: 260,
    badge: 'Sed-Master',
    description: '`sed` (stream editor) performs search and replace on text files. The replacement pattern syntax is `s/pattern/replacement/flags`.\n\nFor example, `sed "s/red/blue/g" colors.txt` outputs colors.txt with all occurrences of "red" changed to "blue".\n\nAdding the `-i` flag edits the target file **in-place** (saving the changes back into the original file).',
    instructions: 'Modify the file `server.conf` in your home folder. Change the port parameter `port=80` to `port=8080` using `sed` with the in-place `-i` flag: `sed -i "s/port=80/port=8080/g" server.conf`.',
    commandHelp: [
      { cmd: 'sed -i "s/old/new/g" file', desc: 'Perform in-place text replacement in a file' }
    ],
    objectives: [
      { id: 'used_sed', text: 'Use the "sed" command with -i flag' },
      { id: 'port_changed', text: 'Set port configuration to port=8080 in server.conf' }
    ],
    verify: (fs, session, history) => {
      const usedSed = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'sed' && parts.includes('-i');
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
    id: 40,
    moduleId: 'processing',
    title: 'Data Extraction with awk',
    xp: 280,
    badge: 'Awk-Wizard',
    description: '`awk` is a scanning and processing language. It extracts columns (or fields) of structured text. By default, columns are separated by whitespace.\n\n- `$1` refers to field 1, `$2` to field 2, and `$0` to the entire line.\n- Use option `-F` to specify a custom delimiter (e.g. `-F:` for colons, `-F,` for commas).\n\nFor example, `awk -F: \'{print $1}\' /etc/passwd` lists only the first column (usernames) from /etc/passwd.',
    instructions: 'Extract all usernames (the first column) from the `/etc/shadow` file using `awk` with a colon `:` delimiter, and redirect the output to `shadow_users.txt` (i.e. `sudo awk -F: \'{print $1}\' /etc/shadow > shadow_users.txt`).',
    commandHelp: [
      { cmd: "awk -F: '{print $1}' file", desc: 'Print first field of colon-delimited file' }
    ],
    objectives: [
      { id: 'used_awk', text: 'Use "awk" with field separator flag -F' },
      { id: 'created_shadow_users', text: 'Output names to "shadow_users.txt"' },
      { id: 'correct_shadow_users', text: 'Check shadow_users.txt has root and learner' }
    ],
    verify: (fs, session, history) => {
      const usedAwk = history.some(cmd => {
        return cmd.includes('awk') && (cmd.includes('-F:') || cmd.includes('-F ":"') || cmd.includes("-F ':'"));
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
    id: 41,
    moduleId: 'processing',
    title: 'Translating & Cutting Data',
    xp: 260,
    badge: 'Parser',
    description: '`cut` cuts sections of text. `-d` specifies delimiter, `-f` field selection, and `-c` character index.\n\n`tr` (translate) swaps or deletes characters from standard input. E.g. `echo "foo" | tr "o" "a"` prints "faa", and `tr "a-z" "A-Z"` converts lowercase text to uppercase.',
    instructions: 'Extract the first column of the file `reports.csv` using `cut -d, -f1 reports.csv`, translate all text to UPPERCASE using `tr "a-z" "A-Z"`, and write the output to a new file named `upper_reports.txt`.',
    commandHelp: [
      { cmd: 'cut -d, -f1 file | tr "a-z" "A-Z"', desc: 'Pipe cut field into translation' }
    ],
    objectives: [
      { id: 'used_cut', text: 'Use "cut" with comma delimiter' },
      { id: 'used_tr', text: 'Translate characters to uppercase with "tr"' },
      { id: 'upper_reports_exists', text: 'Create file "upper_reports.txt"' },
      { id: 'content_uppercase', text: 'Verify text is UPPERCASE' }
    ],
    verify: (fs, session, history) => {
      const usedCut = history.some(cmd => cmd.includes('cut') && (cmd.includes('-d,') || cmd.includes("-d ','") || cmd.includes('-d ","')));
      const usedTr = history.some(cmd => cmd.includes('tr') && cmd.includes('a-z') && cmd.includes('A-Z'));
      
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
    id: 42,
    moduleId: 'env_admin',
    title: 'Managing Environment Variables',
    xp: 250,
    badge: 'Env-Architect',
    description: 'Environment variables affect the configuration of running processes. We can view them with the `env` command.\n\nTo define a variable that is passed to child shell processes, we use the `export` command:\n\n`export APP_ENV=production`\n\nWe reference variables using a dollar sign: `echo $APP_ENV`.',
    instructions: 'Define and export an environment variable named `APP_ENV` with value `production` by running `export APP_ENV=production`. Verify it is set by echoing it: `echo $APP_ENV`.',
    commandHelp: [
      { cmd: 'export VAR=val', desc: 'Define environment variable' },
      { cmd: 'echo $VAR', desc: 'Print variable value' }
    ],
    objectives: [
      { id: 'exported_env', text: 'Run the "export" command' },
      { id: 'env_correct', text: 'Set APP_ENV env variable to "production"' },
      { id: 'echoed_env', text: 'Print variable using "echo $APP_ENV"' }
    ],
    verify: (fs, session, history) => {
      const exportedEnv = history.some(cmd => cmd.startsWith('export'));
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
    id: 43,
    moduleId: 'env_admin',
    title: 'Archives & Compression (tar)',
    xp: 280,
    badge: 'Packer',
    description: 'We bundle files together for storage or backups using `tar` (tape archive).\n\n- `-c` creates an archive.\n- `-x` extracts an archive.\n- `-z` compresses using gzip.\n- `-v` enables verbose (listing files processed).\n- `-f` specifies archive filename.\n\nE.g. `tar -czvf backup.tar.gz folder/` packages "folder/" into a zipped tarball.',
    instructions: 'Archive and compress the `logs` folder inside `/home/learner` into a file named `logs.tar.gz` using `tar -czvf logs.tar.gz logs`.',
    commandHelp: [
      { cmd: 'tar -czvf archive.tar.gz folder', desc: 'Create compressed tar archive' }
    ],
    objectives: [
      { id: 'used_tar_c', text: 'Use "tar" command with -c (create) and -z (gzip) flags' },
      { id: 'archive_exists', text: 'Create "logs.tar.gz" in home directory' }
    ],
    verify: (fs, session, history) => {
      const usedTarC = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'tar' && parts.some(p => p.startsWith('-') && p.includes('c') && p.includes('z'));
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
    id: 44,
    moduleId: 'adv_fs',
    title: 'Creating Links (ln -s)',
    xp: 270,
    badge: 'Linker',
    description: 'Links are pointers to other files. There are two types:\n\n- **Hard Link**: A direct reference to file inodes on disk. If original is deleted, link still works.\n- **Symbolic Link (Soft Link)**: A shortcut to a file path (like Windows shortcuts). If target is deleted, link breaks. Created using `ln -s target link_name`.',
    instructions: 'Create a symbolic link named `app_link.log` in `/home/learner` that points to the target file `logs/app.log` (i.e. `ln -s logs/app.log app_link.log`).',
    commandHelp: [
      { cmd: 'ln -s target link_name', desc: 'Create symbolic link' }
    ],
    objectives: [
      { id: 'used_ln_s', text: 'Use "ln" with symbolic flag -s' },
      { id: 'link_created', text: 'Create link "app_link.log" pointing to target logs/app.log' }
    ],
    verify: (fs, session, history) => {
      const usedLnS = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'ln' && (parts.includes('-s') || parts.includes('--symbolic') || parts.some(p => p.startsWith('-') && p.includes('s')));
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
    id: 45,
    moduleId: 'adv_fs',
    title: 'Processing Search Results (xargs)',
    xp: 290,
    badge: 'Advanced-Ops',
    description: 'We can run a command on multiple search results by using `xargs` (execute arguments).\n\n`xargs` takes standard input lines (like file lists from `find`) and feeds them as arguments to another command.\n\nFor example, `find . -name "*.tmp" | xargs rm` finds all temporary files and removes them all at once.',
    instructions: 'Find all files in `/home/learner/logs` ending with `.log` using `find logs -name "*.log"`, and pipe them into `xargs wc -l` to count their lines collectively (i.e. `find logs -name "*.log" | xargs wc -l`).',
    commandHelp: [
      { cmd: 'find path -name "pattern" | xargs command', desc: 'Pass search results to command' }
    ],
    objectives: [
      { id: 'used_find', text: 'Run the "find" command on logs folder' },
      { id: 'used_xargs', text: 'Pipe results into "xargs"' },
      { id: 'ran_wc_l', text: 'Run "wc -l" via xargs pipeline' }
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
    id: 46,
    moduleId: 'searching',
    title: 'Consulting Manual Pages',
    xp: 200,
    badge: 'Scholar',
    description: 'Linux commands have extensive documentation called manual pages (or "man pages"). You can access them using the `man` command followed by the command name.\n\nE.g. `man ls` opens the manual page for `ls`. Inside a real man page, you navigate with the arrow keys and press `q` to quit.',
    instructions: 'Open the manual page for the `grep` command to check its options: `man grep`.',
    commandHelp: [
      { cmd: 'man grep', desc: 'Display manual page for grep' }
    ],
    objectives: [
      { id: 'ran_man_grep', text: 'Run the "man grep" command' }
    ],
    verify: (fs, session, history) => {
      const ranManGrep = history.some(cmd => {
        const parts = cmd.trim().split(/\s+/);
        return parts[0] === 'man' && parts[1] === 'grep';
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
    id: 47,
    moduleId: 'advanced',
    title: 'Changing File Ownership',
    xp: 250,
    badge: 'Owner',
    description: 'In Linux, every file and folder belongs to a specific owner and group. We change them using the `chown` (change owner) command.\n\nSince modifying ownership affects system security, this command requires administrator privileges: `sudo chown <owner>:<group> <file>`.',
    instructions: 'Change the owner of `/home/learner/reports.csv` to `root` using superuser privileges: `sudo chown root reports.csv`.',
    commandHelp: [
      { cmd: 'sudo chown root reports.csv', desc: 'Change owner of reports.csv to root' }
    ],
    objectives: [
      { id: 'used_chown', text: 'Run the "chown" command with sudo' },
      { id: 'owner_changed', text: 'Set owner of reports.csv to root' }
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
    id: 48,
    moduleId: 'env_admin',
    title: 'Inspecting the Environment',
    xp: 200,
    badge: 'Env-Watcher',
    description: 'The `env` command prints a list of all currently active environment variables in your shell session. This is useful for checking system configurations, paths, or active user details.',
    instructions: 'List all environment variables in your active shell by running the `env` command.',
    commandHelp: [
      { cmd: 'env', desc: 'List active environment variables' }
    ],
    objectives: [
      { id: 'ran_env', text: 'Run the "env" command' }
    ],
    verify: (fs, session, history) => {
      const ranEnv = history.some(cmd => cmd.trim() === 'env');
      return {
        success: ranEnv,
        checks: [
          { id: 'ran_env', passed: ranEnv }
        ]
      };
    }
  },
  {
    id: 49,
    moduleId: 'basics',
    title: 'Clearing the Screen',
    xp: 100,
    badge: 'Neat-Freak',
    description: 'When your terminal screen gets cluttered with command outputs, you can clean it up using the `clear` command. This scrolls the screen down to present a clean prompt at the top.',
    instructions: 'Clear the terminal output screen by running the `clear` command.',
    commandHelp: [
      { cmd: 'clear', desc: 'Clear the terminal screen' }
    ],
    objectives: [
      { id: 'ran_clear', text: 'Run the "clear" command' }
    ],
    verify: (fs, session, history) => {
      const ranClear = history.some(cmd => cmd.trim() === 'clear');
      return {
        success: ranClear,
        checks: [
          { id: 'ran_clear', passed: ranClear }
        ]
      };
    }
  },
  {
    id: 50,
    moduleId: 'basics',
    title: 'Finding Shell Help',
    xp: 100,
    badge: 'Helpful',
    description: 'If you are ever unsure which commands are supported in this emulator, you can use the `help` command. It lists all available utilities along with support details for redirection and pipes.',
    instructions: 'List all available shell commands in this terminal simulator by running the `help` command.',
    commandHelp: [
      { cmd: 'help', desc: 'List available commands' }
    ],
    objectives: [
      { id: 'ran_help', text: 'Run the "help" command' }
    ],
    verify: (fs, session, history) => {
      const ranHelp = history.some(cmd => cmd.trim() === 'help');
      return {
        success: ranHelp,
        checks: [
          { id: 'ran_help', passed: ranHelp }
        ]
      };
    }
  }
];
