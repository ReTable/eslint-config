import javascriptPlugin from '@eslint/js';

import { buildConfigs, mergeGlobals } from '~/helpers';
import { javascript as prettier } from '~/prettier';
import type {
  Config,
  ECMAVersion,
  Files,
  Globals,
  Ignores,
  LanguageOptions,
  Rules,
  SourceType,
} from '~/types';
import { unicorn } from '~/unicorn';

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
    unicorn,
    {
      name: 'user-rules',

      rules,
    },
    prettier,
  ]);
}
