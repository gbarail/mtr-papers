import { build } from 'esbuild';

import { buildOptions } from '../esbuild/config';
import prebuild from '../esbuild/prebuild';

(async () => {
  try {
    prebuild();

    await build(buildOptions);
  } catch (error) {
    console.error(error);
  }
})();