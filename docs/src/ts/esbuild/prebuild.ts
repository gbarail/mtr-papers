import fs from 'node:fs';
import path from 'node:path';

export default function prebuild() {
  copyPapers();
}

function copyPapers() {
  const papersDir = path.resolve(__dirname, '../../../../papers');
  const outDir = path.resolve(__dirname, '../../../dist/papers');

  fs.cpSync(papersDir, outDir, { recursive: true });
}