import { FileSystem, ShellSession } from "../lib/linuxEngine";
import { lessons } from "../lib/lessons";

export class AppStateManager {
  state: any;
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
      ],
    };

    this.init();
  }

  init() {
    this.loadFromStorage();

    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const viewParam = urlParams.get("view");
      if (
        viewParam === "dashboard" ||
        viewParam === "sandbox" ||
        viewParam === "about" ||
        viewParam === "tools"
      ) {
        this.state.activeView = viewParam;
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

    if (completed.includes(10) && !completed.includes(12)) {
      const statusNode = fs.getNodeByPath("/home/learner", "status.txt");
      if (!statusNode) {
        fs.createNode("/home/learner", "status.txt", "file", {
          content: "System Online\nAll Checks Green\n",
        });
      }
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

    if (!fs.getNodeByPath("/etc", "group")) {
      fs.createNode("/etc", "group", "file", {
        content: "root:x:0:\nlearner:x:1000:\nsudo:x:27:learner\n",
      });
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

    const globalWindow = window as any;
    globalWindow.appState = {
      ...globalWindow.appState,
      fs: fs,
      session: session,
      terminalCommands: [],
      xp: this.state.xp,
      completedLessons: this.state.completedLessons,
      activeLessonId: this.state.activeLessonId,
      streak: this.state.streak,
      lastCompletedDate: this.state.lastCompletedDate,
    };
  }

  bindEvents() {
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

      this.updateStreak();
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
        ],
      };
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
