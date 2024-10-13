import plugin from 'eslint-plugin-unicorn';

import { Config } from '../types';

export function unicorn(): Array<Config> {
  return [
    {
      ...plugin.configs['flat/recommended'],

      name: 'unicorn/recommended',
    },
    {
      name: 'unicorn/rules',

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
  ];
}
