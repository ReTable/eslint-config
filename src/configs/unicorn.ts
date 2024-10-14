import plugin from 'eslint-plugin-unicorn';

import { defineConfig } from '../helpers';
import { NamedConfig } from '../types';

export function unicorn(): Array<NamedConfig> {
  return defineConfig('unicorn', [
    {
      ...plugin.configs['flat/recommended'],

      name: 'recommended',
    },
    {
      name: 'rules',

      rules: {
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-null': 'off',
        'unicorn/prefer-global-this': 'off',
        'unicorn/prevent-abbreviations': 'off',

        'unicorn/custom-error-definition': 'error',
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              camelCase: true,
              pascalCase: true,
            },
          },
        ],
      },
    },
  ]);
}
