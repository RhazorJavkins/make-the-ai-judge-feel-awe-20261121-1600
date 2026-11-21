const { mkdirSync, writeFileSync } = require('node:fs');

const entry = [
  'In the worn hollow of a stone step, a little rain remains.',
  'A birch leaf floats there, its stem at the rim.',
  'Beside it, a star comes into the water, then another.',
  'All night, the sky will pass through the hollow.',
].join(' ');

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', entry, 'utf8');
