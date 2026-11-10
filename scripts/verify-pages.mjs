import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const output = 'dist/developer-portfolio/browser';
const html = await readFile(join(output, 'index.html'), 'utf8');
assert.match(html, /<base href="\/">/, 'The user site must use base href /.');
assert.match(html, /portfolio-theme/, 'The early theme restoration script must be retained.');

// Compare every public file, including binary assets, with its deployed copy.
async function verifyAssets(directory, relative = '') {
  let count = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const asset = join(relative, entry.name);
    if (entry.isDirectory()) {
      count += await verifyAssets(join(directory, entry.name), asset);
    } else {
      const source = await readFile(join(directory, entry.name));
      const built = await readFile(join(output, asset));
      assert.ok(source.equals(built), `Asset differs or is missing: ${asset}`);
      count++;
    }
  }
  return count;
}

// Validate the compiled entry point's local script, stylesheet and icon URLs.
for (const match of html.matchAll(/<(?:script|link)\b[^>]*(?:src|href)="([^"]+)"/g)) {
  const url = match[1];
  if (/^(?:https?:|data:|\/\/)/.test(url)) continue;
  assert.ok((await stat(join(output, url.replace(/^\//, '')))).isFile(), `Missing entry asset: ${url}`);
}

console.log(`Pages build verified: base /, theme bootstrap, entry assets, and ${await verifyAssets('public')} public files.`);
