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
                  name: 'notes.txt',
                  type: 'file',
                  content: 'Welcome to BashQuest!\nPractice your Linux skills here.\n',
                  permissions: '644',
                  owner: 'learner',
                  group: 'learner'
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
                },
                {
                  name: 'api.json',
                  type: 'file',
                  content: '{\n  "service": "bashquest-api",\n  "status": "ok",\n  "version": "1.4.2",\n  "users": [\n    {"id": 1, "name": "Alice", "role": "admin"},\n    {"id": 2, "name": "Bob", "role": "developer"},\n    {"id": 3, "name": "Charlie", "role": "viewer"}\n  ]\n}\n',
                  permissions: '644',
                  owner: 'learner',
                  group: 'learner'
                },
                {
                  name: 'access.log',
                  type: 'file',
                  content: '192.168.1.10 - - [18/Oct/2026:01:00:00] "GET /index.html" 200\n192.168.1.15 - - [18/Oct/2026:01:00:01] "GET /api/v1/status" 200\n192.168.1.10 - - [18/Oct/2026:01:00:02] "POST /api/v1/auth" 200\n192.168.1.20 - - [18/Oct/2026:01:00:03] "GET /images/logo.png" 304\n192.168.1.10 - - [18/Oct/2026:01:00:04] "GET /dashboard" 200\n192.168.1.15 - - [18/Oct/2026:01:00:05] "GET /api/v1/metrics" 200\n192.168.1.25 - - [18/Oct/2026:01:00:06] "GET /favicon.ico" 404\n192.168.1.10 - - [18/Oct/2026:01:00:07] "GET /index.html" 200\n',
                  permissions: '644',
                  owner: 'learner',
                  group: 'learner'
                },
                {
                  name: 'app.db',
                  type: 'file',
                  content: 'SQLite format 3\x00\x10\x00\x01\x01\x00@  \x00\x00\x00\x01\x00\x00\x00\x00DATABASE_VERSION=2026.1\n',
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
              name: 'group',
              type: 'file',
              content: 'root:x:0:\nlearner:x:1000:\nsudo:x:27:learner\n',
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
            },
            {
              name: 'fstab',
              type: 'file',
              content: '# /etc/fstab: static file system information.\n# <file system> <mount point>   <type>  <options>       <dump>  <pass>\nUUID=4a8c9e12-3f44-42b7-a876-0bf1829e1234 / ext4 errors=remount-ro 0 1\nUUID=7B3C-91E2 /boot/efi vfat umask=0077 0 1\nUUID=8f1c3a77-90d2-4e63-bf55-6c7104882190 /mnt/data ext4 defaults,noatime 0 2\n',
              permissions: '644',
              owner: 'root',
              group: 'root'
            },
            {
              name: 'resolv.conf',
              type: 'file',
              content: '# This is /run/systemd/resolve/stub-resolv.conf managed by systemd-resolved(8).\nnameserver 127.0.0.53\noptions edns0 trust-ad\nsearch localdomain\n',
              permissions: '644',
              owner: 'root',
              group: 'root'
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
        },
        {
          name: 'mnt',
          type: 'dir',
          permissions: '755',
          owner: 'root',
          group: 'root',
          children: [
            {
              name: 'data',
              type: 'dir',
              permissions: '755',
              owner: 'root',
              group: 'root',
              children: []
            }
          ]
        },
        {
          name: 'dev',
          type: 'dir',
          permissions: '755',
          owner: 'root',
          group: 'root',
          children: [
            {
              name: 'null',
              type: 'file',
              content: '',
              permissions: '666',
              owner: 'root',
              group: 'root'
            },
            {
              name: 'sda',
              type: 'file',
              content: '',
              permissions: '660',
              owner: 'root',
              group: 'disk'
            },
            {
              name: 'sda1',
              type: 'file',
              content: '',
              permissions: '660',
              owner: 'root',
              group: 'disk'
            },
            {
              name: 'sda2',
              type: 'file',
              content: '',
              permissions: '660',
              owner: 'root',
              group: 'disk'
            },
            {
              name: 'sdb',
              type: 'file',
              content: '',
              permissions: '660',
              owner: 'root',
              group: 'disk'
            },
            {
              name: 'sdb1',
              type: 'file',
              content: '',
              permissions: '660',
              owner: 'root',
              group: 'disk'
            }
          ]
        },
        {
          name: 'bin',
          type: 'dir',
          permissions: '755',
          owner: 'root',
          group: 'root',
          children: [
            {
              name: 'app',
              type: 'file',
              content: '\x7fELF\x02\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00BashQuest Core Engine v2.4\nGCC 13.2.0 (Ubuntu)\nCopyright (C) 2026 BashQuest Corp.\nDatabase connection pool initialized.\nFatal error: memory allocation failure.\n',
              permissions: '755',
              owner: 'root',
              group: 'root'
            }
          ]
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
      ...(type === 'dir'
        ? { children: [] }
        : type === 'link'
          ? { target: options.target || '' }
          : { content: options.content || '' })
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

export function expandBraces(pattern) {
  if (typeof pattern !== 'string') return [pattern];
  const match = pattern.match(/\{([^{}]+)\}/);
  if (!match) return [pattern];

  const prefix = pattern.slice(0, match.index);
  const suffix = pattern.slice(match.index + match[0].length);
  const inner = match[1];

  let expansions = [];
  const rangeMatch = inner.match(/^([a-zA-Z0-9]+)\.\.([a-zA-Z0-9]+)$/);
  if (rangeMatch) {
    const start = rangeMatch[1];
    const end = rangeMatch[2];
    const isNum = /^-?\d+$/.test(start) && /^-?\d+$/.test(end);
    if (isNum) {
      const s = parseInt(start, 10);
      const e = parseInt(end, 10);
      const step = s <= e ? 1 : -1;
      for (let i = s; s <= e ? i <= e : i >= e; i += step) {
        expansions.push(String(i));
      }
    } else if (start.length === 1 && end.length === 1) {
      const s = start.charCodeAt(0);
      const e = end.charCodeAt(0);
      const step = s <= e ? 1 : -1;
      for (let i = s; s <= e ? i <= e : i >= e; i += step) {
        expansions.push(String.fromCharCode(i));
      }
    } else {
      expansions = [inner];
    }
  } else if (inner.includes(',')) {
    expansions = inner.split(',');
  } else {
    expansions = [inner];
  }

  const results = [];
  for (const exp of expansions) {
    results.push(...expandBraces(prefix + exp + suffix));
  }
  return results;
}

function simpleSha256(str) {
  function rightRotate(value, amount) { return (value >>> amount) | (value << (32 - amount)); }
  const mathPow = Math.pow;
  const maxWord = mathPow(2, 32);
  let lengthProperty = 'length';
  let i, j;
  let result = '';
  const words = [];
  const asciiBitLength = str[lengthProperty] * 8;
  const hash = [];
  const k = [];
  let primeCounter = 0;
  const isComposite = {};
  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) { isComposite[i] = candidate; }
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }
  str += '\x80';
  while ((str[lengthProperty] % 64) - 56) str += '\x00';
  for (i = 0; i < str[lengthProperty]; i++) {
    j = str.charCodeAt(i);
    words[i >> 2] |= j << ((3 - (i % 4)) * 8);
  }
  words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0;
  words[words[lengthProperty]] = asciiBitLength;
  for (j = 0; j < words[lengthProperty]; ) {
    const w = words.slice(j, (j += 16));
    const oldHash = hash.slice(0);
    for (i = 0; i < 64; i++) {
      const w15 = w[i - 15], w2 = w[i - 2];
      const s0 = rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3);
      const s1 = rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10);
      w[i] = i < 16 ? w[i] : (w[i - 16] + s0 + w[i - 7] + s1) | 0;
      const s1h = rightRotate(hash[4], 6) ^ rightRotate(hash[4], 11) ^ rightRotate(hash[4], 25);
      const ch = (hash[4] & hash[5]) ^ (~hash[4] & hash[6]);
      const temp1 = hash[7] + s1h + ch + k[i] + w[i];
      const s0h = rightRotate(hash[0], 2) ^ rightRotate(hash[0], 13) ^ rightRotate(hash[0], 22);
      const maj = (hash[0] & hash[1]) ^ (hash[0] & hash[2]) ^ (hash[1] & hash[2]);
      const temp2 = s0h + maj;
      hash[7] = hash[6];
      hash[6] = hash[5];
      hash[5] = hash[4];
      hash[4] = (hash[3] + temp1) | 0;
      hash[3] = hash[2];
      hash[2] = hash[1];
      hash[1] = hash[0];
      hash[0] = (temp1 + temp2) | 0;
    }
    for (i = 0; i < 8; i++) { hash[i] = (hash[i] + oldHash[i]) | 0; }
  }
  for (i = 0; i < 8; i++) {
    for (j = 3; j >= 0; j--) {
      const b = (hash[i] >> (j * 8)) & 255;
      result += (b < 16 ? '0' : '') + b.toString(16);
    }
  }
  return result;
}

function simpleMd5(str) {
  function safeAdd(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
  }
  function bitRol(num, cnt) { return (num << cnt) | (num >>> (32 - cnt)); }
  function md5cmn(q, a, b, x, s, t) { return safeAdd(bitRol(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b); }
  function md5ff(a, b, c, d, x, s, t) { return md5cmn((b & c) | (~b & d), a, b, x, s, t); }
  function md5gg(a, b, c, d, x, s, t) { return md5cmn((b & d) | (c & ~d), a, b, x, s, t); }
  function md5hh(a, b, c, d, x, s, t) { return md5cmn(b ^ c ^ d, a, b, x, s, t); }
  function md5ii(a, b, c, d, x, s, t) { return md5cmn(c ^ (b | ~d), a, b, x, s, t); }
  function binlMD5(x, len) {
    x[len >> 5] |= 0x80 << (len % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    let a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (let i = 0; i < x.length; i += 16) {
      const olda = a, oldb = b, oldc = c, oldd = d;
      a = md5ff(a, b, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5gg(b, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);

      a = md5ii(a, b, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);

      a = safeAdd(a, olda);
      b = safeAdd(b, oldb);
      c = safeAdd(c, oldc);
      d = safeAdd(d, oldd);
    }
    return [a, b, c, d];
  }
  const bin = [];
  for (let i = 0; i < str.length * 8; i += 8) {
    bin[i >> 5] |= (str.charCodeAt(i / 8) & 255) << (i % 32);
  }
  const raw = binlMD5(bin, str.length * 8);
  let hex = '';
  for (let i = 0; i < raw.length * 4; i++) {
    hex += '0123456789abcdef'.charAt((raw[i >> 2] >> ((i % 4) * 8 + 4)) & 0xf) +
           '0123456789abcdef'.charAt((raw[i >> 2] >> ((i % 4) * 8)) & 0xf);
  }
  return hex;
}

// Shell Command Interpreter Engine
export class ShellSession {
  constructor(fileSystem, currentPath = '/home/learner', installedPackages = null) {
    this.fs = fileSystem;
    this.currentPath = currentPath;
    this.history = [];
    this.rogueProcessAlive = true;
    this.services = { apache2: 'inactive', nginx: 'inactive' };
    this.enabledServices = new Set(['apache2']);
    this.lastExitCode = 0;
    this.timezone = 'UTC';
    this.vimState = null;
    this.tmuxSessions = new Set(['work']);
    this.gitState = { staged: false, committed: false };
    this.bgJobs = [];
    this.umask = '0022';
    this.hereDocState = null;
    this.hostname = 'bashquest';
    this.mounts = {};
    this.minerAlive = true;
    this.updatedbRun = false;
    this.processes = [
      { pid: 1, name: 'systemd', user: 'root', cmd: '/sbin/init' },
      { pid: 402, name: 'systemd-journald', user: 'root', cmd: '/lib/systemd/systemd-journald' },
      { pid: 712, name: 'sshd', user: 'root', cmd: '/usr/sbin/sshd -D' },
      { pid: 1045, name: 'nginx', user: 'root', cmd: 'nginx: master process /usr/sbin/nginx' },
      { pid: 1046, name: 'nginx', user: 'www-data', cmd: 'nginx: worker process' },
      { pid: 1337, name: 'miner', user: 'learner', cmd: './miner --threads 4' },
      { pid: 1420, name: 'bash', user: 'learner', cmd: '/bin/bash' }
    ];

    const defaultPkgs = [
      'pwd', 'whoami', 'clear', 'help', 'cd', 'ls', 'mkdir', 'touch', 'cat', 'echo',
      'rm', 'cp', 'mv', 'chmod', 'grep', 'wc', 'uniq', 'sort', 'man', 'apt',
      'df', 'du', 'free', 'uptime', 'uname', 'ps', 'top', 'htop', 'kill', 'sleep',
      'jobs', 'fg', 'ping', 'ip', 'curl', 'find', 'history', 'systemctl', 'nano',
      'bash', 'sed', 'awk', 'cut', 'tr', 'ln', 'tar', 'chown', 'export', 'env', 'xargs',
      'head', 'tail', 'less', 'more', 'journalctl', 'which', 'alias', 'crontab',
      'useradd', 'passwd', 'su', 'ssh', 'scp', 'gzip', 'gunzip', 'groupadd', 'groups',
      'lscpu', 'lsof', 'zip', 'unzip', 'bzip2', 'xz', 'dpkg', 'dnf', 'yum', 'adduser',
      'userdel', 'id', 'groupdel', 'ifconfig', 'nmcli', 'netstat', 'ss', 'traceroute',
      'ufw', 'iptables', 'nice', 'renice', 'bg', 'iostat', 'exit',
      'file', 'stat', 'tree', 'rmdir', 'tee', 'diff', 'umask', 'chgrp', 'getfacl', 'setfacl',
      'rpm', 'snap', 'lsblk', 'blkid', 'mount', 'umount', 'dmesg',
      'pgrep', 'pkill', 'killall', 'nohup', 'watch', 'dig', 'nslookup',
      'host', 'wget', 'nc', 'hostname', 'hostnamectl', 'locate',
      'updatedb', 'whereis', 'type', 'apropos', 'whatis',
      'timedatectl', 'shutdown', 'reboot', 'vim', 'vi', 'date', 'jq', 'strings', 'xxd', 'hexdump', 'read',
      'rsync', 'sha256sum', 'md5sum', 'dd', 'mktemp', 'source', '.', 'unset', 'unalias',
      'usermod', 'ssh-keygen', 'ssh-copy-id', 'who', 'w', 'last', 'tmux', 'git', 'docker'
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

  execute(commandLine, initialStdin = '') {
    const trimmed = commandLine.trim();
    if (!trimmed && !this.hereDocState && !this.vimState) {
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    // Check if waiting for interactive vim input
    if (this.vimState) {
      this.history.push(commandLine);
      return this.handleVimInput(commandLine);
    }

    // Check if waiting for interactive heredoc lines
    if (this.hereDocState) {
      this.history.push(commandLine);
      if (trimmed === this.hereDocState.delimiter) {
        const saved = this.hereDocState;
        this.hereDocState = null;
        return this.execute(saved.origCommand, saved.lines.join('\n'));
      } else {
        this.hereDocState.lines.push(commandLine);
        return { stdout: '', stderr: '', currentPath: this.currentPath, isHereDoc: true };
      }
    }

    this.history.push(trimmed);

    // Check for command chaining (&&, ||, and ;) outside quotes
    const isControlBlock = /^(while|for|if|case)\b/.test(trimmed);
    const chainOps = [];
    let curCmd = '';
    let inQ = false;
    let qC = '';
    let hasChaining = false;

    for (let i = 0; i < trimmed.length; i++) {
      const ch = trimmed[i];
      if ((ch === '"' || ch === "'") && (i === 0 || trimmed[i - 1] !== '\\')) {
        if (inQ && ch === qC) inQ = false;
        else if (!inQ) { inQ = true; qC = ch; }
        curCmd += ch;
      } else if (!inQ && ch === '&' && trimmed[i + 1] === '&') {
        hasChaining = true;
        chainOps.push({ cmd: curCmd.trim(), nextOp: '&&' });
        curCmd = '';
        i++;
      } else if (!inQ && ch === '|' && trimmed[i + 1] === '|') {
        hasChaining = true;
        chainOps.push({ cmd: curCmd.trim(), nextOp: '||' });
        curCmd = '';
        i++;
      } else if (
        !inQ &&
        !isControlBlock &&
        ch === ';' &&
        (i === 0 || trimmed[i - 1] !== '\\') &&
        trimmed[i + 1] !== ';' &&
        (i === 0 || trimmed[i - 1] !== ';')
      ) {
        hasChaining = true;
        chainOps.push({ cmd: curCmd.trim(), nextOp: ';' });
        curCmd = '';
      } else {
        curCmd += ch;
      }
    }
    if (hasChaining) {
      if (curCmd.trim()) {
        chainOps.push({ cmd: curCmd.trim(), nextOp: null });
      }
      let combinedStdout = '';
      let combinedStderr = '';
      let lastExit = 0;
      for (let i = 0; i < chainOps.length; i++) {
        const step = chainOps[i];
        if (!step.cmd) continue;
        if (i > 0) {
          const prevOp = chainOps[i - 1].nextOp;
          if (prevOp === '&&' && lastExit !== 0) continue;
          if (prevOp === '||' && lastExit === 0) continue;
          // prevOp === ';' executes unconditionally
        }
        const res = this.execute(step.cmd, initialStdin);
        if (res.stdout) combinedStdout += (combinedStdout ? '\n' : '') + res.stdout;
        if (res.stderr) combinedStderr += (combinedStderr ? '\n' : '') + res.stderr;
        lastExit = res.stderr ? 1 : 0;
        this.lastExitCode = lastExit;
      }
      return { stdout: combinedStdout, stderr: combinedStderr, currentPath: this.currentPath };
    }

    // Check if input is a complete multi-line heredoc string
    if (commandLine.includes('<<') && commandLine.includes('\n')) {
      const lines = commandLine.split('\n');
      const firstLine = lines[0];
      const match = firstLine.match(/<<\s*['"]?([A-Za-z0-9_]+)['"]?/);
      if (match) {
        const delim = match[1];
        const heredocBody = [];
        let endIdx = -1;
        for (let i = 1; i < lines.length; i++) {
          if (lines[i].trim() === delim) {
            endIdx = i;
            break;
          }
          heredocBody.push(lines[i]);
        }
        if (endIdx !== -1) {
          const strippedFirstLine = firstLine.replace(/<<\s*['"]?[A-Za-z0-9_]+['"]?/, '');
          return this.execute(strippedFirstLine, heredocBody.join('\n'));
        }
      }
    }

    // Check if command is initiating an interactive heredoc
    const heredocMatch = trimmed.match(/<<\s*['"]?([A-Za-z0-9_]+)['"]?/);
    if (heredocMatch && !commandLine.includes('\n')) {
      const delim = heredocMatch[1];
      const stripped = trimmed.replace(/<<\s*['"]?[A-Za-z0-9_]+['"]?/, '');
      this.hereDocState = { delimiter: delim, origCommand: stripped, lines: [] };
      return { stdout: '', stderr: '', currentPath: this.currentPath, isHereDoc: true };
    }

    // Evaluate $(...) command substitutions
    let substituted = trimmed;
    if (substituted.includes('$(')) {
      substituted = substituted.replace(/\$\(([^)]+)\)/g, (_, innerCmd) => {
        const innerRes = this.execute(innerCmd);
        return innerRes.stdout.trim();
      });
    }

    // Evaluate $? exit code
    substituted = substituted.replace(/\$\?/g, () => String(this.lastExitCode !== undefined ? this.lastExitCode : 0));

    // Variable assignment: e.g. TODAY=$(date +%F) or APP_ENV=production
    const assignMatch = substituted.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (assignMatch && !substituted.includes(' ') && !this.installedPackages.has(assignMatch[1])) {
      const varName = assignMatch[1];
      let val = assignMatch[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      this.env[varName] = val;
      this.lastExitCode = 0;
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    // While loop emulation: while read -r line; do ... done < file.txt
    if (substituted.startsWith('while')) {
      const fileMatch = substituted.match(/<\s*(\S+)\s*$/);
      let linesToRead = ['line1', 'line2'];
      if (fileMatch) {
        const fPath = fileMatch[1];
        const fNode = this.fs.getNodeByPath(this.currentPath, fPath);
        if (fNode && fNode.content) {
          linesToRead = fNode.content.split('\n').filter(Boolean);
        }
      }
      const doMatch = substituted.match(/do\s+(.+?)\s+done/);
      const loopBody = doMatch ? doMatch[1].replace(/;\s*$/, '').trim() : 'echo $line';
      const loopOutputs = [];
      for (const line of linesToRead) {
        this.env.line = line;
        const iterCmd = loopBody.replace(/\$line\b/g, line).replace(/\$REPLY\b/g, line);
        const iterRes = this.execute(iterCmd);
        if (iterRes.stdout) loopOutputs.push(iterRes.stdout);
      }
      this.lastExitCode = 0;
      return { stdout: loopOutputs.join('\n'), stderr: '', currentPath: this.currentPath };
    }

    // Case statement emulation: case $1 in start|stop) ... esac
    if (substituted.startsWith('case')) {
      this.lastExitCode = 0;
      return { stdout: '[case statement matched branch: execution completed]', stderr: '', currentPath: this.currentPath };
    }

    // Substitute environment variables (not inside single quotes and skipping $NF / $NR / positional params)
    substituted = substituted.replace(/'[^']*'|\$(\w+)/g, (match, varName) => {
      if (match.startsWith("'")) return match;
      if (/^\d+$/.test(varName) || varName === 'NF' || varName === 'NR') return match;
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

    let stdin = initialStdin;
    let lastResult = { stdout: '', stderr: '', currentPath: this.currentPath };

    for (let s = 0; s < pipelineSegments.length; s++) {
      const segment = pipelineSegments[s];
      const isPiped = s < pipelineSegments.length - 1;

      let stdoutRedir = null;
      let stderrRedir = null;
      let combineStreams = false;
      let cmdToRun = segment;

      if (s === pipelineSegments.length - 1) {
        let cleanSegment = segment;
        if (cleanSegment.includes('2>&1')) {
          combineStreams = true;
          cleanSegment = cleanSegment.replace(/2>&1/g, '').trim();
        }
        const andAppendMatch = cleanSegment.match(/&>>\s*(\S+)/);
        if (andAppendMatch) {
          stdoutRedir = { file: andAppendMatch[1], type: 'append' };
          stderrRedir = { file: andAppendMatch[1], type: 'append' };
          cleanSegment = cleanSegment.replace(andAppendMatch[0], '').trim();
        }
        const andWriteMatch = cleanSegment.match(/&>\s*(\S+)/);
        if (andWriteMatch) {
          stdoutRedir = { file: andWriteMatch[1], type: 'write' };
          stderrRedir = { file: andWriteMatch[1], type: 'write' };
          cleanSegment = cleanSegment.replace(andWriteMatch[0], '').trim();
        }
        const errAppendMatch = cleanSegment.match(/2>>\s*(\S+)/);
        if (errAppendMatch) {
          stderrRedir = { file: errAppendMatch[1], type: 'append' };
          cleanSegment = cleanSegment.replace(errAppendMatch[0], '').trim();
        }
        const errWriteMatch = cleanSegment.match(/2>\s*(\S+)/);
        if (errWriteMatch) {
          stderrRedir = { file: errWriteMatch[1], type: 'write' };
          cleanSegment = cleanSegment.replace(errWriteMatch[0], '').trim();
        }
        const outAppendMatch = cleanSegment.match(/>>\s*(\S+)/);
        if (outAppendMatch) {
          stdoutRedir = { file: outAppendMatch[1], type: 'append' };
          cleanSegment = cleanSegment.replace(outAppendMatch[0], '').trim();
        }
        const outWriteMatch = cleanSegment.match(/>\s*(\S+)/);
        if (outWriteMatch) {
          stdoutRedir = { file: outWriteMatch[1], type: 'write' };
          cleanSegment = cleanSegment.replace(outWriteMatch[0], '').trim();
        }
        if (combineStreams && stdoutRedir) {
          stderrRedir = { file: stdoutRedir.file, type: stdoutRedir.type };
        }
        cmdToRun = cleanSegment.trim();
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

      // Perform brace expansion on unquoted arguments
      const braceExpandedArgs = [];
      const braceExpandedQuoted = [];
      for (let i = 0; i < args.length; i++) {
        if (!argsQuoted[i] && args[i].includes('{') && args[i].includes('}')) {
          const expanded = expandBraces(args[i]);
          braceExpandedArgs.push(...expanded);
          for (let k = 0; k < expanded.length; k++) {
            braceExpandedQuoted.push(false);
          }
        } else {
          braceExpandedArgs.push(args[i]);
          braceExpandedQuoted.push(argsQuoted[i]);
        }
      }

      // Perform wildcard (glob) expansion on unquoted arguments containing * or ?
      const expandedArgs = [];
      for (let i = 0; i < braceExpandedArgs.length; i++) {
        if (!braceExpandedQuoted[i] && (braceExpandedArgs[i].includes('*') || braceExpandedArgs[i].includes('?'))) {
          expandedArgs.push(...this.expandWildcard(braceExpandedArgs[i]));
        } else {
          expandedArgs.push(braceExpandedArgs[i]);
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

      // Bash function definitions (e.g. func_name() { ... } or func() { ... })
      if (command.includes('()') || command === 'function' || /^[a-zA-Z0-9_\-]+\(\)$/.test(command)) {
        lastResult = { stdout: '', stderr: '', currentPath: this.currentPath };
        stdin = '';
        continue;
      }

      // Bash variable assignment (e.g. TODAY=$(date) or FOO=bar)
      if (/^[a-zA-Z_][a-zA-Z0-9_]*=/.test(command)) {
        const eqIdx = command.indexOf('=');
        const varKey = command.slice(0, eqIdx);
        let varVal = command.slice(eqIdx + 1);
        if (cmdArgs.length > 0) {
          varVal = (varVal + ' ' + cmdArgs.join(' ')).trim();
        }
        varVal = varVal.replace(/^["']|["']$/g, '');
        this.env[varKey] = varVal;
        lastResult = { stdout: '', stderr: '', currentPath: this.currentPath };
        stdin = '';
        continue;
      }

      // Colon ':' command in bash / Vim ex-commands run outside vim
      if (command === ':') {
        lastResult = { stdout: '', stderr: '', currentPath: this.currentPath };
        stdin = '';
        continue;
      }

      if (command.startsWith(':')) {
        lastResult = { stdout: '', stderr: `bash: ${command}: vim command (use 'vim <file>' to edit files)`, currentPath: this.currentPath };
        break;
      }

      // Standalone heredoc EOF delimiter entered outside heredoc
      if (command === 'EOF') {
        lastResult = { stdout: '', stderr: '', currentPath: this.currentPath };
        stdin = '';
        continue;
      }

      // Vim interactive keystrokes entered in standard shell prompt
      if (command === 'i' || command === 'Esc' || command.startsWith('/')) {
        lastResult = { stdout: '', stderr: `bash: ${command}: vim navigation key (use 'vim <file>' to edit files)`, currentPath: this.currentPath };
        break;
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

        case 'exit':
          if (this.env.USER !== 'learner') {
            this.env.USER = 'learner';
            this.env.HOME = '/home/learner';
            this.currentPath = '/home/learner';
            result.stdout = 'logout\nConnection to local session closed. Returned to learner.';
          } else {
            result.stdout = 'exit\n[Session cannot be exited: already in default learner shell]';
          }
          break;

        case 'help': {
          const cmds = Array.from(this.installedPackages).filter(c => c !== '.').sort().join(', ');
          result.stdout = `Available commands: ${cmds}\nRedirections > (overwrite), >> (append), 2> (stderr), 2>&1 / &> (combined streams), and pipes | are supported.`;
          break;
        }

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
            } else if (sub === 'r' || sub === 'route' || sub === 'ro') {
              result.stdout = `default via 192.168.1.1 dev eth0 proto dhcp src 192.168.1.15 metric 100\n192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.15 metric 100`;
            } else {
              result.stderr = `ip: usage: ip [OPTIONS] OBJECT { COMMAND | help }\nOBJECT := { link | addr | route }`;
            }
          }
          break;

        case 'curl':
          {
            let url = null;
            let outputFile = null;
            let remoteName = false;

            for (let i = 0; i < cmdArgs.length; i++) {
              const arg = cmdArgs[i];
              if (arg === '-o' || arg === '--output') {
                if (i + 1 < cmdArgs.length) {
                  outputFile = cmdArgs[++i];
                }
              } else if (arg.startsWith('-o')) {
                outputFile = arg.slice(2);
              } else if (arg === '-O' || arg === '--remote-name') {
                remoteName = true;
              } else if (arg.startsWith('-')) {
                // Ignore other flags like -s, -L, -v, -k, etc.
                continue;
              } else if (!url) {
                url = arg;
              }
            }

            if (url) {
              url = url.replace(/^['"]|['"]$/g, '');
            }

            if (!url) {
              result.stderr = `curl: no URL specified!`;
            } else {
              let content = '';
              const cleanUrl = url.toLowerCase();
              if (cleanUrl.includes('api.bashquest.com/update.sh')) {
                content = `#!/bin/bash\necho "Updating BashQuest"\necho "All packages current!"`;
              } else {
                content = `<html><body>Welcome to ${url}</body></html>`;
              }

              if (remoteName && !outputFile) {
                const parts = url.split('/');
                outputFile = parts.pop() || 'index.html';
                if (!outputFile) outputFile = 'index.html';
              }

              if (outputFile) {
                outputFile = outputFile.replace(/^['"]|['"]$/g, '');
                const fileResult = this.handleRedirection(outputFile, content, 'write');
                if (!fileResult.success) {
                  result.stderr = `curl: (23) Failed writing received data to disk/application: ${fileResult.error}`;
                }
              } else {
                result.stdout = content;
              }
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

        case 'gzip':
          result = this.runGzip(cmdArgs);
          break;

        case 'gunzip':
          result = this.runGunzip(cmdArgs);
          break;

        case 'groupadd':
          result = this.runGroupadd(cmdArgs, isSudo);
          break;

        case 'groups':
          result = this.runGroups(cmdArgs);
          break;

        case 'lscpu':
          result = this.runLscpu(cmdArgs);
          break;

        case 'lsof':
          result = this.runLsof(cmdArgs);
          break;

        case 'zip':
          result = this.runZip(cmdArgs);
          break;

        case 'unzip':
          result = this.runUnzip(cmdArgs);
          break;

        case 'bzip2':
          result = this.runBzip2(cmdArgs);
          break;

        case 'xz':
          result = this.runXz(cmdArgs);
          break;

        case 'dpkg':
          result = this.runDpkg(cmdArgs);
          break;

        case 'dnf':
        case 'yum':
          result = this.runDnfYum(command, cmdArgs);
          break;

        case 'adduser':
          result = this.runAdduser(cmdArgs, isSudo);
          break;

        case 'userdel':
          result = this.runUserdel(cmdArgs, isSudo);
          break;

        case 'id':
          result = this.runId(cmdArgs);
          break;

        case 'groupdel':
          result = this.runGroupdel(cmdArgs, isSudo);
          break;

        case 'ifconfig':
          result = this.runIfconfig(cmdArgs);
          break;

        case 'nmcli':
          result = this.runNmcli(cmdArgs);
          break;

        case 'netstat':
          result = this.runNetstat(cmdArgs);
          break;

        case 'ss':
          result = this.runSs(cmdArgs);
          break;

        case 'traceroute':
          result = this.runTraceroute(cmdArgs);
          break;

        case 'ufw':
          result = this.runUfw(cmdArgs, isSudo);
          break;

        case 'iptables':
          result = this.runIptables(cmdArgs, isSudo);
          break;

        case 'nice':
          result = this.runNice(cmdArgs);
          break;

        case 'renice':
          result = this.runRenice(cmdArgs, isSudo);
          break;

        case 'bg':
          result = this.runBg(cmdArgs);
          break;

        case 'iostat':
          result = this.runIostat(cmdArgs);
          break;

        case 'file':
          result = this.runFile(cmdArgs);
          break;

        case 'stat':
          result = this.runStat(cmdArgs);
          break;

        case 'rmdir':
          result = this.runRmdir(cmdArgs);
          break;

        case 'tee':
          result = this.runTee(cmdArgs, stdin, isSudo);
          break;

        case 'diff':
          result = this.runDiff(cmdArgs);
          break;

        case 'umask':
          result = this.runUmask(cmdArgs);
          break;

        case 'chgrp':
          result = this.runChgrp(cmdArgs, isSudo);
          break;

        case 'getfacl':
          result = this.runGetfacl(cmdArgs);
          break;

        case 'setfacl':
          result = this.runSetfacl(cmdArgs);
          break;

        case 'rpm':
          result = this.runRpm(cmdArgs);
          break;

        case 'snap':
          result = this.runSnap(cmdArgs, isSudo);
          break;

        case 'lsblk':
          result = this.runLsblk(cmdArgs);
          break;

        case 'blkid':
          result = this.runBlkid(cmdArgs, isSudo);
          break;

        case 'mount':
          result = this.runMount(cmdArgs, isSudo);
          break;

        case 'umount':
          result = this.runUmount(cmdArgs, isSudo);
          break;

        case 'dmesg':
          result = this.runDmesg(cmdArgs, isSudo);
          break;

        case 'pgrep':
          result = this.runPgrep(cmdArgs);
          break;

        case 'pkill':
          result = this.runPkill(cmdArgs, isSudo);
          break;

        case 'killall':
          result = this.runKillall(cmdArgs, isSudo);
          break;

        case 'nohup':
          result = this.runNohup(cmdArgs);
          break;

        case 'watch':
          result = this.runWatch(cmdArgs);
          break;

        case 'dig':
          result = this.runDig(cmdArgs);
          break;

        case 'nslookup':
          result = this.runNslookup(cmdArgs);
          break;

        case 'host':
          result = this.runHost(cmdArgs);
          break;

        case 'wget':
          result = this.runWget(cmdArgs);
          break;

        case 'nc':
          result = this.runNc(cmdArgs);
          break;

        case 'hostname':
          result = this.runHostname(cmdArgs, isSudo);
          break;

        case 'hostnamectl':
          result = this.runHostnamectl(cmdArgs, isSudo);
          break;

        case 'locate':
          result = this.runLocate(cmdArgs);
          break;

        case 'updatedb':
          result = this.runUpdatedb(cmdArgs, isSudo);
          break;

        case 'whereis':
          result = this.runWhereis(cmdArgs);
          break;

        case 'type':
          result = this.runType(cmdArgs);
          break;

        case 'apropos':
          result = this.runApropos(cmdArgs);
          break;

        case 'whatis':
          result = this.runWhatis(cmdArgs);
          break;

        case 'timedatectl':
          result = this.runTimedatectl(cmdArgs, isSudo);
          break;

        case 'shutdown':
          result = this.runShutdown(cmdArgs, isSudo);
          break;

        case 'reboot':
          result = this.runReboot(cmdArgs, isSudo);
          break;

        case 'vim':
        case 'vi':
          result = this.runVim(cmdArgs);
          break;

        case 'date':
          result = this.runDate(cmdArgs);
          break;

        case 'jq':
          result = this.runJq(cmdArgs, stdin);
          break;

        case 'strings':
          result = this.runStrings(cmdArgs, stdin);
          break;

        case 'xxd':
          result = this.runXxd(cmdArgs, stdin);
          break;

        case 'hexdump':
          result = this.runHexdump(cmdArgs, stdin);
          break;

        case 'read':
          result = this.runRead(cmdArgs);
          break;

        case 'rsync':
          result = this.runRsync(cmdArgs);
          break;

        case 'sha256sum':
          result = this.runSha256sum(cmdArgs, stdin);
          break;

        case 'md5sum':
          result = this.runMd5sum(cmdArgs, stdin);
          break;

        case 'dd':
          result = this.runDd(cmdArgs);
          break;

        case 'mktemp':
          result = this.runMktemp(cmdArgs);
          break;

        case 'source':
        case '.':
          result = this.runSource(cmdArgs);
          break;

        case 'unset':
          result = this.runUnset(cmdArgs);
          break;

        case 'unalias':
          result = this.runUnalias(cmdArgs);
          break;

        case 'usermod':
          result = this.runUsermod(cmdArgs, isSudo);
          break;

        case 'ssh-keygen':
          result = this.runSshKeygen(cmdArgs);
          break;

        case 'ssh-copy-id':
          result = this.runSshCopyId(cmdArgs);
          break;

        case 'who':
          result = this.runWho(cmdArgs);
          break;

        case 'w':
          result = this.runW(cmdArgs);
          break;

        case 'last':
          result = this.runLast(cmdArgs);
          break;

        case 'tmux':
          result = this.runTmux(cmdArgs);
          break;

        case 'git':
          result = this.runGit(cmdArgs);
          break;

        case 'docker':
          result = this.runDocker(cmdArgs);
          break;

        default:
          result.stderr = `bash: ${command}: command not found`;
      }

      // Process stderr redirection
      if (stderrRedir) {
        if (stderrRedir.file === '/dev/null') {
          result.stderr = '';
        } else {
          if (stdoutRedir && stdoutRedir.file === stderrRedir.file) {
            const combined = [result.stdout, result.stderr].filter(Boolean).join('\n');
            const fileRes = this.handleRedirection(stdoutRedir.file, combined, stdoutRedir.type);
            if (!fileRes.success) {
              result.stderr = `bash: ${stdoutRedir.file}: ${fileRes.error}`;
            } else {
              result.stdout = '';
              result.stderr = '';
            }
            stdoutRedir = null;
          } else {
            if (result.stderr) {
              const fileRes = this.handleRedirection(stderrRedir.file, result.stderr, stderrRedir.type);
              if (!fileRes.success) {
                result.stderr = `bash: ${stderrRedir.file}: ${fileRes.error}`;
              } else {
                result.stderr = '';
              }
            }
          }
        }
      }

      // Process stdout redirection
      if (stdoutRedir) {
        if (stdoutRedir.file === '/dev/null') {
          result.stdout = '';
        } else {
          const fileRes = this.handleRedirection(stdoutRedir.file, result.stdout, stdoutRedir.type);
          if (!fileRes.success) {
            result.stderr = `bash: ${stdoutRedir.file}: ${fileRes.error}`;
          }
          result.stdout = '';
        }
      }

      if (result.stderr) {
        lastResult = result;
        break;
      }

      stdin = result.stdout;
      lastResult = result;
    }

    this.lastExitCode = lastResult.stderr ? 1 : 0;
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
    const knownPredicates = new Set(['-name', '-perm', '-size', '-mtime', '-exec', '-type']);
    const pathIdx = args.findIndex((a, idx) => !a.startsWith('-') && !knownPredicates.has(args[idx - 1]));
    if (pathIdx !== -1) {
      startPath = args[pathIdx];
    }
    const nameIdx = args.indexOf('-name');
    if (nameIdx !== -1 && args[nameIdx + 1]) {
      namePattern = args[nameIdx + 1].replace(/['"]/g, '');
    }
    const permIdx = args.indexOf('-perm');
    let permFilter = null;
    if (permIdx !== -1 && args[permIdx + 1]) {
      permFilter = args[permIdx + 1];
    }

    const sizeIdx = args.indexOf('-size');
    let sizeFilter = null;
    if (sizeIdx !== -1 && args[sizeIdx + 1]) {
      const raw = args[sizeIdx + 1];
      const sign = raw.startsWith('+') ? '+' : (raw.startsWith('-') ? '-' : '=');
      const clean = raw.replace(/^[+-]/, '');
      let mult = 512;
      if (clean.endsWith('c')) mult = 1;
      else if (clean.toLowerCase().endsWith('k')) mult = 1024;
      else if (clean.toLowerCase().endsWith('m')) mult = 1024 * 1024;
      else if (clean.toLowerCase().endsWith('g')) mult = 1024 * 1024 * 1024;
      const targetBytes = parseInt(clean, 10) * mult;
      sizeFilter = { sign, bytes: targetBytes };
    }

    const mtimeIdx = args.indexOf('-mtime');
    let mtimeFilter = null;
    if (mtimeIdx !== -1 && args[mtimeIdx + 1]) {
      mtimeFilter = args[mtimeIdx + 1];
    }

    const execIdx = args.indexOf('-exec');
    let execCmd = null;
    if (execIdx !== -1) {
      execCmd = args.slice(execIdx + 1);
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
    const matchedNodes = [];
    const traverse = (node, currentRelPath, parentNode) => {
      const nameMatch = regex.test(node.name);
      let permMatch = true;
      if (permFilter) {
        if (permFilter === '-4000' || permFilter === '/4000') {
          permMatch = Boolean(node.suid || (node.permissions && (node.permissions.startsWith('4') || node.permissions === '4755')));
        } else if (permFilter === '-2000' || permFilter === '/2000') {
          permMatch = Boolean(node.sgid || (node.permissions && node.permissions.startsWith('2')));
        } else if (permFilter === '-1000' || permFilter === '/1000') {
          permMatch = Boolean(node.sticky || (node.permissions && node.permissions.startsWith('1')));
        } else {
          permMatch = (node.permissions === permFilter || ('0' + node.permissions) === permFilter);
        }
      }
      let sizeMatch = true;
      if (sizeFilter) {
        const nodeBytes = node.size || (node.content ? node.content.length : 0);
        const isBigLog = node.name === 'huge_core_dump.log' || node.name.includes('50M');
        if (sizeFilter.sign === '+') {
          sizeMatch = nodeBytes > sizeFilter.bytes || isBigLog;
        } else if (sizeFilter.sign === '-') {
          sizeMatch = nodeBytes < sizeFilter.bytes && !isBigLog;
        } else {
          sizeMatch = nodeBytes === sizeFilter.bytes || isBigLog;
        }
      }
      let mtimeMatch = true;
      if (mtimeFilter) {
        mtimeMatch = true;
      }

      if (nameMatch && permMatch && sizeMatch && mtimeMatch && node.name !== '/') {
        matchedNodes.push({ node, path: currentRelPath, parentNode });
      }
      if (node.type === 'dir' && node.children) {
        for (const child of [...node.children]) {
          traverse(child, currentRelPath === '/' ? `/${child.name}` : `${currentRelPath}/${child.name}`, node);
        }
      }
    };
    const absPath = this.fs.resolvePathStr(this.currentPath, startPath);
    traverse(startNode, absPath, null);

    if (execCmd && execCmd.includes('rm')) {
      for (const item of matchedNodes) {
        if (item.parentNode && item.parentNode.children) {
          const idx = item.parentNode.children.indexOf(item.node);
          if (idx !== -1) {
            item.parentNode.children.splice(idx, 1);
          }
        }
      }
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    const results = matchedNodes.map(m => m.path).sort();
    const relativeResults = results.map(r => {
      if (startPath === '.') {
        return '.' + r.substring(this.currentPath === '/' ? 0 : this.currentPath.length);
      }
      return r;
    });
    const stderrMsg = (startPath === '/' || startPath === '/etc' || startPath.startsWith('/etc'))
      ? "find: '/etc/shadow': Permission denied"
      : '';
    return {
      stdout: relativeResults.join('\n'),
      stderr: stderrMsg,
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
    if (args.length === 0) {
      return { stdout: '', stderr: 'systemctl: missing command', currentPath: this.currentPath };
    }
    const action = args[0];
    if (action === 'daemon-reload') {
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    if (args.length < 2) {
      return { stdout: '', stderr: `systemctl: missing service name`, currentPath: this.currentPath };
    }
    const service = args[1].replace(/\.service$/, '');
    this.services = this.services || { apache2: 'inactive', nginx: 'inactive' };
    this.enabledServices = this.enabledServices || new Set(['apache2']);

    if (action === 'is-enabled') {
      const isEnabled = this.enabledServices.has(service);
      return { stdout: isEnabled ? 'enabled' : 'disabled', stderr: '', currentPath: this.currentPath };
    }

    if (action === 'status') {
      const state = this.services[service] || 'inactive';
      let lines = [
        `● ${service}.service - ${service === 'nginx' ? 'A high performance web server and a reverse proxy server' : 'LSB: Apache2 web server'}`,
        `     Loaded: loaded (/lib/systemd/system/${service}.service; ${this.enabledServices.has(service) ? 'enabled' : 'disabled'}; vendor preset: enabled)`,
        `     Active: ${state === 'active' ? 'active (running)' : 'inactive (dead)'} since Fri 2026-07-03 12:00:00 UTC; 4h ago`,
        `       Docs: man:${service}(8)`,
        `    Process: 1025 ExecStart=/usr/sbin/${service} start (code=exited, status=0/SUCCESS)`
      ];
      if (state === 'active') {
        lines.push(`   Main PID: 1042 (${service})`);
        lines.push(`      Tasks: 55 (limit: 9345)`);
        lines.push(`     Memory: 24.5M`);
        lines.push(`        CPU: 1.25s`);
      }
      return { stdout: lines.join('\n'), stderr: '', currentPath: this.currentPath };
    }

    if (!isSudo) {
      return { stdout: '', stderr: `Access denied. systemctl control operations require sudo privileges.`, currentPath: this.currentPath };
    }

    if (action === 'enable') {
      this.enabledServices.add(service);
      return {
        stdout: `Created symlink /etc/systemd/system/multi-user.target.wants/${service}.service → /lib/systemd/system/${service}.service.`,
        stderr: '',
        currentPath: this.currentPath
      };
    } else if (action === 'disable') {
      this.enabledServices.delete(service);
      return {
        stdout: `Removed /etc/systemd/system/multi-user.target.wants/${service}.service.`,
        stderr: '',
        currentPath: this.currentPath
      };
    } else if (action === 'start') {
      this.services[service] = 'active';
      return { stdout: `Starting ${service}.service... Done!`, stderr: '', currentPath: this.currentPath };
    } else if (action === 'stop') {
      this.services[service] = 'inactive';
      return { stdout: `Stopping ${service}.service... Done!`, stderr: '', currentPath: this.currentPath };
    } else if (action === 'restart') {
      this.services[service] = 'active';
      return { stdout: `Restarting ${service}.service... Done!`, stderr: '', currentPath: this.currentPath };
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
    const countFlag = args.some(arg => arg.startsWith('-') && arg.includes('c'));
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
    let count = 0;
    for (const line of lines) {
      if (line === lastLine) {
        count++;
      } else {
        if (lastLine !== null) {
          resultLines.push(countFlag ? `${String(count).padStart(7, ' ')} ${lastLine}` : lastLine);
        }
        lastLine = line;
        count = 1;
      }
    }
    if (lastLine !== null) {
      resultLines.push(countFlag ? `${String(count).padStart(7, ' ')} ${lastLine}` : lastLine);
    }

    return {
      stdout: resultLines.join('\n'),
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runSort(args, stdin, isSudo) {
    const files = args.filter(arg => !arg.startsWith('-'));
    let numeric = false;
    let reverse = false;
    let unique = false;
    for (const arg of args) {
      if (arg.startsWith('-')) {
        if (arg.includes('n')) numeric = true;
        if (arg.includes('r')) reverse = true;
        if (arg.includes('u')) unique = true;
      }
    }
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

    let lines = content.split('\n');
    if (lines.length > 0 && lines[lines.length - 1] === '') {
      lines.pop();
    }

    lines.sort((a, b) => {
      if (numeric) {
        const numA = parseFloat(a.trim().split(/\s+/)[0]) || 0;
        const numB = parseFloat(b.trim().split(/\s+/)[0]) || 0;
        return numA - numB;
      }
      return a.localeCompare(b);
    });

    if (reverse) {
      lines.reverse();
    }

    if (unique) {
      lines = [...new Set(lines)];
    }

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
      tree: 'TREE(1) - List contents of directories in a tree-like format\n\nSYNOPSIS\n       tree [OPTION]... [DIRECTORY...]\n\nDESCRIPTION\n       Tree is a recursive directory listing program that produces a depth indented listing of files.\n\n       -L level\n              Descend only level directories deep.',
      man: 'MAN(1) - Interface to the system reference manuals\n\nSYNOPSIS\n       man [COMMAND]\n\nDESCRIPTION\n       man formats and displays the on-line manual pages.',
      xargs: 'XARGS(1) - Build and execute command lines from standard input\n\nSYNOPSIS\n       xargs [COMMAND [INITIAL-ARGS...]]\n\nDESCRIPTION\n       xargs reads items from the standard input, delimited by blanks or newlines, and executes the COMMAND one or more times with any INITIAL-ARGS followed by the items read from standard input.',
      file: 'FILE(1) - Determine file type\n\nSYNOPSIS\n       file [OPTION...] [FILE...]\n\nDESCRIPTION\n       file tests each argument in an attempt to classify it.',
      stat: 'STAT(1) - Display file or file system status\n\nSYNOPSIS\n       stat [OPTION]... FILE...\n\nDESCRIPTION\n       Display file or file system status, including inode, size, octal permissions, and timestamps.',
      rmdir: 'RMDIR(1) - Remove empty directories\n\nSYNOPSIS\n       rmdir [OPTION]... DIRECTORY...\n\nDESCRIPTION\n       Remove the DIRECTORY(ies), if they are empty.',
      tee: 'TEE(1) - Read from standard input and write to standard output and files\n\nSYNOPSIS\n       tee [OPTION]... [FILE]...\n\nDESCRIPTION\n       Copy standard input to each FILE, and also to standard output.\n\n       -a, --append\n              append to the given FILEs, do not overwrite',
      diff: 'DIFF(1) - Compare files line by line\n\nSYNOPSIS\n       diff [OPTION]... FILES\n\nDESCRIPTION\n       Compare FILES line by line.\n\n       -u     output unified context lines',
      umask: 'UMASK(1) - Get or set the file mode creation mask\n\nSYNOPSIS\n       umask [-S] [mask]\n\nDESCRIPTION\n       The umask utility sets or displays the file mode creation mask.',
      chgrp: 'CHGRP(1) - Change group ownership\n\nSYNOPSIS\n       chgrp [OPTION]... GROUP FILE...\n\nDESCRIPTION\n       Change the group of each FILE to GROUP.',
      getfacl: 'GETFACL(1) - Get file access control lists\n\nSYNOPSIS\n       getfacl file ...\n\nDESCRIPTION\n       For each file, getfacl displays the file name, owner, group, and the Access Control List (ACL).',
      setfacl: 'SETFACL(1) - Set file access control lists\n\nSYNOPSIS\n       setfacl [-m acl_spec] file ...\n\nDESCRIPTION\n       setfacl sets Access Control Lists (ACLs) of files and directories.',
      rpm: 'RPM(8) - RPM Package Manager\n\nSYNOPSIS\n       rpm [OPTION...] [PACKAGE...]\n\nDESCRIPTION\n       rpm is a powerful Package Manager, which can be used to build, install, query, verify, update, and erase individual software packages.\n\n       -qa    query all installed packages\n       -qi    query package information',
      snap: 'SNAP(1) - Tool to interact with snaps\n\nSYNOPSIS\n       snap [OPTION...] COMMAND [ARGS...]\n\nDESCRIPTION\n       The snap tool allows you to install, configure, refresh and remove snaps.\n\n       list   list installed snaps\n       install install packages',
      lsblk: 'LSBLK(8) - List block devices\n\nSYNOPSIS\n       lsblk [options] [device...]\n\nDESCRIPTION\n       lsblk lists information about all available or the specified block devices.\n\n       -f     output info about filesystems',
      blkid: 'BLKID(8) - Locate/print block device attributes\n\nSYNOPSIS\n       blkid [options] [device...]\n\nDESCRIPTION\n       The blkid program is the command-line interface to locate or print block device attributes such as UUID and LABEL.',
      mount: 'MOUNT(8) - Mount a filesystem\n\nSYNOPSIS\n       mount [-t fstype] [-o options] device dir\n\nDESCRIPTION\n       All files accessible in a Unix system are arranged in one big tree. mount attaches a filesystem located on some device to the big file tree.',
      umount: 'UMOUNT(8) - Unmount file systems\n\nSYNOPSIS\n       umount [options] {dir|device}...\n\nDESCRIPTION\n       The umount command detaches the mentioned file system(s) from the file hierarchy.',
      dmesg: 'DMESG(1) - Print or control the kernel ring buffer\n\nSYNOPSIS\n       dmesg [options]\n\nDESCRIPTION\n       dmesg is used to examine or control the kernel ring buffer.\n\n       -T     read human-readable timestamps',
      pgrep: 'PGREP(1) - Look up processes based on name and other attributes\n\nSYNOPSIS\n       pgrep [options] pattern\n\nDESCRIPTION\n       pgrep looks through the currently running processes and lists the process IDs which match the selection criteria.\n\n       -a     list full command line as well as the process ID',
      pkill: 'PKILL(1) - Signal processes based on name and other attributes\n\nSYNOPSIS\n       pkill [options] pattern\n\nDESCRIPTION\n       pkill sends the specified signal (by default SIGTERM) to each process matching the selection pattern.',
      killall: 'KILLALL(1) - Kill processes by name\n\nSYNOPSIS\n       killall [-s signal] name...\n\nDESCRIPTION\n       killall sends a signal to all processes running any of the specified commands.',
      nohup: 'NOHUP(1) - Run a command immune to hangups, with output to a non-tty\n\nSYNOPSIS\n       nohup COMMAND [ARG]...\n\nDESCRIPTION\n       Run COMMAND, ignoring hangup signals.',
      watch: 'WATCH(1) - Execute a program periodically, showing fullscreen output\n\nSYNOPSIS\n       watch [-n seconds] command\n\nDESCRIPTION\n       watch runs command repeatedly, displaying its output and errors fullscreen.\n\n       -n     specify update interval in seconds',
      dig: 'DIG(1) - DNS lookup utility\n\nSYNOPSIS\n       dig [@server] [-p port] name [type]\n\nDESCRIPTION\n       dig (domain information grok) is a flexible tool for interrogating DNS name servers.\n\n       +short provide a terse answer',
      nslookup: 'NSLOOKUP(1) - Query Internet name servers interactively\n\nSYNOPSIS\n       nslookup [host [server]]\n\nDESCRIPTION\n       nslookup is a program to query Internet domain name servers.',
      host: 'HOST(1) - DNS lookup utility\n\nSYNOPSIS\n       host [-t type] name [server]\n\nDESCRIPTION\n       host is a simple utility for performing DNS lookups.',
      wget: 'WGET(1) - The non-interactive network downloader\n\nSYNOPSIS\n       wget [option]... [URL]...\n\nDESCRIPTION\n       GNU Wget is a free utility for non-interactive download of files from the Web.\n\n       -O     write documents to FILE',
      nc: 'NC(1) - Arbitrary TCP and UDP connections and listens\n\nSYNOPSIS\n       nc [options] hostname port[s]\n\nDESCRIPTION\n       The nc (or netcat) utility is used for just about anything under the sun involving TCP, UDP, or UNIX-domain sockets.\n\n       -z     scan for listening daemons without sending data\n       -v     verbose',
      hostname: 'HOSTNAME(1) - Show or set the system\'s host name\n\nSYNOPSIS\n       hostname [name]\n\nDESCRIPTION\n       Hostname is used to display the system\'s DNS name, and to display or set its hostname or NIS domain name.',
      hostnamectl: 'HOSTNAMECTL(1) - Control the system hostname\n\nSYNOPSIS\n       hostnamectl [OPTIONS...] COMMAND ...\n\nDESCRIPTION\n       hostnamectl may be used to query and change the system hostname and related settings.\n\n       set-hostname NAME  Set system hostname',
      locate: 'LOCATE(1) - Find files by name using indexed database\n\nSYNOPSIS\n       locate [OPTION]... PATTERN...\n\nDESCRIPTION\n       locate reads one or more databases prepared by updatedb and writes file names matching at least one of the PATTERNs to standard output.',
      updatedb: 'UPDATEDB(8) - Update a database for mlocate\n\nSYNOPSIS\n       updatedb [OPTION]...\n\nDESCRIPTION\n       updatedb generates an index of files and directories for locate.',
      whereis: 'WHEREIS(1) - Locate the binary, source, and manual page files for a command\n\nSYNOPSIS\n       whereis [options] name...\n\nDESCRIPTION\n       whereis locates the binary, source and manual files for the specified command names.',
      type: 'TYPE(1) - Write a description of command type\n\nSYNOPSIS\n       type [-at] name...\n\nDESCRIPTION\n       type indicates how each name would be interpreted if used as a command name.',
      apropos: 'APROPOS(1) - Search the manual page names and descriptions\n\nSYNOPSIS\n       apropos [options] keyword...\n\nDESCRIPTION\n       Each manual page has a short description available within it. apropos searches the descriptions for instances of keyword.',
      whatis: 'WHATIS(1) - Display one-line manual page descriptions\n\nSYNOPSIS\n       whatis [options] name...\n\nDESCRIPTION\n       Each manual page has a short description available within it. whatis searches the manual page names and displays the system descriptions of any name matched.',
      timedatectl: 'TIMEDATECTL(1) - Control the system time and date\n\nSYNOPSIS\n       timedatectl [OPTIONS...] COMMAND ...\n\nDESCRIPTION\n       timedatectl may be used to query and change the clock and its settings.',
      shutdown: 'SHUTDOWN(8) - Halt, power-off or reboot the machine\n\nSYNOPSIS\n       shutdown [OPTIONS...] [TIME] [WALL...]\n\nDESCRIPTION\n       shutdown may be used to halt, power-off, or reboot the machine.\n\n       -r     Reboot the machine',
      reboot: 'REBOOT(8) - Reboot the machine\n\nSYNOPSIS\n       reboot [OPTIONS...]\n\nDESCRIPTION\n       reboot may be used to reboot the machine.',
      vim: 'VIM(1) - Vi IMproved, a programmer\'s text editor\n\nSYNOPSIS\n       vim [arguments] [file ..]\n\nDESCRIPTION\n       Vim is a text editor that is upwards compatible to Vi. It can be used to edit all kinds of plain text.',
      vi: 'VI(1) - Screen-oriented text editor\n\nSYNOPSIS\n       vi [file ...]\n\nDESCRIPTION\n       vi is a screen-oriented text editor.',
      date: 'DATE(1) - Print or set the system date and time\n\nSYNOPSIS\n       date [OPTION]... [+FORMAT]\n\nDESCRIPTION\n       Display the current time in the given FORMAT, or set the system date.',
      jq: 'JQ(1) - Command-line JSON processor\n\nSYNOPSIS\n       jq [options...] filter [files...]\n\nDESCRIPTION\n       jq can transform JSON in various ways, by selecting, iterating, reducing and otherwise mangling JSON documents.\n\n       -r     output raw strings',
      strings: 'STRINGS(1) - Print the sequences of printable characters in files\n\nSYNOPSIS\n       strings [-a] [file...]\n\nDESCRIPTION\n       For each file specified, GNU strings prints the printable character sequences that are at least 4 characters long.',
      xxd: 'XXD(1) - Make a hexdump or do the reverse\n\nSYNOPSIS\n       xxd [options] [infile [outfile]]\n\nDESCRIPTION\n       xxd creates a hex dump of a given file or standard input.',
      hexdump: 'HEXDUMP(1) - Display file contents in hexadecimal, decimal, octal, or ascii\n\nSYNOPSIS\n       hexdump [-C] [file ...]\n\nDESCRIPTION\n       The hexdump utility is a filter which displays the specified files in a user-specified format.\n\n       -C     Canonical hex+ASCII display',
      rsync: 'RSYNC(1) - A fast, versatile, remote (and local) file-copying tool\n\nSYNOPSIS\n       rsync [OPTION...] SRC... [DEST]\n\nDESCRIPTION\n       rsync is a versatile and fast file copying program that uses an efficient delta-transfer algorithm.\n\n       -a, --archive  archive mode (equals -rlptgoD)\n       -v, --verbose  increase verbosity\n       -z, --compress compress file data during transfer',
      sha256sum: 'SHA256SUM(1) - Compute and check SHA256 message digest\n\nSYNOPSIS\n       sha256sum [OPTION]... [FILE]...\n\nDESCRIPTION\n       Print or check SHA256 (256-bit) checksums.\n\n       -c, --check    read checksums from the FILEs and check them',
      md5sum: 'MD5SUM(1) - Compute and check MD5 message digest\n\nSYNOPSIS\n       md5sum [OPTION]... [FILE]...\n\nDESCRIPTION\n       Print or check MD5 (128-bit) checksums.\n\n       -c, --check    read checksums from the FILEs and check them',
      dd: 'DD(1) - Convert and copy a file\n\nSYNOPSIS\n       dd [OPERAND]...\n\nDESCRIPTION\n       Copy a file, converting and formatting according to the operands.\n\n       if=FILE        read from FILE instead of stdin\n       of=FILE        write to FILE instead of stdout\n       bs=BYTES       read and write up to BYTES bytes at a time\n       count=N        copy only N input blocks',
      mktemp: 'MKTEMP(1) - Create a temporary file or directory\n\nSYNOPSIS\n       mktemp [OPTION]... [TEMPLATE]\n\nDESCRIPTION\n       Create a temporary file or directory, safely, and print its name.\n\n       -d, --directory create a directory, not a file',
      source: 'SOURCE(1) - Execute commands from a file in the current shell\n\nSYNOPSIS\n       source filename [arguments]\n\nDESCRIPTION\n       Read and execute commands from the filename in the current shell context.',
      unset: 'UNSET(1) - Unset values and attributes of variables and functions\n\nSYNOPSIS\n       unset [-v] [-f] [name ...]\n\nDESCRIPTION\n       Each variable or function specified by name is removed.',
      unalias: 'UNALIAS(1) - Remove alias definitions\n\nSYNOPSIS\n       unalias [-a] name [name ...]\n\nDESCRIPTION\n       Remove each name from the list of defined aliases.',
      usermod: 'USERMOD(8) - Modify a user account\n\nSYNOPSIS\n       usermod [options] LOGIN\n\nDESCRIPTION\n       The usermod command modifies the system account files to reflect the changes that are specified on the command line.\n\n       -a, --append   add user to supplementary groups\n       -G, --groups   list of supplementary groups\n       -s, --shell    new login shell',
      'ssh-keygen': 'SSH-KEYGEN(1) - Authentication key generation, management and conversion\n\nSYNOPSIS\n       ssh-keygen [-q] [-b bits] [-t dsa | ecdsa | ed25519 | rsa] [-N new_passphrase] [-C comment] [-f output_keyfile]\n\nDESCRIPTION\n       ssh-keygen generates, manages and converts authentication keys for ssh.',
      'ssh-copy-id': 'SSH-COPY-ID(1) - Use locally available keys to authorise logins on a remote machine\n\nSYNOPSIS\n       ssh-copy-id [-i [identity_file]] [user@]machine\n\nDESCRIPTION\n       ssh-copy-id is a script that uses ssh to log into a remote machine and copies keys to the remote account\'s authorized_keys file.',
      who: 'WHO(1) - Show who is logged on\n\nSYNOPSIS\n       who [OPTION]... [ FILE | ARG1 ARG2 ]\n\nDESCRIPTION\n       Print information about users who are currently logged in.',
      w: 'W(1) - Show who is logged on and what they are doing\n\nSYNOPSIS\n       w [options] user [...]\n\nDESCRIPTION\n       w displays information about the users currently on the machine, and their processes.',
      last: 'LAST(1) - Show a listing of last logged in users\n\nSYNOPSIS\n       last [-num | -n num] [-R] [-x] [-F] [username...] [tty...]\n\nDESCRIPTION\n       last searches back through the file /var/log/wtmp and displays a list of all users logged in (and out) since that file was created.',
      tmux: 'TMUX(1) - Terminal multiplexer\n\nSYNOPSIS\n       tmux [-2CluvV] [-c shell-command] [-f file] [-L socket-name] [-S socket-path] [command [flags]]\n\nDESCRIPTION\n       tmux is a terminal multiplexer: it enables a number of terminals to be created, accessed, and controlled from a single screen.',
      git: 'GIT(1) - The stupid content tracker\n\nSYNOPSIS\n       git [--version] [--help] [-C <path>] [-c <name>=<value>] <command> [<args>]\n\nDESCRIPTION\n       Git is a fast, scalable, distributed revision control system with an unusually rich command set that provides both high-level operations and full access to internals.',
      docker: 'DOCKER(1) - The open-source application container engine\n\nSYNOPSIS\n       docker [OPTIONS] COMMAND [ARG...]\n\nDESCRIPTION\n       Docker is a platform for developers and sysadmins to build, run, and share applications with containers.'
    };
    if (manuals[cmd]) {
      return { stdout: manuals[cmd], stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: `No manual entry for ${cmd}`, currentPath: this.currentPath };
  }

  runTree(args) {
    let showAll = false;
    let maxLevel = Infinity;
    const paths = [];

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      if (arg === '-L' && args[i + 1]) {
        maxLevel = parseInt(args[i + 1], 10) || Infinity;
        i++;
      } else if (arg.startsWith('-L') && arg.length > 2) {
        maxLevel = parseInt(arg.slice(2), 10) || Infinity;
      } else if (arg.startsWith('-')) {
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

    let dirCount = 0;
    let fileCount = 0;

    const buildTree = (dirNode, prefix = '', currentDepth = 1) => {
      let children = [...(dirNode.children || [])];
      if (!showAll) {
        children = children.filter(c => !c.name.startsWith('.'));
      }
      children.sort((a, b) => a.name.localeCompare(b.name));

      children.forEach((child, index) => {
        const isLast = index === children.length - 1;
        const connector = isLast ? '└── ' : '├── ';
        lines.push(`${prefix}${connector}${child.name}`);
        if (child.type === 'dir') {
          dirCount++;
          if (child.children && currentDepth < maxLevel) {
            const newPrefix = prefix + (isLast ? '    ' : '│   ');
            buildTree(child, newPrefix, currentDepth + 1);
          }
        } else {
          fileCount++;
        }
      });
    };

    buildTree(node);
    lines.push(`\n${dirCount} directories, ${fileCount} files`);
    return {
      stdout: lines.join('\n'),
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runFile(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'file: missing argument', currentPath: this.currentPath };
    }
    const results = [];
    for (const target of args) {
      if (target.startsWith('-')) continue;
      const node = this.fs.getNodeByPath(this.currentPath, target);
      if (!node) {
        results.push(`file: cannot open '${target}' (No such file or directory)`);
        continue;
      }
      if (node.type === 'dir') {
        results.push(`${target}: directory`);
      } else if (node.type === 'symlink' || node.type === 'link') {
        results.push(`${target}: symbolic link to ${node.target}`);
      } else {
        const content = node.content || '';
        if (content.length === 0) {
          results.push(`${target}: empty`);
        } else if (content.startsWith('#!/bin/bash') || content.startsWith('#!/bin/sh')) {
          results.push(`${target}: Bourne-Again shell script, ASCII text executable`);
        } else if (content.includes('<!DOCTYPE') || content.includes('<html')) {
          results.push(`${target}: HTML document, ASCII text`);
        } else if (node.name.endsWith('.tar.gz') || node.name.endsWith('.gz') || content.includes('tarball-archive-content')) {
          results.push(`${target}: gzip compressed data, from Unix, original size modulo 2^32 10240`);
        } else if (node.name.endsWith('.tar')) {
          results.push(`${target}: POSIX tar archive`);
        } else if (node.name.endsWith('.deb') || content.includes('binary')) {
          results.push(`${target}: Debian binary package (format 2.0)`);
        } else if (content.includes('date,sales,visitors') || node.name.endsWith('.csv')) {
          results.push(`${target}: CSV text`);
        } else {
          results.push(`${target}: ASCII text`);
        }
      }
    }
    return { stdout: results.join('\n'), stderr: '', currentPath: this.currentPath };
  }

  runStat(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'stat: missing operand', currentPath: this.currentPath };
    }
    const target = args.find(a => !a.startsWith('-')) || args[0];
    const node = this.fs.getNodeByPath(this.currentPath, target);
    if (!node) {
      return { stdout: '', stderr: `stat: cannot stat '${target}': No such file or directory`, currentPath: this.currentPath };
    }
    const isDir = node.type === 'dir';
    const size = isDir ? 4096 : (node.content ? node.content.length : 0);
    const blocks = Math.ceil(size / 512) || 8;
    const fileType = isDir ? 'directory' : 'regular file';
    const perms = node.permissions || (isDir ? '755' : '644');
    const paddedOctal = perms.length === 4 ? perms : ('0' + perms);
    const modeBits = perms.slice(-3);
    const symMap = ['---', '--x', '-w-', '-wx', 'r--', 'r-x', 'rw-', 'rwx'];
    const symMode = (isDir ? 'd' : '-') +
      (symMap[parseInt(modeBits[0], 10)] || 'rw-') +
      (symMap[parseInt(modeBits[1], 10)] || 'r--') +
      (symMap[parseInt(modeBits[2], 10)] || 'r--');
    const owner = node.owner || 'learner';
    const group = node.group || 'learner';
    const uid = owner === 'root' ? 0 : 1000;
    const gid = group === 'root' ? 0 : 1000;
    let hash = 1440000;
    for (let i = 0; i < target.length; i++) hash += target.charCodeAt(i) * (i + 1);
    const inode = hash;

    const out = [
      `  File: ${target}`,
      `  Size: ${size}       \tBlocks: ${blocks}          IO Block: 4096   ${fileType}`,
      `Device: 802h/2050d\tInode: ${inode}     Links: ${isDir ? 2 : 1}`,
      `Access: (${paddedOctal}/${symMode})  Uid: ( ${uid}/ ${owner})   Gid: ( ${gid}/ ${group})`,
      `Access: 2026-10-18 00:00:00.000000000 +0000`,
      `Modify: 2026-10-18 00:00:00.000000000 +0000`,
      `Change: 2026-10-18 00:00:00.000000000 +0000`,
      ` Birth: -`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runRmdir(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'rmdir: missing operand', currentPath: this.currentPath };
    }
    for (const target of args) {
      if (target.startsWith('-')) continue;
      const node = this.fs.getNodeByPath(this.currentPath, target);
      if (!node) {
        return { stdout: '', stderr: `rmdir: failed to remove '${target}': No such file or directory`, currentPath: this.currentPath };
      }
      if (node.type !== 'dir') {
        return { stdout: '', stderr: `rmdir: failed to remove '${target}': Not a directory`, currentPath: this.currentPath };
      }
      if (node.children && node.children.length > 0) {
        return { stdout: '', stderr: `rmdir: failed to remove '${target}': Directory not empty`, currentPath: this.currentPath };
      }
      const pathArr = this.fs.resolvePathArray(this.currentPath, target);
      const dirName = pathArr.pop();
      const parentNode = this.fs.getNodeByPath('/', '/' + pathArr.join('/'));
      if (parentNode && parentNode.children) {
        parentNode.children = parentNode.children.filter(c => c.name !== dirName);
      }
    }
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runTee(args, stdin, isSudo) {
    let append = false;
    const files = [];
    for (const arg of args) {
      if (arg === '-a' || arg === '--append') {
        append = true;
      } else if (!arg.startsWith('-')) {
        files.push(arg);
      }
    }
    const inputContent = stdin !== undefined ? stdin : '';
    for (const filePath of files) {
      const isPrivileged = filePath.startsWith('/etc') || filePath.startsWith('/var');
      if (isPrivileged && !isSudo && this.env.USER !== 'root') {
        return { stdout: inputContent, stderr: `tee: ${filePath}: Permission denied`, currentPath: this.currentPath };
      }
      const type = append ? 'append' : 'write';
      this.handleRedirection(filePath, inputContent, type);
    }
    return { stdout: inputContent, stderr: '', currentPath: this.currentPath };
  }

  runDiff(args) {
    let unified = false;
    const files = [];
    for (const arg of args) {
      if (arg === '-u' || arg.startsWith('-u') || arg === '-U') {
        unified = true;
      } else if (!arg.startsWith('-')) {
        files.push(arg);
      }
    }
    if (files.length < 2) {
      return { stdout: '', stderr: 'diff: missing operand after ' + (files[0] || 'diff'), currentPath: this.currentPath };
    }
    const f1 = files[0];
    const f2 = files[1];
    const n1 = this.fs.getNodeByPath(this.currentPath, f1);
    const n2 = this.fs.getNodeByPath(this.currentPath, f2);
    if (!n1) return { stdout: '', stderr: `diff: ${f1}: No such file or directory`, currentPath: this.currentPath };
    if (!n2) return { stdout: '', stderr: `diff: ${f2}: No such file or directory`, currentPath: this.currentPath };

    const c1 = (n1.content || '').split('\n');
    const c2 = (n2.content || '').split('\n');
    if (c1.length > 0 && c1[c1.length - 1] === '') c1.pop();
    if (c2.length > 0 && c2[c2.length - 1] === '') c2.pop();

    if (n1.content === n2.content) {
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    if (unified) {
      const lines = [
        `--- ${f1}\t2026-10-18 00:00:00.000000000 +0000`,
        `+++ ${f2}\t2026-10-18 00:00:00.000000000 +0000`,
        `@@ -1,${c1.length} +1,${c2.length} @@`
      ];
      const maxL = Math.max(c1.length, c2.length);
      for (let i = 0; i < maxL; i++) {
        const l1 = c1[i];
        const l2 = c2[i];
        if (l1 === l2) {
          lines.push(` ${l1}`);
        } else {
          if (l1 !== undefined) lines.push(`-${l1}`);
          if (l2 !== undefined) lines.push(`+${l2}`);
        }
      }
      return { stdout: lines.join('\n'), stderr: '', currentPath: this.currentPath };
    } else {
      const lines = [];
      const maxL = Math.max(c1.length, c2.length);
      for (let i = 0; i < maxL; i++) {
        const l1 = c1[i];
        const l2 = c2[i];
        if (l1 !== l2) {
          lines.push(`${i + 1}c${i + 1}`);
          if (l1 !== undefined) lines.push(`< ${l1}`);
          lines.push('---');
          if (l2 !== undefined) lines.push(`> ${l2}`);
        }
      }
      return { stdout: lines.join('\n'), stderr: '', currentPath: this.currentPath };
    }
  }

  runUmask(args) {
    if (args.length === 0) {
      return { stdout: this.umask || '0022', stderr: '', currentPath: this.currentPath };
    }
    const val = args[0];
    if (val === '-S') {
      return { stdout: 'u=rwx,g=rx,o=rx', stderr: '', currentPath: this.currentPath };
    }
    if (/^[0-7]{3,4}$/.test(val)) {
      this.umask = val.padStart(4, '0');
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: `umask: ${val}: octal number out of range`, currentPath: this.currentPath };
  }

  runChgrp(args, isSudo) {
    if (args.length < 2) {
      return { stdout: '', stderr: 'chgrp: missing operand', currentPath: this.currentPath };
    }
    let recursive = false;
    const nonFlags = [];
    for (const arg of args) {
      if (arg === '-R' || arg === '--recursive') recursive = true;
      else if (!arg.startsWith('-')) nonFlags.push(arg);
    }
    if (nonFlags.length < 2) {
      return { stdout: '', stderr: 'chgrp: missing operand', currentPath: this.currentPath };
    }
    const newGroup = nonFlags[0];
    const targets = nonFlags.slice(1);

    for (const target of targets) {
      const node = this.fs.getNodeByPath(this.currentPath, target);
      if (!node) {
        return { stdout: '', stderr: `chgrp: cannot access '${target}': No such file or directory`, currentPath: this.currentPath };
      }
      const setGroup = (n) => {
        n.group = newGroup;
        if (recursive && n.type === 'dir' && n.children) {
          n.children.forEach(setGroup);
        }
      };
      setGroup(node);
    }
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runGetfacl(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'getfacl: missing operand', currentPath: this.currentPath };
    }
    const target = args.find(a => !a.startsWith('-')) || args[0];
    const node = this.fs.getNodeByPath(this.currentPath, target);
    if (!node) {
      return { stdout: '', stderr: `getfacl: ${target}: No such file or directory`, currentPath: this.currentPath };
    }
    const owner = node.owner || 'learner';
    const group = node.group || 'learner';
    const perms = node.permissions || (node.type === 'dir' ? '755' : '644');
    const modeBits = perms.slice(-3);
    const symMap = ['---', '--x', '-w-', '-wx', 'r--', 'r-x', 'rw-', 'rwx'];
    const uPerm = symMap[parseInt(modeBits[0], 10)] || 'rw-';
    const gPerm = symMap[parseInt(modeBits[1], 10)] || 'r--';
    const oPerm = symMap[parseInt(modeBits[2], 10)] || 'r--';

    const lines = [
      `# file: ${target}`,
      `# owner: ${owner}`,
      `# group: ${group}`,
      `user::${uPerm}`
    ];

    if (node.acls) {
      for (const [key, perm] of Object.entries(node.acls)) {
        lines.push(`${key}:${perm}`);
      }
      lines.push(`group::${gPerm}`);
      lines.push(`mask::rw-`);
    } else {
      lines.push(`group::${gPerm}`);
    }
    lines.push(`other::${oPerm}`);
    return { stdout: lines.join('\n'), stderr: '', currentPath: this.currentPath };
  }

  runSetfacl(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'setfacl: missing operand', currentPath: this.currentPath };
    }
    let modifySpec = null;
    let removeAll = false;
    let target = null;

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      if (arg === '-m' || arg === '--modify') {
        modifySpec = args[i + 1];
        i++;
      } else if (arg.startsWith('-m')) {
        modifySpec = arg.slice(2);
      } else if (arg === '-b' || arg === '--remove-all') {
        removeAll = true;
      } else if (!arg.startsWith('-')) {
        target = arg;
      }
    }

    if (!target) {
      return { stdout: '', stderr: 'setfacl: missing operand', currentPath: this.currentPath };
    }

    const node = this.fs.getNodeByPath(this.currentPath, target);
    if (!node) {
      return { stdout: '', stderr: `setfacl: ${target}: No such file or directory`, currentPath: this.currentPath };
    }

    if (removeAll) {
      delete node.acls;
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    if (modifySpec) {
      const parts = modifySpec.split(':');
      if (parts.length >= 3) {
        let tag = parts[0];
        if (tag === 'user') tag = 'u';
        if (tag === 'group') tag = 'g';
        const qualifier = parts[1];
        let perm = parts[2];
        if (perm === 'rw') perm = 'rw-';
        else if (perm === 'r') perm = 'r--';
        else if (perm === 'rwx') perm = 'rwx';
        else if (perm === 'rx') perm = 'r-x';
        else if (perm === 'x') perm = '--x';

        if (!node.acls) node.acls = {};
        node.acls[`${tag === 'u' ? 'user' : 'group'}:${qualifier}`] = perm;
      }
    }

    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runApt(args, isSudo) {
    if (args[0] === 'search') {
      const pkg = args[1];
      if (!pkg) {
        return { stdout: 'Sorting... Done\nFull Text Search... Done', stderr: '', currentPath: this.currentPath };
      }
      if (pkg === 'tree' || pkg === 'tree/noble') {
        return {
          stdout: `Sorting... Done\nFull Text Search... Done\ntree/noble 2.1.1-2 amd64\n  displays directory tree in color\n\npython3-treelib/noble 1.6.1-2 all\n  efficient tree data structure implementation`,
          stderr: '',
          currentPath: this.currentPath
        };
      }
      return {
        stdout: `Sorting... Done\nFull Text Search... Done\n${pkg}/noble 1.0.0-1 amd64\n  software package for ${pkg}`,
        stderr: '',
        currentPath: this.currentPath
      };
    }

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
    if (args[0] === 'purge' || (args[0] === 'remove' && args.includes('--purge'))) {
      const pkg = args.find(a => a !== 'purge' && a !== 'remove' && a !== '--purge');
      if (!pkg) {
        return { stdout: '', stderr: 'apt purge: missing package name', currentPath: this.currentPath };
      }
      this.installedPackages.delete(pkg);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('app:package-purged', { detail: { package: pkg } }));
      }
      return {
        stdout: `Reading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\nThe following packages will be PURGED:\n  ${pkg}*\n0 upgraded, 0 newly installed, 1 to remove and 0 not upgraded.\nAfter this operation, 115 kB disk space will be freed.\n(Reading database ... 12845 files and directories currently installed.)\nRemoving ${pkg} (2.1.1-2) ...\nPurging configuration files for ${pkg} (2.1.1-2) ...\nProcessing triggers for man-db (2.12.0-1) ...`,
        stderr: '',
        currentPath: this.currentPath
      };
    }
    if (args[0] === 'remove') {
      const pkg = args.find(a => a !== 'remove');
      if (!pkg) {
        return { stdout: '', stderr: 'apt remove: missing package name', currentPath: this.currentPath };
      }
      this.installedPackages.delete(pkg);
      return {
        stdout: `Reading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\nThe following packages will be REMOVED:\n  ${pkg}\n0 upgraded, 0 newly installed, 1 to remove and 0 not upgraded.\nAfter this operation, 115 kB disk space will be freed.\n(Reading database ... 12845 files and directories currently installed.)\nRemoving ${pkg} (2.1.1-2) ...\nProcessing triggers for man-db (2.12.0-1) ...`,
        stderr: '',
        currentPath: this.currentPath
      };
    }
    if (args[0] === 'update') {
      return {
        stdout: `Hit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nGet:2 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]\nGet:3 http://archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]\nFetched 252 kB in 1s (210 kB/s)\nReading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\n12 packages can be upgraded. Run 'apt list --upgradable' to see them.`,
        stderr: '',
        currentPath: this.currentPath
      };
    }
    if (args[0] === 'upgrade') {
      return {
        stdout: `Reading package lists... Done\nBuilding dependency tree... Done\nCalculating upgrade... Done\nThe following packages will be upgraded:\n  base-files curl libc-bin libssl3 openssl systemd\n5 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.\nNeed to get 6.2 MB of archives.\nSetting up openssl (3.0.13) ...\nUpgrade complete.`,
        stderr: '',
        currentPath: this.currentPath
      };
    }
    return { stdout: '', stderr: 'apt: usage: apt update | apt upgrade | apt install [package] | apt search [term] | apt purge [package]', currentPath: this.currentPath };
  }

  // Redirection logic
  handleRedirection(filePath, content, type) {
    if (filePath === '/dev/null') {
      return { success: true };
    }
    const resolvedPath = this.fs.resolvePathStr(this.currentPath, filePath);
    if (resolvedPath === '/dev/null') {
      return { success: true };
    }
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
    let humanReadable = false;
    for (const arg of args) {
      if (arg.startsWith('-')) {
        if (arg.includes('l')) showDetails = true;
        if (arg.includes('a')) showAll = true;
        if (arg.includes('h')) humanReadable = true;
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
        return { stdout: `${this.formatFileRow(node, humanReadable)}`, stderr: '', currentPath: this.currentPath };
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
      const rows = items.map(item => this.formatFileRow(item, humanReadable));
      return { stdout: rows.join('\n'), stderr: '', currentPath: this.currentPath };
    } else {
      const names = items.map(item => item.name);
      return { stdout: names.join(isPiped ? '\n' : '  '), stderr: '', currentPath: this.currentPath };
    }
  }

  formatFileRow(node, humanReadable = false) {
    const typeChar = node.type === 'dir' ? 'd' : (node.type === 'link' ? 'l' : '-');
    // Map permissions (e.g. 755 -> rwxr-xr-x, with special bits and ACLs)
    const mapPerms = (octalStr) => {
      const lookup = ['---', '--x', '-w-', '-wx', 'r--', 'r-x', 'rw-', 'rwx'];
      const rawDigits = String(octalStr || '644').slice(-3).split('').map(Number);
      let s0 = lookup[rawDigits[0] || 0];
      let s1 = lookup[rawDigits[1] || 0];
      let s2 = lookup[rawDigits[2] || 0];
      const special = String(octalStr).length === 4 ? parseInt(String(octalStr)[0], 10) : 0;
      if ((special & 4) || node.suid) {
        s0 = s0[0] + s0[1] + (s0[2] === 'x' ? 's' : 'S');
      }
      if ((special & 2) || node.sgid) {
        s1 = s1[0] + s1[1] + (s1[2] === 'x' ? 's' : 'S');
      }
      if ((special & 1) || node.sticky) {
        s2 = s2[0] + s2[1] + (s2[2] === 'x' ? 't' : 'T');
      }
      return s0 + s1 + s2;
    };
    const permsString = mapPerms(node.permissions);
    const aclIndicator = node.acls && Object.keys(node.acls).length > 0 ? '+' : '';

    // File size mockup
    let size = 4096;
    if (node.type === 'file') {
      size = node.content ? node.content.length : 0;
    } else if (node.type === 'link') {
      size = node.target ? node.target.length : 0;
    }

    let sizeStr = String(size);
    if (humanReadable) {
      if (size >= 1073741824) {
        sizeStr = (size / 1073741824).toFixed(1) + 'G';
      } else if (size >= 1048576) {
        sizeStr = (size / 1048576).toFixed(1) + 'M';
      } else if (size >= 1024) {
        sizeStr = (size / 1024).toFixed(1) + 'K';
      } else {
        sizeStr = size + 'B';
      }
    }

    return `${typeChar}${permsString}${aclIndicator} 1 ${node.owner} ${node.group} ${sizeStr} Jul 3 13:37 ${node.name}`;
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
    let enableEscapes = false;
    let idx = 0;

    while (idx < args.length && args[idx].startsWith('-') && args[idx].length > 1) {
      const flag = args[idx];
      if (/^-[enE]+$/.test(flag)) {
        if (flag.includes('e')) enableEscapes = true;
        idx++;
      } else {
        break;
      }
    }

    let text = args.slice(idx).join(' ');
    if (enableEscapes) {
      text = text.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
    }

    return {
      stdout: text,
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

    const mode = args[0]; // e.g. "755", "1777", "4755", "+t", "u+s", "+x"
    const target = args[1];

    const node = this.fs.getNodeByPath(this.currentPath, target);
    if (!node) {
      return { stdout: '', stderr: `chmod: cannot access '${target}': No such file or directory`, currentPath: this.currentPath };
    }

    // Handle 3 or 4-digit octal mode (e.g. 755, 644, 1777, 4755, 0600)
    if (/^[0-7]{3,4}$/.test(mode)) {
      node.permissions = mode;
      if (mode.length === 4) {
        if (mode.startsWith('4')) node.suid = true;
        if (mode.startsWith('2')) node.sgid = true;
        if (mode.startsWith('1')) node.sticky = true;
      }
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    // Handle Sticky bit (+t)
    if (mode === '+t' || mode === 'o+t') {
      node.permissions = '1777';
      node.sticky = true;
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    // Handle SUID bit (u+s)
    if (mode === 'u+s') {
      node.permissions = '4755';
      node.suid = true;
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    // Handle SGID bit (g+s)
    if (mode === 'g+s') {
      node.permissions = '2755';
      node.sgid = true;
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    // Handle simple symbolic mode "+x" (makes executable for everyone)
    if (mode === '+x') {
      const original = node.permissions || '644';
      const raw = original.slice(-3);
      const digits = raw.split('').map(Number);
      const newDigits = digits.map(d => (d % 2 === 0 ? d + 1 : d));
      node.permissions = (original.length === 4 ? original[0] : '') + newDigits.join('');
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    return { stdout: '', stderr: `chmod: invalid mode: '${mode}'`, currentPath: this.currentPath };
  }

  // GREP: Search text
  runGrep(args, stdin, isSudo) {
    if (args.length < 1) {
      return { stdout: '', stderr: 'grep: usage: grep [options] [pattern] [file]', currentPath: this.currentPath };
    }

    let ignoreCase = false;
    let invertMatch = false;
    let recursive = false;
    let extendedRegex = false;
    const nonFlags = [];

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      if (arg.startsWith('-') && arg.length > 1) {
        for (let c = 1; c < arg.length; c++) {
          const ch = arg[c];
          if (ch === 'i') ignoreCase = true;
          else if (ch === 'v') invertMatch = true;
          else if (ch === 'r' || ch === 'R') recursive = true;
          else if (ch === 'E') extendedRegex = true;
        }
      } else {
        nonFlags.push(arg);
      }
    }

    if (nonFlags.length === 0) {
      return { stdout: '', stderr: 'grep: missing pattern', currentPath: this.currentPath };
    }

    const patternStr = nonFlags[0];
    const target = nonFlags[1];

    let regex;
    try {
      const flags = ignoreCase ? 'i' : '';
      if (extendedRegex) {
        regex = new RegExp(patternStr, flags);
      } else {
        const escaped = patternStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        regex = new RegExp(escaped, flags);
      }
    } catch (e) {
      return { stdout: '', stderr: `grep: invalid regular expression: ${patternStr}`, currentPath: this.currentPath };
    }

    const matchLine = (line) => {
      const isMatch = regex.test(line);
      return invertMatch ? !isMatch : isMatch;
    };

    if (recursive) {
      const startPath = target || '.';
      const startNode = this.fs.getNodeByPath(this.currentPath, startPath);
      if (!startNode) {
        return { stdout: '', stderr: `grep: ${startPath}: No such file or directory`, currentPath: this.currentPath };
      }
      const results = [];
      const traverse = (node, pathStr) => {
        if (node.type === 'file') {
          const lines = (node.content || '').split('\n');
          if (lines.length > 0 && lines[lines.length - 1] === '') lines.pop();
          lines.forEach(line => {
            if (matchLine(line)) {
              results.push(`${pathStr}:${line}`);
            }
          });
        } else if (node.type === 'dir' && node.children) {
          for (const child of node.children) {
            const childPath = pathStr === '.' ? child.name : `${pathStr}/${child.name}`;
            traverse(child, childPath);
          }
        }
      };
      traverse(startNode, startPath);
      return { stdout: results.join('\n'), stderr: '', currentPath: this.currentPath };
    }

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
      content = node.content || '';
    }

    const lines = content.split('\n');
    if (lines.length > 0 && lines[lines.length - 1] === '') {
      lines.pop();
    }
    const matched = lines.filter(matchLine);

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

      const outLines = lines.map((line, lineIdx) => {
        const fields = line.split(separator);
        return printTokens.map(token => {
          if (token === '$0') return line;
          if (token === '$NF') return fields[fields.length - 1] || '';
          if (token === '$NR' || token === 'NR') return String(lineIdx + 1);
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
        umask: 'shell built-in',
        ls: '/bin/ls',
        grep: '/bin/grep',
        cat: '/bin/cat',
        bash: '/bin/bash',
        rmdir: '/bin/rmdir',
        chgrp: '/bin/chgrp',
        file: '/usr/bin/file',
        stat: '/usr/bin/stat',
        tree: '/usr/bin/tree',
        tee: '/usr/bin/tee',
        diff: '/usr/bin/diff',
        getfacl: '/usr/bin/getfacl',
        setfacl: '/usr/bin/setfacl',
        mount: '/bin/mount',
        umount: '/bin/umount',
        hostname: '/bin/hostname',
        dmesg: '/bin/dmesg',
        blkid: '/sbin/blkid',
        updatedb: '/usr/bin/updatedb',
        locate: '/usr/bin/locate',
        whereis: '/usr/bin/whereis',
        apropos: '/usr/bin/apropos',
        whatis: '/usr/bin/whatis',
        pgrep: '/usr/bin/pgrep',
        pkill: '/usr/bin/pkill',
        killall: '/usr/bin/killall',
        nohup: '/usr/bin/nohup',
        watch: '/usr/bin/watch',
        dig: '/usr/bin/dig',
        nslookup: '/usr/bin/nslookup',
        host: '/usr/bin/host',
        wget: '/usr/bin/wget',
        nc: '/usr/bin/nc',
        rpm: '/usr/bin/rpm',
        snap: '/usr/bin/snap',
        lsblk: '/usr/bin/lsblk',
        hostnamectl: '/usr/bin/hostnamectl',
        timedatectl: '/usr/bin/timedatectl',
        shutdown: '/sbin/shutdown',
        reboot: '/sbin/reboot',
        vim: '/usr/bin/vim',
        vi: '/usr/bin/vi',
        date: '/bin/date',
        jq: '/usr/bin/jq',
        strings: '/usr/bin/strings',
        xxd: '/usr/bin/xxd',
        hexdump: '/usr/bin/hexdump',
        read: 'shell built-in',
        source: 'shell built-in',
        '.': 'shell built-in',
        unset: 'shell built-in',
        unalias: 'shell built-in',
        rsync: '/usr/bin/rsync',
        sha256sum: '/usr/bin/sha256sum',
        md5sum: '/usr/bin/md5sum',
        dd: '/bin/dd',
        mktemp: '/bin/mktemp',
        usermod: '/usr/sbin/usermod',
        'ssh-keygen': '/usr/bin/ssh-keygen',
        'ssh-copy-id': '/usr/bin/ssh-copy-id',
        who: '/usr/bin/who',
        w: '/usr/bin/w',
        last: '/usr/bin/last',
        tmux: '/usr/bin/tmux',
        git: '/usr/bin/git',
        docker: '/usr/bin/docker'
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
      const res = this.fs.createNode('/etc', 'passwd', 'file', {
        content: 'root:x:0:0:root:/root:/bin/bash\nlearner:x:1000:1000:learner:/home/learner:/bin/bash\n',
        permissions: '644',
        owner: 'root',
        group: 'root'
      });
      passwdNode = res.node;
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

  runGzip(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'gzip: compressed data not written to a terminal. Use -f to force compression.', currentPath: this.currentPath };
    }
    const file = args[0];
    const node = this.fs.getNodeByPath(this.currentPath, file);
    if (!node) {
      return { stdout: '', stderr: `gzip: ${file}: No such file or directory`, currentPath: this.currentPath };
    }
    if (node.type === 'dir') {
      return { stdout: '', stderr: `gzip: ${file}: Is a directory -- ignored`, currentPath: this.currentPath };
    }
    const parentPath = this.fs.resolvePathStr(this.currentPath, file);
    const parentSegs = parentPath.split('/').filter(Boolean);
    const name = parentSegs.pop();
    const parentDir = '/' + parentSegs.join('/');
    this.fs.deleteNode(parentDir, name);
    this.fs.createNode(parentDir, `${name}.gz`, 'file', { content: `gzip-compressed-content-of-${name}\n` });
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runGunzip(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'gunzip: missing file operand', currentPath: this.currentPath };
    }
    const file = args[0];
    const node = this.fs.getNodeByPath(this.currentPath, file);
    if (!node) {
      return { stdout: '', stderr: `gunzip: ${file}: No such file or directory`, currentPath: this.currentPath };
    }
    if (node.type === 'dir') {
      return { stdout: '', stderr: `gunzip: ${file}: Is a directory -- ignored`, currentPath: this.currentPath };
    }
    if (!file.endsWith('.gz')) {
      return { stdout: '', stderr: `gunzip: ${file}: unknown suffix -- ignored`, currentPath: this.currentPath };
    }
    const parentPath = this.fs.resolvePathStr(this.currentPath, file);
    const parentSegs = parentPath.split('/').filter(Boolean);
    const name = parentSegs.pop();
    const parentDir = '/' + parentSegs.join('/');
    this.fs.deleteNode(parentDir, name);
    const newName = name.substring(0, name.length - 3);
    this.fs.createNode(parentDir, newName, 'file', { content: `Decompressed content of ${newName}\n` });
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runGroupadd(args, isSudo) {
    if (!isSudo) {
      return { stdout: '', stderr: 'groupadd: Permission denied.', currentPath: this.currentPath };
    }
    if (args.length === 0) {
      return { stdout: '', stderr: 'groupadd: missing group name', currentPath: this.currentPath };
    }
    const groupName = args[0];
    const groupNode = this.fs.getNodeByPath('/etc', 'group');
    if (groupNode) {
      if (groupNode.content.includes(`${groupName}:`)) {
        return { stdout: '', stderr: `groupadd: group '${groupName}' already exists`, currentPath: this.currentPath };
      }
      groupNode.content += `${groupName}:x:1001:\n`;
    }
    return { stdout: `Group '${groupName}' added successfully.`, stderr: '', currentPath: this.currentPath };
  }

  runGroups(args) {
    const user = args[0] || (this.env.USER || 'learner');
    if (user === 'root') {
      return { stdout: 'root sudo shadow adm cdrom dip plugdev lxd', stderr: '', currentPath: this.currentPath };
    } else if (user === 'learner') {
      const groupNode = this.fs.getNodeByPath('/etc', 'group');
      let extraGroups = '';
      if (groupNode) {
        const lines = groupNode.content.split('\n');
        for (const line of lines) {
          const parts = line.split(':');
          if (parts[0] && parts[0] !== 'learner' && parts[0] !== 'root' && parts[3] && parts[3].includes('learner')) {
            extraGroups += ' ' + parts[0];
          }
        }
      }
      return { stdout: `learner cdrom sudo dip plugdev lxd${extraGroups}`, stderr: '', currentPath: this.currentPath };
    } else if (user === 'deployer') {
      return { stdout: 'deployer', stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: `groups: '${user}': no such user`, currentPath: this.currentPath };
  }

  runLscpu(args) {
    const out = [
      'Architecture:            x86_64',
      'CPU op-mode(s):          32-bit, 64-bit',
      'Address sizes:           39 bits physical, 48 bits virtual',
      'Byte Order:              Little Endian',
      'CPU(s):                  4',
      'On-line CPU(s) list:     0-3',
      'Vendor ID:               AuthenticAMD',
      'Model name:              AMD Ryzen 5 5600X 6-Core Processor',
      'CPU family:              25',
      'Model:                   33',
      'Thread(s) per core:      1',
      'Core(s) per socket:      4',
      'Socket(s):               1',
      'Virtualization:          AMD-V',
      'L1d cache:               128 KiB (4 instances)',
      'L1i cache:               128 KiB (4 instances)',
      'L2 cache:                2 MiB (4 instances)',
      'L3 cache:                32 MiB (1 instance)'
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runLsof(args) {
    const out = [
      'COMMAND    PID   USER   FD      TYPE     DEVICE SIZE/OFF       NODE NAME',
      'systemd      1   root  cwd       DIR       8,16     4096          2 /',
      'systemd      1   root  rtd       DIR       8,16     4096          2 /',
      'systemd      1   root  txt      REG       8,16  1684320     125432 /sbin/init',
      'bash      1245 learner cwd       DIR       8,16     4096     548320 /home/learner',
      'bash      1245 learner rtd       DIR       8,16     4096          2 /',
      'bash      1245 learner txt      REG       8,16  1124512      12456 /bin/bash',
      'apache2   1042   root  cwd       DIR       8,16     4096          2 /',
      'apache2   1042   root  txt      REG       8,16   542890      52145 /usr/sbin/apache2',
      'apache2   1042   root    3u     IPv4      34125      0t0        TCP *:80 (LISTEN)'
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runZip(args) {
    if (args.length < 2) {
      return { stdout: '', stderr: 'zip: error: missing archive or file targets', currentPath: this.currentPath };
    }
    const archive = args[0];
    const files = args.slice(1);
    
    // Check if files exist
    for (const f of files) {
      const node = this.fs.getNodeByPath(this.currentPath, f);
      if (!node) {
        return { stdout: '', stderr: `zip: error: file not found: ${f}`, currentPath: this.currentPath };
      }
    }
    
    // Create archive file
    this.fs.createNode(this.currentPath, archive, 'file', { content: 'zip-archive-content\n' });
    
    // Trigger update event if in browser
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('app:filesystem-update'));
    }
    
    const out = files.map(f => `  adding: ${f} (deflated 64%)`).join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runUnzip(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'unzip: error: missing zip archive file', currentPath: this.currentPath };
    }
    const archive = args[0];
    const node = this.fs.getNodeByPath(this.currentPath, archive);
    if (!node || node.type !== 'file') {
      return { stdout: '', stderr: `unzip: error: cannot find or open ${archive}`, currentPath: this.currentPath };
    }
    
    // Simulate extraction
    const out = [
      `Archive:  ${archive}`,
      `  inflating: note.txt`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runBzip2(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'bzip2: error: missing file operand', currentPath: this.currentPath };
    }
    const file = args[0];
    const node = this.fs.getNodeByPath(this.currentPath, file);
    if (!node || node.type !== 'file') {
      return { stdout: '', stderr: `bzip2: Can't open input file ${file}: No such file or directory.`, currentPath: this.currentPath };
    }
    
    // Create compressed version
    this.fs.createNode(this.currentPath, `${file}.bz2`, 'file', { content: 'bzip2-compressed-content\n' });
    
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('app:filesystem-update'));
    }
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runXz(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'xz: error: missing file operand', currentPath: this.currentPath };
    }
    const file = args[0];
    const node = this.fs.getNodeByPath(this.currentPath, file);
    if (!node || node.type !== 'file') {
      return { stdout: '', stderr: `xz: ${file}: No such file or directory`, currentPath: this.currentPath };
    }
    
    // Create compressed version
    this.fs.createNode(this.currentPath, `${file}.xz`, 'file', { content: 'xz-compressed-content\n' });
    
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('app:filesystem-update'));
    }
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runDpkg(args) {
    const list = args.includes('-l');
    const status = args.includes('-s');
    if (list) {
      const out = [
        'Desired=Unknown/Install/Remove/Purge/Hold',
        '| Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend',
        '|/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)',
        '||/ Name           Version      Description',
        '+++-==============-============-====================================',
        'ii  bash           5.2.21-1     GNU Bourne Again SHell',
        'ii  coreutils      9.4-3ubuntu2 GNU core utilities',
        'ii  grep           3.11-1       GNU grep, egrep and fgrep',
        'ii  tar            1.35+dfsg-3  GNU version of the tar archiving utility'
      ].join('\n');
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }
    if (status) {
      const pkg = args[args.indexOf('-s') + 1] || '';
      if (pkg === 'tree') {
        const isInstalled = this.installedPackages.has('tree');
        const out = [
          `Package: tree`,
          `Status: ${isInstalled ? 'install ok installed' : 'deinstall ok config-files'}`,
          `Priority: optional`,
          `Section: utils`,
          `Installed-Size: 115`,
          `Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>`,
          `Architecture: amd64`,
          `Version: 2.1.1-2`,
          `Description: displays directory tree, in color`
        ].join('\n');
        return { stdout: out, stderr: '', currentPath: this.currentPath };
      }
    }
    return { stdout: '', stderr: 'dpkg: error: a status or listing option (-s, -l) is required', currentPath: this.currentPath };
  }

  runDnfYum(cmdName, args) {
    if (args.includes('check-update')) {
      const out = [
        `Loaded plugins: fastestmirror`,
        `Loading mirror speeds from cached hostfile`,
        `Security: 0 package updates available`,
        `No packages marked for update`
      ].join('\n');
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }
    if (args.includes('install')) {
      const pkg = args[args.indexOf('install') + 1] || '';
      if (pkg) {
        return {
          stdout: `Resolving Dependencies\n--> Running transaction check\n---> Package ${pkg}.x86_64 0:1.0.0-1.el8 will be installed\n--> Finished Dependency Resolution\n\nInstalled:\n  ${pkg}.x86_64 1.0.0-1.el8\n\nComplete!`,
          stderr: '',
          currentPath: this.currentPath
        };
      }
    }
    return { stdout: '', stderr: `${cmdName}: usage: ${cmdName} [install|check-update] [package]`, currentPath: this.currentPath };
  }

  runAdduser(args, isSudo) {
    if (!isSudo) {
      return { stdout: '', stderr: 'adduser: Only root may add a user or group to the system.', currentPath: this.currentPath };
    }
    const user = args[0];
    if (!user) {
      return { stdout: '', stderr: 'adduser: Only one or two names allowed.', currentPath: this.currentPath };
    }
    // Simulate user creation log
    const out = [
      `Adding user \`${user}' ...`,
      `Adding new group \`${user}' (1001) ...`,
      `Adding new user \`${user}' (1001) with group \`${user}' ...`,
      `Creating home directory \`/home/${user}' ...`,
      `Copying files from \`/etc/skel' ...`,
      `passwd: password updated successfully`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runUserdel(args, isSudo) {
    if (!isSudo) {
      return { stdout: '', stderr: 'userdel: Permission denied.', currentPath: this.currentPath };
    }
    const user = args.filter(a => !a.startsWith('-'))[0];
    if (!user) {
      return { stdout: '', stderr: 'userdel: user name missing', currentPath: this.currentPath };
    }
    const passwdNode = this.fs.getNodeByPath('/etc', 'passwd');
    if (passwdNode && passwdNode.content) {
      const lines = passwdNode.content.split('\n');
      passwdNode.content = lines.filter(line => line.split(':')[0] !== user).join('\n');
    }
    const groupNode = this.fs.getNodeByPath('/etc', 'group');
    if (groupNode && groupNode.content) {
      const lines = groupNode.content.split('\n');
      groupNode.content = lines.map(line => {
        const parts = line.split(':');
        if (parts.length >= 4) {
          const members = parts[3].split(',').filter(m => m !== user);
          parts[3] = members.join(',');
          return parts.join(':');
        }
        return line;
      }).join('\n');
    }
    return { stdout: `userdel: user '${user}' deleted successfully`, stderr: '', currentPath: this.currentPath };
  }

  runId(args) {
    const target = args[0] || 'learner';
    if (target === 'root') {
      return { stdout: 'uid=0(root) gid=0(root) groups=0(root)', stderr: '', currentPath: this.currentPath };
    }
    if (target === 'learner') {
      return { stdout: 'uid=1000(learner) gid=1000(learner) groups=1000(learner),27(sudo)', stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: `id: '${target}': no such user`, currentPath: this.currentPath };
  }

  runGroupdel(args, isSudo) {
    if (!isSudo) {
      return { stdout: '', stderr: 'groupdel: Permission denied.', currentPath: this.currentPath };
    }
    const group = args[0];
    if (!group) {
      return { stdout: '', stderr: 'groupdel: group name missing', currentPath: this.currentPath };
    }
    const groupNode = this.fs.getNodeByPath('/etc', 'group');
    if (groupNode) {
      const lines = groupNode.content.split('\n');
      const filtered = lines.filter(line => {
        const name = line.split(':')[0];
        return name !== group;
      });
      if (filtered.length === lines.length) {
        return { stdout: '', stderr: `groupdel: group '${group}' does not exist`, currentPath: this.currentPath };
      }
      groupNode.content = filtered.join('\n');
    } else {
      return { stdout: '', stderr: `groupdel: group '${group}' does not exist`, currentPath: this.currentPath };
    }
    return { stdout: `groupdel: group '${group}' deleted successfully`, stderr: '', currentPath: this.currentPath };
  }

  runIfconfig(args) {
    const out = [
      'eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500',
      '        inet 192.168.1.15  netmask 255.255.255.0  broadcast 192.168.1.255',
      '        ether 52:54:00:12:34:56  txqueuelen 1000  (Ethernet)',
      '        RX packets 12450  bytes 12845320 (12.8 MB)',
      '        TX packets 8540  bytes 542890 (542.8 KB)',
      '',
      'lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536',
      '        inet 127.0.0.1  netmask 255.0.0.0',
      '        loop  txqueuelen 1000  (Local Loopback)',
      '        RX packets 240  bytes 18400 (18.4 KB)',
      '        TX packets 240  bytes 18400 (18.4 KB)'
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runNmcli(args) {
    if (args.includes('device') || args.includes('dev')) {
      const out = [
        'DEVICE  TYPE      STATE      CONNECTION',
        'eth0    ethernet  connected  Wired connection 1',
        'lo      loopback  unmanaged  --',
        'wlan0   wifi      disconnected --'
      ].join('\n');
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }
    const out = [
      'networks manager cli tool',
      'Usage: nmcli [OPTIONS] OBJECT { COMMAND | help }',
      'OBJECT := { general | networking | radio | connection | device | agent }'
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runNetstat(args) {
    const out = [
      'Active Internet connections (only servers)',
      'Proto Recv-Q Send-Q Local Address           Foreign Address         State      ',
      'tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN     ',
      'tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN     ',
      'tcp6       0      0 :::80                   :::*                    LISTEN     ',
      'tcp6       0      0 :::22                   :::*                    LISTEN     '
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runSs(args) {
    const out = [
      'Netid State      Recv-Q Send-Q Local Address:Port               Peer Address:Port',
      'tcp   LISTEN     0      128          0.0.0.0:80                      0.0.0.0:*',
      'tcp   LISTEN     0      128          0.0.0.0:22                      0.0.0.0:*',
      'tcp   LISTEN     0      128             [::]:80                         [::]:*',
      'tcp   LISTEN     0      128             [::]:22                         [::]:*'
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runTraceroute(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'traceroute: specify host to traceroute', currentPath: this.currentPath };
    }
    const host = args[0];
    const out = [
      `traceroute to ${host} (142.250.190.46), 30 hops max, 60 byte packets`,
      ` 1  gateway (192.168.1.1)  1.234 ms  1.025 ms  0.985 ms`,
      ` 2  10.0.0.1 (10.0.0.1)  5.120 ms  4.890 ms  5.230 ms`,
      ` 3  142.250.190.46 (142.250.190.46)  14.210 ms  13.985 ms  14.050 ms`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runUfw(args, isSudo) {
    if (!isSudo) {
      return { stdout: '', stderr: 'ufw: error: must be root to run ufw', currentPath: this.currentPath };
    }
    if (args.includes('status')) {
      return { stdout: 'Status: active\n\nTo                         Action      From\n--                         ------      ----\n22/tcp                     ALLOW       Anywhere\n80/tcp                     ALLOW       Anywhere', stderr: '', currentPath: this.currentPath };
    }
    return { stdout: 'Firewall rules updated', stderr: '', currentPath: this.currentPath };
  }

  runIptables(args, isSudo) {
    if (!isSudo) {
      return { stdout: '', stderr: 'iptables v1.8.10: can\'t initialize iptables table `filter\': Permission denied (you must be root)', currentPath: this.currentPath };
    }
    if (args.includes('-L')) {
      const out = [
        'Chain INPUT (policy ACCEPT)',
        'target     prot opt source               destination         ',
        'ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:ssh',
        'ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:http',
        '',
        'Chain FORWARD (policy ACCEPT)',
        'target     prot opt source               destination         ',
        '',
        'Chain OUTPUT (policy ACCEPT)',
        'target     prot opt source               destination         '
      ].join('\n');
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: 'iptables: usage: iptables -L [chain]', currentPath: this.currentPath };
  }

  runNice(args) {
    if (args.length === 0) {
      return { stdout: '0', stderr: '', currentPath: this.currentPath };
    }
    // Check if running a command
    if (args[0] === '-n') {
      const val = args[1];
      const cmd = args.slice(2).join(' ');
      if (cmd) {
        return { stdout: `[nice] running command \`${cmd}\` with priority ${val}`, stderr: '', currentPath: this.currentPath };
      }
    }
    return { stdout: '', stderr: 'nice: usage: nice -n increment command [args]', currentPath: this.currentPath };
  }

  runRenice(args, isSudo) {
    if (!isSudo) {
      return { stdout: '', stderr: 'renice: failed to set priority: Permission denied', currentPath: this.currentPath };
    }
    const val = args[0];
    const pid = args[1];
    if (!val || !pid) {
      return { stdout: '', stderr: 'renice: usage: renice priority pid', currentPath: this.currentPath };
    }
    return { stdout: `${pid} (process ID) old priority 0, new priority ${val}`, stderr: '', currentPath: this.currentPath };
  }

  runBg(args) {
    if (this.bgJobs.length === 0) {
      return { stdout: '', stderr: 'bg: no current job', currentPath: this.currentPath };
    }
    const job = this.bgJobs[this.bgJobs.length - 1];
    job.status = 'Running';
    return { stdout: `[${job.id}]+ ${job.cmd} &`, stderr: '', currentPath: this.currentPath };
  }

  runIostat(args) {
    const out = [
      'Linux 6.8.0-35-generic (bashquest)      07/03/2026      _x86_64_        (4 CPU)',
      '',
      'avg-cpu:  %user   %nice %system %iowait  %steal   %idle',
      '          12.45    0.02    3.15    0.42    0.00   83.96',
      '',
      'Device             tps    kB_read/s    kB_wrtn/s    kB_read      kB_wrtn',
      'sda               4.12        45.21       128.45    2458920      5682144'
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runRpm(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'rpm: no operation specified', currentPath: this.currentPath };
    }
    const isQa = args.some(a => a === '-qa' || a === '-aq' || (a.includes('q') && a.includes('a')));
    const isQi = args.some(a => a === '-qi' || a === '-iq' || (a.includes('q') && a.includes('i')));
    if (isQa) {
      const pkgs = [
        'bash-5.2.15-1.fc38.x86_64',
        'coreutils-9.3-3.fc38.x86_64',
        'glibc-2.37-4.fc38.x86_64',
        'kernel-core-6.8.5-201.fc38.x86_64',
        'systemd-253.12-1.fc38.x86_64',
        'nginx-1.24.0-1.fc38.x86_64'
      ];
      return { stdout: pkgs.join('\n'), stderr: '', currentPath: this.currentPath };
    }
    if (isQi) {
      const target = args.find(a => !a.startsWith('-')) || 'nginx';
      const out = [
        `Name        : ${target}`,
        `Version     : 1.24.0`,
        `Release     : 1.fc38`,
        `Architecture: x86_64`,
        `Install Date: Sun 18 Oct 2026 00:00:00 UTC`,
        `Group       : System Environment/Daemons`,
        `Size        : 2684352`,
        `Summary     : Robust, small and high performance HTTP and reverse proxy server`,
        `Description :`,
        `Nginx is a web server and a reverse proxy server for HTTP, SMTP, POP3 and`,
        `IMAP protocols, with a strong focus on high concurrency, performance and low`,
        `memory usage.`
      ].join('\n');
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: 'rpm: usage: rpm {-q|--query} [select-options] [query-options]', currentPath: this.currentPath };
  }

  runSnap(args, isSudo) {
    if (args.length === 0) {
      return { stdout: 'The snap command lets you install, configure, refresh and remove snaps.\nSee \'snap help\' for more information.', stderr: '', currentPath: this.currentPath };
    }
    const sub = args[0];
    if (sub === 'list') {
      const out = [
        'Name    Version    Rev    Tracking       Publisher   Notes',
        'core22  20240111   1122   latest/stable  canonical✓  base',
        'snapd   2.61.1     20674  latest/stable  canonical✓  snapd',
        'lxd     5.21.0     27948  5.21/stable    canonical✓  -'
      ].join('\n');
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }
    if (sub === 'install') {
      const pkg = args[1];
      if (!isSudo && this.env.USER !== 'root') {
        return { stdout: '', stderr: 'error: access denied (try with sudo)', currentPath: this.currentPath };
      }
      if (!pkg) {
        return { stdout: '', stderr: 'error: please specify a snap package to install', currentPath: this.currentPath };
      }
      this.installedPackages.add(pkg);
      return { stdout: `${pkg} (stable) 1.0 installed`, stderr: '', currentPath: this.currentPath };
    }
    return { stdout: `snap ${sub}: command executed`, stderr: '', currentPath: this.currentPath };
  }

  runLsblk(args) {
    const hasF = args.includes('-f');
    const sdb1Mount = (this.mounts && this.mounts['/dev/sdb1']) || '';
    if (hasF) {
      const out = [
        'NAME   FSTYPE FSVER LABEL       UUID                                 FSAVAIL FSUSE% MOUNTPOINTS',
        'sda                                                                                     ',
        '├─sda1 ext4   1.0   rootfs      b1e2c3d4-0001-4000-8000-000000000001   18.2G    35% /',
        '└─sda2 swap   1                 c2d3e4f5-0002-4000-8000-000000000002                [SWAP]',
        'sdb                                                                                     ',
        `└─sdb1 ext4   1.0   data        d3e4f5a6-0003-4000-8000-000000000003                 ${sdb1Mount}`
      ].join('\n');
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }
    const out = [
      'NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS',
      'sda      8:0    0   40G  0 disk ',
      '├─sda1   8:1    0   36G  0 part /',
      '└─sda2   8:2    0    4G  0 part [SWAP]',
      'sdb      8:16   0  100G  0 disk ',
      `└─sdb1   8:17   0  100G  0 part ${sdb1Mount}`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runBlkid(args, isSudo) {
    if (!isSudo && this.env.USER !== 'root') {
      return { stdout: '', stderr: 'blkid: Permission denied (must be superuser to read block device attributes)', currentPath: this.currentPath };
    }
    const out = [
      '/dev/sda1: LABEL="rootfs" UUID="b1e2c3d4-0001-4000-8000-000000000001" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="0001-01"',
      '/dev/sda2: UUID="c2d3e4f5-0002-4000-8000-000000000002" TYPE="swap" PARTUUID="0001-02"',
      '/dev/sdb1: LABEL="data" UUID="d3e4f5a6-0003-4000-8000-000000000003" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="0002-01"'
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runMount(args, isSudo) {
    if (args.length === 0) {
      const mounts = [
        '/dev/sda1 on / type ext4 (rw,relatime)',
        'proc on /proc type proc (rw,nosuid,nodev,noexec,relatime)',
        'sysfs on /sys type sysfs (rw,nosuid,nodev,noexec,relatime)',
        'devpts on /dev/pts type devpts (rw,nosuid,noexec,relatime)',
        'tmpfs on /run type tmpfs (rw,nosuid,nodev,noexec,relatime)'
      ];
      if (this.mounts) {
        for (const [dev, pt] of Object.entries(this.mounts)) {
          if (dev.startsWith('/dev/')) {
            mounts.push(`${dev} on ${pt} type ext4 (rw,relatime)`);
          }
        }
      }
      return { stdout: mounts.join('\n'), stderr: '', currentPath: this.currentPath };
    }
    if (!isSudo && this.env.USER !== 'root') {
      return { stdout: '', stderr: 'mount: only root can use "--options" option (or mount filesystems)', currentPath: this.currentPath };
    }
    const nonFlags = [];
    for (let i = 0; i < args.length; i++) {
      const a = args[i];
      if (a === '-t' || a === '-o') {
        i++;
      } else if (!a.startsWith('-')) {
        nonFlags.push(a);
      }
    }
    if (nonFlags.length < 2) {
      return { stdout: '', stderr: 'mount: usage: mount [-t fstype] device dir', currentPath: this.currentPath };
    }
    const dev = nonFlags[0];
    const target = nonFlags[1];
    const node = this.fs.getNodeByPath(this.currentPath, target);
    if (!node) {
      return { stdout: '', stderr: `mount: mount point ${target} does not exist.`, currentPath: this.currentPath };
    }
    if (!this.mounts) this.mounts = {};
    const absTarget = this.fs.resolvePathStr(this.currentPath, target);
    this.mounts[dev] = absTarget;
    this.mounts[absTarget] = dev;
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runUmount(args, isSudo) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'umount: usage: umount {dir|device}...', currentPath: this.currentPath };
    }
    if (!isSudo && this.env.USER !== 'root') {
      return { stdout: '', stderr: 'umount: only root can unmount filesystems', currentPath: this.currentPath };
    }
    const target = args.find(a => !a.startsWith('-')) || args[0];
    const absTarget = this.fs.resolvePathStr(this.currentPath, target);
    if (this.mounts && (this.mounts[target] || this.mounts[absTarget])) {
      const dev = this.mounts[target] || this.mounts[absTarget];
      delete this.mounts[target];
      delete this.mounts[absTarget];
      delete this.mounts[dev];
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: `umount: ${target}: not mounted`, currentPath: this.currentPath };
  }

  runDmesg(args, isSudo) {
    const hasT = args.some(a => a === '-T' || a === '--ctime');
    const logs = [
      '[    0.000000] Linux version 6.8.0-35-generic (buildd@lcy02-amd64-020) #35-Ubuntu SMP',
      '[    0.024102] Command line: BOOT_IMAGE=/boot/vmlinuz root=UUID=b1e2c3d4-0001 ro quiet splash',
      '[    1.120401] sd 0:0:0:0: [sda] 83886080 512-byte logical blocks: (42.9 GB/40.0 GiB)',
      '[    1.120512] sd 0:0:0:0: [sda] Attached SCSI disk',
      '[    1.134201] sd 1:0:0:0: [sdb] 209715200 512-byte logical blocks: (107 GB/100 GiB)',
      '[    1.134302] sd 1:0:0:0: [sdb] Attached SCSI disk',
      '[    2.410920] eth0: Intel Gigabit Ethernet Network Connection',
      '[   42.109823] EXT4-fs (sda1): re-mounted. Opts: errors=remount-ro',
      '[  120.482019] usb 1-1: device descriptor read/64, error -110',
      '[  120.590124] kernel: Out of memory: Killed process 4182 (stress-ng) total-vm:2048560kB, anon-rss:1843200kB',
      '[  120.590210] oom_reaper: reaped process 4182 (stress-ng), now anon-rss:0kB'
    ];
    if (hasT) {
      const timeLogs = logs.map(l => l.replace(/\[\s*\d+\.\d+\]/, '[Sun Oct 18 00:01:23 2026]'));
      return { stdout: timeLogs.join('\n'), stderr: '', currentPath: this.currentPath };
    }
    return { stdout: logs.join('\n'), stderr: '', currentPath: this.currentPath };
  }

  runPgrep(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'pgrep: no matching criteria specified', currentPath: this.currentPath };
    }
    const showCmd = args.includes('-a');
    const showName = args.includes('-l');
    const pattern = args.find(a => !a.startsWith('-')) || '';
    if (!pattern) {
      return { stdout: '', stderr: 'pgrep: no pattern specified', currentPath: this.currentPath };
    }
    const procs = (this.processes || []).filter(p => {
      if (p.name === 'miner' && this.minerAlive === false) return false;
      return p.name.includes(pattern) || p.cmd.includes(pattern);
    });
    if (procs.length === 0) {
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    const lines = procs.map(p => {
      if (showCmd) return `${p.pid} ${p.cmd}`;
      if (showName) return `${p.pid} ${p.name}`;
      return `${p.pid}`;
    });
    return { stdout: lines.join('\n'), stderr: '', currentPath: this.currentPath };
  }

  runPkill(args, isSudo) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'pkill: no matching criteria specified', currentPath: this.currentPath };
    }
    const pattern = args.find(a => !a.startsWith('-')) || '';
    if (!pattern) {
      return { stdout: '', stderr: 'pkill: no pattern specified', currentPath: this.currentPath };
    }
    let matched = false;
    if (this.processes) {
      this.processes = this.processes.filter(p => {
        if (p.name.includes(pattern) || p.cmd.includes(pattern)) {
          matched = true;
          return false;
        }
        return true;
      });
    }
    if (pattern.includes('miner')) {
      this.minerAlive = false;
      matched = true;
    }
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runKillall(args, isSudo) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'killall: no process specified', currentPath: this.currentPath };
    }
    const name = args.find(a => !a.startsWith('-')) || '';
    if (!name) {
      return { stdout: '', stderr: 'killall: no process specified', currentPath: this.currentPath };
    }
    let matched = false;
    if (this.processes) {
      this.processes = this.processes.filter(p => {
        if (p.name === name) {
          matched = true;
          return false;
        }
        return true;
      });
    }
    if (name === 'miner') {
      this.minerAlive = false;
      matched = true;
    }
    if (!matched) {
      return { stdout: '', stderr: `${name}: no process found`, currentPath: this.currentPath };
    }
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runNohup(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'nohup: missing operand\nTry \'nohup --help\' for more information.', currentPath: this.currentPath };
    }
    const cmd = args.join(' ');
    const logNode = this.fs.getNodeByPath(this.currentPath, 'nohup.out');
    if (!logNode) {
      this.fs.createNode(this.currentPath, 'nohup.out', 'file', {
        content: `[${cmd}] running in background\noutput redirect active.\n`
      });
    }
    return { stdout: 'nohup: ignoring input and appending output to \'nohup.out\'', stderr: '', currentPath: this.currentPath };
  }

  runWatch(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'watch: missing command', currentPath: this.currentPath };
    }
    let interval = '2.0';
    const cmdArgs = [];
    for (let i = 0; i < args.length; i++) {
      const a = args[i];
      if (a === '-n' && args[i + 1]) {
        interval = args[i + 1];
        i++;
      } else if (a.startsWith('-n')) {
        interval = a.slice(2);
      } else if (!a.startsWith('-')) {
        cmdArgs.push(a);
      }
    }
    const cmdStr = cmdArgs.join(' ') || 'df -h';
    let innerOut = '';
    if (cmdStr.startsWith('df')) {
      innerOut = `Filesystem      Size  Used Avail Use% Mounted on\nudev            3.9G     0  3.9G   0% /dev\ntmpfs           797M  1.6M  795M   1% /run\n/dev/sda2       117G   32G   80G  29% /\ntmpfs           3.9G   24M  3.9G   1% /dev/shm\ntmpfs           5.0M  4.0K  5.0M   1% /run/lock\n/dev/sda1       511M  6.1M  505M   2% /boot/efi\ntmpfs           797M   80K  797M   1% /run/user/1000`;
    } else if (cmdStr.startsWith('free')) {
      innerOut = `               total        used        free      shared  buff/cache   available\nMem:         8154144     2104520     4219432      248192     1830192     5701432\nSwap:        2097148           0     2097148`;
    } else {
      innerOut = `Command: ${cmdStr}\nStatus: Active`;
    }
    const header = `Every ${interval}s: ${cmdStr}                     ${this.hostname || 'bashquest'}: Sun Oct 18 00:00:00 2026\n\n`;
    return { stdout: header + innerOut, stderr: '', currentPath: this.currentPath };
  }

  runDig(args) {
    if (args.length === 0) {
      return { stdout: '; <<>> DiG 9.18.28 <<>>\n;; Got answer:\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR', stderr: '', currentPath: this.currentPath };
    }
    const isShort = args.includes('+short');
    const domain = args.find(a => !a.startsWith('+') && !a.startsWith('-')) || 'example.com';
    if (isShort) {
      return { stdout: '93.184.216.34', stderr: '', currentPath: this.currentPath };
    }
    const out = [
      `; <<>> DiG 9.18.28-0ubuntu0.24.04.1-Ubuntu <<>> ${domain}`,
      `;; global options: +cmd`,
      `;; Got answer:`,
      `;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 48215`,
      `;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1`,
      ``,
      `;; QUESTION SECTION:`,
      `;${domain}.\t\t\tIN\tA`,
      ``,
      `;; ANSWER SECTION:`,
      `${domain}.\t\t300\tIN\tA\t93.184.216.34`,
      ``,
      `;; Query time: 14 msec`,
      `;; SERVER: 127.0.0.53#53(127.0.0.53) (UDP)`,
      `;; WHEN: Sun Oct 18 00:00:00 UTC 2026`,
      `;; MSG SIZE  rcvd: 56`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runNslookup(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'nslookup: missing host operand', currentPath: this.currentPath };
    }
    const domain = args.find(a => !a.startsWith('-')) || 'example.com';
    const out = [
      'Server:\t\t127.0.0.53',
      'Address:\t127.0.0.53#53',
      '',
      'Non-authoritative answer:',
      `Name:\t${domain}`,
      'Address: 93.184.216.34'
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runHost(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'host: missing host operand', currentPath: this.currentPath };
    }
    const domain = args.find(a => !a.startsWith('-')) || 'example.com';
    const out = [
      `${domain} has address 93.184.216.34`,
      `${domain} has IPv6 address 2606:2800:220:1:248:1893:25c8:1946`,
      `${domain} mail is handled by 0 .`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runWget(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'wget: missing URL\nUsage: wget [OPTION]... [URL]...', currentPath: this.currentPath };
    }
    let outputFile = null;
    let url = null;
    for (let i = 0; i < args.length; i++) {
      const a = args[i];
      if ((a === '-O' || a === '--output-document') && args[i + 1]) {
        outputFile = args[i + 1];
        i++;
      } else if (a.startsWith('-O')) {
        outputFile = a.slice(2);
      } else if (!a.startsWith('-') && !url) {
        url = a;
      }
    }
    if (!url) {
      return { stdout: '', stderr: 'wget: missing URL', currentPath: this.currentPath };
    }
    const filename = outputFile || url.split('/').filter(Boolean).pop() || 'index.html';
    this.fs.createNode(this.currentPath, filename, 'file', {
      content: `Downloaded content from ${url}\nHTTP 200 OK\n`
    });
    const out = [
      `--2026-10-18 00:00:00--  ${url}`,
      `Resolving example.com (example.com)... 93.184.216.34`,
      `Connecting to example.com (example.com)|93.184.216.34|:443... connected.`,
      `HTTP request sent, awaiting response... 200 OK`,
      `Length: 1024 (1.0K) [text/plain]`,
      `Saving to: '${filename}'`,
      ``,
      `${filename}           100%[===================>]   1.00K  --.-KB/s    in 0.001s`,
      ``,
      `2026-10-18 00:00:00 (1.20 MB/s) - '${filename}' saved [1024/1024]`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runNc(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'nc: missing host and port operands', currentPath: this.currentPath };
    }
    const nonFlags = args.filter(a => !a.startsWith('-'));
    const host = nonFlags[0] || '127.0.0.1';
    const port = nonFlags[1] || '80';
    return { stdout: `Connection to ${host} ${port} port [tcp/*] succeeded!`, stderr: '', currentPath: this.currentPath };
  }

  runHostname(args, isSudo) {
    if (args.length === 0) {
      return { stdout: this.hostname || 'bashquest', stderr: '', currentPath: this.currentPath };
    }
    if (!isSudo && this.env.USER !== 'root') {
      return { stdout: '', stderr: 'hostname: you must be root to change the host name', currentPath: this.currentPath };
    }
    this.hostname = args[0];
    const hostNode = this.fs.getNodeByPath('/', '/etc/hostname');
    if (hostNode) hostNode.content = args[0] + '\n';
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runHostnamectl(args, isSudo) {
    if (args.length > 0 && args[0] === 'set-hostname') {
      if (!isSudo && this.env.USER !== 'root') {
        return { stdout: '', stderr: 'Could not set property: Access denied', currentPath: this.currentPath };
      }
      const newHost = args[1] || 'localhost';
      this.hostname = newHost;
      const hostNode = this.fs.getNodeByPath('/', '/etc/hostname');
      if (hostNode) hostNode.content = newHost + '\n';
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    const out = [
      ` Static hostname: ${this.hostname || 'bashquest'}`,
      `       Icon name: computer-vm`,
      `         Chassis: vm 🖴`,
      `      Machine ID: a7f8e3d219484b069d58129e71234567`,
      `         Boot ID: b2e3f4a56c7d8e9012345678abcdef01`,
      `  Virtualization: kvm`,
      `Operating System: Ubuntu 24.04 LTS`,
      `          Kernel: Linux 6.8.0-35-generic`,
      `    Architecture: x86-64`,
      ` Hardware Vendor: QEMU`,
      `  Hardware Model: Standard PC (Q35 + ICH9, 2009)`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runLocate(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'locate: no pattern to search for specified', currentPath: this.currentPath };
    }
    const pattern = args.find(a => !a.startsWith('-')) || '';
    if (!pattern) {
      return { stdout: '', stderr: 'locate: no pattern to search for specified', currentPath: this.currentPath };
    }
    const results = [];
    const searchNode = (node, currentPath) => {
      const fullPath = currentPath === '/' ? `/${node.name}` : `${currentPath}/${node.name}`;
      if (node.name !== '/' && node.name.toLowerCase().includes(pattern.toLowerCase())) {
        results.push(fullPath);
      }
      if (node.type === 'dir' && node.children) {
        for (const child of node.children) {
          searchNode(child, node.name === '/' ? '' : fullPath);
        }
      }
    };
    const rootNode = this.fs.getNodeByPath('/', '/');
    if (rootNode) searchNode(rootNode, '');
    return { stdout: results.sort().join('\n'), stderr: '', currentPath: this.currentPath };
  }

  runUpdatedb(args, isSudo) {
    if (!isSudo && this.env.USER !== 'root') {
      return { stdout: '', stderr: 'updatedb: can not open a temporary file for `/var/lib/mlocate/mlocate.db\': Permission denied', currentPath: this.currentPath };
    }
    this.updatedbRun = true;
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runWhereis(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    const target = args[0];
    const pathMap = {
      bash: '/bin/bash /etc/bash.bashrc /usr/share/man/man1/bash.1.gz',
      ls: '/bin/ls /usr/share/man/man1/ls.1.gz',
      grep: '/bin/grep /usr/share/man/man1/grep.1.gz',
      cat: '/bin/cat /usr/share/man/man1/cat.1.gz',
      nginx: '/usr/sbin/nginx /etc/nginx /usr/share/nginx /usr/share/man/man8/nginx.8.gz',
      find: '/usr/bin/find /usr/share/man/man1/find.1.gz',
      systemctl: '/bin/systemctl /usr/share/man/man1/systemctl.1.gz'
    };
    if (pathMap[target]) {
      return { stdout: `${target}: ${pathMap[target]}`, stderr: '', currentPath: this.currentPath };
    }
    if (this.installedPackages.has(target)) {
      return { stdout: `${target}: /usr/bin/${target} /usr/share/man/man1/${target}.1.gz`, stderr: '', currentPath: this.currentPath };
    }
    return { stdout: `${target}:`, stderr: '', currentPath: this.currentPath };
  }

  runType(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    const target = args.find(a => !a.startsWith('-')) || '';
    if (!target) {
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    if (this.aliases && this.aliases[target]) {
      return { stdout: `${target} is aliased to \`${this.aliases[target]}\``, stderr: '', currentPath: this.currentPath };
    }
    const builtins = new Set(['cd', 'pwd', 'echo', 'alias', 'export', 'umask', 'exit', 'history', 'type', 'jobs', 'fg', 'bg', 'source', '.', 'unset', 'unalias']);
    if (builtins.has(target)) {
      return { stdout: `${target} is a shell builtin`, stderr: '', currentPath: this.currentPath };
    }
    if (this.installedPackages.has(target)) {
      const pathMap = {
        ls: '/bin/ls',
        cat: '/bin/cat',
        grep: '/bin/grep',
        bash: '/bin/bash',
        mount: '/bin/mount',
        umount: '/bin/umount',
        hostname: '/bin/hostname',
        dmesg: '/bin/dmesg',
        blkid: '/sbin/blkid'
      };
      return { stdout: `${target} is ${pathMap[target] || '/usr/bin/' + target}`, stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: `bash: type: ${target}: not found`, currentPath: this.currentPath };
  }

  runApropos(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'apropos: what manual page do you want?', currentPath: this.currentPath };
    }
    const keyword = args.find(a => !a.startsWith('-')) || '';
    if (!keyword) {
      return { stdout: '', stderr: 'apropos: what manual page do you want?', currentPath: this.currentPath };
    }
    const dict = this.getAproposDict();
    const matches = [];
    const kwLower = keyword.toLowerCase();
    for (const [cmd, desc] of Object.entries(dict)) {
      if (cmd.toLowerCase().includes(kwLower) || desc.toLowerCase().includes(kwLower)) {
        matches.push(desc);
      }
    }
    if (matches.length > 0) {
      return { stdout: matches.join('\n'), stderr: '', currentPath: this.currentPath };
    }
    return { stdout: `${keyword}: nothing appropriate.`, stderr: '', currentPath: this.currentPath };
  }

  runWhatis(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'whatis: what manual page do you want?', currentPath: this.currentPath };
    }
    const target = args.find(a => !a.startsWith('-')) || '';
    if (!target) {
      return { stdout: '', stderr: 'whatis: what manual page do you want?', currentPath: this.currentPath };
    }
    const dict = this.getAproposDict();
    if (dict[target]) {
      return { stdout: dict[target], stderr: '', currentPath: this.currentPath };
    }
    return { stdout: `${target}: nothing appropriate.`, stderr: '', currentPath: this.currentPath };
  }

  getAproposDict() {
    return {
      ls: 'ls (1) - list directory contents',
      cd: 'cd (1) - change the working directory',
      pwd: 'pwd (1) - print name of current/working directory',
      mkdir: 'mkdir (1) - make directories',
      rmdir: 'rmdir (1) - remove empty directories',
      touch: 'touch (1) - change file timestamps or create empty file',
      rm: 'rm (1) - remove files or directories',
      cp: 'cp (1) - copy files and directories',
      mv: 'mv (1) - move (rename) files',
      cat: 'cat (1) - concatenate files and print on the standard output',
      echo: 'echo (1) - display a line of text',
      grep: 'grep (1) - print lines that match patterns',
      find: 'find (1) - search for files in a directory hierarchy',
      tree: 'tree (1) - list contents of directories in a tree-like format',
      stat: 'stat (1) - display file or file system status',
      file: 'file (1) - determine file type',
      diff: 'diff (1) - compare files line by line',
      tee: 'tee (1) - read from standard input and write to standard output and files',
      umask: 'umask (1) - get or set the file mode creation mask',
      chmod: 'chmod (1) - change file mode bits',
      chown: 'chown (1) - change file owner and group',
      chgrp: 'chgrp (1) - change group ownership',
      getfacl: 'getfacl (1) - get file access control lists',
      setfacl: 'setfacl (1) - set file access control lists',
      ps: 'ps (1) - report a snapshot of the current processes',
      top: 'top (1) - display Linux processes',
      htop: 'htop (1) - interactive process viewer',
      pgrep: 'pgrep (1) - look up or signal processes based on name and other attributes',
      pkill: 'pkill (1) - look up or signal processes based on name and other attributes',
      killall: 'killall (1) - kill processes by name',
      kill: 'kill (1) - terminate a process',
      nohup: 'nohup (1) - run a command immune to hangups, with output to a non-tty',
      watch: 'watch (1) - execute a program periodically, showing fullscreen output',
      df: 'df (1) - report file system disk space usage',
      du: 'du (1) - estimate file space usage',
      free: 'free (1) - display amount of free and used memory in the system',
      lsblk: 'lsblk (8) - list block devices',
      blkid: 'blkid (8) - locate/print block device attributes',
      mount: 'mount (8) - mount a filesystem',
      umount: 'umount (8) - unmount file systems',
      dmesg: 'dmesg (1) - print or control the kernel ring buffer',
      ip: 'ip (8) - show / manipulate routing, network devices, interfaces and tunnels',
      ping: 'ping (8) - send ICMP ECHO_REQUEST to network hosts',
      curl: 'curl (1) - transfer a URL',
      wget: 'wget (1) - the non-interactive network downloader',
      nc: 'nc (1) - arbitrary TCP and UDP connections and listens (netcat)',
      dig: 'dig (1) - DNS lookup utility',
      nslookup: 'nslookup (1) - query Internet name servers interactively',
      host: 'host (1) - DNS lookup utility',
      hostname: 'hostname (1) - show or set the system\'s host name',
      hostnamectl: 'hostnamectl (1) - control the system hostname',
      locate: 'locate (1) - find files by name using indexed database',
      updatedb: 'updatedb (8) - update a database for mlocate',
      whereis: 'whereis (1) - locate the binary, source, and manual page files for a command',
      type: 'type (1) - write a description of command type',
      apropos: 'apropos (1) - search the manual page names and descriptions',
      whatis: 'whatis (1) - display one-line manual page descriptions',
      apt: 'apt (8) - command-line interface for package management',
      rpm: 'rpm (8) - RPM Package Manager',
      snap: 'snap (1) - Tool to interact with snaps',
      timedatectl: 'timedatectl (1) - control the system time and date',
      shutdown: 'shutdown (8) - halt, power-off or reboot the machine',
      reboot: 'reboot (8) - reboot the machine',
      vim: 'vim (1) - Vi IMproved, a programmer\'s text editor',
      vi: 'vi (1) - screen-oriented text editor',
      date: 'date (1) - print or set the system date and time',
      jq: 'jq (1) - command-line JSON processor',
      strings: 'strings (1) - print the sequences of printable characters in files',
      xxd: 'xxd (1) - make a hexdump or do the reverse',
      hexdump: 'hexdump (1) - display file contents in hexadecimal, decimal, octal, or ascii',
      read: 'read (1) - read a line from standard input',
      rsync: 'rsync (1) - faster, more flexible replacement for rcp',
      sha256sum: 'sha256sum (1) - compute and check SHA256 message digest',
      md5sum: 'md5sum (1) - compute and check MD5 message digest',
      dd: 'dd (1) - convert and copy a file',
      mktemp: 'mktemp (1) - create a temporary file or directory',
      source: 'source (1) - execute commands from a file in the current shell',
      unset: 'unset (1) - unset values and attributes of variables and functions',
      unalias: 'unalias (1) - remove alias definitions',
      usermod: 'usermod (8) - modify a user account',
      'ssh-keygen': 'ssh-keygen (1) - OpenSSH SSH identity key and certificate management',
      'ssh-copy-id': 'ssh-copy-id (1) - use locally available keys to authorise logins on a remote machine',
      who: 'who (1) - show who is logged on',
      w: 'w (1) - Show who is logged on and what they are doing',
      last: 'last (1) - show a listing of last logged in users',
      tmux: 'tmux (1) - terminal multiplexer',
      git: 'git (1) - the stupid content tracker',
      docker: 'docker (1) - the open-source application container engine'
    };
  }

  runTimedatectl(args, isSudo) {
    this.timezone = this.timezone || 'UTC';
    if (args.length === 0 || args[0] === 'status') {
      const out = [
        `               Local time: Fri 2026-07-03 12:00:00 ${this.timezone}`,
        `           Universal time: Fri 2026-07-03 12:00:00 UTC`,
        `                 RTC time: Fri 2026-07-03 12:00:00`,
        `                Time zone: ${this.timezone} (${this.timezone}, +0000)`,
        `System clock synchronized: yes`,
        `              NTP service: active`,
        `          RTC in local TZ: no`
      ].join('\n');
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }
    if (args[0] === 'set-timezone') {
      if (!isSudo) {
        return { stdout: '', stderr: 'Failed to set time zone: Access denied. Sudo privileges required.', currentPath: this.currentPath };
      }
      const tz = args[1];
      if (!tz) {
        return { stdout: '', stderr: 'Failed to set time zone: Timezone required.', currentPath: this.currentPath };
      }
      this.timezone = tz;
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    if (args[0] === 'list-timezones') {
      return { stdout: 'Africa/Cairo\nAmerica/New_York\nAsia/Kolkata\nAsia/Tokyo\nEurope/London\nUTC', stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: `timedatectl: unknown command '${args[0]}'`, currentPath: this.currentPath };
  }

  runShutdown(args, isSudo) {
    if (!isSudo) {
      return { stdout: '', stderr: 'Must be root to shutdown.', currentPath: this.currentPath };
    }
    const isReboot = args.includes('-r');
    const isCancel = args.includes('-c');
    if (isCancel) {
      return { stdout: 'Shutdown cancelled.', stderr: '', currentPath: this.currentPath };
    }
    if (isReboot) {
      return {
        stdout: `Shutdown scheduled for now, use 'shutdown -c' to cancel.\nBroadcast message from root@system: The system is going down for reboot NOW!`,
        stderr: '',
        currentPath: this.currentPath
      };
    }
    return {
      stdout: `Shutdown scheduled for now, use 'shutdown -c' to cancel.\nBroadcast message from root@system: The system is going down for poweroff NOW!`,
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runReboot(args, isSudo) {
    if (!isSudo) {
      return { stdout: '', stderr: 'Must be root to reboot.', currentPath: this.currentPath };
    }
    return {
      stdout: `Broadcast message from root@system: The system is going down for reboot NOW!`,
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runDate(args) {
    const fmtArg = args.find(a => a.startsWith('+'));
    if (fmtArg) {
      const fmt = fmtArg.slice(1);
      if (fmt === '%F' || fmt === '%Y-%m-%d') {
        return { stdout: '2026-07-03', stderr: '', currentPath: this.currentPath };
      }
      if (fmt === '%T' || fmt === '%H:%M:%S') {
        return { stdout: '12:00:00', stderr: '', currentPath: this.currentPath };
      }
      if (fmt === '%s') {
        return { stdout: '1783080000', stderr: '', currentPath: this.currentPath };
      }
      return { stdout: '2026-07-03', stderr: '', currentPath: this.currentPath };
    }
    return { stdout: 'Fri Jul  3 12:00:00 UTC 2026', stderr: '', currentPath: this.currentPath };
  }

  runJq(args, stdin) {
    let rawOutput = false;
    let filter = '.';
    let filename = null;

    for (const arg of args) {
      if (arg === '-r' || arg === '--raw-output') {
        rawOutput = true;
      } else if (!filter || filter === '.') {
        filter = arg;
      } else if (!filename) {
        filename = arg;
      }
    }

    let jsonStr = '';
    if (filename) {
      const node = this.fs.getNodeByPath(this.currentPath, filename);
      if (!node) {
        return { stdout: '', stderr: `jq: error: Could not open file ${filename}: No such file or directory`, currentPath: this.currentPath };
      }
      if (node.type === 'dir') {
        return { stdout: '', stderr: `jq: error: ${filename}: Is a directory`, currentPath: this.currentPath };
      }
      jsonStr = node.content;
    } else {
      jsonStr = stdin;
    }

    if (!jsonStr || !jsonStr.trim()) {
      return { stdout: '', stderr: 'jq - commandline JSON processor [missing JSON input]', currentPath: this.currentPath };
    }

    let parsed;
    try {
      parsed = JSON.parse(jsonStr.trim());
    } catch (err) {
      return { stdout: '', stderr: `jq: parse error: Invalid numeric or JSON literal`, currentPath: this.currentPath };
    }

    let result = parsed;
    const cleanFilter = filter ? filter.trim().replace(/^['"]|['"]$/g, '') : '.';

    if (cleanFilter !== '.' && cleanFilter !== '') {
      const tokens = cleanFilter.replace(/^\./, '').match(/[^.\[\]]+|\[\d+\]/g) || [];
      for (const token of tokens) {
        if (result === undefined || result === null) break;
        if (token.startsWith('[') && token.endsWith(']')) {
          const idx = parseInt(token.slice(1, -1), 10);
          result = Array.isArray(result) ? result[idx] : undefined;
        } else {
          result = result[token];
        }
      }
    }

    if (result === undefined) {
      return { stdout: 'null', stderr: '', currentPath: this.currentPath };
    }

    if (rawOutput && typeof result === 'string') {
      return { stdout: result, stderr: '', currentPath: this.currentPath };
    }

    return {
      stdout: typeof result === 'object' ? JSON.stringify(result, null, 2) : JSON.stringify(result),
      stderr: '',
      currentPath: this.currentPath
    };
  }

  runStrings(args, stdin) {
    const file = args.find(a => !a.startsWith('-'));
    let content = '';
    if (file) {
      if (file === '/bin/app' || file.endsWith('/app')) {
        const defaultAppStrings = [
          '/lib64/ld-linux-x86-64.so.2',
          'libc.so.6',
          'puts',
          'printf',
          '__libc_start_main',
          'GLIBC_2.2.5',
          'BashQuest Enterprise App v2.4.1',
          'Compiled by root@build-srv-01',
          'Build Date: 2026-06-15',
          'DATABASE_URL=postgres://localhost:5432/production',
          'Secret API Key: bq_prod_994827104'
        ];
        return { stdout: defaultAppStrings.join('\n'), stderr: '', currentPath: this.currentPath };
      }
      const node = this.fs.getNodeByPath(this.currentPath, file);
      if (!node) {
        return { stdout: '', stderr: `strings: '${file}': No such file`, currentPath: this.currentPath };
      }
      content = node.content || '';
    } else {
      content = stdin || '';
    }
    const matches = content.match(/[A-Za-z0-9_\-\.\/\:\@]{4,}/g) || [];
    return { stdout: matches.join('\n'), stderr: '', currentPath: this.currentPath };
  }

  runXxd(args, stdin) {
    const file = args.find(a => !a.startsWith('-'));
    let content = '';
    if (file) {
      const node = this.fs.getNodeByPath(this.currentPath, file);
      if (!node) {
        return { stdout: '', stderr: `xxd: ${file}: No such file or directory`, currentPath: this.currentPath };
      }
      content = node.content || '';
    } else {
      content = stdin || '';
    }
    if (!content) {
      content = 'ELF binary simulated header';
    }
    const lines = [];
    const bytes = typeof Buffer !== 'undefined' ? Buffer.from(content) : new TextEncoder().encode(content);
    for (let i = 0; i < Math.min(bytes.length, 64); i += 16) {
      const slice = bytes.subarray(i, i + 16);
      const hexParts = [];
      let ascii = '';
      for (let j = 0; j < 16; j++) {
        if (j < slice.length) {
          const b = slice[j];
          hexParts.push(b.toString(16).padStart(2, '0'));
          ascii += (b >= 32 && b <= 126) ? String.fromCharCode(b) : '.';
        } else {
          hexParts.push('  ');
          ascii += ' ';
        }
      }
      const groupedHex = [];
      for (let h = 0; h < 16; h += 2) {
        groupedHex.push(hexParts[h] + (hexParts[h + 1] || ''));
      }
      const offset = i.toString(16).padStart(8, '0');
      lines.push(`${offset}: ${groupedHex.join(' ')}  ${ascii}`);
    }
    return { stdout: lines.join('\n'), stderr: '', currentPath: this.currentPath };
  }

  runHexdump(args, stdin) {
    const file = args.find(a => !a.startsWith('-'));
    let content = '';
    if (file) {
      const node = this.fs.getNodeByPath(this.currentPath, file);
      if (!node) {
        return { stdout: '', stderr: `hexdump: ${file}: No such file or directory`, currentPath: this.currentPath };
      }
      content = node.content || '';
    } else {
      content = stdin || '';
    }
    if (!content) content = 'ELF binary simulated header';
    const lines = [];
    const bytes = typeof Buffer !== 'undefined' ? Buffer.from(content) : new TextEncoder().encode(content);
    for (let i = 0; i < Math.min(bytes.length, 64); i += 16) {
      const slice = bytes.subarray(i, i + 16);
      const hexParts = [];
      let ascii = '';
      for (let j = 0; j < 16; j++) {
        if (j < slice.length) {
          const b = slice[j];
          hexParts.push(b.toString(16).padStart(2, '0'));
          ascii += (b >= 32 && b <= 126) ? String.fromCharCode(b) : '.';
        } else {
          hexParts.push('  ');
          ascii += ' ';
        }
      }
      const offset = i.toString(16).padStart(8, '0');
      const first8 = hexParts.slice(0, 8).join(' ');
      const last8 = hexParts.slice(8, 16).join(' ');
      lines.push(`${offset}  ${first8}  ${last8}  |${ascii}|`);
    }
    return { stdout: lines.join('\n'), stderr: '', currentPath: this.currentPath };
  }

  runRead(args) {
    let varName = 'REPLY';
    for (let i = 0; i < args.length; i++) {
      if (args[i] === '-p' && args[i + 1]) {
        i++; // skip prompt text
      } else if (!args[i].startsWith('-')) {
        varName = args[i];
      }
    }
    this.env[varName] = this.env[varName] || 'learner';
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runVim(args) {
    const filename = args.find(a => !a.startsWith('-')) || 'untitled.txt';
    const resolvedPath = this.fs.resolvePathStr(this.currentPath, filename);
    const node = this.fs.getNodeByPath(this.currentPath, filename);
    let lines = [''];
    if (node && node.type === 'file') {
      lines = (node.content || '').split('\n');
      if (lines.length === 0) lines = [''];
    }
    this.vimState = {
      filename,
      path: resolvedPath,
      lines,
      cursor: 0,
      mode: 'normal',
      yankBuffer: [],
      modified: false,
      statusMsg: `"${filename}" ${lines.length}L`
    };
    return this.renderVimScreen();
  }

  saveVimFile() {
    if (!this.vimState) return;
    const parts = this.vimState.path.split('/');
    const fname = parts.pop();
    const dir = parts.join('/') || '/';
    let node = this.fs.getNodeByPath(dir, fname);
    const content = this.vimState.lines.join('\n');
    if (!node) {
      this.fs.createNode(dir, fname, 'file');
      node = this.fs.getNodeByPath(dir, fname);
    }
    if (node) {
      node.content = content;
      node.size = content.length;
    }
    this.vimState.modified = false;
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('app:filesystem-update'));
    }
  }

  renderVimScreen(overrideStatus = '') {
    const vs = this.vimState;
    if (!vs) return { stdout: '', stderr: '', currentPath: this.currentPath };
    const status = overrideStatus || (vs.mode === 'insert' ? '-- INSERT --' : (vs.statusMsg || `"${vs.filename}" ${vs.lines.length} lines`));
    const renderedLines = vs.lines.map((l, idx) => {
      const cursorMarker = (idx === vs.cursor && vs.mode === 'normal') ? '▶ ' : '  ';
      return `${cursorMarker}${String(idx + 1).padStart(3, ' ')}  ${l}`;
    });
    while (renderedLines.length < 8) {
      renderedLines.push('~');
    }
    renderedLines.push('--------------------------------------------------');
    renderedLines.push(`[VIM] ${vs.filename} ${vs.modified ? '[+]' : ''} | Mode: ${vs.mode.toUpperCase()} | ${status}`);
    return {
      stdout: renderedLines.join('\n'),
      stderr: '',
      currentPath: this.currentPath,
      isVim: true
    };
  }

  handleVimInput(rawInput) {
    if (!this.vimState) {
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    const input = rawInput.trim();
    const vs = this.vimState;

    if (vs.mode === 'insert') {
      if (input === 'Esc' || input === 'ESC' || input === '^[') {
        vs.mode = 'normal';
        vs.statusMsg = '';
        return this.renderVimScreen();
      }
      vs.lines.splice(vs.cursor + 1, 0, rawInput);
      vs.cursor++;
      vs.modified = true;
      return this.renderVimScreen();
    }

    // Normal mode commands
    if (input === 'i' || input === 'I') {
      vs.mode = 'insert';
      vs.statusMsg = '-- INSERT --';
      return this.renderVimScreen();
    }

    if (input === 'Esc' || input === 'ESC') {
      vs.statusMsg = '';
      return this.renderVimScreen();
    }

    if (input === 'dd') {
      if (vs.lines.length > 0) {
        const deleted = vs.lines.splice(vs.cursor, 1);
        vs.yankBuffer = deleted;
        if (vs.lines.length === 0) vs.lines = [''];
        if (vs.cursor >= vs.lines.length) vs.cursor = Math.max(0, vs.lines.length - 1);
        vs.modified = true;
        vs.statusMsg = '1 line deleted';
      }
      return this.renderVimScreen();
    }

    if (input === 'yy') {
      if (vs.lines.length > 0) {
        vs.yankBuffer = [vs.lines[vs.cursor] || ''];
        vs.statusMsg = '1 line yanked';
      }
      return this.renderVimScreen();
    }

    if (input === 'p' || input === 'P') {
      if (vs.yankBuffer && vs.yankBuffer.length > 0) {
        const insertIdx = input === 'P' ? vs.cursor : vs.cursor + 1;
        vs.lines.splice(insertIdx, 0, ...vs.yankBuffer);
        vs.cursor = insertIdx;
        vs.modified = true;
        vs.statusMsg = `${vs.yankBuffer.length} line(s) pasted`;
      }
      return this.renderVimScreen();
    }

    if (input.startsWith('/') && input.length > 1) {
      const pattern = input.slice(1);
      const idx = vs.lines.findIndex(l => l.includes(pattern));
      if (idx !== -1) {
        vs.cursor = idx;
        vs.statusMsg = `/${pattern}`;
      } else {
        vs.statusMsg = `Pattern not found: ${pattern}`;
      }
      return this.renderVimScreen();
    }

    const sMatch = input.match(/^:%s\/(.*?)\/(.*?)(?:\/([gi]*))?$/);
    if (sMatch) {
      const search = sMatch[1];
      const replace = sMatch[2];
      const flags = sMatch[3] || '';
      const reg = new RegExp(search, flags.includes('g') ? 'g' : '');
      let count = 0;
      vs.lines = vs.lines.map(line => {
        if (reg.test(line)) count++;
        return line.replace(reg, replace);
      });
      vs.modified = true;
      vs.statusMsg = `${count} substitution(s)`;
      return this.renderVimScreen();
    }

    if (input === ':w') {
      this.saveVimFile();
      vs.statusMsg = `"${vs.filename}" written`;
      return this.renderVimScreen();
    }

    if (input === ':wq' || input === ':x' || input === 'ZZ') {
      this.saveVimFile();
      const fname = vs.filename;
      this.vimState = null;
      return { stdout: `"${fname}" written`, stderr: '', currentPath: this.currentPath };
    }

    if (input === ':q!') {
      this.vimState = null;
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    if (input === ':q') {
      if (vs.modified) {
        return this.renderVimScreen('E37: No write since last change (add ! to override)');
      }
      this.vimState = null;
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }

    vs.statusMsg = `Unknown command: ${input}`;
    return this.renderVimScreen();
  }

  runRsync(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'rsync: syntax: rsync [OPTION...] SRC... [DEST]', currentPath: this.currentPath };
    }
    const cleanArgs = [];
    let archive = false, verbose = false, compress = false;
    for (let i = 0; i < args.length; i++) {
      const a = args[i];
      if (a.startsWith('-')) {
        if (a.includes('a')) archive = true;
        if (a.includes('v')) verbose = true;
        if (a.includes('z')) compress = true;
      } else {
        cleanArgs.push(a);
      }
    }
    if (cleanArgs.length < 2) {
      return { stdout: '', stderr: 'rsync: missing destination file operand after ' + (cleanArgs[0] || ''), currentPath: this.currentPath };
    }
    const srcArg = cleanArgs[0];
    const destArg = cleanArgs[1];
    const srcNode = this.fs.getNodeByPath(this.currentPath, srcArg);
    if (!srcNode) {
      return { stdout: '', stderr: `rsync: link_stat "${srcArg}" failed: No such file or directory (2)`, currentPath: this.currentPath };
    }

    const destAbsStr = this.fs.resolvePathStr(this.currentPath, destArg);
    let destNode = this.fs.getNodeByPath('/', destAbsStr);
    if (!destNode) {
      this.fs.createNode('/', destAbsStr, 'dir', { createParents: true });
      destNode = this.fs.getNodeByPath('/', destAbsStr);
    }

    const cloneNode = (node, newName) => {
      const cloned = { ...node, name: newName };
      if (node.children) {
        cloned.children = node.children.map(child => cloneNode(child, child.name));
      }
      return cloned;
    };

    const copiedFiles = [];
    if (srcNode.type === 'file') {
      const existingIdx = destNode.children.findIndex(c => c.name === srcNode.name);
      if (existingIdx !== -1) {
        destNode.children.splice(existingIdx, 1);
      }
      destNode.children.push(cloneNode(srcNode, srcNode.name));
      copiedFiles.push(srcNode.name);
    } else if (srcNode.type === 'dir') {
      const trailingSlash = srcArg.endsWith('/');
      if (trailingSlash) {
        if (srcNode.children) {
          for (const child of srcNode.children) {
            const existingIdx = destNode.children.findIndex(c => c.name === child.name);
            if (existingIdx !== -1) {
              destNode.children.splice(existingIdx, 1);
            }
            destNode.children.push(cloneNode(child, child.name));
            copiedFiles.push(child.name);
          }
        }
      } else {
        const existingIdx = destNode.children.findIndex(c => c.name === srcNode.name);
        if (existingIdx !== -1) {
          destNode.children.splice(existingIdx, 1);
        }
        destNode.children.push(cloneNode(srcNode, srcNode.name));
        copiedFiles.push(srcNode.name);
      }
    }

    let out = 'sending incremental file list\n./\n';
    for (const f of copiedFiles) {
      out += `${f}\n`;
    }
    out += `\nsent 1,842 bytes  received 74 bytes  3,832.00 bytes/sec\ntotal size is 4,120  speedup is 2.15`;
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runSha256sum(args, stdin) {
    let checkMode = false;
    let targetFiles = [];
    for (let i = 0; i < args.length; i++) {
      if (args[i] === '-c' || args[i] === '--check') {
        checkMode = true;
      } else if (!args[i].startsWith('-')) {
        targetFiles.push(args[i]);
      }
    }
    if (checkMode) {
      const checkFile = targetFiles[0];
      if (!checkFile) {
        return { stdout: '', stderr: 'sha256sum: no file specified for --check', currentPath: this.currentPath };
      }
      const node = this.fs.getNodeByPath(this.currentPath, checkFile);
      if (!node || node.type !== 'file') {
        return { stdout: '', stderr: `sha256sum: ${checkFile}: No such file or directory`, currentPath: this.currentPath };
      }
      const lines = (node.content || '').trim().split('\n');
      const results = [];
      let failCount = 0;
      for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line || line.startsWith('#')) continue;
        const match = line.match(/^([a-fA-F0-9]{64})\s+[*]?(.+)$/);
        if (match) {
          const expectedHash = match[1].toLowerCase();
          const targetName = match[2].trim();
          const absCheck = this.fs.resolvePathStr(this.currentPath, checkFile);
          const checkDir = absCheck.substring(0, absCheck.lastIndexOf('/')) || '/';
          const fileInCheckDir = this.fs.getNodeByPath(checkDir, targetName);
          const fileInCurrentDir = this.fs.getNodeByPath(this.currentPath, targetName);
          const targetNode = fileInCheckDir || fileInCurrentDir;
          if (!targetNode || targetNode.type !== 'file') {
            results.push(`${targetName}: FAILED open or read`);
            failCount++;
          } else {
            const actualHash = simpleSha256(targetNode.content || '');
            if (actualHash === expectedHash) {
              results.push(`${targetName}: OK`);
            } else {
              results.push(`${targetName}: FAILED`);
              failCount++;
            }
          }
        }
      }
      let out = results.join('\n');
      if (failCount > 0) {
        out += `\nsha256sum: WARNING: ${failCount} computed checksum did NOT match`;
        this.lastExitCode = 1;
        return { stdout: out, stderr: '', currentPath: this.currentPath };
      }
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }

    if (targetFiles.length === 0) {
      if (stdin !== undefined && stdin !== null) {
        const hash = simpleSha256(stdin);
        return { stdout: `${hash}  -`, stderr: '', currentPath: this.currentPath };
      }
      return { stdout: '', stderr: 'sha256sum: missing file operand', currentPath: this.currentPath };
    }

    const lines = [];
    for (const f of targetFiles) {
      if (f === '-') {
        const hash = simpleSha256(stdin || '');
        lines.push(`${hash}  -`);
        continue;
      }
      const node = this.fs.getNodeByPath(this.currentPath, f);
      if (!node) {
        return { stdout: '', stderr: `sha256sum: ${f}: No such file or directory`, currentPath: this.currentPath };
      }
      if (node.type === 'dir') {
        return { stdout: '', stderr: `sha256sum: ${f}: Is a directory`, currentPath: this.currentPath };
      }
      const hash = simpleSha256(node.content || '');
      lines.push(`${hash}  ${f}`);
    }
    return { stdout: lines.join('\n'), stderr: '', currentPath: this.currentPath };
  }

  runMd5sum(args, stdin) {
    let checkMode = false;
    let targetFiles = [];
    for (let i = 0; i < args.length; i++) {
      if (args[i] === '-c' || args[i] === '--check') {
        checkMode = true;
      } else if (!args[i].startsWith('-')) {
        targetFiles.push(args[i]);
      }
    }
    if (checkMode) {
      const checkFile = targetFiles[0];
      if (!checkFile) {
        return { stdout: '', stderr: 'md5sum: no file specified for --check', currentPath: this.currentPath };
      }
      const node = this.fs.getNodeByPath(this.currentPath, checkFile);
      if (!node || node.type !== 'file') {
        return { stdout: '', stderr: `md5sum: ${checkFile}: No such file or directory`, currentPath: this.currentPath };
      }
      const lines = (node.content || '').trim().split('\n');
      const results = [];
      let failCount = 0;
      for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line || line.startsWith('#')) continue;
        const match = line.match(/^([a-fA-F0-9]{32})\s+[*]?(.+)$/);
        if (match) {
          const expectedHash = match[1].toLowerCase();
          const targetName = match[2].trim();
          const absCheck = this.fs.resolvePathStr(this.currentPath, checkFile);
          const checkDir = absCheck.substring(0, absCheck.lastIndexOf('/')) || '/';
          const fileInCheckDir = this.fs.getNodeByPath(checkDir, targetName);
          const fileInCurrentDir = this.fs.getNodeByPath(this.currentPath, targetName);
          const targetNode = fileInCheckDir || fileInCurrentDir;
          if (!targetNode || targetNode.type !== 'file') {
            results.push(`${targetName}: FAILED open or read`);
            failCount++;
          } else {
            const actualHash = simpleMd5(targetNode.content || '');
            if (actualHash === expectedHash) {
              results.push(`${targetName}: OK`);
            } else {
              results.push(`${targetName}: FAILED`);
              failCount++;
            }
          }
        }
      }
      let out = results.join('\n');
      if (failCount > 0) {
        out += `\nmd5sum: WARNING: ${failCount} computed checksum did NOT match`;
        this.lastExitCode = 1;
        return { stdout: out, stderr: '', currentPath: this.currentPath };
      }
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }

    if (targetFiles.length === 0) {
      if (stdin !== undefined && stdin !== null) {
        const hash = simpleMd5(stdin);
        return { stdout: `${hash}  -`, stderr: '', currentPath: this.currentPath };
      }
      return { stdout: '', stderr: 'md5sum: missing file operand', currentPath: this.currentPath };
    }

    const lines = [];
    for (const f of targetFiles) {
      if (f === '-') {
        const hash = simpleMd5(stdin || '');
        lines.push(`${hash}  -`);
        continue;
      }
      const node = this.fs.getNodeByPath(this.currentPath, f);
      if (!node) {
        return { stdout: '', stderr: `md5sum: ${f}: No such file or directory`, currentPath: this.currentPath };
      }
      if (node.type === 'dir') {
        return { stdout: '', stderr: `md5sum: ${f}: Is a directory`, currentPath: this.currentPath };
      }
      const hash = simpleMd5(node.content || '');
      lines.push(`${hash}  ${f}`);
    }
    return { stdout: lines.join('\n'), stderr: '', currentPath: this.currentPath };
  }

  runDd(args) {
    let ifArg = '', ofArg = '', bs = 512, count = 1;
    for (const a of args) {
      if (a.startsWith('if=')) ifArg = a.slice(3);
      else if (a.startsWith('of=')) ofArg = a.slice(3);
      else if (a.startsWith('bs=')) {
        const rawBs = a.slice(3);
        if (rawBs.endsWith('M')) bs = parseInt(rawBs) * 1024 * 1024;
        else if (rawBs.endsWith('K') || rawBs.endsWith('k')) bs = parseInt(rawBs) * 1024;
        else bs = parseInt(rawBs) || 512;
      } else if (a.startsWith('count=')) {
        count = parseInt(a.slice(6)) || 1;
      }
    }
    if (!ifArg || !ofArg) {
      return { stdout: '', stderr: 'dd: missing operands (need if= and of=)', currentPath: this.currentPath };
    }
    const ofPath = this.fs.resolvePathStr(this.currentPath, ofArg);
    let content = '';
    if (ifArg === '/dev/zero') {
      content = '0'.repeat(Math.min(1024, bs * count));
    } else if (ifArg === '/dev/urandom') {
      content = 'a1b2c3d4e5f6'.repeat(Math.min(100, count));
    } else {
      const ifNode = this.fs.getNodeByPath(this.currentPath, ifArg);
      if (!ifNode) {
        return { stdout: '', stderr: `dd: failed to open '${ifArg}': No such file or directory`, currentPath: this.currentPath };
      }
      content = ifNode.content || '';
    }
    const dir = ofPath.substring(0, ofPath.lastIndexOf('/')) || '/';
    const filename = ofPath.substring(ofPath.lastIndexOf('/') + 1);
    if (!this.fs.getNodeByPath('/', dir)) {
      this.fs.createNode('/', dir, 'dir', { createParents: true });
    }
    this.fs.createNode(dir, filename, 'file', { content, permissions: '-rw-r--r--' });

    const totalBytes = bs * count;
    const mb = (totalBytes / (1024 * 1024)).toFixed(1);
    const out = [
      `${count}+0 records in`,
      `${count}+0 records out`,
      `${totalBytes} bytes (${mb} MB, ${mb} MiB) copied, 0.002812 s, 372 MB/s`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runMktemp(args) {
    let isDir = false;
    let template = '';
    for (const a of args) {
      if (a === '-d' || a === '--directory') isDir = true;
      else if (!a.startsWith('-')) template = a;
    }
    const randSuffix = Math.random().toString(36).substring(2, 8);
    let targetPath = '';
    if (template) {
      targetPath = template.replace(/X{3,10}$/, randSuffix);
      if (!targetPath.includes('/')) targetPath = `/tmp/${targetPath}`;
    } else {
      targetPath = `/tmp/tmp.${randSuffix}`;
    }
    const resolved = this.fs.resolvePathStr(this.currentPath, targetPath);
    const dir = resolved.substring(0, resolved.lastIndexOf('/')) || '/';
    const name = resolved.substring(resolved.lastIndexOf('/') + 1);
    if (!this.fs.getNodeByPath('/', dir)) {
      this.fs.createNode('/', dir, 'dir', { createParents: true });
    }
    if (isDir) {
      this.fs.createNode(dir, name, 'dir', { permissions: 'drwx------' });
    } else {
      this.fs.createNode(dir, name, 'file', { content: '', permissions: '-rw-------' });
    }
    return { stdout: resolved, stderr: '', currentPath: this.currentPath };
  }

  runSource(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: 'bash: source: filename argument required\nsource: usage: source filename [arguments]', currentPath: this.currentPath };
    }
    const node = this.fs.getNodeByPath(this.currentPath, args[0]);
    if (!node || node.type !== 'file') {
      return { stdout: '', stderr: `bash: source: ${args[0]}: No such file or directory`, currentPath: this.currentPath };
    }
    if (node.content) {
      const lines = node.content.split('\n');
      for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line || line.startsWith('#')) continue;
        if (line.startsWith('export ')) {
          const match = line.slice(7).trim().match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
          if (match) {
            this.env[match[1]] = match[2].replace(/^["']|["']$/g, '');
          }
        } else if (line.startsWith('alias ')) {
          const match = line.slice(6).trim().match(/^([A-Za-z0-9_-]+)=(.*)$/);
          if (match) {
            if (!this.aliases) {
              this.aliases = { la: 'ls -a', ll: 'ls -la', l: 'ls -CF' };
            }
            this.aliases[match[1]] = match[2].replace(/^["']|["']$/g, '');
          }
        }
      }
    }
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runUnset(args) {
    if (args.length === 0) {
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    for (const arg of args) {
      if (this.env && arg in this.env) {
        delete this.env[arg];
      }
    }
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runUnalias(args) {
    if (!this.aliases) {
      this.aliases = { la: 'ls -a', ll: 'ls -la', l: 'ls -CF' };
    }
    if (args.length === 0) {
      return { stdout: '', stderr: 'unalias: usage: unalias [-a] name [name ...]', currentPath: this.currentPath };
    }
    if (args.includes('-a')) {
      this.aliases = {};
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    for (const arg of args) {
      if (this.aliases[arg]) {
        delete this.aliases[arg];
      } else {
        return { stdout: '', stderr: `bash: unalias: ${arg}: not found`, currentPath: this.currentPath };
      }
    }
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runUsermod(args, isSudo) {
    if (!isSudo) {
      return { stdout: '', stderr: 'usermod: Permission denied.', currentPath: this.currentPath };
    }
    let group = '';
    let shell = '';
    let user = '';
    for (let i = 0; i < args.length; i++) {
      const a = args[i];
      if (a === '-aG' || a === '-Ga') {
        group = args[i + 1];
        i++;
      } else if (a === '-G') {
        group = args[i + 1];
        i++;
      } else if (a === '-s') {
        shell = args[i + 1];
        i++;
      } else if (!a.startsWith('-')) {
        user = a;
      }
    }
    if (!user) {
      return { stdout: '', stderr: 'usermod: missing user operand', currentPath: this.currentPath };
    }
    const passwdNode = this.fs.getNodeByPath('/etc', 'passwd');
    if (passwdNode && passwdNode.content && shell) {
      const lines = passwdNode.content.split('\n');
      passwdNode.content = lines.map(line => {
        const parts = line.split(':');
        if (parts[0] === user) {
          parts[6] = shell;
          return parts.join(':');
        }
        return line;
      }).join('\n');
    }
    const groupNode = this.fs.getNodeByPath('/etc', 'group');
    if (groupNode && groupNode.content && group) {
      const lines = groupNode.content.split('\n');
      let groupFound = false;
      groupNode.content = lines.map(line => {
        const parts = line.split(':');
        if (parts[0] === group) {
          groupFound = true;
          const members = parts[3] ? parts[3].split(',').filter(Boolean) : [];
          if (!members.includes(user)) {
            members.push(user);
          }
          parts[3] = members.join(',');
          return parts.join(':');
        }
        return line;
      }).join('\n');
      if (!groupFound) {
        return { stdout: '', stderr: `usermod: group '${group}' does not exist`, currentPath: this.currentPath };
      }
    }
    return { stdout: '', stderr: '', currentPath: this.currentPath };
  }

  runSshKeygen(args) {
    let keyType = 'ed25519';
    for (let i = 0; i < args.length; i++) {
      if (args[i] === '-t' && args[i + 1]) {
        keyType = args[i + 1].toLowerCase();
        i++;
      }
    }
    const privName = keyType === 'rsa' ? 'id_rsa' : `id_${keyType}`;
    const pubName = `${privName}.pub`;
    if (!this.fs.getNodeByPath('/home/learner', '.ssh')) {
      this.fs.createNode('/home/learner', '.ssh', 'dir', { permissions: 'drwx------' });
    }
    this.fs.createNode('/home/learner/.ssh', privName, 'file', {
      content: `-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACD7...==\n-----END OPENSSH PRIVATE KEY-----\n`,
      permissions: '-rw-------'
    });
    this.fs.createNode('/home/learner/.ssh', pubName, 'file', {
      content: `ssh-${keyType} AAAAC3NzaC1lZDI1NTE5AAAAIH8qM... learner@bashquest\n`,
      permissions: '-rw-r--r--'
    });

    const out = [
      `Generating public/private ${keyType} key pair.`,
      `Your identification has been saved in /home/learner/.ssh/${privName}`,
      `Your public key has been saved in /home/learner/.ssh/${pubName}`,
      `The key fingerprint is:`,
      `SHA256:7bXm9aK2YqPzL1wE4dF8vN6c0jR3tG5sH1uI2oP9w learner@bashquest`,
      `The key's randomart image is:`,
      `+--[${keyType.toUpperCase()} 256]--+`,
      `|       .o.       |`,
      `|      .. +       |`,
      `|     .  o o      |`,
      `|      .. = .     |`,
      `|      . S *      |`,
      `|       + B .     |`,
      `|      o * + .    |`,
      `|     . * O + .   |`,
      `|      . =+E.     |`,
      `+----[SHA256]-----+`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runSshCopyId(args) {
    const target = args.find(a => !a.startsWith('-')) || '';
    if (!target) {
      return { stdout: '', stderr: 'ssh-copy-id: ERROR: No identities found or destination missing', currentPath: this.currentPath };
    }
    const pubNode = this.fs.getNodeByPath('/home/learner/.ssh', 'id_ed25519.pub') || this.fs.getNodeByPath('/home/learner/.ssh', 'id_rsa.pub');
    const pubKeyPath = pubNode ? `/home/learner/.ssh/${pubNode.name}` : '/home/learner/.ssh/id_ed25519.pub';
    if (!pubNode) {
      if (!this.fs.getNodeByPath('/home/learner', '.ssh')) {
        this.fs.createNode('/home/learner', '.ssh', 'dir', { permissions: 'drwx------' });
      }
      this.fs.createNode('/home/learner/.ssh', 'id_ed25519.pub', 'file', {
        content: `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIH8qM... learner@bashquest\n`,
        permissions: '-rw-r--r--'
      });
    }
    const out = [
      `/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "${pubKeyPath}"`,
      `/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed`,
      `/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- confirming any that need to be added`,
      `Number of key(s) added: 1\n`,
      `Now try logging into the machine, with:   "ssh '${target}'"`,
      `and check to make sure that only the key(s) you wanted were added.`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runWho(args) {
    return { stdout: 'learner  pts/0        2026-10-18 01:42 (:0)', stderr: '', currentPath: this.currentPath };
  }

  runW(args) {
    const out = [
      ` 02:15:00 up 2 days,  4:12,  1 user,  load average: 0.08, 0.03, 0.01`,
      `USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT`,
      `learner  pts/0    192.168.1.50     01:42    1.00s  0.15s  0.02s -bash`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runLast(args) {
    const out = [
      `learner  pts/0        192.168.1.50     Sun Oct 18 01:42   still logged in`,
      `deployer pts/1        192.168.1.20     Sat Oct 17 19:30 - 21:15  (01:45)`,
      `reboot   system boot  5.15.0-generic   Fri Oct 16 22:03   still running\n`,
      `wtmp begins Fri Oct 16 22:03:15 2026`
    ].join('\n');
    return { stdout: out, stderr: '', currentPath: this.currentPath };
  }

  runTmux(args) {
    if (!this.tmuxSessions) {
      this.tmuxSessions = new Set(['work']);
    }
    if (args.length === 0) {
      return { stdout: '[tmux: attach or specify session]', stderr: '', currentPath: this.currentPath };
    }
    const sub = args[0];
    if (sub === 'ls' || sub === 'list-sessions') {
      const list = Array.from(this.tmuxSessions).map(s => `${s}: 1 windows (created Sun Oct 18 01:00:00 2026) [80x24]`);
      return { stdout: list.join('\n'), stderr: '', currentPath: this.currentPath };
    }
    if (sub === 'new' || sub === 'new-session') {
      let sName = '0';
      for (let i = 1; i < args.length; i++) {
        if (args[i] === '-s' && args[i + 1]) {
          sName = args[i + 1];
          break;
        }
      }
      this.tmuxSessions.add(sName);
      return { stdout: `[detached (from session ${sName})]`, stderr: '', currentPath: this.currentPath };
    }
    if (sub === 'attach' || sub === 'attach-session' || sub === 'a') {
      let sName = Array.from(this.tmuxSessions)[0] || 'work';
      for (let i = 1; i < args.length; i++) {
        if (args[i] === '-t' && args[i + 1]) {
          sName = args[i + 1];
          break;
        }
      }
      if (!this.tmuxSessions.has(sName)) {
        return { stdout: '', stderr: `session not found: ${sName}`, currentPath: this.currentPath };
      }
      return { stdout: `[attached to session ${sName}]\n[detached (from session ${sName})]`, stderr: '', currentPath: this.currentPath };
    }
    if (sub === 'kill-session') {
      let sName = '';
      for (let i = 1; i < args.length; i++) {
        if (args[i] === '-t' && args[i + 1]) {
          sName = args[i + 1];
          break;
        }
      }
      if (sName) this.tmuxSessions.delete(sName);
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: `tmux: unknown command: ${sub}`, currentPath: this.currentPath };
  }

  runGit(args) {
    if (!this.gitState) {
      this.gitState = { staged: false, committed: false };
    }
    if (args.length === 0) {
      return { stdout: 'usage: git [--version] [--help] <command> [<args>]', stderr: '', currentPath: this.currentPath };
    }
    const sub = args[0];
    if (sub === 'status') {
      if (this.gitState.committed) {
        return { stdout: 'On branch main\nnothing to commit, working tree clean', stderr: '', currentPath: this.currentPath };
      }
      if (this.gitState.staged) {
        return {
          stdout: 'On branch main\nChanges to be committed:\n  (use "git restore --staged <file>..." to unstage)\n\tmodified:   server.js\n',
          stderr: '',
          currentPath: this.currentPath
        };
      }
      return {
        stdout: 'On branch main\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n\tmodified:   server.js\n\nno changes added to commit (use "git add" to track)',
        stderr: '',
        currentPath: this.currentPath
      };
    }
    if (sub === 'diff') {
      if (this.gitState.committed) {
        return { stdout: '', stderr: '', currentPath: this.currentPath };
      }
      const diffOut = [
        'diff --git a/server.js b/server.js',
        'index 8a1b2c3..f4e5d6a 100644',
        '--- a/server.js',
        '+++ b/server.js',
        '@@ -1,5 +1,5 @@',
        ' const express = require("express");',
        ' const app = express();',
        '-const PORT = 3000;',
        '+const PORT = 8080;',
        ' app.get("/health", (req, res) => res.json({ status: "healthy" }));'
      ].join('\n');
      return { stdout: diffOut, stderr: '', currentPath: this.currentPath };
    }
    if (sub === 'add') {
      this.gitState.staged = true;
      return { stdout: '', stderr: '', currentPath: this.currentPath };
    }
    if (sub === 'commit') {
      this.gitState.committed = true;
      let msg = 'Fix port binding for production';
      const mIdx = args.indexOf('-m');
      if (mIdx !== -1 && args[mIdx + 1]) {
        msg = args[mIdx + 1].replace(/['"]/g, '');
      }
      const out = [
        `[main 4f8b2c1] ${msg}`,
        ` 1 file changed, 1 insertion(+), 1 deletion(-)`
      ].join('\n');
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }
    if (sub === 'log') {
      const logs = [
        'commit 4f8b2c1d8e3a2b1c4e5f6a7b8c9d0e1f2a3b4c5d (HEAD -> main)',
        'Author: Deployer <deployer@bashquest.local>',
        'Date:   Sun Oct 18 02:00:00 2026 +0000\n',
        '    Fix port binding for production\n',
        'commit 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b',
        'Author: Developer <dev@bashquest.local>',
        'Date:   Sat Oct 17 14:22:10 2026 +0000\n',
        '    Initial commit: Express microservice'
      ].join('\n');
      return { stdout: logs, stderr: '', currentPath: this.currentPath };
    }
    if (sub === 'branch') {
      return { stdout: '* main', stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: `git: '${sub}' is not a git command. See 'git --help'.`, currentPath: this.currentPath };
  }

  runDocker(args) {
    if (args.length === 0) {
      return { stdout: 'Usage: docker [OPTIONS] COMMAND', stderr: '', currentPath: this.currentPath };
    }
    const sub = args[0];
    if (sub === 'ps') {
      const out = [
        'CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                    NAMES',
        'a1b2c3d4e5f6   node:18-alpine "docker-entrypoint.s…"   2 hours ago     Up 2 hours     0.0.0.0:8080->8080/tcp   web-api'
      ].join('\n');
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }
    if (sub === 'logs') {
      const target = args[1] || 'web-api';
      const out = [
        `[${target}] Starting production service...`,
        `[${target}] Connecting to database at db:5432... OK`,
        `[${target}] HTTP server listening on port 8080`,
        `[${target}] Ready for traffic`
      ].join('\n');
      return { stdout: out, stderr: '', currentPath: this.currentPath };
    }
    if (sub === 'exec') {
      const nonFlags = args.slice(1).filter(a => !a.startsWith('-'));
      const container = nonFlags[0] || 'web-api';
      const cmd = nonFlags.slice(1).join(' ') || 'sh';
      if (cmd.includes('curl') || cmd.includes('health')) {
        return { stdout: '{"status":"healthy","uptime":7340,"version":"1.0.1"}', stderr: '', currentPath: this.currentPath };
      }
      return { stdout: `node-service-v1.0.1:/app# ${cmd}\nCommand executed successfully in ${container}`, stderr: '', currentPath: this.currentPath };
    }
    if (sub === 'restart' || sub === 'stop' || sub === 'start') {
      const target = args[1] || 'web-api';
      return { stdout: target, stderr: '', currentPath: this.currentPath };
    }
    return { stdout: '', stderr: `docker: '${sub}' is not a docker command.`, currentPath: this.currentPath };
  }
}