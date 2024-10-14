import plugin from '@vitest/eslint-plugin';

import { defineConfig } from '../helpers';
import { NamedConfig } from '../types';

export function vitest(): Array<NamedConfig> {
  return defineConfig('vitest', [
    {
      ...plugin.configs.recommended,

      name: 'recommended',
    },
  ]);
}
