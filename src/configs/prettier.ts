import config from 'eslint-config-prettier';

import { Config } from '../types';

export function prettier(): Array<Config> {
  return [
    {
      ...config,

      name: 'prettier,',
    },
  ];
}
