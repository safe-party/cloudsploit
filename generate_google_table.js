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

// Write markdown table
let lines = [];
lines.push('| Seq | Title | Category | Domain | Description | Severity |');
lines.push('|----|-------|----------|--------|-------------|----------|');
entries.forEach((e, i) => {
  lines.push(`| ${i + 1} | ${e.title} | ${e.category} | ${e.domain} | ${e.description} | ${e.severity} |`);
});
fs.writeFileSync('google_checks.md', lines.join('\n') + '\n');

// Calculate severity summary
const severitySummary = entries.reduce((acc, e) => {
  acc[e.severity] = (acc[e.severity] || 0) + 1;
  return acc;
}, {});

// Write HTML table with sort and filter
const html = [];
html.push(`<!DOCTYPE html>`);
html.push(`<html lang="en">`);
html.push(`<head>`);
html.push(`<meta charset="utf-8">`);
html.push(`<title>Google Cloud Checks</title>`);
html.push(`<style>`);
html.push(`table { border-collapse: collapse; width: 100%; }`);
html.push(`th, td { border: 1px solid #ddd; padding: 4px; }`);
html.push(`th { cursor: pointer; background-color: #f2f2f2; }`);
html.push(`#filterInput { margin-bottom: 10px; }`);
html.push(`</style>`);
html.push(`<script>
function sortTable(n) {
  var table = document.getElementById('checksTable');
  var rows = Array.from(table.rows).slice(1);
  var asc = table.getAttribute('data-sort-' + n) !== 'asc';
  rows.sort(function(a, b) {
    var t1 = a.cells[n].innerText.toLowerCase();
    var t2 = b.cells[n].innerText.toLowerCase();
    if(t1 < t2) return asc ? -1 : 1;
    if(t1 > t2) return asc ? 1 : -1;
    return 0;
  });
  rows.forEach(function(r) { table.tBodies[0].appendChild(r); });
  table.setAttribute('data-sort-' + n, asc ? 'asc' : 'desc');
}
function filterTable() {
  var input = document.getElementById('filterInput');
  var filter = input.value.toLowerCase();
  var table = document.getElementById('checksTable');
  var rows = table.getElementsByTagName('tr');
  for (var i = 1; i < rows.length; i++) {
    var text = rows[i].innerText.toLowerCase();
    rows[i].style.display = text.indexOf(filter) > -1 ? '' : 'none';
  }
}
</script>`);
html.push(`</head>`);
html.push(`<body>`);
html.push(`<h1>Google Cloud Checks</h1>`);
html.push(`<h2>Severity Summary</h2>`);
html.push(`<ul>`);
Object.keys(severitySummary).sort().forEach(function(key) {
  html.push(`<li>${key}: ${severitySummary[key]}</li>`);
});
html.push(`</ul>`);
html.push(`<input type="text" id="filterInput" onkeyup="filterTable()" placeholder="Filter">`);
html.push(`<table id="checksTable">`);
html.push(`<thead><tr>`);
['Seq','Title','Category','Domain','Description','Severity'].forEach(function(h, i){
  html.push(`<th onclick="sortTable(${i})">${h}</th>`);
});
html.push(`</tr></thead>`);
html.push(`<tbody>`);
entries.forEach(function(e, i){
  html.push(`<tr><td>${i + 1}</td><td>${e.title}</td><td>${e.category}</td><td>${e.domain}</td><td>${e.description}</td><td>${e.severity}</td></tr>`);
});
html.push(`</tbody></table>`);
html.push(`</body>`);
html.push(`</html>`);

fs.writeFileSync('google_checks.html', html.join('\n'));
