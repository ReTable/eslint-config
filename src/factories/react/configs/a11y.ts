import a11yPlugin from 'eslint-plugin-jsx-a11y';

import { Config } from '~/types';

export const a11yConfig: Config = {
  name: 'a11y',

  plugins: {
    'jsx-a11y': a11yPlugin,
  },

  rules: a11yPlugin.flatConfigs.strict.rules,
};
