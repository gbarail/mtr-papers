import path from 'node:path';

import { type BuildOptions, type Plugin } from 'esbuild';
import { copy } from 'esbuild-plugin-copy';

// input directories
const tsRootDir = path.join(__dirname, '..');
const papersDir = path.join(__dirname, '../../../../papers');

// output directories
const distDir = path.join(__dirname, '../../../dist');
const jsDistDir = path.join(distDir, 'js');
const papersDistDir = path.join(distDir, 'papers');

export const buildOptions: BuildOptions = {
  entryPoints: [
    path.join(tsRootDir, 'index.tsx'),
  ],
  outfile: path.join(jsDistDir, 'index.js'),

  bundle: true,
  loader: {
    '.yaml': 'text',
  },
  plugins: [
    // copy papers
    copy({
      assets: {
        from: `${papersDir}/**/*.pdf`,
        to: papersDistDir,
      },
      watch: true,
    }),
  ],
}