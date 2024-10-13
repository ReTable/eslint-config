import type { Config } from '../types';
import plugin from 'eslint-plugin-unicorn';

export const unicorn: Config = {
  name: 'unicorn/recommended',

  plugins: {
    unicorn: plugin,
  },

  rules: plugin.configs.recommended.rules,
};
