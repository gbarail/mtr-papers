import path from 'node:path';

import { type BuildOptions, type Plugin } from 'esbuild';
import { copy } from 'esbuild-plugin-copy';

// input directories
export const pageRootDir = path.join(__dirname, '../../..');
const cssDir = path.join(pageRootDir, 'src/css');
const tsRootDir = path.join(pageRootDir, 'src/ts');
const papersDir = path.join(pageRootDir, '../papers');

// output directories
export const distDir = path.join(__dirname, '../../../dist');
const cssDistDir = path.join(distDir, 'css');
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
    copy({
      assets: [
        { // copy `index.html` and `favicon.ico`
          from: [
            path.join(pageRootDir, 'index.html'),
            path.join(pageRootDir, 'favicon.ico'),
          ],
          to: distDir,
        },
        { // copy css
          from: `${cssDir}/**/*.css`,
          to: cssDistDir,
        },
        { // copy papers
          from: `${papersDir}/**/*.pdf`,
          to: papersDistDir,
        },
      ],
      watch: true,
    }),
  ],
}