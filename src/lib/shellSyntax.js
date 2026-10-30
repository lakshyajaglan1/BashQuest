// Split only at unquoted shell control operators. Preserve the text for validators.
export function splitCommands(source) {
  const parts = [];
  let start = 0, quote = null;
  for (let i = 0; i < source.length; i++) {
    const ch = source[i];
    if (ch === '\\' && quote !== "'") { i++; continue; }
    if (quote) { if (ch === quote) quote = null; continue; }
    if (ch === "'" || ch === '"') { quote = ch; continue; }
    if (ch === '|' || ch === ';' || (ch === '&' && source[i + 1] === '&')) {
      parts.push(source.slice(start, i));
      if (source[i + 1] === ch) i++;
      start = i + 1;
    }
  }
  parts.push(source.slice(start));
  return parts.filter(part => part.trim());
}

// Find a redirection only outside quoted or escaped data, preserving quoted targets.
export function findRedirection(source, operator) {
  let quote = null;
  for (let i = 0; i < source.length; i++) {
    const ch = source[i];
    if (ch === '\\' && quote !== "'") { i++; continue; }
    if (quote) { if (ch === quote) quote = null; continue; }
    if (ch === "'" || ch === '"') { quote = ch; continue; }
    if (!source.startsWith(operator, i)) continue;
    if (operator === '2>&1') return { raw: operator, index: i };
    const rest = source.slice(i + operator.length);
    const match = rest.match(/^\s*("[^"]*"|'[^']*'|[^\s<>]+)/);
    if (!match) continue;
    const target = match[1];
    return { raw: operator + match[0], index: i, file: /^["']/.test(target) ? target.slice(1, -1) : target };
  }
  return null;
}
