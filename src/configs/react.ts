import plugin from 'eslint-plugin-react';

import { Config } from '../types';

export type Options = {
  jsxRuntime?: boolean;

  version?: string;
};

export function react({ jsxRuntime = true, version = 'detect' }: Options): Array<Config> {
  const { flat: configs } = plugin.configs;

  const result: Array<Config> = [
    {
      ...(configs.recommended as Omit<Config, 'name'>),

      settings: {
        react: {
          version,
        },
      },

      name: 'react/recommended',
    },
  ];

  if (jsxRuntime) {
    result.push({
      ...(configs['jsx-runtime'] as Omit<Config, 'name'>),

      name: 'react/jsx-runtime',
    });
  }

  return result;
}
