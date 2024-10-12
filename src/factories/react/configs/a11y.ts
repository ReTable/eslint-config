import plugin from 'eslint-plugin-jsx-a11y';

import { Config } from '~/types';

export const a11yConfig: Config = {
  name: 'a11y',

  plugins: {
    'jsx-a11y': plugin,
  },

  rules: plugin.flatConfigs.strict.rules,
};
