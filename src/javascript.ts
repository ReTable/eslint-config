import { configs } from '@eslint/js';
import globals from 'globals';

import type {
  Config,
  ECMAVersion,
  Files,
  Globals,
  Ignores,
  LanguageOptions,
  Rules,
  SourceType,
} from './types';

type Options = {
  name: string;

  files: Files;

  ignores?: Ignores;

  globals?: Globals[];

  ecmaVersion?: ECMAVersion;

  sourceType?: SourceType;

  rules?: Rules;
};

export function javascript({
  ecmaVersion,
  files,
  globals: userGlobals,
  ignores,
  name,
  rules,
  sourceType,
}: Options): Config {
  const languageOptions: LanguageOptions = {
    ecmaVersion,

    sourceType,
  };

  if (userGlobals != null) {
    languageOptions.globals = {};

    for (const nsOrConfig of userGlobals) {
      const target = typeof nsOrConfig === 'string' ? globals[nsOrConfig] : nsOrConfig;

      languageOptions.globals = Object.assign(languageOptions.globals, target);
    }
  }

  return {
    name,

    files,

    ignores,

    languageOptions,

    rules: {
      ...configs.recommended.rules,

      ...rules,
    },
  };
}
