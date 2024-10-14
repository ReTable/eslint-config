import plugin from 'eslint-plugin-react-hooks';

import { NamedConfig } from '../types';
import { ns } from './helpers';

export function reactHooks(): Array<NamedConfig> {
  return ns('react-hooks', [
    {
      plugins: {
        'react-hooks': plugin,
      },

      rules: plugin.configs.recommended.rules,
    },
  ]);
}
