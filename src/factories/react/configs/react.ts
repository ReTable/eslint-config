import reactPlugin from 'eslint-plugin-react';

import { language } from '~/common/language';
import type { Config, Plugin, Rules } from '~/types';

type Options = {
  jsxRuntime?: boolean;

  globals?: boolean;
};

export function reactConfigs({ globals, jsxRuntime }: Options): Array<Config> {
  const { ['jsx-runtime']: jsxRuntimeConfig, recommended: recommendedConfig } =
    reactPlugin.configs.flat;

  const configs: Array<Config> = [
    language({
      globals: globals ? ['browser'] : undefined,
      parserOptions: recommendedConfig.languageOptions.parserOptions,
    }),
    {
      name: 'react',

      plugins: {
        react: reactPlugin as Plugin,
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
      name: 'jsx-runtime',

      rules: jsxRuntimeConfig.rules as Rules,
    });
  }

  return configs;
}
