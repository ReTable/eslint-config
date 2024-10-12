import javascriptPlugin from '@eslint/js';

import { Config } from '~/types';

export const javascript: Config = {
  name: 'javascript/recommended',

  rules: javascriptPlugin.configs.recommended.rules,
};
