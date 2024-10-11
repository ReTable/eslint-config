import { configs as javascriptConfigs } from '@eslint/js';

import { mergeGlobals } from './helpers';
import {
  Config,
  type ECMAVersion,
  type Files,
  type Globals,
  type Ignores,
  LanguageOptions,
  type Rules,
  type SourceType,
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

export function typescript({
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
    languageOptions.globals = mergeGlobals(userGlobals);
  }

  return {
    name,

    files,

    ignores,

    languageOptions,

    rules: {
      ...javascriptConfigs.recommended.rules,

      ...rules,
    },
  };
}
