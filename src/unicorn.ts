import unicornPlugin from 'eslint-plugin-unicorn';

import type { Config } from '~/types';

export const unicorn: Config = {
  name: 'unicorn',

  plugins: {
    unicorn: unicornPlugin,
  },

  rules: unicornPlugin.configs.recommended.rules,
};
