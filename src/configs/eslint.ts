import plugin from '@eslint/js';

import { NamedConfig } from '../types';
import { ns } from './helpers';

export function eslint(): Array<NamedConfig> {
  return ns('eslint', [
    {
      name: 'recommended',

      rules: plugin.configs.recommended.rules,
    },
  ]);
}
