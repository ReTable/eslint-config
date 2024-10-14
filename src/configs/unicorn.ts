import plugin from 'eslint-plugin-unicorn';

import { NamedConfig } from '../types';
import { ns } from './helpers';

export function unicorn(): Array<NamedConfig> {
  return ns('unicorn', [
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
