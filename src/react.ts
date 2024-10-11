import a11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { browser } from 'globals';

import { react as prettierRules } from './prettier';
import type { Config, Files, Ignores, LanguageOptions, Plugin, Rules } from './types';

type Options = {
  name: string;

  files: Files;

  ignores?: Ignores;

  jsxRuntime?: boolean;

  globals?: boolean;

  rules?: Rules;
};

export function react({ files, globals, ignores, jsxRuntime, name, rules }: Options): Config {
  const languageOptions: LanguageOptions = reactPlugin.configs.flat.recommended.languageOptions;

  if (globals) {
    languageOptions.globals = browser;
  }

  const allRules: Rules = Object.assign({}, reactPlugin.configs.flat.recommended.rules as Rules);

  if (jsxRuntime) {
    Object.assign(allRules, reactPlugin.configs.flat['jsx-runtime'].rules);
  }

  Object.assign(
    allRules,
    reactHooksPlugin.configs.recommended.rules,
    a11yPlugin.flatConfigs.strict.rules,
    rules,
    prettierRules,
  );

  return {
    name,

    files,

    ignores,

    languageOptions,

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: {
      'jsx-a11y': a11yPlugin,
      react: reactPlugin as Plugin,
      'react-hooks': reactHooksPlugin,
    },

    rules,
  };
}
