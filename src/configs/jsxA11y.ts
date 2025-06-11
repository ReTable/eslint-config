import plugin from 'eslint-plugin-jsx-a11y';

import { defineConfig } from '../helpers';
import { NamedConfig } from '../types';

const { languageOptions, ...restPluginConfig } = plugin.flatConfigs.strict;

export function jsxA11y(): NamedConfig[] {
  return defineConfig('jsx-a11y', [
    {
      ...restPluginConfig,
      name: 'strict',
      // NOTE: @types/eslint-plugin-jsx-a11y uses @types/eslint, that incompatible with eslint typings
      // @ts-ignore
      languageOptions,
    },
  ]);
}
