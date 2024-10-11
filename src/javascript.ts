import { configs } from '@eslint/js';
import { browser, node } from 'globals';

import type { Config, Files, Globals, Ignores, LanguageOptions, SourceType } from './types';

type Options = {
  name: string;

  files: Files;

  ignores?: Ignores;

  globals?: Globals;

  sourceType?: SourceType;
};

export function javascript({ name, files, ignores, globals, sourceType }: Options): Config {
  const languageOptions: LanguageOptions = {
    ecmaVersion: 'latest',

    sourceType: sourceType,
  };

  switch (globals) {
    case 'browser': {
      languageOptions.globals = browser;

      break;
    }
    case 'node': {
      languageOptions.globals = node;

      break;
    }
  }

  return {
    name,

    files,

    ignores,

    languageOptions,

    rules: configs.recommended.rules,
  };
}
