import { readFileSync, existsSync } from 'fs';

const sw = readFileSync('sw.js', 'utf8');
const assets = sw.match(/ASSETS\s*=\s*\[([\s\S]*?)\]/)[1]
  .match(/'([^']+)'/g).map(s => s.replace(/'/g, ''));
const missing = assets.filter(a => {
  const path = a.replace('./', '') || '.';
  return !existsSync(path);
});

if (missing.length) {
  console.error('FAIL: Missing files:', missing);
  process.exit(1);
} else {
  console.log('OK: All', assets.length, 'assets exist on disk');
}
