import javascriptPlugin from '@eslint/js';

import { typescript as prettier } from '~/common/prettier';
import { unicorn } from '~/common/unicorn';
import { user } from '~/common/user';
import { buildConfigs, mergeGlobals } from '~/helpers';
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

type Options = {
  name: string;

  files: Files;

  ignores?: Ignores;

  globals?: Array<Globals>;

  ecmaVersion?: ECMAVersion;

  sourceType?: SourceType;

  rules?: Rules;
};

export function typescript({
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
      name: 'javascript/recommended',

      rules: javascriptPlugin.configs.recommended.rules,
    },
    unicorn,
    user(rules),
    prettier,
  ]);
}
