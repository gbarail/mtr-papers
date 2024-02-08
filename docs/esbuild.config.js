import path from 'node:path';

import esbuild from 'esbuild';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

/** @type { import('esbuild').BuildOptions } */
const buildOptions = {
  entryPoints: [
    path.join(__dirname, 'src/ts/index.tsx')
  ],
  outfile: path.join(__dirname, 'dist/js/index.js'),

  bundle: true,
}

await esbuild.build(buildOptions);