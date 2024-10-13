import plugin from 'eslint-plugin-react-hooks';

import { buildConfigs } from '../helpers';
import { Config, FactoryOptions } from '../types';

export function reactHooks({ files, ignores, name }: FactoryOptions): Array<Config> {
  return buildConfigs({ name, files, ignores }, [
    {
      name: 'react-hooks',

      plugins: {
        'react-hooks': plugin,
      },

      rules: plugin.configs.recommended.rules,
    },
  ]);
}
