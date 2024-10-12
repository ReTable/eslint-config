import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { Config } from '~/types';

export const reactHooksConfig: Config = {
  name: 'react-hooks',

  plugins: {
    'react-hooks': reactHooksPlugin,
  },

  rules: reactHooksPlugin.configs.recommended.rules,
};
