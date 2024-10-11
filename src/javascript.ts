import javascriptPlugin from '@eslint/js';
import unicornPlugin from 'eslint-plugin-unicorn';

import { buildConfigs, mergeGlobals } from './helpers';
import { javascript as prettierRules } from './prettier';
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
}: Options): Config[] {
  const languageOptions: LanguageOptions = {
    ecmaVersion,

    sourceType,
  };

  if (userGlobals != null) {
    languageOptions.globals = mergeGlobals(userGlobals);
  }

  return buildConfigs({ name, files, ignores }, [
    {
      name: 'language',

      languageOptions,
    },
    {
      name: 'recommended',

      rules: javascriptPlugin.configs.recommended.rules,
    },
    {
      name: 'unicorn',

      plugins: {
        unicorn: unicornPlugin,
      },

      rules: unicornPlugin.configs.recommended.rules,
    },
    {
      name: 'user-rules',

      rules,
    },
    {
      name: 'prettier',

      rules: prettierRules,
    },
  ]);
}
