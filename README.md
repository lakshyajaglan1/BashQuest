# BashQuest 🐧⚡

> **Master the Linux Terminal through Gamified, Interactive In-Browser Quests.**

**BashQuest** is a free, modern, browser-based interactive Linux terminal learning platform built with Astro. Learn Linux and bash commands hands-on through structured, gamified quests featuring 150 interactive quests across 17 curriculum modules, plus an English handbook and real-system labs — completely **100% client-side** with zero installation, container overhead, or backend server required.

---

## ✨ Key Features

- 💻 **Real-Time Interactive Terminal Simulator**: Run bash commands in a responsive web terminal emulating standard GNU/Linux coreutils, pipelines (`|`), stream redirection (`>`, `>>`, `<`), environment variables, permissions, and command history.
- 🎯 **150 Interactive Quests & Lessons**: Step-by-step interactive learning objectives that inspect your shell state, command history, and virtual filesystem in real time to verify task completion.
- 📚 **17 Curriculum Modules**:
  1. **Filesystem Basics** (`whoami`, `pwd`, `ls`, `cd`)
  2. **File Manipulation** (`touch`, `mkdir`, `cp`, `mv`, `rm`)
  3. **Pipes & Filtering** (`grep`, `wc`, `sort`, `uniq`, `head`, `tail`)
  4. **Redirection & Security** (`chmod`, `chown`, stdout/stderr redirection)
  5. **Superuser & Packages** (`sudo`, `apt`, package management concepts)
  6. **Disk & System Resources** (`df`, `du`, `free`, `uname`)
  7. **Process Management** (`ps`, `top`, `kill`, backgrounding `&`)
  8. **Network Troubleshooting** (`ping`, `curl`, `netstat`, `ip`)
  9. **Finding Files & Search** (`find`, `which`, `locate`)
  10. **Services & Systemd** (`systemctl`, service lifecycle)
  11. **Terminal Text Editing** (In-browser GNU Nano editor)
  12. **Shell Scripting & Automation** (Variables, loops, bash script execution)
  13. **Advanced Text Processing** (`sed`, `awk`, regex parsing)
  14. **Environment & Users** (`export`, `env`, user configuration)
  15. **Archives & Backups** (`tar`, compression, restore verification)
  16. **Remote Access & User Admin** (`ssh`, user accounts, groups)
  17. **Git & Containers** (Repository workflows, logs, container lifecycle)
- 📝 **In-Browser GNU Nano Editor**: Open, edit, and save virtual files in a fully keyboard-navigable recreation of GNU Nano within the terminal window.
- 🌲 **Live Filesystem Visualizer**: An interactive tree visualizer dynamically updating as you create, delete, move, or modify files and directories.
- 🏆 **Gamified Progression**: Earn XP points, unlock milestone achievement badges, check off multi-step objectives, and access 3-tier progressive hints when stuck.
- 🌐 **Quest Interface in 8 Languages (new handbook currently English)**:
  - English (`en`)
  - Spanish / Español (`es`)
  - Japanese / 日本語 (`ja`)
  - French / Français (`fr`)
  - German / Deutsch (`de`)
  - Portuguese / Português (`pt`)
  - Korean / 한국어 (`ko`)
  - Italian / Italiano (`it`)
- 🔒 **100% Client-Side & Private**: Everything executes inside your browser's memory sandbox. No remote server execution, no login barrier, and no telemetry storing commands.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation / Island Architecture)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens and dark mode styling
- **Language**: TypeScript & Modern ES Modules
- **Terminal & Emulation Engine**: Custom virtual Linux filesystem, shell execution environment, and interactive ANSI terminal renderer

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version `22.12.0` or higher recommended)
- `npm` (packaged with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/BashQuest.git
cd BashQuest
npm install
```

### Local Development

Start the Astro development server:

```bash
npm run astro -- dev --background
```

The application will be available at `http://localhost:4321`.

### Production Build

Build the optimized static bundle for deployment:

```bash
npm run build
```

The compiled static assets will be output to the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
BashQuest/
├── public/              # Static assets (favicons, sitemap.xml, _headers, robots.txt)
├── src/
│   ├── assets/          # Project images and icons
│   ├── components/      # Reusable UI components (Terminal, Navbar, Lessons, etc.)
│   ├── i18n/            # Internationalization dictionaries and utility helpers
│   ├── layouts/         # Page layouts and SEO metadata management (Layout.astro)
│   ├── lib/             # Linux terminal simulation engine and quest definitions
│   │   ├── lessons.js       # Curriculum modules, quests, and verification tests
│   │   └── linuxEngine.js   # In-memory virtual Linux filesystem and shell engine
│   ├── pages/           # Astro routes (en at root, localized routes in [lang]/)
│   └── styles/          # Global CSS and Tailwind directives
├── astro.config.mjs     # Astro configuration (i18n, Tailwind integration)
├── package.json         # Project metadata and dependencies
└── tsconfig.json        # TypeScript configuration
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

## Learning library and validation

Visit `/learn/` for 17 concept chapters with examples and knowledge checks, a searchable reference for all 150 quests, and five real-system labs. Chapters link directly to their practice quests. Completion certificates are no longer part of the product.

The terminal is a JavaScript teaching simulator, not a Linux kernel or a complete Bash interpreter. Services, networking, packages, Git, and containers use simulated state. Use the real-system labs in a disposable VM or other suitable isolated environment to practise actual system behavior. Advanced specialist study and real operational experience remain necessary.

```bash
npm test
npm run check
npm run build
npm run check:links
```

The regression suite checks all quest starting states, scripted solutions for all 17 boss challenges, selected filesystem and shell semantics, progress validation, duplicate XP prevention, and unavailable storage. The link audit checks generated local page and asset targets across every locale; it does not test external URLs or every supported command combination.

Manage the development server with `npm run astro -- dev status`, `npm run astro -- dev logs`, and `npm run astro -- dev stop`.
