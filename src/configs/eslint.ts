import plugin from '@eslint/js';

import { defineConfig } from '../helpers';
import { NamedConfig } from '../types';

export function eslint(): NamedConfig[] {
  return defineConfig('eslint', [
    {
      name: 'recommended',

      rules: plugin.configs.recommended.rules,
    },
    {
      name: 'rules',

      rules: {
        'no-console': 'warn',
      },
    },
  ]);
}
