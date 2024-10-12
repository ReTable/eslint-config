import plugin from 'eslint-plugin-react-hooks';

import { Config } from '~/types';

export const reactHooksConfig: Config = {
  name: 'react-hooks',

  plugins: {
    'react-hooks': plugin,
  },

  rules: plugin.configs.recommended.rules,
};
