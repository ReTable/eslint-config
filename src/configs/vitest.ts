import plugin from '@vitest/eslint-plugin';

import { Config } from '../types';

export function vitest(): Array<Config> {
  return [
    {
      ...plugin.configs.recommended,

      name: 'vitest/recommended',
    },
  ];
}
