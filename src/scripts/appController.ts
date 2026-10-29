import { FileSystem, ShellSession } from "../lib/linuxEngine";
import { lessons } from "../lib/lessons";

function decodeCustomQuest(param: string): any {
  try {
    let raw = param;
    try {
      raw = decodeURIComponent(raw);
    } catch (_) {}
    const unb64 = atob(raw);
    let jsonStr: string;
    try {
      jsonStr = decodeURIComponent(escape(unb64));
    } catch (_) {
      jsonStr = unb64;
    }
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error("Failed to decode custom quest parameter:", err);
    return null;
  }
}

export class AppStateManager {
  state: any;
  bossRushInterval: any = null;
  customQuest: any = null;
  constructor() {

    this.state = {
      xp: 0,
      completedLessons: [],
      activeView: "dashboard",
      activeLessonId: 1,
      streak: 0,
      lastCompletedDate: null,
      fsTree: null,
      lessonStartTrees: {},
      installedPackages: [
        "pwd",
        "whoami",
        "clear",
        "help",
        "cd",
        "ls",
        "mkdir",
        "touch",
        "cat",
        "echo",
        "rm",
        "cp",
        "mv",
        "chmod",
        "grep",
        "wc",
        "uniq",
        "sort",
        "man",
        "apt",
        "df",
        "du",
        "free",
        "uptime",
        "uname",
        "ps",
        "top",
        "htop",
        "kill",
        "sleep",
        "jobs",
        "fg",
        "ping",
        "ip",
        "curl",
        "find",
        "history",
        "systemctl",
        "nano",
        "bash",
        "sed",
        "awk",
        "cut",
        "tr",
        "ln",
        "tar",
        "chown",
        "export",
        "env",
        "xargs",
        "head",
        "tail",
        "less",
        "more",
        "journalctl",
        "which",
        "alias",
        "crontab",
        "useradd",
        "passwd",
        "su",
        "ssh",
        "scp",
        "gzip",
        "gunzip",
        "groupadd",
        "groups",
        "lscpu",
        "lsof",
        "zip",
        "unzip",
        "bzip2",
        "xz",
        "dpkg",
        "dnf",
        "yum",
        "adduser",
        "userdel",
        "id",
        "groupdel",
        "ifconfig",
        "nmcli",
        "netstat",
        "ss",
        "traceroute",
        "ufw",
        "iptables",
        "nice",
        "renice",
        "bg",
        "iostat",
        "exit",
        "file",
        "stat",
        "tree",
        "rmdir",
        "tee",
        "diff",
        "umask",
        "chgrp",
        "getfacl",
        "setfacl",
        "rpm",
        "snap",
        "lsblk",
        "blkid",
        "mount",
        "umount",
        "dmesg",
        "pgrep",
        "pkill",
        "killall",
        "nohup",
        "watch",
        "dig",
        "nslookup",
        "host",
        "wget",
        "nc",
        "hostname",
        "hostnamectl",
        "locate",
        "updatedb",
        "whereis",
        "type",
        "apropos",
        "whatis",
        "timedatectl",
        "shutdown",
        "reboot",
        "vim",
        "vi",
        "date",
        "jq",
        "strings",
        "xxd",
        "hexdump",
        "read",
        "rsync",
        "sha256sum",
        "md5sum",
        "dd",
        "mktemp",
        "source",
        "unset",
        "unalias",
        "usermod",
        "ssh-keygen",
        "ssh-copy-id",
        "who",
        "w",
        "last",
        "tmux",
        "git",
        "docker",
      ],
      bossRushMode: false,
      bossRushStartTime: null,
      fastestBossRushTime: null,
      fastestBossRushStr: null,
    };

    this.init();
  }

  registerCustomLesson(custom: any) {
    const rawRules = Array.isArray(custom.rules) ? custom.rules : [];
    const validRules = rawRules.filter((r: any) => r && r.type);

    const objectives =
      validRules.length > 0
        ? validRules.map((rule: any, idx: number) => {
            let text = `Rule ${idx + 1}`;
            if (rule.type === "command_contains") {
              const target = rule.target || rule.value || rule.command || "";
              text = `Terminal command history includes "${target}"`;
            } else if (rule.type === "file_exists") {
              const p = rule.target || rule.path || "";
              text = `File or directory exists at "${p}"`;
            } else if (rule.type === "file_contains") {
              const p = rule.target || rule.path || "";
              const val =
                rule.value !== undefined
                  ? rule.value
                  : rule.content !== undefined
                    ? rule.content
                    : "";
              text = `File at "${p}" contains "${val}"`;
            } else if (rule.type === "file_perms") {
              const p = rule.target || rule.path || "";
              const perms =
                rule.value || rule.perms || rule.permissions || "";
              text = `File at "${p}" has octal permissions ${perms}`;
            }
            return {
              id: `custom_obj_${idx + 1}`,
              text: rule.description || text,
              rule,
            };
          })
        : [
            {
              id: "custom_obj_1",
              text: "Complete custom lab task instructions",
              rule: { type: "generic" },
            },
          ];

    const dynamicLesson = {
      id: 9999,
      moduleId: "custom",
      title: custom.title || "Custom Quest",
      description:
        custom.description ||
        "Custom scenario created via Custom Quest Builder.",
      instructions:
        custom.instructions ||
        "Complete the objectives specified in this custom lab.",
      xp: 500,
      badge: "Custom Challenger",
      commandHelp: custom.commandHelp || [],
      hints: custom.hints || [
        "Review the Verification Checklist to understand the required criteria.",
        "Check permissions, file paths, and command syntax carefully.",
        "Verify your output once you have completed the required steps.",
      ],
      objectives: objectives.map((o: any) => ({ id: o.id, text: o.text })),
      verify: (fs: any, _session: any, history: any) => {
        if (validRules.length === 0) {
          return {
            success: true,
            checks: [{ id: "custom_obj_1", passed: true }],
          };
        }

        const checks = objectives.map((obj: any) => {
          const r = obj.rule;
          let passed = false;
          if (r.type === "command_contains") {
            const searchStr = String(
              r.target || r.value || r.command || r.string || "",
            ).trim();
            if (searchStr && Array.isArray(history)) {
              passed = history.some(
                (cmd: string) =>
                  typeof cmd === "string" && cmd.includes(searchStr),
              );
            }
          } else if (r.type === "file_exists") {
            const p = String(r.target || r.path || "").trim();
            if (p && fs) {
              const node = fs.getNodeByPath("/", p);
              passed = Boolean(node);
            }
          } else if (r.type === "file_contains") {
            const p = String(r.target || r.path || "").trim();
            const expected =
              r.value !== undefined
                ? String(r.value)
                : r.content !== undefined
                  ? String(r.content)
                  : r.string !== undefined
                    ? String(r.string)
                    : "";
            if (p && fs) {
              const node = fs.getNodeByPath("/", p);
              passed = Boolean(
                node &&
                  node.type === "file" &&
                  typeof node.content === "string" &&
                  node.content.includes(expected),
              );
            }
          } else if (r.type === "file_perms") {
            const p = String(r.target || r.path || "").trim();
            const expected = String(
              r.value || r.perms || r.permissions || "",
            ).trim();
            if (p && expected && fs) {
              const node = fs.getNodeByPath("/", p);
              if (node) {
                const actual = String(node.permissions || "").trim();
                const normActual = actual.replace(/^0+/, "") || "0";
                const normExpected = expected.replace(/^0+/, "") || "0";
                passed = normActual === normExpected || actual === expected;
              }
            }
          }
          return { id: obj.id, passed };
        });

        const success = checks.length > 0 && checks.every((c: any) => c.passed);
        return { success, checks };
      },
    };

    const existingIdx = lessons.findIndex((l: any) => l.id === 9999);
    if (existingIdx >= 0) {
      lessons[existingIdx] = dynamicLesson;
    } else {
      lessons.push(dynamicLesson);
    }

    return dynamicLesson;
  }

  init() {
    this.loadFromStorage();

    if (this.state.customQuest && !this.customQuest) {
      this.customQuest = this.state.customQuest;
      this.registerCustomLesson(this.customQuest);
    }

    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const customParam = urlParams.get("custom");
      if (customParam) {
        const custom = decodeCustomQuest(customParam);
        if (custom && typeof custom === "object") {
          this.customQuest = custom;
          this.state.customQuest = custom;
          this.registerCustomLesson(custom);
          this.state.activeLessonId = 9999;
          this.state.activeView = "sandbox";
        }
      }

      const questParam = urlParams.get("quest");
      if (questParam && !customParam) {
        const questId = Number(questParam);
        if (lessons.some((l) => l.id === questId)) {
          this.state.activeLessonId = questId;
          this.state.activeView = "sandbox";
        }
      }

      const path = window.location.pathname;
      if (path.includes("/terminal")) {
        this.state.activeView = "sandbox";
      } else if (path.includes("/tools")) {
        this.state.activeView = "tools";
      } else if (path.includes("/about")) {
        this.state.activeView = "about";
      } else if (!customParam) {
        const viewParam = urlParams.get("view");
        if (
          viewParam === "dashboard" ||
          viewParam === "sandbox" ||
          viewParam === "about" ||
          viewParam === "tools"
        ) {
          this.state.activeView = viewParam;
        } else if (!questParam) {
          this.state.activeView = "dashboard";
        }
      }
    }

    this.resetFilesystem();
    this.bindEvents();
    this.broadcastState();
    this.applyViewVisibility();
  }

  resetFilesystem() {
    const fs = new FileSystem(this.state.fsTree);
    const completed = this.state.completedLessons;

    if (!completed.includes(12)) {
      const statusNode = fs.getNodeByPath("/home/learner", "status.txt");
      if (!statusNode) {
        fs.createNode("/home/learner", "status.txt", "file", {
          content: "System Online\nAll Checks Green\n",
        });
      }
    }

    if (!fs.getNodeByPath("/home/learner", "notes.txt")) {
      fs.createNode("/home/learner", "notes.txt", "file", {
        content: "Meeting Notes:\nDiscussing new Linux architecture.",
        permissions: "644",
        owner: "learner",
        group: "learner"
      });
    }

    if (!completed.includes(13)) {
      const logFiles = [
        { name: "log_1.txt", content: "Log entry 1: System initiated.\n" },
        {
          name: "log_2.txt",
          content: "Log entry 2: System update started.\n",
        },
        {
          name: "log_3.txt",
          content: "Log entry 3: Database sync complete.\n",
        },
      ];
      for (const logFile of logFiles) {
        if (!fs.getNodeByPath("/home/learner", logFile.name)) {
          fs.createNode("/home/learner", logFile.name, "file", {
            content: logFile.content,
          });
        }
      }
    }

    if (!completed.includes(14)) {
      if (!fs.getNodeByPath("/home/learner", "downloads")) {
        fs.createNode("/home/learner", "downloads", "dir");
      }
    }

    if (!completed.includes(16)) {
      if (!fs.getNodeByPath("/home/learner", "names.txt")) {
        fs.createNode("/home/learner", "names.txt", "file", {
          content: "Alice\nBob\nAlice\nCharlie\nBob\nDavid\nCharlie\n",
        });
      }
    }

    if (!completed.includes(17)) {
      if (!fs.getNodeByPath("/home/learner", "logs.txt")) {
        fs.createNode("/home/learner", "logs.txt", "file", {
          content:
            "[INFO] Service started.\n[WARNING] High memory usage.\n[ERROR] Database connection failed.\n[INFO] User logged in.\n[ERROR] Failed to start database service.\n",
        });
      }
    }

    if (!completed.includes(18)) {
      if (!fs.getNodeByPath("/home/learner", "deploy.sh")) {
        fs.createNode("/home/learner", "deploy.sh", "file", {
          content:
            '#!/bin/bash\necho "Deploying application..."\necho "Done!"\n',
          permissions: "644",
        });
      }
    }

    if (!completed.includes(21)) {
      if (!fs.getNodeByPath("/etc", "shadow")) {
        fs.createNode("/etc", "shadow", "file", {
          content:
            "root:$6$8zLx92xp$H9s2:18200:0:99999:7:::\nlearner:$6$1bYtM2op$P4w1:18200:0:99999:7:::\n",
          permissions: "000",
          owner: "root",
          group: "shadow",
        });
      }
    }

    if (!fs.getNodeByPath("/home/learner", "logs")) {
      fs.createNode("/home/learner", "logs", "dir");
      fs.createNode("/home/learner/logs", "app.log", "file", {
        content:
          "Jul 3 12:00:00 [INFO] System boot up completed.\nJul 3 12:05:00 [INFO] Started web server service.\nJul 3 12:10:00 [WARNING] Disk space warning: 80% used.\n",
      });
      fs.createNode("/home/learner/logs", "security.log", "file", {
        content:
          "Jul 3 12:01:00 [INFO] User root logged in via ssh.\nJul 3 12:02:15 [WARNING] SSH Login failure from 192.168.1.100.\n",
      });
    }

    if (!completed.includes(38)) {
      if (!fs.getNodeByPath("/home/learner", "server.conf")) {
        fs.createNode("/home/learner", "server.conf", "file", {
          content: "host=127.0.0.1\nport=80\nmax_connections=100\n",
        });
      }
    }

    if (!completed.includes(45)) {
      if (!fs.getNodeByPath("/home/learner", "reports.csv")) {
        fs.createNode("/home/learner", "reports.csv", "file", {
          content:
            "date,sales,visitors\njul 1,1200,450\njul 2,1500,500\njul 3,1800,600\n",
        });
      }
    }

    if (!completed.includes(61)) {
      if (!fs.getNodeByPath("/home/learner", "logs.tar.gz")) {
        fs.createNode("/home/learner", "logs.tar.gz", "file", {
          content: "tarball-archive-content\n",
        });
      }
    }

    if (!completed.includes(62)) {
      if (!fs.getNodeByPath("/home/learner", "note.txt")) {
        fs.createNode("/home/learner", "note.txt", "file", {
          content: "This is a configuration note that needs compression.\n",
        });
      }
    }

    const groupNode = fs.getNodeByPath("/etc", "group");
    if (!groupNode) {
      fs.createNode("/etc", "group", "file", {
        content: "root:x:0:\nlearner:x:1000:\nsudo:x:27:learner\n",
        permissions: "644",
        owner: "root",
        group: "root",
      });
    } else if (groupNode.owner === "learner") {
      groupNode.owner = "root";
      groupNode.group = "root";
      groupNode.permissions = "644";
    }

    // Boss Challenge Scenario Initial States
    if (this.state.activeLessonId === 84 && !completed.includes(84)) {
      fs.deleteNode("/home/learner", "app", true);
    }

    if (!completed.includes(85)) {
      if (!fs.getNodeByPath("/home/learner", "temp_install.tmp")) {
        fs.createNode("/home/learner", "temp_install.tmp", "file", {
          content: "Temporary installation cache\n",
        });
      }
      if (!fs.getNodeByPath("/home/learner", "old_log.txt")) {
        fs.createNode("/home/learner", "old_log.txt", "file", {
          content: "Legacy log dump\n",
        });
      }
      if (!fs.getNodeByPath("/home/learner", "staging.conf")) {
        fs.createNode("/home/learner", "staging.conf", "file", {
          content: "DB_HOST=prod-db.internal\nCACHE_ENABLED=true\n",
        });
      }
    }

    if (!completed.includes(86)) {
      if (!fs.getNodeByPath("/home/learner", "access.log")) {
        fs.createNode("/home/learner", "access.log", "file", {
          content:
            '203.0.113.19 - - [03/Jul/2026:10:00:00] "POST /login" 401\n198.51.100.42 - - [03/Jul/2026:10:00:01] "GET /admin" 403\n203.0.113.19 - - [03/Jul/2026:10:00:02] "POST /login" 401\n198.51.100.42 - - [03/Jul/2026:10:00:04] "GET /admin" 403\n',
        });
      }
    }

    if (!completed.includes(87)) {
      const vNode = fs.getNodeByPath("/etc", "vault.conf");
      if (!vNode) {
        fs.createNode("/etc", "vault.conf", "file", {
          content:
            "SECRET_KEY=super_secure_vault_pass_999\nDATABASE_URL=postgres://app:sec@db/prod\n",
          permissions: "777",
          owner: "learner",
        });
      }
    }

    if (!completed.includes(88)) {
      if (!fs.getNodeByPath("/tmp", "corrupt_pkg.deb")) {
        fs.createNode("/tmp", "corrupt_pkg.deb", "file", {
          content: "corrupt binary payload\n",
        });
      }
    }

    if (!completed.includes(89)) {
      if (!fs.getNodeByPath("/var/log", "huge_core_dump.log")) {
        fs.createNode("/var/log", "huge_core_dump.log", "file", {
          content: "CRASH CORE DUMP OVERFLOW BUFFER 0xDEADBEEF\n",
          size: 52428800,
        });
      }
    }

    if (!fs.getNodeByPath("/etc", "fstab")) {
      fs.createNode("/etc", "fstab", "file", {
        content:
          "# /etc/fstab: static file system information.\n# <file system> <mount point>   <type>  <options>       <dump>  <pass>\nUUID=b1e2c3d4-0001-4000-8000-000000000001 / ext4 defaults 0 1\nUUID=c2d3e4f5-0002-4000-8000-000000000002 none swap sw 0 0\nUUID=d3e4f5a6-0003-4000-8000-000000000003 /mnt/data ext4 defaults,noatime 0 2\n",
        permissions: "644",
      });
    }

    if (!fs.getNodeByPath("/etc", "resolv.conf")) {
      fs.createNode("/etc", "resolv.conf", "file", {
        content:
          "# Generated by NetworkManager\nnameserver 127.0.0.53\noptions edns0 trust-ad\nsearch localdomain\n",
        permissions: "644",
      });
    }

    if (!fs.getNodeByPath("/mnt", "data")) {
      if (!fs.getNodeByPath("/", "mnt")) {
        fs.createNode("/", "mnt", "dir");
      }
      fs.createNode("/mnt", "data", "dir", { permissions: "755" });
    }

    if (!fs.getNodeByPath("/home/learner", "backup.sh")) {
      fs.createNode("/home/learner", "backup.sh", "file", {
        content: '#!/bin/bash\n# Production backup task\nsleep 30\necho "Backup finished successfully"\n',
        permissions: "755",
        owner: "learner",
        group: "learner",
      });
    }

    if (!completed.includes(91)) {
      const hostsNode: any = fs.getNodeByPath("/etc", "hosts");
      if (hostsNode && !hostsNode.content.includes("evil-tracker.local")) {
        hostsNode.content += "0.0.0.0 evil-tracker.local\n";
      }
    }

    if (!completed.includes(92)) {
      if (!fs.getNodeByPath("/var", "backups")) {
        fs.createNode("/var", "backups", "dir");
      }
      if (!fs.getNodeByPath("/var/backups", "lost")) {
        fs.createNode("/var/backups", "lost", "dir");
      }
      if (!fs.getNodeByPath("/var/backups/lost", "db_backup_secure.tar.gz")) {
        fs.createNode("/var/backups/lost", "db_backup_secure.tar.gz", "file", {
          content: "production_db_dump_compressed\n",
        });
      }
    }

    if (this.state.activeLessonId === 94 && !completed.includes(94)) {
      const serverConf: any = fs.getNodeByPath("/home/learner", "server.conf");
      if (serverConf && serverConf.type === "file") {
        serverConf.content =
          "host=0.0.0.0.0\nport=99999\nmax_connections=10\n";
      } else {
        fs.createNode("/home/learner", "server.conf", "file", {
          content: "host=0.0.0.0.0\nport=99999\nmax_connections=10\n",
        });
      }
    }

    if (!completed.includes(96)) {
      if (!fs.getNodeByPath("/home/learner", "messy_data.csv")) {
        fs.createNode("/home/learner", "messy_data.csv", "file", {
          content:
            "alice:dev:engineering;\nbob:ops:infrastructure;\ncharlie:sec:security;\ndavid:analyst:data;\n",
        });
      }
    }

    if (!completed.includes(97)) {
      if (!fs.getNodeByPath("/tmp", "evil_bin")) {
        fs.createNode("/tmp", "evil_bin", "dir");
      }
      const rcNode: any = fs.getNodeByPath("/home/learner", ".bashrc");
      if (!rcNode) {
        fs.createNode("/home/learner", ".bashrc", "file", {
          content:
            'export PATH=/tmp/evil_bin:$PATH\nalias ls="/tmp/evil_bin/spy_ls"\n',
        });
      } else if (!rcNode.content.includes("evil_bin")) {
        rcNode.content += "export PATH=/tmp/evil_bin:$PATH\n";
      }
    }

    if (!completed.includes(98)) {
      if (!fs.getNodeByPath("/home/learner", "links")) {
        fs.createNode("/home/learner", "links", "dir");
      }
      if (!fs.getNodeByPath("/home/learner/links", "current_log")) {
        fs.createNode("/home/learner/links", "current_log", "link", {
          target: "/tmp/old_syslog",
        });
      }
    }

    if (!completed.includes(99)) {
      const pNode: any = fs.getNodeByPath("/etc", "passwd");
      if (pNode && !pNode.content.includes("backdoor")) {
        pNode.content += "backdoor:x:1001:1001::/home/backdoor:/bin/bash\n";
      }
      const gNode: any = fs.getNodeByPath("/etc", "group");
      if (gNode && !gNode.content.includes("rogue_admins")) {
        gNode.content += "rogue_admins:x:1002:backdoor\n";
      }
    }

    if (!completed.includes(102)) {
      if (!fs.getNodeByPath("/home/learner", "temp_empty")) {
        fs.createNode("/home/learner", "temp_empty", "dir");
      }
    }

    if (!completed.includes(103)) {
      if (!fs.getNodeByPath("/etc", "app.conf")) {
        fs.createNode("/etc", "app.conf", "file", {
          content: "# Application Configuration\nVERSION=1.0.0\n",
          permissions: "644",
          owner: "root",
          group: "root"
        });
      }
    }

    if (!completed.includes(104)) {
      if (!fs.getNodeByPath("/home/learner", "app_v1.conf")) {
        fs.createNode("/home/learner", "app_v1.conf", "file", {
          content: "PORT=3000\nTIMEOUT=30\nLOG_LEVEL=info\n"
        });
      }
      if (!fs.getNodeByPath("/home/learner", "app_v2.conf")) {
        fs.createNode("/home/learner", "app_v2.conf", "file", {
          content: "PORT=3000\nTIMEOUT=60\nLOG_LEVEL=debug\n"
        });
      }
    }

    if (!completed.includes(108)) {
      if (!fs.getNodeByPath("/home/learner", "project.txt")) {
        fs.createNode("/home/learner", "project.txt", "file", {
          content: "Project team assets and notes\n"
        });
      }
    }

    if (!completed.includes(109)) {
      if (!fs.getNodeByPath("/tmp", "shared")) {
        fs.createNode("/tmp", "shared", "dir", { permissions: "777" });
      }
      if (!fs.getNodeByPath("/home/learner", "admin_tool")) {
        fs.createNode("/home/learner", "admin_tool", "file", {
          content: "#!/bin/bash\necho 'Admin tool executed'\n",
          permissions: "755"
        });
      }
      if (!fs.getNodeByPath("/usr/bin", "passwd")) {
        fs.createNode("/usr/bin", "passwd", "file", {
          content: "ELF binary passwd\n",
          permissions: "4755",
          owner: "root",
          group: "root"
        });
      }
    }

    if (!fs.getNodeByPath("/bin", "app")) {
      fs.createNode("/bin", "app", "file", {
        content: "\x7fELF\x02\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\x00>\x00\x01\x00\x00\x00\n/lib64/ld-linux-x86-64.so.2\nlibc.so.6\nputs\nprintf\n__libc_start_main\nGLIBC_2.2.5\nBashQuest Enterprise App v2.4.1\nCompiled by root@build-srv-01\nBuild Date: 2026-06-15\nDATABASE_URL=postgres://localhost:5432/production\nSecret API Key: bq_prod_994827104\n",
        permissions: "755",
        owner: "root",
        group: "root"
      });
    }

    if (!fs.getNodeByPath("/home/learner", "api.json")) {
      fs.createNode("/home/learner", "api.json", "file", {
        content: JSON.stringify({
          service: "billing-api",
          version: "1.4.0",
          status: "healthy",
          users: [
            { id: 1, name: "alice", role: "admin" },
            { id: 2, name: "bob", role: "user" },
            { id: 3, name: "charlie", role: "developer" }
          ]
        }, null, 2) + "\n"
      });
    }

    if (!fs.getNodeByPath("/home/learner", "app.db")) {
      fs.createNode("/home/learner", "app.db", "file", {
        content: "SQLite format 3\x00\x10\x00\x01\x01\x00@  \x00\x00\x00\x02\x00\x00\x00\x04\nproduction_database_table_users\n"
      });
    }

    if (!fs.getNodeByPath("/home/learner", "access.log")) {
      fs.createNode("/home/learner", "access.log", "file", {
        content: "192.168.1.10 - - [03/Jul/2026:10:00:00] \"GET /index.html\" 200\n192.168.1.15 - - [03/Jul/2026:10:00:01] \"GET /api/v1/status\" 200\n192.168.1.10 - - [03/Jul/2026:10:00:02] \"GET /favicon.ico\" 200\n192.168.1.20 - - [03/Jul/2026:10:00:03] \"POST /login\" 401\n192.168.1.10 - - [03/Jul/2026:10:00:04] \"GET /dashboard\" 200\n192.168.1.10 - - [03/Jul/2026:10:00:05] \"GET /api/user\" 200\n192.168.1.15 - - [03/Jul/2026:10:00:06] \"GET /api/v1/metrics\" 200\n192.168.1.10 - - [03/Jul/2026:10:00:07] \"GET /logout\" 200\n"
      });
    }

    if (!fs.getNodeByPath("/home/learner", "src")) {
      fs.createNode("/home/learner", "src", "dir");
      fs.createNode("/home/learner/src", "app.js", "file", {
        content: "console.log('App running');\n"
      });
      fs.createNode("/home/learner/src", "utils.js", "file", {
        content: "module.exports = {};\n"
      });
    }

    if (!fs.getNodeByPath("/home/learner", "backups")) {
      fs.createNode("/home/learner", "backups", "dir");
      fs.createNode("/home/learner/backups", "checksums.sha256", "file", {
        content: "d62bd36ae2c36c209574e8478acb67acecea2c8d662433f095c3e40bd5122d0d  data_backup.tar.gz\n"
      });
      fs.createNode("/home/learner/backups", "data_backup.tar.gz", "file", {
        content: "Corrupted archive data payload\n"
      });
    }

    if (!fs.getNodeByPath("/var", "backups")) {
      fs.createNode("/var", "backups", "dir");
      fs.createNode("/var/backups", "data_backup.tar.gz", "file", {
        content: "Archive data payload version 1.0.0\nDatabase dump valid\n"
      });
    }

    if (!fs.getNodeByPath("/home/learner", "server.js")) {
      fs.createNode("/home/learner", "server.js", "file", {
        content: "const express = require('express');\nconst app = express();\nconst PORT = 3000;\n\napp.get('/health', (req, res) => res.json({ status: 'healthy' }));\napp.listen(PORT, () => console.log('Listening on ' + PORT));\n"
      });
    }

    const etcPasswd: any = fs.getNodeByPath("/etc", "passwd");
    if (etcPasswd && !etcPasswd.content.includes("deployer")) {
      etcPasswd.content += "deployer:x:1002:1002::/home/deployer:/bin/sh\n";
    }

    const custom = this.customQuest || this.state.customQuest;
    if (custom) {
      const startFile = custom.startingFile || {};
      const targetPath = startFile.path || custom.filePath;
      if (targetPath) {
        const content =
          startFile.content !== undefined
            ? startFile.content
            : custom.fileContent !== undefined
              ? custom.fileContent
              : "";
        const permissions =
          startFile.permissions || custom.filePerms || "644";

        const existing: any = fs.getNodeByPath("/", targetPath);
        if (existing && existing.type === "file") {
          existing.content = content;
          existing.permissions = permissions;
        } else {
          fs.createNode("/", targetPath, "file", {
            content,
            permissions,
            createParents: true,
          });
        }
      }
    }

    this.state.fsTree = fs.tree;

    if (!this.state.lessonStartTrees) {
      this.state.lessonStartTrees = {};
    }
    const activeId = this.state.activeLessonId;
    if (!this.state.lessonStartTrees[activeId]) {
      this.state.lessonStartTrees[activeId] = JSON.parse(
        JSON.stringify(fs.tree),
      );
    }

    const session = new ShellSession(
      fs,
      "/home/learner",
      this.state.installedPackages,
    );

    if (activeId === 90 && !completed.includes(90)) {
      session.rogueProcessAlive = true;
    }
    if (activeId === 93 && !completed.includes(93)) {
      session.services.apache2 = "inactive";
    }

    const currentLesson =
      lessons.find((l) => l.id === this.state.activeLessonId) || lessons[0];
    const globalWindow = window as any;
    globalWindow.appState = {
      ...globalWindow.appState,
      fs: fs,
      session: session,
      terminalCommands: [],
      xp: this.state.xp,
      completedLessons: this.state.completedLessons,
      activeLessonId: this.state.activeLessonId,
      activeLesson: currentLesson,
      activeView: this.state.activeView,
      streak: this.state.streak,
      lastCompletedDate: this.state.lastCompletedDate,
      bossRushMode: this.state.bossRushMode,
      bossRushStartTime: this.state.bossRushStartTime,
      fastestBossRushTime: this.state.fastestBossRushTime,
      fastestBossRushStr: this.state.fastestBossRushStr,
      resetActiveLessonFilesystem: () => {
        window.dispatchEvent(new CustomEvent("app:restore-lesson"));
      },
    };
  }

  startBossRushTimer() {
    if (this.bossRushInterval) {
      clearInterval(this.bossRushInterval);
      this.bossRushInterval = null;
    }

    const updateDisplay = () => {
      const timerEls = [
        document.getElementById("workspace-boss-rush-timer"),
        document.getElementById("lesson-boss-rush-timer"),
        document.getElementById("boss-rush-banner"),
      ];
      const displayEls = [
        document.getElementById("workspace-boss-rush-display"),
        document.getElementById("lesson-boss-rush-display"),
        document.getElementById("dashboard-boss-rush-timer"),
      ];

      if (!this.state.bossRushMode || !this.state.bossRushStartTime) {
        timerEls.forEach((el) => {
          if (el) {
            el.classList.add("hidden");
            el.classList.remove("flex", "inline-flex");
          }
        });
        return;
      }

      timerEls.forEach((el) => {
        if (el) {
          el.classList.remove("hidden");
          el.classList.add("flex");
        }
      });

      const elapsedMs = Math.max(0, Date.now() - this.state.bossRushStartTime);
      const totalSeconds = Math.floor(elapsedMs / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

      displayEls.forEach((el) => {
        if (el) {
          if (el.id === "dashboard-boss-rush-timer") {
            el.textContent = `⏱️ ${formatted}`;
          } else {
            el.textContent = formatted;
          }
        }
      });
    };

    updateDisplay();
    this.bossRushInterval = setInterval(updateDisplay, 500);
  }

  stopBossRushTimer() {
    if (this.bossRushInterval) {
      clearInterval(this.bossRushInterval);
      this.bossRushInterval = null;
    }
    const timerEls = [
      document.getElementById("workspace-boss-rush-timer"),
      document.getElementById("lesson-boss-rush-timer"),
      document.getElementById("boss-rush-banner"),
    ];
    timerEls.forEach((el) => {
      if (el) {
        el.classList.add("hidden");
        el.classList.remove("flex", "inline-flex");
      }
    });
  }

  bindEvents() {
    window.addEventListener("app:terminal-command", (e: any) => {
      const cmd = e.detail?.command;
      if (!cmd) return;
      const globalWindow = window as any;
      if (globalWindow.appState) {
        if (!Array.isArray(globalWindow.appState.terminalCommands)) {
          globalWindow.appState.terminalCommands = [];
        }
        globalWindow.appState.terminalCommands.push(cmd);
      }
    });

    window.addEventListener("app:view-change", (e: any) => {
      this.state.activeView = e.detail.view;
      this.applyViewVisibility();
      this.saveToStorage();
      this.broadcastState();
    });

    window.addEventListener("app:select-lesson", (e: any) => {
      this.state.activeLessonId = e.detail.lessonId;
      this.resetFilesystem();
      this.saveToStorage();
      this.broadcastState();
    });

    window.addEventListener("app:restore-lesson", () => {
      const activeId = this.state.activeLessonId;

      if (
        this.state.lessonStartTrees &&
        this.state.lessonStartTrees[activeId]
      ) {
        this.state.fsTree = JSON.parse(
          JSON.stringify(this.state.lessonStartTrees[activeId]),
        );
      } else {
        this.state.fsTree = null;
      }

      if (this.state.completedLessons.includes(activeId)) {
        this.state.completedLessons = this.state.completedLessons.filter(
          (id: number) => id !== activeId,
        );
        const lesson = lessons.find((l) => l.id === activeId);
        if (lesson) {
          this.state.xp = Math.max(0, this.state.xp - lesson.xp);
        }
      }

      this.resetFilesystem();
      this.saveToStorage();
      this.broadcastState();

      window.dispatchEvent(
        new CustomEvent("app:select-lesson", {
          detail: { lessonId: activeId },
        }),
      );
    });

    window.addEventListener("app:complete-lesson", (e: any) => {
      const { lessonId, xp } = e.detail;

      if (!this.state.completedLessons.includes(lessonId)) {
        this.state.completedLessons.push(lessonId);
        this.state.xp += xp;
      } else {
        const practiceXp = Math.max(5, Math.floor(xp * 0.1));
        this.state.xp += practiceXp;
      }

      // Check Boss Rush Completion (all 17 Boss Challenges completed)
      const bossLessons = lessons.filter((l) => l.title.includes("Boss Challenge"));
      const allBossesDone =
        bossLessons.length > 0 &&
        bossLessons.every((b) => this.state.completedLessons.includes(b.id));

      if ((this.state.bossRushMode || this.state.bossRushStartTime) && allBossesDone) {
        const startTime = this.state.bossRushStartTime || Date.now();
        const elapsedMs = Math.max(0, Date.now() - startTime);
        const prevFastest = localStorage.getItem("bashquest_fastest_boss_rush");
        const prevFastestMs = prevFastest ? parseInt(prevFastest, 10) : Infinity;

        const totalSec = Math.floor(elapsedMs / 1000);
        const mins = Math.floor(totalSec / 60);
        const secs = totalSec % 60;
        const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

        let isNewBest = false;
        if (elapsedMs < prevFastestMs) {
          isNewBest = true;
          localStorage.setItem("bashquest_fastest_boss_rush", elapsedMs.toString());
          localStorage.setItem("bashquest_fastest_boss_rush_str", formatted);
          this.state.fastestBossRushTime = elapsedMs;
          this.state.fastestBossRushStr = formatted;
        }

        window.dispatchEvent(
          new CustomEvent("app:boss-rush-completed", {
            detail: {
              elapsedMs,
              formattedTime: formatted,
              isNewBest,
            },
          }),
        );
      }

      this.updateStreak();
      this.saveToStorage();
      this.broadcastState();
    });

    window.addEventListener("app:toggle-boss-rush", (e: any) => {
      const targetState =
        typeof e.detail?.enable === "boolean"
          ? e.detail.enable
          : !this.state.bossRushMode;
      this.state.bossRushMode = targetState;

      if (this.state.bossRushMode) {
        if (!this.state.bossRushStartTime) {
          this.state.bossRushStartTime = Date.now();
        }
        localStorage.setItem("bashquest_boss_rush_mode", "true");
        localStorage.setItem(
          "bashquest_boss_rush_start",
          this.state.bossRushStartTime.toString(),
        );
        this.startBossRushTimer();
      } else {
        this.state.bossRushStartTime = null;
        localStorage.removeItem("bashquest_boss_rush_mode");
        localStorage.removeItem("bashquest_boss_rush_start");
        this.stopBossRushTimer();
      }

      this.saveToStorage();
      this.broadcastState();
    });

    window.addEventListener("app:reset-state", () => {
      localStorage.removeItem("bashquest_state");
      this.state = {
        xp: 0,
        completedLessons: [],
        activeView: "dashboard",
        activeLessonId: 1,
        streak: 0,
        lastCompletedDate: null,
        fsTree: null,
        lessonStartTrees: {},
        installedPackages: [
          "pwd",
          "whoami",
          "clear",
          "help",
          "cd",
          "ls",
          "mkdir",
          "touch",
          "cat",
          "echo",
          "rm",
          "cp",
          "mv",
          "chmod",
          "grep",
          "wc",
          "uniq",
          "sort",
          "man",
          "apt",
          "df",
          "du",
          "free",
          "uptime",
          "uname",
          "ps",
          "top",
          "htop",
          "kill",
          "sleep",
          "jobs",
          "fg",
          "ping",
          "ip",
          "curl",
          "find",
          "history",
          "systemctl",
          "nano",
          "bash",
          "sed",
          "awk",
          "cut",
          "tr",
          "ln",
          "tar",
          "chown",
          "export",
          "env",
          "xargs",
          "head",
          "tail",
          "less",
          "more",
          "journalctl",
          "which",
          "alias",
          "crontab",
          "useradd",
          "passwd",
          "su",
          "ssh",
          "scp",
          "gzip",
          "gunzip",
          "groupadd",
          "groups",
          "lscpu",
          "lsof",
          "zip",
          "unzip",
          "bzip2",
          "xz",
          "dpkg",
          "dnf",
          "yum",
          "adduser",
          "userdel",
          "id",
          "groupdel",
          "ifconfig",
          "nmcli",
          "netstat",
          "ss",
          "traceroute",
          "ufw",
          "iptables",
          "nice",
          "renice",
          "bg",
          "iostat",
          "exit",
          "file",
          "stat",
          "tree",
          "rmdir",
          "tee",
          "diff",
          "umask",
          "chgrp",
          "getfacl",
          "setfacl",
          "rpm",
          "snap",
          "lsblk",
          "blkid",
          "mount",
          "umount",
          "dmesg",
          "pgrep",
          "pkill",
          "killall",
          "nohup",
          "watch",
          "dig",
          "nslookup",
          "host",
          "wget",
          "nc",
          "hostname",
          "hostnamectl",
          "locate",
          "updatedb",
          "whereis",
          "type",
          "apropos",
          "whatis",
          "timedatectl",
          "shutdown",
          "reboot",
          "vim",
          "vi",
          "date",
          "jq",
          "strings",
          "xxd",
          "hexdump",
          "read",
          "rsync",
          "sha256sum",
          "md5sum",
          "dd",
          "mktemp",
          "source",
          "unset",
          "unalias",
          "usermod",
          "ssh-keygen",
          "ssh-copy-id",
          "who",
          "w",
          "last",
          "tmux",
          "git",
          "docker",
        ],
        bossRushMode: false,
        bossRushStartTime: null,
        fastestBossRushTime: null,
        fastestBossRushStr: null,
      };
      localStorage.removeItem("bashquest_boss_rush_mode");
      localStorage.removeItem("bashquest_boss_rush_start");
      localStorage.removeItem("bashquest_fastest_boss_rush");
      localStorage.removeItem("bashquest_fastest_boss_rush_str");
      this.stopBossRushTimer();
      this.resetFilesystem();
      this.applyViewVisibility();

      window.dispatchEvent(
        new CustomEvent("app:trigger-view-change", {
          detail: { view: "dashboard" },
        }),
      );

      this.saveToStorage();
      this.broadcastState();
    });

    window.addEventListener("app:filesystem-update", () => {
      const globalWindow = window as any;
      if (globalWindow.appState && globalWindow.appState.fs) {
        this.state.fsTree = globalWindow.appState.fs.tree;
        this.saveToStorage();
      }
    });

    window.addEventListener("app:package-installed", (e: any) => {
      if (!this.state.installedPackages.includes(e.detail.package)) {
        this.state.installedPackages.push(e.detail.package);
        this.saveToStorage();
      }
    });

    window.addEventListener("app:export-save", () => {
      try {
        const saveCode = btoa(encodeURIComponent(JSON.stringify(this.state)));
        window.dispatchEvent(
          new CustomEvent("app:show-export-modal", { detail: { saveCode } }),
        );
      } catch (e) {
        console.error("Failed to export state", e);
      }
    });

    window.addEventListener("app:import-save", (e: any) => {
      const { saveCode } = e.detail;
      try {
        const decoded = decodeURIComponent(atob(saveCode));
        const parsedState = JSON.parse(decoded);

        if (
          !parsedState ||
          typeof parsedState !== "object" ||
          typeof parsedState.xp !== "number"
        ) {
          throw new Error("Malformed save code schema");
        }

        this.state = {
          ...this.state,
          ...parsedState,
        };

        this.saveToStorage();
        window.dispatchEvent(new CustomEvent("app:import-success"));
        window.location.reload();
      } catch (err) {
        console.error("Failed to import save code", err);
        window.dispatchEvent(
          new CustomEvent("app:import-error", {
            detail: {
              message:
                "Invalid save code. Please ensure you copied the entire code correctly.",
            },
          }),
        );
      }
    });

    // Quick-access from about page button
    document
      .getElementById("btn-back-to-dashboard-from-about")
      ?.addEventListener("click", () => {
        window.dispatchEvent(
          new CustomEvent("app:trigger-view-change", {
            detail: { view: "dashboard" },
          }),
        );
      });

    // Mobile Workspace panel tab switching
    const tabLesson = document.getElementById("tab-mobile-lesson");
    const tabTerminal = document.getElementById("tab-mobile-terminal");
    const tabExplorer = document.getElementById("tab-mobile-explorer");

    const panelLesson = document.getElementById("container-mobile-lesson");
    const panelTerminal = document.getElementById("container-mobile-terminal");
    const panelExplorer = document.getElementById("container-mobile-explorer");

    const setMobilePanel = (active: "lesson" | "terminal" | "explorer") => {
      const isMobile = window.innerWidth < 1024;
      if (!isMobile) return;

      [tabLesson, tabTerminal, tabExplorer].forEach((t) => {
        t?.classList.remove("bg-primary", "text-on-primary");
        t?.classList.add("text-body", "hover:text-ink");
      });

      if (active === "lesson") {
        tabLesson?.classList.add("bg-primary", "text-on-primary");
        tabLesson?.classList.remove("text-body", "hover:text-ink");
        panelLesson?.classList.remove("hidden");
        panelLesson?.classList.add("block");
        panelTerminal?.classList.add("hidden");
        panelTerminal?.classList.remove("block");
        panelExplorer?.classList.add("hidden");
        panelExplorer?.classList.remove("block");
      } else if (active === "terminal") {
        tabTerminal?.classList.add("bg-primary", "text-on-primary");
        tabTerminal?.classList.remove("text-body", "hover:text-ink");
        panelTerminal?.classList.remove("hidden");
        panelTerminal?.classList.add("block");
        panelLesson?.classList.add("hidden");
        panelLesson?.classList.remove("block");
        panelExplorer?.classList.add("hidden");
        panelExplorer?.classList.remove("block");
        setTimeout(() => document.getElementById("terminal-input")?.focus(), 50);
      } else if (active === "explorer") {
        tabExplorer?.classList.add("bg-primary", "text-on-primary");
        tabExplorer?.classList.remove("text-body", "hover:text-ink");
        panelExplorer?.classList.remove("hidden");
        panelExplorer?.classList.add("block");
        panelLesson?.classList.add("hidden");
        panelLesson?.classList.remove("block");
        panelTerminal?.classList.add("hidden");
        panelTerminal?.classList.remove("block");
      }
    };

    tabLesson?.addEventListener("click", () => setMobilePanel("lesson"));
    tabTerminal?.addEventListener("click", () => setMobilePanel("terminal"));
    tabExplorer?.addEventListener("click", () => setMobilePanel("explorer"));

    // When selecting a lesson, show the quest instructions panel on mobile
    window.addEventListener("app:select-lesson", () => {
      setMobilePanel("lesson");
    });
  }

  updateStreak() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastDate = this.state.lastCompletedDate
      ? new Date(this.state.lastCompletedDate)
      : null;
    if (lastDate) lastDate.setHours(0, 0, 0, 0);

    if (!lastDate) {
      this.state.streak = 1;
    } else {
      const diffTime = today.getTime() - lastDate.getTime();
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        this.state.streak += 1;
      } else if (diffDays > 1) {
        this.state.streak = 1;
      }
    }
    this.state.lastCompletedDate = today.toDateString();
  }

  applyViewVisibility() {
    const viewDash = document.getElementById("view-dashboard");
    const viewSand = document.getElementById("view-sandbox");
    const viewAbout = document.getElementById("view-about");
    const viewTools = document.getElementById("view-tools");
    const footer = document.querySelector("footer");

    // Hide all views first
    viewDash?.classList.add("hidden");
    viewDash?.classList.remove("block");
    viewSand?.classList.add("hidden");
    viewSand?.classList.remove("block", "grid");
    viewAbout?.classList.add("hidden");
    viewAbout?.classList.remove("block");
    viewTools?.classList.add("hidden");
    viewTools?.classList.remove("block");

    if (this.state.activeView === "dashboard") {
      viewDash?.classList.remove("hidden");
      viewDash?.classList.add(
        "block",
        "animate-in",
        "fade-in",
        "duration-300",
      );
      footer?.classList.remove("hidden");
    } else if (this.state.activeView === "sandbox") {
      viewSand?.classList.remove("hidden");
      viewSand?.classList.add(
        "block",
        "animate-in",
        "fade-in",
        "duration-300",
      );
      footer?.classList.add("hidden");

      // Autofocus terminal prompt when entering workspace
      setTimeout(() => {
        document.getElementById("terminal-input")?.focus();
      }, 100);
    } else if (this.state.activeView === "about") {
      viewAbout?.classList.remove("hidden");
      viewAbout?.classList.add(
        "block",
        "animate-in",
        "fade-in",
        "duration-300",
      );
      footer?.classList.remove("hidden");
    } else if (this.state.activeView === "tools") {
      viewTools?.classList.remove("hidden");
      viewTools?.classList.add(
        "block",
        "animate-in",
        "fade-in",
        "duration-300",
      );
      footer?.classList.remove("hidden");
    }
  }

  broadcastState() {
    const globalWindow = window as any;
    if (globalWindow.appState) {
      globalWindow.appState.xp = this.state.xp;
      globalWindow.appState.completedLessons = this.state.completedLessons;
      globalWindow.appState.activeLessonId = this.state.activeLessonId;
      globalWindow.appState.streak = this.state.streak;
      globalWindow.appState.activeView = this.state.activeView;
      globalWindow.appState.bossRushMode = this.state.bossRushMode;
      globalWindow.appState.bossRushStartTime = this.state.bossRushStartTime;
      globalWindow.appState.fastestBossRushTime = this.state.fastestBossRushTime;
      globalWindow.appState.fastestBossRushStr = this.state.fastestBossRushStr;
      if (
        !globalWindow.appState.activeLesson ||
        globalWindow.appState.activeLesson.id !== this.state.activeLessonId
      ) {
        globalWindow.appState.activeLesson =
          lessons.find((l) => l.id === this.state.activeLessonId) || lessons[0];
      }
    }

    window.dispatchEvent(
      new CustomEvent("app:state-updated", {
        detail: this.state,
      }),
    );
  }

  saveToStorage() {
    localStorage.setItem("bashquest_state", JSON.stringify(this.state));
  }

  loadFromStorage() {
    const saved = localStorage.getItem("bashquest_state");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.state = { ...this.state, ...parsed };
      } catch (e) {
        console.error("Failed to parse storage, using defaults", e);
      }
    }

    const fastestMs = localStorage.getItem("bashquest_fastest_boss_rush");
    if (fastestMs) {
      this.state.fastestBossRushTime = parseInt(fastestMs, 10);
      this.state.fastestBossRushStr =
        localStorage.getItem("bashquest_fastest_boss_rush_str") || "";
    }

    const bossMode = localStorage.getItem("bashquest_boss_rush_mode");
    const bossStart = localStorage.getItem("bashquest_boss_rush_start");
    if (bossMode === "true" && bossStart) {
      this.state.bossRushMode = true;
      this.state.bossRushStartTime = parseInt(bossStart, 10);
      setTimeout(() => this.startBossRushTimer(), 100);
    }
  }
}

export function initApp() {
  new AppStateManager();

  // Feedback popup handler
  const btnFeedback = document.getElementById("btn-feedback");
  const modalFeedback = document.getElementById("modal-feedback");
  const closeFeedback = document.getElementById("btn-close-feedback");
  const cancelFeedback = document.getElementById("btn-cancel-feedback");
  const submitFeedback = document.getElementById("btn-submit-feedback");
  const feedbackTextarea = document.getElementById(
    "feedback-textarea",
  ) as HTMLTextAreaElement;

  btnFeedback?.addEventListener("click", () => {
    if (feedbackTextarea) feedbackTextarea.value = "";
    modalFeedback?.classList.remove("hidden");
  });

  const hideFeedbackModal = () => {
    modalFeedback?.classList.add("hidden");
  };

  closeFeedback?.addEventListener("click", hideFeedbackModal);
  cancelFeedback?.addEventListener("click", hideFeedbackModal);

  modalFeedback?.addEventListener("click", (e: any) => {
    if (e.target === modalFeedback) {
      hideFeedbackModal();
    }
  });

  submitFeedback?.addEventListener("click", () => {
    const text = feedbackTextarea ? feedbackTextarea.value.trim() : "";
    if (!text) return;

    const mailtoUrl = `mailto:support@bashquest.com?subject=BashQuest Feedback&body=${encodeURIComponent(text)}`;
    window.location.href = mailtoUrl;
    hideFeedbackModal();
  });

  let currentNanoFile = "";
  let currentNanoPath = "";

  window.addEventListener("app:open-nano", (e: any) => {
    const { filename, currentPath, content } = e.detail;
    currentNanoFile = filename;
    currentNanoPath = currentPath;

    const modal = document.getElementById("modal-nano-editor");
    const textarea = document.getElementById(
      "nano-textarea",
    ) as HTMLTextAreaElement;
    const title = document.getElementById("nano-filename");
    const modified = document.getElementById("nano-modified");

    if (title) title.textContent = `File: ${filename}`;
    if (modified) modified.textContent = "";
    if (textarea) textarea.value = content;

    modal?.classList.remove("hidden");
    setTimeout(() => textarea?.focus(), 100);
  });

  document.getElementById("nano-textarea")?.addEventListener("input", () => {
    const modified = document.getElementById("nano-modified");
    if (modified) modified.textContent = "[ Modified ]";
  });

  document
    .getElementById("nano-textarea")
    ?.addEventListener("keydown", (e: any) => {
      if (e.ctrlKey && e.key === "o") {
        e.preventDefault();
        saveNanoContent(false);
      } else if (e.ctrlKey && e.key === "x") {
        e.preventDefault();
        saveNanoContent(true);
      }
    });

  function saveNanoContent(shouldExit = false) {
    const textarea = document.getElementById(
      "nano-textarea",
    ) as HTMLTextAreaElement;
    const content = textarea ? textarea.value : "";

    const globalWindow = window as any;
    if (
      globalWindow.appState &&
      globalWindow.appState.fs &&
      currentNanoFile
    ) {
      const fs = globalWindow.appState.fs;

      const existing = fs.getNodeByPath(currentNanoPath, currentNanoFile);
      if (existing && existing.type === "file") {
        existing.content = content;
      } else {
        fs.createNode(currentNanoPath, currentNanoFile, "file", { content });
      }

      window.dispatchEvent(new CustomEvent("app:filesystem-update"));

      window.dispatchEvent(
        new CustomEvent("app:print-terminal", {
          detail: {
            text: `[ File '${currentNanoFile}' saved successfully ]`,
          },
        }),
      );

      const modified = document.getElementById("nano-modified");
      if (modified) modified.textContent = "";
    }

    if (shouldExit) {
      document.getElementById("modal-nano-editor")?.classList.add("hidden");

      setTimeout(() => {
        document.getElementById("terminal-input")?.focus();
      }, 50);
    }
  }

  document
    .getElementById("btn-nano-cancel")
    ?.addEventListener("click", () => {
      document.getElementById("modal-nano-editor")?.classList.add("hidden");
      setTimeout(() => {
        document.getElementById("terminal-input")?.focus();
      }, 50);
    });
  document.getElementById("btn-nano-save")?.addEventListener("click", () => {
    saveNanoContent(false);
  });
  document.getElementById("btn-nano-exit")?.addEventListener("click", () => {
    saveNanoContent(true);
  });
}

// Auto-run when imported in browser or on DOM ready
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
}
