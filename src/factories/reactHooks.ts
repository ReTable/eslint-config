import plugin from 'eslint-plugin-react-hooks';

import { buildConfigs } from '../helpers';
import type { Config, Files, Ignores } from '../types';

type Options = {
  name?: string;

  files: Files;

  ignores?: Ignores;
};

export function reactHooks({ files, ignores, name }: Options): Array<Config> {
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
