import plugin from '@eslint/js';

import { defineConfig } from '../helpers';
import { NamedConfig } from '../types';

export function eslint(): Array<NamedConfig> {
  return defineConfig('eslint', [
    {
      name: 'recommended',

      rules: plugin.configs.recommended.rules,
    },
  ]);
}
