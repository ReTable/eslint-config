import plugin from 'eslint-plugin-react-hooks';

import { buildConfigs } from '../helpers';
import { Config, FactoryOptions } from '../types';

export function reactHooks(options: FactoryOptions): Array<Config> {
  return buildConfigs(options, [
    {
      name: 'react-hooks/recommended',

      plugins: {
        'react-hooks': plugin,
      },

      rules: plugin.configs.recommended.rules,
    },
  ]);
}
