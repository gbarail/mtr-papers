import { context } from 'esbuild';

import { buildOptions } from '../esbuild/config';

(async () => {
  try {
    const ctx = await context(buildOptions);
    await ctx.watch();
  } catch (error) {
    console.error(error);
  }
})();