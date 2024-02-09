import path from 'node:path';

import { context } from 'esbuild';

import { buildOptions } from '../esbuild/config';

(async () => {
  try {
    const ctx = await context(buildOptions);

    const { host, port } = await ctx.serve({
      host: 'localhost',
      servedir: path.join(__dirname, '..', '..', '..'),
    });
    console.info(`Serving on http://${host}:${port}`);
  } catch (error) {
    console.error(error);
  }
})();