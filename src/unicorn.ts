import unicornPlugin from 'eslint-plugin-unicorn';

import { Config } from './types';

export const unicorn: Config = {
  name: 'unicorn',

  plugins: {
    unicorn: unicornPlugin,
  },

  rules: unicornPlugin.configs.recommended.rules,
};
