// BashQuest Progressive Linux Lessons & Verifications

export const modules = [
  { id: 'basics', title: '1. Filesystem Basics' },
  { id: 'manipulation', title: '2. File Manipulation' },
  { id: 'advanced', title: '3. Redirection & Security' }
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
      { id: 'dir_exists', text: 'Create a directory named "projects"' }
    ],
    verify: (fs, session, history) => {
      const inHome = session.currentPath === '/home/learner';
      const node = fs.getNodeByPath('/home/learner', 'projects');
      const dirExists = node && node.type === 'dir';

      return {
        success: inHome && dirExists,
        checks: [
          { id: 'in_home', passed: inHome },
          { id: 'dir_exists', passed: dirExists }
        ]
      };
    }
  },
  {
    id: 4,
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
      { id: 'file_exists', text: 'Create file "task.txt" inside "projects"' }
    ],
    verify: (fs, session, history) => {
      const node = fs.getNodeByPath('/home/learner/projects', 'task.txt');
      const fileExists = node && node.type === 'file';

      return {
        success: fileExists,
        checks: [
          { id: 'file_exists', passed: fileExists }
        ]
      };
    }
  },
  {
    id: 5,
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
    id: 6,
    moduleId: 'manipulation',
    title: 'Writing & Overwriting files',
    xp: 200,
    badge: 'Writer',
    description: 'To write text to files, we can combine `echo` with **output redirection**.\n\n- `echo "Hello"` prints Hello on screen.\n- The `>` symbol redirects standard output into a file, **overwriting** its existing content.\n\nE.g. `echo "Hi" > greeting.txt` writes "Hi" to `greeting.txt`, creating it if it doesn\'t exist.',
    instructions: 'Write the text "System Online" to a file named `status.txt` in your home folder `/home/learner`. Ensure it matches exactly.',
    commandHelp: [
      { cmd: 'echo "System Online" > status.txt', desc: 'Create status.txt with text' }
    ],
    objectives: [
      { id: 'file_created', text: 'Create "status.txt" in home directory' },
      { id: 'content_correct', text: 'File content is exactly "System Online"' }
    ],
    verify: (fs, session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'status.txt');
      const fileCreated = node && node.type === 'file';
      const contentCorrect = fileCreated && node.content.trim() === 'System Online';

      return {
        success: fileCreated && contentCorrect,
        checks: [
          { id: 'file_created', passed: fileCreated },
          { id: 'content_correct', passed: contentCorrect }
        ]
      };
    }
  },
  {
    id: 7,
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
      { id: 'has_first_line', text: 'First line is still "System Online"' },
      { id: 'has_second_line', text: 'Second line has "All Checks Green"' }
    ],
    verify: (fs, session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'status.txt');
      if (!node || node.type !== 'file') {
        return { success: false, checks: [{ id: 'has_first_line', passed: false }, { id: 'has_second_line', passed: false }] };
      }
      
      const lines = node.content.trim().split('\n');
      const hasFirstLine = lines[0] && lines[0].trim() === 'System Online';
      const hasSecondLine = lines[1] && lines[1].trim() === 'All Checks Green';

      return {
        success: hasFirstLine && hasSecondLine,
        checks: [
          { id: 'has_first_line', passed: hasFirstLine },
          { id: 'has_second_line', passed: hasSecondLine }
        ]
      };
    }
  },
  {
    id: 8,
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
      { id: 'old_removed', text: 'Original status.txt is deleted/renamed' },
      { id: 'new_created', text: 'New file system.log exists with correct contents' }
    ],
    verify: (fs, session, history) => {
      const oldNode = fs.getNodeByPath('/home/learner', 'status.txt');
      const newNode = fs.getNodeByPath('/home/learner', 'system.log');
      
      const oldRemoved = !oldNode;
      const newCreated = newNode && newNode.type === 'file' && newNode.content.includes('System Online');

      return {
        success: oldRemoved && newCreated,
        checks: [
          { id: 'old_removed', passed: oldRemoved },
          { id: 'new_created', passed: !!newCreated }
        ]
      };
    }
  },
  {
    id: 9,
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
      { id: 'downloads_removed', text: 'Directory /home/learner/downloads is deleted' }
    ],
    verify: (fs, session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'downloads');
      const downloadsRemoved = !node;

      return {
        success: downloadsRemoved,
        checks: [
          { id: 'downloads_removed', passed: downloadsRemoved }
        ]
      };
    }
  },
  {
    id: 10,
    moduleId: 'advanced',
    title: 'Changing File Permissions',
    xp: 250,
    badge: 'Sysadmin',
    description: 'Linux secures files through permissions. Every file has owner, group, and other permissions, often set using numbers (octal representation):\n\n- `7` = read + write + execute (`rwx`)\n- `6` = read + write (`rw-`)\n- `5` = read + execute (`r-x`)\n- `4` = read (`r--`)\n\nWe set permissions with `chmod <octal> <file>`. For example, `chmod 755 script.sh` makes a script executable by the owner and readable by others.',
    instructions: 'Create a new script file named `run.sh` in `/home/learner` (`touch run.sh`), and set its permissions to `755` so that it is executable.',
    commandHelp: [
      { cmd: 'touch run.sh', desc: 'Create script file' },
      { cmd: 'chmod 755 run.sh', desc: 'Set executable permissions' }
    ],
    objectives: [
      { id: 'script_exists', text: 'Create script "run.sh" in home folder' },
      { id: 'is_executable', text: 'Set permissions of run.sh to 755' }
    ],
    verify: (fs, session, history) => {
      const node = fs.getNodeByPath('/home/learner', 'run.sh');
      const scriptExists = node && node.type === 'file';
      const isExecutable = scriptExists && node.permissions === '755';

      return {
        success: scriptExists && isExecutable,
        checks: [
          { id: 'script_exists', passed: !!scriptExists },
          { id: 'is_executable', passed: !!isExecutable }
        ]
      };
    }
  }
];
