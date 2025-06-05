const fs = require('fs');
const path = require('path');

// Gather all .js plugin files under plugins/google
const pluginDir = 'plugins/google';
const files = fs.readdirSync(pluginDir).flatMap(dir => {
  const d = path.join(pluginDir, dir);
  return fs.readdirSync(d)
    .filter(f => f.endsWith('.js') && !f.endsWith('.spec.js'))
    .map(f => path.join(d, f));
});

let entries = [];
for (const file of files) {
  const data = fs.readFileSync(file, 'utf8');
  const extract = key =>
    (data.match(new RegExp(key + "\\s*:\\s*'([^']*)'")) ||
     data.match(new RegExp(key + "\\s*:\\s*\"([^\"]*)\"")) || [])[1] || '';

  entries.push({
    title: extract('title'),
    category: extract('category'),
    domain: extract('domain'),
    description: extract('description'),
    severity: extract('severity')
  });
}

let lines = [];
lines.push('| Seq | Title | Category | Domain | Description | Severity |');
lines.push('|----|-------|----------|--------|-------------|----------|');
entries.forEach((e, i) => {
  lines.push(`| ${i + 1} | ${e.title} | ${e.category} | ${e.domain} | ${e.description} | ${e.severity} |`);
});
fs.writeFileSync('google_checks.md', lines.join('\n'));
