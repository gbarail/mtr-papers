import path from 'node:path';

import { type BuildOptions } from 'esbuild';

export const tsRootDir = path.join(__dirname, '..');
export const jsDistDir = path.join(__dirname, '../../../dist/js');

export const buildOptions: BuildOptions = {
  entryPoints: [
    path.join(tsRootDir, 'index.tsx'),
  ],
  outfile: path.join(jsDistDir, 'index.js'),

  bundle: true,
}