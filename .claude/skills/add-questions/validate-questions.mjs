import { readFileSync } from 'fs';
import { resolve } from 'path';

// questions.js is a browser script with globals, not an ES module
const src = readFileSync(resolve('questions.js'), 'utf8');
const fn = new Function(src + '\nreturn { TOPICS, questions };');
const { TOPICS, questions } = fn();

const validTopics = Object.keys(TOPICS);
const ids = questions.map(q => q.id);
const dups = ids.filter((id, i) => ids.indexOf(id) !== i);
const bad = questions.filter(q =>
  q.options.length !== 5 ||
  q.correctIndex < 0 || q.correctIndex > 4 ||
  !q.explanation ||
  !validTopics.includes(q.topic)
);

let failed = false;
if (dups.length) { console.error('FAIL: Duplicate IDs:', dups); failed = true; }
if (bad.length) { console.error('FAIL: Invalid questions:', bad.map(q => q.id)); failed = true; }
if (!failed) console.log('OK:', questions.length, 'questions valid');
process.exit(failed ? 1 : 0);
