// Editorial learning material: browser exercises are complemented by real-system labs.
export const chapters = [
  {
    id: 'basics', title: 'Understand your Linux system', stage: 'Foundation',
    summary: 'Build a mental model of the kernel, distribution, terminal, shell, and filesystem before memorizing commands.',
    concepts: [
      'Linux is the kernel: it manages hardware, memory, processes, and access to devices. A distribution combines that kernel with tools, libraries, a package manager, and often a desktop. Ubuntu, Debian, and Fedora share concepts but differ in package names and administration defaults.',
      'The terminal is the interface that carries input and output. Bash is a shell running inside it: it interprets commands and starts programs. A prompt ending in $ usually indicates a regular user; # commonly indicates root. Neither symbol belongs in the command you type.',
      'A path beginning with / is absolute; other paths are relative to your working directory. / is the root directory, while /root is the root user’s home. ~ expands to your home. . means here and .. means the parent. Linux names are case-sensitive, and a leading dot hides a file from plain ls.',
      '/home stores user data, /etc system configuration, /var changing data such as logs, /usr installed tools, /tmp temporary files, and /proc a live view of kernel and process information. Use man command, command --help, and apropos keyword to investigate unfamiliar tools.'
    ],
    example: 'whoami\npwd\nls -la\ncd /etc\npwd\ncd ~',
    explain: 'Identify the user, inspect your starting directory including hidden files, visit system configuration, then return home. cd changes the shell’s working directory; it does not move files.',
    pitfall: 'Do not assume the simulator is a running Linux kernel. Network replies, services, packages, devices, and users here are modeled. Real-system labs below teach the transition.',
    question: 'You are in /home/learner. Which path names /etc independently of your current directory?', options: ['etc', '/etc', './etc'], answer: 1, rationale: 'The leading slash makes /etc absolute. etc and ./etc both refer to a child of the current directory.'
  },
  {
    id: 'manipulation', title: 'Work safely with files', stage: 'Foundation',
    summary: 'Create, copy, rename, remove, and link files while understanding what each operation changes.',
    concepts: [
      'mkdir creates directories; touch creates an empty file or updates an existing file’s timestamp without clearing its content. cp makes a separate copy, mv renames or relocates a directory entry, and rm removes a name. There is usually no terminal recycle bin.',
      'The shell expands an unquoted wildcard before a program runs. *.log matches names in the current directory, not every log on the system. Quote paths with spaces and quote patterns passed to find so that find, rather than the shell, interprets them.',
      'A symbolic link stores a path and can cross filesystems; it breaks if its target is moved. A hard link is another name for the same inode on the same filesystem. Removing one hard link does not remove the data while another link or an open file still references it.',
      'Before a destructive action, inspect pwd, list the target, and use an explicit path. Prefer a private practice directory. On a real system use -- to end option parsing when a filename starts with a hyphen.'
    ],
    example: 'mkdir -p practice/notes\ntouch practice/notes/day1.txt\ncp practice/notes/day1.txt practice/notes/day1.bak\nmv practice/notes/day1.txt practice/notes/linux.txt\nls -l practice/notes',
    explain: 'The final directory should contain linux.txt and day1.bak. Renaming the original leaves the independent backup intact.',
    pitfall: 'rm -r removes an entire tree. Do not use sudo to solve a path typo or blindly paste a recursive deletion command.',
    question: 'Which operation creates an independent file with the same contents?', options: ['A symbolic link', 'A hard link', 'cp'], answer: 2, rationale: 'cp creates a separate file; hard links share an inode, and symbolic links refer to a target path.'
  },
  {
    id: 'plumbing', title: 'Compose tools with streams', stage: 'Foundation',
    summary: 'Use standard input, standard output, and pipelines to turn small commands into useful workflows.',
    concepts: [
      'Every process starts with standard input (descriptor 0), standard output (1), and standard error (2). A pipe connects stdout from the left command to stdin of the right command. Error messages normally remain visible in the terminal.',
      'grep selects matching lines; wc counts; sort orders lines; uniq collapses adjacent duplicates. sort | uniq -c counts repeated values because sorting places equal lines together. LC_ALL=C can make real-system sorting predictable across locales.',
      'A pipeline passes bytes rather than table objects. A filename containing whitespace can break naive xargs processing. On real GNU tools, find -print0 paired with xargs -0 preserves filename boundaries.',
      'Inspect a pipeline one stage at a time. First confirm the input, then the filter, then aggregation. This isolates the stage that loses data instead of guessing at the full command.'
    ],
    example: 'cat /var/log/syslog\ngrep "WARNING" /var/log/syslog\ngrep "WARNING" /var/log/syslog | wc -l',
    explain: 'Read the source, isolate warning lines, then count them. The last result is a count of matching lines, not necessarily the number of separate incidents.',
    pitfall: 'uniq alone only removes adjacent repetitions. Pipes do not include stderr unless you explicitly redirect it.',
    question: 'What does a plain pipe connect?', options: ['stdout to stdin', 'stderr to a file', 'All output to the next command'], answer: 0, rationale: 'The shell connects descriptor 1 of the producer to descriptor 0 of the consumer.'
  },
  {
    id: 'advanced', title: 'Control access and redirection', stage: 'Foundation',
    summary: 'Understand permissions as access rules, not magic numbers.',
    concepts: [
      'Permissions are evaluated for the owner, the file’s group, or everyone else. Read is 4, write 2, and execute 1. 640 means owner read/write, group read, and no access for others. chmod changes modes; chown changes ownership.',
      'Directory permissions differ from file permissions: read lists names, execute traverses a directory, and write permits changing entries. Deleting a file is governed mainly by the containing directory, with sticky-bit rules adding restrictions in shared locations such as /tmp.',
      '> creates or truncates an output file; >> appends. The shell performs redirection before starting the command. sudo echo text > /etc/example does not elevate the shell opening the file. A carefully scoped sudo tee is often the appropriate pattern.',
      'umask removes default permission bits from newly created files and directories; it does not alter existing files. ACLs can add named user or group rules, with a mask limiting effective permissions. Avoid chmod 777 as a troubleshooting shortcut.'
    ],
    example: 'echo "private notes" > notes.txt\nchmod 600 notes.txt\nls -l notes.txt\necho "second entry" >> notes.txt\ncat notes.txt',
    explain: 'The file should be readable and writable only by its owner. Appending preserves the first entry; using > again would replace it.',
    pitfall: 'Changing file mode cannot compensate for missing execute permission on a parent directory. Diagnose the whole path.',
    question: 'What does mode 640 grant the group?', options: ['Read and write', 'Read only', 'Execute only'], answer: 1, rationale: 'The middle digit is 4, which grants read permission only.'
  },
  {
    id: 'system', title: 'Administer a distribution', stage: 'Administration',
    summary: 'Use privilege and package managers deliberately, with a recovery plan.',
    concepts: [
      'sudo runs an allowed command as another user, usually root, under an administrator-defined policy. su changes user context. Work as a regular user and elevate only the action that needs it; root privileges do not make a command correct.',
      'APT is common on Debian and Ubuntu, while DNF is common on Fedora. apt update refreshes repository metadata; apt upgrade installs available upgrades. dpkg and rpm inspect or install local package files but do not provide the same repository dependency workflow.',
      'Prefer signed distribution repositories. Check package names, dependencies, and proposed removals before accepting changes. Downloading a script and piping it directly into a privileged shell gives that script full control of the machine.',
      'Record configuration before changing it. Keep an open administrative session when changing remote access, and verify a new session works before closing the old one. Use a VM snapshot for experiments that could prevent boot or login.'
    ],
    example: 'apt --help\nsudo apt update\nsudo apt install tree\ntree /home/learner',
    explain: 'In the simulator, installation changes a model. In a real disposable Debian/Ubuntu VM, review the package manager’s plan and verify the installed program.',
    pitfall: 'A successful package installation does not prove a service is configured, running, or reachable.',
    question: 'What does apt update do?', options: ['Refresh repository metadata', 'Upgrade every installed package', 'Restart the computer'], answer: 0, rationale: 'Metadata refresh and installing upgrades are separate operations.'
  },
  {
    id: 'resources', title: 'Diagnose storage and memory', stage: 'Administration',
    summary: 'Distinguish capacity, filesystem usage, mounts, memory pressure, and device layout.',
    concepts: [
      'lsblk shows block devices and their relationships. A partition is a slice of a device; a filesystem organizes data; a mount makes a filesystem visible at a directory. The mount point can hide pre-existing contents until it is unmounted.',
      'df reports filesystem capacity and usage; du walks directory entries to estimate their use. They can disagree because of deleted-but-open files, permissions, mount boundaries, or filesystem accounting. Check inode exhaustion with df -i on a real machine.',
      'Linux uses spare RAM as reclaimable cache. Low free memory alone is not an outage: inspect available memory, swap activity, and workload symptoms. Load average describes runnable or uninterruptible tasks, so compare it with CPU count and I/O behavior.',
      'Do not practice formatting, partitioning, or dd against a host disk. Use an explicitly disposable virtual disk and confirm its identity. A mistaken device name can destroy a working filesystem.'
    ],
    example: 'lsblk\ndf -h\ndu -sh /home/learner\nfree -h\nuptime',
    explain: 'Collect device, filesystem, directory, memory, and load evidence before deciding what resource is constrained.',
    pitfall: 'Deleting a log that a service still holds open may not release space until that file descriptor closes.',
    question: 'Why can df show more used space than du finds?', options: ['du always measures RAM', 'A deleted file may still be open', 'df only counts filenames'], answer: 1, rationale: 'An open descriptor can keep deleted data allocated even after directory traversal can no longer find it.'
  },
  {
    id: 'processes', title: 'Understand processes and signals', stage: 'Administration',
    summary: 'Find the right process, inspect it, and choose a proportionate intervention.',
    concepts: [
      'A process is a running program with a PID, owner, environment, open files, and parent. ps gives a snapshot; top shows changing resource use. A process name alone is not a reliable identity: inspect command arguments and ownership.',
      'SIGTERM requests orderly shutdown and allows cleanup. SIGKILL cannot be handled and prevents that cleanup. Start with TERM and allow time; use KILL only when necessary. Recheck the PID before acting because identifiers can be reused.',
      'Shell jobs are distinct from system services. Ctrl-Z suspends a foreground job, bg resumes it in the background, and fg brings it back. A background process may still depend on its terminal. tmux helps preserve interactive sessions across disconnections.',
      'Nice values influence scheduling priority; they do not impose CPU limits. Diagnose high CPU, I/O waits, memory pressure, and dependency failures separately instead of killing the largest number in top.'
    ],
    example: 'ps aux\npgrep nginx\nps -ef\njobs',
    explain: 'Inspect processes and shell jobs. Use the process-management quests for safe simulated signal practice.',
    pitfall: 'A service manager may restart a killed process. Change the service state through its manager when your intent is to stop the service.',
    question: 'Which signal should normally be tried before SIGKILL?', options: ['SIGTERM', 'SIGKILL again', 'SIGSTOP permanently'], answer: 0, rationale: 'SIGTERM gives the program an opportunity to clean up and exit.'
  },
  {
    id: 'networking', title: 'Troubleshoot the network in layers', stage: 'Administration',
    summary: 'Separate interface, routing, DNS, transport, TLS, and application failures.',
    concepts: [
      'An IP address identifies an interface at the network layer. A route selects where traffic goes, often through a default gateway. DNS translates names to records. A port identifies a transport endpoint, and a listening socket must exist before clients can connect.',
      'Start with ip addr and ip route, then test name resolution with dig. Inspect listeners with ss -lnt and test application behavior with curl -I. A failed ping does not prove a host is down because ICMP may be blocked.',
      'Connection refused often means no listener or an active rejection. A timeout may indicate a dropped packet, route failure, or overloaded endpoint. A DNS error occurs before a connection to the application; changing HTTP settings will not fix it.',
      'Firewalls control traffic, not whether an application is healthy. Before changing remote firewall rules, explicitly allow the management connection and keep a recovery console available. TLS failures can involve trust, hostname, validity dates, or clock errors.'
    ],
    example: 'ip addr\nip route\ndig example.com\nss -lnt\ncurl -I https://example.com',
    explain: 'This sequence investigates local configuration, routing, resolution, listeners, then HTTP. Browser results are fixtures; repeat the workflow in a real VM to observe actual packets and errors.',
    pitfall: 'A successful ping is not proof that HTTPS, DNS, or the application works.',
    question: 'A hostname fails to resolve. Which tool investigates that layer?', options: ['chmod', 'dig', 'free'], answer: 1, rationale: 'dig queries DNS. Permissions and RAM measurements do not diagnose name resolution.'
  },
  {
    id: 'searching', title: 'Find evidence efficiently', stage: 'Administration',
    summary: 'Choose between a live filesystem search, a cached index, and searching inside files.',
    concepts: [
      'find traverses a live directory tree and evaluates predicates such as name, type, age, and size. grep searches file contents. locate searches a database and may return stale paths or miss new files until its index is updated.',
      'Quote a find pattern such as "*.log" so that the current shell does not expand it prematurely. Limit the starting directory to the smallest useful scope, especially on busy or remote filesystems.',
      'which looks for executables along PATH, while the shell’s type can also identify aliases and builtins. A command may resolve differently after PATH or alias changes; inspect resolution when a familiar command behaves unexpectedly.',
      'On a real machine, first print search results before adding deletion or execution. Permission errors indicate incomplete visibility, not proof that the target does not exist.'
    ],
    example: 'find /home/learner -type f\nfind /var/log -name "*.log"\nwhich bash\ntype cd',
    explain: 'Search a bounded tree, filter names, and distinguish an executable from a shell builtin.',
    pitfall: 'Do not suppress every error during diagnosis; doing so can conceal directories you could not inspect.',
    question: 'Which search can miss a new file because its index is stale?', options: ['find', 'locate', 'ls'], answer: 1, rationale: 'locate reads an index; find walks the current filesystem.'
  },
  {
    id: 'services', title: 'Operate services and read logs', stage: 'Administration',
    summary: 'Understand running state, startup policy, logs, and the boot sequence.',
    concepts: [
      'A typical boot progresses through firmware, a bootloader, the kernel and initramfs, then userspace initialization. On many distributions systemd is PID 1 and coordinates units and dependencies. Other init systems exist.',
      'systemctl start activates a service now; enable configures startup dependencies for later boots. A service can be enabled but stopped, or running but disabled. status and is-enabled answer different questions.',
      'journalctl -u service selects unit logs; -b selects the current boot. Read timestamps and the earliest relevant failure rather than only the last line. Check configuration syntax before restarting a service.',
      'After editing a unit file, systemctl daemon-reload makes systemd reread unit definitions. It does not restart the service. Apply the appropriate reload or restart and verify both unit state and application response.'
    ],
    example: 'systemctl status nginx\nsudo systemctl start nginx\nsudo systemctl enable nginx\njournalctl -u nginx',
    explain: 'Inspect, start, configure boot behavior, and inspect evidence. These are separate operations with different effects.',
    pitfall: 'An active unit does not guarantee that its application is serving correct responses.',
    question: 'Which command controls whether a service is started on subsequent boots?', options: ['systemctl status', 'systemctl enable', 'journalctl'], answer: 1, rationale: 'enable configures startup links; start affects the current runtime state.'
  },
  {
    id: 'editing', title: 'Edit configuration confidently', stage: 'Administration',
    summary: 'Make small, reversible changes and validate their effect.',
    concepts: [
      'Text configuration is an interface with syntax, ownership, and permissions. Save a copy before editing, make one purposeful change, compare the diff, then use the application’s syntax checker if available.',
      'Nano displays shortcuts at the bottom: Ctrl-O writes a file, Enter confirms its name, and Ctrl-X exits. Vim separates normal and insert modes: i enters insert mode, Escape returns to normal, :w writes, :q quits, and :q! discards unsaved changes.',
      'Line endings and encoding matter. A script copied with Windows line endings may produce a bad interpreter error. Avoid rich-text editors that change quotes or insert invisible formatting.',
      'Editing a file does not always update a running service. Determine whether the program watches it, supports reload, or requires restart. Verify the result and restore the backup if the change causes a failure.'
    ],
    example: 'cp notes.txt notes.txt.bak\nnano notes.txt\ndiff notes.txt.bak notes.txt\ncat notes.txt',
    explain: 'Back up, edit, compare, and inspect. In the browser Nano editor, use its Save and Exit controls or the displayed shortcuts.',
    pitfall: 'Do not overwrite the backup with the broken version before you have verified the change.',
    question: 'What should follow a configuration edit before a restart, when supported?', options: ['Delete the backup', 'Run the application’s syntax check', 'Make every file writable'], answer: 1, rationale: 'A syntax check catches invalid configuration before it interrupts a working service.'
  },
  {
    id: 'scripting', title: 'Write predictable Bash scripts', stage: 'Automation',
    summary: 'Move from command sequences to programs with inputs, decisions, and observable failures.',
    concepts: [
      'A shebang such as #!/usr/bin/env bash selects an interpreter when an executable script is launched directly. bash script.sh explicitly chooses Bash and does not require the executable bit. Running a script as a child process does not change the parent shell’s directory or variables.',
      'Quote expansions such as "$1" and "$file" to preserve spaces and prevent unintended globbing. "$@" preserves each argument separately. Single quotes preserve literal text; double quotes allow parameter and command expansion.',
      'Exit status 0 means success; nonzero indicates a failure or other condition. grep uses 1 for no match and 2 for an error. && runs the next command on success; || runs it on failure. In Bash, pipefail changes how pipeline failure is reported.',
      'Validate arguments, use explicit error handling, and clean up temporary resources with trap. set -e has context-dependent exceptions and is not a substitute for understanding failures. Cron runs with a small environment: use explicit paths and capture output.'
    ],
    example: 'echo "#!/bin/bash" > hello.sh\necho "echo Hello Linux" >> hello.sh\nchmod +x hello.sh\nbash hello.sh',
    explain: 'Build and execute a small script in the browser. For argument handling, traps, and full shell semantics, use the real Bash lab; the simulator implements only selected constructs.',
    pitfall: 'A script that worked interactively can fail in cron because PATH, working directory, or credentials differ.',
    question: 'Why should a filename expansion usually be written as "$file"?', options: ['To run it as root', 'To preserve spaces and avoid unintended globbing', 'To make it executable'], answer: 1, rationale: 'Double quotes preserve the expanded value as a single argument while allowing the variable to expand.'
  },
  {
    id: 'processing', title: 'Transform structured text', stage: 'Automation',
    summary: 'Choose a tool that understands the input structure and validate the output.',
    concepts: [
      'cut selects delimited fields, tr translates or deletes characters, sed applies stream edits, and awk processes records and fields. Use the simplest tool that matches the format rather than combining opaque expressions.',
      'In awk, $0 is the whole record, $1 is the first field, and NF is the number of fields. -F chooses a field separator. Quote the awk program so that the shell does not expand its dollar signs.',
      'Regular expressions and shell globs are different languages. In a regex, . matches a character and * repeats the preceding atom. In a shell glob, * matches a string of characters. Anchor regexes with ^ and $ when you mean a whole line.',
      'CSV can contain quoted delimiters and JSON can contain nested values. A naive cut or grep expression is not a general parser. Use a CSV-aware tool for real CSV and jq for JSON, and inspect sample output before replacing source data.'
    ],
    example: 'cut -d: -f1 /etc/passwd\nawk -F: \'{print $1}\' /etc/passwd\necho "Linux" | tr a-z A-Z',
    explain: 'The first two commands select usernames from a colon-delimited file; the third changes character case.',
    pitfall: 'Avoid sed -i until you have tested the expression on a copy or previewed its output.',
    question: 'Which tool understands nested JSON?', options: ['cut', 'tr', 'jq'], answer: 2, rationale: 'jq parses JSON structure instead of treating punctuation as arbitrary text.'
  },
  {
    id: 'env_admin', title: 'Manage your shell environment', stage: 'Automation',
    summary: 'Understand variable scope, startup files, command lookup, and reproducibility.',
    concepts: [
      'A shell variable belongs to the current shell. export marks a variable for inheritance by child processes. Children cannot modify the parent’s environment. unset removes a variable; unalias removes an alias.',
      'PATH is a colon-separated search list. The first matching executable wins. Putting a writable or untrusted directory first allows a malicious file to impersonate a common command. Avoid adding . to PATH.',
      'Bash reads different startup files for login and interactive non-login shells. .bashrc commonly configures interactive shells, while a login shell reads a profile. source executes a file in the current shell, so only source files you trust.',
      'Aliases are interactive conveniences, not portable script dependencies. Keep scripts explicit. Do not store secrets in public dotfiles, command history, or exported diagnostic reports.'
    ],
    example: 'echo "$PATH"\nexport EDITOR=nano\necho "$EDITOR"\nalias ll="ls -la"\ntype ll\nunalias ll',
    explain: 'Inspect lookup paths, set a child-visible preference, then define and remove a convenience alias.',
    pitfall: 'Opening a new terminal can read startup files and change behavior that seemed fixed in the previous session.',
    question: 'Can a child script export a variable back into its parent shell?', options: ['Yes, always', 'No', 'Only if the variable is uppercase'], answer: 1, rationale: 'Environment inheritance flows from parent to child. Sourcing runs commands in the current shell instead.'
  },
  {
    id: 'archiving', title: 'Make backups you can restore', stage: 'Operations',
    summary: 'Treat a successful restore as the proof of a backup.',
    concepts: [
      'tar groups files into an archive; gzip, bzip2, and xz compress data. A .tar.gz commonly combines archiving and compression. List an unfamiliar archive before extracting and use a separate destination to avoid overwriting working files.',
      'rsync synchronizes trees. The trailing slash on a source directory matters: source/ copies its contents, while source copies the directory itself. Preview real synchronizations with --dry-run, especially before using --delete.',
      'A SHA-256 checksum detects changes relative to a trusted checksum. It does not prove authenticity if an attacker can replace both the file and its checksum. Verify vendor signatures or checksums obtained through a trusted channel.',
      'Keep multiple copies across failure domains, including an offline or otherwise isolated copy. Define recovery point and recovery time requirements. Regularly restore to a fresh location and verify file contents, ownership, permissions, and application behavior.'
    ],
    example: 'tar -czf notes-backup.tar.gz notes.txt\ntar -tf notes-backup.tar.gz\nsha256sum notes-backup.tar.gz',
    explain: 'Create, inspect, and fingerprint an archive. The real backup lab adds extraction into a new directory and content comparison.',
    pitfall: 'A backup on the same disk does not protect against that disk’s failure. A checksum alone is not a backup.',
    question: 'What is the strongest practical check that a backup is useful?', options: ['Its filename includes backup', 'The archive is large', 'Restore it and verify the recovered data'], answer: 2, rationale: 'A restore exercise tests the actual recovery path, not just archive creation.'
  },
  {
    id: 'remote_users', title: 'Secure identities and remote access', stage: 'Operations',
    summary: 'Understand users, groups, SSH trust, and least privilege.',
    concepts: [
      'Users have numeric UIDs and primary and supplementary groups. /etc/passwd describes accounts; password hashes are kept separately in /etc/shadow. Use account-management tools instead of editing these databases casually.',
      'usermod -aG adds supplementary group membership; omitting -a can replace the existing list. A new login is usually needed for a session to gain updated group membership. Verify with id in the new session.',
      'SSH authenticates the server with a host key and the client with a configured method such as a public key. Verify a new server’s fingerprint through a trusted channel. Never share the private key; install only the public key on the destination.',
      'Test key-based login in a second session before disabling password authentication. Keep a recovery path. Restrict key file permissions and use a passphrase. A changed host key deserves investigation rather than automatic deletion of the warning.'
    ],
    example: 'whoami\nid\ngroups\nwho\nw',
    explain: 'Inspect your identity, effective group membership, and active sessions before changing access rules.',
    pitfall: 'Membership in powerful groups, including docker on many hosts, can effectively grant root access.',
    question: 'Which SSH key may be copied to the server?', options: ['The private key', 'The public key', 'Both keys'], answer: 1, rationale: 'The private key stays secret on the client; the public key is used to authorize it on the server.'
  },
  {
    id: 'devops', title: 'Deliver and troubleshoot changes', stage: 'Operations',
    summary: 'Combine version control, containers, and operational checks without confusing them with isolation guarantees.',
    concepts: [
      'Git separates the working tree, staging area, and commit history. git diff shows unstaged changes; git diff --staged shows what will enter a commit. Review both before committing. A commit is local until pushed, and version control is not a substitute for all backups.',
      'A container is a process isolated through kernel features such as namespaces and cgroups. It shares the host kernel, unlike a VM with its own guest kernel. An image is the template; a container is an instance with runtime state.',
      'Inspect container state, logs, published ports, and mounted volumes separately. Data in a writable container layer can disappear when the container is replaced. Use appropriate persistent storage and test recovery.',
      'For each change, record the intended outcome, the smallest modification, verification evidence, and rollback steps. Start with observation, form one hypothesis, test it, then change one variable at a time. Avoid restarting everything before collecting logs.'
    ],
    example: 'git status\ngit diff\ngit log\ndocker ps\ndocker logs web',
    explain: 'The simulator provides practice fixtures for Git and containers. Use the operations capstone to apply the same investigation sequence to real processes and saved evidence.',
    pitfall: 'A running container can contain an unhealthy application. Verify its behavior from a client as well as its process state.',
    question: 'What does a Linux container share with its host?', options: ['Every environment variable', 'The kernel', 'The entire writable filesystem'], answer: 1, rationale: 'Containers isolate processes using the host kernel; virtual machines boot their own guest kernels.'
  }
];

export const realLabs = [
  {
    id: 'first-machine', title: '01 / Your first real Linux machine', level: 'Start here',
    goal: 'Create a disposable Linux environment and learn what the browser cannot simulate.',
    steps: [
      'Use an existing spare Linux machine or create a virtual machine from an official Ubuntu, Debian, or Fedora installation image. Verify the image against the publisher’s checksum. In the VM installer, select only the virtual disk; keep host disks disconnected from the guest.',
      'Create a regular user, finish installation, and take a VM snapshot named clean-install. A terminal on macOS is not a Linux environment. WSL is useful for command practice on Windows, but its boot and device behavior differs from a full VM.',
      'Run the read-only commands below. Record your distribution, kernel version, user, shell, and home directory. Explain why the distribution version and kernel version are separate.',
      'Create ~/linux-lab and keep later experiments there. Before administrative labs, take another snapshot. Revert it when you need a clean baseline.'
    ],
    commands: 'cat /etc/os-release\nuname -r\nwhoami\nprintf "%s\\n" "$SHELL" "$HOME"\nmkdir -p ~/linux-lab\ncd ~/linux-lab\npwd',
    evidence: 'A short system inventory and a working snapshot or other recovery method. Explain terminal versus shell versus kernel without looking it up.',
    recovery: 'Revert the VM snapshot. Keep any notes you need outside the disposable guest before reverting.'
  },
  {
    id: 'backup-restore', title: '02 / A backup with a proven restore', level: 'Files + archives',
    goal: 'Create data, back it up, restore it somewhere new, and compare every recovered file.',
    steps: [
      'In your disposable Linux environment, run the commands below to make a unique workspace. They operate only inside that newly created directory.',
      'Inspect the archive listing before extraction. Restore into the empty restore directory, never over your only working copy.',
      'Confirm diff produces no output and exits successfully. Edit restored notes.txt and rerun diff; explain why it now reports a difference.',
      'Write down which permissions and ownership your backup method preserves. Identify where an independent copy would live if this disk failed.'
    ],
    commands: 'lab_dir=$(mktemp -d)\ncd "$lab_dir"\nmkdir source restore\nprintf "Linux practice\\n" > source/notes.txt\ncp source/notes.txt source/second.txt\ntar -czf backup.tar.gz source\ntar -tzf backup.tar.gz\ntar -xzf backup.tar.gz -C restore\ndiff -r source restore/source\nsha256sum backup.tar.gz',
    evidence: 'The archive listing, a clean comparison, a deliberately detected difference, and a written recovery procedure.',
    recovery: 'Keep the unique workspace until you finish reviewing it. It can be removed later after confirming its exact path; no system files were changed.'
  },
  {
    id: 'reliable-script', title: '03 / A script that handles failure', level: 'Bash + testing',
    goal: 'Write and test a script with quoted arguments, a clear error path, and meaningful exit statuses.',
    steps: [
      'Create report.sh in your practice directory with the script below. This lab runs in real Bash; it is not graded by the browser simulator.',
      'Run bash -n report.sh to check syntax. Run bash report.sh with no arguments and inspect echo $?; expect 2 and a usage message on stderr.',
      'Create a directory named sample data, add a few files, and run bash report.sh "sample data". Expect 0 and one output path per file. Try a nonexistent directory and expect 1.',
      'Explain why the script quotes "$1", why diagnostics go to stderr, and why checking syntax alone does not establish correctness.'
    ],
    commands: '#!/usr/bin/env bash\nif [ "$#" -ne 1 ]; then\n  printf "Usage: report.sh DIRECTORY\\n" >&2\n  exit 2\nfi\nif [ ! -d "$1" ]; then\n  printf "Not a directory: %s\\n" "$1" >&2\n  exit 1\nfi\nfind "$1" -type f',
    evidence: 'Record all three test cases, actual exit codes, stdout, and stderr. Add a test for an empty directory.',
    recovery: 'The script only inspects files. Edit or remove the script within your practice directory to start again.'
  },
  {
    id: 'service-incident', title: '04 / Diagnose a service incident', level: 'Services + networking',
    goal: 'Distinguish a missing listener, a stopped service, and an application error using evidence.',
    steps: [
      'Use a disposable VM with systemd and a web service you installed through its package manager, such as nginx. Take a snapshot first. Avoid performing this lab on a public server.',
      'Inspect systemctl status nginx, journalctl -u nginx -b, and ss -lnt. Test curl -I http://127.0.0.1 and record the healthy baseline.',
      'Stop the service with sudo systemctl stop nginx. Repeat the same observations and explain the changed listener and HTTP response. Restore with sudo systemctl start nginx.',
      'Compare systemctl is-enabled nginx with systemctl is-active nginx. Inspect the configuration using sudo nginx -t. Write an incident report with symptom, hypothesis, evidence, change, verification, and rollback.'
    ],
    commands: 'systemctl status nginx\njournalctl -u nginx -b --no-pager -n 30\nss -lnt\ncurl -I http://127.0.0.1\nsystemctl is-enabled nginx\nsystemctl is-active nginx',
    evidence: 'Before, during, and after observations showing why the application was unreachable. Confirm the restored HTTP response, not just the service status.',
    recovery: 'Start nginx again or revert the snapshot. If the distribution does not use systemd, use a systemd-based disposable VM for this exercise.'
  },
  {
    id: 'access-audit', title: '05 / Permissions and access audit', level: 'Security + diagnosis',
    goal: 'Predict permission effects, reproduce them without root, and explain least privilege.',
    steps: [
      'Run this lab as your regular user, not root. Create a unique workspace and file with the commands below. Predict whether cat can read the file after each chmod.',
      'With mode 000, cat should report Permission denied. Restore mode 600 and confirm you can read it. Compare ls -l with your prediction.',
      'Explain why permissions for a directory mean different things from permissions for a file. Explain why running this experiment as root can invalidate the prediction.',
      'Read id and groups. Describe the difference between ownership, group membership, and mode bits. Propose access for a private key and for a shared read-only document.'
    ],
    commands: 'lab_dir=$(mktemp -d)\ncd "$lab_dir"\nprintf "private\\n" > note.txt\nchmod 000 note.txt\ncat note.txt\nchmod 600 note.txt\ncat note.txt\nls -l note.txt\nid\ngroups',
    evidence: 'A permission prediction table, the observed denial and recovery, and a least-privilege explanation for both proposed files.',
    recovery: 'Restore mode 600 on note.txt. All changes are confined to the temporary workspace.'
  }
];
