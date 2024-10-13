import plugin from 'eslint-plugin-react-hooks';

import { Config } from '../types';

export function reactHooks(): Array<Config> {
  return [
    {
      name: 'react-hooks/recommended',

      plugins: {
        'react-hooks': plugin,
      },

      rules: plugin.configs.recommended.rules,
    },
  ];
}
