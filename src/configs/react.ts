import plugin from 'eslint-plugin-react';

import { Config, NamedConfig } from '../types';
import { ns } from './helpers';

export type Options = {
  jsxRuntime?: boolean;

  version?: string;
};

export function react({ jsxRuntime = true, version = 'detect' }: Options = {}): Array<NamedConfig> {
  const { flat: configs } = plugin.configs;

  const result: Array<NamedConfig> = [
    {
      ...(configs.recommended as Config),

      settings: {
        react: {
          version,
        },
      },

      name: 'recommended',
    },
  ];

  if (jsxRuntime) {
    result.push({
      ...(configs['jsx-runtime'] as Config),

      name: 'jsx-runtime',
    });
  }

  return ns('react', result);
}
