import plugin from 'eslint-plugin-react';

import { language } from '~/common/language';

import type { Config, Plugin, Rules } from '~/types';

type Options = {
  jsxRuntime?: boolean;

  globals?: boolean;
};

export function reactConfigs({ globals, jsxRuntime }: Options): Array<Config> {
  const { ['jsx-runtime']: jsxRuntimeConfig, recommended: recommendedConfig } = plugin.configs.flat;

  const configs: Array<Config> = [
    language({
      globals: globals ? ['browser'] : undefined,
      parserOptions: recommendedConfig.languageOptions.parserOptions,
    }),
    {
      name: 'react/recommended',

      plugins: {
        react: plugin as Plugin,
      },

      settings: {
        react: {
          version: 'detect',
        },
      },

      rules: recommendedConfig.rules as Rules,
    },
  ];

  if (jsxRuntime) {
    configs.push({
      name: 'react/jsx-runtime',

      rules: jsxRuntimeConfig.rules as Rules,
    });
  }

  return configs;
}
