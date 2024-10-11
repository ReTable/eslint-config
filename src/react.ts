import a11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { browser } from 'globals';

import { react as prettier } from '~/common/prettier';
import { user } from '~/common/user';
import { buildConfigs } from '~/helpers';
import type { Config, Files, Ignores, LanguageOptions, Plugin, Rules } from '~/types';

type Options = {
  name: string;

  files: Files;

  ignores?: Ignores;

  jsxRuntime?: boolean;

  globals?: boolean;

  rules?: Rules;
};

export function react({
  files,
  globals,
  ignores,
  jsxRuntime = false,
  name,
  rules,
}: Options): Config[] {
  const languageOptions: LanguageOptions = reactPlugin.configs.flat.recommended.languageOptions;

  if (globals) {
    languageOptions.globals = browser;
  }

  return buildConfigs({ name, files, ignores }, [
    {
      name: 'language',

      languageOptions,
    },
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

      rules: reactPlugin.configs.flat.recommended.rules as Rules,
    },
    jsxRuntime && {
      name: 'jsx-runtime',

      rules: reactPlugin.configs.flat['jsx-runtime'].rules as Rules,
    },
    {
      name: 'react-hooks',

      plugins: {
        'react-hooks': reactHooksPlugin,
      },

      rules: reactHooksPlugin.configs.recommended.rules,
    },
    {
      name: 'a11y',

      plugins: {
        'jsx-a11y': a11yPlugin,
      },

      rules: a11yPlugin.flatConfigs.strict.rules,
    },
    user(rules),
    prettier,
  ]);
}
