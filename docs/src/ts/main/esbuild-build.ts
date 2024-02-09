import { build } from 'esbuild';

import { buildOptions } from '../esbuild/config';

(async () => {
  try {
    await build(buildOptions);
  } catch (error) {
    console.error(error);
  }
})();