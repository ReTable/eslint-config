import plugin from '@eslint/js';

import { Config } from '~/types';

export const eslint: Config = {
  name: 'eslint/recommended',

  rules: plugin.configs.recommended.rules,
};
