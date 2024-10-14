import plugin from '@vitest/eslint-plugin';

import { NamedConfig } from '../types';
import { ns } from './helpers';

export function vitest(): Array<NamedConfig> {
  return ns('vitest', [
    {
      ...plugin.configs.recommended,

      name: 'recommended',
    },
  ]);
}
