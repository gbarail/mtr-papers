import { context } from 'esbuild';

import { buildOptions } from '../esbuild/config';

(async () => {
  const ctx = await context(buildOptions);
  await ctx.watch();
})();