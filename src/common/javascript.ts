import plugin from '@eslint/js';

import { Config } from '~/types';

export const javascript: Config = {
  name: 'javascript/recommended',

  rules: plugin.configs.recommended.rules,
};
