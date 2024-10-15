import plugin from 'eslint-plugin-react-hooks';

import { defineConfig } from '../helpers';
import { NamedConfig } from '../types';

export function reactHooks(): NamedConfig[] {
  return defineConfig('react-hooks', [
    {
      plugins: {
        'react-hooks': plugin,
      },

      rules: plugin.configs.recommended.rules,
    },
  ]);
}
