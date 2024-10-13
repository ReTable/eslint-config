import plugin from '@eslint/js';

import { Config } from '../types';

export function eslint(): Array<Config> {
  return [
    {
      name: 'eslint/recommended',

      rules: plugin.configs.recommended.rules,
    },
  ];
}
