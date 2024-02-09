import { context } from 'esbuild';

import { buildOptions, distDir } from '../esbuild/config';

(async () => {
  try {
    const ctx = await context(buildOptions);
    const { host, port } = await ctx.serve({
      host: 'localhost',
      servedir: distDir,
    });
    console.info(`Serving on http://${host}:${port}`);
  } catch (error) {
    console.error(error);
  }
})();