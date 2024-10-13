import plugin from 'eslint-plugin-unicorn';

import type { Config } from '~/types';

export const unicorn: Config = {
  name: 'unicorn/recommended',

  plugins: {
    unicorn: plugin,
  },

  rules: plugin.configs.recommended.rules,
};
