// BashQuest Progressive Linux Lessons & Verifications

export const modules = [
  { id: 'basics', title: '1. Filesystem Basics' },
  { id: 'manipulation', title: '2. File Manipulation' },
  { id: 'plumbing', title: '3. Pipes & Filtering' },
  { id: 'advanced', title: '4. Redirection & Security' },
  { id: 'system', title: '5. Superuser & Packages' }
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
  }
];
