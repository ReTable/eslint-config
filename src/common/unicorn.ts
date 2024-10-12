import plugin from 'eslint-plugin-unicorn';

import type { Config } from '~/types';

export const unicorn: Config = {
  name: 'unicorn',

  plugins: {
    unicorn: plugin,
  },

  rules: plugin.configs.recommended.rules,
};
