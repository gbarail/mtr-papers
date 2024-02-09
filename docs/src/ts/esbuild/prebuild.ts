import fs from 'node:fs';
import path from 'node:path';

export default function prebuild() {
  copyPapers();
}

function copyPapers() {
  const papersDir = path.resolve(__dirname, '../../../../papers');
  const outDir = path.resolve(__dirname, '../../../dist/papers');

  const papers = fs.readdirSync(papersDir, {
    recursive: true,
    withFileTypes: true,
  }).filter(dirent => dirent.isFile());

  papers.forEach(dirent => {
    const srcPath = path.join(dirent.path, dirent.name);

    const destDir = path.join(outDir, path.relative(papersDir, dirent.path));
    fs.mkdirSync(destDir, { recursive: true });

    fs.copyFileSync(srcPath, path.join(destDir, dirent.name));
  });
}